document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
  M.AutoInit();
});

document.addEventListener('DOMContentLoaded', function() { 
  var elems = document.querySelectorAll('.slider');
  var instances = M.Slider.init(elems); 
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.dropdown-trigger');
  var instances = M.Dropdown.init(elems);
});

function initMaterializeSelect(){
  // select
  var elems = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elems, {});  
}


