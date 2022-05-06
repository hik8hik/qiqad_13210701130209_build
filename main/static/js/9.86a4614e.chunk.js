(this["webpackJsonpberry-material-react-free"]=this["webpackJsonpberry-material-react-free"]||[]).push([[9],{281:function(e,t,n){"use strict";var r=n(21),a=n(256),o=n(194),i=n(295),c=n(12),l=n(45),s=n(253),b=n(1),u=["color","outline","size","sx"],p=function(e){var t=e.color,n=e.outline,a=e.size,o=e.sx,i=Object(l.a)(e,u),p=Object(r.a)(),d=t&&!n&&{color:p.palette.background.paper,bgcolor:"".concat(t,".main")},h=n&&{color:t?"".concat(t,".main"):"primary.main",bgcolor:p.palette.background.paper,border:"2px solid",borderColor:t?"".concat(t,".main"):"primary.main"},j={};switch(a){case"badge":j={width:p.spacing(3.5),height:p.spacing(3.5)};break;case"xs":j={width:p.spacing(4.25),height:p.spacing(4.25)};break;case"sm":j={width:p.spacing(5),height:p.spacing(5)};break;case"lg":j={width:p.spacing(9),height:p.spacing(9)};break;case"xl":j={width:p.spacing(10.25),height:p.spacing(10.25)};break;case"md":j={width:p.spacing(7.5),height:p.spacing(7.5)};break;default:j={}}return Object(b.jsx)(s.a,Object(c.a)({sx:Object(c.a)(Object(c.a)(Object(c.a)(Object(c.a)({},d),h),j),o)},i))};t.a=function(e){var t=e.title,n=e.link,c=e.icon,l=Object(r.a)();return Object(b.jsx)(a.a,{title:t||"Reference",placement:"left",children:Object(b.jsxs)(o.a,{disableRipple:!0,children:[!c&&Object(b.jsx)(p,{component:i.a,href:n,target:"_blank",alt:"MUI Logo",size:"badge",color:"primary",outline:!0,children:Object(b.jsxs)("svg",{width:"500",height:"500",viewBox:"0 0 500 500",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(b.jsxs)("g",{clipPath:"url(#clip0)",children:[Object(b.jsx)("path",{d:"M100 260.9V131L212.5 195.95V239.25L137.5 195.95V282.55L100 260.9Z",fill:l.palette.primary[800]}),Object(b.jsx)("path",{d:"M212.5 195.95L325 131V260.9L250 304.2L212.5 282.55L287.5 239.25V195.95L212.5 239.25V195.95Z",fill:l.palette.primary.main}),Object(b.jsx)("path",{d:"M212.5 282.55V325.85L287.5 369.15V325.85L212.5 282.55Z",fill:l.palette.primary[800]}),Object(b.jsx)("path",{d:"M287.5 369.15L400 304.2V217.6L362.5 239.25V282.55L287.5 325.85V369.15ZM362.5 195.95V152.65L400 131V174.3L362.5 195.95Z",fill:l.palette.primary.main})]}),Object(b.jsx)("defs",{children:Object(b.jsx)("clipPath",{id:"clip0",children:Object(b.jsx)("rect",{width:"300",height:"238.3",fill:"white",transform:"translate(100 131)"})})})]})}),c&&Object(b.jsx)(p,{component:i.a,href:n,target:"_blank",size:"badge",color:"primary",outline:!0,children:c})]})})}},295:function(e,t,n){"use strict";var r=n(13),a=n(3),o=n(5),i=n(2),c=n(0),l=(n(9),n(7)),s=n(81),b=n(14),u=n(63),p=n(8),d=n(4),h=n(10),j=n(65),m=n(16),f=n(64),O=n(70),g=n(82);function x(e){return Object(O.a)("MuiLink",e)}var v=Object(g.a)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),y=n(1),w=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"],k={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},L=Object(d.a)(f.a,{name:"MuiLink",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["underline".concat(Object(p.a)(n.underline))],"button"===n.component&&t.button]}})((function(e){var t=e.theme,n=e.ownerState,r=Object(b.b)(t,"palette.".concat(function(e){return k[e]||e}(n.color)))||n.color;return Object(i.a)({},"none"===n.underline&&{textDecoration:"none"},"hover"===n.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===n.underline&&{textDecoration:"underline",textDecorationColor:"inherit"!==r?Object(u.a)(r,.4):void 0,"&:hover":{textDecorationColor:"inherit"}},"button"===n.component&&Object(a.a)({position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"}},"&.".concat(v.focusVisible),{outline:"auto"}))})),V=c.forwardRef((function(e,t){var n=Object(h.a)({props:e,name:"MuiLink"}),a=n.className,b=n.color,u=void 0===b?"primary":b,d=n.component,f=void 0===d?"a":d,O=n.onBlur,g=n.onFocus,v=n.TypographyClasses,k=n.underline,V=void 0===k?"always":k,M=n.variant,z=void 0===M?"inherit":M,C=Object(o.a)(n,w),S=Object(j.a)(),R=S.isFocusVisibleRef,D=S.onBlur,B=S.onFocus,F=S.ref,H=c.useState(!1),T=Object(r.a)(H,2),Z=T[0],A=T[1],N=Object(m.a)(t,F),P=Object(i.a)({},n,{color:u,component:f,focusVisible:Z,underline:V,variant:z}),_=function(e){var t=e.classes,n=e.component,r=e.focusVisible,a=e.underline,o={root:["root","underline".concat(Object(p.a)(a)),"button"===n&&"button",r&&"focusVisible"]};return Object(s.a)(o,x,t)}(P);return Object(y.jsx)(L,Object(i.a)({className:Object(l.a)(_.root,a),classes:v,color:u,component:f,onBlur:function(e){D(e),!1===R.current&&A(!1),O&&O(e)},onFocus:function(e){B(e),!0===R.current&&A(!0),g&&g(e)},ref:N,ownerState:P,variant:z},C))}));t.a=V},500:function(e,t,n){"use strict";var r=n(58);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(71)),o=n(1),i=(0,a.default)((0,o.jsx)("path",{d:"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"}),"Link");t.default=i},520:function(e,t,n){"use strict";n.r(t);var r=n(4),a=n(144),o=n(83),i=n(281),c=n(500),l=n.n(c),s=n(1),b=Object(r.a)("iframe")((function(e){return{height:"calc(100vh - 210px)",border:"1px solid",borderColor:e.theme.palette.primary.light}}));t.default=function(){return Object(s.jsx)(o.a,{title:"Tabler Icons",secondary:Object(s.jsx)(i.a,{icon:Object(s.jsx)(l.a,{fontSize:"small"}),link:"https://tablericons.com/"}),children:Object(s.jsx)(a.a,{sx:{overflow:"hidden"},children:Object(s.jsx)(b,{title:"Tabler Icons",width:"100%",src:"https://tablericons.com/"})})})}}}]);
//# sourceMappingURL=9.86a4614e.chunk.js.map