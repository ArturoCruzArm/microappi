document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('visitorCount')) {
        let count = parseInt(localStorage.getItem('visitorCount'));
        count++;
        localStorage.setItem('visitorCount', count);
        document.getElementById('visitor-count').textContent = count;
    } else {
        localStorage.setItem('visitorCount', 1);
        document.getElementById('visitor-count').textContent = 1;
    }
});