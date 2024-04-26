document.getElementById('about-link').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('about').classList.add('slide-in-content');
    document.getElementById('about').style.display = 'block';
});

document.getElementById('home-link').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('about').style.display = 'none';
});