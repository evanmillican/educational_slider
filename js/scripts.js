$(document).ready(function(){

  var scene = document.getElementById('scene');
  var parallaxInstance = new Parallax(scene);


  jQuery("#responsive_headline").fitText(1.2);


  $("#flip").click(function(){
      $("#panel").slideDown("slow");
  });



});
