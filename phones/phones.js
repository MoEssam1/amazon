const sec1=document.querySelector(".section1");
fetch('ListPhones.json')
.then(res => res.json())
.then(json=>add_phones(json));
let phones="";
let chosed;
function add_phones(ListPhones) {
  ListPhones.forEach(phone=>{
        if(phone.num==1){
        phones+=`
        <div class="card col-lg-3 col-md-4 col-sm-6 col-xs-12">
        <div class="bg-image hover-overlay ripple " data-mdb-ripple-color="light">
          <img src="${phone.image}" class="img-fluid"/>
          <a href="#!">
            <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
          </a>
        </div>
        <div class="card-body ps-2">
          <a  class="link" href="detalis.html"  data-id="${phone.id}"><h5 class="card-title">${phone.title}</h5></a>
          <p><i class="fa-solid fa-star text-warning"></i> <i class="fa-solid fa-star text-warning"></i> <i class="fa-solid fa-star text-warning"></i> <i class="fa-solid fa-star text-warning"></i> <i class="fa-solid fa-star-half-stroke text-warning"></i></p>
          <p><sup>EGP</sup><span class="price h4">${phone.price_int}</span><sup>${phone.price_cent}</sup></p>
          <p class="card-text"></p>
        </div>
      </div>
        `;
        }
        else if(phone.num==2)
        {
            phones+=`
 <div class="card col-lg-3 col-md-4 col-sm-6 col-xs-12">
    <div id="${phone.id}" class="carousel slide bg-image hover-overlay ripple" data-mdb-touch="false" data-mdb-ripple-color="light">
      <div class="carousel-indicators">
        <button
          type="button"
          data-mdb-target="#${phone.id}"
          data-mdb-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-mdb-target="#${phone.id}"
          data-mdb-slide-to="1"
          aria-label="Slide 2"
        ></button>
      
      </div>
      <div class="carousel-inner h-100 bg-image hover-overlay ripple" data-mdb-ripple-color="light">
        <div class="carousel-item active">
          <img src="${phone.image}" class="d-block h-100" alt="Wild Landscape"/>
          
        </div>
        <div class="carousel-item">
          <img src="${phone.image2}" class="d-block  h-100" alt="Camera"/>
          
        </div>
       
      </div>
    </div>
    <div class="card-body ps-2 ">
      <a class="link" href="detalis.html" data-id="${phone.id}"><h5 class="card-title">${phone.title}</h5></a>
      <p><i class="fa-solid fa-star text-warning"></i> <i class="fa-solid fa-star text-warning"></i> <i class="fa-solid fa-star text-warning"></i> <i class="fa-solid fa-star text-warning"></i> <i class="fa-solid fa-star-half-stroke text-warning"></i></p>
      <p><sup>EGP</sup><span class="price h4">${phone.price_int}</span><sup>${phone.price_cent}</sup></p>
      <p class="card-text"></p>
    </div>
  </div>
            `;
        }
        else if(phone.num==3)
        {
            phones+=`
         <div class="card col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <div id="${phone.id}" class="carousel slide bg-image hover-overlay ripple" data-mdb-touch="false" data-mdb-ripple-color="light">
            <div class="carousel-indicators">
              <button
                type="button"
                data-mdb-target="#${phone.id}"
                data-mdb-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-mdb-target="#${phone.id}"
                data-mdb-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-mdb-target="#${phone.id}"
                data-mdb-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div class="carousel-inner h-100 bg-image hover-overlay ripple" data-mdb-ripple-color="light">
              <div class="carousel-item active">
                <img src="${phone.image}" class="d-block h-100" alt="Wild Landscape"/>
                
              </div>
              <div class="carousel-item">
                <img src="${phone.image2}" class="d-block h-100" alt="Camera"/>
                
              </div>
              <div class="carousel-item">
                <img src="${phone.image3}" class="d-block h-100" alt="Exotic Fruits"/>
               
              </div>
            </div>
          </div>
          <div class="card-body ps-2 " >
            <a class="link" href="detalis.html" data-id="${phone.id}"><h5 class="card-title">${phone.title}</h5></a>
            <p><i class="fa-solid fa-star text-warning"></i> <i class="fa-solid fa-star text-warning"></i> <i class="fa-solid fa-star text-warning"></i> <i class="fa-solid fa-star text-warning"></i> <i class="fa-solid fa-star-half-stroke text-warning"></i></p>
            <p><sup>EGP</sup><span class="price h4">${phone.price_int}</span><sup>${phone.price_cent}</sup></p>
            <p class="card-text"></p>
          </div>
        </div>
        `;
        }

    })
   chosed=document.getElementsByClassName("link");
   sec1.innerHTML=phones; 
   AddToCart();
}
 let det="";
function AddToCart() {
  for(let i=0;i<chosed.length;i++){
    chosed[i].onclick=()=>{
      det=chosed[i].dataset.id;
      Handle();
    }
  }
} 
function Handle() {
  localStorage.setItem("item_phone",det);
  return;
}
const backtop=document.querySelector(".top")
backtop.addEventListener('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});
