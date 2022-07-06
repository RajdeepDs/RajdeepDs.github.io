const toggle = document.getElementById('nav-toggle');
const sidebar = document.getElementById('primary-navigation');
document.onclick = function (e) {
    if (e.target.id !== 'primary-navigation' && e.target.id !== 'nav-toggle') {
        toggle.classList.remove('active');
        sidebar.classList.remove('active');
    }
}
toggle.onclick = function () {
    toggle.classList.toggle('active');
    sidebar.classList.toggle('active');
}