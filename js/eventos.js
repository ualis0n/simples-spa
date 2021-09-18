const BTN_CADASTRAR = document.getElementById('btn-cadastrar');
const BTN_LISTAR = document.getElementById('btn-listar');
const BTN_CADASTRAR = document.getElementsByClassName('section-cadastrar');
const BTN_LISTAR = document.getElementById('section-listar')

BTN_LISTAR.addEventListener('click', function (){
  SECTION_CADASTRO.style.display = 'none';
  SECTION_LISTAR.style.display = 'block';
});

BTN_CADASTRAR.addEventListener('click', function () {
  SECTION_LISTAR.style.display = 'none';
  SECTION_CADASTRO.style.display = 'block';
});
