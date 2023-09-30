import{i as M,h as U,s as y,_ as d,r as n,m as E,a as G,a4 as O,a5 as H,j as o,n as T,p as q,a6 as V,a7 as J,k as Q,v as W,l as Y,a8 as Z,c as K,e as X,a9 as ee,E as oe,aa as te,F,ab as ae,q as P,ac as re,H as C,ad as se,I as ne,ae as ce,af as le,ag as ie,ah as _,J as ue,Q as $,U as de,R as pe,ai as me}from"./index-45fd59ec.js";import{T as w}from"./TextField-5d7fddb3.js";import{T as fe}from"./Tooltip-a71c0b8d.js";function he(e){return M("MuiFormGroup",e)}U("MuiFormGroup",["root","row","error"]);const xe=["className","row"],ge=e=>{const{classes:t,row:a,error:s}=e;return q({root:["root",a&&"row",s&&"error"]},he,t)},Ce=y("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.row&&t.row]}})(({ownerState:e})=>d({display:"flex",flexDirection:"column",flexWrap:"wrap"},e.row&&{flexDirection:"row"})),ve=n.forwardRef(function(t,a){const s=E({props:t,name:"MuiFormGroup"}),{className:c,row:i=!1}=s,m=G(s,xe),p=O(),f=H({props:s,muiFormControl:p,states:["error"]}),h=d({},s,{row:i,error:f.error}),u=ge(h);return o.jsx(Ce,d({className:T(u.root,c),ownerState:h,ref:a},m))}),je=ve,Re=V(o.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),be=V(o.jsx("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked"),ye=y("span")({position:"relative",display:"flex"}),we=y(Re)({transform:"scale(1)"}),Se=y(be)(({theme:e,ownerState:t})=>d({left:0,position:"absolute",transform:"scale(0)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeIn,duration:e.transitions.duration.shortest})},t.checked&&{transform:"scale(1)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.shortest})}));function D(e){const{checked:t=!1,classes:a={},fontSize:s}=e,c=d({},e,{checked:t});return o.jsxs(ye,{className:a.root,ownerState:c,children:[o.jsx(we,{fontSize:s,className:a.background,ownerState:c}),o.jsx(Se,{fontSize:s,className:a.dot,ownerState:c})]})}const Ie=n.createContext(void 0),L=Ie;function ke(){return n.useContext(L)}function Fe(e){return M("MuiRadio",e)}const Ge=U("MuiRadio",["root","checked","disabled","colorPrimary","colorSecondary"]),z=Ge,Pe=["checked","checkedIcon","color","icon","name","onChange","size","className"],_e=e=>{const{classes:t,color:a}=e,s={root:["root",`color${W(a)}`]};return d({},t,q(s,Fe,t))},$e=y(J,{shouldForwardProp:e=>Q(e)||e==="classes",name:"MuiRadio",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[`color${W(a.color)}`]]}})(({theme:e,ownerState:t})=>d({color:(e.vars||e).palette.text.secondary},!t.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${t.color==="default"?e.vars.palette.action.activeChannel:e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:Y(t.color==="default"?e.palette.action.active:e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},t.color!=="default"&&{[`&.${z.checked}`]:{color:(e.vars||e).palette[t.color].main}},{[`&.${z.disabled}`]:{color:(e.vars||e).palette.action.disabled}}));function ze(e,t){return typeof t=="object"&&t!==null?e===t:String(e)===String(t)}const B=o.jsx(D,{checked:!0}),N=o.jsx(D,{}),Be=n.forwardRef(function(t,a){var s,c;const i=E({props:t,name:"MuiRadio"}),{checked:m,checkedIcon:p=B,color:f="primary",icon:h=N,name:u,onChange:v,size:x="medium",className:b}=i,j=G(i,Pe),R=d({},i,{color:f,size:x}),l=_e(R),r=ke();let g=m;const I=Z(v,r&&r.onChange);let k=u;return r&&(typeof g>"u"&&(g=ze(r.value,i.value)),typeof k>"u"&&(k=r.name)),o.jsx($e,d({type:"radio",icon:n.cloneElement(h,{fontSize:(s=N.props.fontSize)!=null?s:x}),checkedIcon:n.cloneElement(p,{fontSize:(c=B.props.fontSize)!=null?c:x}),ownerState:R,classes:l,name:k,checked:g,onChange:I,ref:a,className:T(l.root,b)},j))}),A=Be,Ne=["actions","children","defaultValue","name","onChange","value"],Ae=n.forwardRef(function(t,a){const{actions:s,children:c,defaultValue:i,name:m,onChange:p,value:f}=t,h=G(t,Ne),u=n.useRef(null),[v,x]=K({controlled:f,default:i,name:"RadioGroup"});n.useImperativeHandle(s,()=>({focus:()=>{let l=u.current.querySelector("input:not(:disabled):checked");l||(l=u.current.querySelector("input:not(:disabled)")),l&&l.focus()}}),[]);const b=X(a,u),j=ee(m),R=n.useMemo(()=>({name:j,onChange(l){x(l.target.value),p&&p(l,l.target.value)},value:v}),[j,p,x,v]);return o.jsx(L.Provider,{value:R,children:o.jsx(je,d({role:"radiogroup",ref:b},h,{children:c}))})}),Me=Ae,Ue="_container_ezps6_1",Ee="_hasAccount_ezps6_9",Te="_signIn_ezps6_12",S={container:Ue,hasAccount:Ee,signIn:Te},De=()=>{const[e,t]=n.useState(""),[a,s]=n.useState("female"),[c,i]=n.useState(""),[m,p]=n.useState(""),[f,h]=n.useState(""),[u,v]=n.useState(!1),x=oe(),b=r=>s(r.target.value),j=r=>t(r.target.value===""?"":Number(r.target.value)),R=async r=>{r.preventDefault();try{const{status:g,data:I}=await me.post({}.VITE_APP_REGISTER,{username:c,password:m,email:f,gender:a,age:e});console.log(g,I),x("/")}catch(g){console.log(g),alert(alert("There is an error. Please, try again!"))}},l=()=>{+e<10?t(10):+e>100&&t(100)};return o.jsxs(te,{maxWidth:"xs",className:S.container,children:[o.jsxs(F,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:[o.jsxs(F,{sx:{display:"flex",flexDirection:"row",alignItems:"center"},children:[o.jsx(ae,{className:S.youtubeIcon,sx:{m:1,pr:1,fontSize:"45px",color:"#ff0000",opacity:.9}}),o.jsx(P,{component:"h5",variant:"h5",color:"#000",children:"YouTube-clone"})]}),o.jsx(P,{component:"h4",variant:"h4",color:"#000",children:"Registration"}),o.jsx(F,{component:"form",onSubmit:R,sx:{mt:3},children:o.jsxs(re,{sx:{m:3},children:[o.jsxs(C,{container:!0,spacing:2,children:[o.jsx(C,{item:!0,xs:12,children:o.jsx(w,{value:c,onChange:r=>i(r.target.value),required:!0,label:"Username",id:"username",name:"username",autoFocus:!0,fullWidth:!0,color:"error"})}),o.jsx(C,{item:!0,xs:12,children:o.jsx(w,{value:f,onChange:r=>h(r.target.value),required:!0,label:"Email Address",id:"email",name:"email",autoComplete:"email",fullWidth:!0,color:"error"})}),o.jsx(C,{item:!0,xs:12,children:o.jsx(fe,{title:"Password must be at least 8 characters long, with at least 1 uppercase letter, 1 lowercase letter, 1 number and 1 symbol",id:"password",placement:"left-start",arrow:!0,children:o.jsx(w,{value:m,onChange:r=>p(r.target.value),required:!0,type:u?"text":"password",label:"Password",id:"password",name:"password",InputProps:{endAdornment:o.jsx(se,{position:"end",children:o.jsx(ne,{"aria-label":"toggle password visibility",onClick:()=>v(r=>!r),children:u?o.jsx(ce,{}):o.jsx(le,{})})})},fullWidth:!0,color:"error"})})}),o.jsx(C,{item:!0,xs:12,children:o.jsx(w,{value:e,onChange:j,onBlur:l,required:!0,label:"Age",id:"age",name:"age",type:"number",inputProps:{inputMode:"numeric",type:"number",pattern:"[0-9]*",min:10,max:100,"aria-labelledby":"age"},fullWidth:!0,color:"error"})}),o.jsx(ie,{"aria-labelledby":"gender",required:!0,sx:{m:3},color:"error",children:"Gender"}),o.jsxs(Me,{value:a,onChange:b,name:"gender",row:!0,children:[o.jsx(_,{label:"Female",control:o.jsx(A,{color:"error"}),value:"female",sx:{color:"#000"}}),o.jsx(_,{label:"Male",control:o.jsx(A,{color:"error"}),value:"male",sx:{color:"#000"}})]})]}),o.jsx(ue,{type:"submit",variant:"contained",sx:{mt:3,mb:2,border:"1.5px solid #000",borderRadius:"50px",bgcolor:"#aa0707",":hover":{bgcolor:" #fd0808"}},fullWidth:!0,children:"Sign Up"}),o.jsx(C,{container:!0,justifyContent:"center",children:o.jsxs(C,{item:!0,children:[o.jsx($,{to:"/",className:S.hasAccount,children:"Already have an account?  "}),o.jsx($,{to:"/",className:S.signIn,children:"Sign in"})]})})]})})]}),o.jsx(de,{position:"fixed",children:o.jsx(pe,{})})]})};export{De as default};
