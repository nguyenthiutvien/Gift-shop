const  ROOT_URL = 'https://63a5720d318b23efa793a600.mockapi.io'
const PATH = {
    Products: '/api/products',
    Customers: '/api/customers'
}

function getData(pathname, callback) {
    axios.get(ROOT_URL + pathname).then(function(resp) {
        callback(resp.data);
    })
}

function createItem(pathname, data, callback, fallback) {
    axios.post(ROOT_URL + pathname, data).then(function(resp) {
        callback(resp.data);
    }).catch(function(err) {
        //
    });
}

function editItem(pathname, data, callback, fallback) {
    axios.put(ROOT_URL + pathname, data).then(function(resp) {
        callback(resp.data);
    }).catch(function(err) {
        //
    });
}

function deleteItem(pathname) {
    axios.delete(ROOT_URL + pathname).then(function(resp) {
        callback(resp.data);
    }).catch(function(err) {
        //
    });
}