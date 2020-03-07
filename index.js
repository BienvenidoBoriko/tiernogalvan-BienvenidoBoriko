document.addEventListener("readystatechange", cargarEventos, false);

function cargarEventos(evento) {
    if(document.readyState=="interactive"){
        $(function() {
            $('.toggleNav').on('click', function() {
                $('.page-header .flex-nav').toggleClass('open');
            });
        });

        let fecha= new Date();
        document.getElementById('anyo').innerText=fecha.getFullYear();
    }
}
