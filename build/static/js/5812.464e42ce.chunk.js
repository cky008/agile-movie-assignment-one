"use strict";(self.webpackChunkmovies=self.webpackChunkmovies||[]).push([[5812],{5812:function(e,n,i){i.r(n);var r=i(2791),t=i(3030),a=i(1933),s=i(7689),o=i(184),l=(0,r.lazy)((function(){return Promise.all([i.e(4157),i.e(5993),i.e(753),i.e(5953),i.e(3867),i.e(4076)]).then(i.bind(i,4076))})),u=(0,r.lazy)((function(){return Promise.all([i.e(4157),i.e(8222)]).then(i.bind(i,9515))})),c=(0,r.lazy)((function(){return Promise.all([i.e(4157),i.e(5993),i.e(753),i.e(610)]).then(i.bind(i,610))}));n.default=function(e){var n=(0,s.UO)().pagination,i=(0,a.useQuery)(["discover",n],t.XT),f=i.data,d=i.error,h=i.isLoading,g=i.isError;if(h)return(0,o.jsx)(r.Suspense,{fallback:(0,o.jsx)("h1",{children:"Loading Componment"}),children:(0,o.jsx)(u,{})});if(g)return(0,o.jsx)("h1",{children:d.message});var m=f.results,p=m.filter((function(e){return e.favorite}));return localStorage.setItem("favorites",JSON.stringify(p)),(0,o.jsx)(r.Suspense,{fallback:(0,o.jsx)("h1",{children:"Loading PageTemplate"}),children:(0,o.jsx)(l,{title:"Discover Movies",movies:m,action:function(e){return(0,o.jsx)(c,{movie:e})},page:"",pagination:n,total_pages:f.total_pages})})}}}]);
//# sourceMappingURL=5812.464e42ce.chunk.js.map