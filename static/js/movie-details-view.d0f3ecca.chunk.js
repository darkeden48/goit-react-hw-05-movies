"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[353],{31:function(e,i,n){n.r(i),n.d(i,{default:function(){return u}});var r=n(885),s=n(871),t=n(791),o=n(501),l="MovieCard_movieCard__E0Pe8",a="MovieCard_genres_list__0PaYU",c="MovieCard_cardContent__qqA0u",d="MovieCard_additoins__J4GM+",h=n(184);function v(e){var i=e.film;return console.log(i),(0,h.jsxs)("div",{children:[(0,h.jsxs)("div",{className:l,children:[(0,h.jsx)("div",{children:(0,h.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(i.poster_path),alt:"poster",width:300})}),(0,h.jsxs)("div",{className:c,children:[(0,h.jsxs)("h2",{children:[i.original_title," (",i.release_date&&i.release_date.slice(0,4),")"]}),(0,h.jsxs)("p",{children:["User Score: ",10*i.vote_average,"%"]}),(0,h.jsx)("h3",{children:"Overview"}),(0,h.jsx)("p",{children:i.overview}),(0,h.jsx)("h3",{children:"Genres"}),(0,h.jsx)("ul",{className:a,children:i.genres&&i.genres.map((function(e){return(0,h.jsx)("li",{children:e.name},e.id)}))})]})]}),(0,h.jsx)("h2",{children:"Additional information"}),(0,h.jsxs)("ul",{className:d,children:[(0,h.jsx)("li",{children:(0,h.jsx)(o.OL,{to:"cast",children:"Cast"})}),(0,h.jsx)("li",{children:(0,h.jsx)(o.OL,{to:"reviews",children:"Reviews"})})]})]})}function u(){var e=(0,s.TH)(),i=(0,s.s0)(),n=(0,s.UO)().movieId,l=(0,t.useState)([]),a=(0,r.Z)(l,2),c=a[0],d=a[1],u=(0,o.lr)(),_=(0,r.Z)(u,1)[0].get("query");console.log(_),(0,t.useEffect)((function(){c&&fetch("https://api.themoviedb.org/3/movie/".concat(n,"?api_key=070151ea430b4e74dbca9bca592b262c")).then((function(n){var r,s;if(n.ok)return n.json();alert("Sorry page it`s not found"),i(null!==(r=null===e||void 0===e||null===(s=e.state)||void 0===s?void 0:s.from)&&void 0!==r?r:"/")})).then((function(e){return e})).then(d)}),[n]);return(0,h.jsxs)("div",{children:[(0,h.jsx)("button",{type:"button",onClick:function(){var n,r;i(null!==(n=null===e||void 0===e||null===(r=e.state)||void 0===r?void 0:r.from)&&void 0!==n?n:"/")},children:"Go BACK"}),(0,h.jsx)(v,{film:c}),(0,h.jsx)(s.j3,{})]})}}}]);
//# sourceMappingURL=movie-details-view.d0f3ecca.chunk.js.map