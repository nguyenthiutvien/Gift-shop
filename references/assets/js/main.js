const ROOT_API_URL = 'http://localhost:3000';

$(document).ready(function() {
    checkLogin();
});

function checkLogin () {
    let user = getData('loggedUser');
    if (user) {
        user = JSON.parse(user);
        $('.user-section').html(`
            Hi ${user.name}
        `)
    } else {
        $('.user-section').html(`
            <a class="nav-link header-nav-item" href="#"><i class="fa fa-user me-2"></i>LOGIN</a>
        `)
    }
}

function login(username, password) {
    $.get(ROOT_API_URL + `/users?username=${username}&password=${password}`, (data) => {
        if (data.length) {
            setData('loggedUser', data[0])
            checkLogin();
        } else {
            alert('username or password incorrect!')
        }
    })
}

function register(registerData) {
    //validate username
    $.get(ROOT_API_URL + `/users?username=${registerData.username}`, (data) => {
        if (data.length) {
            alert('username was used!')
        } else {
            $.post(ROOT_API_URL + `/users`, registerData, (data) => {
                setData('loggedUser', data[0])
                checkLogin();
            })
        }
    })
}

function setData(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function getData(key) {
    return localStorage.getItem(key);
}

function removeData(key) {
    localStorage.removeItem(key);
}