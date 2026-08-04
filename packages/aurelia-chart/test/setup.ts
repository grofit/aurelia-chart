import { BrowserPlatform } from '@aurelia/platform-browser';
import { onFixtureCreated, setPlatform, type IFixture } from '@aurelia/testing';
import { afterEach, beforeAll } from 'vitest';

function bootstrapTestEnvironment() {
  const platform = new BrowserPlatform(window);
  setPlatform(platform);
  BrowserPlatform.set(globalThis, platform);
}

const fixtures: IFixture<object>[] = [];

beforeAll(() => {
  bootstrapTestEnvironment();
  onFixtureCreated(fixture => { fixtures.push(fixture); });
});

afterEach(async () => {
  for (const fixture of fixtures) {
    try {
      await fixture.stop(true);
    } catch {
      // The test may have already stopped the fixture explicitly.
    }
  }
  fixtures.length = 0;
});
