export class App
{
    constructor(){
        this.DynamicDoughnutData = {};
        this.SimpleLineData = {};

        this.resetPieData();
        this.resetLineData();
    }

    resetPieData() {
        this.DynamicDoughnutData = {
            labels: ["Red", "Green", "Yellow" ],
            datasets: [
                {
                    data: [300, 50, 100],
                    backgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ]
                }]
        };
    }

    resetLineData() {
        this.SimpleLineData = {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [
                {
                    label: "Healthy People",
                    backgroundColor: "rgba(220,220,220,0.2)",
                    borderColor: "rgba(220,220,220,1)",
                    pointColor: "rgba(220,220,220,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(220,220,220,1)",
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: "Ill People",
                    backgroundColor: "rgba(151,187,205,0.2)",
                    borderColor: "rgba(151,187,205,1)",
                    pointColor: "rgba(151,187,205,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(151,187,205,1)",
                    data: [28, 48, 40, 19, 86, 27, 90]
                }
            ]
        };
    }

    addEntry() {
        this.DynamicDoughnutData.labels.push("New Colour");
        this.DynamicDoughnutData.datasets[0].data.push(50);
        this.DynamicDoughnutData.datasets[0].backgroundColor.push("#B4FD5C");
    };

}