$(document).ready(function() {
    const $nuevaTarea = $('#nueva-tarea');
    const $listaTareas = $('#lista-tareas');

    $('#agregar-tarea').click(function() {
        const tareaTexto = $nuevaTarea.val().trim();
        if (tareaTexto) {
            agregarTarea(tareaTexto);
            $nuevaTarea.val('');
        } else {
            alert('Por favor, ingresa una misión.');
        }
    });

    $(document).on('click', '.editar-tarea', function() {
        const tareaElemento = $(this).prev('.tarea-texto');
        const nuevaTareaTexto = prompt('Edita la misión:', tareaElemento.text());
        if (nuevaTareaTexto) {
            tareaElemento.text(nuevaTareaTexto);
        }
    });

    $(document).on('click', '.eliminar-tarea', function() {
        $(this).parent().remove();
    });

    $('#limpiar-tareas').click(function() {
        $listaTareas.empty();
    });

    $nuevaTarea.on('keydown', function(event) {
        if (event.key === 'Enter') {
            $('#agregar-tarea').click();
        }
    });

    function agregarTarea(tareaTexto) {
        const tareaHTML = `
            <li>
                <span class="tarea-texto">${tareaTexto}</span>
                <button class="editar-tarea">Editar</button>
                <button class="eliminar-tarea">Eliminar</button>
            </li>`;
        $listaTareas.append(tareaHTML);
    }
});