
var sc = 150;
function applyCSS(){

  $('.container').css('transform', 'translate3d('+
  ((-((event.pageX - ($(window).width()/2))*0.2)-100)+
  (-((event.pageY - ($(window).height()/2))*0.2))*0.3)+
  'px,' +
  (-((event.pageY - ($(window).height()/2))*0.2)+
  ((-((event.pageX - ($(window).width()/2))*0.2)-100)*0.3) + sc)+
  'px,0px)');
  //$('.container-origin').css('transform', 'rotate(0) translate3d(100px,'+ sc +'px,0px)');
}


$( document ).on( "mousemove", function( event ) {
 applyCSS();
});

//var window.parallaxH = (event.pageY - ($(window).height()/2))*0.03;

$(window).on('mousewheel', function(event) {
    if(event.deltaY > 0){
      if(sc < 150)
        sc = sc + 25;
    }else{
      //if(sc > -2000)
      sc = sc - 25;
    }
    applyCSS();
    console.log(sc);
});


//$('.card').on('click', function() {
//    $('.containertext').toggleClass('container-origin');
//    applyCSS();
//});
