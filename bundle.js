/* global Fluid, CONFIG */

window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;

Fluid.utils = {

  listenScroll: function(callback) {
    var dbc = new Debouncer(callback);
    window.addEventListener('scroll', dbc, false);
    dbc.handleEvent();
    return dbc;
  },

  unlistenScroll: function(callback) {
    window.removeEventListener('scroll', callback);
  },

  listenDOMLoaded(callback) {
    if (document.readyState !== 'loading') {
      callback();
    } else {
      document.addEventListener('DOMContentLoaded', function () {
        callback();
      });
    }
  },

  scrollToElement: function(target, offset) {
    var of = jQuery(target).offset();
    if (of) {
      jQuery('html,body').animate({
        scrollTop: of.top + (offset || 0),
        easing   : 'swing'
      });
    }
  },

  elementVisible: function(element, offsetFactor) {
    offsetFactor = offsetFactor && offsetFactor >= 0 ? offsetFactor : 0;
    var rect = element.getBoundingClientRect();
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    return (
      (rect.top >= 0 && rect.top <= viewportHeight * (1 + offsetFactor) + rect.height / 2) ||
      (rect.bottom >= 0 && rect.bottom <= viewportHeight * (1 + offsetFactor) + rect.height / 2)
    );
  },

  waitElementVisible: function(selectorOrElement, callback, offsetFactor) {
    var runningOnBrowser = typeof window !== 'undefined';
    var isBot = (runningOnBrowser && !('onscroll' in window))
      || (typeof navigator !== 'undefined' && /(gle|ing|ro|msn)bot|crawl|spider|yand|duckgo/i.test(navigator.userAgent));
    if (!runningOnBrowser || isBot) {
      return;
    }

    offsetFactor = offsetFactor && offsetFactor >= 0 ? offsetFactor : 0;

    function waitInViewport(element) {
      Fluid.utils.listenDOMLoaded(function() {
        if (Fluid.utils.elementVisible(element, offsetFactor)) {
          callback();
          return;
        }
        if ('IntersectionObserver' in window) {
          var io = new IntersectionObserver(function(entries, ob) {
            if (entries[0].isIntersecting) {
              callback();
              ob.disconnect();
            }
          }, {
            threshold : [0],
            rootMargin: (window.innerHeight || document.documentElement.clientHeight) * offsetFactor + 'px'
          });
          io.observe(element);
        } else {
          var wrapper = Fluid.utils.listenScroll(function() {
            if (Fluid.utils.elementVisible(element, offsetFactor)) {
              Fluid.utils.unlistenScroll(wrapper);
              callback();
            }
          });
        }
      });
    }

    if (typeof selectorOrElement === 'string') {
      this.waitElementLoaded(selectorOrElement, function(element) {
        waitInViewport(element);
      });
    } else {
      waitInViewport(selectorOrElement);
    }
  },

  waitElementLoaded: function(selector, callback) {
    var runningOnBrowser = typeof window !== 'undefined';
    var isBot = (runningOnBrowser && !('onscroll' in window))
      || (typeof navigator !== 'undefined' && /(gle|ing|ro|msn)bot|crawl|spider|yand|duckgo/i.test(navigator.userAgent));
    if (!runningOnBrowser || isBot) {
      return;
    }

    if ('MutationObserver' in window) {
      var mo = new MutationObserver(function(records, ob) {
        var ele = document.querySelector(selector);
        if (ele) {
          callback(ele);
          ob.disconnect();
        }
      });
      mo.observe(document, { childList: true, subtree: true });
    } else {
      Fluid.utils.listenDOMLoaded(function() {
        var waitLoop = function() {
          var ele = document.querySelector(selector);
          if (ele) {
            callback(ele);
          } else {
            setTimeout(waitLoop, 100);
          }
        };
        waitLoop();
      });
    }
  },

  createScript: function(url, onload) {
    var s = document.createElement('script');
    s.setAttribute('src', url);
    s.setAttribute('type', 'text/javascript');
    s.setAttribute('charset', 'UTF-8');
    s.async = false;
    if (typeof onload === 'function') {
      if (window.attachEvent) {
        s.onreadystatechange = function() {
          var e = s.readyState;
          if (e === 'loaded' || e === 'complete') {
            s.onreadystatechange = null;
            onload();
          }
        };
      } else {
        s.onload = onload;
      }
    }
    var ss = document.getElementsByTagName('script');
    var e = ss.length > 0 ? ss[ss.length - 1] : document.head || document.documentElement;
    e.parentNode.insertBefore(s, e.nextSibling);
  },

  createCssLink: function(url) {
    var l = document.createElement('link');
    l.setAttribute('rel', 'stylesheet');
    l.setAttribute('type', 'text/css');
    l.setAttribute('href', url);
    var e = document.getElementsByTagName('link')[0]
      || document.getElementsByTagName('head')[0]
      || document.head || document.documentElement;
    e.parentNode.insertBefore(l, e);
  },

  loadComments: function(selector, loadFunc) {
    var ele = document.querySelector('#comments[lazyload]');
    if (ele) {
      var callback = function() {
        loadFunc();
        ele.removeAttribute('lazyload');
      };
      Fluid.utils.waitElementVisible(selector, callback, CONFIG.lazyload.offset_factor);
    } else {
      loadFunc();
    }
  },

  getBackgroundLightness(selectorOrElement) {
    var ele = selectorOrElement;
    if (typeof selectorOrElement === 'string') {
      ele = document.querySelector(selectorOrElement);
    }
    var view = ele.ownerDocument.defaultView;
    if (!view) {
      view = window;
    }
    var rgbArr = view.getComputedStyle(ele).backgroundColor.replace(/rgba*\(/, '').replace(')', '').split(/,\s*/);
    if (rgbArr.length < 3) {
      return 0;
    }
    var colorCast = (0.213 * rgbArr[0]) + (0.715 * rgbArr[1]) + (0.072 * rgbArr[2]);
    return colorCast === 0 || colorCast > 255 / 2 ? 1 : -1;
  },

  retry(handler, interval, times) {
    if (times <= 0) {
      return;
    }
    var next = function() {
      if (--times >= 0 && !handler()) {
        setTimeout(next, interval);
      }
    };
    setTimeout(next, interval);
  }

};

/**
 * Handles debouncing of events via requestAnimationFrame
 * @see http://www.html5rocks.com/en/tutorials/speed/animations/
 * @param {Function} callback The callback to handle whichever event
 */
function Debouncer(callback) {
  this.callback = callback;
  this.ticking = false;
}

Debouncer.prototype = {
  constructor: Debouncer,

  /**
   * dispatches the event to the supplied callback
   * @private
   */
  update: function() {
    this.callback && this.callback();
    this.ticking = false;
  },

  /**
   * ensures events don't get stacked
   * @private
   */
  requestTick: function() {
    if (!this.ticking) {
      requestAnimationFrame(this.rafCallback || (this.rafCallback = this.update.bind(this)));
      this.ticking = true;
    }
  },

  /**
   * Attach this as the event listeners
   */
  handleEvent: function() {
    this.requestTick();
  }
};
;
/* global Fluid */

/**
 * Modified from https://blog.skk.moe/post/hello-darkmode-my-old-friend/
 */
(function(window, document) {
  var rootElement = document.documentElement;
  var colorSchemaStorageKey = 'Fluid_Color_Scheme';
  var colorSchemaMediaQueryKey = '--color-mode';
  var userColorSchemaAttributeName = 'data-user-color-scheme';
  var defaultColorSchemaAttributeName = 'data-default-color-scheme';
  var colorToggleButtonSelector = '#color-toggle-btn';
  var colorToggleIconSelector = '#color-toggle-icon';
  var iframeSelector = 'iframe';

  function setLS(k, v) {
    try {
      localStorage.setItem(k, v);
    } catch (e) {}
  }

  function removeLS(k) {
    try {
      localStorage.removeItem(k);
    } catch (e) {}
  }

  function getLS(k) {
    try {
      return localStorage.getItem(k);
    } catch (e) {
      return null;
    }
  }

  function getSchemaFromHTML() {
    var res = rootElement.getAttribute(defaultColorSchemaAttributeName);
    if (typeof res === 'string') {
      return res.replace(/["'\s]/g, '');
    }
    return null;
  }

  function getSchemaFromCSSMediaQuery() {
    var res = getComputedStyle(rootElement).getPropertyValue(
      colorSchemaMediaQueryKey
    );
    if (typeof res === 'string') {
      return res.replace(/["'\s]/g, '');
    }
    return null;
  }

  function resetSchemaAttributeAndLS() {
    rootElement.setAttribute(userColorSchemaAttributeName, getDefaultColorSchema());
    removeLS(colorSchemaStorageKey);
  }

  var validColorSchemaKeys = {
    dark : true,
    light: true
  };

  function getDefaultColorSchema() {
    // 取默认字段的值
    var schema = getSchemaFromHTML();
    // 如果明确指定了 schema 则返回
    if (validColorSchemaKeys[schema]) {
      return schema;
    }
    // 默认优先按 prefers-color-scheme
    schema = getSchemaFromCSSMediaQuery();
    if (validColorSchemaKeys[schema]) {
      return schema;
    }
    // 否则按本地时间是否大于 18 点或凌晨 0 ~ 6 点
    var hours = new Date().getHours();
    if (hours >= 18 || (hours >= 0 && hours <= 6)) {
      return 'dark';
    }
    return 'light';
  }

  function applyCustomColorSchemaSettings(schema) {
    // 接受从「开关」处传来的模式，或者从 localStorage 读取，否则按默认设置值
    var current = schema || getLS(colorSchemaStorageKey) || getDefaultColorSchema();

    if (current === getDefaultColorSchema()) {
      // 当用户切换的显示模式和默认模式相同时，则恢复为自动模式
      resetSchemaAttributeAndLS();
    } else if (validColorSchemaKeys[current]) {
      rootElement.setAttribute(
        userColorSchemaAttributeName,
        current
      );
    } else {
      // 特殊情况重置
      resetSchemaAttributeAndLS();
      return;
    }

    // 根据当前模式设置图标
    setButtonIcon(current);

    // 设置代码高亮
    setHighlightCSS(current);

    // 设置其他应用
    setApplications(current);
  }

  var invertColorSchemaObj = {
    dark : 'light',
    light: 'dark'
  };

  function getIconClass(scheme) {
    return 'icon-' + scheme;
  }

  function toggleCustomColorSchema() {
    var currentSetting = getLS(colorSchemaStorageKey);

    if (validColorSchemaKeys[currentSetting]) {
      // 从 localStorage 中读取模式，并取相反的模式
      currentSetting = invertColorSchemaObj[currentSetting];
    } else if (currentSetting === null) {
      // 当 localStorage 中没有相关值，或者 localStorage 抛了 Error
      // 先按照按钮的状态进行切换
      var iconElement = document.querySelector(colorToggleIconSelector);
      if (iconElement) {
        currentSetting = iconElement.getAttribute('data');
      }
      if (!iconElement || !validColorSchemaKeys[currentSetting]) {
        // 当 localStorage 中没有相关值，或者 localStorage 抛了 Error，则读取默认值并切换到相反的模式
        currentSetting = invertColorSchemaObj[getSchemaFromCSSMediaQuery()];
      }
    } else {
      return;
    }
    // 将相反的模式写入 localStorage
    setLS(colorSchemaStorageKey, currentSetting);

    return currentSetting;
  }

  function setButtonIcon(schema) {
    if (validColorSchemaKeys[schema]) {
      // 切换图标
      var icon = getIconClass('dark');
      if (schema) {
        icon = getIconClass(schema);
      }
      var iconElement = document.querySelector(colorToggleIconSelector);
      if (iconElement) {
        iconElement.setAttribute(
          'class',
          'iconfont ' + icon
        );
        iconElement.setAttribute(
          'data',
          invertColorSchemaObj[schema]
        );
      } else {
        // 如果图标不存在则说明图标还没加载出来，等到页面全部加载再尝试切换
        Fluid.utils.waitElementLoaded(colorToggleIconSelector, function() {
          var iconElement = document.querySelector(colorToggleIconSelector);
          if (iconElement) {
            iconElement.setAttribute(
              'class',
              'iconfont ' + icon
            );
            iconElement.setAttribute(
              'data',
              invertColorSchemaObj[schema]
            );
          }
        });
      }
      if (document.documentElement.getAttribute('data-user-color-scheme')) {
        var color = getComputedStyle(document.documentElement).getPropertyValue('--navbar-bg-color').trim()
        document.querySelector('meta[name="theme-color"]').setAttribute('content', color)
      }
    }
  }

  function setHighlightCSS(schema) {
    // 启用对应的代码高亮的样式
    var lightCss = document.getElementById('highlight-css');
    var darkCss = document.getElementById('highlight-css-dark');
    if (schema === 'dark') {
      if (darkCss) {
        darkCss.removeAttribute('disabled');
      }
      if (lightCss) {
        lightCss.setAttribute('disabled', '');
      }
    } else {
      if (lightCss) {
        lightCss.removeAttribute('disabled');
      }
      if (darkCss) {
        darkCss.setAttribute('disabled', '');
      }
    }

    setTimeout(function() {
      // 设置代码块组件样式
      document.querySelectorAll('.markdown-body pre').forEach((pre) => {
        var cls = Fluid.utils.getBackgroundLightness(pre) >= 0 ? 'code-widget-light' : 'code-widget-dark';
        var widget = pre.querySelector('.code-widget-light, .code-widget-dark');
        if (widget) {
          widget.classList.remove('code-widget-light', 'code-widget-dark');
          widget.classList.add(cls);
        }
      });
    }, 200);
  }

  function setApplications(schema) {
    // 设置 remark42 评论主题
    if (window.REMARK42) {
      window.REMARK42.changeTheme(schema);
    }

    // 设置 cusdis 评论主题
    if (window.CUSDIS) {
      window.CUSDIS.setTheme(schema);
    }

    // 设置 utterances 评论主题
    var utterances = document.querySelector('.utterances-frame');
    if (utterances) {
      var utterancesTheme = schema === 'dark' ? window.UtterancesThemeDark : window.UtterancesThemeLight;
      const message = {
        type : 'set-theme',
        theme: utterancesTheme
      };
      utterances.contentWindow.postMessage(message, 'https://utteranc.es');
    }

    // 设置 giscus 评论主题
    var giscus = document.querySelector('iframe.giscus-frame');
    if (giscus) {
      var giscusTheme = schema === 'dark' ? window.GiscusThemeDark : window.GiscusThemeLight;
      const message = {
        setConfig: {
          theme: giscusTheme,
        }
      };
      // giscus.style.cssText += 'color-scheme: normal;';
      giscus.contentWindow.postMessage({ 'giscus': message }, 'https://giscus.app');
    }
  }

  // 当页面加载时，将显示模式设置为 localStorage 中自定义的值（如果有的话）
  applyCustomColorSchemaSettings();

  Fluid.utils.waitElementLoaded(colorToggleIconSelector, function() {
    applyCustomColorSchemaSettings();
    var button = document.querySelector(colorToggleButtonSelector);
    if (button) {
      // 当用户点击切换按钮时，获得新的显示模式、写入 localStorage、并在页面上生效
      button.addEventListener('click', function() {
        applyCustomColorSchemaSettings(toggleCustomColorSchema());
      });
      var icon = document.querySelector(colorToggleIconSelector);
      if (icon) {
        // 光标悬停在按钮上时，切换图标
        button.addEventListener('mouseenter', function() {
          var current = icon.getAttribute('data');
          icon.classList.replace(getIconClass(invertColorSchemaObj[current]), getIconClass(current));
        });
        button.addEventListener('mouseleave', function() {
          var current = icon.getAttribute('data');
          icon.classList.replace(getIconClass(current), getIconClass(invertColorSchemaObj[current]));
        });
      }
    }
  });

  Fluid.utils.waitElementLoaded(iframeSelector, function() {
    applyCustomColorSchemaSettings();
  });
  
})(window, document);
;
/* global Fluid */

HTMLElement.prototype.wrap = function(wrapper) {
  this.parentNode.insertBefore(wrapper, this);
  this.parentNode.removeChild(this);
  wrapper.appendChild(this);
};

Fluid.events = {

  registerNavbarEvent: function() {
    var navbar = jQuery('#navbar');
    if (navbar.length === 0) {
      return;
    }
    var submenu = jQuery('#navbar .dropdown-menu');
    if (navbar.offset().top > 0) {
      navbar.removeClass('navbar-dark');
      submenu.removeClass('navbar-dark');
    }
    Fluid.utils.listenScroll(function() {
      navbar[navbar.offset().top > 50 ? 'addClass' : 'removeClass']('top-nav-collapse');
      submenu[navbar.offset().top > 50 ? 'addClass' : 'removeClass']('dropdown-collapse');
      if (navbar.offset().top > 0) {
        navbar.removeClass('navbar-dark');
        submenu.removeClass('navbar-dark');
      } else {
        navbar.addClass('navbar-dark');
        submenu.removeClass('navbar-dark');
      }
    });
    jQuery('#navbar-toggler-btn').on('click', function() {
      jQuery('.animated-icon').toggleClass('open');
      jQuery('#navbar').toggleClass('navbar-col-show');
    });
  },

  registerParallaxEvent: function() {
    var ph = jQuery('#banner[parallax="true"]');
    if (ph.length === 0) {
      return;
    }
    var board = jQuery('#board');
    if (board.length === 0) {
      return;
    }
    var parallax = function() {
      var pxv = jQuery(window).scrollTop() / 5;
      var offset = parseInt(board.css('margin-top'), 10);
      var max = 96 + offset;
      if (pxv > max) {
        pxv = max;
      }
      ph.css({
        transform: 'translate3d(0,' + pxv + 'px,0)'
      });
      var sideCol = jQuery('.side-col');
      if (sideCol) {
        sideCol.css({
          'padding-top': pxv + 'px'
        });
      }
    };
    Fluid.utils.listenScroll(parallax);
  },

  registerScrollDownArrowEvent: function() {
    var scrollbar = jQuery('.scroll-down-bar');
    if (scrollbar.length === 0) {
      return;
    }
    scrollbar.on('click', function() {
      Fluid.utils.scrollToElement('#board', -jQuery('#navbar').height());
    });
  },

  registerScrollTopArrowEvent: function() {
    var topArrow = jQuery('#scroll-top-button');
    if (topArrow.length === 0) {
      return;
    }
    var board = jQuery('#board');
    if (board.length === 0) {
      return;
    }
    var posDisplay = false;
    var scrollDisplay = false;
    // Position
    var setTopArrowPos = function() {
      var boardRight = board[0].getClientRects()[0].right;
      var bodyWidth = document.body.offsetWidth;
      var right = bodyWidth - boardRight;
      posDisplay = right >= 50;
      topArrow.css({
        'bottom': posDisplay && scrollDisplay ? '20px' : '-60px',
        'right' : right - 64 + 'px'
      });
    };
    setTopArrowPos();
    jQuery(window).resize(setTopArrowPos);
    // Display
    var headerHeight = board.offset().top;
    Fluid.utils.listenScroll(function() {
      var scrollHeight = document.body.scrollTop + document.documentElement.scrollTop;
      scrollDisplay = scrollHeight >= headerHeight;
      topArrow.css({
        'bottom': posDisplay && scrollDisplay ? '20px' : '-60px'
      });
    });
    // Click
    topArrow.on('click', function() {
      jQuery('body,html').animate({
        scrollTop: 0,
        easing   : 'swing'
      });
    });
  },

  registerImageLoadedEvent: function() {
    if (!('NProgress' in window)) { return; }

    var bg = document.getElementById('banner');
    if (bg) {
      var src = bg.style.backgroundImage;
      var url = src.match(/\((.*?)\)/)[1].replace(/(['"])/g, '');
      var img = new Image();
      img.onload = function() {
        window.NProgress && window.NProgress.status !== null && window.NProgress.inc(0.2);
      };
      img.src = url;
      if (img.complete) { img.onload(); }
    }

    var notLazyImages = jQuery('main img:not([lazyload])');
    var total = notLazyImages.length;
    for (const img of notLazyImages) {
      const old = img.onload;
      img.onload = function() {
        old && old();
        window.NProgress && window.NProgress.status !== null && window.NProgress.inc(0.5 / total);
      };
      if (img.complete) { img.onload(); }
    }
  },

  registerRefreshCallback: function(callback) {
    if (!Array.isArray(Fluid.events._refreshCallbacks)) {
      Fluid.events._refreshCallbacks = [];
    }
    Fluid.events._refreshCallbacks.push(callback);
  },

  refresh: function() {
    if (Array.isArray(Fluid.events._refreshCallbacks)) {
      for (var callback of Fluid.events._refreshCallbacks) {
        if (callback instanceof Function) {
          callback();
        }
      }
    }
  },

  billboard: function() {
    if (!('console' in window)) {
      return;
    }
    // eslint-disable-next-line no-console
    console.log(`
-------------------------------------------------
|                                               |
|      ________  __            _        __      |
|     |_   __  |[  |          (_)      |  ]     |
|       | |_ \\_| | | __   _   __   .--.| |      |
|       |  _|    | |[  | | | [  |/ /'\`\\' |      |
|      _| |_     | | | \\_/ |, | || \\__/  |      |
|     |_____|   [___]'.__.'_/[___]'.__.;__]     |
|                                               |
|            Powered by Hexo x Fluid            |
| https://github.com/fluid-dev/hexo-theme-fluid |
|                                               |
-------------------------------------------------
    `);
  }
};
;
/* global Fluid, CONFIG */

HTMLElement.prototype.wrap = function(wrapper) {
  this.parentNode.insertBefore(wrapper, this);
  this.parentNode.removeChild(this);
  wrapper.appendChild(this);
};

Fluid.plugins = {

  typing: function(text) {
    if (!('Typed' in window)) { return; }

    var typed = new window.Typed('#subtitle', {
      strings: [
        '  ',
        text
      ],
      cursorChar: CONFIG.typing.cursorChar,
      typeSpeed : CONFIG.typing.typeSpeed,
      loop      : CONFIG.typing.loop
    });
    typed.stop();
    var subtitle = document.getElementById('subtitle');
    if (subtitle) {
      subtitle.innerText = '';
    }
    jQuery(document).ready(function() {
      typed.start();
    });
  },

  fancyBox: function(selector) {
    if (!CONFIG.image_zoom.enable || !('fancybox' in jQuery)) { return; }

    jQuery(selector || '.markdown-body :not(a) > img, .markdown-body > img').each(function() {
      var $image = jQuery(this);
      var imageUrl = $image.attr('data-src') || $image.attr('src') || '';
      if (CONFIG.image_zoom.img_url_replace) {
        var rep = CONFIG.image_zoom.img_url_replace;
        var r1 = rep[0] || '';
        var r2 = rep[1] || '';
        if (r1) {
          if (/^re:/.test(r1)) {
            r1 = r1.replace(/^re:/, '');
            var reg = new RegExp(r1, 'gi');
            imageUrl = imageUrl.replace(reg, r2);
          } else {
            imageUrl = imageUrl.replace(r1, r2);
          }
        }
      }
      var $imageWrap = $image.wrap(`
        <a class="fancybox fancybox.image" href="${imageUrl}"
          itemscope itemtype="http://schema.org/ImageObject" itemprop="url"></a>`
      ).parent('a');
      if ($imageWrap.length !== 0) {
        if ($image.is('.group-image-container img')) {
          $imageWrap.attr('data-fancybox', 'group').attr('rel', 'group');
        } else {
          $imageWrap.attr('data-fancybox', 'default').attr('rel', 'default');
        }

        var imageTitle = $image.attr('title') || $image.attr('alt');
        if (imageTitle) {
          $imageWrap.attr('title', imageTitle).attr('data-caption', imageTitle);
        }
      }
    });

    jQuery.fancybox.defaults.hash = false;
    jQuery('.fancybox').fancybox({
      loop   : true,
      helpers: {
        overlay: {
          locked: false
        }
      }
    });
  },

  imageCaption: function(selector) {
    if (!CONFIG.image_caption.enable) { return; }

    jQuery(selector || `.markdown-body > p > img, .markdown-body > figure > img,
      .markdown-body > p > a.fancybox, .markdown-body > figure > a.fancybox`).each(function() {
      var $target = jQuery(this);
      var $figcaption = $target.next('figcaption');
      if ($figcaption.length !== 0) {
        $figcaption.addClass('image-caption');
      } else {
        var imageTitle = $target.attr('title') || $target.attr('alt');
        if (imageTitle) {
          $target.after(`<figcaption aria-hidden="true" class="image-caption">${imageTitle}</figcaption>`);
        }
      }
    });
  },

  codeWidget() {
    var enableLang = CONFIG.code_language.enable && CONFIG.code_language.default;
    var enableCopy = CONFIG.copy_btn && 'ClipboardJS' in window;
    if (!enableLang && !enableCopy) {
      return;
    }

    function getBgClass(ele) {
      return Fluid.utils.getBackgroundLightness(ele) >= 0 ? 'code-widget-light' : 'code-widget-dark';
    }

    var copyTmpl = '';
    copyTmpl += '<div class="code-widget">';
    copyTmpl += 'LANG';
    copyTmpl += '</div>';
    jQuery('.markdown-body pre').each(function() {
      var $pre = jQuery(this);
      if ($pre.find('code.mermaid').length > 0) {
        return;
      }
      if ($pre.find('span.line').length > 0) {
        return;
      }

      var lang = '';

      if (enableLang) {
        lang = CONFIG.code_language.default;
        if ($pre[0].children.length > 0 && $pre[0].children[0].classList.length >= 2 && $pre.children().hasClass('hljs')) {
          lang = $pre[0].children[0].classList[1];
        } else if ($pre[0].getAttribute('data-language')) {
          lang = $pre[0].getAttribute('data-language');
        } else if ($pre.parent().hasClass('sourceCode') && $pre[0].children.length > 0 && $pre[0].children[0].classList.length >= 2) {
          lang = $pre[0].children[0].classList[1];
          $pre.parent().addClass('code-wrapper');
        } else if ($pre.parent().hasClass('markdown-body') && $pre[0].classList.length === 0) {
          $pre.wrap('<div class="code-wrapper"></div>');
        }
        lang = lang.toUpperCase().replace('NONE', CONFIG.code_language.default);
      }
      $pre.append(copyTmpl.replace('LANG', lang).replace('code-widget">',
        getBgClass($pre[0]) + (enableCopy ? ' code-widget copy-btn" data-clipboard-snippet><i class="iconfont icon-copy"></i>' : ' code-widget">')));

      if (enableCopy) {
        var clipboard = new ClipboardJS('.copy-btn', {
          target: function(trigger) {
            var nodes = trigger.parentNode.childNodes;
            for (var i = 0; i < nodes.length; i++) {
              if (nodes[i].tagName === 'CODE') {
                return nodes[i];
              }
            }
          }
        });
        clipboard.on('success', function(e) {
          e.clearSelection();
          e.trigger.innerHTML = e.trigger.innerHTML.replace('icon-copy', 'icon-success');
          setTimeout(function() {
            e.trigger.innerHTML = e.trigger.innerHTML.replace('icon-success', 'icon-copy');
          }, 2000);
        });
      }
    });
  }
};
;
/* global Fluid, CONFIG */

(function(window, document) {
  for (const each of document.querySelectorAll('img[lazyload]')) {
    Fluid.utils.waitElementVisible(each, function() {
      each.removeAttribute('srcset');
      each.removeAttribute('lazyload');
    }, CONFIG.lazyload.offset_factor);
  }
})(window, document);
;
/* global CONFIG */

(function() {
  // Modified from [hexo-generator-search](https://github.com/wzpan/hexo-generator-search)
  function localSearchFunc(path, searchSelector, resultSelector) {
    'use strict';
    // 0x00. environment initialization
    var $input = jQuery(searchSelector);
    var $result = jQuery(resultSelector);

    if ($input.length === 0) {
      // eslint-disable-next-line no-console
      throw Error('No element selected by the searchSelector');
    }
    if ($result.length === 0) {
      // eslint-disable-next-line no-console
      throw Error('No element selected by the resultSelector');
    }

    if ($result.attr('class').indexOf('list-group-item') === -1) {
      $result.html('<div class="m-auto text-center"><div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div><br/>Loading...</div>');
    }

    jQuery.ajax({
      // 0x01. load xml file
      url     : path,
      dataType: 'xml',
      success : function(xmlResponse) {
        // 0x02. parse xml file
        var dataList = jQuery('entry', xmlResponse).map(function() {
          return {
            title  : jQuery('title', this).text(),
            content: jQuery('content', this).text(),
            url    : jQuery('url', this).text()
          };
        }).get();

        if ($result.html().indexOf('list-group-item') === -1) {
          $result.html('');
        }

        $input.on('input', function() {
          // 0x03. parse query to keywords list
          var content = $input.val();
          var resultHTML = '';
          var keywords = content.trim().toLowerCase().split(/[\s-]+/);
          $result.html('');
          if (content.trim().length <= 0) {
            return $input.removeClass('invalid').removeClass('valid');
          }
          // 0x04. perform local searching
          dataList.forEach(function(data) {
            var isMatch = true;
            if (!data.title || data.title.trim() === '') {
              data.title = 'Untitled';
            }
            var orig_data_title = data.title.trim();
            var data_title = orig_data_title.toLowerCase();
            var orig_data_content = data.content.trim().replace(/<[^>]+>/g, '');
            var data_content = orig_data_content.toLowerCase();
            var data_url = data.url;
            var index_title = -1;
            var index_content = -1;
            var first_occur = -1;
            // Skip matching when content is included in search and content is empty
            if (CONFIG.include_content_in_search && data_content === '') {
              isMatch = false;
            } else {
              keywords.forEach(function (keyword, i) {
                index_title = data_title.indexOf(keyword);
                index_content = data_content.indexOf(keyword);

                if (index_title < 0 && index_content < 0) {
                  isMatch = false;
                } else {
                  if (index_content < 0) {
                    index_content = 0;
                  }
                  if (i === 0) {
                    first_occur = index_content;
                  }
                }
              });
            }
            // 0x05. show search results
            if (isMatch) {
              resultHTML += '<a href=\'' + data_url + '\' class=\'list-group-item list-group-item-action font-weight-bolder search-list-title\'>' + orig_data_title + '</a>';
              var content = orig_data_content;
              if (first_occur >= 0) {
                // cut out 100 characters
                var start = first_occur - 20;
                var end = first_occur + 80;

                if (start < 0) {
                  start = 0;
                }

                if (start === 0) {
                  end = 100;
                }

                if (end > content.length) {
                  end = content.length;
                }

                var match_content = content.substring(start, end);

                // highlight all keywords
                keywords.forEach(function(keyword) {
                  var regS = new RegExp(keyword, 'gi');
                  match_content = match_content.replace(regS, '<span class="search-word">' + keyword + '</span>');
                });

                resultHTML += '<p class=\'search-list-content\'>' + match_content + '...</p>';
              }
            }
          });
          if (resultHTML.indexOf('list-group-item') === -1) {
            return $input.addClass('invalid').removeClass('valid');
          }
          $input.addClass('valid').removeClass('invalid');
          $result.html(resultHTML);
        });
      }
    });
  }

  function localSearchReset(searchSelector, resultSelector) {
    'use strict';
    var $input = jQuery(searchSelector);
    var $result = jQuery(resultSelector);

    if ($input.length === 0) {
      // eslint-disable-next-line no-console
      throw Error('No element selected by the searchSelector');
    }
    if ($result.length === 0) {
      // eslint-disable-next-line no-console
      throw Error('No element selected by the resultSelector');
    }

    $input.val('').removeClass('invalid').removeClass('valid');
    $result.html('');
  }

  var modal = jQuery('#modalSearch');
  var searchSelector = '#local-search-input';
  var resultSelector = '#local-search-result';
  modal.on('show.bs.modal', function() {
    var path = CONFIG.search_path || '/local-search.xml';
    localSearchFunc(path, searchSelector, resultSelector);
  });
  modal.on('shown.bs.modal', function() {
    jQuery('#local-search-input').focus();
  });
  modal.on('hidden.bs.modal', function() {
    localSearchReset(searchSelector, resultSelector);
  });
})();
;
/* global Fluid */

Fluid.boot = {};

Fluid.boot.registerEvents = function() {
  Fluid.events.billboard();
  Fluid.events.registerNavbarEvent();
  Fluid.events.registerParallaxEvent();
  Fluid.events.registerScrollDownArrowEvent();
  Fluid.events.registerScrollTopArrowEvent();
  Fluid.events.registerImageLoadedEvent();
};

Fluid.boot.refresh = function() {
  Fluid.plugins.fancyBox();
  Fluid.plugins.codeWidget();
  Fluid.events.refresh();
};

document.addEventListener('DOMContentLoaded', function() {
  Fluid.boot.registerEvents();
});
;
(() => {
  'use strict';

  const cryptoObj = window.crypto || window.msCrypto;
  const storage = window.localStorage;

  const storageName = 'hexo-blog-encrypt:#' + window.location.pathname;
  const keySalt = textToArray('hexo-blog-encrypt的作者们都是大帅比!');
  const ivSalt = textToArray('hexo-blog-encrypt是地表最强Hexo加密插件!');

// As we can't detect the wrong password with AES-CBC,
// so adding an empty div and check it when decrption.
const knownPrefix = "<hbe-prefix></hbe-prefix>";

  const mainElement = document.getElementById('hexo-blog-encrypt');
  const wrongPassMessage = mainElement.dataset['wpm'];
  const wrongHashMessage = mainElement.dataset['whm'];
  const dataElement = mainElement.getElementsByTagName('script')['hbeData'];
  const encryptedData = dataElement.innerText;
  const HmacDigist = dataElement.dataset['hmacdigest'];

  function hexToArray(s) {
    return new Uint8Array(s.match(/[\da-f]{2}/gi).map((h => {
      return parseInt(h, 16);
    })));
  }

  function textToArray(s) {
    var i = s.length;
    var n = 0;
    var ba = new Array()

    for (var j = 0; j < i;) {
      var c = s.codePointAt(j);
      if (c < 128) {
        ba[n++] = c;
        j++;
      } else if ((c > 127) && (c < 2048)) {
        ba[n++] = (c >> 6) | 192;
        ba[n++] = (c & 63) | 128;
        j++;
      } else if ((c > 2047) && (c < 65536)) {
        ba[n++] = (c >> 12) | 224;
        ba[n++] = ((c >> 6) & 63) | 128;
        ba[n++] = (c & 63) | 128;
        j++;
      } else {
        ba[n++] = (c >> 18) | 240;
        ba[n++] = ((c >> 12) & 63) | 128;
        ba[n++] = ((c >> 6) & 63) | 128;
        ba[n++] = (c & 63) | 128;
        j += 2;
      }
    }
    return new Uint8Array(ba);
  }

  function arrayBufferToHex(arrayBuffer) {
    if (typeof arrayBuffer !== 'object' || arrayBuffer === null || typeof arrayBuffer.byteLength !== 'number') {
      throw new TypeError('Expected input to be an ArrayBuffer')
    }

    var view = new Uint8Array(arrayBuffer)
    var result = ''
    var value

    for (var i = 0; i < view.length; i++) {
      value = view[i].toString(16)
      result += (value.length === 1 ? '0' + value : value)
    }

    return result
  }

  async function getExecutableScript(oldElem) {
    let out = document.createElement('script');
    const attList = ['type', 'text', 'src', 'crossorigin', 'defer', 'referrerpolicy'];
    attList.forEach((att) => {
      if (oldElem[att])
        out[att] = oldElem[att];
    })

    return out;
  }

  async function convertHTMLToElement(content) {
    let out = document.createElement('div');
    out.innerHTML = content;
    out.querySelectorAll('script').forEach(async (elem) => {
      elem.replaceWith(await getExecutableScript(elem));
    });

    return out;
  }

  function getKeyMaterial(password) {
    let encoder = new TextEncoder();
    return cryptoObj.subtle.importKey(
      'raw',
      encoder.encode(password),
      {
        'name': 'PBKDF2',
      },
      false,
      [
        'deriveKey',
        'deriveBits',
      ]
    );
  }

  function getHmacKey(keyMaterial) {
    return cryptoObj.subtle.deriveKey({
      'name': 'PBKDF2',
      'hash': 'SHA-256',
      'salt': keySalt.buffer,
      'iterations': 1024
    }, keyMaterial, {
      'name': 'HMAC',
      'hash': 'SHA-256',
      'length': 256,
    }, true, [
      'verify',
    ]);
  }

  function getDecryptKey(keyMaterial) {
    return cryptoObj.subtle.deriveKey({
      'name': 'PBKDF2',
      'hash': 'SHA-256',
      'salt': keySalt.buffer,
      'iterations': 1024,
    }, keyMaterial, {
      'name': 'AES-CBC',
      'length': 256,
    }, true, [
      'decrypt',
    ]);
  }

  function getIv(keyMaterial) {
    return cryptoObj.subtle.deriveBits({
      'name': 'PBKDF2',
      'hash': 'SHA-256',
      'salt': ivSalt.buffer,
      'iterations': 512,
    }, keyMaterial, 16 * 8);
  }

  async function verifyContent(key, content) {
    const encoder = new TextEncoder();
    const encoded = encoder.encode(content);

    let signature = hexToArray(HmacDigist);

    const result = await cryptoObj.subtle.verify({
      'name': 'HMAC',
      'hash': 'SHA-256',
    }, key, signature, encoded);
    console.log(`Verification result: ${result}`);
    if (!result) {
      alert(wrongHashMessage);
      console.log(`${wrongHashMessage}, got `, signature, ` but proved wrong.`);
    }
    return result;
  }

  async function decrypt(decryptKey, iv, hmacKey) {
    let typedArray = hexToArray(encryptedData);

    const result = await cryptoObj.subtle.decrypt({
      'name': 'AES-CBC',
      'iv': iv,
    }, decryptKey, typedArray.buffer).then(async (result) => {
      const decoder = new TextDecoder();
      const decoded = decoder.decode(result);

      // check the prefix, if not then we can sure here is wrong password.
      if (!decoded.startsWith(knownPrefix)) {
        throw "Decode successfully but not start with KnownPrefix.";
      }

      const hideButton = document.createElement('button');
      hideButton.textContent = 'Encrypt again';
      hideButton.type = 'button';
      hideButton.classList.add("hbe-button");
      hideButton.addEventListener('click', () => {
        window.localStorage.removeItem(storageName);
        window.location.reload();
      });

      document.getElementById('hexo-blog-encrypt').style.display = 'inline';
      document.getElementById('hexo-blog-encrypt').innerHTML = '';
      document.getElementById('hexo-blog-encrypt').appendChild(await convertHTMLToElement(decoded));
      document.getElementById('hexo-blog-encrypt').appendChild(hideButton);

      // support html5 lazyload functionality.
      document.querySelectorAll('img').forEach((elem) => {
        if (elem.getAttribute("data-src") && !elem.src) {
          elem.src = elem.getAttribute('data-src');
        }
      });

      // support theme-next refresh
      window.NexT && NexT.boot && typeof NexT.boot.refresh === 'function' && NexT.boot.refresh();

      // TOC part
      var tocDiv = document.getElementById("toc-div");
      if (tocDiv) {
        tocDiv.style.display = 'inline';
      }

      var tocDivs = document.getElementsByClassName('toc-div-class');
      if (tocDivs && tocDivs.length > 0) {
        for (var idx = 0; idx < tocDivs.length; idx++) {
          tocDivs[idx].style.display = 'inline';
        }
      }
      
      // trigger event
      var event = new Event('hexo-blog-decrypt');
      window.dispatchEvent(event);

      return await verifyContent(hmacKey, decoded);
    }).catch((e) => {
      alert(wrongPassMessage);
      console.log(e);
      return false;
    });

    return result;

  }

  function hbeLoader() {

    const oldStorageData = JSON.parse(storage.getItem(storageName));

    if (oldStorageData) {
      console.log(`Password got from localStorage(${storageName}): `, oldStorageData);

      const sIv = hexToArray(oldStorageData.iv).buffer;
      const sDk = oldStorageData.dk;
      const sHmk = oldStorageData.hmk;

      cryptoObj.subtle.importKey('jwk', sDk, {
        'name': 'AES-CBC',
        'length': 256,
      }, true, [
        'decrypt',
      ]).then((dkCK) => {
        cryptoObj.subtle.importKey('jwk', sHmk, {
          'name': 'HMAC',
          'hash': 'SHA-256',
          'length': 256,
        }, true, [
          'verify',
        ]).then((hmkCK) => {
          decrypt(dkCK, sIv, hmkCK).then((result) => {
            if (!result) {
              storage.removeItem(storageName);
            }
          });
        });
      });
    }

    mainElement.addEventListener('keydown', async (event) => {
      if (event.isComposing || event.keyCode === 13) {
        const password = document.getElementById('hbePass').value;
        const keyMaterial = await getKeyMaterial(password);
        const hmacKey = await getHmacKey(keyMaterial);
        const decryptKey = await getDecryptKey(keyMaterial);
        const iv = await getIv(keyMaterial);

        decrypt(decryptKey, iv, hmacKey).then((result) => {
          console.log(`Decrypt result: ${result}`);
          if (result) {
            cryptoObj.subtle.exportKey('jwk', decryptKey).then((dk) => {
              cryptoObj.subtle.exportKey('jwk', hmacKey).then((hmk) => {
                const newStorageData = {
                  'dk': dk,
                  'iv': arrayBufferToHex(iv),
                  'hmk': hmk,
                };
                storage.setItem(storageName, JSON.stringify(newStorageData));
              });
            });
          }
        });
      }
    });
  }

  hbeLoader();

})();
