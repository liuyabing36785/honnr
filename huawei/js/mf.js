"use strict";var _createClass=function(){function s(o,e){for(var t=0;t<e.length;t++){var s=e[t];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(o,s.key,s)}}return function(o,e,t){return e&&s(o.prototype,e),t&&s(o,t),o}}();function _classCallCheck(o,e){if(!(o instanceof e))throw new TypeError("Cannot call a class as a function")}var MF=function(){function s(o,e,t){_classCallCheck(this,s),this.smallBox=o,this.bigBox=e,this.mask=t}return _createClass(s,[{key:"onmouseover",value:function(){var o=this;this.smallBox.onmouseover=function(){o.bigBox.style.display="block",o.mask.style.display="block"}}},{key:"onmouseout",value:function(){var o=this;this.smallBox.onmouseout=function(){o.bigBox.style.display="none",o.mask.style.display="none"}}},{key:"onmousemove",value:function(){var f=this;this.smallBox.onmousemove=function(o){var e=o||event,t=e.pageX-f.smallBox.offsetLeft-f.mask.offsetWidth/2,s=e.pageY-this.offsetTop-f.mask.offsetHeight/2;t<0&&(t=0);var n=f.smallBox.offsetWidth-f.mask.offsetWidth;n<t&&(t=n),s<0&&(s=0);var a=f.smallBox.offsetHeight-f.mask.offsetHeight;a<s&&(s=a);var i=f.bigBox.offsetWidth*t/f.mask.offsetWidth,l=f.bigBox.offsetHeight*s/f.mask.offsetHeight;f.mask.style.left=t+"px",f.mask.style.top=s+"px",f.bigBox.style.backgroundPositionX=-i+"px",f.bigBox.style.backgroundPositionY=-l+"px"}}},{key:"eventBind",value:function(){this.onmouseover(),this.onmouseout(),this.onmousemove()}}]),s}();