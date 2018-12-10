function applyCSS(){
  $('.container').css('transform', 'rotateX(30deg) rotateZ(-30deg) rotateY(10deg) translate3d(0px,'+ sc +'px,0px)');
  $('.container-origin').css('transform', 'rotate(0) translate3d(0px,'+ sc +'px,0px)');
}

var sc = 0;

$(window).on('mousewheel', function(event) {
    if(event.deltaY > 0){
      if(sc < 0)
        sc = sc + 100;
    }else{
      //if(sc > -2000)
      sc = sc - 100;
    }
    applyCSS();
    console.log(sc);
});



$('.card').on('click', function() {
    $('.container').toggleClass('container-origin');
    applyCSS();
})
