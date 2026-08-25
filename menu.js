(function () {
    const menus = document.querySelectorAll('.nav-menu');

    function syncMenuState() {
        menus.forEach(function (menu) {
            menu.open = window.innerWidth > 700;
        });
    }

    syncMenuState();
    window.addEventListener('resize', syncMenuState);
})();