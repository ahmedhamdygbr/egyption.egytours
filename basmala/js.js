function sc(btn , direction) {
    const parent = btn.parentElement;
    const ascroll = parent.querySelector('.bscroll');
    const scroll = 220;
    ascroll.scrollBy({
        left: direction * scroll,
        behavior: "smooth"
    })
}

const tdark = document.getElementById("tdark");
let dark = localStorage.getItem("dark");
const yesdark = functio() {
    document.body.classList.add("dark");
    localStorage.setItem("dark", "active");
}
const nodark = function() {
    document.body.classList.remove("dark");
    localStorage.setItem("dark", null);
}
if (dark !== "active") {
    nodark();
} 
else {
    yesdark();
}
tdark.addEventListener("click", function() {
    dark = localStorage.getItem("dark");
    if (dark !== "active") {
        yesdark();
    }
    else {
        nodark();
    }
})
