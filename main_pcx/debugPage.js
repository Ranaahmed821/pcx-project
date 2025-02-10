// function generateOrderNumber(length) {
//     const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
//     let result = '';

//     for (let i = 0; i < length; i++) {
//         const randomIndex = Math.floor(Math.random() * characters.length);
//         result += characters.charAt(randomIndex);
//     }

//     return result;
// }

// document.getElementById("sentEmail").addEventListener("click", (e) => {
//     e.preventDefault()
//     const email = getCookie("email");

//     fetch(`http://localhost/backEnd/email/sendEmail.php?orderNumber=${generateOrderNumber(20)}&email=${email}`)
//         .then(req => req.json())
//         .then(res => {
//             console.log(res)
//         })
// })