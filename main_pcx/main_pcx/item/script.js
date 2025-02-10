document.addEventListener("DOMContentLoaded", async function () {
    const id = new URLSearchParams(window.location.search).get("item_id")
    fetch(allItemById + "?id=" + id)
        .then(res => res.json())
        .then(response => {
            console.log(response["data"]);
            response["data"].forEach(element => {

                document.getElementById("main").innerHTML =
//
                    `
                <div class="row g-1">
                <div class="col-md-4">
                    <img class="img-fluid rounded-start" alt="..." id="item_image" src=${imgUrl + element["id"] + ".png"}> 
                </div>
                <div class="d-flex"></div>
                <div class="col-md-8">
                    <div class="card-body">
                        <span class="float-start badge rounded-pill bg-primary mt-3 item_name"
                            style="font-size: medium;">
                            ${element["name"]}
                            </span>
                        <br>
                        <span class="float-end badge rounded-pill bg-danger item_price">${element.price} &euro; </span>
                        <h5 class="card-title mt-5 item_dec">
                            <p>
                            ${element["description"]}</p>
                        </h5>
                        <div class="text-center my-4">
                            <a href="#" class="btn btn-warning float-end" id="add">add cart</a>
                        </div>
                    </div>
                </div>
            </div>
                `
                document.getElementById("add").addEventListener("click", () => {
                    updateCart(element.name, element.price)
                })
            });
        })


})