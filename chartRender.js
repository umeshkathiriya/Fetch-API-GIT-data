// generate chart with repo created date data list.
export let repoYearList = [];

export const renderChart = (chartData)=>{
    const repoYears = [];
    chartData.forEach(item => {
        repoYears.push(item.created_at.slice(0,4));
    });
    const chartYear = repoYears.reduce((count, val)=>{
        count[val] = (count[val] || 0) + 1;
        return count;
    },{});

    const yearLabel = Object.keys(chartYear);
    repoYearList = Object.keys(chartYear);
    const countRepo = Object.values(chartYear);

    const ctx = document.querySelector('#myChart');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: yearLabel,
            datasets: [{
                label: 'Repository created over a period.',
                data: countRepo,
                backgroundColor: 'rgba(54, 162, 235)',
                borderColor: 'rgba(54, 162, 235)'
            }]
        }
    });

}
