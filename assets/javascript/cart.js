
const pro_in_cart = [];
function add_to_cart(id)_{
    for (var ele of ele_in_cart){
        if(id==ele.id){
            var qty = parseInt(document.getElementById("quantity").value);
            swal({
                title:"Success!",
                text:"You clicked the button",
                icon:"success",
                button:"OK"
            });
            ele.qty+=qty;
            document.getElementById("qty-" +(ele_in_cart.indexOf(ele)+1)).setAttribute("value",ele.qty);
            return;
        }
    }
getData(id)
    .then((res)=>{
        var pro = res.data;
        var data ={
            id: id,
            image: pro.image,
            name: pro.name,
            price: pro.price,
            color:pro.type.color,
            qty: parseInt(document.getElementById("quantity").value)
        };
        pro_in_cart.push(data);
        countPro();
        subtotalminiCart();
        var rowId = pro_in_cart.length;
        document.getElementById("tbody_cart").innerHTML+=`
            <tr id="item-${rowId}">
                <td id="img_column-${rowId}"><img src="${pro.image} alt=""></td>
                <td id="info_column-${rowId}">
                    <p> ${pro.name}</p>
                    <p> ${pro.price}</p>
                    <input id ="qty-${rowId} type="number" min="0" max="100" value="${data.qty} oninput="changeQty(${rowId})" onclick="subtotalminiCart(); removeItemViewCart(); viewCart()">
                </td>
                <td id ="close_column" onclick="delCart(${rowId}); removeItemInArray(${rowId-1}); countPro(); subtotalminiCart(); removeItemViewCart(); viewCart()"><i class="ri-close-fill"></i></td>
                </tr>
        `;
    })
    .then(()=>{
        swal({
            title:"Success!",
            text:"You clicked the button",
            icon:"success",
            button:"OK"
        })
    });
    
}
function changeQty(id){
    var qty= parseInt(document.getElementById("qty-" +id).value);
    pro_in_cart[id - 1].qty = qty;
    document.getElementById("qty-" +id).setAttribute("value",qty);

}

function countPro(){
    document.getElementById("countpro1").innerHTML= pro_in_cart.length;
    document.getElementById("countpro2").innerHTML =pro_in_cart.length;
}
// 
function removeItemAfterBuy(){
    document.getElementById("tbody_cart").innerHTML='';
}
// Xoa san pham (giao dien)
function delCart(id){
    document.getElementById("Item-" +id).remove();
}

function subtotalminiCart(){
    var subtotal =0;
    var price_pro;
    for (var ele of pro_in_cart){
        price_pro= ele.qty * ele.price;
        subtotal = subtotal+price_pro;
    }
    document.getElementById("cart-sub-total").innerHTML=subtotal
}
// xoa san ppham trong mang
function removeItemInArray(id){
    pro_in_cart.splice(id,1);
}
// view cart
function viewCart(){
    for (var ele of pro_in_cart){
        document.getElementById("product_list_in_view_cart").innerHTML+=`
        <div class="product_in_view_cart" id="product_in_view_cart${ele.id}">
            <div class="img_pro_cart">
                <img src ="${ele.image}" alt="" >
            </div>
            <div class="infor_pro_cart">
                <p> ${ele.name}</p>
                <p> ${ele.price}</p>
                <p> ${ele.color}</p>
            </div>
            <div class="quantity_pro_cart">
                <p> Quantity: ${ele.qty}</p>
            </div>
            <div class="close_pro_cart">
                <i class="ri-close-fill" onclick="removeItemInArray(${pro_in_cart.length-1}); delCart(${pro_in_cart.length}); removeItemViewCart(); viewCart();subtotalminiCart();offer();getSubtotal();countPro()"></i>"
            </div>
        </div>
        <hr>
        `
    };
    getSubtotal();
    offer();
}
function getSubtotal(){
    var getSubtotal= document.getElementById("cart-sub-total").innerHTML;
    document.getElementById("Subtotal").innerHTML="$" +getSubtotal+".00";
}
function removeItemViewCart(){
    document.getElementById("product_list_in_view_cart").innerHTML='';
}
// giam gia
function offer(){
    var promo_code = document.getElementById("promo_code").value;
    var getSubtotal =parseInt(document.getElementById("cart-sub-total").innerHTML);
    var subtotalFinal=0;
    if(promo_code=='abcd'){
      subtotalFinal=getSubtotal-5
      document.getElementById("Total").innerHTML="$"+subtotalFinal+".00";
    }else{
      subtotalFinal=getSubtotal;
      document.getElementById("Total").innerHTML="$"+subtotalFinal+".00";
    }
  }

// an hien note, promo code
function openPromo(){
    document.getElementById("text_promo_code").style.display="block"
}

  function closePromo(){
    document.getElementById("text_promo_code").style.display="none"
}
function openNote(){
    document.getElementById("text_note").style.display="block"
}
  function closeNote(){
    document.getElementById("text_note").style.display="none"
}
function openViewCart(){
    document.getElementById("view_cart").style.display="block";
    document.getElementById("handmade").style.display = "none";
    document.getElementById("stoneCarving").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("contact").style.display = "none";
    document.getElementById("home").style.display = "none";
}

function closeViewCart(){
    document.getElementById("view_cart").style.display="none"
}

function openCart() {
    // mở cửa sổ giỏ hàng
    document.getElementById("myCart").style.display = "block";
  }