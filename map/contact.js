const div= document.querySelector(".things");
let text="";
const data=[
    {
      img:"https://m.media-amazon.com/images/G/42/x-locale/cs/help/images/gateway/self-service/order.png",
      h6:"Your Orders",
      pb:"Track packages",
      pa:"Edit or cancel orders"
    },
    {
        img:"https://m.media-amazon.com/images/G/42/x-locale/cs/help/images/gateway/self-service/return.png",
        h6:"Returns & Refunds",
        pb:"Return or exchange items",
        pa:"Print return mailing labels"
      },
      {
        img:"https://m.media-amazon.com/images/G/42/x-locale/cs/help/images/gateway/self-service/account.png",
        h6:"Account Settings",
        pb:"Change email or password",
        pa:"Update login information"
      },
      {
        img:"https://m.media-amazon.com/images/G/42/x-locale/cs/help/images/gateway/prime/Prime_clear-bg-t3.png",
        h6:"Mange Prime",
        pb:"View your benefits",
        pa:"Membership details"
      },
      {
        img:"https://m.media-amazon.com/images/G/42/x-locale/cs/help/images/gateway/self-service/payment.png",
        h6:"Payment Settings",
        pb:"Add or edit payment methods",
        pa:""
      },
      {
        img:"https://m.media-amazon.com/images/G/42/x-locale/cs/help/images/gateway/self-service/covid19.png",
        h6:"Amazon and COVID-19",
        pb:"Impacts on orders and deliveries",
        pa:""
      },
      {
        img:"https://m.media-amazon.com/images/G/42/x-locale/cs/help/images/gateway/self-service/contact_us.png",
        h6:"Contact Us",
        pb:"Contact our customer service via",
        pa:"phone or chat"
      },
]
const mab=document.querySelector(".map");
document.addEventListener("DOMContentLoaded",()=>{
    data.forEach(item=>{
        text+=`
        <div class="col-lg-5 border me-2 mb-2 col-md-5 cursor">
        <img src="${item.img}" alt="">
        <a href="/sign/sign_in.html" class="text-black">
        <div class="ms-3">
          <h6 class="mb-1">${item.h6}</h6>
          <p class="det">${item.pb}<br>${item.pa}</p>
        </div></a>
      </div>
        `;
    })
    text+=`
    <div class="col-lg-5 border me-2 mb-2 col-md-5 cursor">
    <img src="https://www.livepepper.com/wp-content/uploads/post/google-maps-1797882_1920.png" alt="">
    <a class="text-black" onclick="map()">
    <div class="ms-3">
      <h6 class="mb-1">Our Location</h6>
      <p class="det">map</p>
    </div></a>
  </div>
    `;
    div.innerHTML=text;
})
function map(){
 mab.classList.toggle("open_map");
 myMap();
}
let close_location=document.querySelector(".close_map");
close_location.onclick=()=>{
  mab.classList.toggle("open_map");
}
const backtop=document.querySelector(".top")
backtop.addEventListener('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});
function myMap() {
  var mapProp= {
    center:new google.maps.LatLng(25.508742,30.120850),
    zoom:5,
  };
  var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
  }
