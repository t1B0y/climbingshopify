/* Jonathan Snook - MIT License - https://github.com/snookca/prepareTransition */
(function(a){a.fn.prepareTransition=function(){return this.each(function(){var b=a(this);b.one("TransitionEnd webkitTransitionEnd transitionend oTransitionEnd",function(){b.removeClass("is-transitioning")});var c=["transition-duration","-moz-transition-duration","-webkit-transition-duration","-o-transition-duration"];var d=0;a.each(c,function(a,c){d=parseFloat(b.css(c))||d});if(d!=0){b.addClass("is-transitioning");b[0].offsetWidth}})}})(jQuery);

/* replaceUrlParam - http://stackoverflow.com/questions/7171099/how-to-replace-url-parameter-with-javascript-jquery */
function replaceUrlParam(e,r,a){var n=new RegExp("("+r+"=).*?(&|$)"),c=e;return c=e.search(n)>=0?e.replace(n,"$1"+a+"$2"):c+(c.indexOf("?")>0?"&":"?")+r+"="+a};


/* ================ SLATE ================ */
window.star = window.star || {};
window.theme = window.theme || {};

theme.Sections = function Sections() {
  this.constructors = {};
  this.instances = [];

  $(document)
    .on('shopify:section:load', this._onSectionLoad.bind(this))
    .on('shopify:section:unload', this._onSectionUnload.bind(this))
    .on('shopify:section:select', this._onSelect.bind(this))
    .on('shopify:section:deselect', this._onDeselect.bind(this))
    .on('shopify:block:select', this._onBlockSelect.bind(this))
    .on('shopify:block:deselect', this._onBlockDeselect.bind(this));
};

theme.Sections.prototype = _.assignIn({}, theme.Sections.prototype, {
  _createInstance: function(container, constructor) {
    var $container = $(container);
    var id = $container.attr('data-section-id');
    var type = $container.attr('data-section-type');

    constructor = constructor || this.constructors[type];

    if (_.isUndefined(constructor)) {
      return;
    }

    var instance = _.assignIn(new constructor(container), {
      id: id,
      type: type,
      container: container
    });

    this.instances.push(instance);
  },

  _onSectionLoad: function(evt) {
    var container = $('[data-section-id]', evt.target)[0];
    if (container) {
      this._createInstance(container);
    }
  },

  _onSectionUnload: function(evt) {
    this.instances = _.filter(this.instances, function(instance) {
      var isEventInstance = instance.id === evt.detail.sectionId;

      if (isEventInstance) {
        if (_.isFunction(instance.onUnload)) {
          instance.onUnload(evt);
        }
      }

      return !isEventInstance;
    });
  },

  _onSelect: function(evt) {
    // eslint-disable-next-line no-shadow
    var instance = _.find(this.instances, function(instance) {
      return instance.id === evt.detail.sectionId;
    });

    if (!_.isUndefined(instance) && _.isFunction(instance.onSelect)) {
      instance.onSelect(evt);
    }
  },

  _onDeselect: function(evt) {
    // eslint-disable-next-line no-shadow
    var instance = _.find(this.instances, function(instance) {
      return instance.id === evt.detail.sectionId;
    });

    if (!_.isUndefined(instance) && _.isFunction(instance.onDeselect)) {
      instance.onDeselect(evt);
    }
  },

  _onBlockSelect: function(evt) {
    // eslint-disable-next-line no-shadow
    var instance = _.find(this.instances, function(instance) {
      return instance.id === evt.detail.sectionId;
    });

    if (!_.isUndefined(instance) && _.isFunction(instance.onBlockSelect)) {
      instance.onBlockSelect(evt);
    }
  },

  _onBlockDeselect: function(evt) {
    // eslint-disable-next-line no-shadow
    var instance = _.find(this.instances, function(instance) {
      return instance.id === evt.detail.sectionId;
    });

    if (!_.isUndefined(instance) && _.isFunction(instance.onBlockDeselect)) {
      instance.onBlockDeselect(evt);
    }
  },

  register: function(type, constructor) {
    this.constructors[type] = constructor;

    $('[data-section-type=' + type + ']').each(
      function(index, container) {
        this._createInstance(container, constructor);
      }.bind(this)
    );
  }
});

window.slate = window.slate || {};

/**
 * iFrames
 * -----------------------------------------------------------------------------
 * Wrap videos in div to force responsive layout.
 *
 * @namespace iframes
 */

slate.rte = {
  /**
   * Wrap tables in a container div to make them scrollable when needed
   *
   * @param {object} options - Options to be used
   * @param {jquery} options.$tables - jquery object(s) of the table(s) to wrap
   * @param {string} options.tableWrapperClass - table wrapper class name
   */
  wrapTable: function(options) {
    options.$tables.wrap(
      '<div class="' + options.tableWrapperClass + '"></div>'
    );
  },

  /**
   * Wrap iframes in a container div to make them responsive
   *
   * @param {object} options - Options to be used
   * @param {jquery} options.$iframes - jquery object(s) of the iframe(s) to wrap
   * @param {string} options.iframeWrapperClass - class name used on the wrapping div
   */
  wrapIframe: function(options) {
    options.$iframes.each(function() {
      // Add wrapper to make video responsive
      $(this).wrap('<div class="' + options.iframeWrapperClass + '"></div>');

      // Re-set the src attribute on each iframe after page load
      // for Chrome's "incorrect iFrame content on 'back'" bug.
      // https://code.google.com/p/chromium/issues/detail?id=395791
      // Need to specifically target video and admin bar
      this.src = this.src;
    });
  }
};

window.slate = window.slate || {};

/**
 * A11y Helpers
 * -----------------------------------------------------------------------------
 * A collection of useful functions that help make your theme more accessible
 * to users with visual impairments.
 *
 *
 * @namespace a11y
 */

slate.a11y = {
  /**
   * For use when focus shifts to a container rather than a link
   * eg for In-page links, after scroll, focus shifts to content area so that
   * next `tab` is where user expects if focusing a link, just $link.focus();
   *
   * @param {JQuery} $element - The element to be acted upon
   */
  pageLinkFocus: function($element) {
    var focusClass = 'js-focus-hidden';

    $element
      .first()
      .attr('tabIndex', '-1')
      .focus()
      .addClass(focusClass)
      .one('blur', callback);

    function callback() {
      $element
        .first()
        .removeClass(focusClass)
        .removeAttr('tabindex');
    }
  },

  /**
   * If there's a hash in the url, focus the appropriate element
   */
  focusHash: function() {
    var hash = window.location.hash;

    // is there a hash in the url? is it an element on the page?
    if (hash && document.getElementById(hash.slice(1))) {
      this.pageLinkFocus($(hash));
    }
  },

  /**
   * When an in-page (url w/hash) link is clicked, focus the appropriate element
   */
  bindInPageLinks: function() {
    $('a[href*=#]').on(
      'click',
      function(evt) {
        this.pageLinkFocus($(evt.currentTarget.hash));
      }.bind(this)
    );
  },

  /**
   * Traps the focus in a particular container
   *
   * @param {object} options - Options to be used
   * @param {jQuery} options.$container - Container to trap focus within
   * @param {jQuery} options.$elementToFocus - Element to be focused when focus leaves container
   * @param {string} options.namespace - Namespace used for new focus event handler
   */
  trapFocus: function(options) {
    var eventName = options.namespace
      ? 'focusin.' + options.namespace
      : 'focusin';

    if (!options.$elementToFocus) {
      options.$elementToFocus = options.$container;
    }

    options.$container.attr('tabindex', '-1');
    options.$elementToFocus.focus();

    $(document).off('focusin');

    $(document).on(eventName, function(evt) {
      if (
        options.$container[0] !== evt.target &&
        !options.$container.has(evt.target).length
      ) {
        options.$container.focus();
      }
    });
  },

  /**
   * Removes the trap of focus in a particular container
   *
   * @param {object} options - Options to be used
   * @param {jQuery} options.$container - Container to trap focus within
   * @param {string} options.namespace - Namespace used for new focus event handler
   */
  removeTrapFocus: function(options) {
    var eventName = options.namespace
      ? 'focusin.' + options.namespace
      : 'focusin';

    if (options.$container && options.$container.length) {
      options.$container.removeAttr('tabindex');
    }

    $(document).off(eventName);
  }
};

/**
 * Image Helper Functions
 * -----------------------------------------------------------------------------
 * A collection of functions that help with basic image operations.
 *
 */

theme.Images = (function() {
  /**
   * Preloads an image in memory and uses the browsers cache to store it until needed.
   *
   * @param {Array} images - A list of image urls
   * @param {String} size - A shopify image size attribute
   */

  function preload(images, size) {
    if (typeof images === 'string') {
      images = [images];
    }

    for (var i = 0; i < images.length; i++) {
      var image = images[i];
      this.loadImage(this.getSizedImageUrl(image, size));
    }
  }

  /**
   * Loads and caches an image in the browsers cache.
   * @param {string} path - An image url
   */
  function loadImage(path) {
    new Image().src = path;
  }

  /**
   * Swaps the src of an image for another OR returns the imageURL to the callback function
   * @param image
   * @param element
   * @param callback
   */
  function switchImage(image, element, callback) {
    var size = this.imageSize(element.src);
    var imageUrl = this.getSizedImageUrl(image.src, size);

    if (callback) {
      callback(imageUrl, image, element); // eslint-disable-line callback-return
    } else {
      element.src = imageUrl;
    }
  }

  /**
   * +++ Useful
   * Find the Shopify image attribute size
   *
   * @param {string} src
   * @returns {null}
   */
  function imageSize(src) {
    var match = src.match(
      /.+_((?:pico|icon|thumb|small|compact|medium|large|grande)|\d{1,4}x\d{0,4}|x\d{1,4})[_\\.@]/
    );

    if (match !== null) {
      if (match[2] !== undefined) {
        return match[1] + match[2];
      } else {
        return match[1];
      }
    } else {
      return null;
    }
  }

  /**
   * +++ Useful
   * Adds a Shopify size attribute to a URL
   *
   * @param src
   * @param size
   * @returns {*}
   */
  function getSizedImageUrl(src, size) {
    if (size === null) {
      return src;
    }

    if (size === 'master') {
      return this.removeProtocol(src);
    }

    var match = src.match(
      /\.(jpg|jpeg|gif|png|bmp|bitmap|tiff|tif)(\?v=\d+)?$/i
    );

    if (match !== null) {
      var prefix = src.split(match[0]);
      var suffix = match[0];

      return this.removeProtocol(prefix[0] + '_' + size + suffix);
    }

    return null;
  }

  function removeProtocol(path) {
    return path.replace(/http(s)?:/, '');
  }

  return {
    preload: preload,
    loadImage: loadImage,
    switchImage: switchImage,
    imageSize: imageSize,
    getSizedImageUrl: getSizedImageUrl,
    removeProtocol: removeProtocol
  };
})();

/*============================================================================
  Money Format
  - Shopify.format money is defined in option_selection.js.
    If that file is not included, it is redefined here.
==============================================================================*/
if ((typeof Shopify) === 'undefined') { Shopify = {}; }
if (!Shopify.formatMoney) {
  Shopify.formatMoney = function(cents, format) {
    var value = '',
        placeholderRegex = /\{\{\s*(\w+)\s*\}\}/,
        formatString = (format || this.money_format);

    if (typeof cents == 'string') {
      cents = cents.replace('.','');
    }

    function defaultOption(opt, def) {
      return (typeof opt == 'undefined' ? def : opt);
    }

    function formatWithDelimiters(number, precision, thousands, decimal) {
      precision = defaultOption(precision, 2);
      thousands = defaultOption(thousands, ',');
      decimal   = defaultOption(decimal, '.');

      if (isNaN(number) || number == null) {
        return 0;
      }

      number = (number/100.0).toFixed(precision);

      var parts   = number.split('.'),
          dollars = parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + thousands),
          cents   = parts[1] ? (decimal + parts[1]) : '';

      return dollars + cents;
    }

    switch(formatString.match(placeholderRegex)[1]) {
      case 'amount':
        value = formatWithDelimiters(cents, 2);
        break;
      case 'amount_no_decimals':
        value = formatWithDelimiters(cents, 0);
        break;
      case 'amount_with_comma_separator':
        value = formatWithDelimiters(cents, 2, '.', ',');
        break;
      case 'amount_no_decimals_with_comma_separator':
        value = formatWithDelimiters(cents, 0, '.', ',');
        break;
    }

    return formatString.replace(placeholderRegex, value);
  };
}

/*============================================================================
  star Functions
==============================================================================*/
window.star = window.star || {};

star.cacheSelectors = function () {
  star.cache = {
    // General
    $html                    : $('html'),
    $body                    : $(document.body),

    // Customer Pages
    $recoverPasswordLink     : $('#RecoverPassword'),
    $hideRecoverPasswordLink : $('#HideRecoverPasswordLink'),
    $recoverPasswordForm     : $('#RecoverPasswordForm'),
    $customerLoginForm       : $('#CustomerLoginForm'),
    $passwordResetSuccess    : $('#ResetSuccess')
  };
};

star.init = function () {
  $(document).foundation();

  FastClick.attach(document.body);
  star.cacheSelectors();
  star.loginForms();

};

star.cartSidebarInit = function () {
  
    $('#cartSidebar').on('opened.zf.offcanvas', function() {
      ajaxCart.load();
      $('.header-container, .page-wrapper, .announcement-bar').addClass('content_pushed-left');
    });

    $('#cartSidebar').on('closed.zf.offcanvas', function () {
      $('.header-container, .page-wrapper, .announcement-bar').removeClass('content_pushed-left');
    });
  
};

star.getHash = function () {
  return window.location.hash;
};

/*============================================================================
  Product Page
==============================================================================*/
star.productPage = function (options) {
  var moneyFormat = options.money_format,
      variant = options.variant,
      selector = options.selector;

  // Selectors
  var $addToCart = $('#AddToCart'),
      $productPrice = $('#ProductPrice'),
      $comparePrice = $('#ComparePrice'),
      $quantityElements = $('.quantity-selector, label + .js-qty'),
      $addToCartText = $('#AddToCartText');

  if (variant) {
    if (variant.featured_image) {
       $('#productImages').attr('data-featured-img', variant.featured_image.id);
       star.changeFeaturedImg(variant.featured_image.id);
    }

    // Select a valid variant if available
    if (variant.available) {
      // Available, enable the submit button, change text, show quantity elements
      $addToCart.removeClass('disabled').prop('disabled', false);
      $addToCartText.html("Add to Cart");
      $quantityElements.show();
    } else {
      // Sold out, disable the submit button, change text, hide quantity elements
      $addToCart.addClass('disabled').prop('disabled', true);
      $addToCartText.html("Sold Out");
      $quantityElements.hide();
    }

    // Regardless of stock, update the product price
    $productPrice.html( '<span class="money money-variant-update">' + Shopify.formatMoney(variant.price, moneyFormat) + '</span>' );

    // Also update and show the product's compare price if necessary
    if (variant.compare_at_price > variant.price) {
      $comparePrice
        .html( '<span class="money money-variant-update">' + Shopify.formatMoney(variant.compare_at_price, moneyFormat) + '</span>')
        .show();
    } else {
      $comparePrice.hide();
    }
  } else {
    // The variant doesn't exist, disable submit button.
    // This may be an error or notice that a specific variant is not available.
    $addToCart.addClass('disabled').prop('disabled', true);
    $addToCartText.html("Unavailable");
    $quantityElements.hide();
  }
  if (variant) {
    var form = jQuery('#' + selector.domIdPrefix).closest('form');
    for (var i=0,length=variant.options.length; i<length; i++) {
      var radioButton = form.find('.swatch[data-option-index="' + i + '"] :radio[value="' + variant.options[i] +'"]');
      if (radioButton.size()) {
        radioButton.get(0).checked = true;
      }
    }
  }
};

/*============================================================================
  Product Image Zoom
==============================================================================*/

star.changeFeaturedImg = function (featuredImgId) {
  var newImg = featuredImgId;
  var newSlideIndex = $('#ProductImages div[data-img-id="'+newImg+'"]').attr('data-slick-index');
  if(newSlideIndex) {
    $('#ProductImages').slick('slickGoTo', newSlideIndex, false);
  }
};

star.loginForms = function() {
  function showRecoverPasswordForm() {
    star.cache.$recoverPasswordForm.show();
    star.cache.$customerLoginForm.hide();
  }

  function hideRecoverPasswordForm() {
    star.cache.$recoverPasswordForm.hide();
    star.cache.$customerLoginForm.show();
  }

  star.cache.$recoverPasswordLink.on('click', function(evt) {
    evt.preventDefault();
    showRecoverPasswordForm();
  });

  star.cache.$hideRecoverPasswordLink.on('click', function(evt) {
    evt.preventDefault();
    hideRecoverPasswordForm();
  });

  // Allow deep linking to recover password form
  if (star.getHash() == '#recover') {
    showRecoverPasswordForm();
  }
};

star.resetPasswordSuccess = function() {
  star.cache.$passwordResetSuccess.show();
};

/*============================================================================
  Header
==============================================================================*/
star.headerInit = function (section) {
  var dropdownMenu = new Foundation.DropdownMenu($('#primary-menu')),
  rightMenu = new Foundation.DropdownMenu($('#header-right-menu')),
  mobileSidebar = new Foundation.OffCanvas($('#mobileMenuSidebar'));
  
  var cartSidebar = new Foundation.OffCanvas($('#cartSidebar'));
  

  star.cartSidebarInit();

  $('#mobileMenuSidebar').on('opened.zf.offcanvas', function () {
    $('.header-container, .page-wrapper, .announcement-bar').addClass('content_pushed-right');
  });

  $('#mobileMenuSidebar').on('closed.zf.offcanvas', function () {
    $('.header-container, .page-wrapper, .announcement-bar').removeClass('content_pushed-right');
  });
};

/*============================================================================
  Google Maps
==============================================================================*/
star.newMap = function ( jQueryel, location ) {
  var map = new google.maps.Map(jQueryel[0], {
    zoom: 14,
    disableDefaultUI: true,
    center: location,
    scrollwheel: false,
    zoomControl: true,
    zoomControlOptions: {
        position: google.maps.ControlPosition.LEFT_CENTER
    }
  });
  var marker = new google.maps.Marker({
    position: location,
    map: map
  });

  return map;
}

star.geolocate = function (jQueryel) {
  var geocoder = new google.maps.Geocoder();
  var address = $(jQueryel[0]).attr('data-address-setting');

  geocoder.geocode({ address: address }, function(results, status) {
    if (status !== google.maps.GeocoderStatus.OK) {
      return false;
    }
    star.newMap(jQueryel, results[0].geometry.location);
  });
}

var maps_api_init = 0;
var maps_api_ready = 0;

star.mapsInit = function (section) {
  var map = null;
  var mapContainer = $(section).find('.map__container').first();
  if(mapContainer.length) {
    var api_key = $(mapContainer).attr('data-api-key');
    if(api_key.length) {
      if (!maps_api_ready) {
        maps_api_init = 1;
        $.getScript(
          'https://maps.googleapis.com/maps/api/js?key=' + api_key
        ).done(function() {
          maps_api_ready = 1;
          $('.map__container').each(function () {
            star.geolocate($(this));
          });
        });
      }
    }
  }
};

/*============================================================================
  Youtube Video Section
==============================================================================*/
var youtube_api_ready = 0;

function onYouTubeIframeAPIReady() {
  youtube_api_ready = 1;
  star.ytSectionsInit();
}

star.ytSectionsInit = function() {
  star.loadVideo();

  $('.hero-section_video').each(function () {
    loadBackgroundVideo($(this));
  });
}

star.videoApi = function() {
  var tag = document.createElement('script');
  tag.src = 'https://www.youtube.com/iframe_api';
  var firstScriptTag = document.getElementsByTagName('script')[0];
  $('body').append(tag);
};

function onPlayerChange(evt) {
  if (evt.data == 0) {
    evt.target.seekTo(0);
  }
}

function onVideoReady(evt) {
  var videoCover = $('#' + evt.target.a.id).parents().first().find('.video__cover').first();
  evt.target.setPlaybackQuality('hd1080');

  videoCover.find('.video__play-button').click( function () {
    videoCover.hide();
    $('#' + evt.target.a.id).addClass('youtube-video_started');
    evt.target.playVideo();
  });
}

star.loadVideo = function () {
  var yt_video = $('.video-section .video__iframe');
  if( yt_video.length) {
    yt_video.each( function () {
      var key = $(this).attr('id');
      var video = $(this).attr('data-id');
      var args = {
        ratio: 16 / 9,
        videoId: video,
        playerVars: {
          iv_load_policy: 3,
          modestbranding: 1,
          rel: 0
        },
        events: {
          onReady: onVideoReady
        }
      };

      var videoPlayer = new YT.Player(key, args);

      function setVideoHeight () {
        var videoContainer = $('.video__iframe[id="'+key+'"]');
        var videoHeight = videoContainer.width() * 9 / 16;
        videoContainer.css('height', videoHeight);
      }

      setVideoHeight();
      $(window).resize( function () { setVideoHeight(); });
    });
  }
}

/*============================================================================
  Product Page Section
==============================================================================*/
star.productPageLoad = function (section) {
  var productImages = $('#ProductImages');
  // Product Images Carousel
  if(productImages.length && productImages.first().hasClass('is-carousel')) {
    productImages.slick({
       arrows: false,
       adaptiveHeight: true,
       infinite: false,
       initialSlide: 0,
       fade: true,
       cssEase: 'linear',
       responsive: [
         {
           breakpoint: 768,
           settings: {
             arrows: false,
             centerMode: true,
             centerPadding: '40px',
             slidesToShow: 1,
             focusOnSelect: true,
             fade: false
           }
         }
       ]
      }
    );

    $('#ProductThumbs .product__thumb').click(function () {
      var thumb = $(this);
      if(!thumb.hasClass('active')) {
        var newImageId = thumb.attr('data-thumb-id');
        star.changeFeaturedImg(newImageId);
      }
    });

    productImages.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
      var newActiveThumb = $('.product__thumb:eq('+nextSlide+')');
      if (!newActiveThumb.hasClass('active')) {
        $('.product__thumb.active').removeClass('active');
        $('.product__thumb:eq('+nextSlide+')').addClass('active');
      }
    });
  }

  // Product Images Lightbox
  if( productImages.hasClass('images-lightbox') ) {
    if(!$('#blueimp-gallery').length) {
      star.addBluimpMarckup();
    }
    document.getElementById('ProductImages').onclick = function (event) {
      event = event || window.event;
      var target = event.target || event.srcElement,
          link = target.src ? target.parentNode : target,
          options = {index: link, event: event},
          links = this.getElementsByTagName('a');
      blueimp(links, options);
    }
  }
};

star.addBluimpMarckup = function () {
  var blueimpMarkup = '<div id="blueimp-gallery" class="blueimp-gallery blueimp-gallery-controls">'+
    '<div class="slides"></div>'+
    '<h3 class="title"></h3>'+
    '<a class="prev"><span class="icon icon-angle-left"></span></a>'+
    '<a class="next"><span class="icon icon-angle-right"></span></a>'+
    '<a class="close">×</a>'+
    '<a class="play-pause"></a>'+
    '<ol class="indicator"></ol>'+
    '</div>';
    $('body').append(blueimpMarkup);
}

/*============================================================================
  Mobile Carousels
==============================================================================*/
star.featuredCarousel = function (section) {
  var featuredGrid = $(section).find('.featured__grid');

  if($(featuredGrid).hasClass('featured-carousel')) {
    star.mobileCarouselInit($(featuredGrid));
    $(window).resize( function() {
      star.mobileCarouselInit($(featuredGrid));
    });
  }
}

star.mobileCarouselInit = function (carousel) {
  if ($(window).width() > 768) {
    if (carousel.hasClass('slick-initialized')) {
      carousel.slick('unslick');
    }
  }
  if (!carousel.hasClass('slick-initialized')) {
    carousel.slick({
      adaptiveHeight: true,
      infinite: true,
      mobileFirst: true,
      arrows: false,
      centerMode: true,
      centerPadding: '40px',
      slidesToShow: 1,
      focusOnSelect: true,
      responsive: [
       {
         breakpoint: 768,
         settings: "unslick"
       }
      ]
    });
  }
}

/*============================================================================
  Content Animations
==============================================================================*/
var scrollMagicController = new ScrollMagic.Controller();

star.animateAppear = function (element, appearStyle) {
  elem = $(element).get(0);

  if ($(elem).length) {
    switch (appearStyle) {
      case 'show':
        var tween = TweenMax.to(elem, 0.7, {opacity:1, onComplete: function() {$(elem).removeClass('js-animate-appear-show')}});
        break;
      default:
        break;
    }

    var showScene = new ScrollMagic.Scene({
        offset: 40,
        triggerElement: elem,
        reverse: false,
        triggerHook: 1
     })
      .setTween(tween)
      .addTo(scrollMagicController);
  }
};

/*============================================================================
  Custom Page Sections
==============================================================================*/
star.pageSections = function (section) {
  //Google Maps
  $('div[data-block-type="google-map"]').each(function () {
    if (maps_api_ready) {
      $('.map__container').each(function () {
        star.geolocate($(this));
      });
    } else {
      if (!maps_api_init) {
        star.mapsInit($(this));
      }
    }
  });

  if ($('.video__iframe').length) {
    if (youtube_api_ready) {
      if ($('div[data-block-type="youtube-video"]').length ) {
        star.loadVideo();
      }
    } else {
      if (!$('script[src="https://www.youtube.com/iframe_api"]').length) {
        star.videoApi();
      }
    }
  }
};

/*============================================================================
  Theme Init
==============================================================================*/
var sections = new theme.Sections();

$(document).ready(function() {
  star.init();

  sections.register('header', function (section) {
    var headerAttrs = JSON.stringify(getAttributes($('#shopify-section-header')));
    if (headerAttrs.indexOf("data-theme-editor-section") >= 0) {
      if(!$('body').hasClass('editor-page')) {
        $('body').addClass('editor-page');
      }
    }
    star.headerInit(section);
  });

  var pageTemplateSection = sections.register('page-template', function (section) {
    star.pageSections(section);
  });

  sections.register('product-page', function (section) {
    star.productPageLoad(section);
  });

  sections.register('featured-products', function (section) {
    star.featuredCarousel(section);
  });

  sections.register('featured-collections', function (section) {
    star.featuredCarousel(section);
  });

  sections.register('related-products', function (section) {
    star.featuredCarousel(section);
  });

  sections.register('google-map', function (section) {
    if (maps_api_ready) {
      $('.map__container').each(function () {
        star.geolocate($(this));
      });
    } else {
      if (!maps_api_init) {
        star.mapsInit(section);
      }
    }
  });

  sections.register('youtube-video', function (section) {
    if (youtube_api_ready) {
      star.loadVideo();
    } else {
      if (!$('script[src="https://www.youtube.com/iframe_api"]').length) {
        star.videoApi();
      }
    }
  });

  function getAttributes ( $node ) {
    var attrs = {};
    $.each($node[0].attributes, function ( index, attribute ) {
      attrs[attribute.name] = attribute.value;
    });
    return attrs;
  }

  $(document).on('shopify:section:select', function () {
    if(!$('body').hasClass('editor-page')) {
      $('body').addClass('editor-page');
    }
  });

  $('.js-animate-appear-show').each(function(index, elem){
    star.animateAppear(elem, 'show');
  });
});
