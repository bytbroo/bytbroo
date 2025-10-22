let lastScrollTop=0;
navbar= document.getElementById("navbar")
window.addEventListener("scroll", function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if(scrollTop > lastScrollTop){
        navbar.classList.add('active')
    }else{
        navbar.classList.remove('active')

    }
    lastScrollTop = scrollTop
})

document.getElementById("navToggle").onclick = function() {
  document.querySelector("header").classList.toggle("mobile-nav-active");
};

// ===========================

document.querySelectorAll(".tech-item").forEach((item) => {
      const bg = item.querySelector(".bg-image");
      const url = item.dataset.img;
      function showBg() {
        const bgsize = item.getAttribute('data-bgsize') || 'contain';
        bg.style.backgroundImage = `url("${url}")`;
        bg.style.backgroundSize = bgsize;
        item.classList.add("show-bg");
      }
      function hideBg() {
        item.classList.remove("show-bg");
        bg.style.backgroundImage = "";
        bg.style.backgroundSize = "";
      }
      item.addEventListener("mouseenter", showBg);
      item.addEventListener("focus", showBg);
      item.addEventListener("mouseleave", hideBg);
      item.addEventListener("blur", hideBg);
      item.addEventListener(
        "touchstart",
        (e) => {
          if (!item.classList.contains("show-bg")) {
            showBg();
          } else {
            hideBg();
          }
          e.preventDefault();
        },
        { passive: false }
      );
    });
