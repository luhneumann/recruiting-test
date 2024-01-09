$(document).ready(function(){
  $('.slide-container').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll:4,
    prevArrow: $('.pre-btn'),
    nextArrow: $('.pos-btn'),   
    draggable: false 
  });
});

fetch(
  "https://raw.githubusercontent.com/luhneumann/recruiting-test/main/data/products.json"
)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((element) => {
      console.log(element.description)
      console.log(element.oldPrice)
      console.log(element.image)      
      $(".slide-container").slick(
        "slickAdd",
      `  
        <div class="card">            
          <div class="card-image">
            <img class="product-image" src="${element.image}" alt=""/>
          </div>
          <div class="card-info">
            <div class="product-description">
              <span>${element.description}</span>
            </div>
            <del class="old-price"><span>${element.oldPrice}</span></del>            
            <span class="sale-price">${element.salePrice}</span>            
            <span class="payment-condition">${element.payment}</span>
            <div class="card-btn-container">
              <button class="card-btn">Comprar</button>
            </div>                
          </div>   
        </div>         
        `    
      );        
      
    });
  })

 




