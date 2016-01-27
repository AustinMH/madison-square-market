var main = function() {
  
  /*Click Event Handlers*/
  $('.cart').click(function() {
    $('.cart .dropdown-menu').toggle();
    $('.account .dropdown-menu').hide();
    $('.help .dropdown-menu').hide();
  });
  
  $('.account').click(function() {
    $('.account .dropdown-menu').toggle();
    $('.cart .dropdown-menu').hide();
    $('.help .dropdown-menu').hide();
  });
  
  $('.help').click(function() {
    $('.help .dropdown-menu').toggle();
    $('.account .dropdown-menu').hide();
    $('.cart .dropdown-menu').hide();
  });
  
};

$(document).ready(main);