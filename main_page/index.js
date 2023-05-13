document.querySelector(".content").style.display="none";
$(document).ready(function() {
  let hide= document.querySelector(".loading-page")
  var counter = 0;
  var c = 0;
  var i = setInterval(function(){
      $(".loading-page .counter h1").html(c + "%");
      $(".loading-page .counter hr").css("width", c + "%");
      //$(".loading-page .counter").css("background", "linear-gradient(to right, #f60d54 "+ c + "%,#0d0d0d "+ c + "%)");

    /*
    $(".loading-page .counter h1.color").css("width", c + "%");
    */
    counter++;
    c++;
      
    if(counter == 101) {
        clearInterval(i);
        hide.classList.toggle("loader_hidden");
        document.body.removeChild(document.querySelector(".loading"));
        document.querySelector(".content").style.display="block";


        hide.addEventListener("transitionend",()=>{

        });
    }
  }, 50);
});












let sec2=document.querySelector(".sec2");
let sec4=document.querySelector(".sec4");
let sec7=document.querySelector(".sec7");
let Sec2_Products= 
[
  {
    title:"Security cameras | Starting 250 EGP",
    Image:"https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Consumer_Electronics/XCM_Manual_1446398_4835988_379x304_1X._SY304_CB631345942_.jpg",
    num:1
  },
  {
    title:"Men's Clothes | Up to 70%",
    Image:"https://images-eu.ssl-images-amazon.com/images/G/42/SL/August/XCM_Manual_1464389_4986660_379x304_1X._SY304_CB609528233_.jpg",
    num:1
  },
  {
    title:"Headphones | Below 650 EGP",
    Image:"https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Consumer_Electronics/XCM_Manual_1454862_4881441_379x304_1X._SY304_CB630947473_.jpg",
    num:1
  }, 
   {
    title:"Kitchen essentials | Up to 15% off",
    Image:"https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/OHL/Gateway/XCM_Manual_1466738_4981387_379x304_1X._SY304_CB609258982_.jpg",
    num:1
  },
  {
    title:"Tops on deal | Wide Selection ",
    image1:"https://images-eu.ssl-images-amazon.com/images/G/42/SL/May23/xcm_banners_men-s-shirts_186x116_eg-en._SY116_CB591239739_.jpg",
    title1:"Men's Shirts",
    image2:"https://images-eu.ssl-images-amazon.com/images/G/42/SL/May23/xcm_banners_women-s-shirts_186x116_eg-en._SY116_CB591239875_.jpg",
    title2:"Women's Shirts",
    image3:"https://images-eu.ssl-images-amazon.com/images/G/42/SL/May23/xcm_banners_men-s-t-shirts_186x116_eg-en._SY116_CB591239883_.jpg",
    title3:"Mens's T-Shirts",
    image4:"https://images-eu.ssl-images-amazon.com/images/G/42/SL/May23/xcm_banners_women-s-t-shirts_186x116_eg-en._SY116_CB591239873_.jpg",
    title4:"Women's T-Shirts",
    num:4
   },
  {
    title:"Support Egyptian products | High quality local products",
    Image:"https://images-eu.ssl-images-amazon.com/images/G/42/3P/XCM_Manual_1478853_EG_GW_DC_3P_LocalStore_16b9c3af-3cbb-473e-bdac-1f5968191ddc_x1._SY304_CB607312444_.jpg" ,
    num:1
  },
  {
    title:"Enjoy free in-game offers and games with Amazon Prime",
    Image:"https://images-eu.ssl-images-amazon.com/images/G/42/prime/damisi/prime_eg_launch_/xcm_banners_primegaming_desktop_categorycard_379x304_758x608_eg-en._SY304_CB622128285_.jpg",
    num:1
  },
  {
    title:"Tops on deal | Wide Selection ",
    image1:"https://images-eu.ssl-images-amazon.com/images/G/42/SL/Yasmin/May23/xcm_banners_men-s-sportswear_186x116_eg-en._SY116_CB589515586_.jpg",
    title1:"Men's Sportswear",
    image2:"https://images-eu.ssl-images-amazon.com/images/G/42/SL/Yasmin/May23/xcm_banners_women-s-sportswear_186x116_eg-en._SY116_CB589515612_.jpg",
    title2:"Women's Sportswear",
    image3:"https://images-eu.ssl-images-amazon.com/images/G/42/SL/Yasmin/May23/xcm_banners_men-s-shoes_186x116_eg-en._SY116_CB589515604_.jpg",
    title3:"Men's  Shose",
    image4:"https://images-eu.ssl-images-amazon.com/images/G/42/SL/Yasmin/May23/xcm_banners_women-s-shoes_186x116_eg-en._SY116_CB589515609_.jpg",
    title4:"Women's  Shose",
    num:4
   }

];
let sec4_products=[
  {
    title:"New arrivals | Jewelry & accessories",
    Image:"https://images-eu.ssl-images-amazon.com/images/G/42/SL/DEC/GW/XCM_Manual_1396328_4379574_Egypt_EG_BAU_GW_DC_SL_Jewelry_379x304_1X._SY304_CB650636675_.jpg",
    num:1,
  },
  {
    title:"Personal Care | Up to 40% off",
    Image:"https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2021/img/Consumables/XCM_Manual_1346198_1765818_Egypt_1336653_SR_EG_DBSingle_PersonalCare_1x_3953512_379x304_en_AE._SY304_CB662811665_.jpg",
    num:1,
  },
  {
    title:"Electric Shavers | Up to 40% off",
    Image:"https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2021/img/Consumables/XCM_Manual_1346198_1765821_Egypt_1336653_SR_EG_DBSingle_ElectricShavers_1x_3953523_379x304_en_AE._SY304_CB663690853_.jpg",
    num:1,
  },
  {
    title:"Cookware & Kitchen essentials",
    image1:"https://images-eu.ssl-images-amazon.com/images/G/42/ohl/BAU/XCM_Manual_ORIGIN_1396324_4393333_Egypt_EG_OHL_QC_1_Kitchen_186x116_1X._SY116_CB650727264_.jpg",
    title1:"Cookware",
    image2:"https://images-eu.ssl-images-amazon.com/images/G/42/ohl/BAU/XCM_Manual_ORIGIN_1396324_4393323_Egypt_EG_OHL_QC_4_Kitchen_186x116_1X._SY116_CB650727264_.jpg",
    title2:"Utensils",
    image3:"https://images-eu.ssl-images-amazon.com/images/G/42/ohl/BAU/XCM_Manual_ORIGIN_1396324_4393324_Egypt_EG_OHL_QC_3_Kitchen_186x116_1X._SY116_CB650727264_.jpg",
    title3:"Storage & Containers",
    image4:"https://images-eu.ssl-images-amazon.com/images/G/42/ohl/BAU/XCM_Manual_ORIGIN_1396324_4393318_Egypt_EG_OHL_QC_2_Kitchen_186x116_1X._SY116_CB650727264_.jpg",
    title4:"Water filters",
    num:4
  }
  
]
let sec7_products=[
  {
    title:"Toys & games | Below 200 EGP",
    Image:"https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/OHL/Gateway/XCM_Manual_1466755_4982783_379x304_1X._SY304_CB609289554_.jpg",
    num:1,
  },
  {
    title:"Explore our wide selection of Laptops",
    Image:"https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Consumer_Electronics/XCM_Manual_1467579_4993638_379x304_1X._SY304_CB609791102_.jpg",
    num:1,
  },
  {
    title:"Musical Instruments | Wide selection",
    Image:"https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2023/img/Musical_Instruments/XCM_Manual_1533480_5305769_379x304_1X._SY304_CB616236518_.jpg",
    num:1
  },
  {
    title:"New arrivals | Bags & Wallets",
    Image:"https://images-eu.ssl-images-amazon.com/images/G/42/SL/DEC/GW/XCM_Manual_1396328_4379575_Egypt_EG_BAU_GW_DC_SL_Bags_Wallets_379x304_1X._SY304_CB650636675_.jpg",
    num:1,
  },
]
function addSec(products,sec) {
  let sec2div="";
  products.forEach(prod=>{
  if(prod.num==1){
  sec2div+=`
  <div class="col">
  <div class="card">
      <div class="card-body">
        <h5 class="card-title">${prod.title}</h5>
        <img src="${prod.Image}" class="card-img-top mb-3" alt="Sunset Over the Sea"/>
        <a href="#" class="card-link">see more</a>
      </div>
    </div>
    </div>
  `;
  }
  else if(prod.num==4){
    sec2div+=`
    <div class="col">
    <div class="card p-4">
      <h5 class="card-title">${prod.title}</h5>
      <div class="d-flex w-100 justify-content-between mb-2 fourh_img">
        <div class="me-2">
          <a href="">
          <img src="${prod.image1}" alt="">
          <p>${prod.title1}</p>
        </a>
        </div>
        <div>
          <a href="">
          <img src="${prod.image2}" alt="">
          <p>${prod.title2} </p>
          </a>
        </div>
      </div>
      <div class="d-flex w-100 justify-content-between mb-2 fourh_img">
        <div class="me-2">
          <a href="">
          <img src="${prod.image3}" alt="">
          <p>${prod.title3}</p>
        </a>
        </div>
        <div>
          <a href="">
          <img src="${prod.image4}" alt="">
          <p>${prod.title4}</p>
        </a>
        </div>
      </div>
      <a href="#" class="card-link ">see more</a>
    </div>
  </div>
  </div>
    `;
  }
});
 sec.innerHTML=sec2div;
}
addSec(Sec2_Products,sec2);
addSec(sec4_products,sec4);
addSec(sec7_products,sec7);
const sec3=document.querySelector(".scrol");
let sec3div="";
const sec3_products=[
  {
    img:"https://m.media-amazon.com/images/I/31snTAy3TyL._AC_SY200_.jpg",
    title:"Save on Silver Crest Air Fryers",
    discound:11

  },
  {
    img:"https://m.media-amazon.com/images/I/41uZuT3oqML._AC_SY200_.jpg",
    title:"JBL & Harman Kardon",
    discound:37

  },
  {
    img:"https://m.media-amazon.com/images/I/21ZVK+XQaML._AC_UF226,226_FMjpg_.jpg",
    title:"Save on AMERICAN EAGLE Men Apparel",
    discound:50

  },
  {
    img:"https://m.media-amazon.com/images/I/51JGadXnSYL._AC_UF226,226_FMjpg_.jpg",
    title:"Adidas Bags",
    discound:30

  },
  {
    img:"https://m.media-amazon.com/images/I/31F+6lNlWIL._AC_SY200_.jpg",
    title:"Adidas Shoes",
    discound:30

  },
  {
    img:"https://m.media-amazon.com/images/I/31YtAoER7wL._AC_SY200_.jpg",
    title:"Black and decker Kattles",
    discound:31

  },
  {
    img:"https://m.media-amazon.com/images/I/51ihZIdJE+L._AC_SY200_.jpg",
    title:"Save on Huggies Diapers",
    discound:19

  },
  {
    img:"https://m.media-amazon.com/images/I/41PDEAuwT3L._AC_UF226,226_FMjpg_.jpg",
    title:"Casio Calculators",
    discound:31

  }
]
function addsec3() {
  sec3_products.forEach(prod=>{
    sec3div+=`
    <div class="card mx-2 col-lg-3 col-md-3 col-sm-3">
    <div class="card_img ">
    <a href="phones/phones.html" class="d-flex ">
    <img src="${prod.img}" class="card-img-top w-auto h-auto " alt="Sunset Over the Sea"/></a></div>
    <div class="card-body">
      <p class="card-text"><span>Up to ${prod.discound}% off</span> Deal</p>
      <p class=" mt-2 pb-2">${prod.title} </p>
    </div>
  </div>
    `;
  })
  sec3.innerHTML=sec3div;
}
addsec3();




let sec5=document.querySelector(".sec5 .scrol");
let sec6=document.querySelector(".sec6 .scrol");
let sec5_product=[
 {
   img:"https://m.media-amazon.com/images/I/51n9ybxk6mL._AC_SY200_.jpg",
 },
 {
  img:"https://m.media-amazon.com/images/I/71fTE1ORVxS._AC_SY200_.jpg"
 },
 {
  img:"https://m.media-amazon.com/images/I/618M+44O1yL._AC_SY200_.jpg"
 },
 {
  img:"https://m.media-amazon.com/images/I/51ZwFQODbwL._AC_SY200_.jpg"
 },
 {
  img:"https://m.media-amazon.com/images/I/51se6xZVPNL._AC_SY200_.jpg"
 },
 {
  img:"https://m.media-amazon.com/images/I/51LoZ89onxL._AC_SY200_.jpg"
 },
 {
  img:"https://m.media-amazon.com/images/I/51ZwFQODbwL._AC_SY200_.jpg"
 },
 {
  img:"https://m.media-amazon.com/images/I/71fTE1ORVxS._AC_SY200_.jpg"
 }

]
let sec6_product=[
  {
    img:"https://m.media-amazon.com/images/I/41OzfmPCR1L._AC_SY200_.jpg"
  },
  {
    img:"https://m.media-amazon.com/images/I/51QidO0sY7L._AC_SY200_.jpg"
  },
  {
    img:"https://m.media-amazon.com/images/I/51BqiWHDkvL._AC_SY200_.jpg"
  },
  {
    img:"https://m.media-amazon.com/images/I/51dS8rFpCHL._AC_SY200_.jpg"
  },
  {
    img:"https://m.media-amazon.com/images/I/51s1nqLUTkL._AC_SY200_.jpg"
  },
  {
    img:"https://m.media-amazon.com/images/I/51Gq-RIsKBL._AC_SY200_.jpg"
  },
  {
    img:"https://m.media-amazon.com/images/I/51K-N0BvByL._AC_SY200_.jpg"
  },
  {
    img:"https://m.media-amazon.com/images/I/61vrzbNcHYL._AC_SY200_.jpg"
  },
]
add_scroll_img_sec(sec5_product,sec5);
add_scroll_img_sec(sec6_product,sec6);

function add_scroll_img_sec(list,sec){
  let div="";
  list.forEach(prod=>{
    div+=`
    <div class="shadow-0 sec5_img"> 
       <img src="${prod.img}" alt="">
     </div>
    `;
  })
  sec.innerHTML=div;
}


























function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}



















const products = ['phones','laptops','clothes','shose','HeadPhones','kitchen','cameres','Games','Appliances'];

function autocomplete(input, list) {
    //Add an event listener to compare the input value with all countries
    input.addEventListener('input', function () {
        //Close the existing list if it is open
        closeList();

        //If the input is empty, exit the function
        if (!this.value)
            return;

        //Create a suggestions <div> and add it to the element containing the input field
        suggestions = document.createElement('div');
        suggestions.setAttribute('id', 'suggestions');
        this.parentNode.appendChild(suggestions);
        let text="";
        //Iterate through all entries in the list and find matches
        for (let i=0; i<list.length; i++) {
            if (list[i].toUpperCase().includes(this.value.toUpperCase())) {
                //If a match is foundm create a suggestion <div> and add it to the suggestions <div>
                suggestion = document.createElement('div');
                text=`
                 <a href="phones.html">${list[i]}</a>
                `;
                suggestion.innerHTML = text;
                suggestions.appendChild(suggestion);
            }
        }

    });

    function closeList() {
        let suggestions = document.getElementById('suggestions');
        if (suggestions)
            suggestions.parentNode.removeChild(suggestions);
    }
}
autocomplete(document.getElementById('input'), products);


const backtop=document.querySelector(".top")
backtop.addEventListener('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});















