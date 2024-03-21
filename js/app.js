$('[data-group]').each(function () {
  const $clicks = $(this).find('[data-click]');
  const $targets = $(this).find('[data-target]');
  $clicks.first().addClass('active');
  $targets.first().addClass('active');
  $clicks.on('click', function (e) {
    e.preventDefault();
    const targetID = $(this).data('click');
    const $target = $(`[data-target="${targetID}"]`);
    $targets.removeClass('active');
    $target.addClass('active');
    $clicks.removeClass('active');
    $(this).addClass('active');
  });
});

$('.logo').on('click', function (e) {
  e.preventDefault();
  $('html').animate(
    {
      scrollTop: 0,
    },
    0
  );
});

$('.menu-nav a').each(function () {
  const $allMenus = $('.menu-nav a');
  const id = $(this).attr('href');
  const $section = $(id);
  const sectionTop = $section.offset().top * 0.7;
  $allMenus.first().addClass('active');

  $(window).on('scroll', function () {
    const scrollTop = $(this).scrollTop();
    if (scrollTop >= sectionTop) {
      $allMenus.removeClass('active');
      $(`a[href="${id}"]`).addClass('active');
    }
  });
});

$('.mobile-btn').on('click', function () {
  $('.menu-nav').toggleClass('active');
});

$('.mobile-btn').on('mouseover', function () {
  $(this).addClass('active');
});
$('.mobile-btn').on('mouseleave', function () {
  $(this).removeClass('active');
});

function slide($slide) {
  const rotate = setInterval(rotateSlide, 2000);
  $($slide + ' > :first').addClass('active');

  function rotateSlide() {
    const $activeSlide = $($slide + ' > .active');
    let $nextSlide = $activeSlide.next();
    if ($nextSlide.length == 0) {
      $nextSlide = $($slide + ' > :first');
      console.log('3')
    }
    $activeSlide.removeClass('active');
    $nextSlide.addClass('active');
  }
}

slide('.teste');
slide('.introducao');
