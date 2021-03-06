// how to use

// var RI = new ResponsiveImage();

// or

// var RI = new ResponsiveImage({
//   jQuery: $,
//   classSelector: '.for-mob',
//   toAppend: '_mobile',
//   minScreenSize: 768
// });

// sample image
// use rimg
// <rimg class="for-mob" src="{{ url('/') }}/images/mccafe/coffeeday.jpg" alt="International Coffee Day">

(function() {
  var ResponsiveImage;

  ResponsiveImage = (function(){

    function ResponsiveImage(params, context) {
      var option;
      this.options = {
        jQuery: null,
        classSelector: '.for-mob',
        toAppend: '_mobile',
        minScreenSize: 768
      };

      if (typeof params === 'object') {
        for (option in params) {
          value = params[option];
          this.options[option] = value;
        }
      }

      var responsiveimage = this;
      $(window).resize(function() {
        responsiveimage.run();
      });
      this.run();
    }

    ResponsiveImage.prototype.run = function(){
      var ri = this.options;
      var $ = ri.jQuery;
      $(ri.classSelector).each(function(){
        var src = $(this).attr("src");
        var alt = $(this).attr("alt");
        var cclass = $(this).attr("class");
        var tagname = $(this).prop("tagName").toLowerCase();

        if($(window).width() < ri.minScreenSize){
          if(!src.includes(ri.toAppend)){
            var srcSplit = src.split("/");
            var imageString = srcSplit.pop().split(".");
            var fileExt = "."+imageString.pop();
            var newFileName = imageString[0]+ri.toAppend+fileExt;
            var oldFileName = imageString[0]+fileExt;
            src = src.replace(oldFileName, newFileName);
          }
        }else{
          //for desktop screen
          src = src.replace(ri.toAppend,'');
        }
          //to rename tag
          if(tagname !== "img"){
            $(this).replaceWith( '<img class="'+cclass+'" src="'+src+'" alt="'+alt+'">' );
          }else{
            $(this).attr("src", src);
          }

      });
    }

    return ResponsiveImage;

  })();

  (function(root, factory) {
    if (typeof define === 'function' && define.amd) {
      return define([], factory);
    } else if (typeof module === 'object' && module.exports) {
      return module.exports = factory();
    } else {
      return root.ResponsiveImage = factory();
    }
  })(this, function() {
    return ResponsiveImage;
  });

}).call(this);
