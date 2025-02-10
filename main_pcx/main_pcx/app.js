document.addEventListener("DOMContentLoaded", function () {
  fetch(allCategories)
    .then(res => res.json())
    .then(response => {
      response['data'].forEach(element => {
        const node = document.createElement("li");
        const a = document.createElement("a")
        a.className = "dropdown-item"
        a.href ="./category/category.html?id="+element['id'] 
        const textnode = document.createTextNode(element['name']);
        node.appendChild(a).appendChild(textnode);
        document.querySelector('.categories-dropdown').appendChild(node);
      });
    })
});


//























/* Created by Tivotal */

// let items = document.querySelectorAll(".menu li");

// items.forEach((item) => {
//   item.addEventListener("click", () => {
//     items.forEach((link) => {
//       link.classList.remove("active");
//     });

//     item.classList.add("active");
//   });
// });


// $('#my-other').on('show.bs.drawer', function(){
//   $('#my-input').trigger('focus');
// })