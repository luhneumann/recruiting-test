
function cloneSection(){
  var modelSection = $('#model-slide-section');
  var newSection = modelSection.clone(true);
  var newSectionId = 'slide-section-2'
  newSection.attr('id', newSectionId);

  $('body').append(newSection)

}

cloneSection()

/*$(document).ready(function(){
  $('#model-slide-section').clone().appendTo('#slide-section-2')
})*/

 


 




