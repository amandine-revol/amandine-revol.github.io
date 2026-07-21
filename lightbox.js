document.addEventListener('DOMContentLoaded', function () {
  if (!window.jQuery || !jQuery.fancybox) {
    return;
  }

  jQuery('[data-fancybox]').fancybox({
    toolbar: true,
    smallBtn: false,
    buttons: ['close']
  });
});