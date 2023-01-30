const API_URL = "https://63a571e42a73744b008e23ee.mockapi.io/contact"

// function callAPI (endpoint, method = "GET", body)
// {
//     return axios(
//         {
//             method: method,
//             url: `${API_URL}/${endpoint}`,
//             data: body,
//         }
//     ).catch((err) => {
//         console.log(err);
//     });
// }
// var id;
// var contacts = [];
// function submit(){
//     document.getElementById("submit_contact").style.display = "block";

//     localStorage.setItem("contacts", JSON.stringify(contact));
//     var contacts = JSON.parse(localStorage.getItem("contacts")) || [];
//     for (i = 0; i <= contacts.length; i++){
//         id = i;
//     }
//     var name = document.getElementById("contact-Name").value;
//     var email = document.getElementById("contact-Email").value;
//     var subject = document.getElementById("contact-Subject").value;
//     var message = document.getElementById("message").value;
//     if (name | email | subject | message != ""){
//         var oneContact = {
//             id: id,
//             name: name,
//             email: email,
//             subject: subject,
//             message: message,
//         };
//         contacts.push(oneContact);
//         callAPI("contacts", "POST", oneContact).then ((response) => {
//             alert(" OK. Submit finish");
//         });
//     }
// }

function add() {
    var name = document.getElementById('contact-Name').value
    var email = document.getElementById('contact-Email').value
    var subject = document.getElementById('contact-Subject').value
    var message=  document.getElementById('message').value
    var data = {
        name: name,
        email: email,
        subject: subject,
        message: message
    }
    axios.post(API_URL, data)
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
