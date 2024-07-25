$(document).ready (function(){
    $('header button').click(function(){
        $('form').slideDown()
    })

    $('#botao-canc').click(function(){
        $('form').slideUp()
    })

    $('form').on('submit', function(e){
        e.preventDefault()
        const inserirTarefa = $('#inserir-tarefa').val()
        const novoItem = $('<li></li>')
        $(`
            <div class="clique-finalizado">
                <p>${inserirTarefa}</p>
            </div>
        `).appendTo(novoItem)

        $(novoItem).appendTo('ul')
        
        $('#inserir-tarefa').val('')

        $('ul').on('click', 'p', function(){
            $(this).css('text-decoration', $(this).css('text-decoration') === 'line-through' ? 'none' : 'line-through');
        });

        })

    })
