(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(20)},,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(7),s=n.n(r),o=n(2),l=(n(13),n(14),n(1)),u=n.n(l),i=n(3),m="https://mate-api.herokuapp.com",p=function(){var e=Object(i.a)(u.a.mark((function e(){var t,n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(m,"/posts"));case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,a=n.data,e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(i.a)(u.a.mark((function e(t){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(m,"/posts/").concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=(n(16),function(e){var t=e.selectedPostId,n=e.setSelectedPostId,r=e.selectedUserId,s=Object(a.useState)([]),l=Object(o.a)(s,2),m=l[0],f=l[1],d=function(){var e=Object(i.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p();case 2:t=e.sent,0===r?f(t):(n=t.filter((function(e){return e.userId===r})),f(n));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){d()}),[r]),c.a.createElement("div",{className:"PostsList"},c.a.createElement("h2",null,"Posts:"),c.a.createElement("ul",{className:"PostsList__list"},m.map((function(e){return c.a.createElement("li",{key:e.id,className:"PostsList__item"},c.a.createElement("div",null,c.a.createElement("b",null,"[User #",e.userId,"]:"," "),e.title),t===e.id?c.a.createElement("button",{type:"button",className:"PostsList__button button",onClick:function(){n(null)}},"Close"):c.a.createElement("button",{type:"button",className:"PostsList__button button",onClick:function(){n(e.id)}},"Open"))}))))}),b=n(4),E=function(){var e=Object(i.a)(u.a.mark((function e(){var t,n,a,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(m,"/comments"));case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,a=n.data,c=a.filter((function(e){return e.postId})),e.abrupt("return",c);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=n(5),v=(n(17),function(e){var t=e.selectedPostId,n=e.grabUpdatedInfo,r=Object(a.useState)({}),s=Object(o.a)(r,2),l=s[0],u=s[1],i=Object(a.useState)({}),m=Object(o.a)(i,2),p=m[0],f=m[1],d=Object(a.useState)({}),E=Object(o.a)(d,2),v=E[0],_=E[1],j=function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"name":return u(Object(h.a)({},n,a));case"email":return f(Object(h.a)({},n,a));case"body":return _(Object(h.a)({},n,a));default:return null}};return c.a.createElement("form",{onSubmit:function(e){e.preventDefault();var a=Object(b.a)(Object(b.a)(Object(b.a)({postId:t},l),p),v);return n(a),a},className:"NewCommentForm"},c.a.createElement("div",{className:"form-field"},c.a.createElement("input",{type:"text",name:"name",placeholder:"Your name",className:"NewCommentForm__input",onChange:j})),c.a.createElement("div",{className:"form-field"},c.a.createElement("input",{type:"text",name:"email",placeholder:"Your email",className:"NewCommentForm__input",onChange:j})),c.a.createElement("div",{className:"form-field"},c.a.createElement("textarea",{name:"body",placeholder:"Type comment here",className:"NewCommentForm__input",onChange:j})),c.a.createElement("button",{type:"submit",className:"NewCommentForm__submit-button button"},"Add a comment"))}),_=(n(18),function(){return c.a.createElement("div",{className:"Loader"},c.a.createElement("div",{className:"Loader__content"}))}),j=(n(19),function(e){var t=e.selectedPostId,n=Object(a.useState)([]),r=Object(o.a)(n,2),s=r[0],l=r[1],p=Object(a.useState)([]),d=Object(o.a)(p,2),h=d[0],j=d[1],N=Object(a.useState)(!1),O=Object(o.a)(N,2),y=O[0],P=O[1],w=function(){var e=Object(i.a)(u.a.mark((function e(){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E();case 2:n=e.sent,a=n.filter((function(e){return e.postId===t})),j(a);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){(function(){var e=Object(i.a)(u.a.mark((function e(){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(t);case 2:n=e.sent,l(n.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()(),j([])}),[t]),Object(a.useEffect)((function(){w()}),[t]),c.a.createElement("div",{className:"PostDetails"},c.a.createElement("h2",null,"Post details:"),s.length<1?c.a.createElement(_,null):c.a.createElement(c.a.Fragment,null,c.a.createElement("section",{className:"PostDetails__post"},c.a.createElement("p",null,s.title),c.a.createElement("h3",null,"Body"),c.a.createElement("p",null,s.body)),c.a.createElement("section",{className:"PostDetails__comments"},h.length<1?c.a.createElement(_,null):c.a.createElement(c.a.Fragment,null,y?c.a.createElement("button",{type:"button",className:"button",onClick:function(){return P(!1)}},"Hide ".concat(h.length," comments")):c.a.createElement("button",{type:"button",className:"button",onClick:function(){return P(!0)}},"Show ".concat(h.length," comments"))),y&&c.a.createElement("ul",{className:"PostDetails__list"},h.map((function(e){return c.a.createElement("li",{className:"PostDetails__list-item",key:e.id},c.a.createElement("button",{type:"button",className:"PostDetails__remove-button button",onClick:function(){var t;(t=e.id,fetch("".concat(m,"/comments/").concat(t),{method:"DELETE"})).then(w)}},"X"),c.a.createElement("p",null,e.body))}))))),c.a.createElement("section",null,c.a.createElement("div",{className:"PostDetails__form-wrapper"},c.a.createElement(v,{selectedPostId:t,grabUpdatedInfo:function(e){(function(e){return fetch("".concat(m,"/comments"),{method:"POST",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(Object(b.a)({},e))})})(e).then(w)}}))))}),N=function(){var e=Object(a.useState)(0),t=Object(o.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)(0),l=Object(o.a)(s,2),u=l[0],i=l[1];return c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App__header"},c.a.createElement("label",null,"Select a user: \xa0",c.a.createElement("select",{className:"App__user-selector",onChange:function(e){i(+e.target.value)}},c.a.createElement("option",{value:"0"},"All users"),c.a.createElement("option",{value:"1"},"Leanne Graham"),c.a.createElement("option",{value:"2"},"Ervin Howell"),c.a.createElement("option",{value:"3"},"Clementine Bauch"),c.a.createElement("option",{value:"4"},"Patricia Lebsack"),c.a.createElement("option",{value:"5"},"Chelsey Dietrich"),c.a.createElement("option",{value:"6"},"Mrs. Dennis Schulist"),c.a.createElement("option",{value:"7"},"Kurtis Weissnat"),c.a.createElement("option",{value:"8"},"Nicholas Runolfsdottir V"),c.a.createElement("option",{value:"9"},"Glenna Reichert"),c.a.createElement("option",{value:"10"},"Leanne Graham")))),c.a.createElement("main",{className:"App__main"},c.a.createElement("div",{className:"App__sidebar"},c.a.createElement(d,{selectedPostId:n,setSelectedPostId:r,selectedUserId:u})),c.a.createElement("div",{className:"App__content"},!!n&&c.a.createElement(j,{selectedPostId:n}))))};s.a.render(c.a.createElement(N,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.138cc9a6.chunk.js.map