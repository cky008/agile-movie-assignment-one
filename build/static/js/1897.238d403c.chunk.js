"use strict";(self.webpackChunkmovies=self.webpackChunkmovies||[]).push([[1897],{1897:function(e,n,s){s.r(n);var r=s(6152),i=s(885),t=s(2791),l=s(1933),o=s(4812),a=s(5209),c=s(6650),x=s(9212),d=s(6501),u=s(340),j=s(2847),h=s(8046),m=s(4565),Z=s(3030),p=s(9515),f=s(7689),v=s(184),b=(0,t.lazy)((function(){return Promise.all([s.e(9824),s.e(6259)]).then(s.bind(s,6259))})),g=(0,t.lazy)((function(){return Promise.all([s.e(5953),s.e(9981)]).then(s.bind(s,9981))})),y={display:"flex",justifyContent:"center",flexWrap:"wrap",listStyle:"none",padding:1.5,margin:0},k={margin:.5};n.default=function(e){var n=e.movie,s=e.casts,w=(0,t.useState)(!1),C=(0,i.Z)(w,2),L=C[0],S=C[1],P=(0,f.UO)().id,_=(0,l.useQuery)(["reviews",{id:P}],Z.tx),z=_.data,O=_.error,R=_.isLoading,E=_.isError;return R?(0,v.jsx)(t.Suspense,{fallback:(0,v.jsx)("h1",{children:"Loading Componment"}),children:(0,v.jsx)(p.default,{})}):E?(0,v.jsx)("h1",{children:O.message}):(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(m.Z,{variant:"h5",component:"h3",children:"Overview"}),(0,v.jsx)(m.Z,{variant:"h6",component:"p",children:n.overview}),(0,v.jsxs)(c.Z,{component:"ul",sx:(0,r.Z)({},y),children:[(0,v.jsx)("li",{children:(0,v.jsx)(a.Z,{label:"Genres",sx:(0,r.Z)({},k),color:"primary"})}),n.genres.map((function(e){return(0,v.jsx)("li",{children:(0,v.jsx)(a.Z,{label:e.name,sx:(0,r.Z)({},k)})},e.name)}))]}),(0,v.jsxs)(c.Z,{component:"ul",sx:(0,r.Z)({},y),children:[(0,v.jsx)(a.Z,{icon:(0,v.jsx)(x.Z,{}),label:"".concat(n.runtime," min.")}),(0,v.jsx)(a.Z,{icon:(0,v.jsx)(d.Z,{}),label:"".concat(n.revenue.toLocaleString())}),(0,v.jsx)(a.Z,{icon:(0,v.jsx)(u.Z,{}),label:"".concat(n.vote_average," (").concat(n.vote_count)}),(0,v.jsx)(a.Z,{label:"Released: ".concat(n.release_date)})]}),(0,v.jsxs)(c.Z,{component:"ul",sx:(0,r.Z)({},y),children:[(0,v.jsx)("li",{children:(0,v.jsx)(a.Z,{label:"Production Countries",sx:(0,r.Z)({},k),color:"primary"})}),n.production_countries.map((function(e){return(0,v.jsx)("li",{children:(0,v.jsx)(a.Z,{label:e.name,sx:(0,r.Z)({},k)})},e.name)}))]}),(0,v.jsx)("br",{}),(0,v.jsx)(t.Suspense,{fallback:(0,v.jsx)("h1",{children:"Loading page"}),children:(0,v.jsx)(g,{castsList:s})}),(0,v.jsxs)(h.Z,{color:"secondary",variant:"extended",onClick:function(){return S(!0)},sx:{position:"fixed",bottom:"1em",right:"1em"},children:[(0,v.jsx)(j.Z,{}),"Reviews"]}),(0,v.jsx)(o.ZP,{anchor:"top",open:L,onClose:function(){return S(!1)},children:(0,v.jsx)(t.Suspense,{fallback:(0,v.jsx)("h1",{children:"Loading page"}),children:(0,v.jsx)(b,{movie:n,reviews:z})})})]})}},9515:function(e,n,s){s.r(n),s.d(n,{default:function(){return t}});s(2791);var r=s(6580),i=s(184);function t(){return(0,i.jsxs)("div",{sx:{display:"flex",justifyContent:"center","& > * + *":{marginLeft:"2em"}},children:[(0,i.jsx)(r.Z,{}),(0,i.jsx)(r.Z,{})]})}}}]);
//# sourceMappingURL=1897.238d403c.chunk.js.map