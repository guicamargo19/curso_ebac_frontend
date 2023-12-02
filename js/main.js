$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000');

    $("form").on('submit', function(event) {
        event.preventDefault();

        $('#sucesso').hide();
        
        $("form").validate({
            rules: {
                nome: {
                    required: true,
                },
                email: {
                    required: false,
                    email: true,
                },
                telefone: {
                    required: true,
                },
                usuario: {
                    required: true,
                },
                senha: {
                    required: true,
                },
                senha2: {
                    required: true,
                    equalTo: '#senha',
                },
                checkbox: {
                    required: true,
                },
                
            },
            messages: {
                nome: 'Por favor, digite seu nome',
                telefone: 'Por favor, digite seu telefone',
                usuario: 'Por favor, digite um usuário',
                senha: 'Por favor, digite uma senha',
                senha2: 'Por favor, a senha deve ser igual',
                checkbox: 'Por favor, marque este campo',
            },
        
            submitHandler: function() {
                $('#sucesso').show();
                $('#nome').val('');
                $('#email').val('');
                $('#telefone').val('');
                $('#usuario').val(''); 
                $('#senha').val('');
                $('#senha2').val('');
            }
        })
    })

});


