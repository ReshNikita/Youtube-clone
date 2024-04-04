import{p as F,q as G,a1 as c,j as e,t as p,au as Z,G as P,J as $,H as m,_ as a,a as q,y as D,z as J,I as K,D as Y,E as Q,u as X,S as z,C as L,d as oo}from"./index-bf9256d7.js";function to(o){return G("MuiAlert",o)}const so=F("MuiAlert",["root","action","icon","message","filled","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]),b=so,eo=c(e.jsx("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),lo=c(e.jsx("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),ro=c(e.jsx("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),no=c(e.jsx("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),ao=c(e.jsx("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close"),io=["action","children","className","closeText","color","components","componentsProps","icon","iconMapping","onClose","role","severity","slotProps","slots","variant"],co=o=>{const{variant:s,color:l,severity:r,classes:t}=o,d={root:["root",`${s}${P(l||r)}`,`${s}`],icon:["icon"],message:["message"],action:["action"]};return Q(d,to,t)},po=p(Z,{name:"MuiAlert",slot:"Root",overridesResolver:(o,s)=>{const{ownerState:l}=o;return[s.root,s[l.variant],s[`${l.variant}${P(l.color||l.severity)}`]]}})(({theme:o,ownerState:s})=>{const l=o.palette.mode==="light"?$:m,r=o.palette.mode==="light"?m:$,t=s.color||s.severity;return a({},o.typography.body2,{backgroundColor:"transparent",display:"flex",padding:"6px 16px"},t&&s.variant==="standard"&&{color:o.vars?o.vars.palette.Alert[`${t}Color`]:l(o.palette[t].light,.6),backgroundColor:o.vars?o.vars.palette.Alert[`${t}StandardBg`]:r(o.palette[t].light,.9),[`& .${b.icon}`]:o.vars?{color:o.vars.palette.Alert[`${t}IconColor`]}:{color:o.palette[t].main}},t&&s.variant==="outlined"&&{color:o.vars?o.vars.palette.Alert[`${t}Color`]:l(o.palette[t].light,.6),border:`1px solid ${(o.vars||o).palette[t].light}`,[`& .${b.icon}`]:o.vars?{color:o.vars.palette.Alert[`${t}IconColor`]}:{color:o.palette[t].main}},t&&s.variant==="filled"&&a({fontWeight:o.typography.fontWeightMedium},o.vars?{color:o.vars.palette.Alert[`${t}FilledColor`],backgroundColor:o.vars.palette.Alert[`${t}FilledBg`]}:{backgroundColor:o.palette.mode==="dark"?o.palette[t].dark:o.palette[t].main,color:o.palette.getContrastText(o.palette[t].main)}))}),uo=p("div",{name:"MuiAlert",slot:"Icon",overridesResolver:(o,s)=>s.icon})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),go=p("div",{name:"MuiAlert",slot:"Message",overridesResolver:(o,s)=>s.message})({padding:"8px 0",minWidth:0,overflow:"auto"}),B=p("div",{name:"MuiAlert",slot:"Action",overridesResolver:(o,s)=>s.action})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),R={success:e.jsx(eo,{fontSize:"inherit"}),warning:e.jsx(lo,{fontSize:"inherit"}),error:e.jsx(ro,{fontSize:"inherit"}),info:e.jsx(no,{fontSize:"inherit"})},vo=q.forwardRef(function(s,l){var r,t,d,x,C,f;const u=D({props:s,name:"MuiAlert"}),{action:g,children:k,className:E,closeText:A="Close",color:_,components:I={},componentsProps:j={},icon:M,iconMapping:N=R,onClose:h,role:O="alert",severity:v="success",slotProps:S={},slots:y={},variant:w="standard"}=u,T=J(u,io),n=a({},u,{color:_,severity:v,variant:w}),i=co(n),W=(r=(t=y.closeButton)!=null?t:I.CloseButton)!=null?r:K,H=(d=(x=y.closeIcon)!=null?x:I.CloseIcon)!=null?d:ao,U=(C=S.closeButton)!=null?C:j.closeButton,V=(f=S.closeIcon)!=null?f:j.closeIcon;return e.jsxs(po,a({role:O,elevation:0,ownerState:n,className:Y(i.root,E),ref:l},T,{children:[M!==!1?e.jsx(uo,{ownerState:n,className:i.icon,children:M||N[v]||R[v]}):null,e.jsx(go,{ownerState:n,className:i.message,children:k}),g!=null?e.jsx(B,{ownerState:n,className:i.action,children:g}):null,g==null&&h?e.jsx(B,{ownerState:n,className:i.action,children:e.jsx(W,a({size:"small","aria-label":A,title:A,color:"inherit",onClick:h},U,{children:e.jsx(H,a({fontSize:"small"},V))}))}):null]}))}),xo=vo,fo=()=>{const o=X();return e.jsxs(z,{sx:{justifyContent:"space-around"},spacing:1,children:[e.jsx(xo,{sx:{display:"flex",justifyContent:"center",p:0,width:"100%"},severity:"error",children:L.ALERT_MESSAGE}),e.jsx(z,{sx:{alignItems:"center"},children:e.jsx(oo,{variant:"contained",sx:{width:"30%",borderRadius:"50px",bgcolor:" #aa0707",":hover":{backgroundColor:"#fd0808"}},onClick:()=>o("/Youtube-clone"),children:L.BACK})})]})};export{fo as default};