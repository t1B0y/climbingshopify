/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(10);
	__webpack_require__(22);

	__webpack_require__(12);

	window.TweenMax = __webpack_require__(3);
	// window.TimelineMax = require('gsap/src/minified/TimelineMax.min.js');
	// require('gsap/src/minified/plugins/ScrollToPlugin.min.js');
	window.FastClick = __webpack_require__(11);
	__webpack_require__(17);
	__webpack_require__(15);
	window.slick = __webpack_require__(19);
	window.ScrollMagic = __webpack_require__(6);
	__webpack_require__(18);
	__webpack_require__(16);

	window.blueimp = __webpack_require__(8);

	__webpack_require__(21);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*
	 * blueimp helper JS
	 * https://github.com/blueimp/Gallery
	 *
	 * Copyright 2013, Sebastian Tschan
	 * https://blueimp.net
	 *
	 * Licensed under the MIT license:
	 * https://opensource.org/licenses/MIT
	 */

	/* global define, window, document */

	;(function () {
	  'use strict'

	  function extend (obj1, obj2) {
	    var prop
	    for (prop in obj2) {
	      if (obj2.hasOwnProperty(prop)) {
	        obj1[prop] = obj2[prop]
	      }
	    }
	    return obj1
	  }

	  function Helper (query) {
	    if (!this || this.find !== Helper.prototype.find) {
	      // Called as function instead of as constructor,
	      // so we simply return a new instance:
	      return new Helper(query)
	    }
	    this.length = 0
	    if (query) {
	      if (typeof query === 'string') {
	        query = this.find(query)
	      }
	      if (query.nodeType || query === query.window) {
	        // Single HTML element
	        this.length = 1
	        this[0] = query
	      } else {
	        // HTML element collection
	        var i = query.length
	        this.length = i
	        while (i) {
	          i -= 1
	          this[i] = query[i]
	        }
	      }
	    }
	  }

	  Helper.extend = extend

	  Helper.contains = function (container, element) {
	    do {
	      element = element.parentNode
	      if (element === container) {
	        return true
	      }
	    } while (element)
	    return false
	  }

	  Helper.parseJSON = function (string) {
	    return window.JSON && JSON.parse(string)
	  }

	  extend(Helper.prototype, {
	    find: function (query) {
	      var container = this[0] || document
	      if (typeof query === 'string') {
	        if (container.querySelectorAll) {
	          query = container.querySelectorAll(query)
	        } else if (query.charAt(0) === '#') {
	          query = container.getElementById(query.slice(1))
	        } else {
	          query = container.getElementsByTagName(query)
	        }
	      }
	      return new Helper(query)
	    },

	    hasClass: function (className) {
	      if (!this[0]) {
	        return false
	      }
	      return new RegExp('(^|\\s+)' + className + '(\\s+|$)').test(
	        this[0].className
	      )
	    },

	    addClass: function (className) {
	      var i = this.length
	      var element
	      while (i) {
	        i -= 1
	        element = this[i]
	        if (!element.className) {
	          element.className = className
	          return this
	        }
	        if (this.hasClass(className)) {
	          return this
	        }
	        element.className += ' ' + className
	      }
	      return this
	    },

	    removeClass: function (className) {
	      var regexp = new RegExp('(^|\\s+)' + className + '(\\s+|$)')
	      var i = this.length
	      var element
	      while (i) {
	        i -= 1
	        element = this[i]
	        element.className = element.className.replace(regexp, ' ')
	      }
	      return this
	    },

	    on: function (eventName, handler) {
	      var eventNames = eventName.split(/\s+/)
	      var i
	      var element
	      while (eventNames.length) {
	        eventName = eventNames.shift()
	        i = this.length
	        while (i) {
	          i -= 1
	          element = this[i]
	          if (element.addEventListener) {
	            element.addEventListener(eventName, handler, false)
	          } else if (element.attachEvent) {
	            element.attachEvent('on' + eventName, handler)
	          }
	        }
	      }
	      return this
	    },

	    off: function (eventName, handler) {
	      var eventNames = eventName.split(/\s+/)
	      var i
	      var element
	      while (eventNames.length) {
	        eventName = eventNames.shift()
	        i = this.length
	        while (i) {
	          i -= 1
	          element = this[i]
	          if (element.removeEventListener) {
	            element.removeEventListener(eventName, handler, false)
	          } else if (element.detachEvent) {
	            element.detachEvent('on' + eventName, handler)
	          }
	        }
	      }
	      return this
	    },

	    empty: function () {
	      var i = this.length
	      var element
	      while (i) {
	        i -= 1
	        element = this[i]
	        while (element.hasChildNodes()) {
	          element.removeChild(element.lastChild)
	        }
	      }
	      return this
	    },

	    first: function () {
	      return new Helper(this[0])
	    }
	  })

	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	      return Helper
	    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
	  } else {
	    window.blueimp = window.blueimp || {}
	    window.blueimp.helper = Helper
	  }
	})()


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
	 * blueimp Gallery JS
	 * https://github.com/blueimp/Gallery
	 *
	 * Copyright 2013, Sebastian Tschan
	 * https://blueimp.net
	 *
	 * Swipe implementation based on
	 * https://github.com/bradbirdsall/Swipe
	 *
	 * Licensed under the MIT license:
	 * https://opensource.org/licenses/MIT
	 */

	/* global define, window, document, DocumentTouch */

	;(function (factory) {
	  'use strict'
	  if (true) {
	    // Register as an anonymous AMD module:
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
	  } else {
	    // Browser globals:
	    window.blueimp = window.blueimp || {}
	    window.blueimp.Gallery = factory(window.blueimp.helper || window.jQuery)
	  }
	})(function ($) {
	  'use strict'

	  function Gallery (list, options) {
	    if (document.body.style.maxHeight === undefined) {
	      // document.body.style.maxHeight is undefined on IE6 and lower
	      return null
	    }
	    if (!this || this.options !== Gallery.prototype.options) {
	      // Called as function instead of as constructor,
	      // so we simply return a new instance:
	      return new Gallery(list, options)
	    }
	    if (!list || !list.length) {
	      this.console.log(
	        'blueimp Gallery: No or empty list provided as first argument.',
	        list
	      )
	      return
	    }
	    this.list = list
	    this.num = list.length
	    this.initOptions(options)
	    this.initialize()
	  }

	  $.extend(Gallery.prototype, {
	    options: {
	      // The Id, element or querySelector of the gallery widget:
	      container: '#blueimp-gallery',
	      // The tag name, Id, element or querySelector of the slides container:
	      slidesContainer: 'div',
	      // The tag name, Id, element or querySelector of the title element:
	      titleElement: 'h3',
	      // The class to add when the gallery is visible:
	      displayClass: 'blueimp-gallery-display',
	      // The class to add when the gallery controls are visible:
	      controlsClass: 'blueimp-gallery-controls',
	      // The class to add when the gallery only displays one element:
	      singleClass: 'blueimp-gallery-single',
	      // The class to add when the left edge has been reached:
	      leftEdgeClass: 'blueimp-gallery-left',
	      // The class to add when the right edge has been reached:
	      rightEdgeClass: 'blueimp-gallery-right',
	      // The class to add when the automatic slideshow is active:
	      playingClass: 'blueimp-gallery-playing',
	      // The class for all slides:
	      slideClass: 'slide',
	      // The slide class for loading elements:
	      slideLoadingClass: 'slide-loading',
	      // The slide class for elements that failed to load:
	      slideErrorClass: 'slide-error',
	      // The class for the content element loaded into each slide:
	      slideContentClass: 'slide-content',
	      // The class for the "toggle" control:
	      toggleClass: 'toggle',
	      // The class for the "prev" control:
	      prevClass: 'prev',
	      // The class for the "next" control:
	      nextClass: 'next',
	      // The class for the "close" control:
	      closeClass: 'close',
	      // The class for the "play-pause" toggle control:
	      playPauseClass: 'play-pause',
	      // The list object property (or data attribute) with the object type:
	      typeProperty: 'type',
	      // The list object property (or data attribute) with the object title:
	      titleProperty: 'title',
	      // The list object property (or data attribute) with the object alt text:
	      altTextProperty: 'alt',
	      // The list object property (or data attribute) with the object URL:
	      urlProperty: 'href',
	      // The list object property (or data attribute) with the object srcset URL(s):
	      srcsetProperty: 'urlset',
	      // The gallery listens for transitionend events before triggering the
	      // opened and closed events, unless the following option is set to false:
	      displayTransition: true,
	      // Defines if the gallery slides are cleared from the gallery modal,
	      // or reused for the next gallery initialization:
	      clearSlides: true,
	      // Defines if images should be stretched to fill the available space,
	      // while maintaining their aspect ratio (will only be enabled for browsers
	      // supporting background-size="contain", which excludes IE < 9).
	      // Set to "cover", to make images cover all available space (requires
	      // support for background-size="cover", which excludes IE < 9):
	      stretchImages: false,
	      // Toggle the controls on pressing the Return key:
	      toggleControlsOnReturn: true,
	      // Toggle the controls on slide click:
	      toggleControlsOnSlideClick: true,
	      // Toggle the automatic slideshow interval on pressing the Space key:
	      toggleSlideshowOnSpace: true,
	      // Navigate the gallery by pressing left and right on the keyboard:
	      enableKeyboardNavigation: true,
	      // Close the gallery on pressing the Esc key:
	      closeOnEscape: true,
	      // Close the gallery when clicking on an empty slide area:
	      closeOnSlideClick: true,
	      // Close the gallery by swiping up or down:
	      closeOnSwipeUpOrDown: true,
	      // Emulate touch events on mouse-pointer devices such as desktop browsers:
	      emulateTouchEvents: true,
	      // Stop touch events from bubbling up to ancestor elements of the Gallery:
	      stopTouchEventsPropagation: false,
	      // Hide the page scrollbars:
	      hidePageScrollbars: true,
	      // Stops any touches on the container from scrolling the page:
	      disableScroll: true,
	      // Carousel mode (shortcut for carousel specific options):
	      carousel: false,
	      // Allow continuous navigation, moving from last to first
	      // and from first to last slide:
	      continuous: true,
	      // Remove elements outside of the preload range from the DOM:
	      unloadElements: true,
	      // Start with the automatic slideshow:
	      startSlideshow: false,
	      // Delay in milliseconds between slides for the automatic slideshow:
	      slideshowInterval: 5000,
	      // The starting index as integer.
	      // Can also be an object of the given list,
	      // or an equal object with the same url property:
	      index: 0,
	      // The number of elements to load around the current index:
	      preloadRange: 2,
	      // The transition speed between slide changes in milliseconds:
	      transitionSpeed: 400,
	      // The transition speed for automatic slide changes, set to an integer
	      // greater 0 to override the default transition speed:
	      slideshowTransitionSpeed: undefined,
	      // The event object for which the default action will be canceled
	      // on Gallery initialization (e.g. the click event to open the Gallery):
	      event: undefined,
	      // Callback function executed when the Gallery is initialized.
	      // Is called with the gallery instance as "this" object:
	      onopen: undefined,
	      // Callback function executed when the Gallery has been initialized
	      // and the initialization transition has been completed.
	      // Is called with the gallery instance as "this" object:
	      onopened: undefined,
	      // Callback function executed on slide change.
	      // Is called with the gallery instance as "this" object and the
	      // current index and slide as arguments:
	      onslide: undefined,
	      // Callback function executed after the slide change transition.
	      // Is called with the gallery instance as "this" object and the
	      // current index and slide as arguments:
	      onslideend: undefined,
	      // Callback function executed on slide content load.
	      // Is called with the gallery instance as "this" object and the
	      // slide index and slide element as arguments:
	      onslidecomplete: undefined,
	      // Callback function executed when the Gallery is about to be closed.
	      // Is called with the gallery instance as "this" object:
	      onclose: undefined,
	      // Callback function executed when the Gallery has been closed
	      // and the closing transition has been completed.
	      // Is called with the gallery instance as "this" object:
	      onclosed: undefined
	    },

	    carouselOptions: {
	      hidePageScrollbars: false,
	      toggleControlsOnReturn: false,
	      toggleSlideshowOnSpace: false,
	      enableKeyboardNavigation: false,
	      closeOnEscape: false,
	      closeOnSlideClick: false,
	      closeOnSwipeUpOrDown: false,
	      disableScroll: false,
	      startSlideshow: true
	    },

	    console:
	      window.console && typeof window.console.log === 'function'
	        ? window.console
	        : { log: function () {} },

	    // Detect touch, transition, transform and background-size support:
	    support: (function (element) {
	      var support = {
	        touch:
	          window.ontouchstart !== undefined ||
	          (window.DocumentTouch && document instanceof DocumentTouch)
	      }
	      var transitions = {
	        webkitTransition: {
	          end: 'webkitTransitionEnd',
	          prefix: '-webkit-'
	        },
	        MozTransition: {
	          end: 'transitionend',
	          prefix: '-moz-'
	        },
	        OTransition: {
	          end: 'otransitionend',
	          prefix: '-o-'
	        },
	        transition: {
	          end: 'transitionend',
	          prefix: ''
	        }
	      }
	      var prop
	      for (prop in transitions) {
	        if (
	          transitions.hasOwnProperty(prop) &&
	          element.style[prop] !== undefined
	        ) {
	          support.transition = transitions[prop]
	          support.transition.name = prop
	          break
	        }
	      }
	      function elementTests () {
	        var transition = support.transition
	        var prop
	        var translateZ
	        document.body.appendChild(element)
	        if (transition) {
	          prop = transition.name.slice(0, -9) + 'ransform'
	          if (element.style[prop] !== undefined) {
	            element.style[prop] = 'translateZ(0)'
	            translateZ = window
	              .getComputedStyle(element)
	              .getPropertyValue(transition.prefix + 'transform')
	            support.transform = {
	              prefix: transition.prefix,
	              name: prop,
	              translate: true,
	              translateZ: !!translateZ && translateZ !== 'none'
	            }
	          }
	        }
	        if (element.style.backgroundSize !== undefined) {
	          support.backgroundSize = {}
	          element.style.backgroundSize = 'contain'
	          support.backgroundSize.contain =
	            window
	              .getComputedStyle(element)
	              .getPropertyValue('background-size') === 'contain'
	          element.style.backgroundSize = 'cover'
	          support.backgroundSize.cover =
	            window
	              .getComputedStyle(element)
	              .getPropertyValue('background-size') === 'cover'
	        }
	        document.body.removeChild(element)
	      }
	      if (document.body) {
	        elementTests()
	      } else {
	        $(document).on('DOMContentLoaded', elementTests)
	      }
	      return support
	      // Test element, has to be standard HTML and must not be hidden
	      // for the CSS3 tests using window.getComputedStyle to be applicable:
	    })(document.createElement('div')),

	    requestAnimationFrame:
	      window.requestAnimationFrame ||
	      window.webkitRequestAnimationFrame ||
	      window.mozRequestAnimationFrame,

	    cancelAnimationFrame:
	      window.cancelAnimationFrame ||
	      window.webkitCancelRequestAnimationFrame ||
	      window.webkitCancelAnimationFrame ||
	      window.mozCancelAnimationFrame,

	    initialize: function () {
	      this.initStartIndex()
	      if (this.initWidget() === false) {
	        return false
	      }
	      this.initEventListeners()
	      // Load the slide at the given index:
	      this.onslide(this.index)
	      // Manually trigger the slideend event for the initial slide:
	      this.ontransitionend()
	      // Start the automatic slideshow if applicable:
	      if (this.options.startSlideshow) {
	        this.play()
	      }
	    },

	    slide: function (to, speed) {
	      window.clearTimeout(this.timeout)
	      var index = this.index
	      var direction
	      var naturalDirection
	      var diff
	      if (index === to || this.num === 1) {
	        return
	      }
	      if (!speed) {
	        speed = this.options.transitionSpeed
	      }
	      if (this.support.transform) {
	        if (!this.options.continuous) {
	          to = this.circle(to)
	        }
	        // 1: backward, -1: forward:
	        direction = Math.abs(index - to) / (index - to)
	        // Get the actual position of the slide:
	        if (this.options.continuous) {
	          naturalDirection = direction
	          direction = -this.positions[this.circle(to)] / this.slideWidth
	          // If going forward but to < index, use to = slides.length + to
	          // If going backward but to > index, use to = -slides.length + to
	          if (direction !== naturalDirection) {
	            to = -direction * this.num + to
	          }
	        }
	        diff = Math.abs(index - to) - 1
	        // Move all the slides between index and to in the right direction:
	        while (diff) {
	          diff -= 1
	          this.move(
	            this.circle((to > index ? to : index) - diff - 1),
	            this.slideWidth * direction,
	            0
	          )
	        }
	        to = this.circle(to)
	        this.move(index, this.slideWidth * direction, speed)
	        this.move(to, 0, speed)
	        if (this.options.continuous) {
	          this.move(
	            this.circle(to - direction),
	            -(this.slideWidth * direction),
	            0
	          )
	        }
	      } else {
	        to = this.circle(to)
	        this.animate(index * -this.slideWidth, to * -this.slideWidth, speed)
	      }
	      this.onslide(to)
	    },

	    getIndex: function () {
	      return this.index
	    },

	    getNumber: function () {
	      return this.num
	    },

	    prev: function () {
	      if (this.options.continuous || this.index) {
	        this.slide(this.index - 1)
	      }
	    },

	    next: function () {
	      if (this.options.continuous || this.index < this.num - 1) {
	        this.slide(this.index + 1)
	      }
	    },

	    play: function (time) {
	      var that = this
	      window.clearTimeout(this.timeout)
	      this.interval = time || this.options.slideshowInterval
	      if (this.elements[this.index] > 1) {
	        this.timeout = this.setTimeout(
	          (!this.requestAnimationFrame && this.slide) ||
	            function (to, speed) {
	              that.animationFrameId = that.requestAnimationFrame.call(
	                window,
	                function () {
	                  that.slide(to, speed)
	                }
	              )
	            },
	          [this.index + 1, this.options.slideshowTransitionSpeed],
	          this.interval
	        )
	      }
	      this.container.addClass(this.options.playingClass)
	    },

	    pause: function () {
	      window.clearTimeout(this.timeout)
	      this.interval = null
	      if (this.cancelAnimationFrame) {
	        this.cancelAnimationFrame.call(window, this.animationFrameId)
	        this.animationFrameId = null
	      }
	      this.container.removeClass(this.options.playingClass)
	    },

	    add: function (list) {
	      var i
	      if (!list.concat) {
	        // Make a real array out of the list to add:
	        list = Array.prototype.slice.call(list)
	      }
	      if (!this.list.concat) {
	        // Make a real array out of the Gallery list:
	        this.list = Array.prototype.slice.call(this.list)
	      }
	      this.list = this.list.concat(list)
	      this.num = this.list.length
	      if (this.num > 2 && this.options.continuous === null) {
	        this.options.continuous = true
	        this.container.removeClass(this.options.leftEdgeClass)
	      }
	      this.container
	        .removeClass(this.options.rightEdgeClass)
	        .removeClass(this.options.singleClass)
	      for (i = this.num - list.length; i < this.num; i += 1) {
	        this.addSlide(i)
	        this.positionSlide(i)
	      }
	      this.positions.length = this.num
	      this.initSlides(true)
	    },

	    resetSlides: function () {
	      this.slidesContainer.empty()
	      this.unloadAllSlides()
	      this.slides = []
	    },

	    handleClose: function () {
	      var options = this.options
	      this.destroyEventListeners()
	      // Cancel the slideshow:
	      this.pause()
	      this.container[0].style.display = 'none'
	      this.container
	        .removeClass(options.displayClass)
	        .removeClass(options.singleClass)
	        .removeClass(options.leftEdgeClass)
	        .removeClass(options.rightEdgeClass)
	      if (options.hidePageScrollbars) {
	        document.body.style.overflow = this.bodyOverflowStyle
	      }
	      if (this.options.clearSlides) {
	        this.resetSlides()
	      }
	      if (this.options.onclosed) {
	        this.options.onclosed.call(this)
	      }
	    },

	    close: function () {
	      var that = this
	      function closeHandler (event) {
	        if (event.target === that.container[0]) {
	          that.container.off(that.support.transition.end, closeHandler)
	          that.handleClose()
	        }
	      }
	      if (this.options.onclose) {
	        this.options.onclose.call(this)
	      }
	      if (this.support.transition && this.options.displayTransition) {
	        this.container.on(this.support.transition.end, closeHandler)
	        this.container.removeClass(this.options.displayClass)
	      } else {
	        this.handleClose()
	      }
	    },

	    circle: function (index) {
	      // Always return a number inside of the slides index range:
	      return (this.num + index % this.num) % this.num
	    },

	    move: function (index, dist, speed) {
	      this.translateX(index, dist, speed)
	      this.positions[index] = dist
	    },

	    translate: function (index, x, y, speed) {
	      var style = this.slides[index].style
	      var transition = this.support.transition
	      var transform = this.support.transform
	      style[transition.name + 'Duration'] = speed + 'ms'
	      style[transform.name] =
	        'translate(' +
	        x +
	        'px, ' +
	        y +
	        'px)' +
	        (transform.translateZ ? ' translateZ(0)' : '')
	    },

	    translateX: function (index, x, speed) {
	      this.translate(index, x, 0, speed)
	    },

	    translateY: function (index, y, speed) {
	      this.translate(index, 0, y, speed)
	    },

	    animate: function (from, to, speed) {
	      if (!speed) {
	        this.slidesContainer[0].style.left = to + 'px'
	        return
	      }
	      var that = this
	      var start = new Date().getTime()
	      var timer = window.setInterval(function () {
	        var timeElap = new Date().getTime() - start
	        if (timeElap > speed) {
	          that.slidesContainer[0].style.left = to + 'px'
	          that.ontransitionend()
	          window.clearInterval(timer)
	          return
	        }
	        that.slidesContainer[0].style.left =
	          (to - from) * (Math.floor(timeElap / speed * 100) / 100) + from + 'px'
	      }, 4)
	    },

	    preventDefault: function (event) {
	      if (event.preventDefault) {
	        event.preventDefault()
	      } else {
	        event.returnValue = false
	      }
	    },

	    stopPropagation: function (event) {
	      if (event.stopPropagation) {
	        event.stopPropagation()
	      } else {
	        event.cancelBubble = true
	      }
	    },

	    onresize: function () {
	      this.initSlides(true)
	    },

	    onmousedown: function (event) {
	      // Trigger on clicks of the left mouse button only
	      // and exclude video & audio elements:
	      if (
	        event.which &&
	        event.which === 1 &&
	        event.target.nodeName !== 'VIDEO' &&
	        event.target.nodeName !== 'AUDIO'
	      ) {
	        // Preventing the default mousedown action is required
	        // to make touch emulation work with Firefox:
	        event.preventDefault()
	        ;(event.originalEvent || event).touches = [
	          {
	            pageX: event.pageX,
	            pageY: event.pageY
	          }
	        ]
	        this.ontouchstart(event)
	      }
	    },

	    onmousemove: function (event) {
	      if (this.touchStart) {
	        ;(event.originalEvent || event).touches = [
	          {
	            pageX: event.pageX,
	            pageY: event.pageY
	          }
	        ]
	        this.ontouchmove(event)
	      }
	    },

	    onmouseup: function (event) {
	      if (this.touchStart) {
	        this.ontouchend(event)
	        delete this.touchStart
	      }
	    },

	    onmouseout: function (event) {
	      if (this.touchStart) {
	        var target = event.target
	        var related = event.relatedTarget
	        if (!related || (related !== target && !$.contains(target, related))) {
	          this.onmouseup(event)
	        }
	      }
	    },

	    ontouchstart: function (event) {
	      if (this.options.stopTouchEventsPropagation) {
	        this.stopPropagation(event)
	      }
	      // jQuery doesn't copy touch event properties by default,
	      // so we have to access the originalEvent object:
	      var touches = (event.originalEvent || event).touches[0]
	      this.touchStart = {
	        // Remember the initial touch coordinates:
	        x: touches.pageX,
	        y: touches.pageY,
	        // Store the time to determine touch duration:
	        time: Date.now()
	      }
	      // Helper variable to detect scroll movement:
	      this.isScrolling = undefined
	      // Reset delta values:
	      this.touchDelta = {}
	    },

	    ontouchmove: function (event) {
	      if (this.options.stopTouchEventsPropagation) {
	        this.stopPropagation(event)
	      }
	      // jQuery doesn't copy touch event properties by default,
	      // so we have to access the originalEvent object:
	      var touches = (event.originalEvent || event).touches[0]
	      var scale = (event.originalEvent || event).scale
	      var index = this.index
	      var touchDeltaX
	      var indices
	      // Ensure this is a one touch swipe and not, e.g. a pinch:
	      if (touches.length > 1 || (scale && scale !== 1)) {
	        return
	      }
	      if (this.options.disableScroll) {
	        event.preventDefault()
	      }
	      // Measure change in x and y coordinates:
	      this.touchDelta = {
	        x: touches.pageX - this.touchStart.x,
	        y: touches.pageY - this.touchStart.y
	      }
	      touchDeltaX = this.touchDelta.x
	      // Detect if this is a vertical scroll movement (run only once per touch):
	      if (this.isScrolling === undefined) {
	        this.isScrolling =
	          this.isScrolling ||
	          Math.abs(touchDeltaX) < Math.abs(this.touchDelta.y)
	      }
	      if (!this.isScrolling) {
	        // Always prevent horizontal scroll:
	        event.preventDefault()
	        // Stop the slideshow:
	        window.clearTimeout(this.timeout)
	        if (this.options.continuous) {
	          indices = [this.circle(index + 1), index, this.circle(index - 1)]
	        } else {
	          // Increase resistance if first slide and sliding left
	          // or last slide and sliding right:
	          this.touchDelta.x = touchDeltaX =
	            touchDeltaX /
	            ((!index && touchDeltaX > 0) ||
	            (index === this.num - 1 && touchDeltaX < 0)
	              ? Math.abs(touchDeltaX) / this.slideWidth + 1
	              : 1)
	          indices = [index]
	          if (index) {
	            indices.push(index - 1)
	          }
	          if (index < this.num - 1) {
	            indices.unshift(index + 1)
	          }
	        }
	        while (indices.length) {
	          index = indices.pop()
	          this.translateX(index, touchDeltaX + this.positions[index], 0)
	        }
	      } else {
	        this.translateY(index, this.touchDelta.y + this.positions[index], 0)
	      }
	    },

	    ontouchend: function (event) {
	      if (this.options.stopTouchEventsPropagation) {
	        this.stopPropagation(event)
	      }
	      var index = this.index
	      var speed = this.options.transitionSpeed
	      var slideWidth = this.slideWidth
	      var isShortDuration = Number(Date.now() - this.touchStart.time) < 250
	      // Determine if slide attempt triggers next/prev slide:
	      var isValidSlide =
	        (isShortDuration && Math.abs(this.touchDelta.x) > 20) ||
	        Math.abs(this.touchDelta.x) > slideWidth / 2
	      // Determine if slide attempt is past start or end:
	      var isPastBounds =
	        (!index && this.touchDelta.x > 0) ||
	        (index === this.num - 1 && this.touchDelta.x < 0)
	      var isValidClose =
	        !isValidSlide &&
	        this.options.closeOnSwipeUpOrDown &&
	        ((isShortDuration && Math.abs(this.touchDelta.y) > 20) ||
	          Math.abs(this.touchDelta.y) > this.slideHeight / 2)
	      var direction
	      var indexForward
	      var indexBackward
	      var distanceForward
	      var distanceBackward
	      if (this.options.continuous) {
	        isPastBounds = false
	      }
	      // Determine direction of swipe (true: right, false: left):
	      direction = this.touchDelta.x < 0 ? -1 : 1
	      if (!this.isScrolling) {
	        if (isValidSlide && !isPastBounds) {
	          indexForward = index + direction
	          indexBackward = index - direction
	          distanceForward = slideWidth * direction
	          distanceBackward = -slideWidth * direction
	          if (this.options.continuous) {
	            this.move(this.circle(indexForward), distanceForward, 0)
	            this.move(this.circle(index - 2 * direction), distanceBackward, 0)
	          } else if (indexForward >= 0 && indexForward < this.num) {
	            this.move(indexForward, distanceForward, 0)
	          }
	          this.move(index, this.positions[index] + distanceForward, speed)
	          this.move(
	            this.circle(indexBackward),
	            this.positions[this.circle(indexBackward)] + distanceForward,
	            speed
	          )
	          index = this.circle(indexBackward)
	          this.onslide(index)
	        } else {
	          // Move back into position
	          if (this.options.continuous) {
	            this.move(this.circle(index - 1), -slideWidth, speed)
	            this.move(index, 0, speed)
	            this.move(this.circle(index + 1), slideWidth, speed)
	          } else {
	            if (index) {
	              this.move(index - 1, -slideWidth, speed)
	            }
	            this.move(index, 0, speed)
	            if (index < this.num - 1) {
	              this.move(index + 1, slideWidth, speed)
	            }
	          }
	        }
	      } else {
	        if (isValidClose) {
	          this.close()
	        } else {
	          // Move back into position
	          this.translateY(index, 0, speed)
	        }
	      }
	    },

	    ontouchcancel: function (event) {
	      if (this.touchStart) {
	        this.ontouchend(event)
	        delete this.touchStart
	      }
	    },

	    ontransitionend: function (event) {
	      var slide = this.slides[this.index]
	      if (!event || slide === event.target) {
	        if (this.interval) {
	          this.play()
	        }
	        this.setTimeout(this.options.onslideend, [this.index, slide])
	      }
	    },

	    oncomplete: function (event) {
	      var target = event.target || event.srcElement
	      var parent = target && target.parentNode
	      var index
	      if (!target || !parent) {
	        return
	      }
	      index = this.getNodeIndex(parent)
	      $(parent).removeClass(this.options.slideLoadingClass)
	      if (event.type === 'error') {
	        $(parent).addClass(this.options.slideErrorClass)
	        this.elements[index] = 3 // Fail
	      } else {
	        this.elements[index] = 2 // Done
	      }
	      // Fix for IE7's lack of support for percentage max-height:
	      if (target.clientHeight > this.container[0].clientHeight) {
	        target.style.maxHeight = this.container[0].clientHeight
	      }
	      if (this.interval && this.slides[this.index] === parent) {
	        this.play()
	      }
	      this.setTimeout(this.options.onslidecomplete, [index, parent])
	    },

	    onload: function (event) {
	      this.oncomplete(event)
	    },

	    onerror: function (event) {
	      this.oncomplete(event)
	    },

	    onkeydown: function (event) {
	      switch (event.which || event.keyCode) {
	        case 13: // Return
	          if (this.options.toggleControlsOnReturn) {
	            this.preventDefault(event)
	            this.toggleControls()
	          }
	          break
	        case 27: // Esc
	          if (this.options.closeOnEscape) {
	            this.close()
	            // prevent Esc from closing other things
	            event.stopImmediatePropagation()
	          }
	          break
	        case 32: // Space
	          if (this.options.toggleSlideshowOnSpace) {
	            this.preventDefault(event)
	            this.toggleSlideshow()
	          }
	          break
	        case 37: // Left
	          if (this.options.enableKeyboardNavigation) {
	            this.preventDefault(event)
	            this.prev()
	          }
	          break
	        case 39: // Right
	          if (this.options.enableKeyboardNavigation) {
	            this.preventDefault(event)
	            this.next()
	          }
	          break
	      }
	    },

	    handleClick: function (event) {
	      var options = this.options
	      var target = event.target || event.srcElement
	      var parent = target.parentNode
	      function isTarget (className) {
	        return $(target).hasClass(className) || $(parent).hasClass(className)
	      }
	      if (isTarget(options.toggleClass)) {
	        // Click on "toggle" control
	        this.preventDefault(event)
	        this.toggleControls()
	      } else if (isTarget(options.prevClass)) {
	        // Click on "prev" control
	        this.preventDefault(event)
	        this.prev()
	      } else if (isTarget(options.nextClass)) {
	        // Click on "next" control
	        this.preventDefault(event)
	        this.next()
	      } else if (isTarget(options.closeClass)) {
	        // Click on "close" control
	        this.preventDefault(event)
	        this.close()
	      } else if (isTarget(options.playPauseClass)) {
	        // Click on "play-pause" control
	        this.preventDefault(event)
	        this.toggleSlideshow()
	      } else if (parent === this.slidesContainer[0]) {
	        // Click on slide background
	        if (options.closeOnSlideClick) {
	          this.preventDefault(event)
	          this.close()
	        } else if (options.toggleControlsOnSlideClick) {
	          this.preventDefault(event)
	          this.toggleControls()
	        }
	      } else if (
	        parent.parentNode &&
	        parent.parentNode === this.slidesContainer[0]
	      ) {
	        // Click on displayed element
	        if (options.toggleControlsOnSlideClick) {
	          this.preventDefault(event)
	          this.toggleControls()
	        }
	      }
	    },

	    onclick: function (event) {
	      if (
	        this.options.emulateTouchEvents &&
	        this.touchDelta &&
	        (Math.abs(this.touchDelta.x) > 20 || Math.abs(this.touchDelta.y) > 20)
	      ) {
	        delete this.touchDelta
	        return
	      }
	      return this.handleClick(event)
	    },

	    updateEdgeClasses: function (index) {
	      if (!index) {
	        this.container.addClass(this.options.leftEdgeClass)
	      } else {
	        this.container.removeClass(this.options.leftEdgeClass)
	      }
	      if (index === this.num - 1) {
	        this.container.addClass(this.options.rightEdgeClass)
	      } else {
	        this.container.removeClass(this.options.rightEdgeClass)
	      }
	    },

	    handleSlide: function (index) {
	      if (!this.options.continuous) {
	        this.updateEdgeClasses(index)
	      }
	      this.loadElements(index)
	      if (this.options.unloadElements) {
	        this.unloadElements(index)
	      }
	      this.setTitle(index)
	    },

	    onslide: function (index) {
	      this.index = index
	      this.handleSlide(index)
	      this.setTimeout(this.options.onslide, [index, this.slides[index]])
	    },

	    setTitle: function (index) {
	      var firstChild = this.slides[index].firstChild
	      var text = firstChild.title || firstChild.alt
	      var titleElement = this.titleElement
	      if (titleElement.length) {
	        this.titleElement.empty()
	        if (text) {
	          titleElement[0].appendChild(document.createTextNode(text))
	        }
	      }
	    },

	    setTimeout: function (func, args, wait) {
	      var that = this
	      return (
	        func &&
	        window.setTimeout(function () {
	          func.apply(that, args || [])
	        }, wait || 0)
	      )
	    },

	    imageFactory: function (obj, callback) {
	      var that = this
	      var img = this.imagePrototype.cloneNode(false)
	      var url = obj
	      var backgroundSize = this.options.stretchImages
	      var called
	      var element
	      var title
	      var altText
	      function callbackWrapper (event) {
	        if (!called) {
	          event = {
	            type: event.type,
	            target: element
	          }
	          if (!element.parentNode) {
	            // Fix for IE7 firing the load event for
	            // cached images before the element could
	            // be added to the DOM:
	            return that.setTimeout(callbackWrapper, [event])
	          }
	          called = true
	          $(img).off('load error', callbackWrapper)
	          if (backgroundSize) {
	            if (event.type === 'load') {
	              element.style.background = 'url("' + url + '") center no-repeat'
	              element.style.backgroundSize = backgroundSize
	            }
	          }
	          callback(event)
	        }
	      }
	      if (typeof url !== 'string') {
	        url = this.getItemProperty(obj, this.options.urlProperty)
	        title = this.getItemProperty(obj, this.options.titleProperty)
	        altText =
	          this.getItemProperty(obj, this.options.altTextProperty) || title
	      }
	      if (backgroundSize === true) {
	        backgroundSize = 'contain'
	      }
	      backgroundSize =
	        this.support.backgroundSize &&
	        this.support.backgroundSize[backgroundSize] &&
	        backgroundSize
	      if (backgroundSize) {
	        element = this.elementPrototype.cloneNode(false)
	      } else {
	        element = img
	        img.draggable = false
	      }
	      if (title) {
	        element.title = title
	      }
	      if (altText) {
	        element.alt = altText
	      }
	      $(img).on('load error', callbackWrapper)
	      img.src = url
	      return element
	    },

	    createElement: function (obj, callback) {
	      var type = obj && this.getItemProperty(obj, this.options.typeProperty)
	      var factory =
	        (type && this[type.split('/')[0] + 'Factory']) || this.imageFactory
	      var element = obj && factory.call(this, obj, callback)
	      var srcset = this.getItemProperty(obj, this.options.srcsetProperty)
	      if (!element) {
	        element = this.elementPrototype.cloneNode(false)
	        this.setTimeout(callback, [
	          {
	            type: 'error',
	            target: element
	          }
	        ])
	      }
	      if (srcset) {
	        element.setAttribute('srcset', srcset)
	      }
	      $(element).addClass(this.options.slideContentClass)
	      return element
	    },

	    loadElement: function (index) {
	      if (!this.elements[index]) {
	        if (this.slides[index].firstChild) {
	          this.elements[index] = $(this.slides[index]).hasClass(
	            this.options.slideErrorClass
	          )
	            ? 3
	            : 2
	        } else {
	          this.elements[index] = 1 // Loading
	          $(this.slides[index]).addClass(this.options.slideLoadingClass)
	          this.slides[index].appendChild(
	            this.createElement(this.list[index], this.proxyListener)
	          )
	        }
	      }
	    },

	    loadElements: function (index) {
	      var limit = Math.min(this.num, this.options.preloadRange * 2 + 1)
	      var j = index
	      var i
	      for (i = 0; i < limit; i += 1) {
	        // First load the current slide element (0),
	        // then the next one (+1),
	        // then the previous one (-2),
	        // then the next after next (+2), etc.:
	        j += i * (i % 2 === 0 ? -1 : 1)
	        // Connect the ends of the list to load slide elements for
	        // continuous navigation:
	        j = this.circle(j)
	        this.loadElement(j)
	      }
	    },

	    unloadElements: function (index) {
	      var i, diff
	      for (i in this.elements) {
	        if (this.elements.hasOwnProperty(i)) {
	          diff = Math.abs(index - i)
	          if (
	            diff > this.options.preloadRange &&
	            diff + this.options.preloadRange < this.num
	          ) {
	            this.unloadSlide(i)
	            delete this.elements[i]
	          }
	        }
	      }
	    },

	    addSlide: function (index) {
	      var slide = this.slidePrototype.cloneNode(false)
	      slide.setAttribute('data-index', index)
	      this.slidesContainer[0].appendChild(slide)
	      this.slides.push(slide)
	    },

	    positionSlide: function (index) {
	      var slide = this.slides[index]
	      slide.style.width = this.slideWidth + 'px'
	      if (this.support.transform) {
	        slide.style.left = index * -this.slideWidth + 'px'
	        this.move(
	          index,
	          this.index > index
	            ? -this.slideWidth
	            : this.index < index ? this.slideWidth : 0,
	          0
	        )
	      }
	    },

	    initSlides: function (reload) {
	      var clearSlides, i
	      if (!reload) {
	        this.positions = []
	        this.positions.length = this.num
	        this.elements = {}
	        this.imagePrototype = document.createElement('img')
	        this.elementPrototype = document.createElement('div')
	        this.slidePrototype = document.createElement('div')
	        $(this.slidePrototype).addClass(this.options.slideClass)
	        this.slides = this.slidesContainer[0].children
	        clearSlides =
	          this.options.clearSlides || this.slides.length !== this.num
	      }
	      this.slideWidth = this.container[0].clientWidth
	      this.slideHeight = this.container[0].clientHeight
	      this.slidesContainer[0].style.width = this.num * this.slideWidth + 'px'
	      if (clearSlides) {
	        this.resetSlides()
	      }
	      for (i = 0; i < this.num; i += 1) {
	        if (clearSlides) {
	          this.addSlide(i)
	        }
	        this.positionSlide(i)
	      }
	      // Reposition the slides before and after the given index:
	      if (this.options.continuous && this.support.transform) {
	        this.move(this.circle(this.index - 1), -this.slideWidth, 0)
	        this.move(this.circle(this.index + 1), this.slideWidth, 0)
	      }
	      if (!this.support.transform) {
	        this.slidesContainer[0].style.left =
	          this.index * -this.slideWidth + 'px'
	      }
	    },

	    unloadSlide: function (index) {
	      var slide, firstChild
	      slide = this.slides[index]
	      firstChild = slide.firstChild
	      if (firstChild !== null) {
	        slide.removeChild(firstChild)
	      }
	    },

	    unloadAllSlides: function () {
	      var i, len
	      for (i = 0, len = this.slides.length; i < len; i++) {
	        this.unloadSlide(i)
	      }
	    },

	    toggleControls: function () {
	      var controlsClass = this.options.controlsClass
	      if (this.container.hasClass(controlsClass)) {
	        this.container.removeClass(controlsClass)
	      } else {
	        this.container.addClass(controlsClass)
	      }
	    },

	    toggleSlideshow: function () {
	      if (!this.interval) {
	        this.play()
	      } else {
	        this.pause()
	      }
	    },

	    getNodeIndex: function (element) {
	      return parseInt(element.getAttribute('data-index'), 10)
	    },

	    getNestedProperty: function (obj, property) {
	      property.replace(
	        // Matches native JavaScript notation in a String,
	        // e.g. '["doubleQuoteProp"].dotProp[2]'
	        // eslint-disable-next-line no-useless-escape
	        /\[(?:'([^']+)'|"([^"]+)"|(\d+))\]|(?:(?:^|\.)([^\.\[]+))/g,
	        function (str, singleQuoteProp, doubleQuoteProp, arrayIndex, dotProp) {
	          var prop =
	            dotProp ||
	            singleQuoteProp ||
	            doubleQuoteProp ||
	            (arrayIndex && parseInt(arrayIndex, 10))
	          if (str && obj) {
	            obj = obj[prop]
	          }
	        }
	      )
	      return obj
	    },

	    getDataProperty: function (obj, property) {
	      var key
	      var prop
	      if (obj.dataset) {
	        key = property.replace(/-([a-z])/g, function (_, b) {
	          return b.toUpperCase()
	        })
	        prop = obj.dataset[key]
	      } else if (obj.getAttribute) {
	        prop = obj.getAttribute(
	          'data-' + property.replace(/([A-Z])/g, '-$1').toLowerCase()
	        )
	      }
	      if (typeof prop === 'string') {
	        // eslint-disable-next-line no-useless-escape
	        if (
	          /^(true|false|null|-?\d+(\.\d+)?|\{[\s\S]*\}|\[[\s\S]*\])$/.test(prop)
	        ) {
	          try {
	            return $.parseJSON(prop)
	          } catch (ignore) {}
	        }
	        return prop
	      }
	    },

	    getItemProperty: function (obj, property) {
	      var prop = this.getDataProperty(obj, property)
	      if (prop === undefined) {
	        prop = obj[property]
	      }
	      if (prop === undefined) {
	        prop = this.getNestedProperty(obj, property)
	      }
	      return prop
	    },

	    initStartIndex: function () {
	      var index = this.options.index
	      var urlProperty = this.options.urlProperty
	      var i
	      // Check if the index is given as a list object:
	      if (index && typeof index !== 'number') {
	        for (i = 0; i < this.num; i += 1) {
	          if (
	            this.list[i] === index ||
	            this.getItemProperty(this.list[i], urlProperty) ===
	              this.getItemProperty(index, urlProperty)
	          ) {
	            index = i
	            break
	          }
	        }
	      }
	      // Make sure the index is in the list range:
	      this.index = this.circle(parseInt(index, 10) || 0)
	    },

	    initEventListeners: function () {
	      var that = this
	      var slidesContainer = this.slidesContainer
	      function proxyListener (event) {
	        var type =
	          that.support.transition && that.support.transition.end === event.type
	            ? 'transitionend'
	            : event.type
	        that['on' + type](event)
	      }
	      $(window).on('resize', proxyListener)
	      $(document.body).on('keydown', proxyListener)
	      this.container.on('click', proxyListener)
	      if (this.support.touch) {
	        slidesContainer.on(
	          'touchstart touchmove touchend touchcancel',
	          proxyListener
	        )
	      } else if (this.options.emulateTouchEvents && this.support.transition) {
	        slidesContainer.on(
	          'mousedown mousemove mouseup mouseout',
	          proxyListener
	        )
	      }
	      if (this.support.transition) {
	        slidesContainer.on(this.support.transition.end, proxyListener)
	      }
	      this.proxyListener = proxyListener
	    },

	    destroyEventListeners: function () {
	      var slidesContainer = this.slidesContainer
	      var proxyListener = this.proxyListener
	      $(window).off('resize', proxyListener)
	      $(document.body).off('keydown', proxyListener)
	      this.container.off('click', proxyListener)
	      if (this.support.touch) {
	        slidesContainer.off(
	          'touchstart touchmove touchend touchcancel',
	          proxyListener
	        )
	      } else if (this.options.emulateTouchEvents && this.support.transition) {
	        slidesContainer.off(
	          'mousedown mousemove mouseup mouseout',
	          proxyListener
	        )
	      }
	      if (this.support.transition) {
	        slidesContainer.off(this.support.transition.end, proxyListener)
	      }
	    },

	    handleOpen: function () {
	      if (this.options.onopened) {
	        this.options.onopened.call(this)
	      }
	    },

	    initWidget: function () {
	      var that = this
	      function openHandler (event) {
	        if (event.target === that.container[0]) {
	          that.container.off(that.support.transition.end, openHandler)
	          that.handleOpen()
	        }
	      }
	      this.container = $(this.options.container)
	      if (!this.container.length) {
	        this.console.log(
	          'blueimp Gallery: Widget container not found.',
	          this.options.container
	        )
	        return false
	      }
	      this.slidesContainer = this.container
	        .find(this.options.slidesContainer)
	        .first()
	      if (!this.slidesContainer.length) {
	        this.console.log(
	          'blueimp Gallery: Slides container not found.',
	          this.options.slidesContainer
	        )
	        return false
	      }
	      this.titleElement = this.container.find(this.options.titleElement).first()
	      if (this.num === 1) {
	        this.container.addClass(this.options.singleClass)
	      }
	      if (this.options.onopen) {
	        this.options.onopen.call(this)
	      }
	      if (this.support.transition && this.options.displayTransition) {
	        this.container.on(this.support.transition.end, openHandler)
	      } else {
	        this.handleOpen()
	      }
	      if (this.options.hidePageScrollbars) {
	        // Hide the page scrollbars:
	        this.bodyOverflowStyle = document.body.style.overflow
	        document.body.style.overflow = 'hidden'
	      }
	      this.container[0].style.display = 'block'
	      this.initSlides()
	      this.container.addClass(this.options.displayClass)
	    },

	    initOptions: function (options) {
	      // Create a copy of the prototype options:
	      this.options = $.extend({}, this.options)
	      // Check if carousel mode is enabled:
	      if (
	        (options && options.carousel) ||
	        (this.options.carousel && (!options || options.carousel !== false))
	      ) {
	        $.extend(this.options, this.carouselOptions)
	      }
	      // Override any given options:
	      $.extend(this.options, options)
	      if (this.num < 3) {
	        // 1 or 2 slides cannot be displayed continuous,
	        // remember the original option by setting to null instead of false:
	        this.options.continuous = this.options.continuous ? null : false
	      }
	      if (!this.support.transition) {
	        this.options.emulateTouchEvents = false
	      }
	      if (this.options.event) {
	        this.preventDefault(this.options.event)
	      }
	    }
	  })

	  return Gallery
	})


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(global) {/*!
	 * VERSION: 1.20.5
	 * DATE: 2018-05-21
	 * UPDATES AND DOCS AT: http://greensock.com
	 * 
	 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
	 *
	 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
	 * This work is subject to the terms at http://greensock.com/standard-license or for
	 * Club GreenSock members, the software agreement that was issued with your membership.
	 * 
	 * @author: Jack Doyle, jack@greensock.com
	 **/
	var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("TweenMax",["core.Animation","core.SimpleTimeline","TweenLite"],function(a,b,c){var d=function(a){var b,c=[],d=a.length;for(b=0;b!==d;c.push(a[b++]));return c},e=function(a,b,c){var d,e,f=a.cycle;for(d in f)e=f[d],a[d]="function"==typeof e?e(c,b[c]):e[c%e.length];delete a.cycle},f=function(a,b,d){c.call(this,a,b,d),this._cycle=0,this._yoyo=this.vars.yoyo===!0||!!this.vars.yoyoEase,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._repeat&&this._uncache(!0),this.render=f.prototype.render},g=1e-10,h=c._internals,i=h.isSelector,j=h.isArray,k=f.prototype=c.to({},.1,{}),l=[];f.version="1.20.5",k.constructor=f,k.kill()._gc=!1,f.killTweensOf=f.killDelayedCallsTo=c.killTweensOf,f.getTweensOf=c.getTweensOf,f.lagSmoothing=c.lagSmoothing,f.ticker=c.ticker,f.render=c.render,k.invalidate=function(){return this._yoyo=this.vars.yoyo===!0||!!this.vars.yoyoEase,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._yoyoEase=null,this._uncache(!0),c.prototype.invalidate.call(this)},k.updateTo=function(a,b){var d,e=this.ratio,f=this.vars.immediateRender||a.immediateRender;b&&this._startTime<this._timeline._time&&(this._startTime=this._timeline._time,this._uncache(!1),this._gc?this._enabled(!0,!1):this._timeline.insert(this,this._startTime-this._delay));for(d in a)this.vars[d]=a[d];if(this._initted||f)if(b)this._initted=!1,f&&this.render(0,!0,!0);else if(this._gc&&this._enabled(!0,!1),this._notifyPluginsOfEnabled&&this._firstPT&&c._onPluginEvent("_onDisable",this),this._time/this._duration>.998){var g=this._totalTime;this.render(0,!0,!1),this._initted=!1,this.render(g,!0,!1)}else if(this._initted=!1,this._init(),this._time>0||f)for(var h,i=1/(1-e),j=this._firstPT;j;)h=j.s+j.c,j.c*=i,j.s=h-j.c,j=j._next;return this},k.render=function(a,b,d){this._initted||0===this._duration&&this.vars.repeat&&this.invalidate();var e,f,i,j,k,l,m,n,o,p=this._dirty?this.totalDuration():this._totalDuration,q=this._time,r=this._totalTime,s=this._cycle,t=this._duration,u=this._rawPrevTime;if(a>=p-1e-7&&a>=0?(this._totalTime=p,this._cycle=this._repeat,this._yoyo&&0!==(1&this._cycle)?(this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0):(this._time=t,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1),this._reversed||(e=!0,f="onComplete",d=d||this._timeline.autoRemoveChildren),0===t&&(this._initted||!this.vars.lazy||d)&&(this._startTime===this._timeline._duration&&(a=0),(0>u||0>=a&&a>=-1e-7||u===g&&"isPause"!==this.data)&&u!==a&&(d=!0,u>g&&(f="onReverseComplete")),this._rawPrevTime=n=!b||a||u===a?a:g)):1e-7>a?(this._totalTime=this._time=this._cycle=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==r||0===t&&u>0)&&(f="onReverseComplete",e=this._reversed),0>a&&(this._active=!1,0===t&&(this._initted||!this.vars.lazy||d)&&(u>=0&&(d=!0),this._rawPrevTime=n=!b||a||u===a?a:g)),this._initted||(d=!0)):(this._totalTime=this._time=a,0!==this._repeat&&(j=t+this._repeatDelay,this._cycle=this._totalTime/j>>0,0!==this._cycle&&this._cycle===this._totalTime/j&&a>=r&&this._cycle--,this._time=this._totalTime-this._cycle*j,this._yoyo&&0!==(1&this._cycle)&&(this._time=t-this._time,o=this._yoyoEase||this.vars.yoyoEase,o&&(this._yoyoEase||(o!==!0||this._initted?this._yoyoEase=o=o===!0?this._ease:o instanceof Ease?o:Ease.map[o]:(o=this.vars.ease,this._yoyoEase=o=o?o instanceof Ease?o:"function"==typeof o?new Ease(o,this.vars.easeParams):Ease.map[o]||c.defaultEase:c.defaultEase)),this.ratio=o?1-o.getRatio((t-this._time)/t):0)),this._time>t?this._time=t:this._time<0&&(this._time=0)),this._easeType&&!o?(k=this._time/t,l=this._easeType,m=this._easePower,(1===l||3===l&&k>=.5)&&(k=1-k),3===l&&(k*=2),1===m?k*=k:2===m?k*=k*k:3===m?k*=k*k*k:4===m&&(k*=k*k*k*k),1===l?this.ratio=1-k:2===l?this.ratio=k:this._time/t<.5?this.ratio=k/2:this.ratio=1-k/2):o||(this.ratio=this._ease.getRatio(this._time/t))),q===this._time&&!d&&s===this._cycle)return void(r!==this._totalTime&&this._onUpdate&&(b||this._callback("onUpdate")));if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!d&&this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration))return this._time=q,this._totalTime=r,this._rawPrevTime=u,this._cycle=s,h.lazyTweens.push(this),void(this._lazy=[a,b]);!this._time||e||o?e&&this._ease._calcEnd&&!o&&(this.ratio=this._ease.getRatio(0===this._time?0:1)):this.ratio=this._ease.getRatio(this._time/t)}for(this._lazy!==!1&&(this._lazy=!1),this._active||!this._paused&&this._time!==q&&a>=0&&(this._active=!0),0===r&&(2===this._initted&&a>0&&this._init(),this._startAt&&(a>=0?this._startAt.render(a,!0,d):f||(f="_dummyGS")),this.vars.onStart&&(0!==this._totalTime||0===t)&&(b||this._callback("onStart"))),i=this._firstPT;i;)i.f?i.t[i.p](i.c*this.ratio+i.s):i.t[i.p]=i.c*this.ratio+i.s,i=i._next;this._onUpdate&&(0>a&&this._startAt&&this._startTime&&this._startAt.render(a,!0,d),b||(this._totalTime!==r||f)&&this._callback("onUpdate")),this._cycle!==s&&(b||this._gc||this.vars.onRepeat&&this._callback("onRepeat")),f&&(!this._gc||d)&&(0>a&&this._startAt&&!this._onUpdate&&this._startTime&&this._startAt.render(a,!0,d),e&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!b&&this.vars[f]&&this._callback(f),0===t&&this._rawPrevTime===g&&n!==g&&(this._rawPrevTime=0))},f.to=function(a,b,c){return new f(a,b,c)},f.from=function(a,b,c){return c.runBackwards=!0,c.immediateRender=0!=c.immediateRender,new f(a,b,c)},f.fromTo=function(a,b,c,d){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,new f(a,b,d)},f.staggerTo=f.allTo=function(a,b,g,h,k,m,n){h=h||0;var o,p,q,r,s=0,t=[],u=function(){g.onComplete&&g.onComplete.apply(g.onCompleteScope||this,arguments),k.apply(n||g.callbackScope||this,m||l)},v=g.cycle,w=g.startAt&&g.startAt.cycle;for(j(a)||("string"==typeof a&&(a=c.selector(a)||a),i(a)&&(a=d(a))),a=a||[],0>h&&(a=d(a),a.reverse(),h*=-1),o=a.length-1,q=0;o>=q;q++){p={};for(r in g)p[r]=g[r];if(v&&(e(p,a,q),null!=p.duration&&(b=p.duration,delete p.duration)),w){w=p.startAt={};for(r in g.startAt)w[r]=g.startAt[r];e(p.startAt,a,q)}p.delay=s+(p.delay||0),q===o&&k&&(p.onComplete=u),t[q]=new f(a[q],b,p),s+=h}return t},f.staggerFrom=f.allFrom=function(a,b,c,d,e,g,h){return c.runBackwards=!0,c.immediateRender=0!=c.immediateRender,f.staggerTo(a,b,c,d,e,g,h)},f.staggerFromTo=f.allFromTo=function(a,b,c,d,e,g,h,i){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,f.staggerTo(a,b,d,e,g,h,i)},f.delayedCall=function(a,b,c,d,e){return new f(b,0,{delay:a,onComplete:b,onCompleteParams:c,callbackScope:d,onReverseComplete:b,onReverseCompleteParams:c,immediateRender:!1,useFrames:e,overwrite:0})},f.set=function(a,b){return new f(a,0,b)},f.isTweening=function(a){return c.getTweensOf(a,!0).length>0};var m=function(a,b){for(var d=[],e=0,f=a._first;f;)f instanceof c?d[e++]=f:(b&&(d[e++]=f),d=d.concat(m(f,b)),e=d.length),f=f._next;return d},n=f.getAllTweens=function(b){return m(a._rootTimeline,b).concat(m(a._rootFramesTimeline,b))};f.killAll=function(a,c,d,e){null==c&&(c=!0),null==d&&(d=!0);var f,g,h,i=n(0!=e),j=i.length,k=c&&d&&e;for(h=0;j>h;h++)g=i[h],(k||g instanceof b||(f=g.target===g.vars.onComplete)&&d||c&&!f)&&(a?g.totalTime(g._reversed?0:g.totalDuration()):g._enabled(!1,!1))},f.killChildTweensOf=function(a,b){if(null!=a){var e,g,k,l,m,n=h.tweenLookup;if("string"==typeof a&&(a=c.selector(a)||a),i(a)&&(a=d(a)),j(a))for(l=a.length;--l>-1;)f.killChildTweensOf(a[l],b);else{e=[];for(k in n)for(g=n[k].target.parentNode;g;)g===a&&(e=e.concat(n[k].tweens)),g=g.parentNode;for(m=e.length,l=0;m>l;l++)b&&e[l].totalTime(e[l].totalDuration()),e[l]._enabled(!1,!1)}}};var o=function(a,c,d,e){c=c!==!1,d=d!==!1,e=e!==!1;for(var f,g,h=n(e),i=c&&d&&e,j=h.length;--j>-1;)g=h[j],(i||g instanceof b||(f=g.target===g.vars.onComplete)&&d||c&&!f)&&g.paused(a)};return f.pauseAll=function(a,b,c){o(!0,a,b,c)},f.resumeAll=function(a,b,c){o(!1,a,b,c)},f.globalTimeScale=function(b){var d=a._rootTimeline,e=c.ticker.time;return arguments.length?(b=b||g,d._startTime=e-(e-d._startTime)*d._timeScale/b,d=a._rootFramesTimeline,e=c.ticker.frame,d._startTime=e-(e-d._startTime)*d._timeScale/b,d._timeScale=a._rootTimeline._timeScale=b,b):d._timeScale},k.progress=function(a,b){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-a:a)+this._cycle*(this._duration+this._repeatDelay),b):this._time/this.duration()},k.totalProgress=function(a,b){return arguments.length?this.totalTime(this.totalDuration()*a,b):this._totalTime/this.totalDuration()},k.time=function(a,b){return arguments.length?(this._dirty&&this.totalDuration(),a>this._duration&&(a=this._duration),this._yoyo&&0!==(1&this._cycle)?a=this._duration-a+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(a+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(a,b)):this._time},k.duration=function(b){return arguments.length?a.prototype.duration.call(this,b):this._duration},k.totalDuration=function(a){return arguments.length?-1===this._repeat?this:this.duration((a-this._repeat*this._repeatDelay)/(this._repeat+1)):(this._dirty&&(this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat,this._dirty=!1),this._totalDuration)},k.repeat=function(a){return arguments.length?(this._repeat=a,this._uncache(!0)):this._repeat},k.repeatDelay=function(a){return arguments.length?(this._repeatDelay=a,this._uncache(!0)):this._repeatDelay},k.yoyo=function(a){return arguments.length?(this._yoyo=a,this):this._yoyo},f},!0),_gsScope._gsDefine("TimelineLite",["core.Animation","core.SimpleTimeline","TweenLite"],function(a,b,c){var d=function(a){b.call(this,a),this._labels={},this.autoRemoveChildren=this.vars.autoRemoveChildren===!0,this.smoothChildTiming=this.vars.smoothChildTiming===!0,this._sortChildren=!0,this._onUpdate=this.vars.onUpdate;var c,d,e=this.vars;for(d in e)c=e[d],i(c)&&-1!==c.join("").indexOf("{self}")&&(e[d]=this._swapSelfInParams(c));i(e.tweens)&&this.add(e.tweens,0,e.align,e.stagger)},e=1e-10,f=c._internals,g=d._internals={},h=f.isSelector,i=f.isArray,j=f.lazyTweens,k=f.lazyRender,l=_gsScope._gsDefine.globals,m=function(a){var b,c={};for(b in a)c[b]=a[b];return c},n=function(a,b,c){var d,e,f=a.cycle;for(d in f)e=f[d],a[d]="function"==typeof e?e(c,b[c]):e[c%e.length];delete a.cycle},o=g.pauseCallback=function(){},p=function(a){var b,c=[],d=a.length;for(b=0;b!==d;c.push(a[b++]));return c},q=d.prototype=new b;return d.version="1.20.4",q.constructor=d,q.kill()._gc=q._forcingPlayhead=q._hasPause=!1,q.to=function(a,b,d,e){var f=d.repeat&&l.TweenMax||c;return b?this.add(new f(a,b,d),e):this.set(a,d,e)},q.from=function(a,b,d,e){return this.add((d.repeat&&l.TweenMax||c).from(a,b,d),e)},q.fromTo=function(a,b,d,e,f){var g=e.repeat&&l.TweenMax||c;return b?this.add(g.fromTo(a,b,d,e),f):this.set(a,e,f)},q.staggerTo=function(a,b,e,f,g,i,j,k){var l,o,q=new d({onComplete:i,onCompleteParams:j,callbackScope:k,smoothChildTiming:this.smoothChildTiming}),r=e.cycle;for("string"==typeof a&&(a=c.selector(a)||a),a=a||[],h(a)&&(a=p(a)),f=f||0,0>f&&(a=p(a),a.reverse(),f*=-1),o=0;o<a.length;o++)l=m(e),l.startAt&&(l.startAt=m(l.startAt),l.startAt.cycle&&n(l.startAt,a,o)),r&&(n(l,a,o),null!=l.duration&&(b=l.duration,delete l.duration)),q.to(a[o],b,l,o*f);return this.add(q,g)},q.staggerFrom=function(a,b,c,d,e,f,g,h){return c.immediateRender=0!=c.immediateRender,c.runBackwards=!0,this.staggerTo(a,b,c,d,e,f,g,h)},q.staggerFromTo=function(a,b,c,d,e,f,g,h,i){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,this.staggerTo(a,b,d,e,f,g,h,i)},q.call=function(a,b,d,e){return this.add(c.delayedCall(0,a,b,d),e)},q.set=function(a,b,d){return d=this._parseTimeOrLabel(d,0,!0),null==b.immediateRender&&(b.immediateRender=d===this._time&&!this._paused),this.add(new c(a,0,b),d)},d.exportRoot=function(a,b){a=a||{},null==a.smoothChildTiming&&(a.smoothChildTiming=!0);var e,f,g,h,i=new d(a),j=i._timeline;for(null==b&&(b=!0),j._remove(i,!0),i._startTime=0,i._rawPrevTime=i._time=i._totalTime=j._time,g=j._first;g;)h=g._next,b&&g instanceof c&&g.target===g.vars.onComplete||(f=g._startTime-g._delay,0>f&&(e=1),i.add(g,f)),g=h;return j.add(i,0),e&&i.totalDuration(),i},q.add=function(e,f,g,h){var j,k,l,m,n,o;if("number"!=typeof f&&(f=this._parseTimeOrLabel(f,0,!0,e)),!(e instanceof a)){if(e instanceof Array||e&&e.push&&i(e)){for(g=g||"normal",h=h||0,j=f,k=e.length,l=0;k>l;l++)i(m=e[l])&&(m=new d({tweens:m})),this.add(m,j),"string"!=typeof m&&"function"!=typeof m&&("sequence"===g?j=m._startTime+m.totalDuration()/m._timeScale:"start"===g&&(m._startTime-=m.delay())),j+=h;return this._uncache(!0)}if("string"==typeof e)return this.addLabel(e,f);if("function"!=typeof e)throw"Cannot add "+e+" into the timeline; it is not a tween, timeline, function, or string.";e=c.delayedCall(0,e)}if(b.prototype.add.call(this,e,f),e._time&&e.render((this.rawTime()-e._startTime)*e._timeScale,!1,!1),(this._gc||this._time===this._duration)&&!this._paused&&this._duration<this.duration())for(n=this,o=n.rawTime()>e._startTime;n._timeline;)o&&n._timeline.smoothChildTiming?n.totalTime(n._totalTime,!0):n._gc&&n._enabled(!0,!1),n=n._timeline;return this},q.remove=function(b){if(b instanceof a){this._remove(b,!1);var c=b._timeline=b.vars.useFrames?a._rootFramesTimeline:a._rootTimeline;return b._startTime=(b._paused?b._pauseTime:c._time)-(b._reversed?b.totalDuration()-b._totalTime:b._totalTime)/b._timeScale,this}if(b instanceof Array||b&&b.push&&i(b)){for(var d=b.length;--d>-1;)this.remove(b[d]);return this}return"string"==typeof b?this.removeLabel(b):this.kill(null,b)},q._remove=function(a,c){b.prototype._remove.call(this,a,c);var d=this._last;return d?this._time>this.duration()&&(this._time=this._duration,this._totalTime=this._totalDuration):this._time=this._totalTime=this._duration=this._totalDuration=0,this},q.append=function(a,b){return this.add(a,this._parseTimeOrLabel(null,b,!0,a))},q.insert=q.insertMultiple=function(a,b,c,d){return this.add(a,b||0,c,d)},q.appendMultiple=function(a,b,c,d){return this.add(a,this._parseTimeOrLabel(null,b,!0,a),c,d)},q.addLabel=function(a,b){return this._labels[a]=this._parseTimeOrLabel(b),this},q.addPause=function(a,b,d,e){var f=c.delayedCall(0,o,d,e||this);return f.vars.onComplete=f.vars.onReverseComplete=b,f.data="isPause",this._hasPause=!0,this.add(f,a)},q.removeLabel=function(a){return delete this._labels[a],this},q.getLabelTime=function(a){return null!=this._labels[a]?this._labels[a]:-1},q._parseTimeOrLabel=function(b,c,d,e){var f,g;if(e instanceof a&&e.timeline===this)this.remove(e);else if(e&&(e instanceof Array||e.push&&i(e)))for(g=e.length;--g>-1;)e[g]instanceof a&&e[g].timeline===this&&this.remove(e[g]);if(f="number"!=typeof b||c?this.duration()>99999999999?this.recent().endTime(!1):this._duration:0,"string"==typeof c)return this._parseTimeOrLabel(c,d&&"number"==typeof b&&null==this._labels[c]?b-f:0,d);if(c=c||0,"string"!=typeof b||!isNaN(b)&&null==this._labels[b])null==b&&(b=f);else{if(g=b.indexOf("="),-1===g)return null==this._labels[b]?d?this._labels[b]=f+c:c:this._labels[b]+c;c=parseInt(b.charAt(g-1)+"1",10)*Number(b.substr(g+1)),b=g>1?this._parseTimeOrLabel(b.substr(0,g-1),0,d):f}return Number(b)+c},q.seek=function(a,b){return this.totalTime("number"==typeof a?a:this._parseTimeOrLabel(a),b!==!1)},q.stop=function(){return this.paused(!0)},q.gotoAndPlay=function(a,b){return this.play(a,b)},q.gotoAndStop=function(a,b){return this.pause(a,b)},q.render=function(a,b,c){this._gc&&this._enabled(!0,!1);var d,f,g,h,i,l,m,n=this._time,o=this._dirty?this.totalDuration():this._totalDuration,p=this._startTime,q=this._timeScale,r=this._paused;if(n!==this._time&&(a+=this._time-n),a>=o-1e-7&&a>=0)this._totalTime=this._time=o,this._reversed||this._hasPausedChild()||(f=!0,h="onComplete",i=!!this._timeline.autoRemoveChildren,0===this._duration&&(0>=a&&a>=-1e-7||this._rawPrevTime<0||this._rawPrevTime===e)&&this._rawPrevTime!==a&&this._first&&(i=!0,this._rawPrevTime>e&&(h="onReverseComplete"))),this._rawPrevTime=this._duration||!b||a||this._rawPrevTime===a?a:e,a=o+1e-4;else if(1e-7>a)if(this._totalTime=this._time=0,(0!==n||0===this._duration&&this._rawPrevTime!==e&&(this._rawPrevTime>0||0>a&&this._rawPrevTime>=0))&&(h="onReverseComplete",f=this._reversed),0>a)this._active=!1,this._timeline.autoRemoveChildren&&this._reversed?(i=f=!0,h="onReverseComplete"):this._rawPrevTime>=0&&this._first&&(i=!0),this._rawPrevTime=a;else{if(this._rawPrevTime=this._duration||!b||a||this._rawPrevTime===a?a:e,0===a&&f)for(d=this._first;d&&0===d._startTime;)d._duration||(f=!1),d=d._next;a=0,this._initted||(i=!0)}else{if(this._hasPause&&!this._forcingPlayhead&&!b){if(a>=n)for(d=this._first;d&&d._startTime<=a&&!l;)d._duration||"isPause"!==d.data||d.ratio||0===d._startTime&&0===this._rawPrevTime||(l=d),d=d._next;else for(d=this._last;d&&d._startTime>=a&&!l;)d._duration||"isPause"===d.data&&d._rawPrevTime>0&&(l=d),d=d._prev;l&&(this._time=a=l._startTime,this._totalTime=a+this._cycle*(this._totalDuration+this._repeatDelay))}this._totalTime=this._time=this._rawPrevTime=a}if(this._time!==n&&this._first||c||i||l){if(this._initted||(this._initted=!0),this._active||!this._paused&&this._time!==n&&a>0&&(this._active=!0),0===n&&this.vars.onStart&&(0===this._time&&this._duration||b||this._callback("onStart")),m=this._time,m>=n)for(d=this._first;d&&(g=d._next,m===this._time&&(!this._paused||r));)(d._active||d._startTime<=m&&!d._paused&&!d._gc)&&(l===d&&this.pause(),d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)),d=g;else for(d=this._last;d&&(g=d._prev,m===this._time&&(!this._paused||r));){if(d._active||d._startTime<=n&&!d._paused&&!d._gc){if(l===d){for(l=d._prev;l&&l.endTime()>this._time;)l.render(l._reversed?l.totalDuration()-(a-l._startTime)*l._timeScale:(a-l._startTime)*l._timeScale,b,c),l=l._prev;l=null,this.pause()}d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)}d=g}this._onUpdate&&(b||(j.length&&k(),this._callback("onUpdate"))),h&&(this._gc||(p===this._startTime||q!==this._timeScale)&&(0===this._time||o>=this.totalDuration())&&(f&&(j.length&&k(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!b&&this.vars[h]&&this._callback(h)))}},q._hasPausedChild=function(){for(var a=this._first;a;){if(a._paused||a instanceof d&&a._hasPausedChild())return!0;a=a._next}return!1},q.getChildren=function(a,b,d,e){e=e||-9999999999;for(var f=[],g=this._first,h=0;g;)g._startTime<e||(g instanceof c?b!==!1&&(f[h++]=g):(d!==!1&&(f[h++]=g),a!==!1&&(f=f.concat(g.getChildren(!0,b,d)),h=f.length))),g=g._next;return f},q.getTweensOf=function(a,b){var d,e,f=this._gc,g=[],h=0;for(f&&this._enabled(!0,!0),d=c.getTweensOf(a),e=d.length;--e>-1;)(d[e].timeline===this||b&&this._contains(d[e]))&&(g[h++]=d[e]);return f&&this._enabled(!1,!0),g},q.recent=function(){return this._recent},q._contains=function(a){for(var b=a.timeline;b;){if(b===this)return!0;b=b.timeline}return!1},q.shiftChildren=function(a,b,c){c=c||0;for(var d,e=this._first,f=this._labels;e;)e._startTime>=c&&(e._startTime+=a),e=e._next;if(b)for(d in f)f[d]>=c&&(f[d]+=a);return this._uncache(!0)},q._kill=function(a,b){if(!a&&!b)return this._enabled(!1,!1);for(var c=b?this.getTweensOf(b):this.getChildren(!0,!0,!1),d=c.length,e=!1;--d>-1;)c[d]._kill(a,b)&&(e=!0);return e},q.clear=function(a){var b=this.getChildren(!1,!0,!0),c=b.length;for(this._time=this._totalTime=0;--c>-1;)b[c]._enabled(!1,!1);return a!==!1&&(this._labels={}),this._uncache(!0)},q.invalidate=function(){for(var b=this._first;b;)b.invalidate(),b=b._next;return a.prototype.invalidate.call(this)},q._enabled=function(a,c){if(a===this._gc)for(var d=this._first;d;)d._enabled(a,!0),d=d._next;return b.prototype._enabled.call(this,a,c)},q.totalTime=function(b,c,d){this._forcingPlayhead=!0;var e=a.prototype.totalTime.apply(this,arguments);return this._forcingPlayhead=!1,e},q.duration=function(a){return arguments.length?(0!==this.duration()&&0!==a&&this.timeScale(this._duration/a),this):(this._dirty&&this.totalDuration(),this._duration)},q.totalDuration=function(a){if(!arguments.length){if(this._dirty){for(var b,c,d=0,e=this._last,f=999999999999;e;)b=e._prev,e._dirty&&e.totalDuration(),e._startTime>f&&this._sortChildren&&!e._paused&&!this._calculatingDuration?(this._calculatingDuration=1,this.add(e,e._startTime-e._delay),this._calculatingDuration=0):f=e._startTime,e._startTime<0&&!e._paused&&(d-=e._startTime,this._timeline.smoothChildTiming&&(this._startTime+=e._startTime/this._timeScale,this._time-=e._startTime,this._totalTime-=e._startTime,this._rawPrevTime-=e._startTime),this.shiftChildren(-e._startTime,!1,-9999999999),f=0),c=e._startTime+e._totalDuration/e._timeScale,c>d&&(d=c),e=b;this._duration=this._totalDuration=d,this._dirty=!1}return this._totalDuration}return a&&this.totalDuration()?this.timeScale(this._totalDuration/a):this},q.paused=function(b){if(!b)for(var c=this._first,d=this._time;c;)c._startTime===d&&"isPause"===c.data&&(c._rawPrevTime=0),c=c._next;return a.prototype.paused.apply(this,arguments)},q.usesFrames=function(){for(var b=this._timeline;b._timeline;)b=b._timeline;return b===a._rootFramesTimeline},q.rawTime=function(a){return a&&(this._paused||this._repeat&&this.time()>0&&this.totalProgress()<1)?this._totalTime%(this._duration+this._repeatDelay):this._paused?this._totalTime:(this._timeline.rawTime(a)-this._startTime)*this._timeScale},d},!0),_gsScope._gsDefine("TimelineMax",["TimelineLite","TweenLite","easing.Ease"],function(a,b,c){var d=function(b){a.call(this,b),this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._cycle=0,this._yoyo=this.vars.yoyo===!0,this._dirty=!0},e=1e-10,f=b._internals,g=f.lazyTweens,h=f.lazyRender,i=_gsScope._gsDefine.globals,j=new c(null,null,1,0),k=d.prototype=new a;return k.constructor=d,k.kill()._gc=!1,d.version="1.20.4",k.invalidate=function(){return this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),a.prototype.invalidate.call(this)},k.addCallback=function(a,c,d,e){return this.add(b.delayedCall(0,a,d,e),c)},k.removeCallback=function(a,b){if(a)if(null==b)this._kill(null,a);else for(var c=this.getTweensOf(a,!1),d=c.length,e=this._parseTimeOrLabel(b);--d>-1;)c[d]._startTime===e&&c[d]._enabled(!1,!1);return this},k.removePause=function(b){return this.removeCallback(a._internals.pauseCallback,b)},k.tweenTo=function(a,c){c=c||{};var d,e,f,g={ease:j,useFrames:this.usesFrames(),immediateRender:!1,lazy:!1},h=c.repeat&&i.TweenMax||b;for(e in c)g[e]=c[e];return g.time=this._parseTimeOrLabel(a),d=Math.abs(Number(g.time)-this._time)/this._timeScale||.001,f=new h(this,d,g),g.onStart=function(){f.target.paused(!0),f.vars.time===f.target.time()||d!==f.duration()||f.isFromTo||f.duration(Math.abs(f.vars.time-f.target.time())/f.target._timeScale).render(f.time(),!0,!0),c.onStart&&c.onStart.apply(c.onStartScope||c.callbackScope||f,c.onStartParams||[])},f},k.tweenFromTo=function(a,b,c){c=c||{},a=this._parseTimeOrLabel(a),c.startAt={onComplete:this.seek,onCompleteParams:[a],callbackScope:this},c.immediateRender=c.immediateRender!==!1;var d=this.tweenTo(b,c);return d.isFromTo=1,d.duration(Math.abs(d.vars.time-a)/this._timeScale||.001)},k.render=function(a,b,c){this._gc&&this._enabled(!0,!1);var d,f,i,j,k,l,m,n,o=this._time,p=this._dirty?this.totalDuration():this._totalDuration,q=this._duration,r=this._totalTime,s=this._startTime,t=this._timeScale,u=this._rawPrevTime,v=this._paused,w=this._cycle;if(o!==this._time&&(a+=this._time-o),a>=p-1e-7&&a>=0)this._locked||(this._totalTime=p,this._cycle=this._repeat),this._reversed||this._hasPausedChild()||(f=!0,j="onComplete",k=!!this._timeline.autoRemoveChildren,0===this._duration&&(0>=a&&a>=-1e-7||0>u||u===e)&&u!==a&&this._first&&(k=!0,u>e&&(j="onReverseComplete"))),this._rawPrevTime=this._duration||!b||a||this._rawPrevTime===a?a:e,this._yoyo&&0!==(1&this._cycle)?this._time=a=0:(this._time=q,a=q+1e-4);else if(1e-7>a)if(this._locked||(this._totalTime=this._cycle=0),this._time=0,(0!==o||0===q&&u!==e&&(u>0||0>a&&u>=0)&&!this._locked)&&(j="onReverseComplete",f=this._reversed),0>a)this._active=!1,this._timeline.autoRemoveChildren&&this._reversed?(k=f=!0,j="onReverseComplete"):u>=0&&this._first&&(k=!0),this._rawPrevTime=a;else{if(this._rawPrevTime=q||!b||a||this._rawPrevTime===a?a:e,0===a&&f)for(d=this._first;d&&0===d._startTime;)d._duration||(f=!1),d=d._next;a=0,this._initted||(k=!0)}else if(0===q&&0>u&&(k=!0),this._time=this._rawPrevTime=a,this._locked||(this._totalTime=a,0!==this._repeat&&(l=q+this._repeatDelay,this._cycle=this._totalTime/l>>0,0!==this._cycle&&this._cycle===this._totalTime/l&&a>=r&&this._cycle--,this._time=this._totalTime-this._cycle*l,this._yoyo&&0!==(1&this._cycle)&&(this._time=q-this._time),this._time>q?(this._time=q,a=q+1e-4):this._time<0?this._time=a=0:a=this._time)),this._hasPause&&!this._forcingPlayhead&&!b){if(a=this._time,a>=o||this._repeat&&w!==this._cycle)for(d=this._first;d&&d._startTime<=a&&!m;)d._duration||"isPause"!==d.data||d.ratio||0===d._startTime&&0===this._rawPrevTime||(m=d),d=d._next;else for(d=this._last;d&&d._startTime>=a&&!m;)d._duration||"isPause"===d.data&&d._rawPrevTime>0&&(m=d),d=d._prev;m&&m._startTime<q&&(this._time=a=m._startTime,this._totalTime=a+this._cycle*(this._totalDuration+this._repeatDelay))}if(this._cycle!==w&&!this._locked){var x=this._yoyo&&0!==(1&w),y=x===(this._yoyo&&0!==(1&this._cycle)),z=this._totalTime,A=this._cycle,B=this._rawPrevTime,C=this._time;if(this._totalTime=w*q,this._cycle<w?x=!x:this._totalTime+=q,this._time=o,this._rawPrevTime=0===q?u-1e-4:u,this._cycle=w,this._locked=!0,o=x?0:q,this.render(o,b,0===q),b||this._gc||this.vars.onRepeat&&(this._cycle=A,this._locked=!1,this._callback("onRepeat")),o!==this._time)return;if(y&&(this._cycle=w,this._locked=!0,o=x?q+1e-4:-1e-4,this.render(o,!0,!1)),this._locked=!1,this._paused&&!v)return;this._time=C,this._totalTime=z,this._cycle=A,this._rawPrevTime=B}if(!(this._time!==o&&this._first||c||k||m))return void(r!==this._totalTime&&this._onUpdate&&(b||this._callback("onUpdate")));if(this._initted||(this._initted=!0),this._active||!this._paused&&this._totalTime!==r&&a>0&&(this._active=!0),0===r&&this.vars.onStart&&(0===this._totalTime&&this._totalDuration||b||this._callback("onStart")),n=this._time,n>=o)for(d=this._first;d&&(i=d._next,n===this._time&&(!this._paused||v));)(d._active||d._startTime<=this._time&&!d._paused&&!d._gc)&&(m===d&&this.pause(),d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)),d=i;else for(d=this._last;d&&(i=d._prev,n===this._time&&(!this._paused||v));){if(d._active||d._startTime<=o&&!d._paused&&!d._gc){if(m===d){for(m=d._prev;m&&m.endTime()>this._time;)m.render(m._reversed?m.totalDuration()-(a-m._startTime)*m._timeScale:(a-m._startTime)*m._timeScale,b,c),m=m._prev;m=null,this.pause()}d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)}d=i}this._onUpdate&&(b||(g.length&&h(),this._callback("onUpdate"))),j&&(this._locked||this._gc||(s===this._startTime||t!==this._timeScale)&&(0===this._time||p>=this.totalDuration())&&(f&&(g.length&&h(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!b&&this.vars[j]&&this._callback(j)))},k.getActive=function(a,b,c){null==a&&(a=!0),null==b&&(b=!0),null==c&&(c=!1);var d,e,f=[],g=this.getChildren(a,b,c),h=0,i=g.length;for(d=0;i>d;d++)e=g[d],e.isActive()&&(f[h++]=e);return f},k.getLabelAfter=function(a){a||0!==a&&(a=this._time);var b,c=this.getLabelsArray(),d=c.length;for(b=0;d>b;b++)if(c[b].time>a)return c[b].name;return null},k.getLabelBefore=function(a){null==a&&(a=this._time);for(var b=this.getLabelsArray(),c=b.length;--c>-1;)if(b[c].time<a)return b[c].name;return null},k.getLabelsArray=function(){var a,b=[],c=0;for(a in this._labels)b[c++]={time:this._labels[a],name:a};return b.sort(function(a,b){return a.time-b.time}),b},k.invalidate=function(){return this._locked=!1,a.prototype.invalidate.call(this)},k.progress=function(a,b){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-a:a)+this._cycle*(this._duration+this._repeatDelay),b):this._time/this.duration()||0},k.totalProgress=function(a,b){return arguments.length?this.totalTime(this.totalDuration()*a,b):this._totalTime/this.totalDuration()||0},k.totalDuration=function(b){return arguments.length?-1!==this._repeat&&b?this.timeScale(this.totalDuration()/b):this:(this._dirty&&(a.prototype.totalDuration.call(this),this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat),this._totalDuration)},k.time=function(a,b){return arguments.length?(this._dirty&&this.totalDuration(),a>this._duration&&(a=this._duration),this._yoyo&&0!==(1&this._cycle)?a=this._duration-a+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(a+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(a,b)):this._time},k.repeat=function(a){return arguments.length?(this._repeat=a,this._uncache(!0)):this._repeat},k.repeatDelay=function(a){return arguments.length?(this._repeatDelay=a,this._uncache(!0)):this._repeatDelay},k.yoyo=function(a){return arguments.length?(this._yoyo=a,this):this._yoyo},k.currentLabel=function(a){return arguments.length?this.seek(a,!0):this.getLabelBefore(this._time+1e-8)},d},!0),function(){var a=180/Math.PI,b=[],c=[],d=[],e={},f=_gsScope._gsDefine.globals,g=function(a,b,c,d){c===d&&(c=d-(d-b)/1e6),a===b&&(b=a+(c-a)/1e6),this.a=a,this.b=b,this.c=c,this.d=d,this.da=d-a,this.ca=c-a,this.ba=b-a},h=",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",i=function(a,b,c,d){var e={a:a},f={},g={},h={c:d},i=(a+b)/2,j=(b+c)/2,k=(c+d)/2,l=(i+j)/2,m=(j+k)/2,n=(m-l)/8;return e.b=i+(a-i)/4,f.b=l+n,e.c=f.a=(e.b+f.b)/2,f.c=g.a=(l+m)/2,g.b=m-n,h.b=k+(d-k)/4,g.c=h.a=(g.b+h.b)/2,[e,f,g,h]},j=function(a,e,f,g,h){var j,k,l,m,n,o,p,q,r,s,t,u,v,w=a.length-1,x=0,y=a[0].a;for(j=0;w>j;j++)n=a[x],k=n.a,l=n.d,m=a[x+1].d,h?(t=b[j],u=c[j],v=(u+t)*e*.25/(g?.5:d[j]||.5),o=l-(l-k)*(g?.5*e:0!==t?v/t:0),p=l+(m-l)*(g?.5*e:0!==u?v/u:0),q=l-(o+((p-o)*(3*t/(t+u)+.5)/4||0))):(o=l-(l-k)*e*.5,p=l+(m-l)*e*.5,q=l-(o+p)/2),o+=q,p+=q,n.c=r=o,0!==j?n.b=y:n.b=y=n.a+.6*(n.c-n.a),n.da=l-k,n.ca=r-k,n.ba=y-k,f?(s=i(k,y,r,l),a.splice(x,1,s[0],s[1],s[2],s[3]),x+=4):x++,y=p;n=a[x],n.b=y,n.c=y+.4*(n.d-y),n.da=n.d-n.a,n.ca=n.c-n.a,n.ba=y-n.a,f&&(s=i(n.a,y,n.c,n.d),a.splice(x,1,s[0],s[1],s[2],s[3]))},k=function(a,d,e,f){var h,i,j,k,l,m,n=[];if(f)for(a=[f].concat(a),i=a.length;--i>-1;)"string"==typeof(m=a[i][d])&&"="===m.charAt(1)&&(a[i][d]=f[d]+Number(m.charAt(0)+m.substr(2)));if(h=a.length-2,0>h)return n[0]=new g(a[0][d],0,0,a[0][d]),n;for(i=0;h>i;i++)j=a[i][d],k=a[i+1][d],n[i]=new g(j,0,0,k),e&&(l=a[i+2][d],b[i]=(b[i]||0)+(k-j)*(k-j),c[i]=(c[i]||0)+(l-k)*(l-k));return n[i]=new g(a[i][d],0,0,a[i+1][d]),n},l=function(a,f,g,i,l,m){var n,o,p,q,r,s,t,u,v={},w=[],x=m||a[0];l="string"==typeof l?","+l+",":h,null==f&&(f=1);for(o in a[0])w.push(o);if(a.length>1){for(u=a[a.length-1],t=!0,n=w.length;--n>-1;)if(o=w[n],Math.abs(x[o]-u[o])>.05){t=!1;break}t&&(a=a.concat(),m&&a.unshift(m),a.push(a[1]),m=a[a.length-3])}for(b.length=c.length=d.length=0,n=w.length;--n>-1;)o=w[n],e[o]=-1!==l.indexOf(","+o+","),v[o]=k(a,o,e[o],m);for(n=b.length;--n>-1;)b[n]=Math.sqrt(b[n]),c[n]=Math.sqrt(c[n]);if(!i){for(n=w.length;--n>-1;)if(e[o])for(p=v[w[n]],
	s=p.length-1,q=0;s>q;q++)r=p[q+1].da/c[q]+p[q].da/b[q]||0,d[q]=(d[q]||0)+r*r;for(n=d.length;--n>-1;)d[n]=Math.sqrt(d[n])}for(n=w.length,q=g?4:1;--n>-1;)o=w[n],p=v[o],j(p,f,g,i,e[o]),t&&(p.splice(0,q),p.splice(p.length-q,q));return v},m=function(a,b,c){b=b||"soft";var d,e,f,h,i,j,k,l,m,n,o,p={},q="cubic"===b?3:2,r="soft"===b,s=[];if(r&&c&&(a=[c].concat(a)),null==a||a.length<q+1)throw"invalid Bezier data";for(m in a[0])s.push(m);for(j=s.length;--j>-1;){for(m=s[j],p[m]=i=[],n=0,l=a.length,k=0;l>k;k++)d=null==c?a[k][m]:"string"==typeof(o=a[k][m])&&"="===o.charAt(1)?c[m]+Number(o.charAt(0)+o.substr(2)):Number(o),r&&k>1&&l-1>k&&(i[n++]=(d+i[n-2])/2),i[n++]=d;for(l=n-q+1,n=0,k=0;l>k;k+=q)d=i[k],e=i[k+1],f=i[k+2],h=2===q?0:i[k+3],i[n++]=o=3===q?new g(d,e,f,h):new g(d,(2*e+d)/3,(2*e+f)/3,f);i.length=n}return p},n=function(a,b,c){for(var d,e,f,g,h,i,j,k,l,m,n,o=1/c,p=a.length;--p>-1;)for(m=a[p],f=m.a,g=m.d-f,h=m.c-f,i=m.b-f,d=e=0,k=1;c>=k;k++)j=o*k,l=1-j,d=e-(e=(j*j*g+3*l*(j*h+l*i))*j),n=p*c+k-1,b[n]=(b[n]||0)+d*d},o=function(a,b){b=b>>0||6;var c,d,e,f,g=[],h=[],i=0,j=0,k=b-1,l=[],m=[];for(c in a)n(a[c],g,b);for(e=g.length,d=0;e>d;d++)i+=Math.sqrt(g[d]),f=d%b,m[f]=i,f===k&&(j+=i,f=d/b>>0,l[f]=m,h[f]=j,i=0,m=[]);return{length:j,lengths:h,segments:l}},p=_gsScope._gsDefine.plugin({propName:"bezier",priority:-1,version:"1.3.8",API:2,global:!0,init:function(a,b,c){this._target=a,b instanceof Array&&(b={values:b}),this._func={},this._mod={},this._props=[],this._timeRes=null==b.timeResolution?6:parseInt(b.timeResolution,10);var d,e,f,g,h,i=b.values||[],j={},k=i[0],n=b.autoRotate||c.vars.orientToBezier;this._autoRotate=n?n instanceof Array?n:[["x","y","rotation",n===!0?0:Number(n)||0]]:null;for(d in k)this._props.push(d);for(f=this._props.length;--f>-1;)d=this._props[f],this._overwriteProps.push(d),e=this._func[d]="function"==typeof a[d],j[d]=e?a[d.indexOf("set")||"function"!=typeof a["get"+d.substr(3)]?d:"get"+d.substr(3)]():parseFloat(a[d]),h||j[d]!==i[0][d]&&(h=j);if(this._beziers="cubic"!==b.type&&"quadratic"!==b.type&&"soft"!==b.type?l(i,isNaN(b.curviness)?1:b.curviness,!1,"thruBasic"===b.type,b.correlate,h):m(i,b.type,j),this._segCount=this._beziers[d].length,this._timeRes){var p=o(this._beziers,this._timeRes);this._length=p.length,this._lengths=p.lengths,this._segments=p.segments,this._l1=this._li=this._s1=this._si=0,this._l2=this._lengths[0],this._curSeg=this._segments[0],this._s2=this._curSeg[0],this._prec=1/this._curSeg.length}if(n=this._autoRotate)for(this._initialRotations=[],n[0]instanceof Array||(this._autoRotate=n=[n]),f=n.length;--f>-1;){for(g=0;3>g;g++)d=n[f][g],this._func[d]="function"==typeof a[d]?a[d.indexOf("set")||"function"!=typeof a["get"+d.substr(3)]?d:"get"+d.substr(3)]:!1;d=n[f][2],this._initialRotations[f]=(this._func[d]?this._func[d].call(this._target):this._target[d])||0,this._overwriteProps.push(d)}return this._startRatio=c.vars.runBackwards?1:0,!0},set:function(b){var c,d,e,f,g,h,i,j,k,l,m=this._segCount,n=this._func,o=this._target,p=b!==this._startRatio;if(this._timeRes){if(k=this._lengths,l=this._curSeg,b*=this._length,e=this._li,b>this._l2&&m-1>e){for(j=m-1;j>e&&(this._l2=k[++e])<=b;);this._l1=k[e-1],this._li=e,this._curSeg=l=this._segments[e],this._s2=l[this._s1=this._si=0]}else if(b<this._l1&&e>0){for(;e>0&&(this._l1=k[--e])>=b;);0===e&&b<this._l1?this._l1=0:e++,this._l2=k[e],this._li=e,this._curSeg=l=this._segments[e],this._s1=l[(this._si=l.length-1)-1]||0,this._s2=l[this._si]}if(c=e,b-=this._l1,e=this._si,b>this._s2&&e<l.length-1){for(j=l.length-1;j>e&&(this._s2=l[++e])<=b;);this._s1=l[e-1],this._si=e}else if(b<this._s1&&e>0){for(;e>0&&(this._s1=l[--e])>=b;);0===e&&b<this._s1?this._s1=0:e++,this._s2=l[e],this._si=e}h=(e+(b-this._s1)/(this._s2-this._s1))*this._prec||0}else c=0>b?0:b>=1?m-1:m*b>>0,h=(b-c*(1/m))*m;for(d=1-h,e=this._props.length;--e>-1;)f=this._props[e],g=this._beziers[f][c],i=(h*h*g.da+3*d*(h*g.ca+d*g.ba))*h+g.a,this._mod[f]&&(i=this._mod[f](i,o)),n[f]?o[f](i):o[f]=i;if(this._autoRotate){var q,r,s,t,u,v,w,x=this._autoRotate;for(e=x.length;--e>-1;)f=x[e][2],v=x[e][3]||0,w=x[e][4]===!0?1:a,g=this._beziers[x[e][0]],q=this._beziers[x[e][1]],g&&q&&(g=g[c],q=q[c],r=g.a+(g.b-g.a)*h,t=g.b+(g.c-g.b)*h,r+=(t-r)*h,t+=(g.c+(g.d-g.c)*h-t)*h,s=q.a+(q.b-q.a)*h,u=q.b+(q.c-q.b)*h,s+=(u-s)*h,u+=(q.c+(q.d-q.c)*h-u)*h,i=p?Math.atan2(u-s,t-r)*w+v:this._initialRotations[e],this._mod[f]&&(i=this._mod[f](i,o)),n[f]?o[f](i):o[f]=i)}}}),q=p.prototype;p.bezierThrough=l,p.cubicToQuadratic=i,p._autoCSS=!0,p.quadraticToCubic=function(a,b,c){return new g(a,(2*b+a)/3,(2*b+c)/3,c)},p._cssRegister=function(){var a=f.CSSPlugin;if(a){var b=a._internals,c=b._parseToProxy,d=b._setPluginRatio,e=b.CSSPropTween;b._registerComplexSpecialProp("bezier",{parser:function(a,b,f,g,h,i){b instanceof Array&&(b={values:b}),i=new p;var j,k,l,m=b.values,n=m.length-1,o=[],q={};if(0>n)return h;for(j=0;n>=j;j++)l=c(a,m[j],g,h,i,n!==j),o[j]=l.end;for(k in b)q[k]=b[k];return q.values=o,h=new e(a,"bezier",0,0,l.pt,2),h.data=l,h.plugin=i,h.setRatio=d,0===q.autoRotate&&(q.autoRotate=!0),!q.autoRotate||q.autoRotate instanceof Array||(j=q.autoRotate===!0?0:Number(q.autoRotate),q.autoRotate=null!=l.end.left?[["left","top","rotation",j,!1]]:null!=l.end.x?[["x","y","rotation",j,!1]]:!1),q.autoRotate&&(g._transform||g._enableTransforms(!1),l.autoRotate=g._target._gsTransform,l.proxy.rotation=l.autoRotate.rotation||0,g._overwriteProps.push("rotation")),i._onInitTween(l.proxy,q,g._tween),h}})}},q._mod=function(a){for(var b,c=this._overwriteProps,d=c.length;--d>-1;)b=a[c[d]],b&&"function"==typeof b&&(this._mod[c[d]]=b)},q._kill=function(a){var b,c,d=this._props;for(b in this._beziers)if(b in a)for(delete this._beziers[b],delete this._func[b],c=d.length;--c>-1;)d[c]===b&&d.splice(c,1);if(d=this._autoRotate)for(c=d.length;--c>-1;)a[d[c][2]]&&d.splice(c,1);return this._super._kill.call(this,a)}}(),_gsScope._gsDefine("plugins.CSSPlugin",["plugins.TweenPlugin","TweenLite"],function(a,b){var c,d,e,f,g=function(){a.call(this,"css"),this._overwriteProps.length=0,this.setRatio=g.prototype.setRatio},h=_gsScope._gsDefine.globals,i={},j=g.prototype=new a("css");j.constructor=g,g.version="1.20.5",g.API=2,g.defaultTransformPerspective=0,g.defaultSkewType="compensated",g.defaultSmoothOrigin=!0,j="px",g.suffixMap={top:j,right:j,bottom:j,left:j,width:j,height:j,fontSize:j,padding:j,margin:j,perspective:j,lineHeight:""};var k,l,m,n,o,p,q,r,s=/(?:\-|\.|\b)(\d|\.|e\-)+/g,t=/(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,u=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,v=/(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,w=/(?:\d|\-|\+|=|#|\.)*/g,x=/opacity *= *([^)]*)/i,y=/opacity:([^;]*)/i,z=/alpha\(opacity *=.+?\)/i,A=/^(rgb|hsl)/,B=/([A-Z])/g,C=/-([a-z])/gi,D=/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,E=function(a,b){return b.toUpperCase()},F=/(?:Left|Right|Width)/i,G=/(M11|M12|M21|M22)=[\d\-\.e]+/gi,H=/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,I=/,(?=[^\)]*(?:\(|$))/gi,J=/[\s,\(]/i,K=Math.PI/180,L=180/Math.PI,M={},N={style:{}},O=_gsScope.document||{createElement:function(){return N}},P=function(a,b){return O.createElementNS?O.createElementNS(b||"http://www.w3.org/1999/xhtml",a):O.createElement(a)},Q=P("div"),R=P("img"),S=g._internals={_specialProps:i},T=(_gsScope.navigator||{}).userAgent||"",U=function(){var a=T.indexOf("Android"),b=P("a");return m=-1!==T.indexOf("Safari")&&-1===T.indexOf("Chrome")&&(-1===a||parseFloat(T.substr(a+8,2))>3),o=m&&parseFloat(T.substr(T.indexOf("Version/")+8,2))<6,n=-1!==T.indexOf("Firefox"),(/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(T)||/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(T))&&(p=parseFloat(RegExp.$1)),b?(b.style.cssText="top:1px;opacity:.55;",/^0.55/.test(b.style.opacity)):!1}(),V=function(a){return x.test("string"==typeof a?a:(a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100:1},W=function(a){_gsScope.console&&console.log(a)},X="",Y="",Z=function(a,b){b=b||Q;var c,d,e=b.style;if(void 0!==e[a])return a;for(a=a.charAt(0).toUpperCase()+a.substr(1),c=["O","Moz","ms","Ms","Webkit"],d=5;--d>-1&&void 0===e[c[d]+a];);return d>=0?(Y=3===d?"ms":c[d],X="-"+Y.toLowerCase()+"-",Y+a):null},$=("undefined"!=typeof window?window:O.defaultView||{getComputedStyle:function(){}}).getComputedStyle,_=g.getStyle=function(a,b,c,d,e){var f;return U||"opacity"!==b?(!d&&a.style[b]?f=a.style[b]:(c=c||$(a))?f=c[b]||c.getPropertyValue(b)||c.getPropertyValue(b.replace(B,"-$1").toLowerCase()):a.currentStyle&&(f=a.currentStyle[b]),null==e||f&&"none"!==f&&"auto"!==f&&"auto auto"!==f?f:e):V(a)},aa=S.convertToPixels=function(a,c,d,e,f){if("px"===e||!e&&"lineHeight"!==c)return d;if("auto"===e||!d)return 0;var h,i,j,k=F.test(c),l=a,m=Q.style,n=0>d,o=1===d;if(n&&(d=-d),o&&(d*=100),"lineHeight"!==c||e)if("%"===e&&-1!==c.indexOf("border"))h=d/100*(k?a.clientWidth:a.clientHeight);else{if(m.cssText="border:0 solid red;position:"+_(a,"position")+";line-height:0;","%"!==e&&l.appendChild&&"v"!==e.charAt(0)&&"rem"!==e)m[k?"borderLeftWidth":"borderTopWidth"]=d+e;else{if(l=a.parentNode||O.body,-1!==_(l,"display").indexOf("flex")&&(m.position="absolute"),i=l._gsCache,j=b.ticker.frame,i&&k&&i.time===j)return i.width*d/100;m[k?"width":"height"]=d+e}l.appendChild(Q),h=parseFloat(Q[k?"offsetWidth":"offsetHeight"]),l.removeChild(Q),k&&"%"===e&&g.cacheWidths!==!1&&(i=l._gsCache=l._gsCache||{},i.time=j,i.width=h/d*100),0!==h||f||(h=aa(a,c,d,e,!0))}else i=$(a).lineHeight,a.style.lineHeight=d,h=parseFloat($(a).lineHeight),a.style.lineHeight=i;return o&&(h/=100),n?-h:h},ba=S.calculateOffset=function(a,b,c){if("absolute"!==_(a,"position",c))return 0;var d="left"===b?"Left":"Top",e=_(a,"margin"+d,c);return a["offset"+d]-(aa(a,b,parseFloat(e),e.replace(w,""))||0)},ca=function(a,b){var c,d,e,f={};if(b=b||$(a,null))if(c=b.length)for(;--c>-1;)e=b[c],(-1===e.indexOf("-transform")||Da===e)&&(f[e.replace(C,E)]=b.getPropertyValue(e));else for(c in b)(-1===c.indexOf("Transform")||Ca===c)&&(f[c]=b[c]);else if(b=a.currentStyle||a.style)for(c in b)"string"==typeof c&&void 0===f[c]&&(f[c.replace(C,E)]=b[c]);return U||(f.opacity=V(a)),d=Ra(a,b,!1),f.rotation=d.rotation,f.skewX=d.skewX,f.scaleX=d.scaleX,f.scaleY=d.scaleY,f.x=d.x,f.y=d.y,Fa&&(f.z=d.z,f.rotationX=d.rotationX,f.rotationY=d.rotationY,f.scaleZ=d.scaleZ),f.filters&&delete f.filters,f},da=function(a,b,c,d,e){var f,g,h,i={},j=a.style;for(g in c)"cssText"!==g&&"length"!==g&&isNaN(g)&&(b[g]!==(f=c[g])||e&&e[g])&&-1===g.indexOf("Origin")&&("number"==typeof f||"string"==typeof f)&&(i[g]="auto"!==f||"left"!==g&&"top"!==g?""!==f&&"auto"!==f&&"none"!==f||"string"!=typeof b[g]||""===b[g].replace(v,"")?f:0:ba(a,g),void 0!==j[g]&&(h=new sa(j,g,j[g],h)));if(d)for(g in d)"className"!==g&&(i[g]=d[g]);return{difs:i,firstMPT:h}},ea={width:["Left","Right"],height:["Top","Bottom"]},fa=["marginLeft","marginRight","marginTop","marginBottom"],ga=function(a,b,c){if("svg"===(a.nodeName+"").toLowerCase())return(c||$(a))[b]||0;if(a.getCTM&&Oa(a))return a.getBBox()[b]||0;var d=parseFloat("width"===b?a.offsetWidth:a.offsetHeight),e=ea[b],f=e.length;for(c=c||$(a,null);--f>-1;)d-=parseFloat(_(a,"padding"+e[f],c,!0))||0,d-=parseFloat(_(a,"border"+e[f]+"Width",c,!0))||0;return d},ha=function(a,b){if("contain"===a||"auto"===a||"auto auto"===a)return a+" ";(null==a||""===a)&&(a="0 0");var c,d=a.split(" "),e=-1!==a.indexOf("left")?"0%":-1!==a.indexOf("right")?"100%":d[0],f=-1!==a.indexOf("top")?"0%":-1!==a.indexOf("bottom")?"100%":d[1];if(d.length>3&&!b){for(d=a.split(", ").join(",").split(","),a=[],c=0;c<d.length;c++)a.push(ha(d[c]));return a.join(",")}return null==f?f="center"===e?"50%":"0":"center"===f&&(f="50%"),("center"===e||isNaN(parseFloat(e))&&-1===(e+"").indexOf("="))&&(e="50%"),a=e+" "+f+(d.length>2?" "+d[2]:""),b&&(b.oxp=-1!==e.indexOf("%"),b.oyp=-1!==f.indexOf("%"),b.oxr="="===e.charAt(1),b.oyr="="===f.charAt(1),b.ox=parseFloat(e.replace(v,"")),b.oy=parseFloat(f.replace(v,"")),b.v=a),b||a},ia=function(a,b){return"function"==typeof a&&(a=a(r,q)),"string"==typeof a&&"="===a.charAt(1)?parseInt(a.charAt(0)+"1",10)*parseFloat(a.substr(2)):parseFloat(a)-parseFloat(b)||0},ja=function(a,b){return"function"==typeof a&&(a=a(r,q)),null==a?b:"string"==typeof a&&"="===a.charAt(1)?parseInt(a.charAt(0)+"1",10)*parseFloat(a.substr(2))+b:parseFloat(a)||0},ka=function(a,b,c,d){var e,f,g,h,i,j=1e-6;return"function"==typeof a&&(a=a(r,q)),null==a?h=b:"number"==typeof a?h=a:(e=360,f=a.split("_"),i="="===a.charAt(1),g=(i?parseInt(a.charAt(0)+"1",10)*parseFloat(f[0].substr(2)):parseFloat(f[0]))*(-1===a.indexOf("rad")?1:L)-(i?0:b),f.length&&(d&&(d[c]=b+g),-1!==a.indexOf("short")&&(g%=e,g!==g%(e/2)&&(g=0>g?g+e:g-e)),-1!==a.indexOf("_cw")&&0>g?g=(g+9999999999*e)%e-(g/e|0)*e:-1!==a.indexOf("ccw")&&g>0&&(g=(g-9999999999*e)%e-(g/e|0)*e)),h=b+g),j>h&&h>-j&&(h=0),h},la={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},ma=function(a,b,c){return a=0>a?a+1:a>1?a-1:a,255*(1>6*a?b+(c-b)*a*6:.5>a?c:2>3*a?b+(c-b)*(2/3-a)*6:b)+.5|0},na=g.parseColor=function(a,b){var c,d,e,f,g,h,i,j,k,l,m;if(a)if("number"==typeof a)c=[a>>16,a>>8&255,255&a];else{if(","===a.charAt(a.length-1)&&(a=a.substr(0,a.length-1)),la[a])c=la[a];else if("#"===a.charAt(0))4===a.length&&(d=a.charAt(1),e=a.charAt(2),f=a.charAt(3),a="#"+d+d+e+e+f+f),a=parseInt(a.substr(1),16),c=[a>>16,a>>8&255,255&a];else if("hsl"===a.substr(0,3))if(c=m=a.match(s),b){if(-1!==a.indexOf("="))return a.match(t)}else g=Number(c[0])%360/360,h=Number(c[1])/100,i=Number(c[2])/100,e=.5>=i?i*(h+1):i+h-i*h,d=2*i-e,c.length>3&&(c[3]=Number(c[3])),c[0]=ma(g+1/3,d,e),c[1]=ma(g,d,e),c[2]=ma(g-1/3,d,e);else c=a.match(s)||la.transparent;c[0]=Number(c[0]),c[1]=Number(c[1]),c[2]=Number(c[2]),c.length>3&&(c[3]=Number(c[3]))}else c=la.black;return b&&!m&&(d=c[0]/255,e=c[1]/255,f=c[2]/255,j=Math.max(d,e,f),k=Math.min(d,e,f),i=(j+k)/2,j===k?g=h=0:(l=j-k,h=i>.5?l/(2-j-k):l/(j+k),g=j===d?(e-f)/l+(f>e?6:0):j===e?(f-d)/l+2:(d-e)/l+4,g*=60),c[0]=g+.5|0,c[1]=100*h+.5|0,c[2]=100*i+.5|0),c},oa=function(a,b){var c,d,e,f=a.match(pa)||[],g=0,h="";if(!f.length)return a;for(c=0;c<f.length;c++)d=f[c],e=a.substr(g,a.indexOf(d,g)-g),g+=e.length+d.length,d=na(d,b),3===d.length&&d.push(1),h+=e+(b?"hsla("+d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:"rgba("+d.join(","))+")";return h+a.substr(g)},pa="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";for(j in la)pa+="|"+j+"\\b";pa=new RegExp(pa+")","gi"),g.colorStringFilter=function(a){var b,c=a[0]+" "+a[1];pa.test(c)&&(b=-1!==c.indexOf("hsl(")||-1!==c.indexOf("hsla("),a[0]=oa(a[0],b),a[1]=oa(a[1],b)),pa.lastIndex=0},b.defaultStringFilter||(b.defaultStringFilter=g.colorStringFilter);var qa=function(a,b,c,d){if(null==a)return function(a){return a};var e,f=b?(a.match(pa)||[""])[0]:"",g=a.split(f).join("").match(u)||[],h=a.substr(0,a.indexOf(g[0])),i=")"===a.charAt(a.length-1)?")":"",j=-1!==a.indexOf(" ")?" ":",",k=g.length,l=k>0?g[0].replace(s,""):"";return k?e=b?function(a){var b,m,n,o;if("number"==typeof a)a+=l;else if(d&&I.test(a)){for(o=a.replace(I,"|").split("|"),n=0;n<o.length;n++)o[n]=e(o[n]);return o.join(",")}if(b=(a.match(pa)||[f])[0],m=a.split(b).join("").match(u)||[],n=m.length,k>n--)for(;++n<k;)m[n]=c?m[(n-1)/2|0]:g[n];return h+m.join(j)+j+b+i+(-1!==a.indexOf("inset")?" inset":"")}:function(a){var b,f,m;if("number"==typeof a)a+=l;else if(d&&I.test(a)){for(f=a.replace(I,"|").split("|"),m=0;m<f.length;m++)f[m]=e(f[m]);return f.join(",")}if(b=a.match(u)||[],m=b.length,k>m--)for(;++m<k;)b[m]=c?b[(m-1)/2|0]:g[m];return h+b.join(j)+i}:function(a){return a}},ra=function(a){return a=a.split(","),function(b,c,d,e,f,g,h){var i,j=(c+"").split(" ");for(h={},i=0;4>i;i++)h[a[i]]=j[i]=j[i]||j[(i-1)/2>>0];return e.parse(b,h,f,g)}},sa=(S._setPluginRatio=function(a){this.plugin.setRatio(a);for(var b,c,d,e,f,g=this.data,h=g.proxy,i=g.firstMPT,j=1e-6;i;)b=h[i.v],i.r?b=i.r(b):j>b&&b>-j&&(b=0),i.t[i.p]=b,i=i._next;if(g.autoRotate&&(g.autoRotate.rotation=g.mod?g.mod.call(this._tween,h.rotation,this.t,this._tween):h.rotation),1===a||0===a)for(i=g.firstMPT,f=1===a?"e":"b";i;){if(c=i.t,c.type){if(1===c.type){for(e=c.xs0+c.s+c.xs1,d=1;d<c.l;d++)e+=c["xn"+d]+c["xs"+(d+1)];c[f]=e}}else c[f]=c.s+c.xs0;i=i._next}},function(a,b,c,d,e){this.t=a,this.p=b,this.v=c,this.r=e,d&&(d._prev=this,this._next=d)}),ta=(S._parseToProxy=function(a,b,c,d,e,f){var g,h,i,j,k,l=d,m={},n={},o=c._transform,p=M;for(c._transform=null,M=b,d=k=c.parse(a,b,d,e),M=p,f&&(c._transform=o,l&&(l._prev=null,l._prev&&(l._prev._next=null)));d&&d!==l;){if(d.type<=1&&(h=d.p,n[h]=d.s+d.c,m[h]=d.s,f||(j=new sa(d,"s",h,j,d.r),d.c=0),1===d.type))for(g=d.l;--g>0;)i="xn"+g,h=d.p+"_"+i,n[h]=d.data[i],m[h]=d[i],f||(j=new sa(d,i,h,j,d.rxp[i]));d=d._next}return{proxy:m,end:n,firstMPT:j,pt:k}},S.CSSPropTween=function(a,b,d,e,g,h,i,j,k,l,m){this.t=a,this.p=b,this.s=d,this.c=e,this.n=i||b,a instanceof ta||f.push(this.n),this.r=j?"function"==typeof j?j:Math.round:j,this.type=h||0,k&&(this.pr=k,c=!0),this.b=void 0===l?d:l,this.e=void 0===m?d+e:m,g&&(this._next=g,g._prev=this)}),ua=function(a,b,c,d,e,f){var g=new ta(a,b,c,d-c,e,-1,f);return g.b=c,g.e=g.xs0=d,g},va=g.parseComplex=function(a,b,c,d,e,f,h,i,j,l){c=c||f||"","function"==typeof d&&(d=d(r,q)),h=new ta(a,b,0,0,h,l?2:1,null,!1,i,c,d),d+="",e&&pa.test(d+c)&&(d=[c,d],g.colorStringFilter(d),c=d[0],d=d[1]);var m,n,o,p,u,v,w,x,y,z,A,B,C,D=c.split(", ").join(",").split(" "),E=d.split(", ").join(",").split(" "),F=D.length,G=k!==!1;for((-1!==d.indexOf(",")||-1!==c.indexOf(","))&&(-1!==(d+c).indexOf("rgb")||-1!==(d+c).indexOf("hsl")?(D=D.join(" ").replace(I,", ").split(" "),E=E.join(" ").replace(I,", ").split(" ")):(D=D.join(" ").split(",").join(", ").split(" "),E=E.join(" ").split(",").join(", ").split(" ")),F=D.length),F!==E.length&&(D=(f||"").split(" "),F=D.length),h.plugin=j,h.setRatio=l,pa.lastIndex=0,m=0;F>m;m++)if(p=D[m],u=E[m]+"",x=parseFloat(p),x||0===x)h.appendXtra("",x,ia(u,x),u.replace(t,""),G&&-1!==u.indexOf("px")?Math.round:!1,!0);else if(e&&pa.test(p))B=u.indexOf(")")+1,B=")"+(B?u.substr(B):""),C=-1!==u.indexOf("hsl")&&U,z=u,p=na(p,C),u=na(u,C),y=p.length+u.length>6,y&&!U&&0===u[3]?(h["xs"+h.l]+=h.l?" transparent":"transparent",h.e=h.e.split(E[m]).join("transparent")):(U||(y=!1),C?h.appendXtra(z.substr(0,z.indexOf("hsl"))+(y?"hsla(":"hsl("),p[0],ia(u[0],p[0]),",",!1,!0).appendXtra("",p[1],ia(u[1],p[1]),"%,",!1).appendXtra("",p[2],ia(u[2],p[2]),y?"%,":"%"+B,!1):h.appendXtra(z.substr(0,z.indexOf("rgb"))+(y?"rgba(":"rgb("),p[0],u[0]-p[0],",",Math.round,!0).appendXtra("",p[1],u[1]-p[1],",",Math.round).appendXtra("",p[2],u[2]-p[2],y?",":B,Math.round),y&&(p=p.length<4?1:p[3],h.appendXtra("",p,(u.length<4?1:u[3])-p,B,!1))),pa.lastIndex=0;else if(v=p.match(s)){if(w=u.match(t),!w||w.length!==v.length)return h;for(o=0,n=0;n<v.length;n++)A=v[n],z=p.indexOf(A,o),h.appendXtra(p.substr(o,z-o),Number(A),ia(w[n],A),"",G&&"px"===p.substr(z+A.length,2)?Math.round:!1,0===n),o=z+A.length;h["xs"+h.l]+=p.substr(o)}else h["xs"+h.l]+=h.l||h["xs"+h.l]?" "+u:u;if(-1!==d.indexOf("=")&&h.data){for(B=h.xs0+h.data.s,m=1;m<h.l;m++)B+=h["xs"+m]+h.data["xn"+m];h.e=B+h["xs"+m]}return h.l||(h.type=-1,h.xs0=h.e),h.xfirst||h},wa=9;for(j=ta.prototype,j.l=j.pr=0;--wa>0;)j["xn"+wa]=0,j["xs"+wa]="";j.xs0="",j._next=j._prev=j.xfirst=j.data=j.plugin=j.setRatio=j.rxp=null,j.appendXtra=function(a,b,c,d,e,f){var g=this,h=g.l;return g["xs"+h]+=f&&(h||g["xs"+h])?" "+a:a||"",c||0===h||g.plugin?(g.l++,g.type=g.setRatio?2:1,g["xs"+g.l]=d||"",h>0?(g.data["xn"+h]=b+c,g.rxp["xn"+h]=e,g["xn"+h]=b,g.plugin||(g.xfirst=new ta(g,"xn"+h,b,c,g.xfirst||g,0,g.n,e,g.pr),g.xfirst.xs0=0),g):(g.data={s:b+c},g.rxp={},g.s=b,g.c=c,g.r=e,g)):(g["xs"+h]+=b+(d||""),g)};var xa=function(a,b){b=b||{},this.p=b.prefix?Z(a)||a:a,i[a]=i[this.p]=this,this.format=b.formatter||qa(b.defaultValue,b.color,b.collapsible,b.multi),b.parser&&(this.parse=b.parser),this.clrs=b.color,this.multi=b.multi,this.keyword=b.keyword,this.dflt=b.defaultValue,this.pr=b.priority||0},ya=S._registerComplexSpecialProp=function(a,b,c){"object"!=typeof b&&(b={parser:c});var d,e,f=a.split(","),g=b.defaultValue;for(c=c||[g],d=0;d<f.length;d++)b.prefix=0===d&&b.prefix,b.defaultValue=c[d]||g,e=new xa(f[d],b)},za=S._registerPluginProp=function(a){if(!i[a]){var b=a.charAt(0).toUpperCase()+a.substr(1)+"Plugin";ya(a,{parser:function(a,c,d,e,f,g,j){var k=h.com.greensock.plugins[b];return k?(k._cssRegister(),i[d].parse(a,c,d,e,f,g,j)):(W("Error: "+b+" js file not loaded."),f)}})}};j=xa.prototype,j.parseComplex=function(a,b,c,d,e,f){var g,h,i,j,k,l,m=this.keyword;if(this.multi&&(I.test(c)||I.test(b)?(h=b.replace(I,"|").split("|"),i=c.replace(I,"|").split("|")):m&&(h=[b],i=[c])),i){for(j=i.length>h.length?i.length:h.length,g=0;j>g;g++)b=h[g]=h[g]||this.dflt,c=i[g]=i[g]||this.dflt,m&&(k=b.indexOf(m),l=c.indexOf(m),k!==l&&(-1===l?h[g]=h[g].split(m).join(""):-1===k&&(h[g]+=" "+m)));b=h.join(", "),c=i.join(", ")}return va(a,this.p,b,c,this.clrs,this.dflt,d,this.pr,e,f)},j.parse=function(a,b,c,d,f,g,h){return this.parseComplex(a.style,this.format(_(a,this.p,e,!1,this.dflt)),this.format(b),f,g)},g.registerSpecialProp=function(a,b,c){ya(a,{parser:function(a,d,e,f,g,h,i){var j=new ta(a,e,0,0,g,2,e,!1,c);return j.plugin=h,j.setRatio=b(a,d,f._tween,e),j},priority:c})},g.useSVGTransformAttr=!0;var Aa,Ba="scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),Ca=Z("transform"),Da=X+"transform",Ea=Z("transformOrigin"),Fa=null!==Z("perspective"),Ga=S.Transform=function(){this.perspective=parseFloat(g.defaultTransformPerspective)||0,this.force3D=g.defaultForce3D!==!1&&Fa?g.defaultForce3D||"auto":!1},Ha=_gsScope.SVGElement,Ia=function(a,b,c){var d,e=O.createElementNS("http://www.w3.org/2000/svg",a),f=/([a-z])([A-Z])/g;for(d in c)e.setAttributeNS(null,d.replace(f,"$1-$2").toLowerCase(),c[d]);return b.appendChild(e),e},Ja=O.documentElement||{},Ka=function(){var a,b,c,d=p||/Android/i.test(T)&&!_gsScope.chrome;return O.createElementNS&&!d&&(a=Ia("svg",Ja),b=Ia("rect",a,{width:100,height:50,x:100}),c=b.getBoundingClientRect().width,b.style[Ea]="50% 50%",b.style[Ca]="scaleX(0.5)",d=c===b.getBoundingClientRect().width&&!(n&&Fa),Ja.removeChild(a)),d}(),La=function(a,b,c,d,e,f){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v=a._gsTransform,w=Qa(a,!0);v&&(t=v.xOrigin,u=v.yOrigin),(!d||(h=d.split(" ")).length<2)&&(n=a.getBBox(),0===n.x&&0===n.y&&n.width+n.height===0&&(n={x:parseFloat(a.hasAttribute("x")?a.getAttribute("x"):a.hasAttribute("cx")?a.getAttribute("cx"):0)||0,y:parseFloat(a.hasAttribute("y")?a.getAttribute("y"):a.hasAttribute("cy")?a.getAttribute("cy"):0)||0,width:0,height:0}),b=ha(b).split(" "),h=[(-1!==b[0].indexOf("%")?parseFloat(b[0])/100*n.width:parseFloat(b[0]))+n.x,(-1!==b[1].indexOf("%")?parseFloat(b[1])/100*n.height:parseFloat(b[1]))+n.y]),c.xOrigin=k=parseFloat(h[0]),c.yOrigin=l=parseFloat(h[1]),d&&w!==Pa&&(m=w[0],n=w[1],o=w[2],p=w[3],q=w[4],r=w[5],s=m*p-n*o,s&&(i=k*(p/s)+l*(-o/s)+(o*r-p*q)/s,j=k*(-n/s)+l*(m/s)-(m*r-n*q)/s,k=c.xOrigin=h[0]=i,l=c.yOrigin=h[1]=j)),v&&(f&&(c.xOffset=v.xOffset,c.yOffset=v.yOffset,v=c),e||e!==!1&&g.defaultSmoothOrigin!==!1?(i=k-t,j=l-u,v.xOffset+=i*w[0]+j*w[2]-i,v.yOffset+=i*w[1]+j*w[3]-j):v.xOffset=v.yOffset=0),f||a.setAttribute("data-svg-origin",h.join(" "))},Ma=function(a){var b,c=P("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),d=this.parentNode,e=this.nextSibling,f=this.style.cssText;if(Ja.appendChild(c),c.appendChild(this),this.style.display="block",a)try{b=this.getBBox(),this._originalGetBBox=this.getBBox,this.getBBox=Ma}catch(g){}else this._originalGetBBox&&(b=this._originalGetBBox());return e?d.insertBefore(this,e):d.appendChild(this),Ja.removeChild(c),this.style.cssText=f,b},Na=function(a){try{return a.getBBox()}catch(b){return Ma.call(a,!0)}},Oa=function(a){return!(!Ha||!a.getCTM||a.parentNode&&!a.ownerSVGElement||!Na(a))},Pa=[1,0,0,1,0,0],Qa=function(a,b){var c,d,e,f,g,h,i=a._gsTransform||new Ga,j=1e5,k=a.style;if(Ca?d=_(a,Da,null,!0):a.currentStyle&&(d=a.currentStyle.filter.match(G),d=d&&4===d.length?[d[0].substr(4),Number(d[2].substr(4)),Number(d[1].substr(4)),d[3].substr(4),i.x||0,i.y||0].join(","):""),c=!d||"none"===d||"matrix(1, 0, 0, 1, 0, 0)"===d,!Ca||!(h=!$(a)||"none"===$(a).display)&&a.parentNode||(h&&(f=k.display,k.display="block"),a.parentNode||(g=1,Ja.appendChild(a)),d=_(a,Da,null,!0),c=!d||"none"===d||"matrix(1, 0, 0, 1, 0, 0)"===d,f?k.display=f:h&&Va(k,"display"),g&&Ja.removeChild(a)),(i.svg||a.getCTM&&Oa(a))&&(c&&-1!==(k[Ca]+"").indexOf("matrix")&&(d=k[Ca],c=0),e=a.getAttribute("transform"),c&&e&&(e=a.transform.baseVal.consolidate().matrix,d="matrix("+e.a+","+e.b+","+e.c+","+e.d+","+e.e+","+e.f+")",c=0)),c)return Pa;for(e=(d||"").match(s)||[],wa=e.length;--wa>-1;)f=Number(e[wa]),e[wa]=(g=f-(f|=0))?(g*j+(0>g?-.5:.5)|0)/j+f:f;return b&&e.length>6?[e[0],e[1],e[4],e[5],e[12],e[13]]:e},Ra=S.getTransform=function(a,c,d,e){if(a._gsTransform&&d&&!e)return a._gsTransform;var f,h,i,j,k,l,m=d?a._gsTransform||new Ga:new Ga,n=m.scaleX<0,o=2e-5,p=1e5,q=Fa?parseFloat(_(a,Ea,c,!1,"0 0 0").split(" ")[2])||m.zOrigin||0:0,r=parseFloat(g.defaultTransformPerspective)||0;if(m.svg=!(!a.getCTM||!Oa(a)),m.svg&&(La(a,_(a,Ea,c,!1,"50% 50%")+"",m,a.getAttribute("data-svg-origin")),Aa=g.useSVGTransformAttr||Ka),f=Qa(a),f!==Pa){if(16===f.length){var s,t,u,v,w,x=f[0],y=f[1],z=f[2],A=f[3],B=f[4],C=f[5],D=f[6],E=f[7],F=f[8],G=f[9],H=f[10],I=f[12],J=f[13],K=f[14],M=f[11],N=Math.atan2(D,H);m.zOrigin&&(K=-m.zOrigin,I=F*K-f[12],J=G*K-f[13],K=H*K+m.zOrigin-f[14]),m.rotationX=N*L,N&&(v=Math.cos(-N),w=Math.sin(-N),s=B*v+F*w,t=C*v+G*w,u=D*v+H*w,F=B*-w+F*v,G=C*-w+G*v,H=D*-w+H*v,M=E*-w+M*v,B=s,C=t,D=u),N=Math.atan2(-z,H),m.rotationY=N*L,N&&(v=Math.cos(-N),w=Math.sin(-N),s=x*v-F*w,t=y*v-G*w,u=z*v-H*w,G=y*w+G*v,H=z*w+H*v,M=A*w+M*v,x=s,y=t,z=u),N=Math.atan2(y,x),m.rotation=N*L,N&&(v=Math.cos(N),w=Math.sin(N),s=x*v+y*w,t=B*v+C*w,u=F*v+G*w,y=y*v-x*w,C=C*v-B*w,G=G*v-F*w,x=s,B=t,F=u),m.rotationX&&Math.abs(m.rotationX)+Math.abs(m.rotation)>359.9&&(m.rotationX=m.rotation=0,m.rotationY=180-m.rotationY),N=Math.atan2(B,C),m.scaleX=(Math.sqrt(x*x+y*y+z*z)*p+.5|0)/p,m.scaleY=(Math.sqrt(C*C+D*D)*p+.5|0)/p,m.scaleZ=(Math.sqrt(F*F+G*G+H*H)*p+.5|0)/p,x/=m.scaleX,B/=m.scaleY,y/=m.scaleX,C/=m.scaleY,Math.abs(N)>o?(m.skewX=N*L,B=0,"simple"!==m.skewType&&(m.scaleY*=1/Math.cos(N))):m.skewX=0,m.perspective=M?1/(0>M?-M:M):0,m.x=I,m.y=J,m.z=K,m.svg&&(m.x-=m.xOrigin-(m.xOrigin*x-m.yOrigin*B),m.y-=m.yOrigin-(m.yOrigin*y-m.xOrigin*C))}else if(!Fa||e||!f.length||m.x!==f[4]||m.y!==f[5]||!m.rotationX&&!m.rotationY){var O=f.length>=6,P=O?f[0]:1,Q=f[1]||0,R=f[2]||0,S=O?f[3]:1;m.x=f[4]||0,m.y=f[5]||0,i=Math.sqrt(P*P+Q*Q),j=Math.sqrt(S*S+R*R),k=P||Q?Math.atan2(Q,P)*L:m.rotation||0,l=R||S?Math.atan2(R,S)*L+k:m.skewX||0,m.scaleX=i,m.scaleY=j,m.rotation=k,m.skewX=l,Fa&&(m.rotationX=m.rotationY=m.z=0,m.perspective=r,m.scaleZ=1),m.svg&&(m.x-=m.xOrigin-(m.xOrigin*P+m.yOrigin*R),m.y-=m.yOrigin-(m.xOrigin*Q+m.yOrigin*S))}Math.abs(m.skewX)>90&&Math.abs(m.skewX)<270&&(n?(m.scaleX*=-1,m.skewX+=m.rotation<=0?180:-180,m.rotation+=m.rotation<=0?180:-180):(m.scaleY*=-1,m.skewX+=m.skewX<=0?180:-180)),m.zOrigin=q;for(h in m)m[h]<o&&m[h]>-o&&(m[h]=0)}return d&&(a._gsTransform=m,m.svg&&(Aa&&a.style[Ca]?b.delayedCall(.001,function(){Va(a.style,Ca)}):!Aa&&a.getAttribute("transform")&&b.delayedCall(.001,function(){a.removeAttribute("transform")}))),m},Sa=function(a){var b,c,d=this.data,e=-d.rotation*K,f=e+d.skewX*K,g=1e5,h=(Math.cos(e)*d.scaleX*g|0)/g,i=(Math.sin(e)*d.scaleX*g|0)/g,j=(Math.sin(f)*-d.scaleY*g|0)/g,k=(Math.cos(f)*d.scaleY*g|0)/g,l=this.t.style,m=this.t.currentStyle;if(m){c=i,i=-j,j=-c,b=m.filter,l.filter="";var n,o,q=this.t.offsetWidth,r=this.t.offsetHeight,s="absolute"!==m.position,t="progid:DXImageTransform.Microsoft.Matrix(M11="+h+", M12="+i+", M21="+j+", M22="+k,u=d.x+q*d.xPercent/100,v=d.y+r*d.yPercent/100;if(null!=d.ox&&(n=(d.oxp?q*d.ox*.01:d.ox)-q/2,o=(d.oyp?r*d.oy*.01:d.oy)-r/2,u+=n-(n*h+o*i),v+=o-(n*j+o*k)),s?(n=q/2,o=r/2,t+=", Dx="+(n-(n*h+o*i)+u)+", Dy="+(o-(n*j+o*k)+v)+")"):t+=", sizingMethod='auto expand')",-1!==b.indexOf("DXImageTransform.Microsoft.Matrix(")?l.filter=b.replace(H,t):l.filter=t+" "+b,(0===a||1===a)&&1===h&&0===i&&0===j&&1===k&&(s&&-1===t.indexOf("Dx=0, Dy=0")||x.test(b)&&100!==parseFloat(RegExp.$1)||-1===b.indexOf(b.indexOf("Alpha"))&&l.removeAttribute("filter")),!s){var y,z,A,B=8>p?1:-1;for(n=d.ieOffsetX||0,o=d.ieOffsetY||0,d.ieOffsetX=Math.round((q-((0>h?-h:h)*q+(0>i?-i:i)*r))/2+u),d.ieOffsetY=Math.round((r-((0>k?-k:k)*r+(0>j?-j:j)*q))/2+v),wa=0;4>wa;wa++)z=fa[wa],y=m[z],c=-1!==y.indexOf("px")?parseFloat(y):aa(this.t,z,parseFloat(y),y.replace(w,""))||0,A=c!==d[z]?2>wa?-d.ieOffsetX:-d.ieOffsetY:2>wa?n-d.ieOffsetX:o-d.ieOffsetY,l[z]=(d[z]=Math.round(c-A*(0===wa||2===wa?1:B)))+"px"}}},Ta=S.set3DTransformRatio=S.setTransformRatio=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,o,p,q,r,s,t,u,v,w,x,y,z=this.data,A=this.t.style,B=z.rotation,C=z.rotationX,D=z.rotationY,E=z.scaleX,F=z.scaleY,G=z.scaleZ,H=z.x,I=z.y,J=z.z,L=z.svg,M=z.perspective,N=z.force3D,O=z.skewY,P=z.skewX;if(O&&(P+=O,B+=O),((1===a||0===a)&&"auto"===N&&(this.tween._totalTime===this.tween._totalDuration||!this.tween._totalTime)||!N)&&!J&&!M&&!D&&!C&&1===G||Aa&&L||!Fa)return void(B||P||L?(B*=K,x=P*K,y=1e5,c=Math.cos(B)*E,f=Math.sin(B)*E,d=Math.sin(B-x)*-F,g=Math.cos(B-x)*F,x&&"simple"===z.skewType&&(b=Math.tan(x-O*K),b=Math.sqrt(1+b*b),d*=b,g*=b,O&&(b=Math.tan(O*K),b=Math.sqrt(1+b*b),c*=b,f*=b)),L&&(H+=z.xOrigin-(z.xOrigin*c+z.yOrigin*d)+z.xOffset,I+=z.yOrigin-(z.xOrigin*f+z.yOrigin*g)+z.yOffset,Aa&&(z.xPercent||z.yPercent)&&(q=this.t.getBBox(),H+=.01*z.xPercent*q.width,I+=.01*z.yPercent*q.height),q=1e-6,q>H&&H>-q&&(H=0),q>I&&I>-q&&(I=0)),u=(c*y|0)/y+","+(f*y|0)/y+","+(d*y|0)/y+","+(g*y|0)/y+","+H+","+I+")",L&&Aa?this.t.setAttribute("transform","matrix("+u):A[Ca]=(z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) matrix(":"matrix(")+u):A[Ca]=(z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) matrix(":"matrix(")+E+",0,0,"+F+","+H+","+I+")");if(n&&(q=1e-4,q>E&&E>-q&&(E=G=2e-5),q>F&&F>-q&&(F=G=2e-5),!M||z.z||z.rotationX||z.rotationY||(M=0)),B||P)B*=K,r=c=Math.cos(B),s=f=Math.sin(B),P&&(B-=P*K,r=Math.cos(B),s=Math.sin(B),"simple"===z.skewType&&(b=Math.tan((P-O)*K),b=Math.sqrt(1+b*b),r*=b,s*=b,z.skewY&&(b=Math.tan(O*K),b=Math.sqrt(1+b*b),c*=b,f*=b))),d=-s,g=r;else{if(!(D||C||1!==G||M||L))return void(A[Ca]=(z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) translate3d(":"translate3d(")+H+"px,"+I+"px,"+J+"px)"+(1!==E||1!==F?" scale("+E+","+F+")":""));c=g=1,d=f=0}k=1,e=h=i=j=l=m=0,o=M?-1/M:0,p=z.zOrigin,q=1e-6,v=",",w="0",B=D*K,B&&(r=Math.cos(B),s=Math.sin(B),i=-s,l=o*-s,e=c*s,h=f*s,k=r,o*=r,c*=r,f*=r),B=C*K,B&&(r=Math.cos(B),s=Math.sin(B),b=d*r+e*s,t=g*r+h*s,j=k*s,m=o*s,e=d*-s+e*r,h=g*-s+h*r,k*=r,o*=r,d=b,g=t),1!==G&&(e*=G,h*=G,k*=G,o*=G),1!==F&&(d*=F,g*=F,j*=F,m*=F),1!==E&&(c*=E,f*=E,i*=E,l*=E),(p||L)&&(p&&(H+=e*-p,I+=h*-p,J+=k*-p+p),L&&(H+=z.xOrigin-(z.xOrigin*c+z.yOrigin*d)+z.xOffset,I+=z.yOrigin-(z.xOrigin*f+z.yOrigin*g)+z.yOffset),q>H&&H>-q&&(H=w),q>I&&I>-q&&(I=w),q>J&&J>-q&&(J=0)),u=z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) matrix3d(":"matrix3d(",u+=(q>c&&c>-q?w:c)+v+(q>f&&f>-q?w:f)+v+(q>i&&i>-q?w:i),u+=v+(q>l&&l>-q?w:l)+v+(q>d&&d>-q?w:d)+v+(q>g&&g>-q?w:g),C||D||1!==G?(u+=v+(q>j&&j>-q?w:j)+v+(q>m&&m>-q?w:m)+v+(q>e&&e>-q?w:e),u+=v+(q>h&&h>-q?w:h)+v+(q>k&&k>-q?w:k)+v+(q>o&&o>-q?w:o)+v):u+=",0,0,0,0,1,0,",u+=H+v+I+v+J+v+(M?1+-J/M:1)+")",A[Ca]=u};j=Ga.prototype,j.x=j.y=j.z=j.skewX=j.skewY=j.rotation=j.rotationX=j.rotationY=j.zOrigin=j.xPercent=j.yPercent=j.xOffset=j.yOffset=0,j.scaleX=j.scaleY=j.scaleZ=1,ya("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin",{
	parser:function(a,b,c,d,f,h,i){if(d._lastParsedTransform===i)return f;d._lastParsedTransform=i;var j,k=i.scale&&"function"==typeof i.scale?i.scale:0;"function"==typeof i[c]&&(j=i[c],i[c]=b),k&&(i.scale=k(r,a));var l,m,n,o,p,s,t,u,v,w=a._gsTransform,x=a.style,y=1e-6,z=Ba.length,A=i,B={},C="transformOrigin",D=Ra(a,e,!0,A.parseTransform),E=A.transform&&("function"==typeof A.transform?A.transform(r,q):A.transform);if(D.skewType=A.skewType||D.skewType||g.defaultSkewType,d._transform=D,E&&"string"==typeof E&&Ca)m=Q.style,m[Ca]=E,m.display="block",m.position="absolute",-1!==E.indexOf("%")&&(m.width=_(a,"width"),m.height=_(a,"height")),O.body.appendChild(Q),l=Ra(Q,null,!1),"simple"===D.skewType&&(l.scaleY*=Math.cos(l.skewX*K)),D.svg&&(s=D.xOrigin,t=D.yOrigin,l.x-=D.xOffset,l.y-=D.yOffset,(A.transformOrigin||A.svgOrigin)&&(E={},La(a,ha(A.transformOrigin),E,A.svgOrigin,A.smoothOrigin,!0),s=E.xOrigin,t=E.yOrigin,l.x-=E.xOffset-D.xOffset,l.y-=E.yOffset-D.yOffset),(s||t)&&(u=Qa(Q,!0),l.x-=s-(s*u[0]+t*u[2]),l.y-=t-(s*u[1]+t*u[3]))),O.body.removeChild(Q),l.perspective||(l.perspective=D.perspective),null!=A.xPercent&&(l.xPercent=ja(A.xPercent,D.xPercent)),null!=A.yPercent&&(l.yPercent=ja(A.yPercent,D.yPercent));else if("object"==typeof A){if(l={scaleX:ja(null!=A.scaleX?A.scaleX:A.scale,D.scaleX),scaleY:ja(null!=A.scaleY?A.scaleY:A.scale,D.scaleY),scaleZ:ja(A.scaleZ,D.scaleZ),x:ja(A.x,D.x),y:ja(A.y,D.y),z:ja(A.z,D.z),xPercent:ja(A.xPercent,D.xPercent),yPercent:ja(A.yPercent,D.yPercent),perspective:ja(A.transformPerspective,D.perspective)},p=A.directionalRotation,null!=p)if("object"==typeof p)for(m in p)A[m]=p[m];else A.rotation=p;"string"==typeof A.x&&-1!==A.x.indexOf("%")&&(l.x=0,l.xPercent=ja(A.x,D.xPercent)),"string"==typeof A.y&&-1!==A.y.indexOf("%")&&(l.y=0,l.yPercent=ja(A.y,D.yPercent)),l.rotation=ka("rotation"in A?A.rotation:"shortRotation"in A?A.shortRotation+"_short":"rotationZ"in A?A.rotationZ:D.rotation,D.rotation,"rotation",B),Fa&&(l.rotationX=ka("rotationX"in A?A.rotationX:"shortRotationX"in A?A.shortRotationX+"_short":D.rotationX||0,D.rotationX,"rotationX",B),l.rotationY=ka("rotationY"in A?A.rotationY:"shortRotationY"in A?A.shortRotationY+"_short":D.rotationY||0,D.rotationY,"rotationY",B)),l.skewX=ka(A.skewX,D.skewX),l.skewY=ka(A.skewY,D.skewY)}for(Fa&&null!=A.force3D&&(D.force3D=A.force3D,o=!0),n=D.force3D||D.z||D.rotationX||D.rotationY||l.z||l.rotationX||l.rotationY||l.perspective,n||null==A.scale||(l.scaleZ=1);--z>-1;)v=Ba[z],E=l[v]-D[v],(E>y||-y>E||null!=A[v]||null!=M[v])&&(o=!0,f=new ta(D,v,D[v],E,f),v in B&&(f.e=B[v]),f.xs0=0,f.plugin=h,d._overwriteProps.push(f.n));return E=A.transformOrigin,D.svg&&(E||A.svgOrigin)&&(s=D.xOffset,t=D.yOffset,La(a,ha(E),l,A.svgOrigin,A.smoothOrigin),f=ua(D,"xOrigin",(w?D:l).xOrigin,l.xOrigin,f,C),f=ua(D,"yOrigin",(w?D:l).yOrigin,l.yOrigin,f,C),(s!==D.xOffset||t!==D.yOffset)&&(f=ua(D,"xOffset",w?s:D.xOffset,D.xOffset,f,C),f=ua(D,"yOffset",w?t:D.yOffset,D.yOffset,f,C)),E="0px 0px"),(E||Fa&&n&&D.zOrigin)&&(Ca?(o=!0,v=Ea,E=(E||_(a,v,e,!1,"50% 50%"))+"",f=new ta(x,v,0,0,f,-1,C),f.b=x[v],f.plugin=h,Fa?(m=D.zOrigin,E=E.split(" "),D.zOrigin=(E.length>2&&(0===m||"0px"!==E[2])?parseFloat(E[2]):m)||0,f.xs0=f.e=E[0]+" "+(E[1]||"50%")+" 0px",f=new ta(D,"zOrigin",0,0,f,-1,f.n),f.b=m,f.xs0=f.e=D.zOrigin):f.xs0=f.e=E):ha(E+"",D)),o&&(d._transformType=D.svg&&Aa||!n&&3!==this._transformType?2:3),j&&(i[c]=j),k&&(i.scale=k),f},prefix:!0}),ya("boxShadow",{defaultValue:"0px 0px 0px 0px #999",prefix:!0,color:!0,multi:!0,keyword:"inset"}),ya("borderRadius",{defaultValue:"0px",parser:function(a,b,c,f,g,h){b=this.format(b);var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],z=a.style;for(q=parseFloat(a.offsetWidth),r=parseFloat(a.offsetHeight),i=b.split(" "),j=0;j<y.length;j++)this.p.indexOf("border")&&(y[j]=Z(y[j])),m=l=_(a,y[j],e,!1,"0px"),-1!==m.indexOf(" ")&&(l=m.split(" "),m=l[0],l=l[1]),n=k=i[j],o=parseFloat(m),t=m.substr((o+"").length),u="="===n.charAt(1),u?(p=parseInt(n.charAt(0)+"1",10),n=n.substr(2),p*=parseFloat(n),s=n.substr((p+"").length-(0>p?1:0))||""):(p=parseFloat(n),s=n.substr((p+"").length)),""===s&&(s=d[c]||t),s!==t&&(v=aa(a,"borderLeft",o,t),w=aa(a,"borderTop",o,t),"%"===s?(m=v/q*100+"%",l=w/r*100+"%"):"em"===s?(x=aa(a,"borderLeft",1,"em"),m=v/x+"em",l=w/x+"em"):(m=v+"px",l=w+"px"),u&&(n=parseFloat(m)+p+s,k=parseFloat(l)+p+s)),g=va(z,y[j],m+" "+l,n+" "+k,!1,"0px",g);return g},prefix:!0,formatter:qa("0px 0px 0px 0px",!1,!0)}),ya("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius",{defaultValue:"0px",parser:function(a,b,c,d,f,g){return va(a.style,c,this.format(_(a,c,e,!1,"0px 0px")),this.format(b),!1,"0px",f)},prefix:!0,formatter:qa("0px 0px",!1,!0)}),ya("backgroundPosition",{defaultValue:"0 0",parser:function(a,b,c,d,f,g){var h,i,j,k,l,m,n="background-position",o=e||$(a,null),q=this.format((o?p?o.getPropertyValue(n+"-x")+" "+o.getPropertyValue(n+"-y"):o.getPropertyValue(n):a.currentStyle.backgroundPositionX+" "+a.currentStyle.backgroundPositionY)||"0 0"),r=this.format(b);if(-1!==q.indexOf("%")!=(-1!==r.indexOf("%"))&&r.split(",").length<2&&(m=_(a,"backgroundImage").replace(D,""),m&&"none"!==m)){for(h=q.split(" "),i=r.split(" "),R.setAttribute("src",m),j=2;--j>-1;)q=h[j],k=-1!==q.indexOf("%"),k!==(-1!==i[j].indexOf("%"))&&(l=0===j?a.offsetWidth-R.width:a.offsetHeight-R.height,h[j]=k?parseFloat(q)/100*l+"px":parseFloat(q)/l*100+"%");q=h.join(" ")}return this.parseComplex(a.style,q,r,f,g)},formatter:ha}),ya("backgroundSize",{defaultValue:"0 0",formatter:function(a){return a+="","co"===a.substr(0,2)?a:ha(-1===a.indexOf(" ")?a+" "+a:a)}}),ya("perspective",{defaultValue:"0px",prefix:!0}),ya("perspectiveOrigin",{defaultValue:"50% 50%",prefix:!0}),ya("transformStyle",{prefix:!0}),ya("backfaceVisibility",{prefix:!0}),ya("userSelect",{prefix:!0}),ya("margin",{parser:ra("marginTop,marginRight,marginBottom,marginLeft")}),ya("padding",{parser:ra("paddingTop,paddingRight,paddingBottom,paddingLeft")}),ya("clip",{defaultValue:"rect(0px,0px,0px,0px)",parser:function(a,b,c,d,f,g){var h,i,j;return 9>p?(i=a.currentStyle,j=8>p?" ":",",h="rect("+i.clipTop+j+i.clipRight+j+i.clipBottom+j+i.clipLeft+")",b=this.format(b).split(",").join(j)):(h=this.format(_(a,this.p,e,!1,this.dflt)),b=this.format(b)),this.parseComplex(a.style,h,b,f,g)}}),ya("textShadow",{defaultValue:"0px 0px 0px #999",color:!0,multi:!0}),ya("autoRound,strictUnits",{parser:function(a,b,c,d,e){return e}}),ya("border",{defaultValue:"0px solid #000",parser:function(a,b,c,d,f,g){var h=_(a,"borderTopWidth",e,!1,"0px"),i=this.format(b).split(" "),j=i[0].replace(w,"");return"px"!==j&&(h=parseFloat(h)/aa(a,"borderTopWidth",1,j)+j),this.parseComplex(a.style,this.format(h+" "+_(a,"borderTopStyle",e,!1,"solid")+" "+_(a,"borderTopColor",e,!1,"#000")),i.join(" "),f,g)},color:!0,formatter:function(a){var b=a.split(" ");return b[0]+" "+(b[1]||"solid")+" "+(a.match(pa)||["#000"])[0]}}),ya("borderWidth",{parser:ra("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}),ya("float,cssFloat,styleFloat",{parser:function(a,b,c,d,e,f){var g=a.style,h="cssFloat"in g?"cssFloat":"styleFloat";return new ta(g,h,0,0,e,-1,c,!1,0,g[h],b)}});var Ua=function(a){var b,c=this.t,d=c.filter||_(this.data,"filter")||"",e=this.s+this.c*a|0;100===e&&(-1===d.indexOf("atrix(")&&-1===d.indexOf("radient(")&&-1===d.indexOf("oader(")?(c.removeAttribute("filter"),b=!_(this.data,"filter")):(c.filter=d.replace(z,""),b=!0)),b||(this.xn1&&(c.filter=d=d||"alpha(opacity="+e+")"),-1===d.indexOf("pacity")?0===e&&this.xn1||(c.filter=d+" alpha(opacity="+e+")"):c.filter=d.replace(x,"opacity="+e))};ya("opacity,alpha,autoAlpha",{defaultValue:"1",parser:function(a,b,c,d,f,g){var h=parseFloat(_(a,"opacity",e,!1,"1")),i=a.style,j="autoAlpha"===c;return"string"==typeof b&&"="===b.charAt(1)&&(b=("-"===b.charAt(0)?-1:1)*parseFloat(b.substr(2))+h),j&&1===h&&"hidden"===_(a,"visibility",e)&&0!==b&&(h=0),U?f=new ta(i,"opacity",h,b-h,f):(f=new ta(i,"opacity",100*h,100*(b-h),f),f.xn1=j?1:0,i.zoom=1,f.type=2,f.b="alpha(opacity="+f.s+")",f.e="alpha(opacity="+(f.s+f.c)+")",f.data=a,f.plugin=g,f.setRatio=Ua),j&&(f=new ta(i,"visibility",0,0,f,-1,null,!1,0,0!==h?"inherit":"hidden",0===b?"hidden":"inherit"),f.xs0="inherit",d._overwriteProps.push(f.n),d._overwriteProps.push(c)),f}});var Va=function(a,b){b&&(a.removeProperty?(("ms"===b.substr(0,2)||"webkit"===b.substr(0,6))&&(b="-"+b),a.removeProperty(b.replace(B,"-$1").toLowerCase())):a.removeAttribute(b))},Wa=function(a){if(this.t._gsClassPT=this,1===a||0===a){this.t.setAttribute("class",0===a?this.b:this.e);for(var b=this.data,c=this.t.style;b;)b.v?c[b.p]=b.v:Va(c,b.p),b=b._next;1===a&&this.t._gsClassPT===this&&(this.t._gsClassPT=null)}else this.t.getAttribute("class")!==this.e&&this.t.setAttribute("class",this.e)};ya("className",{parser:function(a,b,d,f,g,h,i){var j,k,l,m,n,o=a.getAttribute("class")||"",p=a.style.cssText;if(g=f._classNamePT=new ta(a,d,0,0,g,2),g.setRatio=Wa,g.pr=-11,c=!0,g.b=o,k=ca(a,e),l=a._gsClassPT){for(m={},n=l.data;n;)m[n.p]=1,n=n._next;l.setRatio(1)}return a._gsClassPT=g,g.e="="!==b.charAt(1)?b:o.replace(new RegExp("(?:\\s|^)"+b.substr(2)+"(?![\\w-])"),"")+("+"===b.charAt(0)?" "+b.substr(2):""),a.setAttribute("class",g.e),j=da(a,k,ca(a),i,m),a.setAttribute("class",o),g.data=j.firstMPT,a.style.cssText=p,g=g.xfirst=f.parse(a,j.difs,g,h)}});var Xa=function(a){if((1===a||0===a)&&this.data._totalTime===this.data._totalDuration&&"isFromStart"!==this.data.data){var b,c,d,e,f,g=this.t.style,h=i.transform.parse;if("all"===this.e)g.cssText="",e=!0;else for(b=this.e.split(" ").join("").split(","),d=b.length;--d>-1;)c=b[d],i[c]&&(i[c].parse===h?e=!0:c="transformOrigin"===c?Ea:i[c].p),Va(g,c);e&&(Va(g,Ca),f=this.t._gsTransform,f&&(f.svg&&(this.t.removeAttribute("data-svg-origin"),this.t.removeAttribute("transform")),delete this.t._gsTransform))}};for(ya("clearProps",{parser:function(a,b,d,e,f){return f=new ta(a,d,0,0,f,2),f.setRatio=Xa,f.e=b,f.pr=-10,f.data=e._tween,c=!0,f}}),j="bezier,throwProps,physicsProps,physics2D".split(","),wa=j.length;wa--;)za(j[wa]);j=g.prototype,j._firstPT=j._lastParsedTransform=j._transform=null,j._onInitTween=function(a,b,h,j){if(!a.nodeType)return!1;this._target=q=a,this._tween=h,this._vars=b,r=j,k=b.autoRound,c=!1,d=b.suffixMap||g.suffixMap,e=$(a,""),f=this._overwriteProps;var n,p,s,t,u,v,w,x,z,A=a.style;if(l&&""===A.zIndex&&(n=_(a,"zIndex",e),("auto"===n||""===n)&&this._addLazySet(A,"zIndex",0)),"string"==typeof b&&(t=A.cssText,n=ca(a,e),A.cssText=t+";"+b,n=da(a,n,ca(a)).difs,!U&&y.test(b)&&(n.opacity=parseFloat(RegExp.$1)),b=n,A.cssText=t),b.className?this._firstPT=p=i.className.parse(a,b.className,"className",this,null,null,b):this._firstPT=p=this.parse(a,b,null),this._transformType){for(z=3===this._transformType,Ca?m&&(l=!0,""===A.zIndex&&(w=_(a,"zIndex",e),("auto"===w||""===w)&&this._addLazySet(A,"zIndex",0)),o&&this._addLazySet(A,"WebkitBackfaceVisibility",this._vars.WebkitBackfaceVisibility||(z?"visible":"hidden"))):A.zoom=1,s=p;s&&s._next;)s=s._next;x=new ta(a,"transform",0,0,null,2),this._linkCSSP(x,null,s),x.setRatio=Ca?Ta:Sa,x.data=this._transform||Ra(a,e,!0),x.tween=h,x.pr=-1,f.pop()}if(c){for(;p;){for(v=p._next,s=t;s&&s.pr>p.pr;)s=s._next;(p._prev=s?s._prev:u)?p._prev._next=p:t=p,(p._next=s)?s._prev=p:u=p,p=v}this._firstPT=t}return!0},j.parse=function(a,b,c,f){var g,h,j,l,m,n,o,p,s,t,u=a.style;for(g in b){if(n=b[g],"function"==typeof n&&(n=n(r,q)),h=i[g])c=h.parse(a,n,g,this,c,f,b);else{if("--"===g.substr(0,2)){this._tween._propLookup[g]=this._addTween.call(this._tween,a.style,"setProperty",$(a).getPropertyValue(g)+"",n+"",g,!1,g);continue}m=_(a,g,e)+"",s="string"==typeof n,"color"===g||"fill"===g||"stroke"===g||-1!==g.indexOf("Color")||s&&A.test(n)?(s||(n=na(n),n=(n.length>3?"rgba(":"rgb(")+n.join(",")+")"),c=va(u,g,m,n,!0,"transparent",c,0,f)):s&&J.test(n)?c=va(u,g,m,n,!0,null,c,0,f):(j=parseFloat(m),o=j||0===j?m.substr((j+"").length):"",(""===m||"auto"===m)&&("width"===g||"height"===g?(j=ga(a,g,e),o="px"):"left"===g||"top"===g?(j=ba(a,g,e),o="px"):(j="opacity"!==g?0:1,o="")),t=s&&"="===n.charAt(1),t?(l=parseInt(n.charAt(0)+"1",10),n=n.substr(2),l*=parseFloat(n),p=n.replace(w,"")):(l=parseFloat(n),p=s?n.replace(w,""):""),""===p&&(p=g in d?d[g]:o),n=l||0===l?(t?l+j:l)+p:b[g],o!==p&&(""!==p||"lineHeight"===g)&&(l||0===l)&&j&&(j=aa(a,g,j,o),"%"===p?(j/=aa(a,g,100,"%")/100,b.strictUnits!==!0&&(m=j+"%")):"em"===p||"rem"===p||"vw"===p||"vh"===p?j/=aa(a,g,1,p):"px"!==p&&(l=aa(a,g,l,p),p="px"),t&&(l||0===l)&&(n=l+j+p)),t&&(l+=j),!j&&0!==j||!l&&0!==l?void 0!==u[g]&&(n||n+""!="NaN"&&null!=n)?(c=new ta(u,g,l||j||0,0,c,-1,g,!1,0,m,n),c.xs0="none"!==n||"display"!==g&&-1===g.indexOf("Style")?n:m):W("invalid "+g+" tween value: "+b[g]):(c=new ta(u,g,j,l-j,c,0,g,k!==!1&&("px"===p||"zIndex"===g),0,m,n),c.xs0=p))}f&&c&&!c.plugin&&(c.plugin=f)}return c},j.setRatio=function(a){var b,c,d,e=this._firstPT,f=1e-6;if(1!==a||this._tween._time!==this._tween._duration&&0!==this._tween._time)if(a||this._tween._time!==this._tween._duration&&0!==this._tween._time||this._tween._rawPrevTime===-1e-6)for(;e;){if(b=e.c*a+e.s,e.r?b=e.r(b):f>b&&b>-f&&(b=0),e.type)if(1===e.type)if(d=e.l,2===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2;else if(3===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2+e.xn2+e.xs3;else if(4===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2+e.xn2+e.xs3+e.xn3+e.xs4;else if(5===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2+e.xn2+e.xs3+e.xn3+e.xs4+e.xn4+e.xs5;else{for(c=e.xs0+b+e.xs1,d=1;d<e.l;d++)c+=e["xn"+d]+e["xs"+(d+1)];e.t[e.p]=c}else-1===e.type?e.t[e.p]=e.xs0:e.setRatio&&e.setRatio(a);else e.t[e.p]=b+e.xs0;e=e._next}else for(;e;)2!==e.type?e.t[e.p]=e.b:e.setRatio(a),e=e._next;else for(;e;){if(2!==e.type)if(e.r&&-1!==e.type)if(b=e.r(e.s+e.c),e.type){if(1===e.type){for(d=e.l,c=e.xs0+b+e.xs1,d=1;d<e.l;d++)c+=e["xn"+d]+e["xs"+(d+1)];e.t[e.p]=c}}else e.t[e.p]=b+e.xs0;else e.t[e.p]=e.e;else e.setRatio(a);e=e._next}},j._enableTransforms=function(a){this._transform=this._transform||Ra(this._target,e,!0),this._transformType=this._transform.svg&&Aa||!a&&3!==this._transformType?2:3};var Ya=function(a){this.t[this.p]=this.e,this.data._linkCSSP(this,this._next,null,!0)};j._addLazySet=function(a,b,c){var d=this._firstPT=new ta(a,b,0,0,this._firstPT,2);d.e=c,d.setRatio=Ya,d.data=this},j._linkCSSP=function(a,b,c,d){return a&&(b&&(b._prev=a),a._next&&(a._next._prev=a._prev),a._prev?a._prev._next=a._next:this._firstPT===a&&(this._firstPT=a._next,d=!0),c?c._next=a:d||null!==this._firstPT||(this._firstPT=a),a._next=b,a._prev=c),a},j._mod=function(a){for(var b=this._firstPT;b;)"function"==typeof a[b.p]&&(b.r=a[b.p]),b=b._next},j._kill=function(b){var c,d,e,f=b;if(b.autoAlpha||b.alpha){f={};for(d in b)f[d]=b[d];f.opacity=1,f.autoAlpha&&(f.visibility=1)}for(b.className&&(c=this._classNamePT)&&(e=c.xfirst,e&&e._prev?this._linkCSSP(e._prev,c._next,e._prev._prev):e===this._firstPT&&(this._firstPT=c._next),c._next&&this._linkCSSP(c._next,c._next._next,e._prev),this._classNamePT=null),c=this._firstPT;c;)c.plugin&&c.plugin!==d&&c.plugin._kill&&(c.plugin._kill(b),d=c.plugin),c=c._next;return a.prototype._kill.call(this,f)};var Za=function(a,b,c){var d,e,f,g;if(a.slice)for(e=a.length;--e>-1;)Za(a[e],b,c);else for(d=a.childNodes,e=d.length;--e>-1;)f=d[e],g=f.type,f.style&&(b.push(ca(f)),c&&c.push(f)),1!==g&&9!==g&&11!==g||!f.childNodes.length||Za(f,b,c)};return g.cascadeTo=function(a,c,d){var e,f,g,h,i=b.to(a,c,d),j=[i],k=[],l=[],m=[],n=b._internals.reservedProps;for(a=i._targets||i.target,Za(a,k,m),i.render(c,!0,!0),Za(a,l),i.render(0,!0,!0),i._enabled(!0),e=m.length;--e>-1;)if(f=da(m[e],k[e],l[e]),f.firstMPT){f=f.difs;for(g in d)n[g]&&(f[g]=d[g]);h={};for(g in f)h[g]=k[e][g];j.push(b.fromTo(m[e],c,h,f))}return j},a.activate([g]),g},!0),function(){var a=_gsScope._gsDefine.plugin({propName:"roundProps",version:"1.7.0",priority:-1,API:2,init:function(a,b,c){return this._tween=c,!0}}),b=function(a){var b=1>a?Math.pow(10,(a+"").length-2):1;return function(c){return(Math.round(c/a)*a*b|0)/b}},c=function(a,b){for(;a;)a.f||a.blob||(a.m=b||Math.round),a=a._next},d=a.prototype;d._onInitAllProps=function(){var a,d,e,f,g=this._tween,h=g.vars.roundProps,i={},j=g._propLookup.roundProps;if("object"!=typeof h||h.push)for("string"==typeof h&&(h=h.split(",")),e=h.length;--e>-1;)i[h[e]]=Math.round;else for(f in h)i[f]=b(h[f]);for(f in i)for(a=g._firstPT;a;)d=a._next,a.pg?a.t._mod(i):a.n===f&&(2===a.f&&a.t?c(a.t._firstPT,i[f]):(this._add(a.t,f,a.s,a.c,i[f]),d&&(d._prev=a._prev),a._prev?a._prev._next=d:g._firstPT===a&&(g._firstPT=d),a._next=a._prev=null,g._propLookup[f]=j)),a=d;return!1},d._add=function(a,b,c,d,e){this._addTween(a,b,c,c+d,b,e||Math.round),this._overwriteProps.push(b)}}(),function(){_gsScope._gsDefine.plugin({propName:"attr",API:2,version:"0.6.1",init:function(a,b,c,d){var e,f;if("function"!=typeof a.setAttribute)return!1;for(e in b)f=b[e],"function"==typeof f&&(f=f(d,a)),this._addTween(a,"setAttribute",a.getAttribute(e)+"",f+"",e,!1,e),this._overwriteProps.push(e);return!0}})}(),_gsScope._gsDefine.plugin({propName:"directionalRotation",version:"0.3.1",API:2,init:function(a,b,c,d){"object"!=typeof b&&(b={rotation:b}),this.finals={};var e,f,g,h,i,j,k=b.useRadians===!0?2*Math.PI:360,l=1e-6;for(e in b)"useRadians"!==e&&(h=b[e],"function"==typeof h&&(h=h(d,a)),j=(h+"").split("_"),f=j[0],g=parseFloat("function"!=typeof a[e]?a[e]:a[e.indexOf("set")||"function"!=typeof a["get"+e.substr(3)]?e:"get"+e.substr(3)]()),h=this.finals[e]="string"==typeof f&&"="===f.charAt(1)?g+parseInt(f.charAt(0)+"1",10)*Number(f.substr(2)):Number(f)||0,i=h-g,j.length&&(f=j.join("_"),-1!==f.indexOf("short")&&(i%=k,i!==i%(k/2)&&(i=0>i?i+k:i-k)),-1!==f.indexOf("_cw")&&0>i?i=(i+9999999999*k)%k-(i/k|0)*k:-1!==f.indexOf("ccw")&&i>0&&(i=(i-9999999999*k)%k-(i/k|0)*k)),(i>l||-l>i)&&(this._addTween(a,e,g,g+i,e),this._overwriteProps.push(e)));return!0},set:function(a){var b;if(1!==a)this._super.setRatio.call(this,a);else for(b=this._firstPT;b;)b.f?b.t[b.p](this.finals[b.p]):b.t[b.p]=this.finals[b.p],b=b._next}})._autoCSS=!0,_gsScope._gsDefine("easing.Back",["easing.Ease"],function(a){var b,c,d,e,f=_gsScope.GreenSockGlobals||_gsScope,g=f.com.greensock,h=2*Math.PI,i=Math.PI/2,j=g._class,k=function(b,c){var d=j("easing."+b,function(){},!0),e=d.prototype=new a;return e.constructor=d,e.getRatio=c,d},l=a.register||function(){},m=function(a,b,c,d,e){var f=j("easing."+a,{easeOut:new b,easeIn:new c,easeInOut:new d},!0);return l(f,a),f},n=function(a,b,c){this.t=a,this.v=b,c&&(this.next=c,c.prev=this,this.c=c.v-b,this.gap=c.t-a)},o=function(b,c){var d=j("easing."+b,function(a){this._p1=a||0===a?a:1.70158,this._p2=1.525*this._p1},!0),e=d.prototype=new a;return e.constructor=d,e.getRatio=c,e.config=function(a){return new d(a)},d},p=m("Back",o("BackOut",function(a){return(a-=1)*a*((this._p1+1)*a+this._p1)+1}),o("BackIn",function(a){return a*a*((this._p1+1)*a-this._p1)}),o("BackInOut",function(a){return(a*=2)<1?.5*a*a*((this._p2+1)*a-this._p2):.5*((a-=2)*a*((this._p2+1)*a+this._p2)+2)})),q=j("easing.SlowMo",function(a,b,c){b=b||0===b?b:.7,null==a?a=.7:a>1&&(a=1),this._p=1!==a?b:0,this._p1=(1-a)/2,this._p2=a,this._p3=this._p1+this._p2,this._calcEnd=c===!0},!0),r=q.prototype=new a;return r.constructor=q,r.getRatio=function(a){var b=a+(.5-a)*this._p;return a<this._p1?this._calcEnd?1-(a=1-a/this._p1)*a:b-(a=1-a/this._p1)*a*a*a*b:a>this._p3?this._calcEnd?1===a?0:1-(a=(a-this._p3)/this._p1)*a:b+(a-b)*(a=(a-this._p3)/this._p1)*a*a*a:this._calcEnd?1:b},q.ease=new q(.7,.7),r.config=q.config=function(a,b,c){return new q(a,b,c)},b=j("easing.SteppedEase",function(a,b){a=a||1,this._p1=1/a,this._p2=a+(b?0:1),this._p3=b?1:0},!0),r=b.prototype=new a,r.constructor=b,r.getRatio=function(a){return 0>a?a=0:a>=1&&(a=.999999999),((this._p2*a|0)+this._p3)*this._p1},r.config=b.config=function(a,c){return new b(a,c)},c=j("easing.ExpoScaleEase",function(a,b,c){this._p1=Math.log(b/a),this._p2=b-a,this._p3=a,this._ease=c},!0),r=c.prototype=new a,r.constructor=c,r.getRatio=function(a){return this._ease&&(a=this._ease.getRatio(a)),(this._p3*Math.exp(this._p1*a)-this._p3)/this._p2},r.config=c.config=function(a,b,d){return new c(a,b,d)},d=j("easing.RoughEase",function(b){b=b||{};for(var c,d,e,f,g,h,i=b.taper||"none",j=[],k=0,l=0|(b.points||20),m=l,o=b.randomize!==!1,p=b.clamp===!0,q=b.template instanceof a?b.template:null,r="number"==typeof b.strength?.4*b.strength:.4;--m>-1;)c=o?Math.random():1/l*m,d=q?q.getRatio(c):c,"none"===i?e=r:"out"===i?(f=1-c,e=f*f*r):"in"===i?e=c*c*r:.5>c?(f=2*c,e=f*f*.5*r):(f=2*(1-c),e=f*f*.5*r),o?d+=Math.random()*e-.5*e:m%2?d+=.5*e:d-=.5*e,p&&(d>1?d=1:0>d&&(d=0)),j[k++]={x:c,y:d};for(j.sort(function(a,b){return a.x-b.x}),h=new n(1,1,null),m=l;--m>-1;)g=j[m],h=new n(g.x,g.y,h);this._prev=new n(0,0,0!==h.t?h:h.next)},!0),r=d.prototype=new a,r.constructor=d,r.getRatio=function(a){var b=this._prev;if(a>b.t){for(;b.next&&a>=b.t;)b=b.next;b=b.prev}else for(;b.prev&&a<=b.t;)b=b.prev;return this._prev=b,b.v+(a-b.t)/b.gap*b.c},r.config=function(a){return new d(a)},d.ease=new d,m("Bounce",k("BounceOut",function(a){return 1/2.75>a?7.5625*a*a:2/2.75>a?7.5625*(a-=1.5/2.75)*a+.75:2.5/2.75>a?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375}),k("BounceIn",function(a){return(a=1-a)<1/2.75?1-7.5625*a*a:2/2.75>a?1-(7.5625*(a-=1.5/2.75)*a+.75):2.5/2.75>a?1-(7.5625*(a-=2.25/2.75)*a+.9375):1-(7.5625*(a-=2.625/2.75)*a+.984375)}),k("BounceInOut",function(a){var b=.5>a;return a=b?1-2*a:2*a-1,a=1/2.75>a?7.5625*a*a:2/2.75>a?7.5625*(a-=1.5/2.75)*a+.75:2.5/2.75>a?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375,b?.5*(1-a):.5*a+.5})),m("Circ",k("CircOut",function(a){return Math.sqrt(1-(a-=1)*a)}),k("CircIn",function(a){return-(Math.sqrt(1-a*a)-1)}),k("CircInOut",function(a){return(a*=2)<1?-.5*(Math.sqrt(1-a*a)-1):.5*(Math.sqrt(1-(a-=2)*a)+1)})),e=function(b,c,d){var e=j("easing."+b,function(a,b){this._p1=a>=1?a:1,this._p2=(b||d)/(1>a?a:1),this._p3=this._p2/h*(Math.asin(1/this._p1)||0),this._p2=h/this._p2},!0),f=e.prototype=new a;return f.constructor=e,f.getRatio=c,f.config=function(a,b){return new e(a,b)},e},m("Elastic",e("ElasticOut",function(a){return this._p1*Math.pow(2,-10*a)*Math.sin((a-this._p3)*this._p2)+1},.3),e("ElasticIn",function(a){return-(this._p1*Math.pow(2,10*(a-=1))*Math.sin((a-this._p3)*this._p2))},.3),e("ElasticInOut",function(a){return(a*=2)<1?-.5*(this._p1*Math.pow(2,10*(a-=1))*Math.sin((a-this._p3)*this._p2)):this._p1*Math.pow(2,-10*(a-=1))*Math.sin((a-this._p3)*this._p2)*.5+1},.45)),m("Expo",k("ExpoOut",function(a){return 1-Math.pow(2,-10*a)}),k("ExpoIn",function(a){return Math.pow(2,10*(a-1))-.001}),k("ExpoInOut",function(a){return(a*=2)<1?.5*Math.pow(2,10*(a-1)):.5*(2-Math.pow(2,-10*(a-1)))})),m("Sine",k("SineOut",function(a){return Math.sin(a*i)}),k("SineIn",function(a){return-Math.cos(a*i)+1}),k("SineInOut",function(a){return-.5*(Math.cos(Math.PI*a)-1)})),j("easing.EaseLookup",{find:function(b){return a.map[b]}},!0),l(f.SlowMo,"SlowMo","ease,"),l(d,"RoughEase","ease,"),l(b,"SteppedEase","ease,"),p},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(a,b){"use strict";var c={},d=a.document,e=a.GreenSockGlobals=a.GreenSockGlobals||a;if(e.TweenLite)return e.TweenLite;var f,g,h,i,j,k=function(a){var b,c=a.split("."),d=e;for(b=0;b<c.length;b++)d[c[b]]=d=d[c[b]]||{};return d},l=k("com.greensock"),m=1e-10,n=function(a){var b,c=[],d=a.length;for(b=0;b!==d;c.push(a[b++]));return c},o=function(){},p=function(){var a=Object.prototype.toString,b=a.call([]);return function(c){return null!=c&&(c instanceof Array||"object"==typeof c&&!!c.push&&a.call(c)===b)}}(),q={},r=function(d,f,g,h){this.sc=q[d]?q[d].sc:[],q[d]=this,this.gsClass=null,this.func=g;var i=[];this.check=function(j){for(var l,m,n,o,p=f.length,s=p;--p>-1;)(l=q[f[p]]||new r(f[p],[])).gsClass?(i[p]=l.gsClass,s--):j&&l.sc.push(this);if(0===s&&g){if(m=("com.greensock."+d).split("."),n=m.pop(),o=k(m.join("."))[n]=this.gsClass=g.apply(g,i),h)if(e[n]=c[n]=o,"undefined"!=typeof module&&module.exports)if(d===b){module.exports=c[b]=o;for(p in c)o[p]=c[p]}else c[b]&&(c[b][n]=o);else"function"=="function"&&__webpack_require__(4)&&!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function(){return o}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));for(p=0;p<this.sc.length;p++)this.sc[p].check()}},this.check(!0)},s=a._gsDefine=function(a,b,c,d){return new r(a,b,c,d)},t=l._class=function(a,b,c){return b=b||function(){},s(a,[],function(){return b},c),b};s.globals=e;var u=[0,0,1,1],v=t("easing.Ease",function(a,b,c,d){this._func=a,this._type=c||0,this._power=d||0,this._params=b?u.concat(b):u},!0),w=v.map={},x=v.register=function(a,b,c,d){for(var e,f,g,h,i=b.split(","),j=i.length,k=(c||"easeIn,easeOut,easeInOut").split(",");--j>-1;)for(f=i[j],e=d?t("easing."+f,null,!0):l.easing[f]||{},g=k.length;--g>-1;)h=k[g],w[f+"."+h]=w[h+f]=e[h]=a.getRatio?a:a[h]||new a};for(h=v.prototype,h._calcEnd=!1,h.getRatio=function(a){if(this._func)return this._params[0]=a,this._func.apply(null,this._params);var b=this._type,c=this._power,d=1===b?1-a:2===b?a:.5>a?2*a:2*(1-a);return 1===c?d*=d:2===c?d*=d*d:3===c?d*=d*d*d:4===c&&(d*=d*d*d*d),1===b?1-d:2===b?d:.5>a?d/2:1-d/2},f=["Linear","Quad","Cubic","Quart","Quint,Strong"],g=f.length;--g>-1;)h=f[g]+",Power"+g,x(new v(null,null,1,g),h,"easeOut",!0),x(new v(null,null,2,g),h,"easeIn"+(0===g?",easeNone":"")),x(new v(null,null,3,g),h,"easeInOut");w.linear=l.easing.Linear.easeIn,w.swing=l.easing.Quad.easeInOut;var y=t("events.EventDispatcher",function(a){this._listeners={},this._eventTarget=a||this});h=y.prototype,h.addEventListener=function(a,b,c,d,e){e=e||0;var f,g,h=this._listeners[a],k=0;for(this!==i||j||i.wake(),null==h&&(this._listeners[a]=h=[]),g=h.length;--g>-1;)f=h[g],f.c===b&&f.s===c?h.splice(g,1):0===k&&f.pr<e&&(k=g+1);h.splice(k,0,{c:b,s:c,up:d,pr:e})},h.removeEventListener=function(a,b){var c,d=this._listeners[a];if(d)for(c=d.length;--c>-1;)if(d[c].c===b)return void d.splice(c,1)},h.dispatchEvent=function(a){var b,c,d,e=this._listeners[a];if(e)for(b=e.length,b>1&&(e=e.slice(0)),c=this._eventTarget;--b>-1;)d=e[b],d&&(d.up?d.c.call(d.s||c,{type:a,target:c}):d.c.call(d.s||c))};var z=a.requestAnimationFrame,A=a.cancelAnimationFrame,B=Date.now||function(){return(new Date).getTime()},C=B();for(f=["ms","moz","webkit","o"],g=f.length;--g>-1&&!z;)z=a[f[g]+"RequestAnimationFrame"],A=a[f[g]+"CancelAnimationFrame"]||a[f[g]+"CancelRequestAnimationFrame"];t("Ticker",function(a,b){var c,e,f,g,h,k=this,l=B(),n=b!==!1&&z?"auto":!1,p=500,q=33,r="tick",s=function(a){var b,d,i=B()-C;i>p&&(l+=i-q),C+=i,k.time=(C-l)/1e3,b=k.time-h,(!c||b>0||a===!0)&&(k.frame++,h+=b+(b>=g?.004:g-b),d=!0),a!==!0&&(f=e(s)),d&&k.dispatchEvent(r)};y.call(k),k.time=k.frame=0,k.tick=function(){s(!0)},k.lagSmoothing=function(a,b){return arguments.length?(p=a||1/m,void(q=Math.min(b,p,0))):1/m>p},k.sleep=function(){null!=f&&(n&&A?A(f):clearTimeout(f),e=o,f=null,k===i&&(j=!1))},k.wake=function(a){null!==f?k.sleep():a?l+=-C+(C=B()):k.frame>10&&(C=B()-p+5),e=0===c?o:n&&z?z:function(a){return setTimeout(a,1e3*(h-k.time)+1|0)},k===i&&(j=!0),s(2)},k.fps=function(a){return arguments.length?(c=a,g=1/(c||60),h=this.time+g,void k.wake()):c},k.useRAF=function(a){return arguments.length?(k.sleep(),n=a,void k.fps(c)):n},k.fps(a),setTimeout(function(){"auto"===n&&k.frame<5&&"hidden"!==(d||{}).visibilityState&&k.useRAF(!1)},1500)}),h=l.Ticker.prototype=new l.events.EventDispatcher,h.constructor=l.Ticker;var D=t("core.Animation",function(a,b){if(this.vars=b=b||{},this._duration=this._totalDuration=a||0,this._delay=Number(b.delay)||0,this._timeScale=1,this._active=b.immediateRender===!0,this.data=b.data,this._reversed=b.reversed===!0,X){j||i.wake();var c=this.vars.useFrames?W:X;c.add(this,c._time),this.vars.paused&&this.paused(!0)}});i=D.ticker=new l.Ticker,h=D.prototype,h._dirty=h._gc=h._initted=h._paused=!1,h._totalTime=h._time=0,h._rawPrevTime=-1,h._next=h._last=h._onUpdate=h._timeline=h.timeline=null,h._paused=!1;var E=function(){j&&B()-C>2e3&&("hidden"!==(d||{}).visibilityState||!i.lagSmoothing())&&i.wake();var a=setTimeout(E,2e3);a.unref&&a.unref()};E(),h.play=function(a,b){return null!=a&&this.seek(a,b),this.reversed(!1).paused(!1)},h.pause=function(a,b){return null!=a&&this.seek(a,b),this.paused(!0)},h.resume=function(a,b){return null!=a&&this.seek(a,b),this.paused(!1)},h.seek=function(a,b){return this.totalTime(Number(a),b!==!1)},h.restart=function(a,b){return this.reversed(!1).paused(!1).totalTime(a?-this._delay:0,b!==!1,!0)},h.reverse=function(a,b){return null!=a&&this.seek(a||this.totalDuration(),b),this.reversed(!0).paused(!1)},h.render=function(a,b,c){},h.invalidate=function(){return this._time=this._totalTime=0,this._initted=this._gc=!1,this._rawPrevTime=-1,(this._gc||!this.timeline)&&this._enabled(!0),this},h.isActive=function(){var a,b=this._timeline,c=this._startTime;return!b||!this._gc&&!this._paused&&b.isActive()&&(a=b.rawTime(!0))>=c&&a<c+this.totalDuration()/this._timeScale-1e-7},h._enabled=function(a,b){return j||i.wake(),this._gc=!a,this._active=this.isActive(),b!==!0&&(a&&!this.timeline?this._timeline.add(this,this._startTime-this._delay):!a&&this.timeline&&this._timeline._remove(this,!0)),!1},h._kill=function(a,b){return this._enabled(!1,!1)},h.kill=function(a,b){return this._kill(a,b),this},h._uncache=function(a){for(var b=a?this:this.timeline;b;)b._dirty=!0,b=b.timeline;return this},h._swapSelfInParams=function(a){for(var b=a.length,c=a.concat();--b>-1;)"{self}"===a[b]&&(c[b]=this);return c},h._callback=function(a){var b=this.vars,c=b[a],d=b[a+"Params"],e=b[a+"Scope"]||b.callbackScope||this,f=d?d.length:0;switch(f){case 0:c.call(e);break;case 1:c.call(e,d[0]);break;case 2:c.call(e,d[0],d[1]);break;default:c.apply(e,d)}},h.eventCallback=function(a,b,c,d){if("on"===(a||"").substr(0,2)){var e=this.vars;if(1===arguments.length)return e[a];null==b?delete e[a]:(e[a]=b,e[a+"Params"]=p(c)&&-1!==c.join("").indexOf("{self}")?this._swapSelfInParams(c):c,e[a+"Scope"]=d),"onUpdate"===a&&(this._onUpdate=b)}return this},h.delay=function(a){return arguments.length?(this._timeline.smoothChildTiming&&this.startTime(this._startTime+a-this._delay),this._delay=a,this):this._delay},h.duration=function(a){return arguments.length?(this._duration=this._totalDuration=a,this._uncache(!0),this._timeline.smoothChildTiming&&this._time>0&&this._time<this._duration&&0!==a&&this.totalTime(this._totalTime*(a/this._duration),!0),this):(this._dirty=!1,this._duration)},h.totalDuration=function(a){return this._dirty=!1,arguments.length?this.duration(a):this._totalDuration},h.time=function(a,b){return arguments.length?(this._dirty&&this.totalDuration(),this.totalTime(a>this._duration?this._duration:a,b)):this._time},h.totalTime=function(a,b,c){if(j||i.wake(),!arguments.length)return this._totalTime;if(this._timeline){if(0>a&&!c&&(a+=this.totalDuration()),this._timeline.smoothChildTiming){this._dirty&&this.totalDuration();var d=this._totalDuration,e=this._timeline;if(a>d&&!c&&(a=d),this._startTime=(this._paused?this._pauseTime:e._time)-(this._reversed?d-a:a)/this._timeScale,e._dirty||this._uncache(!1),e._timeline)for(;e._timeline;)e._timeline._time!==(e._startTime+e._totalTime)/e._timeScale&&e.totalTime(e._totalTime,!0),e=e._timeline}this._gc&&this._enabled(!0,!1),(this._totalTime!==a||0===this._duration)&&(J.length&&Z(),this.render(a,b,!1),J.length&&Z())}return this},h.progress=h.totalProgress=function(a,b){var c=this.duration();return arguments.length?this.totalTime(c*a,b):c?this._time/c:this.ratio},h.startTime=function(a){return arguments.length?(a!==this._startTime&&(this._startTime=a,this.timeline&&this.timeline._sortChildren&&this.timeline.add(this,a-this._delay)),this):this._startTime},h.endTime=function(a){return this._startTime+(0!=a?this.totalDuration():this.duration())/this._timeScale},h.timeScale=function(a){if(!arguments.length)return this._timeScale;var b,c;for(a=a||m,this._timeline&&this._timeline.smoothChildTiming&&(b=this._pauseTime,c=b||0===b?b:this._timeline.totalTime(),this._startTime=c-(c-this._startTime)*this._timeScale/a),
	this._timeScale=a,c=this.timeline;c&&c.timeline;)c._dirty=!0,c.totalDuration(),c=c.timeline;return this},h.reversed=function(a){return arguments.length?(a!=this._reversed&&(this._reversed=a,this.totalTime(this._timeline&&!this._timeline.smoothChildTiming?this.totalDuration()-this._totalTime:this._totalTime,!0)),this):this._reversed},h.paused=function(a){if(!arguments.length)return this._paused;var b,c,d=this._timeline;return a!=this._paused&&d&&(j||a||i.wake(),b=d.rawTime(),c=b-this._pauseTime,!a&&d.smoothChildTiming&&(this._startTime+=c,this._uncache(!1)),this._pauseTime=a?b:null,this._paused=a,this._active=this.isActive(),!a&&0!==c&&this._initted&&this.duration()&&(b=d.smoothChildTiming?this._totalTime:(b-this._startTime)/this._timeScale,this.render(b,b===this._totalTime,!0))),this._gc&&!a&&this._enabled(!0,!1),this};var F=t("core.SimpleTimeline",function(a){D.call(this,0,a),this.autoRemoveChildren=this.smoothChildTiming=!0});h=F.prototype=new D,h.constructor=F,h.kill()._gc=!1,h._first=h._last=h._recent=null,h._sortChildren=!1,h.add=h.insert=function(a,b,c,d){var e,f;if(a._startTime=Number(b||0)+a._delay,a._paused&&this!==a._timeline&&(a._pauseTime=this.rawTime()-(a._timeline.rawTime()-a._pauseTime)),a.timeline&&a.timeline._remove(a,!0),a.timeline=a._timeline=this,a._gc&&a._enabled(!0,!0),e=this._last,this._sortChildren)for(f=a._startTime;e&&e._startTime>f;)e=e._prev;return e?(a._next=e._next,e._next=a):(a._next=this._first,this._first=a),a._next?a._next._prev=a:this._last=a,a._prev=e,this._recent=a,this._timeline&&this._uncache(!0),this},h._remove=function(a,b){return a.timeline===this&&(b||a._enabled(!1,!0),a._prev?a._prev._next=a._next:this._first===a&&(this._first=a._next),a._next?a._next._prev=a._prev:this._last===a&&(this._last=a._prev),a._next=a._prev=a.timeline=null,a===this._recent&&(this._recent=this._last),this._timeline&&this._uncache(!0)),this},h.render=function(a,b,c){var d,e=this._first;for(this._totalTime=this._time=this._rawPrevTime=a;e;)d=e._next,(e._active||a>=e._startTime&&!e._paused&&!e._gc)&&(e._reversed?e.render((e._dirty?e.totalDuration():e._totalDuration)-(a-e._startTime)*e._timeScale,b,c):e.render((a-e._startTime)*e._timeScale,b,c)),e=d},h.rawTime=function(){return j||i.wake(),this._totalTime};var G=t("TweenLite",function(b,c,d){if(D.call(this,c,d),this.render=G.prototype.render,null==b)throw"Cannot tween a null target.";this.target=b="string"!=typeof b?b:G.selector(b)||b;var e,f,g,h=b.jquery||b.length&&b!==a&&b[0]&&(b[0]===a||b[0].nodeType&&b[0].style&&!b.nodeType),i=this.vars.overwrite;if(this._overwrite=i=null==i?V[G.defaultOverwrite]:"number"==typeof i?i>>0:V[i],(h||b instanceof Array||b.push&&p(b))&&"number"!=typeof b[0])for(this._targets=g=n(b),this._propLookup=[],this._siblings=[],e=0;e<g.length;e++)f=g[e],f?"string"!=typeof f?f.length&&f!==a&&f[0]&&(f[0]===a||f[0].nodeType&&f[0].style&&!f.nodeType)?(g.splice(e--,1),this._targets=g=g.concat(n(f))):(this._siblings[e]=$(f,this,!1),1===i&&this._siblings[e].length>1&&aa(f,this,null,1,this._siblings[e])):(f=g[e--]=G.selector(f),"string"==typeof f&&g.splice(e+1,1)):g.splice(e--,1);else this._propLookup={},this._siblings=$(b,this,!1),1===i&&this._siblings.length>1&&aa(b,this,null,1,this._siblings);(this.vars.immediateRender||0===c&&0===this._delay&&this.vars.immediateRender!==!1)&&(this._time=-m,this.render(Math.min(0,-this._delay)))},!0),H=function(b){return b&&b.length&&b!==a&&b[0]&&(b[0]===a||b[0].nodeType&&b[0].style&&!b.nodeType)},I=function(a,b){var c,d={};for(c in a)U[c]||c in b&&"transform"!==c&&"x"!==c&&"y"!==c&&"width"!==c&&"height"!==c&&"className"!==c&&"border"!==c||!(!R[c]||R[c]&&R[c]._autoCSS)||(d[c]=a[c],delete a[c]);a.css=d};h=G.prototype=new D,h.constructor=G,h.kill()._gc=!1,h.ratio=0,h._firstPT=h._targets=h._overwrittenProps=h._startAt=null,h._notifyPluginsOfEnabled=h._lazy=!1,G.version="1.20.5",G.defaultEase=h._ease=new v(null,null,1,1),G.defaultOverwrite="auto",G.ticker=i,G.autoSleep=120,G.lagSmoothing=function(a,b){i.lagSmoothing(a,b)},G.selector=a.$||a.jQuery||function(b){var c=a.$||a.jQuery;return c?(G.selector=c,c(b)):(d||(d=a.document),d?d.querySelectorAll?d.querySelectorAll(b):d.getElementById("#"===b.charAt(0)?b.substr(1):b):b)};var J=[],K={},L=/(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,M=/[\+-]=-?[\.\d]/,N=function(a){for(var b,c=this._firstPT,d=1e-6;c;)b=c.blob?1===a&&null!=this.end?this.end:a?this.join(""):this.start:c.c*a+c.s,c.m?b=c.m.call(this._tween,b,this._target||c.t,this._tween):d>b&&b>-d&&!c.blob&&(b=0),c.f?c.fp?c.t[c.p](c.fp,b):c.t[c.p](b):c.t[c.p]=b,c=c._next},O=function(a,b,c,d){var e,f,g,h,i,j,k,l=[],m=0,n="",o=0;for(l.start=a,l.end=b,a=l[0]=a+"",b=l[1]=b+"",c&&(c(l),a=l[0],b=l[1]),l.length=0,e=a.match(L)||[],f=b.match(L)||[],d&&(d._next=null,d.blob=1,l._firstPT=l._applyPT=d),i=f.length,h=0;i>h;h++)k=f[h],j=b.substr(m,b.indexOf(k,m)-m),n+=j||!h?j:",",m+=j.length,o?o=(o+1)%5:"rgba("===j.substr(-5)&&(o=1),k===e[h]||e.length<=h?n+=k:(n&&(l.push(n),n=""),g=parseFloat(e[h]),l.push(g),l._firstPT={_next:l._firstPT,t:l,p:l.length-1,s:g,c:("="===k.charAt(1)?parseInt(k.charAt(0)+"1",10)*parseFloat(k.substr(2)):parseFloat(k)-g)||0,f:0,m:o&&4>o?Math.round:0}),m+=k.length;return n+=b.substr(m),n&&l.push(n),l.setRatio=N,M.test(b)&&(l.end=null),l},P=function(a,b,c,d,e,f,g,h,i){"function"==typeof d&&(d=d(i||0,a));var j,k=typeof a[b],l="function"!==k?"":b.indexOf("set")||"function"!=typeof a["get"+b.substr(3)]?b:"get"+b.substr(3),m="get"!==c?c:l?g?a[l](g):a[l]():a[b],n="string"==typeof d&&"="===d.charAt(1),o={t:a,p:b,s:m,f:"function"===k,pg:0,n:e||b,m:f?"function"==typeof f?f:Math.round:0,pr:0,c:n?parseInt(d.charAt(0)+"1",10)*parseFloat(d.substr(2)):parseFloat(d)-m||0};return("number"!=typeof m||"number"!=typeof d&&!n)&&(g||isNaN(m)||!n&&isNaN(d)||"boolean"==typeof m||"boolean"==typeof d?(o.fp=g,j=O(m,n?parseFloat(o.s)+o.c+(o.s+"").replace(/[0-9\-\.]/g,""):d,h||G.defaultStringFilter,o),o={t:j,p:"setRatio",s:0,c:1,f:2,pg:0,n:e||b,pr:0,m:0}):(o.s=parseFloat(m),n||(o.c=parseFloat(d)-o.s||0))),o.c?((o._next=this._firstPT)&&(o._next._prev=o),this._firstPT=o,o):void 0},Q=G._internals={isArray:p,isSelector:H,lazyTweens:J,blobDif:O},R=G._plugins={},S=Q.tweenLookup={},T=0,U=Q.reservedProps={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1,lazy:1,onOverwrite:1,callbackScope:1,stringFilter:1,id:1,yoyoEase:1},V={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,"true":1,"false":0},W=D._rootFramesTimeline=new F,X=D._rootTimeline=new F,Y=30,Z=Q.lazyRender=function(){var a,b=J.length;for(K={};--b>-1;)a=J[b],a&&a._lazy!==!1&&(a.render(a._lazy[0],a._lazy[1],!0),a._lazy=!1);J.length=0};X._startTime=i.time,W._startTime=i.frame,X._active=W._active=!0,setTimeout(Z,1),D._updateRoot=G.render=function(){var a,b,c;if(J.length&&Z(),X.render((i.time-X._startTime)*X._timeScale,!1,!1),W.render((i.frame-W._startTime)*W._timeScale,!1,!1),J.length&&Z(),i.frame>=Y){Y=i.frame+(parseInt(G.autoSleep,10)||120);for(c in S){for(b=S[c].tweens,a=b.length;--a>-1;)b[a]._gc&&b.splice(a,1);0===b.length&&delete S[c]}if(c=X._first,(!c||c._paused)&&G.autoSleep&&!W._first&&1===i._listeners.tick.length){for(;c&&c._paused;)c=c._next;c||i.sleep()}}},i.addEventListener("tick",D._updateRoot);var $=function(a,b,c){var d,e,f=a._gsTweenID;if(S[f||(a._gsTweenID=f="t"+T++)]||(S[f]={target:a,tweens:[]}),b&&(d=S[f].tweens,d[e=d.length]=b,c))for(;--e>-1;)d[e]===b&&d.splice(e,1);return S[f].tweens},_=function(a,b,c,d){var e,f,g=a.vars.onOverwrite;return g&&(e=g(a,b,c,d)),g=G.onOverwrite,g&&(f=g(a,b,c,d)),e!==!1&&f!==!1},aa=function(a,b,c,d,e){var f,g,h,i;if(1===d||d>=4){for(i=e.length,f=0;i>f;f++)if((h=e[f])!==b)h._gc||h._kill(null,a,b)&&(g=!0);else if(5===d)break;return g}var j,k=b._startTime+m,l=[],n=0,o=0===b._duration;for(f=e.length;--f>-1;)(h=e[f])===b||h._gc||h._paused||(h._timeline!==b._timeline?(j=j||ba(b,0,o),0===ba(h,j,o)&&(l[n++]=h)):h._startTime<=k&&h._startTime+h.totalDuration()/h._timeScale>k&&((o||!h._initted)&&k-h._startTime<=2e-10||(l[n++]=h)));for(f=n;--f>-1;)if(h=l[f],2===d&&h._kill(c,a,b)&&(g=!0),2!==d||!h._firstPT&&h._initted){if(2!==d&&!_(h,b))continue;h._enabled(!1,!1)&&(g=!0)}return g},ba=function(a,b,c){for(var d=a._timeline,e=d._timeScale,f=a._startTime;d._timeline;){if(f+=d._startTime,e*=d._timeScale,d._paused)return-100;d=d._timeline}return f/=e,f>b?f-b:c&&f===b||!a._initted&&2*m>f-b?m:(f+=a.totalDuration()/a._timeScale/e)>b+m?0:f-b-m};h._init=function(){var a,b,c,d,e,f,g=this.vars,h=this._overwrittenProps,i=this._duration,j=!!g.immediateRender,k=g.ease;if(g.startAt){this._startAt&&(this._startAt.render(-1,!0),this._startAt.kill()),e={};for(d in g.startAt)e[d]=g.startAt[d];if(e.data="isStart",e.overwrite=!1,e.immediateRender=!0,e.lazy=j&&g.lazy!==!1,e.startAt=e.delay=null,e.onUpdate=g.onUpdate,e.onUpdateParams=g.onUpdateParams,e.onUpdateScope=g.onUpdateScope||g.callbackScope||this,this._startAt=G.to(this.target||{},0,e),j)if(this._time>0)this._startAt=null;else if(0!==i)return}else if(g.runBackwards&&0!==i)if(this._startAt)this._startAt.render(-1,!0),this._startAt.kill(),this._startAt=null;else{0!==this._time&&(j=!1),c={};for(d in g)U[d]&&"autoCSS"!==d||(c[d]=g[d]);if(c.overwrite=0,c.data="isFromStart",c.lazy=j&&g.lazy!==!1,c.immediateRender=j,this._startAt=G.to(this.target,0,c),j){if(0===this._time)return}else this._startAt._init(),this._startAt._enabled(!1),this.vars.immediateRender&&(this._startAt=null)}if(this._ease=k=k?k instanceof v?k:"function"==typeof k?new v(k,g.easeParams):w[k]||G.defaultEase:G.defaultEase,g.easeParams instanceof Array&&k.config&&(this._ease=k.config.apply(k,g.easeParams)),this._easeType=this._ease._type,this._easePower=this._ease._power,this._firstPT=null,this._targets)for(f=this._targets.length,a=0;f>a;a++)this._initProps(this._targets[a],this._propLookup[a]={},this._siblings[a],h?h[a]:null,a)&&(b=!0);else b=this._initProps(this.target,this._propLookup,this._siblings,h,0);if(b&&G._onPluginEvent("_onInitAllProps",this),h&&(this._firstPT||"function"!=typeof this.target&&this._enabled(!1,!1)),g.runBackwards)for(c=this._firstPT;c;)c.s+=c.c,c.c=-c.c,c=c._next;this._onUpdate=g.onUpdate,this._initted=!0},h._initProps=function(b,c,d,e,f){var g,h,i,j,k,l;if(null==b)return!1;K[b._gsTweenID]&&Z(),this.vars.css||b.style&&b!==a&&b.nodeType&&R.css&&this.vars.autoCSS!==!1&&I(this.vars,b);for(g in this.vars)if(l=this.vars[g],U[g])l&&(l instanceof Array||l.push&&p(l))&&-1!==l.join("").indexOf("{self}")&&(this.vars[g]=l=this._swapSelfInParams(l,this));else if(R[g]&&(j=new R[g])._onInitTween(b,this.vars[g],this,f)){for(this._firstPT=k={_next:this._firstPT,t:j,p:"setRatio",s:0,c:1,f:1,n:g,pg:1,pr:j._priority,m:0},h=j._overwriteProps.length;--h>-1;)c[j._overwriteProps[h]]=this._firstPT;(j._priority||j._onInitAllProps)&&(i=!0),(j._onDisable||j._onEnable)&&(this._notifyPluginsOfEnabled=!0),k._next&&(k._next._prev=k)}else c[g]=P.call(this,b,g,"get",l,g,0,null,this.vars.stringFilter,f);return e&&this._kill(e,b)?this._initProps(b,c,d,e,f):this._overwrite>1&&this._firstPT&&d.length>1&&aa(b,this,c,this._overwrite,d)?(this._kill(c,b),this._initProps(b,c,d,e,f)):(this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration)&&(K[b._gsTweenID]=!0),i)},h.render=function(a,b,c){var d,e,f,g,h=this._time,i=this._duration,j=this._rawPrevTime;if(a>=i-1e-7&&a>=0)this._totalTime=this._time=i,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1,this._reversed||(d=!0,e="onComplete",c=c||this._timeline.autoRemoveChildren),0===i&&(this._initted||!this.vars.lazy||c)&&(this._startTime===this._timeline._duration&&(a=0),(0>j||0>=a&&a>=-1e-7||j===m&&"isPause"!==this.data)&&j!==a&&(c=!0,j>m&&(e="onReverseComplete")),this._rawPrevTime=g=!b||a||j===a?a:m);else if(1e-7>a)this._totalTime=this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==h||0===i&&j>0)&&(e="onReverseComplete",d=this._reversed),0>a&&(this._active=!1,0===i&&(this._initted||!this.vars.lazy||c)&&(j>=0&&(j!==m||"isPause"!==this.data)&&(c=!0),this._rawPrevTime=g=!b||a||j===a?a:m)),(!this._initted||this._startAt&&this._startAt.progress())&&(c=!0);else if(this._totalTime=this._time=a,this._easeType){var k=a/i,l=this._easeType,n=this._easePower;(1===l||3===l&&k>=.5)&&(k=1-k),3===l&&(k*=2),1===n?k*=k:2===n?k*=k*k:3===n?k*=k*k*k:4===n&&(k*=k*k*k*k),1===l?this.ratio=1-k:2===l?this.ratio=k:.5>a/i?this.ratio=k/2:this.ratio=1-k/2}else this.ratio=this._ease.getRatio(a/i);if(this._time!==h||c){if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!c&&this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration))return this._time=this._totalTime=h,this._rawPrevTime=j,J.push(this),void(this._lazy=[a,b]);this._time&&!d?this.ratio=this._ease.getRatio(this._time/i):d&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._lazy!==!1&&(this._lazy=!1),this._active||!this._paused&&this._time!==h&&a>=0&&(this._active=!0),0===h&&(this._startAt&&(a>=0?this._startAt.render(a,!0,c):e||(e="_dummyGS")),this.vars.onStart&&(0!==this._time||0===i)&&(b||this._callback("onStart"))),f=this._firstPT;f;)f.f?f.t[f.p](f.c*this.ratio+f.s):f.t[f.p]=f.c*this.ratio+f.s,f=f._next;this._onUpdate&&(0>a&&this._startAt&&a!==-1e-4&&this._startAt.render(a,!0,c),b||(this._time!==h||d||c)&&this._callback("onUpdate")),e&&(!this._gc||c)&&(0>a&&this._startAt&&!this._onUpdate&&a!==-1e-4&&this._startAt.render(a,!0,c),d&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!b&&this.vars[e]&&this._callback(e),0===i&&this._rawPrevTime===m&&g!==m&&(this._rawPrevTime=0))}},h._kill=function(a,b,c){if("all"===a&&(a=null),null==a&&(null==b||b===this.target))return this._lazy=!1,this._enabled(!1,!1);b="string"!=typeof b?b||this._targets||this.target:G.selector(b)||b;var d,e,f,g,h,i,j,k,l,m=c&&this._time&&c._startTime===this._startTime&&this._timeline===c._timeline;if((p(b)||H(b))&&"number"!=typeof b[0])for(d=b.length;--d>-1;)this._kill(a,b[d],c)&&(i=!0);else{if(this._targets){for(d=this._targets.length;--d>-1;)if(b===this._targets[d]){h=this._propLookup[d]||{},this._overwrittenProps=this._overwrittenProps||[],e=this._overwrittenProps[d]=a?this._overwrittenProps[d]||{}:"all";break}}else{if(b!==this.target)return!1;h=this._propLookup,e=this._overwrittenProps=a?this._overwrittenProps||{}:"all"}if(h){if(j=a||h,k=a!==e&&"all"!==e&&a!==h&&("object"!=typeof a||!a._tempKill),c&&(G.onOverwrite||this.vars.onOverwrite)){for(f in j)h[f]&&(l||(l=[]),l.push(f));if((l||!a)&&!_(this,c,b,l))return!1}for(f in j)(g=h[f])&&(m&&(g.f?g.t[g.p](g.s):g.t[g.p]=g.s,i=!0),g.pg&&g.t._kill(j)&&(i=!0),g.pg&&0!==g.t._overwriteProps.length||(g._prev?g._prev._next=g._next:g===this._firstPT&&(this._firstPT=g._next),g._next&&(g._next._prev=g._prev),g._next=g._prev=null),delete h[f]),k&&(e[f]=1);!this._firstPT&&this._initted&&this._enabled(!1,!1)}}return i},h.invalidate=function(){return this._notifyPluginsOfEnabled&&G._onPluginEvent("_onDisable",this),this._firstPT=this._overwrittenProps=this._startAt=this._onUpdate=null,this._notifyPluginsOfEnabled=this._active=this._lazy=!1,this._propLookup=this._targets?{}:[],D.prototype.invalidate.call(this),this.vars.immediateRender&&(this._time=-m,this.render(Math.min(0,-this._delay))),this},h._enabled=function(a,b){if(j||i.wake(),a&&this._gc){var c,d=this._targets;if(d)for(c=d.length;--c>-1;)this._siblings[c]=$(d[c],this,!0);else this._siblings=$(this.target,this,!0)}return D.prototype._enabled.call(this,a,b),this._notifyPluginsOfEnabled&&this._firstPT?G._onPluginEvent(a?"_onEnable":"_onDisable",this):!1},G.to=function(a,b,c){return new G(a,b,c)},G.from=function(a,b,c){return c.runBackwards=!0,c.immediateRender=0!=c.immediateRender,new G(a,b,c)},G.fromTo=function(a,b,c,d){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,new G(a,b,d)},G.delayedCall=function(a,b,c,d,e){return new G(b,0,{delay:a,onComplete:b,onCompleteParams:c,callbackScope:d,onReverseComplete:b,onReverseCompleteParams:c,immediateRender:!1,lazy:!1,useFrames:e,overwrite:0})},G.set=function(a,b){return new G(a,0,b)},G.getTweensOf=function(a,b){if(null==a)return[];a="string"!=typeof a?a:G.selector(a)||a;var c,d,e,f;if((p(a)||H(a))&&"number"!=typeof a[0]){for(c=a.length,d=[];--c>-1;)d=d.concat(G.getTweensOf(a[c],b));for(c=d.length;--c>-1;)for(f=d[c],e=c;--e>-1;)f===d[e]&&d.splice(c,1)}else if(a._gsTweenID)for(d=$(a).concat(),c=d.length;--c>-1;)(d[c]._gc||b&&!d[c].isActive())&&d.splice(c,1);return d||[]},G.killTweensOf=G.killDelayedCallsTo=function(a,b,c){"object"==typeof b&&(c=b,b=!1);for(var d=G.getTweensOf(a,b),e=d.length;--e>-1;)d[e]._kill(c,a)};var ca=t("plugins.TweenPlugin",function(a,b){this._overwriteProps=(a||"").split(","),this._propName=this._overwriteProps[0],this._priority=b||0,this._super=ca.prototype},!0);if(h=ca.prototype,ca.version="1.19.0",ca.API=2,h._firstPT=null,h._addTween=P,h.setRatio=N,h._kill=function(a){var b,c=this._overwriteProps,d=this._firstPT;if(null!=a[this._propName])this._overwriteProps=[];else for(b=c.length;--b>-1;)null!=a[c[b]]&&c.splice(b,1);for(;d;)null!=a[d.n]&&(d._next&&(d._next._prev=d._prev),d._prev?(d._prev._next=d._next,d._prev=null):this._firstPT===d&&(this._firstPT=d._next)),d=d._next;return!1},h._mod=h._roundProps=function(a){for(var b,c=this._firstPT;c;)b=a[this._propName]||null!=c.n&&a[c.n.split(this._propName+"_").join("")],b&&"function"==typeof b&&(2===c.f?c.t._applyPT.m=b:c.m=b),c=c._next},G._onPluginEvent=function(a,b){var c,d,e,f,g,h=b._firstPT;if("_onInitAllProps"===a){for(;h;){for(g=h._next,d=e;d&&d.pr>h.pr;)d=d._next;(h._prev=d?d._prev:f)?h._prev._next=h:e=h,(h._next=d)?d._prev=h:f=h,h=g}h=b._firstPT=e}for(;h;)h.pg&&"function"==typeof h.t[a]&&h.t[a]()&&(c=!0),h=h._next;return c},ca.activate=function(a){for(var b=a.length;--b>-1;)a[b].API===ca.API&&(R[(new a[b])._propName]=a[b]);return!0},s.plugin=function(a){if(!(a&&a.propName&&a.init&&a.API))throw"illegal plugin definition.";var b,c=a.propName,d=a.priority||0,e=a.overwriteProps,f={init:"_onInitTween",set:"setRatio",kill:"_kill",round:"_mod",mod:"_mod",initAll:"_onInitAllProps"},g=t("plugins."+c.charAt(0).toUpperCase()+c.substr(1)+"Plugin",function(){ca.call(this,c,d),this._overwriteProps=e||[]},a.global===!0),h=g.prototype=new ca(c);h.constructor=g,g.API=a.API;for(b in f)"function"==typeof a[b]&&(h[f[b]]=a[b]);return g.version=a.version,ca.activate([g]),g},f=a._gsQueue){for(g=0;g<f.length;g++)f[g]();for(h in q)q[h].func||a.console.log("GSAP encountered missing dependency: "+h)}j=!1}("undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window,"TweenMax");
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;

	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
	 * blueimp Gallery Video Factory JS
	 * https://github.com/blueimp/Gallery
	 *
	 * Copyright 2013, Sebastian Tschan
	 * https://blueimp.net
	 *
	 * Licensed under the MIT license:
	 * https://opensource.org/licenses/MIT
	 */

	/* global define, window, document */

	;(function (factory) {
	  'use strict'
	  if (true) {
	    // Register as an anonymous AMD module:
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1), __webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
	  } else {
	    // Browser globals:
	    factory(window.blueimp.helper || window.jQuery, window.blueimp.Gallery)
	  }
	})(function ($, Gallery) {
	  'use strict'

	  $.extend(Gallery.prototype.options, {
	    // The class for video content elements:
	    videoContentClass: 'video-content',
	    // The class for video when it is loading:
	    videoLoadingClass: 'video-loading',
	    // The class for video when it is playing:
	    videoPlayingClass: 'video-playing',
	    // The list object property (or data attribute) for the video poster URL:
	    videoPosterProperty: 'poster',
	    // The list object property (or data attribute) for the video sources array:
	    videoSourcesProperty: 'sources'
	  })

	  var handleSlide = Gallery.prototype.handleSlide

	  $.extend(Gallery.prototype, {
	    handleSlide: function (index) {
	      handleSlide.call(this, index)
	      if (this.playingVideo) {
	        this.playingVideo.pause()
	      }
	    },

	    videoFactory: function (obj, callback, videoInterface) {
	      var that = this
	      var options = this.options
	      var videoContainerNode = this.elementPrototype.cloneNode(false)
	      var videoContainer = $(videoContainerNode)
	      var errorArgs = [
	        {
	          type: 'error',
	          target: videoContainerNode
	        }
	      ]
	      var video = videoInterface || document.createElement('video')
	      var url = this.getItemProperty(obj, options.urlProperty)
	      var type = this.getItemProperty(obj, options.typeProperty)
	      var title = this.getItemProperty(obj, options.titleProperty)
	      var altText =
	        this.getItemProperty(obj, this.options.altTextProperty) || title
	      var posterUrl = this.getItemProperty(obj, options.videoPosterProperty)
	      var posterImage
	      var sources = this.getItemProperty(obj, options.videoSourcesProperty)
	      var source
	      var playMediaControl
	      var isLoading
	      var hasControls
	      videoContainer.addClass(options.videoContentClass)
	      if (title) {
	        videoContainerNode.title = title
	      }
	      if (video.canPlayType) {
	        if (url && type && video.canPlayType(type)) {
	          video.src = url
	        } else if (sources) {
	          while (sources.length) {
	            source = sources.shift()
	            url = this.getItemProperty(source, options.urlProperty)
	            type = this.getItemProperty(source, options.typeProperty)
	            if (url && type && video.canPlayType(type)) {
	              video.src = url
	              break
	            }
	          }
	        }
	      }
	      if (posterUrl) {
	        video.poster = posterUrl
	        posterImage = this.imagePrototype.cloneNode(false)
	        $(posterImage).addClass(options.toggleClass)
	        posterImage.src = posterUrl
	        posterImage.draggable = false
	        posterImage.alt = altText
	        videoContainerNode.appendChild(posterImage)
	      }
	      playMediaControl = document.createElement('a')
	      playMediaControl.setAttribute('target', '_blank')
	      if (!videoInterface) {
	        playMediaControl.setAttribute('download', title)
	      }
	      playMediaControl.href = url
	      if (video.src) {
	        video.controls = true
	        ;(videoInterface || $(video))
	          .on('error', function () {
	            that.setTimeout(callback, errorArgs)
	          })
	          .on('pause', function () {
	            if (video.seeking) return
	            isLoading = false
	            videoContainer
	              .removeClass(that.options.videoLoadingClass)
	              .removeClass(that.options.videoPlayingClass)
	            if (hasControls) {
	              that.container.addClass(that.options.controlsClass)
	            }
	            delete that.playingVideo
	            if (that.interval) {
	              that.play()
	            }
	          })
	          .on('playing', function () {
	            isLoading = false
	            videoContainer
	              .removeClass(that.options.videoLoadingClass)
	              .addClass(that.options.videoPlayingClass)
	            if (that.container.hasClass(that.options.controlsClass)) {
	              hasControls = true
	              that.container.removeClass(that.options.controlsClass)
	            } else {
	              hasControls = false
	            }
	          })
	          .on('play', function () {
	            window.clearTimeout(that.timeout)
	            isLoading = true
	            videoContainer.addClass(that.options.videoLoadingClass)
	            that.playingVideo = video
	          })
	        $(playMediaControl).on('click', function (event) {
	          that.preventDefault(event)
	          if (isLoading) {
	            video.pause()
	          } else {
	            video.play()
	          }
	        })
	        videoContainerNode.appendChild(
	          (videoInterface && videoInterface.element) || video
	        )
	      }
	      videoContainerNode.appendChild(playMediaControl)
	      this.setTimeout(callback, [
	        {
	          type: 'load',
	          target: videoContainerNode
	        }
	      ])
	      return videoContainerNode
	    }
	  })

	  return Gallery
	})


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! ScrollMagic v2.0.6 | (c) 2018 Jan Paepke (@janpaepke) | license & info: http://scrollmagic.io */
	!function(e,t){ true?!(__WEBPACK_AMD_DEFINE_FACTORY__ = (t), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"object"==typeof exports?module.exports=t():e.ScrollMagic=t()}(this,function(){"use strict";var e=function(){};e.version="2.0.6",window.addEventListener("mousewheel",function(){});var t="data-scrollmagic-pin-spacer";e.Controller=function(r){var o,s,a="ScrollMagic.Controller",l="FORWARD",c="REVERSE",f="PAUSED",u=n.defaults,d=this,h=i.extend({},u,r),g=[],p=!1,v=0,m=f,w=!0,y=0,S=!0,b=function(){for(var e in h)u.hasOwnProperty(e)||delete h[e];if(h.container=i.get.elements(h.container)[0],!h.container)throw a+" init failed.";w=h.container===window||h.container===document.body||!document.body.contains(h.container),w&&(h.container=window),y=z(),h.container.addEventListener("resize",T),h.container.addEventListener("scroll",T);var t=parseInt(h.refreshInterval,10);h.refreshInterval=i.type.Number(t)?t:u.refreshInterval,E()},E=function(){h.refreshInterval>0&&(s=window.setTimeout(A,h.refreshInterval))},x=function(){return h.vertical?i.get.scrollTop(h.container):i.get.scrollLeft(h.container)},z=function(){return h.vertical?i.get.height(h.container):i.get.width(h.container)},C=this._setScrollPos=function(e){h.vertical?w?window.scrollTo(i.get.scrollLeft(),e):h.container.scrollTop=e:w?window.scrollTo(e,i.get.scrollTop()):h.container.scrollLeft=e},F=function(){if(S&&p){var e=i.type.Array(p)?p:g.slice(0);p=!1;var t=v;v=d.scrollPos();var n=v-t;0!==n&&(m=n>0?l:c),m===c&&e.reverse(),e.forEach(function(e){e.update(!0)})}},L=function(){o=i.rAF(F)},T=function(e){"resize"==e.type&&(y=z(),m=f),p!==!0&&(p=!0,L())},A=function(){if(!w&&y!=z()){var e;try{e=new Event("resize",{bubbles:!1,cancelable:!1})}catch(t){e=document.createEvent("Event"),e.initEvent("resize",!1,!1)}h.container.dispatchEvent(e)}g.forEach(function(e){e.refresh()}),E()};this._options=h;var N=function(e){if(e.length<=1)return e;var t=e.slice(0);return t.sort(function(e,t){return e.scrollOffset()>t.scrollOffset()?1:-1}),t};return this.addScene=function(t){if(i.type.Array(t))t.forEach(function(e){d.addScene(e)});else if(t instanceof e.Scene)if(t.controller()!==d)t.addTo(d);else if(g.indexOf(t)<0){g.push(t),g=N(g),t.on("shift.controller_sort",function(){g=N(g)});for(var n in h.globalSceneOptions)t[n]&&t[n].call(t,h.globalSceneOptions[n])}return d},this.removeScene=function(e){if(i.type.Array(e))e.forEach(function(e){d.removeScene(e)});else{var t=g.indexOf(e);t>-1&&(e.off("shift.controller_sort"),g.splice(t,1),e.remove())}return d},this.updateScene=function(t,n){return i.type.Array(t)?t.forEach(function(e){d.updateScene(e,n)}):n?t.update(!0):p!==!0&&t instanceof e.Scene&&(p=p||[],-1==p.indexOf(t)&&p.push(t),p=N(p),L()),d},this.update=function(e){return T({type:"resize"}),e&&F(),d},this.scrollTo=function(n,r){if(i.type.Number(n))C.call(h.container,n,r);else if(n instanceof e.Scene)n.controller()===d&&d.scrollTo(n.scrollOffset(),r);else if(i.type.Function(n))C=n;else{var o=i.get.elements(n)[0];if(o){for(;o.parentNode.hasAttribute(t);)o=o.parentNode;var s=h.vertical?"top":"left",a=i.get.offset(h.container),l=i.get.offset(o);w||(a[s]-=d.scrollPos()),d.scrollTo(l[s]-a[s],r)}}return d},this.scrollPos=function(e){return arguments.length?(i.type.Function(e)&&(x=e),d):x.call(d)},this.info=function(e){var t={size:y,vertical:h.vertical,scrollPos:v,scrollDirection:m,container:h.container,isDocument:w};return arguments.length?void 0!==t[e]?t[e]:void 0:t},this.loglevel=function(){return d},this.enabled=function(e){return arguments.length?(S!=e&&(S=!!e,d.updateScene(g,!0)),d):S},this.destroy=function(e){window.clearTimeout(s);for(var t=g.length;t--;)g[t].destroy(e);return h.container.removeEventListener("resize",T),h.container.removeEventListener("scroll",T),i.cAF(o),null},b(),d};var n={defaults:{container:window,vertical:!0,globalSceneOptions:{},loglevel:2,refreshInterval:100}};e.Controller.addOption=function(e,t){n.defaults[e]=t},e.Controller.extend=function(t){var n=this;e.Controller=function(){return n.apply(this,arguments),this.$super=i.extend({},this),t.apply(this,arguments)||this},i.extend(e.Controller,n),e.Controller.prototype=n.prototype,e.Controller.prototype.constructor=e.Controller},e.Scene=function(n){var o,s,a="BEFORE",l="DURING",c="AFTER",f=r.defaults,u=this,d=i.extend({},f,n),h=a,g=0,p={start:0,end:0},v=0,m=!0,w=function(){for(var e in d)f.hasOwnProperty(e)||delete d[e];for(var t in f)L(t);C()},y={};this.on=function(e,t){return i.type.Function(t)&&(e=e.trim().split(" "),e.forEach(function(e){var n=e.split("."),r=n[0],i=n[1];"*"!=r&&(y[r]||(y[r]=[]),y[r].push({namespace:i||"",callback:t}))})),u},this.off=function(e,t){return e?(e=e.trim().split(" "),e.forEach(function(e){var n=e.split("."),r=n[0],i=n[1]||"",o="*"===r?Object.keys(y):[r];o.forEach(function(e){for(var n=y[e]||[],r=n.length;r--;){var o=n[r];!o||i!==o.namespace&&"*"!==i||t&&t!=o.callback||n.splice(r,1)}n.length||delete y[e]})}),u):u},this.trigger=function(t,n){if(t){var r=t.trim().split("."),i=r[0],o=r[1],s=y[i];s&&s.forEach(function(t){o&&o!==t.namespace||t.callback.call(u,new e.Event(i,t.namespace,u,n))})}return u},u.on("change.internal",function(e){"loglevel"!==e.what&&"tweenChanges"!==e.what&&("triggerElement"===e.what?E():"reverse"===e.what&&u.update())}).on("shift.internal",function(){S(),u.update()}),this.addTo=function(t){return t instanceof e.Controller&&s!=t&&(s&&s.removeScene(u),s=t,C(),b(!0),E(!0),S(),s.info("container").addEventListener("resize",x),t.addScene(u),u.trigger("add",{controller:s}),u.update()),u},this.enabled=function(e){return arguments.length?(m!=e&&(m=!!e,u.update(!0)),u):m},this.remove=function(){if(s){s.info("container").removeEventListener("resize",x);var e=s;s=void 0,e.removeScene(u),u.trigger("remove")}return u},this.destroy=function(e){return u.trigger("destroy",{reset:e}),u.remove(),u.off("*.*"),null},this.update=function(e){if(s)if(e)if(s.enabled()&&m){var t,n=s.info("scrollPos");t=d.duration>0?(n-p.start)/(p.end-p.start):n>=p.start?1:0,u.trigger("update",{startPos:p.start,endPos:p.end,scrollPos:n}),u.progress(t)}else T&&h===l&&N(!0);else s.updateScene(u,!1);return u},this.refresh=function(){return b(),E(),u},this.progress=function(e){if(arguments.length){var t=!1,n=h,r=s?s.info("scrollDirection"):"PAUSED",i=d.reverse||e>=g;if(0===d.duration?(t=g!=e,g=1>e&&i?0:1,h=0===g?a:l):0>e&&h!==a&&i?(g=0,h=a,t=!0):e>=0&&1>e&&i?(g=e,h=l,t=!0):e>=1&&h!==c?(g=1,h=c,t=!0):h!==l||i||N(),t){var o={progress:g,state:h,scrollDirection:r},f=h!=n,p=function(e){u.trigger(e,o)};f&&n!==l&&(p("enter"),p(n===a?"start":"end")),p("progress"),f&&h!==l&&(p(h===a?"start":"end"),p("leave"))}return u}return g};var S=function(){p={start:v+d.offset},s&&d.triggerElement&&(p.start-=s.info("size")*d.triggerHook),p.end=p.start+d.duration},b=function(e){if(o){var t="duration";F(t,o.call(u))&&!e&&(u.trigger("change",{what:t,newval:d[t]}),u.trigger("shift",{reason:t}))}},E=function(e){var n=0,r=d.triggerElement;if(s&&(r||v>0)){if(r)if(r.parentNode){for(var o=s.info(),a=i.get.offset(o.container),l=o.vertical?"top":"left";r.parentNode.hasAttribute(t);)r=r.parentNode;var c=i.get.offset(r);o.isDocument||(a[l]-=s.scrollPos()),n=c[l]-a[l]}else u.triggerElement(void 0);var f=n!=v;v=n,f&&!e&&u.trigger("shift",{reason:"triggerElementPosition"})}},x=function(){d.triggerHook>0&&u.trigger("shift",{reason:"containerResize"})},z=i.extend(r.validate,{duration:function(e){if(i.type.String(e)&&e.match(/^(\.|\d)*\d+%$/)){var t=parseFloat(e)/100;e=function(){return s?s.info("size")*t:0}}if(i.type.Function(e)){o=e;try{e=parseFloat(o())}catch(n){e=-1}}if(e=parseFloat(e),!i.type.Number(e)||0>e)throw o?(o=void 0,0):0;return e}}),C=function(e){e=arguments.length?[e]:Object.keys(z),e.forEach(function(e){var t;if(z[e])try{t=z[e](d[e])}catch(n){t=f[e]}finally{d[e]=t}})},F=function(e,t){var n=!1,r=d[e];return d[e]!=t&&(d[e]=t,C(e),n=r!=d[e]),n},L=function(e){u[e]||(u[e]=function(t){return arguments.length?("duration"===e&&(o=void 0),F(e,t)&&(u.trigger("change",{what:e,newval:d[e]}),r.shifts.indexOf(e)>-1&&u.trigger("shift",{reason:e})),u):d[e]})};this.controller=function(){return s},this.state=function(){return h},this.scrollOffset=function(){return p.start},this.triggerPosition=function(){var e=d.offset;return s&&(e+=d.triggerElement?v:s.info("size")*u.triggerHook()),e};var T,A;u.on("shift.internal",function(e){var t="duration"===e.reason;(h===c&&t||h===l&&0===d.duration)&&N(),t&&O()}).on("progress.internal",function(){N()}).on("add.internal",function(){O()}).on("destroy.internal",function(e){u.removePin(e.reset)});var N=function(e){if(T&&s){var t=s.info(),n=A.spacer.firstChild;if(e||h!==l){var r={position:A.inFlow?"relative":"absolute",top:0,left:0},o=i.css(n,"position")!=r.position;A.pushFollowers?d.duration>0&&(h===c&&0===parseFloat(i.css(A.spacer,"padding-top"))?o=!0:h===a&&0===parseFloat(i.css(A.spacer,"padding-bottom"))&&(o=!0)):r[t.vertical?"top":"left"]=d.duration*g,i.css(n,r),o&&O()}else{"fixed"!=i.css(n,"position")&&(i.css(n,{position:"fixed"}),O());var f=i.get.offset(A.spacer,!0),u=d.reverse||0===d.duration?t.scrollPos-p.start:Math.round(g*d.duration*10)/10;f[t.vertical?"top":"left"]+=u,i.css(A.spacer.firstChild,{top:f.top,left:f.left})}}},O=function(){if(T&&s&&A.inFlow){var e=h===l,t=s.info("vertical"),n=A.spacer.firstChild,r=i.isMarginCollapseType(i.css(A.spacer,"display")),o={};A.relSize.width||A.relSize.autoFullWidth?e?i.css(T,{width:i.get.width(A.spacer)}):i.css(T,{width:"100%"}):(o["min-width"]=i.get.width(t?T:n,!0,!0),o.width=e?o["min-width"]:"auto"),A.relSize.height?e?i.css(T,{height:i.get.height(A.spacer)-(A.pushFollowers?d.duration:0)}):i.css(T,{height:"100%"}):(o["min-height"]=i.get.height(t?n:T,!0,!r),o.height=e?o["min-height"]:"auto"),A.pushFollowers&&(o["padding"+(t?"Top":"Left")]=d.duration*g,o["padding"+(t?"Bottom":"Right")]=d.duration*(1-g)),i.css(A.spacer,o)}},_=function(){s&&T&&h===l&&!s.info("isDocument")&&N()},P=function(){s&&T&&h===l&&((A.relSize.width||A.relSize.autoFullWidth)&&i.get.width(window)!=i.get.width(A.spacer.parentNode)||A.relSize.height&&i.get.height(window)!=i.get.height(A.spacer.parentNode))&&O()},D=function(e){s&&T&&h===l&&!s.info("isDocument")&&(e.preventDefault(),s._setScrollPos(s.info("scrollPos")-((e.wheelDelta||e[s.info("vertical")?"wheelDeltaY":"wheelDeltaX"])/3||30*-e.detail)))};this.setPin=function(e,n){var r={pushFollowers:!0,spacerClass:"scrollmagic-pin-spacer"};if(n=i.extend({},r,n),e=i.get.elements(e)[0],!e)return u;if("fixed"===i.css(e,"position"))return u;if(T){if(T===e)return u;u.removePin()}T=e;var o=T.parentNode.style.display,s=["top","left","bottom","right","margin","marginLeft","marginRight","marginTop","marginBottom"];T.parentNode.style.display="none";var a="absolute"!=i.css(T,"position"),l=i.css(T,s.concat(["display"])),c=i.css(T,["width","height"]);T.parentNode.style.display=o,!a&&n.pushFollowers&&(n.pushFollowers=!1);var f=T.parentNode.insertBefore(document.createElement("div"),T),d=i.extend(l,{position:a?"relative":"absolute",boxSizing:"content-box",mozBoxSizing:"content-box",webkitBoxSizing:"content-box"});if(a||i.extend(d,i.css(T,["width","height"])),i.css(f,d),f.setAttribute(t,""),i.addClass(f,n.spacerClass),A={spacer:f,relSize:{width:"%"===c.width.slice(-1),height:"%"===c.height.slice(-1),autoFullWidth:"auto"===c.width&&a&&i.isMarginCollapseType(l.display)},pushFollowers:n.pushFollowers,inFlow:a},!T.___origStyle){T.___origStyle={};var h=T.style,g=s.concat(["width","height","position","boxSizing","mozBoxSizing","webkitBoxSizing"]);g.forEach(function(e){T.___origStyle[e]=h[e]||""})}return A.relSize.width&&i.css(f,{width:c.width}),A.relSize.height&&i.css(f,{height:c.height}),f.appendChild(T),i.css(T,{position:a?"relative":"absolute",margin:"auto",top:"auto",left:"auto",bottom:"auto",right:"auto"}),(A.relSize.width||A.relSize.autoFullWidth)&&i.css(T,{boxSizing:"border-box",mozBoxSizing:"border-box",webkitBoxSizing:"border-box"}),window.addEventListener("scroll",_),window.addEventListener("resize",_),window.addEventListener("resize",P),T.addEventListener("mousewheel",D),T.addEventListener("DOMMouseScroll",D),N(),u},this.removePin=function(e){if(T){if(h===l&&N(!0),e||!s){var n=A.spacer.firstChild;if(n.hasAttribute(t)){var r=A.spacer.style,o=["margin","marginLeft","marginRight","marginTop","marginBottom"],a={};o.forEach(function(e){a[e]=r[e]||""}),i.css(n,a)}A.spacer.parentNode.insertBefore(n,A.spacer),A.spacer.parentNode.removeChild(A.spacer),T.parentNode.hasAttribute(t)||(i.css(T,T.___origStyle),delete T.___origStyle)}window.removeEventListener("scroll",_),window.removeEventListener("resize",_),window.removeEventListener("resize",P),T.removeEventListener("mousewheel",D),T.removeEventListener("DOMMouseScroll",D),T=void 0}return u};var R,k=[];return u.on("destroy.internal",function(e){u.removeClassToggle(e.reset)}),this.setClassToggle=function(e,t){var n=i.get.elements(e);return 0!==n.length&&i.type.String(t)?(k.length>0&&u.removeClassToggle(),R=t,k=n,u.on("enter.internal_class leave.internal_class",function(e){var t="enter"===e.type?i.addClass:i.removeClass;k.forEach(function(e){t(e,R)})}),u):u},this.removeClassToggle=function(e){return e&&k.forEach(function(e){i.removeClass(e,R)}),u.off("start.internal_class end.internal_class"),R=void 0,k=[],u},w(),u};var r={defaults:{duration:0,offset:0,triggerElement:void 0,triggerHook:.5,reverse:!0,loglevel:2},validate:{offset:function(e){if(e=parseFloat(e),!i.type.Number(e))throw 0;return e},triggerElement:function(e){if(e=e||void 0){var t=i.get.elements(e)[0];if(!t||!t.parentNode)throw 0;e=t}return e},triggerHook:function(e){var t={onCenter:.5,onEnter:1,onLeave:0};if(i.type.Number(e))e=Math.max(0,Math.min(parseFloat(e),1));else{if(!(e in t))throw 0;e=t[e]}return e},reverse:function(e){return!!e}},shifts:["duration","offset","triggerHook"]};e.Scene.addOption=function(e,t,n,i){e in r.defaults||(r.defaults[e]=t,r.validate[e]=n,i&&r.shifts.push(e))},e.Scene.extend=function(t){var n=this;e.Scene=function(){return n.apply(this,arguments),this.$super=i.extend({},this),t.apply(this,arguments)||this},i.extend(e.Scene,n),e.Scene.prototype=n.prototype,e.Scene.prototype.constructor=e.Scene},e.Event=function(e,t,n,r){r=r||{};for(var i in r)this[i]=r[i];return this.type=e,this.target=this.currentTarget=n,this.namespace=t||"",this.timeStamp=this.timestamp=Date.now(),this};var i=e._util=function(e){var t,n={},r=function(e){return parseFloat(e)||0},i=function(t){return t.currentStyle?t.currentStyle:e.getComputedStyle(t)},o=function(t,n,o,s){if(n=n===document?e:n,n===e)s=!1;else if(!u.DomElement(n))return 0;t=t.charAt(0).toUpperCase()+t.substr(1).toLowerCase();var a=(o?n["offset"+t]||n["outer"+t]:n["client"+t]||n["inner"+t])||0;if(o&&s){var l=i(n);a+="Height"===t?r(l.marginTop)+r(l.marginBottom):r(l.marginLeft)+r(l.marginRight)}return a},s=function(e){return e.replace(/^[^a-z]+([a-z])/g,"$1").replace(/-([a-z])/g,function(e){return e[1].toUpperCase()})};n.extend=function(e){for(e=e||{},t=1;t<arguments.length;t++)if(arguments[t])for(var n in arguments[t])arguments[t].hasOwnProperty(n)&&(e[n]=arguments[t][n]);return e},n.isMarginCollapseType=function(e){return["block","flex","list-item","table","-webkit-box"].indexOf(e)>-1};var a=0,l=["ms","moz","webkit","o"],c=e.requestAnimationFrame,f=e.cancelAnimationFrame;for(t=0;!c&&t<l.length;++t)c=e[l[t]+"RequestAnimationFrame"],f=e[l[t]+"CancelAnimationFrame"]||e[l[t]+"CancelRequestAnimationFrame"];c||(c=function(t){var n=(new Date).getTime(),r=Math.max(0,16-(n-a)),i=e.setTimeout(function(){t(n+r)},r);return a=n+r,i}),f||(f=function(t){e.clearTimeout(t)}),n.rAF=c.bind(e),n.cAF=f.bind(e);var u=n.type=function(e){return Object.prototype.toString.call(e).replace(/^\[object (.+)\]$/,"$1").toLowerCase()};u.String=function(e){return"string"===u(e)},u.Function=function(e){return"function"===u(e)},u.Array=function(e){return Array.isArray(e)},u.Number=function(e){return!u.Array(e)&&e-parseFloat(e)+1>=0},u.DomElement=function(e){return"object"==typeof HTMLElement?e instanceof HTMLElement:e&&"object"==typeof e&&null!==e&&1===e.nodeType&&"string"==typeof e.nodeName};var d=n.get={};return d.elements=function(t){var n=[];if(u.String(t))try{t=document.querySelectorAll(t)}catch(r){return n}if("nodelist"===u(t)||u.Array(t))for(var i=0,o=n.length=t.length;o>i;i++){var s=t[i];n[i]=u.DomElement(s)?s:d.elements(s)}else(u.DomElement(t)||t===document||t===e)&&(n=[t]);return n},d.scrollTop=function(t){return t&&"number"==typeof t.scrollTop?t.scrollTop:e.pageYOffset||0},d.scrollLeft=function(t){return t&&"number"==typeof t.scrollLeft?t.scrollLeft:e.pageXOffset||0},d.width=function(e,t,n){return o("width",e,t,n)},d.height=function(e,t,n){return o("height",e,t,n)},d.offset=function(e,t){var n={top:0,left:0};if(e&&e.getBoundingClientRect){var r=e.getBoundingClientRect();n.top=r.top,n.left=r.left,t||(n.top+=d.scrollTop(),n.left+=d.scrollLeft())}return n},n.addClass=function(e,t){t&&(e.classList?e.classList.add(t):e.className+=" "+t)},n.removeClass=function(e,t){t&&(e.classList?e.classList.remove(t):e.className=e.className.replace(RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," "))},n.css=function(e,t){if(u.String(t))return i(e)[s(t)];if(u.Array(t)){var n={},r=i(e);return t.forEach(function(e){n[e]=r[s(e)]}),n}for(var o in t){var a=t[o];a==parseFloat(a)&&(a+="px"),e.style[s(o)]=a}},n}(window||{});return e});

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	module.exports = jQuery;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";function t(t,e){var i;for(i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);return t}function e(t){if(!this||this.find!==e.prototype.find)return new e(t);if(this.length=0,t)if("string"==typeof t&&(t=this.find(t)),t.nodeType||t===t.window)this.length=1,this[0]=t;else{var i=t.length;for(this.length=i;i;)this[i-=1]=t[i]}}e.extend=t,e.contains=function(t,e){do{if((e=e.parentNode)===t)return!0}while(e);return!1},e.parseJSON=function(t){return window.JSON&&JSON.parse(t)},t(e.prototype,{find:function(t){var i=this[0]||document;return"string"==typeof t&&(t=i.querySelectorAll?i.querySelectorAll(t):"#"===t.charAt(0)?i.getElementById(t.slice(1)):i.getElementsByTagName(t)),new e(t)},hasClass:function(t){return!!this[0]&&new RegExp("(^|\\s+)"+t+"(\\s+|$)").test(this[0].className)},addClass:function(t){for(var e,i=this.length;i;){if(i-=1,!(e=this[i]).className)return e.className=t,this;if(this.hasClass(t))return this;e.className+=" "+t}return this},removeClass:function(t){for(var e,i=new RegExp("(^|\\s+)"+t+"(\\s+|$)"),s=this.length;s;)(e=this[s-=1]).className=e.className.replace(i," ");return this},on:function(t,e){for(var i,s,n=t.split(/\s+/);n.length;)for(t=n.shift(),i=this.length;i;)(s=this[i-=1]).addEventListener?s.addEventListener(t,e,!1):s.attachEvent&&s.attachEvent("on"+t,e);return this},off:function(t,e){for(var i,s,n=t.split(/\s+/);n.length;)for(t=n.shift(),i=this.length;i;)(s=this[i-=1]).removeEventListener?s.removeEventListener(t,e,!1):s.detachEvent&&s.detachEvent("on"+t,e);return this},empty:function(){for(var t,e=this.length;e;)for(t=this[e-=1];t.hasChildNodes();)t.removeChild(t.lastChild);return this},first:function(){return new e(this[0])}}), true?!(__WEBPACK_AMD_DEFINE_RESULT__ = function(){return e}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):(window.blueimp=window.blueimp||{},window.blueimp.helper=e)}(),function(t){"use strict"; true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (t), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):(window.blueimp=window.blueimp||{},window.blueimp.Gallery=t(window.blueimp.helper||window.jQuery))}(function(t){"use strict";function e(t,i){return void 0===document.body.style.maxHeight?null:this&&this.options===e.prototype.options?void(t&&t.length?(this.list=t,this.num=t.length,this.initOptions(i),this.initialize()):this.console.log("blueimp Gallery: No or empty list provided as first argument.",t)):new e(t,i)}return t.extend(e.prototype,{options:{container:"#blueimp-gallery",slidesContainer:"div",titleElement:"h3",displayClass:"blueimp-gallery-display",controlsClass:"blueimp-gallery-controls",singleClass:"blueimp-gallery-single",leftEdgeClass:"blueimp-gallery-left",rightEdgeClass:"blueimp-gallery-right",playingClass:"blueimp-gallery-playing",slideClass:"slide",slideLoadingClass:"slide-loading",slideErrorClass:"slide-error",slideContentClass:"slide-content",toggleClass:"toggle",prevClass:"prev",nextClass:"next",closeClass:"close",playPauseClass:"play-pause",typeProperty:"type",titleProperty:"title",altTextProperty:"alt",urlProperty:"href",srcsetProperty:"urlset",displayTransition:!0,clearSlides:!0,stretchImages:!1,toggleControlsOnReturn:!0,toggleControlsOnSlideClick:!0,toggleSlideshowOnSpace:!0,enableKeyboardNavigation:!0,closeOnEscape:!0,closeOnSlideClick:!0,closeOnSwipeUpOrDown:!0,emulateTouchEvents:!0,stopTouchEventsPropagation:!1,hidePageScrollbars:!0,disableScroll:!0,carousel:!1,continuous:!0,unloadElements:!0,startSlideshow:!1,slideshowInterval:5e3,index:0,preloadRange:2,transitionSpeed:400,slideshowTransitionSpeed:void 0,event:void 0,onopen:void 0,onopened:void 0,onslide:void 0,onslideend:void 0,onslidecomplete:void 0,onclose:void 0,onclosed:void 0},carouselOptions:{hidePageScrollbars:!1,toggleControlsOnReturn:!1,toggleSlideshowOnSpace:!1,enableKeyboardNavigation:!1,closeOnEscape:!1,closeOnSlideClick:!1,closeOnSwipeUpOrDown:!1,disableScroll:!1,startSlideshow:!0},console:window.console&&"function"==typeof window.console.log?window.console:{log:function(){}},support:function(e){function i(){var t,i,s=n.transition;document.body.appendChild(e),s&&(t=s.name.slice(0,-9)+"ransform",void 0!==e.style[t]&&(e.style[t]="translateZ(0)",i=window.getComputedStyle(e).getPropertyValue(s.prefix+"transform"),n.transform={prefix:s.prefix,name:t,translate:!0,translateZ:!!i&&"none"!==i})),void 0!==e.style.backgroundSize&&(n.backgroundSize={},e.style.backgroundSize="contain",n.backgroundSize.contain="contain"===window.getComputedStyle(e).getPropertyValue("background-size"),e.style.backgroundSize="cover",n.backgroundSize.cover="cover"===window.getComputedStyle(e).getPropertyValue("background-size")),document.body.removeChild(e)}var s,n={touch:void 0!==window.ontouchstart||window.DocumentTouch&&document instanceof DocumentTouch},o={webkitTransition:{end:"webkitTransitionEnd",prefix:"-webkit-"},MozTransition:{end:"transitionend",prefix:"-moz-"},OTransition:{end:"otransitionend",prefix:"-o-"},transition:{end:"transitionend",prefix:""}};for(s in o)if(o.hasOwnProperty(s)&&void 0!==e.style[s]){n.transition=o[s],n.transition.name=s;break}return document.body?i():t(document).on("DOMContentLoaded",i),n}(document.createElement("div")),requestAnimationFrame:window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame,cancelAnimationFrame:window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame,initialize:function(){if(this.initStartIndex(),!1===this.initWidget())return!1;this.initEventListeners(),this.onslide(this.index),this.ontransitionend(),this.options.startSlideshow&&this.play()},slide:function(t,e){window.clearTimeout(this.timeout);var i,s,n,o=this.index;if(o!==t&&1!==this.num){if(e||(e=this.options.transitionSpeed),this.support.transform){for(this.options.continuous||(t=this.circle(t)),i=Math.abs(o-t)/(o-t),this.options.continuous&&(s=i,(i=-this.positions[this.circle(t)]/this.slideWidth)!==s&&(t=-i*this.num+t)),n=Math.abs(o-t)-1;n;)n-=1,this.move(this.circle((t>o?t:o)-n-1),this.slideWidth*i,0);t=this.circle(t),this.move(o,this.slideWidth*i,e),this.move(t,0,e),this.options.continuous&&this.move(this.circle(t-i),-this.slideWidth*i,0)}else t=this.circle(t),this.animate(o*-this.slideWidth,t*-this.slideWidth,e);this.onslide(t)}},getIndex:function(){return this.index},getNumber:function(){return this.num},prev:function(){(this.options.continuous||this.index)&&this.slide(this.index-1)},next:function(){(this.options.continuous||this.index<this.num-1)&&this.slide(this.index+1)},play:function(t){var e=this;window.clearTimeout(this.timeout),this.interval=t||this.options.slideshowInterval,this.elements[this.index]>1&&(this.timeout=this.setTimeout(!this.requestAnimationFrame&&this.slide||function(t,i){e.animationFrameId=e.requestAnimationFrame.call(window,function(){e.slide(t,i)})},[this.index+1,this.options.slideshowTransitionSpeed],this.interval)),this.container.addClass(this.options.playingClass)},pause:function(){window.clearTimeout(this.timeout),this.interval=null,this.cancelAnimationFrame&&(this.cancelAnimationFrame.call(window,this.animationFrameId),this.animationFrameId=null),this.container.removeClass(this.options.playingClass)},add:function(t){var e;for(t.concat||(t=Array.prototype.slice.call(t)),this.list.concat||(this.list=Array.prototype.slice.call(this.list)),this.list=this.list.concat(t),this.num=this.list.length,this.num>2&&null===this.options.continuous&&(this.options.continuous=!0,this.container.removeClass(this.options.leftEdgeClass)),this.container.removeClass(this.options.rightEdgeClass).removeClass(this.options.singleClass),e=this.num-t.length;e<this.num;e+=1)this.addSlide(e),this.positionSlide(e);this.positions.length=this.num,this.initSlides(!0)},resetSlides:function(){this.slidesContainer.empty(),this.unloadAllSlides(),this.slides=[]},handleClose:function(){var t=this.options;this.destroyEventListeners(),this.pause(),this.container[0].style.display="none",this.container.removeClass(t.displayClass).removeClass(t.singleClass).removeClass(t.leftEdgeClass).removeClass(t.rightEdgeClass),t.hidePageScrollbars&&(document.body.style.overflow=this.bodyOverflowStyle),this.options.clearSlides&&this.resetSlides(),this.options.onclosed&&this.options.onclosed.call(this)},close:function(){function t(i){i.target===e.container[0]&&(e.container.off(e.support.transition.end,t),e.handleClose())}var e=this;this.options.onclose&&this.options.onclose.call(this),this.support.transition&&this.options.displayTransition?(this.container.on(this.support.transition.end,t),this.container.removeClass(this.options.displayClass)):this.handleClose()},circle:function(t){return(this.num+t%this.num)%this.num},move:function(t,e,i){this.translateX(t,e,i),this.positions[t]=e},translate:function(t,e,i,s){var n=this.slides[t].style,o=this.support.transition,a=this.support.transform;n[o.name+"Duration"]=s+"ms",n[a.name]="translate("+e+"px, "+i+"px)"+(a.translateZ?" translateZ(0)":"")},translateX:function(t,e,i){this.translate(t,e,0,i)},translateY:function(t,e,i){this.translate(t,0,e,i)},animate:function(t,e,i){if(i)var s=this,n=(new Date).getTime(),o=window.setInterval(function(){var a=(new Date).getTime()-n;if(a>i)return s.slidesContainer[0].style.left=e+"px",s.ontransitionend(),void window.clearInterval(o);s.slidesContainer[0].style.left=(e-t)*(Math.floor(a/i*100)/100)+t+"px"},4);else this.slidesContainer[0].style.left=e+"px"},preventDefault:function(t){t.preventDefault?t.preventDefault():t.returnValue=!1},stopPropagation:function(t){t.stopPropagation?t.stopPropagation():t.cancelBubble=!0},onresize:function(){this.initSlides(!0)},onmousedown:function(t){t.which&&1===t.which&&"VIDEO"!==t.target.nodeName&&"AUDIO"!==t.target.nodeName&&(t.preventDefault(),(t.originalEvent||t).touches=[{pageX:t.pageX,pageY:t.pageY}],this.ontouchstart(t))},onmousemove:function(t){this.touchStart&&((t.originalEvent||t).touches=[{pageX:t.pageX,pageY:t.pageY}],this.ontouchmove(t))},onmouseup:function(t){this.touchStart&&(this.ontouchend(t),delete this.touchStart)},onmouseout:function(e){if(this.touchStart){var i=e.target,s=e.relatedTarget;s&&(s===i||t.contains(i,s))||this.onmouseup(e)}},ontouchstart:function(t){this.options.stopTouchEventsPropagation&&this.stopPropagation(t);var e=(t.originalEvent||t).touches[0];this.touchStart={x:e.pageX,y:e.pageY,time:Date.now()},this.isScrolling=void 0,this.touchDelta={}},ontouchmove:function(t){this.options.stopTouchEventsPropagation&&this.stopPropagation(t);var e,i,s=(t.originalEvent||t).touches[0],n=(t.originalEvent||t).scale,o=this.index;if(!(s.length>1||n&&1!==n))if(this.options.disableScroll&&t.preventDefault(),this.touchDelta={x:s.pageX-this.touchStart.x,y:s.pageY-this.touchStart.y},e=this.touchDelta.x,void 0===this.isScrolling&&(this.isScrolling=this.isScrolling||Math.abs(e)<Math.abs(this.touchDelta.y)),this.isScrolling)this.translateY(o,this.touchDelta.y+this.positions[o],0);else for(t.preventDefault(),window.clearTimeout(this.timeout),this.options.continuous?i=[this.circle(o+1),o,this.circle(o-1)]:(this.touchDelta.x=e/=!o&&e>0||o===this.num-1&&e<0?Math.abs(e)/this.slideWidth+1:1,i=[o],o&&i.push(o-1),o<this.num-1&&i.unshift(o+1));i.length;)o=i.pop(),this.translateX(o,e+this.positions[o],0)},ontouchend:function(t){this.options.stopTouchEventsPropagation&&this.stopPropagation(t);var e,i,s,n,o,a=this.index,r=this.options.transitionSpeed,l=this.slideWidth,h=Number(Date.now()-this.touchStart.time)<250,d=h&&Math.abs(this.touchDelta.x)>20||Math.abs(this.touchDelta.x)>l/2,c=!a&&this.touchDelta.x>0||a===this.num-1&&this.touchDelta.x<0,u=!d&&this.options.closeOnSwipeUpOrDown&&(h&&Math.abs(this.touchDelta.y)>20||Math.abs(this.touchDelta.y)>this.slideHeight/2);this.options.continuous&&(c=!1),e=this.touchDelta.x<0?-1:1,this.isScrolling?u?this.close():this.translateY(a,0,r):d&&!c?(i=a+e,s=a-e,n=l*e,o=-l*e,this.options.continuous?(this.move(this.circle(i),n,0),this.move(this.circle(a-2*e),o,0)):i>=0&&i<this.num&&this.move(i,n,0),this.move(a,this.positions[a]+n,r),this.move(this.circle(s),this.positions[this.circle(s)]+n,r),a=this.circle(s),this.onslide(a)):this.options.continuous?(this.move(this.circle(a-1),-l,r),this.move(a,0,r),this.move(this.circle(a+1),l,r)):(a&&this.move(a-1,-l,r),this.move(a,0,r),a<this.num-1&&this.move(a+1,l,r))},ontouchcancel:function(t){this.touchStart&&(this.ontouchend(t),delete this.touchStart)},ontransitionend:function(t){var e=this.slides[this.index];t&&e!==t.target||(this.interval&&this.play(),this.setTimeout(this.options.onslideend,[this.index,e]))},oncomplete:function(e){var i,s=e.target||e.srcElement,n=s&&s.parentNode;s&&n&&(i=this.getNodeIndex(n),t(n).removeClass(this.options.slideLoadingClass),"error"===e.type?(t(n).addClass(this.options.slideErrorClass),this.elements[i]=3):this.elements[i]=2,s.clientHeight>this.container[0].clientHeight&&(s.style.maxHeight=this.container[0].clientHeight),this.interval&&this.slides[this.index]===n&&this.play(),this.setTimeout(this.options.onslidecomplete,[i,n]))},onload:function(t){this.oncomplete(t)},onerror:function(t){this.oncomplete(t)},onkeydown:function(t){switch(t.which||t.keyCode){case 13:this.options.toggleControlsOnReturn&&(this.preventDefault(t),this.toggleControls());break;case 27:this.options.closeOnEscape&&(this.close(),t.stopImmediatePropagation());break;case 32:this.options.toggleSlideshowOnSpace&&(this.preventDefault(t),this.toggleSlideshow());break;case 37:this.options.enableKeyboardNavigation&&(this.preventDefault(t),this.prev());break;case 39:this.options.enableKeyboardNavigation&&(this.preventDefault(t),this.next())}},handleClick:function(e){function i(e){return t(n).hasClass(e)||t(o).hasClass(e)}var s=this.options,n=e.target||e.srcElement,o=n.parentNode;i(s.toggleClass)?(this.preventDefault(e),this.toggleControls()):i(s.prevClass)?(this.preventDefault(e),this.prev()):i(s.nextClass)?(this.preventDefault(e),this.next()):i(s.closeClass)?(this.preventDefault(e),this.close()):i(s.playPauseClass)?(this.preventDefault(e),this.toggleSlideshow()):o===this.slidesContainer[0]?s.closeOnSlideClick?(this.preventDefault(e),this.close()):s.toggleControlsOnSlideClick&&(this.preventDefault(e),this.toggleControls()):o.parentNode&&o.parentNode===this.slidesContainer[0]&&s.toggleControlsOnSlideClick&&(this.preventDefault(e),this.toggleControls())},onclick:function(t){if(!(this.options.emulateTouchEvents&&this.touchDelta&&(Math.abs(this.touchDelta.x)>20||Math.abs(this.touchDelta.y)>20)))return this.handleClick(t);delete this.touchDelta},updateEdgeClasses:function(t){t?this.container.removeClass(this.options.leftEdgeClass):this.container.addClass(this.options.leftEdgeClass),t===this.num-1?this.container.addClass(this.options.rightEdgeClass):this.container.removeClass(this.options.rightEdgeClass)},handleSlide:function(t){this.options.continuous||this.updateEdgeClasses(t),this.loadElements(t),this.options.unloadElements&&this.unloadElements(t),this.setTitle(t)},onslide:function(t){this.index=t,this.handleSlide(t),this.setTimeout(this.options.onslide,[t,this.slides[t]])},setTitle:function(t){var e=this.slides[t].firstChild,i=e.title||e.alt,s=this.titleElement;s.length&&(this.titleElement.empty(),i&&s[0].appendChild(document.createTextNode(i)))},setTimeout:function(t,e,i){var s=this;return t&&window.setTimeout(function(){t.apply(s,e||[])},i||0)},imageFactory:function(e,i){function s(e){if(!n){if(e={type:e.type,target:o},!o.parentNode)return l.setTimeout(s,[e]);n=!0,t(h).off("load error",s),c&&"load"===e.type&&(o.style.background='url("'+d+'") center no-repeat',o.style.backgroundSize=c),i(e)}}var n,o,a,r,l=this,h=this.imagePrototype.cloneNode(!1),d=e,c=this.options.stretchImages;return"string"!=typeof d&&(d=this.getItemProperty(e,this.options.urlProperty),a=this.getItemProperty(e,this.options.titleProperty),r=this.getItemProperty(e,this.options.altTextProperty)||a),!0===c&&(c="contain"),(c=this.support.backgroundSize&&this.support.backgroundSize[c]&&c)?o=this.elementPrototype.cloneNode(!1):(o=h,h.draggable=!1),a&&(o.title=a),r&&(o.alt=r),t(h).on("load error",s),h.src=d,o},createElement:function(e,i){var s=e&&this.getItemProperty(e,this.options.typeProperty),n=s&&this[s.split("/")[0]+"Factory"]||this.imageFactory,o=e&&n.call(this,e,i),a=this.getItemProperty(e,this.options.srcsetProperty);return o||(o=this.elementPrototype.cloneNode(!1),this.setTimeout(i,[{type:"error",target:o}])),a&&o.setAttribute("srcset",a),t(o).addClass(this.options.slideContentClass),o},loadElement:function(e){this.elements[e]||(this.slides[e].firstChild?this.elements[e]=t(this.slides[e]).hasClass(this.options.slideErrorClass)?3:2:(this.elements[e]=1,t(this.slides[e]).addClass(this.options.slideLoadingClass),this.slides[e].appendChild(this.createElement(this.list[e],this.proxyListener))))},loadElements:function(t){var e,i=Math.min(this.num,2*this.options.preloadRange+1),s=t;for(e=0;e<i;e+=1)s+=e*(e%2==0?-1:1),s=this.circle(s),this.loadElement(s)},unloadElements:function(t){var e,i;for(e in this.elements)this.elements.hasOwnProperty(e)&&(i=Math.abs(t-e))>this.options.preloadRange&&i+this.options.preloadRange<this.num&&(this.unloadSlide(e),delete this.elements[e])},addSlide:function(t){var e=this.slidePrototype.cloneNode(!1);e.setAttribute("data-index",t),this.slidesContainer[0].appendChild(e),this.slides.push(e)},positionSlide:function(t){var e=this.slides[t];e.style.width=this.slideWidth+"px",this.support.transform&&(e.style.left=t*-this.slideWidth+"px",this.move(t,this.index>t?-this.slideWidth:this.index<t?this.slideWidth:0,0))},initSlides:function(e){var i,s;for(e||(this.positions=[],this.positions.length=this.num,this.elements={},this.imagePrototype=document.createElement("img"),this.elementPrototype=document.createElement("div"),this.slidePrototype=document.createElement("div"),t(this.slidePrototype).addClass(this.options.slideClass),this.slides=this.slidesContainer[0].children,i=this.options.clearSlides||this.slides.length!==this.num),this.slideWidth=this.container[0].clientWidth,this.slideHeight=this.container[0].clientHeight,this.slidesContainer[0].style.width=this.num*this.slideWidth+"px",i&&this.resetSlides(),s=0;s<this.num;s+=1)i&&this.addSlide(s),this.positionSlide(s);this.options.continuous&&this.support.transform&&(this.move(this.circle(this.index-1),-this.slideWidth,0),this.move(this.circle(this.index+1),this.slideWidth,0)),this.support.transform||(this.slidesContainer[0].style.left=this.index*-this.slideWidth+"px")},unloadSlide:function(t){var e,i;null!==(i=(e=this.slides[t]).firstChild)&&e.removeChild(i)},unloadAllSlides:function(){var t,e;for(t=0,e=this.slides.length;t<e;t++)this.unloadSlide(t)},toggleControls:function(){var t=this.options.controlsClass;this.container.hasClass(t)?this.container.removeClass(t):this.container.addClass(t)},toggleSlideshow:function(){this.interval?this.pause():this.play()},getNodeIndex:function(t){return parseInt(t.getAttribute("data-index"),10)},getNestedProperty:function(t,e){return e.replace(/\[(?:'([^']+)'|"([^"]+)"|(\d+))\]|(?:(?:^|\.)([^\.\[]+))/g,function(e,i,s,n,o){var a=o||i||s||n&&parseInt(n,10);e&&t&&(t=t[a])}),t},getDataProperty:function(e,i){var s,n;if(e.dataset?(s=i.replace(/-([a-z])/g,function(t,e){return e.toUpperCase()}),n=e.dataset[s]):e.getAttribute&&(n=e.getAttribute("data-"+i.replace(/([A-Z])/g,"-$1").toLowerCase())),"string"==typeof n){if(/^(true|false|null|-?\d+(\.\d+)?|\{[\s\S]*\}|\[[\s\S]*\])$/.test(n))try{return t.parseJSON(n)}catch(t){}return n}},getItemProperty:function(t,e){var i=this.getDataProperty(t,e);return void 0===i&&(i=t[e]),void 0===i&&(i=this.getNestedProperty(t,e)),i},initStartIndex:function(){var t,e=this.options.index,i=this.options.urlProperty;if(e&&"number"!=typeof e)for(t=0;t<this.num;t+=1)if(this.list[t]===e||this.getItemProperty(this.list[t],i)===this.getItemProperty(e,i)){e=t;break}this.index=this.circle(parseInt(e,10)||0)},initEventListeners:function(){function e(t){var e=i.support.transition&&i.support.transition.end===t.type?"transitionend":t.type;i["on"+e](t)}var i=this,s=this.slidesContainer;t(window).on("resize",e),t(document.body).on("keydown",e),this.container.on("click",e),this.support.touch?s.on("touchstart touchmove touchend touchcancel",e):this.options.emulateTouchEvents&&this.support.transition&&s.on("mousedown mousemove mouseup mouseout",e),this.support.transition&&s.on(this.support.transition.end,e),this.proxyListener=e},destroyEventListeners:function(){var e=this.slidesContainer,i=this.proxyListener;t(window).off("resize",i),t(document.body).off("keydown",i),this.container.off("click",i),this.support.touch?e.off("touchstart touchmove touchend touchcancel",i):this.options.emulateTouchEvents&&this.support.transition&&e.off("mousedown mousemove mouseup mouseout",i),this.support.transition&&e.off(this.support.transition.end,i)},handleOpen:function(){this.options.onopened&&this.options.onopened.call(this)},initWidget:function(){function e(t){t.target===i.container[0]&&(i.container.off(i.support.transition.end,e),i.handleOpen())}var i=this;return this.container=t(this.options.container),this.container.length?(this.slidesContainer=this.container.find(this.options.slidesContainer).first(),this.slidesContainer.length?(this.titleElement=this.container.find(this.options.titleElement).first(),1===this.num&&this.container.addClass(this.options.singleClass),this.options.onopen&&this.options.onopen.call(this),this.support.transition&&this.options.displayTransition?this.container.on(this.support.transition.end,e):this.handleOpen(),this.options.hidePageScrollbars&&(this.bodyOverflowStyle=document.body.style.overflow,document.body.style.overflow="hidden"),this.container[0].style.display="block",this.initSlides(),void this.container.addClass(this.options.displayClass)):(this.console.log("blueimp Gallery: Slides container not found.",this.options.slidesContainer),!1)):(this.console.log("blueimp Gallery: Widget container not found.",this.options.container),!1)},initOptions:function(e){this.options=t.extend({},this.options),(e&&e.carousel||this.options.carousel&&(!e||!1!==e.carousel))&&t.extend(this.options,this.carouselOptions),t.extend(this.options,e),this.num<3&&(this.options.continuous=!!this.options.continuous&&null),this.support.transition||(this.options.emulateTouchEvents=!1),this.options.event&&this.preventDefault(this.options.event)}}),e}),function(t){"use strict"; true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1),__webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (t), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):t(window.blueimp.helper||window.jQuery,window.blueimp.Gallery)}(function(t,e){"use strict";t.extend(e.prototype.options,{fullScreen:!1});var i=e.prototype.initialize,s=e.prototype.close;return t.extend(e.prototype,{getFullScreenElement:function(){return document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement},requestFullScreen:function(t){t.requestFullscreen?t.requestFullscreen():t.webkitRequestFullscreen?t.webkitRequestFullscreen():t.mozRequestFullScreen?t.mozRequestFullScreen():t.msRequestFullscreen&&t.msRequestFullscreen()},exitFullScreen:function(){document.exitFullscreen?document.exitFullscreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen()},initialize:function(){i.call(this),this.options.fullScreen&&!this.getFullScreenElement()&&this.requestFullScreen(this.container[0])},close:function(){this.getFullScreenElement()===this.container[0]&&this.exitFullScreen(),s.call(this)}}),e}),function(t){"use strict"; true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1),__webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (t), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):t(window.blueimp.helper||window.jQuery,window.blueimp.Gallery)}(function(t,e){"use strict";t.extend(e.prototype.options,{indicatorContainer:"ol",activeIndicatorClass:"active",thumbnailProperty:"thumbnail",thumbnailIndicators:!0});var i=e.prototype.initSlides,s=e.prototype.addSlide,n=e.prototype.resetSlides,o=e.prototype.handleClick,a=e.prototype.handleSlide,r=e.prototype.handleClose;return t.extend(e.prototype,{createIndicator:function(e){var i,s,n=this.indicatorPrototype.cloneNode(!1),o=this.getItemProperty(e,this.options.titleProperty),a=this.options.thumbnailProperty;return this.options.thumbnailIndicators&&(a&&(i=this.getItemProperty(e,a)),void 0===i&&(s=e.getElementsByTagName&&t(e).find("img")[0])&&(i=s.src),i&&(n.style.backgroundImage='url("'+i+'")')),o&&(n.title=o),n},addIndicator:function(t){if(this.indicatorContainer.length){var e=this.createIndicator(this.list[t]);e.setAttribute("data-index",t),this.indicatorContainer[0].appendChild(e),this.indicators.push(e)}},setActiveIndicator:function(e){this.indicators&&(this.activeIndicator&&this.activeIndicator.removeClass(this.options.activeIndicatorClass),this.activeIndicator=t(this.indicators[e]),this.activeIndicator.addClass(this.options.activeIndicatorClass))},initSlides:function(t){t||(this.indicatorContainer=this.container.find(this.options.indicatorContainer),this.indicatorContainer.length&&(this.indicatorPrototype=document.createElement("li"),this.indicators=this.indicatorContainer[0].children)),i.call(this,t)},addSlide:function(t){s.call(this,t),this.addIndicator(t)},resetSlides:function(){n.call(this),this.indicatorContainer.empty(),this.indicators=[]},handleClick:function(t){var e=t.target||t.srcElement,i=e.parentNode;if(i===this.indicatorContainer[0])this.preventDefault(t),this.slide(this.getNodeIndex(e));else{if(i.parentNode!==this.indicatorContainer[0])return o.call(this,t);this.preventDefault(t),this.slide(this.getNodeIndex(i))}},handleSlide:function(t){a.call(this,t),this.setActiveIndicator(t)},handleClose:function(){this.activeIndicator&&this.activeIndicator.removeClass(this.options.activeIndicatorClass),r.call(this)}}),e}),function(t){"use strict"; true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1),__webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (t), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):t(window.blueimp.helper||window.jQuery,window.blueimp.Gallery)}(function(t,e){"use strict";t.extend(e.prototype.options,{videoContentClass:"video-content",videoLoadingClass:"video-loading",videoPlayingClass:"video-playing",videoPosterProperty:"poster",videoSourcesProperty:"sources"});var i=e.prototype.handleSlide;return t.extend(e.prototype,{handleSlide:function(t){i.call(this,t),this.playingVideo&&this.playingVideo.pause()},videoFactory:function(e,i,s){var n,o,a,r,l,h=this,d=this.options,c=this.elementPrototype.cloneNode(!1),u=t(c),p=[{type:"error",target:c}],m=s||document.createElement("video"),y=this.getItemProperty(e,d.urlProperty),f=this.getItemProperty(e,d.typeProperty),g=this.getItemProperty(e,d.titleProperty),v=this.getItemProperty(e,this.options.altTextProperty)||g,C=this.getItemProperty(e,d.videoPosterProperty),w=this.getItemProperty(e,d.videoSourcesProperty);if(u.addClass(d.videoContentClass),g&&(c.title=g),m.canPlayType)if(y&&f&&m.canPlayType(f))m.src=y;else if(w)for(;w.length;)if(o=w.shift(),y=this.getItemProperty(o,d.urlProperty),f=this.getItemProperty(o,d.typeProperty),y&&f&&m.canPlayType(f)){m.src=y;break}return C&&(m.poster=C,n=this.imagePrototype.cloneNode(!1),t(n).addClass(d.toggleClass),n.src=C,n.draggable=!1,n.alt=v,c.appendChild(n)),(a=document.createElement("a")).setAttribute("target","_blank"),s||a.setAttribute("download",g),a.href=y,m.src&&(m.controls=!0,(s||t(m)).on("error",function(){h.setTimeout(i,p)}).on("pause",function(){m.seeking||(r=!1,u.removeClass(h.options.videoLoadingClass).removeClass(h.options.videoPlayingClass),l&&h.container.addClass(h.options.controlsClass),delete h.playingVideo,h.interval&&h.play())}).on("playing",function(){r=!1,u.removeClass(h.options.videoLoadingClass).addClass(h.options.videoPlayingClass),h.container.hasClass(h.options.controlsClass)?(l=!0,h.container.removeClass(h.options.controlsClass)):l=!1}).on("play",function(){window.clearTimeout(h.timeout),r=!0,u.addClass(h.options.videoLoadingClass),h.playingVideo=m}),t(a).on("click",function(t){h.preventDefault(t),r?m.pause():m.play()}),c.appendChild(s&&s.element||m)),c.appendChild(a),this.setTimeout(i,[{type:"load",target:c}]),c}}),e}),function(t){"use strict"; true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1),__webpack_require__(5)], __WEBPACK_AMD_DEFINE_FACTORY__ = (t), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):t(window.blueimp.helper||window.jQuery,window.blueimp.Gallery)}(function(t,e){"use strict";if(!window.postMessage)return e;t.extend(e.prototype.options,{vimeoVideoIdProperty:"vimeo",vimeoPlayerUrl:"//player.vimeo.com/video/VIDEO_ID?api=1&player_id=PLAYER_ID",vimeoPlayerIdPrefix:"vimeo-player-",vimeoClickToPlay:!0});var i=e.prototype.textFactory||e.prototype.imageFactory,s=function(t,e,i,s){this.url=t,this.videoId=e,this.playerId=i,this.clickToPlay=s,this.element=document.createElement("div"),this.listeners={}},n=0;return t.extend(s.prototype,{canPlayType:function(){return!0},on:function(t,e){return this.listeners[t]=e,this},loadAPI:function(){function e(){!s&&n.playOnReady&&n.play(),s=!0}for(var i,s,n=this,o="//f.vimeocdn.com/js/froogaloop2.min.js",a=document.getElementsByTagName("script"),r=a.length;r;)if(r-=1,a[r].src===o){i=a[r];break}i||((i=document.createElement("script")).src=o),t(i).on("load",e),a[0].parentNode.insertBefore(i,a[0]),/loaded|complete/.test(i.readyState)&&e()},onReady:function(){var t=this;this.ready=!0,this.player.addEvent("play",function(){t.hasPlayed=!0,t.onPlaying()}),this.player.addEvent("pause",function(){t.onPause()}),this.player.addEvent("finish",function(){t.onPause()}),this.playOnReady&&this.play()},onPlaying:function(){this.playStatus<2&&(this.listeners.playing(),this.playStatus=2)},onPause:function(){this.listeners.pause(),delete this.playStatus},insertIframe:function(){var t=document.createElement("iframe");t.src=this.url.replace("VIDEO_ID",this.videoId).replace("PLAYER_ID",this.playerId),t.id=this.playerId,this.element.parentNode.replaceChild(t,this.element),this.element=t},play:function(){var t=this;this.playStatus||(this.listeners.play(),this.playStatus=1),this.ready?!this.hasPlayed&&(this.clickToPlay||window.navigator&&/iP(hone|od|ad)/.test(window.navigator.platform))?this.onPlaying():this.player.api("play"):(this.playOnReady=!0,window.$f?this.player||(this.insertIframe(),this.player=$f(this.element),this.player.addEvent("ready",function(){t.onReady()})):this.loadAPI())},pause:function(){this.ready?this.player.api("pause"):this.playStatus&&(delete this.playOnReady,this.listeners.pause(),delete this.playStatus)}}),t.extend(e.prototype,{VimeoPlayer:s,textFactory:function(t,e){var o=this.options,a=this.getItemProperty(t,o.vimeoVideoIdProperty);return a?(void 0===this.getItemProperty(t,o.urlProperty)&&(t[o.urlProperty]="//vimeo.com/"+a),n+=1,this.videoFactory(t,e,new s(o.vimeoPlayerUrl,a,o.vimeoPlayerIdPrefix+n,o.vimeoClickToPlay))):i.call(this,t,e)}}),e}),function(t){"use strict"; true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1),__webpack_require__(5)], __WEBPACK_AMD_DEFINE_FACTORY__ = (t), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):t(window.blueimp.helper||window.jQuery,window.blueimp.Gallery)}(function(t,e){"use strict";if(!window.postMessage)return e;t.extend(e.prototype.options,{youTubeVideoIdProperty:"youtube",youTubePlayerVars:{wmode:"transparent"},youTubeClickToPlay:!0});var i=e.prototype.textFactory||e.prototype.imageFactory,s=function(t,e,i){this.videoId=t,this.playerVars=e,this.clickToPlay=i,this.element=document.createElement("div"),this.listeners={}};return t.extend(s.prototype,{canPlayType:function(){return!0},on:function(t,e){return this.listeners[t]=e,this},loadAPI:function(){var t,e=this,i=window.onYouTubeIframeAPIReady,s="//www.youtube.com/iframe_api",n=document.getElementsByTagName("script"),o=n.length;for(window.onYouTubeIframeAPIReady=function(){i&&i.apply(this),e.playOnReady&&e.play()};o;)if(o-=1,n[o].src===s)return;(t=document.createElement("script")).src=s,n[0].parentNode.insertBefore(t,n[0])},onReady:function(){this.ready=!0,this.playOnReady&&this.play()},onPlaying:function(){this.playStatus<2&&(this.listeners.playing(),this.playStatus=2)},onPause:function(){e.prototype.setTimeout.call(this,this.checkSeek,null,2e3)},checkSeek:function(){this.stateChange!==YT.PlayerState.PAUSED&&this.stateChange!==YT.PlayerState.ENDED||(this.listeners.pause(),delete this.playStatus)},onStateChange:function(t){switch(t.data){case YT.PlayerState.PLAYING:this.hasPlayed=!0,this.onPlaying();break;case YT.PlayerState.PAUSED:case YT.PlayerState.ENDED:this.onPause()}this.stateChange=t.data},onError:function(t){this.listeners.error(t)},play:function(){var t=this;this.playStatus||(this.listeners.play(),this.playStatus=1),this.ready?!this.hasPlayed&&(this.clickToPlay||window.navigator&&/iP(hone|od|ad)/.test(window.navigator.platform))?this.onPlaying():this.player.playVideo():(this.playOnReady=!0,window.YT&&YT.Player?this.player||(this.player=new YT.Player(this.element,{videoId:this.videoId,playerVars:this.playerVars,events:{onReady:function(){t.onReady()},onStateChange:function(e){t.onStateChange(e)},onError:function(e){t.onError(e)}}})):this.loadAPI())},pause:function(){this.ready?this.player.pauseVideo():this.playStatus&&(delete this.playOnReady,this.listeners.pause(),delete this.playStatus)}}),t.extend(e.prototype,{YouTubePlayer:s,textFactory:function(t,e){var n=this.options,o=this.getItemProperty(t,n.youTubeVideoIdProperty);return o?(void 0===this.getItemProperty(t,n.urlProperty)&&(t[n.urlProperty]="//www.youtube.com/watch?v="+o),void 0===this.getItemProperty(t,n.videoPosterProperty)&&(t[n.videoPosterProperty]="//img.youtube.com/vi/"+o+"/maxresdefault.jpg"),this.videoFactory(t,e,new s(o,n.youTubePlayerVars,n.youTubeClickToPlay))):i.call(this,t,e)}}),e});
	//# sourceMappingURL=blueimp-gallery.min.js.map

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;;(function () {
		'use strict';

		/**
		 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
		 *
		 * @codingstandard ftlabs-jsv2
		 * @copyright The Financial Times Limited [All Rights Reserved]
		 * @license MIT License (see LICENSE.txt)
		 */

		/*jslint browser:true, node:true*/
		/*global define, Event, Node*/


		/**
		 * Instantiate fast-clicking listeners on the specified layer.
		 *
		 * @constructor
		 * @param {Element} layer The layer to listen on
		 * @param {Object} [options={}] The options to override the defaults
		 */
		function FastClick(layer, options) {
			var oldOnClick;

			options = options || {};

			/**
			 * Whether a click is currently being tracked.
			 *
			 * @type boolean
			 */
			this.trackingClick = false;


			/**
			 * Timestamp for when click tracking started.
			 *
			 * @type number
			 */
			this.trackingClickStart = 0;


			/**
			 * The element being tracked for a click.
			 *
			 * @type EventTarget
			 */
			this.targetElement = null;


			/**
			 * X-coordinate of touch start event.
			 *
			 * @type number
			 */
			this.touchStartX = 0;


			/**
			 * Y-coordinate of touch start event.
			 *
			 * @type number
			 */
			this.touchStartY = 0;


			/**
			 * ID of the last touch, retrieved from Touch.identifier.
			 *
			 * @type number
			 */
			this.lastTouchIdentifier = 0;


			/**
			 * Touchmove boundary, beyond which a click will be cancelled.
			 *
			 * @type number
			 */
			this.touchBoundary = options.touchBoundary || 10;


			/**
			 * The FastClick layer.
			 *
			 * @type Element
			 */
			this.layer = layer;

			/**
			 * The minimum time between tap(touchstart and touchend) events
			 *
			 * @type number
			 */
			this.tapDelay = options.tapDelay || 200;

			/**
			 * The maximum time for a tap
			 *
			 * @type number
			 */
			this.tapTimeout = options.tapTimeout || 700;

			if (FastClick.notNeeded(layer)) {
				return;
			}

			// Some old versions of Android don't have Function.prototype.bind
			function bind(method, context) {
				return function() { return method.apply(context, arguments); };
			}


			var methods = ['onMouse', 'onClick', 'onTouchStart', 'onTouchMove', 'onTouchEnd', 'onTouchCancel'];
			var context = this;
			for (var i = 0, l = methods.length; i < l; i++) {
				context[methods[i]] = bind(context[methods[i]], context);
			}

			// Set up event handlers as required
			if (deviceIsAndroid) {
				layer.addEventListener('mouseover', this.onMouse, true);
				layer.addEventListener('mousedown', this.onMouse, true);
				layer.addEventListener('mouseup', this.onMouse, true);
			}

			layer.addEventListener('click', this.onClick, true);
			layer.addEventListener('touchstart', this.onTouchStart, false);
			layer.addEventListener('touchmove', this.onTouchMove, false);
			layer.addEventListener('touchend', this.onTouchEnd, false);
			layer.addEventListener('touchcancel', this.onTouchCancel, false);

			// Hack is required for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
			// which is how FastClick normally stops click events bubbling to callbacks registered on the FastClick
			// layer when they are cancelled.
			if (!Event.prototype.stopImmediatePropagation) {
				layer.removeEventListener = function(type, callback, capture) {
					var rmv = Node.prototype.removeEventListener;
					if (type === 'click') {
						rmv.call(layer, type, callback.hijacked || callback, capture);
					} else {
						rmv.call(layer, type, callback, capture);
					}
				};

				layer.addEventListener = function(type, callback, capture) {
					var adv = Node.prototype.addEventListener;
					if (type === 'click') {
						adv.call(layer, type, callback.hijacked || (callback.hijacked = function(event) {
							if (!event.propagationStopped) {
								callback(event);
							}
						}), capture);
					} else {
						adv.call(layer, type, callback, capture);
					}
				};
			}

			// If a handler is already declared in the element's onclick attribute, it will be fired before
			// FastClick's onClick handler. Fix this by pulling out the user-defined handler function and
			// adding it as listener.
			if (typeof layer.onclick === 'function') {

				// Android browser on at least 3.2 requires a new reference to the function in layer.onclick
				// - the old one won't work if passed to addEventListener directly.
				oldOnClick = layer.onclick;
				layer.addEventListener('click', function(event) {
					oldOnClick(event);
				}, false);
				layer.onclick = null;
			}
		}

		/**
		* Windows Phone 8.1 fakes user agent string to look like Android and iPhone.
		*
		* @type boolean
		*/
		var deviceIsWindowsPhone = navigator.userAgent.indexOf("Windows Phone") >= 0;

		/**
		 * Android requires exceptions.
		 *
		 * @type boolean
		 */
		var deviceIsAndroid = navigator.userAgent.indexOf('Android') > 0 && !deviceIsWindowsPhone;


		/**
		 * iOS requires exceptions.
		 *
		 * @type boolean
		 */
		var deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent) && !deviceIsWindowsPhone;


		/**
		 * iOS 4 requires an exception for select elements.
		 *
		 * @type boolean
		 */
		var deviceIsIOS4 = deviceIsIOS && (/OS 4_\d(_\d)?/).test(navigator.userAgent);


		/**
		 * iOS 6.0-7.* requires the target element to be manually derived
		 *
		 * @type boolean
		 */
		var deviceIsIOSWithBadTarget = deviceIsIOS && (/OS [6-7]_\d/).test(navigator.userAgent);

		/**
		 * BlackBerry requires exceptions.
		 *
		 * @type boolean
		 */
		var deviceIsBlackBerry10 = navigator.userAgent.indexOf('BB10') > 0;

		/**
		 * Determine whether a given element requires a native click.
		 *
		 * @param {EventTarget|Element} target Target DOM element
		 * @returns {boolean} Returns true if the element needs a native click
		 */
		FastClick.prototype.needsClick = function(target) {
			switch (target.nodeName.toLowerCase()) {

			// Don't send a synthetic click to disabled inputs (issue #62)
			case 'button':
			case 'select':
			case 'textarea':
				if (target.disabled) {
					return true;
				}

				break;
			case 'input':

				// File inputs need real clicks on iOS 6 due to a browser bug (issue #68)
				if ((deviceIsIOS && target.type === 'file') || target.disabled) {
					return true;
				}

				break;
			case 'label':
			case 'iframe': // iOS8 homescreen apps can prevent events bubbling into frames
			case 'video':
				return true;
			}

			return (/\bneedsclick\b/).test(target.className);
		};


		/**
		 * Determine whether a given element requires a call to focus to simulate click into element.
		 *
		 * @param {EventTarget|Element} target Target DOM element
		 * @returns {boolean} Returns true if the element requires a call to focus to simulate native click.
		 */
		FastClick.prototype.needsFocus = function(target) {
			switch (target.nodeName.toLowerCase()) {
			case 'textarea':
				return true;
			case 'select':
				return !deviceIsAndroid;
			case 'input':
				switch (target.type) {
				case 'button':
				case 'checkbox':
				case 'file':
				case 'image':
				case 'radio':
				case 'submit':
					return false;
				}

				// No point in attempting to focus disabled inputs
				return !target.disabled && !target.readOnly;
			default:
				return (/\bneedsfocus\b/).test(target.className);
			}
		};


		/**
		 * Send a click event to the specified element.
		 *
		 * @param {EventTarget|Element} targetElement
		 * @param {Event} event
		 */
		FastClick.prototype.sendClick = function(targetElement, event) {
			var clickEvent, touch;

			// On some Android devices activeElement needs to be blurred otherwise the synthetic click will have no effect (#24)
			if (document.activeElement && document.activeElement !== targetElement) {
				document.activeElement.blur();
			}

			touch = event.changedTouches[0];

			// Synthesise a click event, with an extra attribute so it can be tracked
			clickEvent = document.createEvent('MouseEvents');
			clickEvent.initMouseEvent(this.determineEventType(targetElement), true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
			clickEvent.forwardedTouchEvent = true;
			targetElement.dispatchEvent(clickEvent);
		};

		FastClick.prototype.determineEventType = function(targetElement) {

			//Issue #159: Android Chrome Select Box does not open with a synthetic click event
			if (deviceIsAndroid && targetElement.tagName.toLowerCase() === 'select') {
				return 'mousedown';
			}

			return 'click';
		};


		/**
		 * @param {EventTarget|Element} targetElement
		 */
		FastClick.prototype.focus = function(targetElement) {
			var length;

			// Issue #160: on iOS 7, some input elements (e.g. date datetime month) throw a vague TypeError on setSelectionRange. These elements don't have an integer value for the selectionStart and selectionEnd properties, but unfortunately that can't be used for detection because accessing the properties also throws a TypeError. Just check the type instead. Filed as Apple bug #15122724.
			if (deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month') {
				length = targetElement.value.length;
				targetElement.setSelectionRange(length, length);
			} else {
				targetElement.focus();
			}
		};


		/**
		 * Check whether the given target element is a child of a scrollable layer and if so, set a flag on it.
		 *
		 * @param {EventTarget|Element} targetElement
		 */
		FastClick.prototype.updateScrollParent = function(targetElement) {
			var scrollParent, parentElement;

			scrollParent = targetElement.fastClickScrollParent;

			// Attempt to discover whether the target element is contained within a scrollable layer. Re-check if the
			// target element was moved to another parent.
			if (!scrollParent || !scrollParent.contains(targetElement)) {
				parentElement = targetElement;
				do {
					if (parentElement.scrollHeight > parentElement.offsetHeight) {
						scrollParent = parentElement;
						targetElement.fastClickScrollParent = parentElement;
						break;
					}

					parentElement = parentElement.parentElement;
				} while (parentElement);
			}

			// Always update the scroll top tracker if possible.
			if (scrollParent) {
				scrollParent.fastClickLastScrollTop = scrollParent.scrollTop;
			}
		};


		/**
		 * @param {EventTarget} targetElement
		 * @returns {Element|EventTarget}
		 */
		FastClick.prototype.getTargetElementFromEventTarget = function(eventTarget) {

			// On some older browsers (notably Safari on iOS 4.1 - see issue #56) the event target may be a text node.
			if (eventTarget.nodeType === Node.TEXT_NODE) {
				return eventTarget.parentNode;
			}

			return eventTarget;
		};


		/**
		 * On touch start, record the position and scroll offset.
		 *
		 * @param {Event} event
		 * @returns {boolean}
		 */
		FastClick.prototype.onTouchStart = function(event) {
			var targetElement, touch, selection;

			// Ignore multiple touches, otherwise pinch-to-zoom is prevented if both fingers are on the FastClick element (issue #111).
			if (event.targetTouches.length > 1) {
				return true;
			}

			targetElement = this.getTargetElementFromEventTarget(event.target);
			touch = event.targetTouches[0];

			if (deviceIsIOS) {

				// Only trusted events will deselect text on iOS (issue #49)
				selection = window.getSelection();
				if (selection.rangeCount && !selection.isCollapsed) {
					return true;
				}

				if (!deviceIsIOS4) {

					// Weird things happen on iOS when an alert or confirm dialog is opened from a click event callback (issue #23):
					// when the user next taps anywhere else on the page, new touchstart and touchend events are dispatched
					// with the same identifier as the touch event that previously triggered the click that triggered the alert.
					// Sadly, there is an issue on iOS 4 that causes some normal touch events to have the same identifier as an
					// immediately preceeding touch event (issue #52), so this fix is unavailable on that platform.
					// Issue 120: touch.identifier is 0 when Chrome dev tools 'Emulate touch events' is set with an iOS device UA string,
					// which causes all touch events to be ignored. As this block only applies to iOS, and iOS identifiers are always long,
					// random integers, it's safe to to continue if the identifier is 0 here.
					if (touch.identifier && touch.identifier === this.lastTouchIdentifier) {
						event.preventDefault();
						return false;
					}

					this.lastTouchIdentifier = touch.identifier;

					// If the target element is a child of a scrollable layer (using -webkit-overflow-scrolling: touch) and:
					// 1) the user does a fling scroll on the scrollable layer
					// 2) the user stops the fling scroll with another tap
					// then the event.target of the last 'touchend' event will be the element that was under the user's finger
					// when the fling scroll was started, causing FastClick to send a click event to that layer - unless a check
					// is made to ensure that a parent layer was not scrolled before sending a synthetic click (issue #42).
					this.updateScrollParent(targetElement);
				}
			}

			this.trackingClick = true;
			this.trackingClickStart = event.timeStamp;
			this.targetElement = targetElement;

			this.touchStartX = touch.pageX;
			this.touchStartY = touch.pageY;

			// Prevent phantom clicks on fast double-tap (issue #36)
			if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
				event.preventDefault();
			}

			return true;
		};


		/**
		 * Based on a touchmove event object, check whether the touch has moved past a boundary since it started.
		 *
		 * @param {Event} event
		 * @returns {boolean}
		 */
		FastClick.prototype.touchHasMoved = function(event) {
			var touch = event.changedTouches[0], boundary = this.touchBoundary;

			if (Math.abs(touch.pageX - this.touchStartX) > boundary || Math.abs(touch.pageY - this.touchStartY) > boundary) {
				return true;
			}

			return false;
		};


		/**
		 * Update the last position.
		 *
		 * @param {Event} event
		 * @returns {boolean}
		 */
		FastClick.prototype.onTouchMove = function(event) {
			if (!this.trackingClick) {
				return true;
			}

			// If the touch has moved, cancel the click tracking
			if (this.targetElement !== this.getTargetElementFromEventTarget(event.target) || this.touchHasMoved(event)) {
				this.trackingClick = false;
				this.targetElement = null;
			}

			return true;
		};


		/**
		 * Attempt to find the labelled control for the given label element.
		 *
		 * @param {EventTarget|HTMLLabelElement} labelElement
		 * @returns {Element|null}
		 */
		FastClick.prototype.findControl = function(labelElement) {

			// Fast path for newer browsers supporting the HTML5 control attribute
			if (labelElement.control !== undefined) {
				return labelElement.control;
			}

			// All browsers under test that support touch events also support the HTML5 htmlFor attribute
			if (labelElement.htmlFor) {
				return document.getElementById(labelElement.htmlFor);
			}

			// If no for attribute exists, attempt to retrieve the first labellable descendant element
			// the list of which is defined here: http://www.w3.org/TR/html5/forms.html#category-label
			return labelElement.querySelector('button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea');
		};


		/**
		 * On touch end, determine whether to send a click event at once.
		 *
		 * @param {Event} event
		 * @returns {boolean}
		 */
		FastClick.prototype.onTouchEnd = function(event) {
			var forElement, trackingClickStart, targetTagName, scrollParent, touch, targetElement = this.targetElement;

			if (!this.trackingClick) {
				return true;
			}

			// Prevent phantom clicks on fast double-tap (issue #36)
			if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
				this.cancelNextClick = true;
				return true;
			}

			if ((event.timeStamp - this.trackingClickStart) > this.tapTimeout) {
				return true;
			}

			// Reset to prevent wrong click cancel on input (issue #156).
			this.cancelNextClick = false;

			this.lastClickTime = event.timeStamp;

			trackingClickStart = this.trackingClickStart;
			this.trackingClick = false;
			this.trackingClickStart = 0;

			// On some iOS devices, the targetElement supplied with the event is invalid if the layer
			// is performing a transition or scroll, and has to be re-detected manually. Note that
			// for this to function correctly, it must be called *after* the event target is checked!
			// See issue #57; also filed as rdar://13048589 .
			if (deviceIsIOSWithBadTarget) {
				touch = event.changedTouches[0];

				// In certain cases arguments of elementFromPoint can be negative, so prevent setting targetElement to null
				targetElement = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset) || targetElement;
				targetElement.fastClickScrollParent = this.targetElement.fastClickScrollParent;
			}

			targetTagName = targetElement.tagName.toLowerCase();
			if (targetTagName === 'label') {
				forElement = this.findControl(targetElement);
				if (forElement) {
					this.focus(targetElement);
					if (deviceIsAndroid) {
						return false;
					}

					targetElement = forElement;
				}
			} else if (this.needsFocus(targetElement)) {

				// Case 1: If the touch started a while ago (best guess is 100ms based on tests for issue #36) then focus will be triggered anyway. Return early and unset the target element reference so that the subsequent click will be allowed through.
				// Case 2: Without this exception for input elements tapped when the document is contained in an iframe, then any inputted text won't be visible even though the value attribute is updated as the user types (issue #37).
				if ((event.timeStamp - trackingClickStart) > 100 || (deviceIsIOS && window.top !== window && targetTagName === 'input')) {
					this.targetElement = null;
					return false;
				}

				this.focus(targetElement);
				this.sendClick(targetElement, event);

				// Select elements need the event to go through on iOS 4, otherwise the selector menu won't open.
				// Also this breaks opening selects when VoiceOver is active on iOS6, iOS7 (and possibly others)
				if (!deviceIsIOS || targetTagName !== 'select') {
					this.targetElement = null;
					event.preventDefault();
				}

				return false;
			}

			if (deviceIsIOS && !deviceIsIOS4) {

				// Don't send a synthetic click event if the target element is contained within a parent layer that was scrolled
				// and this tap is being used to stop the scrolling (usually initiated by a fling - issue #42).
				scrollParent = targetElement.fastClickScrollParent;
				if (scrollParent && scrollParent.fastClickLastScrollTop !== scrollParent.scrollTop) {
					return true;
				}
			}

			// Prevent the actual click from going though - unless the target node is marked as requiring
			// real clicks or if it is in the whitelist in which case only non-programmatic clicks are permitted.
			if (!this.needsClick(targetElement)) {
				event.preventDefault();
				this.sendClick(targetElement, event);
			}

			return false;
		};


		/**
		 * On touch cancel, stop tracking the click.
		 *
		 * @returns {void}
		 */
		FastClick.prototype.onTouchCancel = function() {
			this.trackingClick = false;
			this.targetElement = null;
		};


		/**
		 * Determine mouse events which should be permitted.
		 *
		 * @param {Event} event
		 * @returns {boolean}
		 */
		FastClick.prototype.onMouse = function(event) {

			// If a target element was never set (because a touch event was never fired) allow the event
			if (!this.targetElement) {
				return true;
			}

			if (event.forwardedTouchEvent) {
				return true;
			}

			// Programmatically generated events targeting a specific element should be permitted
			if (!event.cancelable) {
				return true;
			}

			// Derive and check the target element to see whether the mouse event needs to be permitted;
			// unless explicitly enabled, prevent non-touch click events from triggering actions,
			// to prevent ghost/doubleclicks.
			if (!this.needsClick(this.targetElement) || this.cancelNextClick) {

				// Prevent any user-added listeners declared on FastClick element from being fired.
				if (event.stopImmediatePropagation) {
					event.stopImmediatePropagation();
				} else {

					// Part of the hack for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
					event.propagationStopped = true;
				}

				// Cancel the event
				event.stopPropagation();
				event.preventDefault();

				return false;
			}

			// If the mouse event is permitted, return true for the action to go through.
			return true;
		};


		/**
		 * On actual clicks, determine whether this is a touch-generated click, a click action occurring
		 * naturally after a delay after a touch (which needs to be cancelled to avoid duplication), or
		 * an actual click which should be permitted.
		 *
		 * @param {Event} event
		 * @returns {boolean}
		 */
		FastClick.prototype.onClick = function(event) {
			var permitted;

			// It's possible for another FastClick-like library delivered with third-party code to fire a click event before FastClick does (issue #44). In that case, set the click-tracking flag back to false and return early. This will cause onTouchEnd to return early.
			if (this.trackingClick) {
				this.targetElement = null;
				this.trackingClick = false;
				return true;
			}

			// Very odd behaviour on iOS (issue #18): if a submit element is present inside a form and the user hits enter in the iOS simulator or clicks the Go button on the pop-up OS keyboard the a kind of 'fake' click event will be triggered with the submit-type input element as the target.
			if (event.target.type === 'submit' && event.detail === 0) {
				return true;
			}

			permitted = this.onMouse(event);

			// Only unset targetElement if the click is not permitted. This will ensure that the check for !targetElement in onMouse fails and the browser's click doesn't go through.
			if (!permitted) {
				this.targetElement = null;
			}

			// If clicks are permitted, return true for the action to go through.
			return permitted;
		};


		/**
		 * Remove all FastClick's event listeners.
		 *
		 * @returns {void}
		 */
		FastClick.prototype.destroy = function() {
			var layer = this.layer;

			if (deviceIsAndroid) {
				layer.removeEventListener('mouseover', this.onMouse, true);
				layer.removeEventListener('mousedown', this.onMouse, true);
				layer.removeEventListener('mouseup', this.onMouse, true);
			}

			layer.removeEventListener('click', this.onClick, true);
			layer.removeEventListener('touchstart', this.onTouchStart, false);
			layer.removeEventListener('touchmove', this.onTouchMove, false);
			layer.removeEventListener('touchend', this.onTouchEnd, false);
			layer.removeEventListener('touchcancel', this.onTouchCancel, false);
		};


		/**
		 * Check whether FastClick is needed.
		 *
		 * @param {Element} layer The layer to listen on
		 */
		FastClick.notNeeded = function(layer) {
			var metaViewport;
			var chromeVersion;
			var blackberryVersion;
			var firefoxVersion;

			// Devices that don't support touch don't need FastClick
			if (typeof window.ontouchstart === 'undefined') {
				return true;
			}

			// Chrome version - zero for other browsers
			chromeVersion = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

			if (chromeVersion) {

				if (deviceIsAndroid) {
					metaViewport = document.querySelector('meta[name=viewport]');

					if (metaViewport) {
						// Chrome on Android with user-scalable="no" doesn't need FastClick (issue #89)
						if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
							return true;
						}
						// Chrome 32 and above with width=device-width or less don't need FastClick
						if (chromeVersion > 31 && document.documentElement.scrollWidth <= window.outerWidth) {
							return true;
						}
					}

				// Chrome desktop doesn't need FastClick (issue #15)
				} else {
					return true;
				}
			}

			if (deviceIsBlackBerry10) {
				blackberryVersion = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/);

				// BlackBerry 10.3+ does not require Fastclick library.
				// https://github.com/ftlabs/fastclick/issues/251
				if (blackberryVersion[1] >= 10 && blackberryVersion[2] >= 3) {
					metaViewport = document.querySelector('meta[name=viewport]');

					if (metaViewport) {
						// user-scalable=no eliminates click delay.
						if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
							return true;
						}
						// width=device-width (or less than device-width) eliminates click delay.
						if (document.documentElement.scrollWidth <= window.outerWidth) {
							return true;
						}
					}
				}
			}

			// IE10 with -ms-touch-action: none or manipulation, which disables double-tap-to-zoom (issue #97)
			if (layer.style.msTouchAction === 'none' || layer.style.touchAction === 'manipulation') {
				return true;
			}

			// Firefox version - zero for other browsers
			firefoxVersion = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

			if (firefoxVersion >= 27) {
				// Firefox 27+ does not have tap delay if the content is not zoomable - https://bugzilla.mozilla.org/show_bug.cgi?id=922896

				metaViewport = document.querySelector('meta[name=viewport]');
				if (metaViewport && (metaViewport.content.indexOf('user-scalable=no') !== -1 || document.documentElement.scrollWidth <= window.outerWidth)) {
					return true;
				}
			}

			// IE11: prefixed -ms-touch-action is no longer supported and it's recomended to use non-prefixed version
			// http://msdn.microsoft.com/en-us/library/windows/apps/Hh767313.aspx
			if (layer.style.touchAction === 'none' || layer.style.touchAction === 'manipulation') {
				return true;
			}

			return false;
		};


		/**
		 * Factory method for creating a FastClick object
		 *
		 * @param {Element} layer The layer to listen on
		 * @param {Object} [options={}] The options to override the defaults
		 */
		FastClick.attach = function(layer, options) {
			return new FastClick(layer, options);
		};


		if (true) {

			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
				return FastClick;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (typeof module !== 'undefined' && module.exports) {
			module.exports = FastClick.attach;
			module.exports.FastClick = FastClick;
		} else {
			window.FastClick = FastClick;
		}
	}());


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory(__webpack_require__(7));
		else if(typeof define === 'function' && define.amd)
			define(["jquery"], factory);
		else {
			var a = typeof exports === 'object' ? factory(require("jquery")) : factory(root["jQuery"]);
			for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
		}
	})(window, function(__WEBPACK_EXTERNAL_MODULE_jquery__) {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	/******/
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	/******/
	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId]) {
	/******/ 			return installedModules[moduleId].exports;
	/******/ 		}
	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			i: moduleId,
	/******/ 			l: false,
	/******/ 			exports: {}
	/******/ 		};
	/******/
	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	/******/
	/******/ 		// Flag the module as loaded
	/******/ 		module.l = true;
	/******/
	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}
	/******/
	/******/
	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;
	/******/
	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;
	/******/
	/******/ 	// define getter function for harmony exports
	/******/ 	__webpack_require__.d = function(exports, name, getter) {
	/******/ 		if(!__webpack_require__.o(exports, name)) {
	/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
	/******/ 		}
	/******/ 	};
	/******/
	/******/ 	// define __esModule on exports
	/******/ 	__webpack_require__.r = function(exports) {
	/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
	/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
	/******/ 		}
	/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
	/******/ 	};
	/******/
	/******/ 	// create a fake namespace object
	/******/ 	// mode & 1: value is a module id, require it
	/******/ 	// mode & 2: merge all properties of value into the ns
	/******/ 	// mode & 4: return value when already ns object
	/******/ 	// mode & 8|1: behave like require
	/******/ 	__webpack_require__.t = function(value, mode) {
	/******/ 		if(mode & 1) value = __webpack_require__(value);
	/******/ 		if(mode & 8) return value;
	/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
	/******/ 		var ns = Object.create(null);
	/******/ 		__webpack_require__.r(ns);
	/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
	/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
	/******/ 		return ns;
	/******/ 	};
	/******/
	/******/ 	// getDefaultExport function for compatibility with non-harmony modules
	/******/ 	__webpack_require__.n = function(module) {
	/******/ 		var getter = module && module.__esModule ?
	/******/ 			function getDefault() { return module['default']; } :
	/******/ 			function getModuleExports() { return module; };
	/******/ 		__webpack_require__.d(getter, 'a', getter);
	/******/ 		return getter;
	/******/ 	};
	/******/
	/******/ 	// Object.prototype.hasOwnProperty.call
	/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
	/******/
	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";
	/******/
	/******/
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(__webpack_require__.s = 0);
	/******/ })
	/************************************************************************/
	/******/ ({

	/***/ "./js/entries/foundation.js":
	/*!**********************************!*\
	  !*** ./js/entries/foundation.js ***!
	  \**********************************/
	/*! exports provided: Foundation, CoreUtils, Box, onImagesLoaded, Keyboard, MediaQuery, Motion, Nest, Timer, Touch, Triggers, Abide, Accordion, AccordionMenu, Drilldown, Dropdown, DropdownMenu, Equalizer, Interchange, Magellan, OffCanvas, Orbit, ResponsiveMenu, ResponsiveToggle, Reveal, Slider, SmoothScroll, Sticky, Tabs, Toggler, Tooltip, ResponsiveAccordionTabs, default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {

	"use strict";
	__webpack_require__.r(__webpack_exports__);
	/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
	/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
	/* harmony import */ var _foundation_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../foundation.core */ "./js/foundation.core.js");
	/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Foundation", function() { return _foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"]; });

	/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../foundation.core.utils */ "./js/foundation.core.utils.js");
	/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "CoreUtils", function() { return _foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__; });
	/* harmony import */ var _foundation_util_box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../foundation.util.box */ "./js/foundation.util.box.js");
	/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Box", function() { return _foundation_util_box__WEBPACK_IMPORTED_MODULE_3__["Box"]; });

	/* harmony import */ var _foundation_util_imageLoader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../foundation.util.imageLoader */ "./js/foundation.util.imageLoader.js");
	/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onImagesLoaded", function() { return _foundation_util_imageLoader__WEBPACK_IMPORTED_MODULE_4__["onImagesLoaded"]; });

	/* harmony import */ var _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../foundation.util.keyboard */ "./js/foundation.util.keyboard.js");
	/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Keyboard", function() { return _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_5__["Keyboard"]; });

	/* harmony import */ var _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../foundation.util.mediaQuery */ "./js/foundation.util.mediaQuery.js");
	/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MediaQuery", function() { return _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_6__["MediaQuery"]; });

	/* harmony import */ var _foundation_util_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../foundation.util.motion */ "./js/foundation.util.motion.js");
	/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Motion", function() { return _foundation_util_motion__WEBPACK_IMPORTED_MODULE_7__["Motion"]; });

	/* harmony import */ var _foundation_util_nest__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../foundation.util.nest */ "./js/foundation.util.nest.js");
	/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Nest", function() { return _foundation_util_nest__WEBPACK_IMPORTED_MODULE_8__["Nest"]; });

	/* harmony import */ var _foundation_util_timer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../foundation.util.timer */ "./js/foundation.util.timer.js");
	/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Timer", function() { return _foundation_util_timer__WEBPACK_IMPORTED_MODULE_9__["Timer"]; });

	/* harmony import */ var _foundation_util_touch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../foundation.util.touch */ "./js/foundation.util.touch.js");
	/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Touch", function() { return _foundation_util_touch__WEBPACK_IMPORTED_MODULE_10__["Touch"]; });

	/* harmony import */ var _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../foundation.util.triggers */ "./js/foundation.util.triggers.js");
	/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Triggers", function() { return _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_11__["Triggers"]; });

	/* harmony import */ var _foundation_abide__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../foundation.abide */ "./js/foundation.abide.js");
	/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Abide", function() { return _foundation_abide__WEBPACK_IMPORTED_MODULE_12__["Abide"]; });

	/* harmony import */ var _foundation_accordion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../foundation.accordion */ "./js/foundation.accordion.js");
	/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Accordion", function() { return _foundation_accordion__WEBPACK_IMPORTED_MODULE_13__["Accordion"]; });

	/* harmony import */ var _foundation_accordionMenu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../foundation.accordionMenu */ "./js/foundation.accordionMenu.js");
	/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccordionMenu", function() { return _foundation_accordionMenu__WEBPACK_IMPORTED_MODULE_14__["AccordionMenu"]; });

	/* harmony import */ var _foundation_drilldown__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../foundation.drilldown */ "./js/foundation.drilldown.js");
	/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Drilldown", function() { return _foundation_drilldown__WEBPACK_IMPORTED_MODULE_15__["Drilldown"]; });

	/* harmony import */ var _foundation_dropdown__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../foundation.dropdown */ "./js/foundation.dropdown.js");
	/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Dropdown", function() { return _foundation_dropdown__WEBPACK_IMPORTED_MODULE_16__["Dropdown"]; });

	/* harmony import */ var _foundation_dropdownMenu__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../foundation.dropdownMenu */ "./js/foundation.dropdownMenu.js");
	/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DropdownMenu", function() { return _foundation_dropdownMenu__WEBPACK_IMPORTED_MODULE_17__["DropdownMenu"]; });

	/* harmony import */ var _foundation_equalizer__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../foundation.equalizer */ "./js/foundation.equalizer.js");
	/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Equalizer", function() { return _foundation_equalizer__WEBPACK_IMPORTED_MODULE_18__["Equalizer"]; });

	/* harmony import */ var _foundation_interchange__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../foundation.interchange */ "./js/foundation.interchange.js");
	/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Interchange", function() { return _foundation_interchange__WEBPACK_IMPORTED_MODULE_19__["Interchange"]; });

	/* harmony import */ var _foundation_magellan__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../foundation.magellan */ "./js/foundation.magellan.js");
	/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Magellan", function() { return _foundation_magellan__WEBPACK_IMPORTED_MODULE_20__["Magellan"]; });

	/* harmony import */ var _foundation_offcanvas__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../foundation.offcanvas */ "./js/foundation.offcanvas.js");
	/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OffCanvas", function() { return _foundation_offcanvas__WEBPACK_IMPORTED_MODULE_21__["OffCanvas"]; });

	/* harmony import */ var _foundation_orbit__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../foundation.orbit */ "./js/foundation.orbit.js");
	/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Orbit", function() { return _foundation_orbit__WEBPACK_IMPORTED_MODULE_22__["Orbit"]; });

	/* harmony import */ var _foundation_responsiveMenu__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../foundation.responsiveMenu */ "./js/foundation.responsiveMenu.js");
	/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResponsiveMenu", function() { return _foundation_responsiveMenu__WEBPACK_IMPORTED_MODULE_23__["ResponsiveMenu"]; });

	/* harmony import */ var _foundation_responsiveToggle__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../foundation.responsiveToggle */ "./js/foundation.responsiveToggle.js");
	/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResponsiveToggle", function() { return _foundation_responsiveToggle__WEBPACK_IMPORTED_MODULE_24__["ResponsiveToggle"]; });

	/* harmony import */ var _foundation_reveal__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../foundation.reveal */ "./js/foundation.reveal.js");
	/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Reveal", function() { return _foundation_reveal__WEBPACK_IMPORTED_MODULE_25__["Reveal"]; });

	/* harmony import */ var _foundation_slider__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../foundation.slider */ "./js/foundation.slider.js");
	/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Slider", function() { return _foundation_slider__WEBPACK_IMPORTED_MODULE_26__["Slider"]; });

	/* harmony import */ var _foundation_smoothScroll__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../foundation.smoothScroll */ "./js/foundation.smoothScroll.js");
	/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SmoothScroll", function() { return _foundation_smoothScroll__WEBPACK_IMPORTED_MODULE_27__["SmoothScroll"]; });

	/* harmony import */ var _foundation_sticky__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../foundation.sticky */ "./js/foundation.sticky.js");
	/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Sticky", function() { return _foundation_sticky__WEBPACK_IMPORTED_MODULE_28__["Sticky"]; });

	/* harmony import */ var _foundation_tabs__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../foundation.tabs */ "./js/foundation.tabs.js");
	/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tabs", function() { return _foundation_tabs__WEBPACK_IMPORTED_MODULE_29__["Tabs"]; });

	/* harmony import */ var _foundation_toggler__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../foundation.toggler */ "./js/foundation.toggler.js");
	/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Toggler", function() { return _foundation_toggler__WEBPACK_IMPORTED_MODULE_30__["Toggler"]; });

	/* harmony import */ var _foundation_tooltip__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../foundation.tooltip */ "./js/foundation.tooltip.js");
	/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tooltip", function() { return _foundation_tooltip__WEBPACK_IMPORTED_MODULE_31__["Tooltip"]; });

	/* harmony import */ var _foundation_responsiveAccordionTabs__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../foundation.responsiveAccordionTabs */ "./js/foundation.responsiveAccordionTabs.js");
	/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResponsiveAccordionTabs", function() { return _foundation_responsiveAccordionTabs__WEBPACK_IMPORTED_MODULE_32__["ResponsiveAccordionTabs"]; });


































	_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].addToJquery(jquery__WEBPACK_IMPORTED_MODULE_0___default.a); // Add Foundation Utils to Foundation global namespace for backwards
	// compatibility.

	_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].rtl = _foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__["rtl"];
	_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].GetYoDigits = _foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__["GetYoDigits"];
	_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].transitionend = _foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__["transitionend"];
	_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].RegExpEscape = _foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__["RegExpEscape"];
	_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].onLoad = _foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__["onLoad"];
	_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].Box = _foundation_util_box__WEBPACK_IMPORTED_MODULE_3__["Box"];
	_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].onImagesLoaded = _foundation_util_imageLoader__WEBPACK_IMPORTED_MODULE_4__["onImagesLoaded"];
	_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].Keyboard = _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_5__["Keyboard"];
	_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].MediaQuery = _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_6__["MediaQuery"];
	_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].Motion = _foundation_util_motion__WEBPACK_IMPORTED_MODULE_7__["Motion"];
	_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].Move = _foundation_util_motion__WEBPACK_IMPORTED_MODULE_7__["Move"];
	_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].Nest = _foundation_util_nest__WEBPACK_IMPORTED_MODULE_8__["Nest"];
	_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].Timer = _foundation_util_timer__WEBPACK_IMPORTED_MODULE_9__["Timer"]; // Touch and Triggers previously were almost purely sede effect driven,
	// so no need to add it to Foundation, just init them.

	_foundation_util_touch__WEBPACK_IMPORTED_MODULE_10__["Touch"].init(jquery__WEBPACK_IMPORTED_MODULE_0___default.a);
	_foundation_util_triggers__WEBPACK_IMPORTED_MODULE_11__["Triggers"].init(jquery__WEBPACK_IMPORTED_MODULE_0___default.a, _foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"]);

	_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_6__["MediaQuery"]._init();

	_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].plugin(_foundation_abide__WEBPACK_IMPORTED_MODULE_12__["Abide"], 'Abide');
	_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].plugin(_foundation_accordion__WEBPACK_IMPORTED_MODULE_13__["Accordion"], 'Accordion');
	_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].plugin(_foundation_accordionMenu__WEBPACK_IMPORTED_MODULE_14__["AccordionMenu"], 'AccordionMenu');
	_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].plugin(_foundation_drilldown__WEBPACK_IMPORTED_MODULE_15__["Drilldown"], 'Drilldown');
	_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].plugin(_foundation_dropdown__WEBPACK_IMPORTED_MODULE_16__["Dropdown"], 'Dropdown');
	_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].plugin(_foundation_dropdownMenu__WEBPACK_IMPORTED_MODULE_17__["DropdownMenu"], 'DropdownMenu');
	_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].plugin(_foundation_equalizer__WEBPACK_IMPORTED_MODULE_18__["Equalizer"], 'Equalizer');
	_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].plugin(_foundation_interchange__WEBPACK_IMPORTED_MODULE_19__["Interchange"], 'Interchange');
	_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].plugin(_foundation_magellan__WEBPACK_IMPORTED_MODULE_20__["Magellan"], 'Magellan');
	_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].plugin(_foundation_offcanvas__WEBPACK_IMPORTED_MODULE_21__["OffCanvas"], 'OffCanvas');
	_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].plugin(_foundation_orbit__WEBPACK_IMPORTED_MODULE_22__["Orbit"], 'Orbit');
	_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].plugin(_foundation_responsiveMenu__WEBPACK_IMPORTED_MODULE_23__["ResponsiveMenu"], 'ResponsiveMenu');
	_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].plugin(_foundation_responsiveToggle__WEBPACK_IMPORTED_MODULE_24__["ResponsiveToggle"], 'ResponsiveToggle');
	_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].plugin(_foundation_reveal__WEBPACK_IMPORTED_MODULE_25__["Reveal"], 'Reveal');
	_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].plugin(_foundation_slider__WEBPACK_IMPORTED_MODULE_26__["Slider"], 'Slider');
	_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].plugin(_foundation_smoothScroll__WEBPACK_IMPORTED_MODULE_27__["SmoothScroll"], 'SmoothScroll');
	_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].plugin(_foundation_sticky__WEBPACK_IMPORTED_MODULE_28__["Sticky"], 'Sticky');
	_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].plugin(_foundation_tabs__WEBPACK_IMPORTED_MODULE_29__["Tabs"], 'Tabs');
	_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].plugin(_foundation_toggler__WEBPACK_IMPORTED_MODULE_30__["Toggler"], 'Toggler');
	_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].plugin(_foundation_tooltip__WEBPACK_IMPORTED_MODULE_31__["Tooltip"], 'Tooltip');
	_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].plugin(_foundation_responsiveAccordionTabs__WEBPACK_IMPORTED_MODULE_32__["ResponsiveAccordionTabs"], 'ResponsiveAccordionTabs');

	/* harmony default export */ __webpack_exports__["default"] = (_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"]);

	/***/ }),

	/***/ "./js/foundation.abide.js":
	/*!********************************!*\
	  !*** ./js/foundation.abide.js ***!
	  \********************************/
	/*! exports provided: Abide */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {

	"use strict";
	__webpack_require__.r(__webpack_exports__);
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Abide", function() { return Abide; });
	/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
	/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
	/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.core.plugin */ "./js/foundation.core.plugin.js");
	/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.core.utils */ "./js/foundation.core.utils.js");


	function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

	function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

	function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

	function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

	function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

	function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




	/**
	 * Abide module.
	 * @module foundation.abide
	 */

	var Abide =
	/*#__PURE__*/
	function (_Plugin) {
	  _inherits(Abide, _Plugin);

	  function Abide() {
	    _classCallCheck(this, Abide);

	    return _possibleConstructorReturn(this, _getPrototypeOf(Abide).apply(this, arguments));
	  }

	  _createClass(Abide, [{
	    key: "_setup",

	    /**
	     * Creates a new instance of Abide.
	     * @class
	     * @name Abide
	     * @fires Abide#init
	     * @param {Object} element - jQuery object to add the trigger to.
	     * @param {Object} options - Overrides to the default plugin settings.
	     */
	    value: function _setup(element) {
	      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	      this.$element = element;
	      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend(true, {}, Abide.defaults, this.$element.data(), options);
	      this.className = 'Abide'; // ie9 back compat

	      this._init();
	    }
	    /**
	     * Initializes the Abide plugin and calls functions to get Abide functioning on load.
	     * @private
	     */

	  }, {
	    key: "_init",
	    value: function _init() {
	      var _this2 = this;

	      this.$inputs = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.merge( // Consider as input to validate:
	      this.$element.find('input').not('[type=submit]'), // * all input fields expect submit
	      this.$element.find('textarea, select') // * all textareas and select fields
	      );
	      var $globalErrors = this.$element.find('[data-abide-error]'); // Add a11y attributes to all fields

	      if (this.options.a11yAttributes) {
	        this.$inputs.each(function (i, input) {
	          return _this2.addA11yAttributes(jquery__WEBPACK_IMPORTED_MODULE_0___default()(input));
	        });
	        $globalErrors.each(function (i, error) {
	          return _this2.addGlobalErrorA11yAttributes(jquery__WEBPACK_IMPORTED_MODULE_0___default()(error));
	        });
	      }

	      this._events();
	    }
	    /**
	     * Initializes events for Abide.
	     * @private
	     */

	  }, {
	    key: "_events",
	    value: function _events() {
	      var _this3 = this;

	      this.$element.off('.abide').on('reset.zf.abide', function () {
	        _this3.resetForm();
	      }).on('submit.zf.abide', function () {
	        return _this3.validateForm();
	      });

	      if (this.options.validateOn === 'fieldChange') {
	        this.$inputs.off('change.zf.abide').on('change.zf.abide', function (e) {
	          _this3.validateInput(jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target));
	        });
	      }

	      if (this.options.liveValidate) {
	        this.$inputs.off('input.zf.abide').on('input.zf.abide', function (e) {
	          _this3.validateInput(jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target));
	        });
	      }

	      if (this.options.validateOnBlur) {
	        this.$inputs.off('blur.zf.abide').on('blur.zf.abide', function (e) {
	          _this3.validateInput(jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target));
	        });
	      }
	    }
	    /**
	     * Calls necessary functions to update Abide upon DOM change
	     * @private
	     */

	  }, {
	    key: "_reflow",
	    value: function _reflow() {
	      this._init();
	    }
	    /**
	     * Checks whether or not a form element has the required attribute and if it's checked or not
	     * @param {Object} element - jQuery object to check for required attribute
	     * @returns {Boolean} Boolean value depends on whether or not attribute is checked or empty
	     */

	  }, {
	    key: "requiredCheck",
	    value: function requiredCheck($el) {
	      if (!$el.attr('required')) return true;
	      var isGood = true;

	      switch ($el[0].type) {
	        case 'checkbox':
	          isGood = $el[0].checked;
	          break;

	        case 'select':
	        case 'select-one':
	        case 'select-multiple':
	          var opt = $el.find('option:selected');
	          if (!opt.length || !opt.val()) isGood = false;
	          break;

	        default:
	          if (!$el.val() || !$el.val().length) isGood = false;
	      }

	      return isGood;
	    }
	    /**
	     * Get:
	     * - Based on $el, the first element(s) corresponding to `formErrorSelector` in this order:
	     *   1. The element's direct sibling('s).
	     *   2. The element's parent's children.
	     * - Element(s) with the attribute `[data-form-error-for]` set with the element's id.
	     *
	     * This allows for multiple form errors per input, though if none are found, no form errors will be shown.
	     *
	     * @param {Object} $el - jQuery object to use as reference to find the form error selector.
	     * @returns {Object} jQuery object with the selector.
	     */

	  }, {
	    key: "findFormError",
	    value: function findFormError($el) {
	      var id = $el[0].id;
	      var $error = $el.siblings(this.options.formErrorSelector);

	      if (!$error.length) {
	        $error = $el.parent().find(this.options.formErrorSelector);
	      }

	      if (id) {
	        $error = $error.add(this.$element.find("[data-form-error-for=\"".concat(id, "\"]")));
	      }

	      return $error;
	    }
	    /**
	     * Get the first element in this order:
	     * 2. The <label> with the attribute `[for="someInputId"]`
	     * 3. The `.closest()` <label>
	     *
	     * @param {Object} $el - jQuery object to check for required attribute
	     * @returns {Boolean} Boolean value depends on whether or not attribute is checked or empty
	     */

	  }, {
	    key: "findLabel",
	    value: function findLabel($el) {
	      var id = $el[0].id;
	      var $label = this.$element.find("label[for=\"".concat(id, "\"]"));

	      if (!$label.length) {
	        return $el.closest('label');
	      }

	      return $label;
	    }
	    /**
	     * Get the set of labels associated with a set of radio els in this order
	     * 2. The <label> with the attribute `[for="someInputId"]`
	     * 3. The `.closest()` <label>
	     *
	     * @param {Object} $el - jQuery object to check for required attribute
	     * @returns {Boolean} Boolean value depends on whether or not attribute is checked or empty
	     */

	  }, {
	    key: "findRadioLabels",
	    value: function findRadioLabels($els) {
	      var _this4 = this;

	      var labels = $els.map(function (i, el) {
	        var id = el.id;

	        var $label = _this4.$element.find("label[for=\"".concat(id, "\"]"));

	        if (!$label.length) {
	          $label = jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).closest('label');
	        }

	        return $label[0];
	      });
	      return jquery__WEBPACK_IMPORTED_MODULE_0___default()(labels);
	    }
	    /**
	     * Adds the CSS error class as specified by the Abide settings to the label, input, and the form
	     * @param {Object} $el - jQuery object to add the class to
	     */

	  }, {
	    key: "addErrorClasses",
	    value: function addErrorClasses($el) {
	      var $label = this.findLabel($el);
	      var $formError = this.findFormError($el);

	      if ($label.length) {
	        $label.addClass(this.options.labelErrorClass);
	      }

	      if ($formError.length) {
	        $formError.addClass(this.options.formErrorClass);
	      }

	      $el.addClass(this.options.inputErrorClass).attr({
	        'data-invalid': '',
	        'aria-invalid': true
	      });
	    }
	    /**
	     * Adds [for] and [role=alert] attributes to all form error targetting $el,
	     * and [aria-describedby] attribute to $el toward the first form error.
	     * @param {Object} $el - jQuery object
	     */

	  }, {
	    key: "addA11yAttributes",
	    value: function addA11yAttributes($el) {
	      var $errors = this.findFormError($el);
	      var $labels = $errors.filter('label');
	      var $error = $errors.first();
	      if (!$errors.length) return; // Set [aria-describedby] on the input toward the first form error if it is not set

	      if (typeof $el.attr('aria-describedby') === 'undefined') {
	        // Get the first error ID or create one
	        var errorId = $error.attr('id');

	        if (typeof errorId === 'undefined') {
	          errorId = Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__["GetYoDigits"])(6, 'abide-error');
	          $error.attr('id', errorId);
	        }

	        ;
	        $el.attr('aria-describedby', errorId);
	      }

	      if ($labels.filter('[for]').length < $labels.length) {
	        // Get the input ID or create one
	        var elemId = $el.attr('id');

	        if (typeof elemId === 'undefined') {
	          elemId = Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__["GetYoDigits"])(6, 'abide-input');
	          $el.attr('id', elemId);
	        }

	        ; // For each label targeting $el, set [for] if it is not set.

	        $labels.each(function (i, label) {
	          var $label = jquery__WEBPACK_IMPORTED_MODULE_0___default()(label);
	          if (typeof $label.attr('for') === 'undefined') $label.attr('for', elemId);
	        });
	      } // For each error targeting $el, set [role=alert] if it is not set.


	      $errors.each(function (i, label) {
	        var $label = jquery__WEBPACK_IMPORTED_MODULE_0___default()(label);
	        if (typeof $label.attr('role') === 'undefined') $label.attr('role', 'alert');
	      }).end();
	    }
	    /**
	     * Adds [aria-live] attribute to the given global form error $el.
	     * @param {Object} $el - jQuery object to add the attribute to
	     */

	  }, {
	    key: "addGlobalErrorA11yAttributes",
	    value: function addGlobalErrorA11yAttributes($el) {
	      if (typeof $el.attr('aria-live') === 'undefined') $el.attr('aria-live', this.options.a11yErrorLevel);
	    }
	    /**
	     * Remove CSS error classes etc from an entire radio button group
	     * @param {String} groupName - A string that specifies the name of a radio button group
	     *
	     */

	  }, {
	    key: "removeRadioErrorClasses",
	    value: function removeRadioErrorClasses(groupName) {
	      var $els = this.$element.find(":radio[name=\"".concat(groupName, "\"]"));
	      var $labels = this.findRadioLabels($els);
	      var $formErrors = this.findFormError($els);

	      if ($labels.length) {
	        $labels.removeClass(this.options.labelErrorClass);
	      }

	      if ($formErrors.length) {
	        $formErrors.removeClass(this.options.formErrorClass);
	      }

	      $els.removeClass(this.options.inputErrorClass).attr({
	        'data-invalid': null,
	        'aria-invalid': null
	      });
	    }
	    /**
	     * Removes CSS error class as specified by the Abide settings from the label, input, and the form
	     * @param {Object} $el - jQuery object to remove the class from
	     */

	  }, {
	    key: "removeErrorClasses",
	    value: function removeErrorClasses($el) {
	      // radios need to clear all of the els
	      if ($el[0].type == 'radio') {
	        return this.removeRadioErrorClasses($el.attr('name'));
	      }

	      var $label = this.findLabel($el);
	      var $formError = this.findFormError($el);

	      if ($label.length) {
	        $label.removeClass(this.options.labelErrorClass);
	      }

	      if ($formError.length) {
	        $formError.removeClass(this.options.formErrorClass);
	      }

	      $el.removeClass(this.options.inputErrorClass).attr({
	        'data-invalid': null,
	        'aria-invalid': null
	      });
	    }
	    /**
	     * Goes through a form to find inputs and proceeds to validate them in ways specific to their type.
	     * Ignores inputs with data-abide-ignore, type="hidden" or disabled attributes set
	     * @fires Abide#invalid
	     * @fires Abide#valid
	     * @param {Object} element - jQuery object to validate, should be an HTML input
	     * @returns {Boolean} goodToGo - If the input is valid or not.
	     */

	  }, {
	    key: "validateInput",
	    value: function validateInput($el) {
	      var clearRequire = this.requiredCheck($el),
	          validated = false,
	          customValidator = true,
	          validator = $el.attr('data-validator'),
	          equalTo = true; // don't validate ignored inputs or hidden inputs or disabled inputs

	      if ($el.is('[data-abide-ignore]') || $el.is('[type="hidden"]') || $el.is('[disabled]')) {
	        return true;
	      }

	      switch ($el[0].type) {
	        case 'radio':
	          validated = this.validateRadio($el.attr('name'));
	          break;

	        case 'checkbox':
	          validated = clearRequire;
	          break;

	        case 'select':
	        case 'select-one':
	        case 'select-multiple':
	          validated = clearRequire;
	          break;

	        default:
	          validated = this.validateText($el);
	      }

	      if (validator) {
	        customValidator = this.matchValidation($el, validator, $el.attr('required'));
	      }

	      if ($el.attr('data-equalto')) {
	        equalTo = this.options.validators.equalTo($el);
	      }

	      var goodToGo = [clearRequire, validated, customValidator, equalTo].indexOf(false) === -1;
	      var message = (goodToGo ? 'valid' : 'invalid') + '.zf.abide';

	      if (goodToGo) {
	        // Re-validate inputs that depend on this one with equalto
	        var dependentElements = this.$element.find("[data-equalto=\"".concat($el.attr('id'), "\"]"));

	        if (dependentElements.length) {
	          var _this = this;

	          dependentElements.each(function () {
	            if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).val()) {
	              _this.validateInput(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));
	            }
	          });
	        }
	      }

	      this[goodToGo ? 'removeErrorClasses' : 'addErrorClasses']($el);
	      /**
	       * Fires when the input is done checking for validation. Event trigger is either `valid.zf.abide` or `invalid.zf.abide`
	       * Trigger includes the DOM element of the input.
	       * @event Abide#valid
	       * @event Abide#invalid
	       */

	      $el.trigger(message, [$el]);
	      return goodToGo;
	    }
	    /**
	     * Goes through a form and if there are any invalid inputs, it will display the form error element
	     * @returns {Boolean} noError - true if no errors were detected...
	     * @fires Abide#formvalid
	     * @fires Abide#forminvalid
	     */

	  }, {
	    key: "validateForm",
	    value: function validateForm() {
	      var _this5 = this;

	      var acc = [];

	      var _this = this;

	      this.$inputs.each(function () {
	        acc.push(_this.validateInput(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)));
	      });
	      var noError = acc.indexOf(false) === -1;
	      this.$element.find('[data-abide-error]').each(function (i, elem) {
	        var $elem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(elem); // Ensure a11y attributes are set

	        if (_this5.options.a11yAttributes) _this5.addGlobalErrorA11yAttributes($elem); // Show or hide the error

	        $elem.css('display', noError ? 'none' : 'block');
	      });
	      /**
	       * Fires when the form is finished validating. Event trigger is either `formvalid.zf.abide` or `forminvalid.zf.abide`.
	       * Trigger includes the element of the form.
	       * @event Abide#formvalid
	       * @event Abide#forminvalid
	       */

	      this.$element.trigger((noError ? 'formvalid' : 'forminvalid') + '.zf.abide', [this.$element]);
	      return noError;
	    }
	    /**
	     * Determines whether or a not a text input is valid based on the pattern specified in the attribute. If no matching pattern is found, returns true.
	     * @param {Object} $el - jQuery object to validate, should be a text input HTML element
	     * @param {String} pattern - string value of one of the RegEx patterns in Abide.options.patterns
	     * @returns {Boolean} Boolean value depends on whether or not the input value matches the pattern specified
	     */

	  }, {
	    key: "validateText",
	    value: function validateText($el, pattern) {
	      // A pattern can be passed to this function, or it will be infered from the input's "pattern" attribute, or it's "type" attribute
	      pattern = pattern || $el.attr('pattern') || $el.attr('type');
	      var inputText = $el.val();
	      var valid = false;

	      if (inputText.length) {
	        // If the pattern attribute on the element is in Abide's list of patterns, then test that regexp
	        if (this.options.patterns.hasOwnProperty(pattern)) {
	          valid = this.options.patterns[pattern].test(inputText);
	        } // If the pattern name isn't also the type attribute of the field, then test it as a regexp
	        else if (pattern !== $el.attr('type')) {
	            valid = new RegExp(pattern).test(inputText);
	          } else {
	            valid = true;
	          }
	      } // An empty field is valid if it's not required
	      else if (!$el.prop('required')) {
	          valid = true;
	        }

	      return valid;
	    }
	    /**
	     * Determines whether or a not a radio input is valid based on whether or not it is required and selected. Although the function targets a single `<input>`, it validates by checking the `required` and `checked` properties of all radio buttons in its group.
	     * @param {String} groupName - A string that specifies the name of a radio button group
	     * @returns {Boolean} Boolean value depends on whether or not at least one radio input has been selected (if it's required)
	     */

	  }, {
	    key: "validateRadio",
	    value: function validateRadio(groupName) {
	      // If at least one radio in the group has the `required` attribute, the group is considered required
	      // Per W3C spec, all radio buttons in a group should have `required`, but we're being nice
	      var $group = this.$element.find(":radio[name=\"".concat(groupName, "\"]"));
	      var valid = false,
	          required = false; // For the group to be required, at least one radio needs to be required

	      $group.each(function (i, e) {
	        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(e).attr('required')) {
	          required = true;
	        }
	      });
	      if (!required) valid = true;

	      if (!valid) {
	        // For the group to be valid, at least one radio needs to be checked
	        $group.each(function (i, e) {
	          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(e).prop('checked')) {
	            valid = true;
	          }
	        });
	      }

	      ;
	      return valid;
	    }
	    /**
	     * Determines if a selected input passes a custom validation function. Multiple validations can be used, if passed to the element with `data-validator="foo bar baz"` in a space separated listed.
	     * @param {Object} $el - jQuery input element.
	     * @param {String} validators - a string of function names matching functions in the Abide.options.validators object.
	     * @param {Boolean} required - self explanatory?
	     * @returns {Boolean} - true if validations passed.
	     */

	  }, {
	    key: "matchValidation",
	    value: function matchValidation($el, validators, required) {
	      var _this6 = this;

	      required = required ? true : false;
	      var clear = validators.split(' ').map(function (v) {
	        return _this6.options.validators[v]($el, required, $el.parent());
	      });
	      return clear.indexOf(false) === -1;
	    }
	    /**
	     * Resets form inputs and styles
	     * @fires Abide#formreset
	     */

	  }, {
	    key: "resetForm",
	    value: function resetForm() {
	      var $form = this.$element,
	          opts = this.options;
	      jquery__WEBPACK_IMPORTED_MODULE_0___default()(".".concat(opts.labelErrorClass), $form).not('small').removeClass(opts.labelErrorClass);
	      jquery__WEBPACK_IMPORTED_MODULE_0___default()(".".concat(opts.inputErrorClass), $form).not('small').removeClass(opts.inputErrorClass);
	      jquery__WEBPACK_IMPORTED_MODULE_0___default()("".concat(opts.formErrorSelector, ".").concat(opts.formErrorClass)).removeClass(opts.formErrorClass);
	      $form.find('[data-abide-error]').css('display', 'none');
	      jquery__WEBPACK_IMPORTED_MODULE_0___default()(':input', $form).not(':button, :submit, :reset, :hidden, :radio, :checkbox, [data-abide-ignore]').val('').attr({
	        'data-invalid': null,
	        'aria-invalid': null
	      });
	      jquery__WEBPACK_IMPORTED_MODULE_0___default()(':input:radio', $form).not('[data-abide-ignore]').prop('checked', false).attr({
	        'data-invalid': null,
	        'aria-invalid': null
	      });
	      jquery__WEBPACK_IMPORTED_MODULE_0___default()(':input:checkbox', $form).not('[data-abide-ignore]').prop('checked', false).attr({
	        'data-invalid': null,
	        'aria-invalid': null
	      });
	      /**
	       * Fires when the form has been reset.
	       * @event Abide#formreset
	       */

	      $form.trigger('formreset.zf.abide', [$form]);
	    }
	    /**
	     * Destroys an instance of Abide.
	     * Removes error styles and classes from elements, without resetting their values.
	     */

	  }, {
	    key: "_destroy",
	    value: function _destroy() {
	      var _this = this;

	      this.$element.off('.abide').find('[data-abide-error]').css('display', 'none');
	      this.$inputs.off('.abide').each(function () {
	        _this.removeErrorClasses(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));
	      });
	    }
	  }]);

	  return Abide;
	}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__["Plugin"]);
	/**
	 * Default settings for plugin
	 */


	Abide.defaults = {
	  /**
	   * The default event to validate inputs. Checkboxes and radios validate immediately.
	   * Remove or change this value for manual validation.
	   * @option
	   * @type {?string}
	   * @default 'fieldChange'
	   */
	  validateOn: 'fieldChange',

	  /**
	   * Class to be applied to input labels on failed validation.
	   * @option
	   * @type {string}
	   * @default 'is-invalid-label'
	   */
	  labelErrorClass: 'is-invalid-label',

	  /**
	   * Class to be applied to inputs on failed validation.
	   * @option
	   * @type {string}
	   * @default 'is-invalid-input'
	   */
	  inputErrorClass: 'is-invalid-input',

	  /**
	   * Class selector to use to target Form Errors for show/hide.
	   * @option
	   * @type {string}
	   * @default '.form-error'
	   */
	  formErrorSelector: '.form-error',

	  /**
	   * Class added to Form Errors on failed validation.
	   * @option
	   * @type {string}
	   * @default 'is-visible'
	   */
	  formErrorClass: 'is-visible',

	  /**
	   * If true, automatically insert when possible:
	   * - `[aria-describedby]` on fields
	   * - `[role=alert]` on form errors and `[for]` on form error labels
	   * - `[aria-live]` on global errors `[data-abide-error]` (see option `a11yErrorLevel`).
	   * @option
	   * @type {boolean}
	   * @default true
	   */
	  a11yAttributes: true,

	  /**
	   * [aria-live] attribute value to be applied on global errors `[data-abide-error]`.
	   * Options are: 'assertive', 'polite' and 'off'/null
	   * @option
	   * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions
	   * @type {string}
	   * @default 'assertive'
	   */
	  a11yErrorLevel: 'assertive',

	  /**
	   * Set to true to validate text inputs on any value change.
	   * @option
	   * @type {boolean}
	   * @default false
	   */
	  liveValidate: false,

	  /**
	   * Set to true to validate inputs on blur.
	   * @option
	   * @type {boolean}
	   * @default false
	   */
	  validateOnBlur: false,
	  patterns: {
	    alpha: /^[a-zA-Z]+$/,
	    alpha_numeric: /^[a-zA-Z0-9]+$/,
	    integer: /^[-+]?\d+$/,
	    number: /^[-+]?\d*(?:[\.\,]\d+)?$/,
	    // amex, visa, diners
	    card: /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|(?:222[1-9]|2[3-6][0-9]{2}|27[0-1][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
	    cvv: /^([0-9]){3,4}$/,
	    // http://www.whatwg.org/specs/web-apps/current-work/multipage/states-of-the-type-attribute.html#valid-e-mail-address
	    email: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/,
	    // From CommonRegexJS (@talyssonoc)
	    // https://github.com/talyssonoc/CommonRegexJS/blob/e2901b9f57222bc14069dc8f0598d5f412555411/lib/commonregex.js#L76
	    // For more restrictive URL Regexs, see https://mathiasbynens.be/demo/url-regex.
	    url: /^((?:(https?|ftps?|file|ssh|sftp):\/\/|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\((?:[^\s()<>]+|(?:\([^\s()<>]+\)))*\))+(?:\((?:[^\s()<>]+|(?:\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:\'".,<>?\xab\xbb\u201c\u201d\u2018\u2019]))$/,
	    // abc.de
	    domain: /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,8}$/,
	    datetime: /^([0-2][0-9]{3})\-([0-1][0-9])\-([0-3][0-9])T([0-5][0-9])\:([0-5][0-9])\:([0-5][0-9])(Z|([\-\+]([0-1][0-9])\:00))$/,
	    // YYYY-MM-DD
	    date: /(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))$/,
	    // HH:MM:SS
	    time: /^(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){2}$/,
	    dateISO: /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/,
	    // MM/DD/YYYY
	    month_day_year: /^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.]\d{4}$/,
	    // DD/MM/YYYY
	    day_month_year: /^(0[1-9]|[12][0-9]|3[01])[- \/.](0[1-9]|1[012])[- \/.]\d{4}$/,
	    // #FFF or #FFFFFF
	    color: /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/,
	    // Domain || URL
	    website: {
	      test: function test(text) {
	        return Abide.defaults.patterns['domain'].test(text) || Abide.defaults.patterns['url'].test(text);
	      }
	    }
	  },

	  /**
	   * Optional validation functions to be used. `equalTo` being the only default included function.
	   * Functions should return only a boolean if the input is valid or not. Functions are given the following arguments:
	   * el : The jQuery element to validate.
	   * required : Boolean value of the required attribute be present or not.
	   * parent : The direct parent of the input.
	   * @option
	   */
	  validators: {
	    equalTo: function equalTo(el, required, parent) {
	      return jquery__WEBPACK_IMPORTED_MODULE_0___default()("#".concat(el.attr('data-equalto'))).val() === el.val();
	    }
	  }
	};


	/***/ }),

	/***/ "./js/foundation.accordion.js":
	/*!************************************!*\
	  !*** ./js/foundation.accordion.js ***!
	  \************************************/
	/*! exports provided: Accordion */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {

	"use strict";
	__webpack_require__.r(__webpack_exports__);
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Accordion", function() { return Accordion; });
	/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
	/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
	/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.core.utils */ "./js/foundation.core.utils.js");
	/* harmony import */ var _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.util.keyboard */ "./js/foundation.util.keyboard.js");
	/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.core.plugin */ "./js/foundation.core.plugin.js");


	function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

	function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

	function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

	function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

	function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

	function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





	/**
	 * Accordion module.
	 * @module foundation.accordion
	 * @requires foundation.util.keyboard
	 */

	var Accordion =
	/*#__PURE__*/
	function (_Plugin) {
	  _inherits(Accordion, _Plugin);

	  function Accordion() {
	    _classCallCheck(this, Accordion);

	    return _possibleConstructorReturn(this, _getPrototypeOf(Accordion).apply(this, arguments));
	  }

	  _createClass(Accordion, [{
	    key: "_setup",

	    /**
	     * Creates a new instance of an accordion.
	     * @class
	     * @name Accordion
	     * @fires Accordion#init
	     * @param {jQuery} element - jQuery object to make into an accordion.
	     * @param {Object} options - a plain object with settings to override the default options.
	     */
	    value: function _setup(element, options) {
	      this.$element = element;
	      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, Accordion.defaults, this.$element.data(), options);
	      this.className = 'Accordion'; // ie9 back compat

	      this._init();

	      _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2__["Keyboard"].register('Accordion', {
	        'ENTER': 'toggle',
	        'SPACE': 'toggle',
	        'ARROW_DOWN': 'next',
	        'ARROW_UP': 'previous'
	      });
	    }
	    /**
	     * Initializes the accordion by animating the preset active pane(s).
	     * @private
	     */

	  }, {
	    key: "_init",
	    value: function _init() {
	      var _this2 = this;

	      this._isInitializing = true;
	      this.$element.attr('role', 'tablist');
	      this.$tabs = this.$element.children('[data-accordion-item]');
	      this.$tabs.each(function (idx, el) {
	        var $el = jquery__WEBPACK_IMPORTED_MODULE_0___default()(el),
	            $content = $el.children('[data-tab-content]'),
	            id = $content[0].id || Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__["GetYoDigits"])(6, 'accordion'),
	            linkId = el.id ? "".concat(el.id, "-label") : "".concat(id, "-label");
	        $el.find('a:first').attr({
	          'aria-controls': id,
	          'role': 'tab',
	          'id': linkId,
	          'aria-expanded': false,
	          'aria-selected': false
	        });
	        $content.attr({
	          'role': 'tabpanel',
	          'aria-labelledby': linkId,
	          'aria-hidden': true,
	          'id': id
	        });
	      });
	      var $initActive = this.$element.find('.is-active').children('[data-tab-content]');

	      if ($initActive.length) {
	        // Save up the initial hash to return to it later when going back in history
	        this._initialAnchor = $initActive.prev('a').attr('href');

	        this._openSingleTab($initActive);
	      }

	      this._checkDeepLink = function () {
	        var anchor = window.location.hash;

	        if (!anchor.length) {
	          // If we are still initializing and there is no anchor, then there is nothing to do
	          if (_this2._isInitializing) return; // Otherwise, move to the initial anchor

	          if (_this2._initialAnchor) anchor = _this2._initialAnchor;
	        }

	        var $anchor = anchor && jquery__WEBPACK_IMPORTED_MODULE_0___default()(anchor);

	        var $link = anchor && _this2.$element.find("[href$=\"".concat(anchor, "\"]")); // Whether the anchor element that has been found is part of this element


	        var isOwnAnchor = !!($anchor.length && $link.length); // If there is an anchor for the hash, open it (if not already active)

	        if ($anchor && $link && $link.length) {
	          if (!$link.parent('[data-accordion-item]').hasClass('is-active')) {
	            _this2._openSingleTab($anchor);
	          }

	          ;
	        } // Otherwise, close everything
	        else {
	            _this2._closeAllTabs();
	          }

	        if (isOwnAnchor) {
	          // Roll up a little to show the titles
	          if (_this2.options.deepLinkSmudge) {
	            Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__["onLoad"])(jquery__WEBPACK_IMPORTED_MODULE_0___default()(window), function () {
	              var offset = _this2.$element.offset();

	              jquery__WEBPACK_IMPORTED_MODULE_0___default()('html, body').animate({
	                scrollTop: offset.top
	              }, _this2.options.deepLinkSmudgeDelay);
	            });
	          }
	          /**
	           * Fires when the plugin has deeplinked at pageload
	           * @event Accordion#deeplink
	           */


	          _this2.$element.trigger('deeplink.zf.accordion', [$link, $anchor]);
	        }
	      }; //use browser to open a tab, if it exists in this tabset


	      if (this.options.deepLink) {
	        this._checkDeepLink();
	      }

	      this._events();

	      this._isInitializing = false;
	    }
	    /**
	     * Adds event handlers for items within the accordion.
	     * @private
	     */

	  }, {
	    key: "_events",
	    value: function _events() {
	      var _this = this;

	      this.$tabs.each(function () {
	        var $elem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
	        var $tabContent = $elem.children('[data-tab-content]');

	        if ($tabContent.length) {
	          $elem.children('a').off('click.zf.accordion keydown.zf.accordion').on('click.zf.accordion', function (e) {
	            e.preventDefault();

	            _this.toggle($tabContent);
	          }).on('keydown.zf.accordion', function (e) {
	            _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2__["Keyboard"].handleKey(e, 'Accordion', {
	              toggle: function toggle() {
	                _this.toggle($tabContent);
	              },
	              next: function next() {
	                var $a = $elem.next().find('a').focus();

	                if (!_this.options.multiExpand) {
	                  $a.trigger('click.zf.accordion');
	                }
	              },
	              previous: function previous() {
	                var $a = $elem.prev().find('a').focus();

	                if (!_this.options.multiExpand) {
	                  $a.trigger('click.zf.accordion');
	                }
	              },
	              handled: function handled() {
	                e.preventDefault();
	                e.stopPropagation();
	              }
	            });
	          });
	        }
	      });

	      if (this.options.deepLink) {
	        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('hashchange', this._checkDeepLink);
	      }
	    }
	    /**
	     * Toggles the selected content pane's open/close state.
	     * @param {jQuery} $target - jQuery object of the pane to toggle (`.accordion-content`).
	     * @function
	     */

	  }, {
	    key: "toggle",
	    value: function toggle($target) {
	      if ($target.closest('[data-accordion]').is('[disabled]')) {
	        console.info('Cannot toggle an accordion that is disabled.');
	        return;
	      }

	      if ($target.parent().hasClass('is-active')) {
	        this.up($target);
	      } else {
	        this.down($target);
	      } //either replace or update browser history


	      if (this.options.deepLink) {
	        var anchor = $target.prev('a').attr('href');

	        if (this.options.updateHistory) {
	          history.pushState({}, '', anchor);
	        } else {
	          history.replaceState({}, '', anchor);
	        }
	      }
	    }
	    /**
	     * Opens the accordion tab defined by `$target`.
	     * @param {jQuery} $target - Accordion pane to open (`.accordion-content`).
	     * @fires Accordion#down
	     * @function
	     */

	  }, {
	    key: "down",
	    value: function down($target) {
	      if ($target.closest('[data-accordion]').is('[disabled]')) {
	        console.info('Cannot call down on an accordion that is disabled.');
	        return;
	      }

	      if (this.options.multiExpand) this._openTab($target);else this._openSingleTab($target);
	    }
	    /**
	     * Closes the tab defined by `$target`.
	     * It may be ignored if the Accordion options don't allow it.
	     *
	     * @param {jQuery} $target - Accordion tab to close (`.accordion-content`).
	     * @fires Accordion#up
	     * @function
	     */

	  }, {
	    key: "up",
	    value: function up($target) {
	      if (this.$element.is('[disabled]')) {
	        console.info('Cannot call up on an accordion that is disabled.');
	        return;
	      } // Don't close the item if it is already closed


	      var $targetItem = $target.parent();
	      if (!$targetItem.hasClass('is-active')) return; // Don't close the item if there is no other active item (unless with `allowAllClosed`)

	      var $othersItems = $targetItem.siblings();
	      if (!this.options.allowAllClosed && !$othersItems.hasClass('is-active')) return;

	      this._closeTab($target);
	    }
	    /**
	     * Make the tab defined by `$target` the only opened tab, closing all others tabs.
	     * @param {jQuery} $target - Accordion tab to open (`.accordion-content`).
	     * @function
	     * @private
	     */

	  }, {
	    key: "_openSingleTab",
	    value: function _openSingleTab($target) {
	      // Close all the others active tabs.
	      var $activeContents = this.$element.children('.is-active').children('[data-tab-content]');

	      if ($activeContents.length) {
	        this._closeTab($activeContents.not($target));
	      } // Then open the target.


	      this._openTab($target);
	    }
	    /**
	     * Opens the tab defined by `$target`.
	     * @param {jQuery} $target - Accordion tab to open (`.accordion-content`).
	     * @fires Accordion#down
	     * @function
	     * @private
	     */

	  }, {
	    key: "_openTab",
	    value: function _openTab($target) {
	      var _this3 = this;

	      var $targetItem = $target.parent();
	      var targetContentId = $target.attr('aria-labelledby');
	      $target.attr('aria-hidden', false);
	      $targetItem.addClass('is-active');
	      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#".concat(targetContentId)).attr({
	        'aria-expanded': true,
	        'aria-selected': true
	      });
	      $target.slideDown(this.options.slideSpeed, function () {
	        /**
	         * Fires when the tab is done opening.
	         * @event Accordion#down
	         */
	        _this3.$element.trigger('down.zf.accordion', [$target]);
	      });
	    }
	    /**
	     * Closes the tab defined by `$target`.
	     * @param {jQuery} $target - Accordion tab to close (`.accordion-content`).
	     * @fires Accordion#up
	     * @function
	     * @private
	     */

	  }, {
	    key: "_closeTab",
	    value: function _closeTab($target) {
	      var _this4 = this;

	      var $targetItem = $target.parent();
	      var targetContentId = $target.attr('aria-labelledby');
	      $target.attr('aria-hidden', true);
	      $targetItem.removeClass('is-active');
	      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#".concat(targetContentId)).attr({
	        'aria-expanded': false,
	        'aria-selected': false
	      });
	      $target.slideUp(this.options.slideSpeed, function () {
	        /**
	         * Fires when the tab is done collapsing up.
	         * @event Accordion#up
	         */
	        _this4.$element.trigger('up.zf.accordion', [$target]);
	      });
	    }
	    /**
	     * Closes all active tabs
	     * @fires Accordion#up
	     * @function
	     * @private
	     */

	  }, {
	    key: "_closeAllTabs",
	    value: function _closeAllTabs() {
	      var $activeTabs = this.$element.children('.is-active').children('[data-tab-content]');

	      if ($activeTabs.length) {
	        this._closeTab($activeTabs);
	      }
	    }
	    /**
	     * Destroys an instance of an accordion.
	     * @fires Accordion#destroyed
	     * @function
	     */

	  }, {
	    key: "_destroy",
	    value: function _destroy() {
	      this.$element.find('[data-tab-content]').stop(true).slideUp(0).css('display', '');
	      this.$element.find('a').off('.zf.accordion');

	      if (this.options.deepLink) {
	        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off('hashchange', this._checkDeepLink);
	      }
	    }
	  }]);

	  return Accordion;
	}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_3__["Plugin"]);

	Accordion.defaults = {
	  /**
	   * Amount of time to animate the opening of an accordion pane.
	   * @option
	   * @type {number}
	   * @default 250
	   */
	  slideSpeed: 250,

	  /**
	   * Allow the accordion to have multiple open panes.
	   * @option
	   * @type {boolean}
	   * @default false
	   */
	  multiExpand: false,

	  /**
	   * Allow the accordion to close all panes.
	   * @option
	   * @type {boolean}
	   * @default false
	   */
	  allowAllClosed: false,

	  /**
	   * Link the location hash to the open pane.
	   * Set the location hash when the opened pane changes, and open and scroll to the corresponding pane when the location changes.
	   * @option
	   * @type {boolean}
	   * @default false
	   */
	  deepLink: false,

	  /**
	   * If `deepLink` is enabled, adjust the deep link scroll to make sure the top of the accordion panel is visible
	   * @option
	   * @type {boolean}
	   * @default false
	   */
	  deepLinkSmudge: false,

	  /**
	   * If `deepLinkSmudge` is enabled, animation time (ms) for the deep link adjustment
	   * @option
	   * @type {number}
	   * @default 300
	   */
	  deepLinkSmudgeDelay: 300,

	  /**
	   * If `deepLink` is enabled, update the browser history with the open accordion
	   * @option
	   * @type {boolean}
	   * @default false
	   */
	  updateHistory: false
	};


	/***/ }),

	/***/ "./js/foundation.accordionMenu.js":
	/*!****************************************!*\
	  !*** ./js/foundation.accordionMenu.js ***!
	  \****************************************/
	/*! exports provided: AccordionMenu */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {

	"use strict";
	__webpack_require__.r(__webpack_exports__);
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionMenu", function() { return AccordionMenu; });
	/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
	/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
	/* harmony import */ var _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.util.keyboard */ "./js/foundation.util.keyboard.js");
	/* harmony import */ var _foundation_util_nest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.util.nest */ "./js/foundation.util.nest.js");
	/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.core.utils */ "./js/foundation.core.utils.js");
	/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation.core.plugin */ "./js/foundation.core.plugin.js");


	function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

	function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

	function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

	function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

	function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

	function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






	/**
	 * AccordionMenu module.
	 * @module foundation.accordionMenu
	 * @requires foundation.util.keyboard
	 * @requires foundation.util.nest
	 */

	var AccordionMenu =
	/*#__PURE__*/
	function (_Plugin) {
	  _inherits(AccordionMenu, _Plugin);

	  function AccordionMenu() {
	    _classCallCheck(this, AccordionMenu);

	    return _possibleConstructorReturn(this, _getPrototypeOf(AccordionMenu).apply(this, arguments));
	  }

	  _createClass(AccordionMenu, [{
	    key: "_setup",

	    /**
	     * Creates a new instance of an accordion menu.
	     * @class
	     * @name AccordionMenu
	     * @fires AccordionMenu#init
	     * @param {jQuery} element - jQuery object to make into an accordion menu.
	     * @param {Object} options - Overrides to the default plugin settings.
	     */
	    value: function _setup(element, options) {
	      this.$element = element;
	      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, AccordionMenu.defaults, this.$element.data(), options);
	      this.className = 'AccordionMenu'; // ie9 back compat

	      this._init();

	      _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__["Keyboard"].register('AccordionMenu', {
	        'ENTER': 'toggle',
	        'SPACE': 'toggle',
	        'ARROW_RIGHT': 'open',
	        'ARROW_UP': 'up',
	        'ARROW_DOWN': 'down',
	        'ARROW_LEFT': 'close',
	        'ESCAPE': 'closeAll'
	      });
	    }
	    /**
	     * Initializes the accordion menu by hiding all nested menus.
	     * @private
	     */

	  }, {
	    key: "_init",
	    value: function _init() {
	      _foundation_util_nest__WEBPACK_IMPORTED_MODULE_2__["Nest"].Feather(this.$element, 'accordion');

	      var _this = this;

	      this.$element.find('[data-submenu]').not('.is-active').slideUp(0); //.find('a').css('padding-left', '1rem');

	      this.$element.attr({
	        'role': 'tree',
	        'aria-multiselectable': this.options.multiOpen
	      });
	      this.$menuLinks = this.$element.find('.is-accordion-submenu-parent');
	      this.$menuLinks.each(function () {
	        var linkId = this.id || Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__["GetYoDigits"])(6, 'acc-menu-link'),
	            $elem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),
	            $sub = $elem.children('[data-submenu]'),
	            subId = $sub[0].id || Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__["GetYoDigits"])(6, 'acc-menu'),
	            isActive = $sub.hasClass('is-active');

	        if (_this.options.parentLink) {
	          var $anchor = $elem.children('a');
	          $anchor.clone().prependTo($sub).wrap('<li data-is-parent-link class="is-submenu-parent-item is-submenu-item is-accordion-submenu-item"></li>');
	        }

	        if (_this.options.submenuToggle) {
	          $elem.addClass('has-submenu-toggle');
	          $elem.children('a').after('<button id="' + linkId + '" class="submenu-toggle" aria-controls="' + subId + '" aria-expanded="' + isActive + '" title="' + _this.options.submenuToggleText + '"><span class="submenu-toggle-text">' + _this.options.submenuToggleText + '</span></button>');
	        } else {
	          $elem.attr({
	            'aria-controls': subId,
	            'aria-expanded': isActive,
	            'id': linkId
	          });
	        }

	        $sub.attr({
	          'aria-labelledby': linkId,
	          'aria-hidden': !isActive,
	          'role': 'group',
	          'id': subId
	        });
	      });
	      this.$element.find('li').attr({
	        'role': 'treeitem'
	      });
	      var initPanes = this.$element.find('.is-active');

	      if (initPanes.length) {
	        var _this = this;

	        initPanes.each(function () {
	          _this.down(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));
	        });
	      }

	      this._events();
	    }
	    /**
	     * Adds event handlers for items within the menu.
	     * @private
	     */

	  }, {
	    key: "_events",
	    value: function _events() {
	      var _this = this;

	      this.$element.find('li').each(function () {
	        var $submenu = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).children('[data-submenu]');

	        if ($submenu.length) {
	          if (_this.options.submenuToggle) {
	            jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).children('.submenu-toggle').off('click.zf.accordionMenu').on('click.zf.accordionMenu', function (e) {
	              _this.toggle($submenu);
	            });
	          } else {
	            jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).children('a').off('click.zf.accordionMenu').on('click.zf.accordionMenu', function (e) {
	              e.preventDefault();

	              _this.toggle($submenu);
	            });
	          }
	        }
	      }).on('keydown.zf.accordionmenu', function (e) {
	        var $element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),
	            $elements = $element.parent('ul').children('li'),
	            $prevElement,
	            $nextElement,
	            $target = $element.children('[data-submenu]');
	        $elements.each(function (i) {
	          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).is($element)) {
	            $prevElement = $elements.eq(Math.max(0, i - 1)).find('a').first();
	            $nextElement = $elements.eq(Math.min(i + 1, $elements.length - 1)).find('a').first();

	            if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).children('[data-submenu]:visible').length) {
	              // has open sub menu
	              $nextElement = $element.find('li:first-child').find('a').first();
	            }

	            if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).is(':first-child')) {
	              // is first element of sub menu
	              $prevElement = $element.parents('li').first().find('a').first();
	            } else if ($prevElement.parents('li').first().children('[data-submenu]:visible').length) {
	              // if previous element has open sub menu
	              $prevElement = $prevElement.parents('li').find('li:last-child').find('a').first();
	            }

	            if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).is(':last-child')) {
	              // is last element of sub menu
	              $nextElement = $element.parents('li').first().next('li').find('a').first();
	            }

	            return;
	          }
	        });
	        _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__["Keyboard"].handleKey(e, 'AccordionMenu', {
	          open: function open() {
	            if ($target.is(':hidden')) {
	              _this.down($target);

	              $target.find('li').first().find('a').first().focus();
	            }
	          },
	          close: function close() {
	            if ($target.length && !$target.is(':hidden')) {
	              // close active sub of this item
	              _this.up($target);
	            } else if ($element.parent('[data-submenu]').length) {
	              // close currently open sub
	              _this.up($element.parent('[data-submenu]'));

	              $element.parents('li').first().find('a').first().focus();
	            }
	          },
	          up: function up() {
	            $prevElement.focus();
	            return true;
	          },
	          down: function down() {
	            $nextElement.focus();
	            return true;
	          },
	          toggle: function toggle() {
	            if (_this.options.submenuToggle) {
	              return false;
	            }

	            if ($element.children('[data-submenu]').length) {
	              _this.toggle($element.children('[data-submenu]'));

	              return true;
	            }
	          },
	          closeAll: function closeAll() {
	            _this.hideAll();
	          },
	          handled: function handled(preventDefault) {
	            if (preventDefault) {
	              e.preventDefault();
	            }

	            e.stopImmediatePropagation();
	          }
	        });
	      }); //.attr('tabindex', 0);
	    }
	    /**
	     * Closes all panes of the menu.
	     * @function
	     */

	  }, {
	    key: "hideAll",
	    value: function hideAll() {
	      this.up(this.$element.find('[data-submenu]'));
	    }
	    /**
	     * Opens all panes of the menu.
	     * @function
	     */

	  }, {
	    key: "showAll",
	    value: function showAll() {
	      this.down(this.$element.find('[data-submenu]'));
	    }
	    /**
	     * Toggles the open/close state of a submenu.
	     * @function
	     * @param {jQuery} $target - the submenu to toggle
	     */

	  }, {
	    key: "toggle",
	    value: function toggle($target) {
	      if (!$target.is(':animated')) {
	        if (!$target.is(':hidden')) {
	          this.up($target);
	        } else {
	          this.down($target);
	        }
	      }
	    }
	    /**
	     * Opens the sub-menu defined by `$target`.
	     * @param {jQuery} $target - Sub-menu to open.
	     * @fires AccordionMenu#down
	     */

	  }, {
	    key: "down",
	    value: function down($target) {
	      var _this = this;

	      if (!this.options.multiOpen) {
	        this.up(this.$element.find('.is-active').not($target.parentsUntil(this.$element).add($target)));
	      }

	      $target.addClass('is-active').attr({
	        'aria-hidden': false
	      });

	      if (this.options.submenuToggle) {
	        $target.prev('.submenu-toggle').attr({
	          'aria-expanded': true
	        });
	      } else {
	        $target.parent('.is-accordion-submenu-parent').attr({
	          'aria-expanded': true
	        });
	      }

	      $target.slideDown(_this.options.slideSpeed, function () {
	        /**
	         * Fires when the menu is done opening.
	         * @event AccordionMenu#down
	         */
	        _this.$element.trigger('down.zf.accordionMenu', [$target]);
	      });
	    }
	    /**
	     * Closes the sub-menu defined by `$target`. All sub-menus inside the target will be closed as well.
	     * @param {jQuery} $target - Sub-menu to close.
	     * @fires AccordionMenu#up
	     */

	  }, {
	    key: "up",
	    value: function up($target) {
	      var _this = this;

	      $target.slideUp(_this.options.slideSpeed, function () {
	        /**
	         * Fires when the menu is done collapsing up.
	         * @event AccordionMenu#up
	         */
	        _this.$element.trigger('up.zf.accordionMenu', [$target]);
	      });
	      var $menus = $target.find('[data-submenu]').slideUp(0).addBack().attr('aria-hidden', true);

	      if (this.options.submenuToggle) {
	        $menus.prev('.submenu-toggle').attr('aria-expanded', false);
	      } else {
	        $menus.parent('.is-accordion-submenu-parent').attr('aria-expanded', false);
	      }
	    }
	    /**
	     * Destroys an instance of accordion menu.
	     * @fires AccordionMenu#destroyed
	     */

	  }, {
	    key: "_destroy",
	    value: function _destroy() {
	      this.$element.find('[data-submenu]').slideDown(0).css('display', '');
	      this.$element.find('a').off('click.zf.accordionMenu');
	      this.$element.find('[data-is-parent-link]').detach();

	      if (this.options.submenuToggle) {
	        this.$element.find('.has-submenu-toggle').removeClass('has-submenu-toggle');
	        this.$element.find('.submenu-toggle').remove();
	      }

	      _foundation_util_nest__WEBPACK_IMPORTED_MODULE_2__["Nest"].Burn(this.$element, 'accordion');
	    }
	  }]);

	  return AccordionMenu;
	}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_4__["Plugin"]);

	AccordionMenu.defaults = {
	  /**
	   * Adds the parent link to the submenu.
	   * @option
	   * @type {boolean}
	   * @default false
	   */
	  parentLink: false,

	  /**
	   * Amount of time to animate the opening of a submenu in ms.
	   * @option
	   * @type {number}
	   * @default 250
	   */
	  slideSpeed: 250,

	  /**
	   * Adds a separate submenu toggle button. This allows the parent item to have a link.
	   * @option
	   * @example true
	   */
	  submenuToggle: false,

	  /**
	   * The text used for the submenu toggle if enabled. This is used for screen readers only.
	   * @option
	   * @example true
	   */
	  submenuToggleText: 'Toggle menu',

	  /**
	   * Allow the menu to have multiple open panes.
	   * @option
	   * @type {boolean}
	   * @default true
	   */
	  multiOpen: true
	};


	/***/ }),

	/***/ "./js/foundation.core.js":
	/*!*******************************!*\
	  !*** ./js/foundation.core.js ***!
	  \*******************************/
	/*! exports provided: Foundation */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {

	"use strict";
	__webpack_require__.r(__webpack_exports__);
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Foundation", function() { return Foundation; });
	/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
	/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
	/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.core.utils */ "./js/foundation.core.utils.js");
	/* harmony import */ var _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.util.mediaQuery */ "./js/foundation.util.mediaQuery.js");


	function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }




	var FOUNDATION_VERSION = '6.5.0'; // Global Foundation object
	// This is attached to the window, or used as a module for AMD/Browserify

	var Foundation = {
	  version: FOUNDATION_VERSION,

	  /**
	   * Stores initialized plugins.
	   */
	  _plugins: {},

	  /**
	   * Stores generated unique ids for plugin instances
	   */
	  _uuids: [],

	  /**
	   * Defines a Foundation plugin, adding it to the `Foundation` namespace and the list of plugins to initialize when reflowing.
	   * @param {Object} plugin - The constructor of the plugin.
	   */
	  plugin: function plugin(_plugin, name) {
	    // Object key to use when adding to global Foundation object
	    // Examples: Foundation.Reveal, Foundation.OffCanvas
	    var className = name || functionName(_plugin); // Object key to use when storing the plugin, also used to create the identifying data attribute for the plugin
	    // Examples: data-reveal, data-off-canvas

	    var attrName = hyphenate(className); // Add to the Foundation object and the plugins list (for reflowing)

	    this._plugins[attrName] = this[className] = _plugin;
	  },

	  /**
	   * @function
	   * Populates the _uuids array with pointers to each individual plugin instance.
	   * Adds the `zfPlugin` data-attribute to programmatically created plugins to allow use of $(selector).foundation(method) calls.
	   * Also fires the initialization event for each plugin, consolidating repetitive code.
	   * @param {Object} plugin - an instance of a plugin, usually `this` in context.
	   * @param {String} name - the name of the plugin, passed as a camelCased string.
	   * @fires Plugin#init
	   */
	  registerPlugin: function registerPlugin(plugin, name) {
	    var pluginName = name ? hyphenate(name) : functionName(plugin.constructor).toLowerCase();
	    plugin.uuid = Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__["GetYoDigits"])(6, pluginName);

	    if (!plugin.$element.attr("data-".concat(pluginName))) {
	      plugin.$element.attr("data-".concat(pluginName), plugin.uuid);
	    }

	    if (!plugin.$element.data('zfPlugin')) {
	      plugin.$element.data('zfPlugin', plugin);
	    }
	    /**
	     * Fires when the plugin has initialized.
	     * @event Plugin#init
	     */


	    plugin.$element.trigger("init.zf.".concat(pluginName));

	    this._uuids.push(plugin.uuid);

	    return;
	  },

	  /**
	   * @function
	   * Removes the plugins uuid from the _uuids array.
	   * Removes the zfPlugin data attribute, as well as the data-plugin-name attribute.
	   * Also fires the destroyed event for the plugin, consolidating repetitive code.
	   * @param {Object} plugin - an instance of a plugin, usually `this` in context.
	   * @fires Plugin#destroyed
	   */
	  unregisterPlugin: function unregisterPlugin(plugin) {
	    var pluginName = hyphenate(functionName(plugin.$element.data('zfPlugin').constructor));

	    this._uuids.splice(this._uuids.indexOf(plugin.uuid), 1);

	    plugin.$element.removeAttr("data-".concat(pluginName)).removeData('zfPlugin')
	    /**
	     * Fires when the plugin has been destroyed.
	     * @event Plugin#destroyed
	     */
	    .trigger("destroyed.zf.".concat(pluginName));

	    for (var prop in plugin) {
	      plugin[prop] = null; //clean up script to prep for garbage collection.
	    }

	    return;
	  },

	  /**
	   * @function
	   * Causes one or more active plugins to re-initialize, resetting event listeners, recalculating positions, etc.
	   * @param {String} plugins - optional string of an individual plugin key, attained by calling `$(element).data('pluginName')`, or string of a plugin class i.e. `'dropdown'`
	   * @default If no argument is passed, reflow all currently active plugins.
	   */
	  reInit: function reInit(plugins) {
	    var isJQ = plugins instanceof jquery__WEBPACK_IMPORTED_MODULE_0___default.a;

	    try {
	      if (isJQ) {
	        plugins.each(function () {
	          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('zfPlugin')._init();
	        });
	      } else {
	        var type = _typeof(plugins),
	            _this = this,
	            fns = {
	          'object': function object(plgs) {
	            plgs.forEach(function (p) {
	              p = hyphenate(p);
	              jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-' + p + ']').foundation('_init');
	            });
	          },
	          'string': function string() {
	            plugins = hyphenate(plugins);
	            jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-' + plugins + ']').foundation('_init');
	          },
	          'undefined': function undefined() {
	            this['object'](Object.keys(_this._plugins));
	          }
	        };

	        fns[type](plugins);
	      }
	    } catch (err) {
	      console.error(err);
	    } finally {
	      return plugins;
	    }
	  },

	  /**
	   * Initialize plugins on any elements within `elem` (and `elem` itself) that aren't already initialized.
	   * @param {Object} elem - jQuery object containing the element to check inside. Also checks the element itself, unless it's the `document` object.
	   * @param {String|Array} plugins - A list of plugins to initialize. Leave this out to initialize everything.
	   */
	  reflow: function reflow(elem, plugins) {
	    // If plugins is undefined, just grab everything
	    if (typeof plugins === 'undefined') {
	      plugins = Object.keys(this._plugins);
	    } // If plugins is a string, convert it to an array with one item
	    else if (typeof plugins === 'string') {
	        plugins = [plugins];
	      }

	    var _this = this; // Iterate through each plugin


	    jquery__WEBPACK_IMPORTED_MODULE_0___default.a.each(plugins, function (i, name) {
	      // Get the current plugin
	      var plugin = _this._plugins[name]; // Localize the search to all elements inside elem, as well as elem itself, unless elem === document

	      var $elem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(elem).find('[data-' + name + ']').addBack('[data-' + name + ']'); // For each plugin found, initialize it

	      $elem.each(function () {
	        var $el = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),
	            opts = {}; // Don't double-dip on plugins

	        if ($el.data('zfPlugin')) {
	          console.warn("Tried to initialize " + name + " on an element that already has a Foundation plugin.");
	          return;
	        }

	        if ($el.attr('data-options')) {
	          var thing = $el.attr('data-options').split(';').forEach(function (e, i) {
	            var opt = e.split(':').map(function (el) {
	              return el.trim();
	            });
	            if (opt[0]) opts[opt[0]] = parseValue(opt[1]);
	          });
	        }

	        try {
	          $el.data('zfPlugin', new plugin(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this), opts));
	        } catch (er) {
	          console.error(er);
	        } finally {
	          return;
	        }
	      });
	    });
	  },
	  getFnName: functionName,
	  addToJquery: function addToJquery($) {
	    // TODO: consider not making this a jQuery function
	    // TODO: need way to reflow vs. re-initialize

	    /**
	     * The Foundation jQuery method.
	     * @param {String|Array} method - An action to perform on the current jQuery object.
	     */
	    var foundation = function foundation(method) {
	      var type = _typeof(method),
	          $noJS = $('.no-js');

	      if ($noJS.length) {
	        $noJS.removeClass('no-js');
	      }

	      if (type === 'undefined') {
	        //needs to initialize the Foundation object, or an individual plugin.
	        _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_2__["MediaQuery"]._init();

	        Foundation.reflow(this);
	      } else if (type === 'string') {
	        //an individual method to invoke on a plugin or group of plugins
	        var args = Array.prototype.slice.call(arguments, 1); //collect all the arguments, if necessary

	        var plugClass = this.data('zfPlugin'); //determine the class of plugin

	        if (typeof plugClass !== 'undefined' && typeof plugClass[method] !== 'undefined') {
	          //make sure both the class and method exist
	          if (this.length === 1) {
	            //if there's only one, call it directly.
	            plugClass[method].apply(plugClass, args);
	          } else {
	            this.each(function (i, el) {
	              //otherwise loop through the jQuery collection and invoke the method on each
	              plugClass[method].apply($(el).data('zfPlugin'), args);
	            });
	          }
	        } else {
	          //error for no class or no method
	          throw new ReferenceError("We're sorry, '" + method + "' is not an available method for " + (plugClass ? functionName(plugClass) : 'this element') + '.');
	        }
	      } else {
	        //error for invalid argument type
	        throw new TypeError("We're sorry, ".concat(type, " is not a valid parameter. You must use a string representing the method you wish to invoke."));
	      }

	      return this;
	    };

	    $.fn.foundation = foundation;
	    return $;
	  }
	};
	Foundation.util = {
	  /**
	   * Function for applying a debounce effect to a function call.
	   * @function
	   * @param {Function} func - Function to be called at end of timeout.
	   * @param {Number} delay - Time in ms to delay the call of `func`.
	   * @returns function
	   */
	  throttle: function throttle(func, delay) {
	    var timer = null;
	    return function () {
	      var context = this,
	          args = arguments;

	      if (timer === null) {
	        timer = setTimeout(function () {
	          func.apply(context, args);
	          timer = null;
	        }, delay);
	      }
	    };
	  }
	};
	window.Foundation = Foundation; // Polyfill for requestAnimationFrame

	(function () {
	  if (!Date.now || !window.Date.now) window.Date.now = Date.now = function () {
	    return new Date().getTime();
	  };
	  var vendors = ['webkit', 'moz'];

	  for (var i = 0; i < vendors.length && !window.requestAnimationFrame; ++i) {
	    var vp = vendors[i];
	    window.requestAnimationFrame = window[vp + 'RequestAnimationFrame'];
	    window.cancelAnimationFrame = window[vp + 'CancelAnimationFrame'] || window[vp + 'CancelRequestAnimationFrame'];
	  }

	  if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
	    var lastTime = 0;

	    window.requestAnimationFrame = function (callback) {
	      var now = Date.now();
	      var nextTime = Math.max(lastTime + 16, now);
	      return setTimeout(function () {
	        callback(lastTime = nextTime);
	      }, nextTime - now);
	    };

	    window.cancelAnimationFrame = clearTimeout;
	  }
	  /**
	   * Polyfill for performance.now, required by rAF
	   */


	  if (!window.performance || !window.performance.now) {
	    window.performance = {
	      start: Date.now(),
	      now: function now() {
	        return Date.now() - this.start;
	      }
	    };
	  }
	})();

	if (!Function.prototype.bind) {
	  Function.prototype.bind = function (oThis) {
	    if (typeof this !== 'function') {
	      // closest thing possible to the ECMAScript 5
	      // internal IsCallable function
	      throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
	    }

	    var aArgs = Array.prototype.slice.call(arguments, 1),
	        fToBind = this,
	        fNOP = function fNOP() {},
	        fBound = function fBound() {
	      return fToBind.apply(this instanceof fNOP ? this : oThis, aArgs.concat(Array.prototype.slice.call(arguments)));
	    };

	    if (this.prototype) {
	      // native functions don't have a prototype
	      fNOP.prototype = this.prototype;
	    }

	    fBound.prototype = new fNOP();
	    return fBound;
	  };
	} // Polyfill to get the name of a function in IE9


	function functionName(fn) {
	  if (typeof Function.prototype.name === 'undefined') {
	    var funcNameRegex = /function\s([^(]{1,})\(/;
	    var results = funcNameRegex.exec(fn.toString());
	    return results && results.length > 1 ? results[1].trim() : "";
	  } else if (typeof fn.prototype === 'undefined') {
	    return fn.constructor.name;
	  } else {
	    return fn.prototype.constructor.name;
	  }
	}

	function parseValue(str) {
	  if ('true' === str) return true;else if ('false' === str) return false;else if (!isNaN(str * 1)) return parseFloat(str);
	  return str;
	} // Convert PascalCase to kebab-case
	// Thank you: http://stackoverflow.com/a/8955580


	function hyphenate(str) {
	  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
	}



	/***/ }),

	/***/ "./js/foundation.core.plugin.js":
	/*!**************************************!*\
	  !*** ./js/foundation.core.plugin.js ***!
	  \**************************************/
	/*! exports provided: Plugin */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {

	"use strict";
	__webpack_require__.r(__webpack_exports__);
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Plugin", function() { return Plugin; });
	/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
	/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
	/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.core.utils */ "./js/foundation.core.utils.js");


	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

	function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


	 // Abstract class for providing lifecycle hooks. Expect plugins to define AT LEAST
	// {function} _setup (replaces previous constructor),
	// {function} _destroy (replaces previous destroy)

	var Plugin =
	/*#__PURE__*/
	function () {
	  function Plugin(element, options) {
	    _classCallCheck(this, Plugin);

	    this._setup(element, options);

	    var pluginName = getPluginName(this);
	    this.uuid = Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__["GetYoDigits"])(6, pluginName);

	    if (!this.$element.attr("data-".concat(pluginName))) {
	      this.$element.attr("data-".concat(pluginName), this.uuid);
	    }

	    if (!this.$element.data('zfPlugin')) {
	      this.$element.data('zfPlugin', this);
	    }
	    /**
	     * Fires when the plugin has initialized.
	     * @event Plugin#init
	     */


	    this.$element.trigger("init.zf.".concat(pluginName));
	  }

	  _createClass(Plugin, [{
	    key: "destroy",
	    value: function destroy() {
	      this._destroy();

	      var pluginName = getPluginName(this);
	      this.$element.removeAttr("data-".concat(pluginName)).removeData('zfPlugin')
	      /**
	       * Fires when the plugin has been destroyed.
	       * @event Plugin#destroyed
	       */
	      .trigger("destroyed.zf.".concat(pluginName));

	      for (var prop in this) {
	        this[prop] = null; //clean up script to prep for garbage collection.
	      }
	    }
	  }]);

	  return Plugin;
	}(); // Convert PascalCase to kebab-case
	// Thank you: http://stackoverflow.com/a/8955580


	function hyphenate(str) {
	  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
	}

	function getPluginName(obj) {
	  if (typeof obj.constructor.name !== 'undefined') {
	    return hyphenate(obj.constructor.name);
	  } else {
	    return hyphenate(obj.className);
	  }
	}



	/***/ }),

	/***/ "./js/foundation.core.utils.js":
	/*!*************************************!*\
	  !*** ./js/foundation.core.utils.js ***!
	  \*************************************/
	/*! exports provided: rtl, GetYoDigits, RegExpEscape, transitionend, onLoad, onLeaveElement */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {

	"use strict";
	__webpack_require__.r(__webpack_exports__);
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rtl", function() { return rtl; });
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetYoDigits", function() { return GetYoDigits; });
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegExpEscape", function() { return RegExpEscape; });
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transitionend", function() { return transitionend; });
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onLoad", function() { return onLoad; });
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onLeaveElement", function() { return onLeaveElement; });
	/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
	/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);


	 // Core Foundation Utilities, utilized in a number of places.

	/**
	 * Returns a boolean for RTL support
	 */

	function rtl() {
	  return jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').attr('dir') === 'rtl';
	}
	/**
	 * returns a random base-36 uid with namespacing
	 * @function
	 * @param {Number} length - number of random base-36 digits desired. Increase for more random strings.
	 * @param {String} namespace - name of plugin to be incorporated in uid, optional.
	 * @default {String} '' - if no plugin name is provided, nothing is appended to the uid.
	 * @returns {String} - unique id
	 */


	function GetYoDigits(length, namespace) {
	  length = length || 6;
	  return Math.round(Math.pow(36, length + 1) - Math.random() * Math.pow(36, length)).toString(36).slice(1) + (namespace ? "-".concat(namespace) : '');
	}
	/**
	 * Escape a string so it can be used as a regexp pattern
	 * @function
	 * @see https://stackoverflow.com/a/9310752/4317384
	 *
	 * @param {String} str - string to escape.
	 * @returns {String} - escaped string
	 */


	function RegExpEscape(str) {
	  return str.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
	}

	function transitionend($elem) {
	  var transitions = {
	    'transition': 'transitionend',
	    'WebkitTransition': 'webkitTransitionEnd',
	    'MozTransition': 'transitionend',
	    'OTransition': 'otransitionend'
	  };
	  var elem = document.createElement('div'),
	      end;

	  for (var t in transitions) {
	    if (typeof elem.style[t] !== 'undefined') {
	      end = transitions[t];
	    }
	  }

	  if (end) {
	    return end;
	  } else {
	    end = setTimeout(function () {
	      $elem.triggerHandler('transitionend', [$elem]);
	    }, 1);
	    return 'transitionend';
	  }
	}
	/**
	 * Return an event type to listen for window load.
	 *
	 * If `$elem` is passed, an event will be triggered on `$elem`. If window is already loaded, the event will still be triggered.
	 * If `handler` is passed, attach it to the event on `$elem`.
	 * Calling `onLoad` without handler allows you to get the event type that will be triggered before attaching the handler by yourself.
	 * @function
	 *
	 * @param {Object} [] $elem - jQuery element on which the event will be triggered if passed.
	 * @param {Function} [] handler - function to attach to the event.
	 * @returns {String} - event type that should or will be triggered.
	 */


	function onLoad($elem, handler) {
	  var didLoad = document.readyState === 'complete';
	  var eventType = (didLoad ? '_didLoad' : 'load') + '.zf.util.onLoad';

	  var cb = function cb() {
	    return $elem.triggerHandler(eventType);
	  };

	  if ($elem) {
	    if (handler) $elem.one(eventType, handler);
	    if (didLoad) setTimeout(cb);else jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).one('load', cb);
	  }

	  return eventType;
	}

	function onLeaveElement($elem, handler) {
	  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
	      _ref$leaveWindow = _ref.leaveWindow,
	      leaveWindow = _ref$leaveWindow === void 0 ? true : _ref$leaveWindow;

	  var eventType = 'mouseleave.zf.util.onLeaveElement';

	  if ($elem && handler) {
	    $elem.on(eventType, function leaveHandler(e) {
	      for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        rest[_key - 1] = arguments[_key];
	      }

	      var _this = this;

	      setTimeout(function leaveEventDebouncer() {
	        if (e.relatedTarget === null && leaveWindow && document.hasFocus && document.hasFocus()) {
	          jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).one('mouseenter', function reenterHandler(reeenterE) {
	            if ($elem.has(reeenterE.target).length) {
	              return false;
	            }

	            ;
	            e.relatedTarget = reeenterE.target;
	            handler.call.apply(handler, [_this, e].concat(rest));
	          });
	          return false;
	        }

	        handler.call.apply(handler, [_this, e].concat(rest));
	      });
	    });
	  }

	  return eventType;
	}



	/***/ }),

	/***/ "./js/foundation.drilldown.js":
	/*!************************************!*\
	  !*** ./js/foundation.drilldown.js ***!
	  \************************************/
	/*! exports provided: Drilldown */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {

	"use strict";
	__webpack_require__.r(__webpack_exports__);
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Drilldown", function() { return Drilldown; });
	/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
	/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
	/* harmony import */ var _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.util.keyboard */ "./js/foundation.util.keyboard.js");
	/* harmony import */ var _foundation_util_nest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.util.nest */ "./js/foundation.util.nest.js");
	/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.core.utils */ "./js/foundation.core.utils.js");
	/* harmony import */ var _foundation_util_box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation.util.box */ "./js/foundation.util.box.js");
	/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./foundation.core.plugin */ "./js/foundation.core.plugin.js");


	function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

	function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

	function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

	function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

	function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

	function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







	/**
	 * Drilldown module.
	 * @module foundation.drilldown
	 * @requires foundation.util.keyboard
	 * @requires foundation.util.nest
	 * @requires foundation.util.box
	 */

	var Drilldown =
	/*#__PURE__*/
	function (_Plugin) {
	  _inherits(Drilldown, _Plugin);

	  function Drilldown() {
	    _classCallCheck(this, Drilldown);

	    return _possibleConstructorReturn(this, _getPrototypeOf(Drilldown).apply(this, arguments));
	  }

	  _createClass(Drilldown, [{
	    key: "_setup",

	    /**
	     * Creates a new instance of a drilldown menu.
	     * @class
	     * @name Drilldown
	     * @param {jQuery} element - jQuery object to make into an accordion menu.
	     * @param {Object} options - Overrides to the default plugin settings.
	     */
	    value: function _setup(element, options) {
	      this.$element = element;
	      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, Drilldown.defaults, this.$element.data(), options);
	      this.className = 'Drilldown'; // ie9 back compat

	      this._init();

	      _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__["Keyboard"].register('Drilldown', {
	        'ENTER': 'open',
	        'SPACE': 'open',
	        'ARROW_RIGHT': 'next',
	        'ARROW_UP': 'up',
	        'ARROW_DOWN': 'down',
	        'ARROW_LEFT': 'previous',
	        'ESCAPE': 'close',
	        'TAB': 'down',
	        'SHIFT_TAB': 'up'
	      });
	    }
	    /**
	     * Initializes the drilldown by creating jQuery collections of elements
	     * @private
	     */

	  }, {
	    key: "_init",
	    value: function _init() {
	      _foundation_util_nest__WEBPACK_IMPORTED_MODULE_2__["Nest"].Feather(this.$element, 'drilldown');

	      if (this.options.autoApplyClass) {
	        this.$element.addClass('drilldown');
	      }

	      this.$element.attr({
	        'role': 'tree',
	        'aria-multiselectable': false
	      });
	      this.$submenuAnchors = this.$element.find('li.is-drilldown-submenu-parent').children('a');
	      this.$submenus = this.$submenuAnchors.parent('li').children('[data-submenu]').attr('role', 'group');
	      this.$menuItems = this.$element.find('li').not('.js-drilldown-back').attr('role', 'treeitem').find('a'); // Set the main menu as current by default (unless a submenu is selected)
	      // Used to set the wrapper height when the drilldown is closed/reopened from any (sub)menu

	      this.$currentMenu = this.$element;
	      this.$element.attr('data-mutate', this.$element.attr('data-drilldown') || Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__["GetYoDigits"])(6, 'drilldown'));

	      this._prepareMenu();

	      this._registerEvents();

	      this._keyboardEvents();
	    }
	    /**
	     * prepares drilldown menu by setting attributes to links and elements
	     * sets a min height to prevent content jumping
	     * wraps the element if not already wrapped
	     * @private
	     * @function
	     */

	  }, {
	    key: "_prepareMenu",
	    value: function _prepareMenu() {
	      var _this = this; // if(!this.options.holdOpen){
	      //   this._menuLinkEvents();
	      // }


	      this.$submenuAnchors.each(function () {
	        var $link = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
	        var $sub = $link.parent();

	        if (_this.options.parentLink) {
	          $link.clone().prependTo($sub.children('[data-submenu]')).wrap('<li data-is-parent-link class="is-submenu-parent-item is-submenu-item is-drilldown-submenu-item" role="menuitem"></li>');
	        }

	        $link.data('savedHref', $link.attr('href')).removeAttr('href').attr('tabindex', 0);
	        $link.children('[data-submenu]').attr({
	          'aria-hidden': true,
	          'tabindex': 0,
	          'role': 'group'
	        });

	        _this._events($link);
	      });
	      this.$submenus.each(function () {
	        var $menu = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),
	            $back = $menu.find('.js-drilldown-back');

	        if (!$back.length) {
	          switch (_this.options.backButtonPosition) {
	            case "bottom":
	              $menu.append(_this.options.backButton);
	              break;

	            case "top":
	              $menu.prepend(_this.options.backButton);
	              break;

	            default:
	              console.error("Unsupported backButtonPosition value '" + _this.options.backButtonPosition + "'");
	          }
	        }

	        _this._back($menu);
	      });
	      this.$submenus.addClass('invisible');

	      if (!this.options.autoHeight) {
	        this.$submenus.addClass('drilldown-submenu-cover-previous');
	      } // create a wrapper on element if it doesn't exist.


	      if (!this.$element.parent().hasClass('is-drilldown')) {
	        this.$wrapper = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.options.wrapper).addClass('is-drilldown');
	        if (this.options.animateHeight) this.$wrapper.addClass('animate-height');
	        this.$element.wrap(this.$wrapper);
	      } // set wrapper


	      this.$wrapper = this.$element.parent();
	      this.$wrapper.css(this._getMaxDims());
	    }
	  }, {
	    key: "_resize",
	    value: function _resize() {
	      this.$wrapper.css({
	        'max-width': 'none',
	        'min-height': 'none'
	      }); // _getMaxDims has side effects (boo) but calling it should update all other necessary heights & widths

	      this.$wrapper.css(this._getMaxDims());
	    }
	    /**
	     * Adds event handlers to elements in the menu.
	     * @function
	     * @private
	     * @param {jQuery} $elem - the current menu item to add handlers to.
	     */

	  }, {
	    key: "_events",
	    value: function _events($elem) {
	      var _this = this;

	      $elem.off('click.zf.drilldown').on('click.zf.drilldown', function (e) {
	        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).parentsUntil('ul', 'li').hasClass('is-drilldown-submenu-parent')) {
	          e.stopImmediatePropagation();
	          e.preventDefault();
	        } // if(e.target !== e.currentTarget.firstElementChild){
	        //   return false;
	        // }


	        _this._show($elem.parent('li'));

	        if (_this.options.closeOnClick) {
	          var $body = jquery__WEBPACK_IMPORTED_MODULE_0___default()('body');
	          $body.off('.zf.drilldown').on('click.zf.drilldown', function (e) {
	            if (e.target === _this.$element[0] || jquery__WEBPACK_IMPORTED_MODULE_0___default.a.contains(_this.$element[0], e.target)) {
	              return;
	            }

	            e.preventDefault();

	            _this._hideAll();

	            $body.off('.zf.drilldown');
	          });
	        }
	      });
	    }
	    /**
	     * Adds event handlers to the menu element.
	     * @function
	     * @private
	     */

	  }, {
	    key: "_registerEvents",
	    value: function _registerEvents() {
	      if (this.options.scrollTop) {
	        this._bindHandler = this._scrollTop.bind(this);
	        this.$element.on('open.zf.drilldown hide.zf.drilldown closed.zf.drilldown', this._bindHandler);
	      }

	      this.$element.on('mutateme.zf.trigger', this._resize.bind(this));
	    }
	    /**
	     * Scroll to Top of Element or data-scroll-top-element
	     * @function
	     * @fires Drilldown#scrollme
	     */

	  }, {
	    key: "_scrollTop",
	    value: function _scrollTop() {
	      var _this = this;

	      var $scrollTopElement = _this.options.scrollTopElement != '' ? jquery__WEBPACK_IMPORTED_MODULE_0___default()(_this.options.scrollTopElement) : _this.$element,
	          scrollPos = parseInt($scrollTopElement.offset().top + _this.options.scrollTopOffset, 10);
	      jquery__WEBPACK_IMPORTED_MODULE_0___default()('html, body').stop(true).animate({
	        scrollTop: scrollPos
	      }, _this.options.animationDuration, _this.options.animationEasing, function () {
	        /**
	          * Fires after the menu has scrolled
	          * @event Drilldown#scrollme
	          */
	        if (this === jquery__WEBPACK_IMPORTED_MODULE_0___default()('html')[0]) _this.$element.trigger('scrollme.zf.drilldown');
	      });
	    }
	    /**
	     * Adds keydown event listener to `li`'s in the menu.
	     * @private
	     */

	  }, {
	    key: "_keyboardEvents",
	    value: function _keyboardEvents() {
	      var _this = this;

	      this.$menuItems.add(this.$element.find('.js-drilldown-back > a, .is-submenu-parent-item > a')).on('keydown.zf.drilldown', function (e) {
	        var $element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),
	            $elements = $element.parent('li').parent('ul').children('li').children('a'),
	            $prevElement,
	            $nextElement;
	        $elements.each(function (i) {
	          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).is($element)) {
	            $prevElement = $elements.eq(Math.max(0, i - 1));
	            $nextElement = $elements.eq(Math.min(i + 1, $elements.length - 1));
	            return;
	          }
	        });
	        _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__["Keyboard"].handleKey(e, 'Drilldown', {
	          next: function next() {
	            if ($element.is(_this.$submenuAnchors)) {
	              _this._show($element.parent('li'));

	              $element.parent('li').one(Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__["transitionend"])($element), function () {
	                $element.parent('li').find('ul li a').not('.js-drilldown-back a').first().focus();
	              });
	              return true;
	            }
	          },
	          previous: function previous() {
	            _this._hide($element.parent('li').parent('ul'));

	            $element.parent('li').parent('ul').one(Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__["transitionend"])($element), function () {
	              setTimeout(function () {
	                $element.parent('li').parent('ul').parent('li').children('a').first().focus();
	              }, 1);
	            });
	            return true;
	          },
	          up: function up() {
	            $prevElement.focus(); // Don't tap focus on first element in root ul

	            return !$element.is(_this.$element.find('> li:first-child > a'));
	          },
	          down: function down() {
	            $nextElement.focus(); // Don't tap focus on last element in root ul

	            return !$element.is(_this.$element.find('> li:last-child > a'));
	          },
	          close: function close() {
	            // Don't close on element in root ul
	            if (!$element.is(_this.$element.find('> li > a'))) {
	              _this._hide($element.parent().parent());

	              $element.parent().parent().siblings('a').focus();
	            }
	          },
	          open: function open() {
	            if (_this.options.parentLink && $element.attr('href')) {
	              // Link with href
	              return false;
	            } else if (!$element.is(_this.$menuItems)) {
	              // not menu item means back button
	              _this._hide($element.parent('li').parent('ul'));

	              $element.parent('li').parent('ul').one(Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__["transitionend"])($element), function () {
	                setTimeout(function () {
	                  $element.parent('li').parent('ul').parent('li').children('a').first().focus();
	                }, 1);
	              });
	              return true;
	            } else if ($element.is(_this.$submenuAnchors)) {
	              // Sub menu item
	              _this._show($element.parent('li'));

	              $element.parent('li').one(Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__["transitionend"])($element), function () {
	                $element.parent('li').find('ul li a').not('.js-drilldown-back a').first().focus();
	              });
	              return true;
	            }
	          },
	          handled: function handled(preventDefault) {
	            if (preventDefault) {
	              e.preventDefault();
	            }

	            e.stopImmediatePropagation();
	          }
	        });
	      }); // end keyboardAccess
	    }
	    /**
	     * Closes all open elements, and returns to root menu.
	     * @function
	     * @fires Drilldown#closed
	     */

	  }, {
	    key: "_hideAll",
	    value: function _hideAll() {
	      var $elem = this.$element.find('.is-drilldown-submenu.is-active').addClass('is-closing');
	      if (this.options.autoHeight) this.$wrapper.css({
	        height: $elem.parent().closest('ul').data('calcHeight')
	      });
	      $elem.one(Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__["transitionend"])($elem), function (e) {
	        $elem.removeClass('is-active is-closing');
	      });
	      /**
	       * Fires when the menu is fully closed.
	       * @event Drilldown#closed
	       */

	      this.$element.trigger('closed.zf.drilldown');
	    }
	    /**
	     * Adds event listener for each `back` button, and closes open menus.
	     * @function
	     * @fires Drilldown#back
	     * @param {jQuery} $elem - the current sub-menu to add `back` event.
	     */

	  }, {
	    key: "_back",
	    value: function _back($elem) {
	      var _this = this;

	      $elem.off('click.zf.drilldown');
	      $elem.children('.js-drilldown-back').on('click.zf.drilldown', function (e) {
	        e.stopImmediatePropagation(); // console.log('mouseup on back');

	        _this._hide($elem); // If there is a parent submenu, call show


	        var parentSubMenu = $elem.parent('li').parent('ul').parent('li');

	        if (parentSubMenu.length) {
	          _this._show(parentSubMenu);
	        }
	      });
	    }
	    /**
	     * Adds event listener to menu items w/o submenus to close open menus on click.
	     * @function
	     * @private
	     */

	  }, {
	    key: "_menuLinkEvents",
	    value: function _menuLinkEvents() {
	      var _this = this;

	      this.$menuItems.not('.is-drilldown-submenu-parent').off('click.zf.drilldown').on('click.zf.drilldown', function (e) {
	        // e.stopImmediatePropagation();
	        setTimeout(function () {
	          _this._hideAll();
	        }, 0);
	      });
	    }
	    /**
	     * Sets the CSS classes for submenu to show it.
	     * @function
	     * @private
	     * @param {jQuery} $elem - the target submenu (`ul` tag)
	     * @param {boolean} trigger - trigger drilldown event
	     */

	  }, {
	    key: "_setShowSubMenuClasses",
	    value: function _setShowSubMenuClasses($elem, trigger) {
	      $elem.addClass('is-active').removeClass('invisible').attr('aria-hidden', false);
	      $elem.parent('li').attr('aria-expanded', true);

	      if (trigger === true) {
	        this.$element.trigger('open.zf.drilldown', [$elem]);
	      }
	    }
	    /**
	     * Sets the CSS classes for submenu to hide it.
	     * @function
	     * @private
	     * @param {jQuery} $elem - the target submenu (`ul` tag)
	     * @param {boolean} trigger - trigger drilldown event
	     */

	  }, {
	    key: "_setHideSubMenuClasses",
	    value: function _setHideSubMenuClasses($elem, trigger) {
	      $elem.removeClass('is-active').addClass('invisible').attr('aria-hidden', true);
	      $elem.parent('li').attr('aria-expanded', false);

	      if (trigger === true) {
	        $elem.trigger('hide.zf.drilldown', [$elem]);
	      }
	    }
	    /**
	     * Opens a specific drilldown (sub)menu no matter which (sub)menu in it is currently visible.
	     * Compared to _show() this lets you jump into any submenu without clicking through every submenu on the way to it.
	     * @function
	     * @fires Drilldown#open
	     * @param {jQuery} $elem - the target (sub)menu (`ul` tag)
	     * @param {boolean} autoFocus - if true the first link in the target (sub)menu gets auto focused
	     */

	  }, {
	    key: "_showMenu",
	    value: function _showMenu($elem, autoFocus) {
	      var _this = this; // Reset drilldown


	      var $expandedSubmenus = this.$element.find('li[aria-expanded="true"] > ul[data-submenu]');
	      $expandedSubmenus.each(function (index) {
	        _this._setHideSubMenuClasses(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));
	      }); // Save the menu as the currently displayed one.

	      this.$currentMenu = $elem; // If target menu is root, focus first link & exit

	      if ($elem.is('[data-drilldown]')) {
	        if (autoFocus === true) $elem.find('li[role="treeitem"] > a').first().focus();
	        if (this.options.autoHeight) this.$wrapper.css('height', $elem.data('calcHeight'));
	        return;
	      } // Find all submenus on way to root incl. the element itself


	      var $submenus = $elem.children().first().parentsUntil('[data-drilldown]', '[data-submenu]'); // Open target menu and all submenus on its way to root

	      $submenus.each(function (index) {
	        // Update height of first child (target menu) if autoHeight option true
	        if (index === 0 && _this.options.autoHeight) {
	          _this.$wrapper.css('height', jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('calcHeight'));
	        }

	        var isLastChild = index == $submenus.length - 1; // Add transitionsend listener to last child (root due to reverse order) to open target menu's first link
	        // Last child makes sure the event gets always triggered even if going through several menus

	        if (isLastChild === true) {
	          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).one(Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__["transitionend"])(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)), function () {
	            if (autoFocus === true) {
	              $elem.find('li[role="treeitem"] > a').first().focus();
	            }
	          });
	        }

	        _this._setShowSubMenuClasses(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this), isLastChild);
	      });
	    }
	    /**
	     * Opens a submenu.
	     * @function
	     * @fires Drilldown#open
	     * @param {jQuery} $elem - the current element with a submenu to open, i.e. the `li` tag.
	     */

	  }, {
	    key: "_show",
	    value: function _show($elem) {
	      var $submenu = $elem.children('[data-submenu]');
	      $elem.attr('aria-expanded', true);
	      this.$currentMenu = $submenu;
	      $submenu.addClass('is-active').removeClass('invisible').attr('aria-hidden', false);

	      if (this.options.autoHeight) {
	        this.$wrapper.css({
	          height: $submenu.data('calcHeight')
	        });
	      }
	      /**
	       * Fires when the submenu has opened.
	       * @event Drilldown#open
	       */


	      this.$element.trigger('open.zf.drilldown', [$elem]);
	    }
	    /**
	     * Hides a submenu
	     * @function
	     * @fires Drilldown#hide
	     * @param {jQuery} $elem - the current sub-menu to hide, i.e. the `ul` tag.
	     */

	  }, {
	    key: "_hide",
	    value: function _hide($elem) {
	      if (this.options.autoHeight) this.$wrapper.css({
	        height: $elem.parent().closest('ul').data('calcHeight')
	      });

	      var _this = this;

	      $elem.parent('li').attr('aria-expanded', false);
	      $elem.attr('aria-hidden', true);
	      $elem.addClass('is-closing').one(Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__["transitionend"])($elem), function () {
	        $elem.removeClass('is-active is-closing');
	        $elem.blur().addClass('invisible');
	      });
	      /**
	       * Fires when the submenu has closed.
	       * @event Drilldown#hide
	       */

	      $elem.trigger('hide.zf.drilldown', [$elem]);
	    }
	    /**
	     * Iterates through the nested menus to calculate the min-height, and max-width for the menu.
	     * Prevents content jumping.
	     * @function
	     * @private
	     */

	  }, {
	    key: "_getMaxDims",
	    value: function _getMaxDims() {
	      var maxHeight = 0,
	          result = {},
	          _this = this; // Recalculate menu heights and total max height


	      this.$submenus.add(this.$element).each(function () {
	        var numOfElems = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).children('li').length;
	        var height = _foundation_util_box__WEBPACK_IMPORTED_MODULE_4__["Box"].GetDimensions(this).height;
	        maxHeight = height > maxHeight ? height : maxHeight;

	        if (_this.options.autoHeight) {
	          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('calcHeight', height);
	        }
	      });
	      if (this.options.autoHeight) result['height'] = this.$currentMenu.data('calcHeight');else result['min-height'] = "".concat(maxHeight, "px");
	      result['max-width'] = "".concat(this.$element[0].getBoundingClientRect().width, "px");
	      return result;
	    }
	    /**
	     * Destroys the Drilldown Menu
	     * @function
	     */

	  }, {
	    key: "_destroy",
	    value: function _destroy() {
	      if (this.options.scrollTop) this.$element.off('.zf.drilldown', this._bindHandler);

	      this._hideAll();

	      this.$element.off('mutateme.zf.trigger');
	      _foundation_util_nest__WEBPACK_IMPORTED_MODULE_2__["Nest"].Burn(this.$element, 'drilldown');
	      this.$element.unwrap().find('.js-drilldown-back, .is-submenu-parent-item').remove().end().find('.is-active, .is-closing, .is-drilldown-submenu').removeClass('is-active is-closing is-drilldown-submenu').end().find('[data-submenu]').removeAttr('aria-hidden tabindex role');
	      this.$submenuAnchors.each(function () {
	        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).off('.zf.drilldown');
	      });
	      this.$element.find('[data-is-parent-link]').detach();
	      this.$submenus.removeClass('drilldown-submenu-cover-previous invisible');
	      this.$element.find('a').each(function () {
	        var $link = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
	        $link.removeAttr('tabindex');

	        if ($link.data('savedHref')) {
	          $link.attr('href', $link.data('savedHref')).removeData('savedHref');
	        } else {
	          return;
	        }
	      });
	    }
	  }]);

	  return Drilldown;
	}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_5__["Plugin"]);

	Drilldown.defaults = {
	  /**
	   * Drilldowns depend on styles in order to function properly; in the default build of Foundation these are
	   * on the `drilldown` class. This option auto-applies this class to the drilldown upon initialization.
	   * @option
	   * @type {boolian}
	   * @default true
	   */
	  autoApplyClass: true,

	  /**
	   * Markup used for JS generated back button. Prepended  or appended (see backButtonPosition) to submenu lists and deleted on `destroy` method, 'js-drilldown-back' class required. Remove the backslash (`\`) if copy and pasting.
	   * @option
	   * @type {string}
	   * @default '<li class="js-drilldown-back"><a tabindex="0">Back</a></li>'
	   */
	  backButton: '<li class="js-drilldown-back"><a tabindex="0">Back</a></li>',

	  /**
	   * Position the back button either at the top or bottom of drilldown submenus. Can be `'left'` or `'bottom'`.
	   * @option
	   * @type {string}
	   * @default top
	   */
	  backButtonPosition: 'top',

	  /**
	   * Markup used to wrap drilldown menu. Use a class name for independent styling; the JS applied class: `is-drilldown` is required. Remove the backslash (`\`) if copy and pasting.
	   * @option
	   * @type {string}
	   * @default '<div></div>'
	   */
	  wrapper: '<div></div>',

	  /**
	   * Adds the parent link to the submenu.
	   * @option
	   * @type {boolean}
	   * @default false
	   */
	  parentLink: false,

	  /**
	   * Allow the menu to return to root list on body click.
	   * @option
	   * @type {boolean}
	   * @default false
	   */
	  closeOnClick: false,

	  /**
	   * Allow the menu to auto adjust height.
	   * @option
	   * @type {boolean}
	   * @default false
	   */
	  autoHeight: false,

	  /**
	   * Animate the auto adjust height.
	   * @option
	   * @type {boolean}
	   * @default false
	   */
	  animateHeight: false,

	  /**
	   * Scroll to the top of the menu after opening a submenu or navigating back using the menu back button
	   * @option
	   * @type {boolean}
	   * @default false
	   */
	  scrollTop: false,

	  /**
	   * String jquery selector (for example 'body') of element to take offset().top from, if empty string the drilldown menu offset().top is taken
	   * @option
	   * @type {string}
	   * @default ''
	   */
	  scrollTopElement: '',

	  /**
	   * ScrollTop offset
	   * @option
	   * @type {number}
	   * @default 0
	   */
	  scrollTopOffset: 0,

	  /**
	   * Scroll animation duration
	   * @option
	   * @type {number}
	   * @default 500
	   */
	  animationDuration: 500,

	  /**
	   * Scroll animation easing. Can be `'swing'` or `'linear'`.
	   * @option
	   * @type {string}
	   * @see {@link https://api.jquery.com/animate|JQuery animate}
	   * @default 'swing'
	   */
	  animationEasing: 'swing' // holdOpen: false

	};


	/***/ }),

	/***/ "./js/foundation.dropdown.js":
	/*!***********************************!*\
	  !*** ./js/foundation.dropdown.js ***!
	  \***********************************/
	/*! exports provided: Dropdown */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {

	"use strict";
	__webpack_require__.r(__webpack_exports__);
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dropdown", function() { return Dropdown; });
	/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
	/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
	/* harmony import */ var _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.util.keyboard */ "./js/foundation.util.keyboard.js");
	/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.core.utils */ "./js/foundation.core.utils.js");
	/* harmony import */ var _foundation_positionable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.positionable */ "./js/foundation.positionable.js");
	/* harmony import */ var _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation.util.triggers */ "./js/foundation.util.triggers.js");


	function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

	function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

	function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

	function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

	function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

	function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

	function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

	function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






	/**
	 * Dropdown module.
	 * @module foundation.dropdown
	 * @requires foundation.util.keyboard
	 * @requires foundation.util.box
	 * @requires foundation.util.triggers
	 */

	var Dropdown =
	/*#__PURE__*/
	function (_Positionable) {
	  _inherits(Dropdown, _Positionable);

	  function Dropdown() {
	    _classCallCheck(this, Dropdown);

	    return _possibleConstructorReturn(this, _getPrototypeOf(Dropdown).apply(this, arguments));
	  }

	  _createClass(Dropdown, [{
	    key: "_setup",

	    /**
	     * Creates a new instance of a dropdown.
	     * @class
	     * @name Dropdown
	     * @param {jQuery} element - jQuery object to make into a dropdown.
	     *        Object should be of the dropdown panel, rather than its anchor.
	     * @param {Object} options - Overrides to the default plugin settings.
	     */
	    value: function _setup(element, options) {
	      this.$element = element;
	      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, Dropdown.defaults, this.$element.data(), options);
	      this.className = 'Dropdown'; // ie9 back compat
	      // Triggers init is idempotent, just need to make sure it is initialized

	      _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_4__["Triggers"].init(jquery__WEBPACK_IMPORTED_MODULE_0___default.a);

	      this._init();

	      _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__["Keyboard"].register('Dropdown', {
	        'ENTER': 'toggle',
	        'SPACE': 'toggle',
	        'ESCAPE': 'close'
	      });
	    }
	    /**
	     * Initializes the plugin by setting/checking options and attributes, adding helper variables, and saving the anchor.
	     * @function
	     * @private
	     */

	  }, {
	    key: "_init",
	    value: function _init() {
	      var $id = this.$element.attr('id');
	      this.$anchors = jquery__WEBPACK_IMPORTED_MODULE_0___default()("[data-toggle=\"".concat($id, "\"]")).length ? jquery__WEBPACK_IMPORTED_MODULE_0___default()("[data-toggle=\"".concat($id, "\"]")) : jquery__WEBPACK_IMPORTED_MODULE_0___default()("[data-open=\"".concat($id, "\"]"));
	      this.$anchors.attr({
	        'aria-controls': $id,
	        'data-is-focus': false,
	        'data-yeti-box': $id,
	        'aria-haspopup': true,
	        'aria-expanded': false
	      });

	      this._setCurrentAnchor(this.$anchors.first());

	      if (this.options.parentClass) {
	        this.$parent = this.$element.parents('.' + this.options.parentClass);
	      } else {
	        this.$parent = null;
	      } // Do not change the `labelledby` if it is defined


	      var labelledby = this.$element.attr('aria-labelledby') || this.$currentAnchor.attr('id') || Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__["GetYoDigits"])(6, 'dd-anchor');
	      this.$element.attr({
	        'aria-hidden': 'true',
	        'data-yeti-box': $id,
	        'data-resize': $id,
	        'aria-labelledby': labelledby
	      });

	      _get(_getPrototypeOf(Dropdown.prototype), "_init", this).call(this);

	      this._events();
	    }
	  }, {
	    key: "_getDefaultPosition",
	    value: function _getDefaultPosition() {
	      // handle legacy classnames
	      var position = this.$element[0].className.match(/(top|left|right|bottom)/g);

	      if (position) {
	        return position[0];
	      } else {
	        return 'bottom';
	      }
	    }
	  }, {
	    key: "_getDefaultAlignment",
	    value: function _getDefaultAlignment() {
	      // handle legacy float approach
	      var horizontalPosition = /float-(\S+)/.exec(this.$currentAnchor.attr('class'));

	      if (horizontalPosition) {
	        return horizontalPosition[1];
	      }

	      return _get(_getPrototypeOf(Dropdown.prototype), "_getDefaultAlignment", this).call(this);
	    }
	    /**
	     * Sets the position and orientation of the dropdown pane, checks for collisions if allow-overlap is not true.
	     * Recursively calls itself if a collision is detected, with a new position class.
	     * @function
	     * @private
	     */

	  }, {
	    key: "_setPosition",
	    value: function _setPosition() {
	      this.$element.removeClass("has-position-".concat(this.position, " has-alignment-").concat(this.alignment));

	      _get(_getPrototypeOf(Dropdown.prototype), "_setPosition", this).call(this, this.$currentAnchor, this.$element, this.$parent);

	      this.$element.addClass("has-position-".concat(this.position, " has-alignment-").concat(this.alignment));
	    }
	    /**
	     * Make it a current anchor.
	     * Current anchor as the reference for the position of Dropdown panes.
	     * @param {HTML} el - DOM element of the anchor.
	     * @function
	     * @private
	     */

	  }, {
	    key: "_setCurrentAnchor",
	    value: function _setCurrentAnchor(el) {
	      this.$currentAnchor = jquery__WEBPACK_IMPORTED_MODULE_0___default()(el);
	    }
	    /**
	     * Adds event listeners to the element utilizing the triggers utility library.
	     * @function
	     * @private
	     */

	  }, {
	    key: "_events",
	    value: function _events() {
	      var _this = this;

	      this.$element.on({
	        'open.zf.trigger': this.open.bind(this),
	        'close.zf.trigger': this.close.bind(this),
	        'toggle.zf.trigger': this.toggle.bind(this),
	        'resizeme.zf.trigger': this._setPosition.bind(this)
	      });
	      this.$anchors.off('click.zf.trigger').on('click.zf.trigger', function () {
	        _this._setCurrentAnchor(this);
	      });

	      if (this.options.hover) {
	        this.$anchors.off('mouseenter.zf.dropdown mouseleave.zf.dropdown').on('mouseenter.zf.dropdown', function () {
	          _this._setCurrentAnchor(this);

	          var bodyData = jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').data();

	          if (typeof bodyData.whatinput === 'undefined' || bodyData.whatinput === 'mouse') {
	            clearTimeout(_this.timeout);
	            _this.timeout = setTimeout(function () {
	              _this.open();

	              _this.$anchors.data('hover', true);
	            }, _this.options.hoverDelay);
	          }
	        }).on('mouseleave.zf.dropdown', function () {
	          clearTimeout(_this.timeout);
	          _this.timeout = setTimeout(function () {
	            _this.close();

	            _this.$anchors.data('hover', false);
	          }, _this.options.hoverDelay);
	        });

	        if (this.options.hoverPane) {
	          this.$element.off('mouseenter.zf.dropdown mouseleave.zf.dropdown').on('mouseenter.zf.dropdown', function () {
	            clearTimeout(_this.timeout);
	          }).on('mouseleave.zf.dropdown', function () {
	            clearTimeout(_this.timeout);
	            _this.timeout = setTimeout(function () {
	              _this.close();

	              _this.$anchors.data('hover', false);
	            }, _this.options.hoverDelay);
	          });
	        }
	      }

	      this.$anchors.add(this.$element).on('keydown.zf.dropdown', function (e) {
	        var $target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),
	            visibleFocusableElements = _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__["Keyboard"].findFocusable(_this.$element);
	        _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__["Keyboard"].handleKey(e, 'Dropdown', {
	          open: function open() {
	            if ($target.is(_this.$anchors) && !$target.is('input, textarea')) {
	              _this.open();

	              _this.$element.attr('tabindex', -1).focus();

	              e.preventDefault();
	            }
	          },
	          close: function close() {
	            _this.close();

	            _this.$anchors.focus();
	          }
	        });
	      });
	    }
	    /**
	     * Adds an event handler to the body to close any dropdowns on a click.
	     * @function
	     * @private
	     */

	  }, {
	    key: "_addBodyHandler",
	    value: function _addBodyHandler() {
	      var $body = jquery__WEBPACK_IMPORTED_MODULE_0___default()(document.body).not(this.$element),
	          _this = this;

	      $body.off('click.zf.dropdown').on('click.zf.dropdown', function (e) {
	        if (_this.$anchors.is(e.target) || _this.$anchors.find(e.target).length) {
	          return;
	        }

	        if (_this.$element.is(e.target) || _this.$element.find(e.target).length) {
	          return;
	        }

	        _this.close();

	        $body.off('click.zf.dropdown');
	      });
	    }
	    /**
	     * Opens the dropdown pane, and fires a bubbling event to close other dropdowns.
	     * @function
	     * @fires Dropdown#closeme
	     * @fires Dropdown#show
	     */

	  }, {
	    key: "open",
	    value: function open() {
	      // var _this = this;

	      /**
	       * Fires to close other open dropdowns, typically when dropdown is opening
	       * @event Dropdown#closeme
	       */
	      this.$element.trigger('closeme.zf.dropdown', this.$element.attr('id'));
	      this.$anchors.addClass('hover').attr({
	        'aria-expanded': true
	      }); // this.$element/*.show()*/;

	      this.$element.addClass('is-opening');

	      this._setPosition();

	      this.$element.removeClass('is-opening').addClass('is-open').attr({
	        'aria-hidden': false
	      });

	      if (this.options.autoFocus) {
	        var $focusable = _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__["Keyboard"].findFocusable(this.$element);

	        if ($focusable.length) {
	          $focusable.eq(0).focus();
	        }
	      }

	      if (this.options.closeOnClick) {
	        this._addBodyHandler();
	      }

	      if (this.options.trapFocus) {
	        _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__["Keyboard"].trapFocus(this.$element);
	      }
	      /**
	       * Fires once the dropdown is visible.
	       * @event Dropdown#show
	       */


	      this.$element.trigger('show.zf.dropdown', [this.$element]);
	    }
	    /**
	     * Closes the open dropdown pane.
	     * @function
	     * @fires Dropdown#hide
	     */

	  }, {
	    key: "close",
	    value: function close() {
	      if (!this.$element.hasClass('is-open')) {
	        return false;
	      }

	      this.$element.removeClass('is-open').attr({
	        'aria-hidden': true
	      });
	      this.$anchors.removeClass('hover').attr('aria-expanded', false);
	      /**
	       * Fires once the dropdown is no longer visible.
	       * @event Dropdown#hide
	       */

	      this.$element.trigger('hide.zf.dropdown', [this.$element]);

	      if (this.options.trapFocus) {
	        _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__["Keyboard"].releaseFocus(this.$element);
	      }
	    }
	    /**
	     * Toggles the dropdown pane's visibility.
	     * @function
	     */

	  }, {
	    key: "toggle",
	    value: function toggle() {
	      if (this.$element.hasClass('is-open')) {
	        if (this.$anchors.data('hover')) return;
	        this.close();
	      } else {
	        this.open();
	      }
	    }
	    /**
	     * Destroys the dropdown.
	     * @function
	     */

	  }, {
	    key: "_destroy",
	    value: function _destroy() {
	      this.$element.off('.zf.trigger').hide();
	      this.$anchors.off('.zf.dropdown');
	      jquery__WEBPACK_IMPORTED_MODULE_0___default()(document.body).off('click.zf.dropdown');
	    }
	  }]);

	  return Dropdown;
	}(_foundation_positionable__WEBPACK_IMPORTED_MODULE_3__["Positionable"]);

	Dropdown.defaults = {
	  /**
	   * Class that designates bounding container of Dropdown (default: window)
	   * @option
	   * @type {?string}
	   * @default null
	   */
	  parentClass: null,

	  /**
	   * Amount of time to delay opening a submenu on hover event.
	   * @option
	   * @type {number}
	   * @default 250
	   */
	  hoverDelay: 250,

	  /**
	   * Allow submenus to open on hover events
	   * @option
	   * @type {boolean}
	   * @default false
	   */
	  hover: false,

	  /**
	   * Don't close dropdown when hovering over dropdown pane
	   * @option
	   * @type {boolean}
	   * @default false
	   */
	  hoverPane: false,

	  /**
	   * Number of pixels between the dropdown pane and the triggering element on open.
	   * @option
	   * @type {number}
	   * @default 0
	   */
	  vOffset: 0,

	  /**
	   * Number of pixels between the dropdown pane and the triggering element on open.
	   * @option
	   * @type {number}
	   * @default 0
	   */
	  hOffset: 0,

	  /**
	   * Position of dropdown. Can be left, right, bottom, top, or auto.
	   * @option
	   * @type {string}
	   * @default 'auto'
	   */
	  position: 'auto',

	  /**
	   * Alignment of dropdown relative to anchor. Can be left, right, bottom, top, center, or auto.
	   * @option
	   * @type {string}
	   * @default 'auto'
	   */
	  alignment: 'auto',

	  /**
	   * Allow overlap of container/window. If false, dropdown will first try to position as defined by data-position and data-alignment, but reposition if it would cause an overflow.
	   * @option
	   * @type {boolean}
	   * @default false
	   */
	  allowOverlap: false,

	  /**
	   * Allow overlap of only the bottom of the container. This is the most common
	   * behavior for dropdowns, allowing the dropdown to extend the bottom of the
	   * screen but not otherwise influence or break out of the container.
	   * @option
	   * @type {boolean}
	   * @default true
	   */
	  allowBottomOverlap: true,

	  /**
	   * Allow the plugin to trap focus to the dropdown pane if opened with keyboard commands.
	   * @option
	   * @type {boolean}
	   * @default false
	   */
	  trapFocus: false,

	  /**
	   * Allow the plugin to set focus to the first focusable element within the pane, regardless of method of opening.
	   * @option
	   * @type {boolean}
	   * @default false
	   */
	  autoFocus: false,

	  /**
	   * Allows a click on the body to close the dropdown.
	   * @option
	   * @type {boolean}
	   * @default false
	   */
	  closeOnClick: false
	};


	/***/ }),

	/***/ "./js/foundation.dropdownMenu.js":
	/*!***************************************!*\
	  !*** ./js/foundation.dropdownMenu.js ***!
	  \***************************************/
	/*! exports provided: DropdownMenu */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {

	"use strict";
	__webpack_require__.r(__webpack_exports__);
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownMenu", function() { return DropdownMenu; });
	/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
	/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
	/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.core.plugin */ "./js/foundation.core.plugin.js");
	/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.core.utils */ "./js/foundation.core.utils.js");
	/* harmony import */ var _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.util.keyboard */ "./js/foundation.util.keyboard.js");
	/* harmony import */ var _foundation_util_nest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation.util.nest */ "./js/foundation.util.nest.js");
	/* harmony import */ var _foundation_util_box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./foundation.util.box */ "./js/foundation.util.box.js");


	function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

	function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

	function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

	function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

	function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

	function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







	/**
	 * DropdownMenu module.
	 * @module foundation.dropdown-menu
	 * @requires foundation.util.keyboard
	 * @requires foundation.util.box
	 * @requires foundation.util.nest
	 */

	var DropdownMenu =
	/*#__PURE__*/
	function (_Plugin) {
	  _inherits(DropdownMenu, _Plugin);

	  function DropdownMenu() {
	    _classCallCheck(this, DropdownMenu);

	    return _possibleConstructorReturn(this, _getPrototypeOf(DropdownMenu).apply(this, arguments));
	  }

	  _createClass(DropdownMenu, [{
	    key: "_setup",

	    /**
	     * Creates a new instance of DropdownMenu.
	     * @class
	     * @name DropdownMenu
	     * @fires DropdownMenu#init
	     * @param {jQuery} element - jQuery object to make into a dropdown menu.
	     * @param {Object} options - Overrides to the default plugin settings.
	     */
	    value: function _setup(element, options) {
	      this.$element = element;
	      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, DropdownMenu.defaults, this.$element.data(), options);
	      this.className = 'DropdownMenu'; // ie9 back compat

	      this._init();

	      _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_3__["Keyboard"].register('DropdownMenu', {
	        'ENTER': 'open',
	        'SPACE': 'open',
	        'ARROW_RIGHT': 'next',
	        'ARROW_UP': 'up',
	        'ARROW_DOWN': 'down',
	        'ARROW_LEFT': 'previous',
	        'ESCAPE': 'close'
	      });
	    }
	    /**
	     * Initializes the plugin, and calls _prepareMenu
	     * @private
	     * @function
	     */

	  }, {
	    key: "_init",
	    value: function _init() {
	      _foundation_util_nest__WEBPACK_IMPORTED_MODULE_4__["Nest"].Feather(this.$element, 'dropdown');
	      var subs = this.$element.find('li.is-dropdown-submenu-parent');
	      this.$element.children('.is-dropdown-submenu-parent').children('.is-dropdown-submenu').addClass('first-sub');
	      this.$menuItems = this.$element.find('[role="menuitem"]');
	      this.$tabs = this.$element.children('[role="menuitem"]');
	      this.$tabs.find('ul.is-dropdown-submenu').addClass(this.options.verticalClass);

	      if (this.options.alignment === 'auto') {
	        if (this.$element.hasClass(this.options.rightClass) || Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__["rtl"])() || this.$element.parents('.top-bar-right').is('*')) {
	          this.options.alignment = 'right';
	          subs.addClass('opens-left');
	        } else {
	          this.options.alignment = 'left';
	          subs.addClass('opens-right');
	        }
	      } else {
	        if (this.options.alignment === 'right') {
	          subs.addClass('opens-left');
	        } else {
	          subs.addClass('opens-right');
	        }
	      }

	      this.changed = false;

	      this._events();
	    }
	  }, {
	    key: "_isVertical",
	    value: function _isVertical() {
	      return this.$tabs.css('display') === 'block' || this.$element.css('flex-direction') === 'column';
	    }
	  }, {
	    key: "_isRtl",
	    value: function _isRtl() {
	      return this.$element.hasClass('align-right') || Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__["rtl"])() && !this.$element.hasClass('align-left');
	    }
	    /**
	     * Adds event listeners to elements within the menu
	     * @private
	     * @function
	     */

	  }, {
	    key: "_events",
	    value: function _events() {
	      var _this = this,
	          hasTouch = 'ontouchstart' in window || typeof window.ontouchstart !== 'undefined',
	          parClass = 'is-dropdown-submenu-parent'; // used for onClick and in the keyboard handlers


	      var handleClickFn = function handleClickFn(e) {
	        var $elem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).parentsUntil('ul', ".".concat(parClass)),
	            hasSub = $elem.hasClass(parClass),
	            hasClicked = $elem.attr('data-is-click') === 'true',
	            $sub = $elem.children('.is-dropdown-submenu');

	        if (hasSub) {
	          if (hasClicked) {
	            if (!_this.options.closeOnClick || !_this.options.clickOpen && !hasTouch || _this.options.forceFollow && hasTouch) {
	              return;
	            } else {
	              e.stopImmediatePropagation();
	              e.preventDefault();

	              _this._hide($elem);
	            }
	          } else {
	            e.preventDefault();
	            e.stopImmediatePropagation();

	            _this._show($sub);

	            $elem.add($elem.parentsUntil(_this.$element, ".".concat(parClass))).attr('data-is-click', true);
	          }
	        }
	      };

	      if (this.options.clickOpen || hasTouch) {
	        this.$menuItems.on('click.zf.dropdownmenu touchstart.zf.dropdownmenu', handleClickFn);
	      } // Handle Leaf element Clicks


	      if (_this.options.closeOnClickInside) {
	        this.$menuItems.on('click.zf.dropdownmenu', function (e) {
	          var $elem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),
	              hasSub = $elem.hasClass(parClass);

	          if (!hasSub) {
	            _this._hide();
	          }
	        });
	      }

	      if (!this.options.disableHover) {
	        this.$menuItems.on('mouseenter.zf.dropdownmenu', function (e) {
	          var $elem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),
	              hasSub = $elem.hasClass(parClass);

	          if (hasSub) {
	            clearTimeout($elem.data('_delay'));
	            $elem.data('_delay', setTimeout(function () {
	              _this._show($elem.children('.is-dropdown-submenu'));
	            }, _this.options.hoverDelay));
	          }
	        });
	        Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__["onLeaveElement"])(this.$menuItems, function (e) {
	          var $elem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),
	              hasSub = $elem.hasClass(parClass);

	          if (hasSub && _this.options.autoclose) {
	            if ($elem.attr('data-is-click') === 'true' && _this.options.clickOpen) {
	              return false;
	            }

	            clearTimeout($elem.data('_delay'));
	            $elem.data('_delay', setTimeout(function () {
	              _this._hide($elem);
	            }, _this.options.closingTime));
	          }
	        });
	      }

	      this.$menuItems.on('keydown.zf.dropdownmenu', function (e) {
	        var $element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).parentsUntil('ul', '[role="menuitem"]'),
	            isTab = _this.$tabs.index($element) > -1,
	            $elements = isTab ? _this.$tabs : $element.siblings('li').add($element),
	            $prevElement,
	            $nextElement;
	        $elements.each(function (i) {
	          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).is($element)) {
	            $prevElement = $elements.eq(i - 1);
	            $nextElement = $elements.eq(i + 1);
	            return;
	          }
	        });

	        var nextSibling = function nextSibling() {
	          $nextElement.children('a:first').focus();
	          e.preventDefault();
	        },
	            prevSibling = function prevSibling() {
	          $prevElement.children('a:first').focus();
	          e.preventDefault();
	        },
	            openSub = function openSub() {
	          var $sub = $element.children('ul.is-dropdown-submenu');

	          if ($sub.length) {
	            _this._show($sub);

	            $element.find('li > a:first').focus();
	            e.preventDefault();
	          } else {
	            return;
	          }
	        },
	            closeSub = function closeSub() {
	          //if ($element.is(':first-child')) {
	          var close = $element.parent('ul').parent('li');
	          close.children('a:first').focus();

	          _this._hide(close);

	          e.preventDefault(); //}
	        };

	        var functions = {
	          open: openSub,
	          close: function close() {
	            _this._hide(_this.$element);

	            _this.$menuItems.eq(0).children('a').focus(); // focus to first element


	            e.preventDefault();
	          },
	          handled: function handled() {
	            e.stopImmediatePropagation();
	          }
	        };

	        if (isTab) {
	          if (_this._isVertical()) {
	            // vertical menu
	            if (_this._isRtl()) {
	              // right aligned
	              jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend(functions, {
	                down: nextSibling,
	                up: prevSibling,
	                next: closeSub,
	                previous: openSub
	              });
	            } else {
	              // left aligned
	              jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend(functions, {
	                down: nextSibling,
	                up: prevSibling,
	                next: openSub,
	                previous: closeSub
	              });
	            }
	          } else {
	            // horizontal menu
	            if (_this._isRtl()) {
	              // right aligned
	              jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend(functions, {
	                next: prevSibling,
	                previous: nextSibling,
	                down: openSub,
	                up: closeSub
	              });
	            } else {
	              // left aligned
	              jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend(functions, {
	                next: nextSibling,
	                previous: prevSibling,
	                down: openSub,
	                up: closeSub
	              });
	            }
	          }
	        } else {
	          // not tabs -> one sub
	          if (_this._isRtl()) {
	            // right aligned
	            jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend(functions, {
	              next: closeSub,
	              previous: openSub,
	              down: nextSibling,
	              up: prevSibling
	            });
	          } else {
	            // left aligned
	            jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend(functions, {
	              next: openSub,
	              previous: closeSub,
	              down: nextSibling,
	              up: prevSibling
	            });
	          }
	        }

	        _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_3__["Keyboard"].handleKey(e, 'DropdownMenu', functions);
	      });
	    }
	    /**
	     * Adds an event handler to the body to close any dropdowns on a click.
	     * @function
	     * @private
	     */

	  }, {
	    key: "_addBodyHandler",
	    value: function _addBodyHandler() {
	      var $body = jquery__WEBPACK_IMPORTED_MODULE_0___default()(document.body),
	          _this = this;

	      $body.off('mouseup.zf.dropdownmenu touchend.zf.dropdownmenu').on('mouseup.zf.dropdownmenu touchend.zf.dropdownmenu', function (e) {
	        var $link = _this.$element.find(e.target);

	        if ($link.length) {
	          return;
	        }

	        _this._hide();

	        $body.off('mouseup.zf.dropdownmenu touchend.zf.dropdownmenu');
	      });
	    }
	    /**
	     * Opens a dropdown pane, and checks for collisions first.
	     * @param {jQuery} $sub - ul element that is a submenu to show
	     * @function
	     * @private
	     * @fires Dropdownmenu#show
	     */

	  }, {
	    key: "_show",
	    value: function _show($sub) {
	      var idx = this.$tabs.index(this.$tabs.filter(function (i, el) {
	        return jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).find($sub).length > 0;
	      }));
	      var $sibs = $sub.parent('li.is-dropdown-submenu-parent').siblings('li.is-dropdown-submenu-parent');

	      this._hide($sibs, idx);

	      $sub.css('visibility', 'hidden').addClass('js-dropdown-active').parent('li.is-dropdown-submenu-parent').addClass('is-active');
	      var clear = _foundation_util_box__WEBPACK_IMPORTED_MODULE_5__["Box"].ImNotTouchingYou($sub, null, true);

	      if (!clear) {
	        var oldClass = this.options.alignment === 'left' ? '-right' : '-left',
	            $parentLi = $sub.parent('.is-dropdown-submenu-parent');
	        $parentLi.removeClass("opens".concat(oldClass)).addClass("opens-".concat(this.options.alignment));
	        clear = _foundation_util_box__WEBPACK_IMPORTED_MODULE_5__["Box"].ImNotTouchingYou($sub, null, true);

	        if (!clear) {
	          $parentLi.removeClass("opens-".concat(this.options.alignment)).addClass('opens-inner');
	        }

	        this.changed = true;
	      }

	      $sub.css('visibility', '');

	      if (this.options.closeOnClick) {
	        this._addBodyHandler();
	      }
	      /**
	       * Fires when the new dropdown pane is visible.
	       * @event Dropdownmenu#show
	       */


	      this.$element.trigger('show.zf.dropdownmenu', [$sub]);
	    }
	    /**
	     * Hides a single, currently open dropdown pane, if passed a parameter, otherwise, hides everything.
	     * @function
	     * @param {jQuery} $elem - element with a submenu to hide
	     * @param {Number} idx - index of the $tabs collection to hide
	     * @private
	     */

	  }, {
	    key: "_hide",
	    value: function _hide($elem, idx) {
	      var $toClose;

	      if ($elem && $elem.length) {
	        $toClose = $elem;
	      } else if (typeof idx !== 'undefined') {
	        $toClose = this.$tabs.not(function (i, el) {
	          return i === idx;
	        });
	      } else {
	        $toClose = this.$element;
	      }

	      var somethingToClose = $toClose.hasClass('is-active') || $toClose.find('.is-active').length > 0;

	      if (somethingToClose) {
	        $toClose.find('li.is-active').add($toClose).attr({
	          'data-is-click': false
	        }).removeClass('is-active');
	        $toClose.find('ul.js-dropdown-active').removeClass('js-dropdown-active');

	        if (this.changed || $toClose.find('opens-inner').length) {
	          var oldClass = this.options.alignment === 'left' ? 'right' : 'left';
	          $toClose.find('li.is-dropdown-submenu-parent').add($toClose).removeClass("opens-inner opens-".concat(this.options.alignment)).addClass("opens-".concat(oldClass));
	          this.changed = false;
	        }
	        /**
	         * Fires when the open menus are closed.
	         * @event Dropdownmenu#hide
	         */


	        this.$element.trigger('hide.zf.dropdownmenu', [$toClose]);
	      }
	    }
	    /**
	     * Destroys the plugin.
	     * @function
	     */

	  }, {
	    key: "_destroy",
	    value: function _destroy() {
	      this.$menuItems.off('.zf.dropdownmenu').removeAttr('data-is-click').removeClass('is-right-arrow is-left-arrow is-down-arrow opens-right opens-left opens-inner');
	      jquery__WEBPACK_IMPORTED_MODULE_0___default()(document.body).off('.zf.dropdownmenu');
	      _foundation_util_nest__WEBPACK_IMPORTED_MODULE_4__["Nest"].Burn(this.$element, 'dropdown');
	    }
	  }]);

	  return DropdownMenu;
	}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__["Plugin"]);
	/**
	 * Default settings for plugin
	 */


	DropdownMenu.defaults = {
	  /**
	   * Disallows hover events from opening submenus
	   * @option
	   * @type {boolean}
	   * @default false
	   */
	  disableHover: false,

	  /**
	   * Allow a submenu to automatically close on a mouseleave event, if not clicked open.
	   * @option
	   * @type {boolean}
	   * @default true
	   */
	  autoclose: true,

	  /**
	   * Amount of time to delay opening a submenu on hover event.
	   * @option
	   * @type {number}
	   * @default 50
	   */
	  hoverDelay: 50,

	  /**
	   * Allow a submenu to open/remain open on parent click event. Allows cursor to move away from menu.
	   * @option
	   * @type {boolean}
	   * @default false
	   */
	  clickOpen: false,

	  /**
	   * Amount of time to delay closing a submenu on a mouseleave event.
	   * @option
	   * @type {number}
	   * @default 500
	   */
	  closingTime: 500,

	  /**
	   * Position of the menu relative to what direction the submenus should open. Handled by JS. Can be `'auto'`, `'left'` or `'right'`.
	   * @option
	   * @type {string}
	   * @default 'auto'
	   */
	  alignment: 'auto',

	  /**
	   * Allow clicks on the body to close any open submenus.
	   * @option
	   * @type {boolean}
	   * @default true
	   */
	  closeOnClick: true,

	  /**
	   * Allow clicks on leaf anchor links to close any open submenus.
	   * @option
	   * @type {boolean}
	   * @default true
	   */
	  closeOnClickInside: true,

	  /**
	   * Class applied to vertical oriented menus, Foundation default is `vertical`. Update this if using your own class.
	   * @option
	   * @type {string}
	   * @default 'vertical'
	   */
	  verticalClass: 'vertical',

	  /**
	   * Class applied to right-side oriented menus, Foundation default is `align-right`. Update this if using your own class.
	   * @option
	   * @type {string}
	   * @default 'align-right'
	   */
	  rightClass: 'align-right',

	  /**
	   * Boolean to force overide the clicking of links to perform default action, on second touch event for mobile.
	   * @option
	   * @type {boolean}
	   * @default true
	   */
	  forceFollow: true
	};


	/***/ }),

	/***/ "./js/foundation.equalizer.js":
	/*!************************************!*\
	  !*** ./js/foundation.equalizer.js ***!
	  \************************************/
	/*! exports provided: Equalizer */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {

	"use strict";
	__webpack_require__.r(__webpack_exports__);
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Equalizer", function() { return Equalizer; });
	/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
	/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
	/* harmony import */ var _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.util.mediaQuery */ "./js/foundation.util.mediaQuery.js");
	/* harmony import */ var _foundation_util_imageLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.util.imageLoader */ "./js/foundation.util.imageLoader.js");
	/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.core.utils */ "./js/foundation.core.utils.js");
	/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation.core.plugin */ "./js/foundation.core.plugin.js");


	function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

	function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

	function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

	function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

	function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

	function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






	/**
	 * Equalizer module.
	 * @module foundation.equalizer
	 * @requires foundation.util.mediaQuery
	 * @requires foundation.util.imageLoader if equalizer contains images
	 */

	var Equalizer =
	/*#__PURE__*/
	function (_Plugin) {
	  _inherits(Equalizer, _Plugin);

	  function Equalizer() {
	    _classCallCheck(this, Equalizer);

	    return _possibleConstructorReturn(this, _getPrototypeOf(Equalizer).apply(this, arguments));
	  }

	  _createClass(Equalizer, [{
	    key: "_setup",

	    /**
	     * Creates a new instance of Equalizer.
	     * @class
	     * @name Equalizer
	     * @fires Equalizer#init
	     * @param {Object} element - jQuery object to add the trigger to.
	     * @param {Object} options - Overrides to the default plugin settings.
	     */
	    value: function _setup(element, options) {
	      this.$element = element;
	      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, Equalizer.defaults, this.$element.data(), options);
	      this.className = 'Equalizer'; // ie9 back compat

	      this._init();
	    }
	    /**
	     * Initializes the Equalizer plugin and calls functions to get equalizer functioning on load.
	     * @private
	     */

	  }, {
	    key: "_init",
	    value: function _init() {
	      var eqId = this.$element.attr('data-equalizer') || '';
	      var $watched = this.$element.find("[data-equalizer-watch=\"".concat(eqId, "\"]"));

	      _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__["MediaQuery"]._init();

	      this.$watched = $watched.length ? $watched : this.$element.find('[data-equalizer-watch]');
	      this.$element.attr('data-resize', eqId || Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__["GetYoDigits"])(6, 'eq'));
	      this.$element.attr('data-mutate', eqId || Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__["GetYoDigits"])(6, 'eq'));
	      this.hasNested = this.$element.find('[data-equalizer]').length > 0;
	      this.isNested = this.$element.parentsUntil(document.body, '[data-equalizer]').length > 0;
	      this.isOn = false;
	      this._bindHandler = {
	        onResizeMeBound: this._onResizeMe.bind(this),
	        onPostEqualizedBound: this._onPostEqualized.bind(this)
	      };
	      var imgs = this.$element.find('img');
	      var tooSmall;

	      if (this.options.equalizeOn) {
	        tooSmall = this._checkMQ();
	        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('changed.zf.mediaquery', this._checkMQ.bind(this));
	      } else {
	        this._events();
	      }

	      if (typeof tooSmall !== 'undefined' && tooSmall === false || typeof tooSmall === 'undefined') {
	        if (imgs.length) {
	          Object(_foundation_util_imageLoader__WEBPACK_IMPORTED_MODULE_2__["onImagesLoaded"])(imgs, this._reflow.bind(this));
	        } else {
	          this._reflow();
	        }
	      }
	    }
	    /**
	     * Removes event listeners if the breakpoint is too small.
	     * @private
	     */

	  }, {
	    key: "_pauseEvents",
	    value: function _pauseEvents() {
	      this.isOn = false;
	      this.$element.off({
	        '.zf.equalizer': this._bindHandler.onPostEqualizedBound,
	        'resizeme.zf.trigger': this._bindHandler.onResizeMeBound,
	        'mutateme.zf.trigger': this._bindHandler.onResizeMeBound
	      });
	    }
	    /**
	     * function to handle $elements resizeme.zf.trigger, with bound this on _bindHandler.onResizeMeBound
	     * @private
	     */

	  }, {
	    key: "_onResizeMe",
	    value: function _onResizeMe(e) {
	      this._reflow();
	    }
	    /**
	     * function to handle $elements postequalized.zf.equalizer, with bound this on _bindHandler.onPostEqualizedBound
	     * @private
	     */

	  }, {
	    key: "_onPostEqualized",
	    value: function _onPostEqualized(e) {
	      if (e.target !== this.$element[0]) {
	        this._reflow();
	      }
	    }
	    /**
	     * Initializes events for Equalizer.
	     * @private
	     */

	  }, {
	    key: "_events",
	    value: function _events() {
	      var _this = this;

	      this._pauseEvents();

	      if (this.hasNested) {
	        this.$element.on('postequalized.zf.equalizer', this._bindHandler.onPostEqualizedBound);
	      } else {
	        this.$element.on('resizeme.zf.trigger', this._bindHandler.onResizeMeBound);
	        this.$element.on('mutateme.zf.trigger', this._bindHandler.onResizeMeBound);
	      }

	      this.isOn = true;
	    }
	    /**
	     * Checks the current breakpoint to the minimum required size.
	     * @private
	     */

	  }, {
	    key: "_checkMQ",
	    value: function _checkMQ() {
	      var tooSmall = !_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__["MediaQuery"].is(this.options.equalizeOn);

	      if (tooSmall) {
	        if (this.isOn) {
	          this._pauseEvents();

	          this.$watched.css('height', 'auto');
	        }
	      } else {
	        if (!this.isOn) {
	          this._events();
	        }
	      }

	      return tooSmall;
	    }
	    /**
	     * A noop version for the plugin
	     * @private
	     */

	  }, {
	    key: "_killswitch",
	    value: function _killswitch() {
	      return;
	    }
	    /**
	     * Calls necessary functions to update Equalizer upon DOM change
	     * @private
	     */

	  }, {
	    key: "_reflow",
	    value: function _reflow() {
	      if (!this.options.equalizeOnStack) {
	        if (this._isStacked()) {
	          this.$watched.css('height', 'auto');
	          return false;
	        }
	      }

	      if (this.options.equalizeByRow) {
	        this.getHeightsByRow(this.applyHeightByRow.bind(this));
	      } else {
	        this.getHeights(this.applyHeight.bind(this));
	      }
	    }
	    /**
	     * Manually determines if the first 2 elements are *NOT* stacked.
	     * @private
	     */

	  }, {
	    key: "_isStacked",
	    value: function _isStacked() {
	      if (!this.$watched[0] || !this.$watched[1]) {
	        return true;
	      }

	      return this.$watched[0].getBoundingClientRect().top !== this.$watched[1].getBoundingClientRect().top;
	    }
	    /**
	     * Finds the outer heights of children contained within an Equalizer parent and returns them in an array
	     * @param {Function} cb - A non-optional callback to return the heights array to.
	     * @returns {Array} heights - An array of heights of children within Equalizer container
	     */

	  }, {
	    key: "getHeights",
	    value: function getHeights(cb) {
	      var heights = [];

	      for (var i = 0, len = this.$watched.length; i < len; i++) {
	        this.$watched[i].style.height = 'auto';
	        heights.push(this.$watched[i].offsetHeight);
	      }

	      cb(heights);
	    }
	    /**
	     * Finds the outer heights of children contained within an Equalizer parent and returns them in an array
	     * @param {Function} cb - A non-optional callback to return the heights array to.
	     * @returns {Array} groups - An array of heights of children within Equalizer container grouped by row with element,height and max as last child
	     */

	  }, {
	    key: "getHeightsByRow",
	    value: function getHeightsByRow(cb) {
	      var lastElTopOffset = this.$watched.length ? this.$watched.first().offset().top : 0,
	          groups = [],
	          group = 0; //group by Row

	      groups[group] = [];

	      for (var i = 0, len = this.$watched.length; i < len; i++) {
	        this.$watched[i].style.height = 'auto'; //maybe could use this.$watched[i].offsetTop

	        var elOffsetTop = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.$watched[i]).offset().top;

	        if (elOffsetTop != lastElTopOffset) {
	          group++;
	          groups[group] = [];
	          lastElTopOffset = elOffsetTop;
	        }

	        groups[group].push([this.$watched[i], this.$watched[i].offsetHeight]);
	      }

	      for (var j = 0, ln = groups.length; j < ln; j++) {
	        var heights = jquery__WEBPACK_IMPORTED_MODULE_0___default()(groups[j]).map(function () {
	          return this[1];
	        }).get();
	        var max = Math.max.apply(null, heights);
	        groups[j].push(max);
	      }

	      cb(groups);
	    }
	    /**
	     * Changes the CSS height property of each child in an Equalizer parent to match the tallest
	     * @param {array} heights - An array of heights of children within Equalizer container
	     * @fires Equalizer#preequalized
	     * @fires Equalizer#postequalized
	     */

	  }, {
	    key: "applyHeight",
	    value: function applyHeight(heights) {
	      var max = Math.max.apply(null, heights);
	      /**
	       * Fires before the heights are applied
	       * @event Equalizer#preequalized
	       */

	      this.$element.trigger('preequalized.zf.equalizer');
	      this.$watched.css('height', max);
	      /**
	       * Fires when the heights have been applied
	       * @event Equalizer#postequalized
	       */

	      this.$element.trigger('postequalized.zf.equalizer');
	    }
	    /**
	     * Changes the CSS height property of each child in an Equalizer parent to match the tallest by row
	     * @param {array} groups - An array of heights of children within Equalizer container grouped by row with element,height and max as last child
	     * @fires Equalizer#preequalized
	     * @fires Equalizer#preequalizedrow
	     * @fires Equalizer#postequalizedrow
	     * @fires Equalizer#postequalized
	     */

	  }, {
	    key: "applyHeightByRow",
	    value: function applyHeightByRow(groups) {
	      /**
	       * Fires before the heights are applied
	       */
	      this.$element.trigger('preequalized.zf.equalizer');

	      for (var i = 0, len = groups.length; i < len; i++) {
	        var groupsILength = groups[i].length,
	            max = groups[i][groupsILength - 1];

	        if (groupsILength <= 2) {
	          jquery__WEBPACK_IMPORTED_MODULE_0___default()(groups[i][0][0]).css({
	            'height': 'auto'
	          });
	          continue;
	        }
	        /**
	          * Fires before the heights per row are applied
	          * @event Equalizer#preequalizedrow
	          */


	        this.$element.trigger('preequalizedrow.zf.equalizer');

	        for (var j = 0, lenJ = groupsILength - 1; j < lenJ; j++) {
	          jquery__WEBPACK_IMPORTED_MODULE_0___default()(groups[i][j][0]).css({
	            'height': max
	          });
	        }
	        /**
	          * Fires when the heights per row have been applied
	          * @event Equalizer#postequalizedrow
	          */


	        this.$element.trigger('postequalizedrow.zf.equalizer');
	      }
	      /**
	       * Fires when the heights have been applied
	       */


	      this.$element.trigger('postequalized.zf.equalizer');
	    }
	    /**
	     * Destroys an instance of Equalizer.
	     * @function
	     */

	  }, {
	    key: "_destroy",
	    value: function _destroy() {
	      this._pauseEvents();

	      this.$watched.css('height', 'auto');
	    }
	  }]);

	  return Equalizer;
	}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_4__["Plugin"]);
	/**
	 * Default settings for plugin
	 */


	Equalizer.defaults = {
	  /**
	   * Enable height equalization when stacked on smaller screens.
	   * @option
	   * @type {boolean}
	   * @default false
	   */
	  equalizeOnStack: false,

	  /**
	   * Enable height equalization row by row.
	   * @option
	   * @type {boolean}
	   * @default false
	   */
	  equalizeByRow: false,

	  /**
	   * String representing the minimum breakpoint size the plugin should equalize heights on.
	   * @option
	   * @type {string}
	   * @default ''
	   */
	  equalizeOn: ''
	};


	/***/ }),

	/***/ "./js/foundation.interchange.js":
	/*!**************************************!*\
	  !*** ./js/foundation.interchange.js ***!
	  \**************************************/
	/*! exports provided: Interchange */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {

	"use strict";
	__webpack_require__.r(__webpack_exports__);
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Interchange", function() { return Interchange; });
	/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
	/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
	/* harmony import */ var _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.util.mediaQuery */ "./js/foundation.util.mediaQuery.js");
	/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.core.plugin */ "./js/foundation.core.plugin.js");
	/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.core.utils */ "./js/foundation.core.utils.js");


	function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

	function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

	function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

	function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

	function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

	function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





	/**
	 * Interchange module.
	 * @module foundation.interchange
	 * @requires foundation.util.mediaQuery
	 */

	var Interchange =
	/*#__PURE__*/
	function (_Plugin) {
	  _inherits(Interchange, _Plugin);

	  function Interchange() {
	    _classCallCheck(this, Interchange);

	    return _possibleConstructorReturn(this, _getPrototypeOf(Interchange).apply(this, arguments));
	  }

	  _createClass(Interchange, [{
	    key: "_setup",

	    /**
	     * Creates a new instance of Interchange.
	     * @class
	     * @name Interchange
	     * @fires Interchange#init
	     * @param {Object} element - jQuery object to add the trigger to.
	     * @param {Object} options - Overrides to the default plugin settings.
	     */
	    value: function _setup(element, options) {
	      this.$element = element;
	      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, Interchange.defaults, options);
	      this.rules = [];
	      this.currentPath = '';
	      this.className = 'Interchange'; // ie9 back compat

	      this._init();

	      this._events();
	    }
	    /**
	     * Initializes the Interchange plugin and calls functions to get interchange functioning on load.
	     * @function
	     * @private
	     */

	  }, {
	    key: "_init",
	    value: function _init() {
	      _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__["MediaQuery"]._init();

	      var id = this.$element[0].id || Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__["GetYoDigits"])(6, 'interchange');
	      this.$element.attr({
	        'data-resize': id,
	        'id': id
	      });

	      this._addBreakpoints();

	      this._generateRules();

	      this._reflow();
	    }
	    /**
	     * Initializes events for Interchange.
	     * @function
	     * @private
	     */

	  }, {
	    key: "_events",
	    value: function _events() {
	      var _this2 = this;

	      this.$element.off('resizeme.zf.trigger').on('resizeme.zf.trigger', function () {
	        return _this2._reflow();
	      });
	    }
	    /**
	     * Calls necessary functions to update Interchange upon DOM change
	     * @function
	     * @private
	     */

	  }, {
	    key: "_reflow",
	    value: function _reflow() {
	      var match; // Iterate through each rule, but only save the last match

	      for (var i in this.rules) {
	        if (this.rules.hasOwnProperty(i)) {
	          var rule = this.rules[i];

	          if (window.matchMedia(rule.query).matches) {
	            match = rule;
	          }
	        }
	      }

	      if (match) {
	        this.replace(match.path);
	      }
	    }
	    /**
	     * Gets the Foundation breakpoints and adds them to the Interchange.SPECIAL_QUERIES object.
	     * @function
	     * @private
	     */

	  }, {
	    key: "_addBreakpoints",
	    value: function _addBreakpoints() {
	      for (var i in _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__["MediaQuery"].queries) {
	        if (_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__["MediaQuery"].queries.hasOwnProperty(i)) {
	          var query = _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__["MediaQuery"].queries[i];
	          Interchange.SPECIAL_QUERIES[query.name] = query.value;
	        }
	      }
	    }
	    /**
	     * Checks the Interchange element for the provided media query + content pairings
	     * @function
	     * @private
	     * @param {Object} element - jQuery object that is an Interchange instance
	     * @returns {Array} scenarios - Array of objects that have 'mq' and 'path' keys with corresponding keys
	     */

	  }, {
	    key: "_generateRules",
	    value: function _generateRules(element) {
	      var rulesList = [];
	      var rules;

	      if (this.options.rules) {
	        rules = this.options.rules;
	      } else {
	        rules = this.$element.data('interchange');
	      }

	      rules = typeof rules === 'string' ? rules.match(/\[.*?, .*?\]/g) : rules;

	      for (var i in rules) {
	        if (rules.hasOwnProperty(i)) {
	          var rule = rules[i].slice(1, -1).split(', ');
	          var path = rule.slice(0, -1).join('');
	          var query = rule[rule.length - 1];

	          if (Interchange.SPECIAL_QUERIES[query]) {
	            query = Interchange.SPECIAL_QUERIES[query];
	          }

	          rulesList.push({
	            path: path,
	            query: query
	          });
	        }
	      }

	      this.rules = rulesList;
	    }
	    /**
	     * Update the `src` property of an image, or change the HTML of a container, to the specified path.
	     * @function
	     * @param {String} path - Path to the image or HTML partial.
	     * @fires Interchange#replaced
	     */

	  }, {
	    key: "replace",
	    value: function replace(path) {
	      if (this.currentPath === path) return;

	      var _this = this,
	          trigger = 'replaced.zf.interchange'; // Replacing images


	      if (this.$element[0].nodeName === 'IMG') {
	        this.$element.attr('src', path).on('load', function () {
	          _this.currentPath = path;
	        }).trigger(trigger);
	      } // Replacing background images
	      else if (path.match(/\.(gif|jpg|jpeg|png|svg|tiff)([?#].*)?/i)) {
	          path = path.replace(/\(/g, '%28').replace(/\)/g, '%29');
	          this.$element.css({
	            'background-image': 'url(' + path + ')'
	          }).trigger(trigger);
	        } // Replacing HTML
	        else {
	            jquery__WEBPACK_IMPORTED_MODULE_0___default.a.get(path, function (response) {
	              _this.$element.html(response).trigger(trigger);

	              jquery__WEBPACK_IMPORTED_MODULE_0___default()(response).foundation();
	              _this.currentPath = path;
	            });
	          }
	      /**
	       * Fires when content in an Interchange element is done being loaded.
	       * @event Interchange#replaced
	       */
	      // this.$element.trigger('replaced.zf.interchange');

	    }
	    /**
	     * Destroys an instance of interchange.
	     * @function
	     */

	  }, {
	    key: "_destroy",
	    value: function _destroy() {
	      this.$element.off('resizeme.zf.trigger');
	    }
	  }]);

	  return Interchange;
	}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_2__["Plugin"]);
	/**
	 * Default settings for plugin
	 */


	Interchange.defaults = {
	  /**
	   * Rules to be applied to Interchange elements. Set with the `data-interchange` array notation.
	   * @option
	   * @type {?array}
	   * @default null
	   */
	  rules: null
	};
	Interchange.SPECIAL_QUERIES = {
	  'landscape': 'screen and (orientation: landscape)',
	  'portrait': 'screen and (orientation: portrait)',
	  'retina': 'only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min--moz-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx)'
	};


	/***/ }),

	/***/ "./js/foundation.magellan.js":
	/*!***********************************!*\
	  !*** ./js/foundation.magellan.js ***!
	  \***********************************/
	/*! exports provided: Magellan */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {

	"use strict";
	__webpack_require__.r(__webpack_exports__);
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Magellan", function() { return Magellan; });
	/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
	/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
	/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.core.utils */ "./js/foundation.core.utils.js");
	/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.core.plugin */ "./js/foundation.core.plugin.js");
	/* harmony import */ var _foundation_smoothScroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.smoothScroll */ "./js/foundation.smoothScroll.js");


	function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

	function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

	function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

	function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

	function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

	function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





	/**
	 * Magellan module.
	 * @module foundation.magellan
	 * @requires foundation.smoothScroll
	 */

	var Magellan =
	/*#__PURE__*/
	function (_Plugin) {
	  _inherits(Magellan, _Plugin);

	  function Magellan() {
	    _classCallCheck(this, Magellan);

	    return _possibleConstructorReturn(this, _getPrototypeOf(Magellan).apply(this, arguments));
	  }

	  _createClass(Magellan, [{
	    key: "_setup",

	    /**
	     * Creates a new instance of Magellan.
	     * @class
	     * @name Magellan
	     * @fires Magellan#init
	     * @param {Object} element - jQuery object to add the trigger to.
	     * @param {Object} options - Overrides to the default plugin settings.
	     */
	    value: function _setup(element, options) {
	      this.$element = element;
	      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, Magellan.defaults, this.$element.data(), options);
	      this.className = 'Magellan'; // ie9 back compat

	      this._init();

	      this.calcPoints();
	    }
	    /**
	     * Initializes the Magellan plugin and calls functions to get equalizer functioning on load.
	     * @private
	     */

	  }, {
	    key: "_init",
	    value: function _init() {
	      var id = this.$element[0].id || Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__["GetYoDigits"])(6, 'magellan');

	      var _this = this;

	      this.$targets = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-magellan-target]');
	      this.$links = this.$element.find('a');
	      this.$element.attr({
	        'data-resize': id,
	        'data-scroll': id,
	        'id': id
	      });
	      this.$active = jquery__WEBPACK_IMPORTED_MODULE_0___default()();
	      this.scrollPos = parseInt(window.pageYOffset, 10);

	      this._events();
	    }
	    /**
	     * Calculates an array of pixel values that are the demarcation lines between locations on the page.
	     * Can be invoked if new elements are added or the size of a location changes.
	     * @function
	     */

	  }, {
	    key: "calcPoints",
	    value: function calcPoints() {
	      var _this = this,
	          body = document.body,
	          html = document.documentElement;

	      this.points = [];
	      this.winHeight = Math.round(Math.max(window.innerHeight, html.clientHeight));
	      this.docHeight = Math.round(Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight));
	      this.$targets.each(function () {
	        var $tar = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),
	            pt = Math.round($tar.offset().top - _this.options.threshold);
	        $tar.targetPoint = pt;

	        _this.points.push(pt);
	      });
	    }
	    /**
	     * Initializes events for Magellan.
	     * @private
	     */

	  }, {
	    key: "_events",
	    value: function _events() {
	      var _this = this,
	          $body = jquery__WEBPACK_IMPORTED_MODULE_0___default()('html, body'),
	          opts = {
	        duration: _this.options.animationDuration,
	        easing: _this.options.animationEasing
	      };

	      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).one('load', function () {
	        if (_this.options.deepLinking) {
	          if (location.hash) {
	            _this.scrollToLoc(location.hash);
	          }
	        }

	        _this.calcPoints();

	        _this._updateActive();
	      });
	      _this.onLoadListener = Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__["onLoad"])(jquery__WEBPACK_IMPORTED_MODULE_0___default()(window), function () {
	        _this.$element.on({
	          'resizeme.zf.trigger': _this.reflow.bind(_this),
	          'scrollme.zf.trigger': _this._updateActive.bind(_this)
	        }).on('click.zf.magellan', 'a[href^="#"]', function (e) {
	          e.preventDefault();
	          var arrival = this.getAttribute('href');

	          _this.scrollToLoc(arrival);
	        });
	      });

	      this._deepLinkScroll = function (e) {
	        if (_this.options.deepLinking) {
	          _this.scrollToLoc(window.location.hash);
	        }
	      };

	      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('hashchange', this._deepLinkScroll);
	    }
	    /**
	     * Function to scroll to a given location on the page.
	     * @param {String} loc - a properly formatted jQuery id selector. Example: '#foo'
	     * @function
	     */

	  }, {
	    key: "scrollToLoc",
	    value: function scrollToLoc(loc) {
	      this._inTransition = true;

	      var _this = this;

	      var options = {
	        animationEasing: this.options.animationEasing,
	        animationDuration: this.options.animationDuration,
	        threshold: this.options.threshold,
	        offset: this.options.offset
	      };
	      _foundation_smoothScroll__WEBPACK_IMPORTED_MODULE_3__["SmoothScroll"].scrollToLoc(loc, options, function () {
	        _this._inTransition = false;
	      });
	    }
	    /**
	     * Calls necessary functions to update Magellan upon DOM change
	     * @function
	     */

	  }, {
	    key: "reflow",
	    value: function reflow() {
	      this.calcPoints();

	      this._updateActive();
	    }
	    /**
	     * Updates the visibility of an active location link, and updates the url hash for the page, if deepLinking enabled.
	     * @private
	     * @function
	     * @fires Magellan#update
	     */

	  }, {
	    key: "_updateActive",
	    value: function _updateActive()
	    /*evt, elem, scrollPos*/
	    {
	      var _this2 = this;

	      if (this._inTransition) return;
	      var newScrollPos = parseInt(window.pageYOffset, 10);
	      var isScrollingUp = this.scrollPos > newScrollPos;
	      this.scrollPos = newScrollPos;
	      var activeIdx; // Before the first point: no link

	      if (newScrollPos < this.points[0]) {}
	      /* do nothing */
	      // At the bottom of the page: last link
	      else if (newScrollPos + this.winHeight === this.docHeight) {
	          activeIdx = this.points.length - 1;
	        } // Otherwhise, use the last visible link
	        else {
	            var visibleLinks = this.points.filter(function (p, i) {
	              return p - _this2.options.offset - (isScrollingUp ? _this2.options.threshold : 0) <= newScrollPos;
	            });
	            activeIdx = visibleLinks.length ? visibleLinks.length - 1 : 0;
	          } // Get the new active link


	      var $oldActive = this.$active;
	      var activeHash = '';

	      if (typeof activeIdx !== 'undefined') {
	        this.$active = this.$links.filter('[href="#' + this.$targets.eq(activeIdx).data('magellan-target') + '"]');
	        if (this.$active.length) activeHash = this.$active[0].getAttribute('href');
	      } else {
	        this.$active = jquery__WEBPACK_IMPORTED_MODULE_0___default()();
	      }

	      var isNewActive = !(!this.$active.length && !$oldActive.length) && !this.$active.is($oldActive);
	      var isNewHash = activeHash !== window.location.hash; // Update the active link element

	      if (isNewActive) {
	        $oldActive.removeClass(this.options.activeClass);
	        this.$active.addClass(this.options.activeClass);
	      } // Update the hash (it may have changed with the same active link)


	      if (this.options.deepLinking && isNewHash) {
	        if (window.history.pushState) {
	          // Set or remove the hash (see: https://stackoverflow.com/a/5298684/4317384
	          var url = activeHash ? activeHash : window.location.pathname + window.location.search;
	          window.history.pushState(null, null, url);
	        } else {
	          window.location.hash = activeHash;
	        }
	      }

	      if (isNewActive) {
	        /**
	         * Fires when magellan is finished updating to the new active element.
	         * @event Magellan#update
	         */
	        this.$element.trigger('update.zf.magellan', [this.$active]);
	      }
	    }
	    /**
	     * Destroys an instance of Magellan and resets the url of the window.
	     * @function
	     */

	  }, {
	    key: "_destroy",
	    value: function _destroy() {
	      this.$element.off('.zf.trigger .zf.magellan').find(".".concat(this.options.activeClass)).removeClass(this.options.activeClass);

	      if (this.options.deepLinking) {
	        var hash = this.$active[0].getAttribute('href');
	        window.location.hash.replace(hash, '');
	      }

	      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off('hashchange', this._deepLinkScroll);
	      if (this.onLoadListener) jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(this.onLoadListener);
	    }
	  }]);

	  return Magellan;
	}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_2__["Plugin"]);
	/**
	 * Default settings for plugin
	 */


	Magellan.defaults = {
	  /**
	   * Amount of time, in ms, the animated scrolling should take between locations.
	   * @option
	   * @type {number}
	   * @default 500
	   */
	  animationDuration: 500,

	  /**
	   * Animation style to use when scrolling between locations. Can be `'swing'` or `'linear'`.
	   * @option
	   * @type {string}
	   * @default 'linear'
	   * @see {@link https://api.jquery.com/animate|Jquery animate}
	   */
	  animationEasing: 'linear',

	  /**
	   * Number of pixels to use as a marker for location changes.
	   * @option
	   * @type {number}
	   * @default 50
	   */
	  threshold: 50,

	  /**
	   * Class applied to the active locations link on the magellan container.
	   * @option
	   * @type {string}
	   * @default 'is-active'
	   */
	  activeClass: 'is-active',

	  /**
	   * Allows the script to manipulate the url of the current page, and if supported, alter the history.
	   * @option
	   * @type {boolean}
	   * @default false
	   */
	  deepLinking: false,

	  /**
	   * Number of pixels to offset the scroll of the page on item click if using a sticky nav bar.
	   * @option
	   * @type {number}
	   * @default 0
	   */
	  offset: 0
	};


	/***/ }),

	/***/ "./js/foundation.offcanvas.js":
	/*!************************************!*\
	  !*** ./js/foundation.offcanvas.js ***!
	  \************************************/
	/*! exports provided: OffCanvas */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {

	"use strict";
	__webpack_require__.r(__webpack_exports__);
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffCanvas", function() { return OffCanvas; });
	/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
	/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
	/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.core.utils */ "./js/foundation.core.utils.js");
	/* harmony import */ var _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.util.keyboard */ "./js/foundation.util.keyboard.js");
	/* harmony import */ var _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.util.mediaQuery */ "./js/foundation.util.mediaQuery.js");
	/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation.core.plugin */ "./js/foundation.core.plugin.js");
	/* harmony import */ var _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./foundation.util.triggers */ "./js/foundation.util.triggers.js");


	function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

	function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

	function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

	function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

	function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

	function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







	/**
	 * OffCanvas module.
	 * @module foundation.offcanvas
	 * @requires foundation.util.keyboard
	 * @requires foundation.util.mediaQuery
	 * @requires foundation.util.triggers
	 */

	var OffCanvas =
	/*#__PURE__*/
	function (_Plugin) {
	  _inherits(OffCanvas, _Plugin);

	  function OffCanvas() {
	    _classCallCheck(this, OffCanvas);

	    return _possibleConstructorReturn(this, _getPrototypeOf(OffCanvas).apply(this, arguments));
	  }

	  _createClass(OffCanvas, [{
	    key: "_setup",

	    /**
	     * Creates a new instance of an off-canvas wrapper.
	     * @class
	     * @name OffCanvas
	     * @fires OffCanvas#init
	     * @param {Object} element - jQuery object to initialize.
	     * @param {Object} options - Overrides to the default plugin settings.
	     */
	    value: function _setup(element, options) {
	      var _this2 = this;

	      this.className = 'OffCanvas'; // ie9 back compat

	      this.$element = element;
	      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, OffCanvas.defaults, this.$element.data(), options);
	      this.contentClasses = {
	        base: [],
	        reveal: []
	      };
	      this.$lastTrigger = jquery__WEBPACK_IMPORTED_MODULE_0___default()();
	      this.$triggers = jquery__WEBPACK_IMPORTED_MODULE_0___default()();
	      this.position = 'left';
	      this.$content = jquery__WEBPACK_IMPORTED_MODULE_0___default()();
	      this.nested = !!this.options.nested; // Defines the CSS transition/position classes of the off-canvas content container.

	      jquery__WEBPACK_IMPORTED_MODULE_0___default()(['push', 'overlap']).each(function (index, val) {
	        _this2.contentClasses.base.push('has-transition-' + val);
	      });
	      jquery__WEBPACK_IMPORTED_MODULE_0___default()(['left', 'right', 'top', 'bottom']).each(function (index, val) {
	        _this2.contentClasses.base.push('has-position-' + val);

	        _this2.contentClasses.reveal.push('has-reveal-' + val);
	      }); // Triggers init is idempotent, just need to make sure it is initialized

	      _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_5__["Triggers"].init(jquery__WEBPACK_IMPORTED_MODULE_0___default.a);

	      _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_3__["MediaQuery"]._init();

	      this._init();

	      this._events();

	      _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2__["Keyboard"].register('OffCanvas', {
	        'ESCAPE': 'close'
	      });
	    }
	    /**
	     * Initializes the off-canvas wrapper by adding the exit overlay (if needed).
	     * @function
	     * @private
	     */

	  }, {
	    key: "_init",
	    value: function _init() {
	      var id = this.$element.attr('id');
	      this.$element.attr('aria-hidden', 'true'); // Find off-canvas content, either by ID (if specified), by siblings or by closest selector (fallback)

	      if (this.options.contentId) {
	        this.$content = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#' + this.options.contentId);
	      } else if (this.$element.siblings('[data-off-canvas-content]').length) {
	        this.$content = this.$element.siblings('[data-off-canvas-content]').first();
	      } else {
	        this.$content = this.$element.closest('[data-off-canvas-content]').first();
	      }

	      if (!this.options.contentId) {
	        // Assume that the off-canvas element is nested if it isn't a sibling of the content
	        this.nested = this.$element.siblings('[data-off-canvas-content]').length === 0;
	      } else if (this.options.contentId && this.options.nested === null) {
	        // Warning if using content ID without setting the nested option
	        // Once the element is nested it is required to work properly in this case
	        console.warn('Remember to use the nested option if using the content ID option!');
	      }

	      if (this.nested === true) {
	        // Force transition overlap if nested
	        this.options.transition = 'overlap'; // Remove appropriate classes if already assigned in markup

	        this.$element.removeClass('is-transition-push');
	      }

	      this.$element.addClass("is-transition-".concat(this.options.transition, " is-closed")); // Find triggers that affect this element and add aria-expanded to them

	      this.$triggers = jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).find('[data-open="' + id + '"], [data-close="' + id + '"], [data-toggle="' + id + '"]').attr('aria-expanded', 'false').attr('aria-controls', id); // Get position by checking for related CSS class

	      this.position = this.$element.is('.position-left, .position-top, .position-right, .position-bottom') ? this.$element.attr('class').match(/position\-(left|top|right|bottom)/)[1] : this.position; // Add an overlay over the content if necessary

	      if (this.options.contentOverlay === true) {
	        var overlay = document.createElement('div');
	        var overlayPosition = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.$element).css("position") === 'fixed' ? 'is-overlay-fixed' : 'is-overlay-absolute';
	        overlay.setAttribute('class', 'js-off-canvas-overlay ' + overlayPosition);
	        this.$overlay = jquery__WEBPACK_IMPORTED_MODULE_0___default()(overlay);

	        if (overlayPosition === 'is-overlay-fixed') {
	          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.$overlay).insertAfter(this.$element);
	        } else {
	          this.$content.append(this.$overlay);
	        }
	      } // Get the revealOn option from the class.


	      var revealOnRegExp = new RegExp(Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__["RegExpEscape"])(this.options.revealClass) + '([^\\s]+)', 'g');
	      var revealOnClass = revealOnRegExp.exec(this.$element[0].className);

	      if (revealOnClass) {
	        this.options.isRevealed = true;
	        this.options.revealOn = this.options.revealOn || revealOnClass[1];
	      } // Ensure the `reveal-on-*` class is set.


	      if (this.options.isRevealed === true && this.options.revealOn) {
	        this.$element.first().addClass("".concat(this.options.revealClass).concat(this.options.revealOn));

	        this._setMQChecker();
	      }

	      if (this.options.transitionTime) {
	        this.$element.css('transition-duration', this.options.transitionTime);
	      } // Initally remove all transition/position CSS classes from off-canvas content container.


	      this._removeContentClasses();
	    }
	    /**
	     * Adds event handlers to the off-canvas wrapper and the exit overlay.
	     * @function
	     * @private
	     */

	  }, {
	    key: "_events",
	    value: function _events() {
	      this.$element.off('.zf.trigger .zf.offcanvas').on({
	        'open.zf.trigger': this.open.bind(this),
	        'close.zf.trigger': this.close.bind(this),
	        'toggle.zf.trigger': this.toggle.bind(this),
	        'keydown.zf.offcanvas': this._handleKeyboard.bind(this)
	      });

	      if (this.options.closeOnClick === true) {
	        var $target = this.options.contentOverlay ? this.$overlay : this.$content;
	        $target.on({
	          'click.zf.offcanvas': this.close.bind(this)
	        });
	      }
	    }
	    /**
	     * Applies event listener for elements that will reveal at certain breakpoints.
	     * @private
	     */

	  }, {
	    key: "_setMQChecker",
	    value: function _setMQChecker() {
	      var _this = this;

	      this.onLoadListener = Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__["onLoad"])(jquery__WEBPACK_IMPORTED_MODULE_0___default()(window), function () {
	        if (_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_3__["MediaQuery"].atLeast(_this.options.revealOn)) {
	          _this.reveal(true);
	        }
	      });
	      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('changed.zf.mediaquery', function () {
	        if (_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_3__["MediaQuery"].atLeast(_this.options.revealOn)) {
	          _this.reveal(true);
	        } else {
	          _this.reveal(false);
	        }
	      });
	    }
	    /**
	     * Removes the CSS transition/position classes of the off-canvas content container.
	     * Removing the classes is important when another off-canvas gets opened that uses the same content container.
	     * @param {Boolean} hasReveal - true if related off-canvas element is revealed.
	     * @private
	     */

	  }, {
	    key: "_removeContentClasses",
	    value: function _removeContentClasses(hasReveal) {
	      if (typeof hasReveal !== 'boolean') {
	        this.$content.removeClass(this.contentClasses.base.join(' '));
	      } else if (hasReveal === false) {
	        this.$content.removeClass("has-reveal-".concat(this.position));
	      }
	    }
	    /**
	     * Adds the CSS transition/position classes of the off-canvas content container, based on the opening off-canvas element.
	     * Beforehand any transition/position class gets removed.
	     * @param {Boolean} hasReveal - true if related off-canvas element is revealed.
	     * @private
	     */

	  }, {
	    key: "_addContentClasses",
	    value: function _addContentClasses(hasReveal) {
	      this._removeContentClasses(hasReveal);

	      if (typeof hasReveal !== 'boolean') {
	        this.$content.addClass("has-transition-".concat(this.options.transition, " has-position-").concat(this.position));
	      } else if (hasReveal === true) {
	        this.$content.addClass("has-reveal-".concat(this.position));
	      }
	    }
	    /**
	     * Handles the revealing/hiding the off-canvas at breakpoints, not the same as open.
	     * @param {Boolean} isRevealed - true if element should be revealed.
	     * @function
	     */

	  }, {
	    key: "reveal",
	    value: function reveal(isRevealed) {
	      if (isRevealed) {
	        this.close();
	        this.isRevealed = true;
	        this.$element.attr('aria-hidden', 'false');
	        this.$element.off('open.zf.trigger toggle.zf.trigger');
	        this.$element.removeClass('is-closed');
	      } else {
	        this.isRevealed = false;
	        this.$element.attr('aria-hidden', 'true');
	        this.$element.off('open.zf.trigger toggle.zf.trigger').on({
	          'open.zf.trigger': this.open.bind(this),
	          'toggle.zf.trigger': this.toggle.bind(this)
	        });
	        this.$element.addClass('is-closed');
	      }

	      this._addContentClasses(isRevealed);
	    }
	    /**
	     * Stops scrolling of the body when offcanvas is open on mobile Safari and other troublesome browsers.
	     * @private
	     */

	  }, {
	    key: "_stopScrolling",
	    value: function _stopScrolling(event) {
	      return false;
	    } // Taken and adapted from http://stackoverflow.com/questions/16889447/prevent-full-page-scrolling-ios
	    // Only really works for y, not sure how to extend to x or if we need to.

	  }, {
	    key: "_recordScrollable",
	    value: function _recordScrollable(event) {
	      var elem = this; // called from event handler context with this as elem
	      // If the element is scrollable (content overflows), then...

	      if (elem.scrollHeight !== elem.clientHeight) {
	        // If we're at the top, scroll down one pixel to allow scrolling up
	        if (elem.scrollTop === 0) {
	          elem.scrollTop = 1;
	        } // If we're at the bottom, scroll up one pixel to allow scrolling down


	        if (elem.scrollTop === elem.scrollHeight - elem.clientHeight) {
	          elem.scrollTop = elem.scrollHeight - elem.clientHeight - 1;
	        }
	      }

	      elem.allowUp = elem.scrollTop > 0;
	      elem.allowDown = elem.scrollTop < elem.scrollHeight - elem.clientHeight;
	      elem.lastY = event.originalEvent.pageY;
	    }
	  }, {
	    key: "_stopScrollPropagation",
	    value: function _stopScrollPropagation(event) {
	      var elem = this; // called from event handler context with this as elem

	      var up = event.pageY < elem.lastY;
	      var down = !up;
	      elem.lastY = event.pageY;

	      if (up && elem.allowUp || down && elem.allowDown) {
	        event.stopPropagation();
	      } else {
	        event.preventDefault();
	      }
	    }
	    /**
	     * Opens the off-canvas menu.
	     * @function
	     * @param {Object} event - Event object passed from listener.
	     * @param {jQuery} trigger - element that triggered the off-canvas to open.
	     * @fires Offcanvas#opened
	     * @todo also trigger 'open' event?
	     */

	  }, {
	    key: "open",
	    value: function open(event, trigger) {
	      if (this.$element.hasClass('is-open') || this.isRevealed) {
	        return;
	      }

	      var _this = this;

	      if (trigger) {
	        this.$lastTrigger = trigger;
	      }

	      if (this.options.forceTo === 'top') {
	        window.scrollTo(0, 0);
	      } else if (this.options.forceTo === 'bottom') {
	        window.scrollTo(0, document.body.scrollHeight);
	      }

	      if (this.options.transitionTime && this.options.transition !== 'overlap') {
	        this.$element.siblings('[data-off-canvas-content]').css('transition-duration', this.options.transitionTime);
	      } else {
	        this.$element.siblings('[data-off-canvas-content]').css('transition-duration', '');
	      }

	      this.$element.addClass('is-open').removeClass('is-closed');
	      this.$triggers.attr('aria-expanded', 'true');
	      this.$element.attr('aria-hidden', 'false');
	      this.$content.addClass('is-open-' + this.position); // If `contentScroll` is set to false, add class and disable scrolling on touch devices.

	      if (this.options.contentScroll === false) {
	        jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').addClass('is-off-canvas-open').on('touchmove', this._stopScrolling);
	        this.$element.on('touchstart', this._recordScrollable);
	        this.$element.on('touchmove', this._stopScrollPropagation);
	      }

	      if (this.options.contentOverlay === true) {
	        this.$overlay.addClass('is-visible');
	      }

	      if (this.options.closeOnClick === true && this.options.contentOverlay === true) {
	        this.$overlay.addClass('is-closable');
	      }

	      if (this.options.autoFocus === true) {
	        this.$element.one(Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__["transitionend"])(this.$element), function () {
	          if (!_this.$element.hasClass('is-open')) {
	            return; // exit if prematurely closed
	          }

	          var canvasFocus = _this.$element.find('[data-autofocus]');

	          if (canvasFocus.length) {
	            canvasFocus.eq(0).focus();
	          } else {
	            _this.$element.find('a, button').eq(0).focus();
	          }
	        });
	      }

	      if (this.options.trapFocus === true) {
	        this.$content.attr('tabindex', '-1');
	        _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2__["Keyboard"].trapFocus(this.$element);
	      }

	      this._addContentClasses();
	      /**
	       * Fires when the off-canvas menu opens.
	       * @event Offcanvas#opened
	       */


	      this.$element.trigger('opened.zf.offcanvas');
	    }
	    /**
	     * Closes the off-canvas menu.
	     * @function
	     * @param {Function} cb - optional cb to fire after closure.
	     * @fires Offcanvas#closed
	     */

	  }, {
	    key: "close",
	    value: function close(cb) {
	      if (!this.$element.hasClass('is-open') || this.isRevealed) {
	        return;
	      }

	      var _this = this;

	      this.$element.removeClass('is-open');
	      this.$element.attr('aria-hidden', 'true')
	      /**
	       * Fires when the off-canvas menu opens.
	       * @event Offcanvas#closed
	       */
	      .trigger('closed.zf.offcanvas');
	      this.$content.removeClass('is-open-left is-open-top is-open-right is-open-bottom'); // If `contentScroll` is set to false, remove class and re-enable scrolling on touch devices.

	      if (this.options.contentScroll === false) {
	        jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').removeClass('is-off-canvas-open').off('touchmove', this._stopScrolling);
	        this.$element.off('touchstart', this._recordScrollable);
	        this.$element.off('touchmove', this._stopScrollPropagation);
	      }

	      if (this.options.contentOverlay === true) {
	        this.$overlay.removeClass('is-visible');
	      }

	      if (this.options.closeOnClick === true && this.options.contentOverlay === true) {
	        this.$overlay.removeClass('is-closable');
	      }

	      this.$triggers.attr('aria-expanded', 'false');

	      if (this.options.trapFocus === true) {
	        this.$content.removeAttr('tabindex');
	        _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2__["Keyboard"].releaseFocus(this.$element);
	      } // Listen to transitionEnd and add class when done.


	      this.$element.one(Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__["transitionend"])(this.$element), function (e) {
	        _this.$element.addClass('is-closed');

	        _this._removeContentClasses();
	      });
	    }
	    /**
	     * Toggles the off-canvas menu open or closed.
	     * @function
	     * @param {Object} event - Event object passed from listener.
	     * @param {jQuery} trigger - element that triggered the off-canvas to open.
	     */

	  }, {
	    key: "toggle",
	    value: function toggle(event, trigger) {
	      if (this.$element.hasClass('is-open')) {
	        this.close(event, trigger);
	      } else {
	        this.open(event, trigger);
	      }
	    }
	    /**
	     * Handles keyboard input when detected. When the escape key is pressed, the off-canvas menu closes, and focus is restored to the element that opened the menu.
	     * @function
	     * @private
	     */

	  }, {
	    key: "_handleKeyboard",
	    value: function _handleKeyboard(e) {
	      var _this3 = this;

	      _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2__["Keyboard"].handleKey(e, 'OffCanvas', {
	        close: function close() {
	          _this3.close();

	          _this3.$lastTrigger.focus();

	          return true;
	        },
	        handled: function handled() {
	          e.stopPropagation();
	          e.preventDefault();
	        }
	      });
	    }
	    /**
	     * Destroys the offcanvas plugin.
	     * @function
	     */

	  }, {
	    key: "_destroy",
	    value: function _destroy() {
	      this.close();
	      this.$element.off('.zf.trigger .zf.offcanvas');
	      this.$overlay.off('.zf.offcanvas');
	      if (this.onLoadListener) jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(this.onLoadListener);
	    }
	  }]);

	  return OffCanvas;
	}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_4__["Plugin"]);

	OffCanvas.defaults = {
	  /**
	   * Allow the user to click outside of the menu to close it.
	   * @option
	   * @type {boolean}
	   * @default true
	   */
	  closeOnClick: true,

	  /**
	   * Adds an overlay on top of `[data-off-canvas-content]`.
	   * @option
	   * @type {boolean}
	   * @default true
	   */
	  contentOverlay: true,

	  /**
	   * Target an off-canvas content container by ID that may be placed anywhere. If null the closest content container will be taken.
	   * @option
	   * @type {?string}
	   * @default null
	   */
	  contentId: null,

	  /**
	   * Define the off-canvas element is nested in an off-canvas content. This is required when using the contentId option for a nested element.
	   * @option
	   * @type {boolean}
	   * @default null
	   */
	  nested: null,

	  /**
	   * Enable/disable scrolling of the main content when an off canvas panel is open.
	   * @option
	   * @type {boolean}
	   * @default true
	   */
	  contentScroll: true,

	  /**
	   * Amount of time in ms the open and close transition requires. If none selected, pulls from body style.
	   * @option
	   * @type {number}
	   * @default null
	   */
	  transitionTime: null,

	  /**
	   * Type of transition for the offcanvas menu. Options are 'push', 'detached' or 'slide'.
	   * @option
	   * @type {string}
	   * @default push
	   */
	  transition: 'push',

	  /**
	   * Force the page to scroll to top or bottom on open.
	   * @option
	   * @type {?string}
	   * @default null
	   */
	  forceTo: null,

	  /**
	   * Allow the offcanvas to remain open for certain breakpoints.
	   * @option
	   * @type {boolean}
	   * @default false
	   */
	  isRevealed: false,

	  /**
	   * Breakpoint at which to reveal. JS will use a RegExp to target standard classes, if changing classnames, pass your class with the `revealClass` option.
	   * @option
	   * @type {?string}
	   * @default null
	   */
	  revealOn: null,

	  /**
	   * Force focus to the offcanvas on open. If true, will focus the opening trigger on close.
	   * @option
	   * @type {boolean}
	   * @default true
	   */
	  autoFocus: true,

	  /**
	   * Class used to force an offcanvas to remain open. Foundation defaults for this are `reveal-for-large` & `reveal-for-medium`.
	   * @option
	   * @type {string}
	   * @default reveal-for-
	   * @todo improve the regex testing for this.
	   */
	  revealClass: 'reveal-for-',

	  /**
	   * Triggers optional focus trapping when opening an offcanvas. Sets tabindex of [data-off-canvas-content] to -1 for accessibility purposes.
	   * @option
	   * @type {boolean}
	   * @default false
	   */
	  trapFocus: false
	};


	/***/ }),

	/***/ "./js/foundation.orbit.js":
	/*!********************************!*\
	  !*** ./js/foundation.orbit.js ***!
	  \********************************/
	/*! exports provided: Orbit */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {

	"use strict";
	__webpack_require__.r(__webpack_exports__);
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Orbit", function() { return Orbit; });
	/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
	/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
	/* harmony import */ var _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.util.keyboard */ "./js/foundation.util.keyboard.js");
	/* harmony import */ var _foundation_util_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.util.motion */ "./js/foundation.util.motion.js");
	/* harmony import */ var _foundation_util_timer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.util.timer */ "./js/foundation.util.timer.js");
	/* harmony import */ var _foundation_util_imageLoader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation.util.imageLoader */ "./js/foundation.util.imageLoader.js");
	/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./foundation.core.utils */ "./js/foundation.core.utils.js");
	/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./foundation.core.plugin */ "./js/foundation.core.plugin.js");
	/* harmony import */ var _foundation_util_touch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./foundation.util.touch */ "./js/foundation.util.touch.js");


	function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

	function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

	function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

	function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

	function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

	function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }









	/**
	 * Orbit module.
	 * @module foundation.orbit
	 * @requires foundation.util.keyboard
	 * @requires foundation.util.motion
	 * @requires foundation.util.timer
	 * @requires foundation.util.imageLoader
	 * @requires foundation.util.touch
	 */

	var Orbit =
	/*#__PURE__*/
	function (_Plugin) {
	  _inherits(Orbit, _Plugin);

	  function Orbit() {
	    _classCallCheck(this, Orbit);

	    return _possibleConstructorReturn(this, _getPrototypeOf(Orbit).apply(this, arguments));
	  }

	  _createClass(Orbit, [{
	    key: "_setup",

	    /**
	    * Creates a new instance of an orbit carousel.
	    * @class
	    * @name Orbit
	    * @param {jQuery} element - jQuery object to make into an Orbit Carousel.
	    * @param {Object} options - Overrides to the default plugin settings.
	    */
	    value: function _setup(element, options) {
	      this.$element = element;
	      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, Orbit.defaults, this.$element.data(), options);
	      this.className = 'Orbit'; // ie9 back compat

	      _foundation_util_touch__WEBPACK_IMPORTED_MODULE_7__["Touch"].init(jquery__WEBPACK_IMPORTED_MODULE_0___default.a); // Touch init is idempotent, we just need to make sure it's initialied.

	      this._init();

	      _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__["Keyboard"].register('Orbit', {
	        'ltr': {
	          'ARROW_RIGHT': 'next',
	          'ARROW_LEFT': 'previous'
	        },
	        'rtl': {
	          'ARROW_LEFT': 'next',
	          'ARROW_RIGHT': 'previous'
	        }
	      });
	    }
	    /**
	    * Initializes the plugin by creating jQuery collections, setting attributes, and starting the animation.
	    * @function
	    * @private
	    */

	  }, {
	    key: "_init",
	    value: function _init() {
	      // @TODO: consider discussion on PR #9278 about DOM pollution by changeSlide
	      this._reset();

	      this.$wrapper = this.$element.find(".".concat(this.options.containerClass));
	      this.$slides = this.$element.find(".".concat(this.options.slideClass));
	      var $images = this.$element.find('img'),
	          initActive = this.$slides.filter('.is-active'),
	          id = this.$element[0].id || Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_5__["GetYoDigits"])(6, 'orbit');
	      this.$element.attr({
	        'data-resize': id,
	        'id': id
	      });

	      if (!initActive.length) {
	        this.$slides.eq(0).addClass('is-active');
	      }

	      if (!this.options.useMUI) {
	        this.$slides.addClass('no-motionui');
	      }

	      if ($images.length) {
	        Object(_foundation_util_imageLoader__WEBPACK_IMPORTED_MODULE_4__["onImagesLoaded"])($images, this._prepareForOrbit.bind(this));
	      } else {
	        this._prepareForOrbit(); //hehe

	      }

	      if (this.options.bullets) {
	        this._loadBullets();
	      }

	      this._events();

	      if (this.options.autoPlay && this.$slides.length > 1) {
	        this.geoSync();
	      }

	      if (this.options.accessible) {
	        // allow wrapper to be focusable to enable arrow navigation
	        this.$wrapper.attr('tabindex', 0);
	      }
	    }
	    /**
	    * Creates a jQuery collection of bullets, if they are being used.
	    * @function
	    * @private
	    */

	  }, {
	    key: "_loadBullets",
	    value: function _loadBullets() {
	      this.$bullets = this.$element.find(".".concat(this.options.boxOfBullets)).find('button');
	    }
	    /**
	    * Sets a `timer` object on the orbit, and starts the counter for the next slide.
	    * @function
	    */

	  }, {
	    key: "geoSync",
	    value: function geoSync() {
	      var _this = this;

	      this.timer = new _foundation_util_timer__WEBPACK_IMPORTED_MODULE_3__["Timer"](this.$element, {
	        duration: this.options.timerDelay,
	        infinite: false
	      }, function () {
	        _this.changeSlide(true);
	      });
	      this.timer.start();
	    }
	    /**
	    * Sets wrapper and slide heights for the orbit.
	    * @function
	    * @private
	    */

	  }, {
	    key: "_prepareForOrbit",
	    value: function _prepareForOrbit() {
	      var _this = this;

	      this._setWrapperHeight();
	    }
	    /**
	    * Calulates the height of each slide in the collection, and uses the tallest one for the wrapper height.
	    * @function
	    * @private
	    * @param {Function} cb - a callback function to fire when complete.
	    */

	  }, {
	    key: "_setWrapperHeight",
	    value: function _setWrapperHeight(cb) {
	      //rewrite this to `for` loop
	      var max = 0,
	          temp,
	          counter = 0,
	          _this = this;

	      this.$slides.each(function () {
	        temp = this.getBoundingClientRect().height;
	        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('data-slide', counter); // hide all slides but the active one

	        if (!/mui/g.test(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)[0].className) && _this.$slides.filter('.is-active')[0] !== _this.$slides.eq(counter)[0]) {
	          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).css({
	            'display': 'none'
	          });
	        }

	        max = temp > max ? temp : max;
	        counter++;
	      });

	      if (counter === this.$slides.length) {
	        this.$wrapper.css({
	          'height': max
	        }); //only change the wrapper height property once.

	        if (cb) {
	          cb(max);
	        } //fire callback with max height dimension.

	      }
	    }
	    /**
	    * Sets the max-height of each slide.
	    * @function
	    * @private
	    */

	  }, {
	    key: "_setSlideHeight",
	    value: function _setSlideHeight(height) {
	      this.$slides.each(function () {
	        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).css('max-height', height);
	      });
	    }
	    /**
	    * Adds event listeners to basically everything within the element.
	    * @function
	    * @private
	    */

	  }, {
	    key: "_events",
	    value: function _events() {
	      var _this = this; //***************************************
	      //**Now using custom event - thanks to:**
	      //**      Yohai Ararat of Toronto      **
	      //***************************************
	      //


	      this.$element.off('.resizeme.zf.trigger').on({
	        'resizeme.zf.trigger': this._prepareForOrbit.bind(this)
	      });

	      if (this.$slides.length > 1) {
	        if (this.options.swipe) {
	          this.$slides.off('swipeleft.zf.orbit swiperight.zf.orbit').on('swipeleft.zf.orbit', function (e) {
	            e.preventDefault();

	            _this.changeSlide(true);
	          }).on('swiperight.zf.orbit', function (e) {
	            e.preventDefault();

	            _this.changeSlide(false);
	          });
	        } //***************************************


	        if (this.options.autoPlay) {
	          this.$slides.on('click.zf.orbit', function () {
	            _this.$element.data('clickedOn', _this.$element.data('clickedOn') ? false : true);

	            _this.timer[_this.$element.data('clickedOn') ? 'pause' : 'start']();
	          });

	          if (this.options.pauseOnHover) {
	            this.$element.on('mouseenter.zf.orbit', function () {
	              _this.timer.pause();
	            }).on('mouseleave.zf.orbit', function () {
	              if (!_this.$element.data('clickedOn')) {
	                _this.timer.start();
	              }
	            });
	          }
	        }

	        if (this.options.navButtons) {
	          var $controls = this.$element.find(".".concat(this.options.nextClass, ", .").concat(this.options.prevClass));
	          $controls.attr('tabindex', 0) //also need to handle enter/return and spacebar key presses
	          .on('click.zf.orbit touchend.zf.orbit', function (e) {
	            e.preventDefault();

	            _this.changeSlide(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).hasClass(_this.options.nextClass));
	          });
	        }

	        if (this.options.bullets) {
	          this.$bullets.on('click.zf.orbit touchend.zf.orbit', function () {
	            if (/is-active/g.test(this.className)) {
	              return false;
	            } //if this is active, kick out of function.


	            var idx = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('slide'),
	                ltr = idx > _this.$slides.filter('.is-active').data('slide'),
	                $slide = _this.$slides.eq(idx);

	            _this.changeSlide(ltr, $slide, idx);
	          });
	        }

	        if (this.options.accessible) {
	          this.$wrapper.add(this.$bullets).on('keydown.zf.orbit', function (e) {
	            // handle keyboard event with keyboard util
	            _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__["Keyboard"].handleKey(e, 'Orbit', {
	              next: function next() {
	                _this.changeSlide(true);
	              },
	              previous: function previous() {
	                _this.changeSlide(false);
	              },
	              handled: function handled() {
	                // if bullet is focused, make sure focus moves
	                if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).is(_this.$bullets)) {
	                  _this.$bullets.filter('.is-active').focus();
	                }
	              }
	            });
	          });
	        }
	      }
	    }
	    /**
	     * Resets Orbit so it can be reinitialized
	     */

	  }, {
	    key: "_reset",
	    value: function _reset() {
	      // Don't do anything if there are no slides (first run)
	      if (typeof this.$slides == 'undefined') {
	        return;
	      }

	      if (this.$slides.length > 1) {
	        // Remove old events
	        this.$element.off('.zf.orbit').find('*').off('.zf.orbit'); // Restart timer if autoPlay is enabled

	        if (this.options.autoPlay) {
	          this.timer.restart();
	        } // Reset all sliddes


	        this.$slides.each(function (el) {
	          jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).removeClass('is-active is-active is-in').removeAttr('aria-live').hide();
	        }); // Show the first slide

	        this.$slides.first().addClass('is-active').show(); // Triggers when the slide has finished animating

	        this.$element.trigger('slidechange.zf.orbit', [this.$slides.first()]); // Select first bullet if bullets are present

	        if (this.options.bullets) {
	          this._updateBullets(0);
	        }
	      }
	    }
	    /**
	    * Changes the current slide to a new one.
	    * @function
	    * @param {Boolean} isLTR - if true the slide moves from right to left, if false the slide moves from left to right.
	    * @param {jQuery} chosenSlide - the jQuery element of the slide to show next, if one is selected.
	    * @param {Number} idx - the index of the new slide in its collection, if one chosen.
	    * @fires Orbit#slidechange
	    */

	  }, {
	    key: "changeSlide",
	    value: function changeSlide(isLTR, chosenSlide, idx) {
	      if (!this.$slides) {
	        return;
	      } // Don't freak out if we're in the middle of cleanup


	      var $curSlide = this.$slides.filter('.is-active').eq(0);

	      if (/mui/g.test($curSlide[0].className)) {
	        return false;
	      } //if the slide is currently animating, kick out of the function


	      var $firstSlide = this.$slides.first(),
	          $lastSlide = this.$slides.last(),
	          dirIn = isLTR ? 'Right' : 'Left',
	          dirOut = isLTR ? 'Left' : 'Right',
	          _this = this,
	          $newSlide;

	      if (!chosenSlide) {
	        //most of the time, this will be auto played or clicked from the navButtons.
	        $newSlide = isLTR ? //if wrapping enabled, check to see if there is a `next` or `prev` sibling, if not, select the first or last slide to fill in. if wrapping not enabled, attempt to select `next` or `prev`, if there's nothing there, the function will kick out on next step. CRAZY NESTED TERNARIES!!!!!
	        this.options.infiniteWrap ? $curSlide.next(".".concat(this.options.slideClass)).length ? $curSlide.next(".".concat(this.options.slideClass)) : $firstSlide : $curSlide.next(".".concat(this.options.slideClass)) : //pick next slide if moving left to right
	        this.options.infiniteWrap ? $curSlide.prev(".".concat(this.options.slideClass)).length ? $curSlide.prev(".".concat(this.options.slideClass)) : $lastSlide : $curSlide.prev(".".concat(this.options.slideClass)); //pick prev slide if moving right to left
	      } else {
	        $newSlide = chosenSlide;
	      }

	      if ($newSlide.length) {
	        /**
	        * Triggers before the next slide starts animating in and only if a next slide has been found.
	        * @event Orbit#beforeslidechange
	        */
	        this.$element.trigger('beforeslidechange.zf.orbit', [$curSlide, $newSlide]);

	        if (this.options.bullets) {
	          idx = idx || this.$slides.index($newSlide); //grab index to update bullets

	          this._updateBullets(idx);
	        }

	        if (this.options.useMUI && !this.$element.is(':hidden')) {
	          _foundation_util_motion__WEBPACK_IMPORTED_MODULE_2__["Motion"].animateIn($newSlide.addClass('is-active'), this.options["animInFrom".concat(dirIn)], function () {
	            $newSlide.css({
	              'display': 'block'
	            }).attr('aria-live', 'polite');
	          });
	          _foundation_util_motion__WEBPACK_IMPORTED_MODULE_2__["Motion"].animateOut($curSlide.removeClass('is-active'), this.options["animOutTo".concat(dirOut)], function () {
	            $curSlide.removeAttr('aria-live');

	            if (_this.options.autoPlay && !_this.timer.isPaused) {
	              _this.timer.restart();
	            } //do stuff?

	          });
	        } else {
	          $curSlide.removeClass('is-active is-in').removeAttr('aria-live').hide();
	          $newSlide.addClass('is-active is-in').attr('aria-live', 'polite').show();

	          if (this.options.autoPlay && !this.timer.isPaused) {
	            this.timer.restart();
	          }
	        }
	        /**
	        * Triggers when the slide has finished animating in.
	        * @event Orbit#slidechange
	        */


	        this.$element.trigger('slidechange.zf.orbit', [$newSlide]);
	      }
	    }
	    /**
	    * Updates the active state of the bullets, if displayed.
	    * @function
	    * @private
	    * @param {Number} idx - the index of the current slide.
	    */

	  }, {
	    key: "_updateBullets",
	    value: function _updateBullets(idx) {
	      var $oldBullet = this.$element.find(".".concat(this.options.boxOfBullets)).find('.is-active').removeClass('is-active').blur(),
	          span = $oldBullet.find('span:last').detach(),
	          $newBullet = this.$bullets.eq(idx).addClass('is-active').append(span);
	    }
	    /**
	    * Destroys the carousel and hides the element.
	    * @function
	    */

	  }, {
	    key: "_destroy",
	    value: function _destroy() {
	      this.$element.off('.zf.orbit').find('*').off('.zf.orbit').end().hide();
	    }
	  }]);

	  return Orbit;
	}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_6__["Plugin"]);

	Orbit.defaults = {
	  /**
	  * Tells the JS to look for and loadBullets.
	  * @option
	   * @type {boolean}
	  * @default true
	  */
	  bullets: true,

	  /**
	  * Tells the JS to apply event listeners to nav buttons
	  * @option
	   * @type {boolean}
	  * @default true
	  */
	  navButtons: true,

	  /**
	  * motion-ui animation class to apply
	  * @option
	   * @type {string}
	  * @default 'slide-in-right'
	  */
	  animInFromRight: 'slide-in-right',

	  /**
	  * motion-ui animation class to apply
	  * @option
	   * @type {string}
	  * @default 'slide-out-right'
	  */
	  animOutToRight: 'slide-out-right',

	  /**
	  * motion-ui animation class to apply
	  * @option
	   * @type {string}
	  * @default 'slide-in-left'
	  *
	  */
	  animInFromLeft: 'slide-in-left',

	  /**
	  * motion-ui animation class to apply
	  * @option
	   * @type {string}
	  * @default 'slide-out-left'
	  */
	  animOutToLeft: 'slide-out-left',

	  /**
	  * Allows Orbit to automatically animate on page load.
	  * @option
	   * @type {boolean}
	  * @default true
	  */
	  autoPlay: true,

	  /**
	  * Amount of time, in ms, between slide transitions
	  * @option
	   * @type {number}
	  * @default 5000
	  */
	  timerDelay: 5000,

	  /**
	  * Allows Orbit to infinitely loop through the slides
	  * @option
	   * @type {boolean}
	  * @default true
	  */
	  infiniteWrap: true,

	  /**
	  * Allows the Orbit slides to bind to swipe events for mobile, requires an additional util library
	  * @option
	   * @type {boolean}
	  * @default true
	  */
	  swipe: true,

	  /**
	  * Allows the timing function to pause animation on hover.
	  * @option
	   * @type {boolean}
	  * @default true
	  */
	  pauseOnHover: true,

	  /**
	  * Allows Orbit to bind keyboard events to the slider, to animate frames with arrow keys
	  * @option
	   * @type {boolean}
	  * @default true
	  */
	  accessible: true,

	  /**
	  * Class applied to the container of Orbit
	  * @option
	   * @type {string}
	  * @default 'orbit-container'
	  */
	  containerClass: 'orbit-container',

	  /**
	  * Class applied to individual slides.
	  * @option
	   * @type {string}
	  * @default 'orbit-slide'
	  */
	  slideClass: 'orbit-slide',

	  /**
	  * Class applied to the bullet container. You're welcome.
	  * @option
	   * @type {string}
	  * @default 'orbit-bullets'
	  */
	  boxOfBullets: 'orbit-bullets',

	  /**
	  * Class applied to the `next` navigation button.
	  * @option
	   * @type {string}
	  * @default 'orbit-next'
	  */
	  nextClass: 'orbit-next',

	  /**
	  * Class applied to the `previous` navigation button.
	  * @option
	   * @type {string}
	  * @default 'orbit-previous'
	  */
	  prevClass: 'orbit-previous',

	  /**
	  * Boolean to flag the js to use motion ui classes or not. Default to true for backwards compatibility.
	  * @option
	   * @type {boolean}
	  * @default true
	  */
	  useMUI: true
	};


	/***/ }),

	/***/ "./js/foundation.positionable.js":
	/*!***************************************!*\
	  !*** ./js/foundation.positionable.js ***!
	  \***************************************/
	/*! exports provided: Positionable */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {

	"use strict";
	__webpack_require__.r(__webpack_exports__);
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Positionable", function() { return Positionable; });
	/* harmony import */ var _foundation_util_box__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./foundation.util.box */ "./js/foundation.util.box.js");
	/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.core.plugin */ "./js/foundation.core.plugin.js");
	/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.core.utils */ "./js/foundation.core.utils.js");


	function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

	function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

	function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

	function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

	function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

	function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




	var POSITIONS = ['left', 'right', 'top', 'bottom'];
	var VERTICAL_ALIGNMENTS = ['top', 'bottom', 'center'];
	var HORIZONTAL_ALIGNMENTS = ['left', 'right', 'center'];
	var ALIGNMENTS = {
	  'left': VERTICAL_ALIGNMENTS,
	  'right': VERTICAL_ALIGNMENTS,
	  'top': HORIZONTAL_ALIGNMENTS,
	  'bottom': HORIZONTAL_ALIGNMENTS
	};

	function nextItem(item, array) {
	  var currentIdx = array.indexOf(item);

	  if (currentIdx === array.length - 1) {
	    return array[0];
	  } else {
	    return array[currentIdx + 1];
	  }
	}

	var Positionable =
	/*#__PURE__*/
	function (_Plugin) {
	  _inherits(Positionable, _Plugin);

	  function Positionable() {
	    _classCallCheck(this, Positionable);

	    return _possibleConstructorReturn(this, _getPrototypeOf(Positionable).apply(this, arguments));
	  }

	  _createClass(Positionable, [{
	    key: "_init",

	    /**
	     * Abstract class encapsulating the tether-like explicit positioning logic
	     * including repositioning based on overlap.
	     * Expects classes to define defaults for vOffset, hOffset, position,
	     * alignment, allowOverlap, and allowBottomOverlap. They can do this by
	     * extending the defaults, or (for now recommended due to the way docs are
	     * generated) by explicitly declaring them.
	     *
	     **/
	    value: function _init() {
	      this.triedPositions = {};
	      this.position = this.options.position === 'auto' ? this._getDefaultPosition() : this.options.position;
	      this.alignment = this.options.alignment === 'auto' ? this._getDefaultAlignment() : this.options.alignment;
	      this.originalPosition = this.position;
	      this.originalAlignment = this.alignment;
	    }
	  }, {
	    key: "_getDefaultPosition",
	    value: function _getDefaultPosition() {
	      return 'bottom';
	    }
	  }, {
	    key: "_getDefaultAlignment",
	    value: function _getDefaultAlignment() {
	      switch (this.position) {
	        case 'bottom':
	        case 'top':
	          return Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__["rtl"])() ? 'right' : 'left';

	        case 'left':
	        case 'right':
	          return 'bottom';
	      }
	    }
	    /**
	     * Adjusts the positionable possible positions by iterating through alignments
	     * and positions.
	     * @function
	     * @private
	     */

	  }, {
	    key: "_reposition",
	    value: function _reposition() {
	      if (this._alignmentsExhausted(this.position)) {
	        this.position = nextItem(this.position, POSITIONS);
	        this.alignment = ALIGNMENTS[this.position][0];
	      } else {
	        this._realign();
	      }
	    }
	    /**
	     * Adjusts the dropdown pane possible positions by iterating through alignments
	     * on the current position.
	     * @function
	     * @private
	     */

	  }, {
	    key: "_realign",
	    value: function _realign() {
	      this._addTriedPosition(this.position, this.alignment);

	      this.alignment = nextItem(this.alignment, ALIGNMENTS[this.position]);
	    }
	  }, {
	    key: "_addTriedPosition",
	    value: function _addTriedPosition(position, alignment) {
	      this.triedPositions[position] = this.triedPositions[position] || [];
	      this.triedPositions[position].push(alignment);
	    }
	  }, {
	    key: "_positionsExhausted",
	    value: function _positionsExhausted() {
	      var isExhausted = true;

	      for (var i = 0; i < POSITIONS.length; i++) {
	        isExhausted = isExhausted && this._alignmentsExhausted(POSITIONS[i]);
	      }

	      return isExhausted;
	    }
	  }, {
	    key: "_alignmentsExhausted",
	    value: function _alignmentsExhausted(position) {
	      return this.triedPositions[position] && this.triedPositions[position].length == ALIGNMENTS[position].length;
	    } // When we're trying to center, we don't want to apply offset that's going to
	    // take us just off center, so wrap around to return 0 for the appropriate
	    // offset in those alignments.  TODO: Figure out if we want to make this
	    // configurable behavior... it feels more intuitive, especially for tooltips, but
	    // it's possible someone might actually want to start from center and then nudge
	    // slightly off.

	  }, {
	    key: "_getVOffset",
	    value: function _getVOffset() {
	      return this.options.vOffset;
	    }
	  }, {
	    key: "_getHOffset",
	    value: function _getHOffset() {
	      return this.options.hOffset;
	    }
	  }, {
	    key: "_setPosition",
	    value: function _setPosition($anchor, $element, $parent) {
	      if ($anchor.attr('aria-expanded') === 'false') {
	        return false;
	      }

	      var $eleDims = _foundation_util_box__WEBPACK_IMPORTED_MODULE_0__["Box"].GetDimensions($element),
	          $anchorDims = _foundation_util_box__WEBPACK_IMPORTED_MODULE_0__["Box"].GetDimensions($anchor);

	      if (!this.options.allowOverlap) {
	        // restore original position & alignment before checking overlap
	        this.position = this.originalPosition;
	        this.alignment = this.originalAlignment;
	      }

	      $element.offset(_foundation_util_box__WEBPACK_IMPORTED_MODULE_0__["Box"].GetExplicitOffsets($element, $anchor, this.position, this.alignment, this._getVOffset(), this._getHOffset()));

	      if (!this.options.allowOverlap) {
	        var overlaps = {};
	        var minOverlap = 100000000; // default coordinates to how we start, in case we can't figure out better

	        var minCoordinates = {
	          position: this.position,
	          alignment: this.alignment
	        };

	        while (!this._positionsExhausted()) {
	          var overlap = _foundation_util_box__WEBPACK_IMPORTED_MODULE_0__["Box"].OverlapArea($element, $parent, false, false, this.options.allowBottomOverlap);

	          if (overlap === 0) {
	            return;
	          }

	          if (overlap < minOverlap) {
	            minOverlap = overlap;
	            minCoordinates = {
	              position: this.position,
	              alignment: this.alignment
	            };
	          }

	          this._reposition();

	          $element.offset(_foundation_util_box__WEBPACK_IMPORTED_MODULE_0__["Box"].GetExplicitOffsets($element, $anchor, this.position, this.alignment, this._getVOffset(), this._getHOffset()));
	        } // If we get through the entire loop, there was no non-overlapping
	        // position available. Pick the version with least overlap.


	        this.position = minCoordinates.position;
	        this.alignment = minCoordinates.alignment;
	        $element.offset(_foundation_util_box__WEBPACK_IMPORTED_MODULE_0__["Box"].GetExplicitOffsets($element, $anchor, this.position, this.alignment, this._getVOffset(), this._getHOffset()));
	      }
	    }
	  }]);

	  return Positionable;
	}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__["Plugin"]);

	Positionable.defaults = {
	  /**
	   * Position of positionable relative to anchor. Can be left, right, bottom, top, or auto.
	   * @option
	   * @type {string}
	   * @default 'auto'
	   */
	  position: 'auto',

	  /**
	   * Alignment of positionable relative to anchor. Can be left, right, bottom, top, center, or auto.
	   * @option
	   * @type {string}
	   * @default 'auto'
	   */
	  alignment: 'auto',

	  /**
	   * Allow overlap of container/window. If false, dropdown positionable first
	   * try to position as defined by data-position and data-alignment, but
	   * reposition if it would cause an overflow.
	   * @option
	   * @type {boolean}
	   * @default false
	   */
	  allowOverlap: false,

	  /**
	   * Allow overlap of only the bottom of the container. This is the most common
	   * behavior for dropdowns, allowing the dropdown to extend the bottom of the
	   * screen but not otherwise influence or break out of the container.
	   * @option
	   * @type {boolean}
	   * @default true
	   */
	  allowBottomOverlap: true,

	  /**
	   * Number of pixels the positionable should be separated vertically from anchor
	   * @option
	   * @type {number}
	   * @default 0
	   */
	  vOffset: 0,

	  /**
	   * Number of pixels the positionable should be separated horizontally from anchor
	   * @option
	   * @type {number}
	   * @default 0
	   */
	  hOffset: 0
	};


	/***/ }),

	/***/ "./js/foundation.responsiveAccordionTabs.js":
	/*!**************************************************!*\
	  !*** ./js/foundation.responsiveAccordionTabs.js ***!
	  \**************************************************/
	/*! exports provided: ResponsiveAccordionTabs */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {

	"use strict";
	__webpack_require__.r(__webpack_exports__);
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponsiveAccordionTabs", function() { return ResponsiveAccordionTabs; });
	/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
	/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
	/* harmony import */ var _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.util.mediaQuery */ "./js/foundation.util.mediaQuery.js");
	/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.core.utils */ "./js/foundation.core.utils.js");
	/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.core.plugin */ "./js/foundation.core.plugin.js");
	/* harmony import */ var _foundation_accordion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation.accordion */ "./js/foundation.accordion.js");
	/* harmony import */ var _foundation_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./foundation.tabs */ "./js/foundation.tabs.js");


	function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

	function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

	function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

	function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

	function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

	function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






	 // The plugin matches the plugin classes with these plugin instances.

	var MenuPlugins = {
	  tabs: {
	    cssClass: 'tabs',
	    plugin: _foundation_tabs__WEBPACK_IMPORTED_MODULE_5__["Tabs"]
	  },
	  accordion: {
	    cssClass: 'accordion',
	    plugin: _foundation_accordion__WEBPACK_IMPORTED_MODULE_4__["Accordion"]
	  }
	};
	/**
	 * ResponsiveAccordionTabs module.
	 * @module foundation.responsiveAccordionTabs
	 * @requires foundation.util.motion
	 * @requires foundation.accordion
	 * @requires foundation.tabs
	 */

	var ResponsiveAccordionTabs =
	/*#__PURE__*/
	function (_Plugin) {
	  _inherits(ResponsiveAccordionTabs, _Plugin);

	  function ResponsiveAccordionTabs() {
	    _classCallCheck(this, ResponsiveAccordionTabs);

	    return _possibleConstructorReturn(this, _getPrototypeOf(ResponsiveAccordionTabs).apply(this, arguments));
	  }

	  _createClass(ResponsiveAccordionTabs, [{
	    key: "_setup",

	    /**
	     * Creates a new instance of a responsive accordion tabs.
	     * @class
	     * @name ResponsiveAccordionTabs
	     * @fires ResponsiveAccordionTabs#init
	     * @param {jQuery} element - jQuery object to make into Responsive Accordion Tabs.
	     * @param {Object} options - Overrides to the default plugin settings.
	     */
	    value: function _setup(element, options) {
	      this.$element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element);
	      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, this.$element.data(), options);
	      this.rules = this.$element.data('responsive-accordion-tabs');
	      this.currentMq = null;
	      this.currentPlugin = null;
	      this.className = 'ResponsiveAccordionTabs'; // ie9 back compat

	      if (!this.$element.attr('id')) {
	        this.$element.attr('id', Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__["GetYoDigits"])(6, 'responsiveaccordiontabs'));
	      }

	      ;

	      this._init();

	      this._events();
	    }
	    /**
	     * Initializes the Menu by parsing the classes from the 'data-responsive-accordion-tabs' attribute on the element.
	     * @function
	     * @private
	     */

	  }, {
	    key: "_init",
	    value: function _init() {
	      _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__["MediaQuery"]._init(); // The first time an Interchange plugin is initialized, this.rules is converted from a string of "classes" to an object of rules


	      if (typeof this.rules === 'string') {
	        var rulesTree = {}; // Parse rules from "classes" pulled from data attribute

	        var rules = this.rules.split(' '); // Iterate through every rule found

	        for (var i = 0; i < rules.length; i++) {
	          var rule = rules[i].split('-');
	          var ruleSize = rule.length > 1 ? rule[0] : 'small';
	          var rulePlugin = rule.length > 1 ? rule[1] : rule[0];

	          if (MenuPlugins[rulePlugin] !== null) {
	            rulesTree[ruleSize] = MenuPlugins[rulePlugin];
	          }
	        }

	        this.rules = rulesTree;
	      }

	      this._getAllOptions();

	      if (!jquery__WEBPACK_IMPORTED_MODULE_0___default.a.isEmptyObject(this.rules)) {
	        this._checkMediaQueries();
	      }
	    }
	  }, {
	    key: "_getAllOptions",
	    value: function _getAllOptions() {
	      //get all defaults and options
	      var _this = this;

	      _this.allOptions = {};

	      for (var key in MenuPlugins) {
	        if (MenuPlugins.hasOwnProperty(key)) {
	          var obj = MenuPlugins[key];

	          try {
	            var dummyPlugin = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<ul></ul>');
	            var tmpPlugin = new obj.plugin(dummyPlugin, _this.options);

	            for (var keyKey in tmpPlugin.options) {
	              if (tmpPlugin.options.hasOwnProperty(keyKey) && keyKey !== 'zfPlugin') {
	                var objObj = tmpPlugin.options[keyKey];
	                _this.allOptions[keyKey] = objObj;
	              }
	            }

	            tmpPlugin.destroy();
	          } catch (e) {}
	        }
	      }
	    }
	    /**
	     * Initializes events for the Menu.
	     * @function
	     * @private
	     */

	  }, {
	    key: "_events",
	    value: function _events() {
	      this._changedZfMediaQueryHandler = this._checkMediaQueries.bind(this);
	      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('changed.zf.mediaquery', this._changedZfMediaQueryHandler);
	    }
	    /**
	     * Checks the current screen width against available media queries. If the media query has changed, and the plugin needed has changed, the plugins will swap out.
	     * @function
	     * @private
	     */

	  }, {
	    key: "_checkMediaQueries",
	    value: function _checkMediaQueries() {
	      var matchedMq,
	          _this = this; // Iterate through each rule and find the last matching rule


	      jquery__WEBPACK_IMPORTED_MODULE_0___default.a.each(this.rules, function (key) {
	        if (_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__["MediaQuery"].atLeast(key)) {
	          matchedMq = key;
	        }
	      }); // No match? No dice

	      if (!matchedMq) return; // Plugin already initialized? We good

	      if (this.currentPlugin instanceof this.rules[matchedMq].plugin) return; // Remove existing plugin-specific CSS classes

	      jquery__WEBPACK_IMPORTED_MODULE_0___default.a.each(MenuPlugins, function (key, value) {
	        _this.$element.removeClass(value.cssClass);
	      }); // Add the CSS class for the new plugin

	      this.$element.addClass(this.rules[matchedMq].cssClass); // Create an instance of the new plugin

	      if (this.currentPlugin) {
	        //don't know why but on nested elements data zfPlugin get's lost
	        if (!this.currentPlugin.$element.data('zfPlugin') && this.storezfData) this.currentPlugin.$element.data('zfPlugin', this.storezfData);
	        this.currentPlugin.destroy();
	      }

	      this._handleMarkup(this.rules[matchedMq].cssClass);

	      this.currentPlugin = new this.rules[matchedMq].plugin(this.$element, {});
	      this.storezfData = this.currentPlugin.$element.data('zfPlugin');
	    }
	  }, {
	    key: "_handleMarkup",
	    value: function _handleMarkup(toSet) {
	      var _this = this,
	          fromString = 'accordion';

	      var $panels = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-tabs-content=' + this.$element.attr('id') + ']');
	      if ($panels.length) fromString = 'tabs';

	      if (fromString === toSet) {
	        return;
	      }

	      ;
	      var tabsTitle = _this.allOptions.linkClass ? _this.allOptions.linkClass : 'tabs-title';
	      var tabsPanel = _this.allOptions.panelClass ? _this.allOptions.panelClass : 'tabs-panel';
	      this.$element.removeAttr('role');
	      var $liHeads = this.$element.children('.' + tabsTitle + ',[data-accordion-item]').removeClass(tabsTitle).removeClass('accordion-item').removeAttr('data-accordion-item');
	      var $liHeadsA = $liHeads.children('a').removeClass('accordion-title');

	      if (fromString === 'tabs') {
	        $panels = $panels.children('.' + tabsPanel).removeClass(tabsPanel).removeAttr('role').removeAttr('aria-hidden').removeAttr('aria-labelledby');
	        $panels.children('a').removeAttr('role').removeAttr('aria-controls').removeAttr('aria-selected');
	      } else {
	        $panels = $liHeads.children('[data-tab-content]').removeClass('accordion-content');
	      }

	      ;
	      $panels.css({
	        display: '',
	        visibility: ''
	      });
	      $liHeads.css({
	        display: '',
	        visibility: ''
	      });

	      if (toSet === 'accordion') {
	        $panels.each(function (key, value) {
	          jquery__WEBPACK_IMPORTED_MODULE_0___default()(value).appendTo($liHeads.get(key)).addClass('accordion-content').attr('data-tab-content', '').removeClass('is-active').css({
	            height: ''
	          });
	          jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-tabs-content=' + _this.$element.attr('id') + ']').after('<div id="tabs-placeholder-' + _this.$element.attr('id') + '"></div>').detach();
	          $liHeads.addClass('accordion-item').attr('data-accordion-item', '');
	          $liHeadsA.addClass('accordion-title');
	        });
	      } else if (toSet === 'tabs') {
	        var $tabsContent = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-tabs-content=' + _this.$element.attr('id') + ']');
	        var $placeholder = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tabs-placeholder-' + _this.$element.attr('id'));

	        if ($placeholder.length) {
	          $tabsContent = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div class="tabs-content"></div>').insertAfter($placeholder).attr('data-tabs-content', _this.$element.attr('id'));
	          $placeholder.remove();
	        } else {
	          $tabsContent = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div class="tabs-content"></div>').insertAfter(_this.$element).attr('data-tabs-content', _this.$element.attr('id'));
	        }

	        ;
	        $panels.each(function (key, value) {
	          var tempValue = jquery__WEBPACK_IMPORTED_MODULE_0___default()(value).appendTo($tabsContent).addClass(tabsPanel);
	          var hash = $liHeadsA.get(key).hash.slice(1);
	          var id = jquery__WEBPACK_IMPORTED_MODULE_0___default()(value).attr('id') || Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__["GetYoDigits"])(6, 'accordion');

	          if (hash !== id) {
	            if (hash !== '') {
	              jquery__WEBPACK_IMPORTED_MODULE_0___default()(value).attr('id', hash);
	            } else {
	              hash = id;
	              jquery__WEBPACK_IMPORTED_MODULE_0___default()(value).attr('id', hash);
	              jquery__WEBPACK_IMPORTED_MODULE_0___default()($liHeadsA.get(key)).attr('href', jquery__WEBPACK_IMPORTED_MODULE_0___default()($liHeadsA.get(key)).attr('href').replace('#', '') + '#' + hash);
	            }

	            ;
	          }

	          ;
	          var isActive = jquery__WEBPACK_IMPORTED_MODULE_0___default()($liHeads.get(key)).hasClass('is-active');

	          if (isActive) {
	            tempValue.addClass('is-active');
	          }

	          ;
	        });
	        $liHeads.addClass(tabsTitle);
	      }

	      ;
	    }
	    /**
	     * Destroys the instance of the current plugin on this element, as well as the window resize handler that switches the plugins out.
	     * @function
	     */

	  }, {
	    key: "_destroy",
	    value: function _destroy() {
	      if (this.currentPlugin) this.currentPlugin.destroy();
	      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off('changed.zf.mediaquery', this._changedZfMediaQueryHandler);
	    }
	  }]);

	  return ResponsiveAccordionTabs;
	}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_3__["Plugin"]);

	ResponsiveAccordionTabs.defaults = {};


	/***/ }),

	/***/ "./js/foundation.responsiveMenu.js":
	/*!*****************************************!*\
	  !*** ./js/foundation.responsiveMenu.js ***!
	  \*****************************************/
	/*! exports provided: ResponsiveMenu */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {

	"use strict";
	__webpack_require__.r(__webpack_exports__);
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponsiveMenu", function() { return ResponsiveMenu; });
	/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
	/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
	/* harmony import */ var _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.util.mediaQuery */ "./js/foundation.util.mediaQuery.js");
	/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.core.utils */ "./js/foundation.core.utils.js");
	/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.core.plugin */ "./js/foundation.core.plugin.js");
	/* harmony import */ var _foundation_dropdownMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation.dropdownMenu */ "./js/foundation.dropdownMenu.js");
	/* harmony import */ var _foundation_drilldown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./foundation.drilldown */ "./js/foundation.drilldown.js");
	/* harmony import */ var _foundation_accordionMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./foundation.accordionMenu */ "./js/foundation.accordionMenu.js");


	function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

	function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

	function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

	function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

	function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

	function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








	var MenuPlugins = {
	  dropdown: {
	    cssClass: 'dropdown',
	    plugin: _foundation_dropdownMenu__WEBPACK_IMPORTED_MODULE_4__["DropdownMenu"]
	  },
	  drilldown: {
	    cssClass: 'drilldown',
	    plugin: _foundation_drilldown__WEBPACK_IMPORTED_MODULE_5__["Drilldown"]
	  },
	  accordion: {
	    cssClass: 'accordion-menu',
	    plugin: _foundation_accordionMenu__WEBPACK_IMPORTED_MODULE_6__["AccordionMenu"]
	  }
	}; // import "foundation.util.triggers.js";

	/**
	 * ResponsiveMenu module.
	 * @module foundation.responsiveMenu
	 * @requires foundation.util.triggers
	 * @requires foundation.util.mediaQuery
	 */

	var ResponsiveMenu =
	/*#__PURE__*/
	function (_Plugin) {
	  _inherits(ResponsiveMenu, _Plugin);

	  function ResponsiveMenu() {
	    _classCallCheck(this, ResponsiveMenu);

	    return _possibleConstructorReturn(this, _getPrototypeOf(ResponsiveMenu).apply(this, arguments));
	  }

	  _createClass(ResponsiveMenu, [{
	    key: "_setup",

	    /**
	     * Creates a new instance of a responsive menu.
	     * @class
	     * @name ResponsiveMenu
	     * @fires ResponsiveMenu#init
	     * @param {jQuery} element - jQuery object to make into a dropdown menu.
	     * @param {Object} options - Overrides to the default plugin settings.
	     */
	    value: function _setup(element, options) {
	      this.$element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element);
	      this.rules = this.$element.data('responsive-menu');
	      this.currentMq = null;
	      this.currentPlugin = null;
	      this.className = 'ResponsiveMenu'; // ie9 back compat

	      this._init();

	      this._events();
	    }
	    /**
	     * Initializes the Menu by parsing the classes from the 'data-ResponsiveMenu' attribute on the element.
	     * @function
	     * @private
	     */

	  }, {
	    key: "_init",
	    value: function _init() {
	      _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__["MediaQuery"]._init(); // The first time an Interchange plugin is initialized, this.rules is converted from a string of "classes" to an object of rules


	      if (typeof this.rules === 'string') {
	        var rulesTree = {}; // Parse rules from "classes" pulled from data attribute

	        var rules = this.rules.split(' '); // Iterate through every rule found

	        for (var i = 0; i < rules.length; i++) {
	          var rule = rules[i].split('-');
	          var ruleSize = rule.length > 1 ? rule[0] : 'small';
	          var rulePlugin = rule.length > 1 ? rule[1] : rule[0];

	          if (MenuPlugins[rulePlugin] !== null) {
	            rulesTree[ruleSize] = MenuPlugins[rulePlugin];
	          }
	        }

	        this.rules = rulesTree;
	      }

	      if (!jquery__WEBPACK_IMPORTED_MODULE_0___default.a.isEmptyObject(this.rules)) {
	        this._checkMediaQueries();
	      } // Add data-mutate since children may need it.


	      this.$element.attr('data-mutate', this.$element.attr('data-mutate') || Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__["GetYoDigits"])(6, 'responsive-menu'));
	    }
	    /**
	     * Initializes events for the Menu.
	     * @function
	     * @private
	     */

	  }, {
	    key: "_events",
	    value: function _events() {
	      var _this = this;

	      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('changed.zf.mediaquery', function () {
	        _this._checkMediaQueries();
	      }); // $(window).on('resize.zf.ResponsiveMenu', function() {
	      //   _this._checkMediaQueries();
	      // });
	    }
	    /**
	     * Checks the current screen width against available media queries. If the media query has changed, and the plugin needed has changed, the plugins will swap out.
	     * @function
	     * @private
	     */

	  }, {
	    key: "_checkMediaQueries",
	    value: function _checkMediaQueries() {
	      var matchedMq,
	          _this = this; // Iterate through each rule and find the last matching rule


	      jquery__WEBPACK_IMPORTED_MODULE_0___default.a.each(this.rules, function (key) {
	        if (_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__["MediaQuery"].atLeast(key)) {
	          matchedMq = key;
	        }
	      }); // No match? No dice

	      if (!matchedMq) return; // Plugin already initialized? We good

	      if (this.currentPlugin instanceof this.rules[matchedMq].plugin) return; // Remove existing plugin-specific CSS classes

	      jquery__WEBPACK_IMPORTED_MODULE_0___default.a.each(MenuPlugins, function (key, value) {
	        _this.$element.removeClass(value.cssClass);
	      }); // Add the CSS class for the new plugin

	      this.$element.addClass(this.rules[matchedMq].cssClass); // Create an instance of the new plugin

	      if (this.currentPlugin) this.currentPlugin.destroy();
	      this.currentPlugin = new this.rules[matchedMq].plugin(this.$element, {});
	    }
	    /**
	     * Destroys the instance of the current plugin on this element, as well as the window resize handler that switches the plugins out.
	     * @function
	     */

	  }, {
	    key: "_destroy",
	    value: function _destroy() {
	      this.currentPlugin.destroy();
	      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off('.zf.ResponsiveMenu');
	    }
	  }]);

	  return ResponsiveMenu;
	}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_3__["Plugin"]);

	ResponsiveMenu.defaults = {};


	/***/ }),

	/***/ "./js/foundation.responsiveToggle.js":
	/*!*******************************************!*\
	  !*** ./js/foundation.responsiveToggle.js ***!
	  \*******************************************/
	/*! exports provided: ResponsiveToggle */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {

	"use strict";
	__webpack_require__.r(__webpack_exports__);
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponsiveToggle", function() { return ResponsiveToggle; });
	/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
	/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
	/* harmony import */ var _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.util.mediaQuery */ "./js/foundation.util.mediaQuery.js");
	/* harmony import */ var _foundation_util_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.util.motion */ "./js/foundation.util.motion.js");
	/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.core.plugin */ "./js/foundation.core.plugin.js");


	function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

	function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

	function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

	function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

	function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

	function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





	/**
	 * ResponsiveToggle module.
	 * @module foundation.responsiveToggle
	 * @requires foundation.util.mediaQuery
	 * @requires foundation.util.motion
	 */

	var ResponsiveToggle =
	/*#__PURE__*/
	function (_Plugin) {
	  _inherits(ResponsiveToggle, _Plugin);

	  function ResponsiveToggle() {
	    _classCallCheck(this, ResponsiveToggle);

	    return _possibleConstructorReturn(this, _getPrototypeOf(ResponsiveToggle).apply(this, arguments));
	  }

	  _createClass(ResponsiveToggle, [{
	    key: "_setup",

	    /**
	     * Creates a new instance of Tab Bar.
	     * @class
	     * @name ResponsiveToggle
	     * @fires ResponsiveToggle#init
	     * @param {jQuery} element - jQuery object to attach tab bar functionality to.
	     * @param {Object} options - Overrides to the default plugin settings.
	     */
	    value: function _setup(element, options) {
	      this.$element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element);
	      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, ResponsiveToggle.defaults, this.$element.data(), options);
	      this.className = 'ResponsiveToggle'; // ie9 back compat

	      this._init();

	      this._events();
	    }
	    /**
	     * Initializes the tab bar by finding the target element, toggling element, and running update().
	     * @function
	     * @private
	     */

	  }, {
	    key: "_init",
	    value: function _init() {
	      _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__["MediaQuery"]._init();

	      var targetID = this.$element.data('responsive-toggle');

	      if (!targetID) {
	        console.error('Your tab bar needs an ID of a Menu as the value of data-tab-bar.');
	      }

	      this.$targetMenu = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#".concat(targetID));
	      this.$toggler = this.$element.find('[data-toggle]').filter(function () {
	        var target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('toggle');
	        return target === targetID || target === "";
	      });
	      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, this.options, this.$targetMenu.data()); // If they were set, parse the animation classes

	      if (this.options.animate) {
	        var input = this.options.animate.split(' ');
	        this.animationIn = input[0];
	        this.animationOut = input[1] || null;
	      }

	      this._update();
	    }
	    /**
	     * Adds necessary event handlers for the tab bar to work.
	     * @function
	     * @private
	     */

	  }, {
	    key: "_events",
	    value: function _events() {
	      var _this = this;

	      this._updateMqHandler = this._update.bind(this);
	      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('changed.zf.mediaquery', this._updateMqHandler);
	      this.$toggler.on('click.zf.responsiveToggle', this.toggleMenu.bind(this));
	    }
	    /**
	     * Checks the current media query to determine if the tab bar should be visible or hidden.
	     * @function
	     * @private
	     */

	  }, {
	    key: "_update",
	    value: function _update() {
	      // Mobile
	      if (!_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__["MediaQuery"].atLeast(this.options.hideFor)) {
	        this.$element.show();
	        this.$targetMenu.hide();
	      } // Desktop
	      else {
	          this.$element.hide();
	          this.$targetMenu.show();
	        }
	    }
	    /**
	     * Toggles the element attached to the tab bar. The toggle only happens if the screen is small enough to allow it.
	     * @function
	     * @fires ResponsiveToggle#toggled
	     */

	  }, {
	    key: "toggleMenu",
	    value: function toggleMenu() {
	      var _this2 = this;

	      if (!_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__["MediaQuery"].atLeast(this.options.hideFor)) {
	        /**
	         * Fires when the element attached to the tab bar toggles.
	         * @event ResponsiveToggle#toggled
	         */
	        if (this.options.animate) {
	          if (this.$targetMenu.is(':hidden')) {
	            _foundation_util_motion__WEBPACK_IMPORTED_MODULE_2__["Motion"].animateIn(this.$targetMenu, this.animationIn, function () {
	              _this2.$element.trigger('toggled.zf.responsiveToggle');

	              _this2.$targetMenu.find('[data-mutate]').triggerHandler('mutateme.zf.trigger');
	            });
	          } else {
	            _foundation_util_motion__WEBPACK_IMPORTED_MODULE_2__["Motion"].animateOut(this.$targetMenu, this.animationOut, function () {
	              _this2.$element.trigger('toggled.zf.responsiveToggle');
	            });
	          }
	        } else {
	          this.$targetMenu.toggle(0);
	          this.$targetMenu.find('[data-mutate]').trigger('mutateme.zf.trigger');
	          this.$element.trigger('toggled.zf.responsiveToggle');
	        }
	      }
	    }
	  }, {
	    key: "_destroy",
	    value: function _destroy() {
	      this.$element.off('.zf.responsiveToggle');
	      this.$toggler.off('.zf.responsiveToggle');
	      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off('changed.zf.mediaquery', this._updateMqHandler);
	    }
	  }]);

	  return ResponsiveToggle;
	}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_3__["Plugin"]);

	ResponsiveToggle.defaults = {
	  /**
	   * The breakpoint after which the menu is always shown, and the tab bar is hidden.
	   * @option
	   * @type {string}
	   * @default 'medium'
	   */
	  hideFor: 'medium',

	  /**
	   * To decide if the toggle should be animated or not.
	   * @option
	   * @type {boolean}
	   * @default false
	   */
	  animate: false
	};


	/***/ }),

	/***/ "./js/foundation.reveal.js":
	/*!*********************************!*\
	  !*** ./js/foundation.reveal.js ***!
	  \*********************************/
	/*! exports provided: Reveal */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {

	"use strict";
	__webpack_require__.r(__webpack_exports__);
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Reveal", function() { return Reveal; });
	/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
	/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
	/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.core.utils */ "./js/foundation.core.utils.js");
	/* harmony import */ var _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.util.keyboard */ "./js/foundation.util.keyboard.js");
	/* harmony import */ var _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.util.mediaQuery */ "./js/foundation.util.mediaQuery.js");
	/* harmony import */ var _foundation_util_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation.util.motion */ "./js/foundation.util.motion.js");
	/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./foundation.core.plugin */ "./js/foundation.core.plugin.js");
	/* harmony import */ var _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./foundation.util.triggers */ "./js/foundation.util.triggers.js");


	function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

	function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

	function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

	function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

	function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

	function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








	/**
	 * Reveal module.
	 * @module foundation.reveal
	 * @requires foundation.util.keyboard
	 * @requires foundation.util.triggers
	 * @requires foundation.util.mediaQuery
	 * @requires foundation.util.motion if using animations
	 */

	var Reveal =
	/*#__PURE__*/
	function (_Plugin) {
	  _inherits(Reveal, _Plugin);

	  function Reveal() {
	    _classCallCheck(this, Reveal);

	    return _possibleConstructorReturn(this, _getPrototypeOf(Reveal).apply(this, arguments));
	  }

	  _createClass(Reveal, [{
	    key: "_setup",

	    /**
	     * Creates a new instance of Reveal.
	     * @class
	     * @name Reveal
	     * @param {jQuery} element - jQuery object to use for the modal.
	     * @param {Object} options - optional parameters.
	     */
	    value: function _setup(element, options) {
	      this.$element = element;
	      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, Reveal.defaults, this.$element.data(), options);
	      this.className = 'Reveal'; // ie9 back compat

	      this._init(); // Triggers init is idempotent, just need to make sure it is initialized


	      _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_6__["Triggers"].init(jquery__WEBPACK_IMPORTED_MODULE_0___default.a);
	      _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2__["Keyboard"].register('Reveal', {
	        'ESCAPE': 'close'
	      });
	    }
	    /**
	     * Initializes the modal by adding the overlay and close buttons, (if selected).
	     * @private
	     */

	  }, {
	    key: "_init",
	    value: function _init() {
	      var _this2 = this;

	      _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_3__["MediaQuery"]._init();

	      this.id = this.$element.attr('id');
	      this.isActive = false;
	      this.cached = {
	        mq: _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_3__["MediaQuery"].current
	      };
	      this.$anchor = jquery__WEBPACK_IMPORTED_MODULE_0___default()("[data-open=\"".concat(this.id, "\"]")).length ? jquery__WEBPACK_IMPORTED_MODULE_0___default()("[data-open=\"".concat(this.id, "\"]")) : jquery__WEBPACK_IMPORTED_MODULE_0___default()("[data-toggle=\"".concat(this.id, "\"]"));
	      this.$anchor.attr({
	        'aria-controls': this.id,
	        'aria-haspopup': true,
	        'tabindex': 0
	      });

	      if (this.options.fullScreen || this.$element.hasClass('full')) {
	        this.options.fullScreen = true;
	        this.options.overlay = false;
	      }

	      if (this.options.overlay && !this.$overlay) {
	        this.$overlay = this._makeOverlay(this.id);
	      }

	      this.$element.attr({
	        'role': 'dialog',
	        'aria-hidden': true,
	        'data-yeti-box': this.id,
	        'data-resize': this.id
	      });

	      if (this.$overlay) {
	        this.$element.detach().appendTo(this.$overlay);
	      } else {
	        this.$element.detach().appendTo(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.options.appendTo));
	        this.$element.addClass('without-overlay');
	      }

	      this._events();

	      if (this.options.deepLink && window.location.hash === "#".concat(this.id)) {
	        this.onLoadListener = Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__["onLoad"])(jquery__WEBPACK_IMPORTED_MODULE_0___default()(window), function () {
	          return _this2.open();
	        });
	      }
	    }
	    /**
	     * Creates an overlay div to display behind the modal.
	     * @private
	     */

	  }, {
	    key: "_makeOverlay",
	    value: function _makeOverlay() {
	      var additionalOverlayClasses = '';

	      if (this.options.additionalOverlayClasses) {
	        additionalOverlayClasses = ' ' + this.options.additionalOverlayClasses;
	      }

	      return jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div></div>').addClass('reveal-overlay' + additionalOverlayClasses).appendTo(this.options.appendTo);
	    }
	    /**
	     * Updates position of modal
	     * TODO:  Figure out if we actually need to cache these values or if it doesn't matter
	     * @private
	     */

	  }, {
	    key: "_updatePosition",
	    value: function _updatePosition() {
	      var width = this.$element.outerWidth();
	      var outerWidth = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width();
	      var height = this.$element.outerHeight();
	      var outerHeight = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).height();
	      var left,
	          top = null;

	      if (this.options.hOffset === 'auto') {
	        left = parseInt((outerWidth - width) / 2, 10);
	      } else {
	        left = parseInt(this.options.hOffset, 10);
	      }

	      if (this.options.vOffset === 'auto') {
	        if (height > outerHeight) {
	          top = parseInt(Math.min(100, outerHeight / 10), 10);
	        } else {
	          top = parseInt((outerHeight - height) / 4, 10);
	        }
	      } else if (this.options.vOffset !== null) {
	        top = parseInt(this.options.vOffset, 10);
	      }

	      if (top !== null) {
	        this.$element.css({
	          top: top + 'px'
	        });
	      } // only worry about left if we don't have an overlay or we have a horizontal offset,
	      // otherwise we're perfectly in the middle


	      if (!this.$overlay || this.options.hOffset !== 'auto') {
	        this.$element.css({
	          left: left + 'px'
	        });
	        this.$element.css({
	          margin: '0px'
	        });
	      }
	    }
	    /**
	     * Adds event handlers for the modal.
	     * @private
	     */

	  }, {
	    key: "_events",
	    value: function _events() {
	      var _this3 = this;

	      var _this = this;

	      this.$element.on({
	        'open.zf.trigger': this.open.bind(this),
	        'close.zf.trigger': function closeZfTrigger(event, $element) {
	          if (event.target === _this.$element[0] || jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.target).parents('[data-closable]')[0] === $element) {
	            // only close reveal when it's explicitly called
	            return _this3.close.apply(_this3);
	          }
	        },
	        'toggle.zf.trigger': this.toggle.bind(this),
	        'resizeme.zf.trigger': function resizemeZfTrigger() {
	          _this._updatePosition();
	        }
	      });

	      if (this.options.closeOnClick && this.options.overlay) {
	        this.$overlay.off('.zf.reveal').on('click.zf.reveal', function (e) {
	          if (e.target === _this.$element[0] || jquery__WEBPACK_IMPORTED_MODULE_0___default.a.contains(_this.$element[0], e.target) || !jquery__WEBPACK_IMPORTED_MODULE_0___default.a.contains(document, e.target)) {
	            return;
	          }

	          _this.close();
	        });
	      }

	      if (this.options.deepLink) {
	        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on("hashchange.zf.reveal:".concat(this.id), this._handleState.bind(this));
	      }
	    }
	    /**
	     * Handles modal methods on back/forward button clicks or any other event that triggers hashchange.
	     * @private
	     */

	  }, {
	    key: "_handleState",
	    value: function _handleState(e) {
	      if (window.location.hash === '#' + this.id && !this.isActive) {
	        this.open();
	      } else {
	        this.close();
	      }
	    }
	    /**
	    * Disables the scroll when Reveal is shown to prevent the background from shifting
	    * @param {number} scrollTop - Scroll to visually apply, window current scroll by default
	    */

	  }, {
	    key: "_disableScroll",
	    value: function _disableScroll(scrollTop) {
	      scrollTop = scrollTop || jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop();

	      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).height() > jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).height()) {
	        jquery__WEBPACK_IMPORTED_MODULE_0___default()("html").css("top", -scrollTop);
	      }
	    }
	    /**
	    * Reenables the scroll when Reveal closes
	    * @param {number} scrollTop - Scroll to restore, html "top" property by default (as set by `_disableScroll`)
	    */

	  }, {
	    key: "_enableScroll",
	    value: function _enableScroll(scrollTop) {
	      scrollTop = scrollTop || parseInt(jquery__WEBPACK_IMPORTED_MODULE_0___default()("html").css("top"));

	      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).height() > jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).height()) {
	        jquery__WEBPACK_IMPORTED_MODULE_0___default()("html").css("top", "");
	        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop(-scrollTop);
	      }
	    }
	    /**
	     * Opens the modal controlled by `this.$anchor`, and closes all others by default.
	     * @function
	     * @fires Reveal#closeme
	     * @fires Reveal#open
	     */

	  }, {
	    key: "open",
	    value: function open() {
	      var _this4 = this;

	      // either update or replace browser history
	      var hash = "#".concat(this.id);

	      if (this.options.deepLink && window.location.hash !== hash) {
	        if (window.history.pushState) {
	          if (this.options.updateHistory) {
	            window.history.pushState({}, '', hash);
	          } else {
	            window.history.replaceState({}, '', hash);
	          }
	        } else {
	          window.location.hash = hash;
	        }
	      } // Remember anchor that opened it to set focus back later, have general anchors as fallback


	      this.$activeAnchor = jquery__WEBPACK_IMPORTED_MODULE_0___default()(document.activeElement).is(this.$anchor) ? jquery__WEBPACK_IMPORTED_MODULE_0___default()(document.activeElement) : this.$anchor;
	      this.isActive = true; // Make elements invisible, but remove display: none so we can get size and positioning

	      this.$element.css({
	        'visibility': 'hidden'
	      }).show().scrollTop(0);

	      if (this.options.overlay) {
	        this.$overlay.css({
	          'visibility': 'hidden'
	        }).show();
	      }

	      this._updatePosition();

	      this.$element.hide().css({
	        'visibility': ''
	      });

	      if (this.$overlay) {
	        this.$overlay.css({
	          'visibility': ''
	        }).hide();

	        if (this.$element.hasClass('fast')) {
	          this.$overlay.addClass('fast');
	        } else if (this.$element.hasClass('slow')) {
	          this.$overlay.addClass('slow');
	        }
	      }

	      if (!this.options.multipleOpened) {
	        /**
	         * Fires immediately before the modal opens.
	         * Closes any other modals that are currently open
	         * @event Reveal#closeme
	         */
	        this.$element.trigger('closeme.zf.reveal', this.id);
	      }

	      this._disableScroll();

	      var _this = this; // Motion UI method of reveal


	      if (this.options.animationIn) {
	        var afterAnimation = function afterAnimation() {
	          _this.$element.attr({
	            'aria-hidden': false,
	            'tabindex': -1
	          }).focus();

	          _this._addGlobalClasses();

	          _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2__["Keyboard"].trapFocus(_this.$element);
	        };

	        if (this.options.overlay) {
	          _foundation_util_motion__WEBPACK_IMPORTED_MODULE_4__["Motion"].animateIn(this.$overlay, 'fade-in');
	        }

	        _foundation_util_motion__WEBPACK_IMPORTED_MODULE_4__["Motion"].animateIn(this.$element, this.options.animationIn, function () {
	          if (_this4.$element) {
	            // protect against object having been removed
	            _this4.focusableElements = _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2__["Keyboard"].findFocusable(_this4.$element);
	            afterAnimation();
	          }
	        });
	      } // jQuery method of reveal
	      else {
	          if (this.options.overlay) {
	            this.$overlay.show(0);
	          }

	          this.$element.show(this.options.showDelay);
	        } // handle accessibility


	      this.$element.attr({
	        'aria-hidden': false,
	        'tabindex': -1
	      }).focus();
	      _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2__["Keyboard"].trapFocus(this.$element);

	      this._addGlobalClasses();

	      this._addGlobalListeners();
	      /**
	       * Fires when the modal has successfully opened.
	       * @event Reveal#open
	       */


	      this.$element.trigger('open.zf.reveal');
	    }
	    /**
	     * Adds classes and listeners on document required by open modals.
	     *
	     * The following classes are added and updated:
	     * - `.is-reveal-open` - Prevents the scroll on document
	     * - `.zf-has-scroll`  - Displays a disabled scrollbar on document if required like if the
	     *                       scroll was not disabled. This prevent a "shift" of the page content due
	     *                       the scrollbar disappearing when the modal opens.
	     *
	     * @private
	     */

	  }, {
	    key: "_addGlobalClasses",
	    value: function _addGlobalClasses() {
	      var updateScrollbarClass = function updateScrollbarClass() {
	        jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').toggleClass('zf-has-scroll', !!(jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).height() > jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).height()));
	      };

	      this.$element.on('resizeme.zf.trigger.revealScrollbarListener', function () {
	        return updateScrollbarClass();
	      });
	      updateScrollbarClass();
	      jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').addClass('is-reveal-open');
	    }
	    /**
	     * Removes classes and listeners on document that were required by open modals.
	     * @private
	     */

	  }, {
	    key: "_removeGlobalClasses",
	    value: function _removeGlobalClasses() {
	      this.$element.off('resizeme.zf.trigger.revealScrollbarListener');
	      jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').removeClass('is-reveal-open');
	      jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').removeClass('zf-has-scroll');
	    }
	    /**
	     * Adds extra event handlers for the body and window if necessary.
	     * @private
	     */

	  }, {
	    key: "_addGlobalListeners",
	    value: function _addGlobalListeners() {
	      var _this = this;

	      if (!this.$element) {
	        return;
	      } // If we're in the middle of cleanup, don't freak out


	      this.focusableElements = _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2__["Keyboard"].findFocusable(this.$element);

	      if (!this.options.overlay && this.options.closeOnClick && !this.options.fullScreen) {
	        jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').on('click.zf.reveal', function (e) {
	          if (e.target === _this.$element[0] || jquery__WEBPACK_IMPORTED_MODULE_0___default.a.contains(_this.$element[0], e.target) || !jquery__WEBPACK_IMPORTED_MODULE_0___default.a.contains(document, e.target)) {
	            return;
	          }

	          _this.close();
	        });
	      }

	      if (this.options.closeOnEsc) {
	        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('keydown.zf.reveal', function (e) {
	          _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2__["Keyboard"].handleKey(e, 'Reveal', {
	            close: function close() {
	              if (_this.options.closeOnEsc) {
	                _this.close();
	              }
	            }
	          });
	        });
	      }
	    }
	    /**
	     * Closes the modal.
	     * @function
	     * @fires Reveal#closed
	     */

	  }, {
	    key: "close",
	    value: function close() {
	      if (!this.isActive || !this.$element.is(':visible')) {
	        return false;
	      }

	      var _this = this; // Motion UI method of hiding


	      if (this.options.animationOut) {
	        if (this.options.overlay) {
	          _foundation_util_motion__WEBPACK_IMPORTED_MODULE_4__["Motion"].animateOut(this.$overlay, 'fade-out');
	        }

	        _foundation_util_motion__WEBPACK_IMPORTED_MODULE_4__["Motion"].animateOut(this.$element, this.options.animationOut, finishUp);
	      } // jQuery method of hiding
	      else {
	          this.$element.hide(this.options.hideDelay);

	          if (this.options.overlay) {
	            this.$overlay.hide(0, finishUp);
	          } else {
	            finishUp();
	          }
	        } // Conditionals to remove extra event listeners added on open


	      if (this.options.closeOnEsc) {
	        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off('keydown.zf.reveal');
	      }

	      if (!this.options.overlay && this.options.closeOnClick) {
	        jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').off('click.zf.reveal');
	      }

	      this.$element.off('keydown.zf.reveal');

	      function finishUp() {
	        // Get the current top before the modal is closed and restore the scroll after.
	        // TODO: use component properties instead of HTML properties
	        // See https://github.com/zurb/foundation-sites/pull/10786
	        var scrollTop = parseInt(jquery__WEBPACK_IMPORTED_MODULE_0___default()("html").css("top"));

	        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.reveal:visible').length === 0) {
	          _this._removeGlobalClasses(); // also remove .is-reveal-open from the html element when there is no opened reveal

	        }

	        _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2__["Keyboard"].releaseFocus(_this.$element);

	        _this.$element.attr('aria-hidden', true);

	        _this._enableScroll(scrollTop);
	        /**
	        * Fires when the modal is done closing.
	        * @event Reveal#closed
	        */


	        _this.$element.trigger('closed.zf.reveal');
	      }
	      /**
	      * Resets the modal content
	      * This prevents a running video to keep going in the background
	      */


	      if (this.options.resetOnClose) {
	        this.$element.html(this.$element.html());
	      }

	      this.isActive = false; // If deepLink and we did not switched to an other modal...

	      if (_this.options.deepLink && window.location.hash === "#".concat(this.id)) {
	        // Remove the history hash
	        if (window.history.replaceState) {
	          var urlWithoutHash = window.location.pathname + window.location.search;

	          if (this.options.updateHistory) {
	            window.history.pushState({}, '', urlWithoutHash); // remove the hash
	          } else {
	            window.history.replaceState('', document.title, urlWithoutHash);
	          }
	        } else {
	          window.location.hash = '';
	        }
	      }

	      this.$activeAnchor.focus();
	    }
	    /**
	     * Toggles the open/closed state of a modal.
	     * @function
	     */

	  }, {
	    key: "toggle",
	    value: function toggle() {
	      if (this.isActive) {
	        this.close();
	      } else {
	        this.open();
	      }
	    }
	  }, {
	    key: "_destroy",

	    /**
	     * Destroys an instance of a modal.
	     * @function
	     */
	    value: function _destroy() {
	      if (this.options.overlay) {
	        this.$element.appendTo(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.options.appendTo)); // move $element outside of $overlay to prevent error unregisterPlugin()

	        this.$overlay.hide().off().remove();
	      }

	      this.$element.hide().off();
	      this.$anchor.off('.zf');
	      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(".zf.reveal:".concat(this.id));
	      if (this.onLoadListener) jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(this.onLoadListener);

	      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.reveal:visible').length === 0) {
	        this._removeGlobalClasses(); // also remove .is-reveal-open from the html element when there is no opened reveal

	      }
	    }
	  }]);

	  return Reveal;
	}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_5__["Plugin"]);

	Reveal.defaults = {
	  /**
	   * Motion-UI class to use for animated elements. If none used, defaults to simple show/hide.
	   * @option
	   * @type {string}
	   * @default ''
	   */
	  animationIn: '',

	  /**
	   * Motion-UI class to use for animated elements. If none used, defaults to simple show/hide.
	   * @option
	   * @type {string}
	   * @default ''
	   */
	  animationOut: '',

	  /**
	   * Time, in ms, to delay the opening of a modal after a click if no animation used.
	   * @option
	   * @type {number}
	   * @default 0
	   */
	  showDelay: 0,

	  /**
	   * Time, in ms, to delay the closing of a modal after a click if no animation used.
	   * @option
	   * @type {number}
	   * @default 0
	   */
	  hideDelay: 0,

	  /**
	   * Allows a click on the body/overlay to close the modal.
	   * @option
	   * @type {boolean}
	   * @default true
	   */
	  closeOnClick: true,

	  /**
	   * Allows the modal to close if the user presses the `ESCAPE` key.
	   * @option
	   * @type {boolean}
	   * @default true
	   */
	  closeOnEsc: true,

	  /**
	   * If true, allows multiple modals to be displayed at once.
	   * @option
	   * @type {boolean}
	   * @default false
	   */
	  multipleOpened: false,

	  /**
	   * Distance, in pixels, the modal should push down from the top of the screen.
	   * @option
	   * @type {number|string}
	   * @default auto
	   */
	  vOffset: 'auto',

	  /**
	   * Distance, in pixels, the modal should push in from the side of the screen.
	   * @option
	   * @type {number|string}
	   * @default auto
	   */
	  hOffset: 'auto',

	  /**
	   * Allows the modal to be fullscreen, completely blocking out the rest of the view. JS checks for this as well.
	   * @option
	   * @type {boolean}
	   * @default false
	   */
	  fullScreen: false,

	  /**
	   * Allows the modal to generate an overlay div, which will cover the view when modal opens.
	   * @option
	   * @type {boolean}
	   * @default true
	   */
	  overlay: true,

	  /**
	   * Allows the modal to remove and reinject markup on close. Should be true if using video elements w/o using provider's api, otherwise, videos will continue to play in the background.
	   * @option
	   * @type {boolean}
	   * @default false
	   */
	  resetOnClose: false,

	  /**
	   * Link the location hash to the modal.
	   * Set the location hash when the modal is opened/closed, and open/close the modal when the location changes.
	   * @option
	   * @type {boolean}
	   * @default false
	   */
	  deepLink: false,

	  /**
	   * If `deepLink` is enabled, update the browser history with the open modal
	   * @option
	   * @default false
	   */
	  updateHistory: false,

	  /**
	  * Allows the modal to append to custom div.
	  * @option
	  * @type {string}
	  * @default "body"
	  */
	  appendTo: "body",

	  /**
	   * Allows adding additional class names to the reveal overlay.
	   * @option
	   * @type {string}
	   * @default ''
	   */
	  additionalOverlayClasses: ''
	};


	/***/ }),

	/***/ "./js/foundation.slider.js":
	/*!*********************************!*\
	  !*** ./js/foundation.slider.js ***!
	  \*********************************/
	/*! exports provided: Slider */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {

	"use strict";
	__webpack_require__.r(__webpack_exports__);
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slider", function() { return Slider; });
	/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
	/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
	/* harmony import */ var _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.util.keyboard */ "./js/foundation.util.keyboard.js");
	/* harmony import */ var _foundation_util_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.util.motion */ "./js/foundation.util.motion.js");
	/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.core.utils */ "./js/foundation.core.utils.js");
	/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation.core.plugin */ "./js/foundation.core.plugin.js");
	/* harmony import */ var _foundation_util_touch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./foundation.util.touch */ "./js/foundation.util.touch.js");
	/* harmony import */ var _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./foundation.util.triggers */ "./js/foundation.util.triggers.js");


	function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

	function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

	function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

	function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

	function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

	function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








	/**
	 * Slider module.
	 * @module foundation.slider
	 * @requires foundation.util.motion
	 * @requires foundation.util.triggers
	 * @requires foundation.util.keyboard
	 * @requires foundation.util.touch
	 */

	var Slider =
	/*#__PURE__*/
	function (_Plugin) {
	  _inherits(Slider, _Plugin);

	  function Slider() {
	    _classCallCheck(this, Slider);

	    return _possibleConstructorReturn(this, _getPrototypeOf(Slider).apply(this, arguments));
	  }

	  _createClass(Slider, [{
	    key: "_setup",

	    /**
	     * Creates a new instance of a slider control.
	     * @class
	     * @name Slider
	     * @param {jQuery} element - jQuery object to make into a slider control.
	     * @param {Object} options - Overrides to the default plugin settings.
	     */
	    value: function _setup(element, options) {
	      this.$element = element;
	      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, Slider.defaults, this.$element.data(), options);
	      this.className = 'Slider'; // ie9 back compat
	      // Touch and Triggers inits are idempotent, we just need to make sure it's initialied.

	      _foundation_util_touch__WEBPACK_IMPORTED_MODULE_5__["Touch"].init(jquery__WEBPACK_IMPORTED_MODULE_0___default.a);
	      _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_6__["Triggers"].init(jquery__WEBPACK_IMPORTED_MODULE_0___default.a);

	      this._init();

	      _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__["Keyboard"].register('Slider', {
	        'ltr': {
	          'ARROW_RIGHT': 'increase',
	          'ARROW_UP': 'increase',
	          'ARROW_DOWN': 'decrease',
	          'ARROW_LEFT': 'decrease',
	          'SHIFT_ARROW_RIGHT': 'increase_fast',
	          'SHIFT_ARROW_UP': 'increase_fast',
	          'SHIFT_ARROW_DOWN': 'decrease_fast',
	          'SHIFT_ARROW_LEFT': 'decrease_fast',
	          'HOME': 'min',
	          'END': 'max'
	        },
	        'rtl': {
	          'ARROW_LEFT': 'increase',
	          'ARROW_RIGHT': 'decrease',
	          'SHIFT_ARROW_LEFT': 'increase_fast',
	          'SHIFT_ARROW_RIGHT': 'decrease_fast'
	        }
	      });
	    }
	    /**
	     * Initilizes the plugin by reading/setting attributes, creating collections and setting the initial position of the handle(s).
	     * @function
	     * @private
	     */

	  }, {
	    key: "_init",
	    value: function _init() {
	      this.inputs = this.$element.find('input');
	      this.handles = this.$element.find('[data-slider-handle]');
	      this.$handle = this.handles.eq(0);
	      this.$input = this.inputs.length ? this.inputs.eq(0) : jquery__WEBPACK_IMPORTED_MODULE_0___default()("#".concat(this.$handle.attr('aria-controls')));
	      this.$fill = this.$element.find('[data-slider-fill]').css(this.options.vertical ? 'height' : 'width', 0);

	      var isDbl = false,
	          _this = this;

	      if (this.options.disabled || this.$element.hasClass(this.options.disabledClass)) {
	        this.options.disabled = true;
	        this.$element.addClass(this.options.disabledClass);
	      }

	      if (!this.inputs.length) {
	        this.inputs = jquery__WEBPACK_IMPORTED_MODULE_0___default()().add(this.$input);
	        this.options.binding = true;
	      }

	      this._setInitAttr(0);

	      if (this.handles[1]) {
	        this.options.doubleSided = true;
	        this.$handle2 = this.handles.eq(1);
	        this.$input2 = this.inputs.length > 1 ? this.inputs.eq(1) : jquery__WEBPACK_IMPORTED_MODULE_0___default()("#".concat(this.$handle2.attr('aria-controls')));

	        if (!this.inputs[1]) {
	          this.inputs = this.inputs.add(this.$input2);
	        }

	        isDbl = true; // this.$handle.triggerHandler('click.zf.slider');

	        this._setInitAttr(1);
	      } // Set handle positions


	      this.setHandles();

	      this._events();
	    }
	  }, {
	    key: "setHandles",
	    value: function setHandles() {
	      var _this2 = this;

	      if (this.handles[1]) {
	        this._setHandlePos(this.$handle, this.inputs.eq(0).val(), true, function () {
	          _this2._setHandlePos(_this2.$handle2, _this2.inputs.eq(1).val(), true);
	        });
	      } else {
	        this._setHandlePos(this.$handle, this.inputs.eq(0).val(), true);
	      }
	    }
	  }, {
	    key: "_reflow",
	    value: function _reflow() {
	      this.setHandles();
	    }
	    /**
	    * @function
	    * @private
	    * @param {Number} value - floating point (the value) to be transformed using to a relative position on the slider (the inverse of _value)
	    */

	  }, {
	    key: "_pctOfBar",
	    value: function _pctOfBar(value) {
	      var pctOfBar = percent(value - this.options.start, this.options.end - this.options.start);

	      switch (this.options.positionValueFunction) {
	        case "pow":
	          pctOfBar = this._logTransform(pctOfBar);
	          break;

	        case "log":
	          pctOfBar = this._powTransform(pctOfBar);
	          break;
	      }

	      return pctOfBar.toFixed(2);
	    }
	    /**
	    * @function
	    * @private
	    * @param {Number} pctOfBar - floating point, the relative position of the slider (typically between 0-1) to be transformed to a value
	    */

	  }, {
	    key: "_value",
	    value: function _value(pctOfBar) {
	      switch (this.options.positionValueFunction) {
	        case "pow":
	          pctOfBar = this._powTransform(pctOfBar);
	          break;

	        case "log":
	          pctOfBar = this._logTransform(pctOfBar);
	          break;
	      }

	      var value = (this.options.end - this.options.start) * pctOfBar + parseFloat(this.options.start);
	      return value;
	    }
	    /**
	    * @function
	    * @private
	    * @param {Number} value - floating point (typically between 0-1) to be transformed using the log function
	    */

	  }, {
	    key: "_logTransform",
	    value: function _logTransform(value) {
	      return baseLog(this.options.nonLinearBase, value * (this.options.nonLinearBase - 1) + 1);
	    }
	    /**
	    * @function
	    * @private
	    * @param {Number} value - floating point (typically between 0-1) to be transformed using the power function
	    */

	  }, {
	    key: "_powTransform",
	    value: function _powTransform(value) {
	      return (Math.pow(this.options.nonLinearBase, value) - 1) / (this.options.nonLinearBase - 1);
	    }
	    /**
	     * Sets the position of the selected handle and fill bar.
	     * @function
	     * @private
	     * @param {jQuery} $hndl - the selected handle to move.
	     * @param {Number} location - floating point between the start and end values of the slider bar.
	     * @param {Function} cb - callback function to fire on completion.
	     * @fires Slider#moved
	     * @fires Slider#changed
	     */

	  }, {
	    key: "_setHandlePos",
	    value: function _setHandlePos($hndl, location, noInvert, cb) {
	      // don't move if the slider has been disabled since its initialization
	      if (this.$element.hasClass(this.options.disabledClass)) {
	        return;
	      } //might need to alter that slightly for bars that will have odd number selections.


	      location = parseFloat(location); //on input change events, convert string to number...grumble.
	      // prevent slider from running out of bounds, if value exceeds the limits set through options, override the value to min/max

	      if (location < this.options.start) {
	        location = this.options.start;
	      } else if (location > this.options.end) {
	        location = this.options.end;
	      }

	      var isDbl = this.options.doubleSided; //this is for single-handled vertical sliders, it adjusts the value to account for the slider being "upside-down"
	      //for click and drag events, it's weird due to the scale(-1, 1) css property

	      if (this.options.vertical && !noInvert) {
	        location = this.options.end - location;
	      }

	      if (isDbl) {
	        //this block is to prevent 2 handles from crossing eachother. Could/should be improved.
	        if (this.handles.index($hndl) === 0) {
	          var h2Val = parseFloat(this.$handle2.attr('aria-valuenow'));
	          location = location >= h2Val ? h2Val - this.options.step : location;
	        } else {
	          var h1Val = parseFloat(this.$handle.attr('aria-valuenow'));
	          location = location <= h1Val ? h1Val + this.options.step : location;
	        }
	      }

	      var _this = this,
	          vert = this.options.vertical,
	          hOrW = vert ? 'height' : 'width',
	          lOrT = vert ? 'top' : 'left',
	          handleDim = $hndl[0].getBoundingClientRect()[hOrW],
	          elemDim = this.$element[0].getBoundingClientRect()[hOrW],
	          //percentage of bar min/max value based on click or drag point
	      pctOfBar = this._pctOfBar(location),
	          //number of actual pixels to shift the handle, based on the percentage obtained above
	      pxToMove = (elemDim - handleDim) * pctOfBar,
	          //percentage of bar to shift the handle
	      movement = (percent(pxToMove, elemDim) * 100).toFixed(this.options.decimal); //fixing the decimal value for the location number, is passed to other methods as a fixed floating-point value


	      location = parseFloat(location.toFixed(this.options.decimal)); // declare empty object for css adjustments, only used with 2 handled-sliders

	      var css = {};

	      this._setValues($hndl, location); // TODO update to calculate based on values set to respective inputs??


	      if (isDbl) {
	        var isLeftHndl = this.handles.index($hndl) === 0,
	            //empty variable, will be used for min-height/width for fill bar
	        dim,
	            //percentage w/h of the handle compared to the slider bar
	        handlePct = ~~(percent(handleDim, elemDim) * 100); //if left handle, the math is slightly different than if it's the right handle, and the left/top property needs to be changed for the fill bar

	        if (isLeftHndl) {
	          //left or top percentage value to apply to the fill bar.
	          css[lOrT] = "".concat(movement, "%"); //calculate the new min-height/width for the fill bar.

	          dim = parseFloat(this.$handle2[0].style[lOrT]) - movement + handlePct; //this callback is necessary to prevent errors and allow the proper placement and initialization of a 2-handled slider
	          //plus, it means we don't care if 'dim' isNaN on init, it won't be in the future.

	          if (cb && typeof cb === 'function') {
	            cb();
	          } //this is only needed for the initialization of 2 handled sliders

	        } else {
	          //just caching the value of the left/bottom handle's left/top property
	          var handlePos = parseFloat(this.$handle[0].style[lOrT]); //calculate the new min-height/width for the fill bar. Use isNaN to prevent false positives for numbers <= 0
	          //based on the percentage of movement of the handle being manipulated, less the opposing handle's left/top position, plus the percentage w/h of the handle itself

	          dim = movement - (isNaN(handlePos) ? (this.options.initialStart - this.options.start) / ((this.options.end - this.options.start) / 100) : handlePos) + handlePct;
	        } // assign the min-height/width to our css object


	        css["min-".concat(hOrW)] = "".concat(dim, "%");
	      }

	      this.$element.one('finished.zf.animate', function () {
	        /**
	         * Fires when the handle is done moving.
	         * @event Slider#moved
	         */
	        _this.$element.trigger('moved.zf.slider', [$hndl]);
	      }); //because we don't know exactly how the handle will be moved, check the amount of time it should take to move.

	      var moveTime = this.$element.data('dragging') ? 1000 / 60 : this.options.moveTime;
	      Object(_foundation_util_motion__WEBPACK_IMPORTED_MODULE_2__["Move"])(moveTime, $hndl, function () {
	        // adjusting the left/top property of the handle, based on the percentage calculated above
	        // if movement isNaN, that is because the slider is hidden and we cannot determine handle width,
	        // fall back to next best guess.
	        if (isNaN(movement)) {
	          $hndl.css(lOrT, "".concat(pctOfBar * 100, "%"));
	        } else {
	          $hndl.css(lOrT, "".concat(movement, "%"));
	        }

	        if (!_this.options.doubleSided) {
	          //if single-handled, a simple method to expand the fill bar
	          _this.$fill.css(hOrW, "".concat(pctOfBar * 100, "%"));
	        } else {
	          //otherwise, use the css object we created above
	          _this.$fill.css(css);
	        }
	      });
	      /**
	       * Fires when the value has not been change for a given time.
	       * @event Slider#changed
	       */

	      clearTimeout(_this.timeout);
	      _this.timeout = setTimeout(function () {
	        _this.$element.trigger('changed.zf.slider', [$hndl]);
	      }, _this.options.changedDelay);
	    }
	    /**
	     * Sets the initial attribute for the slider element.
	     * @function
	     * @private
	     * @param {Number} idx - index of the current handle/input to use.
	     */

	  }, {
	    key: "_setInitAttr",
	    value: function _setInitAttr(idx) {
	      var initVal = idx === 0 ? this.options.initialStart : this.options.initialEnd;
	      var id = this.inputs.eq(idx).attr('id') || Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__["GetYoDigits"])(6, 'slider');
	      this.inputs.eq(idx).attr({
	        'id': id,
	        'max': this.options.end,
	        'min': this.options.start,
	        'step': this.options.step
	      });
	      this.inputs.eq(idx).val(initVal);
	      this.handles.eq(idx).attr({
	        'role': 'slider',
	        'aria-controls': id,
	        'aria-valuemax': this.options.end,
	        'aria-valuemin': this.options.start,
	        'aria-valuenow': initVal,
	        'aria-orientation': this.options.vertical ? 'vertical' : 'horizontal',
	        'tabindex': 0
	      });
	    }
	    /**
	     * Sets the input and `aria-valuenow` values for the slider element.
	     * @function
	     * @private
	     * @param {jQuery} $handle - the currently selected handle.
	     * @param {Number} val - floating point of the new value.
	     */

	  }, {
	    key: "_setValues",
	    value: function _setValues($handle, val) {
	      var idx = this.options.doubleSided ? this.handles.index($handle) : 0;
	      this.inputs.eq(idx).val(val);
	      $handle.attr('aria-valuenow', val);
	    }
	    /**
	     * Handles events on the slider element.
	     * Calculates the new location of the current handle.
	     * If there are two handles and the bar was clicked, it determines which handle to move.
	     * @function
	     * @private
	     * @param {Object} e - the `event` object passed from the listener.
	     * @param {jQuery} $handle - the current handle to calculate for, if selected.
	     * @param {Number} val - floating point number for the new value of the slider.
	     * TODO clean this up, there's a lot of repeated code between this and the _setHandlePos fn.
	     */

	  }, {
	    key: "_handleEvent",
	    value: function _handleEvent(e, $handle, val) {
	      var value, hasVal;

	      if (!val) {
	        //click or drag events
	        e.preventDefault();

	        var _this = this,
	            vertical = this.options.vertical,
	            param = vertical ? 'height' : 'width',
	            direction = vertical ? 'top' : 'left',
	            eventOffset = vertical ? e.pageY : e.pageX,
	            halfOfHandle = this.$handle[0].getBoundingClientRect()[param] / 2,
	            barDim = this.$element[0].getBoundingClientRect()[param],
	            windowScroll = vertical ? jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop() : jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollLeft();

	        var elemOffset = this.$element.offset()[direction]; // touch events emulated by the touch util give position relative to screen, add window.scroll to event coordinates...
	        // best way to guess this is simulated is if clientY == pageY

	        if (e.clientY === e.pageY) {
	          eventOffset = eventOffset + windowScroll;
	        }

	        var eventFromBar = eventOffset - elemOffset;
	        var barXY;

	        if (eventFromBar < 0) {
	          barXY = 0;
	        } else if (eventFromBar > barDim) {
	          barXY = barDim;
	        } else {
	          barXY = eventFromBar;
	        }

	        var offsetPct = percent(barXY, barDim);
	        value = this._value(offsetPct); // turn everything around for RTL, yay math!

	        if (Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__["rtl"])() && !this.options.vertical) {
	          value = this.options.end - value;
	        }

	        value = _this._adjustValue(null, value); //boolean flag for the setHandlePos fn, specifically for vertical sliders

	        hasVal = false;

	        if (!$handle) {
	          //figure out which handle it is, pass it to the next function.
	          var firstHndlPos = absPosition(this.$handle, direction, barXY, param),
	              secndHndlPos = absPosition(this.$handle2, direction, barXY, param);
	          $handle = firstHndlPos <= secndHndlPos ? this.$handle : this.$handle2;
	        }
	      } else {
	        //change event on input
	        value = this._adjustValue(null, val);
	        hasVal = true;
	      }

	      this._setHandlePos($handle, value, hasVal);
	    }
	    /**
	     * Adjustes value for handle in regard to step value. returns adjusted value
	     * @function
	     * @private
	     * @param {jQuery} $handle - the selected handle.
	     * @param {Number} value - value to adjust. used if $handle is falsy
	     */

	  }, {
	    key: "_adjustValue",
	    value: function _adjustValue($handle, value) {
	      var val,
	          step = this.options.step,
	          div = parseFloat(step / 2),
	          left,
	          prev_val,
	          next_val;

	      if (!!$handle) {
	        val = parseFloat($handle.attr('aria-valuenow'));
	      } else {
	        val = value;
	      }

	      if (val >= 0) {
	        left = val % step;
	      } else {
	        left = step + val % step;
	      }

	      prev_val = val - left;
	      next_val = prev_val + step;

	      if (left === 0) {
	        return val;
	      }

	      val = val >= prev_val + div ? next_val : prev_val;
	      return val;
	    }
	    /**
	     * Adds event listeners to the slider elements.
	     * @function
	     * @private
	     */

	  }, {
	    key: "_events",
	    value: function _events() {
	      this._eventsForHandle(this.$handle);

	      if (this.handles[1]) {
	        this._eventsForHandle(this.$handle2);
	      }
	    }
	    /**
	     * Adds event listeners a particular handle
	     * @function
	     * @private
	     * @param {jQuery} $handle - the current handle to apply listeners to.
	     */

	  }, {
	    key: "_eventsForHandle",
	    value: function _eventsForHandle($handle) {
	      var _this = this,
	          curHandle,
	          timer;

	      var handleChangeEvent = function handleChangeEvent(e) {
	        var idx = _this.inputs.index(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));

	        _this._handleEvent(e, _this.handles.eq(idx), jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).val());
	      }; // IE only triggers the change event when the input loses focus which strictly follows the HTML specification
	      // listen for the enter key and trigger a change
	      // @see https://html.spec.whatwg.org/multipage/input.html#common-input-element-events


	      this.inputs.off('keyup.zf.slider').on('keyup.zf.slider', function (e) {
	        if (e.keyCode == 13) handleChangeEvent.call(this, e);
	      });
	      this.inputs.off('change.zf.slider').on('change.zf.slider', handleChangeEvent);

	      if (this.options.clickSelect) {
	        this.$element.off('click.zf.slider').on('click.zf.slider', function (e) {
	          if (_this.$element.data('dragging')) {
	            return false;
	          }

	          if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).is('[data-slider-handle]')) {
	            if (_this.options.doubleSided) {
	              _this._handleEvent(e);
	            } else {
	              _this._handleEvent(e, _this.$handle);
	            }
	          }
	        });
	      }

	      if (this.options.draggable) {
	        this.handles.addTouch();
	        var $body = jquery__WEBPACK_IMPORTED_MODULE_0___default()('body');
	        $handle.off('mousedown.zf.slider').on('mousedown.zf.slider', function (e) {
	          $handle.addClass('is-dragging');

	          _this.$fill.addClass('is-dragging'); //


	          _this.$element.data('dragging', true);

	          curHandle = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget);
	          $body.on('mousemove.zf.slider', function (e) {
	            e.preventDefault();

	            _this._handleEvent(e, curHandle);
	          }).on('mouseup.zf.slider', function (e) {
	            _this._handleEvent(e, curHandle);

	            $handle.removeClass('is-dragging');

	            _this.$fill.removeClass('is-dragging');

	            _this.$element.data('dragging', false);

	            $body.off('mousemove.zf.slider mouseup.zf.slider');
	          });
	        }) // prevent events triggered by touch
	        .on('selectstart.zf.slider touchmove.zf.slider', function (e) {
	          e.preventDefault();
	        });
	      }

	      $handle.off('keydown.zf.slider').on('keydown.zf.slider', function (e) {
	        var _$handle = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),
	            idx = _this.options.doubleSided ? _this.handles.index(_$handle) : 0,
	            oldValue = parseFloat(_this.inputs.eq(idx).val()),
	            newValue; // handle keyboard event with keyboard util


	        _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__["Keyboard"].handleKey(e, 'Slider', {
	          decrease: function decrease() {
	            newValue = oldValue - _this.options.step;
	          },
	          increase: function increase() {
	            newValue = oldValue + _this.options.step;
	          },
	          decrease_fast: function decrease_fast() {
	            newValue = oldValue - _this.options.step * 10;
	          },
	          increase_fast: function increase_fast() {
	            newValue = oldValue + _this.options.step * 10;
	          },
	          min: function min() {
	            newValue = _this.options.start;
	          },
	          max: function max() {
	            newValue = _this.options.end;
	          },
	          handled: function handled() {
	            // only set handle pos when event was handled specially
	            e.preventDefault();

	            _this._setHandlePos(_$handle, newValue, true);
	          }
	        });
	        /*if (newValue) { // if pressed key has special function, update value
	          e.preventDefault();
	          _this._setHandlePos(_$handle, newValue);
	        }*/
	      });
	    }
	    /**
	     * Destroys the slider plugin.
	     */

	  }, {
	    key: "_destroy",
	    value: function _destroy() {
	      this.handles.off('.zf.slider');
	      this.inputs.off('.zf.slider');
	      this.$element.off('.zf.slider');
	      clearTimeout(this.timeout);
	    }
	  }]);

	  return Slider;
	}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_4__["Plugin"]);

	Slider.defaults = {
	  /**
	   * Minimum value for the slider scale.
	   * @option
	   * @type {number}
	   * @default 0
	   */
	  start: 0,

	  /**
	   * Maximum value for the slider scale.
	   * @option
	   * @type {number}
	   * @default 100
	   */
	  end: 100,

	  /**
	   * Minimum value change per change event.
	   * @option
	   * @type {number}
	   * @default 1
	   */
	  step: 1,

	  /**
	   * Value at which the handle/input *(left handle/first input)* should be set to on initialization.
	   * @option
	   * @type {number}
	   * @default 0
	   */
	  initialStart: 0,

	  /**
	   * Value at which the right handle/second input should be set to on initialization.
	   * @option
	   * @type {number}
	   * @default 100
	   */
	  initialEnd: 100,

	  /**
	   * Allows the input to be located outside the container and visible. Set to by the JS
	   * @option
	   * @type {boolean}
	   * @default false
	   */
	  binding: false,

	  /**
	   * Allows the user to click/tap on the slider bar to select a value.
	   * @option
	   * @type {boolean}
	   * @default true
	   */
	  clickSelect: true,

	  /**
	   * Set to true and use the `vertical` class to change alignment to vertical.
	   * @option
	   * @type {boolean}
	   * @default false
	   */
	  vertical: false,

	  /**
	   * Allows the user to drag the slider handle(s) to select a value.
	   * @option
	   * @type {boolean}
	   * @default true
	   */
	  draggable: true,

	  /**
	   * Disables the slider and prevents event listeners from being applied. Double checked by JS with `disabledClass`.
	   * @option
	   * @type {boolean}
	   * @default false
	   */
	  disabled: false,

	  /**
	   * Allows the use of two handles. Double checked by the JS. Changes some logic handling.
	   * @option
	   * @type {boolean}
	   * @default false
	   */
	  doubleSided: false,

	  /**
	   * Potential future feature.
	   */
	  // steps: 100,

	  /**
	   * Number of decimal places the plugin should go to for floating point precision.
	   * @option
	   * @type {number}
	   * @default 2
	   */
	  decimal: 2,

	  /**
	   * Time delay for dragged elements.
	   */
	  // dragDelay: 0,

	  /**
	   * Time, in ms, to animate the movement of a slider handle if user clicks/taps on the bar. Needs to be manually set if updating the transition time in the Sass settings.
	   * @option
	   * @type {number}
	   * @default 200
	   */
	  moveTime: 200,
	  //update this if changing the transition time in the sass

	  /**
	   * Class applied to disabled sliders.
	   * @option
	   * @type {string}
	   * @default 'disabled'
	   */
	  disabledClass: 'disabled',

	  /**
	   * Will invert the default layout for a vertical<span data-tooltip title="who would do this???"> </span>slider.
	   * @option
	   * @type {boolean}
	   * @default false
	   */
	  invertVertical: false,

	  /**
	   * Milliseconds before the `changed.zf-slider` event is triggered after value change.
	   * @option
	   * @type {number}
	   * @default 500
	   */
	  changedDelay: 500,

	  /**
	  * Basevalue for non-linear sliders
	  * @option
	  * @type {number}
	  * @default 5
	  */
	  nonLinearBase: 5,

	  /**
	  * Basevalue for non-linear sliders, possible values are: `'linear'`, `'pow'` & `'log'`. Pow and Log use the nonLinearBase setting.
	  * @option
	  * @type {string}
	  * @default 'linear'
	  */
	  positionValueFunction: 'linear'
	};

	function percent(frac, num) {
	  return frac / num;
	}

	function absPosition($handle, dir, clickPos, param) {
	  return Math.abs($handle.position()[dir] + $handle[param]() / 2 - clickPos);
	}

	function baseLog(base, value) {
	  return Math.log(value) / Math.log(base);
	}



	/***/ }),

	/***/ "./js/foundation.smoothScroll.js":
	/*!***************************************!*\
	  !*** ./js/foundation.smoothScroll.js ***!
	  \***************************************/
	/*! exports provided: SmoothScroll */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {

	"use strict";
	__webpack_require__.r(__webpack_exports__);
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmoothScroll", function() { return SmoothScroll; });
	/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
	/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
	/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.core.utils */ "./js/foundation.core.utils.js");
	/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.core.plugin */ "./js/foundation.core.plugin.js");
	function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

	function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

	function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

	function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

	function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

	function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




	/**
	 * SmoothScroll module.
	 * @module foundation.smooth-scroll
	 */

	var SmoothScroll =
	/*#__PURE__*/
	function (_Plugin) {
	  _inherits(SmoothScroll, _Plugin);

	  function SmoothScroll() {
	    _classCallCheck(this, SmoothScroll);

	    return _possibleConstructorReturn(this, _getPrototypeOf(SmoothScroll).apply(this, arguments));
	  }

	  _createClass(SmoothScroll, [{
	    key: "_setup",

	    /**
	     * Creates a new instance of SmoothScroll.
	     * @class
	     * @name SmoothScroll
	     * @fires SmoothScroll#init
	     * @param {Object} element - jQuery object to add the trigger to.
	     * @param {Object} options - Overrides to the default plugin settings.
	     */
	    value: function _setup(element, options) {
	      this.$element = element;
	      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, SmoothScroll.defaults, this.$element.data(), options);
	      this.className = 'SmoothScroll'; // ie9 back compat

	      this._init();
	    }
	    /**
	     * Initialize the SmoothScroll plugin
	     * @private
	     */

	  }, {
	    key: "_init",
	    value: function _init() {
	      var id = this.$element[0].id || Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__["GetYoDigits"])(6, 'smooth-scroll');
	      this.$element.attr({
	        id: id
	      });

	      this._events();
	    }
	    /**
	     * Initializes events for SmoothScroll.
	     * @private
	     */

	  }, {
	    key: "_events",
	    value: function _events() {
	      this.$element.on('click.zf.smoothScroll', this._handleLinkClick);
	      this.$element.on('click.zf.smoothScroll', 'a[href^="#"]', this._handleLinkClick);
	    }
	    /**
	     * Handle the given event to smoothly scroll to the anchor pointed by the event target.
	     * @param {*} e - event
	     * @function
	     * @private
	     */

	  }, {
	    key: "_handleLinkClick",
	    value: function _handleLinkClick(e) {
	      var _this = this;

	      // Follow the link if it does not point to an anchor.
	      if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget).is('a[href^="#"]')) return;
	      var arrival = e.currentTarget.getAttribute('href');
	      this._inTransition = true;
	      SmoothScroll.scrollToLoc(arrival, this.options, function () {
	        _this._inTransition = false;
	      });
	      e.preventDefault();
	    }
	  }, {
	    key: "_destroy",

	    /**
	     * Destroys the SmoothScroll instance.
	     * @function
	     */
	    value: function _destroy() {
	      this.$element.off('click.zf.smoothScroll', this._handleLinkClick);
	      this.$element.off('click.zf.smoothScroll', 'a[href^="#"]', this._handleLinkClick);
	    }
	  }], [{
	    key: "scrollToLoc",

	    /**
	     * Function to scroll to a given location on the page.
	     * @param {String} loc - A properly formatted jQuery id selector. Example: '#foo'
	     * @param {Object} options - The options to use.
	     * @param {Function} callback - The callback function.
	     * @static
	     * @function
	     */
	    value: function scrollToLoc(loc) {
	      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : SmoothScroll.defaults;
	      var callback = arguments.length > 2 ? arguments[2] : undefined;
	      var $loc = jquery__WEBPACK_IMPORTED_MODULE_0___default()(loc); // Do nothing if target does not exist to prevent errors

	      if (!$loc.length) return false;
	      var scrollPos = Math.round($loc.offset().top - options.threshold / 2 - options.offset);
	      jquery__WEBPACK_IMPORTED_MODULE_0___default()('html, body').stop(true).animate({
	        scrollTop: scrollPos
	      }, options.animationDuration, options.animationEasing, function () {
	        if (typeof callback === 'function') {
	          callback();
	        }
	      });
	    }
	  }]);

	  return SmoothScroll;
	}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_2__["Plugin"]);
	/**
	 * Default settings for plugin.
	 */


	SmoothScroll.defaults = {
	  /**
	   * Amount of time, in ms, the animated scrolling should take between locations.
	   * @option
	   * @type {number}
	   * @default 500
	   */
	  animationDuration: 500,

	  /**
	   * Animation style to use when scrolling between locations. Can be `'swing'` or `'linear'`.
	   * @option
	   * @type {string}
	   * @default 'linear'
	   * @see {@link https://api.jquery.com/animate|Jquery animate}
	   */
	  animationEasing: 'linear',

	  /**
	   * Number of pixels to use as a marker for location changes.
	   * @option
	   * @type {number}
	   * @default 50
	   */
	  threshold: 50,

	  /**
	   * Number of pixels to offset the scroll of the page on item click if using a sticky nav bar.
	   * @option
	   * @type {number}
	   * @default 0
	   */
	  offset: 0
	};


	/***/ }),

	/***/ "./js/foundation.sticky.js":
	/*!*********************************!*\
	  !*** ./js/foundation.sticky.js ***!
	  \*********************************/
	/*! exports provided: Sticky */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {

	"use strict";
	__webpack_require__.r(__webpack_exports__);
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sticky", function() { return Sticky; });
	/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
	/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
	/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.core.utils */ "./js/foundation.core.utils.js");
	/* harmony import */ var _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.util.mediaQuery */ "./js/foundation.util.mediaQuery.js");
	/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.core.plugin */ "./js/foundation.core.plugin.js");
	/* harmony import */ var _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation.util.triggers */ "./js/foundation.util.triggers.js");


	function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

	function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

	function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

	function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

	function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

	function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






	/**
	 * Sticky module.
	 * @module foundation.sticky
	 * @requires foundation.util.triggers
	 * @requires foundation.util.mediaQuery
	 */

	var Sticky =
	/*#__PURE__*/
	function (_Plugin) {
	  _inherits(Sticky, _Plugin);

	  function Sticky() {
	    _classCallCheck(this, Sticky);

	    return _possibleConstructorReturn(this, _getPrototypeOf(Sticky).apply(this, arguments));
	  }

	  _createClass(Sticky, [{
	    key: "_setup",

	    /**
	     * Creates a new instance of a sticky thing.
	     * @class
	     * @name Sticky
	     * @param {jQuery} element - jQuery object to make sticky.
	     * @param {Object} options - options object passed when creating the element programmatically.
	     */
	    value: function _setup(element, options) {
	      this.$element = element;
	      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, Sticky.defaults, this.$element.data(), options);
	      this.className = 'Sticky'; // ie9 back compat
	      // Triggers init is idempotent, just need to make sure it is initialized

	      _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_4__["Triggers"].init(jquery__WEBPACK_IMPORTED_MODULE_0___default.a);

	      this._init();
	    }
	    /**
	     * Initializes the sticky element by adding classes, getting/setting dimensions, breakpoints and attributes
	     * @function
	     * @private
	     */

	  }, {
	    key: "_init",
	    value: function _init() {
	      _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_2__["MediaQuery"]._init();

	      var $parent = this.$element.parent('[data-sticky-container]'),
	          id = this.$element[0].id || Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__["GetYoDigits"])(6, 'sticky'),
	          _this = this;

	      if ($parent.length) {
	        this.$container = $parent;
	      } else {
	        this.wasWrapped = true;
	        this.$element.wrap(this.options.container);
	        this.$container = this.$element.parent();
	      }

	      this.$container.addClass(this.options.containerClass);
	      this.$element.addClass(this.options.stickyClass).attr({
	        'data-resize': id,
	        'data-mutate': id
	      });

	      if (this.options.anchor !== '') {
	        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#' + _this.options.anchor).attr({
	          'data-mutate': id
	        });
	      }

	      this.scrollCount = this.options.checkEvery;
	      this.isStuck = false;
	      this.onLoadListener = Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__["onLoad"])(jquery__WEBPACK_IMPORTED_MODULE_0___default()(window), function () {
	        //We calculate the container height to have correct values for anchor points offset calculation.
	        _this.containerHeight = _this.$element.css("display") == "none" ? 0 : _this.$element[0].getBoundingClientRect().height;

	        _this.$container.css('height', _this.containerHeight);

	        _this.elemHeight = _this.containerHeight;

	        if (_this.options.anchor !== '') {
	          _this.$anchor = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#' + _this.options.anchor);
	        } else {
	          _this._parsePoints();
	        }

	        _this._setSizes(function () {
	          var scroll = window.pageYOffset;

	          _this._calc(false, scroll); //Unstick the element will ensure that proper classes are set.


	          if (!_this.isStuck) {
	            _this._removeSticky(scroll >= _this.topPoint ? false : true);
	          }
	        });

	        _this._events(id.split('-').reverse().join('-'));
	      });
	    }
	    /**
	     * If using multiple elements as anchors, calculates the top and bottom pixel values the sticky thing should stick and unstick on.
	     * @function
	     * @private
	     */

	  }, {
	    key: "_parsePoints",
	    value: function _parsePoints() {
	      var top = this.options.topAnchor == "" ? 1 : this.options.topAnchor,
	          btm = this.options.btmAnchor == "" ? document.documentElement.scrollHeight : this.options.btmAnchor,
	          pts = [top, btm],
	          breaks = {};

	      for (var i = 0, len = pts.length; i < len && pts[i]; i++) {
	        var pt;

	        if (typeof pts[i] === 'number') {
	          pt = pts[i];
	        } else {
	          var place = pts[i].split(':'),
	              anchor = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#".concat(place[0]));
	          pt = anchor.offset().top;

	          if (place[1] && place[1].toLowerCase() === 'bottom') {
	            pt += anchor[0].getBoundingClientRect().height;
	          }
	        }

	        breaks[i] = pt;
	      }

	      this.points = breaks;
	      return;
	    }
	    /**
	     * Adds event handlers for the scrolling element.
	     * @private
	     * @param {String} id - pseudo-random id for unique scroll event listener.
	     */

	  }, {
	    key: "_events",
	    value: function _events(id) {
	      var _this = this,
	          scrollListener = this.scrollListener = "scroll.zf.".concat(id);

	      if (this.isOn) {
	        return;
	      }

	      if (this.canStick) {
	        this.isOn = true;
	        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(scrollListener).on(scrollListener, function (e) {
	          if (_this.scrollCount === 0) {
	            _this.scrollCount = _this.options.checkEvery;

	            _this._setSizes(function () {
	              _this._calc(false, window.pageYOffset);
	            });
	          } else {
	            _this.scrollCount--;

	            _this._calc(false, window.pageYOffset);
	          }
	        });
	      }

	      this.$element.off('resizeme.zf.trigger').on('resizeme.zf.trigger', function (e, el) {
	        _this._eventsHandler(id);
	      });
	      this.$element.on('mutateme.zf.trigger', function (e, el) {
	        _this._eventsHandler(id);
	      });

	      if (this.$anchor) {
	        this.$anchor.on('mutateme.zf.trigger', function (e, el) {
	          _this._eventsHandler(id);
	        });
	      }
	    }
	    /**
	     * Handler for events.
	     * @private
	     * @param {String} id - pseudo-random id for unique scroll event listener.
	     */

	  }, {
	    key: "_eventsHandler",
	    value: function _eventsHandler(id) {
	      var _this = this,
	          scrollListener = this.scrollListener = "scroll.zf.".concat(id);

	      _this._setSizes(function () {
	        _this._calc(false);

	        if (_this.canStick) {
	          if (!_this.isOn) {
	            _this._events(id);
	          }
	        } else if (_this.isOn) {
	          _this._pauseListeners(scrollListener);
	        }
	      });
	    }
	    /**
	     * Removes event handlers for scroll and change events on anchor.
	     * @fires Sticky#pause
	     * @param {String} scrollListener - unique, namespaced scroll listener attached to `window`
	     */

	  }, {
	    key: "_pauseListeners",
	    value: function _pauseListeners(scrollListener) {
	      this.isOn = false;
	      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(scrollListener);
	      /**
	       * Fires when the plugin is paused due to resize event shrinking the view.
	       * @event Sticky#pause
	       * @private
	       */

	      this.$element.trigger('pause.zf.sticky');
	    }
	    /**
	     * Called on every `scroll` event and on `_init`
	     * fires functions based on booleans and cached values
	     * @param {Boolean} checkSizes - true if plugin should recalculate sizes and breakpoints.
	     * @param {Number} scroll - current scroll position passed from scroll event cb function. If not passed, defaults to `window.pageYOffset`.
	     */

	  }, {
	    key: "_calc",
	    value: function _calc(checkSizes, scroll) {
	      if (checkSizes) {
	        this._setSizes();
	      }

	      if (!this.canStick) {
	        if (this.isStuck) {
	          this._removeSticky(true);
	        }

	        return false;
	      }

	      if (!scroll) {
	        scroll = window.pageYOffset;
	      }

	      if (scroll >= this.topPoint) {
	        if (scroll <= this.bottomPoint) {
	          if (!this.isStuck) {
	            this._setSticky();
	          }
	        } else {
	          if (this.isStuck) {
	            this._removeSticky(false);
	          }
	        }
	      } else {
	        if (this.isStuck) {
	          this._removeSticky(true);
	        }
	      }
	    }
	    /**
	     * Causes the $element to become stuck.
	     * Adds `position: fixed;`, and helper classes.
	     * @fires Sticky#stuckto
	     * @function
	     * @private
	     */

	  }, {
	    key: "_setSticky",
	    value: function _setSticky() {
	      var _this = this,
	          stickTo = this.options.stickTo,
	          mrgn = stickTo === 'top' ? 'marginTop' : 'marginBottom',
	          notStuckTo = stickTo === 'top' ? 'bottom' : 'top',
	          css = {};

	      css[mrgn] = "".concat(this.options[mrgn], "em");
	      css[stickTo] = 0;
	      css[notStuckTo] = 'auto';
	      this.isStuck = true;
	      this.$element.removeClass("is-anchored is-at-".concat(notStuckTo)).addClass("is-stuck is-at-".concat(stickTo)).css(css)
	      /**
	       * Fires when the $element has become `position: fixed;`
	       * Namespaced to `top` or `bottom`, e.g. `sticky.zf.stuckto:top`
	       * @event Sticky#stuckto
	       */
	      .trigger("sticky.zf.stuckto:".concat(stickTo));
	      this.$element.on("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", function () {
	        _this._setSizes();
	      });
	    }
	    /**
	     * Causes the $element to become unstuck.
	     * Removes `position: fixed;`, and helper classes.
	     * Adds other helper classes.
	     * @param {Boolean} isTop - tells the function if the $element should anchor to the top or bottom of its $anchor element.
	     * @fires Sticky#unstuckfrom
	     * @private
	     */

	  }, {
	    key: "_removeSticky",
	    value: function _removeSticky(isTop) {
	      var stickTo = this.options.stickTo,
	          stickToTop = stickTo === 'top',
	          css = {},
	          anchorPt = (this.points ? this.points[1] - this.points[0] : this.anchorHeight) - this.elemHeight,
	          mrgn = stickToTop ? 'marginTop' : 'marginBottom',
	          notStuckTo = stickToTop ? 'bottom' : 'top',
	          topOrBottom = isTop ? 'top' : 'bottom';
	      css[mrgn] = 0;
	      css['bottom'] = 'auto';

	      if (isTop) {
	        css['top'] = 0;
	      } else {
	        css['top'] = anchorPt;
	      }

	      this.isStuck = false;
	      this.$element.removeClass("is-stuck is-at-".concat(stickTo)).addClass("is-anchored is-at-".concat(topOrBottom)).css(css)
	      /**
	       * Fires when the $element has become anchored.
	       * Namespaced to `top` or `bottom`, e.g. `sticky.zf.unstuckfrom:bottom`
	       * @event Sticky#unstuckfrom
	       */
	      .trigger("sticky.zf.unstuckfrom:".concat(topOrBottom));
	    }
	    /**
	     * Sets the $element and $container sizes for plugin.
	     * Calls `_setBreakPoints`.
	     * @param {Function} cb - optional callback function to fire on completion of `_setBreakPoints`.
	     * @private
	     */

	  }, {
	    key: "_setSizes",
	    value: function _setSizes(cb) {
	      this.canStick = _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_2__["MediaQuery"].is(this.options.stickyOn);

	      if (!this.canStick) {
	        if (cb && typeof cb === 'function') {
	          cb();
	        }
	      }

	      var _this = this,
	          newElemWidth = this.$container[0].getBoundingClientRect().width,
	          comp = window.getComputedStyle(this.$container[0]),
	          pdngl = parseInt(comp['padding-left'], 10),
	          pdngr = parseInt(comp['padding-right'], 10);

	      if (this.$anchor && this.$anchor.length) {
	        this.anchorHeight = this.$anchor[0].getBoundingClientRect().height;
	      } else {
	        this._parsePoints();
	      }

	      this.$element.css({
	        'max-width': "".concat(newElemWidth - pdngl - pdngr, "px")
	      });
	      var newContainerHeight = this.$element[0].getBoundingClientRect().height || this.containerHeight;

	      if (this.$element.css("display") == "none") {
	        newContainerHeight = 0;
	      }

	      this.containerHeight = newContainerHeight;
	      this.$container.css({
	        height: newContainerHeight
	      });
	      this.elemHeight = newContainerHeight;

	      if (!this.isStuck) {
	        if (this.$element.hasClass('is-at-bottom')) {
	          var anchorPt = (this.points ? this.points[1] - this.$container.offset().top : this.anchorHeight) - this.elemHeight;
	          this.$element.css('top', anchorPt);
	        }
	      }

	      this._setBreakPoints(newContainerHeight, function () {
	        if (cb && typeof cb === 'function') {
	          cb();
	        }
	      });
	    }
	    /**
	     * Sets the upper and lower breakpoints for the element to become sticky/unsticky.
	     * @param {Number} elemHeight - px value for sticky.$element height, calculated by `_setSizes`.
	     * @param {Function} cb - optional callback function to be called on completion.
	     * @private
	     */

	  }, {
	    key: "_setBreakPoints",
	    value: function _setBreakPoints(elemHeight, cb) {
	      if (!this.canStick) {
	        if (cb && typeof cb === 'function') {
	          cb();
	        } else {
	          return false;
	        }
	      }

	      var mTop = emCalc(this.options.marginTop),
	          mBtm = emCalc(this.options.marginBottom),
	          topPoint = this.points ? this.points[0] : this.$anchor.offset().top,
	          bottomPoint = this.points ? this.points[1] : topPoint + this.anchorHeight,
	          // topPoint = this.$anchor.offset().top || this.points[0],
	      // bottomPoint = topPoint + this.anchorHeight || this.points[1],
	      winHeight = window.innerHeight;

	      if (this.options.stickTo === 'top') {
	        topPoint -= mTop;
	        bottomPoint -= elemHeight + mTop;
	      } else if (this.options.stickTo === 'bottom') {
	        topPoint -= winHeight - (elemHeight + mBtm);
	        bottomPoint -= winHeight - mBtm;
	      } else {//this would be the stickTo: both option... tricky
	      }

	      this.topPoint = topPoint;
	      this.bottomPoint = bottomPoint;

	      if (cb && typeof cb === 'function') {
	        cb();
	      }
	    }
	    /**
	     * Destroys the current sticky element.
	     * Resets the element to the top position first.
	     * Removes event listeners, JS-added css properties and classes, and unwraps the $element if the JS added the $container.
	     * @function
	     */

	  }, {
	    key: "_destroy",
	    value: function _destroy() {
	      this._removeSticky(true);

	      this.$element.removeClass("".concat(this.options.stickyClass, " is-anchored is-at-top")).css({
	        height: '',
	        top: '',
	        bottom: '',
	        'max-width': ''
	      }).off('resizeme.zf.trigger').off('mutateme.zf.trigger');

	      if (this.$anchor && this.$anchor.length) {
	        this.$anchor.off('change.zf.sticky');
	      }

	      if (this.scrollListener) jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(this.scrollListener);
	      if (this.onLoadListener) jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(this.onLoadListener);

	      if (this.wasWrapped) {
	        this.$element.unwrap();
	      } else {
	        this.$container.removeClass(this.options.containerClass).css({
	          height: ''
	        });
	      }
	    }
	  }]);

	  return Sticky;
	}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_3__["Plugin"]);

	Sticky.defaults = {
	  /**
	   * Customizable container template. Add your own classes for styling and sizing.
	   * @option
	   * @type {string}
	   * @default '&lt;div data-sticky-container&gt;&lt;/div&gt;'
	   */
	  container: '<div data-sticky-container></div>',

	  /**
	   * Location in the view the element sticks to. Can be `'top'` or `'bottom'`.
	   * @option
	   * @type {string}
	   * @default 'top'
	   */
	  stickTo: 'top',

	  /**
	   * If anchored to a single element, the id of that element.
	   * @option
	   * @type {string}
	   * @default ''
	   */
	  anchor: '',

	  /**
	   * If using more than one element as anchor points, the id of the top anchor.
	   * @option
	   * @type {string}
	   * @default ''
	   */
	  topAnchor: '',

	  /**
	   * If using more than one element as anchor points, the id of the bottom anchor.
	   * @option
	   * @type {string}
	   * @default ''
	   */
	  btmAnchor: '',

	  /**
	   * Margin, in `em`'s to apply to the top of the element when it becomes sticky.
	   * @option
	   * @type {number}
	   * @default 1
	   */
	  marginTop: 1,

	  /**
	   * Margin, in `em`'s to apply to the bottom of the element when it becomes sticky.
	   * @option
	   * @type {number}
	   * @default 1
	   */
	  marginBottom: 1,

	  /**
	   * Breakpoint string that is the minimum screen size an element should become sticky.
	   * @option
	   * @type {string}
	   * @default 'medium'
	   */
	  stickyOn: 'medium',

	  /**
	   * Class applied to sticky element, and removed on destruction. Foundation defaults to `sticky`.
	   * @option
	   * @type {string}
	   * @default 'sticky'
	   */
	  stickyClass: 'sticky',

	  /**
	   * Class applied to sticky container. Foundation defaults to `sticky-container`.
	   * @option
	   * @type {string}
	   * @default 'sticky-container'
	   */
	  containerClass: 'sticky-container',

	  /**
	   * Number of scroll events between the plugin's recalculating sticky points. Setting it to `0` will cause it to recalc every scroll event, setting it to `-1` will prevent recalc on scroll.
	   * @option
	   * @type {number}
	   * @default -1
	   */
	  checkEvery: -1
	};
	/**
	 * Helper function to calculate em values
	 * @param Number {em} - number of em's to calculate into pixels
	 */

	function emCalc(em) {
	  return parseInt(window.getComputedStyle(document.body, null).fontSize, 10) * em;
	}



	/***/ }),

	/***/ "./js/foundation.tabs.js":
	/*!*******************************!*\
	  !*** ./js/foundation.tabs.js ***!
	  \*******************************/
	/*! exports provided: Tabs */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {

	"use strict";
	__webpack_require__.r(__webpack_exports__);
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tabs", function() { return Tabs; });
	/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
	/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
	/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.core.utils */ "./js/foundation.core.utils.js");
	/* harmony import */ var _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.util.keyboard */ "./js/foundation.util.keyboard.js");
	/* harmony import */ var _foundation_util_imageLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.util.imageLoader */ "./js/foundation.util.imageLoader.js");
	/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation.core.plugin */ "./js/foundation.core.plugin.js");


	function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

	function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

	function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

	function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

	function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

	function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






	/**
	 * Tabs module.
	 * @module foundation.tabs
	 * @requires foundation.util.keyboard
	 * @requires foundation.util.imageLoader if tabs contain images
	 */

	var Tabs =
	/*#__PURE__*/
	function (_Plugin) {
	  _inherits(Tabs, _Plugin);

	  function Tabs() {
	    _classCallCheck(this, Tabs);

	    return _possibleConstructorReturn(this, _getPrototypeOf(Tabs).apply(this, arguments));
	  }

	  _createClass(Tabs, [{
	    key: "_setup",

	    /**
	     * Creates a new instance of tabs.
	     * @class
	     * @name Tabs
	     * @fires Tabs#init
	     * @param {jQuery} element - jQuery object to make into tabs.
	     * @param {Object} options - Overrides to the default plugin settings.
	     */
	    value: function _setup(element, options) {
	      this.$element = element;
	      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, Tabs.defaults, this.$element.data(), options);
	      this.className = 'Tabs'; // ie9 back compat

	      this._init();

	      _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2__["Keyboard"].register('Tabs', {
	        'ENTER': 'open',
	        'SPACE': 'open',
	        'ARROW_RIGHT': 'next',
	        'ARROW_UP': 'previous',
	        'ARROW_DOWN': 'next',
	        'ARROW_LEFT': 'previous' // 'TAB': 'next',
	        // 'SHIFT_TAB': 'previous'

	      });
	    }
	    /**
	     * Initializes the tabs by showing and focusing (if autoFocus=true) the preset active tab.
	     * @private
	     */

	  }, {
	    key: "_init",
	    value: function _init() {
	      var _this2 = this;

	      var _this = this;

	      this._isInitializing = true;
	      this.$element.attr({
	        'role': 'tablist'
	      });
	      this.$tabTitles = this.$element.find(".".concat(this.options.linkClass));
	      this.$tabContent = jquery__WEBPACK_IMPORTED_MODULE_0___default()("[data-tabs-content=\"".concat(this.$element[0].id, "\"]"));
	      this.$tabTitles.each(function () {
	        var $elem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),
	            $link = $elem.find('a'),
	            isActive = $elem.hasClass("".concat(_this.options.linkActiveClass)),
	            hash = $link.attr('data-tabs-target') || $link[0].hash.slice(1),
	            linkId = $link[0].id ? $link[0].id : "".concat(hash, "-label"),
	            $tabContent = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#".concat(hash));
	        $elem.attr({
	          'role': 'presentation'
	        });
	        $link.attr({
	          'role': 'tab',
	          'aria-controls': hash,
	          'aria-selected': isActive,
	          'id': linkId,
	          'tabindex': isActive ? '0' : '-1'
	        });
	        $tabContent.attr({
	          'role': 'tabpanel',
	          'aria-labelledby': linkId
	        }); // Save up the initial hash to return to it later when going back in history

	        if (isActive) {
	          _this._initialAnchor = "#".concat(hash);
	        }

	        if (!isActive) {
	          $tabContent.attr('aria-hidden', 'true');
	        }

	        if (isActive && _this.options.autoFocus) {
	          _this.onLoadListener = Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__["onLoad"])(jquery__WEBPACK_IMPORTED_MODULE_0___default()(window), function () {
	            jquery__WEBPACK_IMPORTED_MODULE_0___default()('html, body').animate({
	              scrollTop: $elem.offset().top
	            }, _this.options.deepLinkSmudgeDelay, function () {
	              $link.focus();
	            });
	          });
	        }
	      });

	      if (this.options.matchHeight) {
	        var $images = this.$tabContent.find('img');

	        if ($images.length) {
	          Object(_foundation_util_imageLoader__WEBPACK_IMPORTED_MODULE_3__["onImagesLoaded"])($images, this._setHeight.bind(this));
	        } else {
	          this._setHeight();
	        }
	      } // Current context-bound function to open tabs on page load or history hashchange


	      this._checkDeepLink = function () {
	        var anchor = window.location.hash;

	        if (!anchor.length) {
	          // If we are still initializing and there is no anchor, then there is nothing to do
	          if (_this2._isInitializing) return; // Otherwise, move to the initial anchor

	          if (_this2._initialAnchor) anchor = _this2._initialAnchor;
	        }

	        var $anchor = anchor && jquery__WEBPACK_IMPORTED_MODULE_0___default()(anchor);

	        var $link = anchor && _this2.$element.find('[href$="' + anchor + '"]'); // Whether the anchor element that has been found is part of this element


	        var isOwnAnchor = !!($anchor.length && $link.length); // If there is an anchor for the hash, select it

	        if ($anchor && $anchor.length && $link && $link.length) {
	          _this2.selectTab($anchor, true);
	        } // Otherwise, collapse everything
	        else {
	            _this2._collapse();
	          }

	        if (isOwnAnchor) {
	          // Roll up a little to show the titles
	          if (_this2.options.deepLinkSmudge) {
	            var offset = _this2.$element.offset();

	            jquery__WEBPACK_IMPORTED_MODULE_0___default()('html, body').animate({
	              scrollTop: offset.top
	            }, _this2.options.deepLinkSmudgeDelay);
	          }
	          /**
	           * Fires when the plugin has deeplinked at pageload
	           * @event Tabs#deeplink
	           */


	          _this2.$element.trigger('deeplink.zf.tabs', [$link, $anchor]);
	        }
	      }; //use browser to open a tab, if it exists in this tabset


	      if (this.options.deepLink) {
	        this._checkDeepLink();
	      }

	      this._events();

	      this._isInitializing = false;
	    }
	    /**
	     * Adds event handlers for items within the tabs.
	     * @private
	     */

	  }, {
	    key: "_events",
	    value: function _events() {
	      this._addKeyHandler();

	      this._addClickHandler();

	      this._setHeightMqHandler = null;

	      if (this.options.matchHeight) {
	        this._setHeightMqHandler = this._setHeight.bind(this);
	        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('changed.zf.mediaquery', this._setHeightMqHandler);
	      }

	      if (this.options.deepLink) {
	        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('hashchange', this._checkDeepLink);
	      }
	    }
	    /**
	     * Adds click handlers for items within the tabs.
	     * @private
	     */

	  }, {
	    key: "_addClickHandler",
	    value: function _addClickHandler() {
	      var _this = this;

	      this.$element.off('click.zf.tabs').on('click.zf.tabs', ".".concat(this.options.linkClass), function (e) {
	        e.preventDefault();
	        e.stopPropagation();

	        _this._handleTabChange(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));
	      });
	    }
	    /**
	     * Adds keyboard event handlers for items within the tabs.
	     * @private
	     */

	  }, {
	    key: "_addKeyHandler",
	    value: function _addKeyHandler() {
	      var _this = this;

	      this.$tabTitles.off('keydown.zf.tabs').on('keydown.zf.tabs', function (e) {
	        if (e.which === 9) return;
	        var $element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),
	            $elements = $element.parent('ul').children('li'),
	            $prevElement,
	            $nextElement;
	        $elements.each(function (i) {
	          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).is($element)) {
	            if (_this.options.wrapOnKeys) {
	              $prevElement = i === 0 ? $elements.last() : $elements.eq(i - 1);
	              $nextElement = i === $elements.length - 1 ? $elements.first() : $elements.eq(i + 1);
	            } else {
	              $prevElement = $elements.eq(Math.max(0, i - 1));
	              $nextElement = $elements.eq(Math.min(i + 1, $elements.length - 1));
	            }

	            return;
	          }
	        }); // handle keyboard event with keyboard util

	        _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2__["Keyboard"].handleKey(e, 'Tabs', {
	          open: function open() {
	            $element.find('[role="tab"]').focus();

	            _this._handleTabChange($element);
	          },
	          previous: function previous() {
	            $prevElement.find('[role="tab"]').focus();

	            _this._handleTabChange($prevElement);
	          },
	          next: function next() {
	            $nextElement.find('[role="tab"]').focus();

	            _this._handleTabChange($nextElement);
	          },
	          handled: function handled() {
	            e.stopPropagation();
	            e.preventDefault();
	          }
	        });
	      });
	    }
	    /**
	     * Opens the tab `$targetContent` defined by `$target`. Collapses active tab.
	     * @param {jQuery} $target - Tab to open.
	     * @param {boolean} historyHandled - browser has already handled a history update
	     * @fires Tabs#change
	     * @function
	     */

	  }, {
	    key: "_handleTabChange",
	    value: function _handleTabChange($target, historyHandled) {
	      // With `activeCollapse`, if the target is the active Tab, collapse it.
	      if ($target.hasClass("".concat(this.options.linkActiveClass))) {
	        if (this.options.activeCollapse) {
	          this._collapse();
	        }

	        return;
	      }

	      var $oldTab = this.$element.find(".".concat(this.options.linkClass, ".").concat(this.options.linkActiveClass)),
	          $tabLink = $target.find('[role="tab"]'),
	          target = $tabLink.attr('data-tabs-target'),
	          anchor = target && target.length ? "#".concat(target) : $tabLink[0].hash,
	          $targetContent = this.$tabContent.find(anchor); //close old tab

	      this._collapseTab($oldTab); //open new tab


	      this._openTab($target); //either replace or update browser history


	      if (this.options.deepLink && !historyHandled) {
	        if (this.options.updateHistory) {
	          history.pushState({}, '', anchor);
	        } else {
	          history.replaceState({}, '', anchor);
	        }
	      }
	      /**
	       * Fires when the plugin has successfully changed tabs.
	       * @event Tabs#change
	       */


	      this.$element.trigger('change.zf.tabs', [$target, $targetContent]); //fire to children a mutation event

	      $targetContent.find("[data-mutate]").trigger("mutateme.zf.trigger");
	    }
	    /**
	     * Opens the tab `$targetContent` defined by `$target`.
	     * @param {jQuery} $target - Tab to open.
	     * @function
	     */

	  }, {
	    key: "_openTab",
	    value: function _openTab($target) {
	      var $tabLink = $target.find('[role="tab"]'),
	          hash = $tabLink.attr('data-tabs-target') || $tabLink[0].hash.slice(1),
	          $targetContent = this.$tabContent.find("#".concat(hash));
	      $target.addClass("".concat(this.options.linkActiveClass));
	      $tabLink.attr({
	        'aria-selected': 'true',
	        'tabindex': '0'
	      });
	      $targetContent.addClass("".concat(this.options.panelActiveClass)).removeAttr('aria-hidden');
	    }
	    /**
	     * Collapses `$targetContent` defined by `$target`.
	     * @param {jQuery} $target - Tab to collapse.
	     * @function
	     */

	  }, {
	    key: "_collapseTab",
	    value: function _collapseTab($target) {
	      var $target_anchor = $target.removeClass("".concat(this.options.linkActiveClass)).find('[role="tab"]').attr({
	        'aria-selected': 'false',
	        'tabindex': -1
	      });
	      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#".concat($target_anchor.attr('aria-controls'))).removeClass("".concat(this.options.panelActiveClass)).attr({
	        'aria-hidden': 'true'
	      });
	    }
	    /**
	     * Collapses the active Tab.
	     * @fires Tabs#collapse
	     * @function
	     */

	  }, {
	    key: "_collapse",
	    value: function _collapse() {
	      var $activeTab = this.$element.find(".".concat(this.options.linkClass, ".").concat(this.options.linkActiveClass));

	      if ($activeTab.length) {
	        this._collapseTab($activeTab);
	        /**
	        * Fires when the plugin has successfully collapsed tabs.
	        * @event Tabs#collapse
	        */


	        this.$element.trigger('collapse.zf.tabs', [$activeTab]);
	      }
	    }
	    /**
	     * Public method for selecting a content pane to display.
	     * @param {jQuery | String} elem - jQuery object or string of the id of the pane to display.
	     * @param {boolean} historyHandled - browser has already handled a history update
	     * @function
	     */

	  }, {
	    key: "selectTab",
	    value: function selectTab(elem, historyHandled) {
	      var idStr;

	      if (_typeof(elem) === 'object') {
	        idStr = elem[0].id;
	      } else {
	        idStr = elem;
	      }

	      if (idStr.indexOf('#') < 0) {
	        idStr = "#".concat(idStr);
	      }

	      var $target = this.$tabTitles.has("[href$=\"".concat(idStr, "\"]"));

	      this._handleTabChange($target, historyHandled);
	    }
	  }, {
	    key: "_setHeight",

	    /**
	     * Sets the height of each panel to the height of the tallest panel.
	     * If enabled in options, gets called on media query change.
	     * If loading content via external source, can be called directly or with _reflow.
	     * If enabled with `data-match-height="true"`, tabs sets to equal height
	     * @function
	     * @private
	     */
	    value: function _setHeight() {
	      var max = 0,
	          _this = this; // Lock down the `this` value for the root tabs object


	      this.$tabContent.find(".".concat(this.options.panelClass)).css('height', '').each(function () {
	        var panel = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),
	            isActive = panel.hasClass("".concat(_this.options.panelActiveClass)); // get the options from the parent instead of trying to get them from the child

	        if (!isActive) {
	          panel.css({
	            'visibility': 'hidden',
	            'display': 'block'
	          });
	        }

	        var temp = this.getBoundingClientRect().height;

	        if (!isActive) {
	          panel.css({
	            'visibility': '',
	            'display': ''
	          });
	        }

	        max = temp > max ? temp : max;
	      }).css('height', "".concat(max, "px"));
	    }
	    /**
	     * Destroys an instance of tabs.
	     * @fires Tabs#destroyed
	     */

	  }, {
	    key: "_destroy",
	    value: function _destroy() {
	      this.$element.find(".".concat(this.options.linkClass)).off('.zf.tabs').hide().end().find(".".concat(this.options.panelClass)).hide();

	      if (this.options.matchHeight) {
	        if (this._setHeightMqHandler != null) {
	          jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off('changed.zf.mediaquery', this._setHeightMqHandler);
	        }
	      }

	      if (this.options.deepLink) {
	        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off('hashchange', this._checkDeepLink);
	      }

	      if (this.onLoadListener) {
	        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(this.onLoadListener);
	      }
	    }
	  }]);

	  return Tabs;
	}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_4__["Plugin"]);

	Tabs.defaults = {
	  /**
	   * Link the location hash to the active pane.
	   * Set the location hash when the active pane changes, and open the corresponding pane when the location changes.
	   * @option
	   * @type {boolean}
	   * @default false
	   */
	  deepLink: false,

	  /**
	   * If `deepLink` is enabled, adjust the deep link scroll to make sure the top of the tab panel is visible
	   * @option
	   * @type {boolean}
	   * @default false
	   */
	  deepLinkSmudge: false,

	  /**
	   * If `deepLinkSmudge` is enabled, animation time (ms) for the deep link adjustment
	   * @option
	   * @type {number}
	   * @default 300
	   */
	  deepLinkSmudgeDelay: 300,

	  /**
	   * If `deepLink` is enabled, update the browser history with the open tab
	   * @option
	   * @type {boolean}
	   * @default false
	   */
	  updateHistory: false,

	  /**
	   * Allows the window to scroll to content of active pane on load.
	   * Not recommended if more than one tab panel per page.
	   * @option
	   * @type {boolean}
	   * @default false
	   */
	  autoFocus: false,

	  /**
	   * Allows keyboard input to 'wrap' around the tab links.
	   * @option
	   * @type {boolean}
	   * @default true
	   */
	  wrapOnKeys: true,

	  /**
	   * Allows the tab content panes to match heights if set to true.
	   * @option
	   * @type {boolean}
	   * @default false
	   */
	  matchHeight: false,

	  /**
	   * Allows active tabs to collapse when clicked.
	   * @option
	   * @type {boolean}
	   * @default false
	   */
	  activeCollapse: false,

	  /**
	   * Class applied to `li`'s in tab link list.
	   * @option
	   * @type {string}
	   * @default 'tabs-title'
	   */
	  linkClass: 'tabs-title',

	  /**
	   * Class applied to the active `li` in tab link list.
	   * @option
	   * @type {string}
	   * @default 'is-active'
	   */
	  linkActiveClass: 'is-active',

	  /**
	   * Class applied to the content containers.
	   * @option
	   * @type {string}
	   * @default 'tabs-panel'
	   */
	  panelClass: 'tabs-panel',

	  /**
	   * Class applied to the active content container.
	   * @option
	   * @type {string}
	   * @default 'is-active'
	   */
	  panelActiveClass: 'is-active'
	};


	/***/ }),

	/***/ "./js/foundation.toggler.js":
	/*!**********************************!*\
	  !*** ./js/foundation.toggler.js ***!
	  \**********************************/
	/*! exports provided: Toggler */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {

	"use strict";
	__webpack_require__.r(__webpack_exports__);
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Toggler", function() { return Toggler; });
	/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
	/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
	/* harmony import */ var _foundation_util_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.util.motion */ "./js/foundation.util.motion.js");
	/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.core.plugin */ "./js/foundation.core.plugin.js");
	/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.core.utils */ "./js/foundation.core.utils.js");
	/* harmony import */ var _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation.util.triggers */ "./js/foundation.util.triggers.js");


	function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

	function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

	function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

	function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

	function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

	function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






	/**
	 * Toggler module.
	 * @module foundation.toggler
	 * @requires foundation.util.motion
	 * @requires foundation.util.triggers
	 */

	var Toggler =
	/*#__PURE__*/
	function (_Plugin) {
	  _inherits(Toggler, _Plugin);

	  function Toggler() {
	    _classCallCheck(this, Toggler);

	    return _possibleConstructorReturn(this, _getPrototypeOf(Toggler).apply(this, arguments));
	  }

	  _createClass(Toggler, [{
	    key: "_setup",

	    /**
	     * Creates a new instance of Toggler.
	     * @class
	     * @name Toggler
	     * @fires Toggler#init
	     * @param {Object} element - jQuery object to add the trigger to.
	     * @param {Object} options - Overrides to the default plugin settings.
	     */
	    value: function _setup(element, options) {
	      this.$element = element;
	      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, Toggler.defaults, element.data(), options);
	      this.className = '';
	      this.className = 'Toggler'; // ie9 back compat
	      // Triggers init is idempotent, just need to make sure it is initialized

	      _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_4__["Triggers"].init(jquery__WEBPACK_IMPORTED_MODULE_0___default.a);

	      this._init();

	      this._events();
	    }
	    /**
	     * Initializes the Toggler plugin by parsing the toggle class from data-toggler, or animation classes from data-animate.
	     * @function
	     * @private
	     */

	  }, {
	    key: "_init",
	    value: function _init() {
	      var input; // Parse animation classes if they were set

	      if (this.options.animate) {
	        input = this.options.animate.split(' ');
	        this.animationIn = input[0];
	        this.animationOut = input[1] || null;
	      } // Otherwise, parse toggle class
	      else {
	          input = this.$element.data('toggler'); // Allow for a . at the beginning of the string

	          this.className = input[0] === '.' ? input.slice(1) : input;
	        } // Add ARIA attributes to triggers:


	      var id = this.$element[0].id,
	          $triggers = jquery__WEBPACK_IMPORTED_MODULE_0___default()("[data-open~=\"".concat(id, "\"], [data-close~=\"").concat(id, "\"], [data-toggle~=\"").concat(id, "\"]")); // - aria-expanded: according to the element visibility.

	      $triggers.attr('aria-expanded', !this.$element.is(':hidden')); // - aria-controls: adding the element id to it if not already in it.

	      $triggers.each(function (index, trigger) {
	        var $trigger = jquery__WEBPACK_IMPORTED_MODULE_0___default()(trigger);
	        var controls = $trigger.attr('aria-controls') || '';
	        var containsId = new RegExp("\\b".concat(Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__["RegExpEscape"])(id), "\\b")).test(controls);
	        if (!containsId) $trigger.attr('aria-controls', controls ? "".concat(controls, " ").concat(id) : id);
	      });
	    }
	    /**
	     * Initializes events for the toggle trigger.
	     * @function
	     * @private
	     */

	  }, {
	    key: "_events",
	    value: function _events() {
	      this.$element.off('toggle.zf.trigger').on('toggle.zf.trigger', this.toggle.bind(this));
	    }
	    /**
	     * Toggles the target class on the target element. An event is fired from the original trigger depending on if the resultant state was "on" or "off".
	     * @function
	     * @fires Toggler#on
	     * @fires Toggler#off
	     */

	  }, {
	    key: "toggle",
	    value: function toggle() {
	      this[this.options.animate ? '_toggleAnimate' : '_toggleClass']();
	    }
	  }, {
	    key: "_toggleClass",
	    value: function _toggleClass() {
	      this.$element.toggleClass(this.className);
	      var isOn = this.$element.hasClass(this.className);

	      if (isOn) {
	        /**
	         * Fires if the target element has the class after a toggle.
	         * @event Toggler#on
	         */
	        this.$element.trigger('on.zf.toggler');
	      } else {
	        /**
	         * Fires if the target element does not have the class after a toggle.
	         * @event Toggler#off
	         */
	        this.$element.trigger('off.zf.toggler');
	      }

	      this._updateARIA(isOn);

	      this.$element.find('[data-mutate]').trigger('mutateme.zf.trigger');
	    }
	  }, {
	    key: "_toggleAnimate",
	    value: function _toggleAnimate() {
	      var _this = this;

	      if (this.$element.is(':hidden')) {
	        _foundation_util_motion__WEBPACK_IMPORTED_MODULE_1__["Motion"].animateIn(this.$element, this.animationIn, function () {
	          _this._updateARIA(true);

	          this.trigger('on.zf.toggler');
	          this.find('[data-mutate]').trigger('mutateme.zf.trigger');
	        });
	      } else {
	        _foundation_util_motion__WEBPACK_IMPORTED_MODULE_1__["Motion"].animateOut(this.$element, this.animationOut, function () {
	          _this._updateARIA(false);

	          this.trigger('off.zf.toggler');
	          this.find('[data-mutate]').trigger('mutateme.zf.trigger');
	        });
	      }
	    }
	  }, {
	    key: "_updateARIA",
	    value: function _updateARIA(isOn) {
	      var id = this.$element[0].id;
	      jquery__WEBPACK_IMPORTED_MODULE_0___default()("[data-open=\"".concat(id, "\"], [data-close=\"").concat(id, "\"], [data-toggle=\"").concat(id, "\"]")).attr({
	        'aria-expanded': isOn ? true : false
	      });
	    }
	    /**
	     * Destroys the instance of Toggler on the element.
	     * @function
	     */

	  }, {
	    key: "_destroy",
	    value: function _destroy() {
	      this.$element.off('.zf.toggler');
	    }
	  }]);

	  return Toggler;
	}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_2__["Plugin"]);

	Toggler.defaults = {
	  /**
	   * Tells the plugin if the element should animated when toggled.
	   * @option
	   * @type {boolean}
	   * @default false
	   */
	  animate: false
	};


	/***/ }),

	/***/ "./js/foundation.tooltip.js":
	/*!**********************************!*\
	  !*** ./js/foundation.tooltip.js ***!
	  \**********************************/
	/*! exports provided: Tooltip */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {

	"use strict";
	__webpack_require__.r(__webpack_exports__);
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tooltip", function() { return Tooltip; });
	/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
	/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
	/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.core.utils */ "./js/foundation.core.utils.js");
	/* harmony import */ var _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.util.mediaQuery */ "./js/foundation.util.mediaQuery.js");
	/* harmony import */ var _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.util.triggers */ "./js/foundation.util.triggers.js");
	/* harmony import */ var _foundation_positionable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation.positionable */ "./js/foundation.positionable.js");


	function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

	function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

	function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

	function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

	function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

	function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

	function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

	function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






	/**
	 * Tooltip module.
	 * @module foundation.tooltip
	 * @requires foundation.util.box
	 * @requires foundation.util.mediaQuery
	 * @requires foundation.util.triggers
	 */

	var Tooltip =
	/*#__PURE__*/
	function (_Positionable) {
	  _inherits(Tooltip, _Positionable);

	  function Tooltip() {
	    _classCallCheck(this, Tooltip);

	    return _possibleConstructorReturn(this, _getPrototypeOf(Tooltip).apply(this, arguments));
	  }

	  _createClass(Tooltip, [{
	    key: "_setup",

	    /**
	     * Creates a new instance of a Tooltip.
	     * @class
	     * @name Tooltip
	     * @fires Tooltip#init
	     * @param {jQuery} element - jQuery object to attach a tooltip to.
	     * @param {Object} options - object to extend the default configuration.
	     */
	    value: function _setup(element, options) {
	      this.$element = element;
	      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, Tooltip.defaults, this.$element.data(), options);
	      this.className = 'Tooltip'; // ie9 back compat

	      this.isActive = false;
	      this.isClick = false; // Triggers init is idempotent, just need to make sure it is initialized

	      _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_3__["Triggers"].init(jquery__WEBPACK_IMPORTED_MODULE_0___default.a);

	      this._init();
	    }
	    /**
	     * Initializes the tooltip by setting the creating the tip element, adding it's text, setting private variables and setting attributes on the anchor.
	     * @private
	     */

	  }, {
	    key: "_init",
	    value: function _init() {
	      _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_2__["MediaQuery"]._init();

	      var elemId = this.$element.attr('aria-describedby') || Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__["GetYoDigits"])(6, 'tooltip');
	      this.options.tipText = this.options.tipText || this.$element.attr('title');
	      this.template = this.options.template ? jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.options.template) : this._buildTemplate(elemId);

	      if (this.options.allowHtml) {
	        this.template.appendTo(document.body).html(this.options.tipText).hide();
	      } else {
	        this.template.appendTo(document.body).text(this.options.tipText).hide();
	      }

	      this.$element.attr({
	        'title': '',
	        'aria-describedby': elemId,
	        'data-yeti-box': elemId,
	        'data-toggle': elemId,
	        'data-resize': elemId
	      }).addClass(this.options.triggerClass);

	      _get(_getPrototypeOf(Tooltip.prototype), "_init", this).call(this);

	      this._events();
	    }
	  }, {
	    key: "_getDefaultPosition",
	    value: function _getDefaultPosition() {
	      // handle legacy classnames
	      var position = this.$element[0].className.match(/\b(top|left|right|bottom)\b/g);
	      return position ? position[0] : 'top';
	    }
	  }, {
	    key: "_getDefaultAlignment",
	    value: function _getDefaultAlignment() {
	      return 'center';
	    }
	  }, {
	    key: "_getHOffset",
	    value: function _getHOffset() {
	      if (this.position === 'left' || this.position === 'right') {
	        return this.options.hOffset + this.options.tooltipWidth;
	      } else {
	        return this.options.hOffset;
	      }
	    }
	  }, {
	    key: "_getVOffset",
	    value: function _getVOffset() {
	      if (this.position === 'top' || this.position === 'bottom') {
	        return this.options.vOffset + this.options.tooltipHeight;
	      } else {
	        return this.options.vOffset;
	      }
	    }
	    /**
	     * builds the tooltip element, adds attributes, and returns the template.
	     * @private
	     */

	  }, {
	    key: "_buildTemplate",
	    value: function _buildTemplate(id) {
	      var templateClasses = "".concat(this.options.tooltipClass, " ").concat(this.options.templateClasses).trim();
	      var $template = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div></div>').addClass(templateClasses).attr({
	        'role': 'tooltip',
	        'aria-hidden': true,
	        'data-is-active': false,
	        'data-is-focus': false,
	        'id': id
	      });
	      return $template;
	    }
	    /**
	     * sets the position class of an element and recursively calls itself until there are no more possible positions to attempt, or the tooltip element is no longer colliding.
	     * if the tooltip is larger than the screen width, default to full width - any user selected margin
	     * @private
	     */

	  }, {
	    key: "_setPosition",
	    value: function _setPosition() {
	      _get(_getPrototypeOf(Tooltip.prototype), "_setPosition", this).call(this, this.$element, this.template);
	    }
	    /**
	     * reveals the tooltip, and fires an event to close any other open tooltips on the page
	     * @fires Tooltip#closeme
	     * @fires Tooltip#show
	     * @function
	     */

	  }, {
	    key: "show",
	    value: function show() {
	      if (this.options.showOn !== 'all' && !_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_2__["MediaQuery"].is(this.options.showOn)) {
	        // console.error('The screen is too small to display this tooltip');
	        return false;
	      }

	      var _this = this;

	      this.template.css('visibility', 'hidden').show();

	      this._setPosition();

	      this.template.removeClass('top bottom left right').addClass(this.position);
	      this.template.removeClass('align-top align-bottom align-left align-right align-center').addClass('align-' + this.alignment);
	      /**
	       * Fires to close all other open tooltips on the page
	       * @event Closeme#tooltip
	       */

	      this.$element.trigger('closeme.zf.tooltip', this.template.attr('id'));
	      this.template.attr({
	        'data-is-active': true,
	        'aria-hidden': false
	      });
	      _this.isActive = true; // console.log(this.template);

	      this.template.stop().hide().css('visibility', '').fadeIn(this.options.fadeInDuration, function () {//maybe do stuff?
	      });
	      /**
	       * Fires when the tooltip is shown
	       * @event Tooltip#show
	       */

	      this.$element.trigger('show.zf.tooltip');
	    }
	    /**
	     * Hides the current tooltip, and resets the positioning class if it was changed due to collision
	     * @fires Tooltip#hide
	     * @function
	     */

	  }, {
	    key: "hide",
	    value: function hide() {
	      // console.log('hiding', this.$element.data('yeti-box'));
	      var _this = this;

	      this.template.stop().attr({
	        'aria-hidden': true,
	        'data-is-active': false
	      }).fadeOut(this.options.fadeOutDuration, function () {
	        _this.isActive = false;
	        _this.isClick = false;
	      });
	      /**
	       * fires when the tooltip is hidden
	       * @event Tooltip#hide
	       */

	      this.$element.trigger('hide.zf.tooltip');
	    }
	    /**
	     * adds event listeners for the tooltip and its anchor
	     * TODO combine some of the listeners like focus and mouseenter, etc.
	     * @private
	     */

	  }, {
	    key: "_events",
	    value: function _events() {
	      var _this = this;

	      var $template = this.template;
	      var isFocus = false;

	      if (!this.options.disableHover) {
	        this.$element.on('mouseenter.zf.tooltip', function (e) {
	          if (!_this.isActive) {
	            _this.timeout = setTimeout(function () {
	              _this.show();
	            }, _this.options.hoverDelay);
	          }
	        }).on('mouseleave.zf.tooltip', function (e) {
	          clearTimeout(_this.timeout);

	          if (!isFocus || _this.isClick && !_this.options.clickOpen) {
	            _this.hide();
	          }
	        });
	      }

	      if (this.options.clickOpen) {
	        this.$element.on('mousedown.zf.tooltip', function (e) {
	          e.stopImmediatePropagation();

	          if (_this.isClick) {//_this.hide();
	            // _this.isClick = false;
	          } else {
	            _this.isClick = true;

	            if ((_this.options.disableHover || !_this.$element.attr('tabindex')) && !_this.isActive) {
	              _this.show();
	            }
	          }
	        });
	      } else {
	        this.$element.on('mousedown.zf.tooltip', function (e) {
	          e.stopImmediatePropagation();
	          _this.isClick = true;
	        });
	      }

	      if (!this.options.disableForTouch) {
	        this.$element.on('tap.zf.tooltip touchend.zf.tooltip', function (e) {
	          _this.isActive ? _this.hide() : _this.show();
	        });
	      }

	      this.$element.on({
	        // 'toggle.zf.trigger': this.toggle.bind(this),
	        // 'close.zf.trigger': this.hide.bind(this)
	        'close.zf.trigger': this.hide.bind(this)
	      });
	      this.$element.on('focus.zf.tooltip', function (e) {
	        isFocus = true;

	        if (_this.isClick) {
	          // If we're not showing open on clicks, we need to pretend a click-launched focus isn't
	          // a real focus, otherwise on hover and come back we get bad behavior
	          if (!_this.options.clickOpen) {
	            isFocus = false;
	          }

	          return false;
	        } else {
	          _this.show();
	        }
	      }).on('focusout.zf.tooltip', function (e) {
	        isFocus = false;
	        _this.isClick = false;

	        _this.hide();
	      }).on('resizeme.zf.trigger', function () {
	        if (_this.isActive) {
	          _this._setPosition();
	        }
	      });
	    }
	    /**
	     * adds a toggle method, in addition to the static show() & hide() functions
	     * @function
	     */

	  }, {
	    key: "toggle",
	    value: function toggle() {
	      if (this.isActive) {
	        this.hide();
	      } else {
	        this.show();
	      }
	    }
	    /**
	     * Destroys an instance of tooltip, removes template element from the view.
	     * @function
	     */

	  }, {
	    key: "_destroy",
	    value: function _destroy() {
	      this.$element.attr('title', this.template.text()).off('.zf.trigger .zf.tooltip').removeClass(this.options.triggerClass).removeClass('top right left bottom').removeAttr('aria-describedby data-disable-hover data-resize data-toggle data-tooltip data-yeti-box');
	      this.template.remove();
	    }
	  }]);

	  return Tooltip;
	}(_foundation_positionable__WEBPACK_IMPORTED_MODULE_4__["Positionable"]);

	Tooltip.defaults = {
	  disableForTouch: false,

	  /**
	   * Time, in ms, before a tooltip should open on hover.
	   * @option
	   * @type {number}
	   * @default 200
	   */
	  hoverDelay: 200,

	  /**
	   * Time, in ms, a tooltip should take to fade into view.
	   * @option
	   * @type {number}
	   * @default 150
	   */
	  fadeInDuration: 150,

	  /**
	   * Time, in ms, a tooltip should take to fade out of view.
	   * @option
	   * @type {number}
	   * @default 150
	   */
	  fadeOutDuration: 150,

	  /**
	   * Disables hover events from opening the tooltip if set to true
	   * @option
	   * @type {boolean}
	   * @default false
	   */
	  disableHover: false,

	  /**
	   * Optional addtional classes to apply to the tooltip template on init.
	   * @option
	   * @type {string}
	   * @default ''
	   */
	  templateClasses: '',

	  /**
	   * Non-optional class added to tooltip templates. Foundation default is 'tooltip'.
	   * @option
	   * @type {string}
	   * @default 'tooltip'
	   */
	  tooltipClass: 'tooltip',

	  /**
	   * Class applied to the tooltip anchor element.
	   * @option
	   * @type {string}
	   * @default 'has-tip'
	   */
	  triggerClass: 'has-tip',

	  /**
	   * Minimum breakpoint size at which to open the tooltip.
	   * @option
	   * @type {string}
	   * @default 'small'
	   */
	  showOn: 'small',

	  /**
	   * Custom template to be used to generate markup for tooltip.
	   * @option
	   * @type {string}
	   * @default ''
	   */
	  template: '',

	  /**
	   * Text displayed in the tooltip template on open.
	   * @option
	   * @type {string}
	   * @default ''
	   */
	  tipText: '',
	  touchCloseText: 'Tap to close.',

	  /**
	   * Allows the tooltip to remain open if triggered with a click or touch event.
	   * @option
	   * @type {boolean}
	   * @default true
	   */
	  clickOpen: true,

	  /**
	   * Position of tooltip. Can be left, right, bottom, top, or auto.
	   * @option
	   * @type {string}
	   * @default 'auto'
	   */
	  position: 'auto',

	  /**
	   * Alignment of tooltip relative to anchor. Can be left, right, bottom, top, center, or auto.
	   * @option
	   * @type {string}
	   * @default 'auto'
	   */
	  alignment: 'auto',

	  /**
	   * Allow overlap of container/window. If false, tooltip will first try to
	   * position as defined by data-position and data-alignment, but reposition if
	   * it would cause an overflow.  @option
	   * @type {boolean}
	   * @default false
	   */
	  allowOverlap: false,

	  /**
	   * Allow overlap of only the bottom of the container. This is the most common
	   * behavior for dropdowns, allowing the dropdown to extend the bottom of the
	   * screen but not otherwise influence or break out of the container.
	   * Less common for tooltips.
	   * @option
	   * @type {boolean}
	   * @default false
	   */
	  allowBottomOverlap: false,

	  /**
	   * Distance, in pixels, the template should push away from the anchor on the Y axis.
	   * @option
	   * @type {number}
	   * @default 0
	   */
	  vOffset: 0,

	  /**
	   * Distance, in pixels, the template should push away from the anchor on the X axis
	   * @option
	   * @type {number}
	   * @default 0
	   */
	  hOffset: 0,

	  /**
	   * Distance, in pixels, the template spacing auto-adjust for a vertical tooltip
	   * @option
	   * @type {number}
	   * @default 14
	   */
	  tooltipHeight: 14,

	  /**
	   * Distance, in pixels, the template spacing auto-adjust for a horizontal tooltip
	   * @option
	   * @type {number}
	   * @default 12
	   */
	  tooltipWidth: 12,

	  /**
	  * Allow HTML in tooltip. Warning: If you are loading user-generated content into tooltips,
	  * allowing HTML may open yourself up to XSS attacks.
	  * @option
	  * @type {boolean}
	  * @default false
	  */
	  allowHtml: false
	};
	/**
	 * TODO utilize resize event trigger
	 */



	/***/ }),

	/***/ "./js/foundation.util.box.js":
	/*!***********************************!*\
	  !*** ./js/foundation.util.box.js ***!
	  \***********************************/
	/*! exports provided: Box */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {

	"use strict";
	__webpack_require__.r(__webpack_exports__);
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Box", function() { return Box; });
	/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./foundation.core.utils */ "./js/foundation.core.utils.js");



	var Box = {
	  ImNotTouchingYou: ImNotTouchingYou,
	  OverlapArea: OverlapArea,
	  GetDimensions: GetDimensions,
	  GetOffsets: GetOffsets,
	  GetExplicitOffsets: GetExplicitOffsets
	  /**
	   * Compares the dimensions of an element to a container and determines collision events with container.
	   * @function
	   * @param {jQuery} element - jQuery object to test for collisions.
	   * @param {jQuery} parent - jQuery object to use as bounding container.
	   * @param {Boolean} lrOnly - set to true to check left and right values only.
	   * @param {Boolean} tbOnly - set to true to check top and bottom values only.
	   * @default if no parent object passed, detects collisions with `window`.
	   * @returns {Boolean} - true if collision free, false if a collision in any direction.
	   */

	};

	function ImNotTouchingYou(element, parent, lrOnly, tbOnly, ignoreBottom) {
	  return OverlapArea(element, parent, lrOnly, tbOnly, ignoreBottom) === 0;
	}

	;

	function OverlapArea(element, parent, lrOnly, tbOnly, ignoreBottom) {
	  var eleDims = GetDimensions(element),
	      topOver,
	      bottomOver,
	      leftOver,
	      rightOver;

	  if (parent) {
	    var parDims = GetDimensions(parent);
	    bottomOver = parDims.height + parDims.offset.top - (eleDims.offset.top + eleDims.height);
	    topOver = eleDims.offset.top - parDims.offset.top;
	    leftOver = eleDims.offset.left - parDims.offset.left;
	    rightOver = parDims.width + parDims.offset.left - (eleDims.offset.left + eleDims.width);
	  } else {
	    bottomOver = eleDims.windowDims.height + eleDims.windowDims.offset.top - (eleDims.offset.top + eleDims.height);
	    topOver = eleDims.offset.top - eleDims.windowDims.offset.top;
	    leftOver = eleDims.offset.left - eleDims.windowDims.offset.left;
	    rightOver = eleDims.windowDims.width - (eleDims.offset.left + eleDims.width);
	  }

	  bottomOver = ignoreBottom ? 0 : Math.min(bottomOver, 0);
	  topOver = Math.min(topOver, 0);
	  leftOver = Math.min(leftOver, 0);
	  rightOver = Math.min(rightOver, 0);

	  if (lrOnly) {
	    return leftOver + rightOver;
	  }

	  if (tbOnly) {
	    return topOver + bottomOver;
	  } // use sum of squares b/c we care about overlap area.


	  return Math.sqrt(topOver * topOver + bottomOver * bottomOver + leftOver * leftOver + rightOver * rightOver);
	}
	/**
	 * Uses native methods to return an object of dimension values.
	 * @function
	 * @param {jQuery || HTML} element - jQuery object or DOM element for which to get the dimensions. Can be any element other that document or window.
	 * @returns {Object} - nested object of integer pixel values
	 * TODO - if element is window, return only those values.
	 */


	function GetDimensions(elem) {
	  elem = elem.length ? elem[0] : elem;

	  if (elem === window || elem === document) {
	    throw new Error("I'm sorry, Dave. I'm afraid I can't do that.");
	  }

	  var rect = elem.getBoundingClientRect(),
	      parRect = elem.parentNode.getBoundingClientRect(),
	      winRect = document.body.getBoundingClientRect(),
	      winY = window.pageYOffset,
	      winX = window.pageXOffset;
	  return {
	    width: rect.width,
	    height: rect.height,
	    offset: {
	      top: rect.top + winY,
	      left: rect.left + winX
	    },
	    parentDims: {
	      width: parRect.width,
	      height: parRect.height,
	      offset: {
	        top: parRect.top + winY,
	        left: parRect.left + winX
	      }
	    },
	    windowDims: {
	      width: winRect.width,
	      height: winRect.height,
	      offset: {
	        top: winY,
	        left: winX
	      }
	    }
	  };
	}
	/**
	 * Returns an object of top and left integer pixel values for dynamically rendered elements,
	 * such as: Tooltip, Reveal, and Dropdown. Maintained for backwards compatibility, and where
	 * you don't know alignment, but generally from
	 * 6.4 forward you should use GetExplicitOffsets, as GetOffsets conflates position and alignment.
	 * @function
	 * @param {jQuery} element - jQuery object for the element being positioned.
	 * @param {jQuery} anchor - jQuery object for the element's anchor point.
	 * @param {String} position - a string relating to the desired position of the element, relative to it's anchor
	 * @param {Number} vOffset - integer pixel value of desired vertical separation between anchor and element.
	 * @param {Number} hOffset - integer pixel value of desired horizontal separation between anchor and element.
	 * @param {Boolean} isOverflow - if a collision event is detected, sets to true to default the element to full width - any desired offset.
	 * TODO alter/rewrite to work with `em` values as well/instead of pixels
	 */


	function GetOffsets(element, anchor, position, vOffset, hOffset, isOverflow) {
	  console.log("NOTE: GetOffsets is deprecated in favor of GetExplicitOffsets and will be removed in 6.5");

	  switch (position) {
	    case 'top':
	      return Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_0__["rtl"])() ? GetExplicitOffsets(element, anchor, 'top', 'left', vOffset, hOffset, isOverflow) : GetExplicitOffsets(element, anchor, 'top', 'right', vOffset, hOffset, isOverflow);

	    case 'bottom':
	      return Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_0__["rtl"])() ? GetExplicitOffsets(element, anchor, 'bottom', 'left', vOffset, hOffset, isOverflow) : GetExplicitOffsets(element, anchor, 'bottom', 'right', vOffset, hOffset, isOverflow);

	    case 'center top':
	      return GetExplicitOffsets(element, anchor, 'top', 'center', vOffset, hOffset, isOverflow);

	    case 'center bottom':
	      return GetExplicitOffsets(element, anchor, 'bottom', 'center', vOffset, hOffset, isOverflow);

	    case 'center left':
	      return GetExplicitOffsets(element, anchor, 'left', 'center', vOffset, hOffset, isOverflow);

	    case 'center right':
	      return GetExplicitOffsets(element, anchor, 'right', 'center', vOffset, hOffset, isOverflow);

	    case 'left bottom':
	      return GetExplicitOffsets(element, anchor, 'bottom', 'left', vOffset, hOffset, isOverflow);

	    case 'right bottom':
	      return GetExplicitOffsets(element, anchor, 'bottom', 'right', vOffset, hOffset, isOverflow);
	    // Backwards compatibility... this along with the reveal and reveal full
	    // classes are the only ones that didn't reference anchor

	    case 'center':
	      return {
	        left: $eleDims.windowDims.offset.left + $eleDims.windowDims.width / 2 - $eleDims.width / 2 + hOffset,
	        top: $eleDims.windowDims.offset.top + $eleDims.windowDims.height / 2 - ($eleDims.height / 2 + vOffset)
	      };

	    case 'reveal':
	      return {
	        left: ($eleDims.windowDims.width - $eleDims.width) / 2 + hOffset,
	        top: $eleDims.windowDims.offset.top + vOffset
	      };

	    case 'reveal full':
	      return {
	        left: $eleDims.windowDims.offset.left,
	        top: $eleDims.windowDims.offset.top
	      };
	      break;

	    default:
	      return {
	        left: Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_0__["rtl"])() ? $anchorDims.offset.left - $eleDims.width + $anchorDims.width - hOffset : $anchorDims.offset.left + hOffset,
	        top: $anchorDims.offset.top + $anchorDims.height + vOffset
	      };
	  }
	}

	function GetExplicitOffsets(element, anchor, position, alignment, vOffset, hOffset, isOverflow) {
	  var $eleDims = GetDimensions(element),
	      $anchorDims = anchor ? GetDimensions(anchor) : null;
	  var topVal, leftVal; // set position related attribute

	  switch (position) {
	    case 'top':
	      topVal = $anchorDims.offset.top - ($eleDims.height + vOffset);
	      break;

	    case 'bottom':
	      topVal = $anchorDims.offset.top + $anchorDims.height + vOffset;
	      break;

	    case 'left':
	      leftVal = $anchorDims.offset.left - ($eleDims.width + hOffset);
	      break;

	    case 'right':
	      leftVal = $anchorDims.offset.left + $anchorDims.width + hOffset;
	      break;
	  } // set alignment related attribute


	  switch (position) {
	    case 'top':
	    case 'bottom':
	      switch (alignment) {
	        case 'left':
	          leftVal = $anchorDims.offset.left + hOffset;
	          break;

	        case 'right':
	          leftVal = $anchorDims.offset.left - $eleDims.width + $anchorDims.width - hOffset;
	          break;

	        case 'center':
	          leftVal = isOverflow ? hOffset : $anchorDims.offset.left + $anchorDims.width / 2 - $eleDims.width / 2 + hOffset;
	          break;
	      }

	      break;

	    case 'right':
	    case 'left':
	      switch (alignment) {
	        case 'bottom':
	          topVal = $anchorDims.offset.top - vOffset + $anchorDims.height - $eleDims.height;
	          break;

	        case 'top':
	          topVal = $anchorDims.offset.top + vOffset;
	          break;

	        case 'center':
	          topVal = $anchorDims.offset.top + vOffset + $anchorDims.height / 2 - $eleDims.height / 2;
	          break;
	      }

	      break;
	  }

	  return {
	    top: topVal,
	    left: leftVal
	  };
	}



	/***/ }),

	/***/ "./js/foundation.util.imageLoader.js":
	/*!*******************************************!*\
	  !*** ./js/foundation.util.imageLoader.js ***!
	  \*******************************************/
	/*! exports provided: onImagesLoaded */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {

	"use strict";
	__webpack_require__.r(__webpack_exports__);
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onImagesLoaded", function() { return onImagesLoaded; });
	/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
	/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);



	/**
	 * Runs a callback function when images are fully loaded.
	 * @param {Object} images - Image(s) to check if loaded.
	 * @param {Func} callback - Function to execute when image is fully loaded.
	 */

	function onImagesLoaded(images, callback) {
	  var self = this,
	      unloaded = images.length;

	  if (unloaded === 0) {
	    callback();
	  }

	  images.each(function () {
	    // Check if image is loaded
	    if (this.complete && typeof this.naturalWidth !== 'undefined') {
	      singleImageLoaded();
	    } else {
	      // If the above check failed, simulate loading on detached element.
	      var image = new Image(); // Still count image as loaded if it finalizes with an error.

	      var events = "load.zf.images error.zf.images";
	      jquery__WEBPACK_IMPORTED_MODULE_0___default()(image).one(events, function me(event) {
	        // Unbind the event listeners. We're using 'one' but only one of the two events will have fired.
	        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).off(events, me);
	        singleImageLoaded();
	      });
	      image.src = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('src');
	    }
	  });

	  function singleImageLoaded() {
	    unloaded--;

	    if (unloaded === 0) {
	      callback();
	    }
	  }
	}



	/***/ }),

	/***/ "./js/foundation.util.keyboard.js":
	/*!****************************************!*\
	  !*** ./js/foundation.util.keyboard.js ***!
	  \****************************************/
	/*! exports provided: Keyboard */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {

	"use strict";
	__webpack_require__.r(__webpack_exports__);
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Keyboard", function() { return Keyboard; });
	/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
	/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
	/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.core.utils */ "./js/foundation.core.utils.js");
	/*******************************************
	 *                                         *
	 * This util was created by Marius Olbertz *
	 * Please thank Marius on GitHub /owlbertz *
	 * or the web http://www.mariusolbertz.de/ *
	 *                                         *
	 ******************************************/




	var keyCodes = {
	  9: 'TAB',
	  13: 'ENTER',
	  27: 'ESCAPE',
	  32: 'SPACE',
	  35: 'END',
	  36: 'HOME',
	  37: 'ARROW_LEFT',
	  38: 'ARROW_UP',
	  39: 'ARROW_RIGHT',
	  40: 'ARROW_DOWN'
	};
	var commands = {}; // Functions pulled out to be referenceable from internals

	function findFocusable($element) {
	  if (!$element) {
	    return false;
	  }

	  return $element.find('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]').filter(function () {
	    if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).is(':visible') || jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('tabindex') < 0) {
	      return false;
	    } //only have visible elements and those that have a tabindex greater or equal 0


	    return true;
	  });
	}

	function parseKey(event) {
	  var key = keyCodes[event.which || event.keyCode] || String.fromCharCode(event.which).toUpperCase(); // Remove un-printable characters, e.g. for `fromCharCode` calls for CTRL only events

	  key = key.replace(/\W+/, '');
	  if (event.shiftKey) key = "SHIFT_".concat(key);
	  if (event.ctrlKey) key = "CTRL_".concat(key);
	  if (event.altKey) key = "ALT_".concat(key); // Remove trailing underscore, in case only modifiers were used (e.g. only `CTRL_ALT`)

	  key = key.replace(/_$/, '');
	  return key;
	}

	var Keyboard = {
	  keys: getKeyCodes(keyCodes),

	  /**
	   * Parses the (keyboard) event and returns a String that represents its key
	   * Can be used like Foundation.parseKey(event) === Foundation.keys.SPACE
	   * @param {Event} event - the event generated by the event handler
	   * @return String key - String that represents the key pressed
	   */
	  parseKey: parseKey,

	  /**
	   * Handles the given (keyboard) event
	   * @param {Event} event - the event generated by the event handler
	   * @param {String} component - Foundation component's name, e.g. Slider or Reveal
	   * @param {Objects} functions - collection of functions that are to be executed
	   */
	  handleKey: function handleKey(event, component, functions) {
	    var commandList = commands[component],
	        keyCode = this.parseKey(event),
	        cmds,
	        command,
	        fn;
	    if (!commandList) return console.warn('Component not defined!');

	    if (typeof commandList.ltr === 'undefined') {
	      // this component does not differentiate between ltr and rtl
	      cmds = commandList; // use plain list
	    } else {
	      // merge ltr and rtl: if document is rtl, rtl overwrites ltr and vice versa
	      if (Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__["rtl"])()) cmds = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, commandList.ltr, commandList.rtl);else cmds = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, commandList.rtl, commandList.ltr);
	    }

	    command = cmds[keyCode];
	    fn = functions[command];

	    if (fn && typeof fn === 'function') {
	      // execute function  if exists
	      var returnValue = fn.apply();

	      if (functions.handled || typeof functions.handled === 'function') {
	        // execute function when event was handled
	        functions.handled(returnValue);
	      }
	    } else {
	      if (functions.unhandled || typeof functions.unhandled === 'function') {
	        // execute function when event was not handled
	        functions.unhandled();
	      }
	    }
	  },

	  /**
	   * Finds all focusable elements within the given `$element`
	   * @param {jQuery} $element - jQuery object to search within
	   * @return {jQuery} $focusable - all focusable elements within `$element`
	   */
	  findFocusable: findFocusable,

	  /**
	   * Returns the component name name
	   * @param {Object} component - Foundation component, e.g. Slider or Reveal
	   * @return String componentName
	   */
	  register: function register(componentName, cmds) {
	    commands[componentName] = cmds;
	  },
	  // TODO9438: These references to Keyboard need to not require global. Will 'this' work in this context?
	  //

	  /**
	   * Traps the focus in the given element.
	   * @param  {jQuery} $element  jQuery object to trap the foucs into.
	   */
	  trapFocus: function trapFocus($element) {
	    var $focusable = findFocusable($element),
	        $firstFocusable = $focusable.eq(0),
	        $lastFocusable = $focusable.eq(-1);
	    $element.on('keydown.zf.trapfocus', function (event) {
	      if (event.target === $lastFocusable[0] && parseKey(event) === 'TAB') {
	        event.preventDefault();
	        $firstFocusable.focus();
	      } else if (event.target === $firstFocusable[0] && parseKey(event) === 'SHIFT_TAB') {
	        event.preventDefault();
	        $lastFocusable.focus();
	      }
	    });
	  },

	  /**
	   * Releases the trapped focus from the given element.
	   * @param  {jQuery} $element  jQuery object to release the focus for.
	   */
	  releaseFocus: function releaseFocus($element) {
	    $element.off('keydown.zf.trapfocus');
	  }
	};
	/*
	 * Constants for easier comparing.
	 * Can be used like Foundation.parseKey(event) === Foundation.keys.SPACE
	 */

	function getKeyCodes(kcs) {
	  var k = {};

	  for (var kc in kcs) {
	    k[kcs[kc]] = kcs[kc];
	  }

	  return k;
	}



	/***/ }),

	/***/ "./js/foundation.util.mediaQuery.js":
	/*!******************************************!*\
	  !*** ./js/foundation.util.mediaQuery.js ***!
	  \******************************************/
	/*! exports provided: MediaQuery */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {

	"use strict";
	__webpack_require__.r(__webpack_exports__);
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaQuery", function() { return MediaQuery; });
	/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
	/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);


	function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

	 // Default set of media queries

	var defaultQueries = {
	  'default': 'only screen',
	  landscape: 'only screen and (orientation: landscape)',
	  portrait: 'only screen and (orientation: portrait)',
	  retina: 'only screen and (-webkit-min-device-pixel-ratio: 2),' + 'only screen and (min--moz-device-pixel-ratio: 2),' + 'only screen and (-o-min-device-pixel-ratio: 2/1),' + 'only screen and (min-device-pixel-ratio: 2),' + 'only screen and (min-resolution: 192dpi),' + 'only screen and (min-resolution: 2dppx)'
	}; // matchMedia() polyfill - Test a CSS media type/query in JS.
	// Authors & copyright(c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas, David Knight. MIT license

	/* eslint-disable */

	window.matchMedia || (window.matchMedia = function () {
	  "use strict"; // For browsers that support matchMedium api such as IE 9 and webkit

	  var styleMedia = window.styleMedia || window.media; // For those that don't support matchMedium

	  if (!styleMedia) {
	    var style = document.createElement('style'),
	        script = document.getElementsByTagName('script')[0],
	        info = null;
	    style.type = 'text/css';
	    style.id = 'matchmediajs-test';

	    if (!script) {
	      document.head.appendChild(style);
	    } else {
	      script.parentNode.insertBefore(style, script);
	    } // 'style.currentStyle' is used by IE <= 8 and 'window.getComputedStyle' for all other browsers


	    info = 'getComputedStyle' in window && window.getComputedStyle(style, null) || style.currentStyle;
	    styleMedia = {
	      matchMedium: function matchMedium(media) {
	        var text = '@media ' + media + '{ #matchmediajs-test { width: 1px; } }'; // 'style.styleSheet' is used by IE <= 8 and 'style.textContent' for all other browsers

	        if (style.styleSheet) {
	          style.styleSheet.cssText = text;
	        } else {
	          style.textContent = text;
	        } // Test if media query is true or false


	        return info.width === '1px';
	      }
	    };
	  }

	  return function (media) {
	    return {
	      matches: styleMedia.matchMedium(media || 'all'),
	      media: media || 'all'
	    };
	  };
	}());
	/* eslint-enable */

	var MediaQuery = {
	  queries: [],
	  current: '',

	  /**
	   * Initializes the media query helper, by extracting the breakpoint list from the CSS and activating the breakpoint watcher.
	   * @function
	   * @private
	   */
	  _init: function _init() {
	    var self = this;
	    var $meta = jquery__WEBPACK_IMPORTED_MODULE_0___default()('meta.foundation-mq');

	    if (!$meta.length) {
	      jquery__WEBPACK_IMPORTED_MODULE_0___default()('<meta class="foundation-mq">').appendTo(document.head);
	    }

	    var extractedStyles = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.foundation-mq').css('font-family');
	    var namedQueries;
	    namedQueries = parseStyleToObject(extractedStyles);

	    for (var key in namedQueries) {
	      if (namedQueries.hasOwnProperty(key)) {
	        self.queries.push({
	          name: key,
	          value: "only screen and (min-width: ".concat(namedQueries[key], ")")
	        });
	      }
	    }

	    this.current = this._getCurrentSize();

	    this._watcher();
	  },

	  /**
	   * Checks if the screen is at least as wide as a breakpoint.
	   * @function
	   * @param {String} size - Name of the breakpoint to check.
	   * @returns {Boolean} `true` if the breakpoint matches, `false` if it's smaller.
	   */
	  atLeast: function atLeast(size) {
	    var query = this.get(size);

	    if (query) {
	      return window.matchMedia(query).matches;
	    }

	    return false;
	  },

	  /**
	   * Checks if the screen matches to a breakpoint.
	   * @function
	   * @param {String} size - Name of the breakpoint to check, either 'small only' or 'small'. Omitting 'only' falls back to using atLeast() method.
	   * @returns {Boolean} `true` if the breakpoint matches, `false` if it does not.
	   */
	  is: function is(size) {
	    size = size.trim().split(' ');

	    if (size.length > 1 && size[1] === 'only') {
	      if (size[0] === this._getCurrentSize()) return true;
	    } else {
	      return this.atLeast(size[0]);
	    }

	    return false;
	  },

	  /**
	   * Gets the media query of a breakpoint.
	   * @function
	   * @param {String} size - Name of the breakpoint to get.
	   * @returns {String|null} - The media query of the breakpoint, or `null` if the breakpoint doesn't exist.
	   */
	  get: function get(size) {
	    for (var i in this.queries) {
	      if (this.queries.hasOwnProperty(i)) {
	        var query = this.queries[i];
	        if (size === query.name) return query.value;
	      }
	    }

	    return null;
	  },

	  /**
	   * Gets the current breakpoint name by testing every breakpoint and returning the last one to match (the biggest one).
	   * @function
	   * @private
	   * @returns {String} Name of the current breakpoint.
	   */
	  _getCurrentSize: function _getCurrentSize() {
	    var matched;

	    for (var i = 0; i < this.queries.length; i++) {
	      var query = this.queries[i];

	      if (window.matchMedia(query.value).matches) {
	        matched = query;
	      }
	    }

	    if (_typeof(matched) === 'object') {
	      return matched.name;
	    } else {
	      return matched;
	    }
	  },

	  /**
	   * Activates the breakpoint watcher, which fires an event on the window whenever the breakpoint changes.
	   * @function
	   * @private
	   */
	  _watcher: function _watcher() {
	    var _this = this;

	    jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off('resize.zf.mediaquery').on('resize.zf.mediaquery', function () {
	      var newSize = _this._getCurrentSize(),
	          currentSize = _this.current;

	      if (newSize !== currentSize) {
	        // Change the current media query
	        _this.current = newSize; // Broadcast the media query change on the window

	        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).trigger('changed.zf.mediaquery', [newSize, currentSize]);
	      }
	    });
	  }
	}; // Thank you: https://github.com/sindresorhus/query-string

	function parseStyleToObject(str) {
	  var styleObject = {};

	  if (typeof str !== 'string') {
	    return styleObject;
	  }

	  str = str.trim().slice(1, -1); // browsers re-quote string style values

	  if (!str) {
	    return styleObject;
	  }

	  styleObject = str.split('&').reduce(function (ret, param) {
	    var parts = param.replace(/\+/g, ' ').split('=');
	    var key = parts[0];
	    var val = parts[1];
	    key = decodeURIComponent(key); // missing `=` should be `null`:
	    // http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters

	    val = typeof val === 'undefined' ? null : decodeURIComponent(val);

	    if (!ret.hasOwnProperty(key)) {
	      ret[key] = val;
	    } else if (Array.isArray(ret[key])) {
	      ret[key].push(val);
	    } else {
	      ret[key] = [ret[key], val];
	    }

	    return ret;
	  }, {});
	  return styleObject;
	}



	/***/ }),

	/***/ "./js/foundation.util.motion.js":
	/*!**************************************!*\
	  !*** ./js/foundation.util.motion.js ***!
	  \**************************************/
	/*! exports provided: Move, Motion */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {

	"use strict";
	__webpack_require__.r(__webpack_exports__);
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Move", function() { return Move; });
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Motion", function() { return Motion; });
	/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
	/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
	/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.core.utils */ "./js/foundation.core.utils.js");




	/**
	 * Motion module.
	 * @module foundation.motion
	 */

	var initClasses = ['mui-enter', 'mui-leave'];
	var activeClasses = ['mui-enter-active', 'mui-leave-active'];
	var Motion = {
	  animateIn: function animateIn(element, animation, cb) {
	    animate(true, element, animation, cb);
	  },
	  animateOut: function animateOut(element, animation, cb) {
	    animate(false, element, animation, cb);
	  }
	};

	function Move(duration, elem, fn) {
	  var anim,
	      prog,
	      start = null; // console.log('called');

	  if (duration === 0) {
	    fn.apply(elem);
	    elem.trigger('finished.zf.animate', [elem]).triggerHandler('finished.zf.animate', [elem]);
	    return;
	  }

	  function move(ts) {
	    if (!start) start = ts; // console.log(start, ts);

	    prog = ts - start;
	    fn.apply(elem);

	    if (prog < duration) {
	      anim = window.requestAnimationFrame(move, elem);
	    } else {
	      window.cancelAnimationFrame(anim);
	      elem.trigger('finished.zf.animate', [elem]).triggerHandler('finished.zf.animate', [elem]);
	    }
	  }

	  anim = window.requestAnimationFrame(move);
	}
	/**
	 * Animates an element in or out using a CSS transition class.
	 * @function
	 * @private
	 * @param {Boolean} isIn - Defines if the animation is in or out.
	 * @param {Object} element - jQuery or HTML object to animate.
	 * @param {String} animation - CSS class to use.
	 * @param {Function} cb - Callback to run when animation is finished.
	 */


	function animate(isIn, element, animation, cb) {
	  element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).eq(0);
	  if (!element.length) return;
	  var initClass = isIn ? initClasses[0] : initClasses[1];
	  var activeClass = isIn ? activeClasses[0] : activeClasses[1]; // Set up the animation

	  reset();
	  element.addClass(animation).css('transition', 'none');
	  requestAnimationFrame(function () {
	    element.addClass(initClass);
	    if (isIn) element.show();
	  }); // Start the animation

	  requestAnimationFrame(function () {
	    element[0].offsetWidth;
	    element.css('transition', '').addClass(activeClass);
	  }); // Clean up the animation when it finishes

	  element.one(Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__["transitionend"])(element), finish); // Hides the element (for out animations), resets the element, and runs a callback

	  function finish() {
	    if (!isIn) element.hide();
	    reset();
	    if (cb) cb.apply(element);
	  } // Resets transitions and removes motion-specific classes


	  function reset() {
	    element[0].style.transitionDuration = 0;
	    element.removeClass("".concat(initClass, " ").concat(activeClass, " ").concat(animation));
	  }
	}



	/***/ }),

	/***/ "./js/foundation.util.nest.js":
	/*!************************************!*\
	  !*** ./js/foundation.util.nest.js ***!
	  \************************************/
	/*! exports provided: Nest */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {

	"use strict";
	__webpack_require__.r(__webpack_exports__);
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nest", function() { return Nest; });
	/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
	/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);



	var Nest = {
	  Feather: function Feather(menu) {
	    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'zf';
	    menu.attr('role', 'menubar');
	    var items = menu.find('li').attr({
	      'role': 'menuitem'
	    }),
	        subMenuClass = "is-".concat(type, "-submenu"),
	        subItemClass = "".concat(subMenuClass, "-item"),
	        hasSubClass = "is-".concat(type, "-submenu-parent"),
	        applyAria = type !== 'accordion'; // Accordions handle their own ARIA attriutes.

	    items.each(function () {
	      var $item = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),
	          $sub = $item.children('ul');

	      if ($sub.length) {
	        $item.addClass(hasSubClass);
	        $sub.addClass("submenu ".concat(subMenuClass)).attr({
	          'data-submenu': ''
	        });

	        if (applyAria) {
	          $item.attr({
	            'aria-haspopup': true,
	            'aria-label': $item.children('a:first').text()
	          }); // Note:  Drilldowns behave differently in how they hide, and so need
	          // additional attributes.  We should look if this possibly over-generalized
	          // utility (Nest) is appropriate when we rework menus in 6.4

	          if (type === 'drilldown') {
	            $item.attr({
	              'aria-expanded': false
	            });
	          }
	        }

	        $sub.addClass("submenu ".concat(subMenuClass)).attr({
	          'data-submenu': '',
	          'role': 'menubar'
	        });

	        if (type === 'drilldown') {
	          $sub.attr({
	            'aria-hidden': true
	          });
	        }
	      }

	      if ($item.parent('[data-submenu]').length) {
	        $item.addClass("is-submenu-item ".concat(subItemClass));
	      }
	    });
	    return;
	  },
	  Burn: function Burn(menu, type) {
	    var //items = menu.find('li'),
	    subMenuClass = "is-".concat(type, "-submenu"),
	        subItemClass = "".concat(subMenuClass, "-item"),
	        hasSubClass = "is-".concat(type, "-submenu-parent");
	    menu.find('>li, > li > ul, .menu, .menu > li, [data-submenu] > li').removeClass("".concat(subMenuClass, " ").concat(subItemClass, " ").concat(hasSubClass, " is-submenu-item submenu is-active")).removeAttr('data-submenu').css('display', '');
	  }
	};


	/***/ }),

	/***/ "./js/foundation.util.timer.js":
	/*!*************************************!*\
	  !*** ./js/foundation.util.timer.js ***!
	  \*************************************/
	/*! exports provided: Timer */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {

	"use strict";
	__webpack_require__.r(__webpack_exports__);
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Timer", function() { return Timer; });
	/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
	/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);




	function Timer(elem, options, cb) {
	  var _this = this,
	      duration = options.duration,
	      //options is an object for easily adding features later.
	  nameSpace = Object.keys(elem.data())[0] || 'timer',
	      remain = -1,
	      start,
	      timer;

	  this.isPaused = false;

	  this.restart = function () {
	    remain = -1;
	    clearTimeout(timer);
	    this.start();
	  };

	  this.start = function () {
	    this.isPaused = false; // if(!elem.data('paused')){ return false; }//maybe implement this sanity check if used for other things.

	    clearTimeout(timer);
	    remain = remain <= 0 ? duration : remain;
	    elem.data('paused', false);
	    start = Date.now();
	    timer = setTimeout(function () {
	      if (options.infinite) {
	        _this.restart(); //rerun the timer.

	      }

	      if (cb && typeof cb === 'function') {
	        cb();
	      }
	    }, remain);
	    elem.trigger("timerstart.zf.".concat(nameSpace));
	  };

	  this.pause = function () {
	    this.isPaused = true; //if(elem.data('paused')){ return false; }//maybe implement this sanity check if used for other things.

	    clearTimeout(timer);
	    elem.data('paused', true);
	    var end = Date.now();
	    remain = remain - (end - start);
	    elem.trigger("timerpaused.zf.".concat(nameSpace));
	  };
	}



	/***/ }),

	/***/ "./js/foundation.util.touch.js":
	/*!*************************************!*\
	  !*** ./js/foundation.util.touch.js ***!
	  \*************************************/
	/*! exports provided: Touch */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {

	"use strict";
	__webpack_require__.r(__webpack_exports__);
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Touch", function() { return Touch; });
	/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
	/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

	function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

	//**************************************************
	//**Work inspired by multiple jquery swipe plugins**
	//**Done by Yohai Ararat ***************************
	//**************************************************

	var Touch = {};
	var startPosX,
	    startPosY,
	    startTime,
	    elapsedTime,
	    startEvent,
	    isMoving = false,
	    didMoved = false;

	function onTouchEnd(e) {
	  this.removeEventListener('touchmove', onTouchMove);
	  this.removeEventListener('touchend', onTouchEnd); // If the touch did not move, consider it as a "tap"

	  if (!didMoved) {
	    var tapEvent = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.Event('tap', startEvent || e);
	    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).trigger(tapEvent);
	  }

	  startEvent = null;
	  isMoving = false;
	  didMoved = false;
	}

	function onTouchMove(e) {
	  if (jquery__WEBPACK_IMPORTED_MODULE_0___default.a.spotSwipe.preventDefault) {
	    e.preventDefault();
	  }

	  if (isMoving) {
	    var x = e.touches[0].pageX;
	    var y = e.touches[0].pageY;
	    var dx = startPosX - x;
	    var dy = startPosY - y;
	    var dir;
	    didMoved = true;
	    elapsedTime = new Date().getTime() - startTime;

	    if (Math.abs(dx) >= jquery__WEBPACK_IMPORTED_MODULE_0___default.a.spotSwipe.moveThreshold && elapsedTime <= jquery__WEBPACK_IMPORTED_MODULE_0___default.a.spotSwipe.timeThreshold) {
	      dir = dx > 0 ? 'left' : 'right';
	    } // else if(Math.abs(dy) >= $.spotSwipe.moveThreshold && elapsedTime <= $.spotSwipe.timeThreshold) {
	    //   dir = dy > 0 ? 'down' : 'up';
	    // }


	    if (dir) {
	      e.preventDefault();
	      onTouchEnd.apply(this, arguments);
	      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).trigger(jquery__WEBPACK_IMPORTED_MODULE_0___default.a.Event('swipe', e), dir).trigger(jquery__WEBPACK_IMPORTED_MODULE_0___default.a.Event("swipe".concat(dir), e));
	    }
	  }
	}

	function onTouchStart(e) {
	  if (e.touches.length == 1) {
	    startPosX = e.touches[0].pageX;
	    startPosY = e.touches[0].pageY;
	    startEvent = e;
	    isMoving = true;
	    didMoved = false;
	    startTime = new Date().getTime();
	    this.addEventListener('touchmove', onTouchMove, false);
	    this.addEventListener('touchend', onTouchEnd, false);
	  }
	}

	function init() {
	  this.addEventListener && this.addEventListener('touchstart', onTouchStart, false);
	}

	function teardown() {
	  this.removeEventListener('touchstart', onTouchStart);
	}

	var SpotSwipe =
	/*#__PURE__*/
	function () {
	  function SpotSwipe($) {
	    _classCallCheck(this, SpotSwipe);

	    this.version = '1.0.0';
	    this.enabled = 'ontouchstart' in document.documentElement;
	    this.preventDefault = false;
	    this.moveThreshold = 75;
	    this.timeThreshold = 200;
	    this.$ = $;

	    this._init();
	  }

	  _createClass(SpotSwipe, [{
	    key: "_init",
	    value: function _init() {
	      var $ = this.$;
	      $.event.special.swipe = {
	        setup: init
	      };
	      $.event.special.tap = {
	        setup: init
	      };
	      $.each(['left', 'up', 'down', 'right'], function () {
	        $.event.special["swipe".concat(this)] = {
	          setup: function setup() {
	            $(this).on('swipe', $.noop);
	          }
	        };
	      });
	    }
	  }]);

	  return SpotSwipe;
	}();
	/****************************************************
	 * As far as I can tell, both setupSpotSwipe and    *
	 * setupTouchHandler should be idempotent,          *
	 * because they directly replace functions &        *
	 * values, and do not add event handlers directly.  *
	 ****************************************************/


	Touch.setupSpotSwipe = function ($) {
	  $.spotSwipe = new SpotSwipe($);
	};
	/****************************************************
	 * Method for adding pseudo drag events to elements *
	 ***************************************************/


	Touch.setupTouchHandler = function ($) {
	  $.fn.addTouch = function () {
	    this.each(function (i, el) {
	      $(el).bind('touchstart touchmove touchend touchcancel', function (event) {
	        //we pass the original event object because the jQuery event
	        //object is normalized to w3c specs and does not provide the TouchList
	        handleTouch(event);
	      });
	    });

	    var handleTouch = function handleTouch(event) {
	      var touches = event.changedTouches,
	          first = touches[0],
	          eventTypes = {
	        touchstart: 'mousedown',
	        touchmove: 'mousemove',
	        touchend: 'mouseup'
	      },
	          type = eventTypes[event.type],
	          simulatedEvent;

	      if ('MouseEvent' in window && typeof window.MouseEvent === 'function') {
	        simulatedEvent = new window.MouseEvent(type, {
	          'bubbles': true,
	          'cancelable': true,
	          'screenX': first.screenX,
	          'screenY': first.screenY,
	          'clientX': first.clientX,
	          'clientY': first.clientY
	        });
	      } else {
	        simulatedEvent = document.createEvent('MouseEvent');
	        simulatedEvent.initMouseEvent(type, true, true, window, 1, first.screenX, first.screenY, first.clientX, first.clientY, false, false, false, false, 0
	        /*left*/
	        , null);
	      }

	      first.target.dispatchEvent(simulatedEvent);
	    };
	  };
	};

	Touch.init = function ($) {
	  if (typeof $.spotSwipe === 'undefined') {
	    Touch.setupSpotSwipe($);
	    Touch.setupTouchHandler($);
	  }
	};



	/***/ }),

	/***/ "./js/foundation.util.triggers.js":
	/*!****************************************!*\
	  !*** ./js/foundation.util.triggers.js ***!
	  \****************************************/
	/*! exports provided: Triggers */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {

	"use strict";
	__webpack_require__.r(__webpack_exports__);
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Triggers", function() { return Triggers; });
	/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
	/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
	/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.core.utils */ "./js/foundation.core.utils.js");
	/* harmony import */ var _foundation_util_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.util.motion */ "./js/foundation.util.motion.js");


	function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }





	var MutationObserver = function () {
	  var prefixes = ['WebKit', 'Moz', 'O', 'Ms', ''];

	  for (var i = 0; i < prefixes.length; i++) {
	    if ("".concat(prefixes[i], "MutationObserver") in window) {
	      return window["".concat(prefixes[i], "MutationObserver")];
	    }
	  }

	  return false;
	}();

	var triggers = function triggers(el, type) {
	  el.data(type).split(' ').forEach(function (id) {
	    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#".concat(id))[type === 'close' ? 'trigger' : 'triggerHandler']("".concat(type, ".zf.trigger"), [el]);
	  });
	};

	var Triggers = {
	  Listeners: {
	    Basic: {},
	    Global: {}
	  },
	  Initializers: {}
	};
	Triggers.Listeners.Basic = {
	  openListener: function openListener() {
	    triggers(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this), 'open');
	  },
	  closeListener: function closeListener() {
	    var id = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('close');

	    if (id) {
	      triggers(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this), 'close');
	    } else {
	      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).trigger('close.zf.trigger');
	    }
	  },
	  toggleListener: function toggleListener() {
	    var id = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('toggle');

	    if (id) {
	      triggers(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this), 'toggle');
	    } else {
	      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).trigger('toggle.zf.trigger');
	    }
	  },
	  closeableListener: function closeableListener(e) {
	    e.stopPropagation();
	    var animation = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('closable');

	    if (animation !== '') {
	      _foundation_util_motion__WEBPACK_IMPORTED_MODULE_2__["Motion"].animateOut(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this), animation, function () {
	        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).trigger('closed.zf');
	      });
	    } else {
	      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).fadeOut().trigger('closed.zf');
	    }
	  },
	  toggleFocusListener: function toggleFocusListener() {
	    var id = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('toggle-focus');
	    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#".concat(id)).triggerHandler('toggle.zf.trigger', [jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)]);
	  }
	}; // Elements with [data-open] will reveal a plugin that supports it when clicked.

	Triggers.Initializers.addOpenListener = function ($elem) {
	  $elem.off('click.zf.trigger', Triggers.Listeners.Basic.openListener);
	  $elem.on('click.zf.trigger', '[data-open]', Triggers.Listeners.Basic.openListener);
	}; // Elements with [data-close] will close a plugin that supports it when clicked.
	// If used without a value on [data-close], the event will bubble, allowing it to close a parent component.


	Triggers.Initializers.addCloseListener = function ($elem) {
	  $elem.off('click.zf.trigger', Triggers.Listeners.Basic.closeListener);
	  $elem.on('click.zf.trigger', '[data-close]', Triggers.Listeners.Basic.closeListener);
	}; // Elements with [data-toggle] will toggle a plugin that supports it when clicked.


	Triggers.Initializers.addToggleListener = function ($elem) {
	  $elem.off('click.zf.trigger', Triggers.Listeners.Basic.toggleListener);
	  $elem.on('click.zf.trigger', '[data-toggle]', Triggers.Listeners.Basic.toggleListener);
	}; // Elements with [data-closable] will respond to close.zf.trigger events.


	Triggers.Initializers.addCloseableListener = function ($elem) {
	  $elem.off('close.zf.trigger', Triggers.Listeners.Basic.closeableListener);
	  $elem.on('close.zf.trigger', '[data-closeable], [data-closable]', Triggers.Listeners.Basic.closeableListener);
	}; // Elements with [data-toggle-focus] will respond to coming in and out of focus


	Triggers.Initializers.addToggleFocusListener = function ($elem) {
	  $elem.off('focus.zf.trigger blur.zf.trigger', Triggers.Listeners.Basic.toggleFocusListener);
	  $elem.on('focus.zf.trigger blur.zf.trigger', '[data-toggle-focus]', Triggers.Listeners.Basic.toggleFocusListener);
	}; // More Global/complex listeners and triggers


	Triggers.Listeners.Global = {
	  resizeListener: function resizeListener($nodes) {
	    if (!MutationObserver) {
	      //fallback for IE 9
	      $nodes.each(function () {
	        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).triggerHandler('resizeme.zf.trigger');
	      });
	    } //trigger all listening elements and signal a resize event


	    $nodes.attr('data-events', "resize");
	  },
	  scrollListener: function scrollListener($nodes) {
	    if (!MutationObserver) {
	      //fallback for IE 9
	      $nodes.each(function () {
	        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).triggerHandler('scrollme.zf.trigger');
	      });
	    } //trigger all listening elements and signal a scroll event


	    $nodes.attr('data-events', "scroll");
	  },
	  closeMeListener: function closeMeListener(e, pluginId) {
	    var plugin = e.namespace.split('.')[0];
	    var plugins = jquery__WEBPACK_IMPORTED_MODULE_0___default()("[data-".concat(plugin, "]")).not("[data-yeti-box=\"".concat(pluginId, "\"]"));
	    plugins.each(function () {
	      var _this = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);

	      _this.triggerHandler('close.zf.trigger', [_this]);
	    });
	  } // Global, parses whole document.

	};

	Triggers.Initializers.addClosemeListener = function (pluginName) {
	  var yetiBoxes = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-yeti-box]'),
	      plugNames = ['dropdown', 'tooltip', 'reveal'];

	  if (pluginName) {
	    if (typeof pluginName === 'string') {
	      plugNames.push(pluginName);
	    } else if (_typeof(pluginName) === 'object' && typeof pluginName[0] === 'string') {
	      plugNames.concat(pluginName);
	    } else {
	      console.error('Plugin names must be strings');
	    }
	  }

	  if (yetiBoxes.length) {
	    var listeners = plugNames.map(function (name) {
	      return "closeme.zf.".concat(name);
	    }).join(' ');
	    jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(listeners).on(listeners, Triggers.Listeners.Global.closeMeListener);
	  }
	};

	function debounceGlobalListener(debounce, trigger, listener) {
	  var timer,
	      args = Array.prototype.slice.call(arguments, 3);
	  jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(trigger).on(trigger, function (e) {
	    if (timer) {
	      clearTimeout(timer);
	    }

	    timer = setTimeout(function () {
	      listener.apply(null, args);
	    }, debounce || 10); //default time to emit scroll event
	  });
	}

	Triggers.Initializers.addResizeListener = function (debounce) {
	  var $nodes = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-resize]');

	  if ($nodes.length) {
	    debounceGlobalListener(debounce, 'resize.zf.trigger', Triggers.Listeners.Global.resizeListener, $nodes);
	  }
	};

	Triggers.Initializers.addScrollListener = function (debounce) {
	  var $nodes = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-scroll]');

	  if ($nodes.length) {
	    debounceGlobalListener(debounce, 'scroll.zf.trigger', Triggers.Listeners.Global.scrollListener, $nodes);
	  }
	};

	Triggers.Initializers.addMutationEventsListener = function ($elem) {
	  if (!MutationObserver) {
	    return false;
	  }

	  var $nodes = $elem.find('[data-resize], [data-scroll], [data-mutate]'); //element callback

	  var listeningElementsMutation = function listeningElementsMutation(mutationRecordsList) {
	    var $target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(mutationRecordsList[0].target); //trigger the event handler for the element depending on type

	    switch (mutationRecordsList[0].type) {
	      case "attributes":
	        if ($target.attr("data-events") === "scroll" && mutationRecordsList[0].attributeName === "data-events") {
	          $target.triggerHandler('scrollme.zf.trigger', [$target, window.pageYOffset]);
	        }

	        if ($target.attr("data-events") === "resize" && mutationRecordsList[0].attributeName === "data-events") {
	          $target.triggerHandler('resizeme.zf.trigger', [$target]);
	        }

	        if (mutationRecordsList[0].attributeName === "style") {
	          $target.closest("[data-mutate]").attr("data-events", "mutate");
	          $target.closest("[data-mutate]").triggerHandler('mutateme.zf.trigger', [$target.closest("[data-mutate]")]);
	        }

	        break;

	      case "childList":
	        $target.closest("[data-mutate]").attr("data-events", "mutate");
	        $target.closest("[data-mutate]").triggerHandler('mutateme.zf.trigger', [$target.closest("[data-mutate]")]);
	        break;

	      default:
	        return false;
	      //nothing
	    }
	  };

	  if ($nodes.length) {
	    //for each element that needs to listen for resizing, scrolling, or mutation add a single observer
	    for (var i = 0; i <= $nodes.length - 1; i++) {
	      var elementObserver = new MutationObserver(listeningElementsMutation);
	      elementObserver.observe($nodes[i], {
	        attributes: true,
	        childList: true,
	        characterData: false,
	        subtree: true,
	        attributeFilter: ["data-events", "style"]
	      });
	    }
	  }
	};

	Triggers.Initializers.addSimpleListeners = function () {
	  var $document = jquery__WEBPACK_IMPORTED_MODULE_0___default()(document);
	  Triggers.Initializers.addOpenListener($document);
	  Triggers.Initializers.addCloseListener($document);
	  Triggers.Initializers.addToggleListener($document);
	  Triggers.Initializers.addCloseableListener($document);
	  Triggers.Initializers.addToggleFocusListener($document);
	};

	Triggers.Initializers.addGlobalListeners = function () {
	  var $document = jquery__WEBPACK_IMPORTED_MODULE_0___default()(document);
	  Triggers.Initializers.addMutationEventsListener($document);
	  Triggers.Initializers.addResizeListener();
	  Triggers.Initializers.addScrollListener();
	  Triggers.Initializers.addClosemeListener();
	};

	Triggers.init = function ($, Foundation) {
	  Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__["onLoad"])($(window), function () {
	    if ($.triggersInitialized !== true) {
	      Triggers.Initializers.addSimpleListeners();
	      Triggers.Initializers.addGlobalListeners();
	      $.triggersInitialized = true;
	    }
	  });

	  if (Foundation) {
	    Foundation.Triggers = Triggers; // Legacy included to be backwards compatible for now.

	    Foundation.IHearYou = Triggers.Initializers.addGlobalListeners;
	  }
	};



	/***/ }),

	/***/ 0:
	/*!****************************************!*\
	  !*** multi ./js/entries/foundation.js ***!
	  \****************************************/
	/*! no static exports found */
	/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! /Users/ncoden/Documents/Documents/Projects/Programmation/Web/2016/Foundation/foundation-sites/js/entries/foundation.js */"./js/entries/foundation.js");


	/***/ }),

	/***/ "jquery":
	/*!********************************************************************************************!*\
	  !*** external {"root":["jQuery"],"amd":"jquery","commonjs":"jquery","commonjs2":"jquery"} ***!
	  \********************************************************************************************/
	/*! no static exports found */
	/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_jquery__;

	/***/ })

	/******/ });
	});
	//# sourceMappingURL=foundation.js.map

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(global) {/*!
	 * VERSION: 1.20.5
	 * DATE: 2018-05-21
	 * UPDATES AND DOCS AT: http://greensock.com
	 *
	 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
	 * This work is subject to the terms at http://greensock.com/standard-license or for
	 * Club GreenSock members, the software agreement that was issued with your membership.
	 * 
	 * @author: Jack Doyle, jack@greensock.com
	 */
	var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("TimelineMax",["TimelineLite","TweenLite","easing.Ease"],function(a,b,c){var d=function(b){a.call(this,b),this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._cycle=0,this._yoyo=this.vars.yoyo===!0,this._dirty=!0},e=1e-10,f=b._internals,g=f.lazyTweens,h=f.lazyRender,i=_gsScope._gsDefine.globals,j=new c(null,null,1,0),k=d.prototype=new a;return k.constructor=d,k.kill()._gc=!1,d.version="1.20.5",k.invalidate=function(){return this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),a.prototype.invalidate.call(this)},k.addCallback=function(a,c,d,e){return this.add(b.delayedCall(0,a,d,e),c)},k.removeCallback=function(a,b){if(a)if(null==b)this._kill(null,a);else for(var c=this.getTweensOf(a,!1),d=c.length,e=this._parseTimeOrLabel(b);--d>-1;)c[d]._startTime===e&&c[d]._enabled(!1,!1);return this},k.removePause=function(b){return this.removeCallback(a._internals.pauseCallback,b)},k.tweenTo=function(a,c){c=c||{};var d,e,f,g={ease:j,useFrames:this.usesFrames(),immediateRender:!1,lazy:!1},h=c.repeat&&i.TweenMax||b;for(e in c)g[e]=c[e];return g.time=this._parseTimeOrLabel(a),d=Math.abs(Number(g.time)-this._time)/this._timeScale||.001,f=new h(this,d,g),g.onStart=function(){f.target.paused(!0),f.vars.time===f.target.time()||d!==f.duration()||f.isFromTo||f.duration(Math.abs(f.vars.time-f.target.time())/f.target._timeScale).render(f.time(),!0,!0),c.onStart&&c.onStart.apply(c.onStartScope||c.callbackScope||f,c.onStartParams||[])},f},k.tweenFromTo=function(a,b,c){c=c||{},a=this._parseTimeOrLabel(a),c.startAt={onComplete:this.seek,onCompleteParams:[a],callbackScope:this},c.immediateRender=c.immediateRender!==!1;var d=this.tweenTo(b,c);return d.isFromTo=1,d.duration(Math.abs(d.vars.time-a)/this._timeScale||.001)},k.render=function(a,b,c){this._gc&&this._enabled(!0,!1);var d,f,i,j,k,l,m,n,o=this._time,p=this._dirty?this.totalDuration():this._totalDuration,q=this._duration,r=this._totalTime,s=this._startTime,t=this._timeScale,u=this._rawPrevTime,v=this._paused,w=this._cycle;if(o!==this._time&&(a+=this._time-o),a>=p-1e-7&&a>=0)this._locked||(this._totalTime=p,this._cycle=this._repeat),this._reversed||this._hasPausedChild()||(f=!0,j="onComplete",k=!!this._timeline.autoRemoveChildren,0===this._duration&&(0>=a&&a>=-1e-7||0>u||u===e)&&u!==a&&this._first&&(k=!0,u>e&&(j="onReverseComplete"))),this._rawPrevTime=this._duration||!b||a||this._rawPrevTime===a?a:e,this._yoyo&&0!==(1&this._cycle)?this._time=a=0:(this._time=q,a=q+1e-4);else if(1e-7>a)if(this._locked||(this._totalTime=this._cycle=0),this._time=0,(0!==o||0===q&&u!==e&&(u>0||0>a&&u>=0)&&!this._locked)&&(j="onReverseComplete",f=this._reversed),0>a)this._active=!1,this._timeline.autoRemoveChildren&&this._reversed?(k=f=!0,j="onReverseComplete"):u>=0&&this._first&&(k=!0),this._rawPrevTime=a;else{if(this._rawPrevTime=q||!b||a||this._rawPrevTime===a?a:e,0===a&&f)for(d=this._first;d&&0===d._startTime;)d._duration||(f=!1),d=d._next;a=0,this._initted||(k=!0)}else if(0===q&&0>u&&(k=!0),this._time=this._rawPrevTime=a,this._locked||(this._totalTime=a,0!==this._repeat&&(l=q+this._repeatDelay,this._cycle=this._totalTime/l>>0,0!==this._cycle&&this._cycle===this._totalTime/l&&a>=r&&this._cycle--,this._time=this._totalTime-this._cycle*l,this._yoyo&&0!==(1&this._cycle)&&(this._time=q-this._time),this._time>q?(this._time=q,a=q+1e-4):this._time<0?this._time=a=0:a=this._time)),this._hasPause&&!this._forcingPlayhead&&!b){if(a=this._time,a>=o||this._repeat&&w!==this._cycle)for(d=this._first;d&&d._startTime<=a&&!m;)d._duration||"isPause"!==d.data||d.ratio||0===d._startTime&&0===this._rawPrevTime||(m=d),d=d._next;else for(d=this._last;d&&d._startTime>=a&&!m;)d._duration||"isPause"===d.data&&d._rawPrevTime>0&&(m=d),d=d._prev;m&&m._startTime<q&&(this._time=a=m._startTime,this._totalTime=a+this._cycle*(this._totalDuration+this._repeatDelay))}if(this._cycle!==w&&!this._locked){var x=this._yoyo&&0!==(1&w),y=x===(this._yoyo&&0!==(1&this._cycle)),z=this._totalTime,A=this._cycle,B=this._rawPrevTime,C=this._time;if(this._totalTime=w*q,this._cycle<w?x=!x:this._totalTime+=q,this._time=o,this._rawPrevTime=0===q?u-1e-4:u,this._cycle=w,this._locked=!0,o=x?0:q,this.render(o,b,0===q),b||this._gc||this.vars.onRepeat&&(this._cycle=A,this._locked=!1,this._callback("onRepeat")),o!==this._time)return;if(y&&(this._cycle=w,this._locked=!0,o=x?q+1e-4:-1e-4,this.render(o,!0,!1)),this._locked=!1,this._paused&&!v)return;this._time=C,this._totalTime=z,this._cycle=A,this._rawPrevTime=B}if(!(this._time!==o&&this._first||c||k||m))return void(r!==this._totalTime&&this._onUpdate&&(b||this._callback("onUpdate")));if(this._initted||(this._initted=!0),this._active||!this._paused&&this._totalTime!==r&&a>0&&(this._active=!0),0===r&&this.vars.onStart&&(0===this._totalTime&&this._totalDuration||b||this._callback("onStart")),n=this._time,n>=o)for(d=this._first;d&&(i=d._next,n===this._time&&(!this._paused||v));)(d._active||d._startTime<=this._time&&!d._paused&&!d._gc)&&(m===d&&this.pause(),d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)),d=i;else for(d=this._last;d&&(i=d._prev,n===this._time&&(!this._paused||v));){if(d._active||d._startTime<=o&&!d._paused&&!d._gc){if(m===d){for(m=d._prev;m&&m.endTime()>this._time;)m.render(m._reversed?m.totalDuration()-(a-m._startTime)*m._timeScale:(a-m._startTime)*m._timeScale,b,c),m=m._prev;m=null,this.pause()}d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)}d=i}this._onUpdate&&(b||(g.length&&h(),this._callback("onUpdate"))),j&&(this._locked||this._gc||(s===this._startTime||t!==this._timeScale)&&(0===this._time||p>=this.totalDuration())&&(f&&(g.length&&h(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!b&&this.vars[j]&&this._callback(j)))},k.getActive=function(a,b,c){null==a&&(a=!0),null==b&&(b=!0),null==c&&(c=!1);var d,e,f=[],g=this.getChildren(a,b,c),h=0,i=g.length;for(d=0;i>d;d++)e=g[d],e.isActive()&&(f[h++]=e);return f},k.getLabelAfter=function(a){a||0!==a&&(a=this._time);var b,c=this.getLabelsArray(),d=c.length;for(b=0;d>b;b++)if(c[b].time>a)return c[b].name;return null},k.getLabelBefore=function(a){null==a&&(a=this._time);for(var b=this.getLabelsArray(),c=b.length;--c>-1;)if(b[c].time<a)return b[c].name;return null},k.getLabelsArray=function(){var a,b=[],c=0;for(a in this._labels)b[c++]={time:this._labels[a],name:a};return b.sort(function(a,b){return a.time-b.time}),b},k.invalidate=function(){return this._locked=!1,a.prototype.invalidate.call(this)},k.progress=function(a,b){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-a:a)+this._cycle*(this._duration+this._repeatDelay),b):this._time/this.duration()||0},k.totalProgress=function(a,b){return arguments.length?this.totalTime(this.totalDuration()*a,b):this._totalTime/this.totalDuration()||0},k.totalDuration=function(b){return arguments.length?-1!==this._repeat&&b?this.timeScale(this.totalDuration()/b):this:(this._dirty&&(a.prototype.totalDuration.call(this),this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat),this._totalDuration)},k.time=function(a,b){return arguments.length?(this._dirty&&this.totalDuration(),a>this._duration&&(a=this._duration),this._yoyo&&0!==(1&this._cycle)?a=this._duration-a+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(a+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(a,b)):this._time},k.repeat=function(a){return arguments.length?(this._repeat=a,this._uncache(!0)):this._repeat},k.repeatDelay=function(a){return arguments.length?(this._repeatDelay=a,this._uncache(!0)):this._repeatDelay},k.yoyo=function(a){return arguments.length?(this._yoyo=a,this):this._yoyo},k.currentLabel=function(a){return arguments.length?this.seek(a,!0):this.getLabelBefore(this._time+1e-8)},d},!0),_gsScope._gsDefine("TimelineLite",["core.Animation","core.SimpleTimeline","TweenLite"],function(a,b,c){var d=function(a){b.call(this,a),this._labels={},this.autoRemoveChildren=this.vars.autoRemoveChildren===!0,this.smoothChildTiming=this.vars.smoothChildTiming===!0,this._sortChildren=!0,this._onUpdate=this.vars.onUpdate;var c,d,e=this.vars;for(d in e)c=e[d],i(c)&&-1!==c.join("").indexOf("{self}")&&(e[d]=this._swapSelfInParams(c));i(e.tweens)&&this.add(e.tweens,0,e.align,e.stagger)},e=1e-10,f=c._internals,g=d._internals={},h=f.isSelector,i=f.isArray,j=f.lazyTweens,k=f.lazyRender,l=_gsScope._gsDefine.globals,m=function(a){var b,c={};for(b in a)c[b]=a[b];return c},n=function(a,b,c){var d,e,f=a.cycle;for(d in f)e=f[d],a[d]="function"==typeof e?e(c,b[c]):e[c%e.length];delete a.cycle},o=g.pauseCallback=function(){},p=function(a){var b,c=[],d=a.length;for(b=0;b!==d;c.push(a[b++]));return c},q=d.prototype=new b;return d.version="1.20.5",q.constructor=d,q.kill()._gc=q._forcingPlayhead=q._hasPause=!1,q.to=function(a,b,d,e){var f=d.repeat&&l.TweenMax||c;return b?this.add(new f(a,b,d),e):this.set(a,d,e)},q.from=function(a,b,d,e){return this.add((d.repeat&&l.TweenMax||c).from(a,b,d),e)},q.fromTo=function(a,b,d,e,f){var g=e.repeat&&l.TweenMax||c;return b?this.add(g.fromTo(a,b,d,e),f):this.set(a,e,f)},q.staggerTo=function(a,b,e,f,g,i,j,k){var l,o,q=new d({onComplete:i,onCompleteParams:j,callbackScope:k,smoothChildTiming:this.smoothChildTiming}),r=e.cycle;for("string"==typeof a&&(a=c.selector(a)||a),a=a||[],h(a)&&(a=p(a)),f=f||0,0>f&&(a=p(a),a.reverse(),f*=-1),o=0;o<a.length;o++)l=m(e),l.startAt&&(l.startAt=m(l.startAt),l.startAt.cycle&&n(l.startAt,a,o)),r&&(n(l,a,o),null!=l.duration&&(b=l.duration,delete l.duration)),q.to(a[o],b,l,o*f);return this.add(q,g)},q.staggerFrom=function(a,b,c,d,e,f,g,h){return c.immediateRender=0!=c.immediateRender,c.runBackwards=!0,this.staggerTo(a,b,c,d,e,f,g,h)},q.staggerFromTo=function(a,b,c,d,e,f,g,h,i){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,this.staggerTo(a,b,d,e,f,g,h,i)},q.call=function(a,b,d,e){return this.add(c.delayedCall(0,a,b,d),e)},q.set=function(a,b,d){return d=this._parseTimeOrLabel(d,0,!0),null==b.immediateRender&&(b.immediateRender=d===this._time&&!this._paused),this.add(new c(a,0,b),d)},d.exportRoot=function(a,b){a=a||{},null==a.smoothChildTiming&&(a.smoothChildTiming=!0);var e,f,g,h,i=new d(a),j=i._timeline;for(null==b&&(b=!0),j._remove(i,!0),i._startTime=0,i._rawPrevTime=i._time=i._totalTime=j._time,g=j._first;g;)h=g._next,b&&g instanceof c&&g.target===g.vars.onComplete||(f=g._startTime-g._delay,0>f&&(e=1),i.add(g,f)),g=h;return j.add(i,0),e&&i.totalDuration(),i},q.add=function(e,f,g,h){var j,k,l,m,n,o;if("number"!=typeof f&&(f=this._parseTimeOrLabel(f,0,!0,e)),!(e instanceof a)){if(e instanceof Array||e&&e.push&&i(e)){for(g=g||"normal",h=h||0,j=f,k=e.length,l=0;k>l;l++)i(m=e[l])&&(m=new d({tweens:m})),this.add(m,j),"string"!=typeof m&&"function"!=typeof m&&("sequence"===g?j=m._startTime+m.totalDuration()/m._timeScale:"start"===g&&(m._startTime-=m.delay())),j+=h;return this._uncache(!0)}if("string"==typeof e)return this.addLabel(e,f);if("function"!=typeof e)throw"Cannot add "+e+" into the timeline; it is not a tween, timeline, function, or string.";e=c.delayedCall(0,e)}if(b.prototype.add.call(this,e,f),e._time&&e.render((this.rawTime()-e._startTime)*e._timeScale,!1,!1),(this._gc||this._time===this._duration)&&!this._paused&&this._duration<this.duration())for(n=this,o=n.rawTime()>e._startTime;n._timeline;)o&&n._timeline.smoothChildTiming?n.totalTime(n._totalTime,!0):n._gc&&n._enabled(!0,!1),n=n._timeline;return this},q.remove=function(b){if(b instanceof a){this._remove(b,!1);var c=b._timeline=b.vars.useFrames?a._rootFramesTimeline:a._rootTimeline;return b._startTime=(b._paused?b._pauseTime:c._time)-(b._reversed?b.totalDuration()-b._totalTime:b._totalTime)/b._timeScale,this}if(b instanceof Array||b&&b.push&&i(b)){for(var d=b.length;--d>-1;)this.remove(b[d]);return this}return"string"==typeof b?this.removeLabel(b):this.kill(null,b)},q._remove=function(a,c){b.prototype._remove.call(this,a,c);var d=this._last;return d?this._time>this.duration()&&(this._time=this._duration,this._totalTime=this._totalDuration):this._time=this._totalTime=this._duration=this._totalDuration=0,this},q.append=function(a,b){return this.add(a,this._parseTimeOrLabel(null,b,!0,a))},q.insert=q.insertMultiple=function(a,b,c,d){return this.add(a,b||0,c,d)},q.appendMultiple=function(a,b,c,d){return this.add(a,this._parseTimeOrLabel(null,b,!0,a),c,d)},q.addLabel=function(a,b){return this._labels[a]=this._parseTimeOrLabel(b),this},q.addPause=function(a,b,d,e){var f=c.delayedCall(0,o,d,e||this);return f.vars.onComplete=f.vars.onReverseComplete=b,f.data="isPause",this._hasPause=!0,this.add(f,a)},q.removeLabel=function(a){return delete this._labels[a],this},q.getLabelTime=function(a){return null!=this._labels[a]?this._labels[a]:-1},q._parseTimeOrLabel=function(b,c,d,e){var f,g;if(e instanceof a&&e.timeline===this)this.remove(e);else if(e&&(e instanceof Array||e.push&&i(e)))for(g=e.length;--g>-1;)e[g]instanceof a&&e[g].timeline===this&&this.remove(e[g]);if(f="number"!=typeof b||c?this.duration()>99999999999?this.recent().endTime(!1):this._duration:0,"string"==typeof c)return this._parseTimeOrLabel(c,d&&"number"==typeof b&&null==this._labels[c]?b-f:0,d);if(c=c||0,"string"!=typeof b||!isNaN(b)&&null==this._labels[b])null==b&&(b=f);else{if(g=b.indexOf("="),-1===g)return null==this._labels[b]?d?this._labels[b]=f+c:c:this._labels[b]+c;c=parseInt(b.charAt(g-1)+"1",10)*Number(b.substr(g+1)),b=g>1?this._parseTimeOrLabel(b.substr(0,g-1),0,d):f}return Number(b)+c},q.seek=function(a,b){return this.totalTime("number"==typeof a?a:this._parseTimeOrLabel(a),b!==!1)},q.stop=function(){return this.paused(!0)},q.gotoAndPlay=function(a,b){return this.play(a,b)},q.gotoAndStop=function(a,b){return this.pause(a,b)},q.render=function(a,b,c){this._gc&&this._enabled(!0,!1);var d,f,g,h,i,l,m,n=this._dirty?this.totalDuration():this._totalDuration,o=this._time,p=this._startTime,q=this._timeScale,r=this._paused;if(a>=n-1e-7&&a>=0)this._totalTime=this._time=n,this._reversed||this._hasPausedChild()||(f=!0,h="onComplete",i=!!this._timeline.autoRemoveChildren,0===this._duration&&(0>=a&&a>=-1e-7||this._rawPrevTime<0||this._rawPrevTime===e)&&this._rawPrevTime!==a&&this._first&&(i=!0,this._rawPrevTime>e&&(h="onReverseComplete"))),this._rawPrevTime=this._duration||!b||a||this._rawPrevTime===a?a:e,a=n+1e-4;else if(1e-7>a)if(this._totalTime=this._time=0,(0!==o||0===this._duration&&this._rawPrevTime!==e&&(this._rawPrevTime>0||0>a&&this._rawPrevTime>=0))&&(h="onReverseComplete",f=this._reversed),0>a)this._active=!1,this._timeline.autoRemoveChildren&&this._reversed?(i=f=!0,h="onReverseComplete"):this._rawPrevTime>=0&&this._first&&(i=!0),this._rawPrevTime=a;else{if(this._rawPrevTime=this._duration||!b||a||this._rawPrevTime===a?a:e,0===a&&f)for(d=this._first;d&&0===d._startTime;)d._duration||(f=!1),d=d._next;a=0,this._initted||(i=!0)}else{if(this._hasPause&&!this._forcingPlayhead&&!b){if(a>=o)for(d=this._first;d&&d._startTime<=a&&!l;)d._duration||"isPause"!==d.data||d.ratio||0===d._startTime&&0===this._rawPrevTime||(l=d),d=d._next;else for(d=this._last;d&&d._startTime>=a&&!l;)d._duration||"isPause"===d.data&&d._rawPrevTime>0&&(l=d),d=d._prev;l&&(this._time=a=l._startTime,this._totalTime=a+this._cycle*(this._totalDuration+this._repeatDelay))}this._totalTime=this._time=this._rawPrevTime=a}if(this._time!==o&&this._first||c||i||l){if(this._initted||(this._initted=!0),this._active||!this._paused&&this._time!==o&&a>0&&(this._active=!0),0===o&&this.vars.onStart&&(0===this._time&&this._duration||b||this._callback("onStart")),m=this._time,m>=o)for(d=this._first;d&&(g=d._next,m===this._time&&(!this._paused||r));)(d._active||d._startTime<=m&&!d._paused&&!d._gc)&&(l===d&&this.pause(),d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)),d=g;else for(d=this._last;d&&(g=d._prev,m===this._time&&(!this._paused||r));){if(d._active||d._startTime<=o&&!d._paused&&!d._gc){if(l===d){for(l=d._prev;l&&l.endTime()>this._time;)l.render(l._reversed?l.totalDuration()-(a-l._startTime)*l._timeScale:(a-l._startTime)*l._timeScale,b,c),l=l._prev;l=null,this.pause()}d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)}d=g}this._onUpdate&&(b||(j.length&&k(),this._callback("onUpdate"))),h&&(this._gc||(p===this._startTime||q!==this._timeScale)&&(0===this._time||n>=this.totalDuration())&&(f&&(j.length&&k(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!b&&this.vars[h]&&this._callback(h)))}},q._hasPausedChild=function(){for(var a=this._first;a;){if(a._paused||a instanceof d&&a._hasPausedChild())return!0;a=a._next}return!1},q.getChildren=function(a,b,d,e){e=e||-9999999999;for(var f=[],g=this._first,h=0;g;)g._startTime<e||(g instanceof c?b!==!1&&(f[h++]=g):(d!==!1&&(f[h++]=g),a!==!1&&(f=f.concat(g.getChildren(!0,b,d)),h=f.length))),g=g._next;return f},q.getTweensOf=function(a,b){var d,e,f=this._gc,g=[],h=0;for(f&&this._enabled(!0,!0),d=c.getTweensOf(a),e=d.length;--e>-1;)(d[e].timeline===this||b&&this._contains(d[e]))&&(g[h++]=d[e]);return f&&this._enabled(!1,!0),g},q.recent=function(){return this._recent},q._contains=function(a){for(var b=a.timeline;b;){if(b===this)return!0;b=b.timeline}return!1},q.shiftChildren=function(a,b,c){c=c||0;for(var d,e=this._first,f=this._labels;e;)e._startTime>=c&&(e._startTime+=a),e=e._next;if(b)for(d in f)f[d]>=c&&(f[d]+=a);return this._uncache(!0)},q._kill=function(a,b){if(!a&&!b)return this._enabled(!1,!1);for(var c=b?this.getTweensOf(b):this.getChildren(!0,!0,!1),d=c.length,e=!1;--d>-1;)c[d]._kill(a,b)&&(e=!0);return e},q.clear=function(a){var b=this.getChildren(!1,!0,!0),c=b.length;for(this._time=this._totalTime=0;--c>-1;)b[c]._enabled(!1,!1);return a!==!1&&(this._labels={}),this._uncache(!0)},q.invalidate=function(){for(var b=this._first;b;)b.invalidate(),b=b._next;return a.prototype.invalidate.call(this)},q._enabled=function(a,c){if(a===this._gc)for(var d=this._first;d;)d._enabled(a,!0),d=d._next;return b.prototype._enabled.call(this,a,c)},q.totalTime=function(b,c,d){this._forcingPlayhead=!0;var e=a.prototype.totalTime.apply(this,arguments);return this._forcingPlayhead=!1,e},q.duration=function(a){return arguments.length?(0!==this.duration()&&0!==a&&this.timeScale(this._duration/a),this):(this._dirty&&this.totalDuration(),this._duration)},q.totalDuration=function(a){if(!arguments.length){if(this._dirty){for(var b,c,d=0,e=this._last,f=999999999999;e;)b=e._prev,e._dirty&&e.totalDuration(),e._startTime>f&&this._sortChildren&&!e._paused&&!this._calculatingDuration?(this._calculatingDuration=1,this.add(e,e._startTime-e._delay),this._calculatingDuration=0):f=e._startTime,e._startTime<0&&!e._paused&&(d-=e._startTime,this._timeline.smoothChildTiming&&(this._startTime+=e._startTime/this._timeScale,this._time-=e._startTime,this._totalTime-=e._startTime,this._rawPrevTime-=e._startTime),this.shiftChildren(-e._startTime,!1,-9999999999),f=0),c=e._startTime+e._totalDuration/e._timeScale,c>d&&(d=c),e=b;this._duration=this._totalDuration=d,this._dirty=!1}return this._totalDuration}return a&&this.totalDuration()?this.timeScale(this._totalDuration/a):this},q.paused=function(b){if(!b)for(var c=this._first,d=this._time;c;)c._startTime===d&&"isPause"===c.data&&(c._rawPrevTime=0),c=c._next;return a.prototype.paused.apply(this,arguments)},q.usesFrames=function(){for(var b=this._timeline;b._timeline;)b=b._timeline;return b===a._rootFramesTimeline},q.rawTime=function(a){return a&&(this._paused||this._repeat&&this.time()>0&&this.totalProgress()<1)?this._totalTime%(this._duration+this._repeatDelay):this._paused?this._totalTime:(this._timeline.rawTime(a)-this._startTime)*this._timeScale},d},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(a){"use strict";var b=function(){return(_gsScope.GreenSockGlobals||_gsScope)[a]};"undefined"!=typeof module&&module.exports?(__webpack_require__(14),module.exports=b()):"function"=="function"&&__webpack_require__(4)&&!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(3)], __WEBPACK_AMD_DEFINE_FACTORY__ = (b), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))}("TimelineMax");
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(global) {/*!
	 * VERSION: 1.20.5
	 * DATE: 2018-05-21
	 * UPDATES AND DOCS AT: http://greensock.com
	 *
	 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
	 * This work is subject to the terms at http://greensock.com/standard-license or for
	 * Club GreenSock members, the software agreement that was issued with your membership.
	 * 
	 * @author: Jack Doyle, jack@greensock.com
	 */
	!function(a,b){"use strict";var c={},d=a.document,e=a.GreenSockGlobals=a.GreenSockGlobals||a;if(e.TweenLite)return e.TweenLite;var f,g,h,i,j,k=function(a){var b,c=a.split("."),d=e;for(b=0;b<c.length;b++)d[c[b]]=d=d[c[b]]||{};return d},l=k("com.greensock"),m=1e-10,n=function(a){var b,c=[],d=a.length;for(b=0;b!==d;c.push(a[b++]));return c},o=function(){},p=function(){var a=Object.prototype.toString,b=a.call([]);return function(c){return null!=c&&(c instanceof Array||"object"==typeof c&&!!c.push&&a.call(c)===b)}}(),q={},r=function(d,f,g,h){this.sc=q[d]?q[d].sc:[],q[d]=this,this.gsClass=null,this.func=g;var i=[];this.check=function(j){for(var l,m,n,o,p=f.length,s=p;--p>-1;)(l=q[f[p]]||new r(f[p],[])).gsClass?(i[p]=l.gsClass,s--):j&&l.sc.push(this);if(0===s&&g){if(m=("com.greensock."+d).split("."),n=m.pop(),o=k(m.join("."))[n]=this.gsClass=g.apply(g,i),h)if(e[n]=c[n]=o,"undefined"!=typeof module&&module.exports)if(d===b){module.exports=c[b]=o;for(p in c)o[p]=c[p]}else c[b]&&(c[b][n]=o);else"function"=="function"&&__webpack_require__(4)&&!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function(){return o}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));for(p=0;p<this.sc.length;p++)this.sc[p].check()}},this.check(!0)},s=a._gsDefine=function(a,b,c,d){return new r(a,b,c,d)},t=l._class=function(a,b,c){return b=b||function(){},s(a,[],function(){return b},c),b};s.globals=e;var u=[0,0,1,1],v=t("easing.Ease",function(a,b,c,d){this._func=a,this._type=c||0,this._power=d||0,this._params=b?u.concat(b):u},!0),w=v.map={},x=v.register=function(a,b,c,d){for(var e,f,g,h,i=b.split(","),j=i.length,k=(c||"easeIn,easeOut,easeInOut").split(",");--j>-1;)for(f=i[j],e=d?t("easing."+f,null,!0):l.easing[f]||{},g=k.length;--g>-1;)h=k[g],w[f+"."+h]=w[h+f]=e[h]=a.getRatio?a:a[h]||new a};for(h=v.prototype,h._calcEnd=!1,h.getRatio=function(a){if(this._func)return this._params[0]=a,this._func.apply(null,this._params);var b=this._type,c=this._power,d=1===b?1-a:2===b?a:.5>a?2*a:2*(1-a);return 1===c?d*=d:2===c?d*=d*d:3===c?d*=d*d*d:4===c&&(d*=d*d*d*d),1===b?1-d:2===b?d:.5>a?d/2:1-d/2},f=["Linear","Quad","Cubic","Quart","Quint,Strong"],g=f.length;--g>-1;)h=f[g]+",Power"+g,x(new v(null,null,1,g),h,"easeOut",!0),x(new v(null,null,2,g),h,"easeIn"+(0===g?",easeNone":"")),x(new v(null,null,3,g),h,"easeInOut");w.linear=l.easing.Linear.easeIn,w.swing=l.easing.Quad.easeInOut;var y=t("events.EventDispatcher",function(a){this._listeners={},this._eventTarget=a||this});h=y.prototype,h.addEventListener=function(a,b,c,d,e){e=e||0;var f,g,h=this._listeners[a],k=0;for(this!==i||j||i.wake(),null==h&&(this._listeners[a]=h=[]),g=h.length;--g>-1;)f=h[g],f.c===b&&f.s===c?h.splice(g,1):0===k&&f.pr<e&&(k=g+1);h.splice(k,0,{c:b,s:c,up:d,pr:e})},h.removeEventListener=function(a,b){var c,d=this._listeners[a];if(d)for(c=d.length;--c>-1;)if(d[c].c===b)return void d.splice(c,1)},h.dispatchEvent=function(a){var b,c,d,e=this._listeners[a];if(e)for(b=e.length,b>1&&(e=e.slice(0)),c=this._eventTarget;--b>-1;)d=e[b],d&&(d.up?d.c.call(d.s||c,{type:a,target:c}):d.c.call(d.s||c))};var z=a.requestAnimationFrame,A=a.cancelAnimationFrame,B=Date.now||function(){return(new Date).getTime()},C=B();for(f=["ms","moz","webkit","o"],g=f.length;--g>-1&&!z;)z=a[f[g]+"RequestAnimationFrame"],A=a[f[g]+"CancelAnimationFrame"]||a[f[g]+"CancelRequestAnimationFrame"];t("Ticker",function(a,b){var c,e,f,g,h,k=this,l=B(),n=b!==!1&&z?"auto":!1,p=500,q=33,r="tick",s=function(a){var b,d,i=B()-C;i>p&&(l+=i-q),C+=i,k.time=(C-l)/1e3,b=k.time-h,(!c||b>0||a===!0)&&(k.frame++,h+=b+(b>=g?.004:g-b),d=!0),a!==!0&&(f=e(s)),d&&k.dispatchEvent(r)};y.call(k),k.time=k.frame=0,k.tick=function(){s(!0)},k.lagSmoothing=function(a,b){return arguments.length?(p=a||1/m,void(q=Math.min(b,p,0))):1/m>p},k.sleep=function(){null!=f&&(n&&A?A(f):clearTimeout(f),e=o,f=null,k===i&&(j=!1))},k.wake=function(a){null!==f?k.sleep():a?l+=-C+(C=B()):k.frame>10&&(C=B()-p+5),e=0===c?o:n&&z?z:function(a){return setTimeout(a,1e3*(h-k.time)+1|0)},k===i&&(j=!0),s(2)},k.fps=function(a){return arguments.length?(c=a,g=1/(c||60),h=this.time+g,void k.wake()):c},k.useRAF=function(a){return arguments.length?(k.sleep(),n=a,void k.fps(c)):n},k.fps(a),setTimeout(function(){"auto"===n&&k.frame<5&&"hidden"!==(d||{}).visibilityState&&k.useRAF(!1)},1500)}),h=l.Ticker.prototype=new l.events.EventDispatcher,h.constructor=l.Ticker;var D=t("core.Animation",function(a,b){if(this.vars=b=b||{},this._duration=this._totalDuration=a||0,this._delay=Number(b.delay)||0,this._timeScale=1,this._active=b.immediateRender===!0,this.data=b.data,this._reversed=b.reversed===!0,X){j||i.wake();var c=this.vars.useFrames?W:X;c.add(this,c._time),this.vars.paused&&this.paused(!0)}});i=D.ticker=new l.Ticker,h=D.prototype,h._dirty=h._gc=h._initted=h._paused=!1,h._totalTime=h._time=0,h._rawPrevTime=-1,h._next=h._last=h._onUpdate=h._timeline=h.timeline=null,h._paused=!1;var E=function(){j&&B()-C>2e3&&("hidden"!==(d||{}).visibilityState||!i.lagSmoothing())&&i.wake();var a=setTimeout(E,2e3);a.unref&&a.unref()};E(),h.play=function(a,b){return null!=a&&this.seek(a,b),this.reversed(!1).paused(!1)},h.pause=function(a,b){return null!=a&&this.seek(a,b),this.paused(!0)},h.resume=function(a,b){return null!=a&&this.seek(a,b),this.paused(!1)},h.seek=function(a,b){return this.totalTime(Number(a),b!==!1)},h.restart=function(a,b){return this.reversed(!1).paused(!1).totalTime(a?-this._delay:0,b!==!1,!0)},h.reverse=function(a,b){return null!=a&&this.seek(a||this.totalDuration(),b),this.reversed(!0).paused(!1)},h.render=function(a,b,c){},h.invalidate=function(){return this._time=this._totalTime=0,this._initted=this._gc=!1,this._rawPrevTime=-1,(this._gc||!this.timeline)&&this._enabled(!0),this},h.isActive=function(){var a,b=this._timeline,c=this._startTime;return!b||!this._gc&&!this._paused&&b.isActive()&&(a=b.rawTime(!0))>=c&&a<c+this.totalDuration()/this._timeScale-1e-7},h._enabled=function(a,b){return j||i.wake(),this._gc=!a,this._active=this.isActive(),b!==!0&&(a&&!this.timeline?this._timeline.add(this,this._startTime-this._delay):!a&&this.timeline&&this._timeline._remove(this,!0)),!1},h._kill=function(a,b){return this._enabled(!1,!1)},h.kill=function(a,b){return this._kill(a,b),this},h._uncache=function(a){for(var b=a?this:this.timeline;b;)b._dirty=!0,b=b.timeline;return this},h._swapSelfInParams=function(a){for(var b=a.length,c=a.concat();--b>-1;)"{self}"===a[b]&&(c[b]=this);return c},h._callback=function(a){var b=this.vars,c=b[a],d=b[a+"Params"],e=b[a+"Scope"]||b.callbackScope||this,f=d?d.length:0;switch(f){case 0:c.call(e);break;case 1:c.call(e,d[0]);break;case 2:c.call(e,d[0],d[1]);break;default:c.apply(e,d)}},h.eventCallback=function(a,b,c,d){if("on"===(a||"").substr(0,2)){var e=this.vars;if(1===arguments.length)return e[a];null==b?delete e[a]:(e[a]=b,e[a+"Params"]=p(c)&&-1!==c.join("").indexOf("{self}")?this._swapSelfInParams(c):c,e[a+"Scope"]=d),"onUpdate"===a&&(this._onUpdate=b)}return this},h.delay=function(a){return arguments.length?(this._timeline.smoothChildTiming&&this.startTime(this._startTime+a-this._delay),this._delay=a,this):this._delay},h.duration=function(a){return arguments.length?(this._duration=this._totalDuration=a,this._uncache(!0),this._timeline.smoothChildTiming&&this._time>0&&this._time<this._duration&&0!==a&&this.totalTime(this._totalTime*(a/this._duration),!0),this):(this._dirty=!1,this._duration)},h.totalDuration=function(a){return this._dirty=!1,arguments.length?this.duration(a):this._totalDuration},h.time=function(a,b){return arguments.length?(this._dirty&&this.totalDuration(),this.totalTime(a>this._duration?this._duration:a,b)):this._time},h.totalTime=function(a,b,c){if(j||i.wake(),!arguments.length)return this._totalTime;if(this._timeline){if(0>a&&!c&&(a+=this.totalDuration()),this._timeline.smoothChildTiming){this._dirty&&this.totalDuration();var d=this._totalDuration,e=this._timeline;if(a>d&&!c&&(a=d),this._startTime=(this._paused?this._pauseTime:e._time)-(this._reversed?d-a:a)/this._timeScale,e._dirty||this._uncache(!1),e._timeline)for(;e._timeline;)e._timeline._time!==(e._startTime+e._totalTime)/e._timeScale&&e.totalTime(e._totalTime,!0),e=e._timeline}this._gc&&this._enabled(!0,!1),(this._totalTime!==a||0===this._duration)&&(J.length&&Z(),this.render(a,b,!1),J.length&&Z())}return this},h.progress=h.totalProgress=function(a,b){var c=this.duration();return arguments.length?this.totalTime(c*a,b):c?this._time/c:this.ratio},h.startTime=function(a){return arguments.length?(a!==this._startTime&&(this._startTime=a,this.timeline&&this.timeline._sortChildren&&this.timeline.add(this,a-this._delay)),this):this._startTime},h.endTime=function(a){return this._startTime+(0!=a?this.totalDuration():this.duration())/this._timeScale},h.timeScale=function(a){if(!arguments.length)return this._timeScale;var b,c;for(a=a||m,this._timeline&&this._timeline.smoothChildTiming&&(b=this._pauseTime,c=b||0===b?b:this._timeline.totalTime(),this._startTime=c-(c-this._startTime)*this._timeScale/a),this._timeScale=a,c=this.timeline;c&&c.timeline;)c._dirty=!0,c.totalDuration(),c=c.timeline;return this},h.reversed=function(a){return arguments.length?(a!=this._reversed&&(this._reversed=a,this.totalTime(this._timeline&&!this._timeline.smoothChildTiming?this.totalDuration()-this._totalTime:this._totalTime,!0)),this):this._reversed},h.paused=function(a){if(!arguments.length)return this._paused;var b,c,d=this._timeline;return a!=this._paused&&d&&(j||a||i.wake(),b=d.rawTime(),c=b-this._pauseTime,!a&&d.smoothChildTiming&&(this._startTime+=c,this._uncache(!1)),this._pauseTime=a?b:null,this._paused=a,this._active=this.isActive(),!a&&0!==c&&this._initted&&this.duration()&&(b=d.smoothChildTiming?this._totalTime:(b-this._startTime)/this._timeScale,this.render(b,b===this._totalTime,!0))),this._gc&&!a&&this._enabled(!0,!1),this};var F=t("core.SimpleTimeline",function(a){D.call(this,0,a),this.autoRemoveChildren=this.smoothChildTiming=!0});h=F.prototype=new D,h.constructor=F,h.kill()._gc=!1,h._first=h._last=h._recent=null,h._sortChildren=!1,h.add=h.insert=function(a,b,c,d){var e,f;if(a._startTime=Number(b||0)+a._delay,a._paused&&this!==a._timeline&&(a._pauseTime=this.rawTime()-(a._timeline.rawTime()-a._pauseTime)),a.timeline&&a.timeline._remove(a,!0),a.timeline=a._timeline=this,a._gc&&a._enabled(!0,!0),e=this._last,this._sortChildren)for(f=a._startTime;e&&e._startTime>f;)e=e._prev;return e?(a._next=e._next,e._next=a):(a._next=this._first,this._first=a),a._next?a._next._prev=a:this._last=a,a._prev=e,this._recent=a,this._timeline&&this._uncache(!0),this},h._remove=function(a,b){return a.timeline===this&&(b||a._enabled(!1,!0),a._prev?a._prev._next=a._next:this._first===a&&(this._first=a._next),a._next?a._next._prev=a._prev:this._last===a&&(this._last=a._prev),a._next=a._prev=a.timeline=null,a===this._recent&&(this._recent=this._last),this._timeline&&this._uncache(!0)),this},h.render=function(a,b,c){var d,e=this._first;for(this._totalTime=this._time=this._rawPrevTime=a;e;)d=e._next,(e._active||a>=e._startTime&&!e._paused&&!e._gc)&&(e._reversed?e.render((e._dirty?e.totalDuration():e._totalDuration)-(a-e._startTime)*e._timeScale,b,c):e.render((a-e._startTime)*e._timeScale,b,c)),e=d},h.rawTime=function(){return j||i.wake(),this._totalTime};var G=t("TweenLite",function(b,c,d){if(D.call(this,c,d),this.render=G.prototype.render,null==b)throw"Cannot tween a null target.";this.target=b="string"!=typeof b?b:G.selector(b)||b;var e,f,g,h=b.jquery||b.length&&b!==a&&b[0]&&(b[0]===a||b[0].nodeType&&b[0].style&&!b.nodeType),i=this.vars.overwrite;if(this._overwrite=i=null==i?V[G.defaultOverwrite]:"number"==typeof i?i>>0:V[i],(h||b instanceof Array||b.push&&p(b))&&"number"!=typeof b[0])for(this._targets=g=n(b),this._propLookup=[],this._siblings=[],e=0;e<g.length;e++)f=g[e],f?"string"!=typeof f?f.length&&f!==a&&f[0]&&(f[0]===a||f[0].nodeType&&f[0].style&&!f.nodeType)?(g.splice(e--,1),this._targets=g=g.concat(n(f))):(this._siblings[e]=$(f,this,!1),1===i&&this._siblings[e].length>1&&aa(f,this,null,1,this._siblings[e])):(f=g[e--]=G.selector(f),"string"==typeof f&&g.splice(e+1,1)):g.splice(e--,1);else this._propLookup={},this._siblings=$(b,this,!1),1===i&&this._siblings.length>1&&aa(b,this,null,1,this._siblings);(this.vars.immediateRender||0===c&&0===this._delay&&this.vars.immediateRender!==!1)&&(this._time=-m,this.render(Math.min(0,-this._delay)))},!0),H=function(b){return b&&b.length&&b!==a&&b[0]&&(b[0]===a||b[0].nodeType&&b[0].style&&!b.nodeType)},I=function(a,b){var c,d={};for(c in a)U[c]||c in b&&"transform"!==c&&"x"!==c&&"y"!==c&&"width"!==c&&"height"!==c&&"className"!==c&&"border"!==c||!(!R[c]||R[c]&&R[c]._autoCSS)||(d[c]=a[c],delete a[c]);a.css=d};h=G.prototype=new D,h.constructor=G,h.kill()._gc=!1,h.ratio=0,h._firstPT=h._targets=h._overwrittenProps=h._startAt=null,h._notifyPluginsOfEnabled=h._lazy=!1,G.version="1.20.5",G.defaultEase=h._ease=new v(null,null,1,1),G.defaultOverwrite="auto",G.ticker=i,G.autoSleep=120,G.lagSmoothing=function(a,b){i.lagSmoothing(a,b)},G.selector=a.$||a.jQuery||function(b){var c=a.$||a.jQuery;return c?(G.selector=c,c(b)):(d||(d=a.document),d?d.querySelectorAll?d.querySelectorAll(b):d.getElementById("#"===b.charAt(0)?b.substr(1):b):b)};var J=[],K={},L=/(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,M=/[\+-]=-?[\.\d]/,N=function(a){for(var b,c=this._firstPT,d=1e-6;c;)b=c.blob?1===a&&null!=this.end?this.end:a?this.join(""):this.start:c.c*a+c.s,c.m?b=c.m.call(this._tween,b,this._target||c.t,this._tween):d>b&&b>-d&&!c.blob&&(b=0),c.f?c.fp?c.t[c.p](c.fp,b):c.t[c.p](b):c.t[c.p]=b,c=c._next},O=function(a,b,c,d){var e,f,g,h,i,j,k,l=[],m=0,n="",o=0;for(l.start=a,l.end=b,a=l[0]=a+"",b=l[1]=b+"",c&&(c(l),a=l[0],b=l[1]),l.length=0,e=a.match(L)||[],f=b.match(L)||[],d&&(d._next=null,d.blob=1,l._firstPT=l._applyPT=d),i=f.length,h=0;i>h;h++)k=f[h],j=b.substr(m,b.indexOf(k,m)-m),n+=j||!h?j:",",m+=j.length,o?o=(o+1)%5:"rgba("===j.substr(-5)&&(o=1),k===e[h]||e.length<=h?n+=k:(n&&(l.push(n),n=""),g=parseFloat(e[h]),l.push(g),l._firstPT={_next:l._firstPT,t:l,p:l.length-1,s:g,c:("="===k.charAt(1)?parseInt(k.charAt(0)+"1",10)*parseFloat(k.substr(2)):parseFloat(k)-g)||0,f:0,m:o&&4>o?Math.round:0}),m+=k.length;return n+=b.substr(m),n&&l.push(n),l.setRatio=N,M.test(b)&&(l.end=null),l},P=function(a,b,c,d,e,f,g,h,i){"function"==typeof d&&(d=d(i||0,a));var j,k=typeof a[b],l="function"!==k?"":b.indexOf("set")||"function"!=typeof a["get"+b.substr(3)]?b:"get"+b.substr(3),m="get"!==c?c:l?g?a[l](g):a[l]():a[b],n="string"==typeof d&&"="===d.charAt(1),o={t:a,p:b,s:m,f:"function"===k,pg:0,n:e||b,m:f?"function"==typeof f?f:Math.round:0,pr:0,c:n?parseInt(d.charAt(0)+"1",10)*parseFloat(d.substr(2)):parseFloat(d)-m||0};return("number"!=typeof m||"number"!=typeof d&&!n)&&(g||isNaN(m)||!n&&isNaN(d)||"boolean"==typeof m||"boolean"==typeof d?(o.fp=g,j=O(m,n?parseFloat(o.s)+o.c+(o.s+"").replace(/[0-9\-\.]/g,""):d,h||G.defaultStringFilter,o),o={t:j,p:"setRatio",s:0,c:1,f:2,pg:0,n:e||b,pr:0,m:0}):(o.s=parseFloat(m),n||(o.c=parseFloat(d)-o.s||0))),o.c?((o._next=this._firstPT)&&(o._next._prev=o),this._firstPT=o,o):void 0},Q=G._internals={isArray:p,isSelector:H,lazyTweens:J,blobDif:O},R=G._plugins={},S=Q.tweenLookup={},T=0,U=Q.reservedProps={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1,lazy:1,onOverwrite:1,callbackScope:1,stringFilter:1,id:1,yoyoEase:1},V={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,"true":1,"false":0},W=D._rootFramesTimeline=new F,X=D._rootTimeline=new F,Y=30,Z=Q.lazyRender=function(){var a,b=J.length;for(K={};--b>-1;)a=J[b],a&&a._lazy!==!1&&(a.render(a._lazy[0],a._lazy[1],!0),a._lazy=!1);J.length=0};X._startTime=i.time,W._startTime=i.frame,X._active=W._active=!0,setTimeout(Z,1),D._updateRoot=G.render=function(){var a,b,c;if(J.length&&Z(),X.render((i.time-X._startTime)*X._timeScale,!1,!1),W.render((i.frame-W._startTime)*W._timeScale,!1,!1),J.length&&Z(),i.frame>=Y){Y=i.frame+(parseInt(G.autoSleep,10)||120);for(c in S){for(b=S[c].tweens,a=b.length;--a>-1;)b[a]._gc&&b.splice(a,1);0===b.length&&delete S[c]}if(c=X._first,(!c||c._paused)&&G.autoSleep&&!W._first&&1===i._listeners.tick.length){for(;c&&c._paused;)c=c._next;c||i.sleep()}}},i.addEventListener("tick",D._updateRoot);var $=function(a,b,c){var d,e,f=a._gsTweenID;if(S[f||(a._gsTweenID=f="t"+T++)]||(S[f]={target:a,tweens:[]}),b&&(d=S[f].tweens,d[e=d.length]=b,c))for(;--e>-1;)d[e]===b&&d.splice(e,1);return S[f].tweens},_=function(a,b,c,d){var e,f,g=a.vars.onOverwrite;return g&&(e=g(a,b,c,d)),g=G.onOverwrite,g&&(f=g(a,b,c,d)),e!==!1&&f!==!1},aa=function(a,b,c,d,e){var f,g,h,i;if(1===d||d>=4){for(i=e.length,f=0;i>f;f++)if((h=e[f])!==b)h._gc||h._kill(null,a,b)&&(g=!0);else if(5===d)break;return g}var j,k=b._startTime+m,l=[],n=0,o=0===b._duration;for(f=e.length;--f>-1;)(h=e[f])===b||h._gc||h._paused||(h._timeline!==b._timeline?(j=j||ba(b,0,o),0===ba(h,j,o)&&(l[n++]=h)):h._startTime<=k&&h._startTime+h.totalDuration()/h._timeScale>k&&((o||!h._initted)&&k-h._startTime<=2e-10||(l[n++]=h)));for(f=n;--f>-1;)if(h=l[f],2===d&&h._kill(c,a,b)&&(g=!0),2!==d||!h._firstPT&&h._initted){if(2!==d&&!_(h,b))continue;h._enabled(!1,!1)&&(g=!0)}return g},ba=function(a,b,c){for(var d=a._timeline,e=d._timeScale,f=a._startTime;d._timeline;){if(f+=d._startTime,e*=d._timeScale,d._paused)return-100;d=d._timeline}return f/=e,f>b?f-b:c&&f===b||!a._initted&&2*m>f-b?m:(f+=a.totalDuration()/a._timeScale/e)>b+m?0:f-b-m};h._init=function(){var a,b,c,d,e,f,g=this.vars,h=this._overwrittenProps,i=this._duration,j=!!g.immediateRender,k=g.ease;if(g.startAt){this._startAt&&(this._startAt.render(-1,!0),this._startAt.kill()),e={};for(d in g.startAt)e[d]=g.startAt[d];if(e.data="isStart",e.overwrite=!1,e.immediateRender=!0,e.lazy=j&&g.lazy!==!1,e.startAt=e.delay=null,e.onUpdate=g.onUpdate,e.onUpdateParams=g.onUpdateParams,e.onUpdateScope=g.onUpdateScope||g.callbackScope||this,this._startAt=G.to(this.target||{},0,e),j)if(this._time>0)this._startAt=null;else if(0!==i)return}else if(g.runBackwards&&0!==i)if(this._startAt)this._startAt.render(-1,!0),this._startAt.kill(),this._startAt=null;else{0!==this._time&&(j=!1),c={};for(d in g)U[d]&&"autoCSS"!==d||(c[d]=g[d]);if(c.overwrite=0,c.data="isFromStart",c.lazy=j&&g.lazy!==!1,c.immediateRender=j,this._startAt=G.to(this.target,0,c),j){if(0===this._time)return}else this._startAt._init(),this._startAt._enabled(!1),this.vars.immediateRender&&(this._startAt=null)}if(this._ease=k=k?k instanceof v?k:"function"==typeof k?new v(k,g.easeParams):w[k]||G.defaultEase:G.defaultEase,g.easeParams instanceof Array&&k.config&&(this._ease=k.config.apply(k,g.easeParams)),this._easeType=this._ease._type,this._easePower=this._ease._power,this._firstPT=null,this._targets)for(f=this._targets.length,a=0;f>a;a++)this._initProps(this._targets[a],this._propLookup[a]={},this._siblings[a],h?h[a]:null,a)&&(b=!0);else b=this._initProps(this.target,this._propLookup,this._siblings,h,0);if(b&&G._onPluginEvent("_onInitAllProps",this),h&&(this._firstPT||"function"!=typeof this.target&&this._enabled(!1,!1)),g.runBackwards)for(c=this._firstPT;c;)c.s+=c.c,c.c=-c.c,c=c._next;this._onUpdate=g.onUpdate,this._initted=!0},h._initProps=function(b,c,d,e,f){var g,h,i,j,k,l;if(null==b)return!1;K[b._gsTweenID]&&Z(),this.vars.css||b.style&&b!==a&&b.nodeType&&R.css&&this.vars.autoCSS!==!1&&I(this.vars,b);for(g in this.vars)if(l=this.vars[g],U[g])l&&(l instanceof Array||l.push&&p(l))&&-1!==l.join("").indexOf("{self}")&&(this.vars[g]=l=this._swapSelfInParams(l,this));else if(R[g]&&(j=new R[g])._onInitTween(b,this.vars[g],this,f)){for(this._firstPT=k={_next:this._firstPT,t:j,p:"setRatio",s:0,c:1,f:1,n:g,pg:1,pr:j._priority,m:0},h=j._overwriteProps.length;--h>-1;)c[j._overwriteProps[h]]=this._firstPT;(j._priority||j._onInitAllProps)&&(i=!0),(j._onDisable||j._onEnable)&&(this._notifyPluginsOfEnabled=!0),k._next&&(k._next._prev=k)}else c[g]=P.call(this,b,g,"get",l,g,0,null,this.vars.stringFilter,f);return e&&this._kill(e,b)?this._initProps(b,c,d,e,f):this._overwrite>1&&this._firstPT&&d.length>1&&aa(b,this,c,this._overwrite,d)?(this._kill(c,b),this._initProps(b,c,d,e,f)):(this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration)&&(K[b._gsTweenID]=!0),i)},h.render=function(a,b,c){var d,e,f,g,h=this._time,i=this._duration,j=this._rawPrevTime;if(a>=i-1e-7&&a>=0)this._totalTime=this._time=i,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1,this._reversed||(d=!0,e="onComplete",c=c||this._timeline.autoRemoveChildren),0===i&&(this._initted||!this.vars.lazy||c)&&(this._startTime===this._timeline._duration&&(a=0),(0>j||0>=a&&a>=-1e-7||j===m&&"isPause"!==this.data)&&j!==a&&(c=!0,j>m&&(e="onReverseComplete")),this._rawPrevTime=g=!b||a||j===a?a:m);else if(1e-7>a)this._totalTime=this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==h||0===i&&j>0)&&(e="onReverseComplete",d=this._reversed),0>a&&(this._active=!1,0===i&&(this._initted||!this.vars.lazy||c)&&(j>=0&&(j!==m||"isPause"!==this.data)&&(c=!0),this._rawPrevTime=g=!b||a||j===a?a:m)),(!this._initted||this._startAt&&this._startAt.progress())&&(c=!0);else if(this._totalTime=this._time=a,this._easeType){var k=a/i,l=this._easeType,n=this._easePower;(1===l||3===l&&k>=.5)&&(k=1-k),3===l&&(k*=2),1===n?k*=k:2===n?k*=k*k:3===n?k*=k*k*k:4===n&&(k*=k*k*k*k),1===l?this.ratio=1-k:2===l?this.ratio=k:.5>a/i?this.ratio=k/2:this.ratio=1-k/2}else this.ratio=this._ease.getRatio(a/i);if(this._time!==h||c){if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!c&&this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration))return this._time=this._totalTime=h,this._rawPrevTime=j,J.push(this),void(this._lazy=[a,b]);this._time&&!d?this.ratio=this._ease.getRatio(this._time/i):d&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._lazy!==!1&&(this._lazy=!1),this._active||!this._paused&&this._time!==h&&a>=0&&(this._active=!0),0===h&&(this._startAt&&(a>=0?this._startAt.render(a,!0,c):e||(e="_dummyGS")),this.vars.onStart&&(0!==this._time||0===i)&&(b||this._callback("onStart"))),f=this._firstPT;f;)f.f?f.t[f.p](f.c*this.ratio+f.s):f.t[f.p]=f.c*this.ratio+f.s,f=f._next;this._onUpdate&&(0>a&&this._startAt&&a!==-1e-4&&this._startAt.render(a,!0,c),b||(this._time!==h||d||c)&&this._callback("onUpdate")),e&&(!this._gc||c)&&(0>a&&this._startAt&&!this._onUpdate&&a!==-1e-4&&this._startAt.render(a,!0,c),d&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!b&&this.vars[e]&&this._callback(e),0===i&&this._rawPrevTime===m&&g!==m&&(this._rawPrevTime=0))}},h._kill=function(a,b,c){if("all"===a&&(a=null),null==a&&(null==b||b===this.target))return this._lazy=!1,this._enabled(!1,!1);b="string"!=typeof b?b||this._targets||this.target:G.selector(b)||b;var d,e,f,g,h,i,j,k,l,m=c&&this._time&&c._startTime===this._startTime&&this._timeline===c._timeline;if((p(b)||H(b))&&"number"!=typeof b[0])for(d=b.length;--d>-1;)this._kill(a,b[d],c)&&(i=!0);else{if(this._targets){for(d=this._targets.length;--d>-1;)if(b===this._targets[d]){h=this._propLookup[d]||{},this._overwrittenProps=this._overwrittenProps||[],e=this._overwrittenProps[d]=a?this._overwrittenProps[d]||{}:"all";break}}else{if(b!==this.target)return!1;h=this._propLookup,e=this._overwrittenProps=a?this._overwrittenProps||{}:"all"}if(h){if(j=a||h,k=a!==e&&"all"!==e&&a!==h&&("object"!=typeof a||!a._tempKill),c&&(G.onOverwrite||this.vars.onOverwrite)){for(f in j)h[f]&&(l||(l=[]),l.push(f));if((l||!a)&&!_(this,c,b,l))return!1}for(f in j)(g=h[f])&&(m&&(g.f?g.t[g.p](g.s):g.t[g.p]=g.s,i=!0),g.pg&&g.t._kill(j)&&(i=!0),g.pg&&0!==g.t._overwriteProps.length||(g._prev?g._prev._next=g._next:g===this._firstPT&&(this._firstPT=g._next),g._next&&(g._next._prev=g._prev),g._next=g._prev=null),delete h[f]),k&&(e[f]=1);!this._firstPT&&this._initted&&this._enabled(!1,!1)}}return i},h.invalidate=function(){return this._notifyPluginsOfEnabled&&G._onPluginEvent("_onDisable",this),this._firstPT=this._overwrittenProps=this._startAt=this._onUpdate=null,this._notifyPluginsOfEnabled=this._active=this._lazy=!1,this._propLookup=this._targets?{}:[],D.prototype.invalidate.call(this),this.vars.immediateRender&&(this._time=-m,this.render(Math.min(0,-this._delay))),this},h._enabled=function(a,b){if(j||i.wake(),a&&this._gc){var c,d=this._targets;if(d)for(c=d.length;--c>-1;)this._siblings[c]=$(d[c],this,!0);else this._siblings=$(this.target,this,!0)}return D.prototype._enabled.call(this,a,b),this._notifyPluginsOfEnabled&&this._firstPT?G._onPluginEvent(a?"_onEnable":"_onDisable",this):!1},G.to=function(a,b,c){return new G(a,b,c)},G.from=function(a,b,c){return c.runBackwards=!0,c.immediateRender=0!=c.immediateRender,new G(a,b,c)},G.fromTo=function(a,b,c,d){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,new G(a,b,d)},G.delayedCall=function(a,b,c,d,e){return new G(b,0,{delay:a,onComplete:b,onCompleteParams:c,callbackScope:d,onReverseComplete:b,onReverseCompleteParams:c,immediateRender:!1,lazy:!1,useFrames:e,overwrite:0})},G.set=function(a,b){return new G(a,0,b)},G.getTweensOf=function(a,b){if(null==a)return[];a="string"!=typeof a?a:G.selector(a)||a;var c,d,e,f;if((p(a)||H(a))&&"number"!=typeof a[0]){for(c=a.length,d=[];--c>-1;)d=d.concat(G.getTweensOf(a[c],b));for(c=d.length;--c>-1;)for(f=d[c],e=c;--e>-1;)f===d[e]&&d.splice(c,1)}else if(a._gsTweenID)for(d=$(a).concat(),c=d.length;--c>-1;)(d[c]._gc||b&&!d[c].isActive())&&d.splice(c,1);return d||[]},G.killTweensOf=G.killDelayedCallsTo=function(a,b,c){"object"==typeof b&&(c=b,b=!1);for(var d=G.getTweensOf(a,b),e=d.length;--e>-1;)d[e]._kill(c,a)};var ca=t("plugins.TweenPlugin",function(a,b){this._overwriteProps=(a||"").split(","),this._propName=this._overwriteProps[0],this._priority=b||0,this._super=ca.prototype},!0);if(h=ca.prototype,ca.version="1.19.0",ca.API=2,h._firstPT=null,h._addTween=P,h.setRatio=N,h._kill=function(a){var b,c=this._overwriteProps,d=this._firstPT;if(null!=a[this._propName])this._overwriteProps=[];else for(b=c.length;--b>-1;)null!=a[c[b]]&&c.splice(b,1);for(;d;)null!=a[d.n]&&(d._next&&(d._next._prev=d._prev),d._prev?(d._prev._next=d._next,d._prev=null):this._firstPT===d&&(this._firstPT=d._next)),d=d._next;return!1},h._mod=h._roundProps=function(a){for(var b,c=this._firstPT;c;)b=a[this._propName]||null!=c.n&&a[c.n.split(this._propName+"_").join("")],b&&"function"==typeof b&&(2===c.f?c.t._applyPT.m=b:c.m=b),c=c._next},G._onPluginEvent=function(a,b){var c,d,e,f,g,h=b._firstPT;if("_onInitAllProps"===a){for(;h;){for(g=h._next,d=e;d&&d.pr>h.pr;)d=d._next;(h._prev=d?d._prev:f)?h._prev._next=h:e=h,(h._next=d)?d._prev=h:f=h,h=g}h=b._firstPT=e}for(;h;)h.pg&&"function"==typeof h.t[a]&&h.t[a]()&&(c=!0),h=h._next;return c},ca.activate=function(a){for(var b=a.length;--b>-1;)a[b].API===ca.API&&(R[(new a[b])._propName]=a[b]);return!0},s.plugin=function(a){if(!(a&&a.propName&&a.init&&a.API))throw"illegal plugin definition.";var b,c=a.propName,d=a.priority||0,e=a.overwriteProps,f={init:"_onInitTween",set:"setRatio",kill:"_kill",round:"_mod",mod:"_mod",initAll:"_onInitAllProps"},g=t("plugins."+c.charAt(0).toUpperCase()+c.substr(1)+"Plugin",function(){ca.call(this,c,d),this._overwriteProps=e||[]},a.global===!0),h=g.prototype=new ca(c);h.constructor=g,g.API=a.API;for(b in f)"function"==typeof a[b]&&(h[f[b]]=a[b]);return g.version=a.version,ca.activate([g]),g},f=a._gsQueue){for(g=0;g<f.length;g++)f[g]();for(h in q)q[h].func||a.console.log("GSAP encountered missing dependency: "+h)}j=!1}("undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window,"TweenLite");
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	/*!
		Zoom 1.7.21
		license: MIT
		http://www.jacklmoore.com/zoom
	*/
	(function ($) {
		var defaults = {
			url: false,
			callback: false,
			target: false,
			duration: 120,
			on: 'mouseover', // other options: grab, click, toggle
			touch: true, // enables a touch fallback
			onZoomIn: false,
			onZoomOut: false,
			magnify: 1
		};

		// Core Zoom Logic, independent of event listeners.
		$.zoom = function(target, source, img, magnify) {
			var targetHeight,
				targetWidth,
				sourceHeight,
				sourceWidth,
				xRatio,
				yRatio,
				offset,
				$target = $(target),
				position = $target.css('position'),
				$source = $(source);

			// The parent element needs positioning so that the zoomed element can be correctly positioned within.
			target.style.position = /(absolute|fixed)/.test(position) ? position : 'relative';
			target.style.overflow = 'hidden';
			img.style.width = img.style.height = '';

			$(img)
				.addClass('zoomImg')
				.css({
					position: 'absolute',
					top: 0,
					left: 0,
					opacity: 0,
					width: img.width * magnify,
					height: img.height * magnify,
					border: 'none',
					maxWidth: 'none',
					maxHeight: 'none'
				})
				.appendTo(target);

			return {
				init: function() {
					targetWidth = $target.outerWidth();
					targetHeight = $target.outerHeight();

					if (source === target) {
						sourceWidth = targetWidth;
						sourceHeight = targetHeight;
					} else {
						sourceWidth = $source.outerWidth();
						sourceHeight = $source.outerHeight();
					}

					xRatio = (img.width - targetWidth) / sourceWidth;
					yRatio = (img.height - targetHeight) / sourceHeight;

					offset = $source.offset();
				},
				move: function (e) {
					var left = (e.pageX - offset.left),
						top = (e.pageY - offset.top);

					top = Math.max(Math.min(top, sourceHeight), 0);
					left = Math.max(Math.min(left, sourceWidth), 0);

					img.style.left = (left * -xRatio) + 'px';
					img.style.top = (top * -yRatio) + 'px';
				}
			};
		};

		$.fn.zoom = function (options) {
			return this.each(function () {
				var
				settings = $.extend({}, defaults, options || {}),
				//target will display the zoomed image
				target = settings.target && $(settings.target)[0] || this,
				//source will provide zoom location info (thumbnail)
				source = this,
				$source = $(source),
				img = document.createElement('img'),
				$img = $(img),
				mousemove = 'mousemove.zoom',
				clicked = false,
				touched = false;

				// If a url wasn't specified, look for an image element.
				if (!settings.url) {
					var srcElement = source.querySelector('img');
					if (srcElement) {
						settings.url = srcElement.getAttribute('data-src') || srcElement.currentSrc || srcElement.src;
					}
					if (!settings.url) {
						return;
					}
				}

				$source.one('zoom.destroy', function(position, overflow){
					$source.off(".zoom");
					target.style.position = position;
					target.style.overflow = overflow;
					img.onload = null;
					$img.remove();
				}.bind(this, target.style.position, target.style.overflow));

				img.onload = function () {
					var zoom = $.zoom(target, source, img, settings.magnify);

					function start(e) {
						zoom.init();
						zoom.move(e);

						// Skip the fade-in for IE8 and lower since it chokes on fading-in
						// and changing position based on mousemovement at the same time.
						$img.stop()
						.fadeTo($.support.opacity ? settings.duration : 0, 1, $.isFunction(settings.onZoomIn) ? settings.onZoomIn.call(img) : false);
					}

					function stop() {
						$img.stop()
						.fadeTo(settings.duration, 0, $.isFunction(settings.onZoomOut) ? settings.onZoomOut.call(img) : false);
					}

					// Mouse events
					if (settings.on === 'grab') {
						$source
							.on('mousedown.zoom',
								function (e) {
									if (e.which === 1) {
										$(document).one('mouseup.zoom',
											function () {
												stop();

												$(document).off(mousemove, zoom.move);
											}
										);

										start(e);

										$(document).on(mousemove, zoom.move);

										e.preventDefault();
									}
								}
							);
					} else if (settings.on === 'click') {
						$source.on('click.zoom',
							function (e) {
								if (clicked) {
									// bubble the event up to the document to trigger the unbind.
									return;
								} else {
									clicked = true;
									start(e);
									$(document).on(mousemove, zoom.move);
									$(document).one('click.zoom',
										function () {
											stop();
											clicked = false;
											$(document).off(mousemove, zoom.move);
										}
									);
									return false;
								}
							}
						);
					} else if (settings.on === 'toggle') {
						$source.on('click.zoom',
							function (e) {
								if (clicked) {
									stop();
								} else {
									start(e);
								}
								clicked = !clicked;
							}
						);
					} else if (settings.on === 'mouseover') {
						zoom.init(); // Preemptively call init because IE7 will fire the mousemove handler before the hover handler.

						$source
							.on('mouseenter.zoom', start)
							.on('mouseleave.zoom', stop)
							.on(mousemove, zoom.move);
					}

					// Touch fallback
					if (settings.touch) {
						$source
							.on('touchstart.zoom', function (e) {
								e.preventDefault();
								if (touched) {
									touched = false;
									stop();
								} else {
									touched = true;
									start( e.originalEvent.touches[0] || e.originalEvent.changedTouches[0] );
								}
							})
							.on('touchmove.zoom', function (e) {
								e.preventDefault();
								zoom.move( e.originalEvent.touches[0] || e.originalEvent.changedTouches[0] );
							})
							.on('touchend.zoom', function (e) {
								e.preventDefault();
								if (touched) {
									touched = false;
									stop();
								}
							});
					}
					
					if ($.isFunction(settings.callback)) {
						settings.callback.call(img);
					}
				};

				img.setAttribute('role', 'presentation');
				img.alt = '';
				img.src = settings.url;
			});
		};

		$.fn.zoom.defaults = defaults;
	}(window.jQuery));


/***/ }),
/* 16 */
/***/ (function(module, exports) {

	/*! lazysizes - v3.0.0 */
	!function(){"use strict";function a(a){var b=getComputedStyle(a,null)||{},c=b.fontFamily||"",d=c.match(f)||"",e=d&&c.match(g)||"";return e&&(e=e[1]),{fit:d&&d[1]||"",position:j[e]||e||"center"}}function b(a,b){var c,d=lazySizes.cfg,e=a.cloneNode(!1),f=e.style,g=function(){var b=a.currentSrc||a.src;b&&(f.backgroundImage="url("+(i.test(b)?JSON.stringify(b):b)+")",c||(c=!0,lazySizes.rC(e,d.loadingClass),lazySizes.aC(e,d.loadedClass)))};a._lazysizesParentFit=b.fit,a.addEventListener("load",function(){lazySizes.rAF(g)},!0),e.addEventListener("load",function(){var a=e.currentSrc||e.src;a&&a!=h&&(e.src=h,e.srcset="")}),lazySizes.rAF(function(){var c=a,i=a.parentNode;"PICTURE"==i.nodeName.toUpperCase()&&(c=i,i=i.parentNode),lazySizes.rC(e,d.loadedClass),lazySizes.rC(e,d.lazyClass),lazySizes.aC(e,d.loadingClass),lazySizes.aC(e,d.objectFitClass||"lazysizes-display-clone"),e.getAttribute(d.srcsetAttr)&&e.setAttribute(d.srcsetAttr,""),e.getAttribute(d.srcAttr)&&e.setAttribute(d.srcAttr,""),e.src=h,e.srcset="",f.backgroundRepeat="no-repeat",f.backgroundPosition=b.position,f.backgroundSize=b.fit,c.style.display="none",a.setAttribute("data-parent-fit",b.fit),a.setAttribute("data-parent-container","prev"),i.insertBefore(e,c),a._lazysizesParentFit&&delete a._lazysizesParentFit,a.complete&&g()})}var c=document.createElement("a").style,d="objectFit"in c,e=d&&"objectPosition"in c,f=/object-fit["']*\s*:\s*["']*(contain|cover)/,g=/object-position["']*\s*:\s*["']*(.+?)(?=($|,|'|"|;))/,h="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",i=/\(|\)|'/,j={center:"center","50% 50%":"center"};d&&e||addEventListener("lazyunveilread",function(c){var e=c.target,f=a(e);!f.fit||d&&"center"==f.position||b(e,f)},!0)}();
	/*! lazysizes - v3.0.0 */
	!function(a,b,c){"use strict";function d(b,c){var d,e,f,g,h=a.getComputedStyle(b);e=b.parentNode,g={isPicture:!(!e||!m.test(e.nodeName||""))},f=function(a,c){var d=b.getAttribute("data-"+a);if(!d){var e=h.getPropertyValue("--ls-"+a);e&&(d=e.trim())}if(d){if("true"==d)d=!0;else if("false"==d)d=!1;else if(l.test(d))d=parseFloat(d);else if("function"==typeof j[a])d=j[a](b,d);else if(q.test(d))try{d=JSON.parse(d)}catch(f){}g[a]=d}else a in j&&"function"!=typeof j[a]?g[a]=j[a]:c&&"function"==typeof j[a]&&(g[a]=j[a](b,d))};for(d in j)f(d);return c.replace(p,function(a,b){b in g||f(b,!0)}),g}function e(a,b){var c=[],d=function(a,c){return k[typeof b[c]]?b[c]:a};return c.srcset=[],b.absUrl&&(s.setAttribute("href",a),a=s.href),a=((b.prefix||"")+a+(b.postfix||"")).replace(p,d),b.widths.forEach(function(d){var e=b.widthmap[d]||d,f={u:a.replace(n,e).replace(o,b.ratio?Math.round(d*b.ratio):""),w:d};c.push(f),c.srcset.push(f.c=f.u+" "+d+"w")}),c}function f(a,c,d){var f=0,g=0,h=d;if(a){if("container"===c.ratio){for(f=h.scrollWidth,g=h.scrollHeight;!(f&&g||h===b);)h=h.parentNode,f=h.scrollWidth,g=h.scrollHeight;f&&g&&(c.ratio=g/f)}a=e(a,c),a.isPicture=c.isPicture,u&&"IMG"==d.nodeName.toUpperCase()?d.removeAttribute(i.srcsetAttr):d.setAttribute(i.srcsetAttr,a.srcset.join(", ")),Object.defineProperty(d,"_lazyrias",{value:a,writable:!0})}}function g(a,b){var c=d(a,b);return j.modifyOptions.call(a,{target:a,details:c,detail:c}),lazySizes.fire(a,"lazyriasmodifyoptions",c),c}function h(a){return a.getAttribute(a.getAttribute("data-srcattr")||j.srcAttr)||a.getAttribute(i.srcsetAttr)||a.getAttribute(i.srcAttr)||a.getAttribute("data-pfsrcset")||""}if(b.addEventListener){var i,j,k={string:1,number:1},l=/^\-*\+*\d+\.*\d*$/,m=/^picture$/i,n=/\s*\{\s*width\s*\}\s*/i,o=/\s*\{\s*height\s*\}\s*/i,p=/\s*\{\s*([a-z0-9]+)\s*\}\s*/gi,q=/^\[.*\]|\{.*\}$/,r=/^(?:auto|\d+(px)?)$/,s=b.createElement("a"),t=b.createElement("img"),u="srcset"in t&&!("sizes"in t),v=!!a.HTMLPictureElement&&!u;!function(){var b,c=function(){},d={prefix:"",postfix:"",srcAttr:"data-src",absUrl:!1,modifyOptions:c,widthmap:{},ratio:!1};i=a.lazySizes&&lazySizes.cfg||a.lazySizesConfig,i||(i={},a.lazySizesConfig=i),i.supportsType||(i.supportsType=function(a){return!a}),i.rias||(i.rias={}),j=i.rias,"widths"in j||(j.widths=[],function(a){for(var b,c=0;!b||3e3>b;)c+=5,c>30&&(c+=1),b=36*c,a.push(b)}(j.widths));for(b in d)b in j||(j[b]=d[b])}(),addEventListener("lazybeforesizes",function(a){var b,c,d,e,k,l,m,o,p,q,s,t,u;if(b=a.target,a.detail.dataAttr&&!a.defaultPrevented&&!j.disabled&&(p=b.getAttribute(i.sizesAttr)||b.getAttribute("sizes"))&&r.test(p)){if(c=h(b),d=g(b,c),s=n.test(d.prefix)||n.test(d.postfix),d.isPicture&&(e=b.parentNode))for(k=e.getElementsByTagName("source"),l=0,m=k.length;m>l;l++)(s||n.test(o=h(k[l])))&&(f(o,d,k[l]),t=!0);s||n.test(c)?(f(c,d,b),t=!0):t&&(u=[],u.srcset=[],u.isPicture=!0,Object.defineProperty(b,"_lazyrias",{value:u,writable:!0})),t&&(v?b.removeAttribute(i.srcAttr):"auto"!=p&&(q={width:parseInt(p,10)},w({target:b,detail:q})))}},!0);var w=function(){var c=function(a,b){return a.w-b.w},d=function(a){var b,c,d=a.length,e=a[d-1],f=0;for(f;d>f;f++)if(e=a[f],e.d=e.w/a.w,e.d>=a.d){!e.cached&&(b=a[f-1])&&b.d>a.d-.13*Math.pow(a.d,2.2)&&(c=Math.pow(b.d-.6,1.6),b.cached&&(b.d+=.15*c),b.d+(e.d-a.d)*c>a.d&&(e=b));break}return e},e=function(a,b){var c;return!a._lazyrias&&lazySizes.pWS&&(c=lazySizes.pWS(a.getAttribute(i.srcsetAttr||""))).length&&(Object.defineProperty(a,"_lazyrias",{value:c,writable:!0}),b&&a.parentNode&&(c.isPicture="PICTURE"==a.parentNode.nodeName.toUpperCase())),a._lazyrias},f=function(b){var c=a.devicePixelRatio||1,d=lazySizes.getX&&lazySizes.getX(b);return Math.min(d||c,2.4,c)},g=function(b,g){var h,i,j,k,l,m;if(l=b._lazyrias,l.isPicture&&a.matchMedia)for(i=0,h=b.parentNode.getElementsByTagName("source"),j=h.length;j>i;i++)if(e(h[i])&&!h[i].getAttribute("type")&&(!(k=h[i].getAttribute("media"))||(matchMedia(k)||{}).matches)){l=h[i]._lazyrias;break}return(!l.w||l.w<g)&&(l.w=g,l.d=f(b),m=d(l.sort(c))),m},h=function(c){var d,f=c.target;return!u&&(a.respimage||a.picturefill||lazySizesConfig.pf)?void b.removeEventListener("lazybeforesizes",h):void(("_lazyrias"in f||c.detail.dataAttr&&e(f,!0))&&(d=g(f,c.detail.width),d&&d.u&&f._lazyrias.cur!=d.u&&(f._lazyrias.cur=d.u,d.cached=!0,lazySizes.rAF(function(){f.setAttribute(i.srcAttr,d.u),f.setAttribute("src",d.u)}))))};return v?h=function(){}:addEventListener("lazybeforesizes",h),h}()}}(window,document);
	/*! lazysizes - v3.0.0 */
	!function(a,b){var c=b(a,a.document);a.lazySizes=c,"object"==typeof module&&module.exports&&(module.exports=c)}(window,function(a,b){"use strict";if(b.getElementsByClassName){var c,d=b.documentElement,e=a.Date,f=a.HTMLPictureElement,g="addEventListener",h="getAttribute",i=a[g],j=a.setTimeout,k=a.requestAnimationFrame||j,l=a.requestIdleCallback,m=/^picture$/i,n=["load","error","lazyincluded","_lazyloaded"],o={},p=Array.prototype.forEach,q=function(a,b){return o[b]||(o[b]=new RegExp("(\\s|^)"+b+"(\\s|$)")),o[b].test(a[h]("class")||"")&&o[b]},r=function(a,b){q(a,b)||a.setAttribute("class",(a[h]("class")||"").trim()+" "+b)},s=function(a,b){var c;(c=q(a,b))&&a.setAttribute("class",(a[h]("class")||"").replace(c," "))},t=function(a,b,c){var d=c?g:"removeEventListener";c&&t(a,b),n.forEach(function(c){a[d](c,b)})},u=function(a,c,d,e,f){var g=b.createEvent("CustomEvent");return g.initCustomEvent(c,!e,!f,d||{}),a.dispatchEvent(g),g},v=function(b,d){var e;!f&&(e=a.picturefill||c.pf)?e({reevaluate:!0,elements:[b]}):d&&d.src&&(b.src=d.src)},w=function(a,b){return(getComputedStyle(a,null)||{})[b]},x=function(a,b,d){for(d=d||a.offsetWidth;d<c.minSize&&b&&!a._lazysizesWidth;)d=b.offsetWidth,b=b.parentNode;return d},y=function(){var a,c,d=[],e=[],f=d,g=function(){var b=f;for(f=d.length?e:d,a=!0,c=!1;b.length;)b.shift()();a=!1},h=function(d,e){a&&!e?d.apply(this,arguments):(f.push(d),c||(c=!0,(b.hidden?j:k)(g)))};return h._lsFlush=g,h}(),z=function(a,b){return b?function(){y(a)}:function(){var b=this,c=arguments;y(function(){a.apply(b,c)})}},A=function(a){var b,c=0,d=125,f=666,g=f,h=function(){b=!1,c=e.now(),a()},i=l?function(){l(h,{timeout:g}),g!==f&&(g=f)}:z(function(){j(h)},!0);return function(a){var f;(a=a===!0)&&(g=44),b||(b=!0,f=d-(e.now()-c),0>f&&(f=0),a||9>f&&l?i():j(i,f))}},B=function(a){var b,c,d=99,f=function(){b=null,a()},g=function(){var a=e.now()-c;d>a?j(g,d-a):(l||f)(f)};return function(){c=e.now(),b||(b=j(g,d))}},C=function(){var f,k,l,n,o,x,C,E,F,G,H,I,J,K,L,M=/^img$/i,N=/^iframe$/i,O="onscroll"in a&&!/glebot/.test(navigator.userAgent),P=0,Q=0,R=0,S=-1,T=function(a){R--,a&&a.target&&t(a.target,T),(!a||0>R||!a.target)&&(R=0)},U=function(a,c){var e,f=a,g="hidden"==w(b.body,"visibility")||"hidden"!=w(a,"visibility");for(F-=c,I+=c,G-=c,H+=c;g&&(f=f.offsetParent)&&f!=b.body&&f!=d;)g=(w(f,"opacity")||1)>0,g&&"visible"!=w(f,"overflow")&&(e=f.getBoundingClientRect(),g=H>e.left&&G<e.right&&I>e.top-1&&F<e.bottom+1);return g},V=function(){var a,e,g,i,j,m,n,p,q;if((o=c.loadMode)&&8>R&&(a=f.length)){e=0,S++,null==K&&("expand"in c||(c.expand=d.clientHeight>500&&d.clientWidth>500?500:370),J=c.expand,K=J*c.expFactor),K>Q&&1>R&&S>2&&o>2&&!b.hidden?(Q=K,S=0):Q=o>1&&S>1&&6>R?J:P;for(;a>e;e++)if(f[e]&&!f[e]._lazyRace)if(O)if((p=f[e][h]("data-expand"))&&(m=1*p)||(m=Q),q!==m&&(C=innerWidth+m*L,E=innerHeight+m,n=-1*m,q=m),g=f[e].getBoundingClientRect(),(I=g.bottom)>=n&&(F=g.top)<=E&&(H=g.right)>=n*L&&(G=g.left)<=C&&(I||H||G||F)&&(l&&3>R&&!p&&(3>o||4>S)||U(f[e],m))){if(ba(f[e]),j=!0,R>9)break}else!j&&l&&!i&&4>R&&4>S&&o>2&&(k[0]||c.preloadAfterLoad)&&(k[0]||!p&&(I||H||G||F||"auto"!=f[e][h](c.sizesAttr)))&&(i=k[0]||f[e]);else ba(f[e]);i&&!j&&ba(i)}},W=A(V),X=function(a){r(a.target,c.loadedClass),s(a.target,c.loadingClass),t(a.target,Z)},Y=z(X),Z=function(a){Y({target:a.target})},$=function(a,b){try{a.contentWindow.location.replace(b)}catch(c){a.src=b}},_=function(a){var b,d,e=a[h](c.srcsetAttr);(b=c.customMedia[a[h]("data-media")||a[h]("media")])&&a.setAttribute("media",b),e&&a.setAttribute("srcset",e),b&&(d=a.parentNode,d.insertBefore(a.cloneNode(),a),d.removeChild(a))},aa=z(function(a,b,d,e,f){var g,i,k,l,o,q;(o=u(a,"lazybeforeunveil",b)).defaultPrevented||(e&&(d?r(a,c.autosizesClass):a.setAttribute("sizes",e)),i=a[h](c.srcsetAttr),g=a[h](c.srcAttr),f&&(k=a.parentNode,l=k&&m.test(k.nodeName||"")),q=b.firesLoad||"src"in a&&(i||g||l),o={target:a},q&&(t(a,T,!0),clearTimeout(n),n=j(T,2500),r(a,c.loadingClass),t(a,Z,!0)),l&&p.call(k.getElementsByTagName("source"),_),i?a.setAttribute("srcset",i):g&&!l&&(N.test(a.nodeName)?$(a,g):a.src=g),(i||l)&&v(a,{src:g})),a._lazyRace&&delete a._lazyRace,s(a,c.lazyClass),y(function(){(!q||a.complete&&a.naturalWidth>1)&&(q?T(o):R--,X(o))},!0)}),ba=function(a){var b,d=M.test(a.nodeName),e=d&&(a[h](c.sizesAttr)||a[h]("sizes")),f="auto"==e;(!f&&l||!d||!a.src&&!a.srcset||a.complete||q(a,c.errorClass))&&(b=u(a,"lazyunveilread").detail,f&&D.updateElem(a,!0,a.offsetWidth),a._lazyRace=!0,R++,aa(a,b,f,e,d))},ca=function(){if(!l){if(e.now()-x<999)return void j(ca,999);var a=B(function(){c.loadMode=3,W()});l=!0,c.loadMode=3,W(),i("scroll",function(){3==c.loadMode&&(c.loadMode=2),a()},!0)}};return{_:function(){x=e.now(),f=b.getElementsByClassName(c.lazyClass),k=b.getElementsByClassName(c.lazyClass+" "+c.preloadClass),L=c.hFac,i("scroll",W,!0),i("resize",W,!0),a.MutationObserver?new MutationObserver(W).observe(d,{childList:!0,subtree:!0,attributes:!0}):(d[g]("DOMNodeInserted",W,!0),d[g]("DOMAttrModified",W,!0),setInterval(W,999)),i("hashchange",W,!0),["focus","mouseover","click","load","transitionend","animationend","webkitAnimationEnd"].forEach(function(a){b[g](a,W,!0)}),/d$|^c/.test(b.readyState)?ca():(i("load",ca),b[g]("DOMContentLoaded",W),j(ca,2e4)),f.length?(V(),y._lsFlush()):W()},checkElems:W,unveil:ba}}(),D=function(){var a,d=z(function(a,b,c,d){var e,f,g;if(a._lazysizesWidth=d,d+="px",a.setAttribute("sizes",d),m.test(b.nodeName||""))for(e=b.getElementsByTagName("source"),f=0,g=e.length;g>f;f++)e[f].setAttribute("sizes",d);c.detail.dataAttr||v(a,c.detail)}),e=function(a,b,c){var e,f=a.parentNode;f&&(c=x(a,f,c),e=u(a,"lazybeforesizes",{width:c,dataAttr:!!b}),e.defaultPrevented||(c=e.detail.width,c&&c!==a._lazysizesWidth&&d(a,f,e,c)))},f=function(){var b,c=a.length;if(c)for(b=0;c>b;b++)e(a[b])},g=B(f);return{_:function(){a=b.getElementsByClassName(c.autosizesClass),i("resize",g)},checkElems:g,updateElem:e}}(),E=function(){E.i||(E.i=!0,D._(),C._())};return function(){var b,d={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2};c=a.lazySizesConfig||a.lazysizesConfig||{};for(b in d)b in c||(c[b]=d[b]);a.lazySizesConfig=c,j(function(){c.init&&E()})}(),{cfg:c,autoSizer:D,loader:C,init:E,uP:v,aC:r,rC:s,hC:q,fire:u,gW:x,rAF:y}}});
	/*! lazysizes - v3.0.0 */
	!function(a,b){"use strict";if(a.addEventListener){var c=/\s+(\d+)(w|h)\s+(\d+)(w|h)/,d=/parent-fit["']*\s*:\s*["']*(contain|cover|width)/,e=/parent-container["']*\s*:\s*["']*(.+?)(?=(\s|$|,|'|"|;))/,f=/^picture$/i,g=function(a){return getComputedStyle(a,null)||{}},h={getParent:function(b,c){var d=b,e=b.parentNode;return c&&"prev"!=c||!e||!f.test(e.nodeName||"")||(e=e.parentNode),"self"!=c&&(d="prev"==c?b.previousElementSibling:c&&(e.closest||a.jQuery)?(e.closest?e.closest(c):jQuery(e).closest(c)[0])||e:e),d},getFit:function(a){var b,c,f=g(a),i=f.content||f.fontFamily,j={fit:a._lazysizesParentFit||a.getAttribute("data-parent-fit")};return!j.fit&&i&&(b=i.match(d))&&(j.fit=b[1]),j.fit?(c=a._lazysizesParentContainer||a.getAttribute("data-parent-container"),!c&&i&&(b=i.match(e))&&(c=b[1]),j.parent=h.getParent(a,c)):j.fit=f.objectFit,j},getImageRatio:function(b){var d,e,g,h,i=b.parentNode,j=i&&f.test(i.nodeName||"")?i.querySelectorAll("source, img"):[b];for(d=0;d<j.length;d++)if(b=j[d],e=b.getAttribute(lazySizesConfig.srcsetAttr)||b.getAttribute("srcset")||b.getAttribute("data-pfsrcset")||b.getAttribute("data-risrcset")||"",g=b.getAttribute("media"),g=lazySizesConfig.customMedia[b.getAttribute("data-media")||g]||g,e&&(!g||(a.matchMedia&&matchMedia(g)||{}).matches)){h=parseFloat(b.getAttribute("data-aspectratio")),!h&&e.match(c)&&(h="w"==RegExp.$2?RegExp.$1/RegExp.$3:RegExp.$3/RegExp.$1);break}return h},calculateSize:function(a,b){var c,d,e,f,g=this.getFit(a),h=g.fit,i=g.parent;return"width"==h||("contain"==h||"cover"==h)&&(e=this.getImageRatio(a))?(i?b=i.clientWidth:i=a,f=b,"width"==h?f=b:(d=i.clientHeight,d>40&&(c=b/d)&&("cover"==h&&e>c||"contain"==h&&c>e)&&(f=b*(e/c))),f):b}},i=function(){a.lazySizes&&(lazySizes.parentFit||(lazySizes.parentFit=h),a.removeEventListener("lazyunveilread",i,!0))};a.addEventListener("lazyunveilread",i,!0),b.addEventListener("lazybeforesizes",function(a){if(!a.defaultPrevented){var b=a.target;a.detail.width=h.calculateSize(b,a.detail.width)}}),setTimeout(i)}}(window,document);
	/*! lazysizes - v3.0.0 */
	!function(a,b,c){"use strict";var d,e=a.lazySizes&&lazySizes.cfg||a.lazySizesConfig,f=b.createElement("img"),g="sizes"in f&&"srcset"in f,h=/\s+\d+h/g,i=function(){var a=/\s+(\d+)(w|h)\s+(\d+)(w|h)/,c=Array.prototype.forEach;return function(d){var e=b.createElement("img"),f=function(b){var c,d=b.getAttribute(lazySizesConfig.srcsetAttr);d&&(d.match(a)&&(c="w"==RegExp.$2?RegExp.$1/RegExp.$3:RegExp.$3/RegExp.$1,c&&b.setAttribute("data-aspectratio",c)),b.setAttribute(lazySizesConfig.srcsetAttr,d.replace(h,"")))},g=function(a){var b=a.target.parentNode;b&&"PICTURE"==b.nodeName&&c.call(b.getElementsByTagName("source"),f),f(a.target)},i=function(){e.currentSrc&&b.removeEventListener("lazybeforeunveil",g)};d[1]&&(b.addEventListener("lazybeforeunveil",g),e.onload=i,e.onerror=i,e.srcset="data:,a 1w 1h",e.complete&&i())}}();if(e||(e={},a.lazySizesConfig=e),e.supportsType||(e.supportsType=function(a){return!a}),!a.picturefill&&!e.pf){if(a.HTMLPictureElement&&g)return b.msElementsFromPoint&&i(navigator.userAgent.match(/Edge\/(\d+)/)),void(e.pf=function(){});e.pf=function(b){var c,e;if(!a.picturefill)for(c=0,e=b.elements.length;e>c;c++)d(b.elements[c])},d=function(){var c=function(a,b){return a.w-b.w},f=/^\s*\d+\.*\d*px\s*$/,i=function(a){var b,c,d=a.length,e=a[d-1],f=0;for(f;d>f;f++)if(e=a[f],e.d=e.w/a.w,e.d>=a.d){!e.cached&&(b=a[f-1])&&b.d>a.d-.13*Math.pow(a.d,2.2)&&(c=Math.pow(b.d-.6,1.6),b.cached&&(b.d+=.15*c),b.d+(e.d-a.d)*c>a.d&&(e=b));break}return e},j=function(){var a,b=/(([^,\s].[^\s]+)\s+(\d+)w)/g,c=/\s/,d=function(b,c,d,e){a.push({c:c,u:d,w:1*e})};return function(e){return a=[],e=e.trim(),e.replace(h,"").replace(b,d),a.length||!e||c.test(e)||a.push({c:e,u:e,w:99}),a}}(),k=function(){k.init||(k.init=!0,addEventListener("resize",function(){var a,c=b.getElementsByClassName("lazymatchmedia"),e=function(){var a,b;for(a=0,b=c.length;b>a;a++)d(c[a])};return function(){clearTimeout(a),a=setTimeout(e,66)}}()))},l=function(b,c){var d,f=b.getAttribute("srcset")||b.getAttribute(e.srcsetAttr);!f&&c&&(f=b._lazypolyfill?b._lazypolyfill._set:b.getAttribute(e.srcAttr)||b.getAttribute("src")),b._lazypolyfill&&b._lazypolyfill._set==f||(d=j(f||""),c&&b.parentNode&&(d.isPicture="PICTURE"==b.parentNode.nodeName.toUpperCase(),d.isPicture&&a.matchMedia&&(lazySizes.aC(b,"lazymatchmedia"),k())),d._set=f,Object.defineProperty(b,"_lazypolyfill",{value:d,writable:!0}))},m=function(b){var c=a.devicePixelRatio||1,d=lazySizes.getX&&lazySizes.getX(b);return Math.min(d||c,2.5,c)},n=function(b){return a.matchMedia?(n=function(a){return!a||(matchMedia(a)||{}).matches})(b):!b},o=function(a){var b,d,g,h,j,k,o;if(h=a,l(h,!0),j=h._lazypolyfill,j.isPicture)for(d=0,b=a.parentNode.getElementsByTagName("source"),g=b.length;g>d;d++)if(e.supportsType(b[d].getAttribute("type"),a)&&n(b[d].getAttribute("media"))){h=b[d],l(h),j=h._lazypolyfill;break}return j.length>1?(o=h.getAttribute("sizes")||"",o=f.test(o)&&parseInt(o,10)||lazySizes.gW(a,a.parentNode),j.d=m(a),!j.src||!j.w||j.w<o?(j.w=o,k=i(j.sort(c)),j.src=k):k=j.src):k=j[0],k},p=function(a){if(!g||!a.parentNode||"PICTURE"==a.parentNode.nodeName.toUpperCase()){var b=o(a);b&&b.u&&a._lazypolyfill.cur!=b.u&&(a._lazypolyfill.cur=b.u,b.cached=!0,a.setAttribute(e.srcAttr,b.u),a.setAttribute("src",b.u))}};return p.parse=j,p}(),e.loadedClass&&e.loadingClass&&!function(){var a=[];['img[sizes$="px"][srcset].',"picture > img:not([srcset])."].forEach(function(b){a.push(b+e.loadedClass),a.push(b+e.loadingClass)}),e.pf({elements:b.querySelectorAll(a.join(", "))})}()}}(window,document),function(a){"use strict";var b,c=a.createElement("img");!("srcset"in c)||"sizes"in c||window.HTMLPictureElement||(b=/^picture$/i,a.addEventListener("lazybeforeunveil",function(c){var d,e,f,g,h,i,j;!c.defaultPrevented&&!lazySizesConfig.noIOSFix&&(d=c.target)&&(f=d.getAttribute(lazySizesConfig.srcsetAttr))&&(e=d.parentNode)&&((h=b.test(e.nodeName||""))||(g=d.getAttribute("sizes")||d.getAttribute(lazySizesConfig.sizesAttr)))&&(i=h?e:a.createElement("picture"),d._lazyImgSrc||Object.defineProperty(d,"_lazyImgSrc",{value:a.createElement("source"),writable:!0}),j=d._lazyImgSrc,g&&j.setAttribute("sizes",g),j.setAttribute(lazySizesConfig.srcsetAttr,f),d.setAttribute("data-pfsrcset",f),d.removeAttribute(lazySizesConfig.srcsetAttr),h||(e.insertBefore(i,d),i.appendChild(d)),i.insertBefore(j,d))}))}(document);
	/*! lazysizes - v3.0.0 */
	!function(){"use strict";if(window.addEventListener){var a=/\s+/g,b=/\s*\|\s+|\s+\|\s*/g,c=/^(.+?)(?:\s+\[\s*(.+?)\s*\])?$/,d=/\(|\)|'/,e={contain:1,cover:1},f=function(a){var b=lazySizes.gW(a,a.parentNode);return(!a._lazysizesWidth||b>a._lazysizesWidth)&&(a._lazysizesWidth=b),a._lazysizesWidth},g=function(a){var b;return b=(getComputedStyle(a)||{getPropertyValue:function(){}}).getPropertyValue("background-size"),!e[b]&&e[a.style.backgroundSize]&&(b=a.style.backgroundSize),b},h=function(d,e,f){var g=document.createElement("picture"),h=e.getAttribute(lazySizesConfig.sizesAttr),i=e.getAttribute("data-ratio"),j=e.getAttribute("data-optimumx");e._lazybgset&&e._lazybgset.parentNode==e&&e.removeChild(e._lazybgset),Object.defineProperty(f,"_lazybgset",{value:e,writable:!0}),Object.defineProperty(e,"_lazybgset",{value:g,writable:!0}),d=d.replace(a," ").split(b),g.style.display="none",f.className=lazySizesConfig.lazyClass,1!=d.length||h||(h="auto"),d.forEach(function(a){var b=document.createElement("source");h&&"auto"!=h&&b.setAttribute("sizes",h),a.match(c)&&(b.setAttribute(lazySizesConfig.srcsetAttr,RegExp.$1),RegExp.$2&&b.setAttribute("media",lazySizesConfig.customMedia[RegExp.$2]||RegExp.$2)),g.appendChild(b)}),h&&(f.setAttribute(lazySizesConfig.sizesAttr,h),e.removeAttribute(lazySizesConfig.sizesAttr),e.removeAttribute("sizes")),j&&f.setAttribute("data-optimumx",j),i&&f.setAttribute("data-ratio",i),g.appendChild(f),e.appendChild(g)},i=function(a){if(a.target._lazybgset){var b=a.target,c=b._lazybgset,e=b.currentSrc||b.src;e&&(c.style.backgroundImage="url("+(d.test(e)?JSON.stringify(e):e)+")"),b._lazybgsetLoading&&(lazySizes.fire(c,"_lazyloaded",{},!1,!0),delete b._lazybgsetLoading)}};addEventListener("lazybeforeunveil",function(a){var b,c,d;!a.defaultPrevented&&(b=a.target.getAttribute("data-bgset"))&&(d=a.target,c=document.createElement("img"),c.alt="",c._lazybgsetLoading=!0,a.detail.firesLoad=!0,h(b,d,c),setTimeout(function(){lazySizes.loader.unveil(c),lazySizes.rAF(function(){lazySizes.fire(c,"_lazyloaded",{},!0,!0),c.complete&&i({target:c})})}))}),document.addEventListener("load",i,!0),window.addEventListener("lazybeforesizes",function(a){if(a.target._lazybgset&&a.detail.dataAttr){var b=a.target._lazybgset,c=g(b);e[c]&&(a.target._lazysizesParentFit=c,lazySizes.rAF(function(){a.target.setAttribute("data-parent-fit",c),a.target._lazysizesParentFit&&delete a.target._lazysizesParentFit}))}},!0),document.documentElement.addEventListener("lazybeforesizes",function(a){!a.defaultPrevented&&a.target._lazybgset&&(a.detail.width=f(a.target._lazybgset))})}}();


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(global, module) {/**
	 * @license
	 * Lodash lodash.com/license | Underscore.js 1.8.3 underscorejs.org/LICENSE
	 */
	;(function(){function n(n,t,r){switch(r.length){case 0:return n.call(t);case 1:return n.call(t,r[0]);case 2:return n.call(t,r[0],r[1]);case 3:return n.call(t,r[0],r[1],r[2])}return n.apply(t,r)}function t(n,t,r,e){for(var u=-1,i=null==n?0:n.length;++u<i;){var o=n[u];t(e,o,r(o),n)}return e}function r(n,t){for(var r=-1,e=null==n?0:n.length;++r<e&&false!==t(n[r],r,n););return n}function e(n,t){for(var r=null==n?0:n.length;r--&&false!==t(n[r],r,n););return n}function u(n,t){for(var r=-1,e=null==n?0:n.length;++r<e;)if(!t(n[r],r,n))return false;
	return true}function i(n,t){for(var r=-1,e=null==n?0:n.length,u=0,i=[];++r<e;){var o=n[r];t(o,r,n)&&(i[u++]=o)}return i}function o(n,t){return!(null==n||!n.length)&&-1<v(n,t,0)}function f(n,t,r){for(var e=-1,u=null==n?0:n.length;++e<u;)if(r(t,n[e]))return true;return false}function c(n,t){for(var r=-1,e=null==n?0:n.length,u=Array(e);++r<e;)u[r]=t(n[r],r,n);return u}function a(n,t){for(var r=-1,e=t.length,u=n.length;++r<e;)n[u+r]=t[r];return n}function l(n,t,r,e){var u=-1,i=null==n?0:n.length;for(e&&i&&(r=n[++u]);++u<i;)r=t(r,n[u],u,n);
	return r}function s(n,t,r,e){var u=null==n?0:n.length;for(e&&u&&(r=n[--u]);u--;)r=t(r,n[u],u,n);return r}function h(n,t){for(var r=-1,e=null==n?0:n.length;++r<e;)if(t(n[r],r,n))return true;return false}function p(n,t,r){var e;return r(n,function(n,r,u){if(t(n,r,u))return e=r,false}),e}function _(n,t,r,e){var u=n.length;for(r+=e?1:-1;e?r--:++r<u;)if(t(n[r],r,n))return r;return-1}function v(n,t,r){if(t===t)n:{--r;for(var e=n.length;++r<e;)if(n[r]===t){n=r;break n}n=-1}else n=_(n,d,r);return n}function g(n,t,r,e){
	--r;for(var u=n.length;++r<u;)if(e(n[r],t))return r;return-1}function d(n){return n!==n}function y(n,t){var r=null==n?0:n.length;return r?m(n,t)/r:F}function b(n){return function(t){return null==t?T:t[n]}}function x(n){return function(t){return null==n?T:n[t]}}function j(n,t,r,e,u){return u(n,function(n,u,i){r=e?(e=false,n):t(r,n,u,i)}),r}function w(n,t){var r=n.length;for(n.sort(t);r--;)n[r]=n[r].c;return n}function m(n,t){for(var r,e=-1,u=n.length;++e<u;){var i=t(n[e]);i!==T&&(r=r===T?i:r+i)}return r;
	}function A(n,t){for(var r=-1,e=Array(n);++r<n;)e[r]=t(r);return e}function k(n,t){return c(t,function(t){return[t,n[t]]})}function E(n){return function(t){return n(t)}}function S(n,t){return c(t,function(t){return n[t]})}function O(n,t){return n.has(t)}function I(n,t){for(var r=-1,e=n.length;++r<e&&-1<v(t,n[r],0););return r}function R(n,t){for(var r=n.length;r--&&-1<v(t,n[r],0););return r}function z(n){return"\\"+Ln[n]}function W(n){var t=-1,r=Array(n.size);return n.forEach(function(n,e){r[++t]=[e,n];
	}),r}function U(n,t){return function(r){return n(t(r))}}function B(n,t){for(var r=-1,e=n.length,u=0,i=[];++r<e;){var o=n[r];o!==t&&"__lodash_placeholder__"!==o||(n[r]="__lodash_placeholder__",i[u++]=r)}return i}function L(n){var t=-1,r=Array(n.size);return n.forEach(function(n){r[++t]=n}),r}function C(n){var t=-1,r=Array(n.size);return n.forEach(function(n){r[++t]=[n,n]}),r}function D(n){if(Rn.test(n)){for(var t=On.lastIndex=0;On.test(n);)++t;n=t}else n=Qn(n);return n}function M(n){return Rn.test(n)?n.match(On)||[]:n.split("");
	}var T,$=1/0,F=NaN,N=[["ary",128],["bind",1],["bindKey",2],["curry",8],["curryRight",16],["flip",512],["partial",32],["partialRight",64],["rearg",256]],P=/\b__p\+='';/g,Z=/\b(__p\+=)''\+/g,q=/(__e\(.*?\)|\b__t\))\+'';/g,V=/&(?:amp|lt|gt|quot|#39);/g,K=/[&<>"']/g,G=RegExp(V.source),H=RegExp(K.source),J=/<%-([\s\S]+?)%>/g,Y=/<%([\s\S]+?)%>/g,Q=/<%=([\s\S]+?)%>/g,X=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,nn=/^\w*$/,tn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,rn=/[\\^$.*+?()[\]{}|]/g,en=RegExp(rn.source),un=/^\s+|\s+$/g,on=/^\s+/,fn=/\s+$/,cn=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,an=/\{\n\/\* \[wrapped with (.+)\] \*/,ln=/,? & /,sn=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,hn=/\\(\\)?/g,pn=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,_n=/\w*$/,vn=/^[-+]0x[0-9a-f]+$/i,gn=/^0b[01]+$/i,dn=/^\[object .+?Constructor\]$/,yn=/^0o[0-7]+$/i,bn=/^(?:0|[1-9]\d*)$/,xn=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,jn=/($^)/,wn=/['\n\r\u2028\u2029\\]/g,mn="[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?(?:\\u200d(?:[^\\ud800-\\udfff]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff])[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?)*",An="(?:[\\u2700-\\u27bf]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff])"+mn,kn="(?:[^\\ud800-\\udfff][\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]?|[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff]|[\\ud800-\\udfff])",En=RegExp("['\u2019]","g"),Sn=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g"),On=RegExp("\\ud83c[\\udffb-\\udfff](?=\\ud83c[\\udffb-\\udfff])|"+kn+mn,"g"),In=RegExp(["[A-Z\\xc0-\\xd6\\xd8-\\xde]?[a-z\\xdf-\\xf6\\xf8-\\xff]+(?:['\u2019](?:d|ll|m|re|s|t|ve))?(?=[\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000]|[A-Z\\xc0-\\xd6\\xd8-\\xde]|$)|(?:[A-Z\\xc0-\\xd6\\xd8-\\xde]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?:['\u2019](?:D|LL|M|RE|S|T|VE))?(?=[\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000]|[A-Z\\xc0-\\xd6\\xd8-\\xde](?:[a-z\\xdf-\\xf6\\xf8-\\xff]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])|$)|[A-Z\\xc0-\\xd6\\xd8-\\xde]?(?:[a-z\\xdf-\\xf6\\xf8-\\xff]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?:['\u2019](?:d|ll|m|re|s|t|ve))?|[A-Z\\xc0-\\xd6\\xd8-\\xde]+(?:['\u2019](?:D|LL|M|RE|S|T|VE))?|\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])|\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])|\\d+",An].join("|"),"g"),Rn=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]"),zn=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Wn="Array Buffer DataView Date Error Float32Array Float64Array Function Int8Array Int16Array Int32Array Map Math Object Promise RegExp Set String Symbol TypeError Uint8Array Uint8ClampedArray Uint16Array Uint32Array WeakMap _ clearTimeout isFinite parseInt setTimeout".split(" "),Un={};
	Un["[object Float32Array]"]=Un["[object Float64Array]"]=Un["[object Int8Array]"]=Un["[object Int16Array]"]=Un["[object Int32Array]"]=Un["[object Uint8Array]"]=Un["[object Uint8ClampedArray]"]=Un["[object Uint16Array]"]=Un["[object Uint32Array]"]=true,Un["[object Arguments]"]=Un["[object Array]"]=Un["[object ArrayBuffer]"]=Un["[object Boolean]"]=Un["[object DataView]"]=Un["[object Date]"]=Un["[object Error]"]=Un["[object Function]"]=Un["[object Map]"]=Un["[object Number]"]=Un["[object Object]"]=Un["[object RegExp]"]=Un["[object Set]"]=Un["[object String]"]=Un["[object WeakMap]"]=false;
	var Bn={};Bn["[object Arguments]"]=Bn["[object Array]"]=Bn["[object ArrayBuffer]"]=Bn["[object DataView]"]=Bn["[object Boolean]"]=Bn["[object Date]"]=Bn["[object Float32Array]"]=Bn["[object Float64Array]"]=Bn["[object Int8Array]"]=Bn["[object Int16Array]"]=Bn["[object Int32Array]"]=Bn["[object Map]"]=Bn["[object Number]"]=Bn["[object Object]"]=Bn["[object RegExp]"]=Bn["[object Set]"]=Bn["[object String]"]=Bn["[object Symbol]"]=Bn["[object Uint8Array]"]=Bn["[object Uint8ClampedArray]"]=Bn["[object Uint16Array]"]=Bn["[object Uint32Array]"]=true,
	Bn["[object Error]"]=Bn["[object Function]"]=Bn["[object WeakMap]"]=false;var Ln={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Cn=parseFloat,Dn=parseInt,Mn=typeof global=="object"&&global&&global.Object===Object&&global,Tn=typeof self=="object"&&self&&self.Object===Object&&self,$n=Mn||Tn||Function("return this")(),Fn=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Nn=Fn&&typeof module=="object"&&module&&!module.nodeType&&module,Pn=Nn&&Nn.exports===Fn,Zn=Pn&&Mn.process,qn=function(){
	try{var n=Nn&&Nn.require&&Nn.require("util").types;return n?n:Zn&&Zn.binding&&Zn.binding("util")}catch(n){}}(),Vn=qn&&qn.isArrayBuffer,Kn=qn&&qn.isDate,Gn=qn&&qn.isMap,Hn=qn&&qn.isRegExp,Jn=qn&&qn.isSet,Yn=qn&&qn.isTypedArray,Qn=b("length"),Xn=x({"\xc0":"A","\xc1":"A","\xc2":"A","\xc3":"A","\xc4":"A","\xc5":"A","\xe0":"a","\xe1":"a","\xe2":"a","\xe3":"a","\xe4":"a","\xe5":"a","\xc7":"C","\xe7":"c","\xd0":"D","\xf0":"d","\xc8":"E","\xc9":"E","\xca":"E","\xcb":"E","\xe8":"e","\xe9":"e","\xea":"e","\xeb":"e",
	"\xcc":"I","\xcd":"I","\xce":"I","\xcf":"I","\xec":"i","\xed":"i","\xee":"i","\xef":"i","\xd1":"N","\xf1":"n","\xd2":"O","\xd3":"O","\xd4":"O","\xd5":"O","\xd6":"O","\xd8":"O","\xf2":"o","\xf3":"o","\xf4":"o","\xf5":"o","\xf6":"o","\xf8":"o","\xd9":"U","\xda":"U","\xdb":"U","\xdc":"U","\xf9":"u","\xfa":"u","\xfb":"u","\xfc":"u","\xdd":"Y","\xfd":"y","\xff":"y","\xc6":"Ae","\xe6":"ae","\xde":"Th","\xfe":"th","\xdf":"ss","\u0100":"A","\u0102":"A","\u0104":"A","\u0101":"a","\u0103":"a","\u0105":"a",
	"\u0106":"C","\u0108":"C","\u010a":"C","\u010c":"C","\u0107":"c","\u0109":"c","\u010b":"c","\u010d":"c","\u010e":"D","\u0110":"D","\u010f":"d","\u0111":"d","\u0112":"E","\u0114":"E","\u0116":"E","\u0118":"E","\u011a":"E","\u0113":"e","\u0115":"e","\u0117":"e","\u0119":"e","\u011b":"e","\u011c":"G","\u011e":"G","\u0120":"G","\u0122":"G","\u011d":"g","\u011f":"g","\u0121":"g","\u0123":"g","\u0124":"H","\u0126":"H","\u0125":"h","\u0127":"h","\u0128":"I","\u012a":"I","\u012c":"I","\u012e":"I","\u0130":"I",
	"\u0129":"i","\u012b":"i","\u012d":"i","\u012f":"i","\u0131":"i","\u0134":"J","\u0135":"j","\u0136":"K","\u0137":"k","\u0138":"k","\u0139":"L","\u013b":"L","\u013d":"L","\u013f":"L","\u0141":"L","\u013a":"l","\u013c":"l","\u013e":"l","\u0140":"l","\u0142":"l","\u0143":"N","\u0145":"N","\u0147":"N","\u014a":"N","\u0144":"n","\u0146":"n","\u0148":"n","\u014b":"n","\u014c":"O","\u014e":"O","\u0150":"O","\u014d":"o","\u014f":"o","\u0151":"o","\u0154":"R","\u0156":"R","\u0158":"R","\u0155":"r","\u0157":"r",
	"\u0159":"r","\u015a":"S","\u015c":"S","\u015e":"S","\u0160":"S","\u015b":"s","\u015d":"s","\u015f":"s","\u0161":"s","\u0162":"T","\u0164":"T","\u0166":"T","\u0163":"t","\u0165":"t","\u0167":"t","\u0168":"U","\u016a":"U","\u016c":"U","\u016e":"U","\u0170":"U","\u0172":"U","\u0169":"u","\u016b":"u","\u016d":"u","\u016f":"u","\u0171":"u","\u0173":"u","\u0174":"W","\u0175":"w","\u0176":"Y","\u0177":"y","\u0178":"Y","\u0179":"Z","\u017b":"Z","\u017d":"Z","\u017a":"z","\u017c":"z","\u017e":"z","\u0132":"IJ",
	"\u0133":"ij","\u0152":"Oe","\u0153":"oe","\u0149":"'n","\u017f":"s"}),nt=x({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}),tt=x({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"}),rt=function x(mn){function An(n){if(yu(n)&&!ff(n)&&!(n instanceof Ln)){if(n instanceof On)return n;if(oi.call(n,"__wrapped__"))return Fe(n)}return new On(n)}function kn(){}function On(n,t){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!t,this.__index__=0,this.__values__=T}function Ln(n){
	this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=false,this.__iteratees__=[],this.__takeCount__=4294967295,this.__views__=[]}function Mn(n){var t=-1,r=null==n?0:n.length;for(this.clear();++t<r;){var e=n[t];this.set(e[0],e[1])}}function Tn(n){var t=-1,r=null==n?0:n.length;for(this.clear();++t<r;){var e=n[t];this.set(e[0],e[1])}}function Fn(n){var t=-1,r=null==n?0:n.length;for(this.clear();++t<r;){var e=n[t];this.set(e[0],e[1])}}function Nn(n){var t=-1,r=null==n?0:n.length;for(this.__data__=new Fn;++t<r;)this.add(n[t]);
	}function Zn(n){this.size=(this.__data__=new Tn(n)).size}function qn(n,t){var r,e=ff(n),u=!e&&of(n),i=!e&&!u&&af(n),o=!e&&!u&&!i&&_f(n),u=(e=e||u||i||o)?A(n.length,ni):[],f=u.length;for(r in n)!t&&!oi.call(n,r)||e&&("length"==r||i&&("offset"==r||"parent"==r)||o&&("buffer"==r||"byteLength"==r||"byteOffset"==r)||Se(r,f))||u.push(r);return u}function Qn(n){var t=n.length;return t?n[ir(0,t-1)]:T}function et(n,t){return De(Lr(n),pt(t,0,n.length))}function ut(n){return De(Lr(n))}function it(n,t,r){(r===T||lu(n[t],r))&&(r!==T||t in n)||st(n,t,r);
	}function ot(n,t,r){var e=n[t];oi.call(n,t)&&lu(e,r)&&(r!==T||t in n)||st(n,t,r)}function ft(n,t){for(var r=n.length;r--;)if(lu(n[r][0],t))return r;return-1}function ct(n,t,r,e){return uo(n,function(n,u,i){t(e,n,r(n),i)}),e}function at(n,t){return n&&Cr(t,Wu(t),n)}function lt(n,t){return n&&Cr(t,Uu(t),n)}function st(n,t,r){"__proto__"==t&&Ai?Ai(n,t,{configurable:true,enumerable:true,value:r,writable:true}):n[t]=r}function ht(n,t){for(var r=-1,e=t.length,u=Ku(e),i=null==n;++r<e;)u[r]=i?T:Ru(n,t[r]);return u;
	}function pt(n,t,r){return n===n&&(r!==T&&(n=n<=r?n:r),t!==T&&(n=n>=t?n:t)),n}function _t(n,t,e,u,i,o){var f,c=1&t,a=2&t,l=4&t;if(e&&(f=i?e(n,u,i,o):e(n)),f!==T)return f;if(!du(n))return n;if(u=ff(n)){if(f=me(n),!c)return Lr(n,f)}else{var s=vo(n),h="[object Function]"==s||"[object GeneratorFunction]"==s;if(af(n))return Ir(n,c);if("[object Object]"==s||"[object Arguments]"==s||h&&!i){if(f=a||h?{}:Ae(n),!c)return a?Mr(n,lt(f,n)):Dr(n,at(f,n))}else{if(!Bn[s])return i?n:{};f=ke(n,s,c)}}if(o||(o=new Zn),
	i=o.get(n))return i;if(o.set(n,f),pf(n))return n.forEach(function(r){f.add(_t(r,t,e,r,n,o))}),f;if(sf(n))return n.forEach(function(r,u){f.set(u,_t(r,t,e,u,n,o))}),f;var a=l?a?ve:_e:a?Uu:Wu,p=u?T:a(n);return r(p||n,function(r,u){p&&(u=r,r=n[u]),ot(f,u,_t(r,t,e,u,n,o))}),f}function vt(n){var t=Wu(n);return function(r){return gt(r,n,t)}}function gt(n,t,r){var e=r.length;if(null==n)return!e;for(n=Qu(n);e--;){var u=r[e],i=t[u],o=n[u];if(o===T&&!(u in n)||!i(o))return false}return true}function dt(n,t,r){if(typeof n!="function")throw new ti("Expected a function");
	return bo(function(){n.apply(T,r)},t)}function yt(n,t,r,e){var u=-1,i=o,a=true,l=n.length,s=[],h=t.length;if(!l)return s;r&&(t=c(t,E(r))),e?(i=f,a=false):200<=t.length&&(i=O,a=false,t=new Nn(t));n:for(;++u<l;){var p=n[u],_=null==r?p:r(p),p=e||0!==p?p:0;if(a&&_===_){for(var v=h;v--;)if(t[v]===_)continue n;s.push(p)}else i(t,_,e)||s.push(p)}return s}function bt(n,t){var r=true;return uo(n,function(n,e,u){return r=!!t(n,e,u)}),r}function xt(n,t,r){for(var e=-1,u=n.length;++e<u;){var i=n[e],o=t(i);if(null!=o&&(f===T?o===o&&!wu(o):r(o,f)))var f=o,c=i;
	}return c}function jt(n,t){var r=[];return uo(n,function(n,e,u){t(n,e,u)&&r.push(n)}),r}function wt(n,t,r,e,u){var i=-1,o=n.length;for(r||(r=Ee),u||(u=[]);++i<o;){var f=n[i];0<t&&r(f)?1<t?wt(f,t-1,r,e,u):a(u,f):e||(u[u.length]=f)}return u}function mt(n,t){return n&&oo(n,t,Wu)}function At(n,t){return n&&fo(n,t,Wu)}function kt(n,t){return i(t,function(t){return _u(n[t])})}function Et(n,t){t=Sr(t,n);for(var r=0,e=t.length;null!=n&&r<e;)n=n[Me(t[r++])];return r&&r==e?n:T}function St(n,t,r){return t=t(n),
	ff(n)?t:a(t,r(n))}function Ot(n){if(null==n)return n===T?"[object Undefined]":"[object Null]";if(mi&&mi in Qu(n)){var t=oi.call(n,mi),r=n[mi];try{n[mi]=T;var e=true}catch(n){}var u=ai.call(n);e&&(t?n[mi]=r:delete n[mi]),n=u}else n=ai.call(n);return n}function It(n,t){return n>t}function Rt(n,t){return null!=n&&oi.call(n,t)}function zt(n,t){return null!=n&&t in Qu(n)}function Wt(n,t,r){for(var e=r?f:o,u=n[0].length,i=n.length,a=i,l=Ku(i),s=1/0,h=[];a--;){var p=n[a];a&&t&&(p=c(p,E(t))),s=Ci(p.length,s),
	l[a]=!r&&(t||120<=u&&120<=p.length)?new Nn(a&&p):T}var p=n[0],_=-1,v=l[0];n:for(;++_<u&&h.length<s;){var g=p[_],d=t?t(g):g,g=r||0!==g?g:0;if(v?!O(v,d):!e(h,d,r)){for(a=i;--a;){var y=l[a];if(y?!O(y,d):!e(n[a],d,r))continue n}v&&v.push(d),h.push(g)}}return h}function Ut(n,t,r,e){return mt(n,function(n,u,i){t(e,r(n),u,i)}),e}function Bt(t,r,e){return r=Sr(r,t),t=2>r.length?t:Et(t,hr(r,0,-1)),r=null==t?t:t[Me(Ve(r))],null==r?T:n(r,t,e)}function Lt(n){return yu(n)&&"[object Arguments]"==Ot(n)}function Ct(n){
	return yu(n)&&"[object ArrayBuffer]"==Ot(n)}function Dt(n){return yu(n)&&"[object Date]"==Ot(n)}function Mt(n,t,r,e,u){if(n===t)return true;if(null==n||null==t||!yu(n)&&!yu(t))return n!==n&&t!==t;n:{var i=ff(n),o=ff(t),f=i?"[object Array]":vo(n),c=o?"[object Array]":vo(t),f="[object Arguments]"==f?"[object Object]":f,c="[object Arguments]"==c?"[object Object]":c,a="[object Object]"==f,o="[object Object]"==c;if((c=f==c)&&af(n)){if(!af(t)){t=false;break n}i=true,a=false}if(c&&!a)u||(u=new Zn),t=i||_f(n)?se(n,t,r,e,Mt,u):he(n,t,f,r,e,Mt,u);else{
	if(!(1&r)&&(i=a&&oi.call(n,"__wrapped__"),f=o&&oi.call(t,"__wrapped__"),i||f)){n=i?n.value():n,t=f?t.value():t,u||(u=new Zn),t=Mt(n,t,r,e,u);break n}if(c)t:if(u||(u=new Zn),i=1&r,f=_e(n),o=f.length,c=_e(t).length,o==c||i){for(a=o;a--;){var l=f[a];if(!(i?l in t:oi.call(t,l))){t=false;break t}}if((c=u.get(n))&&u.get(t))t=c==t;else{c=true,u.set(n,t),u.set(t,n);for(var s=i;++a<o;){var l=f[a],h=n[l],p=t[l];if(e)var _=i?e(p,h,l,t,n,u):e(h,p,l,n,t,u);if(_===T?h!==p&&!Mt(h,p,r,e,u):!_){c=false;break}s||(s="constructor"==l);
	}c&&!s&&(r=n.constructor,e=t.constructor,r!=e&&"constructor"in n&&"constructor"in t&&!(typeof r=="function"&&r instanceof r&&typeof e=="function"&&e instanceof e)&&(c=false)),u.delete(n),u.delete(t),t=c}}else t=false;else t=false}}return t}function Tt(n){return yu(n)&&"[object Map]"==vo(n)}function $t(n,t,r,e){var u=r.length,i=u,o=!e;if(null==n)return!i;for(n=Qu(n);u--;){var f=r[u];if(o&&f[2]?f[1]!==n[f[0]]:!(f[0]in n))return false}for(;++u<i;){var f=r[u],c=f[0],a=n[c],l=f[1];if(o&&f[2]){if(a===T&&!(c in n))return false;
	}else{if(f=new Zn,e)var s=e(a,l,c,n,t,f);if(s===T?!Mt(l,a,3,e,f):!s)return false}}return true}function Ft(n){return!(!du(n)||ci&&ci in n)&&(_u(n)?hi:dn).test(Te(n))}function Nt(n){return yu(n)&&"[object RegExp]"==Ot(n)}function Pt(n){return yu(n)&&"[object Set]"==vo(n)}function Zt(n){return yu(n)&&gu(n.length)&&!!Un[Ot(n)]}function qt(n){return typeof n=="function"?n:null==n?$u:typeof n=="object"?ff(n)?Jt(n[0],n[1]):Ht(n):Zu(n)}function Vt(n){if(!ze(n))return Bi(n);var t,r=[];for(t in Qu(n))oi.call(n,t)&&"constructor"!=t&&r.push(t);
	return r}function Kt(n,t){return n<t}function Gt(n,t){var r=-1,e=su(n)?Ku(n.length):[];return uo(n,function(n,u,i){e[++r]=t(n,u,i)}),e}function Ht(n){var t=xe(n);return 1==t.length&&t[0][2]?We(t[0][0],t[0][1]):function(r){return r===n||$t(r,n,t)}}function Jt(n,t){return Ie(n)&&t===t&&!du(t)?We(Me(n),t):function(r){var e=Ru(r,n);return e===T&&e===t?zu(r,n):Mt(t,e,3)}}function Yt(n,t,r,e,u){n!==t&&oo(t,function(i,o){if(du(i)){u||(u=new Zn);var f=u,c=Be(n,o),a=Be(t,o),l=f.get(a);if(!l){var l=e?e(c,a,o+"",n,t,f):T,s=l===T;
	if(s){var h=ff(a),p=!h&&af(a),_=!h&&!p&&_f(a),l=a;h||p||_?ff(c)?l=c:hu(c)?l=Lr(c):p?(s=false,l=Ir(a,true)):_?(s=false,l=zr(a,true)):l=[]:xu(a)||of(a)?(l=c,of(c)?l=Ou(c):du(c)&&!_u(c)||(l=Ae(a))):s=false}s&&(f.set(a,l),Yt(l,a,r,e,f),f.delete(a))}it(n,o,l)}else f=e?e(Be(n,o),i,o+"",n,t,u):T,f===T&&(f=i),it(n,o,f)},Uu)}function Qt(n,t){var r=n.length;if(r)return t+=0>t?r:0,Se(t,r)?n[t]:T}function Xt(n,t,r){var e=-1;return t=c(t.length?t:[$u],E(ye())),n=Gt(n,function(n,r,u){return{a:c(t,function(t){return t(n)}),
	b:++e,c:n}}),w(n,function(n,t){var e;n:{e=-1;for(var u=n.a,i=t.a,o=u.length,f=r.length;++e<o;){var c=Wr(u[e],i[e]);if(c){if(e>=f){e=c;break n}e=c*("desc"==r[e]?-1:1);break n}}e=n.b-t.b}return e})}function nr(n,t){return tr(n,t,function(t,r){return zu(n,r)})}function tr(n,t,r){for(var e=-1,u=t.length,i={};++e<u;){var o=t[e],f=Et(n,o);r(f,o)&&lr(i,Sr(o,n),f)}return i}function rr(n){return function(t){return Et(t,n)}}function er(n,t,r,e){var u=e?g:v,i=-1,o=t.length,f=n;for(n===t&&(t=Lr(t)),r&&(f=c(n,E(r)));++i<o;)for(var a=0,l=t[i],l=r?r(l):l;-1<(a=u(f,l,a,e));)f!==n&&xi.call(f,a,1),
	xi.call(n,a,1);return n}function ur(n,t){for(var r=n?t.length:0,e=r-1;r--;){var u=t[r];if(r==e||u!==i){var i=u;Se(u)?xi.call(n,u,1):xr(n,u)}}return n}function ir(n,t){return n+Ii(Ti()*(t-n+1))}function or(n,t){var r="";if(!n||1>t||9007199254740991<t)return r;do t%2&&(r+=n),(t=Ii(t/2))&&(n+=n);while(t);return r}function fr(n,t){return xo(Ue(n,t,$u),n+"")}function cr(n){return Qn(Lu(n))}function ar(n,t){var r=Lu(n);return De(r,pt(t,0,r.length))}function lr(n,t,r,e){if(!du(n))return n;t=Sr(t,n);for(var u=-1,i=t.length,o=i-1,f=n;null!=f&&++u<i;){
	var c=Me(t[u]),a=r;if(u!=o){var l=f[c],a=e?e(l,c,f):T;a===T&&(a=du(l)?l:Se(t[u+1])?[]:{})}ot(f,c,a),f=f[c]}return n}function sr(n){return De(Lu(n))}function hr(n,t,r){var e=-1,u=n.length;for(0>t&&(t=-t>u?0:u+t),r=r>u?u:r,0>r&&(r+=u),u=t>r?0:r-t>>>0,t>>>=0,r=Ku(u);++e<u;)r[e]=n[e+t];return r}function pr(n,t){var r;return uo(n,function(n,e,u){return r=t(n,e,u),!r}),!!r}function _r(n,t,r){var e=0,u=null==n?e:n.length;if(typeof t=="number"&&t===t&&2147483647>=u){for(;e<u;){var i=e+u>>>1,o=n[i];null!==o&&!wu(o)&&(r?o<=t:o<t)?e=i+1:u=i;
	}return u}return vr(n,t,$u,r)}function vr(n,t,r,e){t=r(t);for(var u=0,i=null==n?0:n.length,o=t!==t,f=null===t,c=wu(t),a=t===T;u<i;){var l=Ii((u+i)/2),s=r(n[l]),h=s!==T,p=null===s,_=s===s,v=wu(s);(o?e||_:a?_&&(e||h):f?_&&h&&(e||!p):c?_&&h&&!p&&(e||!v):p||v?0:e?s<=t:s<t)?u=l+1:i=l}return Ci(i,4294967294)}function gr(n,t){for(var r=-1,e=n.length,u=0,i=[];++r<e;){var o=n[r],f=t?t(o):o;if(!r||!lu(f,c)){var c=f;i[u++]=0===o?0:o}}return i}function dr(n){return typeof n=="number"?n:wu(n)?F:+n}function yr(n){
	if(typeof n=="string")return n;if(ff(n))return c(n,yr)+"";if(wu(n))return ro?ro.call(n):"";var t=n+"";return"0"==t&&1/n==-$?"-0":t}function br(n,t,r){var e=-1,u=o,i=n.length,c=true,a=[],l=a;if(r)c=false,u=f;else if(200<=i){if(u=t?null:so(n))return L(u);c=false,u=O,l=new Nn}else l=t?[]:a;n:for(;++e<i;){var s=n[e],h=t?t(s):s,s=r||0!==s?s:0;if(c&&h===h){for(var p=l.length;p--;)if(l[p]===h)continue n;t&&l.push(h),a.push(s)}else u(l,h,r)||(l!==a&&l.push(h),a.push(s))}return a}function xr(n,t){return t=Sr(t,n),
	n=2>t.length?n:Et(n,hr(t,0,-1)),null==n||delete n[Me(Ve(t))]}function jr(n,t,r,e){for(var u=n.length,i=e?u:-1;(e?i--:++i<u)&&t(n[i],i,n););return r?hr(n,e?0:i,e?i+1:u):hr(n,e?i+1:0,e?u:i)}function wr(n,t){var r=n;return r instanceof Ln&&(r=r.value()),l(t,function(n,t){return t.func.apply(t.thisArg,a([n],t.args))},r)}function mr(n,t,r){var e=n.length;if(2>e)return e?br(n[0]):[];for(var u=-1,i=Ku(e);++u<e;)for(var o=n[u],f=-1;++f<e;)f!=u&&(i[u]=yt(i[u]||o,n[f],t,r));return br(wt(i,1),t,r)}function Ar(n,t,r){
	for(var e=-1,u=n.length,i=t.length,o={};++e<u;)r(o,n[e],e<i?t[e]:T);return o}function kr(n){return hu(n)?n:[]}function Er(n){return typeof n=="function"?n:$u}function Sr(n,t){return ff(n)?n:Ie(n,t)?[n]:jo(Iu(n))}function Or(n,t,r){var e=n.length;return r=r===T?e:r,!t&&r>=e?n:hr(n,t,r)}function Ir(n,t){if(t)return n.slice();var r=n.length,r=gi?gi(r):new n.constructor(r);return n.copy(r),r}function Rr(n){var t=new n.constructor(n.byteLength);return new vi(t).set(new vi(n)),t}function zr(n,t){return new n.constructor(t?Rr(n.buffer):n.buffer,n.byteOffset,n.length);
	}function Wr(n,t){if(n!==t){var r=n!==T,e=null===n,u=n===n,i=wu(n),o=t!==T,f=null===t,c=t===t,a=wu(t);if(!f&&!a&&!i&&n>t||i&&o&&c&&!f&&!a||e&&o&&c||!r&&c||!u)return 1;if(!e&&!i&&!a&&n<t||a&&r&&u&&!e&&!i||f&&r&&u||!o&&u||!c)return-1}return 0}function Ur(n,t,r,e){var u=-1,i=n.length,o=r.length,f=-1,c=t.length,a=Li(i-o,0),l=Ku(c+a);for(e=!e;++f<c;)l[f]=t[f];for(;++u<o;)(e||u<i)&&(l[r[u]]=n[u]);for(;a--;)l[f++]=n[u++];return l}function Br(n,t,r,e){var u=-1,i=n.length,o=-1,f=r.length,c=-1,a=t.length,l=Li(i-f,0),s=Ku(l+a);
	for(e=!e;++u<l;)s[u]=n[u];for(l=u;++c<a;)s[l+c]=t[c];for(;++o<f;)(e||u<i)&&(s[l+r[o]]=n[u++]);return s}function Lr(n,t){var r=-1,e=n.length;for(t||(t=Ku(e));++r<e;)t[r]=n[r];return t}function Cr(n,t,r,e){var u=!r;r||(r={});for(var i=-1,o=t.length;++i<o;){var f=t[i],c=e?e(r[f],n[f],f,r,n):T;c===T&&(c=n[f]),u?st(r,f,c):ot(r,f,c)}return r}function Dr(n,t){return Cr(n,po(n),t)}function Mr(n,t){return Cr(n,_o(n),t)}function Tr(n,r){return function(e,u){var i=ff(e)?t:ct,o=r?r():{};return i(e,n,ye(u,2),o);
	}}function $r(n){return fr(function(t,r){var e=-1,u=r.length,i=1<u?r[u-1]:T,o=2<u?r[2]:T,i=3<n.length&&typeof i=="function"?(u--,i):T;for(o&&Oe(r[0],r[1],o)&&(i=3>u?T:i,u=1),t=Qu(t);++e<u;)(o=r[e])&&n(t,o,e,i);return t})}function Fr(n,t){return function(r,e){if(null==r)return r;if(!su(r))return n(r,e);for(var u=r.length,i=t?u:-1,o=Qu(r);(t?i--:++i<u)&&false!==e(o[i],i,o););return r}}function Nr(n){return function(t,r,e){var u=-1,i=Qu(t);e=e(t);for(var o=e.length;o--;){var f=e[n?o:++u];if(false===r(i[f],f,i))break;
	}return t}}function Pr(n,t,r){function e(){return(this&&this!==$n&&this instanceof e?i:n).apply(u?r:this,arguments)}var u=1&t,i=Vr(n);return e}function Zr(n){return function(t){t=Iu(t);var r=Rn.test(t)?M(t):T,e=r?r[0]:t.charAt(0);return t=r?Or(r,1).join(""):t.slice(1),e[n]()+t}}function qr(n){return function(t){return l(Mu(Du(t).replace(En,"")),n,"")}}function Vr(n){return function(){var t=arguments;switch(t.length){case 0:return new n;case 1:return new n(t[0]);case 2:return new n(t[0],t[1]);case 3:
	return new n(t[0],t[1],t[2]);case 4:return new n(t[0],t[1],t[2],t[3]);case 5:return new n(t[0],t[1],t[2],t[3],t[4]);case 6:return new n(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new n(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var r=eo(n.prototype),t=n.apply(r,t);return du(t)?t:r}}function Kr(t,r,e){function u(){for(var o=arguments.length,f=Ku(o),c=o,a=de(u);c--;)f[c]=arguments[c];return c=3>o&&f[0]!==a&&f[o-1]!==a?[]:B(f,a),o-=c.length,o<e?ue(t,r,Jr,u.placeholder,T,f,c,T,T,e-o):n(this&&this!==$n&&this instanceof u?i:t,this,f);
	}var i=Vr(t);return u}function Gr(n){return function(t,r,e){var u=Qu(t);if(!su(t)){var i=ye(r,3);t=Wu(t),r=function(n){return i(u[n],n,u)}}return r=n(t,r,e),-1<r?u[i?t[r]:r]:T}}function Hr(n){return pe(function(t){var r=t.length,e=r,u=On.prototype.thru;for(n&&t.reverse();e--;){var i=t[e];if(typeof i!="function")throw new ti("Expected a function");if(u&&!o&&"wrapper"==ge(i))var o=new On([],true)}for(e=o?e:r;++e<r;)var i=t[e],u=ge(i),f="wrapper"==u?ho(i):T,o=f&&Re(f[0])&&424==f[1]&&!f[4].length&&1==f[9]?o[ge(f[0])].apply(o,f[3]):1==i.length&&Re(i)?o[u]():o.thru(i);
	return function(){var n=arguments,e=n[0];if(o&&1==n.length&&ff(e))return o.plant(e).value();for(var u=0,n=r?t[u].apply(this,n):e;++u<r;)n=t[u].call(this,n);return n}})}function Jr(n,t,r,e,u,i,o,f,c,a){function l(){for(var d=arguments.length,y=Ku(d),b=d;b--;)y[b]=arguments[b];if(_){var x,j=de(l),b=y.length;for(x=0;b--;)y[b]===j&&++x}if(e&&(y=Ur(y,e,u,_)),i&&(y=Br(y,i,o,_)),d-=x,_&&d<a)return j=B(y,j),ue(n,t,Jr,l.placeholder,r,y,j,f,c,a-d);if(j=h?r:this,b=p?j[n]:n,d=y.length,f){x=y.length;for(var w=Ci(f.length,x),m=Lr(y);w--;){
	var A=f[w];y[w]=Se(A,x)?m[A]:T}}else v&&1<d&&y.reverse();return s&&c<d&&(y.length=c),this&&this!==$n&&this instanceof l&&(b=g||Vr(b)),b.apply(j,y)}var s=128&t,h=1&t,p=2&t,_=24&t,v=512&t,g=p?T:Vr(n);return l}function Yr(n,t){return function(r,e){return Ut(r,n,t(e),{})}}function Qr(n,t){return function(r,e){var u;if(r===T&&e===T)return t;if(r!==T&&(u=r),e!==T){if(u===T)return e;typeof r=="string"||typeof e=="string"?(r=yr(r),e=yr(e)):(r=dr(r),e=dr(e)),u=n(r,e)}return u}}function Xr(t){return pe(function(r){
	return r=c(r,E(ye())),fr(function(e){var u=this;return t(r,function(t){return n(t,u,e)})})})}function ne(n,t){t=t===T?" ":yr(t);var r=t.length;return 2>r?r?or(t,n):t:(r=or(t,Oi(n/D(t))),Rn.test(t)?Or(M(r),0,n).join(""):r.slice(0,n))}function te(t,r,e,u){function i(){for(var r=-1,c=arguments.length,a=-1,l=u.length,s=Ku(l+c),h=this&&this!==$n&&this instanceof i?f:t;++a<l;)s[a]=u[a];for(;c--;)s[a++]=arguments[++r];return n(h,o?e:this,s)}var o=1&r,f=Vr(t);return i}function re(n){return function(t,r,e){
	e&&typeof e!="number"&&Oe(t,r,e)&&(r=e=T),t=Au(t),r===T?(r=t,t=0):r=Au(r),e=e===T?t<r?1:-1:Au(e);var u=-1;r=Li(Oi((r-t)/(e||1)),0);for(var i=Ku(r);r--;)i[n?r:++u]=t,t+=e;return i}}function ee(n){return function(t,r){return typeof t=="string"&&typeof r=="string"||(t=Su(t),r=Su(r)),n(t,r)}}function ue(n,t,r,e,u,i,o,f,c,a){var l=8&t,s=l?o:T;o=l?T:o;var h=l?i:T;return i=l?T:i,t=(t|(l?32:64))&~(l?64:32),4&t||(t&=-4),u=[n,t,u,h,s,i,o,f,c,a],r=r.apply(T,u),Re(n)&&yo(r,u),r.placeholder=e,Le(r,n,t)}function ie(n){
	var t=Yu[n];return function(n,r){if(n=Su(n),r=null==r?0:Ci(ku(r),292)){var e=(Iu(n)+"e").split("e"),e=t(e[0]+"e"+(+e[1]+r)),e=(Iu(e)+"e").split("e");return+(e[0]+"e"+(+e[1]-r))}return t(n)}}function oe(n){return function(t){var r=vo(t);return"[object Map]"==r?W(t):"[object Set]"==r?C(t):k(t,n(t))}}function fe(n,t,r,e,u,i,o,f){var c=2&t;if(!c&&typeof n!="function")throw new ti("Expected a function");var a=e?e.length:0;if(a||(t&=-97,e=u=T),o=o===T?o:Li(ku(o),0),f=f===T?f:ku(f),a-=u?u.length:0,64&t){
	var l=e,s=u;e=u=T}var h=c?T:ho(n);return i=[n,t,r,e,u,l,s,i,o,f],h&&(r=i[1],n=h[1],t=r|n,e=128==n&&8==r||128==n&&256==r&&i[7].length<=h[8]||384==n&&h[7].length<=h[8]&&8==r,131>t||e)&&(1&n&&(i[2]=h[2],t|=1&r?0:4),(r=h[3])&&(e=i[3],i[3]=e?Ur(e,r,h[4]):r,i[4]=e?B(i[3],"__lodash_placeholder__"):h[4]),(r=h[5])&&(e=i[5],i[5]=e?Br(e,r,h[6]):r,i[6]=e?B(i[5],"__lodash_placeholder__"):h[6]),(r=h[7])&&(i[7]=r),128&n&&(i[8]=null==i[8]?h[8]:Ci(i[8],h[8])),null==i[9]&&(i[9]=h[9]),i[0]=h[0],i[1]=t),n=i[0],t=i[1],
	r=i[2],e=i[3],u=i[4],f=i[9]=i[9]===T?c?0:n.length:Li(i[9]-a,0),!f&&24&t&&(t&=-25),c=t&&1!=t?8==t||16==t?Kr(n,t,f):32!=t&&33!=t||u.length?Jr.apply(T,i):te(n,t,r,e):Pr(n,t,r),Le((h?co:yo)(c,i),n,t)}function ce(n,t,r,e){return n===T||lu(n,ei[r])&&!oi.call(e,r)?t:n}function ae(n,t,r,e,u,i){return du(n)&&du(t)&&(i.set(t,n),Yt(n,t,T,ae,i),i.delete(t)),n}function le(n){return xu(n)?T:n}function se(n,t,r,e,u,i){var o=1&r,f=n.length,c=t.length;if(f!=c&&!(o&&c>f))return false;if((c=i.get(n))&&i.get(t))return c==t;
	var c=-1,a=true,l=2&r?new Nn:T;for(i.set(n,t),i.set(t,n);++c<f;){var s=n[c],p=t[c];if(e)var _=o?e(p,s,c,t,n,i):e(s,p,c,n,t,i);if(_!==T){if(_)continue;a=false;break}if(l){if(!h(t,function(n,t){if(!O(l,t)&&(s===n||u(s,n,r,e,i)))return l.push(t)})){a=false;break}}else if(s!==p&&!u(s,p,r,e,i)){a=false;break}}return i.delete(n),i.delete(t),a}function he(n,t,r,e,u,i,o){switch(r){case"[object DataView]":if(n.byteLength!=t.byteLength||n.byteOffset!=t.byteOffset)break;n=n.buffer,t=t.buffer;case"[object ArrayBuffer]":
	if(n.byteLength!=t.byteLength||!i(new vi(n),new vi(t)))break;return true;case"[object Boolean]":case"[object Date]":case"[object Number]":return lu(+n,+t);case"[object Error]":return n.name==t.name&&n.message==t.message;case"[object RegExp]":case"[object String]":return n==t+"";case"[object Map]":var f=W;case"[object Set]":if(f||(f=L),n.size!=t.size&&!(1&e))break;return(r=o.get(n))?r==t:(e|=2,o.set(n,t),t=se(f(n),f(t),e,u,i,o),o.delete(n),t);case"[object Symbol]":if(to)return to.call(n)==to.call(t)}
	return false}function pe(n){return xo(Ue(n,T,Ze),n+"")}function _e(n){return St(n,Wu,po)}function ve(n){return St(n,Uu,_o)}function ge(n){for(var t=n.name+"",r=Gi[t],e=oi.call(Gi,t)?r.length:0;e--;){var u=r[e],i=u.func;if(null==i||i==n)return u.name}return t}function de(n){return(oi.call(An,"placeholder")?An:n).placeholder}function ye(){var n=An.iteratee||Fu,n=n===Fu?qt:n;return arguments.length?n(arguments[0],arguments[1]):n}function be(n,t){var r=n.__data__,e=typeof t;return("string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t)?r[typeof t=="string"?"string":"hash"]:r.map;
	}function xe(n){for(var t=Wu(n),r=t.length;r--;){var e=t[r],u=n[e];t[r]=[e,u,u===u&&!du(u)]}return t}function je(n,t){var r=null==n?T:n[t];return Ft(r)?r:T}function we(n,t,r){t=Sr(t,n);for(var e=-1,u=t.length,i=false;++e<u;){var o=Me(t[e]);if(!(i=null!=n&&r(n,o)))break;n=n[o]}return i||++e!=u?i:(u=null==n?0:n.length,!!u&&gu(u)&&Se(o,u)&&(ff(n)||of(n)))}function me(n){var t=n.length,r=new n.constructor(t);return t&&"string"==typeof n[0]&&oi.call(n,"index")&&(r.index=n.index,r.input=n.input),r}function Ae(n){
	return typeof n.constructor!="function"||ze(n)?{}:eo(di(n))}function ke(n,t,r){var e=n.constructor;switch(t){case"[object ArrayBuffer]":return Rr(n);case"[object Boolean]":case"[object Date]":return new e(+n);case"[object DataView]":return t=r?Rr(n.buffer):n.buffer,new n.constructor(t,n.byteOffset,n.byteLength);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":
	case"[object Uint16Array]":case"[object Uint32Array]":return zr(n,r);case"[object Map]":return new e;case"[object Number]":case"[object String]":return new e(n);case"[object RegExp]":return t=new n.constructor(n.source,_n.exec(n)),t.lastIndex=n.lastIndex,t;case"[object Set]":return new e;case"[object Symbol]":return to?Qu(to.call(n)):{}}}function Ee(n){return ff(n)||of(n)||!!(ji&&n&&n[ji])}function Se(n,t){var r=typeof n;return t=null==t?9007199254740991:t,!!t&&("number"==r||"symbol"!=r&&bn.test(n))&&-1<n&&0==n%1&&n<t;
	}function Oe(n,t,r){if(!du(r))return false;var e=typeof t;return!!("number"==e?su(r)&&Se(t,r.length):"string"==e&&t in r)&&lu(r[t],n)}function Ie(n,t){if(ff(n))return false;var r=typeof n;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=n&&!wu(n))||(nn.test(n)||!X.test(n)||null!=t&&n in Qu(t))}function Re(n){var t=ge(n),r=An[t];return typeof r=="function"&&t in Ln.prototype&&(n===r||(t=ho(r),!!t&&n===t[0]))}function ze(n){var t=n&&n.constructor;return n===(typeof t=="function"&&t.prototype||ei)}function We(n,t){
	return function(r){return null!=r&&(r[n]===t&&(t!==T||n in Qu(r)))}}function Ue(t,r,e){return r=Li(r===T?t.length-1:r,0),function(){for(var u=arguments,i=-1,o=Li(u.length-r,0),f=Ku(o);++i<o;)f[i]=u[r+i];for(i=-1,o=Ku(r+1);++i<r;)o[i]=u[i];return o[r]=e(f),n(t,this,o)}}function Be(n,t){if("__proto__"!=t)return n[t]}function Le(n,t,r){var e=t+"";t=xo;var u,i=$e;return u=(u=e.match(an))?u[1].split(ln):[],r=i(u,r),(i=r.length)&&(u=i-1,r[u]=(1<i?"& ":"")+r[u],r=r.join(2<i?", ":" "),e=e.replace(cn,"{\n/* [wrapped with "+r+"] */\n")),
	t(n,e)}function Ce(n){var t=0,r=0;return function(){var e=Di(),u=16-(e-r);if(r=e,0<u){if(800<=++t)return arguments[0]}else t=0;return n.apply(T,arguments)}}function De(n,t){var r=-1,e=n.length,u=e-1;for(t=t===T?e:t;++r<t;){var e=ir(r,u),i=n[e];n[e]=n[r],n[r]=i}return n.length=t,n}function Me(n){if(typeof n=="string"||wu(n))return n;var t=n+"";return"0"==t&&1/n==-$?"-0":t}function Te(n){if(null!=n){try{return ii.call(n)}catch(n){}return n+""}return""}function $e(n,t){return r(N,function(r){var e="_."+r[0];
	t&r[1]&&!o(n,e)&&n.push(e)}),n.sort()}function Fe(n){if(n instanceof Ln)return n.clone();var t=new On(n.__wrapped__,n.__chain__);return t.__actions__=Lr(n.__actions__),t.__index__=n.__index__,t.__values__=n.__values__,t}function Ne(n,t,r){var e=null==n?0:n.length;return e?(r=null==r?0:ku(r),0>r&&(r=Li(e+r,0)),_(n,ye(t,3),r)):-1}function Pe(n,t,r){var e=null==n?0:n.length;if(!e)return-1;var u=e-1;return r!==T&&(u=ku(r),u=0>r?Li(e+u,0):Ci(u,e-1)),_(n,ye(t,3),u,true)}function Ze(n){return(null==n?0:n.length)?wt(n,1):[];
	}function qe(n){return n&&n.length?n[0]:T}function Ve(n){var t=null==n?0:n.length;return t?n[t-1]:T}function Ke(n,t){return n&&n.length&&t&&t.length?er(n,t):n}function Ge(n){return null==n?n:$i.call(n)}function He(n){if(!n||!n.length)return[];var t=0;return n=i(n,function(n){if(hu(n))return t=Li(n.length,t),true}),A(t,function(t){return c(n,b(t))})}function Je(t,r){if(!t||!t.length)return[];var e=He(t);return null==r?e:c(e,function(t){return n(r,T,t)})}function Ye(n){return n=An(n),n.__chain__=true,n;
	}function Qe(n,t){return t(n)}function Xe(){return this}function nu(n,t){return(ff(n)?r:uo)(n,ye(t,3))}function tu(n,t){return(ff(n)?e:io)(n,ye(t,3))}function ru(n,t){return(ff(n)?c:Gt)(n,ye(t,3))}function eu(n,t,r){return t=r?T:t,t=n&&null==t?n.length:t,fe(n,128,T,T,T,T,t)}function uu(n,t){var r;if(typeof t!="function")throw new ti("Expected a function");return n=ku(n),function(){return 0<--n&&(r=t.apply(this,arguments)),1>=n&&(t=T),r}}function iu(n,t,r){return t=r?T:t,n=fe(n,8,T,T,T,T,T,t),n.placeholder=iu.placeholder,
	n}function ou(n,t,r){return t=r?T:t,n=fe(n,16,T,T,T,T,T,t),n.placeholder=ou.placeholder,n}function fu(n,t,r){function e(t){var r=c,e=a;return c=a=T,_=t,s=n.apply(e,r)}function u(n){var r=n-p;return n-=_,p===T||r>=t||0>r||g&&n>=l}function i(){var n=Go();if(u(n))return o(n);var r,e=bo;r=n-_,n=t-(n-p),r=g?Ci(n,l-r):n,h=e(i,r)}function o(n){return h=T,d&&c?e(n):(c=a=T,s)}function f(){var n=Go(),r=u(n);if(c=arguments,a=this,p=n,r){if(h===T)return _=n=p,h=bo(i,t),v?e(n):s;if(g)return h=bo(i,t),e(p)}return h===T&&(h=bo(i,t)),
	s}var c,a,l,s,h,p,_=0,v=false,g=false,d=true;if(typeof n!="function")throw new ti("Expected a function");return t=Su(t)||0,du(r)&&(v=!!r.leading,l=(g="maxWait"in r)?Li(Su(r.maxWait)||0,t):l,d="trailing"in r?!!r.trailing:d),f.cancel=function(){h!==T&&lo(h),_=0,c=p=a=h=T},f.flush=function(){return h===T?s:o(Go())},f}function cu(n,t){if(typeof n!="function"||null!=t&&typeof t!="function")throw new ti("Expected a function");var r=function(){var e=arguments,u=t?t.apply(this,e):e[0],i=r.cache;return i.has(u)?i.get(u):(e=n.apply(this,e),
	r.cache=i.set(u,e)||i,e)};return r.cache=new(cu.Cache||Fn),r}function au(n){if(typeof n!="function")throw new ti("Expected a function");return function(){var t=arguments;switch(t.length){case 0:return!n.call(this);case 1:return!n.call(this,t[0]);case 2:return!n.call(this,t[0],t[1]);case 3:return!n.call(this,t[0],t[1],t[2])}return!n.apply(this,t)}}function lu(n,t){return n===t||n!==n&&t!==t}function su(n){return null!=n&&gu(n.length)&&!_u(n)}function hu(n){return yu(n)&&su(n)}function pu(n){if(!yu(n))return false;
	var t=Ot(n);return"[object Error]"==t||"[object DOMException]"==t||typeof n.message=="string"&&typeof n.name=="string"&&!xu(n)}function _u(n){return!!du(n)&&(n=Ot(n),"[object Function]"==n||"[object GeneratorFunction]"==n||"[object AsyncFunction]"==n||"[object Proxy]"==n)}function vu(n){return typeof n=="number"&&n==ku(n)}function gu(n){return typeof n=="number"&&-1<n&&0==n%1&&9007199254740991>=n}function du(n){var t=typeof n;return null!=n&&("object"==t||"function"==t)}function yu(n){return null!=n&&typeof n=="object";
	}function bu(n){return typeof n=="number"||yu(n)&&"[object Number]"==Ot(n)}function xu(n){return!(!yu(n)||"[object Object]"!=Ot(n))&&(n=di(n),null===n||(n=oi.call(n,"constructor")&&n.constructor,typeof n=="function"&&n instanceof n&&ii.call(n)==li))}function ju(n){return typeof n=="string"||!ff(n)&&yu(n)&&"[object String]"==Ot(n)}function wu(n){return typeof n=="symbol"||yu(n)&&"[object Symbol]"==Ot(n)}function mu(n){if(!n)return[];if(su(n))return ju(n)?M(n):Lr(n);if(wi&&n[wi]){n=n[wi]();for(var t,r=[];!(t=n.next()).done;)r.push(t.value);
	return r}return t=vo(n),("[object Map]"==t?W:"[object Set]"==t?L:Lu)(n)}function Au(n){return n?(n=Su(n),n===$||n===-$?1.7976931348623157e308*(0>n?-1:1):n===n?n:0):0===n?n:0}function ku(n){n=Au(n);var t=n%1;return n===n?t?n-t:n:0}function Eu(n){return n?pt(ku(n),0,4294967295):0}function Su(n){if(typeof n=="number")return n;if(wu(n))return F;if(du(n)&&(n=typeof n.valueOf=="function"?n.valueOf():n,n=du(n)?n+"":n),typeof n!="string")return 0===n?n:+n;n=n.replace(un,"");var t=gn.test(n);return t||yn.test(n)?Dn(n.slice(2),t?2:8):vn.test(n)?F:+n;
	}function Ou(n){return Cr(n,Uu(n))}function Iu(n){return null==n?"":yr(n)}function Ru(n,t,r){return n=null==n?T:Et(n,t),n===T?r:n}function zu(n,t){return null!=n&&we(n,t,zt)}function Wu(n){return su(n)?qn(n):Vt(n)}function Uu(n){if(su(n))n=qn(n,true);else if(du(n)){var t,r=ze(n),e=[];for(t in n)("constructor"!=t||!r&&oi.call(n,t))&&e.push(t);n=e}else{if(t=[],null!=n)for(r in Qu(n))t.push(r);n=t}return n}function Bu(n,t){if(null==n)return{};var r=c(ve(n),function(n){return[n]});return t=ye(t),tr(n,r,function(n,r){
	return t(n,r[0])})}function Lu(n){return null==n?[]:S(n,Wu(n))}function Cu(n){return $f(Iu(n).toLowerCase())}function Du(n){return(n=Iu(n))&&n.replace(xn,Xn).replace(Sn,"")}function Mu(n,t,r){return n=Iu(n),t=r?T:t,t===T?zn.test(n)?n.match(In)||[]:n.match(sn)||[]:n.match(t)||[]}function Tu(n){return function(){return n}}function $u(n){return n}function Fu(n){return qt(typeof n=="function"?n:_t(n,1))}function Nu(n,t,e){var u=Wu(t),i=kt(t,u);null!=e||du(t)&&(i.length||!u.length)||(e=t,t=n,n=this,i=kt(t,Wu(t)));
	var o=!(du(e)&&"chain"in e&&!e.chain),f=_u(n);return r(i,function(r){var e=t[r];n[r]=e,f&&(n.prototype[r]=function(){var t=this.__chain__;if(o||t){var r=n(this.__wrapped__);return(r.__actions__=Lr(this.__actions__)).push({func:e,args:arguments,thisArg:n}),r.__chain__=t,r}return e.apply(n,a([this.value()],arguments))})}),n}function Pu(){}function Zu(n){return Ie(n)?b(Me(n)):rr(n)}function qu(){return[]}function Vu(){return false}mn=null==mn?$n:rt.defaults($n.Object(),mn,rt.pick($n,Wn));var Ku=mn.Array,Gu=mn.Date,Hu=mn.Error,Ju=mn.Function,Yu=mn.Math,Qu=mn.Object,Xu=mn.RegExp,ni=mn.String,ti=mn.TypeError,ri=Ku.prototype,ei=Qu.prototype,ui=mn["__core-js_shared__"],ii=Ju.prototype.toString,oi=ei.hasOwnProperty,fi=0,ci=function(){
	var n=/[^.]+$/.exec(ui&&ui.keys&&ui.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}(),ai=ei.toString,li=ii.call(Qu),si=$n._,hi=Xu("^"+ii.call(oi).replace(rn,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),pi=Pn?mn.Buffer:T,_i=mn.Symbol,vi=mn.Uint8Array,gi=pi?pi.allocUnsafe:T,di=U(Qu.getPrototypeOf,Qu),yi=Qu.create,bi=ei.propertyIsEnumerable,xi=ri.splice,ji=_i?_i.isConcatSpreadable:T,wi=_i?_i.iterator:T,mi=_i?_i.toStringTag:T,Ai=function(){try{var n=je(Qu,"defineProperty");
	return n({},"",{}),n}catch(n){}}(),ki=mn.clearTimeout!==$n.clearTimeout&&mn.clearTimeout,Ei=Gu&&Gu.now!==$n.Date.now&&Gu.now,Si=mn.setTimeout!==$n.setTimeout&&mn.setTimeout,Oi=Yu.ceil,Ii=Yu.floor,Ri=Qu.getOwnPropertySymbols,zi=pi?pi.isBuffer:T,Wi=mn.isFinite,Ui=ri.join,Bi=U(Qu.keys,Qu),Li=Yu.max,Ci=Yu.min,Di=Gu.now,Mi=mn.parseInt,Ti=Yu.random,$i=ri.reverse,Fi=je(mn,"DataView"),Ni=je(mn,"Map"),Pi=je(mn,"Promise"),Zi=je(mn,"Set"),qi=je(mn,"WeakMap"),Vi=je(Qu,"create"),Ki=qi&&new qi,Gi={},Hi=Te(Fi),Ji=Te(Ni),Yi=Te(Pi),Qi=Te(Zi),Xi=Te(qi),no=_i?_i.prototype:T,to=no?no.valueOf:T,ro=no?no.toString:T,eo=function(){
	function n(){}return function(t){return du(t)?yi?yi(t):(n.prototype=t,t=new n,n.prototype=T,t):{}}}();An.templateSettings={escape:J,evaluate:Y,interpolate:Q,variable:"",imports:{_:An}},An.prototype=kn.prototype,An.prototype.constructor=An,On.prototype=eo(kn.prototype),On.prototype.constructor=On,Ln.prototype=eo(kn.prototype),Ln.prototype.constructor=Ln,Mn.prototype.clear=function(){this.__data__=Vi?Vi(null):{},this.size=0},Mn.prototype.delete=function(n){return n=this.has(n)&&delete this.__data__[n],
	this.size-=n?1:0,n},Mn.prototype.get=function(n){var t=this.__data__;return Vi?(n=t[n],"__lodash_hash_undefined__"===n?T:n):oi.call(t,n)?t[n]:T},Mn.prototype.has=function(n){var t=this.__data__;return Vi?t[n]!==T:oi.call(t,n)},Mn.prototype.set=function(n,t){var r=this.__data__;return this.size+=this.has(n)?0:1,r[n]=Vi&&t===T?"__lodash_hash_undefined__":t,this},Tn.prototype.clear=function(){this.__data__=[],this.size=0},Tn.prototype.delete=function(n){var t=this.__data__;return n=ft(t,n),!(0>n)&&(n==t.length-1?t.pop():xi.call(t,n,1),
	--this.size,true)},Tn.prototype.get=function(n){var t=this.__data__;return n=ft(t,n),0>n?T:t[n][1]},Tn.prototype.has=function(n){return-1<ft(this.__data__,n)},Tn.prototype.set=function(n,t){var r=this.__data__,e=ft(r,n);return 0>e?(++this.size,r.push([n,t])):r[e][1]=t,this},Fn.prototype.clear=function(){this.size=0,this.__data__={hash:new Mn,map:new(Ni||Tn),string:new Mn}},Fn.prototype.delete=function(n){return n=be(this,n).delete(n),this.size-=n?1:0,n},Fn.prototype.get=function(n){return be(this,n).get(n);
	},Fn.prototype.has=function(n){return be(this,n).has(n)},Fn.prototype.set=function(n,t){var r=be(this,n),e=r.size;return r.set(n,t),this.size+=r.size==e?0:1,this},Nn.prototype.add=Nn.prototype.push=function(n){return this.__data__.set(n,"__lodash_hash_undefined__"),this},Nn.prototype.has=function(n){return this.__data__.has(n)},Zn.prototype.clear=function(){this.__data__=new Tn,this.size=0},Zn.prototype.delete=function(n){var t=this.__data__;return n=t.delete(n),this.size=t.size,n},Zn.prototype.get=function(n){
	return this.__data__.get(n)},Zn.prototype.has=function(n){return this.__data__.has(n)},Zn.prototype.set=function(n,t){var r=this.__data__;if(r instanceof Tn){var e=r.__data__;if(!Ni||199>e.length)return e.push([n,t]),this.size=++r.size,this;r=this.__data__=new Fn(e)}return r.set(n,t),this.size=r.size,this};var uo=Fr(mt),io=Fr(At,true),oo=Nr(),fo=Nr(true),co=Ki?function(n,t){return Ki.set(n,t),n}:$u,ao=Ai?function(n,t){return Ai(n,"toString",{configurable:true,enumerable:false,value:Tu(t),writable:true})}:$u,lo=ki||function(n){
	return $n.clearTimeout(n)},so=Zi&&1/L(new Zi([,-0]))[1]==$?function(n){return new Zi(n)}:Pu,ho=Ki?function(n){return Ki.get(n)}:Pu,po=Ri?function(n){return null==n?[]:(n=Qu(n),i(Ri(n),function(t){return bi.call(n,t)}))}:qu,_o=Ri?function(n){for(var t=[];n;)a(t,po(n)),n=di(n);return t}:qu,vo=Ot;(Fi&&"[object DataView]"!=vo(new Fi(new ArrayBuffer(1)))||Ni&&"[object Map]"!=vo(new Ni)||Pi&&"[object Promise]"!=vo(Pi.resolve())||Zi&&"[object Set]"!=vo(new Zi)||qi&&"[object WeakMap]"!=vo(new qi))&&(vo=function(n){
	var t=Ot(n);if(n=(n="[object Object]"==t?n.constructor:T)?Te(n):"")switch(n){case Hi:return"[object DataView]";case Ji:return"[object Map]";case Yi:return"[object Promise]";case Qi:return"[object Set]";case Xi:return"[object WeakMap]"}return t});var go=ui?_u:Vu,yo=Ce(co),bo=Si||function(n,t){return $n.setTimeout(n,t)},xo=Ce(ao),jo=function(n){n=cu(n,function(n){return 500===t.size&&t.clear(),n});var t=n.cache;return n}(function(n){var t=[];return 46===n.charCodeAt(0)&&t.push(""),n.replace(tn,function(n,r,e,u){
	t.push(e?u.replace(hn,"$1"):r||n)}),t}),wo=fr(function(n,t){return hu(n)?yt(n,wt(t,1,hu,true)):[]}),mo=fr(function(n,t){var r=Ve(t);return hu(r)&&(r=T),hu(n)?yt(n,wt(t,1,hu,true),ye(r,2)):[]}),Ao=fr(function(n,t){var r=Ve(t);return hu(r)&&(r=T),hu(n)?yt(n,wt(t,1,hu,true),T,r):[]}),ko=fr(function(n){var t=c(n,kr);return t.length&&t[0]===n[0]?Wt(t):[]}),Eo=fr(function(n){var t=Ve(n),r=c(n,kr);return t===Ve(r)?t=T:r.pop(),r.length&&r[0]===n[0]?Wt(r,ye(t,2)):[]}),So=fr(function(n){var t=Ve(n),r=c(n,kr);return(t=typeof t=="function"?t:T)&&r.pop(),
	r.length&&r[0]===n[0]?Wt(r,T,t):[]}),Oo=fr(Ke),Io=pe(function(n,t){var r=null==n?0:n.length,e=ht(n,t);return ur(n,c(t,function(n){return Se(n,r)?+n:n}).sort(Wr)),e}),Ro=fr(function(n){return br(wt(n,1,hu,true))}),zo=fr(function(n){var t=Ve(n);return hu(t)&&(t=T),br(wt(n,1,hu,true),ye(t,2))}),Wo=fr(function(n){var t=Ve(n),t=typeof t=="function"?t:T;return br(wt(n,1,hu,true),T,t)}),Uo=fr(function(n,t){return hu(n)?yt(n,t):[]}),Bo=fr(function(n){return mr(i(n,hu))}),Lo=fr(function(n){var t=Ve(n);return hu(t)&&(t=T),
	mr(i(n,hu),ye(t,2))}),Co=fr(function(n){var t=Ve(n),t=typeof t=="function"?t:T;return mr(i(n,hu),T,t)}),Do=fr(He),Mo=fr(function(n){var t=n.length,t=1<t?n[t-1]:T,t=typeof t=="function"?(n.pop(),t):T;return Je(n,t)}),To=pe(function(n){var t=n.length,r=t?n[0]:0,e=this.__wrapped__,u=function(t){return ht(t,n)};return!(1<t||this.__actions__.length)&&e instanceof Ln&&Se(r)?(e=e.slice(r,+r+(t?1:0)),e.__actions__.push({func:Qe,args:[u],thisArg:T}),new On(e,this.__chain__).thru(function(n){return t&&!n.length&&n.push(T),
	n})):this.thru(u)}),$o=Tr(function(n,t,r){oi.call(n,r)?++n[r]:st(n,r,1)}),Fo=Gr(Ne),No=Gr(Pe),Po=Tr(function(n,t,r){oi.call(n,r)?n[r].push(t):st(n,r,[t])}),Zo=fr(function(t,r,e){var u=-1,i=typeof r=="function",o=su(t)?Ku(t.length):[];return uo(t,function(t){o[++u]=i?n(r,t,e):Bt(t,r,e)}),o}),qo=Tr(function(n,t,r){st(n,r,t)}),Vo=Tr(function(n,t,r){n[r?0:1].push(t)},function(){return[[],[]]}),Ko=fr(function(n,t){if(null==n)return[];var r=t.length;return 1<r&&Oe(n,t[0],t[1])?t=[]:2<r&&Oe(t[0],t[1],t[2])&&(t=[t[0]]),
	Xt(n,wt(t,1),[])}),Go=Ei||function(){return $n.Date.now()},Ho=fr(function(n,t,r){var e=1;if(r.length)var u=B(r,de(Ho)),e=32|e;return fe(n,e,t,r,u)}),Jo=fr(function(n,t,r){var e=3;if(r.length)var u=B(r,de(Jo)),e=32|e;return fe(t,e,n,r,u)}),Yo=fr(function(n,t){return dt(n,1,t)}),Qo=fr(function(n,t,r){return dt(n,Su(t)||0,r)});cu.Cache=Fn;var Xo=fr(function(t,r){r=1==r.length&&ff(r[0])?c(r[0],E(ye())):c(wt(r,1),E(ye()));var e=r.length;return fr(function(u){for(var i=-1,o=Ci(u.length,e);++i<o;)u[i]=r[i].call(this,u[i]);
	return n(t,this,u)})}),nf=fr(function(n,t){return fe(n,32,T,t,B(t,de(nf)))}),tf=fr(function(n,t){return fe(n,64,T,t,B(t,de(tf)))}),rf=pe(function(n,t){return fe(n,256,T,T,T,t)}),ef=ee(It),uf=ee(function(n,t){return n>=t}),of=Lt(function(){return arguments}())?Lt:function(n){return yu(n)&&oi.call(n,"callee")&&!bi.call(n,"callee")},ff=Ku.isArray,cf=Vn?E(Vn):Ct,af=zi||Vu,lf=Kn?E(Kn):Dt,sf=Gn?E(Gn):Tt,hf=Hn?E(Hn):Nt,pf=Jn?E(Jn):Pt,_f=Yn?E(Yn):Zt,vf=ee(Kt),gf=ee(function(n,t){return n<=t}),df=$r(function(n,t){
	if(ze(t)||su(t))Cr(t,Wu(t),n);else for(var r in t)oi.call(t,r)&&ot(n,r,t[r])}),yf=$r(function(n,t){Cr(t,Uu(t),n)}),bf=$r(function(n,t,r,e){Cr(t,Uu(t),n,e)}),xf=$r(function(n,t,r,e){Cr(t,Wu(t),n,e)}),jf=pe(ht),wf=fr(function(n,t){n=Qu(n);var r=-1,e=t.length,u=2<e?t[2]:T;for(u&&Oe(t[0],t[1],u)&&(e=1);++r<e;)for(var u=t[r],i=Uu(u),o=-1,f=i.length;++o<f;){var c=i[o],a=n[c];(a===T||lu(a,ei[c])&&!oi.call(n,c))&&(n[c]=u[c])}return n}),mf=fr(function(t){return t.push(T,ae),n(Of,T,t)}),Af=Yr(function(n,t,r){
	null!=t&&typeof t.toString!="function"&&(t=ai.call(t)),n[t]=r},Tu($u)),kf=Yr(function(n,t,r){null!=t&&typeof t.toString!="function"&&(t=ai.call(t)),oi.call(n,t)?n[t].push(r):n[t]=[r]},ye),Ef=fr(Bt),Sf=$r(function(n,t,r){Yt(n,t,r)}),Of=$r(function(n,t,r,e){Yt(n,t,r,e)}),If=pe(function(n,t){var r={};if(null==n)return r;var e=false;t=c(t,function(t){return t=Sr(t,n),e||(e=1<t.length),t}),Cr(n,ve(n),r),e&&(r=_t(r,7,le));for(var u=t.length;u--;)xr(r,t[u]);return r}),Rf=pe(function(n,t){return null==n?{}:nr(n,t);
	}),zf=oe(Wu),Wf=oe(Uu),Uf=qr(function(n,t,r){return t=t.toLowerCase(),n+(r?Cu(t):t)}),Bf=qr(function(n,t,r){return n+(r?"-":"")+t.toLowerCase()}),Lf=qr(function(n,t,r){return n+(r?" ":"")+t.toLowerCase()}),Cf=Zr("toLowerCase"),Df=qr(function(n,t,r){return n+(r?"_":"")+t.toLowerCase()}),Mf=qr(function(n,t,r){return n+(r?" ":"")+$f(t)}),Tf=qr(function(n,t,r){return n+(r?" ":"")+t.toUpperCase()}),$f=Zr("toUpperCase"),Ff=fr(function(t,r){try{return n(t,T,r)}catch(n){return pu(n)?n:new Hu(n)}}),Nf=pe(function(n,t){
	return r(t,function(t){t=Me(t),st(n,t,Ho(n[t],n))}),n}),Pf=Hr(),Zf=Hr(true),qf=fr(function(n,t){return function(r){return Bt(r,n,t)}}),Vf=fr(function(n,t){return function(r){return Bt(n,r,t)}}),Kf=Xr(c),Gf=Xr(u),Hf=Xr(h),Jf=re(),Yf=re(true),Qf=Qr(function(n,t){return n+t},0),Xf=ie("ceil"),nc=Qr(function(n,t){return n/t},1),tc=ie("floor"),rc=Qr(function(n,t){return n*t},1),ec=ie("round"),uc=Qr(function(n,t){return n-t},0);return An.after=function(n,t){if(typeof t!="function")throw new ti("Expected a function");
	return n=ku(n),function(){if(1>--n)return t.apply(this,arguments)}},An.ary=eu,An.assign=df,An.assignIn=yf,An.assignInWith=bf,An.assignWith=xf,An.at=jf,An.before=uu,An.bind=Ho,An.bindAll=Nf,An.bindKey=Jo,An.castArray=function(){if(!arguments.length)return[];var n=arguments[0];return ff(n)?n:[n]},An.chain=Ye,An.chunk=function(n,t,r){if(t=(r?Oe(n,t,r):t===T)?1:Li(ku(t),0),r=null==n?0:n.length,!r||1>t)return[];for(var e=0,u=0,i=Ku(Oi(r/t));e<r;)i[u++]=hr(n,e,e+=t);return i},An.compact=function(n){for(var t=-1,r=null==n?0:n.length,e=0,u=[];++t<r;){
	var i=n[t];i&&(u[e++]=i)}return u},An.concat=function(){var n=arguments.length;if(!n)return[];for(var t=Ku(n-1),r=arguments[0];n--;)t[n-1]=arguments[n];return a(ff(r)?Lr(r):[r],wt(t,1))},An.cond=function(t){var r=null==t?0:t.length,e=ye();return t=r?c(t,function(n){if("function"!=typeof n[1])throw new ti("Expected a function");return[e(n[0]),n[1]]}):[],fr(function(e){for(var u=-1;++u<r;){var i=t[u];if(n(i[0],this,e))return n(i[1],this,e)}})},An.conforms=function(n){return vt(_t(n,1))},An.constant=Tu,
	An.countBy=$o,An.create=function(n,t){var r=eo(n);return null==t?r:at(r,t)},An.curry=iu,An.curryRight=ou,An.debounce=fu,An.defaults=wf,An.defaultsDeep=mf,An.defer=Yo,An.delay=Qo,An.difference=wo,An.differenceBy=mo,An.differenceWith=Ao,An.drop=function(n,t,r){var e=null==n?0:n.length;return e?(t=r||t===T?1:ku(t),hr(n,0>t?0:t,e)):[]},An.dropRight=function(n,t,r){var e=null==n?0:n.length;return e?(t=r||t===T?1:ku(t),t=e-t,hr(n,0,0>t?0:t)):[]},An.dropRightWhile=function(n,t){return n&&n.length?jr(n,ye(t,3),true,true):[];
	},An.dropWhile=function(n,t){return n&&n.length?jr(n,ye(t,3),true):[]},An.fill=function(n,t,r,e){var u=null==n?0:n.length;if(!u)return[];for(r&&typeof r!="number"&&Oe(n,t,r)&&(r=0,e=u),u=n.length,r=ku(r),0>r&&(r=-r>u?0:u+r),e=e===T||e>u?u:ku(e),0>e&&(e+=u),e=r>e?0:Eu(e);r<e;)n[r++]=t;return n},An.filter=function(n,t){return(ff(n)?i:jt)(n,ye(t,3))},An.flatMap=function(n,t){return wt(ru(n,t),1)},An.flatMapDeep=function(n,t){return wt(ru(n,t),$)},An.flatMapDepth=function(n,t,r){return r=r===T?1:ku(r),
	wt(ru(n,t),r)},An.flatten=Ze,An.flattenDeep=function(n){return(null==n?0:n.length)?wt(n,$):[]},An.flattenDepth=function(n,t){return null!=n&&n.length?(t=t===T?1:ku(t),wt(n,t)):[]},An.flip=function(n){return fe(n,512)},An.flow=Pf,An.flowRight=Zf,An.fromPairs=function(n){for(var t=-1,r=null==n?0:n.length,e={};++t<r;){var u=n[t];e[u[0]]=u[1]}return e},An.functions=function(n){return null==n?[]:kt(n,Wu(n))},An.functionsIn=function(n){return null==n?[]:kt(n,Uu(n))},An.groupBy=Po,An.initial=function(n){
	return(null==n?0:n.length)?hr(n,0,-1):[]},An.intersection=ko,An.intersectionBy=Eo,An.intersectionWith=So,An.invert=Af,An.invertBy=kf,An.invokeMap=Zo,An.iteratee=Fu,An.keyBy=qo,An.keys=Wu,An.keysIn=Uu,An.map=ru,An.mapKeys=function(n,t){var r={};return t=ye(t,3),mt(n,function(n,e,u){st(r,t(n,e,u),n)}),r},An.mapValues=function(n,t){var r={};return t=ye(t,3),mt(n,function(n,e,u){st(r,e,t(n,e,u))}),r},An.matches=function(n){return Ht(_t(n,1))},An.matchesProperty=function(n,t){return Jt(n,_t(t,1))},An.memoize=cu,
	An.merge=Sf,An.mergeWith=Of,An.method=qf,An.methodOf=Vf,An.mixin=Nu,An.negate=au,An.nthArg=function(n){return n=ku(n),fr(function(t){return Qt(t,n)})},An.omit=If,An.omitBy=function(n,t){return Bu(n,au(ye(t)))},An.once=function(n){return uu(2,n)},An.orderBy=function(n,t,r,e){return null==n?[]:(ff(t)||(t=null==t?[]:[t]),r=e?T:r,ff(r)||(r=null==r?[]:[r]),Xt(n,t,r))},An.over=Kf,An.overArgs=Xo,An.overEvery=Gf,An.overSome=Hf,An.partial=nf,An.partialRight=tf,An.partition=Vo,An.pick=Rf,An.pickBy=Bu,An.property=Zu,
	An.propertyOf=function(n){return function(t){return null==n?T:Et(n,t)}},An.pull=Oo,An.pullAll=Ke,An.pullAllBy=function(n,t,r){return n&&n.length&&t&&t.length?er(n,t,ye(r,2)):n},An.pullAllWith=function(n,t,r){return n&&n.length&&t&&t.length?er(n,t,T,r):n},An.pullAt=Io,An.range=Jf,An.rangeRight=Yf,An.rearg=rf,An.reject=function(n,t){return(ff(n)?i:jt)(n,au(ye(t,3)))},An.remove=function(n,t){var r=[];if(!n||!n.length)return r;var e=-1,u=[],i=n.length;for(t=ye(t,3);++e<i;){var o=n[e];t(o,e,n)&&(r.push(o),
	u.push(e))}return ur(n,u),r},An.rest=function(n,t){if(typeof n!="function")throw new ti("Expected a function");return t=t===T?t:ku(t),fr(n,t)},An.reverse=Ge,An.sampleSize=function(n,t,r){return t=(r?Oe(n,t,r):t===T)?1:ku(t),(ff(n)?et:ar)(n,t)},An.set=function(n,t,r){return null==n?n:lr(n,t,r)},An.setWith=function(n,t,r,e){return e=typeof e=="function"?e:T,null==n?n:lr(n,t,r,e)},An.shuffle=function(n){return(ff(n)?ut:sr)(n)},An.slice=function(n,t,r){var e=null==n?0:n.length;return e?(r&&typeof r!="number"&&Oe(n,t,r)?(t=0,
	r=e):(t=null==t?0:ku(t),r=r===T?e:ku(r)),hr(n,t,r)):[]},An.sortBy=Ko,An.sortedUniq=function(n){return n&&n.length?gr(n):[]},An.sortedUniqBy=function(n,t){return n&&n.length?gr(n,ye(t,2)):[]},An.split=function(n,t,r){return r&&typeof r!="number"&&Oe(n,t,r)&&(t=r=T),r=r===T?4294967295:r>>>0,r?(n=Iu(n))&&(typeof t=="string"||null!=t&&!hf(t))&&(t=yr(t),!t&&Rn.test(n))?Or(M(n),0,r):n.split(t,r):[]},An.spread=function(t,r){if(typeof t!="function")throw new ti("Expected a function");return r=null==r?0:Li(ku(r),0),
	fr(function(e){var u=e[r];return e=Or(e,0,r),u&&a(e,u),n(t,this,e)})},An.tail=function(n){var t=null==n?0:n.length;return t?hr(n,1,t):[]},An.take=function(n,t,r){return n&&n.length?(t=r||t===T?1:ku(t),hr(n,0,0>t?0:t)):[]},An.takeRight=function(n,t,r){var e=null==n?0:n.length;return e?(t=r||t===T?1:ku(t),t=e-t,hr(n,0>t?0:t,e)):[]},An.takeRightWhile=function(n,t){return n&&n.length?jr(n,ye(t,3),false,true):[]},An.takeWhile=function(n,t){return n&&n.length?jr(n,ye(t,3)):[]},An.tap=function(n,t){return t(n),
	n},An.throttle=function(n,t,r){var e=true,u=true;if(typeof n!="function")throw new ti("Expected a function");return du(r)&&(e="leading"in r?!!r.leading:e,u="trailing"in r?!!r.trailing:u),fu(n,t,{leading:e,maxWait:t,trailing:u})},An.thru=Qe,An.toArray=mu,An.toPairs=zf,An.toPairsIn=Wf,An.toPath=function(n){return ff(n)?c(n,Me):wu(n)?[n]:Lr(jo(Iu(n)))},An.toPlainObject=Ou,An.transform=function(n,t,e){var u=ff(n),i=u||af(n)||_f(n);if(t=ye(t,4),null==e){var o=n&&n.constructor;e=i?u?new o:[]:du(n)&&_u(o)?eo(di(n)):{};
	}return(i?r:mt)(n,function(n,r,u){return t(e,n,r,u)}),e},An.unary=function(n){return eu(n,1)},An.union=Ro,An.unionBy=zo,An.unionWith=Wo,An.uniq=function(n){return n&&n.length?br(n):[]},An.uniqBy=function(n,t){return n&&n.length?br(n,ye(t,2)):[]},An.uniqWith=function(n,t){return t=typeof t=="function"?t:T,n&&n.length?br(n,T,t):[]},An.unset=function(n,t){return null==n||xr(n,t)},An.unzip=He,An.unzipWith=Je,An.update=function(n,t,r){return null!=n&&(r=Er(r),n=lr(n,t,r(Et(n,t)),void 0)),n},An.updateWith=function(n,t,r,e){
	return e=typeof e=="function"?e:T,null!=n&&(r=Er(r),n=lr(n,t,r(Et(n,t)),e)),n},An.values=Lu,An.valuesIn=function(n){return null==n?[]:S(n,Uu(n))},An.without=Uo,An.words=Mu,An.wrap=function(n,t){return nf(Er(t),n)},An.xor=Bo,An.xorBy=Lo,An.xorWith=Co,An.zip=Do,An.zipObject=function(n,t){return Ar(n||[],t||[],ot)},An.zipObjectDeep=function(n,t){return Ar(n||[],t||[],lr)},An.zipWith=Mo,An.entries=zf,An.entriesIn=Wf,An.extend=yf,An.extendWith=bf,Nu(An,An),An.add=Qf,An.attempt=Ff,An.camelCase=Uf,An.capitalize=Cu,
	An.ceil=Xf,An.clamp=function(n,t,r){return r===T&&(r=t,t=T),r!==T&&(r=Su(r),r=r===r?r:0),t!==T&&(t=Su(t),t=t===t?t:0),pt(Su(n),t,r)},An.clone=function(n){return _t(n,4)},An.cloneDeep=function(n){return _t(n,5)},An.cloneDeepWith=function(n,t){return t=typeof t=="function"?t:T,_t(n,5,t)},An.cloneWith=function(n,t){return t=typeof t=="function"?t:T,_t(n,4,t)},An.conformsTo=function(n,t){return null==t||gt(n,t,Wu(t))},An.deburr=Du,An.defaultTo=function(n,t){return null==n||n!==n?t:n},An.divide=nc,An.endsWith=function(n,t,r){
	n=Iu(n),t=yr(t);var e=n.length,e=r=r===T?e:pt(ku(r),0,e);return r-=t.length,0<=r&&n.slice(r,e)==t},An.eq=lu,An.escape=function(n){return(n=Iu(n))&&H.test(n)?n.replace(K,nt):n},An.escapeRegExp=function(n){return(n=Iu(n))&&en.test(n)?n.replace(rn,"\\$&"):n},An.every=function(n,t,r){var e=ff(n)?u:bt;return r&&Oe(n,t,r)&&(t=T),e(n,ye(t,3))},An.find=Fo,An.findIndex=Ne,An.findKey=function(n,t){return p(n,ye(t,3),mt)},An.findLast=No,An.findLastIndex=Pe,An.findLastKey=function(n,t){return p(n,ye(t,3),At);
	},An.floor=tc,An.forEach=nu,An.forEachRight=tu,An.forIn=function(n,t){return null==n?n:oo(n,ye(t,3),Uu)},An.forInRight=function(n,t){return null==n?n:fo(n,ye(t,3),Uu)},An.forOwn=function(n,t){return n&&mt(n,ye(t,3))},An.forOwnRight=function(n,t){return n&&At(n,ye(t,3))},An.get=Ru,An.gt=ef,An.gte=uf,An.has=function(n,t){return null!=n&&we(n,t,Rt)},An.hasIn=zu,An.head=qe,An.identity=$u,An.includes=function(n,t,r,e){return n=su(n)?n:Lu(n),r=r&&!e?ku(r):0,e=n.length,0>r&&(r=Li(e+r,0)),ju(n)?r<=e&&-1<n.indexOf(t,r):!!e&&-1<v(n,t,r);
	},An.indexOf=function(n,t,r){var e=null==n?0:n.length;return e?(r=null==r?0:ku(r),0>r&&(r=Li(e+r,0)),v(n,t,r)):-1},An.inRange=function(n,t,r){return t=Au(t),r===T?(r=t,t=0):r=Au(r),n=Su(n),n>=Ci(t,r)&&n<Li(t,r)},An.invoke=Ef,An.isArguments=of,An.isArray=ff,An.isArrayBuffer=cf,An.isArrayLike=su,An.isArrayLikeObject=hu,An.isBoolean=function(n){return true===n||false===n||yu(n)&&"[object Boolean]"==Ot(n)},An.isBuffer=af,An.isDate=lf,An.isElement=function(n){return yu(n)&&1===n.nodeType&&!xu(n)},An.isEmpty=function(n){
	if(null==n)return true;if(su(n)&&(ff(n)||typeof n=="string"||typeof n.splice=="function"||af(n)||_f(n)||of(n)))return!n.length;var t=vo(n);if("[object Map]"==t||"[object Set]"==t)return!n.size;if(ze(n))return!Vt(n).length;for(var r in n)if(oi.call(n,r))return false;return true},An.isEqual=function(n,t){return Mt(n,t)},An.isEqualWith=function(n,t,r){var e=(r=typeof r=="function"?r:T)?r(n,t):T;return e===T?Mt(n,t,T,r):!!e},An.isError=pu,An.isFinite=function(n){return typeof n=="number"&&Wi(n)},An.isFunction=_u,
	An.isInteger=vu,An.isLength=gu,An.isMap=sf,An.isMatch=function(n,t){return n===t||$t(n,t,xe(t))},An.isMatchWith=function(n,t,r){return r=typeof r=="function"?r:T,$t(n,t,xe(t),r)},An.isNaN=function(n){return bu(n)&&n!=+n},An.isNative=function(n){if(go(n))throw new Hu("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");return Ft(n)},An.isNil=function(n){return null==n},An.isNull=function(n){return null===n},An.isNumber=bu,An.isObject=du,An.isObjectLike=yu,An.isPlainObject=xu,An.isRegExp=hf,
	An.isSafeInteger=function(n){return vu(n)&&-9007199254740991<=n&&9007199254740991>=n},An.isSet=pf,An.isString=ju,An.isSymbol=wu,An.isTypedArray=_f,An.isUndefined=function(n){return n===T},An.isWeakMap=function(n){return yu(n)&&"[object WeakMap]"==vo(n)},An.isWeakSet=function(n){return yu(n)&&"[object WeakSet]"==Ot(n)},An.join=function(n,t){return null==n?"":Ui.call(n,t)},An.kebabCase=Bf,An.last=Ve,An.lastIndexOf=function(n,t,r){var e=null==n?0:n.length;if(!e)return-1;var u=e;if(r!==T&&(u=ku(r),u=0>u?Li(e+u,0):Ci(u,e-1)),
	t===t)n:{for(r=u+1;r--;)if(n[r]===t){n=r;break n}n=r}else n=_(n,d,u,true);return n},An.lowerCase=Lf,An.lowerFirst=Cf,An.lt=vf,An.lte=gf,An.max=function(n){return n&&n.length?xt(n,$u,It):T},An.maxBy=function(n,t){return n&&n.length?xt(n,ye(t,2),It):T},An.mean=function(n){return y(n,$u)},An.meanBy=function(n,t){return y(n,ye(t,2))},An.min=function(n){return n&&n.length?xt(n,$u,Kt):T},An.minBy=function(n,t){return n&&n.length?xt(n,ye(t,2),Kt):T},An.stubArray=qu,An.stubFalse=Vu,An.stubObject=function(){
	return{}},An.stubString=function(){return""},An.stubTrue=function(){return true},An.multiply=rc,An.nth=function(n,t){return n&&n.length?Qt(n,ku(t)):T},An.noConflict=function(){return $n._===this&&($n._=si),this},An.noop=Pu,An.now=Go,An.pad=function(n,t,r){n=Iu(n);var e=(t=ku(t))?D(n):0;return!t||e>=t?n:(t=(t-e)/2,ne(Ii(t),r)+n+ne(Oi(t),r))},An.padEnd=function(n,t,r){n=Iu(n);var e=(t=ku(t))?D(n):0;return t&&e<t?n+ne(t-e,r):n},An.padStart=function(n,t,r){n=Iu(n);var e=(t=ku(t))?D(n):0;return t&&e<t?ne(t-e,r)+n:n;
	},An.parseInt=function(n,t,r){return r||null==t?t=0:t&&(t=+t),Mi(Iu(n).replace(on,""),t||0)},An.random=function(n,t,r){if(r&&typeof r!="boolean"&&Oe(n,t,r)&&(t=r=T),r===T&&(typeof t=="boolean"?(r=t,t=T):typeof n=="boolean"&&(r=n,n=T)),n===T&&t===T?(n=0,t=1):(n=Au(n),t===T?(t=n,n=0):t=Au(t)),n>t){var e=n;n=t,t=e}return r||n%1||t%1?(r=Ti(),Ci(n+r*(t-n+Cn("1e-"+((r+"").length-1))),t)):ir(n,t)},An.reduce=function(n,t,r){var e=ff(n)?l:j,u=3>arguments.length;return e(n,ye(t,4),r,u,uo)},An.reduceRight=function(n,t,r){
	var e=ff(n)?s:j,u=3>arguments.length;return e(n,ye(t,4),r,u,io)},An.repeat=function(n,t,r){return t=(r?Oe(n,t,r):t===T)?1:ku(t),or(Iu(n),t)},An.replace=function(){var n=arguments,t=Iu(n[0]);return 3>n.length?t:t.replace(n[1],n[2])},An.result=function(n,t,r){t=Sr(t,n);var e=-1,u=t.length;for(u||(u=1,n=T);++e<u;){var i=null==n?T:n[Me(t[e])];i===T&&(e=u,i=r),n=_u(i)?i.call(n):i}return n},An.round=ec,An.runInContext=x,An.sample=function(n){return(ff(n)?Qn:cr)(n)},An.size=function(n){if(null==n)return 0;
	if(su(n))return ju(n)?D(n):n.length;var t=vo(n);return"[object Map]"==t||"[object Set]"==t?n.size:Vt(n).length},An.snakeCase=Df,An.some=function(n,t,r){var e=ff(n)?h:pr;return r&&Oe(n,t,r)&&(t=T),e(n,ye(t,3))},An.sortedIndex=function(n,t){return _r(n,t)},An.sortedIndexBy=function(n,t,r){return vr(n,t,ye(r,2))},An.sortedIndexOf=function(n,t){var r=null==n?0:n.length;if(r){var e=_r(n,t);if(e<r&&lu(n[e],t))return e}return-1},An.sortedLastIndex=function(n,t){return _r(n,t,true)},An.sortedLastIndexBy=function(n,t,r){
	return vr(n,t,ye(r,2),true)},An.sortedLastIndexOf=function(n,t){if(null==n?0:n.length){var r=_r(n,t,true)-1;if(lu(n[r],t))return r}return-1},An.startCase=Mf,An.startsWith=function(n,t,r){return n=Iu(n),r=null==r?0:pt(ku(r),0,n.length),t=yr(t),n.slice(r,r+t.length)==t},An.subtract=uc,An.sum=function(n){return n&&n.length?m(n,$u):0},An.sumBy=function(n,t){return n&&n.length?m(n,ye(t,2)):0},An.template=function(n,t,r){var e=An.templateSettings;r&&Oe(n,t,r)&&(t=T),n=Iu(n),t=bf({},t,e,ce),r=bf({},t.imports,e.imports,ce);
	var u,i,o=Wu(r),f=S(r,o),c=0;r=t.interpolate||jn;var a="__p+='";r=Xu((t.escape||jn).source+"|"+r.source+"|"+(r===Q?pn:jn).source+"|"+(t.evaluate||jn).source+"|$","g");var l="sourceURL"in t?"//# sourceURL="+t.sourceURL+"\n":"";if(n.replace(r,function(t,r,e,o,f,l){return e||(e=o),a+=n.slice(c,l).replace(wn,z),r&&(u=true,a+="'+__e("+r+")+'"),f&&(i=true,a+="';"+f+";\n__p+='"),e&&(a+="'+((__t=("+e+"))==null?'':__t)+'"),c=l+t.length,t}),a+="';",(t=t.variable)||(a="with(obj){"+a+"}"),a=(i?a.replace(P,""):a).replace(Z,"$1").replace(q,"$1;"),
	a="function("+(t||"obj")+"){"+(t?"":"obj||(obj={});")+"var __t,__p=''"+(u?",__e=_.escape":"")+(i?",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}":";")+a+"return __p}",t=Ff(function(){return Ju(o,l+"return "+a).apply(T,f)}),t.source=a,pu(t))throw t;return t},An.times=function(n,t){if(n=ku(n),1>n||9007199254740991<n)return[];var r=4294967295,e=Ci(n,4294967295);for(t=ye(t),n-=4294967295,e=A(e,t);++r<n;)t(r);return e},An.toFinite=Au,An.toInteger=ku,An.toLength=Eu,An.toLower=function(n){
	return Iu(n).toLowerCase()},An.toNumber=Su,An.toSafeInteger=function(n){return n?pt(ku(n),-9007199254740991,9007199254740991):0===n?n:0},An.toString=Iu,An.toUpper=function(n){return Iu(n).toUpperCase()},An.trim=function(n,t,r){return(n=Iu(n))&&(r||t===T)?n.replace(un,""):n&&(t=yr(t))?(n=M(n),r=M(t),t=I(n,r),r=R(n,r)+1,Or(n,t,r).join("")):n},An.trimEnd=function(n,t,r){return(n=Iu(n))&&(r||t===T)?n.replace(fn,""):n&&(t=yr(t))?(n=M(n),t=R(n,M(t))+1,Or(n,0,t).join("")):n},An.trimStart=function(n,t,r){
	return(n=Iu(n))&&(r||t===T)?n.replace(on,""):n&&(t=yr(t))?(n=M(n),t=I(n,M(t)),Or(n,t).join("")):n},An.truncate=function(n,t){var r=30,e="...";if(du(t))var u="separator"in t?t.separator:u,r="length"in t?ku(t.length):r,e="omission"in t?yr(t.omission):e;n=Iu(n);var i=n.length;if(Rn.test(n))var o=M(n),i=o.length;if(r>=i)return n;if(i=r-D(e),1>i)return e;if(r=o?Or(o,0,i).join(""):n.slice(0,i),u===T)return r+e;if(o&&(i+=r.length-i),hf(u)){if(n.slice(i).search(u)){var f=r;for(u.global||(u=Xu(u.source,Iu(_n.exec(u))+"g")),
	u.lastIndex=0;o=u.exec(f);)var c=o.index;r=r.slice(0,c===T?i:c)}}else n.indexOf(yr(u),i)!=i&&(u=r.lastIndexOf(u),-1<u&&(r=r.slice(0,u)));return r+e},An.unescape=function(n){return(n=Iu(n))&&G.test(n)?n.replace(V,tt):n},An.uniqueId=function(n){var t=++fi;return Iu(n)+t},An.upperCase=Tf,An.upperFirst=$f,An.each=nu,An.eachRight=tu,An.first=qe,Nu(An,function(){var n={};return mt(An,function(t,r){oi.call(An.prototype,r)||(n[r]=t)}),n}(),{chain:false}),An.VERSION="4.17.11",r("bind bindKey curry curryRight partial partialRight".split(" "),function(n){
	An[n].placeholder=An}),r(["drop","take"],function(n,t){Ln.prototype[n]=function(r){r=r===T?1:Li(ku(r),0);var e=this.__filtered__&&!t?new Ln(this):this.clone();return e.__filtered__?e.__takeCount__=Ci(r,e.__takeCount__):e.__views__.push({size:Ci(r,4294967295),type:n+(0>e.__dir__?"Right":"")}),e},Ln.prototype[n+"Right"]=function(t){return this.reverse()[n](t).reverse()}}),r(["filter","map","takeWhile"],function(n,t){var r=t+1,e=1==r||3==r;Ln.prototype[n]=function(n){var t=this.clone();return t.__iteratees__.push({
	iteratee:ye(n,3),type:r}),t.__filtered__=t.__filtered__||e,t}}),r(["head","last"],function(n,t){var r="take"+(t?"Right":"");Ln.prototype[n]=function(){return this[r](1).value()[0]}}),r(["initial","tail"],function(n,t){var r="drop"+(t?"":"Right");Ln.prototype[n]=function(){return this.__filtered__?new Ln(this):this[r](1)}}),Ln.prototype.compact=function(){return this.filter($u)},Ln.prototype.find=function(n){return this.filter(n).head()},Ln.prototype.findLast=function(n){return this.reverse().find(n);
	},Ln.prototype.invokeMap=fr(function(n,t){return typeof n=="function"?new Ln(this):this.map(function(r){return Bt(r,n,t)})}),Ln.prototype.reject=function(n){return this.filter(au(ye(n)))},Ln.prototype.slice=function(n,t){n=ku(n);var r=this;return r.__filtered__&&(0<n||0>t)?new Ln(r):(0>n?r=r.takeRight(-n):n&&(r=r.drop(n)),t!==T&&(t=ku(t),r=0>t?r.dropRight(-t):r.take(t-n)),r)},Ln.prototype.takeRightWhile=function(n){return this.reverse().takeWhile(n).reverse()},Ln.prototype.toArray=function(){return this.take(4294967295);
	},mt(Ln.prototype,function(n,t){var r=/^(?:filter|find|map|reject)|While$/.test(t),e=/^(?:head|last)$/.test(t),u=An[e?"take"+("last"==t?"Right":""):t],i=e||/^find/.test(t);u&&(An.prototype[t]=function(){var t=this.__wrapped__,o=e?[1]:arguments,f=t instanceof Ln,c=o[0],l=f||ff(t),s=function(n){return n=u.apply(An,a([n],o)),e&&h?n[0]:n};l&&r&&typeof c=="function"&&1!=c.length&&(f=l=false);var h=this.__chain__,p=!!this.__actions__.length,c=i&&!h,f=f&&!p;return!i&&l?(t=f?t:new Ln(this),t=n.apply(t,o),t.__actions__.push({
	func:Qe,args:[s],thisArg:T}),new On(t,h)):c&&f?n.apply(this,o):(t=this.thru(s),c?e?t.value()[0]:t.value():t)})}),r("pop push shift sort splice unshift".split(" "),function(n){var t=ri[n],r=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",e=/^(?:pop|shift)$/.test(n);An.prototype[n]=function(){var n=arguments;if(e&&!this.__chain__){var u=this.value();return t.apply(ff(u)?u:[],n)}return this[r](function(r){return t.apply(ff(r)?r:[],n)})}}),mt(Ln.prototype,function(n,t){var r=An[t];if(r){var e=r.name+"";
	(Gi[e]||(Gi[e]=[])).push({name:t,func:r})}}),Gi[Jr(T,2).name]=[{name:"wrapper",func:T}],Ln.prototype.clone=function(){var n=new Ln(this.__wrapped__);return n.__actions__=Lr(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=Lr(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=Lr(this.__views__),n},Ln.prototype.reverse=function(){if(this.__filtered__){var n=new Ln(this);n.__dir__=-1,n.__filtered__=true}else n=this.clone(),n.__dir__*=-1;return n;
	},Ln.prototype.value=function(){var n,t=this.__wrapped__.value(),r=this.__dir__,e=ff(t),u=0>r,i=e?t.length:0;n=0;for(var o=i,f=this.__views__,c=-1,a=f.length;++c<a;){var l=f[c],s=l.size;switch(l.type){case"drop":n+=s;break;case"dropRight":o-=s;break;case"take":o=Ci(o,n+s);break;case"takeRight":n=Li(n,o-s)}}if(n={start:n,end:o},o=n.start,f=n.end,n=f-o,o=u?f:o-1,f=this.__iteratees__,c=f.length,a=0,l=Ci(n,this.__takeCount__),!e||!u&&i==n&&l==n)return wr(t,this.__actions__);e=[];n:for(;n--&&a<l;){for(o+=r,
	u=-1,i=t[o];++u<c;){var h=f[u],s=h.type,h=(0,h.iteratee)(i);if(2==s)i=h;else if(!h){if(1==s)continue n;break n}}e[a++]=i}return e},An.prototype.at=To,An.prototype.chain=function(){return Ye(this)},An.prototype.commit=function(){return new On(this.value(),this.__chain__)},An.prototype.next=function(){this.__values__===T&&(this.__values__=mu(this.value()));var n=this.__index__>=this.__values__.length;return{done:n,value:n?T:this.__values__[this.__index__++]}},An.prototype.plant=function(n){for(var t,r=this;r instanceof kn;){
	var e=Fe(r);e.__index__=0,e.__values__=T,t?u.__wrapped__=e:t=e;var u=e,r=r.__wrapped__}return u.__wrapped__=n,t},An.prototype.reverse=function(){var n=this.__wrapped__;return n instanceof Ln?(this.__actions__.length&&(n=new Ln(this)),n=n.reverse(),n.__actions__.push({func:Qe,args:[Ge],thisArg:T}),new On(n,this.__chain__)):this.thru(Ge)},An.prototype.toJSON=An.prototype.valueOf=An.prototype.value=function(){return wr(this.__wrapped__,this.__actions__)},An.prototype.first=An.prototype.head,wi&&(An.prototype[wi]=Xe),
	An}(); true?($n._=rt, !(__WEBPACK_AMD_DEFINE_RESULT__ = function(){return rt}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))):Nn?((Nn.exports=rt)._=rt,Fn._=rt):$n._=rt}).call(this);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(20)(module)))

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * ScrollMagic v2.0.6 (2018-10-08)
	 * The javascript library for magical scroll interactions.
	 * (c) 2018 Jan Paepke (@janpaepke)
	 * Project Website: http://scrollmagic.io
	 * 
	 * @version 2.0.6
	 * @license Dual licensed under MIT license and GPL.
	 * @author Jan Paepke - e-mail@janpaepke.de
	 *
	 * @file ScrollMagic GSAP Animation Plugin.
	 *
	 * requires: GSAP ~1.14
	 * Powered by the Greensock Animation Platform (GSAP): http://www.greensock.com/js
	 * Greensock License info at http://www.greensock.com/licensing/
	 */
	/**
	 * This plugin is meant to be used in conjunction with the Greensock Animation Plattform.  
	 * It offers an easy API to trigger Tweens or synchronize them to the scrollbar movement.
	 *
	 * Both the `lite` and the `max` versions of the GSAP library are supported.  
	 * The most basic requirement is `TweenLite`.
	 * 
	 * To have access to this extension, please include `plugins/animation.gsap.js`.
	 * @requires {@link http://greensock.com/gsap|GSAP ~1.14.x}
	 * @mixin animation.GSAP
	 */
	(function (root, factory) {
		if (true) {
			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(6), __webpack_require__(3), __webpack_require__(13)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (typeof exports === 'object') {
			// CommonJS
			// Loads whole gsap package onto global scope.
			require('gsap');
			factory(require('scrollmagic'), TweenMax, TimelineMax);
		} else {
			// Browser globals
			factory(root.ScrollMagic || (root.jQuery && root.jQuery.ScrollMagic), root.TweenMax || root.TweenLite, root.TimelineMax || root.TimelineLite);
		}
	}(this, function (ScrollMagic, Tween, Timeline) {
		"use strict";
		var NAMESPACE = "animation.gsap";

		var
		console = window.console || {},
			err = Function.prototype.bind.call(console.error || console.log ||
			function () {}, console);
		if (!ScrollMagic) {
			err("(" + NAMESPACE + ") -> ERROR: The ScrollMagic main module could not be found. Please make sure it's loaded before this plugin or use an asynchronous loader like requirejs.");
		}
		if (!Tween) {
			err("(" + NAMESPACE + ") -> ERROR: TweenLite or TweenMax could not be found. Please make sure GSAP is loaded before ScrollMagic or use an asynchronous loader like requirejs.");
		}

	/*
		 * ----------------------------------------------------------------
		 * Extensions for Scene
		 * ----------------------------------------------------------------
		 */
		/**
		 * Every instance of ScrollMagic.Scene now accepts an additional option.  
		 * See {@link ScrollMagic.Scene} for a complete list of the standard options.
		 * @memberof! animation.GSAP#
		 * @method new ScrollMagic.Scene(options)
		 * @example
		 * var scene = new ScrollMagic.Scene({tweenChanges: true});
		 *
		 * @param {object} [options] - Options for the Scene. The options can be updated at any time.
		 * @param {boolean} [options.tweenChanges=false] - Tweens Animation to the progress target instead of setting it.  
		 Does not affect animations where duration is `0`.
		 */
		/**
		 * **Get** or **Set** the tweenChanges option value.  
		 * This only affects scenes with a duration. If `tweenChanges` is `true`, the progress update when scrolling will not be immediate, but instead the animation will smoothly animate to the target state.  
		 * For a better understanding, try enabling and disabling this option in the [Scene Manipulation Example](../examples/basic/scene_manipulation.html).
		 * @memberof! animation.GSAP#
		 * @method Scene.tweenChanges
		 * 
		 * @example
		 * // get the current tweenChanges option
		 * var tweenChanges = scene.tweenChanges();
		 *
		 * // set new tweenChanges option
		 * scene.tweenChanges(true);
		 *
		 * @fires {@link Scene.change}, when used as setter
		 * @param {boolean} [newTweenChanges] - The new tweenChanges setting of the scene.
		 * @returns {boolean} `get` -  Current tweenChanges option value.
		 * @returns {Scene} `set` -  Parent object for chaining.
		 */
		// add option (TODO: DOC (private for dev))
		ScrollMagic.Scene.addOption("tweenChanges", // name
		false, // default


		function (val) { // validation callback
			return !!val;
		});
		// extend scene
		ScrollMagic.Scene.extend(function () {
			var Scene = this,
				_tween;

			var log = function () {
				if (Scene._log) { // not available, when main source minified
					Array.prototype.splice.call(arguments, 1, 0, "(" + NAMESPACE + ")", "->");
					Scene._log.apply(this, arguments);
				}
			};

			// set listeners
			Scene.on("progress.plugin_gsap", function () {
				updateTweenProgress();
			});
			Scene.on("destroy.plugin_gsap", function (e) {
				Scene.removeTween(e.reset);
			});

			/**
			 * Update the tween progress to current position.
			 * @private
			 */
			var updateTweenProgress = function () {
				if (_tween) {
					var
					progress = Scene.progress(),
						state = Scene.state();
					if (_tween.repeat && _tween.repeat() === -1) {
						// infinite loop, so not in relation to progress
						if (state === 'DURING' && _tween.paused()) {
							_tween.play();
						} else if (state !== 'DURING' && !_tween.paused()) {
							_tween.pause();
						}
					} else if (progress != _tween.progress()) { // do we even need to update the progress?
						// no infinite loop - so should we just play or go to a specific point in time?
						if (Scene.duration() === 0) {
							// play the animation
							if (progress > 0) { // play from 0 to 1
								_tween.play();
							} else { // play from 1 to 0
								_tween.reverse();
							}
						} else {
							// go to a specific point in time
							if (Scene.tweenChanges() && _tween.tweenTo) {
								// go smooth
								_tween.tweenTo(progress * _tween.duration());
							} else {
								// just hard set it
								_tween.progress(progress).pause();
							}
						}
					}
				}
			};

			/**
			 * Add a tween to the scene.  
			 * If you want to add multiple tweens, add them into a GSAP Timeline object and supply it instead (see example below).  
			 * 
			 * If the scene has a duration, the tween's duration will be projected to the scroll distance of the scene, meaning its progress will be synced to scrollbar movement.  
			 * For a scene with a duration of `0`, the tween will be triggered when scrolling forward past the scene's trigger position and reversed, when scrolling back.  
			 * To gain better understanding, check out the [Simple Tweening example](../examples/basic/simple_tweening.html).
			 *
			 * Instead of supplying a tween this method can also be used as a shorthand for `TweenMax.to()` (see example below).
			 * @memberof! animation.GSAP#
			 *
			 * @example
			 * // add a single tween directly
			 * scene.setTween(TweenMax.to("obj"), 1, {x: 100});
			 *
			 * // add a single tween via variable
			 * var tween = TweenMax.to("obj"), 1, {x: 100};
			 * scene.setTween(tween);
			 *
			 * // add multiple tweens, wrapped in a timeline.
			 * var timeline = new TimelineMax();
			 * var tween1 = TweenMax.from("obj1", 1, {x: 100});
			 * var tween2 = TweenMax.to("obj2", 1, {y: 100});
			 * timeline
			 *		.add(tween1)
			 *		.add(tween2);
			 * scene.addTween(timeline);
			 *
			 * // short hand to add a TweenMax.to() tween
			 * scene.setTween("obj3", 0.5, {y: 100});
			 *
			 * // short hand to add a TweenMax.to() tween for 1 second
			 * // this is useful, when the scene has a duration and the tween duration isn't important anyway
			 * scene.setTween("obj3", {y: 100});
			 *
			 * @param {(object|string)} TweenObject - A TweenMax, TweenLite, TimelineMax or TimelineLite object that should be animated in the scene. Can also be a Dom Element or Selector, when using direct tween definition (see examples).
			 * @param {(number|object)} duration - A duration for the tween, or tween parameters. If an object containing parameters are supplied, a default duration of 1 will be used.
			 * @param {object} params - The parameters for the tween
			 * @returns {Scene} Parent object for chaining.
			 */
			Scene.setTween = function (TweenObject, duration, params) {
				var newTween;
				if (arguments.length > 1) {
					if (arguments.length < 3) {
						params = duration;
						duration = 1;
					}
					TweenObject = Tween.to(TweenObject, duration, params);
				}
				try {
					// wrap Tween into a Timeline Object if available to include delay and repeats in the duration and standardize methods.
					if (Timeline) {
						newTween = new Timeline({
							smoothChildTiming: true
						}).add(TweenObject);
					} else {
						newTween = TweenObject;
					}
					newTween.pause();
				} catch (e) {
					log(1, "ERROR calling method 'setTween()': Supplied argument is not a valid TweenObject");
					return Scene;
				}
				if (_tween) { // kill old tween?
					Scene.removeTween();
				}
				_tween = newTween;

				// some properties need to be transferred it to the wrapper, otherwise they would get lost.
				if (TweenObject.repeat && TweenObject.repeat() === -1) { // TweenMax or TimelineMax Object?
					_tween.repeat(-1);
					_tween.yoyo(TweenObject.yoyo());
				}
				// Some tween validations and debugging helpers
				if (Scene.tweenChanges() && !_tween.tweenTo) {
					log(2, "WARNING: tweenChanges will only work if the TimelineMax object is available for ScrollMagic.");
				}

				// check if there are position tweens defined for the trigger and warn about it :)
				if (_tween && Scene.controller() && Scene.triggerElement() && Scene.loglevel() >= 2) { // controller is needed to know scroll direction.
					var
					triggerTweens = Tween.getTweensOf(Scene.triggerElement()),
						vertical = Scene.controller().info("vertical");
					triggerTweens.forEach(function (value, index) {
						var
						tweenvars = value.vars.css || value.vars,
							condition = vertical ? (tweenvars.top !== undefined || tweenvars.bottom !== undefined) : (tweenvars.left !== undefined || tweenvars.right !== undefined);
						if (condition) {
							log(2, "WARNING: Tweening the position of the trigger element affects the scene timing and should be avoided!");
							return false;
						}
					});
				}

				// warn about tween overwrites, when an element is tweened multiple times
				if (parseFloat(TweenLite.version) >= 1.14) { // onOverwrite only present since GSAP v1.14.0
					var
					list = _tween.getChildren ? _tween.getChildren(true, true, false) : [_tween],
						// get all nested tween objects
						newCallback = function () {
							log(2, "WARNING: tween was overwritten by another. To learn how to avoid this issue see here: https://github.com/janpaepke/ScrollMagic/wiki/WARNING:-tween-was-overwritten-by-another");
						};
					for (var i = 0, thisTween, oldCallback; i < list.length; i++) { /*jshint loopfunc: true */
						thisTween = list[i];
						if (oldCallback !== newCallback) { // if tweens is added more than once
							oldCallback = thisTween.vars.onOverwrite;
							thisTween.vars.onOverwrite = function () {
								if (oldCallback) {
									oldCallback.apply(this, arguments);
								}
								newCallback.apply(this, arguments);
							};
						}
					}
				}
				log(3, "added tween");

				updateTweenProgress();
				return Scene;
			};

			/**
			 * Remove the tween from the scene.  
			 * This will terminate the control of the Scene over the tween.
			 *
			 * Using the reset option you can decide if the tween should remain in the current state or be rewound to set the target elements back to the state they were in before the tween was added to the scene.
			 * @memberof! animation.GSAP#
			 *
			 * @example
			 * // remove the tween from the scene without resetting it
			 * scene.removeTween();
			 *
			 * // remove the tween from the scene and reset it to initial position
			 * scene.removeTween(true);
			 *
			 * @param {boolean} [reset=false] - If `true` the tween will be reset to its initial values.
			 * @returns {Scene} Parent object for chaining.
			 */
			Scene.removeTween = function (reset) {
				if (_tween) {
					if (reset) {
						_tween.progress(0).pause();
					}
					_tween.kill();
					_tween = undefined;
					log(3, "removed tween (reset: " + (reset ? "true" : "false") + ")");
				}
				return Scene;
			};

		});
	}));

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!function(i){"use strict"; true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(7)], __WEBPACK_AMD_DEFINE_FACTORY__ = (i), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"undefined"!=typeof exports?module.exports=i(require("jquery")):i(jQuery)}(function(i){"use strict";var e=window.Slick||{};(e=function(){var e=0;return function(t,o){var s,n=this;n.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:i(t),appendDots:i(t),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e,t){return i('<button type="button" />').text(t+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},n.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},i.extend(n,n.initials),n.activeBreakpoint=null,n.animType=null,n.animProp=null,n.breakpoints=[],n.breakpointSettings=[],n.cssTransitions=!1,n.focussed=!1,n.interrupted=!1,n.hidden="hidden",n.paused=!0,n.positionProp=null,n.respondTo=null,n.rowCount=1,n.shouldClick=!0,n.$slider=i(t),n.$slidesCache=null,n.transformType=null,n.transitionType=null,n.visibilityChange="visibilitychange",n.windowWidth=0,n.windowTimer=null,s=i(t).data("slick")||{},n.options=i.extend({},n.defaults,o,s),n.currentSlide=n.options.initialSlide,n.originalSettings=n.options,void 0!==document.mozHidden?(n.hidden="mozHidden",n.visibilityChange="mozvisibilitychange"):void 0!==document.webkitHidden&&(n.hidden="webkitHidden",n.visibilityChange="webkitvisibilitychange"),n.autoPlay=i.proxy(n.autoPlay,n),n.autoPlayClear=i.proxy(n.autoPlayClear,n),n.autoPlayIterator=i.proxy(n.autoPlayIterator,n),n.changeSlide=i.proxy(n.changeSlide,n),n.clickHandler=i.proxy(n.clickHandler,n),n.selectHandler=i.proxy(n.selectHandler,n),n.setPosition=i.proxy(n.setPosition,n),n.swipeHandler=i.proxy(n.swipeHandler,n),n.dragHandler=i.proxy(n.dragHandler,n),n.keyHandler=i.proxy(n.keyHandler,n),n.instanceUid=e++,n.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,n.registerBreakpoints(),n.init(!0)}}()).prototype.activateADA=function(){this.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},e.prototype.addSlide=e.prototype.slickAdd=function(e,t,o){var s=this;if("boolean"==typeof t)o=t,t=null;else if(t<0||t>=s.slideCount)return!1;s.unload(),"number"==typeof t?0===t&&0===s.$slides.length?i(e).appendTo(s.$slideTrack):o?i(e).insertBefore(s.$slides.eq(t)):i(e).insertAfter(s.$slides.eq(t)):!0===o?i(e).prependTo(s.$slideTrack):i(e).appendTo(s.$slideTrack),s.$slides=s.$slideTrack.children(this.options.slide),s.$slideTrack.children(this.options.slide).detach(),s.$slideTrack.append(s.$slides),s.$slides.each(function(e,t){i(t).attr("data-slick-index",e)}),s.$slidesCache=s.$slides,s.reinit()},e.prototype.animateHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.animate({height:e},i.options.speed)}},e.prototype.animateSlide=function(e,t){var o={},s=this;s.animateHeight(),!0===s.options.rtl&&!1===s.options.vertical&&(e=-e),!1===s.transformsEnabled?!1===s.options.vertical?s.$slideTrack.animate({left:e},s.options.speed,s.options.easing,t):s.$slideTrack.animate({top:e},s.options.speed,s.options.easing,t):!1===s.cssTransitions?(!0===s.options.rtl&&(s.currentLeft=-s.currentLeft),i({animStart:s.currentLeft}).animate({animStart:e},{duration:s.options.speed,easing:s.options.easing,step:function(i){i=Math.ceil(i),!1===s.options.vertical?(o[s.animType]="translate("+i+"px, 0px)",s.$slideTrack.css(o)):(o[s.animType]="translate(0px,"+i+"px)",s.$slideTrack.css(o))},complete:function(){t&&t.call()}})):(s.applyTransition(),e=Math.ceil(e),!1===s.options.vertical?o[s.animType]="translate3d("+e+"px, 0px, 0px)":o[s.animType]="translate3d(0px,"+e+"px, 0px)",s.$slideTrack.css(o),t&&setTimeout(function(){s.disableTransition(),t.call()},s.options.speed))},e.prototype.getNavTarget=function(){var e=this,t=e.options.asNavFor;return t&&null!==t&&(t=i(t).not(e.$slider)),t},e.prototype.asNavFor=function(e){var t=this.getNavTarget();null!==t&&"object"==typeof t&&t.each(function(){var t=i(this).slick("getSlick");t.unslicked||t.slideHandler(e,!0)})},e.prototype.applyTransition=function(i){var e=this,t={};!1===e.options.fade?t[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:t[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.autoPlay=function(){var i=this;i.autoPlayClear(),i.slideCount>i.options.slidesToShow&&(i.autoPlayTimer=setInterval(i.autoPlayIterator,i.options.autoplaySpeed))},e.prototype.autoPlayClear=function(){var i=this;i.autoPlayTimer&&clearInterval(i.autoPlayTimer)},e.prototype.autoPlayIterator=function(){var i=this,e=i.currentSlide+i.options.slidesToScroll;i.paused||i.interrupted||i.focussed||(!1===i.options.infinite&&(1===i.direction&&i.currentSlide+1===i.slideCount-1?i.direction=0:0===i.direction&&(e=i.currentSlide-i.options.slidesToScroll,i.currentSlide-1==0&&(i.direction=1))),i.slideHandler(e))},e.prototype.buildArrows=function(){var e=this;!0===e.options.arrows&&(e.$prevArrow=i(e.options.prevArrow).addClass("slick-arrow"),e.$nextArrow=i(e.options.nextArrow).addClass("slick-arrow"),e.slideCount>e.options.slidesToShow?(e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.prependTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),!0!==e.options.infinite&&e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},e.prototype.buildDots=function(){var e,t,o=this;if(!0===o.options.dots){for(o.$slider.addClass("slick-dotted"),t=i("<ul />").addClass(o.options.dotsClass),e=0;e<=o.getDotCount();e+=1)t.append(i("<li />").append(o.options.customPaging.call(this,o,e)));o.$dots=t.appendTo(o.options.appendDots),o.$dots.find("li").first().addClass("slick-active")}},e.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each(function(e,t){i(t).attr("data-slick-index",e).data("originalStyling",i(t).attr("style")||"")}),e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?i('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),!0!==e.options.centerMode&&!0!==e.options.swipeToSlide||(e.options.slidesToScroll=1),i("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),!0===e.options.draggable&&e.$list.addClass("draggable")},e.prototype.buildRows=function(){var i,e,t,o,s,n,r,l=this;if(o=document.createDocumentFragment(),n=l.$slider.children(),l.options.rows>1){for(r=l.options.slidesPerRow*l.options.rows,s=Math.ceil(n.length/r),i=0;i<s;i++){var d=document.createElement("div");for(e=0;e<l.options.rows;e++){var a=document.createElement("div");for(t=0;t<l.options.slidesPerRow;t++){var c=i*r+(e*l.options.slidesPerRow+t);n.get(c)&&a.appendChild(n.get(c))}d.appendChild(a)}o.appendChild(d)}l.$slider.empty().append(o),l.$slider.children().children().children().css({width:100/l.options.slidesPerRow+"%",display:"inline-block"})}},e.prototype.checkResponsive=function(e,t){var o,s,n,r=this,l=!1,d=r.$slider.width(),a=window.innerWidth||i(window).width();if("window"===r.respondTo?n=a:"slider"===r.respondTo?n=d:"min"===r.respondTo&&(n=Math.min(a,d)),r.options.responsive&&r.options.responsive.length&&null!==r.options.responsive){s=null;for(o in r.breakpoints)r.breakpoints.hasOwnProperty(o)&&(!1===r.originalSettings.mobileFirst?n<r.breakpoints[o]&&(s=r.breakpoints[o]):n>r.breakpoints[o]&&(s=r.breakpoints[o]));null!==s?null!==r.activeBreakpoint?(s!==r.activeBreakpoint||t)&&(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):null!==r.activeBreakpoint&&(r.activeBreakpoint=null,r.options=r.originalSettings,!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e),l=s),e||!1===l||r.$slider.trigger("breakpoint",[r,l])}},e.prototype.changeSlide=function(e,t){var o,s,n,r=this,l=i(e.currentTarget);switch(l.is("a")&&e.preventDefault(),l.is("li")||(l=l.closest("li")),n=r.slideCount%r.options.slidesToScroll!=0,o=n?0:(r.slideCount-r.currentSlide)%r.options.slidesToScroll,e.data.message){case"previous":s=0===o?r.options.slidesToScroll:r.options.slidesToShow-o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide-s,!1,t);break;case"next":s=0===o?r.options.slidesToScroll:o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide+s,!1,t);break;case"index":var d=0===e.data.index?0:e.data.index||l.index()*r.options.slidesToScroll;r.slideHandler(r.checkNavigable(d),!1,t),l.children().trigger("focus");break;default:return}},e.prototype.checkNavigable=function(i){var e,t;if(e=this.getNavigableIndexes(),t=0,i>e[e.length-1])i=e[e.length-1];else for(var o in e){if(i<e[o]){i=t;break}t=e[o]}return i},e.prototype.cleanUpEvents=function(){var e=this;e.options.dots&&null!==e.$dots&&(i("li",e.$dots).off("click.slick",e.changeSlide).off("mouseenter.slick",i.proxy(e.interrupt,e,!0)).off("mouseleave.slick",i.proxy(e.interrupt,e,!1)),!0===e.options.accessibility&&e.$dots.off("keydown.slick",e.keyHandler)),e.$slider.off("focus.slick blur.slick"),!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow&&e.$prevArrow.off("click.slick",e.changeSlide),e.$nextArrow&&e.$nextArrow.off("click.slick",e.changeSlide),!0===e.options.accessibility&&(e.$prevArrow&&e.$prevArrow.off("keydown.slick",e.keyHandler),e.$nextArrow&&e.$nextArrow.off("keydown.slick",e.keyHandler))),e.$list.off("touchstart.slick mousedown.slick",e.swipeHandler),e.$list.off("touchmove.slick mousemove.slick",e.swipeHandler),e.$list.off("touchend.slick mouseup.slick",e.swipeHandler),e.$list.off("touchcancel.slick mouseleave.slick",e.swipeHandler),e.$list.off("click.slick",e.clickHandler),i(document).off(e.visibilityChange,e.visibility),e.cleanUpSlideEvents(),!0===e.options.accessibility&&e.$list.off("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().off("click.slick",e.selectHandler),i(window).off("orientationchange.slick.slick-"+e.instanceUid,e.orientationChange),i(window).off("resize.slick.slick-"+e.instanceUid,e.resize),i("[draggable!=true]",e.$slideTrack).off("dragstart",e.preventDefault),i(window).off("load.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.cleanUpSlideEvents=function(){var e=this;e.$list.off("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.off("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.cleanUpRows=function(){var i,e=this;e.options.rows>1&&((i=e.$slides.children().children()).removeAttr("style"),e.$slider.empty().append(i))},e.prototype.clickHandler=function(i){!1===this.shouldClick&&(i.stopImmediatePropagation(),i.stopPropagation(),i.preventDefault())},e.prototype.destroy=function(e){var t=this;t.autoPlayClear(),t.touchObject={},t.cleanUpEvents(),i(".slick-cloned",t.$slider).detach(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.$prevArrow.length&&(t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove()),t.$nextArrow&&t.$nextArrow.length&&(t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove()),t.$slides&&(t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){i(this).attr("style",i(this).data("originalStyling"))}),t.$slideTrack.children(this.options.slide).detach(),t.$slideTrack.detach(),t.$list.detach(),t.$slider.append(t.$slides)),t.cleanUpRows(),t.$slider.removeClass("slick-slider"),t.$slider.removeClass("slick-initialized"),t.$slider.removeClass("slick-dotted"),t.unslicked=!0,e||t.$slider.trigger("destroy",[t])},e.prototype.disableTransition=function(i){var e=this,t={};t[e.transitionType]="",!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.fadeSlide=function(i,e){var t=this;!1===t.cssTransitions?(t.$slides.eq(i).css({zIndex:t.options.zIndex}),t.$slides.eq(i).animate({opacity:1},t.options.speed,t.options.easing,e)):(t.applyTransition(i),t.$slides.eq(i).css({opacity:1,zIndex:t.options.zIndex}),e&&setTimeout(function(){t.disableTransition(i),e.call()},t.options.speed))},e.prototype.fadeSlideOut=function(i){var e=this;!1===e.cssTransitions?e.$slides.eq(i).animate({opacity:0,zIndex:e.options.zIndex-2},e.options.speed,e.options.easing):(e.applyTransition(i),e.$slides.eq(i).css({opacity:0,zIndex:e.options.zIndex-2}))},e.prototype.filterSlides=e.prototype.slickFilter=function(i){var e=this;null!==i&&(e.$slidesCache=e.$slides,e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(i).appendTo(e.$slideTrack),e.reinit())},e.prototype.focusHandler=function(){var e=this;e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*",function(t){t.stopImmediatePropagation();var o=i(this);setTimeout(function(){e.options.pauseOnFocus&&(e.focussed=o.is(":focus"),e.autoPlay())},0)})},e.prototype.getCurrent=e.prototype.slickCurrentSlide=function(){return this.currentSlide},e.prototype.getDotCount=function(){var i=this,e=0,t=0,o=0;if(!0===i.options.infinite)if(i.slideCount<=i.options.slidesToShow)++o;else for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else if(!0===i.options.centerMode)o=i.slideCount;else if(i.options.asNavFor)for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else o=1+Math.ceil((i.slideCount-i.options.slidesToShow)/i.options.slidesToScroll);return o-1},e.prototype.getLeft=function(i){var e,t,o,s,n=this,r=0;return n.slideOffset=0,t=n.$slides.first().outerHeight(!0),!0===n.options.infinite?(n.slideCount>n.options.slidesToShow&&(n.slideOffset=n.slideWidth*n.options.slidesToShow*-1,s=-1,!0===n.options.vertical&&!0===n.options.centerMode&&(2===n.options.slidesToShow?s=-1.5:1===n.options.slidesToShow&&(s=-2)),r=t*n.options.slidesToShow*s),n.slideCount%n.options.slidesToScroll!=0&&i+n.options.slidesToScroll>n.slideCount&&n.slideCount>n.options.slidesToShow&&(i>n.slideCount?(n.slideOffset=(n.options.slidesToShow-(i-n.slideCount))*n.slideWidth*-1,r=(n.options.slidesToShow-(i-n.slideCount))*t*-1):(n.slideOffset=n.slideCount%n.options.slidesToScroll*n.slideWidth*-1,r=n.slideCount%n.options.slidesToScroll*t*-1))):i+n.options.slidesToShow>n.slideCount&&(n.slideOffset=(i+n.options.slidesToShow-n.slideCount)*n.slideWidth,r=(i+n.options.slidesToShow-n.slideCount)*t),n.slideCount<=n.options.slidesToShow&&(n.slideOffset=0,r=0),!0===n.options.centerMode&&n.slideCount<=n.options.slidesToShow?n.slideOffset=n.slideWidth*Math.floor(n.options.slidesToShow)/2-n.slideWidth*n.slideCount/2:!0===n.options.centerMode&&!0===n.options.infinite?n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)-n.slideWidth:!0===n.options.centerMode&&(n.slideOffset=0,n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)),e=!1===n.options.vertical?i*n.slideWidth*-1+n.slideOffset:i*t*-1+r,!0===n.options.variableWidth&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,!0===n.options.centerMode&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow+1),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,e+=(n.$list.width()-o.outerWidth())/2)),e},e.prototype.getOption=e.prototype.slickGetOption=function(i){return this.options[i]},e.prototype.getNavigableIndexes=function(){var i,e=this,t=0,o=0,s=[];for(!1===e.options.infinite?i=e.slideCount:(t=-1*e.options.slidesToScroll,o=-1*e.options.slidesToScroll,i=2*e.slideCount);t<i;)s.push(t),t=o+e.options.slidesToScroll,o+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return s},e.prototype.getSlick=function(){return this},e.prototype.getSlideCount=function(){var e,t,o=this;return t=!0===o.options.centerMode?o.slideWidth*Math.floor(o.options.slidesToShow/2):0,!0===o.options.swipeToSlide?(o.$slideTrack.find(".slick-slide").each(function(s,n){if(n.offsetLeft-t+i(n).outerWidth()/2>-1*o.swipeLeft)return e=n,!1}),Math.abs(i(e).attr("data-slick-index")-o.currentSlide)||1):o.options.slidesToScroll},e.prototype.goTo=e.prototype.slickGoTo=function(i,e){this.changeSlide({data:{message:"index",index:parseInt(i)}},e)},e.prototype.init=function(e){var t=this;i(t.$slider).hasClass("slick-initialized")||(i(t.$slider).addClass("slick-initialized"),t.buildRows(),t.buildOut(),t.setProps(),t.startLoad(),t.loadSlider(),t.initializeEvents(),t.updateArrows(),t.updateDots(),t.checkResponsive(!0),t.focusHandler()),e&&t.$slider.trigger("init",[t]),!0===t.options.accessibility&&t.initADA(),t.options.autoplay&&(t.paused=!1,t.autoPlay())},e.prototype.initADA=function(){var e=this,t=Math.ceil(e.slideCount/e.options.slidesToShow),o=e.getNavigableIndexes().filter(function(i){return i>=0&&i<e.slideCount});e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==e.$dots&&(e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t){var s=o.indexOf(t);i(this).attr({role:"tabpanel",id:"slick-slide"+e.instanceUid+t,tabindex:-1}),-1!==s&&i(this).attr({"aria-describedby":"slick-slide-control"+e.instanceUid+s})}),e.$dots.attr("role","tablist").find("li").each(function(s){var n=o[s];i(this).attr({role:"presentation"}),i(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+e.instanceUid+s,"aria-controls":"slick-slide"+e.instanceUid+n,"aria-label":s+1+" of "+t,"aria-selected":null,tabindex:"-1"})}).eq(e.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var s=e.currentSlide,n=s+e.options.slidesToShow;s<n;s++)e.$slides.eq(s).attr("tabindex",0);e.activateADA()},e.prototype.initArrowEvents=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},i.changeSlide),i.$nextArrow.off("click.slick").on("click.slick",{message:"next"},i.changeSlide),!0===i.options.accessibility&&(i.$prevArrow.on("keydown.slick",i.keyHandler),i.$nextArrow.on("keydown.slick",i.keyHandler)))},e.prototype.initDotEvents=function(){var e=this;!0===e.options.dots&&(i("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),!0===e.options.accessibility&&e.$dots.on("keydown.slick",e.keyHandler)),!0===e.options.dots&&!0===e.options.pauseOnDotsHover&&i("li",e.$dots).on("mouseenter.slick",i.proxy(e.interrupt,e,!0)).on("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.initSlideEvents=function(){var e=this;e.options.pauseOnHover&&(e.$list.on("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.on("mouseleave.slick",i.proxy(e.interrupt,e,!1)))},e.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.initSlideEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.$list.on("click.slick",e.clickHandler),i(document).on(e.visibilityChange,i.proxy(e.visibility,e)),!0===e.options.accessibility&&e.$list.on("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),i(window).on("orientationchange.slick.slick-"+e.instanceUid,i.proxy(e.orientationChange,e)),i(window).on("resize.slick.slick-"+e.instanceUid,i.proxy(e.resize,e)),i("[draggable!=true]",e.$slideTrack).on("dragstart",e.preventDefault),i(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),i(e.setPosition)},e.prototype.initUI=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.show(),i.$nextArrow.show()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.show()},e.prototype.keyHandler=function(i){var e=this;i.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===i.keyCode&&!0===e.options.accessibility?e.changeSlide({data:{message:!0===e.options.rtl?"next":"previous"}}):39===i.keyCode&&!0===e.options.accessibility&&e.changeSlide({data:{message:!0===e.options.rtl?"previous":"next"}}))},e.prototype.lazyLoad=function(){function e(e){i("img[data-lazy]",e).each(function(){var e=i(this),t=i(this).attr("data-lazy"),o=i(this).attr("data-srcset"),s=i(this).attr("data-sizes")||n.$slider.attr("data-sizes"),r=document.createElement("img");r.onload=function(){e.animate({opacity:0},100,function(){o&&(e.attr("srcset",o),s&&e.attr("sizes",s)),e.attr("src",t).animate({opacity:1},200,function(){e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")}),n.$slider.trigger("lazyLoaded",[n,e,t])})},r.onerror=function(){e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),n.$slider.trigger("lazyLoadError",[n,e,t])},r.src=t})}var t,o,s,n=this;if(!0===n.options.centerMode?!0===n.options.infinite?s=(o=n.currentSlide+(n.options.slidesToShow/2+1))+n.options.slidesToShow+2:(o=Math.max(0,n.currentSlide-(n.options.slidesToShow/2+1)),s=n.options.slidesToShow/2+1+2+n.currentSlide):(o=n.options.infinite?n.options.slidesToShow+n.currentSlide:n.currentSlide,s=Math.ceil(o+n.options.slidesToShow),!0===n.options.fade&&(o>0&&o--,s<=n.slideCount&&s++)),t=n.$slider.find(".slick-slide").slice(o,s),"anticipated"===n.options.lazyLoad)for(var r=o-1,l=s,d=n.$slider.find(".slick-slide"),a=0;a<n.options.slidesToScroll;a++)r<0&&(r=n.slideCount-1),t=(t=t.add(d.eq(r))).add(d.eq(l)),r--,l++;e(t),n.slideCount<=n.options.slidesToShow?e(n.$slider.find(".slick-slide")):n.currentSlide>=n.slideCount-n.options.slidesToShow?e(n.$slider.find(".slick-cloned").slice(0,n.options.slidesToShow)):0===n.currentSlide&&e(n.$slider.find(".slick-cloned").slice(-1*n.options.slidesToShow))},e.prototype.loadSlider=function(){var i=this;i.setPosition(),i.$slideTrack.css({opacity:1}),i.$slider.removeClass("slick-loading"),i.initUI(),"progressive"===i.options.lazyLoad&&i.progressiveLazyLoad()},e.prototype.next=e.prototype.slickNext=function(){this.changeSlide({data:{message:"next"}})},e.prototype.orientationChange=function(){var i=this;i.checkResponsive(),i.setPosition()},e.prototype.pause=e.prototype.slickPause=function(){var i=this;i.autoPlayClear(),i.paused=!0},e.prototype.play=e.prototype.slickPlay=function(){var i=this;i.autoPlay(),i.options.autoplay=!0,i.paused=!1,i.focussed=!1,i.interrupted=!1},e.prototype.postSlide=function(e){var t=this;t.unslicked||(t.$slider.trigger("afterChange",[t,e]),t.animating=!1,t.slideCount>t.options.slidesToShow&&t.setPosition(),t.swipeLeft=null,t.options.autoplay&&t.autoPlay(),!0===t.options.accessibility&&(t.initADA(),t.options.focusOnChange&&i(t.$slides.get(t.currentSlide)).attr("tabindex",0).focus()))},e.prototype.prev=e.prototype.slickPrev=function(){this.changeSlide({data:{message:"previous"}})},e.prototype.preventDefault=function(i){i.preventDefault()},e.prototype.progressiveLazyLoad=function(e){e=e||1;var t,o,s,n,r,l=this,d=i("img[data-lazy]",l.$slider);d.length?(t=d.first(),o=t.attr("data-lazy"),s=t.attr("data-srcset"),n=t.attr("data-sizes")||l.$slider.attr("data-sizes"),(r=document.createElement("img")).onload=function(){s&&(t.attr("srcset",s),n&&t.attr("sizes",n)),t.attr("src",o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),!0===l.options.adaptiveHeight&&l.setPosition(),l.$slider.trigger("lazyLoaded",[l,t,o]),l.progressiveLazyLoad()},r.onerror=function(){e<3?setTimeout(function(){l.progressiveLazyLoad(e+1)},500):(t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),l.$slider.trigger("lazyLoadError",[l,t,o]),l.progressiveLazyLoad())},r.src=o):l.$slider.trigger("allImagesLoaded",[l])},e.prototype.refresh=function(e){var t,o,s=this;o=s.slideCount-s.options.slidesToShow,!s.options.infinite&&s.currentSlide>o&&(s.currentSlide=o),s.slideCount<=s.options.slidesToShow&&(s.currentSlide=0),t=s.currentSlide,s.destroy(!0),i.extend(s,s.initials,{currentSlide:t}),s.init(),e||s.changeSlide({data:{message:"index",index:t}},!1)},e.prototype.registerBreakpoints=function(){var e,t,o,s=this,n=s.options.responsive||null;if("array"===i.type(n)&&n.length){s.respondTo=s.options.respondTo||"window";for(e in n)if(o=s.breakpoints.length-1,n.hasOwnProperty(e)){for(t=n[e].breakpoint;o>=0;)s.breakpoints[o]&&s.breakpoints[o]===t&&s.breakpoints.splice(o,1),o--;s.breakpoints.push(t),s.breakpointSettings[t]=n[e].settings}s.breakpoints.sort(function(i,e){return s.options.mobileFirst?i-e:e-i})}},e.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.registerBreakpoints(),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.cleanUpSlideEvents(),e.initSlideEvents(),e.checkResponsive(!1,!0),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.setPosition(),e.focusHandler(),e.paused=!e.options.autoplay,e.autoPlay(),e.$slider.trigger("reInit",[e])},e.prototype.resize=function(){var e=this;i(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout(function(){e.windowWidth=i(window).width(),e.checkResponsive(),e.unslicked||e.setPosition()},50))},e.prototype.removeSlide=e.prototype.slickRemove=function(i,e,t){var o=this;if(i="boolean"==typeof i?!0===(e=i)?0:o.slideCount-1:!0===e?--i:i,o.slideCount<1||i<0||i>o.slideCount-1)return!1;o.unload(),!0===t?o.$slideTrack.children().remove():o.$slideTrack.children(this.options.slide).eq(i).remove(),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slidesCache=o.$slides,o.reinit()},e.prototype.setCSS=function(i){var e,t,o=this,s={};!0===o.options.rtl&&(i=-i),e="left"==o.positionProp?Math.ceil(i)+"px":"0px",t="top"==o.positionProp?Math.ceil(i)+"px":"0px",s[o.positionProp]=i,!1===o.transformsEnabled?o.$slideTrack.css(s):(s={},!1===o.cssTransitions?(s[o.animType]="translate("+e+", "+t+")",o.$slideTrack.css(s)):(s[o.animType]="translate3d("+e+", "+t+", 0px)",o.$slideTrack.css(s)))},e.prototype.setDimensions=function(){var i=this;!1===i.options.vertical?!0===i.options.centerMode&&i.$list.css({padding:"0px "+i.options.centerPadding}):(i.$list.height(i.$slides.first().outerHeight(!0)*i.options.slidesToShow),!0===i.options.centerMode&&i.$list.css({padding:i.options.centerPadding+" 0px"})),i.listWidth=i.$list.width(),i.listHeight=i.$list.height(),!1===i.options.vertical&&!1===i.options.variableWidth?(i.slideWidth=Math.ceil(i.listWidth/i.options.slidesToShow),i.$slideTrack.width(Math.ceil(i.slideWidth*i.$slideTrack.children(".slick-slide").length))):!0===i.options.variableWidth?i.$slideTrack.width(5e3*i.slideCount):(i.slideWidth=Math.ceil(i.listWidth),i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0)*i.$slideTrack.children(".slick-slide").length)));var e=i.$slides.first().outerWidth(!0)-i.$slides.first().width();!1===i.options.variableWidth&&i.$slideTrack.children(".slick-slide").width(i.slideWidth-e)},e.prototype.setFade=function(){var e,t=this;t.$slides.each(function(o,s){e=t.slideWidth*o*-1,!0===t.options.rtl?i(s).css({position:"relative",right:e,top:0,zIndex:t.options.zIndex-2,opacity:0}):i(s).css({position:"relative",left:e,top:0,zIndex:t.options.zIndex-2,opacity:0})}),t.$slides.eq(t.currentSlide).css({zIndex:t.options.zIndex-1,opacity:1})},e.prototype.setHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.css("height",e)}},e.prototype.setOption=e.prototype.slickSetOption=function(){var e,t,o,s,n,r=this,l=!1;if("object"===i.type(arguments[0])?(o=arguments[0],l=arguments[1],n="multiple"):"string"===i.type(arguments[0])&&(o=arguments[0],s=arguments[1],l=arguments[2],"responsive"===arguments[0]&&"array"===i.type(arguments[1])?n="responsive":void 0!==arguments[1]&&(n="single")),"single"===n)r.options[o]=s;else if("multiple"===n)i.each(o,function(i,e){r.options[i]=e});else if("responsive"===n)for(t in s)if("array"!==i.type(r.options.responsive))r.options.responsive=[s[t]];else{for(e=r.options.responsive.length-1;e>=0;)r.options.responsive[e].breakpoint===s[t].breakpoint&&r.options.responsive.splice(e,1),e--;r.options.responsive.push(s[t])}l&&(r.unload(),r.reinit())},e.prototype.setPosition=function(){var i=this;i.setDimensions(),i.setHeight(),!1===i.options.fade?i.setCSS(i.getLeft(i.currentSlide)):i.setFade(),i.$slider.trigger("setPosition",[i])},e.prototype.setProps=function(){var i=this,e=document.body.style;i.positionProp=!0===i.options.vertical?"top":"left","top"===i.positionProp?i.$slider.addClass("slick-vertical"):i.$slider.removeClass("slick-vertical"),void 0===e.WebkitTransition&&void 0===e.MozTransition&&void 0===e.msTransition||!0===i.options.useCSS&&(i.cssTransitions=!0),i.options.fade&&("number"==typeof i.options.zIndex?i.options.zIndex<3&&(i.options.zIndex=3):i.options.zIndex=i.defaults.zIndex),void 0!==e.OTransform&&(i.animType="OTransform",i.transformType="-o-transform",i.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.MozTransform&&(i.animType="MozTransform",i.transformType="-moz-transform",i.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(i.animType=!1)),void 0!==e.webkitTransform&&(i.animType="webkitTransform",i.transformType="-webkit-transform",i.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.msTransform&&(i.animType="msTransform",i.transformType="-ms-transform",i.transitionType="msTransition",void 0===e.msTransform&&(i.animType=!1)),void 0!==e.transform&&!1!==i.animType&&(i.animType="transform",i.transformType="transform",i.transitionType="transition"),i.transformsEnabled=i.options.useTransform&&null!==i.animType&&!1!==i.animType},e.prototype.setSlideClasses=function(i){var e,t,o,s,n=this;if(t=n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),n.$slides.eq(i).addClass("slick-current"),!0===n.options.centerMode){var r=n.options.slidesToShow%2==0?1:0;e=Math.floor(n.options.slidesToShow/2),!0===n.options.infinite&&(i>=e&&i<=n.slideCount-1-e?n.$slides.slice(i-e+r,i+e+1).addClass("slick-active").attr("aria-hidden","false"):(o=n.options.slidesToShow+i,t.slice(o-e+1+r,o+e+2).addClass("slick-active").attr("aria-hidden","false")),0===i?t.eq(t.length-1-n.options.slidesToShow).addClass("slick-center"):i===n.slideCount-1&&t.eq(n.options.slidesToShow).addClass("slick-center")),n.$slides.eq(i).addClass("slick-center")}else i>=0&&i<=n.slideCount-n.options.slidesToShow?n.$slides.slice(i,i+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):t.length<=n.options.slidesToShow?t.addClass("slick-active").attr("aria-hidden","false"):(s=n.slideCount%n.options.slidesToShow,o=!0===n.options.infinite?n.options.slidesToShow+i:i,n.options.slidesToShow==n.options.slidesToScroll&&n.slideCount-i<n.options.slidesToShow?t.slice(o-(n.options.slidesToShow-s),o+s).addClass("slick-active").attr("aria-hidden","false"):t.slice(o,o+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));"ondemand"!==n.options.lazyLoad&&"anticipated"!==n.options.lazyLoad||n.lazyLoad()},e.prototype.setupInfinite=function(){var e,t,o,s=this;if(!0===s.options.fade&&(s.options.centerMode=!1),!0===s.options.infinite&&!1===s.options.fade&&(t=null,s.slideCount>s.options.slidesToShow)){for(o=!0===s.options.centerMode?s.options.slidesToShow+1:s.options.slidesToShow,e=s.slideCount;e>s.slideCount-o;e-=1)t=e-1,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t-s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");for(e=0;e<o+s.slideCount;e+=1)t=e,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t+s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");s.$slideTrack.find(".slick-cloned").find("[id]").each(function(){i(this).attr("id","")})}},e.prototype.interrupt=function(i){var e=this;i||e.autoPlay(),e.interrupted=i},e.prototype.selectHandler=function(e){var t=this,o=i(e.target).is(".slick-slide")?i(e.target):i(e.target).parents(".slick-slide"),s=parseInt(o.attr("data-slick-index"));s||(s=0),t.slideCount<=t.options.slidesToShow?t.slideHandler(s,!1,!0):t.slideHandler(s)},e.prototype.slideHandler=function(i,e,t){var o,s,n,r,l,d=null,a=this;if(e=e||!1,!(!0===a.animating&&!0===a.options.waitForAnimate||!0===a.options.fade&&a.currentSlide===i))if(!1===e&&a.asNavFor(i),o=i,d=a.getLeft(o),r=a.getLeft(a.currentSlide),a.currentLeft=null===a.swipeLeft?r:a.swipeLeft,!1===a.options.infinite&&!1===a.options.centerMode&&(i<0||i>a.getDotCount()*a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else if(!1===a.options.infinite&&!0===a.options.centerMode&&(i<0||i>a.slideCount-a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else{if(a.options.autoplay&&clearInterval(a.autoPlayTimer),s=o<0?a.slideCount%a.options.slidesToScroll!=0?a.slideCount-a.slideCount%a.options.slidesToScroll:a.slideCount+o:o>=a.slideCount?a.slideCount%a.options.slidesToScroll!=0?0:o-a.slideCount:o,a.animating=!0,a.$slider.trigger("beforeChange",[a,a.currentSlide,s]),n=a.currentSlide,a.currentSlide=s,a.setSlideClasses(a.currentSlide),a.options.asNavFor&&(l=(l=a.getNavTarget()).slick("getSlick")).slideCount<=l.options.slidesToShow&&l.setSlideClasses(a.currentSlide),a.updateDots(),a.updateArrows(),!0===a.options.fade)return!0!==t?(a.fadeSlideOut(n),a.fadeSlide(s,function(){a.postSlide(s)})):a.postSlide(s),void a.animateHeight();!0!==t?a.animateSlide(d,function(){a.postSlide(s)}):a.postSlide(s)}},e.prototype.startLoad=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.hide(),i.$nextArrow.hide()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.hide(),i.$slider.addClass("slick-loading")},e.prototype.swipeDirection=function(){var i,e,t,o,s=this;return i=s.touchObject.startX-s.touchObject.curX,e=s.touchObject.startY-s.touchObject.curY,t=Math.atan2(e,i),(o=Math.round(180*t/Math.PI))<0&&(o=360-Math.abs(o)),o<=45&&o>=0?!1===s.options.rtl?"left":"right":o<=360&&o>=315?!1===s.options.rtl?"left":"right":o>=135&&o<=225?!1===s.options.rtl?"right":"left":!0===s.options.verticalSwiping?o>=35&&o<=135?"down":"up":"vertical"},e.prototype.swipeEnd=function(i){var e,t,o=this;if(o.dragging=!1,o.swiping=!1,o.scrolling)return o.scrolling=!1,!1;if(o.interrupted=!1,o.shouldClick=!(o.touchObject.swipeLength>10),void 0===o.touchObject.curX)return!1;if(!0===o.touchObject.edgeHit&&o.$slider.trigger("edge",[o,o.swipeDirection()]),o.touchObject.swipeLength>=o.touchObject.minSwipe){switch(t=o.swipeDirection()){case"left":case"down":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide+o.getSlideCount()):o.currentSlide+o.getSlideCount(),o.currentDirection=0;break;case"right":case"up":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide-o.getSlideCount()):o.currentSlide-o.getSlideCount(),o.currentDirection=1}"vertical"!=t&&(o.slideHandler(e),o.touchObject={},o.$slider.trigger("swipe",[o,t]))}else o.touchObject.startX!==o.touchObject.curX&&(o.slideHandler(o.currentSlide),o.touchObject={})},e.prototype.swipeHandler=function(i){var e=this;if(!(!1===e.options.swipe||"ontouchend"in document&&!1===e.options.swipe||!1===e.options.draggable&&-1!==i.type.indexOf("mouse")))switch(e.touchObject.fingerCount=i.originalEvent&&void 0!==i.originalEvent.touches?i.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,!0===e.options.verticalSwiping&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),i.data.action){case"start":e.swipeStart(i);break;case"move":e.swipeMove(i);break;case"end":e.swipeEnd(i)}},e.prototype.swipeMove=function(i){var e,t,o,s,n,r,l=this;return n=void 0!==i.originalEvent?i.originalEvent.touches:null,!(!l.dragging||l.scrolling||n&&1!==n.length)&&(e=l.getLeft(l.currentSlide),l.touchObject.curX=void 0!==n?n[0].pageX:i.clientX,l.touchObject.curY=void 0!==n?n[0].pageY:i.clientY,l.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(l.touchObject.curX-l.touchObject.startX,2))),r=Math.round(Math.sqrt(Math.pow(l.touchObject.curY-l.touchObject.startY,2))),!l.options.verticalSwiping&&!l.swiping&&r>4?(l.scrolling=!0,!1):(!0===l.options.verticalSwiping&&(l.touchObject.swipeLength=r),t=l.swipeDirection(),void 0!==i.originalEvent&&l.touchObject.swipeLength>4&&(l.swiping=!0,i.preventDefault()),s=(!1===l.options.rtl?1:-1)*(l.touchObject.curX>l.touchObject.startX?1:-1),!0===l.options.verticalSwiping&&(s=l.touchObject.curY>l.touchObject.startY?1:-1),o=l.touchObject.swipeLength,l.touchObject.edgeHit=!1,!1===l.options.infinite&&(0===l.currentSlide&&"right"===t||l.currentSlide>=l.getDotCount()&&"left"===t)&&(o=l.touchObject.swipeLength*l.options.edgeFriction,l.touchObject.edgeHit=!0),!1===l.options.vertical?l.swipeLeft=e+o*s:l.swipeLeft=e+o*(l.$list.height()/l.listWidth)*s,!0===l.options.verticalSwiping&&(l.swipeLeft=e+o*s),!0!==l.options.fade&&!1!==l.options.touchMove&&(!0===l.animating?(l.swipeLeft=null,!1):void l.setCSS(l.swipeLeft))))},e.prototype.swipeStart=function(i){var e,t=this;if(t.interrupted=!0,1!==t.touchObject.fingerCount||t.slideCount<=t.options.slidesToShow)return t.touchObject={},!1;void 0!==i.originalEvent&&void 0!==i.originalEvent.touches&&(e=i.originalEvent.touches[0]),t.touchObject.startX=t.touchObject.curX=void 0!==e?e.pageX:i.clientX,t.touchObject.startY=t.touchObject.curY=void 0!==e?e.pageY:i.clientY,t.dragging=!0},e.prototype.unfilterSlides=e.prototype.slickUnfilter=function(){var i=this;null!==i.$slidesCache&&(i.unload(),i.$slideTrack.children(this.options.slide).detach(),i.$slidesCache.appendTo(i.$slideTrack),i.reinit())},e.prototype.unload=function(){var e=this;i(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove(),e.$nextArrow&&e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},e.prototype.unslick=function(i){var e=this;e.$slider.trigger("unslick",[e,i]),e.destroy()},e.prototype.updateArrows=function(){var i=this;Math.floor(i.options.slidesToShow/2),!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&!i.options.infinite&&(i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===i.currentSlide?(i.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-i.options.slidesToShow&&!1===i.options.centerMode?(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-1&&!0===i.options.centerMode&&(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},e.prototype.updateDots=function(){var i=this;null!==i.$dots&&(i.$dots.find("li").removeClass("slick-active").end(),i.$dots.find("li").eq(Math.floor(i.currentSlide/i.options.slidesToScroll)).addClass("slick-active"))},e.prototype.visibility=function(){var i=this;i.options.autoplay&&(document[i.hidden]?i.interrupted=!0:i.interrupted=!1)},i.fn.slick=function(){var i,t,o=this,s=arguments[0],n=Array.prototype.slice.call(arguments,1),r=o.length;for(i=0;i<r;i++)if("object"==typeof s||void 0===s?o[i].slick=new e(o[i],s):t=o[i].slick[s].apply(o[i].slick,n),void 0!==t)return t;return o}});


/***/ }),
/* 20 */
/***/ (function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ }),
/* 21 */
/***/ (function(module, exports) {

	jQuery(document).ready(function (jQuery) {
	  // var outlaneCopyright = $('#OutlaneCopyright');
	  // if (outlaneCopyright.length) {
	  //   if (outlaneCopyright.attr('href') == 'https://outlane.co/shopify/star-theme' && outlaneCopyright.attr('rel') != 'nofollow' && outlaneCopyright.html() == 'Star Shopify Theme by Outlane' ) {
	  //   } else {
	  //     $('body').remove();
	  //   }
	  // } else {
	  //   $('body').remove();
	  // }

	});


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(9);


/***/ })
/******/ ]);