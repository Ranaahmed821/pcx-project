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
