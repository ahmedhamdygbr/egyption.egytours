let myPopup1 = document.querySelector("#Castles .container .firstTowCards .card1"),
    myPopup2 = document.querySelector("#Castles .container .firstTowCards .card2"),
    myPopup3 = document.querySelector("#Castles .container .secondTowCards .card3"),
    myPopup4 = document.querySelector("#Castles .container .secondTowCards .card4");


myPopup1.addEventListener("click", function(){
    let qaitbay = document.querySelector(".pop1");
    console.log(qaitbay);
    qaitbay.classList.add("active");
});





// let myPopup2 = document.querySelector("#Castles .container .firstTowCards .card2");
// // let myPopup1 = document.querySelector("#Castles .container .firstTowCards .card1");


myPopup2.addEventListener("click", function(){
    let saladin = document.querySelector(".pop2");
    saladin.classList.add("active"); 
    console.log(saladin);
});



myPopup3.addEventListener("click", function(){
    let shali = document.querySelector(".pop3");
    shali.classList.add("active"); 
    console.log(shali);
});


myPopup4.addEventListener("click", function(){
    let arish = document.querySelector(".pop4");
    arish.classList.add("active"); 
    console.log(arish);
});


// let myPopup = document.querySelector("#Castles .container .cards");
// for (let i = 0; i < myPopup.length; i++){
//     myPopup[i].addEventListener("click", function (){
//         document.querySelector(".pop1").classList.remove("active");
//         document.querySelector(".pop2").classList.remove("active");
//         document.querySelector(".pop3").classList.remove("active");
//         document.querySelector(".pop4").classList.remove("active");

//         document.querySelector(".popup" + (i + 1)).classList.add("active");
//     });
// };








// let myPopup2 = document.querySelectorAll("#Castles .container .secondTowCards .cards");

// myPopup2[0].addEventListener("click", function(){
//     let shali = document.querySelector("#Shali");
//     shali.classList.add("active"); 
// });


// myPopup[1].addEventListener("click", function(){
//     let arish = document.querySelector("#Arish");
//     shali.classList.remove("active");
//     arish.classList.add("active"); 
// });

