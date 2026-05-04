// let myPopup1 = document.querySelector("#Castles .container .firstTowCards .card1"),
//     myPopup2 = document.querySelector("#Castles .container .firstTowCards .card2");

// myPopup1.addEventListener("click", function(){
//     let qaitbay = document.querySelector(".pop1");
//     console.log(qaitbay);
//     qaitbay.classList.add("active");
// });



// function openPopup() {
//     let popupEle = document.querySelector(".popup");

//     popupEle.classList.add("active");
    // setTimeout(function() {
    //     popupEle.classList.add("active");
    // }, 1000)

// }




function closePopup () {
    let popEle = document.querySelector(".popup.active");

    popEle.classList.remove("active");
    // setTimeout(function() {
    //     popEle.classList.remove("show");
    // }, 1);

};