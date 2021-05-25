// Tabs

$('#myTab a').on('click', function (e) {
  e.preventDefault()
  $(this).tab('show')
})


// Form label animation

$('input').on('focusin', function() {
  $(this).parent().find('label').addClass('active');
});
 
$('input').on('focusout', function() {
  if (!this.value) {
    $(this).parent().find('label').removeClass('active');
  }
});