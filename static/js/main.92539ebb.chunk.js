(this.webpackJsonpmovies=this.webpackJsonpmovies||[]).push([[0],{39:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n(28),c=n.n(s),r=(n(39),n(18)),i=n(0);var l=function(){return Object(i.jsx)("div",{children:"I am Home Component"})},o=n(13),j=n.n(o),d=n(17),h=n(29),m=n(30),u=n(31),b=n(34),v=n(33),x=n(14),O=n.n(x),p=function(e){Object(b.a)(n,e);var t=Object(v.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).handleDelete=function(e){var t=a.state.movies.filter((function(t){return t._id!=e}));a.setState({movies:t})},a.handleChange=function(e){var t=e.target.value;a.setState({currSearchText:t})},a.handleRate=function(e){var t=e.target.className,n=[];"fas fa-sort-up"==t?n=a.state.movies.sort((function(e,t){return e.dailyRentalRate-t.dailyRentalRate})):"fas fa-sort-down"==t&&(n=a.state.movies.sort((function(e,t){return t.dailyRentalRate-e.dailyRentalRate}))),a.setState({movies:n})},a.handleStock=function(e){var t=e.target.className,n=[];"fas fa-sort-up"==t?n=a.state.movies.sort((function(e,t){return e.numberInStock-t.numberInStock})):"fas fa-sort-down"==t&&(n=a.state.movies.sort((function(e,t){return t.numberInStock-e.numberInStock}))),a.setState({movies:n})},a.handleLimit=function(e){var t=Number(e.target.value);a.setState({limit:t})},a.handlePageNumber=function(e){a.setState({currPage:e})},a.handleGenres=function(e){a.setState({cGenre:e})},a.state={movies:[],currSearchText:"",limit:4,currPage:1,cGenre:"All Genres",genres:[{_id:"acbd",name:"All Genres"}]},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=Object(h.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Component Did Mount"),e.next=3,O.a.get("https://backend-react-movie.herokuapp.com/movies");case 3:return t=e.sent,e.next=6,O.a.get("https://backend-react-movie.herokuapp.com/genres");case 6:n=e.sent,this.setState({movies:t.data.movies,genres:[].concat(Object(d.a)(this.state.genres),Object(d.a)(n.data.genres))});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,n=t.movies,a=t.currSearchText,s=t.currPage,c=t.limit,r=t.cGenre,l=t.genres,o=[];o=""!=a?n.filter((function(e){return e.title.trim().toLowerCase().includes(a)})):n,"All Genres"!=r&&(o=o.filter((function(e){return e.genre.name==r})));for(var j=Math.ceil(o.length/c),d=[],h=0;h<j;h++)d[h]=h+1;var m=c*(s-1),u=c+m;return o=o.slice(m,u),Object(i.jsx)("div",{children:Object(i.jsx)("div",{className:"container ",children:Object(i.jsxs)("div",{className:"row mt-3 container-responsive",children:[Object(i.jsx)("div",{className:"col-3 col-sm-4",children:l.length>1?Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("ul",{className:"list-group",children:l.map((function(t){var n=t.name==r?"list-group-item active":"list-group-item";return Object(i.jsxs)("li",{className:n,onClick:function(){return e.handleGenres(t.name)},children:[" ",t.name," "]},t._id)}))})}):Object(i.jsx)("div",{className:"d-flex justify-content-center mt-3",children:Object(i.jsx)("div",{className:"spinner-border",role:"status",children:Object(i.jsx)("span",{className:"sr-only",children:"Loading..."})})})}),Object(i.jsxs)("div",{className:"col-9 table-responsive",children:[Object(i.jsx)("input",{type:"text",className:"form-control col-3",placeholder:"Enter here",value:this.state.currSearchText,onChange:this.handleChange}),Object(i.jsx)("input",{type:"number",className:"form-control col-3 mt-3",placeholder:"Limit",value:this.state.limit>o.length?o.length:this.state.limit,onChange:this.handleLimit,min:"1",max:n.length}),n.length>0?Object(i.jsxs)("table",{className:"mt-3 table table-striped table-hover md-3 sd-6",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{scope:"col",children:"#"}),Object(i.jsx)("th",{scope:"col",children:"Title"}),Object(i.jsx)("th",{scope:"col",children:"Genre"}),Object(i.jsxs)("th",{scope:"col",children:[Object(i.jsx)("i",{className:"fas fa-sort-up",onClick:this.handleStock}),"Stock",Object(i.jsx)("i",{className:"fas fa-sort-down",onClick:this.handleStock})]}),Object(i.jsxs)("th",{scope:"col",children:[Object(i.jsx)("i",{className:"fas fa-sort-up",onClick:this.handleRate}),"Rate",Object(i.jsx)("i",{className:"fas fa-sort-down",onClick:this.handleRate})]}),Object(i.jsx)("th",{scope:"col",children:"Delete"})]})}),Object(i.jsx)("tbody",{children:o.map((function(t){return Object(i.jsxs)("tr",{className:"movie_item",scope:"row",children:[Object(i.jsx)("td",{}),Object(i.jsx)("td",{children:t.title}),Object(i.jsxs)("td",{children:[t.genre.name," "]}),Object(i.jsxs)("td",{children:[" ",t.numberInStock]}),Object(i.jsx)("td",{children:t.dailyRentalRate}),Object(i.jsx)("td",{children:Object(i.jsx)("button",{className:"btn btn-danger",onClick:function(){return e.handleDelete(t._id)},children:"Delete"})})]},t._id)}))})]}):Object(i.jsx)("div",{className:"d-flex justify-content-center mt-3",children:Object(i.jsx)("div",{className:"spinner-border",role:"status",children:Object(i.jsx)("span",{className:"sr-only",children:"Loading..."})})}),Object(i.jsx)("nav",{"aria-label":"Page navigation example",children:Object(i.jsx)("ul",{className:"pagination justify-content-end",children:d.map((function(t){var n=t==s?"page-item active":"page-item";return Object(i.jsx)("li",{className:n,onClick:function(){return e.handlePageNumber(t)},children:Object(i.jsx)("span",{className:"page-link",children:t})},t)}))})})]})]})})})}}]),n}(a.Component);var f=function(e){var t=e.isAuth;return console.log(t),Object(i.jsx)("div",{children:"I am About Component"})},g=n(9),N=n(2);function k(){return Object(i.jsx)("div",{children:Object(i.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(i.jsxs)("div",{className:"container-fluid",children:[Object(i.jsx)("a",{className:"navbar-brand",href:"#",children:Object(i.jsxs)("h3",{className:"display-6",children:[Object(i.jsx)("img",{src:"https://www.freeiconspng.com/uploads/movie-icon-27.png",alt:"",width:"40",height:"34",className:"d-inline-block align-text-top"}),"Movies"]})}),Object(i.jsx)("div",{className:"collapse navbar-collapse ",children:Object(i.jsxs)("ul",{className:"navbar-nav d-flex",children:[Object(i.jsx)(g.b,{className:"nav-link",to:"/",children:Object(i.jsx)("li",{className:"nav-item ",children:"Home"})}),Object(i.jsx)(g.b,{className:"nav-link",to:"/about",children:Object(i.jsx)("li",{className:"nav-item ",children:"About"})}),Object(i.jsx)(g.b,{className:"nav-link",to:"/movies",children:Object(i.jsx)("li",{className:"nav-item ",children:"Movies"})})]})})]})})})}var S=function(){return Object(i.jsxs)(g.a,{children:[Object(i.jsx)(k,{}),Object(i.jsxs)(N.c,{children:[Object(i.jsx)(N.a,{path:"/",exact:!0,component:l}),Object(i.jsx)(N.a,{path:"/movies",component:p}),Object(i.jsx)(N.a,{path:"/about",render:function(e){return Object(i.jsx)(f,Object(r.a)(Object(r.a)({},e),{},{isAuth:!0}))}})]})]})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,66)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),s(e),c(e),r(e)}))};c.a.render(Object(i.jsx)(S,{}),document.getElementById("root")),C()}},[[65,1,2]]]);
//# sourceMappingURL=main.92539ebb.chunk.js.map