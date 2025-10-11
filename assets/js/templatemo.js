/*

TemplateMo 559 Zay Shop

https://templatemo.com/tm-559-zay-shop

*/

'use strict';
$(document).ready(function () {

  // Accordion
  // Se comenta este código para evitar conflictos con el componente Collapse de Bootstrap 5
  // var all_panels = $('.templatemo-accordion > li > ul').hide();

  // $('.templatemo-accordion > li > a').click(function() {
  //     console.log('Hello world!');
  //     var target =  $(this).next();
  //     if(!target.hasClass('active')){
  //         all_panels.removeClass('active').slideUp();
  //         target.addClass('active').slideDown();
  //     }
  //   return false;
  // });
  // End accordion

  // Product detail
  $('.product-links-wap a').click(function (e) {
    e.preventDefault();
    var $this = $(this);
    var mediaType = $this.data('type');
    var viewer = $('#product-viewer');

    viewer.empty(); // Limpiar el contenedor

    if (mediaType === 'video') {
      var videoSrc = $this.data('src');
      var videoElement = $('<video class="card-img img-fluid" id="product-detail" controls autoplay muted loop></video>');
      videoElement.append($('<source>').attr('src', videoSrc).attr('type', 'video/mp4'));
      videoElement.append('Tu navegador no soporta la etiqueta de video.');
      viewer.append(videoElement);
    } else {
      var imgSrc = $this.children('img').attr('src');
      var imgElement = $('<img>').addClass('card-img img-fluid').attr('id', 'product-detail').attr('src', imgSrc);
      viewer.append(imgElement);
    }
  });

  $('#btn-minus').click(function () {
    var val = $("#var-value").html();
    val = (val == '1') ? val : val - 1;
    $("#var-value").html(val);
    $("#product-quanity").val(val);
    return false;
  });
  $('#btn-plus').click(function () {
    var val = $("#var-value").html();
    val++;
    $("#var-value").html(val);
    $("#product-quanity").val(val);
    return false;
  });
  $('.btn-size').click(function () {
    var this_val = $(this).html();
    $("#product-size").val(this_val);
    $(".btn-size").removeClass('btn-secondary');
    $(".btn-size").addClass('btn-success');
    $(this).removeClass('btn-success');
    $(this).addClass('btn-secondary');
    return false;
  });
  // End roduct detail

});
