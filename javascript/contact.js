const API_URL = "https://63a571e42a73744b008e23ee.mockapi.io/contact"



function addContact() {
    var name = document.getElementById('Name').value
    var email = document.getElementById('Email').value
    var subject = document.getElementById('Subject').value
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
    
}
