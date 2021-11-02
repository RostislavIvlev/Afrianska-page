(()=>{var e,t={215:()=>{function e(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}new(function(){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);this.config=Object.assign({linkAttribute:"data-modal"},e),this.modalElem=document.getElementById("modal"),this.init()}var i,s,a;return i=t,(s=[{key:"init",value:function(){this.scrollPosition,this.events()}},{key:"events",value:function(){document.addEventListener("click",function(e){if(e.target.closest("["+this.config.linkAttribute+"]"))return e.preventDefault(),void this.openModal();(e.target.classList.contains("modal__close")||e.target.classList.contains("modal-wrapper"))&&this.closeModal()}.bind(this))}},{key:"openModal",value:function(){this.scrollPosition=window.pageYOffset,document.body.style.position="fixed",document.body.style.top=-this.scrollPosition+"px",document.body.classList.add("modal-opened"),this.modalElem.classList.add("modal-wrapper_visible")}},{key:"closeModal",value:function(){document.body.style.position="",this.modalElem.classList.remove("modal-wrapper_visible"),window.scrollTo(0,this.scrollPosition)}}])&&e(i.prototype,s),a&&e(i,a),t}())},640:()=>{function e(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}new(function(){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.submitBtn=document.getElementById("submit"),this.form=document.getElementById("form"),this.nameData,this.emailData,this.messageData,this.isEmpty,this.isValid,this.init()}var i,s,a;return i=t,(s=[{key:"init",value:function(){this.events()}},{key:"events",value:function(){this.submitBtn.addEventListener("click",function(e){e.preventDefault(),this.checkData(),!0===this.isValid&&this.sendData()}.bind(this))}},{key:"checkData",value:function(){this.nameData=document.getElementById("name").value,this.emailData=document.getElementById("email").value,this.messageData=document.getElementById("message").value,""!==this.nameData&&document.querySelector("#errorName").classList.add("modal-form__error_hidden"),""!==this.emailData&&document.querySelector("#errorEmail").classList.add("modal-form__error_hidden"),""!==this.messageData.trim()&&document.querySelector("#errorMessage").classList.add("modal-form__error_hidden"),""!==this.nameData&&""!==this.emailData&&""!==this.messageData.trim()?this.isValid=!0:this.isValid=!1}},{key:"sendData",value:function(){this.form.action="/some-url",document.querySelector(".modal__form-sent").classList.add("modal__form-sent_visible"),setTimeout((function(){document.querySelector(".modal__form-sent").classList.remove("modal__form-sent_visible")}),2e3)}}])&&e(i.prototype,s),a&&e(i,a),t}())},618:(e,t,i)=>{"use strict";var s=i(370),a=i.n(s),r=new URL(i(716),i.b),o=new URL(i(627),i.b),n=new URL(i(328),i.b),l=new URL(i(4),i.b);a()(r),a()(o),a()(n),a()(l);var c=i(378),u=i(542),m=i(115),d=i(345),p=i(987);function f(e){return c.createElement(c.Fragment,null,c.createElement("img",{className:"card__img ".concat(e.img_class),src:e.img}),c.createElement("h3",{className:"card__title"}," ",e.title," "),c.createElement("p",{className:"card__subtitle"}," ",e.subtitle," "),c.createElement("a",{href:"#",className:"card__link"},c.createElement("span",null," Learn more "),c.createElement("img",{src:i(804),className:"card__icon"})))}var g=c.createElement(f,{img_class:"",img:m,title:"Make Your business To Be Better Famous In Internet",subtitle:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "}),h=c.createElement(f,{img:d,img_class:"card__img_2",title:"Bring Technology To Your Comfrotable Home",subtitle:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "}),v=c.createElement(f,{img_class:"",img:p,title:"Build Your Digital Product That Suitable For Your Need",subtitle:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "});u.render(g,document.getElementById("card1")),u.render(h,document.getElementById("card2")),u.render(v,document.getElementById("card3"));i(215),i(640)},804:(e,t,i)=>{"use strict";e.exports=i.p+"assets/arrow-right-icon.svg"},328:(e,t,i)=>{"use strict";e.exports=i.p+"assets/bg-frontpage.png"},627:(e,t,i)=>{"use strict";e.exports=i.p+"assets/burger-menu.svg"},115:(e,t,i)=>{"use strict";e.exports=i.p+"assets/card1.png"},345:(e,t,i)=>{"use strict";e.exports=i.p+"assets/card2.png"},987:(e,t,i)=>{"use strict";e.exports=i.p+"assets/card3.png"},4:(e,t,i)=>{"use strict";e.exports=i.p+"assets/logo-footer.svg"},716:(e,t,i)=>{"use strict";e.exports=i.p+"assets/logo.svg"}},i={};function s(e){var a=i[e];if(void 0!==a)return a.exports;var r=i[e]={exports:{}};return t[e](r,r.exports,s),r.exports}s.m=t,e=[],s.O=(t,i,a,r)=>{if(!i){var o=1/0;for(u=0;u<e.length;u++){for(var[i,a,r]=e[u],n=!0,l=0;l<i.length;l++)(!1&r||o>=r)&&Object.keys(s.O).every((e=>s.O[e](i[l])))?i.splice(l--,1):(n=!1,r<o&&(o=r));if(n){e.splice(u--,1);var c=a();void 0!==c&&(t=c)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[i,a,r]},s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var i in t)s.o(t,i)&&!s.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;s.g.importScripts&&(e=s.g.location+"");var t=s.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var i=t.getElementsByTagName("script");i.length&&(e=i[i.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),s.p=e+"../"})(),(()=>{s.b=document.baseURI||self.location.href;var e={179:0};s.O.j=t=>0===e[t];var t=(t,i)=>{var a,r,[o,n,l]=i,c=0;if(o.some((t=>0!==e[t]))){for(a in n)s.o(n,a)&&(s.m[a]=n[a]);if(l)var u=l(s)}for(t&&t(i);c<o.length;c++)r=o[c],s.o(e,r)&&e[r]&&e[r][0](),e[o[c]]=0;return s.O(u)},i=self.webpackChunk=self.webpackChunk||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))})();var a=s.O(void 0,[771],(()=>s(618)));a=s.O(a)})();