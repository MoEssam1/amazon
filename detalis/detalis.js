let det=localStorage.getItem("item_phone");
// alert(det);
const num=document.querySelector(".num");
let number=0;
let cart_Local=window.localStorage.getItem("cart");
let cart=JSON.parse(cart_Local);
if(cart==null){
  cart=[];
}
let tr="";
const ListPhones=[
    {
      id:"p1",
      title:"Samsung Galaxy M52 5G Dual SIM, 8GB RAM, 128 GB - Black",
      image:"https://m.media-amazon.com/images/I/710MCY53huL._AC_UL320_.jpg",
      rating:3,
      price_int:11688,
      price_cent:99,
      num:3,
      image2:"https://m.media-amazon.com/images/I/713YclC+vWL._AC_SY679_.jpg",
      image3:"https://m.media-amazon.com/images/I/612o96Hxi-L._AC_SY679_.jpg",
      amount:1
    },
    {
      id:"p2",
      title:"Samsung Galaxy A23 Dual SIM BLACK 6GB RAM 128GB 4G",
      image:"https://m.media-amazon.com/images/I/61eVtJrA6xL._AC_UL320_.jpg",
      rating:3,
      price_int:6599,
      price_cent:00,
      num:1,
      amount:1
    },
    {
      id:"p3",
      title:"Samsung Galaxy A13, Dual SIM, 4GB RAM, 128GB Storage, LTE, Light Blue",
      image:"https://m.media-amazon.com/images/I/71zOaQmhBPL._AC_UL320_.jpg",
      rating:3,
      price_int:5190,
      price_cent:00,
      num:3,
      image2:"https://m.media-amazon.com/images/I/71VTy2C7lsL._AC_SX569_.jpg",
      image3:"https://m.media-amazon.com/images/I/4110p-Lv0TL._AC_SX466_.jpg",
      amount:1
    },
    {
      id:"p4",
      title:"Samsung Galaxy A04 Dual SIM - 4GB RAM, 64GB Storage, LTE, Black",
      image:"https://m.media-amazon.com/images/I/81WXo6C1wqL._AC_UL320_.jpg",
      rating:3,
      price_int:3999,
      price_cent:00,
      num:2,
      image2:"https://m.media-amazon.com/images/I/81JUZpUBL3L._AC_SX466_.jpg",
      amount:1
    },
    {
      id:"p5",
      title:"Redmi Note 12 Dual SIM, 4GB RAM, 128GB ROM, 4G LTE - Onyx Gray",
      image:"https://m.media-amazon.com/images/I/61p79A67kPL._AC_UL320_.jpg",
      rating:3,
      price_int:11560,
      price_cent:44,
      num:1,
      amount:1
    },
    {
      id:"p6",
      title:"Samsung Galaxy S23 Ultra, 256GB, 12 GB RAM, Mobile Phone, Dual SIM",
      image:"https://m.media-amazon.com/images/I/718mMPLo79L._AC_UL400_.jpg",
      rating:3,
      price_int:45490,
      price_cent:00,
      num:1,
      amount:1
    },
    {
      id:"p7",
      title:"Apple iPhone 14 Pro Max (256 GB) - Deep Purple",
      image:"https://m.media-amazon.com/images/I/71yzJoE7WlL._AC_UL400_.jpg",
      rating:3,
      price_int:57950,
      price_cent:00,
      num:1,
      image2:"https://m.media-amazon.com/images/I/710MCY53huL._AC_UL320_.jpg",
      amount:1
    },
    {
        id:"p8",
        title:"Realme C21Y, 4GB RAM, 64GB ROM - Blue",
        image:"https://m.media-amazon.com/images/I/61CeGFGTnpL._AC_UL400_.jpg",
        rating:3,
        price_int:5190,
        price_cent:00,
        num:1,
        amount:1
      },
      {
        id:"p9",
        title:"Realme 9i Dual SIM Mobile Phone, *6.6 Inch, 128GB ROM, 6GB RAM - Prism Black",
        image:"https://m.media-amazon.com/images/I/31+vI-mWXdL._AC_UL400_.jpg",
        rating:3,
        price_int:6990,
        price_cent:00,
        num:1,
        amount:1
      },
      {
        id:"p10",
        title:"Xiaomi Redmi Note 10 Pro Dual SIM, 8GB RAM, 256GB, 4G LTE - Onyx Grey",
        image:"https://m.media-amazon.com/images/I/61NCeh9qd3L._AC_UL400_.jpg",
        rating:3,
        price_int:5190,
        price_cent:00,
        num:1,
        amount:1
      },
      {
        id:"p11",
        title:"Samsung Galaxy S23 Ultra, 256GB, 12GB, 5G Mobile Phone, Dual SIM, Android Smartphone",
        image:"https://m.media-amazon.com/images/I/51mH1rGI3lL._AC_UL400_.jpg",
        rating:3,
        price_int:45490,
        price_cent:00,
        num:2,
        image2:"https://m.media-amazon.com/images/I/71q+njLKksL._AC_UF894,1000_QL80_FMwebp_.jpg",
        amount:1
      },
      {
        id:"p12",
        title:"Oppo A77S Dual SIM,128GB RAM, 8GB ROM - Blue",
        image:"https://m.media-amazon.com/images/I/61yw58HeRiL._AC_UL400_.jpg",
        rating:3,
        price_int:6599,
        price_cent:00,
        image2:"https://m.media-amazon.com/images/I/51N1pUZa7kL._AC_UF894,1000_QL80_FMwebp_.jpg",
        num:1,
        amount:1
      }
      
];
let btn_add="";
let sect=document.querySelector(".sect1");
let text="";
document.addEventListener("DOMContentLoaded",show())
function show() {

    ListPhones.forEach(phone=>{
       if(phone.id==det){
        text+=`
        <div class=" row">
        <div class="col-lg-5 div1 row col-md-5 col-sm-6">
            <div class=" d-none d-lg-block small_img col-lg-2 me-4 col-md-2 col-xl-2 ">
                <img src="${phone.image}" alt="">
                <img src="${phone.image}" alt="">
                <img src="${phone.image}" alt="">
                <img src="${phone.image}" alt="">
            </div>
            <div class="big-img col-lg-9 col-md-12 col-sm-7">
                <img src="${phone.image} " alt="">
            </div>
        </div>
        <div class="col-lg-4 mid col-md-4 col-sm-12">
          <div class="head">
            <h3>${phone.title} </h3>
            <div class="d-flex mt-2 border-bottom">
                <div class="me-2">
                    <i class="fa-solid fa-star text-warning"></i><i class="fa-solid fa-star text-warning"></i><i class="fa-solid fa-star text-warning"></i><i class="fa-regular fa-star-half-stroke text-warning"></i><i class="fa-regular fa-star text-warning"></i>
                </div>
                <p class="me-3">52 ratings</p>
                <p>45 answered quetions</p>
           </div>
           <div class="mt-4 h5 pb-3 border-bottom">
              <span><sup>EGP</sup><span class="h3">${phone.price_int}</span><sup>${phone.price_cent}</sup></span>
           </div>
           <div class="mt-4">
            <table>
                <tr>
                    <th>Brand</th>
                    <td>Samsung</td>
                </tr>
                <tr>
                    <th>Model name	</th>
                    <td>Samsung M52 Dual Sim , 5G</td>
                </tr>
                <tr>
                    <th>Wireless carrier</th>
                    <td>Unlocked</td>
                </tr>
                <tr>
                    <th>Operating system</th>
                    <td>Android 11.0</td>
                </tr>
                <tr>
                    <th>Cellular technology	</th>
                    <td>4G</td>
                </tr>
                <tr>
                    <th>Memory storage capacity	</th>
                    <td>128 GB</td>
                </tr>
                <tr>
                    <th>Connectivity technology</th>
                    <td>Bluetooth, Wi-Fi, USB</td>
                </tr>
                <tr>
                    <th>Colour</th>
                    <td>Black</td>
                </tr>
                <tr>
                    <th>Screen size	</th>
                    <td>6.5 Inches</td>
                </tr>
                <tr>
                    <th>Wireless network technology	</th>
                    <td>GSM, CDMA, LTE</td>
                </tr>
            </table>
           </div>
          </div>
          <div class="mt-4 h-25">
            <button class="btn w-75 addtoCart" style="background-color:#F0B800" > Add to Cart </button>
          </div>
        </div>
        </div>
        `;
        sect.innerHTML=text;
        btn_add=document.querySelector(".addtoCart");

       }
    })


}
let shoping_cart=document.querySelector(".cart");
let section_cart=document.querySelector(".shoing_cart_content");

let table=section_cart.querySelector(".shoping_cart_items").querySelector("table").querySelector("tbody");
let is_exist=false;
add();
btn_add.onclick=()=>{
  ListPhones.forEach(phone=>{
    if(phone.id==det){
      cart.forEach(item=>{
        if(item.id==det){
          is_exist=true;
        }
      })
      if(is_exist==false)
      {
        cart.push(phone);
        add();
      }
      else{
        alert("product alredy exist");
      }
      
    }})
}
function add() {
  tr="";
  for(let i=0;i<cart.length;i++){
    let allprice=(cart[i].price_int+(cart[i].price_cent/100))*cart[i].amount;   
    tr +=`
        <tr>
        <td><img src="${cart[i].image}" alt=""></td>
        <td>${cart[i].title}</td>
        <td>
          <form>
            <button class="increse_btn btn" onclick="act('increse','${cart[i].id}')">+</button>
            <input class="text-center" type="text" value="${cart[i].amount}">
            <button class="decrese_btn btn" onclick="act('decrese','${cart[i].id}')">-</button>
          </form>
        </td>
        <td>${cart[i].price_int}.${cart[i].price_cent}$</td>
        <td>${allprice}$</td>
        <td><button class="btn" onclick="act('delete','${cart[i].id}')">&#10005</button></td>
      </tr>
        `;
        table.innerHTML=tr;
        num.innerHTML=cart.length;
        localStorage.setItem("cart", JSON.stringify(cart));
      }
  }
  let close_cart=document.querySelector(".close");
  shoping_cart.onclick=()=>{
    section_cart.classList.toggle("open_sec");
  }
  close_cart.onclick=()=>{
    section_cart.classList.toggle("open_sec");
  }
  const backtop=document.querySelector(".top")
  backtop.addEventListener('click', function(e) {
    e.preventDefault();
     $('html, body').animate({scrollTop:0}, '300');
  });
 


  function act(action,id){
    cart.forEach(item=>{
      if(item.id==id){
        if(action=='increse'){
          item.amount++;
        }
        else if(action=='decrese'){
          if(item.amount>1){
            item.amount--;
          }
          else{
            alert("amount must be more then 0 ")
          }
        }
        else if(action=='delete'){
          if(cart.length==1){
            table.innerHTML="";
          }
          cart.splice(cart.indexOf(item),1);
          localStorage.setItem("cart", JSON.stringify(cart));
          num.innerHTML=cart.length;
        }
      }
      add();
    });
  }
