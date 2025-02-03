import{w as y,z as N,r as i,y as C,j as e,L as c}from"./index-6d9d4883.js";import k from"./Contact-d8380ce2.js";import P from"./Footer-becb65b5.js";import S from"./Service-1f0d7411.js";import{C as g,G as M}from"./GetAllPhotos-db8ef372.js";import{G as I}from"./iconBase-c4138c2f.js";import{_ as d}from"./index-aa4a3675.js";import"./index.esm-b870fe46.js";function L(t){return I({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M16 9C16 11.2091 14.2091 13 12 13C9.79086 13 8 11.2091 8 9C8 6.79086 9.79086 5 12 5C14.2091 5 16 6.79086 16 9ZM14 9C14 10.1046 13.1046 11 12 11C10.8954 11 10 10.1046 10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9Z",fill:"currentColor"},child:[]},{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM3 12C3 14.0902 3.71255 16.014 4.90798 17.5417C6.55245 15.3889 9.14627 14 12.0645 14C14.9448 14 17.5092 15.3531 19.1565 17.4583C20.313 15.9443 21 14.0524 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12ZM12 21C9.84977 21 7.87565 20.2459 6.32767 18.9878C7.59352 17.1812 9.69106 16 12.0645 16C14.4084 16 16.4833 17.1521 17.7538 18.9209C16.1939 20.2191 14.1881 21 12 21Z",fill:"currentColor"},child:[]}]})(t)}const $="/assets/graf (3)-b2d2f7c9.jpeg",z="/assets/nature (4)-6cdbeb5f.jpg",E="/assets/nature (5)-d7fa3a54.jpg",O="/assets/nature (6)-ca68b940.jpg",B="/assets/nature (7)-aff15b41.jpg",G="/assets/nature (8)-442500da.jpg",R="/assets/nature (9)-06ba8fc8.jpg",Z="/assets/nature (10)-6bbfaca1.jpg",A="/assets/nature (12)-64ddf0d0.jpg",H="/assets/nature (13)-1b368144.jpg",F=()=>{const{user:t}=y(s=>s.auth),[u,{isSuccess:x}]=N(),[a,f]=i.useState(!1),n=()=>f(!a),[h,p]=i.useState(!1),j=()=>p(!h),[T,b]=i.useState(!1),[m,o]=i.useState(0),l=[z,E,O,B,G,R,Z,A,H];i.useEffect(()=>{const s=setInterval(()=>{o(r=>(r+1)%l.length)},2e3);return()=>clearInterval(s)},[l.length]);const v=()=>{o(s=>(s+1)%l.length)},w=()=>{o(s=>(s-1+l.length)%l.length)};return i.useEffect(()=>{x&&C.success("logout succcess")},[x]),e.jsxs(e.Fragment,{children:[e.jsxs("header",{children:[e.jsxs("nav",{className:" navbarsticky shadow sticky top-0 bg-white z-50",children:[e.jsxs("div",{className:"flex justify-between items-center py-5 container mx-auto",children:[e.jsx("div",{children:e.jsxs("h1",{className:"text-2xl font-serif flex bg-gradient-to-tr from-indigo-600 to-green-600 bg-clip-text text-transparent hover:cursor-pointer",children:[e.jsx("img",{src:$,alt:"",className:"h-10 w-10 animate-pulse"}),"Photography"]})}),e.jsxs("div",{className:"flex items-center ",children:[e.jsxs("div",{className:"hover:cursor-pointer sm:hidden",onClick:j,children:[e.jsx("span",{className:"h-1 rounded-full block w-8 mb-1 bg-gradient-to-tr from-indigo-600 to-green-600"}),e.jsx("span",{className:"h-1 rounded-full block w-8 mb-1 bg-gradient-to-tr from-indigo-600 to-green-600"}),e.jsx("span",{className:"h-1 rounded-full block w-8 mb-1 bg-gradient-to-tr from-indigo-600 to-green-600"})]}),e.jsxs("div",{className:"flex items-center",children:[e.jsxs("ul",{className:"sm:flex space-x-4 hidden items-center",children:[e.jsx("li",{children:e.jsx("a",{href:"#",className:"text-gray-700 hover:text-indigo-600 text-md",children:"Home"})}),e.jsx("li",{children:e.jsx("a",{href:"#",className:"text-gray-700 hover:text-indigo-600 text-md",children:"About"})}),e.jsx("li",{children:e.jsx("a",{href:"#services",className:"text-gray-700 hover:text-indigo-600 text-md",children:"Services"})}),e.jsx("li",{children:e.jsx("a",{href:"#contact",className:"text-gray-700 hover:text-indigo-600 text-md",children:"Contact"})})]}),e.jsxs("div",{className:"md:flex items-center hidden space-x-4 ml-8 lg:ml-12",children:[e.jsxs(c,{to:"/login",className:"text-gray-600 py-2 hover:cursor-pointer hover:text-indigo-600 font-serif flex items-center",children:["Login ",e.jsx(g,{})]}),e.jsx("div",{className:"flex items-center gap-10",children:e.jsxs("button",{onClick:n,className:" flex items-center gap-1 btn-sm text-center font-serif hover:cursor-pointer px-4 rounded text-white bg-gradient-to-tr from-indigo-600 to-green-600","aria-label":"Toggle profile view",children:["View Profile",e.jsx(L,{})]})})]})]})]})]}),t&&e.jsx("div",{className:"md:flex items-center hidden space-x-4 ml-8 lg:ml-12",children:e.jsx(c,{to:"/getallbooking",children:e.jsx("button",{onClick:()=>b(!0),className:"me-5 flex items-center gap-1 btn-sm text-center font-serif hover:cursor-pointer px-4 rounded text-white bg-gradient-to-tr from-indigo-600 to-green-600","aria-label":"New Booking",children:"Your Booking"})})}),h&&e.jsx("div",{className:"sm:hidden bg-white p-4 absolute top-16 left-0 w-full shadow-md",children:e.jsxs("ul",{className:"space-y-4",children:[e.jsxs(c,{to:"/login",className:"text-gray-600 py-2 hover:cursor-pointer hover:text-indigo-600 font-serif flex items-center",children:["Login ",e.jsx(g,{})]}),e.jsx("li",{children:e.jsx("a",{href:"#",className:"text-gray-700 hover:text-indigo-600 text-md",children:"Home"})}),e.jsx("li",{children:e.jsx("a",{href:"#",className:"text-gray-700 hover:text-indigo-600 text-md",children:"About"})}),e.jsx("li",{children:e.jsx("a",{href:"#services",className:"text-gray-700 hover:text-indigo-600 text-md",children:"Services"})}),e.jsx("li",{children:e.jsx("a",{href:"#contact",className:"text-gray-700 hover:text-indigo-600 text-md",children:"Contact"})}),e.jsx("li",{children:e.jsxs("button",{onClick:n,className:"flex items-center bg-blue-800 text-white px-3 py-1 rounded-full text-sm hover:bg-blue-700 focus:outline-none","aria-label":"Toggle profile view",children:[e.jsx("h4",{className:"btn-sm py-1 hover:cursor-pointer px-4 rounded text-white bg-gradient-to-tr from-indigo-600 to-green-600 hover:shadow-lg",children:"View Profile"}),e.jsx("i",{className:"bi bi-person-circle text-lg"})]})})]})})]}),e.jsxs("div",{className:"",children:[e.jsxs("div",{className:`fixed top-0 right-0 h-full w-64 bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg transform transition-transform duration-300 ${a?"translate-x-0":"translate-x-full"}`,style:{zIndex:60},children:[e.jsxs("div",{className:"flex items-center justify-between px-4 py-4 bg-gray-800",children:[e.jsx("h2",{className:"text-lg font-bold text-white",children:"Your Profile"}),e.jsx("button",{className:"text-gray-300 hover:text-white focus:outline-none",onClick:n,children:e.jsx("i",{className:"bi bi-x-lg text-lg"})})]}),e.jsxs("div",{className:"px-4 py-6",children:[e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx("img",{className:"h-20 w-20 rounded-full shadow-lg",src:`http://localhost:5000/uploads/${t==null?void 0:t.profilePicture}`,alt:"Profile"}),e.jsxs("h3",{className:"mt-4 text-lg font-semibold text-gray-800",children:[t==null?void 0:t.name,e.jsx("p",{children:t==null?void 0:t.email})]})]}),e.jsxs("div",{className:"mt-6",children:[e.jsx("button",{className:"block w-full text-left bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700",children:"Edit Profile"}),e.jsx("button",{onClick:()=>u({role:t==null?void 0:t.role}),className:"mt-4 block w-full text-left bg-red-600 text-white px-4 py-2 rounded-md font-medium hover:bg-red-700",children:"Logout"})]})]})]}),a&&e.jsx("div",{onClick:n,className:"fixed inset-0 bg-black bg-opacity-50",style:{zIndex:50}})]})]}),e.jsx("main",{children:e.jsx("section",{children:e.jsxs("div",{class:"bg-gray-100 sm:grid grid-cols-5 grid-rows-1 px-4 py-24  min-h-full lg:min-h-screen space-y-6 sm:space-y-0 sm:gap-4",children:[e.jsxs("div",{class:"h-96 col-span-4 bg-gradient-to-tr from-indigo-800 to-indigo-500 rounded-md flex items-center",children:[e.jsx("div",{className:" w-96 carousel carousel-center rounded-box relative overflow-hidden",children:e.jsx("div",{className:"flex transition-transform duration-1000 ease-in-out",style:{transform:`translateX(-${m*50}%)`,width:`${l.length*100}%`},children:l.map((s,r)=>e.jsx(d,{className:"carousel-item flex-shrink-0 w-full h-48",style:{flex:"0 0 70%"},children:e.jsx("img",{src:s,alt:`Slide ${r+1}`,className:"w-[90%] h-[200px] object-cover"})},r))})}),e.jsxs("div",{class:"ml-20 w-80",children:[e.jsx("h2",{class:"text-white text-4xl",children:"Photography"}),e.jsx("p",{class:"text-indigo-100 mt-4 capitalize font-thin tracking-wider leading-7",children:"Capture the beauty of life through the lens. Explore the art of photography, where moments become timeless."}),e.jsx("a",{href:"#",class:"uppercase inline-block mt-8 text-sm bg-white py-2 px-4 rounded font-semibold hover:bg-indigo-100",children:"Get Started"})]})]}),e.jsxs("div",{class:"h-96 col-span-1",children:[e.jsxs("div",{class:" py-3 px-4 rounded-lg flex items-center relative bg-white",children:[e.jsx("input",{type:"text",placeholder:"Search",class:"bg-gray-100 rounded-md outline-none pl-4 pr-3 ring-indigo-700 w-full sm:w-72 p-2"}),e.jsx("span",{class:"absolute right-4",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6 text-gray-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})})]}),e.jsx("div",{class:"bg-white rounded-md mt-4",children:e.jsxs("div",{id:"service-list",class:"bg-white rounded-md list-none text-center sm:block hidden",children:[e.jsx("li",{class:"py-3 border-b-2",children:e.jsx("a",{href:"#services",class:"list-none hover:text-indigo-600",children:"Services"})}),e.jsx("li",{class:"py-3 border-b-2",children:e.jsx("a",{href:"#",class:"list-none hover:text-indigo-600",children:"Models"})}),e.jsx("li",{class:"py-3 border-b-2",children:e.jsx("a",{href:"#",class:"list-none hover:text-indigo-600",children:"Pricing"})}),e.jsx("li",{class:"py-3 border-b-2",children:e.jsx("a",{href:"#",class:"list-none hover:text-indigo-600",children:"Hire"})}),e.jsx("li",{class:"py-3",children:e.jsx("a",{href:"#",class:"list-none hover:text-indigo-600",children:"Business"})})]})})]})]})})}),e.jsxs("div",{className:"  w-full h-[400px] carousel carousel-center relative overflow-hidden",children:[e.jsx("div",{className:"flex transition-transform duration-1000 ease-in-out",style:{transform:`translateX(-${m*100}%)`,width:`${l.length*100}%`},children:l.map((s,r)=>e.jsx(d,{className:"carousel-item flex-shrink-0 w-full h-full",children:e.jsx("img",{src:s,alt:`Slide ${r+1}`,className:"w-full h-full object-cover"})},r))}),e.jsx("button",{onClick:w,className:"absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-3xl bg-black bg-opacity-50 p-2 rounded-full",children:"❮"}),e.jsx("button",{onClick:v,className:"absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-3xl bg-black bg-opacity-50 p-2 rounded-full",children:"❯"})]}),e.jsx(M,{})]})},K=()=>e.jsxs(d,{children:[e.jsx(F,{}),e.jsx(S,{}),e.jsx(k,{}),e.jsx(P,{})]});export{K as default};
