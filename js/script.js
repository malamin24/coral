

  $(document).ready(function(){
    $(".nav_bar").click(function(){
      $('.menu_reponsive').animate({
        "left": "-5%",
      });
    });
    $(".close").click(function(){
      $('.menu_reponsive').animate({
        "left": "-125%",
      }); 
    });
  
  });


  $(document).ready(function(){
    $(".tshirt").click(function(){
      $('.t_shirt') .show(300)
      $('.hoddies') .hide(300)
      $('.jacket') .hide(300)
    });

   
      $(".Hoodiess").click(function(){
        $('.hoddies') .show(300)
        $('.t_shirt') .hide(300)
        $('.jacket') .hide(300)
      });
     
    
      $(".Jackets").click(function(){
        $('.jacket') .show(300)
        $('.t_shirt') .hide(300)
        $('.hoddies') .hide(300)
         });


         $(".all_product").click(function(){
          $('.jacket') .show(300)
          $('.t_shirt') .show(300)
          $('.hoddies') .show(300)
           });
  });

  $(document).ready(function(){
    $(".tshirt2").click(function(){
      $('.t_shirt2') .show(300)
      $('.hoddies2') .hide(300)
      $('.jacket2') .hide(300)
    });

   
      $(".Hoodiess2").click(function(){
        $('.hoddies2') .show(300)
        $('.t_shirt2') .hide(300)
        $('.jacket2') .hide(300)
      });
     
    
      $(".Jackets2").click(function(){
        $('.jacket2') .show(300)
        $('.t_shirt2') .hide(300)
        $('.hoddies2') .hide(300)
         });


         $(".all_product2").click(function(){
          $('.jacket2') .show(300)
          $('.t_shirt2') .show(300)
          $('.hoddies2') .show(300)
           });
  });


  $(document).ready(function(){
    $(".scroll_top").click(function(){
      $('.header') .show(3000)
    });

   
  });

$(document).ready(function(){
  setInterval(function () {
    moveRight('slow');}, 3000);
   

    let count = $('.slider .container .card').length;
    let fullwidth =$('.slider .container .card').width();
    let fullcontainer= fullwidth * count;
    
    $('.slider').css({ width: fullcontainer });
    $('.slider .container') .css({width:fullcontainer, marginLeft: - fullwidth})
    $('.slider .container .card:last-child').prependTo('.slider .container');

  function moveRight(){
      $('.slider .container').animate({
          left: + fullwidth
      }, 200, 
      function () {
          $('.slider .container .card:first-child').appendTo('.slider .container');
          $('container').css('left', '');
      });
    };

function moveLeft() {
  $('.slider .container').animate({
      left: - fullwidth
  }, 200, 
  function () {
      $('.slider .container .card:last-child').prependTo('.slider .container');
      $('container').css('left', '');
  });
};




$('.preview').click(function () {
  moveRight();
});
$('.next').click(function () {
  moveLeft();
});


});





















