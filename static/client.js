document.addEventListener("DOMContentLoaded", function() {
    var chartData = {
        memory: 0,  // Initial memory usage value (replace with your initial value)
        cpu: 0,     // Initial CPU usage value (replace with your initial value)
        disk: 0,    // Initial disk usage value (replace with your initial value)
    };

    var chart = null;

    function createOrUpdateChart() {
        var ctx = document.getElementById('resourceChart').getContext('2d');

        if (chart) {
            chart.destroy();
        }

        chart = new Chart(ctx, {
            type: 'bar',  // Use a bar chart for static data
            data: {
                labels: ['Memory Usage', 'CPU Usage', 'Disk Usage'],
                datasets: [
                    {
                        label: 'Resource Usage',
                        data: [chartData.memory, chartData.cpu, chartData.disk],
                        backgroundColor: ['blue', 'green', 'red'],
                    },
                ],
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        suggestedMin: 0,
                        suggestedMax: 100,
                    },
                },
            },
        });
    }

    function updateResourceInformation() {
        // Simulate resource data update (replace with your data retrieval logic)
        chartData.memory = getRandomValue(0, 100);
        chartData.cpu = getRandomValue(0, 100);
        chartData.disk = getRandomValue(0, 100);

        createOrUpdateChart();
    }

    function getRandomValue(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    $(document).ready(function () {
        createOrUpdateChart();
        setInterval(updateResourceInformation, 5000);
    });
});
