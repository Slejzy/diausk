
// Hamburger menu
const hamburgerBtn = document.getElementById('hamburger-btn');
const navMenu = document.getElementById('nav-menu');

if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Zatvaranje menija klikom na link
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    // Zatvaranje menija klikom van menija
    document.addEventListener('click', (e) => {
        if (!e.target.closest('nav') && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
        }
    });
}
        
// script.js - Dodajte ove funkcionalnosti
document.addEventListener('DOMContentLoaded', function() {
    // Animacija grafikona
    const charts = document.querySelectorAll('.chart-bar');
    charts.forEach(chart => {
        chart.style.setProperty('--percentage', '0%');
        setTimeout(() => {
            chart.style.setProperty('--percentage', chart.dataset.percentage);
        }, 500);
    });

    // Tooltip za mapu
    const mapAreas = document.querySelectorAll('.map-area');
    const tooltip = document.querySelector('.map-tooltip');
    
    mapAreas.forEach(area => {
        area.addEventListener('mouseover', function(e) {
            const country = this.dataset.country;
            const cases = this.dataset.cases;
            tooltip.innerHTML = `<strong>${country}</strong><br>${cases} slučajeva`;
            tooltip.style.display = 'block';
            tooltip.style.left = e.pageX + 10 + 'px';
            tooltip.style.top = e.pageY + 10 + 'px';
        });
        
        area.addEventListener('mouseout', function() {
            tooltip.style.display = 'none';
        });
    });
});