import { tasksSettled } from '@aurelia/runtime';
import { createFixture } from '@aurelia/testing';
import type { ChartConfiguration, ChartData } from 'chart.js';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { ChartAttribute } from '../src/attributes/chart-attribute';
import { ChartElement } from '../src/elements/chart-element';

type FakeChart = {
  config: ChartConfiguration;
  destroy: ReturnType<typeof vi.fn>;
  resize: ReturnType<typeof vi.fn>;
  update: ReturnType<typeof vi.fn>;
};

const chartMock = vi.hoisted(() => ({
  instances: [] as FakeChart[],
}));

vi.mock('chart.js', () => ({
  Chart: class {
    static register = vi.fn();

    readonly options = {};
    readonly destroy = vi.fn();
    readonly resize = vi.fn();
    readonly update = vi.fn();

    constructor(_canvas: HTMLCanvasElement, readonly config: ChartConfiguration) {
      chartMock.instances.push(this as unknown as FakeChart);
    }
  },
}));

class TestHost {
  chartResource?: ChartElement | ChartAttribute;
  data: ChartData = createData(1);
  shouldUpdate = true;
  throttle = 0;
}

function createData(value: number): ChartData {
  return {
    labels: ['One'],
    datasets: [{ label: 'Initial', data: [value] }],
  };
}

const resources = [
  {
    name: 'chart element',
    template: '<chart component.ref="chartResource" type="line" data.bind="data" should-update.bind="shouldUpdate" throttle.bind="throttle"></chart><input value.bind="data.datasets[0].data[0]">',
    dependency: ChartElement,
  },
  {
    name: 'chart attribute',
    template: '<canvas chart.ref="chartResource" chart="type: line; data.bind: data; should-update.bind: shouldUpdate; throttle.bind: throttle"></canvas><input value.bind="data.datasets[0].data[0]">',
    dependency: ChartAttribute,
  },
] as const;

describe.each(resources)('$name deep observation', ({ template, dependency }) => {
  beforeEach(() => {
    chartMock.instances.length = 0;
  });

  it('refreshes for nested property and array mutations', async () => {
    const fixture = createFixture(template, TestHost, [dependency]);
    await fixture.started;
    const chart = chartMock.instances[0];
    expect(fixture.component.chartResource?.shouldUpdate).toBe(true);
    expect(fixture.component.chartResource?.throttle).toBe(0);
    expect(fixture.component.chartResource?.data).toBe(fixture.component.data);
    chart.update.mockClear();
    chart.resize.mockClear();

    fixture.component.data.datasets[0].label = 'Updated';
    await tasksSettled();
    expect(chart.update).toHaveBeenCalledTimes(1);
    expect(chart.resize).toHaveBeenCalledTimes(1);

    chart.update.mockClear();
    chart.resize.mockClear();
    fixture.component.data.datasets.push({ label: 'New', data: [3] });
    await tasksSettled();
    expect(chart.update).toHaveBeenCalledTimes(1);

    chart.update.mockClear();
    fixture.component.data.datasets[1].label = 'Added';
    await tasksSettled();
    expect(chart.update).toHaveBeenCalledTimes(1);

    chart.update.mockClear();
    fixture.type('input', '4');
    await tasksSettled();
    expect(chart.update).toHaveBeenCalledTimes(1);
  });

  it('refreshes and observes the replacement data object', async () => {
    const fixture = createFixture(template, TestHost, [dependency]);
    await fixture.started;
    const chart = chartMock.instances[0];
    chart.update.mockClear();

    fixture.component.data = createData(5);
    await tasksSettled();
    expect(chart.update).toHaveBeenCalledTimes(1);
    expect(chart.config.data).toBe(fixture.component.data);

    chart.update.mockClear();
    fixture.component.data.datasets[0].label = 'Replacement';
    await tasksSettled();
    expect(chart.update).toHaveBeenCalledTimes(1);
  });

  it('does not refresh nested mutations when should-update is false', async () => {
    const fixture = createFixture(template, class extends TestHost {
      shouldUpdate = false;
    }, [dependency]);
    await fixture.started;
    const chart = chartMock.instances[0];
    chart.update.mockClear();

    fixture.component.data.datasets[0].label = 'Ignored';
    await tasksSettled();
    expect(chart.update).not.toHaveBeenCalled();
  });

  it('coalesces updates and cancels a pending refresh during teardown', async () => {
    const fixture = createFixture(template, class extends TestHost {
      throttle = 20;
    }, [dependency]);
    await fixture.started;
    const chart = chartMock.instances[0];
    chart.update.mockClear();

    fixture.component.data.datasets[0].label = 'First';
    fixture.component.data.datasets[0].label = 'Second';
    await tasksSettled();
    expect(chart.update).not.toHaveBeenCalled();

    await new Promise(resolve => setTimeout(resolve, 30));
    expect(chart.update).toHaveBeenCalledTimes(1);

    chart.update.mockClear();
    fixture.component.data.datasets[0].label = 'Pending';
    await tasksSettled();
    await fixture.stop(true);
    await new Promise(resolve => setTimeout(resolve, 30));
    expect(chart.update).not.toHaveBeenCalled();
    expect(chart.destroy).toHaveBeenCalledTimes(1);
  });
});
