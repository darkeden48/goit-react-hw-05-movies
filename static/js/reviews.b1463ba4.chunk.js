"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[912],{21:function(e,n,t){t.r(n),t.d(n,{default:function(){return a}});var i=t(885),r=t(871),c=t(791),u=t(184);function a(){var e=(0,r.UO)().movieId,n=(0,c.useState)([]),t=(0,i.Z)(n,2),a=t[0],h=t[1];return(0,c.useEffect)((function(){fetch("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=070151ea430b4e74dbca9bca592b262c&language=en-US&page=1")).then((function(e){return e.json()})).then((function(e){return e.results})).then(h)}),[e]),(0,u.jsx)("div",{children:(0,u.jsx)("ul",{children:0!==a.length?a.map((function(e){return(0,u.jsxs)("li",{children:[(0,u.jsxs)("h3",{children:["Author: ",e.author]}),e.content,")"]},e.id)})):(0,u.jsx)("p",{children:"We haven't had any reviews yet"})})})}}}]);
//# sourceMappingURL=reviews.b1463ba4.chunk.js.map