const imgUrl = "http://localhost/backEnd/images_folder/";
const baseURL = "http://localhost/backEnd/api/";
const allCategories = baseURL + "getItemsByCategoryId.php"
const getCategoryById = baseURL + "getCategories.php?id="
const allItemById = baseURL + "item.php"
const registerURL = baseURL + "register.php"
const loginURL = baseURL + "signin.php"

// to set cookies
function setCookie(cname, cvalue,) {
    const d = new Date();
    d.setTime(d.getTime() + (130 * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// بيسجل البيانات عن العميل و هنا بنستخدمها عشان احفظ بينات الاكونت زى الجيميل 
// encription name we use is sha1


// to get Cookies
function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
//end cookies

function updateCart(name, price) {
    var currentItem = JSON.parse(localStorage.getItem("cart")) || {};
    var ran = Math.floor(Math.random() * 9999999999999);
    currentItem[ran] = {
        "id": `${ran}`,
        "name": name,
        "price": price,
    }
    localStorage.setItem("cart", JSON.stringify(currentItem));
    alert("added to cart")
}

function getCart() {
    var currentItem = JSON.parse(localStorage.getItem("cart"))
    var items = [];
    items = [];
    for (var key in currentItem) {
        items.push(currentItem[key])
    }
    return items;
}

function deleteInCart(key) {
    var currentItem = JSON.parse(localStorage.getItem("cart"))
    delete currentItem[key];

    localStorage.setItem("cart", JSON.stringify(currentItem));

}

function totalCart() {
    var currentItem = JSON.parse(localStorage.getItem("cart"))
    let totalPrice = 0;

    for (const key in currentItem) {
        if (currentItem.hasOwnProperty(key)) {
            totalPrice += currentItem[key].price;
        }
    }
    return totalPrice;
}
