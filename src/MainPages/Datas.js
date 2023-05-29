const data = {
    labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUNE', 'JULY', 'AUG', 'SEPT', 'OCT', 'NOV' , 'DEC'],
    datasets: [
        {
            label: 'Sales',
            data: [20000, 19009, 3000, 15000, 20000, 32000, 20000, 10000, 12000, 1050, 10388,10185],
            backgroundColor: [
                "rgba(54, 162, 235, 0.5)", "violet", "green", "yellow", "orange", "red"]
        },
    ],
};
const options = {
    scales: {
        y: {
            beginAtZero: true,
        },
    },
};

export { data, options };