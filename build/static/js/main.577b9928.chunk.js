(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,n){e.exports=n(49)},34:function(e,t,n){},36:function(e,t,n){},38:function(e,t,n){},40:function(e,t,n){},42:function(e,t,n){},44:function(e,t,n){},46:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(21),c=n.n(o),l=n(5),i=n(52),u=n(54),s=n(53),m=(n(34),n(51)),d=Object(l.b)(function(e){return{orderTotal:e.shoppingCart.cartItems.reduce(function(e,t){return e+t.total},0),count:e.shoppingCart.cartItems.reduce(function(e,t){return e+t.count},0)}})(function(e){e.numItems,e.total;var t=e.orderTotal,n=e.count;return a.a.createElement("header",{className:"shop-header row"},a.a.createElement(m.a,{className:"logo text-dark",to:"/"},"Test Store"),a.a.createElement(m.a,{className:"shopping-cart",to:"/cart"},a.a.createElement("i",{className:"cart-icon fa fa-shopping-cart"}),n," items ($",t,")"))}),f=n(6),E=n(7),p=n(13),b=n(10),h=n(14),g=(n(36),function(e){var t=e.book,n=e.onAddedToCart,r=t.title,o=t.author,c=t.price,l=t.coverImage;return a.a.createElement("div",{className:"book-list-item"},a.a.createElement("div",{className:"book-cover"},a.a.createElement("img",{src:l,alt:"cover"})),a.a.createElement("div",{className:"book-details"},a.a.createElement("span",{className:"book-title"},r),a.a.createElement("div",{className:"book-author"},o),a.a.createElement("div",{className:"book-price"},"$",c),a.a.createElement("button",{onClick:n,className:"btn btn-info add-to-cart"},"Add to cart")))}),O=(n(38),function(e){var t=e.error;return console.log(t),a.a.createElement("div",null,"Error! ",t.message)}),v=(n(40),function(){return a.a.createElement("div",null,"loading...")}),k=a.a.createContext(),A=k.Provider,C=k.Consumer,y=function(){return function(e){return function(t){return a.a.createElement(C,null,function(n){return a.a.createElement(e,Object.assign({},t,{bookstoreService:n}))})}}},T=function(e){return{type:"BOOK_ADDED_TO_CART",payload:e}},_=function(e,t){return function(){t({type:"FETCH_BOOKS_REQUEST"}),e.getBooks().then(function(e){return t({type:"FETCH_BOOKS_SUCCESS",payload:e})}).catch(function(e){return t(function(e){return{type:"FETCH_BOOKS_FAILURE",payload:e}}(e))})}},j=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}},N=(n(42),function(e){function t(){return Object(f.a)(this,t),Object(p.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchBooks()}},{key:"render",value:function(){var e=this.props,t=e.books,n=e.loading,r=e.error,o=e.onAddedToCart;return n?a.a.createElement(v,null):r?a.a.createElement(O,{error:r}):a.a.createElement(I,{onAddedToCart:o,books:t})}}]),t}(r.Component)),I=function(e){var t=e.books,n=e.onAddedToCart;return a.a.createElement("ul",{className:"book-list"},t.map(function(e){return a.a.createElement("li",{key:e.id},a.a.createElement(g,{onAddedToCart:function(){return n(e.id)},book:e}))}))},R=j(y(),Object(l.b)(function(e){var t=e.bookList;return{books:t.books,loading:t.loading,error:t.error}},function(e,t){return{fetchBooks:_(t.bookstoreService,e),onAddedToCart:function(t){return e(T(t))}}}))(N),B=function(){return a.a.createElement("div",null,a.a.createElement(R,null))},S=(n(44),{onDecrease:function(e){return{type:"BOOK_REMOVED_FROM_CART",payload:e}},onIncrease:T,onDelete:function(e){return{type:"ALL_BOOK_REMOVED_FROM_CART",payload:e}}}),D=Object(l.b)(function(e){var t=e.shoppingCart,n=t.cartItems;t.orderTotal;return{items:n,total:n.reduce(function(e,t){return e+t.total},0)}},S)(function(e){var t=e.items,n=e.total,r=e.onIncrease,o=e.onDecrease,c=e.onDelete;return a.a.createElement("div",{className:"shopping-cart-table"},t.length<=0&&a.a.createElement("h4",null,"Your cart is empty. Add something"),a.a.createElement("h2",null,"Your Order"),a.a.createElement("table",{className:"table"},a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"#"),a.a.createElement("th",null,"Item"),a.a.createElement("th",null,"Count"),a.a.createElement("th",null,"Price"),a.a.createElement("th",null,"Action"))),a.a.createElement("tbody",null,t.map(function(e,t){var n=e.id,l=e.title,i=e.count,u=e.total;return a.a.createElement("tr",{key:n},a.a.createElement("td",null,t+1),a.a.createElement("td",null,l),a.a.createElement("td",null,i),a.a.createElement("td",null,u),a.a.createElement("td",null,a.a.createElement("button",{onClick:function(){return c(n)},className:"btn btn-outline-danger btn-sm float-right"},a.a.createElement("i",{className:"fa fa-trash-o"})),a.a.createElement("button",{onClick:function(){return r(n)},className:"btn btn-outline-success btn-sm float-right"},a.a.createElement("i",{className:"fa fa-plus-circle"})),a.a.createElement("button",{onClick:function(){return o(n)},className:"btn btn-outline-warning btn-sm float-right"},a.a.createElement("i",{className:"fa fa-minus-circle"}))))}))),a.a.createElement("div",{className:"total"},"Total: ",n))}),w=function(){return a.a.createElement("div",null,a.a.createElement(D,null))},L=(n(46),function(){return a.a.createElement("main",{role:"main",className:"container"},a.a.createElement(d,{numItems:5,total:210}),a.a.createElement(u.a,null,a.a.createElement(s.a,{path:"/",component:B,exact:!0}),a.a.createElement(s.a,{path:"/cart",component:w})))}),F=function(e){function t(){var e,n;Object(f.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(p.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(a)))).state={hasError:!1},n}return Object(h.a)(t,e),Object(E.a)(t,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?a.a.createElement(O,null):this.props.children}}]),t}(r.Component),K=function(){function e(){Object(f.a)(this,e),this.data=[{id:1,title:"Googling for the Regex",author:"Susan J. Fowler",price:32,coverImage:"https://boyter.org/static/books/Cn1rWcbWcAAgsCA.jpg"},{id:2,title:"Bloated Jabbascript frameworks",author:"Michael T. Nygard",price:45,coverImage:"https://boyter.org/static/books/ChnulxvW0AEUs1J.jpg-large.jpg"},{id:3,title:"Coding on Weekend",author:"Michael T. Nygard",price:60,coverImage:"https://boyter.org/static/books/Cg0x8vnXEAEB2Le.jpg"}]}return Object(E.a)(e,[{key:"getBooks",value:function(){var e=this;return new Promise(function(t,n){setTimeout(function(){return Math.random()>.75?n(new Error("It's a test error to prove error handling. Reload page to see app.")):t(e.data)},700)})}}]),e}(),M=n(9),x=n(24),H=function(e,t){if(void 0===e)return{books:[],error:null,loading:!0};switch(t.type){case"FETCH_BOOKS_REQUEST":return{books:e.books,error:null,loading:!0};case"FETCH_BOOKS_SUCCESS":return{books:t.payload,error:null,loading:!1};case"FETCH_BOOKS_FAILURE":return{books:[],loading:!1,error:t.payload};default:return e.bookList}},U=n(8),J=function(e,t,n){return 0===t.count?[].concat(Object(U.a)(e.slice(0,n)),Object(U.a)(e.slice(n+1))):-1===n?[].concat(Object(U.a)(e),[t]):[].concat(Object(U.a)(e.slice(0,n)),[t],Object(U.a)(e.slice(n+1)))},V=function(e,t,n){var r=e.bookList.books,a=e.shoppingCart.cartItems,o=r.find(function(e){return e.id===t}),c=a.findIndex(function(e){return e.id===t}),l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,r=t.id,a=void 0===r?e.id:r,o=t.count,c=void 0===o?0:o,l=t.title,i=void 0===l?e.title:l,u=t.total;return{id:a,title:i,count:c+n,total:(void 0===u?0:u)+n*e.price}}(o,a[c],n);return{orderTotal:0,cartItems:J(e.shoppingCart.cartItems,l,c)}},W=function(e,t){if(void 0===e)return{cartItems:[],orderTotal:0};switch(t.type){case"BOOK_ADDED_TO_CART":return V(e,t.payload,1);case"BOOK_REMOVED_FROM_CART":return V(e,t.payload,-1);case"ALL_BOOK_REMOVED_FROM_CART":var n=e.shoppingCart.cartItems.find(function(e){return e.id===t.payload});return V(e,t.payload,-n.count);default:return e.shoppingCart}},P=function(e,t){return{shoppingCart:W(e,t),bookList:H(e,t)}},Y=Object(M.c)(P,Object(M.a)(x.a,function(e){return function(e){return function(t){return e("string"===typeof t?{type:t}:t)}}},function(e){return function(e){return function(t){return console.log("LOG",t.type),e(t)}}}));console.log("AAAAAAAAAAAAAAAAAAAa"),Y.dispatch("HELL1O"),Y.dispatch(function(e){setTimeout(function(){return e({type:"DELAYED_ACTION"})},2e3)});var G=Y,Q=new K;c.a.render(a.a.createElement(l.a,{store:G},a.a.createElement(F,null,a.a.createElement(A,{value:Q},a.a.createElement(i.a,null,a.a.createElement(L,null))))),document.getElementById("root"))}},[[25,2,1]]]);
//# sourceMappingURL=main.577b9928.chunk.js.map