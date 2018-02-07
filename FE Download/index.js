function pomc(){
  document.querySelector('.Circle').addEventListener('click', function() {
    document.querySelector('.Circle').classList.add('ButtonTime');
    document.querySelector('.Circle').classList.remove('Circle');
    document.querySelector('.DropTitle').innerHTML = '';
    document.querySelector('.ButtonTime').innerHTML = 'Download';


  });
}
pomc();
