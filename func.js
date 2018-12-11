function applyCSS(){
  $('.containertext').css('transform', 'rotateX(30deg) rotateZ(-30deg) rotateY(10deg) translate3d(-100px,'+ sc +'px,0px)');
  $('.container-origin').css('transform', 'rotate(0) translate3d(0px,'+ sc +'px,0px)');
}
var sc = 150;

$(window).on('mousewheel', function(event) {
    if(event.deltaY > 0){
      if(sc < 150)
        sc = sc + 100;
    }else{
      //if(sc > -2000)
      sc = sc - 100;
    }
    applyCSS();
    console.log(sc);
});



$('.card').on('click', function() {
    $('.containertext').toggleClass('container-origin');
    applyCSS();
})
