import{e as p,l as x,k as h,u as g,d as b,r as j,j as e,F as f}from"./index-9b6SLHIz.js";import{I as N}from"./Img-DyHc43JZ.js";function I(){const i=p(),s=x().state==="submitting",{id:n}=h(),t=g().find(a=>a._id===n),{user:c}=b(),[d,o]=j.useState(t.image),u=a=>{const l=a.target.files[0];if(l){const r=new FileReader;r.onload=m=>{o(m.target.result)},r.readAsDataURL(l)}};return e.jsx(f,{method:"POST",encType:"multipart/form-data",children:e.jsxs("div",{className:"m-auto w-96 mb-20",children:[e.jsxs("fieldset",{disabled:s,children:[e.jsx("h2",{className:"m-auto text-xl bold",children:"Update Product"}),e.jsxs("div",{className:"relative",children:[e.jsx(N,{src:d,alt:t.title}),e.jsxs("label",{htmlFor:"image",className:"btn absolute right-0 bottom-0",children:["change image",e.jsx("input",{type:"file",name:"image",className:"opacity-0 absolute",onChange:u})]})]}),e.jsxs("label",{className:"flex items-center gap-2 mt-2 input input-bordered",children:["title",e.jsx("input",{type:"text",name:"title",className:"grow",placeholder:"Please write your title here",defaultValue:t.title})]}),e.jsxs("label",{className:"flex items-center gap-2 mt-2 input input-bordered",children:["price",e.jsx("input",{type:"text",name:"price",className:"grow",placeholder:"Please write your price here",defaultValue:t.price})]}),e.jsxs("label",{className:"flex items-center gap-2 mt-2 input input-bordered",children:["summary",e.jsx("input",{type:"text",name:"summary",className:"grow",placeholder:"Please write your summary here",defaultValue:t.summary})]}),e.jsxs("label",{className:"flex items-center hidden gap-2 mt-2 input input-bordered",children:["user id",e.jsx("input",{type:"text",name:"userId",className:"grow",placeholder:"Please write your userId here",defaultValue:c._id})]}),e.jsxs("select",{className:"w-full gap-2 mt-2 select select-bordered",name:"isPublic",defaultValue:t.isPublic,children:[e.jsx("option",{value:"true",children:"Public"}),e.jsx("option",{value:"false",children:"Private"})]}),e.jsxs("label",{className:"mt-4 field",children:["description",e.jsx("textarea",{type:"text",name:"description",cols:"40",rows:"10",placeholder:"Please write description here",defaultValue:t.description})]})]}),e.jsxs("div",{className:"justify-end card-actions",children:[e.jsx("button",{className:"btn",onClick:()=>i(-1),children:"Cancel"}),e.jsx("button",{className:"bg-green-500 btn hover:bg-green-600",children:s?"Updating":"Update"})]})]})})}export{I as default};
