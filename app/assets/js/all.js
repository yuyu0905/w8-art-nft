$(function() {
  const swiper = new Swiper(".artist-swiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    //多欄
    breakpoints: {
      1200: {
        centeredSlides:true,
        slidesPerView: 3,
        spaceBetween: 24,
      }
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination"
    },
  });

  // 確保圖片都載入後，以免造成剛進入頁面時圖片會被覆蓋
  $('.artwork').imagesLoaded().progress( function() {
    $('.artwork').masonry(); // 渲染整體畫面
  });

});