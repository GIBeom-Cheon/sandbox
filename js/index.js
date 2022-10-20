
//헤더 주사위 , aside //

const cube = document.querySelector(".cube");
const cube1 = document.querySelector(".cube1");
const front = document.querySelector(".front");
const back = document.querySelector(".back");
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const topc = document.querySelector(".top");
const bottomc = document.querySelector(".bottom");
const cubeTxt = document.querySelector(".cubeTxt");
const button = document.querySelector(".topBtn");
const scrollTop = document.documentElement.scrollTop;

const line = document.querySelector(".line1");
const line2 = document.querySelector(".line2");
const line3 = document.querySelector(".line3");

console.log(scrollTop);
window.addEventListener("scroll", (event) => {
  if (window.scrollY > 430) {
    cube.classList.add("rotate");
    front.classList.add("front1");
    back.classList.add("back1");
    left.classList.add("left1");
    right.classList.add("right1");
    topc.classList.add("top1");
    bottomc.classList.add("bottom1");
    cubeTxt.classList.add("none");
    cube1.classList.add("none");
    button.classList.remove("none");
    line.classList.add("fade");
    if (window.scrollY >2700) { 
      line3.classList.add("fade");
    }
    if (window.scrollY > 1200) {
      line2.classList.add("fade");
    }

  } else {
    cube.classList.remove("rotate");
    front.classList.remove("front1");
    back.classList.remove("back1");
    left.classList.remove("left1");
    right.classList.remove("right1");
    topc.classList.remove("top1");
    bottomc.classList.remove("bottom1");
    cubeTxt.classList.remove("none");
    cube1.classList.remove("none");
    button.classList.add("none");
    line.classList.remove("fade");
    line2.classList.remove("fade");
    line3.classList.remove("fade");

  }
})

cube.addEventListener("mouseenter", (event) => {
  cube.classList.remove("rotate");
    front.classList.remove("front1");
    back.classList.remove("back1");
    left.classList.remove("left1");
    right.classList.remove("right1");
    topc.classList.remove("top1");
    bottomc.classList.remove("bottom1");
    cubeTxt.classList.remove("none");
})


$(document).ready(function () {
  /// 헤더 subnav //
  $(".nav1").on("mouseenter", function () {
    $(".sn1").css("display", "flex");
    $(".sn2").css("display","none");
  });

  $(".nav2").on("mouseenter", function () {
    $(".sn2").css("display","flex");
    $(".sn1").css("display","none");
  });
  $(".nav3").on("mouseenter", function () {
    $(".sn2").css("display","none");
    $(".sn1").css("display","none");
  });
  $(".nav4").on("mouseenter", function () {
    $(".sn2").css("display","none");
    $(".sn1").css("display","none");
  });
  $(".nav5").on("mouseenter", function () {
    $(".sn2").css("display","none");
    $(".sn1").css("display","none");
  });
  $(".nav6").on("mouseenter", function () {
    $(".sn2").css("display","none");
    $(".sn1").css("display","none");
  });
  $(".nav7").on("mouseenter", function () {
    $(".sn2").css("display","none");
    $(".sn1").css("display","none");
  });

})



//aside top 버튼 // 
$(function () {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 450) { 
          $('.topBtn').fadeIn(200);
          } else {
          $('.topBtn').fadeOut(200);
    }
  });

  $(".topBtn").click(function() {   
    $('html, body').animate({
      scrollTop : 0   
    }, 200);         
    return false;
    });
})

const itemWrap = document.querySelector('.itemWrap');
const itemWrap1 = document.querySelector('.itemWrap1');
const hexa1 = document.querySelector('.st1');
const hexa2 = document.querySelector('.st2');
function add() {
  itemWrap.classList.add("flex")
  itemWrap1.classList.remove("flex");
  itemWrap1.style.display = "none";
}
function add1() {
  itemWrap.style.display = "none";
  itemWrap.classList.remove("flex");
  itemWrap1.classList.add("flex");
} 
hexa1.addEventListener("click",add)
hexa2.addEventListener("click",add1)




$(window).resize(function () { 
  let winW = $(window).innerWidth();
  if (winW < 765) {
    $('.navWrap').addClass('none');
    $('.logoWrap').addClass('logoA');
    $(".trigger").addClass('block');
  } else { 
    $(".trigger").removeClass('block');
    $('.navWrap').removeClass('none');
    $('.logoWrap').removeClass('logoA');
  }

  $(".trigger").click(function () {
    $(this).toggleClass("on");
    $("nav").slideToggle(600);
    $(".backbox").toggleClass("backBox1")

  });

});

