const  url_product = 'https://63a5720d318b23efa793a600.mockapi.io/api/products'

function getData1(){
    axios.get(`${url_product}`)
    .then(
        function (res){
            showHandmade(res)
            
        }
    )
}
function showHandmade(arr) {
    for (let i = 0; i < arr.data.length; i++) {
        if(arr.data[i].type.for == 'handmade'){
            document.getElementById('products__list-handmade').innerHTML += `
            <div class = "products_handmade">
            <div class = "img_handmade">
                <img src="${arr.data[i].image}" alt="">
            </div>
            <div class = "name_handmade">
                <button  class="quick_view" onclick="viewProducts_handmade(${arr.data[i].id})" >Quick View</button>
            </div>
            <div>
                <p>${arr.data[i].name}</p>
                <p>$${arr.data[i].price}</p>
            </div>
        </div>
        `
        }
    }
}    
getData1()

// lấy id

function getData(id){
    return axios(url_product +"/" +id)
}

// Xem san pham chi tiet
// function viewProducts_handmade(id){
//     getData(id)
//     .then((res)=>{
//         var pro =res.data;
//         document.getElementById('view_products').innerHTML+=`
//         <div class ="view_product" id="view_product">
//         div class= "view_img">
//         <div class="view_img">
//         <div id="view_img${pro.id}">
//             <img src ="${pro.image}" alt="">
//         </div>
//         <div class = "info_pro" id="infor_pro"${pro.id}">
//             <p>${pro.infor}<p>
//         </div>
//     </div>

//     <div class ="view_infor">
//         <div id ="view_pro-name">
//             <h1> ${pro.name}</h1>
//             <p id ="view_pro"> SKU:000$${pro.id}</p>
//         </div>
//     </div>
//     <div class="view__pro-price">
//         <p>${pro.price}</p>
//     </div>
//     <div id = "view_pro-color">
//         <p>Color: ${pro.type.color}</p>
//     </div>
//     <div>   
//         <label class="list-img-color">
//             <input type ="radio" name ="radio">
//             <span class="check_color-pro" id ="view_pro-check" style ="background-color: ${pro.type.color};"></span>
//         </label>
//     </div>
//     <div id ="quantity_pro">
//         <p> Quantity</p>
//         <input type="number" id="quantity" min="1" max="100" value="1">
//     </div>
//     <button type ="button" class="btn" onclick=" add_to_cart(${pro.id})"> Add to cart</button>
//     <button type="button" class="btn" onclick="removeItemViewCart(); close_section_product(); openViewCart(); buyNow(${pro.id})"> Buy Now </button>
//     <div class=infor-other">
//         <button class="accordion">PRODUCT INFO </button>
//         <div class="panel">
//             <p> I'm a product detail. I'm great place to add more information about your product such as sizing,material, care and cleaning instructions.</p>
//         </div>
//     </div>
//     <div class="icon-media">
//             <i class="ri-messenger-fill"></i>
//             <i class="ri-facebook-fill"></i>
//             <i class="ri-twitter-fill"></i>
//             <i class="ri-pinterest-fill"></i>
//     </div>
//     </div>
// </div>
// </div>
// </div> `

// document.getElementById('view_products').innerHTML +=`
// <button onclick="open_section_handmade()" class="close1" id="close1_pr"> <i class="ri-close-circle-line"></i></button>`;
// open_view_page_handmade();
    
//     })
// }
// an trang khi bam vao san pham
// function open_view_page_handmade(){
//         document.getElementById('handmade'.style.display="none");
//         document.getElementById('view_products').style.display="block";
// }

function viewProducts_handmade(id){
    getData(id)
    .then((res) =>{
        var pro = res.data;
        document.getElementById('view_products').innerHTML+=`
        <div class="view_product" id="view_product">
        <div class="view_img">
        <div id="view_img${pro.id}">
            <img src="${pro.image}" alt="">
        </div>
        <div class="infor_pro"id="infor_pro${pro.id}">
            <p>${pro.info}</p>
        </div>
    </div>
    <div class="view_infor">
        <div id="view__pro-name">
            <h1>${pro.name}</h1>
            <p id="view__pro-sku">SKU:000$${pro.id}</p>
        </div>
        <div id="view__pro-price">
            <p>$${pro.price}</p>
        </div>
        <div id="view__pro-color">
            <p>Color:${pro.type.color}</p>
        </div>
        <div>
            <label class="list-img-color">
                <input type="radio" name="radio">
                <span class="check__color-pro" id="view__pro-check" style="background-color: ${pro.type.color};"></span>
              </label>
        </div>
        <div id="quantity_pro">
            <p>Quantity</p>
            <input type="number" id="quantity" min="1" max="100" value="1">
        </div>
        <button type="button" class="btn_atc" onclick=" add_to_cart(${pro.id})">Add to Cart</button>
        <button type="button" class="btn_atc" onclick="removeItemViewCart();close__section_product();openViewCart();buyNow(${pro.id})">Buy Now</button>
        <div class="info-other">
            <button class="accordion">PRODUCT INFO</button>
            <div class="panel">
                <p>I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item.</p>
            </div>
            <button class="accordion">RETURN & REFUND POLICY</button>
            <div class="panel">
                <p>I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item.</p>
            </div>
        </div>
        <div class="icon-media">
            <i class="ri-messenger-fill"></i>
            <i class="ri-facebook-fill"></i>
            <i class="ri-twitter-fill"></i>
            <i class="ri-pinterest-fill"></i>
        </div>
    </div>
</div>   
    </div>
    </div>
        `
    });
    document.getElementById('view_products').innerHTML+=`
    <button onclick="open__section_handmade()" class="close1" id="close1_pr"><i class="ri-close-circle-line"></i></button>`;
    open__view_page_handmade();
}
// an trang khi bam vao san pham
function open__view_page_handmade(){
    document.getElementById('handmade').style.display="none";
    document.getElementById('view_products').style.display="block";
}
function close__section_product(){
    document.getElementById('view_products').style.display="none"
}
//  xoa view product
function remove__view_product(){
    document.getElementById('view_products').innerHTML="";
}

// tat view san pham
function open__section_handmade(){
    document.getElementById('handmade').style.display="block";
    remove__view_product();
    close__section_product();
}

// filter
// Theo giá
//  từ 0-30.000
function show_filter_price1(){
    document.getElementById("products__list-handmade").innerHTML="";
    axios.get(url_product)
    .then((res)=>{
        var proArr = res.data;
        for(var pro of proArr){
            if(pro.type.for=="handmade" && pro.price<=30){
                document.getElementById("products__list-handmade").innerHTML+=`
                <div class ="products_handmade">
            <div class="img_handmade">
                <img src="${pro.image}" alt="">
            </div>
            <div class="name_handmade">
                <button class="quick_view" onclick="viewProducts_handmade(${pro.id})">Quick View</button>
            </div>
            <div>
                <p> ${pro.name}</p>
                <p> ${pro.price}</p>
            </div>
        </div>
                `
            }
        }
    })

}
// từ 30.000-100.000
function show_filter_price2(){
    document.getElementById("products__list-handmade").innerHTML="";
    axios.get(url_product)
    .then((res)=>{
        var proArr = res.data;
        for(var pro of proArr){
            if(pro.type.for=="handmade" &&  pro.price>30 && pro.price<=100){
                document.getElementById("products__list-handmade").innerHTML+=`
                <div class ="products_handmade">
            <div class="img_handmade">
                <img src="${pro.image}" alt="">
            </div>
            <div class="name_handmade">
                <button class="quick_view" onclick="viewProducts_handmade(${pro.id})">Quick View</button>
            </div>
            <div>
                <p> ${pro.name}</p>
                <p> ${pro.price}</p>
            </div>
        </div>
                `
            }
        }
    })

}

// từ 100-150
function show_filter_price3(){
    document.getElementById("products__list-handmade").innerHTML="";
    axios.get(url_product)
    .then((res)=>{
        var proArr = res.data;
        for(var pro of proArr){
            if(pro.type.for=="handmade" &&  pro.price>100 && pro.price<=150){
                document.getElementById("products__list-handmade").innerHTML+=`
                <div class ="products_handmade">
            <div class="img_handmade">
                <img src="${pro.image}" alt="">
            </div>
            <div class="name_handmade">
                <button class="quick_view" onclick="viewProducts_handmade(${pro.id})">Quick View</button>
            </div>
            <div>
                <p> ${pro.name}</p>
                <p> ${pro.price}</p>
            </div>
        </div>
                `
            }
        }
    })

}
//  trên 150
function show_filter_price4(){
    document.getElementById("products__list-handmade").innerHTML="";
    axios.get(url_product)
    .then((res)=>{
        var proArr = res.data;
        for(var pro of proArr){
            if(pro.type.for=="handmade" &&  pro.price>150){
                document.getElementById("products__list-handmade").innerHTML+=`
                <div class ="products_handmade">
            <div class="img_handmade">
                <img src="${pro.image}" alt="">
            </div>
            <div class="name_handmade">
                <button class="quick_view" onclick="viewProducts_handmade(${pro.id})">Quick View</button>
            </div>
            <div>
                <p> ${pro.name}</p>
                <p> ${pro.price}</p>
            </div>
        </div>
                `
            }
        }
    })

}

// lọc màu
function show_filter_color(color){
    // white
    if (color.value =='white'){
        document.getElementById("products__list-handmade").innerHTML="";
    axios.get(url_product)
    .then((res)=>{
        var proArr = res.data;
        for(var pro of proArr){
            if(pro.type.for=="handmade" &&  pro.type.color =="white"){
                document.getElementById("products__list-handmade").innerHTML+=`
                <div class ="products_handmade">
            <div class="img_handmade">
                <img src="${pro.image}" alt="">
            </div>
            <div class="name_handmade">
                <button class="quick_view" onclick="viewProducts_handmade(${pro.id})">Quick View</button>
            </div>
            <div>
                <p> ${pro.name}</p>
                <p> ${pro.price}</p>
            </div>
        </div>
                `
            }
        }
    })
}
// blue
    else if (color.value=="blue"){
        document.getElementById("products__list-handmade").innerHTML="";
    axios.get(url_product)
    .then((res)=>{
        var proArr = res.data;
        for(var pro of proArr){
            if(pro.type.for=="handmade" &&  pro.type.color =="blue"){
                document.getElementById("products__list-handmade").innerHTML+=`
                <div class ="products_handmade">
            <div class="img_handmade">
                <img src="${pro.image}" alt="">
            </div>
            <div class="name_handmade">
                <button class="quick_view" onclick="viewProducts_handmade(${pro.id})">Quick View</button>
            </div>
            <div>
                <p> ${pro.name}</p>
                <p> ${pro.price}</p>
            </div>
        </div>
                `
            }
        }
    })
    // grey
    }else if(color.value=='grey'){
        document.getElementById("products__list-handmade").innerHTML="";
    axios.get(url_product)
    .then((res)=>{
        var proArr = res.data;
        for(var pro of proArr){
            if(pro.type.for=="handmade" &&  pro.type.color =="grey"){
                document.getElementById("products__list-handmade").innerHTML+=`
                <div class ="products_handmade">
            <div class="img_handmade">
                <img src="${pro.image}" alt="">
            </div>
            <div class="name_handmade">
                <button class="quick_view" onclick="viewProducts_handmade(${pro.id})">Quick View</button>
            </div>
            <div>
                <p> ${pro.name}</p>
                <p> ${pro.price}</p>
            </div>
        </div>
                `
            }
        }
    })
        
    }
}

// clear filter
function clear__filter(){
document.getElementById("products__list-handmade").innerHTML="";
axios.get(url_product)
    .then((res)=>{
        var proArr=res.data;
        for(var pro of proArr){
            if(pro.type.for=="handmade"){
                document.getElementById("products__list-handmade").innerHTML+=`
                <div class ="products_handmade">
            <div class="img_handmade">
                <img src="${pro.image}" alt="">
            </div>
            <div class="name_handmade">
                <button class="quick_view" onclick="viewProducts_handmade(${pro.id})">Quick View</button>
            </div>
            <div>
                <p> ${pro.name}</p>
                <p> ${pro.price}</p>
            </div>
        </div>
                `
            }
        }
    })
    
}
