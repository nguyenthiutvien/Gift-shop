
const url_customers='https://63a5720d318b23efa793a600.mockapi.io/api/customers'
const CUSID = "cusid";
function sign_in_account() {
  var email = document.getElementById("login_email").value;
  var password = document.getElementById("login_password").value;
  axios.get(url_customers).then((res) => {
    var cusArr = res.data;
    var count = 0;
    for (var cus of cusArr) {
      if (email == cus.email && password == cus.password) {
        count = 0;
        sign_in_successful();
        window.localStorage.setItem(CUSID, cus.id);
        change_login_none();
        change_account_block();
        setAccount();
         var a =document.querySelectorAll(".nav__account");
         for(var i =0; i<a.length; i++){
           a[i].innerHTML=`
           <i class="ri-account-circle-line"></i>` + cus.email;
         }
        return;
      } else {
        count = 1;
      }
    }
    if (count == 1) {
      sign_in_failed();
      removeInput();
      setTimeout(remover_toast_sign_in_failed, 5000);
    }
  });
}
// Thông báo đăng nhập thành công
function sign_in_successful() {
  var content =
    "<h1>Hi! Welcome to Indoor </h1>" +
    "<br><p>Change the look of your house, change the perspective of others</p>";
  document.getElementById("item__login").innerHTML = content;
}
// thông báo khi đăng nhập sai!
function sign_in_failed() {
  document.getElementById("item__login").innerHTML += `
  <p id="failed">Email and password don't match!</p>`;
}
// xóa thông báo khi đăng nhập sai!
function remover_toast_sign_in_failed() {
  var parent = document.getElementById("item__login");
  var child = document.getElementById("failed");
  parent.removeChild(child);
}
// xóa dữ liệu khi nhập vào sai
function removeInput() {
  document.getElementById("login_email").value = "";
  document.getElementById("login_password").value = "";
}
// thông báo đăng ký thành công!
function sign_up_successful() {
  var content =
    "<div class='form__signup'>" +
    "<h1>Sign Up Success</h1>" +
    "<br> <p>Sign In Now</p>" +
    "<button  type='button' onclick='next__page(-1)' class='btn_signup'>SIGN IN</button>" +
    "</div>";
  document.getElementById("item__signup").innerHTML = content;
}
//  tạo tài khoản
function addAccount() {
  var email = document.getElementById("signUp__email").value;
  var password = document.getElementById("signUp_password").value;
  var phone_number = document.getElementById("signUp_phone").value;
  var address = document.getElementById("signUp_Address").value;
  var formData = {
    email: email,
    password: password,
    phone_number: phone_number,
    address: address,
  };
  if (email == "" || password == "" || phone_number == "" || address == "") {
    check_form_sign_up();
    return;
  } else {
    axios.get(url_customers).then((res) => {
      var cusArr = res.data;
      for (var cus of cusArr) {
        if (email == cus.email) {
          document.getElementById(
            "signUp__email1"
          ).innerHTML += `<p id="bug_mail">Email already exists!</p>`;
          return;
        }
      }
      axios.post(url_customers, formData).then(() => {
        sign_up_successful();
      });
    });
  }
}
// ẩn thông báo lỗi mail
function close_bug2_email() {
  var parent = document.getElementById("signUp__email1");
  var child = document.getElementById("bug_mail");
  parent.removeChild(child);
}

var login__page = 1;
showpage(login__page);

function next__page(n) {
  showpage((login__page += n));
}
function showpage(n) {
  var i;
  var pages = document.getElementsByClassName("logins");
  if (n > pages.length) {
    login__page = 1;
  }
  if (n < 1) {
    login__page = pages.length;
  }
  for (i = 0; i < pages.length; i++) {
    pages[i].style.display = "none";
  }
  pages[login__page - 1].style.display = "block";
}

