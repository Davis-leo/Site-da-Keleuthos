$(document).ready(function() {
  $('#mobile_btn').on('click', function () {
      $('#mobile_menu').toggleClass('active');
      $('#mobile_btn').find('i').toggleClass('fa-x');
  });

  const sections = $('section');
  const navItems = $('.nav-item');

  $(window).on('scroll', function () {
      const header = $('header');
      const scrollPosition = $(window).scrollTop() - header.outerHeight();

      let activeSectionIndex = 0;

      if (scrollPosition <= 0) {
          header.css('box-shadow', 'none');
      } else {
          header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1');
      }

      sections.each(function(i) {
          const section = $(this);
          const sectionTop = section.offset().top - 220;
          const sectionBottom = sectionTop+ section.outerHeight();

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
              activeSectionIndex = i;
              return false;
          }
      })

      navItems.removeClass('active');
      $(navItems[activeSectionIndex]).addClass('active');
  });

  ScrollReveal().reveal('#cta', {
      origin: 'left',
      duration: 2000,
      distance: '20%'
  });

  ScrollReveal().reveal('#banner', {
      origin: 'right',
      duration: 2000,
      distance: '20%'
  });

  ScrollReveal().reveal('#services', {
    origin: 'left',
    duration: 2000,
    distance: '20%'
});

ScrollReveal().reveal('#services2', {
  origin: 'right',
  duration: 2000,
  distance: '20%'
});

  ScrollReveal().reveal('#testimonial_chef', {
      origin: 'left',
      duration: 1000,
      distance: '20%'
  })

  ScrollReveal().reveal('.feedback', {
      origin: 'right',
      duration: 1000,
      distance: '20%'
  })
});



$(document).ready(function() {
  // Adiciona um evento de clique para os links da navbar
  $('#nav_list a').on('click', function(e) {
      // Previne o comportamento padrão do link
      e.preventDefault();

      // Obtém o atributo href do link clicado
      var target = $(this).attr('href');

      // Calcula a posição do destino
      var offset = $(target).offset().top;

      // Anima o scroll suave até o destino
      $('html, body').animate({
          scrollTop: offset
      }, 700); // Tempo da animação em milissegundos
  });
});



document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.carousel-item');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentIndex = 0;

    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.style.transform = `translateX(-${index * 100}%)`;
      });
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    }

    function prevSlide() {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      showSlide(currentIndex);
    }

    let intervalId = setInterval(nextSlide, 3000);

    carousel.addEventListener('mouseenter', () => {
      clearInterval(intervalId);
    });

    carousel.addEventListener('mouseleave', () => {
      intervalId = setInterval(nextSlide, 3000);
    });

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
  });