import{e as y,f as k,g as S,r,y as u,j as e}from"./index-6d9d4883.js";import{F as E}from"./index-5a0ac485.js";import{_ as C}from"./index-aa4a3675.js";import"./iconBase-c4138c2f.js";const L=()=>{const[g,{isSuccess:i,isLoading:n}]=y(),{id:c}=k(),{data:s,isLoading:b,isError:h,error:f}=S(c),[p,d]=r.useState(""),[j,o]=r.useState(!1),[x,v]=r.useState(0),[w,m]=r.useState(null);r.useEffect(()=>{s&&d(s.image[0])},[s]),r.useEffect(()=>{i&&(u.success("Your booking was successful!"),o(!1))},[i]);const N=async()=>{try{await g({userId:"user_id_placeholder",serviceId:c,bookingDate:new Date().toISOString(),rating:x})}catch(t){console.error("Error creating booking:",t),u.error("Failed to create booking.")}};return b?e.jsx("p",{className:"text-center text-2xl text-gray-600",children:"Loading..."}):h||!s?(console.error("Error:",f),e.jsx("p",{className:"text-center text-2xl text-red-600",children:"Error loading service details."})):e.jsx(C,{children:e.jsxs("div",{className:"flex flex-col-reverse md:flex-row p-5 bg-gray-100 min-h-screen",children:[e.jsxs("div",{className:"w-full md:w-1/2 p-5 bg-white shadow-lg rounded-lg",children:[e.jsx("h3",{className:"text-4xl font-extrabold text-gray-800 mb-4",children:s.title}),e.jsx("h4",{className:"text-xl font-semibold text-gray-600 mb-2",children:s.category}),e.jsx("div",{className:"flex items-center my-4",children:e.jsxs("p",{className:"mr-3 text-2xl font-semibold text-blue-600",children:["₹",s.price]})}),e.jsx("p",{className:"text-gray-700 text-lg mb-6",children:s.desc}),e.jsx("button",{onClick:()=>o(!0),className:"w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-3 rounded-lg hover:from-blue-600 hover:to-blue-700 shadow-lg hover:shadow-xl transition duration-300",children:"Book Service"})]}),e.jsxs("div",{className:"w-full md:w-1/2 p-5",children:[e.jsx("div",{className:"mb-6",children:e.jsx("img",{src:p,alt:s.title,className:"w-full h-96 object-cover rounded-lg shadow-md"})}),e.jsx("div",{className:"flex gap-3 overflow-x-auto",children:s.image.map((t,a)=>e.jsx("img",{src:t,alt:s.title,className:"w-20 h-20 object-cover rounded-lg cursor-pointer border-2 border-gray-300 hover:border-blue-600",onClick:()=>d(t)},a))})]}),j&&e.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center",children:e.jsxs("div",{className:"bg-white p-8 rounded-lg shadow-lg w-11/12 md:w-1/3",children:[e.jsx("h3",{className:"text-2xl font-bold text-gray-800 mb-4",children:"Rate and Book Service"}),e.jsxs("div",{className:"mb-6",children:[e.jsx("p",{className:"text-gray-700 mb-2",children:"Rating:"}),e.jsx("div",{className:"flex",children:[...Array(5)].map((t,a)=>{const l=a+1;return e.jsx(E,{size:30,className:`cursor-pointer ${l<=(w||x)?"text-yellow-500":"text-gray-300"}`,onClick:()=>v(l),onMouseEnter:()=>m(l),onMouseLeave:()=>m(null)},a)})})]}),e.jsxs("div",{className:"flex gap-4 flex-col md:flex-row",children:[e.jsx("button",{onClick:N,className:"bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300",disabled:n,children:n?e.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"}):"Book Now"}),e.jsx("button",{onClick:()=>o(!1),className:"bg-gray-300 text-gray-700 py-2 px-6 rounded-lg hover:bg-gray-400 transition duration-300",children:"Cancel"})]})]})})]})})};export{L as default};
