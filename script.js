


var ctx = document.getElementById('myChart').getContext('2d');


var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels:
         ['Python', 'Git & GitHub', 'JavaScript', 'Node.js', 'Bootstrap', 'CSS'],
        datasets: [{
            label: '# of Votes',
            data: [7, 8, 7.5, 5, 6, 4],
            backgroundColor: 
            [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 2
        }]
    },
    options: {
        events: ['mousemove']
        // scales: {
        //     yAxes: [{
        //         ticks: {
        //             beginAtZero: true
        //         }
        //     }]
        // }
    }
});
