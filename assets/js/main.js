(function ($) {
  var $window = $(window);
  $body = $("body");
  if (Modernizr.csstransitions) {
    $window.on("load", function () {
      window.setTimeout(function () {
        $body.removeClass("is-preload");
      }, 100);
    });

    var resizeTimeout;

    $window.on("resize", function () {
      window.clearTimeout(resizeTimeout);

      $body.addClass("is-resizing");

      resizeTimeout = window.setTimeout(function () {
        $body.removeClass("is-resizing");
      }, 100);
    });
  }
  var $main = $("#main");
  $main.children(".thumb").each(function () {
    var $this = $(this),
      $image = $this.find(".image"),
      $image_img = $image.children("img"),
      x;
    if ($image.length == 0) return;
    $image.css("background-image", "url(" + $image_img.attr("src") + ")");
    if ((x = $image_img.data("position"))) $image.css("background-position", x);
    $image_img.hide();
  });
  $main.poptrox({
    baseZIndex: 20000,
    caption: function ($a) {
      var s = "";

      $a.nextAll().each(function () {
        s += this.outerHTML;
      });

      return s;
    },
    fadeSpeed: 300,
    onPopupClose: function () {
      $body.removeClass("modal-active");
    },
    onPopupOpen: function () {
      $body.addClass("modal-active");
    },
    overlayOpacity: 0,
    popupCloserText: "",
    popupHeight: 150,
    popupLoaderText: "",
    popupSpeed: 300,
    popupWidth: 150,
    selector: ".thumb > a.image",
    usePopupCaption: true,
    usePopupCloser: true,
    usePopupDefaultStyling: false,
    usePopupForceClose: true,
    usePopupLoader: true,
    usePopupNav: true,
    windowMargin: 50,
  });
})(jQuery);
