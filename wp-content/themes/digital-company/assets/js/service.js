const ctx = document.getElementById('lineChart');
new Chart(ctx, {
    type: 'line',
    data: {
    labels: ['4 Juli', '5 Juli', '6 Juli', '7 Juli', '8 Juli', '9 Juli'],
    datasets: [{
        label: 'Users',
        data: [12, 19, 3, 5, 2, 3],
        fill: true,
        borderColor: '#F18825',
        backgroundColor: 'rgba(241, 136, 37, 0.45)',
        tension: 0.1
    }]
    },
    options: {
    scales: {
        y: {
        beginAtZero: true
        }
    }
    }
});