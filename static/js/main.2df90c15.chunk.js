(this["webpackJsonpdev-app"]=this["webpackJsonpdev-app"]||[]).push([[0],[,,function(e,t,n){e.exports={backdrop:"ErrorModal_backdrop__1xgox",modal:"ErrorModal_modal__1t82c",header:"ErrorModal_header__3Xpo7",content:"ErrorModal_content__3lnNd",actions:"ErrorModal_actions__2N5Hr"}},,,,,,,function(e,t,n){e.exports={button:"Button_button__5tOYZ"}},function(e,t,n){e.exports={card:"Card_card__r3tc6"}},function(e,t,n){e.exports={input:"AddUser_input__3RlcJ"}},function(e,t,n){e.exports={users:"UserList_users__cikI8"}},,,,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(8),r=n.n(a),c=n(13),s=n(4),i=n(1),o=n(5),l=n(9),u=n.n(l),d=n(0),j=function(e){var t=void 0===e.type?"button":e.type;return Object(d.jsx)("button",{className:u.a.button,type:t,onClick:e.onClick,children:e.children})},b=n(10),m=n.n(b),h=function(e){return Object(d.jsx)("div",{className:"".concat(m.a.card," ").concat(e.className),children:e.children})},O=n(2),p=n.n(O),x=function(e){return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:p.a.backdrop}),Object(d.jsxs)(h,{className:p.a.modal,children:[Object(d.jsx)("header",{className:p.a.header,children:Object(d.jsx)("h2",{children:e.title})}),Object(d.jsx)("div",{className:p.a.content,children:Object(d.jsx)("p",{children:e.message})}),Object(d.jsx)("footer",{className:p.a.actions,children:Object(d.jsx)(j,{type:"button",onClick:e.onClick,children:"Okay"})})]})]})},g=n(11),_=n.n(g),f=function(e){var t={username:"",age:""},n={title:"",message:""},a=Object(i.useState)(t),r=Object(s.a)(a,2),c=r[0],l=r[1],u=Object(i.useState)(n),b=Object(s.a)(u,2),m=b[0],O=b[1];return Object(d.jsxs)("div",{children:[0!==m.title.trim().length&&0!==m.message.trim().length&&Object(d.jsx)(x,{title:m.title,message:m.message,onClick:function(){O(n)}}),Object(d.jsx)(h,{className:_.a.input,children:Object(d.jsxs)("form",{onSubmit:function(n){n.preventDefault(),0!==c.username.trim().length&&0!==c.age.trim().length?parseFloat(c.age)<1?O({title:"Invalid Age",message:"Please enter a valid age ( greater than 1 )"}):(e.onAddUser(c.username,c.age),l(t)):O({title:"Invalid Input",message:"Please enter a valid username or age ( non-empty values )"})},children:[Object(d.jsx)("label",{htmlFor:"username",children:"Username"}),Object(d.jsx)("input",{type:"text",id:"username",value:c.username,onChange:function(e){return l((function(t){return Object(o.a)(Object(o.a)({},t),{},{username:e.target.value})}))}}),Object(d.jsx)("label",{htmlFor:"age",children:"Age in years"}),Object(d.jsx)("input",{type:"number",id:"age",value:c.age,onChange:function(e){return l((function(t){return Object(o.a)(Object(o.a)({},t),{},{age:e.target.value})}))}}),Object(d.jsx)(j,{type:"submit",children:"Add User"})]})})]})},v=n(12),N=n.n(v),k=function(e){return Object(d.jsx)(h,{className:N.a.users,children:Object(d.jsx)("ul",{children:e.users.map((function(e){return Object(d.jsxs)("li",{children:[e.username," (",e.age," years old)"]},e.id)}))})})};var y=function(){var e=Object(i.useState)([{id:"u1",username:"Somraj",age:"23"}]),t=Object(s.a)(e,2),n=t[0],a=t[1];return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(f,{onAddUser:function(e,t){a((function(n){return[].concat(Object(c.a)(n),[{id:Math.random().toString(),username:e,age:t}])}))}}),Object(d.jsx)(k,{users:n})]})};n(19);r.a.render(Object(d.jsx)(y,{}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.2df90c15.chunk.js.map