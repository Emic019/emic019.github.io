if (!window.NexT) window.NexT = {};

(function() {
  const className = 'next-config';

  const staticConfig = {};
  let variableConfig = {};

  const parse = text => JSON.parse(text || '{}');

  const update = name => {
    const targetEle = document.querySelector(`.${className}[data-name="${name}"]`);
    if (!targetEle) return;
    const parsedConfig = parse(targetEle.text);
    if (name === 'main') {
      Object.assign(staticConfig, parsedConfig);
    } else {
      variableConfig[name] = parsedConfig;
    }
  };

  update('main');

  window.CONFIG = new Proxy({}, {
    get(overrideConfig, name) {
      let existing;
      if (name in staticConfig) {
        existing = staticConfig[name];
      } else {
        if (!(name in variableConfig)) update(name);
        existing = variableConfig[name];
      }

      // For unset override and mixable existing
      if (!(name in overrideConfig) && typeof existing === 'object') {
        // Get ready to mix.
        overrideConfig[name] = {};
      }

      if (name in overrideConfig) {
        const override = overrideConfig[name];

        // When mixable
        if (typeof override === 'object' && typeof existing === 'object') {
          // Mix, proxy changes to the override.
          return new Proxy({ ...existing, ...override }, {
            set(target, prop, value) {
              target[prop] = value;
              override[prop] = value;
              return true;
            }
          });
        }

        return override;
      }

      // Only when not mixable and override hasn't been set.
      return existing;
    }
  });

  document.addEventListener('pjax:success', () => {
    variableConfig = {};
  });
})();
;
!function(w,C,S){"use strict";!function o(a,r,s){function l(n,e){if(!r[n]){if(!a[n]){var t="function"==typeof require&&require;if(!e&&t)return t(n,!0);if(i)return i(n,!0);e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}t=r[n]={exports:{}};a[n][0].call(t.exports,function(e){var t=a[n][1][e];return l(t||e)},t,t.exports,o,a,r,s)}return r[n].exports}for(var i="function"==typeof require&&require,e=0;e<s.length;e++)l(s[e]);return l}({1:[function(e,t,n){function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var c,d,a,f,p=e("./modules/handle-dom"),m=e("./modules/utils"),y=e("./modules/handle-swal-dom"),v=e("./modules/handle-click"),h=o(e("./modules/handle-key")),b=o(e("./modules/default-params")),g=o(e("./modules/set-params"));n.default=a=f=function(){var t=arguments[0];function e(e){return(t[e]===S?b.default:t)[e]}if(p.addClass(C.body,"stop-scrolling"),y.resetInput(),t===S)return m.logStr("SweetAlert expects at least 1 attribute!"),!1;var n=m.extend({},b.default);switch(typeof t){case"string":n.title=t,n.text=arguments[1]||"",n.type=arguments[2]||"";break;case"object":if(t.title===S)return m.logStr('Missing "title" argument!'),!1;for(var o in n.title=t.title,b.default)n[o]=e(o);n.confirmButtonText=n.showCancelButton?"Confirm":b.default.confirmButtonText,n.confirmButtonText=e("confirmButtonText"),n.doneFunction=arguments[1]||null;break;default:return m.logStr('Unexpected type of argument! Expected "string" or "object", got '+typeof t),!1}g.default(n),y.fixVerticalPosition(),y.openModal(arguments[1]);for(var a=y.getModal(),r=a.querySelectorAll("button"),s=["onclick","onmouseover","onmouseout","onmousedown","onmouseup","onfocus"],l=function(e){return v.handleButton(e,n,a)},i=0;i<r.length;i++)for(var u=0;u<s.length;u++)r[i][s[u]]=l;y.getOverlay().onclick=l,c=w.onkeydown;w.onkeydown=function(e){return h.default(e,n,a)},w.onfocus=function(){setTimeout(function(){d!==S&&(d.focus(),d=S)},0)},f.enableButtons()},a.setDefaults=f.setDefaults=function(e){if(!e)throw new Error("userParams is required");if("object"!=typeof e)throw new Error("userParams has to be a object");m.extend(b.default,e)},a.close=f.close=function(){var t=y.getModal(),e=(p.fadeOut(y.getOverlay(),5),p.fadeOut(t,5),p.removeClass(t,"showSweetAlert"),p.addClass(t,"hideSweetAlert"),p.removeClass(t,"visible"),t.querySelector(".sa-icon.sa-success")),e=(p.removeClass(e,"animate"),p.removeClass(e.querySelector(".sa-tip"),"animateSuccessTip"),p.removeClass(e.querySelector(".sa-long"),"animateSuccessLong"),t.querySelector(".sa-icon.sa-error")),e=(p.removeClass(e,"animateErrorIcon"),p.removeClass(e.querySelector(".sa-x-mark"),"animateXMark"),t.querySelector(".sa-icon.sa-warning"));return p.removeClass(e,"pulseWarning"),p.removeClass(e.querySelector(".sa-body"),"pulseWarningIns"),p.removeClass(e.querySelector(".sa-dot"),"pulseWarningIns"),setTimeout(function(){var e=t.getAttribute("data-custom-class");p.removeClass(t,e)},300),p.removeClass(C.body,"stop-scrolling"),w.onkeydown=c,w.previousActiveElement&&w.previousActiveElement.focus(),d=S,clearTimeout(t.timeout),!0},a.showInputError=f.showInputError=function(e){var t=y.getModal(),n=t.querySelector(".sa-input-error"),n=(p.addClass(n,"show"),t.querySelector(".sa-error-container"));p.addClass(n,"show"),n.querySelector("p").innerHTML=e,setTimeout(function(){a.enableButtons()},1),t.querySelector("input").focus()},a.resetInputError=f.resetInputError=function(e){if(e&&13===e.keyCode)return!1;var e=y.getModal(),t=e.querySelector(".sa-input-error"),t=(p.removeClass(t,"show"),e.querySelector(".sa-error-container"));p.removeClass(t,"show")},a.disableButtons=f.disableButtons=function(e){var t=y.getModal(),n=t.querySelector("button.confirm"),t=t.querySelector("button.cancel");n.disabled=!0,t.disabled=!0},a.enableButtons=f.enableButtons=function(e){var t=y.getModal(),n=t.querySelector("button.confirm"),t=t.querySelector("button.cancel");n.disabled=!1,t.disabled=!1},void 0!==w?w.sweetAlert=w.swal=a:m.logStr("SweetAlert is a frontend module!"),t.exports=n.default},{"./modules/default-params":2,"./modules/handle-click":3,"./modules/handle-dom":4,"./modules/handle-key":5,"./modules/handle-swal-dom":6,"./modules/set-params":8,"./modules/utils":9}],2:[function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0});n.default={title:"",text:"",type:null,allowOutsideClick:!1,showConfirmButton:!0,showCancelButton:!1,closeOnConfirm:!0,closeOnCancel:!0,confirmButtonText:"OK",confirmButtonColor:"#8CD4F5",cancelButtonText:"Cancel",imageUrl:null,imageSize:null,timer:null,customClass:"",html:!1,animation:!0,allowEscapeKey:!0,inputType:"text",inputPlaceholder:"",inputValue:"",showLoaderOnConfirm:!1},t.exports=n.default},{}],3:[function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0});function m(e,t){var n=!0;h.hasClass(e,"show-input")&&(n=(n=e.querySelector("input").value)||""),t.doneFunction(n),t.closeOnConfirm&&sweetAlert.close(),t.showLoaderOnConfirm&&sweetAlert.disableButtons()}function y(e,t){var n=String(t.doneFunction).replace(/\s/g,"");"function("===n.substring(0,9)&&")"!==n.substring(9,10)&&t.doneFunction(!1),t.closeOnCancel&&sweetAlert.close()}var v=e("./utils"),h=(e("./handle-swal-dom"),e("./handle-dom"));n.default={handleButton:function(e,t,n){var o,a,r,e=e||w.event,s=e.target||e.srcElement,l=-1!==s.className.indexOf("confirm"),i=-1!==s.className.indexOf("sweet-overlay"),u=h.hasClass(n,"visible"),c=t.doneFunction&&"true"===n.getAttribute("data-has-done-function");function d(e){l&&t.confirmButtonColor&&(s.style.backgroundColor=e)}switch(l&&t.confirmButtonColor&&(o=t.confirmButtonColor,a=v.colorLuminance(o,-.04),r=v.colorLuminance(o,-.14)),e.type){case"mouseover":d(a);break;case"mouseout":d(o);break;case"mousedown":d(r);break;case"mouseup":d(a);break;case"focus":var f=n.querySelector("button.confirm"),p=n.querySelector("button.cancel");l?p.style.boxShadow="none":f.style.boxShadow="none";break;case"click":p=n===s,f=h.isDescendant(n,s);if(!p&&!f&&u&&!t.allowOutsideClick)break;l&&c&&u?m(n,t):c&&u||i?y(0,t):h.isDescendant(n,s)&&"BUTTON"===s.tagName&&sweetAlert.close()}},handleConfirm:m,handleCancel:y},t.exports=n.default},{"./handle-dom":4,"./handle-swal-dom":6,"./utils":9}],4:[function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0});function o(e,t){return new RegExp(" "+t+" ").test(" "+e.className+" ")}function a(e){e.style.opacity="",e.style.display="block"}function r(e){e.style.opacity="",e.style.display="none"}n.hasClass=o,n.addClass=function(e,t){o(e,t)||(e.className+=" "+t)},n.removeClass=function(e,t){var n=" "+e.className.replace(/[\t\r\n]/g," ")+" ";if(o(e,t)){for(;0<=n.indexOf(" "+t+" ");)n=n.replace(" "+t+" "," ");e.className=n.replace(/^\s+|\s+$/g,"")}},n.escapeHtml=function(e){var t=C.createElement("div");return t.appendChild(C.createTextNode(e)),t.innerHTML},n._show=a,n.show=function(e){if(e&&!e.length)return a(e);for(var t=0;t<e.length;++t)a(e[t])},n._hide=r,n.hide=function(e){if(e&&!e.length)return r(e);for(var t=0;t<e.length;++t)r(e[t])},n.isDescendant=function(e,t){for(var n=t.parentNode;null!==n;){if(n===e)return!0;n=n.parentNode}return!1},n.getTopMargin=function(e){e.style.left="-9999px",e.style.display="block";var t=e.clientHeight,n="undefined"!=typeof getComputedStyle?parseInt(getComputedStyle(e).getPropertyValue("padding-top"),10):parseInt(e.currentStyle.padding);return e.style.left="",e.style.display="none","-"+parseInt((t+n)/2)+"px"},n.fadeIn=function(e,t){var n,o,a;function r(){return a.apply(this,arguments)}+e.style.opacity<1&&(t=t||16,e.style.opacity=0,e.style.display="block",n=+new Date,a=function(){e.style.opacity=+e.style.opacity+(new Date-n)/100,n=+new Date,+e.style.opacity<1&&setTimeout(o,t)},r.toString=function(){return a.toString()},(o=r)()),e.style.display="block"},n.fadeOut=function(e,t){t=t||16,e.style.opacity=1;var n,o=+new Date,a=(n=function(){e.style.opacity=+e.style.opacity-(new Date-o)/100,o=+new Date,0<+e.style.opacity?setTimeout(a,t):e.style.display="none"},r.toString=function(){return n.toString()},r);function r(){return n.apply(this,arguments)}a()},n.fireClick=function(e){var t;"function"==typeof MouseEvent?(t=new MouseEvent("click",{view:w,bubbles:!1,cancelable:!0}),e.dispatchEvent(t)):C.createEvent?((t=C.createEvent("MouseEvents")).initEvent("click",!1,!1),e.dispatchEvent(t)):C.createEventObject?e.fireEvent("onclick"):"function"==typeof e.onclick&&e.onclick()},n.stopEventPropagation=function(e){"function"==typeof e.stopPropagation?(e.stopPropagation(),e.preventDefault()):w.event&&w.event.hasOwnProperty("cancelBubble")&&(w.event.cancelBubble=!0)}},{}],5:[function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0});var c=e("./handle-dom"),d=e("./handle-swal-dom");n.default=function(e,t,n){var e=e||w.event,o=e.keyCode||e.which,a=n.querySelector("button.confirm"),r=n.querySelector("button.cancel"),s=n.querySelectorAll("button[tabindex]");if(-1!==[9,13,32,27].indexOf(o)){for(var l=e.target||e.srcElement,i=-1,u=0;u<s.length;u++)if(l===s[u]){i=u;break}9===o?(l=-1===i?a:i===s.length-1?s[0]:s[i+1],c.stopEventPropagation(e),l.focus(),t.confirmButtonColor&&d.setFocusStyle(l,t.confirmButtonColor)):13===o?"INPUT"===l.tagName&&(l=a).focus():27===o&&!0===t.allowEscapeKey&&c.fireClick(l=r,e)}},t.exports=n.default},{"./handle-dom":4,"./handle-swal-dom":6}],6:[function(e,t,n){function o(e){return e&&e.__esModule?e:{default:e}}function a(){var e=C.createElement("div");for(e.innerHTML=u.default;e.firstChild;)C.body.appendChild(e.firstChild)}Object.defineProperty(n,"__esModule",{value:!0});var r,s=e("./utils"),l=e("./handle-dom"),i=o(e("./default-params")),u=o(e("./injected-html")),c=(r=function(){var e=C.querySelector(".sweet-alert");return e||(a(),e=c()),e},d.toString=function(){return r.toString()},d);function d(){return r.apply(this,arguments)}function f(){var e=c();if(e)return e.querySelector("input")}function p(){return C.querySelector(".sweet-overlay")}function m(e){if(e&&13===e.keyCode)return!1;var t=(e=c()).querySelector(".sa-input-error"),t=(l.removeClass(t,"show"),e.querySelector(".sa-error-container"));l.removeClass(t,"show")}n.sweetAlertInitialize=a,n.getModal=c,n.getOverlay=p,n.getInput=f,n.setFocusStyle=function(e,t){t=s.hexToRgb(t);e.style.boxShadow="0 0 2px rgba("+t+", 0.8), inset 0 0 0 1px rgba(0, 0, 0, 0.05)"},n.openModal=function(e){var t=c();l.fadeIn(p(),10),l.show(t),l.addClass(t,"showSweetAlert"),l.removeClass(t,"hideSweetAlert"),w.previousActiveElement=C.activeElement;t.querySelector("button.confirm").focus(),setTimeout(function(){l.addClass(t,"visible")},500);var n,o=t.getAttribute("data-timer");"null"!==o&&""!==o&&(n=e,t.timeout=setTimeout(function(){(n?"true"===t.getAttribute("data-has-done-function"):null)?n(null):sweetAlert.close()},o))},n.resetInput=function(){var e=c(),t=f();l.removeClass(e,"show-input"),t.value=i.default.inputValue,t.setAttribute("type",i.default.inputType),t.setAttribute("placeholder",i.default.inputPlaceholder),m()},n.resetInputError=m,n.fixVerticalPosition=function(){c().style.marginTop=l.getTopMargin(c())}},{"./default-params":2,"./handle-dom":4,"./injected-html":7,"./utils":9}],7:[function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0});n.default='<div class="sweet-overlay" tabIndex="-1"></div><div class="sweet-alert"><div class="sa-icon sa-error">\n      <span class="sa-x-mark">\n        <span class="sa-line sa-left"></span>\n        <span class="sa-line sa-right"></span>\n      </span>\n    </div><div class="sa-icon sa-warning">\n      <span class="sa-body"></span>\n      <span class="sa-dot"></span>\n    </div><div class="sa-icon sa-info"></div><div class="sa-icon sa-success">\n      <span class="sa-line sa-tip"></span>\n      <span class="sa-line sa-long"></span>\n\n      <div class="sa-placeholder"></div>\n      <div class="sa-fix"></div>\n    </div><div class="sa-icon sa-custom"></div><h2>Title</h2>\n    <p>Text</p>\n    <fieldset>\n      <input type="text" tabIndex="3" />\n      <div class="sa-input-error"></div>\n    </fieldset><div class="sa-error-container">\n      <div class="icon">!</div>\n      <p>Not valid!</p>\n    </div><div class="sa-button-container">\n      <button class="cancel" tabIndex="2">Cancel</button>\n      <div class="sa-confirm-button-container">\n        <button class="confirm" tabIndex="1">OK</button><div class="la-ball-fall">\n          <div></div>\n          <div></div>\n          <div></div>\n        </div>\n      </div>\n    </div></div>',t.exports=n.default},{}],8:[function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0});var u=e("./utils"),c=e("./handle-swal-dom"),d=e("./handle-dom"),f=["error","warning","info","success","input","prompt"];n.default=function(a){var e,t,r=c.getModal(),n=r.querySelector("h2"),o=r.querySelector("p"),s=r.querySelector("button.cancel"),l=r.querySelector("button.confirm");if(n.innerHTML=a.html?a.title:d.escapeHtml(a.title).split("\n").join("<br>"),o.innerHTML=a.html?a.text:d.escapeHtml(a.text||"").split("\n").join("<br>"),a.text&&d.show(o),a.customClass?(d.addClass(r,a.customClass),r.setAttribute("data-custom-class",a.customClass)):(n=r.getAttribute("data-custom-class"),d.removeClass(r,n),r.setAttribute("data-custom-class","")),d.hide(r.querySelectorAll(".sa-icon")),a.type&&!u.isIE8()){var o=function(){for(var e=!1,t=0;t<f.length;t++)if(a.type===f[t]){e=!0;break}if(!e)return logStr("Unknown alert type: "+a.type),{v:!1};var n=S,o=(-1!==["success","error","warning","info"].indexOf(a.type)&&(n=r.querySelector(".sa-icon.sa-"+a.type),d.show(n)),c.getInput());switch(a.type){case"success":d.addClass(n,"animate"),d.addClass(n.querySelector(".sa-tip"),"animateSuccessTip"),d.addClass(n.querySelector(".sa-long"),"animateSuccessLong");break;case"error":d.addClass(n,"animateErrorIcon"),d.addClass(n.querySelector(".sa-x-mark"),"animateXMark");break;case"warning":d.addClass(n,"pulseWarning"),d.addClass(n.querySelector(".sa-body"),"pulseWarningIns"),d.addClass(n.querySelector(".sa-dot"),"pulseWarningIns");break;case"input":case"prompt":o.setAttribute("type",a.inputType),o.value=a.inputValue,o.setAttribute("placeholder",a.inputPlaceholder),d.addClass(r,"show-input"),setTimeout(function(){o.focus(),o.addEventListener("keyup",swal.resetInputError)},400)}}();if("object"==typeof o)return o.v}a.imageUrl&&((n=r.querySelector(".sa-icon.sa-custom")).style.backgroundImage="url("+a.imageUrl+")",d.show(n),e=o=80,a.imageSize&&(i=(t=a.imageSize.toString().split("x"))[0],t=t[1],i&&t?(o=i,e=t):logStr("Parameter imageSize expects value with format WIDTHxHEIGHT, got "+a.imageSize)),n.setAttribute("style",n.getAttribute("style")+"width:"+o+"px; height:"+e+"px")),r.setAttribute("data-has-cancel-button",a.showCancelButton),a.showCancelButton?s.style.display="inline-block":d.hide(s),r.setAttribute("data-has-confirm-button",a.showConfirmButton),a.showConfirmButton?l.style.display="inline-block":d.hide(l),a.cancelButtonText&&(s.innerHTML=d.escapeHtml(a.cancelButtonText)),a.confirmButtonText&&(l.innerHTML=d.escapeHtml(a.confirmButtonText)),a.confirmButtonColor&&(l.style.backgroundColor=a.confirmButtonColor,l.style.borderLeftColor=a.confirmLoadingButtonColor,l.style.borderRightColor=a.confirmLoadingButtonColor,c.setFocusStyle(l,a.confirmButtonColor)),r.setAttribute("data-allow-outside-click",a.allowOutsideClick);var i=!!a.doneFunction;r.setAttribute("data-has-done-function",i),a.animation?"string"==typeof a.animation?r.setAttribute("data-animation",a.animation):r.setAttribute("data-animation","pop"):r.setAttribute("data-animation","none"),r.setAttribute("data-timer",a.timer)},t.exports=n.default},{"./handle-dom":4,"./handle-swal-dom":6,"./utils":9}],9:[function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0});n.extend=function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e},n.hexToRgb=function(e){e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return e?parseInt(e[1],16)+", "+parseInt(e[2],16)+", "+parseInt(e[3],16):null},n.isIE8=function(){return w.attachEvent&&!w.addEventListener},n.logStr=function(e){w.console&&w.console.log("SweetAlert: "+e)},n.colorLuminance=function(e,t){(e=String(e).replace(/[^0-9a-f]/gi,"")).length<6&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),t=t||0;for(var n,o="#",a=0;a<3;a++)n=parseInt(e.substr(2*a,2),16),o+=("00"+(n=Math.round(Math.min(Math.max(0,n+n*t),255)).toString(16))).substr(n.length);return o}},{}]},{},[1]),"function"==typeof define&&define.amd?define(function(){return sweetAlert}):"undefined"!=typeof module&&module.exports&&(module.exports=sweetAlert)}(window,document);;
/* global CONFIG */

window.addEventListener('tabs:register', () => {
  let { activeClass } = CONFIG.comments;
  if (CONFIG.comments.storage) {
    activeClass = localStorage.getItem('comments_active') || activeClass;
  }
  if (activeClass) {
    const activeTab = document.querySelector(`a[href="#comment-${activeClass}"]`);
    if (activeTab) {
      activeTab.click();
    }
  }
});
if (CONFIG.comments.storage) {
  window.addEventListener('tabs:click', event => {
    if (!event.target.matches('.tabs-comment .tab-content .tab-pane')) return;
    const commentClass = event.target.classList[1];
    localStorage.setItem('comments_active', commentClass);
  });
}
;
/* global NexT, CONFIG */

NexT.motion = {};

NexT.motion.integrator = {
  queue: [],
  init() {
    this.queue = [];
    return this;
  },
  add(fn) {
    const sequence = fn();
    this.queue.push(sequence);
    return this;
  },
  bootstrap() {
    if (!CONFIG.motion.async) this.queue = [this.queue.flat()];
    this.queue.forEach(sequence => {
      const timeline = window.anime.timeline({
        duration: 200,
        easing  : 'linear'
      });
      sequence.forEach(item => {
        if (item.deltaT) timeline.add(item, item.deltaT);
        else timeline.add(item);
      });
    });
  }
};

NexT.motion.middleWares = {
  header() {
    const sequence = [];

    function getMistLineSettings(targets) {
      sequence.push({
        targets,
        scaleX  : [0, 1],
        duration: 500,
        deltaT  : '-=200'
      });
    }

    function pushToSequence(targets, sequenceQueue = false) {
      sequence.push({
        targets,
        opacity: 1,
        top    : 0,
        deltaT : sequenceQueue ? '-=200' : '-=0'
      });
    }

    pushToSequence('.column');
    CONFIG.scheme === 'Mist' && getMistLineSettings('.logo-line');
    CONFIG.scheme === 'Muse' && pushToSequence('.custom-logo-image');
    pushToSequence('.site-title');
    pushToSequence('.site-brand-container .toggle', true);
    pushToSequence('.site-subtitle');
    (CONFIG.scheme === 'Pisces' || CONFIG.scheme === 'Gemini') && pushToSequence('.custom-logo-image');

    const menuItemTransition = CONFIG.motion.transition.menu_item;
    if (menuItemTransition) {
      document.querySelectorAll('.menu-item').forEach(targets => {
        sequence.push({
          targets,
          complete: () => targets.classList.add('animated', menuItemTransition),
          deltaT  : '-=200'
        });
      });
    }

    return sequence;
  },

  subMenu() {
    const subMenuItem = document.querySelectorAll('.sub-menu .menu-item');
    if (subMenuItem.length > 0) {
      subMenuItem.forEach(element => {
        element.classList.add('animated');
      });
    }
    return [];
  },

  postList() {
    const sequence = [];
    const { post_block, post_header, post_body, coll_header } = CONFIG.motion.transition;

    function animate(animation, elements) {
      if (!animation) return;
      elements.forEach(targets => {
        sequence.push({
          targets,
          complete: () => targets.classList.add('animated', animation),
          deltaT  : '-=100'
        });
      });
    }

    document.querySelectorAll('.post-block').forEach(targets => {
      sequence.push({
        targets,
        complete: () => targets.classList.add('animated', post_block),
        deltaT  : '-=100'
      });
      animate(coll_header, targets.querySelectorAll('.collection-header'));
      animate(post_header, targets.querySelectorAll('.post-header'));
      animate(post_body, targets.querySelectorAll('.post-body'));
    });

    animate(post_block, document.querySelectorAll('.pagination, .comments'));

    return sequence;
  },

  sidebar() {
    const sequence = [];
    const sidebar = document.querySelectorAll('.sidebar-inner');
    const sidebarTransition = CONFIG.motion.transition.sidebar;
    // Only for desktop of Pisces | Gemini.
    if (sidebarTransition && (CONFIG.scheme === 'Pisces' || CONFIG.scheme === 'Gemini') && window.innerWidth >= 992) {
      sidebar.forEach(targets => {
        sequence.push({
          targets,
          complete: () => targets.classList.add('animated', sidebarTransition),
          deltaT  : '-=100'
        });
      });
    }
    return sequence;
  },

  footer() {
    return [{
      targets: document.querySelector('.footer'),
      opacity: 1
    }];
  }
};
;
/* global CONFIG */

document.addEventListener('DOMContentLoaded', () => {

  const isRight = CONFIG.sidebar.position === 'right';

  const sidebarToggleMotion = {
    mouse: {},
    init() {
      window.addEventListener('mousedown', this.mousedownHandler.bind(this));
      window.addEventListener('mouseup', this.mouseupHandler.bind(this));
      document.querySelector('.sidebar-dimmer').addEventListener('click', this.clickHandler.bind(this));
      document.querySelector('.sidebar-toggle').addEventListener('click', this.clickHandler.bind(this));
      window.addEventListener('sidebar:show', this.showSidebar);
      window.addEventListener('sidebar:hide', this.hideSidebar);
    },
    mousedownHandler(event) {
      this.mouse.X = event.pageX;
      this.mouse.Y = event.pageY;
    },
    mouseupHandler(event) {
      const deltaX = event.pageX - this.mouse.X;
      const deltaY = event.pageY - this.mouse.Y;
      const clickingBlankPart = Math.hypot(deltaX, deltaY) < 20 && event.target.matches('.main');
      // Fancybox has z-index property, but medium-zoom does not, so the sidebar will overlay the zoomed image.
      if (clickingBlankPart || event.target.matches('img.medium-zoom-image')) {
        this.hideSidebar();
      }
    },
    clickHandler() {
      document.body.classList.contains('sidebar-active') ? this.hideSidebar() : this.showSidebar();
    },
    showSidebar() {
      document.body.classList.add('sidebar-active');
      const animateAction = isRight ? 'fadeInRight' : 'fadeInLeft';
      document.querySelectorAll('.sidebar .animated').forEach((element, index) => {
        element.style.animationDelay = (100 * index) + 'ms';
        element.classList.remove(animateAction);
        setTimeout(() => {
          // Trigger a DOM reflow
          element.classList.add(animateAction);
        });
      });
    },
    hideSidebar() {
      document.body.classList.remove('sidebar-active');
    }
  };
  sidebarToggleMotion.init();
});
;
/* global NexT, CONFIG */

NexT.boot = {};

NexT.boot.registerEvents = function() {

  NexT.utils.registerScrollPercent();
  NexT.utils.registerCanIUseTag();
  NexT.utils.updateFooterPosition();

  // Mobile top menu bar.
  document.querySelector('.site-nav-toggle .toggle').addEventListener('click', event => {
    event.currentTarget.classList.toggle('toggle-close');
    const siteNav = document.querySelector('.site-nav');
    if (!siteNav) return;
    siteNav.style.setProperty('--scroll-height', siteNav.scrollHeight + 'px');
    document.body.classList.toggle('site-nav-on');
  });

  document.querySelectorAll('.sidebar-nav li').forEach((element, index) => {
    element.addEventListener('click', () => {
      NexT.utils.activateSidebarPanel(index);
    });
  });

  window.addEventListener('hashchange', () => {
    const tHash = location.hash;
    if (tHash !== '' && !tHash.match(/%\S{2}/)) {
      const target = document.querySelector(`.tabs ul.nav-tabs li a[href="${tHash}"]`);
      target && target.click();
    }
  });

  window.addEventListener('tabs:click', e => {
    NexT.utils.registerCodeblock(e.target);
  });
};

NexT.boot.refresh = function() {

  /**
   * Register JS handlers by condition option.
   * Need to add config option in Front-End at 'scripts/helpers/next-config.js' file.
   */
  CONFIG.prism && window.Prism.highlightAll();
  CONFIG.mediumzoom && window.mediumZoom('.post-body :not(a) > img, .post-body > img', {
    background: 'var(--content-bg-color)'
  });
  CONFIG.lazyload && window.lozad('.post-body img').observe();
  CONFIG.pangu && window.pangu.spacingPage();

  CONFIG.exturl && NexT.utils.registerExtURL();
  NexT.utils.wrapTableWithBox();
  NexT.utils.registerCodeblock();
  NexT.utils.registerTabsTag();
  NexT.utils.registerActiveMenuItem();
  NexT.utils.registerLangSelect();
  NexT.utils.registerSidebarTOC();
  NexT.utils.registerPostReward();
  NexT.utils.registerVideoIframe();
};

NexT.boot.motion = function() {
  // Define Motion Sequence & Bootstrap Motion.
  if (CONFIG.motion.enable) {
    NexT.motion.integrator
      .add(NexT.motion.middleWares.header)
      .add(NexT.motion.middleWares.sidebar)
      .add(NexT.motion.middleWares.postList)
      .add(NexT.motion.middleWares.footer)
      .bootstrap();
  }
  NexT.utils.updateSidebarPosition();
};

document.addEventListener('DOMContentLoaded', () => {
  NexT.boot.registerEvents();
  NexT.boot.refresh();
  NexT.boot.motion();
});
;
/* global CONFIG, pjax, LocalSearch */

document.addEventListener('DOMContentLoaded', () => {
  if (!CONFIG.path) {
    // Search DB path
    console.warn('`hexo-generator-searchdb` plugin is not installed!');
    return;
  }
  const localSearch = new LocalSearch({
    path             : CONFIG.path,
    top_n_per_article: CONFIG.localsearch.top_n_per_article,
    unescape         : CONFIG.localsearch.unescape
  });

  const input = document.querySelector('.search-input');
  const container = document.querySelector('.search-result-container');

  const inputEventFunction = () => {
    if (!localSearch.isfetched) return;
    const searchText = input.value.trim().toLowerCase();
    const keywords = searchText.split(/[-\s]+/);
    let resultItems = [];
    if (searchText.length > 0) {
      // Perform local searching
      resultItems = localSearch.getResultItems(keywords);
    }
    if (keywords.length === 1 && keywords[0] === '') {
      container.innerHTML = '<div class="search-result-icon"><i class="fa fa-search fa-5x"></i></div>';
    } else if (resultItems.length === 0) {
      container.innerHTML = '<div class="search-result-icon"><i class="far fa-frown fa-5x"></i></div>';
    } else {
      resultItems.sort((left, right) => {
        if (left.includedCount !== right.includedCount) {
          return right.includedCount - left.includedCount;
        } else if (left.hitCount !== right.hitCount) {
          return right.hitCount - left.hitCount;
        }
        return right.id - left.id;
      });
      const stats = CONFIG.i18n.hits.replace('${hits}', resultItems.length);

      container.innerHTML = `<div class="search-stats">${stats}</div>
        <hr>
        <ul class="search-result-list">${resultItems.map(result => result.item).join('')}</ul>`;
      if (typeof pjax === 'object') pjax.refresh(container);
    }
  };

  localSearch.highlightSearchWords(document.querySelector('.post-body'));
  if (CONFIG.localsearch.preload) {
    localSearch.fetchData();
  }

  input.addEventListener('input', inputEventFunction);
  window.addEventListener('search:loaded', inputEventFunction);

  // Handle and trigger popup window
  document.querySelectorAll('.popup-trigger').forEach(element => {
    element.addEventListener('click', () => {
      document.body.classList.add('search-active');
      // Wait for search-popup animation to complete
      setTimeout(() => input.focus(), 500);
      if (!localSearch.isfetched) localSearch.fetchData();
    });
  });

  // Monitor main search box
  const onPopupClose = () => {
    document.body.classList.remove('search-active');
  };

  document.querySelector('.search-pop-overlay').addEventListener('click', event => {
    if (event.target === document.querySelector('.search-pop-overlay')) {
      onPopupClose();
    }
  });
  document.querySelector('.popup-btn-close').addEventListener('click', onPopupClose);
  document.addEventListener('pjax:success', () => {
    localSearch.highlightSearchWords(document.querySelector('.post-body'));
    onPopupClose();
  });
  window.addEventListener('keyup', event => {
    if (event.key === 'Escape') {
      onPopupClose();
    }
  });
});
;
/* global NexT, CONFIG */

document.addEventListener('page:loaded', () => {
  if (!CONFIG.page.comments) return;

  NexT.utils.loadComments('.utterances-container')
    .then(() => NexT.utils.getScript('https://utteranc.es/client.js', {
      attributes: {
        async       : true,
        crossOrigin : 'anonymous',
        'repo'      : CONFIG.utterances.repo,
        'issue-term': CONFIG.utterances.issue_term,
        'theme'     : CONFIG.utterances.theme
      },
      parentNode: document.querySelector('.utterances-container')
    }));
});
;
$(document).ready(function() {
	
	categoryUnfold();
	
	function categoryUnfold() {
		$(".category-list-link").filter(function() {
			if($(this).siblings(".category-list-child").length > 0)
				//$(this).parent().css("list-style", "circle");
				$(this).parent().css("list-style-image","url('/assets/img/category-unfold-16x16.png')");
				//console.log($(this).text());
		});
		
		//点击含有子标签category-list-child的category-list-link标签时，不进行跳转
		$(".category-list-link").filter(function() {
			return $(this).siblings(".category-list-child").length > 0
		}).attr("href", "javascript:void(0)");
		
		//含有子标签category-list-child的category-list-link标签将自动隐藏子标签
		$(".category-list-link").filter(function() {
			if($(this).siblings(".category-list-child").length > 0)
				$(this).siblings(".category-list-child").hide();
		});	
		
		//点击含有子标签category-list-child的category-list-link标签时，将隐藏子标签展开
		$(".category-list-link").click(function() {
			$(this).siblings(".category-list-child").slideToggle();
		});
	}
});;
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
