import{a as g,h as Kt,k as Jt,l as Fe,m as pt,n as lt,o as Ve,_ as i,p as he,q as Ue,t as K,v as wt,w as Mt,x as Q,y as He,z as Ge,j as s,D as G,E as Ye,T as ae,F as ze,G as re,H as Zt,J as eo,K as Nt,M as to,N as oe,r as Et,i as At,u as Vt,I as Ct,O as oo,B as It,C as $,P as Tt,S as dt,Q as ao,d as ut,R as ro,g as so,U as no,L as lo,c as Lt,e as io}from"./index-bf9256d7.js";import{u as co,a as $t}from"./hooks-84d5f965.js";import{L as Pe,T as it,S as uo,a as po}from"./TextField-6448f22f.js";const mo={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:-1,overflow:"hidden",padding:0,position:"absolute",whiteSpace:"nowrap",width:"1px"},fo=mo;function bo(e,t,o=(a,n)=>a===n){return e.length===t.length&&e.every((a,n)=>o(a,t[n]))}const vo=2;function zt(e,t){return e-t}function Ie(e,t,o){return e==null?t:Math.min(Math.max(t,e),o)}function Pt(e,t){var o;const{index:a}=(o=e.reduce((n,d,m)=>{const b=Math.abs(t-d);return n===null||b<n.distance||b===n.distance?{distance:b,index:m}:n},null))!=null?o:{};return a}function Me(e,t){if(t.current!==void 0&&e.changedTouches){const o=e;for(let a=0;a<o.changedTouches.length;a+=1){const n=o.changedTouches[a];if(n.identifier===t.current)return{x:n.clientX,y:n.clientY}}return!1}return{x:e.clientX,y:e.clientY}}function Be(e,t,o){return(e-t)*100/(o-t)}function go(e,t,o){return(o-t)*e+t}function ho(e){if(Math.abs(e)<1){const o=e.toExponential().split("e-"),a=o[0].split(".")[1];return(a?a.length:0)+parseInt(o[1],10)}const t=e.toString().split(".")[1];return t?t.length:0}function xo(e,t,o){const a=Math.round((e-o)/t)*t+o;return Number(a.toFixed(ho(t)))}function Ot({values:e,newValue:t,index:o}){const a=e.slice();return a[o]=t,a.sort(zt)}function Ne({sliderRef:e,activeIndex:t,setActive:o}){var a,n;const d=Ve(e.current);if(!((a=e.current)!=null&&a.contains(d.activeElement))||Number(d==null||(n=d.activeElement)==null?void 0:n.getAttribute("data-index"))!==t){var m;(m=e.current)==null||m.querySelector(`[type="range"][data-index="${t}"]`).focus()}o&&o(t)}function Ee(e,t){return typeof e=="number"&&typeof t=="number"?e===t:typeof e=="object"&&typeof t=="object"?bo(e,t):!1}const yo={horizontal:{offset:e=>({left:`${e}%`}),leap:e=>({width:`${e}%`})},"horizontal-reverse":{offset:e=>({right:`${e}%`}),leap:e=>({width:`${e}%`})},vertical:{offset:e=>({bottom:`${e}%`}),leap:e=>({height:`${e}%`})}},So=e=>e;let Ae;function ct(){return Ae===void 0&&(typeof CSS<"u"&&typeof CSS.supports=="function"?Ae=CSS.supports("touch-action","none"):Ae=!0),Ae}function ko(e){const{"aria-labelledby":t,defaultValue:o,disabled:a=!1,disableSwap:n=!1,isRtl:d=!1,marks:m=!1,max:b=100,min:u=0,name:y,onChange:A,onChangeCommitted:_,orientation:E="horizontal",rootRef:V,scale:x=So,step:h=1,tabIndex:j,value:w}=e,P=g.useRef(),[p,C]=g.useState(-1),[ue,ee]=g.useState(-1),[xe,ye]=g.useState(!1),se=g.useRef(0),[Y,te]=Kt({controlled:w,default:o??u,name:"Slider"}),J=A&&((r,l,c)=>{const f=r.nativeEvent||r,O=new f.constructor(f.type,f);Object.defineProperty(O,"target",{writable:!0,value:{value:l,name:y}}),A(O,l,c)}),ne=Array.isArray(Y);let M=ne?Y.slice().sort(zt):[Y];M=M.map(r=>Ie(r,u,b));const Se=m===!0&&h!==null?[...Array(Math.floor((b-u)/h)+1)].map((r,l)=>({value:u+h*l})):m||[],D=Se.map(r=>r.value),{isFocusVisibleRef:Oe,onBlur:W,onFocus:q,ref:We}=Jt(),[Re,pe]=g.useState(-1),z=g.useRef(),_e=Fe(We,z),ke=Fe(V,_e),je=r=>l=>{var c;const f=Number(l.currentTarget.getAttribute("data-index"));q(l),Oe.current===!0&&pe(f),ee(f),r==null||(c=r.onFocus)==null||c.call(r,l)},qe=r=>l=>{var c;W(l),Oe.current===!1&&pe(-1),ee(-1),r==null||(c=r.onBlur)==null||c.call(r,l)};pt(()=>{if(a&&z.current.contains(document.activeElement)){var r;(r=document.activeElement)==null||r.blur()}},[a]),a&&p!==-1&&C(-1),a&&Re!==-1&&pe(-1);const me=r=>l=>{var c;(c=r.onChange)==null||c.call(r,l);const f=Number(l.currentTarget.getAttribute("data-index")),O=M[f],F=D.indexOf(O);let v=l.target.valueAsNumber;if(Se&&h==null){const k=D[D.length-1];v>k?v=k:v<D[0]?v=D[0]:v=v<O?D[F-1]:D[F+1]}if(v=Ie(v,u,b),ne){n&&(v=Ie(v,M[f-1]||-1/0,M[f+1]||1/0));const k=v;v=Ot({values:M,newValue:v,index:f});let T=f;n||(T=v.indexOf(k)),Ne({sliderRef:z,activeIndex:T})}te(v),pe(f),J&&!Ee(v,Y)&&J(l,v,f),_&&_(l,v)},le=g.useRef();let fe=E;d&&E==="horizontal"&&(fe+="-reverse");const be=({finger:r,move:l=!1})=>{const{current:c}=z,{width:f,height:O,bottom:F,left:v}=c.getBoundingClientRect();let k;fe.indexOf("vertical")===0?k=(F-r.y)/O:k=(r.x-v)/f,fe.indexOf("-reverse")!==-1&&(k=1-k);let T;if(T=go(k,u,b),h)T=xo(T,h,u);else{const Ce=Pt(D,T);T=D[Ce]}T=Ie(T,u,b);let X=0;if(ne){l?X=le.current:X=Pt(M,T),n&&(T=Ie(T,M[X-1]||-1/0,M[X+1]||1/0));const Ce=T;T=Ot({values:M,newValue:T,index:X}),n&&l||(X=T.indexOf(Ce),le.current=X)}return{newValue:T,activeIndex:X}},ie=lt(r=>{const l=Me(r,P);if(!l)return;if(se.current+=1,r.type==="mousemove"&&r.buttons===0){U(r);return}const{newValue:c,activeIndex:f}=be({finger:l,move:!0});Ne({sliderRef:z,activeIndex:f,setActive:C}),te(c),!xe&&se.current>vo&&ye(!0),J&&!Ee(c,Y)&&J(r,c,f)}),U=lt(r=>{const l=Me(r,P);if(ye(!1),!l)return;const{newValue:c}=be({finger:l,move:!0});C(-1),r.type==="touchend"&&ee(-1),_&&_(r,c),P.current=void 0,S()}),I=lt(r=>{if(a)return;ct()||r.preventDefault();const l=r.changedTouches[0];l!=null&&(P.current=l.identifier);const c=Me(r,P);if(c!==!1){const{newValue:O,activeIndex:F}=be({finger:c});Ne({sliderRef:z,activeIndex:F,setActive:C}),te(O),J&&!Ee(O,Y)&&J(r,O,F)}se.current=0;const f=Ve(z.current);f.addEventListener("touchmove",ie),f.addEventListener("touchend",U)}),S=g.useCallback(()=>{const r=Ve(z.current);r.removeEventListener("mousemove",ie),r.removeEventListener("mouseup",U),r.removeEventListener("touchmove",ie),r.removeEventListener("touchend",U)},[U,ie]);g.useEffect(()=>{const{current:r}=z;return r.addEventListener("touchstart",I,{passive:ct()}),()=>{r.removeEventListener("touchstart",I,{passive:ct()}),S()}},[S,I]),g.useEffect(()=>{a&&S()},[a,S]);const ve=r=>l=>{var c;if((c=r.onMouseDown)==null||c.call(r,l),a||l.defaultPrevented||l.button!==0)return;l.preventDefault();const f=Me(l,P);if(f!==!1){const{newValue:F,activeIndex:v}=be({finger:f});Ne({sliderRef:z,activeIndex:v,setActive:C}),te(F),J&&!Ee(F,Y)&&J(l,F,v)}se.current=0;const O=Ve(z.current);O.addEventListener("mousemove",ie),O.addEventListener("mouseup",U)},ce=Be(ne?M[0]:u,u,b),de=Be(M[M.length-1],u,b)-ce,Xe=(r={})=>{const l={onMouseDown:ve(r||{})},c=i({},r,l);return i({ref:ke},c)},N=r=>l=>{var c;(c=r.onMouseOver)==null||c.call(r,l);const f=Number(l.currentTarget.getAttribute("data-index"));ee(f)},ge=r=>l=>{var c;(c=r.onMouseLeave)==null||c.call(r,l),ee(-1)};return{active:p,axis:fe,axisProps:yo,dragging:xe,focusedThumbIndex:Re,getHiddenInputProps:(r={})=>{var l;const c={onChange:me(r||{}),onFocus:je(r||{}),onBlur:qe(r||{})},f=i({},r,c);return i({tabIndex:j,"aria-labelledby":t,"aria-orientation":E,"aria-valuemax":x(b),"aria-valuemin":x(u),name:y,type:"range",min:e.min,max:e.max,step:e.step===null&&e.marks?"any":(l=e.step)!=null?l:void 0,disabled:a},f,{style:i({},fo,{direction:d?"rtl":"ltr",width:"100%",height:"100%"})})},getRootProps:Xe,getThumbProps:(r={})=>{const l={onMouseOver:N(r||{}),onMouseLeave:ge(r||{})};return i({},r,l)},marks:Se,open:ue,range:ne,rootRef:ke,trackLeap:de,trackOffset:ce,values:M,getThumbStyle:r=>({pointerEvents:p!==-1&&p!==r?"none":void 0})}}const Co=he("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]),Rt=Co;function Io(e){return Ue("MuiListItemButton",e)}const To=he("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]),Te=To,Lo=["alignItems","autoFocus","component","children","dense","disableGutters","divider","focusVisibleClassName","selected","className"],$o=(e,t)=>{const{ownerState:o}=e;return[t.root,o.dense&&t.dense,o.alignItems==="flex-start"&&t.alignItemsFlexStart,o.divider&&t.divider,!o.disableGutters&&t.gutters]},Po=e=>{const{alignItems:t,classes:o,dense:a,disabled:n,disableGutters:d,divider:m,selected:b}=e,y=Ye({root:["root",a&&"dense",!d&&"gutters",m&&"divider",n&&"disabled",t==="flex-start"&&"alignItemsFlexStart",b&&"selected"]},Io,o);return i({},o,y)},Oo=K(wt,{shouldForwardProp:e=>Mt(e)||e==="classes",name:"MuiListItemButton",slot:"Root",overridesResolver:$o})(({theme:e,ownerState:t})=>i({display:"flex",flexGrow:1,justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minWidth:0,boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${Te.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:Q(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${Te.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:Q(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${Te.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:Q(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:Q(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${Te.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${Te.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity}},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},t.alignItems==="flex-start"&&{alignItems:"flex-start"},!t.disableGutters&&{paddingLeft:16,paddingRight:16},t.dense&&{paddingTop:4,paddingBottom:4})),Ro=g.forwardRef(function(t,o){const a=He({props:t,name:"MuiListItemButton"}),{alignItems:n="center",autoFocus:d=!1,component:m="div",children:b,dense:u=!1,disableGutters:y=!1,divider:A=!1,focusVisibleClassName:_,selected:E=!1,className:V}=a,x=Ge(a,Lo),h=g.useContext(Pe),j=g.useMemo(()=>({dense:u||h.dense||!1,alignItems:n,disableGutters:y}),[n,h.dense,u,y]),w=g.useRef(null);pt(()=>{d&&w.current&&w.current.focus()},[d]);const P=i({},a,{alignItems:n,dense:j.dense,disableGutters:y,divider:A,selected:E}),p=Po(P),C=Fe(w,o);return s.jsx(Pe.Provider,{value:j,children:s.jsx(Oo,i({ref:C,href:x.href||x.to,component:(x.href||x.to)&&m==="div"?"button":m,focusVisibleClassName:G(p.focusVisible,_),ownerState:P,className:G(p.root,V)},x,{classes:p,children:b}))})}),_o=Ro,jo=he("MuiListItemIcon",["root","alignItemsFlexStart"]),_t=jo;function wo(e){return Ue("MuiListItemText",e)}const Mo=he("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),De=Mo,No=["children","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"],Eo=e=>{const{classes:t,inset:o,primary:a,secondary:n,dense:d}=e;return Ye({root:["root",o&&"inset",d&&"dense",a&&n&&"multiline"],primary:["primary"],secondary:["secondary"]},wo,t)},Ao=K("div",{name:"MuiListItemText",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[{[`& .${De.primary}`]:t.primary},{[`& .${De.secondary}`]:t.secondary},t.root,o.inset&&t.inset,o.primary&&o.secondary&&t.multiline,o.dense&&t.dense]}})(({ownerState:e})=>i({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},e.primary&&e.secondary&&{marginTop:6,marginBottom:6},e.inset&&{paddingLeft:56})),Vo=g.forwardRef(function(t,o){const a=He({props:t,name:"MuiListItemText"}),{children:n,className:d,disableTypography:m=!1,inset:b=!1,primary:u,primaryTypographyProps:y,secondary:A,secondaryTypographyProps:_}=a,E=Ge(a,No),{dense:V}=g.useContext(Pe);let x=u??n,h=A;const j=i({},a,{disableTypography:m,inset:b,primary:!!x,secondary:!!h,dense:V}),w=Eo(j);return x!=null&&x.type!==ae&&!m&&(x=s.jsx(ae,i({variant:V?"body2":"body1",className:w.primary,component:y!=null&&y.variant?void 0:"span",display:"block"},y,{children:x}))),h!=null&&h.type!==ae&&!m&&(h=s.jsx(ae,i({variant:"body2",className:w.secondary,color:"text.secondary",display:"block"},_,{children:h}))),s.jsxs(Ao,i({className:G(w.root,d),ownerState:j,ref:o},E,{children:[x,h]}))}),zo=Vo;function Fo(e){return Ue("MuiMenuItem",e)}const Bo=he("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),Le=Bo,Do=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],Uo=(e,t)=>{const{ownerState:o}=e;return[t.root,o.dense&&t.dense,o.divider&&t.divider,!o.disableGutters&&t.gutters]},Ho=e=>{const{disabled:t,dense:o,divider:a,disableGutters:n,selected:d,classes:m}=e,u=Ye({root:["root",o&&"dense",t&&"disabled",!n&&"gutters",a&&"divider",d&&"selected"]},Fo,m);return i({},m,u)},Go=K(wt,{shouldForwardProp:e=>Mt(e)||e==="classes",name:"MuiMenuItem",slot:"Root",overridesResolver:Uo})(({theme:e,ownerState:t})=>i({},e.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!t.disableGutters&&{paddingLeft:16,paddingRight:16},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${Le.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:Q(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${Le.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:Q(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${Le.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:Q(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:Q(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${Le.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${Le.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${Rt.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${Rt.inset}`]:{marginLeft:52},[`& .${De.root}`]:{marginTop:0,marginBottom:0},[`& .${De.inset}`]:{paddingLeft:36},[`& .${_t.root}`]:{minWidth:36}},!t.dense&&{[e.breakpoints.up("sm")]:{minHeight:"auto"}},t.dense&&i({minHeight:32,paddingTop:4,paddingBottom:4},e.typography.body2,{[`& .${_t.root} svg`]:{fontSize:"1.25rem"}}))),Yo=g.forwardRef(function(t,o){const a=He({props:t,name:"MuiMenuItem"}),{autoFocus:n=!1,component:d="li",dense:m=!1,divider:b=!1,disableGutters:u=!1,focusVisibleClassName:y,role:A="menuitem",tabIndex:_,className:E}=a,V=Ge(a,Do),x=g.useContext(Pe),h=g.useMemo(()=>({dense:m||x.dense||!1,disableGutters:u}),[x.dense,m,u]),j=g.useRef(null);pt(()=>{n&&j.current&&j.current.focus()},[n]);const w=i({},a,{dense:h.dense,divider:b,disableGutters:u}),P=Ho(a),p=Fe(j,o);let C;return a.disabled||(C=_!==void 0?_:-1),s.jsx(Pe.Provider,{value:h,children:s.jsx(Go,i({ref:p,role:A,tabIndex:C,component:d,focusVisibleClassName:G(P.focusVisible,y),className:G(P.root,E)},V,{ownerState:w,classes:P}))})}),$e=Yo,Wo=e=>!e||!ze(e),qo=Wo;function Xo(e){return Ue("MuiSlider",e)}const Qo=he("MuiSlider",["root","active","colorPrimary","colorSecondary","disabled","dragging","focusVisible","mark","markActive","marked","markLabel","markLabelActive","rail","sizeSmall","thumb","thumbColorPrimary","thumbColorSecondary","track","trackInverted","trackFalse","thumbSizeSmall","valueLabel","valueLabelOpen","valueLabelCircle","valueLabelLabel","vertical"]),H=Qo,Ko=e=>{const{open:t}=e;return{offset:G(t&&H.valueLabelOpen),circle:H.valueLabelCircle,label:H.valueLabelLabel}};function Jo(e){const{children:t,className:o,value:a}=e,n=Ko(e);return t?g.cloneElement(t,{className:G(t.props.className)},s.jsxs(g.Fragment,{children:[t.props.children,s.jsx("span",{className:G(n.offset,o),"aria-hidden":!0,children:s.jsx("span",{className:n.circle,children:s.jsx("span",{className:n.label,children:a})})})]})):null}const Zo=["aria-label","aria-valuetext","aria-labelledby","component","components","componentsProps","color","classes","className","disableSwap","disabled","getAriaLabel","getAriaValueText","marks","max","min","name","onChange","onChangeCommitted","orientation","size","step","scale","slotProps","slots","tabIndex","track","value","valueLabelDisplay","valueLabelFormat"];function jt(e){return e}const ea=K("span",{name:"MuiSlider",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[`color${re(o.color)}`],o.size!=="medium"&&t[`size${re(o.size)}`],o.marked&&t.marked,o.orientation==="vertical"&&t.vertical,o.track==="inverted"&&t.trackInverted,o.track===!1&&t.trackFalse]}})(({theme:e,ownerState:t})=>i({borderRadius:12,boxSizing:"content-box",display:"inline-block",position:"relative",cursor:"pointer",touchAction:"none",color:(e.vars||e).palette[t.color].main,WebkitTapHighlightColor:"transparent"},t.orientation==="horizontal"&&i({height:4,width:"100%",padding:"13px 0","@media (pointer: coarse)":{padding:"20px 0"}},t.size==="small"&&{height:2},t.marked&&{marginBottom:20}),t.orientation==="vertical"&&i({height:"100%",width:4,padding:"0 13px","@media (pointer: coarse)":{padding:"0 20px"}},t.size==="small"&&{width:2},t.marked&&{marginRight:44}),{"@media print":{colorAdjust:"exact"},[`&.${H.disabled}`]:{pointerEvents:"none",cursor:"default",color:(e.vars||e).palette.grey[400]},[`&.${H.dragging}`]:{[`& .${H.thumb}, & .${H.track}`]:{transition:"none"}}})),ta=K("span",{name:"MuiSlider",slot:"Rail",overridesResolver:(e,t)=>t.rail})(({ownerState:e})=>i({display:"block",position:"absolute",borderRadius:"inherit",backgroundColor:"currentColor",opacity:.38},e.orientation==="horizontal"&&{width:"100%",height:"inherit",top:"50%",transform:"translateY(-50%)"},e.orientation==="vertical"&&{height:"100%",width:"inherit",left:"50%",transform:"translateX(-50%)"},e.track==="inverted"&&{opacity:1})),oa=K("span",{name:"MuiSlider",slot:"Track",overridesResolver:(e,t)=>t.track})(({theme:e,ownerState:t})=>{const o=e.palette.mode==="light"?Zt(e.palette[t.color].main,.62):eo(e.palette[t.color].main,.5);return i({display:"block",position:"absolute",borderRadius:"inherit",border:"1px solid currentColor",backgroundColor:"currentColor",transition:e.transitions.create(["left","width","bottom","height"],{duration:e.transitions.duration.shortest})},t.size==="small"&&{border:"none"},t.orientation==="horizontal"&&{height:"inherit",top:"50%",transform:"translateY(-50%)"},t.orientation==="vertical"&&{width:"inherit",left:"50%",transform:"translateX(-50%)"},t.track===!1&&{display:"none"},t.track==="inverted"&&{backgroundColor:e.vars?e.vars.palette.Slider[`${t.color}Track`]:o,borderColor:e.vars?e.vars.palette.Slider[`${t.color}Track`]:o})}),aa=K("span",{name:"MuiSlider",slot:"Thumb",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.thumb,t[`thumbColor${re(o.color)}`],o.size!=="medium"&&t[`thumbSize${re(o.size)}`]]}})(({theme:e,ownerState:t})=>i({position:"absolute",width:20,height:20,boxSizing:"border-box",borderRadius:"50%",outline:0,backgroundColor:"currentColor",display:"flex",alignItems:"center",justifyContent:"center",transition:e.transitions.create(["box-shadow","left","bottom"],{duration:e.transitions.duration.shortest})},t.size==="small"&&{width:12,height:12},t.orientation==="horizontal"&&{top:"50%",transform:"translate(-50%, -50%)"},t.orientation==="vertical"&&{left:"50%",transform:"translate(-50%, 50%)"},{"&:before":i({position:"absolute",content:'""',borderRadius:"inherit",width:"100%",height:"100%",boxShadow:(e.vars||e).shadows[2]},t.size==="small"&&{boxShadow:"none"}),"&::after":{position:"absolute",content:'""',borderRadius:"50%",width:42,height:42,top:"50%",left:"50%",transform:"translate(-50%, -50%)"},[`&:hover, &.${H.focusVisible}`]:{boxShadow:`0px 0px 0px 8px ${e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / 0.16)`:Q(e.palette[t.color].main,.16)}`,"@media (hover: none)":{boxShadow:"none"}},[`&.${H.active}`]:{boxShadow:`0px 0px 0px 14px ${e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / 0.16)`:Q(e.palette[t.color].main,.16)}`},[`&.${H.disabled}`]:{"&:hover":{boxShadow:"none"}}})),ra=K(Jo,{name:"MuiSlider",slot:"ValueLabel",overridesResolver:(e,t)=>t.valueLabel})(({theme:e,ownerState:t})=>i({[`&.${H.valueLabelOpen}`]:{transform:`${t.orientation==="vertical"?"translateY(-50%)":"translateY(-100%)"} scale(1)`},zIndex:1,whiteSpace:"nowrap"},e.typography.body2,{fontWeight:500,transition:e.transitions.create(["transform"],{duration:e.transitions.duration.shortest}),transform:`${t.orientation==="vertical"?"translateY(-50%)":"translateY(-100%)"} scale(0)`,position:"absolute",backgroundColor:(e.vars||e).palette.grey[600],borderRadius:2,color:(e.vars||e).palette.common.white,display:"flex",alignItems:"center",justifyContent:"center",padding:"0.25rem 0.75rem"},t.orientation==="horizontal"&&{top:"-10px",transformOrigin:"bottom center","&:before":{position:"absolute",content:'""',width:8,height:8,transform:"translate(-50%, 50%) rotate(45deg)",backgroundColor:"inherit",bottom:0,left:"50%"}},t.orientation==="vertical"&&{right:t.size==="small"?"20px":"30px",top:"50%",transformOrigin:"right center","&:before":{position:"absolute",content:'""',width:8,height:8,transform:"translate(-50%, -50%) rotate(45deg)",backgroundColor:"inherit",right:-8,top:"50%"}},t.size==="small"&&{fontSize:e.typography.pxToRem(12),padding:"0.25rem 0.5rem"})),sa=K("span",{name:"MuiSlider",slot:"Mark",shouldForwardProp:e=>Nt(e)&&e!=="markActive",overridesResolver:(e,t)=>{const{markActive:o}=e;return[t.mark,o&&t.markActive]}})(({theme:e,ownerState:t,markActive:o})=>i({position:"absolute",width:2,height:2,borderRadius:1,backgroundColor:"currentColor"},t.orientation==="horizontal"&&{top:"50%",transform:"translate(-1px, -50%)"},t.orientation==="vertical"&&{left:"50%",transform:"translate(-50%, 1px)"},o&&{backgroundColor:(e.vars||e).palette.background.paper,opacity:.8})),na=K("span",{name:"MuiSlider",slot:"MarkLabel",shouldForwardProp:e=>Nt(e)&&e!=="markLabelActive",overridesResolver:(e,t)=>t.markLabel})(({theme:e,ownerState:t,markLabelActive:o})=>i({},e.typography.body2,{color:(e.vars||e).palette.text.secondary,position:"absolute",whiteSpace:"nowrap"},t.orientation==="horizontal"&&{top:30,transform:"translateX(-50%)","@media (pointer: coarse)":{top:40}},t.orientation==="vertical"&&{left:36,transform:"translateY(50%)","@media (pointer: coarse)":{left:44}},o&&{color:(e.vars||e).palette.text.primary})),la=e=>{const{disabled:t,dragging:o,marked:a,orientation:n,track:d,classes:m,color:b,size:u}=e,y={root:["root",t&&"disabled",o&&"dragging",a&&"marked",n==="vertical"&&"vertical",d==="inverted"&&"trackInverted",d===!1&&"trackFalse",b&&`color${re(b)}`,u&&`size${re(u)}`],rail:["rail"],track:["track"],mark:["mark"],markActive:["markActive"],markLabel:["markLabel"],markLabelActive:["markLabelActive"],valueLabel:["valueLabel"],thumb:["thumb",t&&"disabled",u&&`thumbSize${re(u)}`,b&&`thumbColor${re(b)}`],active:["active"],disabled:["disabled"],focusVisible:["focusVisible"]};return Ye(y,Xo,m)},ia=({children:e})=>e,ca=g.forwardRef(function(t,o){var a,n,d,m,b,u,y,A,_,E,V,x,h,j,w,P,p,C,ue,ee,xe,ye,se,Y;const te=He({props:t,name:"MuiSlider"}),ne=to().direction==="rtl",{"aria-label":M,"aria-valuetext":Se,"aria-labelledby":D,component:Oe="span",components:W={},componentsProps:q={},color:We="primary",classes:Re,className:pe,disableSwap:z=!1,disabled:_e=!1,getAriaLabel:ke,getAriaValueText:je,marks:qe=!1,max:me=100,min:le=0,orientation:fe="horizontal",size:be="medium",step:ie=1,scale:U=jt,slotProps:I,slots:S,track:ve="normal",valueLabelDisplay:ce="off",valueLabelFormat:de=jt}=te,Xe=Ge(te,Zo),N=i({},te,{isRtl:ne,max:me,min:le,classes:Re,disabled:_e,disableSwap:z,orientation:fe,marks:qe,color:We,size:be,step:ie,scale:U,track:ve,valueLabelDisplay:ce,valueLabelFormat:de}),{axisProps:ge,getRootProps:bt,getHiddenInputProps:vt,getThumbProps:gt,open:r,active:l,axis:c,focusedThumbIndex:f,range:O,dragging:F,marks:v,values:k,trackOffset:T,trackLeap:X,getThumbStyle:Ce}=ko(i({},N,{rootRef:o}));N.marked=v.length>0&&v.some(L=>L.label),N.dragging=F,N.focusedThumbIndex=f;const B=la(N),Qe=(a=(n=S==null?void 0:S.root)!=null?n:W.Root)!=null?a:ea,ht=(d=(m=S==null?void 0:S.rail)!=null?m:W.Rail)!=null?d:ta,xt=(b=(u=S==null?void 0:S.track)!=null?u:W.Track)!=null?b:oa,yt=(y=(A=S==null?void 0:S.thumb)!=null?A:W.Thumb)!=null?y:aa,St=(_=(E=S==null?void 0:S.valueLabel)!=null?E:W.ValueLabel)!=null?_:ra,Ke=(V=(x=S==null?void 0:S.mark)!=null?x:W.Mark)!=null?V:sa,Je=(h=(j=S==null?void 0:S.markLabel)!=null?j:W.MarkLabel)!=null?h:na,kt=(w=(P=S==null?void 0:S.input)!=null?P:W.Input)!=null?w:"input",Ze=(p=I==null?void 0:I.root)!=null?p:q.root,Dt=(C=I==null?void 0:I.rail)!=null?C:q.rail,et=(ue=I==null?void 0:I.track)!=null?ue:q.track,tt=(ee=I==null?void 0:I.thumb)!=null?ee:q.thumb,ot=(xe=I==null?void 0:I.valueLabel)!=null?xe:q.valueLabel,Ut=(ye=I==null?void 0:I.mark)!=null?ye:q.mark,Ht=(se=I==null?void 0:I.markLabel)!=null?se:q.markLabel,Gt=(Y=I==null?void 0:I.input)!=null?Y:q.input,Yt=oe({elementType:Qe,getSlotProps:bt,externalSlotProps:Ze,externalForwardedProps:Xe,additionalProps:i({},qo(Qe)&&{as:Oe}),ownerState:i({},N,Ze==null?void 0:Ze.ownerState),className:[B.root,pe]}),Wt=oe({elementType:ht,externalSlotProps:Dt,ownerState:N,className:B.rail}),qt=oe({elementType:xt,externalSlotProps:et,additionalProps:{style:i({},ge[c].offset(T),ge[c].leap(X))},ownerState:i({},N,et==null?void 0:et.ownerState),className:B.track}),at=oe({elementType:yt,getSlotProps:gt,externalSlotProps:tt,ownerState:i({},N,tt==null?void 0:tt.ownerState),className:B.thumb}),Xt=oe({elementType:St,externalSlotProps:ot,ownerState:i({},N,ot==null?void 0:ot.ownerState),className:B.valueLabel}),rt=oe({elementType:Ke,externalSlotProps:Ut,ownerState:N,className:B.mark}),st=oe({elementType:Je,externalSlotProps:Ht,ownerState:N,className:B.markLabel}),Qt=oe({elementType:kt,getSlotProps:vt,externalSlotProps:Gt,ownerState:N});return s.jsxs(Qe,i({},Yt,{children:[s.jsx(ht,i({},Wt)),s.jsx(xt,i({},qt)),v.filter(L=>L.value>=le&&L.value<=me).map((L,R)=>{const nt=Be(L.value,le,me),we=ge[c].offset(nt);let Z;return ve===!1?Z=k.indexOf(L.value)!==-1:Z=ve==="normal"&&(O?L.value>=k[0]&&L.value<=k[k.length-1]:L.value<=k[0])||ve==="inverted"&&(O?L.value<=k[0]||L.value>=k[k.length-1]:L.value>=k[0]),s.jsxs(g.Fragment,{children:[s.jsx(Ke,i({"data-index":R},rt,!ze(Ke)&&{markActive:Z},{style:i({},we,rt.style),className:G(rt.className,Z&&B.markActive)})),L.label!=null?s.jsx(Je,i({"aria-hidden":!0,"data-index":R},st,!ze(Je)&&{markLabelActive:Z},{style:i({},we,st.style),className:G(B.markLabel,st.className,Z&&B.markLabelActive),children:L.label})):null]},R)}),k.map((L,R)=>{const nt=Be(L,le,me),we=ge[c].offset(nt),Z=ce==="off"?ia:St;return s.jsx(Z,i({},!ze(Z)&&{valueLabelFormat:de,valueLabelDisplay:ce,value:typeof de=="function"?de(U(L),R):de,index:R,open:r===R||l===R||ce==="on",disabled:_e},Xt,{children:s.jsx(yt,i({"data-index":R},at,{className:G(B.thumb,at.className,l===R&&B.active,f===R&&B.focusVisible),style:i({},we,Ce(R),at.style),children:s.jsx(kt,i({"data-index":R,"aria-label":ke?ke(R):M,"aria-valuenow":U(L),"aria-labelledby":D,"aria-valuetext":je?je(U(L),R):Se,value:k[R]},Qt))}))}),R)})]}))}),da=ca;var mt={},ua=At;Object.defineProperty(mt,"__esModule",{value:!0});var Ft=mt.default=void 0,pa=ua(Et()),ma=s,fa=(0,pa.default)((0,ma.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");Ft=mt.default=fa;var ft={},ba=At;Object.defineProperty(ft,"__esModule",{value:!0});var Bt=ft.default=void 0,va=ba(Et()),ga=s,ha=(0,va.default)((0,ga.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");Bt=ft.default=ha;const xa=({savedRequest:e,newResult:t,newSort:o})=>{const[a,n]=g.useState({newState:e||"",results:t,sort:o}),[d,m]=g.useState(!1),b=Vt(),u=co(),y=()=>{m(!1),n(p=>({...p,newState:e||"",results:t,sort:o}))},A=p=>{p.stopPropagation(),m(!0)},_=p=>n(C=>({...C,[p.target.name]:p.target.value})),E=p=>{n(C=>({...C,[p.target.name]:p.target.value}))},V=(p,C)=>{n(ue=>({...ue,results:C}))},x=p=>{n(C=>({...C,results:p.target.value===""?"":Number(p.target.value)}))},h=()=>{Number(a.results)<1&&n(p=>({...p,results:1})),Number(a.results)>50&&n(p=>({...p,results:50}))},j=p=>{p.stopPropagation(),u(ro(e))},w=()=>{u(so({search:e,results:a.results,sort:a.sort})),b("/Youtube-clone/home")},P=p=>{p.preventDefault(),u(no({prevState:e,newState:a.newState,results:a.results,sort:a.sort})),m(!1)};return s.jsxs(s.Fragment,{children:[s.jsxs(_o,{onClick:w,alignItems:"center",sx:{mb:1,mr:3,color:"#fff",bgcolor:"#8b0000",":hover":{bgcolor:"#ff0000"}},children:[s.jsx(zo,{primary:e}),s.jsx(Ct,{onClick:A,edge:"end",sx:{color:"#fff",":hover":{color:"#000"}},children:s.jsx(Ft,{})}),s.jsx(Ct,{onClick:j,edge:"end",sx:{color:"#fff",":hover":{color:"#000"}},children:s.jsx(Bt,{})})]}),s.jsx(oo,{"aria-labelledby":"modal-title",open:d,onClose:y,disableEscapeKeyDown:!0,children:s.jsx(It,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",bgcolor:"#fff",boxShadow:24,p:4,"@media (max-width: 600px)":{left:"15%",top:"20%",transform:"translate(-10%, -20%)"}},children:s.jsxs(It,{component:"form",children:[s.jsx(ae,{id:"modal-title",variant:"h4",component:"h4",mb:2,textAlign:"center",children:$.EDIT_A_REQUEST}),s.jsx(it,{value:e,disabled:!0,label:"Request",variant:"filled",fullWidth:!0}),s.jsx(it,{value:a.newState,onChange:E,required:!0,autoFocus:!0,label:"Edited request",name:"newState",fullWidth:!0,sx:{mt:2},color:"error"}),s.jsx(Tt,{id:"demo-select-small-label",sx:{mt:1},children:$.SORT_LABEL}),s.jsxs(uo,{value:a.sort,onChange:_,labelId:"demo-select-small-label",id:"demo-select-small",name:"sort",fullWidth:!0,color:"error",children:[s.jsx($e,{value:$.SORT_OPTIONS.RELEVANCE,children:$.SORT_OPTIONS.RELEVANCE}),s.jsx($e,{value:$.SORT_OPTIONS.DATE,children:$.SORT_OPTIONS.DATE}),s.jsx($e,{value:$.SORT_OPTIONS.RATING,children:$.SORT_OPTIONS.RATING}),s.jsx($e,{value:$.SORT_OPTIONS.VIEW_COUNT,children:$.SORT_OPTIONS.VIEW_COUNT}),s.jsx($e,{value:$.SORT_OPTIONS.TITLE,children:$.SORT_OPTIONS.TITLE})]}),s.jsx(Tt,{id:"input-slider",sx:{mt:3},children:$.SLIDER_LABEL}),s.jsxs(dt,{direction:"row",width:"100%",sx:{mt:1},children:[s.jsx(da,{value:typeof a.results=="number"?a.results:1,onChange:V,"aria-labelledby":"input-slider",defaultValue:12,min:1,max:50,sx:{display:"block",width:"60%",color:"#ff0000"}}),s.jsx(ao,{item:!0,sx:{color:"#ff0000",ml:2},children:s.jsx(it,{value:a.results,onChange:x,onBlur:h,type:"number",inputProps:{inputMode:"numeric",pattern:"[0-9]*",type:"number",step:1,min:0,max:50,"aria-labelledby":"input-slider"},color:"error"})})]}),s.jsxs(dt,{direction:"row",width:"100%",sx:{mt:1},children:[s.jsx(ut,{onClick:y,variant:"contained",sx:{width:"45%",mt:4},color:"error",children:$.MODAL_BUTTON_CLOSE}),s.jsx(ut,{onClick:P,disabled:!(a!=null&&a.newState),variant:"contained",sx:{display:"block",mt:4,ml:"auto",width:"45%"},color:"error",children:$.MODAL_BUTTON_SAVE})]})]})})})]})},ya="_logo_15fhx_1",Sa={logo:ya},Ta=()=>{const e=Vt(),t=$t(d=>d.savedRequests.value),{loading:o}=$t(d=>d.youtube),a=t==null?void 0:t.map((d,m)=>s.jsx(xa,{savedRequest:d.search,newResult:d.results,newSort:d.sort},m)),n=()=>{e("/Youtube-clone"),sessionStorage.removeItem("token")};return o?s.jsx(lo,{}):s.jsxs(s.Fragment,{children:[s.jsxs(dt,{direction:"row",alignItems:"center",justifyContent:"space-around",position:"sticky",top:0,p:2,sx:{"@media (max-width: 460px)":{flexWrap:"wrap"}},children:[s.jsxs(Lt,{to:"/Youtube-clone/home",className:Sa.logo,children:[s.jsx("img",{src:$.LOGO_URL,alt:"logo",height:45}),s.jsx(ae,{component:"h4",variant:"h4",pl:2,pr:1,sx:{"@media (max-width: 670px)":{fontSize:"30px"},"@media (max-width: 525px)":{fontSize:"20px"}},children:$.APP_NAME})]}),s.jsx(ae,{component:"h3",variant:"h3",sx:{"@media (max-width: 670px)":{fontSize:"30px"},"@media (max-width: 525px)":{fontSize:"20px"}},children:$.SAVED_REQUESTS}),s.jsx(ut,{onClick:()=>n(),sx:{fontSize:"21px",textTransform:"none",":hover":{textDecoration:"underline",textUnderlineOffset:"4.5px"}},color:"error",children:$.LOG_OUT})]}),s.jsx(po,{sx:{ml:"12px"},children:a!=null&&a.length?a:s.jsx(ae,{component:"h4",variant:"h4",mt:35,fontStyle:"italic",textAlign:"center",letterSpacing:2,sx:{transition:"0.8s",":hover":{textDecoration:"underline #ff0000",textUnderlineOffset:"8px"}},children:s.jsx(Lt,{to:"/Youtube-clone/home",children:$.ADD_YOUR_FIRST_REQUEST})})}),s.jsx(io,{})]})};export{Ta as default};