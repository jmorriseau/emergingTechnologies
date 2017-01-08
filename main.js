function showSection(section,elem){
  $('nav a').removeClass('active');
  $(elem).addClass('active');
  $('.sub-container').removeClass('show-section');
  $('#' + section).removeClass('hide-section').addClass('show-section');
}

function toggleAccordian(elem){
  $(elem).next(".accordian-body").slideToggle();
  $(elem).parent().toggleClass("expanded");
  if($(elem).parent().hasClass('expanded')){
    $(elem).children("span").removeClass("fa-plus").addClass("fa-minus");
  }
  else{
    $(elem).children("span").removeClass("fa-minus").addClass("fa-plus");
  }
}
