"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[163],{636:function(e,t,r){function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}r.r(t),r.d(t,{default:function(){return p}});var i=r(885),a=r(791),u=r(501),s=r(871),l=r(184);function f(e){var t=e.onSubmit,r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,t){return e+((t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_")}),"")}(),n=(0,a.useState)(""),o=(0,i.Z)(n,2),c=o[0],u=o[1],s=function(e){e.preventDefault(),c&&(t(c),f())},f=function(e){u("")};return(0,l.jsxs)("form",{onSubmit:s,children:[(0,l.jsxs)("label",{htmlFor:r,children:["Film Name",(0,l.jsx)("input",{type:"text",name:"name",value:c,autoComplete:"off",autoFocus:!0,placeholder:"Search movies",onChange:function(e){u(e.currentTarget.value.trim())},pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",id:r})]}),(0,l.jsx)("button",{type:"submit",onClick:s,children:"Search"})]})}function p(e){e.onSubmit;var t=(0,a.useState)([]),r=(0,i.Z)(t,2),n=r[0],o=r[1],p=(0,a.useState)(""),b=(0,i.Z)(p,2),h=b[0],m=b[1],d=(0,s.TH)(),g=(0,s.s0)(),j=(0,u.lr)(),y=(0,i.Z)(j,1)[0].get("query");console.log(d),console.log(y),(0,a.useEffect)((function(){""!==h&&fetch("https://api.themoviedb.org/3/search/movie?query=".concat(h,"&api_key=070151ea430b4e74dbca9bca592b262c")).then((function(e){return e.json()})).then((function(e){return e.results})).then(o)}),[h]);return(0,l.jsxs)("div",{children:[(0,l.jsx)(f,{onSubmit:function(e){m(e),g(c(c({},d),{},{search:"query=".concat(y)}))}}),(0,l.jsx)("ul",{children:n&&n.map((function(e){return(0,l.jsx)("li",{children:(0,l.jsxs)(u.rU,{to:"/movies/".concat(e.id),state:{from:d},children:[e.original_name,e.original_title," "]})},e.id)}))})]})}}}]);
//# sourceMappingURL=movies-view.ac28f773.chunk.js.map