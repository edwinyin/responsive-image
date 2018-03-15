# responsiveimage.js

In some situation you might need to swap an image with an image catered just for mobile. This class helps you to swap image as the browser window resizes, and save on bandwidth, as you don't need to load both images at once.

## Installation

jQuery is required for this script to work.

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js"></script>
```

## Basic Usage

```html
<script>
  var RI = new ResponsiveImage();
  RI.run();
</script>
```

or you can specify different options to suit your needs

```html
<script>
  var RI = new ResponsiveImage({
    jQuery: $,
    classSelector: '.for-mob',
    toAppend: '_mobile',
    minScreenSize: 768
  });
  RI.run();
</script>
```

remember to run the code each time the browser window resizes

```html
<script>
  $(window).resize(function() {
    RI.run();
  });
</script>
```
