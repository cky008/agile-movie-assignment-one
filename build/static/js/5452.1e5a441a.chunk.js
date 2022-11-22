/*! For license information please see 5452.1e5a441a.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkmovies=self.webpackChunkmovies||[]).push([[5452],{8085:function(e,n,t){var r=t(7462),o=t(3366),i=t(2791),a=t(6752),s=t(4142),u=t(6780),l=t(7933),c=t(184),d=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function f(e){return"scale(".concat(e,", ").concat(Math.pow(e,2),")")}var p={entering:{opacity:1,transform:f(1)},entered:{opacity:1,transform:"none"}},v="undefined"!==typeof navigator&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),m=i.forwardRef((function(e,n){var t=e.addEndListener,m=e.appear,h=void 0===m||m,g=e.children,y=e.easing,b=e.in,Z=e.onEnter,P=e.onEntered,E=e.onEntering,x=e.onExit,w=e.onExited,M=e.onExiting,C=e.style,S=e.timeout,R=void 0===S?"auto":S,T=e.TransitionComponent,D=void 0===T?a.ZP:T,k=(0,o.Z)(e,d),F=i.useRef(),L=i.useRef(),z=(0,s.Z)(),j=i.useRef(null),O=(0,l.Z)(g.ref,n),H=(0,l.Z)(j,O),N=function(e){return function(n){if(e){var t=j.current;void 0===n?e(t):e(t,n)}}},A=N(E),I=N((function(e,n){(0,u.n)(e);var t,r=(0,u.C)({style:C,timeout:R,easing:y},{mode:"enter"}),o=r.duration,i=r.delay,a=r.easing;"auto"===R?(t=z.transitions.getAutoHeightDuration(e.clientHeight),L.current=t):t=o,e.style.transition=[z.transitions.create("opacity",{duration:t,delay:i}),z.transitions.create("transform",{duration:v?t:.666*t,delay:i,easing:a})].join(","),Z&&Z(e,n)})),K=N(P),W=N(M),_=N((function(e){var n,t=(0,u.C)({style:C,timeout:R,easing:y},{mode:"exit"}),r=t.duration,o=t.delay,i=t.easing;"auto"===R?(n=z.transitions.getAutoHeightDuration(e.clientHeight),L.current=n):n=r,e.style.transition=[z.transitions.create("opacity",{duration:n,delay:o}),z.transitions.create("transform",{duration:v?n:.666*n,delay:v?o:o||.333*n,easing:i})].join(","),e.style.opacity=0,e.style.transform=f(.75),x&&x(e)})),$=N(w);return i.useEffect((function(){return function(){clearTimeout(F.current)}}),[]),(0,c.jsx)(D,(0,r.Z)({appear:h,in:b,nodeRef:j,onEnter:I,onEntered:K,onEntering:A,onExit:_,onExited:$,onExiting:W,addEndListener:function(e){"auto"===R&&(F.current=setTimeout(e,L.current||0)),t&&t(j.current,e)},timeout:"auto"===R?null:R},k,{children:function(e,n){return i.cloneElement(g,(0,r.Z)({style:(0,r.Z)({opacity:0,transform:f(.75),visibility:"exited"!==e||b?void 0:"hidden"},p[e],C,g.props.style),ref:H},n))}}))}));m.muiSupportAuto=!0,n.Z=m},8826:function(e,n,t){var r=t(2791).createContext({});n.Z=r},5452:function(e,n,t){t.d(n,{Z:function(){return J}});var r=t(7462),o=t(3366),i=t(2791),a=(t(7441),t(8182)),s=t(4419),u=t(5783),l=t(277),c=t(5513),d=t(8826),f=t(1217),p=t(5878);function v(e){return(0,f.Z)("MuiList",e)}(0,p.Z)("MuiList",["root","padding","dense","subheader"]);var m=t(184),h=["children","className","component","dense","disablePadding","subheader"],g=(0,l.ZP)("ul",{name:"MuiList",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,!t.disablePadding&&n.padding,t.dense&&n.dense,t.subheader&&n.subheader]}})((function(e){var n=e.ownerState;return(0,r.Z)({listStyle:"none",margin:0,padding:0,position:"relative"},!n.disablePadding&&{paddingTop:8,paddingBottom:8},n.subheader&&{paddingTop:0})})),y=i.forwardRef((function(e,n){var t=(0,c.Z)({props:e,name:"MuiList"}),u=t.children,l=t.className,f=t.component,p=void 0===f?"ul":f,y=t.dense,b=void 0!==y&&y,Z=t.disablePadding,P=void 0!==Z&&Z,E=t.subheader,x=(0,o.Z)(t,h),w=i.useMemo((function(){return{dense:b}}),[b]),M=(0,r.Z)({},t,{component:p,dense:b,disablePadding:P}),C=function(e){var n=e.classes,t={root:["root",!e.disablePadding&&"padding",e.dense&&"dense",e.subheader&&"subheader"]};return(0,s.Z)(t,v,n)}(M);return(0,m.jsx)(d.Z.Provider,{value:w,children:(0,m.jsxs)(g,(0,r.Z)({as:p,className:(0,a.Z)(C.root,l),ref:n,ownerState:M},x,{children:[E,u]}))})})),b=t(7137).Z,Z=t(7933),P=t(3026),E=["actions","autoFocus","autoFocusItem","children","className","disabledItemsFocusable","disableListWrap","onKeyDown","variant"];function x(e,n,t){return e===n?e.firstChild:n&&n.nextElementSibling?n.nextElementSibling:t?null:e.firstChild}function w(e,n,t){return e===n?t?e.firstChild:e.lastChild:n&&n.previousElementSibling?n.previousElementSibling:t?null:e.lastChild}function M(e,n){if(void 0===n)return!0;var t=e.innerText;return void 0===t&&(t=e.textContent),0!==(t=t.trim().toLowerCase()).length&&(n.repeating?t[0]===n.keys[0]:0===t.indexOf(n.keys.join("")))}function C(e,n,t,r,o,i){for(var a=!1,s=o(e,n,!!n&&t);s;){if(s===e.firstChild){if(a)return!1;a=!0}var u=!r&&(s.disabled||"true"===s.getAttribute("aria-disabled"));if(s.hasAttribute("tabindex")&&M(s,i)&&!u)return s.focus(),!0;s=o(e,s,t)}return!1}var S=i.forwardRef((function(e,n){var t=e.actions,a=e.autoFocus,s=void 0!==a&&a,l=e.autoFocusItem,c=void 0!==l&&l,d=e.children,f=e.className,p=e.disabledItemsFocusable,v=void 0!==p&&p,h=e.disableListWrap,g=void 0!==h&&h,S=e.onKeyDown,R=e.variant,T=void 0===R?"selectedMenu":R,D=(0,o.Z)(e,E),k=i.useRef(null),F=i.useRef({keys:[],repeating:!0,previousKeyMatched:!0,lastTime:null});(0,P.Z)((function(){s&&k.current.focus()}),[s]),i.useImperativeHandle(t,(function(){return{adjustStyleForScrollbar:function(e,n){var t=!k.current.style.width;if(e.clientHeight<k.current.clientHeight&&t){var r="".concat(b((0,u.Z)(e)),"px");k.current.style["rtl"===n.direction?"paddingLeft":"paddingRight"]=r,k.current.style.width="calc(100% + ".concat(r,")")}return k.current}}}),[]);var L=(0,Z.Z)(k,n),z=-1;i.Children.forEach(d,(function(e,n){i.isValidElement(e)&&(e.props.disabled||("selectedMenu"===T&&e.props.selected||-1===z)&&(z=n))}));var j=i.Children.map(d,(function(e,n){if(n===z){var t={};return c&&(t.autoFocus=!0),void 0===e.props.tabIndex&&"selectedMenu"===T&&(t.tabIndex=0),i.cloneElement(e,t)}return e}));return(0,m.jsx)(y,(0,r.Z)({role:"menu",ref:L,className:f,onKeyDown:function(e){var n=k.current,t=e.key,r=(0,u.Z)(n).activeElement;if("ArrowDown"===t)e.preventDefault(),C(n,r,g,v,x);else if("ArrowUp"===t)e.preventDefault(),C(n,r,g,v,w);else if("Home"===t)e.preventDefault(),C(n,null,g,v,x);else if("End"===t)e.preventDefault(),C(n,null,g,v,w);else if(1===t.length){var o=F.current,i=t.toLowerCase(),a=performance.now();o.keys.length>0&&(a-o.lastTime>500?(o.keys=[],o.repeating=!0,o.previousKeyMatched=!0):o.repeating&&i!==o.keys[0]&&(o.repeating=!1)),o.lastTime=a,o.keys.push(i);var s=r&&!o.repeating&&M(r,o);o.previousKeyMatched&&(s||C(n,r,!1,v,x,o))?e.preventDefault():o.previousKeyMatched=!1}S&&S(e)},tabIndex:s?0:-1},D,{children:j}))})),R=t(6650),T=t(2977),D=t(8195),k=t(8085),F=t(2939);function L(e){return(0,f.Z)("MuiPopover",e)}(0,p.Z)("MuiPopover",["root","paper"]);var z=["onEntering"],j=["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","className","container","elevation","marginThreshold","open","PaperProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps"];function O(e,n){var t=0;return"number"===typeof n?t=n:"center"===n?t=e.height/2:"bottom"===n&&(t=e.height),t}function H(e,n){var t=0;return"number"===typeof n?t=n:"center"===n?t=e.width/2:"right"===n&&(t=e.width),t}function N(e){return[e.horizontal,e.vertical].map((function(e){return"number"===typeof e?"".concat(e,"px"):e})).join(" ")}function A(e){return"function"===typeof e?e():e}var I=(0,l.ZP)(F.Z,{name:"MuiPopover",slot:"Root",overridesResolver:function(e,n){return n.root}})({}),K=(0,l.ZP)(R.Z,{name:"MuiPopover",slot:"Paper",overridesResolver:function(e,n){return n.paper}})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),W=i.forwardRef((function(e,n){var t=(0,c.Z)({props:e,name:"MuiPopover"}),l=t.action,d=t.anchorEl,f=t.anchorOrigin,p=void 0===f?{vertical:"top",horizontal:"left"}:f,v=t.anchorPosition,h=t.anchorReference,g=void 0===h?"anchorEl":h,y=t.children,b=t.className,P=t.container,E=t.elevation,x=void 0===E?8:E,w=t.marginThreshold,M=void 0===w?16:w,C=t.open,S=t.PaperProps,R=void 0===S?{}:S,F=t.transformOrigin,W=void 0===F?{vertical:"top",horizontal:"left"}:F,_=t.TransitionComponent,$=void 0===_?k.Z:_,B=t.transitionDuration,V=void 0===B?"auto":B,U=t.TransitionProps,X=(U=void 0===U?{}:U).onEntering,Y=(0,o.Z)(t.TransitionProps,z),q=(0,o.Z)(t,j),G=i.useRef(),J=(0,Z.Z)(G,R.ref),Q=(0,r.Z)({},t,{anchorOrigin:p,anchorReference:g,elevation:x,marginThreshold:M,PaperProps:R,transformOrigin:W,TransitionComponent:$,transitionDuration:V,TransitionProps:Y}),ee=function(e){var n=e.classes;return(0,s.Z)({root:["root"],paper:["paper"]},L,n)}(Q),ne=i.useCallback((function(){if("anchorPosition"===g)return v;var e=A(d),n=(e&&1===e.nodeType?e:(0,u.Z)(G.current).body).getBoundingClientRect();return{top:n.top+O(n,p.vertical),left:n.left+H(n,p.horizontal)}}),[d,p.horizontal,p.vertical,v,g]),te=i.useCallback((function(e){return{vertical:O(e,W.vertical),horizontal:H(e,W.horizontal)}}),[W.horizontal,W.vertical]),re=i.useCallback((function(e){var n={width:e.offsetWidth,height:e.offsetHeight},t=te(n);if("none"===g)return{top:null,left:null,transformOrigin:N(t)};var r=ne(),o=r.top-t.vertical,i=r.left-t.horizontal,a=o+n.height,s=i+n.width,u=(0,D.Z)(A(d)),l=u.innerHeight-M,c=u.innerWidth-M;if(o<M){var f=o-M;o-=f,t.vertical+=f}else if(a>l){var p=a-l;o-=p,t.vertical+=p}if(i<M){var v=i-M;i-=v,t.horizontal+=v}else if(s>c){var m=s-c;i-=m,t.horizontal+=m}return{top:"".concat(Math.round(o),"px"),left:"".concat(Math.round(i),"px"),transformOrigin:N(t)}}),[d,g,ne,te,M]),oe=i.useCallback((function(){var e=G.current;if(e){var n=re(e);null!==n.top&&(e.style.top=n.top),null!==n.left&&(e.style.left=n.left),e.style.transformOrigin=n.transformOrigin}}),[re]);i.useEffect((function(){C&&oe()})),i.useImperativeHandle(l,(function(){return C?{updatePosition:function(){oe()}}:null}),[C,oe]),i.useEffect((function(){if(C){var e=(0,T.Z)((function(){oe()})),n=(0,D.Z)(d);return n.addEventListener("resize",e),function(){e.clear(),n.removeEventListener("resize",e)}}}),[d,C,oe]);var ie=V;"auto"!==V||$.muiSupportAuto||(ie=void 0);var ae=P||(d?(0,u.Z)(A(d)).body:void 0);return(0,m.jsx)(I,(0,r.Z)({BackdropProps:{invisible:!0},className:(0,a.Z)(ee.root,b),container:ae,open:C,ref:n,ownerState:Q},q,{children:(0,m.jsx)($,(0,r.Z)({appear:!0,in:C,onEntering:function(e,n){X&&X(e,n),oe()},timeout:ie},Y,{children:(0,m.jsx)(K,(0,r.Z)({elevation:x},R,{ref:J,className:(0,a.Z)(ee.paper,R.className),children:y}))}))}))})),_=t(4142);function $(e){return(0,f.Z)("MuiMenu",e)}(0,p.Z)("MuiMenu",["root","paper","list"]);var B=["onEntering"],V=["autoFocus","children","disableAutoFocusItem","MenuListProps","onClose","open","PaperProps","PopoverClasses","transitionDuration","TransitionProps","variant"],U={vertical:"top",horizontal:"right"},X={vertical:"top",horizontal:"left"},Y=(0,l.ZP)(W,{shouldForwardProp:function(e){return(0,l.FO)(e)||"classes"===e},name:"MuiMenu",slot:"Root",overridesResolver:function(e,n){return n.root}})({}),q=(0,l.ZP)(R.Z,{name:"MuiMenu",slot:"Paper",overridesResolver:function(e,n){return n.paper}})({maxHeight:"calc(100% - 96px)",WebkitOverflowScrolling:"touch"}),G=(0,l.ZP)(S,{name:"MuiMenu",slot:"List",overridesResolver:function(e,n){return n.list}})({outline:0}),J=i.forwardRef((function(e,n){var t=(0,c.Z)({props:e,name:"MuiMenu"}),u=t.autoFocus,l=void 0===u||u,d=t.children,f=t.disableAutoFocusItem,p=void 0!==f&&f,v=t.MenuListProps,h=void 0===v?{}:v,g=t.onClose,y=t.open,b=t.PaperProps,Z=void 0===b?{}:b,P=t.PopoverClasses,E=t.transitionDuration,x=void 0===E?"auto":E,w=t.TransitionProps,M=(w=void 0===w?{}:w).onEntering,C=t.variant,S=void 0===C?"selectedMenu":C,R=(0,o.Z)(t.TransitionProps,B),T=(0,o.Z)(t,V),D=(0,_.Z)(),k="rtl"===D.direction,F=(0,r.Z)({},t,{autoFocus:l,disableAutoFocusItem:p,MenuListProps:h,onEntering:M,PaperProps:Z,transitionDuration:x,TransitionProps:R,variant:S}),L=function(e){var n=e.classes;return(0,s.Z)({root:["root"],paper:["paper"],list:["list"]},$,n)}(F),z=l&&!p&&y,j=i.useRef(null),O=-1;return i.Children.map(d,(function(e,n){i.isValidElement(e)&&(e.props.disabled||("selectedMenu"===S&&e.props.selected||-1===O)&&(O=n))})),(0,m.jsx)(Y,(0,r.Z)({classes:P,onClose:g,anchorOrigin:{vertical:"bottom",horizontal:k?"right":"left"},transformOrigin:k?U:X,PaperProps:(0,r.Z)({component:q},Z,{classes:(0,r.Z)({},Z.classes,{root:L.paper})}),className:L.root,open:y,ref:n,transitionDuration:x,TransitionProps:(0,r.Z)({onEntering:function(e,n){j.current&&j.current.adjustStyleForScrollbar(e,D),M&&M(e,n)}},R),ownerState:F},T,{children:(0,m.jsx)(G,(0,r.Z)({onKeyDown:function(e){"Tab"===e.key&&(e.preventDefault(),g&&g(e,"tabKeyDown"))},actions:j,autoFocus:l&&(-1===O||p),autoFocusItem:z,variant:S},h,{className:(0,a.Z)(L.list,h.className),children:d}))}))}))},1372:function(e,n){var t,r=Symbol.for("react.element"),o=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),l=Symbol.for("react.context"),c=Symbol.for("react.server_context"),d=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),p=Symbol.for("react.suspense_list"),v=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),h=Symbol.for("react.offscreen");function g(e){if("object"===typeof e&&null!==e){var n=e.$$typeof;switch(n){case r:switch(e=e.type){case i:case s:case a:case f:case p:return e;default:switch(e=e&&e.$$typeof){case c:case l:case d:case m:case v:case u:return e;default:return n}}case o:return n}}}t=Symbol.for("react.module.reference")},7441:function(e,n,t){t(1372)}}]);
//# sourceMappingURL=5452.1e5a441a.chunk.js.map