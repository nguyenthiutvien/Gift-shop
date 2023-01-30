const URL_stoneCarving = 'https://63a5720d318b23efa793a600.mockapi.io/api/products';

function getData3() {
    axios.get(`${URL_stoneCarving}`)
        .then(
            function(res) {
                showStoneCarving(res)
            }
        )
}


function showStoneCarving(arr) {
    for (let i = 0; i < arr.data.length; i++) {
        if(arr.data[i].type.for == 'stoneCarving'){
            document.getElementById('products__list-stoneCarving').innerHTML += `
            <div class = "products_stoneCarving">
            <div class = "img_stoneCarving">
                <img src="${arr.data[i].image}" alt="">
            </div>
            <div class = "name_stoneCarving">
                <button  class="quick_view" onclick="viewProducts_stoneCarving(${arr.data[i].id})" >Quick View</button>
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
getData3();

// xem sản phẩm chi tiết
function viewProducts_stoneCarving(id){
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
            <p>${pro.infor}</p>
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
    <button onclick="open__section_stoneCarving()" class="close1" id="close1_pr"><i class="ri-close-circle-line"></i></button>`;
    open__view_page_stoneCarving();
}
// ẩn trang khi bấm vào sản phẩm
function open__view_page_stoneCarving(){
    document.getElementById('stoneCarving').style.display="none";
    document.getElementById('view_products').style.display="block";
}

// tắt view sản phẩm

function open__section_stoneCarving(){
    document.getElementById('stoneCarving').style.display="block";
    remove__view_product();
    close__section_product()
}

//  bộ lọc giá #########################################

function show_filter_price5(){
 
    document.getElementById("products__list-stoneCarving").innerHTML="";
    axios.get(url_products)
        .then((res) => {
            var proArr = res.data;
            for(var pro of proArr){
                if(pro.type.for == "stoneCarving" && pro.price <= 30){
                    document.getElementById("products__list-stoneCarving").innerHTML+=`
                    <div class = "products_stoneCarving">
            <div class = "img_stoneCarving">
                <img src="${pro.image}" alt="">
            </div>
            <div class = "name_stoneCarving">
                <button  class="quick_view" onclick="viewProducts_stoneCarving(${pro.id})" >Quick View</button>
            </div>
            <div>
                <p>${pro.name}</p>
                <p>$${pro.price}</p>
            </div>
        </div>
        `
            }
        }
})

}

function show_filter_price6(){
  
    document.getElementById("products__list-stoneCarving").innerHTML="";
    axios.get(url_products)
        .then((res) => {
            var proArr = res.data;
            for(var pro of proArr){
                if(pro.type.for == "stoneCarving" && pro.price <= 100 && pro.price> 30){
                    document.getElementById("products__list-stoneCarving").innerHTML+=`
                    <div class = "products_stoneCarving">
            <div class = "img_stoneCarving">
                <img src="${pro.image}" alt="">
            </div>
            <div class = "name_stoneCarving">
                <button  class="quick_view" onclick="viewProducts_stoneCarving(${pro.id})" >Quick View</button>
            </div>
            <div>
                <p>${pro.name}</p>
                <p>$${pro.price}</p>
            </div>
        </div>
        `
            }
        }
})
}

function show_filter_price7(){

    document.getElementById("products__list-stoneCarving").innerHTML="";
    axios.get(url_products)
        .then((res) => {
            var proArr = res.data;
            for(var pro of proArr){
                if(pro.type.for == "stoneCarving" &&  pro.price <= 150 && pro.price > 100){
                    document.getElementById("products__list-stoneCarving").innerHTML+=`
                    <div class = "products_stoneCarving">
            <div class = "img_stoneCarving">
                <img src="${pro.image}" alt="">
            </div>
            <div class = "name_stoneCarving">
                <button  class="quick_view" onclick="viewProducts_stoneCarving(${pro.id})" >Quick View</button>
            </div>
            <div>
                <p>${pro.name}</p>
                <p>$${pro.price}</p>
            </div>
        </div>
        `
            }
        }
})
}
function show_filter_price8(){
    
    document.getElementById("products__list-stoneCarving").innerHTML="";
    axios.get(url_products)
        .then((res) => {
            var proArr = res.data;
            for(var pro of proArr){
                if(pro.type.for == "stoneCarving" &&  pro.price <= 200 && pro.price> 150){
                    document.getElementById("products__list-stoneCarving").innerHTML+=`
                    <div class = "products_stoneCarving">
            <div class = "img_stoneCarving">
                <img src="${pro.image}" alt="">
            </div>
            <div class = "name_stoneCarving">
                <button  class="quick_view" onclick="viewProducts_stoneCarving(${pro.id})" >Quick View</button>
            </div>
            <div>
                <p>${pro.name}</p>
                <p>$${pro.price}</p>
            </div>
        </div>
        `
            }
        }
})
}

// bộ lọc màu ##################

function show_filter_color2(color){

    if(color.value == 'white'){
        document.getElementById("products__list-stoneCarving").innerHTML="";
        axios.get(url_products)
        .then((res) => {
            var proArr = res.data;
            for(var pro of proArr){
                if(pro.type.for == "stoneCarving" &&  pro.type.color =='white'){
                    document.getElementById("products__list-stoneCarving").innerHTML+=`
                    <div class = "products_stoneCarving">
            <div class = "img_stoneCarving">
                <img src="${pro.image}" alt="">
            </div>
            <div class = "name_stoneCarving">
                <button  class="quick_view" onclick="viewProducts_stoneCarving(${pro.id})" >Quick View</button>
            </div>
            <div>
                <p>${pro.name}</p>
                <p>$${pro.price}</p>
            </div>
        </div>
        `
            }
        }
    })  
    }else if(color.value =='blue'){
        document.getElementById("products__list-stoneCarving").innerHTML="";
    axios.get(url_products)
        .then((res) => {
            var proArr = res.data;
            for(var pro of proArr){
                if(pro.type.for == "stoneCarving" &&  pro.type.color =='blue'){
                    document.getElementById("products__list-stoneCarving").innerHTML+=`
                    <div class = "products_stoneCarving">
            <div class = "img_stoneCarving">
                <img src="${pro.image}" alt="">
            </div>
            <div class = "name_stoneCarving">
                <button  class="quick_view" onclick="viewProducts_stoneCarving(${pro.id})" >Quick View</button>
            </div>
            <div>
                <p>${pro.name}</p>
                <p>$${pro.price}</p>
            </div>
        </div>
        `
            }
        }
    })
    }else if(color.value=='grey'){
        document.getElementById("products__list-stoneCarving").innerHTML="";
    axios.get(url_products)
        .then((res) => {
            var proArr = res.data;
            for(var pro of proArr){
                if(pro.type.for == "stoneCarving" &&  pro.type.color =='grey'){
                    document.getElementById("products__list-stoneCarving").innerHTML+=`
                    <div class = "products_stoneCarving">
            <div class = "img_stoneCarving">
                <img src="${pro.image}" alt="">
            </div>
            <div class = "name_stoneCarving">
                <button  class="quick_view" onclick="viewProducts_stoneCarving(${pro.id})" >Quick View</button>
            </div>
            <div>
                <p>${pro.name}</p>
                <p>$${pro.price}</p>
            </div>
        </div>
        `
            }
        }
})
    }
    
}

function clear__filter2(){
    document.getElementById("products__list-stoneCarving").innerHTML="";
    axios.get(url_products)
        .then((res) => {
            var proArr = res.data;
            for(var pro of proArr){
                if(pro.type.for == "stoneCarving" ){
                    document.getElementById("products__list-stoneCarving").innerHTML+=`
                    <div class = "products_stoneCarving">
            <div class = "img_stoneCarving">
                <img src="${pro.image}" alt="">
            </div>
            <div class = "name_stoneCarving">
                <button  class="quick_view" onclick="viewProducts_stoneCarving(${pro.id})" >Quick View</button>
            </div>
            <div>
                <p>${pro.name}</p>
                <p>$${pro.price}</p>
            </div>
        </div>
        `
            }
        }
})

}