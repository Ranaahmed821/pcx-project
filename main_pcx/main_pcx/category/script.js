document.addEventListener("DOMContentLoaded", async function () {
    const id = new URLSearchParams(window.location.search).get("id")
    fetch(getCategoryById + id)
        .then(res => res.json())
        .then(response => {
            console.log(response["data"]);
            response["data"].forEach(element => {
                const div = document.createElement("div")
                div.className = "col-md-3 gy-5"
                const card = document.createElement("a")
                card.className = "card h-100 d-flex p-4 flex-column shadow-sm"
                card.style = "width: 18rem; height:15rem text-decoration: none;"

                const img = document.createElement("a")
                img.href = "../item/item.html?item_id=" + element['id'];
                const image = document.createElement("img")
                image.className = "card-img-top"
                image.src = imgUrl + element["id"] + ".png"
                image.alt = "..."
                img.appendChild(image)
                const card_body = document.createElement("a")

                card_body.className = "card-body"
                const h5 = document.createElement("a")
                h5.className = "card-title"
                h5.innerText = element["name"]
                h5.href = "../item/item.html?item_id=" + element['id']
                const p = document.createElement("p")
                p.className = "card-text"
                p.innerText = element["price"]
                const btn = document.createElement("button")
                btn.type = "button"
                btn.className = "btn btn-primary"

                btn.innerText = "add cart"
                btn.onclick = function () {
                    updateCart(element["name"], element["price"])
                    // getCart();
                }
                card_body.append(h5, p, btn)
                document.querySelector(".main .container .row").appendChild(div).appendChild(card).append(img, card_body)
            });
        })
})