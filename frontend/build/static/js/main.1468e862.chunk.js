(this.webpackJsonpastorun=this.webpackJsonpastorun||[]).push([[1],{106:function(t,e,n){"use strict";var a=n(23),c=n(2),r=n(0),i=n(24),o=n(32),s=n(217),u=n(218),l=n(190),d=(n(155),n(73)),p=(n(156),function(t){var e=t.value,n=t.onChange;return Object(c.jsxs)("div",{className:"app-quantity-control",children:[Object(c.jsx)("button",{type:"button",className:"btn-default app-quantity-control__btn",onClick:function(){return n(e-1)},children:"\u276e"}),Object(c.jsx)("span",{className:"app-quantity-control__value",children:e}),Object(c.jsx)("button",{type:"button",className:"btn-default app-quantity-control__btn",onClick:function(){return n(e+1)},children:"\u276f"})]})}),b=function(t){var e=t.item,n=t.onQuantityChange,a=t.onRemove,r=e.imageUrl,i=e.name,o=e.price,b=e.quantity,j=e.selectedSize,f=Object(l.a)().t;return Object(c.jsxs)(s.a,{classes:{root:"app-cart-item"},children:[Object(c.jsx)(u.a,{classes:{root:"app-cart-item__image"},image:r,title:i}),Object(c.jsxs)("div",{className:"app-cart-item__details",children:[Object(c.jsx)("h4",{className:"app-cart-item__title",children:i}),Object(c.jsxs)("div",{className:"app-cart-item__details-row",children:[Object(c.jsxs)("div",{className:"app-cart-item__details-label",children:[f("label.size"),":"]}),Object(c.jsx)("div",{className:"app-cart-item__details-value",children:j.name})]}),Object(c.jsxs)("div",{className:"app-cart-item__details-row",children:[Object(c.jsxs)("div",{className:"app-cart-item__details-label",children:[f("label.price"),":"]}),Object(c.jsx)("div",{className:"app-cart-item__details-value",children:o})]}),Object(c.jsxs)("div",{className:"app-cart-item__details-row",children:[Object(c.jsxs)("div",{className:"app-cart-item__details-label",children:[f("label.quantity"),":"]}),Object(c.jsx)("div",{className:"app-cart-item__details-value",children:Object(c.jsx)(p,{value:b,onChange:n})})]})]}),Object(c.jsx)("div",{className:"app-cart-item__remove",children:Object(c.jsx)(d.a,{onClick:a})})]})};e.a=function(t){var e=t.cartItems,n=Object(i.b)(),s=Object(r.useCallback)((function(t){return function(e){n(Object(o.b)({id:t,quantity:e}))}}),[n]),u=Object(r.useCallback)((function(t){return function(){return n(Object(o.g)(t))}}),[n]);return Object(c.jsx)("div",{className:"app-cart-items",children:e.map((function(t){var e=Object(a.a)(t,2),n=e[0],r=e[1];return Object(c.jsx)(b,{item:r,onQuantityChange:s(n),onRemove:u(n)},n)}))})}},107:function(t,e,n){"use strict";var a=n(2),c=n(0),r=n(23),i=n(190),o=function(){var t=Object(i.a)().i18n,e=t.options,n=t.language,a=e.resources||{},o=Object.keys(a),s=Object(c.useState)(n),u=Object(r.a)(s,2),l=u[0],d=u[1];return{languages:o,activeLanguage:l,setLanguage:function(e){l!==e&&(d(e),t.changeLanguage(e))}}};e.a=function(){var t=o(),e=t.languages,n=t.activeLanguage,c=t.setLanguage;return Object(a.jsx)("div",{className:"app-locales",children:e.map((function(t){return Object(a.jsx)("button",{className:"\n            btn-default\n            app-locale-btn\n            ".concat(n===t&&"is-active","\n          "),onClick:function(){return c(t)},type:"button",children:t.toUpperCase()},t)}))})}},109:function(t){t.exports=JSON.parse('{"links":{"shop":"Shop","news":"News","collection":"Collection","contacts":"Contacts","faq":"FAQ","rules":"Rules","partner":"Partnership","offer":"Offer"},"page":{"shop":{"title":"Our collections"},"products":{"title":"Our products","no_products":"Sorry, we have no products in this collection"},"cart":{"title":"The goods in your cart","placeholder":"There are no goods in your cart yet"},"checkout":{"title":"Checkout","total":"Total"}},"collections":{"hats":"Hats","man":"Men\'s","woman":"Women\'s","children":"Children\'s"},"actions":{"shop_now":"Shop now","add_to_cart":"ADd to cart","go_to_checkout":"Go to checkout","go_shop":"Go shop","send_my_order":"Send my order"},"label":{"size":"Size","price":"Price","quantity":"Quantity","first_name":"First name","last_name":"Last name","phone":"Phone","email":"Email","address":"Address","city":"City"},"form":{"checkout":{"title":"Leave your contacts for us"}},"error":{"is_required":"The field is required","invalid_email":"Invalid email"}}')},110:function(t){t.exports=JSON.parse('{"links":{"shop":"\u041c\u0430\u0433\u0430\u0437\u0438\u043d","news":"\u041d\u043e\u0432\u043e\u0441\u0442\u0438","collection":"\u041a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u0438","contacts":"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b","faq":"FAQ","rules":"\u041f\u0440\u0430\u0432\u0438\u043b\u0430","partner":"\u041f\u0430\u0440\u0442\u043d\u0435\u0440\u0441\u0442\u0432\u043e","offer":"\u041e\u0444\u0435\u0440\u0442\u0430"},"page":{"shop":{"title":"\u041d\u0430\u0448\u0438 \u043a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u0438"},"products":{"title":"\u041d\u0430\u0448\u0438 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u044b","no_products":"\u0418\u0437\u0432\u0438\u043d\u0438\u0442\u0435, \u0432 \u044d\u0442\u043e\u0439 \u043a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u0438 \u043d\u0435\u0442 \u0442\u043e\u0432\u0430\u0440\u043e\u0432"},"cart":{"title":"\u0422\u043e\u0432\u0430\u0440\u044b \u0432 \u0432\u0430\u0448\u0435\u0439 \u043a\u043e\u0440\u0437\u0438\u043d\u0435","placeholder":"\u0423 \u0432\u0430\u0441 \u043d\u0435\u0442 \u0442\u043e\u0432\u0430\u0440\u043e\u0432 \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0435"},"checkout":{"title":"\u041e\u043f\u043b\u0430\u0442\u0430","total":"\u0412\u0441\u0435\u0433\u043e"}},"collections":{"hats":"\u041a\u0435\u043f\u043a\u0438","man":"\u041c\u0443\u0436\u0441\u043a\u043e\u0435","woman":"\u0416\u0435\u043d\u0441\u043a\u043e\u0435","children":"\u0414\u0435\u0442\u0441\u043a\u043e\u0435"},"actions":{"shop_now":"\u0421\u043c\u043e\u0442\u0440\u0435\u0442\u044c","add_to_cart":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443","go_to_checkout":"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043a \u043e\u043f\u043b\u0430\u0442\u0435","go_shop":"\u0412 \u043c\u0430\u0433\u0430\u0437\u0438\u043d","send_my_order":"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u043c\u043e\u0439 \u0437\u0430\u043a\u0430\u0437c"},"label":{"size":"\u0420\u0430\u0437\u043c\u0435\u0440","price":"\u0426\u0435\u043d\u0430","quantity":"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e","first_name":"\u0418\u043c\u044f","last_name":"\u0424\u0430\u043c\u0438\u043b\u0438\u044f","phone":"\u0422\u0435\u043b\u0435\u0444\u043e\u043d","email":"\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430\u044f \u043f\u043e\u0447\u0442\u0430","address":"\u0410\u0434\u0440\u0435\u0441\u0441","city":"\u0413\u043e\u0440\u043e\u0434"},"form":{"checkout":{"title":"\u041e\u0441\u0442\u0430\u0432\u044c\u0442\u0435 \u0441\u0432\u043e\u0438 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u044b \u0434\u043b\u044f \u043d\u0430\u0441"}},"error":{"is_required":"\u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e","invalid_email":"\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u044b\u0439 \u0430\u0434\u0440\u0435\u0441\u0441"}}')},111:function(t){t.exports=JSON.parse('{"links":{"shop":"\u041c\u0430\u0433\u0430\u0437\u0438\u043d","news":"\u041d\u043e\u0432\u0438\u043d\u0438","collection":"\u041a\u043e\u043b\u0435\u043a\u0446\u0456\u0457","contacts":"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u0438","faq":"FAQ","rules":"\u041f\u0440\u0430\u0432\u0438\u043b\u0430","partner":"\u041f\u0430\u0440\u0442\u043d\u0435\u0440\u0441\u0442\u0432\u043e","offer":"\u041e\u0444\u0435\u0440\u0442\u0430"},"page":{"shop":{"title":"\u041d\u0430\u0448\u0456 \u043a\u043e\u043b\u0435\u043a\u0446\u0456\u0457"},"products":{"title":"\u041d\u0430\u0448\u0456 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0438","no_products":"\u0412\u0438\u0431\u0430\u0447\u0442\u0435, \u0432 \u0446\u0456\u0439 \u043a\u043e\u043b\u0435\u043a\u0446\u0456\u0457 \u043d\u0435\u043c\u0430\u0454 \u0442\u043e\u0432\u0430\u0440\u0456\u0432"},"cart":{"title":"\u0422\u043e\u0432\u0430\u0440\u0438 \u0432 \u0432\u0430\u0448\u043e\u043c\u0443 \u043a\u043e\u0448\u0438\u043a\u0443","placeholder":"\u0423 \u0432\u0430\u0448\u043e\u043c\u0443 \u043a\u043e\u0448\u0438\u043a\u0443 \u043d\u0435\u043c\u0430\u0454 \u0442\u043e\u0432\u0430\u0440\u0456\u0432"},"checkout":{"title":"\u041e\u043f\u043b\u0430\u0442\u0430","total":"\u0412\u0441\u044c\u043e\u0433\u043e"}},"collections":{"hats":"\u041a\u0435\u043f\u043a\u0438","man":"\u0427\u043e\u043b\u043e\u0432\u0456\u043a\u0430\u043c","woman":"\u0416\u0456\u043d\u043a\u0430\u043c","children":"\u0414\u0456\u0442\u044f\u043c"},"actions":{"shop_now":"\u041f\u0435\u0440\u0435\u0433\u043b\u044f\u043d\u0443\u0442\u0438","add_to_cart":"\u0414\u043e\u0434\u0430\u0442\u0438 \u0434\u043e \u043a\u043e\u0448\u0438\u043a\u0430","go_to_checkout":"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u0434\u043e \u043e\u043f\u043b\u0430\u0442\u0438","go_shop":"\u0414\u043e \u043c\u0430\u0433\u0430\u0437\u0438\u043d\u0443","send_my_order":"\u0412\u0456\u0434\u043f\u0440\u0430\u0432\u0438\u0442\u0438 \u043c\u043e\u0454 \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f"},"label":{"size":"\u0420\u043e\u0437\u043c\u0456\u0440","price":"\u0426\u0456\u043d\u0430","quantity":"\u041a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c","first_name":"\u0406\u043c\'\u044f","last_name":"\u0424\u0430\u043c\u0456\u043b\u0456\u044f","phone":"\u0422\u0435\u043b\u0435\u0444\u043e\u043d","email":"\u0415\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430 \u0430\u0434\u0440\u0435\u0441\u0430","address":"\u0410\u0434\u0440\u0435\u0441\u0430","city":"\u041c\u0456\u0441\u0442\u043e"},"form":{"checkout":{"title":"\u0417\u0430\u043b\u0438\u0448\u0442\u0435 \u0441\u0432\u043e\u0457 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0438 \u0434\u043b\u044f \u043d\u0430\u0441"}},"error":{"is_required":"\u041e\u0431\u043e\u0432\'\u044f\u0437\u043a\u043e\u0432\u0435 \u043f\u043e\u043b\u0435","invalid_email":"\u041d\u0435\u043a\u043e\u0440\u0435\u043a\u0442\u043d\u0430 \u0435\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430 \u0430\u0434\u0440\u0435\u0441\u0430"}}')},144:function(t,e,n){},145:function(t,e,n){},151:function(t,e,n){},152:function(t,e,n){},153:function(t,e,n){},154:function(t,e,n){},155:function(t,e,n){},156:function(t,e,n){},157:function(t,e,n){},159:function(t,e,n){},160:function(t,e,n){},161:function(t,e,n){},162:function(t,e,n){},164:function(t,e,n){},18:function(t,e,n){"use strict";n.d(e,"h",(function(){return a})),n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return r})),n.d(e,"g",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"e",(function(){return s})),n.d(e,"f",(function(){return u})),n.d(e,"d",(function(){return l}));var a="TOGGLE_CART",c="ADD_ITEM",r="CHANGE_ITEM_QUANTITY",i="REMOVE_CART_ITEM",o="CLEAR_CART",s="LOAD_CART_START",u="LOAD_CART_SUCCESS",l="LOAD_CART_FAILURE"},185:function(t,e,n){"use strict";n.r(e);var a=n(2),c=n(0),r=n.n(c),i=n(14),o=n.n(i),s=n(24),u=n(35),l=n(124),d=n(224),p=n(85),b=n(60),j={resources:{en:{translation:n(109)},ru:{translation:n(110)},ua:{translation:n(111)}},lng:"en",interpolation:{escapeValue:!1}};p.a.use(b.e).init(j);p.a,n(144);var f=n(114),O=n(15),h=n(225),m=(n(145),n(190)),v=n(49),_=Object(v.a)([function(t){return t.notifications}],(function(t){return t.notifications})),x=n(37),g=function(){var t=Object(s.c)(_),e=Object(s.b)(),n=Object(m.a)().t;return Object(a.jsx)("div",{className:"app-notification",children:t.map((function(t){var c=t.id,r=t.type,i=t.message;return Object(a.jsx)(h.a,{classes:{root:"app-notification__item"},severity:r,variant:"filled",onClose:function(){return e(Object(x.b)(c))},children:i||n("errors.unknown_error")},c)}))})},y=n(119),N=n(120),C=n(127),k=n(125),w=(n(151),function(t){Object(C.a)(n,t);var e=Object(k.a)(n);function n(t){var a;return Object(y.a)(this,n),(a=e.call(this,t)).state={hasError:!1},a}return Object(N.a)(n,[{key:"render",value:function(){var t=this.state.hasError,e=this.props.children;return t?Object(a.jsxs)("div",{className:"error-boundary",children:[Object(a.jsx)("div",{className:"error-boundary__image",style:{backgroundImage:"url(https://i.imgur.com/A040Lxr.png)"}}),Object(a.jsx)("p",{className:"error-boundary__text",children:"This Page is Lost in Space"})]}):e}}],[{key:"getDerivedStateFromError",value:function(){return{hasError:!0}}}]),n}(r.a.Component)),S=n(86),T=n(23),E=n(4),L=n(220),A=n(227),I=n(228),R=n(221),q=n(219),P="cartItems",F=n(32),z=n(56),U=(n(153),{getItem:function(t){var e=localStorage.getItem(t);return e?JSON.parse(e):null},setItem:function(t,e){localStorage.setItem(t,JSON.stringify(e))}}),D=n(73),H=n(106),M=n(30),J=n.p+"static/media/empty-cart.74845b66.svg",Q=(n(157),function(t){var e=t.onRedirect,n=Object(m.a)().t,c=Object(O.f)();return Object(a.jsxs)("div",{className:"app-cart-placeholder",children:[Object(a.jsx)("img",{src:J,alt:"empty cart",className:"app-cart-placeholder__img"}),Object(a.jsx)("div",{className:"app-cart-placeholder__text",children:n("page.cart.placeholder")}),Object(a.jsx)(q.a,{size:"large",variant:"contained",color:"primary",onClick:function(){c.push(M.e.getPath()),e()},children:n("actions.go_shop")})]})}),B=function(t,e){return Object(a.jsx)(L.a,Object(E.a)({direction:"left",ref:e},t))},G=r.a.forwardRef(B),V=M.a.getPath(),W=function(){var t=Object(s.b)(),e=Object(s.c)(z.a),n=Object(s.c)(z.b),r=function(){return t(Object(F.h)())},i=Object(O.f)(),o=Object(m.a)().t;return Object(c.useEffect)((function(){t(Object(F.e)())}),[t]),Object(c.useEffect)((function(){!function(t){var e=t.map((function(t){var e=Object(T.a)(t,2),n=e[0],a=e[1];return{sizeId:n,id:a.id,quantity:a.quantity}}));U.setItem(P,e)}(n)}),[n]),Object(a.jsxs)(A.a,{open:e,keepMounted:!0,TransitionComponent:G,onClose:r,"aria-labelledby":o("page.cart.title"),"aria-describedby":o("page.cart.title"),classes:{root:"app-cart",scrollPaper:"app-cart-overlay",paperScrollPaper:"app-cart-paper"},children:[Object(a.jsxs)(I.a,{classes:{root:"app-cart-title"},id:"alert-dialog-slide-title",children:[Object(a.jsx)("span",{className:"app-cart-title__text",children:o("page.cart.title")}),Object(a.jsx)(D.a,{className:"app-cart__close",onClick:r})]}),Object(a.jsxs)(R.a,{classes:{root:"app-cart-content"},children:[Object(a.jsx)(H.a,{cartItems:n}),n.length?Object(a.jsx)("footer",{className:"app-cart-footer",children:Object(a.jsx)(q.a,{classes:{root:"app-cart-checkout-btn"},variant:"contained",size:"large",color:"primary",onClick:function(){i.push(V),r()},children:o("actions.go_to_checkout")})}):Object(a.jsx)(Q,{onRedirect:r})]})]})},K=(n(159),[{text:"links.faq",path:"/faq"},{text:"links.rules",path:"/rules"},{text:"links.partner",path:"/partnership"},{text:"links.offer",path:"/offer"}]),X=function(){var t=Object(m.a)().t,e=Object(c.useMemo)((function(){return(new Date).getFullYear()}),[]);return Object(a.jsx)("footer",{className:"footer",children:Object(a.jsxs)("div",{className:"container footer__container",children:[Object(a.jsx)("nav",{className:"footer__nav",children:Object(a.jsx)("ul",{className:"footer__list",children:K.map((function(e){return Object(a.jsx)("li",{className:"footer__item",children:Object(a.jsx)(u.b,{to:e.path,className:"footer__link",children:t(e.text)})},e.path)}))})}),Object(a.jsxs)("div",{className:"footer__copy",children:["\xa9 Asto.run ",e]})]})})},Y=(n(160),n(107)),Z=n.p+"static/media/logo1.5e5c7af0.png",$=(n(161),n(222)),tt=n(223),et=function(t){var e=t.children,n=Object(c.useState)(!1),r=Object(T.a)(n,2),i=r[0],o=r[1];return Object(a.jsxs)("div",{className:"app-nav-menu",children:[Object(a.jsx)("div",{className:"app-nav-menu__wrapper ".concat(i?"is-opened":""),children:e}),Object(a.jsx)(q.a,{color:"primary",variant:"outlined",classes:{root:"app-nav-menu__btn"},onClick:function(){return o(!i)},children:i?Object(a.jsx)($.a,{}):Object(a.jsx)(tt.a,{})})]})},nt=n(121),at=n.n(nt),ct=(n(162),function(){var t=Object(s.b)(),e=Object(s.c)(z.c);return Object(a.jsxs)(q.a,{color:"primary",variant:"outlined",onClick:function(){return t(Object(F.h)())},classes:{root:"app-open-cart-btn"},children:[Object(a.jsx)(at.a,{color:"primary"}),Boolean(e)&&Object(a.jsx)("div",{className:"app-open-cart-btn__counter",children:e})]})}),rt=[{text:"links.shop",path:"/shop"}],it=function(){var t=Object(m.a)().t;return Object(a.jsx)("header",{className:"header",children:Object(a.jsxs)("div",{className:"container header__container",children:[Object(a.jsx)(u.b,{to:"/",className:"logo",children:Object(a.jsx)("img",{className:"logo__img",src:Z,alt:"astorun"})}),Object(a.jsx)(et,{children:Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("nav",{className:"nav",children:Object(a.jsx)("ul",{className:"nav__list",children:rt.map((function(e){return Object(a.jsx)("li",{className:"nav__item",children:Object(a.jsx)(u.c,{activeClassName:"is-active",className:"nav__link",to:e.path,children:t(e.text)})},e.path)}))})}),Object(a.jsx)("div",{className:"header__languages btn-group",children:Object(a.jsx)(Y.a,{})})]})}),Object(a.jsx)(ct,{})]})})},ot=(n(164),function(t){var e=t.children;return Object(a.jsxs)("div",{className:"app-main-wrapper",children:[Object(a.jsx)(it,{}),Object(a.jsx)("section",{className:"section",children:e}),Object(a.jsx)(X,{}),Object(a.jsx)(W,{})]})}),st=function(t){var e=t.route,n=e.component,c=e.exact,r=e.path;return Object(a.jsx)(O.a,{component:n,exact:c,path:r})},ut=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(O.c,{children:Object(a.jsx)(w,{children:Object(a.jsxs)(c.Suspense,{fallback:Object(a.jsx)(S.a,{}),children:[Object(a.jsx)(st,{route:M.c}),Object(a.jsx)(O.a,{path:[M.e.path,M.d.path,M.a.path],children:Object(a.jsxs)(ot,{children:[Object(a.jsx)(st,{route:M.e}),Object(a.jsx)(st,{route:M.b}),Object(a.jsx)(st,{route:M.d}),Object(a.jsx)(st,{route:M.a})]})})]})})}),Object(a.jsx)(g,{})]})},lt=n(25),dt=n(84),pt=n(122),bt=n.n(pt),jt=n(126),ft=n(18),Ot=n(43),ht=function(t,e){var n=t.selectedSize.id;return e[n]?function(t,e){var n=e[t];return Object(E.a)(Object(E.a)({},e),{},Object(Ot.a)({},t,Object(E.a)(Object(E.a)({},n),{},{quantity:n.quantity+1})))}(n,e):Object(E.a)(Object(E.a)({},e),{},Object(Ot.a)({},n,Object(E.a)(Object(E.a)({},t),{},{quantity:1})))},mt=function(t,e){var n=Object(E.a)({},e);return delete n[t],n},vt=function(t,e,n){var a=n[t],c=a.quantity;return a.quantity>e&&1===c?n:Object(E.a)(Object(E.a)({},n),{},Object(Ot.a)({},t,Object(E.a)(Object(E.a)({},a),{},{quantity:e})))},_t=function(t,e){return t.reduce((function(t,n){var a,c=n.sizeId,r=n.id,i=n.quantity,o=e.find((function(t){var e=t.id;return r===e}));if(!o)return t;var s=o.sizes.find((function(t){return t.id===c}));if(!s)return t;var u=o.images.find((function(t){return t.isMain}))||(null===(a=o.images)||void 0===a?void 0:a[0]);return Object(E.a)(Object(E.a)({},t),{},Object(Ot.a)({},c,{id:o.id,name:o.name,imageUrl:(null===u||void 0===u?void 0:u.url)||"",selectedSize:s,price:o.price,quantity:i}))}),{})},xt={isOpened:!1,items:{},isLoading:!1},gt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xt,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case ft.h:return Object(E.a)(Object(E.a)({},t),{},{isOpened:!t.isOpened});case ft.e:return Object(E.a)(Object(E.a)({},t),{},{isLoading:!0});case ft.f:return Object(E.a)(Object(E.a)({},t),{},{isLoading:!1,items:e.payload});case ft.d:return Object(E.a)(Object(E.a)({},t),{},{isLoading:!1});case ft.a:return Object(E.a)(Object(E.a)({},t),{},{items:ht(e.payload,t.items)});case ft.b:return Object(E.a)(Object(E.a)({},t),{},{items:vt(e.payload.id,e.payload.quantity,t.items)});case ft.g:return Object(E.a)(Object(E.a)({},t),{},{items:mt(e.payload,t.items)});case ft.c:return Object(E.a)({},xt);default:return t}},yt=n(39),Nt={collections:[],isLoading:!1,error:null},Ct=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Nt,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case yt.c:return Object(E.a)(Object(E.a)({},t),{},{collections:e.payload,isLoading:!1,error:null});case yt.b:return Object(E.a)(Object(E.a)({},t),{},{error:null,isLoading:!0});case yt.a:return Object(E.a)(Object(E.a)({},t),{},{error:e.payload,isLoading:!1,collections:[]});default:return t}},kt=n(75),wt=n(45),St={notifications:[]},Tt=function(t,e){return t.filter((function(t){return t.id!==e}))},Et=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:St,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case wt.a:return Object(E.a)(Object(E.a)({},t),{},{notifications:[].concat(Object(kt.a)(t.notifications),[e.payload])});case wt.b:return Object(E.a)(Object(E.a)({},t),{},{notifications:Tt(t.notifications,e.payload)});default:return t}},Lt=n(40),At={products:[],isLoading:!1,error:null,page:1,pages:2,total:2},It=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:At,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case Lt.b:return Object(E.a)(Object(E.a)({},t),{},{isLoading:!0});case Lt.c:return Object(E.a)(Object(E.a)({},t),{},{products:e.payload.products,pages:e.payload.pages,isLoading:!1});case Lt.a:return Object(E.a)(Object(E.a)({},t),{},{products:[],isLoading:!1,error:e.payload});default:return t}},Rt=Object(lt.c)({cart:gt,collections:Ct,products:It,notifications:Et}),qt=n(11),Pt=n.n(qt),Ft=n(7),zt=n(48),Ut=n(51),Dt=Pt.a.mark(Jt),Ht=Pt.a.mark(Qt),Mt=Pt.a.mark(Bt);function Jt(){var t,e,n,a,c,r;return Pt.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(i.prev=0,(t=U.getItem(P))&&t.length){i.next=6;break}return i.next=5,Object(Ft.d)(Object(F.f)({}));case 5:return i.abrupt("return");case 6:return e=t.map((function(t){return t.id})),n=Object(kt.a)(new Set(e)),i.next=10,Object(zt.e)(n);case 10:return a=i.sent,c=a.data,r=_t(t,c),i.next=15,Object(Ft.d)(Object(F.f)(r));case 15:i.next=23;break;case 17:return i.prev=17,i.t0=i.catch(0),i.next=21,Object(Ft.d)(Object(F.d)(i.t0));case 21:return i.next=23,Object(Ft.d)(Object(x.a)({type:Ut.a,message:i.t0.message}));case 23:case"end":return i.stop()}}),Dt,null,[[0,17]])}function Qt(){return Pt.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(Ft.e)(ft.e,Jt);case 2:case"end":return t.stop()}}),Ht)}function Bt(){return Pt.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(Ft.a)([Object(Ft.b)(Qt)]);case 2:case"end":return t.stop()}}),Mt)}var Gt=n(79),Vt=Pt.a.mark(Xt),Wt=Pt.a.mark(Yt),Kt=Pt.a.mark(Zt);function Xt(){var t,e;return Pt.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(Ft.b)(zt.b);case 3:return t=n.sent,e=t.data,n.next=7,Object(Ft.d)(Object(Gt.c)(e));case 7:n.next=15;break;case 9:return n.prev=9,n.t0=n.catch(0),n.next=13,Object(Ft.d)(Object(Gt.a)(n.t0));case 13:return n.next=15,Object(Ft.d)(Object(x.a)({type:Ut.a,message:n.t0.message}));case 15:case"end":return n.stop()}}),Vt,null,[[0,9]])}function Yt(){return Pt.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(Ft.f)(yt.b,Xt);case 2:case"end":return t.stop()}}),Wt)}function Zt(){return Pt.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(Ft.a)([Object(Ft.b)(Yt)]);case 2:case"end":return t.stop()}}),Kt)}var $t=Pt.a.mark(ne),te=Pt.a.mark(ae),ee=Pt.a.mark(ce);function ne(t){return Pt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ft.c)(5e3);case 2:return e.next=4,Object(Ft.d)(Object(x.b)(t.payload.id));case 4:case"end":return e.stop()}}),$t)}function ae(){return Pt.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(Ft.e)(wt.a,ne);case 2:case"end":return t.stop()}}),te)}function ce(){return Pt.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(Ft.a)([Object(Ft.b)(ae)]);case 2:case"end":return t.stop()}}),ee)}var re=n(80),ie=Pt.a.mark(ue),oe=Pt.a.mark(le),se=Pt.a.mark(de);function ue(t){var e,n,a,c,r,i,o,s,u;return Pt.a.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return e=t.payload,l.prev=1,l.next=4,Object(Ft.b)(zt.b);case 4:return n=l.sent,a=n.data,c=a.find((function(t){return t.name===e.collection})),l.next=9,Object(Ft.b)(zt.d,Object(E.a)(Object(E.a)({},e),{},{collection:null===c||void 0===c?void 0:c.name}));case 9:return r=l.sent,i=r.data,s=(o=i).count,u=o.results,l.next=14,Object(Ft.d)(Object(re.c)({pages:(d=s,p=e.pageSize,Math.ceil(d/p)),products:u}));case 14:l.next=22;break;case 16:return l.prev=16,l.t0=l.catch(1),l.next=20,Object(Ft.d)(Object(re.a)(l.t0));case 20:return l.next=22,Object(Ft.d)(Object(x.a)({type:Ut.a,message:l.t0.message}));case 22:case"end":return l.stop()}var d,p}),ie,null,[[1,16]])}function le(){return Pt.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(Ft.f)(Lt.b,ue);case 2:case"end":return t.stop()}}),oe)}function de(){return Pt.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(Ft.a)([Object(Ft.b)(le)]);case 2:case"end":return t.stop()}}),se)}var pe=Pt.a.mark(be);function be(){return Pt.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(Ft.a)([Object(Ft.b)(Zt),Object(Ft.b)(de),Object(Ft.b)(ce),Object(Ft.b)(Bt)]);case 2:case"end":return t.stop()}}),pe)}var je=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||lt.d,fe=Object(jt.a)(),Oe=[fe],he={key:"root",whitelist:[],storage:bt.a},me=Object(dt.a)(he,Rt),ve=Object(lt.e)(me,je(lt.a.apply(void 0,Oe))),_e=Object(dt.b)(ve);fe.run(be);var xe=function(t){t&&t instanceof Function&&n.e(12).then(n.bind(null,295)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),a(t),c(t),r(t),i(t)}))},ge=Object(l.a)({palette:{primary:{main:"#dd5145"}}});o.a.render(Object(a.jsx)(u.a,{children:Object(a.jsx)(s.a,{store:ve,children:Object(a.jsx)(f.a,{persistor:_e,children:Object(a.jsx)(d.a,{theme:ge,children:Object(a.jsx)(ut,{})})})})}),document.getElementById("root")),xe()},30:function(t,e,n){"use strict";n.d(e,"c",(function(){return r})),n.d(e,"e",(function(){return i})),n.d(e,"b",(function(){return o})),n.d(e,"d",(function(){return s})),n.d(e,"a",(function(){return u}));var a=n(0),c=Object(a.lazy)((function(){return n.e(7).then(n.bind(null,194))})),r={path:"/",getPath:function(){return"/"},exact:!0,component:Object(a.lazy)((function(){return n.e(11).then(n.bind(null,195))}))},i={path:"/shop",getPath:function(){return"/shop"},exact:!0,component:c},o={path:"/shop/:collection",getPath:function(t){return"/shop/".concat(t)},exact:!0,component:Object(a.lazy)((function(){return Promise.all([n.e(8),n.e(6)]).then(n.bind(null,193))}))},s={path:"/shop/products/:productId",getPath:function(t){return"/shop/products/".concat(t)},exact:!0,component:Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(4),n.e(9)]).then(n.bind(null,196))}))},u={path:"/checkout",getPath:function(){return"/checkout"},exact:!0,component:Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(10),n.e(5)]).then(n.bind(null,192))}))}},32:function(t,e,n){"use strict";n.d(e,"h",(function(){return c})),n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return i})),n.d(e,"g",(function(){return o})),n.d(e,"c",(function(){return s})),n.d(e,"e",(function(){return u})),n.d(e,"f",(function(){return l})),n.d(e,"d",(function(){return d}));var a=n(18),c=function(){return{type:a.h}},r=function(t){return{type:a.a,payload:t}},i=function(t){return{type:a.b,payload:t}},o=function(t){return{type:a.g,payload:t}},s=function(){return{type:a.c}},u=function(){return{type:a.e}},l=function(t){return{type:a.f,payload:t}},d=function(t){return{type:a.d,payload:t}}},37:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return s}));var a=n(4),c=n(115),r=n.n(c),i=n(45),o=function(t){return{type:i.a,payload:Object(a.a)(Object(a.a)({},t),{},{id:r()()})}},s=function(t){return{type:i.b,payload:t}}},39:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return c})),n.d(e,"a",(function(){return r}));var a="FETCH_COLLECTIONS_START",c="FETCH_COLLECTIONS_SUCCESS",r="FETCH_COLLECTIONS_FAILURE"},40:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return c})),n.d(e,"a",(function(){return r}));var a="FETCH_PRODUCTS_START",c="FETCH_PRODUCTS_SUCCESS",r="FETCH_PRODUCTS_FAILURE"},45:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return c}));var a="ADD_NOTIFICATION",c="REMOVE_NOTIFICATION"},48:function(t,e,n){"use strict";n.d(e,"b",(function(){return b})),n.d(e,"d",(function(){return j})),n.d(e,"c",(function(){return f})),n.d(e,"a",(function(){return O})),n.d(e,"e",(function(){return h}));var a=n(43),c=n(4),r=n(23),i=n(123),o=n.n(i),s=function(t){return"object"===typeof t&&null!==t},u={baseURL:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_BASE_URL||"/api"},l=o.a.create({baseURL:u.baseURL}),d=function t(e){return Array.isArray(e)?e.map((function(e){return s(e)?t(e):e})):"object"===typeof e&&null!==e?Object.entries(e).reduce((function(e,n){var i=Object(r.a)(n,2),o=i[0],u=i[1],l=function(t){return t.replace(/_+(\w)/g,(function(t){var e=t.split("_");return Object(r.a)(e,2)[1].toUpperCase()}))}(o);return Object(c.a)(Object(c.a)({},e),{},Object(a.a)({},l,s(u)?t(u):u))}),{}):e};l.interceptors.response.use((function(t){return Object(c.a)(Object(c.a)({},t),{},{data:d(t.data)})}));var p=l,b=function(){return p.get("/collection/collection")},j=function(t){var e=t.page,n=t.pageSize,a=t.collection;return p.get("/product/product",{params:{page:e,collection:a,page_size:n}})},f=function(t){return p.get("/product/product/".concat(t))},O=function(t){var e=t.firstName,n=t.lastName,a=t.delAddress,c=t.delCity,r=t.email,i=t.items,o=t.phone;return p.post("/order/order/",{first_name:e,last_name:n,del_address:a,del_city:c,email:r,items:i,phone:o})},h=function(t){return p.post("/product/product/by-ids/",{ids:t})}},51:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var a="error"},56:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return s})),n.d(e,"d",(function(){return u}));var a=n(23),c=n(49),r=function(t){return t.cart},i=Object(c.a)([r],(function(t){return t.isOpened})),o=Object(c.a)([r],(function(t){return Object.entries(t.items)})),s=Object(c.a)([o],(function(t){return t.reduce((function(t,e){return t+Object(a.a)(e,2)[1].quantity}),0)})),u=Object(c.a)([o],(function(t){var e=t.reduce((function(t,e){var n=Object(a.a)(e,2)[1],c=n.price,r=n.quantity;return t+Number(c)*r}),0);return Number(e.toFixed(2))}))},73:function(t,e,n){"use strict";var a=n(2),c=(n(0),n(154),function(t){var e=t.onClick,n=t.className;return Object(a.jsx)("button",{type:"button",onClick:e,className:"app-btn-close btn-default ".concat(n),children:"\u2715"})});c.defaultProps={className:""},e.a=c},79:function(t,e,n){"use strict";n.d(e,"c",(function(){return c})),n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return i}));var a=n(39),c=function(t){return{type:a.c,payload:t}},r=function(){return{type:a.b}},i=function(t){return{type:a.a,payload:t}}},80:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var a=n(40),c=function(t){return{type:a.b,payload:t}},r=function(t){return{type:a.c,payload:t}},i=function(t){return{type:a.a,payload:t}}},86:function(t,e,n){"use strict";var a=n(2);n(0),n(152);e.a=function(){return Object(a.jsx)("div",{className:"spinner",children:Object(a.jsx)("div",{className:"spinner__container"})})}}},[[185,2,3]]]);
//# sourceMappingURL=main.1468e862.chunk.js.map