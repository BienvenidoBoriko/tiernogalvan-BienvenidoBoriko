document.addEventListener("readystatechange", cargarEventos, false);

function cargarEventos(evento) {
    if(document.readyState=="interactive"){
        $(function() {
            $('.toggleNav').on('click', function() {
                $('.page-header .flex-nav').toggleClass('open');
            });
        });
    }
}
