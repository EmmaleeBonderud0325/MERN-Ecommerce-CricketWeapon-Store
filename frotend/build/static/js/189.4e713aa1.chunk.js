"use strict";(self.webpackChunkfrotend=self.webpackChunkfrotend||[]).push([[189],{6627:function(e,n,r){var t=r(4942),a=(r(2791),r(8596)),i=r(6513),o=r(8008),s=r(7025),d=r(1523),l=r(184),c=(0,a.Z)((function(e){var n,r;return{navbar:(0,t.Z)({display:"flex",alignItems:"center",justifyContent:"space-between",zIndex:999,background:"#ffffff",width:"100%",padding:"1rem",boxShadow:"1px 1px 2px rgba(0, 0, 0, 0.1), 2px 2px 4px rgba(0, 0, 0, 0.2), 4px 4px 8px rgba(0, 0, 0, 0.3)"},e.breakpoints.between("999"),{flexDirection:"row",alignItems:"center",padding:"1rem"}),menuIcon:(0,t.Z)({display:"none"},e.breakpoints.down("999"),{display:"block",fontSize:"2rem","& svg":{fontSize:"2rem","&:hover":{color:"#ed1c24"}},"&:hover":{transform:"scale(1.1)"}}),dashboardHead:(n={fontSize:"2rem",fontWeight:900,color:"black",textShadow:"2px 2px 4px rgba(0, 0, 0, 0.1)"},(0,t.Z)(n,e.breakpoints.down("sm"),{fontSize:"1.5rem",marginBottom:"0.5rem"}),(0,t.Z)(n,e.breakpoints.down("999"),{fontSize:"1.8rem",marginBottom:0}),(0,t.Z)(n,e.breakpoints.down("xs"),{marginRight:"1.5rem",fontSize:"1.8rem"}),n),contactButton:(r={padding:"10px 30px",borderRadius:"20px",boxShadow:"0px 2px 8px 0px #0000000a",cursor:"pointer",fontWeight:600,fontSize:"16px",color:"#fff",letterSpacing:"1px",background:"#414141",transition:"background-color 0.3s",marginRight:"2rem"},(0,t.Z)(r,e.breakpoints.down("sm"),{fontSize:"14px",padding:"8px 14px"}),(0,t.Z)(r,e.breakpoints.between("sm","md"),{fontSize:"14px",padding:"7px 15px"}),(0,t.Z)(r,e.breakpoints.down("xs"),{display:"none"}),(0,t.Z)(r,"&:hover",{background:"#ed1c24"}),r),headerBottom__logo_main:{height:"3.5rem",alignSelf:"center",paddingLeft:"25px","& img":{height:"100%",width:"auto"}}}}));n.Z=function(e){var n=e.toggleHandler,t=c();return(0,l.jsxs)("nav",{className:t.navbar,children:[(0,l.jsx)(s.Z,{className:t.menuIcon,onClick:n,children:(0,l.jsx)(o.Z,{fontSize:"2rem"})}),(0,l.jsx)("div",{className:t.dashboardHead,children:(0,l.jsx)(d.rU,{to:"/admin/dashboard",style:{textDecoration:"none",color:"none",width:"100%",height:"100%"},children:(0,l.jsx)("img",{src:r(5756),alt:"logo",className:t.headerBottom__logo_main})})}),(0,l.jsx)(d.rU,{to:"/contact",style:{textDecoration:"none",color:"none"},children:(0,l.jsx)(i.Z,{className:t.contactButton,children:"Contact Us"})})]})}},1189:function(e,n,r){r.r(n);var t=r(9439),a=r(2791),i=(r(661),r(5151)),o=r(9434),s=r(7487),d=r(9271),l=r(1523),c=r(6534),m=r(1079),x=r(7407),h=r(6549),p=r(9307),u=r(7736),g=r(6627),f=r(8021),b=r(184);n.default=function(){var e=(0,o.I0)(),n=(0,c.VY)(),r=(0,d.k6)(),j=(0,a.useState)(!1),v=(0,t.Z)(j,2),N=v[0],w=v[1],S=(0,o.v9)((function(e){return e.products})),Z=S.error,k=S.products,y=S.loading,z=(0,o.v9)((function(e){return e.deleteUpdateProduct})),B=z.error,I=z.isDeleted;(0,a.useEffect)((function(){Z&&(n.error(Z),e((0,s.b9)())),B&&(n.error(B),e((0,s.b9)())),I&&(n.success("Product Deleted Successfully"),e({type:f.w$})),e((0,s.Oq)())}),[e,Z,n,B,r,I]);var C=[{field:"id",headerName:"Product ID",minWidth:230,flex:.5,headerClassName:"column-header"},{field:"name",headerName:"Name",minWidth:150,flex:.5,magin:"0 auto",headerClassName:"column-header hide-on-mobile"},{field:"stock",headerName:"Stock",type:"number",minWidth:100,flex:.5,headerClassName:"column-header hide-on-mobile"},{field:"price",headerName:"Price",type:"number",minWidth:200,flex:.5,headerClassName:"column-header hide-on-mobile"},{field:"actions",headerName:"Actions",flex:1,sortable:!1,minWidth:230,headerClassName:"column-header1",renderCell:function(n){return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(l.rU,{to:"/admin/product/".concat(n.getValue(n.id,"id")),style:{marginLeft:"1rem"},children:(0,b.jsx)(m.Z,{className:"icon-"})}),(0,b.jsx)(l.rU,{onClick:function(){return r=n.getValue(n.id,"id"),void e((0,s.Ir)(r));var r},children:(0,b.jsx)(x.Z,{className:"iconbtn"})})]})}}],D=[];return k&&k.forEach((function(e){D.push({id:e._id,stock:e.Stock,price:e.price,name:e.name})})),(0,a.useEffect)((function(){var e=function(){window.innerWidth>999&&N&&w(!1)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[N]),(0,b.jsx)(b.Fragment,{children:y?(0,b.jsx)(p.Z,{}):(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(h.Z,{title:"ALL PRODUCTS - Admin"}),(0,b.jsxs)("div",{className:"product-list",style:{marginTop:0},children:[(0,b.jsx)("div",{className:N?"toggleBox":"listSidebar",children:(0,b.jsx)(u.Z,{})}),(0,b.jsxs)("div",{className:"list-table",children:[(0,b.jsx)(g.Z,{toggleHandler:function(){console.log("toggle"),w(!N)}}),(0,b.jsxs)("div",{className:"productListContainer",children:[(0,b.jsx)("h4",{id:"productListHeading",children:"ALL PRODUCTS"}),(0,b.jsx)(i._$r,{rows:D,columns:C,pageSize:10,disableSelectionOnClick:!0,className:"productListTable",autoHeight:!0})]})]})]})]})})}},7736:function(e,n,r){r(2791);var t=r(1523),a=r(220),i=r(4567),o=r(5849),s=r(478),d=r(2338),l=r(3372),c=r(2419),m=r(1992),x=r(5776),h=r(6488),p=r(7541),u=r(8535),g=r(9434),f=r(184),b=(0,s.Z)((function(e){return{sidebar:{backgroundColor:"#fff",padding:"2rem 0",boxShadow:"2px 10px 6px rgba(0, 0, 0, 0.4)",borderRadius:"5px",margin:"0 auto",width:"100%"},avatar11:{width:"80px",height:"80px",border:"5px solid #414141",margin:"0 auto",marginBottom:"1rem",display:"flex",justifyContent:"center",alignItems:"center"},name:{fontWeight:"500",textAlign:"center",fontSize:"1rem"},email:{color:"#414141",marginBottom:"1.5rem",textAlign:"center",fontSize:"0.9rem"},divider:{height:"2px",width:"75%",backgroundColor:"#414141",margin:"2rem"},button:{marginLeft:"2rem !important",boxShadow:"0 0 10px rgba(0, 0, 0, 0.1)",backgroundColor:"#292929 !important",color:"white   !important",width:"70%     !important",padding:"0.8rem 2rem   !important",borderRadius:"4px !important","&:hover":{backgroundColor:"#ed1c24 !important",color:"white !important"}},sideBarMenu:{listStyleType:"none",padding:0,margin:"3rem  10px",width:"100%"},sideBarMenuItem:{display:"flex",alignItems:"center",padding:"0.9rem 1rem",borderRadius:"2px",marginTop:"1.3rem",width:"75%",boxShadow:" 4px 4px 8px rgba(0, 0, 0, 0.3)","&:hover":{backgroundColor:"#ed1c24",boxShadow:"2px 2px 6px rgba(0, 0, 0, 0.4)","& svg":{color:"white"},"& span":{color:"white !important"}},"& svg":{color:"#414141",fontSize:"26px",margin:"0 20px  0 "},"& span":{color:"#414141",fontSize:"1rem",fontWeight:"500",marginLeft:"1rem",textDecoration:"none",textDecorationLine:"none",transition:"color 0.3s ease"}}}}));n.Z=function(){var e=b(),n=(0,g.v9)((function(e){return e.userData})),r=n.user,s=n.loading;return(0,f.jsx)(f.Fragment,{children:!s&&(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)("div",{className:e.sidebar,children:[(0,f.jsx)(a.Z,{src:r&&r.avatar.url,alt:"User Avatar",className:e.avatar11}),(0,f.jsx)(i.Z,{variant:"subtitle1",className:e.name,children:r&&r.name}),(0,f.jsx)(i.Z,{variant:"subtitle2",className:e.email,children:r&&r.email}),(0,f.jsx)("div",{className:e.divider}),(0,f.jsxs)("ul",{className:e.sideBarMenu,children:[(0,f.jsx)(t.rU,{to:"/admin/dashboard",style:{color:"inherit",textDecoration:"none"},children:(0,f.jsxs)("li",{className:e.sideBarMenuItem,children:[(0,f.jsx)(d.Z,{fontSize:"large"}),(0,f.jsxs)("span",{className:e.sideBarMenuItem_text,children:[" ","Dashboard"]})]})}),(0,f.jsx)(t.rU,{to:"/",style:{color:"inherit",textDecoration:"none"},children:(0,f.jsxs)("li",{className:e.sideBarMenuItem,children:[(0,f.jsx)(p.Z,{fontSize:"large"}),(0,f.jsx)("span",{className:e.sideBarMenuItem_text,children:"Home"})]})}),(0,f.jsx)(t.rU,{to:"/admin/products",style:{color:"inherit",textDecoration:"none"},children:(0,f.jsxs)("li",{className:e.sideBarMenuItem,children:[(0,f.jsx)(l.Z,{fontSize:"large"}),(0,f.jsxs)("span",{className:e.sideBarMenuItem_text,children:[" ","Products"]})]})}),(0,f.jsx)(t.rU,{to:"/admin/new/product",style:{color:"inherit",textDecoration:"none"},children:(0,f.jsxs)("li",{className:e.sideBarMenuItem,children:[(0,f.jsx)(c.Z,{fontSize:"large"}),(0,f.jsx)("span",{className:e.sideBarMenuItem_text,children:"Add Product"})]})}),(0,f.jsx)(t.rU,{to:"/admin/orders",style:{color:"inherit",textDecoration:"none"},children:(0,f.jsxs)("li",{className:e.sideBarMenuItem,children:[(0,f.jsx)(m.Z,{fontSize:"large"}),(0,f.jsx)("span",{className:e.sideBarMenuItem_text,children:"Orders"})]})}),(0,f.jsx)(t.rU,{to:"/admin/reviews",style:{color:"inherit",textDecoration:"none"},children:(0,f.jsxs)("li",{className:e.sideBarMenuItem,children:[(0,f.jsx)(x.Z,{fontSize:"large"}),(0,f.jsx)("span",{className:e.sideBarMenuItem_text,children:"Reviews"})]})}),(0,f.jsx)(t.rU,{to:"/contact",style:{color:"inherit",textDecoration:"none"},children:(0,f.jsxs)("li",{className:e.sideBarMenuItem,children:[(0,f.jsx)(u.Z,{fontSize:"large"}),(0,f.jsx)("span",{className:e.sideBarMenuItem_text,children:"Contact"})]})})]}),(0,f.jsx)("div",{className:e.divider}),(0,f.jsxs)(o.Z,{className:e.button,children:[(0,f.jsx)(h.Z,{fontSize:"large",style:{marginRight:"10px"}}),"Logout"]})]})})})}},661:function(){}}]);
//# sourceMappingURL=189.4e713aa1.chunk.js.map