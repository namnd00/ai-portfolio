// Initialize Skills Radar Chart
document.addEventListener('DOMContentLoaded', function() {
    const skillsRadarChart = document.getElementById('skillsRadarChart');
    
    if (skillsRadarChart) {
        const chart = new Chart(skillsRadarChart, {
            type: 'radar',
            data: {
                labels: [
                    'Deep Learning',
                    'NLP',
                    'Computer Vision',
                    'MLOps',
                    'Team Leadership',
                    'Generative AI'
                ],
                datasets: [{
                    label: 'Skill Level',
                    data: [90, 95, 88, 85, 80, 85],
                    fill: true,
                    backgroundColor: 'rgba(26, 188, 156, 0.2)',
                    borderColor: 'rgba(26, 188, 156, 1)',
                    pointBackgroundColor: 'rgba(26, 188, 156, 1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(26, 188, 156, 1)'
                }]
            },
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
                        },
                        grid: {
                            color: 'rgba(0, 0, 0, 0.1)'
                        },
                        pointLabels: {
                            font: {
                                size: 14,
                                family: "'Inter', sans-serif",
                                weight: 'bold'
                            }
                        }
                    }
                },
                plugins: {
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `Skill Level: ${context.raw}/100`;
                            }
                        }
                    },
                    legend: {
                        display: false
                    }
                },
                animation: {
                    duration: 2000,
                    easing: 'easeOutQuart'
                }
            }
        });
        
        // Animate the chart when it comes into view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    chart.reset();
                    chart.update();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(skillsRadarChart);
    }
}); 