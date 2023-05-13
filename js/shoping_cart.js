let shoping_cart=document.querySelector(".cart");
let section_cart=document.querySelector(".shoing_cart_content");
let get_loacl_cart=window.localStorage.getItem("cart");
const num=document.querySelector(".num");
let cart=JSON.parse(get_loacl_cart);
if(cart==null){
  cart=[];
}
window.localStorage.setItem("cart", JSON.stringify(cart));
let table=section_cart.querySelector(".shoping_cart_items").querySelector("table").querySelector("tbody");
let tr="";
let is_exist=false;
add();
function add() {
  tr="";
  cart.forEach(item=>{
    let allprice=(item.price_int+(item.price_cent/100))*item.amount;   
    tr +=`
        <tr>
        <td><img src="${item.image}" alt=""></td>
        <td>${item.title}</td>
        <td>
          <form>
            <button class="increse_btn btn" onclick="act('increse','${item.id}')">+</button>
            <input class="text-center" type="text" value="${item.amount}">
            <button class="decrese_btn btn" onclick="act('decrese','${item.id}')">-</button>
          </form>
        </td>
        <td>${item.price_int}.${item.price_cent}$</td>
        <td>${allprice}$</td>
        <td><button class="btn" onclick="act('delete','${item.id}')">&#10005</button></td>
      </tr>
        `;
       
  })
  table.innerHTML=tr;
  num.innerHTML=cart.length;
  window.localStorage.setItem("cart", JSON.stringify(cart));
  }







  let close_cart=document.querySelector(".close");
  shoping_cart.onclick=()=>{
    section_cart.classList.toggle("open_sec");
  }
  close_cart.onclick=()=>{
    section_cart.classList.toggle("open_sec");
  }
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
