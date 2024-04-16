$(document).ready(function () {
    // habilitar todos los tooltip de bootstrap
    $('[data-bs-toggle="tooltip"]').tooltip()
    // requerimiento 4: Utilizando los selectores de etiqueta 
    // capturar el evento`dblclick` 
    $("h3").dblclick(function () {
    // modificar el color del texto de los títulos
    // "INGREDIENTES" y "PREPARACIÓN" a color rojo
        $(this).css({
          "color": "red"
        })
    })

    // requerimitneo 5: usar el método toggle desaparcer/aparecer
    // el contenido en todas las tarjetas
    $(".card-title").click(function () {
	// esto debe suceder cuando el usuario haga un clic 
	// sobre el título de cualquiera de las tres tarjetas.
	$(this).next().toggle("slow")
    
})



})

// Evento: cuando se completo la transición de cambio de diapositiva...
document.querySelector('#my-carousel').addEventListener('slide.bs.carousel', event => {
    document.querySelectorAll(".indicador").forEach(element => {
      element.classList.toggle("active");
    })
  })


  