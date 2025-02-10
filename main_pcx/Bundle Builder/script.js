

document.addEventListener("DOMContentLoaded", async function () {
    allMotherboard.forEach(function (item) {
        var element = document.getElementById('motherboard-dropdown');
        const node = document.createElement("li");
        const a = document.createElement("a")

        const textnode = document.createTextNode(item);
        node.appendChild(a).appendChild(textnode);
        element.appendChild(node);
    });
    document.querySelectorAll("#motherboard-dropdown li a").forEach(function (item) {
        item.addEventListener("click", () => {
            document.getElementById("motherboard-result").innerHTML = item.textContent.trim()
        })
    })


    allCpu.forEach(function (item) {
        var element = document.getElementById('cpu-dropdown');
        const node = document.createElement("li");
        const a = document.createElement("a")

        const textnode = document.createTextNode(item);
        node.appendChild(a).appendChild(textnode);
        element.appendChild(node);
    });
    document.querySelectorAll("#cpu-dropdown li a").forEach(function (item) {
        item.addEventListener("click", () => {
            document.getElementById("cpu-result").innerHTML = item.textContent.trim()
        })
    })


    allGpu.forEach(function (item) {
        var element = document.getElementById('gpu-dropdown');
        const node = document.createElement("li");
        const a = document.createElement("a")

        const textnode = document.createTextNode(item);
        node.appendChild(a).appendChild(textnode);
        element.appendChild(node);
    });
    document.querySelectorAll("#gpu-dropdown li a").forEach(function (item) {
        item.addEventListener("click", () => {
            document.getElementById("gpu-result").innerHTML = item.textContent.trim()
        })
    })


    allRam.forEach(function (item) {
        var element = document.getElementById('ram-dropdown');
        const node = document.createElement("li");
        const a = document.createElement("a")

        const textnode = document.createTextNode(item);
        node.appendChild(a).appendChild(textnode);
        element.appendChild(node);
    });
    document.querySelectorAll("#ram-dropdown li a").forEach(function (item) {
        item.addEventListener("click", () => {
            document.getElementById("ram-result").innerHTML = item.textContent.trim()
        })
    })


    allSsd.forEach(function (item) {
        var element = document.getElementById('ssd-dropdown');
        const node = document.createElement("li");
        const a = document.createElement("a")

        const textnode = document.createTextNode(item);
        node.appendChild(a).appendChild(textnode);
        element.appendChild(node);
    });
    document.querySelectorAll("#ssd-dropdown li a").forEach(function (item) {
        item.addEventListener("click", () => {
            document.getElementById("ssd-result").innerHTML = item.textContent.trim()
        })
    })


    allHdd.forEach(function (item) {
        var element = document.getElementById('hdd-dropdown');
        const node = document.createElement("li");
        const a = document.createElement("a")

        const textnode = document.createTextNode(item);
        node.appendChild(a).appendChild(textnode);
        element.appendChild(node);
    });
    document.querySelectorAll("#hdd-dropdown li a").forEach(function (item) {
        item.addEventListener("click", () => {
            document.getElementById("hdd-result").innerHTML = item.textContent.trim()
        })
    })


    allCase.forEach(function (item) {
        var element = document.getElementById('case-dropdown');
        const node = document.createElement("li");
        const a = document.createElement("a")

        const textnode = document.createTextNode(item);
        node.appendChild(a).appendChild(textnode);
        element.appendChild(node);
    });
    document.querySelectorAll("#case-dropdown li a").forEach(function (item) {
        item.addEventListener("click", () => {
            document.getElementById("case-result").innerHTML = item.textContent.trim()
        })
    })


    allScreen.forEach(function (item) {
        var element = document.getElementById('screen-dropdown');
        const node = document.createElement("li");
        const a = document.createElement("a")

        const textnode = document.createTextNode(item);
        node.appendChild(a).appendChild(textnode);
        element.appendChild(node);
    });
    document.querySelectorAll("#screen-dropdown li a").forEach(function (item) {
        item.addEventListener("click", () => {
            document.getElementById("screen-result").innerHTML = item.textContent.trim()
        })
    })


    document.querySelectorAll('.dropdown-menu a').forEach(function (item) {
        item.addEventListener('click', function () {
            var text = this.textContent.trim();
            var input = this.closest('.input-group').querySelector('.search');
            input.value = text;
        });
    });
    document.querySelectorAll('.search').forEach(function (input) {
        input.addEventListener('input', function () {
            var value = this.value.trim().toLowerCase();
            var dropdownMenu = this.closest('.input-group').querySelector('.dropdown-menu');
            var dropdownItems = dropdownMenu.querySelectorAll('.dropdown-item');

            dropdownItems.forEach(function (item) {
                var itemText = item.textContent.trim().toLowerCase();
                if (itemText.startsWith(value)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});