(this.webpackJsonpastorun=this.webpackJsonpastorun||[]).push([[1],{105:function(t,e,n){"use strict";var c=n(23),a=n(2),r=n(0),i=n(24),o=n(35),s=n(217),u=n(218),l=n(190),d=(n(155),n(73)),p=(n(156),function(t){var e=t.value,n=t.onChange;return Object(a.jsxs)("div",{className:"app-quantity-control",children:[Object(a.jsx)("button",{type:"button",className:"btn-default app-quantity-control__btn",onClick:function(){return n(e-1)},children:"\u276e"}),Object(a.jsx)("span",{className:"app-quantity-control__value",children:e}),Object(a.jsx)("button",{type:"button",className:"btn-default app-quantity-control__btn",onClick:function(){return n(e+1)},children:"\u276f"})]})}),b=function(t){var e=t.item,n=t.onQuantityChange,c=t.onRemove,r=e.imageUrl,i=e.name,o=e.price,b=e.quantity,j=e.selectedSize,f=Object(l.a)().t;return Object(a.jsxs)(s.a,{classes:{root:"app-cart-item"},children:[Object(a.jsx)(u.a,{classes:{root:"app-cart-item__image"},image:r,title:i}),Object(a.jsxs)("div",{className:"app-cart-item__details",children:[Object(a.jsx)("h4",{className:"app-cart-item__title",children:i}),Object(a.jsxs)("div",{className:"app-cart-item__details-row",children:[Object(a.jsxs)("div",{className:"app-cart-item__details-label",children:[f("label.size"),":"]}),Object(a.jsx)("div",{className:"app-cart-item__details-value",children:j.name})]}),Object(a.jsxs)("div",{className:"app-cart-item__details-row",children:[Object(a.jsxs)("div",{className:"app-cart-item__details-label",children:[f("label.price"),":"]}),Object(a.jsx)("div",{className:"app-cart-item__details-value",children:o})]}),Object(a.jsxs)("div",{className:"app-cart-item__details-row",children:[Object(a.jsxs)("div",{className:"app-cart-item__details-label",children:[f("label.quantity"),":"]}),Object(a.jsx)("div",{className:"app-cart-item__details-value",children:Object(a.jsx)(p,{value:b,onChange:n})})]})]}),Object(a.jsx)("div",{className:"app-cart-item__remove",children:Object(a.jsx)(d.a,{onClick:c})})]})};e.a=function(t){var e=t.cartItems,n=Object(i.b)(),s=Object(r.useCallback)((function(t){return function(e){n(Object(o.b)({id:t,quantity:e}))}}),[n]),u=Object(r.useCallback)((function(t){return function(){return n(Object(o.g)(t))}}),[n]);return Object(a.jsx)("div",{className:"app-cart-items",children:e.map((function(t){var e=Object(c.a)(t,2),n=e[0],r=e[1];return Object(a.jsx)(b,{item:r,onQuantityChange:s(n),onRemove:u(n)},n)}))})}},106:function(t,e,n){"use strict";var c=n(2),a=n(0),r=n(23),i=n(190),o=function(){var t=Object(i.a)().i18n,e=t.options,n=t.language,c=e.resources||{},o=Object.keys(c),s=Object(a.useState)(n),u=Object(r.a)(s,2),l=u[0],d=u[1];return{languages:o,activeLanguage:l,setLanguage:function(e){l!==e&&(d(e),t.changeLanguage(e))}}};e.a=function(){var t=o(),e=t.languages,n=t.activeLanguage,a=t.setLanguage;return Object(c.jsx)("div",{className:"app-locales",children:e.map((function(t){return Object(c.jsx)("button",{className:"\n            btn-default\n            app-locale-btn\n            ".concat(n===t&&"is-active","\n          "),onClick:function(){return a(t)},type:"button",children:t.toUpperCase()},t)}))})}},108:function(t){t.exports=JSON.parse('{"links":{"shop":"Shop","news":"News","collection":"Collection","contacts":"Contacts","faq":"FAQ","rules":"Rules","partner":"Partnership","offer":"Offer"},"page":{"shop":{"title":"Our collections"},"products":{"title":"Our products","no_products":"Sorry, we have no products in this collection"},"cart":{"title":"The goods in your cart","placeholder":"There are no goods in your cart yet"},"checkout":{"title":"Checkout","total":"Total"}},"collections":{"hats":"Hats","mens":"Men\'s"},"actions":{"shop_now":"Shop now","add_to_cart":"ADd to cart","go_to_checkout":"Go to checkout","go_shop":"Go shop","send_my_order":"Send my order"},"label":{"size":"Size","price":"Price","quantity":"Quantity","first_name":"First name","last_name":"Last name","phone":"Phone","email":"Email","address":"Address","city":"City"},"form":{"checkout":{"title":"Leave your contacts for us"}},"error":{"is_required":"The field is required","invalid_email":"Invalid email"}}')},109:function(t){t.exports=JSON.parse('{"links":{"shop":"\u041c\u0430\u0433\u0430\u0437\u0438\u043d","news":"\u041d\u043e\u0432\u043e\u0441\u0442\u0438","collection":"\u041a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u0438","contacts":"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b","faq":"FAQ","rules":"\u041f\u0440\u0430\u0432\u0438\u043b\u0430","partner":"\u041f\u0430\u0440\u0442\u043d\u0435\u0440\u0441\u0442\u0432\u043e","offer":"\u041e\u0444\u0435\u0440\u0442\u0430"},"page":{"shop":{"title":"\u041d\u0430\u0448\u0438 \u043a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u0438"},"products":{"title":"\u041d\u0430\u0448\u0438 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u044b","no_products":"\u0418\u0437\u0432\u0438\u043d\u0438\u0442\u0435, \u0432 \u044d\u0442\u043e\u0439 \u043a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u0438 \u043d\u0435\u0442 \u0442\u043e\u0432\u0430\u0440\u043e\u0432"},"cart":{"title":"\u0422\u043e\u0432\u0430\u0440\u044b \u0432 \u0432\u0430\u0448\u0435\u0439 \u043a\u043e\u0440\u0437\u0438\u043d\u0435","placeholder":"\u0423 \u0432\u0430\u0441 \u043d\u0435\u0442 \u0442\u043e\u0432\u0430\u0440\u043e\u0432 \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0435"},"checkout":{"title":"\u041e\u043f\u043b\u0430\u0442\u0430","total":"\u0412\u0441\u0435\u0433\u043e"}},"collections":{"hats":"\u041a\u0435\u043f\u043a\u0438","mens":"\u041c\u0443\u0436\u0441\u043a\u043e\u0435"},"actions":{"shop_now":"\u0421\u043c\u043e\u0442\u0440\u0435\u0442\u044c","add_to_cart":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443","go_to_checkout":"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043a \u043e\u043f\u043b\u0430\u0442\u0435","go_shop":"\u0412 \u043c\u0430\u0433\u0430\u0437\u0438\u043d","send_my_order":"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u043c\u043e\u0439 \u0437\u0430\u043a\u0430\u0437c"},"label":{"size":"\u0420\u0430\u0437\u043c\u0435\u0440","price":"\u0426\u0435\u043d\u0430","quantity":"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e","first_name":"\u0418\u043c\u044f","last_name":"\u0424\u0430\u043c\u0438\u043b\u0438\u044f","phone":"\u0422\u0435\u043b\u0435\u0444\u043e\u043d","email":"\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430\u044f \u043f\u043e\u0447\u0442\u0430","address":"\u0410\u0434\u0440\u0435\u0441\u0441","city":"\u0413\u043e\u0440\u043e\u0434"},"form":{"checkout":{"title":"\u041e\u0441\u0442\u0430\u0432\u044c\u0442\u0435 \u0441\u0432\u043e\u0438 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u044b \u0434\u043b\u044f \u043d\u0430\u0441"}},"error":{"is_required":"\u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e","invalid_email":"\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u044b\u0439 \u0430\u0434\u0440\u0435\u0441\u0441"}}')},110:function(t){t.exports=JSON.parse('{"links":{"shop":"\u041c\u0430\u0433\u0430\u0437\u0438\u043d","news":"\u041d\u043e\u0432\u0438\u043d\u0438","collection":"\u041a\u043e\u043b\u0435\u043a\u0446\u0456\u0457","contacts":"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u0438","faq":"FAQ","rules":"\u041f\u0440\u0430\u0432\u0438\u043b\u0430","partner":"\u041f\u0430\u0440\u0442\u043d\u0435\u0440\u0441\u0442\u0432\u043e","offer":"\u041e\u0444\u0435\u0440\u0442\u0430"},"page":{"shop":{"title":"\u041d\u0430\u0448\u0456 \u043a\u043e\u043b\u0435\u043a\u0446\u0456\u0457"},"products":{"title":"\u041d\u0430\u0448\u0456 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0438","no_products":"\u0412\u0438\u0431\u0430\u0447\u0442\u0435, \u0432 \u0446\u0456\u0439 \u043a\u043e\u043b\u0435\u043a\u0446\u0456\u0457 \u043d\u0435\u043c\u0430\u0454 \u0442\u043e\u0432\u0430\u0440\u0456\u0432"},"cart":{"title":"\u0422\u043e\u0432\u0430\u0440\u0438 \u0432 \u0432\u0430\u0448\u043e\u043c\u0443 \u043a\u043e\u0448\u0438\u043a\u0443","placeholder":"\u0423 \u0432\u0430\u0448\u043e\u043c\u0443 \u043a\u043e\u0448\u0438\u043a\u0443 \u043d\u0435\u043c\u0430\u0454 \u0442\u043e\u0432\u0430\u0440\u0456\u0432"},"checkout":{"title":"\u041e\u043f\u043b\u0430\u0442\u0430","total":"\u0412\u0441\u044c\u043e\u0433\u043e"}},"collections":{"hats":"\u041a\u0435\u043f\u043a\u0438","mens":"\u0427\u043e\u043b\u043e\u0432\u0456\u0447\u0435"},"actions":{"shop_now":"\u041f\u0435\u0440\u0435\u0433\u043b\u044f\u043d\u0443\u0442\u0438","add_to_cart":"\u0414\u043e\u0434\u0430\u0442\u0438 \u0434\u043e \u043a\u043e\u0448\u0438\u043a\u0430","go_to_checkout":"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u0434\u043e \u043e\u043f\u043b\u0430\u0442\u0438","go_shop":"\u0414\u043e \u043c\u0430\u0433\u0430\u0437\u0438\u043d\u0443","send_my_order":"\u0412\u0456\u0434\u043f\u0440\u0430\u0432\u0438\u0442\u0438 \u043c\u043e\u0454 \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f"},"label":{"size":"\u0420\u043e\u0437\u043c\u0456\u0440","price":"\u0426\u0456\u043d\u0430","quantity":"\u041a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c","first_name":"\u0406\u043c\'\u044f","last_name":"\u0424\u0430\u043c\u0456\u043b\u0456\u044f","phone":"\u0422\u0435\u043b\u0435\u0444\u043e\u043d","email":"\u0415\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430 \u0430\u0434\u0440\u0435\u0441\u0430","address":"\u0410\u0434\u0440\u0435\u0441\u0430","city":"\u041c\u0456\u0441\u0442\u043e"},"form":{"checkout":{"title":"\u0417\u0430\u043b\u0438\u0448\u0442\u0435 \u0441\u0432\u043e\u0457 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0438 \u0434\u043b\u044f \u043d\u0430\u0441"}},"error":{"is_required":"\u041e\u0431\u043e\u0432\'\u044f\u0437\u043a\u043e\u0432\u0435 \u043f\u043e\u043b\u0435","invalid_email":"\u041d\u0435\u043a\u043e\u0440\u0435\u043a\u0442\u043d\u0430 \u0435\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430 \u0430\u0434\u0440\u0435\u0441\u0430"}}')},144:function(t,e,n){},145:function(t,e,n){},151:function(t,e,n){},152:function(t,e,n){},153:function(t,e,n){},154:function(t,e,n){},155:function(t,e,n){},156:function(t,e,n){},157:function(t,e,n){},159:function(t,e,n){},160:function(t,e,n){},161:function(t,e,n){},162:function(t,e,n){},164:function(t,e,n){},18:function(t,e,n){"use strict";n.d(e,"h",(function(){return c})),n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return r})),n.d(e,"g",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"e",(function(){return s})),n.d(e,"f",(function(){return u})),n.d(e,"d",(function(){return l}));var c="TOGGLE_CART",a="ADD_ITEM",r="CHANGE_ITEM_QUANTITY",i="REMOVE_CART_ITEM",o="CLEAR_CART",s="LOAD_CART_START",u="LOAD_CART_SUCCESS",l="LOAD_CART_FAILURE"},185:function(t,e,n){"use strict";n.r(e);var c=n(2),a=n(0),r=n.n(a),i=n(14),o=n.n(i),s=n(24),u=n(34),l=n(123),d=n(224),p=n(84),b=n(60),j={resources:{en:{translation:n(108)},ru:{translation:n(109)},ua:{translation:n(110)}},lng:"en",interpolation:{escapeValue:!1}};p.a.use(b.e).init(j);p.a,n(144);var f=n(113),O=n(15),h=n(225),m=(n(145),n(190)),v=n(49),_=Object(v.a)([function(t){return t.notifications}],(function(t){return t.notifications})),x=n(37),g=function(){var t=Object(s.c)(_),e=Object(s.b)(),n=Object(m.a)().t;return Object(c.jsx)("div",{className:"app-notification",children:t.map((function(t){var a=t.id,r=t.type,i=t.message;return Object(c.jsx)(h.a,{classes:{root:"app-notification__item"},severity:r,variant:"filled",onClose:function(){return e(Object(x.b)(a))},children:i||n("errors.unknown_error")},a)}))})},y=n(118),N=n(119),k=n(127),C=n(124),w=(n(151),function(t){Object(k.a)(n,t);var e=Object(C.a)(n);function n(t){var c;return Object(y.a)(this,n),(c=e.call(this,t)).state={hasError:!1},c}return Object(N.a)(n,[{key:"render",value:function(){var t=this.state.hasError,e=this.props.children;return t?Object(c.jsxs)("div",{className:"error-boundary",children:[Object(c.jsx)("div",{className:"error-boundary__image",style:{backgroundImage:"url(https://i.imgur.com/A040Lxr.png)"}}),Object(c.jsx)("p",{className:"error-boundary__text",children:"This Page is Lost in Space"})]}):e}}],[{key:"getDerivedStateFromError",value:function(){return{hasError:!0}}}]),n}(r.a.Component)),T=n(85),S=n(23),L=n(4),E=n(220),A=n(227),I=n(228),q=n(221),R=n(219),F="cartItems",P=n(35),z=n(56),U=(n(153),{getItem:function(t){var e=localStorage.getItem(t);return e?JSON.parse(e):null},setItem:function(t,e){localStorage.setItem(t,JSON.stringify(e))}}),D=n(73),M=n(105),H=n(30),J=n.p+"static/media/empty-cart.74845b66.svg",Q=(n(157),function(t){var e=t.onRedirect,n=Object(m.a)().t,a=Object(O.f)();return Object(c.jsxs)("div",{className:"app-cart-placeholder",children:[Object(c.jsx)("img",{src:J,alt:"empty cart",className:"app-cart-placeholder__img"}),Object(c.jsx)("div",{className:"app-cart-placeholder__text",children:n("page.cart.placeholder")}),Object(c.jsx)(R.a,{size:"large",variant:"contained",color:"primary",onClick:function(){a.push(H.e.getPath()),e()},children:n("actions.go_shop")})]})}),G=function(t,e){return Object(c.jsx)(E.a,Object(L.a)({direction:"left",ref:e},t))},V=r.a.forwardRef(G),B=H.a.getPath(),X=function(){var t=Object(s.b)(),e=Object(s.c)(z.a),n=Object(s.c)(z.b),r=function(){return t(Object(P.h)())},i=Object(O.f)(),o=Object(m.a)().t;return Object(a.useEffect)((function(){t(Object(P.e)())}),[t]),Object(a.useEffect)((function(){!function(t){var e=t.map((function(t){var e=Object(S.a)(t,2),n=e[0],c=e[1];return{sizeId:n,id:c.id,quantity:c.quantity}}));U.setItem(F,e)}(n)}),[n]),Object(c.jsxs)(A.a,{open:e,keepMounted:!0,TransitionComponent:V,onClose:r,"aria-labelledby":o("page.cart.title"),"aria-describedby":o("page.cart.title"),classes:{root:"app-cart",scrollPaper:"app-cart-overlay",paperScrollPaper:"app-cart-paper"},children:[Object(c.jsxs)(I.a,{classes:{root:"app-cart-title"},id:"alert-dialog-slide-title",children:[Object(c.jsx)("span",{className:"app-cart-title__text",children:o("page.cart.title")}),Object(c.jsx)(D.a,{className:"app-cart__close",onClick:r})]}),Object(c.jsxs)(q.a,{classes:{root:"app-cart-content"},children:[Object(c.jsx)(M.a,{cartItems:n}),n.length?Object(c.jsx)("footer",{className:"app-cart-footer",children:Object(c.jsx)(R.a,{classes:{root:"app-cart-checkout-btn"},variant:"contained",size:"large",color:"primary",onClick:function(){i.push(B),r()},children:o("actions.go_to_checkout")})}):Object(c.jsx)(Q,{onRedirect:r})]})]})},Y=(n(159),[{text:"links.faq",path:"/faq"},{text:"links.rules",path:"/rules"},{text:"links.partner",path:"/partnership"},{text:"links.offer",path:"/offer"}]),K=function(){var t=Object(m.a)().t,e=Object(a.useMemo)((function(){return(new Date).getFullYear()}),[]);return Object(c.jsx)("footer",{className:"footer",children:Object(c.jsxs)("div",{className:"container footer__container",children:[Object(c.jsx)("nav",{className:"footer__nav",children:Object(c.jsx)("ul",{className:"footer__list",children:Y.map((function(e){return Object(c.jsx)("li",{className:"footer__item",children:Object(c.jsx)(u.b,{to:e.path,className:"footer__link",children:t(e.text)})},e.path)}))})}),Object(c.jsxs)("div",{className:"footer__copy",children:["\xa9 Asto.run ",e]})]})})},W=(n(160),n(106)),Z=n.p+"static/media/logo1.5e5c7af0.png",$=(n(161),n(222)),tt=n(223),et=function(t){var e=t.children,n=Object(a.useState)(!1),r=Object(S.a)(n,2),i=r[0],o=r[1];return Object(c.jsxs)("div",{className:"app-nav-menu",children:[Object(c.jsx)("div",{className:"app-nav-menu__wrapper ".concat(i?"is-opened":""),children:e}),Object(c.jsx)(R.a,{color:"primary",variant:"outlined",classes:{root:"app-nav-menu__btn"},onClick:function(){return o(!i)},children:i?Object(c.jsx)($.a,{}):Object(c.jsx)(tt.a,{})})]})},nt=n(120),ct=n.n(nt),at=(n(162),function(){var t=Object(s.b)(),e=Object(s.c)(z.c);return Object(c.jsxs)(R.a,{color:"primary",variant:"outlined",onClick:function(){return t(Object(P.h)())},classes:{root:"app-open-cart-btn"},children:[Object(c.jsx)(ct.a,{color:"primary"}),Boolean(e)&&Object(c.jsx)("div",{className:"app-open-cart-btn__counter",children:e})]})}),rt=[{text:"links.shop",path:"/shop"}],it=function(){var t=Object(m.a)().t;return Object(c.jsx)("header",{className:"header",children:Object(c.jsxs)("div",{className:"container header__container",children:[Object(c.jsx)(u.b,{to:"/",className:"logo",children:Object(c.jsx)("img",{className:"logo__img",src:Z,alt:"astorun"})}),Object(c.jsx)(et,{children:Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("nav",{className:"nav",children:Object(c.jsx)("ul",{className:"nav__list",children:rt.map((function(e){return Object(c.jsx)("li",{className:"nav__item",children:Object(c.jsx)(u.c,{activeClassName:"is-active",className:"nav__link",to:e.path,children:t(e.text)})},e.path)}))})}),Object(c.jsx)("div",{className:"header__languages btn-group",children:Object(c.jsx)(W.a,{})})]})}),Object(c.jsx)(at,{})]})})},ot=(n(164),function(t){var e=t.children;return Object(c.jsxs)("div",{className:"app-main-wrapper",children:[Object(c.jsx)(it,{}),Object(c.jsx)("section",{className:"section",children:e}),Object(c.jsx)(K,{}),Object(c.jsx)(X,{})]})}),st=function(t){var e=t.route,n=e.component,a=e.exact,r=e.path;return Object(c.jsx)(O.a,{component:n,exact:a,path:r})},ut=function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(O.c,{children:Object(c.jsx)(w,{children:Object(c.jsxs)(a.Suspense,{fallback:Object(c.jsx)(T.a,{}),children:[Object(c.jsx)(st,{route:H.c}),Object(c.jsx)(O.a,{path:[H.e.path,H.d.path,H.a.path],children:Object(c.jsxs)(ot,{children:[Object(c.jsx)(st,{route:H.e}),Object(c.jsx)(st,{route:H.b}),Object(c.jsx)(st,{route:H.d}),Object(c.jsx)(st,{route:H.a})]})})]})})}),Object(c.jsx)(g,{})]})},lt=n(25),dt=n(83),pt=n(121),bt=n.n(pt),jt=n(126),ft=n(18),Ot=n(43),ht=function(t,e){var n=t.selectedSize.id;return e[n]?function(t,e){var n=e[t];return Object(L.a)(Object(L.a)({},e),{},Object(Ot.a)({},t,Object(L.a)(Object(L.a)({},n),{},{quantity:n.quantity+1})))}(n,e):Object(L.a)(Object(L.a)({},e),{},Object(Ot.a)({},n,Object(L.a)(Object(L.a)({},t),{},{quantity:1})))},mt=function(t,e){var n=Object(L.a)({},e);return delete n[t],n},vt=function(t,e,n){var c=n[t],a=c.quantity;return c.quantity>e&&1===a?n:Object(L.a)(Object(L.a)({},n),{},Object(Ot.a)({},t,Object(L.a)(Object(L.a)({},c),{},{quantity:e})))},_t={isOpened:!1,items:{},isLoading:!1},xt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_t,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case ft.h:return Object(L.a)(Object(L.a)({},t),{},{isOpened:!t.isOpened});case ft.e:return Object(L.a)(Object(L.a)({},t),{},{isLoading:!0});case ft.f:return Object(L.a)(Object(L.a)({},t),{},{isLoading:!1,items:e.payload});case ft.d:return Object(L.a)(Object(L.a)({},t),{},{isLoading:!1});case ft.a:return Object(L.a)(Object(L.a)({},t),{},{items:ht(e.payload,t.items)});case ft.b:return Object(L.a)(Object(L.a)({},t),{},{items:vt(e.payload.id,e.payload.quantity,t.items)});case ft.g:return Object(L.a)(Object(L.a)({},t),{},{items:mt(e.payload,t.items)});case ft.c:return Object(L.a)({},_t);default:return t}},gt=n(39),yt={collections:[],isLoading:!1,error:null},Nt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:yt,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case gt.c:return Object(L.a)(Object(L.a)({},t),{},{collections:e.payload,isLoading:!1,error:null});case gt.b:return Object(L.a)(Object(L.a)({},t),{},{error:null,isLoading:!0});case gt.a:return Object(L.a)(Object(L.a)({},t),{},{error:e.payload,isLoading:!1,collections:[]});default:return t}},kt=n(125),Ct=n(45),wt={notifications:[]},Tt=function(t,e){return t.filter((function(t){return t.id!==e}))},St=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:wt,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case Ct.a:return Object(L.a)(Object(L.a)({},t),{},{notifications:[].concat(Object(kt.a)(t.notifications),[e.payload])});case Ct.b:return Object(L.a)(Object(L.a)({},t),{},{notifications:Tt(t.notifications,e.payload)});default:return t}},Lt=n(40),Et={products:[],isLoading:!1,error:null,page:1,pages:2,total:2},At=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Et,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case Lt.b:return Object(L.a)(Object(L.a)({},t),{},{isLoading:!0});case Lt.c:return Object(L.a)(Object(L.a)({},t),{},{products:e.payload.products,pages:e.payload.pages,isLoading:!1});case Lt.a:return Object(L.a)(Object(L.a)({},t),{},{products:[],isLoading:!1,error:e.payload});default:return t}},It=Object(lt.c)({cart:xt,collections:Nt,products:At,notifications:St}),qt=n(11),Rt=n.n(qt),Ft=n(8),Pt=n(48),zt=n(51),Ut=Rt.a.mark(Ht),Dt=Rt.a.mark(Jt),Mt=Rt.a.mark(Qt);function Ht(){var t,e,n;return Rt.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(c.prev=0,(t=U.getItem(F))&&t.length){c.next=6;break}return c.next=5,Object(Ft.d)(Object(P.f)({}));case 5:return c.abrupt("return");case 6:return e=t.map((function(t){return t.id})),c.next=9,Object(Pt.e)(e);case 9:n=c.sent,console.log("productsResponses:",n),c.next=19;break;case 13:return c.prev=13,c.t0=c.catch(0),c.next=17,Object(Ft.d)(Object(P.d)(c.t0));case 17:return c.next=19,Object(Ft.d)(Object(x.a)({type:zt.a,message:c.t0.message}));case 19:case"end":return c.stop()}}),Ut,null,[[0,13]])}function Jt(){return Rt.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(Ft.e)(ft.e,Ht);case 2:case"end":return t.stop()}}),Dt)}function Qt(){return Rt.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(Ft.a)([Object(Ft.b)(Jt)]);case 2:case"end":return t.stop()}}),Mt)}var Gt=n(78),Vt=Rt.a.mark(Yt),Bt=Rt.a.mark(Kt),Xt=Rt.a.mark(Wt);function Yt(){var t,e;return Rt.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(Ft.b)(Pt.b);case 3:return t=n.sent,e=t.data,n.next=7,Object(Ft.d)(Object(Gt.c)(e));case 7:n.next=15;break;case 9:return n.prev=9,n.t0=n.catch(0),n.next=13,Object(Ft.d)(Object(Gt.a)(n.t0));case 13:return n.next=15,Object(Ft.d)(Object(x.a)({type:zt.a,message:n.t0.message}));case 15:case"end":return n.stop()}}),Vt,null,[[0,9]])}function Kt(){return Rt.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(Ft.f)(gt.b,Yt);case 2:case"end":return t.stop()}}),Bt)}function Wt(){return Rt.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(Ft.a)([Object(Ft.b)(Kt)]);case 2:case"end":return t.stop()}}),Xt)}var Zt=Rt.a.mark(ee),$t=Rt.a.mark(ne),te=Rt.a.mark(ce);function ee(t){return Rt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ft.c)(5e3);case 2:return e.next=4,Object(Ft.d)(Object(x.b)(t.payload.id));case 4:case"end":return e.stop()}}),Zt)}function ne(){return Rt.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(Ft.e)(Ct.a,ee);case 2:case"end":return t.stop()}}),$t)}function ce(){return Rt.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(Ft.a)([Object(Ft.b)(ne)]);case 2:case"end":return t.stop()}}),te)}var ae=n(79),re=Rt.a.mark(se),ie=Rt.a.mark(ue),oe=Rt.a.mark(le);function se(t){var e,n,c,a,r,i,o,s,u;return Rt.a.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return e=t.payload,l.prev=1,l.next=4,Object(Ft.b)(Pt.b);case 4:return n=l.sent,c=n.data,a=c.find((function(t){return t.name===e.collection})),l.next=9,Object(Ft.b)(Pt.d,Object(L.a)(Object(L.a)({},e),{},{collection:null===a||void 0===a?void 0:a.id}));case 9:return r=l.sent,i=r.data,s=(o=i).count,u=o.results,l.next=14,Object(Ft.d)(Object(ae.c)({pages:s,products:u}));case 14:l.next=22;break;case 16:return l.prev=16,l.t0=l.catch(1),l.next=20,Object(Ft.d)(Object(ae.a)(l.t0));case 20:return l.next=22,Object(Ft.d)(Object(x.a)({type:zt.a,message:l.t0.message}));case 22:case"end":return l.stop()}}),re,null,[[1,16]])}function ue(){return Rt.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(Ft.f)(Lt.b,se);case 2:case"end":return t.stop()}}),ie)}function le(){return Rt.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(Ft.a)([Object(Ft.b)(ue)]);case 2:case"end":return t.stop()}}),oe)}var de=Rt.a.mark(pe);function pe(){return Rt.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(Ft.a)([Object(Ft.b)(Wt),Object(Ft.b)(le),Object(Ft.b)(ce),Object(Ft.b)(Qt)]);case 2:case"end":return t.stop()}}),de)}var be=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||lt.d,je=Object(jt.a)(),fe=[je],Oe={key:"root",whitelist:[],storage:bt.a},he=Object(dt.a)(Oe,It),me=Object(lt.e)(he,be(lt.a.apply(void 0,fe))),ve=Object(dt.b)(me);je.run(pe);var _e=function(t){t&&t instanceof Function&&n.e(12).then(n.bind(null,295)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),c(t),a(t),r(t),i(t)}))},xe=Object(l.a)({palette:{primary:{main:"#dd5145"}}});o.a.render(Object(c.jsx)(u.a,{children:Object(c.jsx)(s.a,{store:me,children:Object(c.jsx)(f.a,{persistor:ve,children:Object(c.jsx)(d.a,{theme:xe,children:Object(c.jsx)(ut,{})})})})}),document.getElementById("root")),_e()},30:function(t,e,n){"use strict";n.d(e,"c",(function(){return r})),n.d(e,"e",(function(){return i})),n.d(e,"b",(function(){return o})),n.d(e,"d",(function(){return s})),n.d(e,"a",(function(){return u}));var c=n(0),a=Object(c.lazy)((function(){return n.e(7).then(n.bind(null,194))})),r={path:"/",getPath:function(){return"/"},exact:!0,component:Object(c.lazy)((function(){return n.e(11).then(n.bind(null,195))}))},i={path:"/shop",getPath:function(){return"/shop"},exact:!0,component:a},o={path:"/shop/:collection",getPath:function(t){return"/shop/".concat(t)},exact:!0,component:Object(c.lazy)((function(){return Promise.all([n.e(8),n.e(6)]).then(n.bind(null,193))}))},s={path:"/shop/products/:productId",getPath:function(t){return"/shop/products/".concat(t)},exact:!0,component:Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(4),n.e(9)]).then(n.bind(null,196))}))},u={path:"/checkout",getPath:function(){return"/checkout"},exact:!0,component:Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(10),n.e(5)]).then(n.bind(null,192))}))}},35:function(t,e,n){"use strict";n.d(e,"h",(function(){return a})),n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return i})),n.d(e,"g",(function(){return o})),n.d(e,"c",(function(){return s})),n.d(e,"e",(function(){return u})),n.d(e,"f",(function(){return l})),n.d(e,"d",(function(){return d}));var c=n(18),a=function(){return{type:c.h}},r=function(t){return{type:c.a,payload:t}},i=function(t){return{type:c.b,payload:t}},o=function(t){return{type:c.g,payload:t}},s=function(){return{type:c.c}},u=function(){return{type:c.e}},l=function(t){return{type:c.f,payload:t}},d=function(t){return{type:c.d,payload:t}}},37:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return s}));var c=n(4),a=n(114),r=n.n(a),i=n(45),o=function(t){return{type:i.a,payload:Object(c.a)(Object(c.a)({},t),{},{id:r()()})}},s=function(t){return{type:i.b,payload:t}}},39:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return r}));var c="FETCH_COLLECTIONS_START",a="FETCH_COLLECTIONS_SUCCESS",r="FETCH_COLLECTIONS_FAILURE"},40:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return r}));var c="FETCH_PRODUCTS_START",a="FETCH_PRODUCTS_SUCCESS",r="FETCH_PRODUCTS_FAILURE"},45:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return a}));var c="ADD_NOTIFICATION",a="REMOVE_NOTIFICATION"},48:function(t,e,n){"use strict";n.d(e,"b",(function(){return p})),n.d(e,"d",(function(){return b})),n.d(e,"c",(function(){return j})),n.d(e,"a",(function(){return f})),n.d(e,"e",(function(){return O}));var c=n(43),a=n(4),r=n(23),i=n(122),o=function(t){return"object"===typeof t&&null!==t},s={baseURL:"/api"},u=n.n(i).a.create({baseURL:s.baseURL}),l=function t(e){return Array.isArray(e)?e.map((function(e){return o(e)?t(e):e})):"object"===typeof e&&null!==e?Object.entries(e).reduce((function(e,n){var i=Object(r.a)(n,2),s=i[0],u=i[1],l=function(t){return t.replace(/_+(\w)/g,(function(t){var e=t.split("_");return Object(r.a)(e,2)[1].toUpperCase()}))}(s);return Object(a.a)(Object(a.a)({},e),{},Object(c.a)({},l,o(u)?t(u):u))}),{}):e};u.interceptors.response.use((function(t){return Object(a.a)(Object(a.a)({},t),{},{data:l(t.data)})}));var d=u,p=function(){return d.get("/collection/collection")},b=function(t){var e=t.page,n=t.pageSize,c=t.collection;return d.get("/product/product/",{params:{page:e,collection:c,page_size:n}})},j=function(t){return d.get("/product/product/".concat(t))},f=function(t){var e=t.firstName,n=t.lastName,c=t.delAddress,a=t.delCity,r=t.email,i=t.items,o=t.phone;return d.post("/order/order/",{first_name:e,last_name:n,del_address:c,del_city:a,email:r,items:i,phone:o})},O=function(t){return d.post("/product/product/by-ids/",{ids:t})}},51:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var c="error"},56:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return s})),n.d(e,"d",(function(){return u}));var c=n(23),a=n(49),r=function(t){return t.cart},i=Object(a.a)([r],(function(t){return t.isOpened})),o=Object(a.a)([r],(function(t){return Object.entries(t.items)})),s=Object(a.a)([o],(function(t){return t.reduce((function(t,e){return t+Object(c.a)(e,2)[1].quantity}),0)})),u=Object(a.a)([o],(function(t){var e=t.reduce((function(t,e){var n=Object(c.a)(e,2)[1],a=n.price,r=n.quantity;return t+Number(a)*r}),0);return Number(e.toFixed(2))}))},73:function(t,e,n){"use strict";var c=n(2),a=(n(0),n(154),function(t){var e=t.onClick,n=t.className;return Object(c.jsx)("button",{type:"button",onClick:e,className:"app-btn-close btn-default ".concat(n),children:"\u2715"})});a.defaultProps={className:""},e.a=a},78:function(t,e,n){"use strict";n.d(e,"c",(function(){return a})),n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return i}));var c=n(39),a=function(t){return{type:c.c,payload:t}},r=function(){return{type:c.b}},i=function(t){return{type:c.a,payload:t}}},79:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var c=n(40),a=function(t){return{type:c.b,payload:t}},r=function(t){return{type:c.c,payload:t}},i=function(t){return{type:c.a,payload:t}}},85:function(t,e,n){"use strict";var c=n(2);n(0),n(152);e.a=function(){return Object(c.jsx)("div",{className:"spinner",children:Object(c.jsx)("div",{className:"spinner__container"})})}}},[[185,2,3]]]);
//# sourceMappingURL=main.95fb5233.chunk.js.map