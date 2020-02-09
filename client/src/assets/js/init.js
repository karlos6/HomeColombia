  $(document).ready(function(){
    $('.carousel').carousel({
      duration:400,
      indicators:true
    });
  });
  autoplay();
function autoplay() {
    $('.carousel').carousel('next');
    setTimeout(autoplay, 10000);
}