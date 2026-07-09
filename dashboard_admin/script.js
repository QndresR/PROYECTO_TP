document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.sidebar');
    const openSidebar = document.querySelector('.open-sidebar');
    const closeBtn = document.querySelector('.close-sidebar');
    const openBtn = document.querySelector('.button-open-sidebar');

    // Al hacer clic en la "X", oculta la sidebar y muestra el botón de apertura
    closeBtn.addEventListener('click', () => {
        sidebar.classList.add('sidebar-switch');
        openSidebar.classList.remove('sidebar-switch');
    });

    // Al hacer clic en el botón, muestra la sidebar y oculta el botón de apertura
    openBtn.addEventListener('click', () => {
        sidebar.classList.remove('sidebar-switch');
        openSidebar.classList.add('sidebar-switch');
    });
});