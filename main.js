$(document).ready(function(){
  $('.slide-container').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll:4,
    
  });
});

fetch(
  "https://raw.githubusercontent.com/luhneumann/recruiting-test/main/data/products.json"
)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((element) => {
      console.log(element.product-description)

      
      
    });
  })




