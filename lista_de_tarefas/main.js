$(document).ready(function() {
    
    $('form').on('submit', function(event) {
        event.preventDefault();

        const tarefa = $('#tarefa').val();
        const novaTarefa = $(`<li style='display: none'><a>${tarefa}</a></li>`);
        $(novaTarefa).appendTo("ul");
        $(novaTarefa).fadeIn();
        $('#tarefa').val('');
    });
});

$(document).ready(function() {
    $('.link').on('click', 'li', function() {
        $(this).toggleClass('tarefaRiscada');
    });
});