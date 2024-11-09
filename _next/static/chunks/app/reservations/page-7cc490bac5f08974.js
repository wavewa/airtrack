(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[535],{6215:function(e,t,l){Promise.resolve().then(l.bind(l,2689)),Promise.resolve().then(l.bind(l,3514)),Promise.resolve().then(l.bind(l,2024))},2024:function(e,t,l){"use strict";l.r(t);var i=l(9268),s=l(447),n=l(6008),a=l(6006),r=l(474),o=l(5106),c=l(6085),u=l(8422);t.default=function(e){let{reservations:t,currentUser:l}=e,d=(0,n.useRouter)(),[f,v]=(0,a.useState)(""),x=(0,a.useCallback)(e=>{v(e),s.Z.delete("/api/reservations/".concat(e)).then(()=>{r.Am.info("Reservation cancelled"),d.refresh()}).catch(e=>{var t,l;r.Am.error(null==e?void 0:null===(t=e.response)||void 0===t?void 0:null===(l=t.data)||void 0===l?void 0:l.error)}).finally(()=>{v("")})},[d]);return(0,i.jsxs)(o.default,{children:[(0,i.jsx)(c.default,{title:"Reservations",subtitle:"Bookings on your properties"}),(0,i.jsx)("div",{className:"mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-8",children:t.map(e=>(0,i.jsx)(u.default,{data:e.listing,reservation:e,actionId:e.id,onAction:x,disabled:f===e.id,actionLabel:"Cancel reservation",currentUser:l},e.id))})]})}},4841:function(e,t,l){"use strict";var i=l(9268);l(6006),t.Z=function(e){let{label:t,onClick:l,disabled:s,outline:n,small:a,icon:r,isColor:o}=e;return(0,i.jsxs)("button",{disabled:s,onClick:l,className:"relative disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover:opacity-80 transition w-full ".concat(n?"bg-white":"bg-rose-500"," ").concat(n?"border-black":"border-rose-500"," ").concat(n?"text-black":"text-white"," ").concat(a?"text-sm":"text-md"," ").concat(a?"py-1":"py-3"," ").concat(a?"font-light":"font-semibold"," ").concat(a?"border-[1px]":"border-2"),children:[r&&(0,i.jsx)(r,{size:24,className:"absolute left-4 top-3 ".concat(o&&"text-blue-600")}),t]})}},2689:function(e,t,l){"use strict";l.r(t);var i=l(9268),s=l(4580),n=l(6006);t.default=function(e){let{children:t}=e,[l,a]=(0,n.useState)(!1);return((0,n.useEffect)(()=>{a(!0)},[]),l)?(0,i.jsx)(s.E.div,{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},children:t}):null}},5106:function(e,t,l){"use strict";l.r(t);var i=l(9268);l(6006),t.default=function(e){let{children:t}=e;return(0,i.jsx)("div",{className:"max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4",children:t})}},3514:function(e,t,l){"use strict";l.r(t);var i=l(9268),s=l(4580),n=l(6008);l(6006);var a=l(4841),r=l(6085);t.default=function(e){let{title:t="No exact matches",subtitle:l="Try changing or removing some of your filters.",showReset:o}=e,c=(0,n.useRouter)();return(0,i.jsxs)(s.E.div,{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},className:"h-[60vh] flex flex-col gap-2 justify-center items-center",children:[(0,i.jsx)(r.default,{center:!0,title:t,subtitle:l}),(0,i.jsx)("div",{className:"w-48 mt-4",children:o&&(0,i.jsx)(a.Z,{outline:!0,label:"Remove all filters",onClick:()=>c.push("/")})})]})}},6085:function(e,t,l){"use strict";l.r(t);var i=l(9268);l(6006),t.default=function(e){let{title:t,subtitle:l,center:s}=e;return(0,i.jsxs)("div",{className:s?"text-center":"text-start",children:[(0,i.jsx)("div",{className:"text-2xl font-bold",children:t}),(0,i.jsx)("div",{className:"font-light text-neutral-500 mt-2",children:l})]})}},7987:function(e,t,l){"use strict";l.d(t,{Z:function(){return d}});var i=l(9268),s=l(447),n=l(6008),a=l(6006),r=l(474),o=l(2462),c=function(e){let{listingId:t,currentUser:l}=e,i=(0,n.useRouter)(),c=(0,o.Z)(),u=(0,a.useMemo)(()=>{let e=(null==l?void 0:l.favoriteIds)||[];return e.includes(t)},[l,t]),d=(0,a.useCallback)(async e=>{if(e.stopPropagation(),!l)return c.onOpen();try{await (u?()=>s.Z.delete("/api/favorites/".concat(t)):()=>s.Z.post("/api/favorites/".concat(t)))(),i.refresh(),r.Am.success("Success")}catch(e){r.Am.error("Something Went Wrong")}},[l,u,t,c]);return{hasFavorite:u,toggleFavorite:d}},u=l(1033),d=function(e){let{listingId:t,currentUser:l}=e,{hasFavorite:s,toggleFavorite:n}=c({listingId:t,currentUser:l});return(0,i.jsxs)("div",{onClick:n,className:" relative hover:opacity-80 transition cursor-pointer",children:[(0,i.jsx)(u.lo,{size:28,className:"fill-white absolute -top-[2px] -right-[2px]"}),(0,i.jsx)(u.M_L,{size:24,className:s?"fill-rose-500":"fill-neutral-500/70"})]})}},8422:function(e,t,l){"use strict";l.r(t);var i=l(9268),s=l(1306),n=l(6350),a=l(4580),r=l(6394),o=l.n(r),c=l(6008),u=l(6006),d=l(4841),f=l(7987);t.default=function(e){let{data:t,reservation:l,onAction:r,disabled:v,actionLabel:x,actionId:m="",currentUser:p}=e,h=(0,c.useRouter)(),{getByValue:g}=(0,s.Z)(),b=g(t.locationValue),j=(0,u.useCallback)(e=>{e.stopPropagation(),v||null==r||r(m)},[r,m,v]),N=(0,u.useMemo)(()=>l?l.totalPrice:t.price,[l,t.price]),w=(0,u.useMemo)(()=>{if(!l)return null;let e=new Date(l.startDate),t=new Date(l.endDate);return"".concat((0,n.default)(e,"PP")," - ").concat((0,n.default)(t,"PP"))},[l]);return(0,i.jsx)(a.E.div,{initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},transition:{duration:.8,delay:.5,ease:[0,.71,.2,1.01]},onClick:()=>h.push("/listings/".concat(t.id)),className:"col-span-1 cursor-pointer group",children:(0,i.jsxs)("div",{className:"flex flex-col gap-2 w-full",children:[(0,i.jsxs)("div",{className:"aspect-square w-full relative overflow-hidden rounded-xl",children:[(0,i.jsx)(o(),{fill:!0,className:"object-cover h-full w-full group-hover:scale-110 transition",src:t.imageSrc,alt:"listing"}),(0,i.jsx)("div",{className:"absolute top-3 right-3",children:(0,i.jsx)(f.Z,{listingId:t.id,currentUser:p})})]}),(0,i.jsxs)("div",{className:"font-semibold text-lg",children:[null==b?void 0:b.region,", ",null==b?void 0:b.label]}),(0,i.jsx)("div",{className:"font-light text-neutral-500",children:w||t.category}),(0,i.jsx)("div",{className:"flex flex-row items-center gap-",children:(0,i.jsxs)("div",{className:"flex gap-1 font-semibold",children:["$",N," ",!l&&(0,i.jsx)("div",{className:"font-light",children:" Night"})]})}),r&&x&&(0,i.jsx)(d.Z,{disabled:v,small:!0,label:x,onClick:j})]})})}},1306:function(e,t,l){"use strict";var i=l(639);let s=i.Z.map(e=>({value:e.cca2,label:e.name.common,flag:e.flag,latlng:e.latlng,region:e.region})),n=()=>{let e=e=>s.find(t=>t.value===e);return{getAll:()=>s,getByValue:e}};t.Z=n},2462:function(e,t,l){"use strict";var i=l(2561);let s=(0,i.Ue)(e=>({isOpen:!1,onOpen:()=>e({isOpen:!0}),onClose:()=>e({isOpen:!1})}));t.Z=s}},function(e){e.O(0,[776,800,522,949,455,744],function(){return e(e.s=6215)}),_N_E=e.O()}]);