$(function(){
   $("filter").click(function() {
     $(this).addClass("active").sibilings().removeClass("active");
     let  valor =$(this).attr("data-nombre");
     if(valor=== "todos"){
$(".cont-work").show("1000");
     }else{
$(".cont-work").not("."+valor).hide("1000");
$(".cont-work").filter("."+valor).show("1000");
     }
   });
   let equipo=$("#enlace-equipo").offset().top,
    servicio=$("#enlace-servicio").offset().top,
    trabajo=$("#enlace-trabajo").offset().top,
    contacto=$("#enlace-contacto").offset().top;

    window.addEventListener("resize",funtion(){
let equipo=$("#enlace-equipo").offset().top,
servicio=$("#enlace-servicio").offset().top,
    trabajo=$("#enlace-trabajo").offset().top,
    contacto=$("#enlace-contacto").offset().top;

    }
});