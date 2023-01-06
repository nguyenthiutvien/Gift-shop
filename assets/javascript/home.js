// Setting account (xem thông tin người dùng)
function open_setting_account() {
  document.getElementById("setting_account").style.display = "block";
  axios.get(url_customers + "/" + localStorage.getItem(CUSID)).then((res) => {
    var cus = res.data;
    document.getElementById("setting_email").innerText = cus.email;
    document.getElementById("setting_password").innerText = cus.password;
    document.getElementById("setting_phone").innerText = cus.phone_number;
    document.getElementById("setting_address").innerText = cus.address;
  });
}

// show thông tin người dùng để sửa
function show_user_info_old() {
  document.getElementById("setting_account").style.display = "block";
  axios.get(url_customers + "/" + localStorage.getItem(CUSID)).then((res) => {
    var cus = res.data;
    document.getElementById("edit_email").value = cus.axiosemail;
    document.getElementById("edit_password").value = cus.password;
    document.getElementById("edit_phone").value = cus.phone_number;
    document.getElementById("edit_address").value = cus.address;
  });
}
// cập nhập thông tin sau khi sửa
function done_edit_info() {
  var email = document.getElementById("edit_email").value;
  var password = document.getElementById("edit_password").value;
  var phone = document.getElementById("edit_phone").value;
  var address = document.getElementById("edit_address").value;
  var formData = {
    email: email,
    password: password,
    phone_number: phone,
    address: address,
  };
  axios
    .put(url_customers + "/" + localStorage.getItem(CUSID), formData)
    .then(() => {
      location.reload();
    });
}

function close_setting_account() {
  document.getElementById("setting_account").style.display = "none";
}


// chuyển đổi giữa edit và done;
function open_form_edit() {
  document.getElementById("edit__account").style.display = "block";
  document.getElementById("your__account").style.display = "none";
}

function close_form_edit() {
  document.getElementById("edit__account").style.display = "none";
  document.getElementById("your__account").style.display = "block";
}
function change_account_block() {
  //block sau khi đăng nhập
  document.getElementById("nav__account").style.display = "block";
}