function updateItemInCart() {
  var cartContainer = document.getElementById("items")
  var t = document.getElementById("total")

  getCart().forEach(item => {
    const cartItem = `
      <tr id="items">
                      <th scope="col">${item.name}</th>
                      <th scope="col">${item.price}</th>
                      <th scope="col">
                          <button class="btn btn-danger delete-from-cart" id="delete-from-cart" data-id="${item.id}" >Delete</button>      
                      </th>
                  </tr>

`;
    cartContainer.innerHTML += cartItem;
  });
  t.innerText = totalCart();

}
document.addEventListener('DOMContentLoaded', function () {
  updateItemInCart();
  document.querySelectorAll(".delete-from-cart").forEach(element => {
    element.addEventListener("click", () => {
      deleteInCart(event.target.getAttribute("data-id"));
      updateItemInCart();
      location.reload();
    })
  });
},);




function generateOrderNumber(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }

  return result;
}

document.getElementById("sentEmail").addEventListener("click", (e) => {
  e.preventDefault()
  const email = getCookie("email");

  fetch(`http://localhost/backEnd/email/sendEmail.php?orderNumber=${generateOrderNumber(20)}&email=${email}`)
    .then(req => req.json())
    .then(res => {
      console.log(res)
    })
})