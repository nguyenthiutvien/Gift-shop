const APIconfirm = 'https://63a5720d318b23efa793a600.mockapi.io/api/products';


function getData() {
    axios.get(`${APIconfirm}`)
        .then(
            function(res) {
                show(res)
            }
        )
    axios.get(`${API}`)
        .then(
            function(ress) {
                showcustomer_pro(ress)
            }
        )
}
var dem = 0;
function show(arr) {
    
    for (let i = 0; i < arr.data.length; i++) {
        dem++;
        document.getElementById('tbl').innerHTML += `
        <tr id="products">
        <td class="data1">${dem}</td>
        <td class="data1">${arr.data[i].name}</td>
        <td class="data1">${arr.data[i].price}</td>
        <td><img id ='thunho' src="${arr.data[i].image}" alt=""> </td>
        <td>
        <div class="edit_delete">
            <div class="edit">
                <button class="btn_edit" onclick="openNav();getdatafromtable(${arr.data[i].id})">
                    <i class="ri-pencil-line"></i>
                </button>
            </div>
            <div>
                <button class="btn_remove" onclick="deleteproduct(${arr.data[i].id})">
                    <i class="ri-delete-bin-line"></i>
                </button>
            </div>
        </div>
        </td>
      </tr>
        `
    }
}

function reset() {
    document.getElementById('product-name').value = '';
    document.getElementById('price').value = '';
    document.getElementById('image').value = '';
}

function add() {
    var name1 = document.getElementById('product-name').value
    var price = document.getElementById('price').value
    var img = document.getElementById('image').value
    //  var color=document.getElementById('color').value = res.data.type.color
    //  var for  = document.getElementById('for').value = res.data.type.for;
    // var infor =      document.getElementById('infor').value = res.data.info

    var data = {
        name: name1,
        price: price,
        image: img,
       
    }
    axios.post(APIconfirm, data)
    .then(()=>swal({
        title: "Success!",
        text: "Added",
        icon: "success",
        button: "OK",
      })
      ) 
        .then(
            () => { location.reload() }
        )
    reset()
}

function getdatafromtable(id) {
    axios.get(`${APIconfirm}/${id}`)
        .then(function(res) {
            document.getElementById('product-name').value = res.data.name;
            document.getElementById('price').value = res.data.price;
            document.getElementById('image').value = res.data.image;
            // document.getElementById('color').value = res.data.type.color;
            // document.getElementById('for').value = res.data.type.for;
            document.getElementById('infor').value = res.data.info;
            document.getElementById('add').style.display = 'block';
            
            // none

            document.getElementById('update').value = res.data.id
        })
        document.getElementById('update').innerHTML = `<button type="button" id='edit' onclick="update(${id})">Edit</button>`;

}

function update(id) {
    var name1 = document.getElementById('product-name').value
    var price = document.getElementById('price').value
    var img = document.getElementById('image').value
    

// var color = document.getElementById('color').value
//     var for_type = document.getElementById('for').value

    var data = {
        name: name1,
        price: price,
        image: img,
        // color: color,
        // for: for_type
    }

    axios.put(`${APIconfirm}/${id}`, data)
    .then(()=>  

    swal({
        title: "Success!",
        text: "Updated",
        icon: "success",
        button: "OK",
      }))
    .then(() => { location.reload() });
    reset()
    // document.getElementById('add').style.display = 'block';
    // document.getElementById('update').style.display = 'block';
    // none
}

function deleteproduct(id) {
    axios.get(`${APIconfirm}/${id}`)
    axios.delete(`${APIconfirm}/${id}`)
    .then(()=>
    swal({
        title: "Success!",
        text: "Deleted",
        icon: "success",
        button: "OK",
      }))
    .then(
        () => { location.reload() }
    )
}

function openNav() {
    document.getElementById("myNav").style.display = "block";
}

function closeNav() {
    document.getElementById("myNav").style.display = "none";
}

// phần trang product
function showproducts() {
    document.getElementById("container_product").style.display = "block";
    document.getElementById("container_customer").style.display = "none";
    document.getElementById("container_order").style.display = "none";

}

function showcustomer() {
    document.getElementById('container_product').style.display = "none";
    document.getElementById('container_customer').style.display = "block";
    document.getElementById("container_order").style.display = "none";
}
function showorders() {
    document.getElementById('container_product').style.display = "none";
    document.getElementById('container_customer').style.display = "none";
    document.getElementById("container_order").style.display = "block";
}

const API = 'https://63a5720d318b23efa793a600.mockapi.io/api/customers';

// customer
function showcustomer_pro(ress) {
    for (let j = 0; j < ress.data.length; j++) {
        document.getElementById('table_customer').innerHTML += `
        <tr>
            <td>${ress.data[j].id}</td>
            <td>${ress.data[j].email}</td>
            <td>${ress.data[j].phone_number}</td>
            <td>
                <div class = "bill">
                    <div class="quantity_customer" id="quantity_customer${ress.data[j].id}">0</div>
                </div>
            </td>
            <td>
            <div class = "bill_eye">
                        <i class="ri-eye-fill" onclick ="showbill(${ress.data[j].id})"></i>
                    </div>
            </td>
        </tr>
        `
        countBill(ress.data[j].id);
    }
}
const bill_api = "https://63a5720d318b23efa793a600.mockapi.io/api/bills";

function showbill(id) {
    axios.get(bill_api).then((res) => {
            var billArr = res.data;
            var idCus=id;
            var count=0;
            for (var bill of billArr) {
                if(bill.idCus==idCus){  
                    count=count+1;
                    document.getElementById('content_infor').innerHTML += `
                <div class="infor_detail">
                    <p>ID: ${bill.id}</p>
                    <p>Name : ${bill.nameCus}</p>
                    <p>Total: ${bill.total}</p>
                    <form>
                    <div>
                    <input type="radio" onclick="updateStatus(${bill.id})" id="wait_confirm${bill.id}"  value="wait confirm"
                            checked>
                    <label for="wait_confirm">wait confirm</label>
                    </div>

                    <div>
                    <input type="radio" onclick="updateStatus2(${bill.id})" id="confirmed${bill.id}"  value="confirmed"
                        ${bill.status == 'confirmed' ||bill.status == 'shipping' ||bill.status == 'delivered' ? "checked": ''} >
                    <label for="confirmed">confirmed</label>
                    </div>

                    <div>
                    <input type="radio" onclick="updateStatus3(${bill.id})" id="shipping${bill.id}"  value="shipping"
                    ${bill.status == 'shipping' || bill.status == 'delivered' ? "checked": ''}>
                    <label for="shipping">shipping</label>
                    </div>

                    <div>
                    <input type="radio" onclick="updateStatus4(${bill.id})" id="delivered${bill.id}"  value="delivered"
                    ${bill.status == 'delivered'   ? "checked": ''}>
                    <label for="delivered">delivered</label>
                    </div>
                    </form>
                </div> 
                <hr>  
                `
            }      
            }           
        })
    openBill()
    closeTableCus();
}
getData()

// đếm số lượng sản phẩm khách hàng đã mua
function countBill(id) {
    axios.get(bill_api).then((res) => {
            var billArr = res.data;
            var idCus=id;
            var count=0;
            for (var bill of billArr) {
                if(bill.idCus==idCus){
                    count=count+1;
                document.getElementById('quantity_customer'+id).innerHTML=count;
            }
            }
        })
}

// ẩn view bill 
function openBill() {
    document.getElementById('view_information').style.display = "block"
}

function closeBill() {
    document.getElementById('view_information').style.display = "none"
    remvoveView();
    openTableCus();
}

// xóa html trong view_information
function remvoveView() {
    document.getElementById('content_infor').innerHTML = "";
}

function closeTableCus() {
    document.getElementById('container_customer').style.display = "none"
}

function openTableCus() {
    document.getElementById('container_customer').style.display = "block"
}

// cập nhật trạng thái đơn hàng
function updateStatus(id){
    var status = document.getElementById('wait_confirm'+id).value;
    var formData={
        status: status
    }
    axios.put(bill_api +"/"+ id,formData)
}
function updateStatus2(id){
    var status = document.getElementById('confirmed'+id).value;
    var formData={
        status: status
    }
    axios.put(bill_api +"/"+ id,formData);
}

function updateStatus3(id){
    var status = document.getElementById('shipping'+id).value;
    var formData={
        status: status
    }
    axios.put(bill_api +"/"+ id,formData);
    
}
function updateStatus4(id){
    var status = document.getElementById('delivered'+id).value;
    var formData={
        status: status
    }
    axios.put(bill_api +"/"+ id,formData);
}


// show danh sách bill
function convertDate(date) {
    var day = date.getDate();
    var month = date.getMonth() ;
    return `${day < 10 ? "0" + day : day}/${month < 10 ? "0" + month : month}/${date.getFullYear()}`;
  }

showListBill();
function showListBill(){
    count=0;
    axios.get(bill_api).then((res) => {
        var arrOrder = res.data;
        for(var order of arrOrder.reverse()){
            count=count+1;
        var date_order1 = convertDate(new Date(order.date_order));
            document.getElementById('table_orders').innerHTML += `
        <tr>
            <td>${count}</td>
            <td>DAG${order.id}${new Date(order.date_order).getTime()}</td>
            <td>${date_order1}</td>
            <td>${order.total}</td>
            <td>
            <div class = "bill_eye">
                        <i class="ri-eye-fill" onclick ="showBillDetail(${order.id});openStatusOrder()"></i>
                    </div>
            </td>
        </tr>
        `
        }
    })

}

// show chi tiết bill
function showBillDetail(id){
    getDataBill(id)
    .then((res) =>{
        var date_order1 = convertDate(new Date(res.data.date_order));
        var bill =res.data
        document.getElementById("showBill").innerHTML=`
        <div class="headerDetail" id="headerDetail${bill.id}">
        <div>
            <p>Order ID DAG${bill.id}${new Date(bill.date_order).getTime()}</p>
            <p>Order Day ${date_order1}</p>
        </div>
        <div>
            <button class="btn_back" onclick="closeStatusOrder()">&#8249;</button>
        </div>
    </div>

    <div class="mainDetail" id="mainDetail${bill.id}">
        
    </div>
    <div class="footerDetail" id="footerDetail">
    <form>
    <div>
    <input type="radio" onclick="updateStatus(${bill.id})" id="wait_confirm${bill.id}"  value="wait confirm"
            checked>
    <label for="wait_confirm">wait confirm</label>
    </div>

    <div>
    <input type="radio" onclick="updateStatus2(${bill.id})" id="confirmed${bill.id}"  value="confirmed"
        ${bill.status == 'confirmed' ||bill.status == 'shipping' ||bill.status == 'delivered' ? "checked": ''} >
    <label for="confirmed">confirmed</label>
    </div>

    <div>
    <input type="radio" onclick="updateStatus3(${bill.id})" id="shipping${bill.id}"  value="shipping"
    ${bill.status == 'shipping' || bill.status == 'delivered' ? "checked": ''}>
    <label for="shipping">shipping</label>
    </div>

    <div>
    <input type="radio" onclick="updateStatus4(${bill.id})" id="delivered${bill.id}"  value="delivered"
    ${bill.status == 'delivered'   ? "checked": ''}>
    <label for="delivered">delivered</label>
    </div>
    </form>
    </div>
        `
    })
    getProductArray(id)
}

function getProductArray(id){
    getDataBill(id)
    .then((res) =>{
        var proArr=res.data.detail
        for( var pro of proArr){
            document.querySelector(".mainDetail").innerHTML+=`
            <div class="listProductDetail">
            <div>
                    <h5 class="name_product">${pro.name}</h5>
                    <p class="qty_product"> Qt: ${pro.qty} </p>
                    <h4 class=""> <span class="mt-5">$</span> ${pro.price}</h4>
                   
                </div>
                <div>
                    <img class="imginDetail" src="${pro.image}" alt="">
                </div>
            </div>
            `
        }
    })
}

function getDataBill(id){
    return axios(bill_api+'/'+id)
}

function openStatusOrder() {
    document.getElementById("showBill").style.display = "block";
    document.getElementById("container_order").style.display="none"
  }
  function closeStatusOrder() {
    document.getElementById("showBill").style.display = "none";
    document.getElementById("container_order").style.display="block"
  
  }

  function changeColor1(){
    document.getElementById('pro1').style.background ="rgb(95,158,160)";
    document.getElementById('color-z').style.color ="white";
    document.getElementById('color-y').style.color ="rgb(95,158,160)";
    document.getElementById('color-x').style.color ="rgb(95,158,160)";
    document.getElementById('icon2').style.color ="rgb(95,158,160)";
    document.getElementById('icon3').style.color ="rgb(95,158,160)";
    document.getElementById('icon1').style.color ="white";
    document.getElementById('pro2').style.background="white";
    document.getElementById('pro3').style.background="white";
}
function changeColor2(){
    document.getElementById('pro1').style.background="white";
    document.getElementById('pro2').style.background ="rgb(95,158,160)";
    document.getElementById('color-z').style.color ="rgb(95,158,160)";
    document.getElementById('color-y').style.color ="rgb(95,158,160)";
    document.getElementById('icon1').style.color ="rgb(95,158,160)";
    document.getElementById('icon2').style.color ="white";
    document.getElementById('color-x').style.color ="white";
    document.getElementById('icon3').style.color ="rgb(95,158,160)";
    document.getElementById('pro3').style.background="white";
}
function changeColor3(){
    document.getElementById('pro1').style.background="white";
    document.getElementById('pro3').style.background ="rgb(95,158,160)";
    document.getElementById('icon2').style.color ="rgb(95,158,160)";
    document.getElementById('color-x').style.color ="rgb(95,158,160)";
    document.getElementById('color-y').style.color ="white";
    document.getElementById('color-z').style.color ="rgb(95,158,160)";
    document.getElementById('icon1').style.color ="rgb(95,158,160)";
    document.getElementById('icon3').style.color ="white";
    document.getElementById('pro2').style.background="white";
}
