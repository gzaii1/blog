(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[0],{33:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var s=n(1),i=n.n(s),c=n(16),a=n.n(c),r=n(15),o=n(19),u=n(3),l=n(25),d=n(14),m=n(9),b=(n(33),n(0)),j=s.useEffect,h=s.forwardRef,p=s.useImperativeHandle,f=s.useRef,O=s.useState,x=h((function(e,t){var n=f(null),s=e.search,i=e.setSearch,c=e.focus,a=e.setFocus;return p(t,(function(){return n.current})),j((function(){console.log("search",s)}),[s]),Object(b.jsxs)("div",{className:"screen",ref:n,children:[Object(b.jsxs)("div",{className:"screen_border",children:[Object(b.jsxs)("div",{className:"screen_container",children:[Object(b.jsx)("h2",{className:"screen_text",children:"hello world"}),["first","second","third"].map((function(e,t){return Object(b.jsxs)("div",{className:"screen_window","data-index":t,children:[Object(b.jsx)("div",{className:"screen_window_header",children:Object(b.jsxs)("div",{className:"screen_window_header_btns",children:[Object(b.jsx)("span",{className:"btn mini"}),Object(b.jsx)("span",{className:"btn close"})]})}),Object(b.jsx)("div",{className:"screen_window_body",children:Object(b.jsx)("h2",{children:e})})]},t)})),Object(b.jsx)("div",{className:"screen_window screen_board",children:Object(b.jsxs)("div",{className:"screen_board_grid",children:[Object(b.jsxs)("div",{className:"board_header",children:[Object(b.jsxs)("div",{className:"header_left_btns",children:[Object(b.jsx)("span",{className:"header_icon","data-value":"back"}),Object(b.jsx)("span",{className:"header_icon","data-value":"book"}),Object(b.jsx)("span",{className:"header_icon","data-value":"Aa"})]}),Object(b.jsx)("div",{className:"header_middle",children:Object(b.jsx)("span",{children:"hello world"})}),Object(b.jsxs)("div",{className:"header_right_btns",children:[Object(b.jsx)("span",{className:"header_icon","data-value":"check"}),Object(b.jsx)("span",{className:"header_icon","data-value":"add"})]})]}),Object(b.jsx)("div",{className:"board_row",children:"qwertyuiop".split("").map((function(e){return Object(b.jsx)("button",{className:"board_item","data-value":e,children:e},e)}))}),Object(b.jsx)("div",{className:"board_row",children:"asdfghjkl".split("").map((function(e){return Object(b.jsx)("button",{className:"board_item","data-value":e,children:e},e)}))}),Object(b.jsxs)("div",{className:"board_row",children:[Object(b.jsx)("button",{className:"board_item board_spec",children:"\u5206\u8bcd"}),"zxcvbnm".split("").map((function(e){return Object(b.jsx)("button",{className:"board_item","data-value":e,children:e},e)})),Object(b.jsx)("button",{className:"board_item board_spec",children:"\u5220\u9664"})]}),Object(b.jsxs)("div",{className:"board_row",children:[Object(b.jsx)("button",{className:"board_item board_spec",children:"\u7b26"}),Object(b.jsx)("button",{className:"board_item board_spec",children:"123"}),", .".split("").map((function(e){return Object(b.jsx)("button",{className:"board_item","data-value":e,children:e},e)})),Object(b.jsx)("button",{className:"board_item board_spec",children:"\u4e2d"}),Object(b.jsx)("button",{className:"board_item board_spec",children:"\u786e\u5b9a"})]})]})})]}),Object(b.jsx)("span",{className:"screen_logo",children:"MyBook Pro"})]}),Object(b.jsxs)("div",{className:"screen_list",children:[Object(b.jsx)("h2",{className:"list_title",children:"Lorem ipsum dolor sit amet."}),Object(b.jsx)("p",{children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur nostrum consequatur aspernatur ducimus dignissimos. Rerum sed corrupti cum sapiente esse, dignissimos nesciunt nulla amet ipsa qui! Perspiciatis veritatis voluptate incidunt possimus cumque distinctio laborum quo sint, dicta porro error? Temporibus mollitia architecto, ullam cum quaerat, ducimus atque corrupti harum magnam ab libero illo nesciunt ex deserunt et impedit! Aut quis quasi officia ipsam explicabo. Blanditiis voluptatem nihil cum rerum corporis reiciendis laboriosam sit alias ab error qui et deleniti suscipit ad dolores omnis, repellat aut praesentium tenetur ex minus? Praesentium ad vel quia. Delectus consectetur itaque modi rem provident impedit."}),Object(b.jsx)("a",{className:"goto_btn",children:"Go to".split("").map((function(e,t){return Object(b.jsx)("span",{"data-index":t,children:e},e+t)}))})]}),Object(b.jsxs)("div",{className:"real_header",children:[Object(b.jsx)("div",{className:"logo_box"}),Object(b.jsxs)("div",{className:"btn_group",children:[Object(b.jsxs)("label",{children:[Object(b.jsx)("input",{className:c?"focus":"",type:"text",placeholder:"...",value:s,onChange:function(e){return i(e.target.value)},onFocus:function(){return a(!0)},onBlur:function(){return a(!1)}}),Object(b.jsx)("button",{className:"search_btn",children:"search"})]}),Object(b.jsx)("button",{className:"login_btn",children:"login"})]})]})]})})),v=Object(m.b)((function(e){var t=f(null),n=function(){var e=t.current.getBoundingClientRect(),n=e.top,s=n<0?-n:0,i=600,c=e.height-window.screen.height-800;if(s<i){var a=Math.floor(s/i*100)/100;document.documentElement.style.setProperty("--bf-co","".concat(a))}if(s>=i&&s<c){var r=Math.floor((s-i)/(c-i)*100)/100;document.documentElement.style.setProperty("--co","".concat(r))}if(s-300>=c){var o=Math.floor((s-300-c)/500*100)/100;document.documentElement.style.setProperty("--af-co","".concat(o))}},s=O(""),i=Object(d.a)(s,2),c=i[0],a=i[1],r=O(!1),o=Object(d.a)(r,2),u=o[0],l=o[1];return j((function(){return window.history.scrollRestoration="manual",window.addEventListener("scroll",n,!1),n(),function(){window.history.scrollRestoration="auto",window.removeEventListener("scroll",n,!1)}}),[]),Object(b.jsxs)("div",{className:"homepage",children:[Object(b.jsx)(x,{ref:t,setSearch:a,search:c,setFocus:l,focus:u}),Object(b.jsxs)("header",{children:[Object(b.jsx)("div",{className:"logo_box"}),Object(b.jsxs)("div",{className:"btn_group",children:[Object(b.jsxs)("label",{children:[Object(b.jsx)("input",{className:u?"focus":"",type:"text",placeholder:"...",value:c,onChange:function(e){return a(e.target.value)},onFocus:function(){return l(!0)},onBlur:function(){return l(!1)}}),Object(b.jsx)("button",{className:"search_btn",children:"search"})]}),Object(b.jsx)("button",{className:"login_btn",children:"login"})]})]}),Object(b.jsx)("div",{className:"logo_header"}),Object(b.jsx)("div",{style:{height:100}}),Object(b.jsx)("h2",{children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium vitae soluta animi voluptatem, nostrum impedit fugit! Praesentium, minus iusto natus libero earum est voluptates necessitatibus enim ea, modi, maiores voluptas."}),Object(b.jsx)("p",{children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore placeat omnis odit facere quo corporis perferendis! Consequuntur, delectus deleniti voluptas officiis similique sint vero doloremque nostrum odio neque nemo aut dicta commodi officia nam quam non voluptate corporis nobis deserunt et sunt facere cum. A ad ipsa qui dolor, omnis sit quos tempore beatae repudiandae vel officiis corporis voluptates sapiente! Est adipisci aperiam dicta quibusdam, autem, perferendis a possimus quaerat sit laborum impedit ut. Excepturi illum aperiam sapiente iste odio fugiat harum? Accusantium sint, neque iure est perferendis nesciunt corrupti. Itaque iure eum doloribus minima, ut sequi sapiente eligendi quae."})]})})),g=n(5),_=n(11),N=n(2),w=new function e(){var t=this;Object(_.a)(this,e),this.count=1,this.setCount=function(){console.log("\u8c03\u7528",t),t.count=t.count+1},Object(N.o)(this)},q=n(18),y=new(function(){function e(){Object(_.a)(this,e),this.title="shop",this.shoppinglist=[1,2,3],this.price=3,Object(N.p)(this,{title:N.q,computedPrice:N.g,price:N.q,setPrice:N.f})}return Object(q.a)(e,[{key:"computedPrice",get:function(){var e=this;return this.shoppinglist.reduce((function(t,n){return t+=n*e.price}),0)}},{key:"setPrice",value:function(){console.log(this),this.price++}},{key:"getComputePrice",value:function(){var e=this;return this.shoppinglist.reduce((function(t,n){return t+=n*e.price}),0)}}]),e}()),C=n(22),S=n.n(C),k={title:"blog",list:[],count:0},P={HomeStore:w,ShoppingStore:y,BlogStore:Object(N.p)(Object(r.a)(Object(r.a)({},k),{},{get blogList(){return this.list},add:function(e){this.list.push(e)},countAdd:function(){console.log("this.count",this.count),this.count++},get sum(){return this.list.reduce((function(e,t){return e+=t}),0)},fetchValue:S.a.mark((function e(){var t,n,s,i;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new Promise((function(e,t){return setTimeout((function(){return e({code:200,message:"SUCCESS",data:[1,2,3]})}),3e3)})),e.next=3,t;case 3:n=e.sent,s=n.code,i=n.data,200===s&&(this.list=i);case 7:case"end":return e.stop()}}),e,this)}))}),{title:N.q,list:N.q,count:N.q,add:N.f,countAdd:N.f,sum:N.g,fetchValue:N.j}),BlogChildStore:{title:"BlogChildStore"}},B=(new(function(){function e(){Object(_.a)(this,e),this.count=0,this.name="alex",Object(N.o)(this)}return Object(q.a)(e,[{key:"add",value:function(){this.count++}},{key:"changeName",value:function(){this.name=this.name+"a"}}]),e}()),Object(m.b)((function(e){var t=e.list;return Object(b.jsxs)(b.Fragment,{children:[null===t||void 0===t?void 0:t.name,Object(b.jsx)("button",{onClick:function(){return t.add()},children:"add"})]})})),Object(m.b)((function(e){var t=e.list;return Object(b.jsxs)(b.Fragment,{children:[null===t||void 0===t?void 0:t.count,Object(b.jsx)("button",{onClick:function(){return t.changeName()},children:"add"})]})})),P.BlogStore),E=P.BlogChildStore,F=[{path:"/home",component:v},{path:"/Shopping",component:function(e){var t=Object(g.d)((function(){return P.ShoppingStore}));return Object(b.jsx)(g.a,{children:function(){return Object(b.jsxs)(b.Fragment,{children:["\u8d2d\u7269: ",t.computedPrice,Object(b.jsx)("button",{onClick:function(){return t.setPrice()},children:"add"})]})}})}},{path:"/blog",component:Object(m.b)((function(e){var t=i.a.useState(0),n=Object(d.a)(t,2),s=n[0],c=n[1],a=Object(g.d)((function(){return E}));return Object(b.jsxs)(b.Fragment,{children:["Blog: \u6570\u7ec4: ",JSON.stringify(B.blogList),"\u548c: ",B.sum,Object(b.jsx)("input",{type:"text",value:s,onChange:function(e){return c(+e.target.value)}}),Object(b.jsx)("button",{onClick:function(){return B.add(s)},children:"add"}),Object(b.jsx)("button",{onClick:function(){return B.fetchValue()},children:"fetch"}),a.title,Object(b.jsx)("input",{type:"text",value:a.title,onChange:function(e){a.title=e.target.value}}),Object(b.jsx)(o.b,{to:"/home",children:"to home"})]})})),routes:[{path:"/list/:name",component:function(){return Object(b.jsx)(b.Fragment,{children:"this is list"})}}]}],L=function e(t,n){return void 0!==n&&null!==n||(n=""),t.reduce((function(t,s){var i=s.path,c=s.routes,a=void 0===c?[]:c,r=s.component,o=!!a.length;return[].concat(Object(l.a)(o?e(a,n+i):[]),[{path:n+i,component:r}],Object(l.a)(t))}),[])};var A=function(e){var t=e.routes,n=e.prefix;return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(o.a,{children:Object(b.jsxs)(u.d,{children:[L(t,n).map((function(e,t){return Object(b.jsx)(u.b,{path:e.path,render:function(t){return Object(b.jsx)(e.component,Object(r.a)({},t))}},e.path+t)})),Object(b.jsx)(u.a,{from:"/*",to:"/home"})]})})})};n(40);var R=function(e){return Object(b.jsx)(m.a,{store:P,children:Object(b.jsx)(A,{routes:F})})};a.a.render(Object(b.jsx)(R,{}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.193b1df6.chunk.js.map