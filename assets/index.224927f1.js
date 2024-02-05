var ae=Object.defineProperty,ce=Object.defineProperties;var se=Object.getOwnPropertyDescriptors;var N=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var k=(r,t,n)=>t in r?ae(r,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[t]=n,v=(r,t)=>{for(var n in t||(t={}))P.call(t,n)&&k(r,n,t[n]);if(N)for(var n of N(t))R.call(t,n)&&k(r,n,t[n]);return r},E=(r,t)=>ce(r,se(t));var F=(r,t)=>{var n={};for(var o in r)P.call(r,o)&&t.indexOf(o)<0&&(n[o]=r[o]);if(r!=null&&N)for(var o of N(r))t.indexOf(o)<0&&R.call(r,o)&&(n[o]=r[o]);return n};import{u as le,j as e,B as w,e as de,a,F as S,P as _,T as x,l as O,b as B,M as V,c as he,d as ue,f as pe,g as ge,H as y,r as m,h as Se,i as T,k as l,m as fe,n as d,o as A,p as j,q as z,s as U,t as $,R as G,v as me,I as Y,w as D,x as H,y as Z,S as q,z as be,A as ve,C as we,D as Ce,E as xe,G as Te,J as Ee}from"./vendor.8154d509.js";const Le=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const c of i)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&o(h)}).observe(document,{childList:!0,subtree:!0});function n(i){const c={};return i.integrity&&(c.integrity=i.integrity),i.referrerpolicy&&(c.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?c.credentials="include":i.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(i){if(i.ep)return;i.ep=!0;const c=n(i);fetch(i.href,c)}};Le();var Ne="/react-interview-exercise/assets/header_logo.1094da8d.png";const Ie={baseStyle:{display:"flex",flexDirection:"column",alignItems:"center",gap:6},variants:{rounded:{padding:8,borderRadius:"40px",boxShadow:"xl",border:"2px solid"},smooth:{padding:6,borderRadius:"base",boxShadow:"md"}},defaultProps:{variant:"smooth"}},ye=i=>{var c=i,{variant:r,children:t,borderColor:n}=c,o=F(c,["variant","children","borderColor"]);const h=le("Card",{variant:r});return e(w,E(v({className:"cs-card",__css:h,borderColor:n},o),{children:t}))},Ae={baseStyle:{fontWeight:"bold",borderRadius:"25px",_hover:{bg:"black"}},sizes:{sm:{fontSize:"sm",px:4,py:3},md:{fontSize:"md",px:6,py:4}},variants:{outline:{border:"2px solid"},ghost:{border:"0px solid"},solid:{color:"white"}},defaultProps:{size:"md",variant:"outline"}},De={baseStyle:{bg:"white"}};var Me=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Button:Ae,Input:De});const Pe={brand:{green:"#42E794",darkGreen:"#1E7B75",red:"#FF4658",orange:"#FF6105",lightBlue:"#2ab8ff",darkBlue:"#1467FF",blue:"#2AB8FF",purple:"#630CB2",yellow:"#fff95e"},blue:{500:"#2ab8ff",600:"#1467FF"},yellow:{100:"#fff95e"},red:{100:"#ff4658"},pink:{100:"#e748b9"}},I=de({colors:Pe,components:v({Card:Ie},Me)});const K=({children:r,color:t=I.colors.brand.blue,size:n=["50%","50%"],globSizes:o=[[40,80],[60,50],[20,80]],globPositions:i=[[20,10],[10,20],[20,15]],top:c,left:h,right:u,bottom:f,opacity:s=1,speed:p,radius:b,rotate:C})=>a(S,{children:[a("div",{className:"blob",style:{top:c,left:h,right:u,bottom:f,width:n[0],height:n[1],opacity:s,transform:C?`rotate(${C}deg)`:void 0},children:[e("div",{className:"glob",style:{backgroundColor:t,width:o[0][0]+"%",height:o[0][1]+"%",top:i[0][0]+"%",left:i[0][1]+"%",animation:p?`move ${p*1200}ms infinite alternate ease-in-out`:void 0,borderRadius:b}}),e("div",{className:"glob1",style:{backgroundColor:t,width:o[1][0]+"%",height:o[1][1]+"%",top:i[1][0]+"%",left:i[1][1]+"%",animation:p?`move ${p*1e3}ms infinite alternate ease-in-out`:void 0,borderRadius:b}}),e("div",{className:"glob2",style:{backgroundColor:t,width:o[2][0]+"%",height:o[2][1]+"%",top:i[2][0]+"%",left:i[2][1]+"%",animation:p?`move ${p*800}ms infinite alternate ease-in-out`:void 0,borderRadius:b}})]}),e("svg",{className:"glob-svg",xmlns:"http://www.w3.org/2000/svg",version:"1.1",children:e("defs",{children:a("filter",{id:"goo",children:[e("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"12",result:"blur"}),e("feColorMatrix",{in:"blur",mode:"matrix",values:"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9",result:"goo"}),e("feComposite",{in:"SourceGraphic",in2:"goo",operator:"atop"})]})})}),e("svg",{className:"glob-svg",viewBox:"0 0 400 400",children:e("defs",{children:e("filter",{id:"duotone-filter-post-one",children:e("feColorMatrix",{type:"matrix",values:"0.14453125 0 0 0 0.33203125 0.71875 0 0 0 0.27734375 -0.34765625 0 0 0 0.73046875 0 0 0 1 0"})})})})]}),Re=({children:r})=>a(S,{children:[a(w,{overflow:"hidden",className:"globParent",position:"absolute",width:"100vw",height:"100%",minHeight:"100vh",children:[e(K,{size:["60%","60%"],speed:30,globSizes:[[60,65],[70,80],[30,75]],left:"0%",top:"10%",opacity:.5,color:I.colors.brand.green}),e(K,{size:["600px","600px"],left:"-50px",top:"-20px",color:I.colors.brand.green})]}),a(w,{className:"cs-header",position:"absolute",top:"0",right:"0",left:"0",width:"100vw",height:"80px",children:[e("a",{href:"https://characterstrong.com",children:e("img",{className:"header-img",src:Ne,alt:"CharacterStrong Logo"})}),r]})]}),ke=async r=>{let t=`https://nces.ed.gov/opengis/rest/services/K12_School_Locations/EDGE_GEOCODE_PUBLICLEA_1516/MapServer/0/query?where=UPPER(NAME) LIKE UPPER('%${r}%')&outFields=*&outSR=4326&f=json`,n=[],o=await(await fetch(t)).json();return n=[...o.features?o.features.map(i=>i.attributes):[]],n},Fe=async(r,t)=>{let n=`https://services1.arcgis.com/Ua5sjt3LWTPigjyD/arcgis/rest/services/Private_School_Locations_Current/FeatureServer/0/query?where=UPPER(NAME) LIKE UPPER('%${r}%')${t?`%20AND%20LEAID%20%3D%20'${t}'`:""}&outFields=*&outSR=4326&f=json`,o=`https://services1.arcgis.com/Ua5sjt3LWTPigjyD/arcgis/rest/services/Public_School_Location_201819/FeatureServer/0/query?where=UPPER(NAME) LIKE UPPER('%${r}%')${t?`%20AND%20LEAID%20%3D%20'${t}'`:""}&outFields=*&outSR=4326&f=json`,i=[],c=await(await fetch(n)).json(),h=await(await fetch(o)).json();return i=[...c.features?c.features.map(u=>u.attributes):[],...h.features?h.features.map(u=>u.attributes):[]],i};var _e="/react-interview-exercise/districtMarker.png";const Oe=({district:r})=>e(_,{children:a(S,{children:[a(x,{children:[e("strong",{children:"Name: "})," ",r.NAME]}),a(x,{children:[e("strong",{children:"Location: "})," ",r.LCITY,", ",r.LSTATE,", ",r.LZIP]}),a(x,{children:[e("strong",{children:"County: "}),r.NMCNTY15]})]})}),Be=({data:r,handleDistrictSelection:t})=>{const n=new O.exports.Icon({iconUrl:_e,iconSize:[38,38]}),o=B();return r.length>0?e(S,{children:r.map((i,c)=>e(V,{position:[i.LAT1516,i.LON1516],icon:n,eventHandlers:{click:()=>{o.setView([i.LAT1516,i.LON1516],15),t(i.LEAID)}},children:e(Oe,{district:i})},c))}):null};var Ve="/react-interview-exercise/schoolMarker.png";const je=({school:r})=>e(_,{children:a(S,{children:[a(x,{children:[e("strong",{children:"Name: "})," ",r.NAME]}),a(x,{children:[e("strong",{children:"Location: "})," ",r.STREET,", ",r.CITY,", ",r.STATE,", ",r.ZIP]}),a(x,{children:[e("strong",{children:"County: "}),r.NMCNTY]})]})}),ze=({data:r})=>{const t=new O.exports.Icon({iconUrl:Ve,iconSize:[38,38]}),n=B();return r.length>0?e(S,{children:r.map((o,i)=>e(V,{position:[o.LAT,o.LON],icon:t,eventHandlers:{click:()=>{n.setView([o.LAT,o.LON],15)}},children:e(je,{school:o})},i))}):null},Ue=({center:r,zoom:t,districtMarkers:n,schoolMarkers:o,handleDistrictSelection:i})=>a(he,{center:r,zoom:t,children:[e(ue,{attribution:'\xA9 <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',url:"https://tile.openstreetmap.org/{z}/{x}/{y}.png"}),e(Be,{data:n,handleDistrictSelection:i}),e(ze,{data:o})]}),$e=r=>{const{getInputProps:t,getRadioProps:n}=pe(r),o=t(),i=n();return a(w,{as:"label",children:[e("input",v({},o)),e(w,E(v({},i),{cursor:"pointer",borderWidth:"1px",borderRadius:"md",boxShadow:"md",_checked:{bg:"green.400",color:"white",borderColor:"green.600"},_focus:{boxShadow:"outline"},px:5,py:3,children:r.children}))]})},W=({handleSwitch:r,options:t,defaultValue:n,name:o})=>{const{getRootProps:i,getRadioProps:c}=ge({name:o,defaultValue:n,onChange:r}),h=i();return e(y,E(v({},h),{children:t.map(u=>{const f=c({value:u});return e($e,E(v({},f),{children:u}),u)})}))},J=({data:r,type:t})=>{const[n,o]=m.exports.useState(1),i=Math.ceil(r.length/10),c=(n-1)*10,h=c+10,u=r.slice(c,h),f=s=>{o(s)};return a(S,{children:[e(Se,{children:r.length>0?t==="school"?u.map((s,p)=>a(T,{children:[e(l,{children:s.NAME}),e(l,{children:s.LEAID}),e(l,{children:s.STREET}),e(l,{children:s.CITY}),e(l,{children:s.STATE}),e(l,{children:s.ZIP}),e(l,{children:s.NCESSCH}),e(l,{children:s.OPSTFIPS}),e(l,{children:s.STFIP}),e(l,{children:s.NMCNTY}),e(l,{children:s.LOCALE})]},p)):u.map((s,p)=>a(T,{children:[e(l,{children:s.LEAID}),e(l,{children:s.NAME}),e(l,{children:s.LSTATE}),e(l,{children:s.CNTY15}),e(l,{children:s.NMCNTY15}),e(l,{children:s.CBSA15}),e(l,{children:s.NMCBSA15}),e(l,{children:s.CD15}),e(l,{children:s.SLDL15}),e(l,{children:s.SLDU15}),e(l,{children:s.LZIP}),e(l,{children:s.LZIP4})]},p)):e(T,{children:e(l,{colSpan:12,style:{textAlign:"center"},children:"No data"})})}),e(fe,{children:e(T,{children:e(d,{colSpan:12,children:a(y,{spacing:4,justify:"center",children:[e(A,{size:"sm",hidden:n==1||r.length==0,onClick:()=>f(n-1),_hover:{backgroundColor:"#2AB8FF"},color:"white",backgroundColor:"blue.400",children:"Prev"}),e(w,{hidden:r.length==0,children:n}),e(A,{size:"sm",hidden:n==i||r.length==0,onClick:()=>f(n+1),_hover:{backgroundColor:"#2AB8FF"},color:"white",backgroundColor:"blue.400",children:"Next"})]})})})})]})},Ge=({data:r})=>e(S,{children:e(j,{margin:"10px",children:a(z,{className:"responsive-table",size:"sm",variant:"striped",colorScheme:"green",children:[e(U,{children:"Schools and school districts"}),e($,{children:a(T,{children:[e(d,{children:"LEAID"}),e(d,{children:"NAME"}),e(d,{children:"LSTATE"}),e(d,{children:"CNTY15"}),e(d,{children:"NMCNTY15"}),e(d,{children:"CBSA15"}),e(d,{children:"NMCBSA15"}),e(d,{children:"CD15"}),e(d,{children:"SLDL15"}),e(d,{children:"SLDU15"}),e(d,{children:"LZIP"}),e(d,{children:"LZIP4"})]})}),e(J,{data:r,type:"district"})]})})}),Ye=({data:r})=>e(S,{children:e(j,{margin:"10px",children:a(z,{className:"responsive-table",size:"sm",variant:"striped",colorScheme:"green",children:[e(U,{children:"Schools and school districts"}),e($,{children:a(T,{children:[e(d,{children:"NAME"}),e(d,{children:"LEAID"}),e(d,{children:"STREET"}),e(d,{children:"CITY"}),e(d,{children:"STATE"}),e(d,{children:"ZIP"}),e(d,{children:"NCESSCH"}),e(d,{children:"OPSTFIPS"}),e(d,{children:"STFIP"}),e(d,{children:"NMCNTY"}),e(d,{children:"LOCALE"})]})}),e(J,{data:r,type:"school"})]})})}),He=({districtData:r,schoolData:t})=>{const[n,o]=m.exports.useState("View Districts");return a(S,{children:[e(W,{options:["View Districts","View Schools"],handleSwitch:h=>{o(h)},defaultValue:"View Districts",name:"view2"}),n=="View Districts"?e(Ge,{data:r}):e(Ye,{data:t})]})},Ze=[39.8283,-98.5795],qe=3,Ke=()=>{const[r,t]=G.useState(!1),[n,o]=m.exports.useState(""),[i,c]=m.exports.useState([]),[h,u]=m.exports.useState([]),[f,s]=m.exports.useState("Map View"),[p,b]=m.exports.useState(""),[C,M]=m.exports.useState(""),Q=["Map View","Table View"],[L]=me("(min-width: 768px)"),X=g=>{o(g.target.value)},ee=g=>{M(g.target.value)},re=g=>{b(g.target.value)},te=async()=>{if(n=="")return;t(!0);const g=await ke(n);c(g),t(!1)},ne=async()=>{if(C=="")return;t(!0);const g=await Fe(C,p);u(g),t(!1)},ie=g=>{s(g)},oe=g=>{b(g)};return a(S,{children:[a(Y,{width:L?"400px":"300px",children:[e(D,{size:"md",placeholder:"Search for a district",value:n,onChange:X}),e(H,{children:e(Z,{color:"green.600",variant:"ghost",rounded:"false","aria-label":"Search school district",icon:e(q,{}),onClick:te})})]}),a(Y,{width:L?"400px":"300px",children:[e(be,{label:"Optional: LEAID is educational institution identifier. It is required to search for schools within a district. Search for a district and then click on a marker. It will fill this field.",fontSize:"md",children:e(D,{width:"1/2",size:"md",placeholder:"LEAID",value:p,onChange:re})}),e(D,{size:"md",placeholder:"Search for a school",value:C,onChange:ee}),e(H,{children:e(Z,{color:"green.600",variant:"ghost",rounded:"false","aria-label":"Search for school",icon:e(q,{}),onClick:ne})})]}),a(y,{children:[e(W,{handleSwitch:ie,options:Q,defaultValue:"Map View",name:"view"}),e(A,{backgroundColor:"blue.400",color:"white",size:"md",_hover:{backgroundColor:"#2AB8FF"},onClick:()=>{o(""),M(""),b(""),c([]),u([])},px:5,py:3,borderWidth:"1px",borderRadius:"md",boxShadow:"md",children:"Reset"})]}),r?e(ve,{width:L?"75vh":"50vh",height:L?"75vh":"50vh",thickness:"10px",color:"green.400"}):f=="Map View"?e(Ue,{center:Ze,zoom:qe,districtMarkers:i,schoolMarkers:h,handleDistrictSelection:oe}):e(He,{districtData:i,schoolData:h})]})},We=()=>e(S,{children:e(we,{height:"105vh",children:e(Ce,{initialScale:.9,in:!0,children:a(ye,{variant:"rounded",borderColor:"blue",children:[e(xe,{children:"School Data Finder"}),e(Ke,{}),e(w,{marginTop:4})]})})})});function Je(){return a("div",{className:"App",children:[e(Re,{}),e(We,{})]})}const Qe=document.getElementById("root"),Xe=Te(Qe);Xe.render(e(G.StrictMode,{children:e(Ee,{theme:I,children:e(Je,{})})}));