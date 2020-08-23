/************* radioBtn ***************/
  /**const initRadioBtns = () => {
  let radios = document.querySelectorAll('.radio');
  let labels = document.querySelectorAll('.label');
  let ball = document.querySelector('.ball');
  let prevRadio, prevLabel;
  radios.forEach((radio, index) => {
    radio.addEventListener('click', function (e) {
      if (prevRadio) prevRadio.classList.toggle('active');
      if (prevLabel) prevLabel.classList.toggle('active');
      radio.classList.toggle('active');
      prevRadio = radio;
      labels[index].classList.toggle('active');
      prevLabel = labels[index];
      ball.className = `ball pos${index}`;
    });
  });
  **/
  const initRadioBtns = () => {
  let radios = document.querySelectorAll('.radio');
  let labels = document.querySelectorAll('.label');
  let ball = document.querySelector('.ball');
  let prevRadio, prevLabel;
  radios.forEach((radio, index) => {
    radio.addEventListener('click', function (e) {
      if (prevRadio) prevRadio.classList.toggle('active');
      if (prevLabel) prevLabel.classList.toggle('active');
      radio.classList.toggle('active');
      prevRadio = radio;
      labels[index].classList.toggle('active');
      prevLabel = labels[index];
      ball.className = `ball pos${index}`;
    });
  });

  // Switch main picture on click
  const ayakaBtn = document.getElementById('radio1');
  const hidePics = () => $('.main-pic img').hide()

  ayakaBtn.addEventListener('click', () => {
    hidePics();
    $('#main-picture1').show();
  });

  const mamaBtn = document.getElementById('radio2');
  mamaBtn.addEventListener('click', () => {
    hidePics();
    $('#main-picture2').show();
  });

  const fashionBtn = document.getElementById('radio3');
  fashionBtn.addEventListener('click', () => {
    hidePics();
    $('#main-picture3').show();
  });

  const snowboardBtn = document.getElementById('radio4');
  snowboardBtn.addEventListener('click', () => {
    hidePics();
    $('#main-picture4').show();
  });
};

/************* colorbox ***************/
/************* responsive humburger ***************/
const initHumberger = () => {
  $('.sp-menu').on('click', function () {
    $(this).toggleClass('active');
    $("#sp-nav").toggleClass('active');
  })
  // $('#nav a').on('click', function () {
  //    $('#nav').toggleClass('active');
  //     $(".menu").toggleClass('active');
  // })
};

window.addEventListener('DOMContentLoaded', () => {
  initHumberger();
  initColorBox();
  initRadioBtns();
});