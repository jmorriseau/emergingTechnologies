function showSection(section,elem){
  $('nav a').removeClass('active');
  $(elem).addClass('active');
  $('.sub-container').removeClass('show-section');
  $('#' + section).removeClass('hide-section').addClass('show-section');
}
