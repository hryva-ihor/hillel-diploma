$(document).ready(function () {
$(".carousel").slick({
    dots: true,
});
let burger = document.querySelector("#burger-icon");
let header = document.querySelector("#header");
burger.onclick = function () {
    header.classList.toggle("menu-open");
};
});
$(document).ready(function () {
$(".burger-icon").click(function (event) {
    $("#burger-icon,#header").toggleClass("menu-open");
});
});
$(".carousel.carousel_reviews").slick({
slidesPerRow: 1,
slidesToShow: 1,
slidesToScroll: 1,
centerMode: true,
arrows: true,
responsive: false,
infinite: true,
});