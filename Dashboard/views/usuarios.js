// views/usuarios.js

window.inicializarUsuarios = function () {
    const table = document.querySelector('main table');
    
    // Modal Eliminar
    const modalDelete = document.getElementById('modal-delete');
    const userNameSpan = document.getElementById('delete-user-name');
    const btnCancelDelete = document.getElementById('btn-cancel-delete');
    const btnConfirmDelete = document.getElementById('btn-confirm-delete');

    // Modal Añadir Alumno / NFC
    const modalAdd = document.getElementById('modal-add-user');
    const btnOpenAddModal = document.getElementById('btn-open-add-modal');
    const btnCancelAdd = document.getElementById('btn-cancel-add');
    const closeBtnAdd = document.querySelector('.close-btn-add');
    const formAddUser = document.getElementById('form-add-user');

    // Modal Ver Información / NFC Vinculado
    const modalView = document.getElementById('modal-view-user');
    const closeBtnView = document.querySelector('.close-btn-view');
    const btnCloseView = document.getElementById('btn-close-view');
    const viewNombres = document.getElementById('view-nombres');
    const viewApellidos = document.getElementById('view-apellidos');
    const viewCurso = document.getElementById('view-curso');

    if (!table) return;

    let filaAEliminar = null;

    // 1. Delegación de eventos en la tabla
    table.addEventListener('click', (event) => {
        const deleteBtn = event.target.closest('.delete-user');
        const editBtn = event.target.closest('.edit-user');

        // Acción: Abrir modal de eliminación
        if (deleteBtn) {
            filaAEliminar = deleteBtn.closest('tr');
            const nombre = filaAEliminar.children[1]?.textContent.trim() || "este usuario";
            if (userNameSpan) userNameSpan.textContent = nombre;
            
            modalDelete?.classList.add('active');
        }

        // Acción: Abrir modal de información (Engranaje)
        if (editBtn) {
            const fila = editBtn.closest('tr');
            const nombres = fila.children[1]?.textContent.trim() || "";
            const apellidos = fila.children[2]?.textContent.trim() || "";
            const curso = fila.children[3]?.textContent.trim() || "";

            // Cargar datos en los inputs del modal de consulta
            if (viewNombres) viewNombres.value = nombres;
            if (viewApellidos) viewApellidos.value = apellidos;
            if (viewCurso) viewCurso.value = curso;

            modalView?.classList.add('active');
        }
    });

    // 2. Controles Modal Eliminar
    const cerrarModalDelete = () => {
        modalDelete?.classList.remove('active');
        filaAEliminar = null;
    };

    btnConfirmDelete?.addEventListener('click', () => {
        if (filaAEliminar) filaAEliminar.remove();
        cerrarModalDelete();
    });

    btnCancelDelete?.addEventListener('click', cerrarModalDelete);

    // 3. Controles Modal Añadir Alumno
    const abrirModalAdd = () => modalAdd?.classList.add('active');
    const cerrarModalAdd = () => {
        modalAdd?.classList.remove('active');
        formAddUser?.reset();
    };

    btnOpenAddModal?.addEventListener('click', abrirModalAdd);
    btnCancelAdd?.addEventListener('click', cerrarModalAdd);
    closeBtnAdd?.addEventListener('click', cerrarModalAdd);

    // Guardar nuevo alumno
    formAddUser?.addEventListener('submit', (e) => {
        e.preventDefault();

        const nombres = document.getElementById('add-nombres')?.value.trim();
        const apellidos = document.getElementById('add-apellidos')?.value.trim();
        const curso = document.getElementById('add-curso')?.value;

        if (nombres && apellidos && curso) {
            const tbody = table.querySelector('tbody');
            const newRow = document.createElement('tr');
            const defaultImg = "../assets/images/4bb2bb45bd21bb55053cebbd672b85f2 (1).jpg";

            newRow.innerHTML = `
                <td><img src="${defaultImg}" alt="Foto de ${nombres}" /></td>
                <td>${nombres}</td>
                <td>${apellidos}</td>
                <td>${curso}</td>
                <td>
                    <button class="delete-user"><i class="bi bi-trash3-fill"></i></button>
                    <button class="edit-user"><i class="bi bi-gear-fill"></i></button>
                </td>
            `;

            tbody?.appendChild(newRow);
            cerrarModalAdd();
        }
    });

    // 4. Controles Modal Ver Información (Tarjeta Vinculada)
    const cerrarModalView = () => modalView?.classList.remove('active');
    closeBtnView?.addEventListener('click', cerrarModalView);
    btnCloseView?.addEventListener('click', cerrarModalView);

    // 5. Cerrar al hacer clic en el fondo oscuro de cualquier modal
    window.addEventListener('click', (e) => {
        if (e.target === modalDelete) cerrarModalDelete();
        if (e.target === modalAdd) cerrarModalAdd();
        if (e.target === modalView) cerrarModalView();
    });
};