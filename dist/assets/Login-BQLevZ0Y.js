import{b as v,d as j,r as u,e as N,j as e,N as b,L as y,s as A,B as m}from"./index-9b6SLHIz.js";function C(){var d;const l=v(),{isAuthenticated:h,setCheckSession:p,setIsAuthenticated:i}=j(),[{email:t,password:r},x]=u.useState({email:"",password:""}),[g,o]=u.useState(!1),w=N(),c=s=>x(a=>({...a,[s.target.name]:s.target.value})),f=async s=>{var a;s.preventDefault();try{if(!t||!r)throw new Error("All fields are required");o(!0);const n=await A({email:t,password:r});m.success(n.success),i(!0),p(!0),w(((a=l.state)==null?void 0:a.next)||"/")}catch(n){m.error(n.message),i(!1)}finally{o(!1)}};return h?e.jsx(b,{to:((d=l.state)==null?void 0:d.next)||"/"}):e.jsx(e.Fragment,{children:e.jsxs("form",{className:"flex flex-col gap-3 mx-auto my-5 md:w-1/2",onSubmit:f,children:[e.jsxs("label",{className:"flex items-center gap-2 input input-bordered",children:[e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor",className:"w-4 h-4 opacity-70",children:[e.jsx("path",{d:"M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z"}),e.jsx("path",{d:"M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z"})]}),e.jsx("input",{name:"email",value:t,onChange:c,type:"email",className:"grow",placeholder:"Email"})]}),e.jsxs("label",{className:"flex items-center gap-2 input input-bordered",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor",className:"w-4 h-4 opacity-70",children:e.jsx("path",{fillRule:"evenodd",d:"M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z",clipRule:"evenodd"})}),e.jsx("input",{name:"password",value:r,onChange:c,type:"password",className:"grow",placeholder:"Password"})]}),e.jsxs("small",{children:["Don't have an account?"," ",e.jsx(y,{to:"/register",className:"text-primary hover:underline",children:"Register!"})]}),e.jsx("button",{className:"self-center btn btn-primary",disabled:g,children:"Login"})]})})}export{C as default};