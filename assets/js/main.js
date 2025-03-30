// Skills Radar Chart
function initSkillsChart() {
    const ctx = document.getElementById('skillsRadarChart');
    
    if (!ctx) return;
    
    const skillsData = {
        labels: [
            'AI Development',
            'Generative AI',
            'MLOps',
            'Leadership',
            'Software Engineering',
            'Research'
        ],
        datasets: [{
            label: 'Skill Level',
            data: [90, 85, 90, 85, 80, 75],
            fill: true,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgb(75, 192, 192)',
            pointBackgroundColor: 'rgb(75, 192, 192)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(75, 192, 192)'
        }]
    };
    
    const config = {
        type: 'radar',
        data: skillsData,
        options: {
            elements: {
                line: {
                    borderWidth: 3
                }
            },
            scales: {
                r: {
                    angleLines: {
                        display: true,
                        color: 'rgba(0, 0, 0, 0.1)'
                    },
                    suggestedMin: 0,
                    suggestedMax: 100,
                    ticks: {
                        stepSize: 20,
                        backdropColor: 'transparent'
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    };
    
    new Chart(ctx, config);
}

// Initialize all components
document.addEventListener('DOMContentLoaded', function() {
    // Initialize existing components
    // ... existing initialization code ...
    
    // Initialize skills chart
    initSkillsChart();
}); 