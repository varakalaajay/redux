(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{19:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),o=n(3),r=n.n(o),i=(n(19),n(20),n(9)),s=n(10),u=n(14),l=n(13),p=(n(21),n(1)),j=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var c=arguments.length,a=new Array(c),o=0;o<c;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={numOfLaptops:100},e.buyLaptop=function(){e.setState({numOfLaptops:e.state.numOfLaptops-1})},e}return Object(s.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{className:"title",children:"Welcome to Store"}),Object(p.jsxs)("div",{className:"item",children:[Object(p.jsx)("p",{children:"Dell Laptop"}),Object(p.jsxs)("p",{children:["Stock : ",this.state.numOfLaptops]}),Object(p.jsx)("button",{onClick:this.buyLaptop,children:"BUY"})]})]})}}]),n}(c.Component);var d=function(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsx)(j,{})})},m=n(4),h=Object(m.b)({name:"counter",initialState:{value:0},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,t){e.value+=t.payload}}}),b=h.actions,O=(b.increment,b.decrement,b.incrementByAmount,h.reducer),f=Object(m.a)({reducer:{counter:O}}),v=n(12);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(v.a,{store:f,children:Object(p.jsx)(d,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[29,1,2]]]);
//# sourceMappingURL=main.b5868999.chunk.js.map