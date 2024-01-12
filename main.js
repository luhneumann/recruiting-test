
function cloneSection(){
  var modelSection = $('.products-view');
  var newSection = modelSection.clone(true);
  var newSectionId = 'slide-section-2'
  newSection.attr('id', newSectionId);

  $('body').append(newSection)

}

cloneSection()



 


 




