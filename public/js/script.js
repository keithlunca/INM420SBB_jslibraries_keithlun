
let btnClick = document.querySelectorAll(".btn");
// console.log(btnClick);

// 1st Button
btnClick[0].addEventListener("click", function(){
    swal("Hello Professor", "Congratulations! You are now a VIP member.");
});

// 2st Button
btnClick[1].addEventListener("click", function(){
    swal("Thank You for Subscribing!", "Welcome to the Keithlun furniture Store family! You’re now on the list to receive exclusive offers, the latest product updates, and design inspiration straight to your inbox.");
});

// 3st Button
btnClick[2].addEventListener("click", function(){
    swal("Thank You for Contacting Us!", "Thank you for reaching out to Keithlun furniture Store. We’ve received your message and our team is working to get back to you as soon as possible.", "success");
});