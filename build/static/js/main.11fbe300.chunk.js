(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{10:function(t,e,c){t.exports={item:"ProductItem_item__3YiqA",price:"ProductItem_price__1pEiP",actions:"ProductItem_actions__2cNnt"}},11:function(t,e,c){t.exports={notification:"Notification_notification__GOc-Z",error:"Notification_error__myyW2",success:"Notification_success__2WIvw"}},16:function(t,e,c){t.exports={button:"CartButton_button__ZSZuR",badge:"CartButton_badge__19YFa"}},20:function(t,e,c){t.exports={card:"Card_card__LUuQF"}},21:function(t,e,c){t.exports={cart:"Cart_cart__hiZs5"}},24:function(t,e,c){t.exports={header:"MainHeader_header__2zV7g"}},25:function(t,e,c){t.exports={products:"Products_products__10yJ2"}},32:function(t,e,c){},39:function(t,e,c){"use strict";c.r(e);var i=c(19),a=c.n(i),r=(c(32),c(20)),n=c.n(r),s=c(0),o=function(t){return Object(s.jsx)("section",{className:"".concat(n.a.card," ").concat(t.className?t.className:""),children:t.children})},u=c(21),l=c.n(u),d=c(6),j=c.n(d),b=c(3),f=c(7),p=Object(f.b)({name:"cart",initialState:{items:[],totalQuantity:0,cartTotalPRice:0,changed:!1},reducers:{replaceCart:function(t,e){t.totalQuantity=e.payload.totalQuantity,t.items=e.payload.items,t.cartTotalPRice=e.payload.cartTotalPRice+t.cartTotalPRice},addItem:function(t,e){var c=e.payload;t.totalQuantity++,t.changed=!0;var i=t.items.find((function(t){return t.id===c.id}));i?(i.quantity++,t.changed=!0,i.totalPrice=i.price+i.totalPrice,t.cartTotalPRice=t.cartTotalPRice+c.price):(t.cartTotalPRice=t.cartTotalPRice+c.price,t.items.push({id:c.id,price:c.price,quantity:1,totalPrice:c.price,name:c.title}))},removeItem:function(t,e){var c=e.payload,i=t.items.find((function(t){return t.id===c}));t.totalQuantity--,t.changed=!0,t.cartTotalPRice=t.cartTotalPRice-i.price,1===i.quantity?t.items=t.items.filter((function(t){return t.id!==c})):(i.quantity--,i.totalPrice=i.totalPrice-i.price)}}}),m=p.actions,h=p,O=function(t){var e=Object(b.b)(),c=t.item,i=c.title,a=c.quantity,r=c.total,n=c.price,o=c.id;return Object(s.jsxs)("li",{className:j.a.item,children:[Object(s.jsxs)("header",{children:[Object(s.jsx)("h3",{children:i}),Object(s.jsxs)("div",{className:j.a.price,children:["$",r.toFixed(2)," ",Object(s.jsxs)("span",{className:j.a.itemprice,children:["($",n.toFixed(2),"/item)"]})]})]}),Object(s.jsxs)("div",{className:j.a.details,children:[Object(s.jsxs)("div",{className:j.a.quantity,children:["x ",Object(s.jsx)("span",{children:a})]}),Object(s.jsxs)("div",{className:j.a.actions,children:[Object(s.jsx)("button",{onClick:function(){e(m.removeItem(o))},children:"-"}),Object(s.jsx)("button",{onClick:function(){e(m.addItem({id:o,title:i,price:n}))},children:"+"})]})]})]})},x=function(t){var e=Object(b.c)((function(t){return t.cart.items})),c=Object(b.c)((function(t){return t.cart.cartTotalPRice}));return Object(s.jsxs)(o,{className:l.a.cart,children:[Object(s.jsxs)("h3",{children:["Total Cart Price: ",c,"$"]}),Object(s.jsx)("ul",{children:e.map((function(t){return Object(s.jsx)(O,{item:{id:t.id,title:t.name,quantity:t.quantity,total:t.totalPrice,price:t.price}},t.id)}))})]})},_=c(1),y=c(16),v=c.n(y),g=Object(f.b)({name:"ui",initialState:{cartIsVisible:!1,notification:null},reducers:{toggle:function(t){t.cartIsVisible=!t.cartIsVisible},showNotification:function(t,e){t.notification={status:e.payload.status,title:e.payload.title,message:e.payload.message}}}}),N=g.actions,P=g,C=function(t){var e=Object(b.b)(),c=Object(b.c)((function(t){return t.cart.totalQuantity}));return Object(s.jsxs)("button",{className:v.a.button,onClick:function(){e(N.toggle())},children:[Object(s.jsx)("span",{children:"My Cart"}),Object(s.jsx)("span",{className:v.a.badge,children:c})]})},w=c(24),I=c.n(w),R=function(t){return Object(s.jsxs)("header",{className:I.a.header,children:[Object(s.jsx)("h1",{children:"ReduxCart"}),Object(s.jsx)("nav",{children:Object(s.jsx)("ul",{children:Object(s.jsx)("li",{children:Object(s.jsx)(C,{})})})})]})},k=function(t){return Object(s.jsxs)(_.Fragment,{children:[Object(s.jsx)(R,{}),Object(s.jsx)("main",{children:t.children})]})},T=c(10),Q=c.n(T),q=function(t){var e=Object(b.b)(),c=t.title,i=t.price,a=t.description,r=t.id;return Object(s.jsx)("li",{className:Q.a.item,children:Object(s.jsxs)(o,{children:[Object(s.jsxs)("header",{children:[Object(s.jsx)("h3",{children:c}),Object(s.jsxs)("div",{className:Q.a.price,children:["$",i.toFixed(2)]})]}),Object(s.jsx)("p",{children:a}),Object(s.jsx)("div",{className:Q.a.actions,children:Object(s.jsx)("button",{onClick:function(){e(m.addItem({id:r,title:c,price:i}))},children:"Add to Cart"})})]})})},S=c(25),F=c.n(S),E=[{id:"p1",title:"Vegetables",price:10,description:"test data for cart"},{id:"p2",title:"Fruits",price:15,description:"test item for cart"}],V=function(t){return Object(s.jsxs)("section",{className:F.a.products,children:[Object(s.jsx)("h2",{children:"Buy your favorite products"}),Object(s.jsx)("ul",{children:E.map((function(t){return Object(s.jsx)(q,{id:t.id,title:t.title,price:t.price,description:t.description},t.id)}))})]})},J=c(11),B=c.n(J),Z=function(t){var e="";"error"===t.status&&(e=B.a.error),"success"===t.status&&(e=B.a.success);var c="".concat(B.a.notification," ").concat(e);return Object(s.jsxs)("section",{className:c,children:[Object(s.jsx)("h2",{children:t.title}),Object(s.jsx)("p",{children:t.message})]})},M=c(5),$=c(8),A=!0;var U=function(){var t=Object(b.b)(),e=Object(b.c)((function(t){return t.ui.cartIsVisible})),c=Object(b.c)((function(t){return t.ui.notification})),i=Object(b.c)((function(t){return t.cart}));return Object(_.useEffect)((function(){t(function(){var t=Object($.a)(Object(M.a)().mark((function t(e){var c,i;return Object(M.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=function(){var t=Object($.a)(Object(M.a)().mark((function t(){var e,c;return Object(M.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://test-b2576-default-rtdb.firebaseio.com/cart.json");case 2:if((e=t.sent).ok){t.next=5;break}throw new Error("Could not fetch cart data!");case 5:return t.next=7,e.json();case 7:return c=t.sent,t.abrupt("return",c);case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),t.prev=1,t.next=4,c();case 4:i=t.sent,e(m.replaceCart({items:i.items||[],totalQuantity:i.totalQuantity,cartTotalPRice:i.items?i.cartTotalPRice:0})),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e(N.showNotification({status:"error",title:"Error!",message:"Fetching cart data failed!"}));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}())}),[]),Object(_.useEffect)((function(){A?A=!1:i.changed&&t(function(t){return function(){var e=Object($.a)(Object(M.a)().mark((function e(c){var i;return Object(M.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(N.showNotification({status:"pending",title:"Sending...",message:"Sending cart data!"})),i=function(){var e=Object($.a)(Object(M.a)().mark((function e(){var c;return Object(M.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://test-b2576-default-rtdb.firebaseio.com/cart.json",{method:"PUT",body:JSON.stringify({items:t.items,totalQuantity:t.totalQuantity,cartTotalPRice:t.cartTotalPRice})});case 2:if(c=e.sent,console.log(t),c.ok){e.next=6;break}throw new Error("Sending cart data failed.");case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),e.prev=2,e.next=5,i();case 5:c(N.showNotification({status:"success",title:"Success!",message:"Sent cart data successfully!"})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),c(N.showNotification({status:"error",title:"Error!",message:"Sending cart data failed!"}));case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}()}(i))}),[i,t]),Object(s.jsxs)(s.Fragment,{children:[c&&Object(s.jsx)(Z,{status:c.status,title:c.title,message:c.message}),Object(s.jsxs)(k,{children:[e&&Object(s.jsx)(x,{}),Object(s.jsx)(V,{})]})]})},W=Object(f.a)({reducer:{ui:P.reducer,cart:h.reducer}});a.a.createRoot(document.getElementById("root")).render(Object(s.jsx)(b.a,{store:W,children:Object(s.jsx)(U,{})}))},6:function(t,e,c){t.exports={item:"CartItem_item__2o4cQ",details:"CartItem_details__3MQcS",quantity:"CartItem_quantity__BRCMJ",price:"CartItem_price__cnJuk",itemprice:"CartItem_itemprice__2KVo3",actions:"CartItem_actions__1tgcZ"}}},[[39,1,2]]]);
//# sourceMappingURL=main.11fbe300.chunk.js.map