$(document).ready(function(){
  $('.slide-container').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll:4,
    
  });
});

fetch(
  "/data/products.json"
)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((element) => {
      console.log("===========")
      console.table(element)
      console.log("===========")

      $('.slider-container').slick("slickAdd",
      <div class="card">
        <div class="like"></div>
      </div>)
      
    });
  })




