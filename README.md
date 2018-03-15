how to use

var RI = new ResponsiveImage();
RI.run();

or

var RI = new ResponsiveImage({
  jQuery: $,
  classSelector: '.for-mob',
  toAppend: '_mobile',
  minScreenSize: 768
});
RI.run();

run RI.run(); each time the window is resized

$(window).resize(function() {
  RI.run();
});
