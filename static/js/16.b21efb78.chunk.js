"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[16],{16:function(e,t,n){n.r(t),n.d(t,{default:function(){return o}});var r=n(439),u=n(791),a=n(184),c=function(e){var t=e.onSubmit;return(0,a.jsxs)("form",{onSubmit:t,children:[(0,a.jsx)("input",{name:"search"}),(0,a.jsx)("button",{type:"submit",children:"Search"})]})},i=n(87),s=n(170),l=function(e){var t=e.films;return(0,a.jsx)(s.a,{children:t.map((function(e){var t;return(0,a.jsx)(s.H,{children:(0,a.jsx)(i.rU,{to:"".concat(e.id),children:null!==(t=e.title)&&void 0!==t?t:e.name})},e.id)}))})},o=function(){var e=(0,u.useState)(""),t=(0,r.Z)(e,2),n=t[0],i=t[1],s=(0,u.useState)([]),o=(0,r.Z)(s,2),f=o[0],h=o[1];(0,u.useEffect)((function(){""!==n&&fetch("https://api.themoviedb.org/3/search/movie?api_key=8fd7ea3a669b814effbf3238ac2d6fc5&query=".concat(n,"&language=en-US&page=1&include_adult=false")).then((function(e){return e.json()})).then((function(e){return h(e.results)}))}),[n]);return(0,a.jsxs)("div",{children:[(0,a.jsx)(c,{onSubmit:function(e){e.preventDefault(),i(e.target.elements.search.value),e.target.reset()}}),f.length>0?(0,a.jsx)(l,{films:f}):null]})}}}]);
//# sourceMappingURL=16.b21efb78.chunk.js.map