(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{44:function(e,t,c){},70:function(e,t,c){},75:function(e,t,c){"use strict";c.r(t);var r=c(1),n=c.n(r),a=c(22),s=c.n(a),i=(c(44),c(6)),o=c(3),u=c.n(o),j=c(5),d=c(2),l=c(4),b=c.n(l);var h=function(){var e=Object(r.useState)([]),t=Object(d.a)(e,2),c=t[0],n=t[1],a=Object(r.useState)(!1),s=Object(d.a)(a,2),i=s[0],o=s[1],l=Object(r.useState)(""),h=Object(d.a)(l,2),O=h[0],p=h[1],x=Object(r.useState)(""),f=Object(d.a)(x,2),v=f[0],m=f[1],g=Object(r.useState)(""),y=Object(d.a)(g,2),w=y[0],k=y[1],A=Object(r.useState)(1),C=Object(d.a)(A,2),_=C[0],P=C[1],N=Object(r.useState)(0),S=Object(d.a)(N,2),I=S[0],E=S[1];return Object(r.useEffect)((function(){(function(){var e=Object(j.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("/api/products?limit=".concat(9*_,"&").concat(O,"&").concat(v,"&title[regex]=").concat(w));case 2:t=e.sent,n(t.data.products),E(t.data.result);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[i,O,v,w,_]),{products:[c,n],callback:[i,o],category:[O,p],sort:[v,m],search:[w,k],page:[_,P],result:[I,E]}},O=c(8),p=c(14);var x=function(e){var t=Object(r.useState)(!1),c=Object(d.a)(t,2),n=c[0],a=c[1],s=Object(r.useState)(!1),i=Object(d.a)(s,2),o=i[0],l=i[1],h=Object(r.useState)([]),x=Object(d.a)(h,2),f=x[0],v=x[1],m=Object(r.useState)([]),g=Object(d.a)(m,2),y=g[0],w=g[1];Object(r.useEffect)((function(){e&&function(){var t=Object(j.a)(u.a.mark((function t(){var c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,b.a.get("/user/infor",{headers:{Authorization:e}});case 3:c=t.sent,a(!0),1===c.data.role?l(!0):l(!1),v(c.data.cart),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),alert(t.t0.response.data.msg);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}()()}),[e]),Object(r.useEffect)((function(){e&&function(){var t=Object(j.a)(u.a.mark((function t(){var c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.a.get("/user/history",{headers:{Authorization:e}});case 2:c=t.sent,w(c.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[e]);var k=function(){var t=Object(j.a)(u.a.mark((function t(c){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n){t.next=2;break}return t.abrupt("return",alert("Please login to continue buying"));case 2:if(!f.every((function(e){return e._id!==c._id}))){t.next=9;break}return v([].concat(Object(p.a)(f),[Object(O.a)(Object(O.a)({},c),{},{quantity:1})])),t.next=7,b.a.patch("/user/addcart",{cart:[].concat(Object(p.a)(f),[Object(O.a)(Object(O.a)({},c),{},{quantity:1})])},{headers:{Authorization:e}});case 7:t.next=10;break;case 9:alert("This product has been added to cart.");case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return{isLogged:[n,a],isAdmin:[o,l],cart:[f,v],addCart:k,history:[y,w]}};var f=function(){var e=Object(r.useState)([]),t=Object(d.a)(e,2),c=t[0],n=t[1],a=Object(r.useState)(!1),s=Object(d.a)(a,2),i=s[0],o=s[1];return Object(r.useEffect)((function(){(function(){var e=Object(j.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("/api/category");case 2:t=e.sent,n(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[i]),{categories:[c,n],callback:[i,o]}},v=c(0),m=Object(r.createContext)(),g=function(e){var t=e.children,c=Object(r.useState)(!1),n=Object(d.a)(c,2),a=n[0],s=n[1];Object(r.useEffect)((function(){if(localStorage.getItem("firstLogin")){var e=function(){var t=Object(j.a)(u.a.mark((function t(){var c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.a.get("/user/refresh_token");case 2:c=t.sent,s(c.data.accesstoken),setTimeout((function(){e()}),6e5);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();e()}}),[]);var i={token:[a,s],productsAPI:h(),userAPI:x(a),categoriesAPI:f()};return Object(v.jsx)(m.Provider,{value:i,children:t})},y=c.p+"static/media/menu.e8db7520.svg",w=c.p+"static/media/close.ea7c95d7.svg",k=c.p+"static/media/cart.d146d6c3.svg";var A=function(){var e=Object(r.useContext)(m),t=Object(d.a)(e.userAPI.isLogged,1)[0],c=Object(d.a)(e.userAPI.isAdmin,1)[0],n=Object(d.a)(e.userAPI.cart,1)[0],a=Object(r.useState)(!1),s=Object(d.a)(a,2),o=s[0],l=s[1],h=function(){var e=Object(j.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("/user/logout");case 2:localStorage.removeItem("firstLogin"),window.location.href="/";case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O={left:o?0:"-100%"};return Object(v.jsxs)("header",{children:[Object(v.jsx)("div",{className:"menu",onClick:function(){return l(!o)},children:Object(v.jsx)("img",{src:y,alt:"",width:"30"})}),Object(v.jsx)("div",{className:"logo",children:Object(v.jsx)("h1",{children:Object(v.jsx)(i.b,{to:"/",children:c?"Admin":"Chhaya Furnitures"})})}),Object(v.jsxs)("ul",{style:O,children:[Object(v.jsx)("li",{children:Object(v.jsx)(i.b,{to:"/",children:c?"Products":"Shop"})}),c&&Object(v.jsxs)("div",{children:[Object(v.jsx)("li",{children:Object(v.jsx)(i.b,{to:"/create_product",children:"Create Product"})}),Object(v.jsx)("li",{children:Object(v.jsx)(i.b,{to:"/category",children:"Categories"})})]}),t?Object(v.jsxs)("div",{children:[Object(v.jsx)("li",{children:Object(v.jsx)(i.b,{to:"/history",children:"History"})}),Object(v.jsx)("li",{children:Object(v.jsx)(i.b,{to:"/",onClick:h,children:"Logout"})})]}):Object(v.jsx)("li",{children:Object(v.jsx)(i.b,{to:"/login",children:"Login \u2725 Register"})}),Object(v.jsx)("li",{onClick:function(){return l(!o)},children:Object(v.jsx)("img",{src:w,alt:"",width:"30",className:"menu"})})]}),c?"":Object(v.jsxs)("div",{className:"cart-icon",children:[Object(v.jsx)("span",{children:n.length}),Object(v.jsx)(i.b,{to:"/cart",children:Object(v.jsx)("img",{src:k,alt:"",width:"30"})})]})]})},C=c(7);var _=function(e){var t=e.product,c=e.deleteProduct,n=Object(r.useContext)(m),a=Object(d.a)(n.userAPI.isAdmin,1)[0],s=n.userAPI.addCart;return Object(v.jsx)("div",{className:"row_btn",children:a?Object(v.jsxs)("div",{children:[Object(v.jsx)(i.b,{id:"btn_buy",to:"#!",onClick:function(){return c(t._id,t.images.public_id)},children:"Delete"}),Object(v.jsx)(i.b,{id:"btn_view",to:"/edit_product/".concat(t._id),children:"Edit"})]}):Object(v.jsxs)("div",{children:[Object(v.jsx)(i.b,{id:"btn_buy",to:"#!",onClick:function(){return s(t)},children:"Buy"}),Object(v.jsx)(i.b,{id:"btn_view",to:"/detail/".concat(t._id),children:"View"})]})})};var P=function(e){var t=e.product,c=(e.isAdmin,e.deleteProduct);return e.handleCheck,Object(v.jsxs)("div",{className:"product_card",children:[Object(v.jsx)("img",{src:t.images.url,alt:""}),Object(v.jsxs)("div",{className:"product_box",children:[Object(v.jsx)("h2",{title:t.title,children:t.title}),Object(v.jsxs)("span",{children:["\u20b9",t.price]}),Object(v.jsx)("p",{children:t.description})]}),Object(v.jsx)(_,{product:t,deleteProduct:c})]})};c(70);var N=function(){return Object(v.jsx)("div",{className:"load-page",children:Object(v.jsx)("div",{className:"loader",children:Object(v.jsx)("div",{children:Object(v.jsx)("div",{children:Object(v.jsx)("div",{children:Object(v.jsx)("div",{children:Object(v.jsx)("div",{children:Object(v.jsx)("div",{children:Object(v.jsx)("div",{children:Object(v.jsx)("div",{})})})})})})})})})})};var S=function(){var e=Object(r.useContext)(m),t=Object(d.a)(e.categoriesAPI.categories,1)[0],c=Object(d.a)(e.productsAPI.category,2),n=c[0],a=c[1],s=Object(d.a)(e.productsAPI.sort,2),i=s[0],o=s[1],u=Object(d.a)(e.productsAPI.search,2),j=u[0],l=u[1];return Object(v.jsxs)("div",{className:"filter_menu",children:[Object(v.jsxs)("div",{className:"row",children:[Object(v.jsx)("span",{children:"Filters: "}),Object(v.jsxs)("select",{name:"category",value:n,onChange:function(e){a(e.target.value),l("")},children:[Object(v.jsx)("option",{value:"",children:"All Products"}),t.map((function(e){return Object(v.jsx)("option",{value:"category="+e._id,children:e.name},e._id)}))]})]}),Object(v.jsx)("input",{type:"text",value:j,placeholder:"Enter your search!",onChange:function(e){return l(e.target.value.toLowerCase())}}),Object(v.jsxs)("div",{className:"row sort",children:[Object(v.jsx)("span",{children:"Sort By: "}),Object(v.jsxs)("select",{value:i,onChange:function(e){return o(e.target.value)},children:[Object(v.jsx)("option",{value:"",children:"Newest"}),Object(v.jsx)("option",{value:"sort=oldest",children:"Oldest"}),Object(v.jsx)("option",{value:"sort=-sold",children:"Best sales"}),Object(v.jsx)("option",{value:"sort=-price",children:"Price: Hight-Low"}),Object(v.jsx)("option",{value:"sort=price",children:"Price: Low-Hight"})]})]})]})};var I=function(){var e=Object(r.useContext)(m),t=Object(d.a)(e.productsAPI.page,2),c=t[0],n=t[1],a=Object(d.a)(e.productsAPI.result,1)[0];return Object(v.jsx)("div",{className:"load_more",children:a<9*c?"":Object(v.jsx)("button",{onClick:function(){return n(c+1)},children:"Load more"})})};var E=function(){var e=Object(r.useContext)(m),t=Object(d.a)(e.productsAPI.products,2),c=t[0],n=t[1],a=Object(d.a)(e.userAPI.isAdmin,1)[0],s=Object(d.a)(e.token,1)[0],i=Object(d.a)(e.productsAPI.callback,2),o=i[0],l=i[1],h=Object(r.useState)(!1),O=Object(d.a)(h,2),x=O[0],f=O[1],g=function(e){c.forEach((function(t){t._id===e&&(t.checked=!t.checked)})),n(Object(p.a)(c))},y=function(){var e=Object(j.a)(u.a.mark((function e(t,c){var r,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,f(!0),r=b.a.post("/api/destroy",{public_id:c},{headers:{Authorization:s}}),n=b.a.delete("/api/products/".concat(t),{headers:{Authorization:s}}),e.next=6,r;case 6:return e.next=8,n;case 8:l(!o),f(!1),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),alert(e.t0.response.data.msg);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t,c){return e.apply(this,arguments)}}();return x?Object(v.jsx)("div",{children:Object(v.jsx)(N,{})}):Object(v.jsxs)("div",{children:[Object(v.jsx)(S,{}),Object(v.jsx)("div",{className:"products",children:c.map((function(e){return Object(v.jsx)(P,{product:e,isAdmin:a,deleteProduct:y,handleCheck:g},e._id)}))}),Object(v.jsx)(I,{}),0===c.length&&Object(v.jsx)(N,{})]})};var q=function(){var e=Object(C.g)(),t=Object(r.useContext)(m),c=Object(d.a)(t.productsAPI.products,1)[0],n=t.userAPI.addCart,a=Object(r.useState)([]),s=Object(d.a)(a,2),o=s[0],u=s[1];return Object(r.useEffect)((function(){e.id&&c.forEach((function(t){t._id===e.id&&u(t)}))}),[e.id,c]),0===o.length?null:Object(v.jsxs)("div",{children:[Object(v.jsxs)("div",{className:"detail",children:[Object(v.jsx)("img",{src:o.images.url,alt:""}),Object(v.jsxs)("div",{className:"box-detail",children:[Object(v.jsxs)("div",{className:"row",children:[Object(v.jsx)("h2",{children:o.title}),Object(v.jsxs)("h6",{children:["#id: ",o.product_id]})]}),Object(v.jsxs)("span",{children:["\u20b9 ",o.price]}),Object(v.jsx)("p",{children:o.description}),Object(v.jsx)("p",{children:o.content}),Object(v.jsxs)("p",{children:["Sold: ",o.sold]}),Object(v.jsx)(i.b,{to:"/cart",className:"cart",onClick:function(){return n(o)},children:"Buy Now"})]})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("h2",{children:"Related products"}),Object(v.jsx)("div",{className:"products",children:c.map((function(e){return e.category===o.category?Object(v.jsx)(P,{product:e},e._id):null}))})]})]})},z=c(15);var D=function(){var e=Object(r.useState)({email:"",password:""}),t=Object(d.a)(e,2),c=t[0],n=t[1],a=function(e){var t=e.target,r=t.name,a=t.value;n(Object(O.a)(Object(O.a)({},c),{},Object(z.a)({},r,a)))},s=function(){var e=Object(j.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,b.a.post("/user/login",Object(O.a)({},c));case 4:localStorage.setItem("firstLogin",!0),window.location.href="/",e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),alert(e.t0.response.data.msg);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsx)("div",{className:"login-page",children:Object(v.jsxs)("form",{onSubmit:s,children:[Object(v.jsx)("h2",{children:"Login"}),Object(v.jsx)("input",{type:"email",name:"email",required:!0,placeholder:"Email",value:c.email,onChange:a}),Object(v.jsx)("input",{type:"password",name:"password",required:!0,autoComplete:"on",placeholder:"Password",value:c.password,onChange:a}),Object(v.jsxs)("div",{className:"row",children:[Object(v.jsx)("button",{type:"submit",children:"Login"}),Object(v.jsx)(i.b,{to:"/register",children:"Register"})]})]})})};var L=function(){var e=Object(r.useState)({name:"",email:"",password:""}),t=Object(d.a)(e,2),c=t[0],n=t[1],a=function(e){var t=e.target,r=t.name,a=t.value;n(Object(O.a)(Object(O.a)({},c),{},Object(z.a)({},r,a)))},s=function(){var e=Object(j.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,b.a.post("/user/register",Object(O.a)({},c));case 4:localStorage.setItem("firstLogin",!0),window.location.href="/",e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),alert(e.t0.response.data.msg);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsx)("div",{className:"login-page",children:Object(v.jsxs)("form",{onSubmit:s,children:[Object(v.jsx)("h2",{children:"Register"}),Object(v.jsx)("input",{type:"text",name:"name",required:!0,placeholder:"Name",value:c.name,onChange:a}),Object(v.jsx)("input",{type:"email",name:"email",required:!0,placeholder:"Email",value:c.email,onChange:a}),Object(v.jsx)("input",{type:"password",name:"password",required:!0,autoComplete:"on",placeholder:"Password",value:c.password,onChange:a}),Object(v.jsxs)("div",{className:"row",children:[Object(v.jsx)("button",{type:"submit",children:"Register"}),Object(v.jsx)(i.b,{to:"/login",children:"Login"})]})]})})};var F=function(){var e=Object(r.useContext)(m),t=Object(d.a)(e.userAPI.history,2),c=t[0],n=t[1],a=Object(d.a)(e.userAPI.isAdmin,1)[0],s=Object(d.a)(e.token,1)[0];return Object(r.useEffect)((function(){s&&function(){var e=Object(j.a)(u.a.mark((function e(){var t,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a){e.next=7;break}return e.next=3,b.a.get("/api/payment",{headers:{Authorization:s}});case 3:t=e.sent,n(t.data),e.next=11;break;case 7:return e.next=9,b.a.get("/user/history",{headers:{Authorization:s}});case 9:c=e.sent,n(c.data);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[s,a,n]),Object(v.jsxs)("div",{className:"history-page",children:[Object(v.jsx)("h2",{children:"History"}),Object(v.jsxs)("h4",{children:["You have ",c.length," ordered"]}),Object(v.jsxs)("table",{children:[Object(v.jsx)("thead",{children:Object(v.jsxs)("tr",{children:[Object(v.jsx)("th",{children:"Payment ID"}),Object(v.jsx)("th",{children:"Date of Purchased"}),Object(v.jsx)("th",{})]})}),Object(v.jsx)("tbody",{children:c.map((function(e){return Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:e.paymentID}),Object(v.jsx)("td",{children:new Date(e.createdAt).toLocaleDateString()}),Object(v.jsx)("td",{children:Object(v.jsx)(i.b,{to:"/history/".concat(e._id),children:"View"})})]},e._id)}))})]})]})};var H=function(){var e=Object(r.useContext)(m),t=Object(d.a)(e.userAPI.history,1)[0],c=Object(r.useState)([]),n=Object(d.a)(c,2),a=n[0],s=n[1],i=Object(C.g)();return Object(r.useEffect)((function(){i.id&&t.forEach((function(e){e._id===i.id&&s(e)}))}),[i.id,t]),0===a.length?null:Object(v.jsxs)("div",{className:"history-page",children:[Object(v.jsxs)("table",{children:[Object(v.jsx)("thead",{children:Object(v.jsxs)("tr",{children:[Object(v.jsx)("th",{children:"Name"}),Object(v.jsx)("th",{children:"Address"}),Object(v.jsx)("th",{children:"Postal Code"}),Object(v.jsx)("th",{children:"Country Code"})]})}),Object(v.jsx)("tbody",{children:Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:a.address.recipient_name}),Object(v.jsx)("td",{children:a.address.line1+" - "+a.address.city}),Object(v.jsx)("td",{children:a.address.postal_code}),Object(v.jsx)("td",{children:a.address.country_code})]})})]}),Object(v.jsxs)("table",{style:{margin:"30px 0px"},children:[Object(v.jsx)("thead",{children:Object(v.jsxs)("tr",{children:[Object(v.jsx)("th",{}),Object(v.jsx)("th",{children:"Products"}),Object(v.jsx)("th",{children:"Quantity"}),Object(v.jsx)("th",{children:"Price"})]})}),Object(v.jsx)("tbody",{children:a.cart.map((function(e){return Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:Object(v.jsx)("img",{src:e.images.url,alt:""})}),Object(v.jsx)("td",{children:e.title}),Object(v.jsx)("td",{children:e.quantity}),Object(v.jsxs)("td",{children:["$ ",e.price*e.quantity]})]},e._id)}))})]})]})},T=c(35),Y=c(36),X=c(39),B=c(38),J=c(37),R=c.n(J),Q=function(e){Object(X.a)(c,e);var t=Object(B.a)(c);function c(){return Object(T.a)(this,c),t.apply(this,arguments)}return Object(Y.a)(c,[{key:"render",value:function(){var e=this,t=this.props.total;return Object(v.jsx)(R.a,{env:"sandbox",client:{sandbox:"AfAEQ-MtnV4tKFKkNCu-EcwIFGDE7Dc2HcJt5fz4nQJ0HK3-JXYPiTjZPh_GTl40pF5DnzXAAV6mbgzX",production:"AaSSvnM4XoO21d8oIQlc98h2blZxvCx84w3xXEOM7-OyyHZsoCj9sKtTOvr3n8BPAGLQJIUAixhxqMf0"},currency:"INR",total:t,onError:function(e){console.log("Error!",e)},onSuccess:function(t){console.log("The payment was succeeded!",t),e.props.tranSuccess(t)},onCancel:function(e){console.log("The payment was cancelled!",e)},style:{size:"medium"}})}}]),c}(n.a.Component);var K=function(){var e=Object(r.useContext)(m),t=Object(d.a)(e.userAPI.cart,2),c=t[0],n=t[1],a=Object(d.a)(e.token,1)[0],s=Object(r.useState)(0),i=Object(d.a)(s,2),o=i[0],l=i[1];Object(r.useEffect)((function(){!function(){var e=c.reduce((function(e,t){return e+t.price*t.quantity}),0);l(e)}()}),[c]);var h=function(){var e=Object(j.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.patch("/user/addcart",{cart:t},{headers:{Authorization:a}});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(j.a)(u.a.mark((function e(t){var r,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.paymentID,s=t.address,e.next=3,b.a.post("/api/payment",{cart:c,paymentID:r,address:s},{headers:{Authorization:a}});case 3:n([]),h([]),alert("You have successfully placed an order.");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return 0===c.length?Object(v.jsx)("h2",{style:{textAlign:"center",fontSize:"5rem"},children:"Cart Empty"}):Object(v.jsxs)("div",{children:[c.map((function(e){return Object(v.jsxs)("div",{className:"detail cart",children:[Object(v.jsx)("img",{src:e.images.url,alt:""}),Object(v.jsxs)("div",{className:"box-detail",children:[Object(v.jsx)("h2",{children:e.title}),Object(v.jsxs)("h3",{children:["\u20b9 ",e.price*e.quantity]}),Object(v.jsx)("p",{children:e.description}),Object(v.jsx)("p",{children:e.content}),Object(v.jsxs)("div",{className:"amount",children:[Object(v.jsx)("button",{onClick:function(){return t=e._id,c.forEach((function(e){e._id===t&&(1===e.quantity?e.quantity=1:e.quantity-=1)})),n(Object(p.a)(c)),void h(c);var t},children:" - "}),Object(v.jsx)("span",{children:e.quantity}),Object(v.jsx)("button",{onClick:function(){return t=e._id,c.forEach((function(e){e._id===t&&(e.quantity+=1)})),n(Object(p.a)(c)),void h(c);var t},children:" + "})]}),Object(v.jsx)("div",{className:"delete",onClick:function(){return t=e._id,void(window.confirm("Do you want to delete this product?")&&(c.forEach((function(e,r){e._id===t&&c.splice(r,1)})),n(Object(p.a)(c)),h(c)));var t},children:"X"})]})]},e._id)})),Object(v.jsxs)("div",{className:"total",children:[Object(v.jsx)("h3",{children:" Delivery Charge : Free "}),Object(v.jsxs)("h1",{children:[" Total : \u20b9 ",o," "]}),Object(v.jsx)(Q,{total:o,tranSuccess:O})]})]})};var M=function(){return Object(v.jsx)("div",{children:"404 | Not Found"})};var U=function(){var e=Object(r.useContext)(m),t=Object(d.a)(e.categoriesAPI.categories,1)[0],c=Object(r.useState)(""),n=Object(d.a)(c,2),a=n[0],s=n[1],i=Object(d.a)(e.token,1)[0],o=Object(d.a)(e.categoriesAPI.callback,2),l=o[0],h=o[1],O=Object(r.useState)(!1),p=Object(d.a)(O,2),x=p[0],f=p[1],g=Object(r.useState)(""),y=Object(d.a)(g,2),w=y[0],k=y[1],A=function(){var e=Object(j.a)(u.a.mark((function e(t){var c,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!x){e.next=9;break}return e.next=5,b.a.put("/api/category/".concat(w),{name:a},{headers:{Authorization:i}});case 5:c=e.sent,alert(c.data.msg),e.next=13;break;case 9:return e.next=11,b.a.post("/api/category",{name:a},{headers:{Authorization:i}});case 11:r=e.sent,alert(r.data.msg);case 13:f(!1),s(""),h(!l),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(1),alert(e.t0.response.data.msg);case 21:case"end":return e.stop()}}),e,null,[[1,18]])})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(j.a)(u.a.mark((function e(t,c){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:k(t),s(c),f(!0);case 3:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}(),_=function(){var e=Object(j.a)(u.a.mark((function e(t){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.delete("/api/category/".concat(t),{headers:{Authorization:i}});case 3:c=e.sent,alert(c.data.msg),h(!l),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),alert(e.t0.response.data.msg);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsxs)("div",{className:"categories",children:[Object(v.jsxs)("form",{onSubmit:A,children:[Object(v.jsx)("label",{htmlFor:"category",children:"Category"}),Object(v.jsx)("input",{type:"text",name:"category",value:a,required:!0,onChange:function(e){return s(e.target.value)}}),Object(v.jsx)("button",{type:"submit",children:x?"Update":"Create"})]}),Object(v.jsx)("div",{className:"col",children:t.map((function(e){return Object(v.jsxs)("div",{className:"row",children:[Object(v.jsx)("p",{children:e.name}),Object(v.jsxs)("div",{children:[Object(v.jsx)("button",{onClick:function(){return C(e._id,e.name)},children:"Edit"}),Object(v.jsx)("button",{onClick:function(){return _(e._id)},children:"Delete"})]})]},e._id)}))})]})},V={product_id:"",title:"",price:0,description:"Write Your Product Description Here",content:"Explain Your Product Here",category:"",_id:""};var G=function(){var e=Object(r.useContext)(m),t=Object(r.useState)(V),c=Object(d.a)(t,2),n=c[0],a=c[1],s=Object(d.a)(e.categoriesAPI.categories,1)[0],i=Object(r.useState)(!1),o=Object(d.a)(i,2),l=o[0],h=o[1],p=Object(r.useState)(!1),x=Object(d.a)(p,2),f=x[0],g=x[1],y=Object(d.a)(e.userAPI.isAdmin,1)[0],w=Object(d.a)(e.token,1)[0],k=Object(C.f)(),A=Object(C.g)(),_=Object(d.a)(e.productsAPI.products,1)[0],P=Object(r.useState)(!1),S=Object(d.a)(P,2),I=S[0],E=S[1],q=Object(d.a)(e.productsAPI.callback,2),D=q[0],L=q[1];Object(r.useEffect)((function(){A.id?(E(!0),_.forEach((function(e){e._id===A.id&&(a(e),h(e.images))}))):(E(!1),a(V),h(!1))}),[A.id,_]);var F=function(){var e=Object(j.a)(u.a.mark((function e(t){var c,r,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,y){e.next=4;break}return e.abrupt("return",alert("You're not an admin"));case 4:if(c=t.target.files[0]){e.next=7;break}return e.abrupt("return",alert("File not exist."));case 7:if(!(c.size>1048576)){e.next=9;break}return e.abrupt("return",alert("Size too large!"));case 9:if("image/jpeg"===c.type||"image/png"===c.type){e.next=11;break}return e.abrupt("return",alert("File format is incorrect."));case 11:return(r=new FormData).append("file",c),g(!0),e.next=16,b.a.post("/api/upload",r,{headers:{"content-type":"multipart/form-data",Authorization:w}});case 16:n=e.sent,g(!1),h(n.data),e.next=24;break;case 21:e.prev=21,e.t0=e.catch(1),alert(e.t0.response.data.msg);case 24:case"end":return e.stop()}}),e,null,[[1,21]])})));return function(t){return e.apply(this,arguments)}}(),H=function(){var e=Object(j.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,y){e.next=3;break}return e.abrupt("return",alert("You're not an admin"));case 3:return g(!0),e.next=6,b.a.post("/api/destroy",{public_id:l.public_id},{headers:{Authorization:w}});case 6:g(!1),h(!1),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),alert(e.t0.response.data.msg);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),T=function(e){var t=e.target,c=t.name,r=t.value;a(Object(O.a)(Object(O.a)({},n),{},Object(z.a)({},c,r)))},Y=function(){var e=Object(j.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,y){e.next=4;break}return e.abrupt("return",alert("You're not an admin"));case 4:if(l){e.next=6;break}return e.abrupt("return",alert("No Image Upload"));case 6:if(!I){e.next=11;break}return e.next=9,b.a.put("/api/products/".concat(n._id),Object(O.a)(Object(O.a)({},n),{},{images:l}),{headers:{Authorization:w}});case 9:e.next=13;break;case 11:return e.next=13,b.a.post("/api/products",Object(O.a)(Object(O.a)({},n),{},{images:l}),{headers:{Authorization:w}});case 13:L(!D),k.push("/"),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(1),alert(e.t0.response.data.msg);case 20:case"end":return e.stop()}}),e,null,[[1,17]])})));return function(t){return e.apply(this,arguments)}}(),X={display:l?"block":"none"};return Object(v.jsxs)("div",{className:"create_product",children:[Object(v.jsxs)("div",{className:"upload",children:[Object(v.jsx)("input",{type:"file",name:"file",id:"file_up",onChange:F}),f?Object(v.jsx)("div",{id:"file_img",children:Object(v.jsx)(N,{})}):Object(v.jsxs)("div",{id:"file_img",style:X,children:[Object(v.jsx)("img",{src:l?l.url:"",alt:""}),Object(v.jsx)("span",{onClick:H,children:"X"})]})]}),Object(v.jsxs)("form",{onSubmit:Y,children:[Object(v.jsxs)("div",{className:"row",children:[Object(v.jsx)("label",{htmlFor:"product_id",children:"Product ID"}),Object(v.jsx)("input",{type:"text",name:"product_id",id:"product_id",required:!0,value:n.product_id,onChange:T,disabled:I})]}),Object(v.jsxs)("div",{className:"row",children:[Object(v.jsx)("label",{htmlFor:"title",children:"Title"}),Object(v.jsx)("input",{type:"text",name:"title",id:"title",required:!0,value:n.title,onChange:T})]}),Object(v.jsxs)("div",{className:"row",children:[Object(v.jsx)("label",{htmlFor:"price",children:"Price"}),Object(v.jsx)("input",{type:"number",name:"price",id:"price",required:!0,value:n.price,onChange:T})]}),Object(v.jsxs)("div",{className:"row",children:[Object(v.jsx)("label",{htmlFor:"description",children:"Description"}),Object(v.jsx)("textarea",{type:"text",name:"description",id:"description",required:!0,value:n.description,rows:"5",onChange:T})]}),Object(v.jsxs)("div",{className:"row",children:[Object(v.jsx)("label",{htmlFor:"content",children:"Content"}),Object(v.jsx)("textarea",{type:"text",name:"content",id:"content",required:!0,value:n.content,rows:"7",onChange:T})]}),Object(v.jsxs)("div",{className:"row",children:[Object(v.jsx)("label",{htmlFor:"categories",children:"Categories: "}),Object(v.jsxs)("select",{name:"category",value:n.category,onChange:T,children:[Object(v.jsx)("option",{value:"",children:"Please select a category"}),s.map((function(e){return Object(v.jsx)("option",{value:e._id,children:e.name},e._id)}))]})]}),Object(v.jsx)("button",{type:"submit",children:I?"Update":"Create"})]})]})};var Z=function(){var e=Object(r.useContext)(m);return Object(d.a)(e.userAPI.isLogged,1)[0],Object(d.a)(e.userAPI.isAdmin,1)[0],Object(v.jsxs)(C.c,{children:[Object(v.jsx)(C.a,{path:"/",exact:!0,component:E}),Object(v.jsx)(C.a,{path:"/detail/:id",exact:!0,component:q}),Object(v.jsx)(C.a,{path:"/login",exact:!0,component:D}),Object(v.jsx)(C.a,{path:"/register",exact:!0,component:L}),Object(v.jsx)(C.a,{path:"/category",exact:!0,component:U}),Object(v.jsx)(C.a,{path:"/create_product",exact:!0,component:G}),Object(v.jsx)(C.a,{path:"/edit_product/:id",exact:!0,component:G}),Object(v.jsx)(C.a,{path:"/history",exact:!0,component:F}),Object(v.jsx)(C.a,{path:"/history/:id",exact:!0,component:H}),Object(v.jsx)(C.a,{path:"/cart",exact:!0,component:K}),Object(v.jsx)(C.a,{path:"*",exact:!0,component:M})]})};var W=function(){return Object(v.jsx)(g,{children:Object(v.jsx)(i.a,{children:Object(v.jsxs)("div",{className:"App",children:[Object(v.jsx)(A,{}),Object(v.jsx)(Z,{})]})})})};s.a.render(Object(v.jsx)(W,{}),document.getElementById("root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.9f4f2ffe.chunk.js.map