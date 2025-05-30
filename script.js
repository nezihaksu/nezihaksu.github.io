
const ctx1 = document.getElementById('chart1').getContext('2d');
new Chart(ctx1, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [{ label: 'Accuracy', data: [89, 90, 91, 90, 92], borderColor: '#00ffcc' }]
    }
});

const ctx2 = document.getElementById('chart2').getContext('2d');
new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['A', 'B', 'C', 'D', 'E'],
        datasets: [{ label: 'Feature Dist.', data: [30, 50, 75, 40, 60], backgroundColor: '#ff6384' }]
    }
});

const ctx3 = document.getElementById('chart3').getContext('2d');
new Chart(ctx3, {
    type: 'line',
    data: {
        labels: ['T1', 'T2', 'T3', 'T4'],
        datasets: [
            { label: 'Actual', data: [100, 110, 105, 115], borderColor: 'green' },
            { label: 'Predicted', data: [98, 112, 107, 113], borderColor: 'orange' }
        ]
    }
});
