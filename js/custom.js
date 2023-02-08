// to get current year
function getYear() {
  var currentDate = new Date();
  var currentYear = currentDate.getFullYear();
  document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

// nav menu
function openNav() {
  document.getElementById("myNav").classList.toggle("menu_width");
  document.querySelector(".custom_menu-btn").classList.toggle("menu_btn-style");
}

// for image modal
$(document).ready(function () {
  // Gets the video src from the data-src on each button
  var $imageSrc;
  $(".concept_section .search-box").click(function () {
    $imageSrc = $(this).data("bigimage");
  });
  console.log($imageSrc);

  // when the modal is opened autoplay it
  $("#myModal").on("shown.bs.modal", function (e) {
    // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get

    $("#image").attr("src", $imageSrc);
  });

  // reset the modal image
  $("#myModal").on("hide.bs.modal", function (e) {
    // a poor man's stop video
    $("#image").attr("src", "");
  });

  // document ready
});

// owl carousel script
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 20,
  navText: [],
  autoplay: true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
    // 1500: {
    //   items: 4,
    // },
  },
});

// googlemap script

function myMap() {
  var mapProp = {
    center: new google.maps.LatLng(40.712775, -74.005973),
    zoom: 18,
  };
  var map = new google.maps.Map(document.getElementById("map"), mapProp);
}

// saznaj vise

function saznajVise() {
  var dots = document.querySelector(".dots");
  var moreText = document.querySelector(".more");
  var btnText = document.querySelector(".myBtn");
  console.log(event.currentTarget.class);

  moreText.classList.toggle("more");

  // console.log(e);

  // if (event.currentTarget.id === "myBtn" && dots.style.display === "none") {
  //   dots.style.display = "inline";
  //   btnText.innerHTML = "Read more";
  //   moreText.style.display = "none";
  // } else {
  //   dots.style.display = "none";
  //   btnText.innerHTML = "Read less";
  //   moreText.style.display = "inline";
  //   dots.style.display = "";
  //   moreText.classList.add("prikaziText");
  // }
}

function test1(e) {
  // const btn = document.querySelector(".myBtn1");
  // console.log(btn.parentElement.parentElement.querySelector('[class="more"]'));

  const btn = document.querySelector(`#${e}`);

  let testiranje =
    btn.parentElement.parentElement.getElementsByClassName("more1");

  // testiranje[0].style.display = "none";

  return testiranje[0].classList.toggle("more");
}

// textTim.addEventListener("click", (e) => {
function prikazitext(id) {
  console.log(id);
  document.querySelector(`#${id}`).classList.toggle("tim_text");
}
// element.document.querySelector(".tim_text").style.cssText =
//   "-webkit-line-clamp: initial;";
// });

// galirija test pocetak
