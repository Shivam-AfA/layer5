"use strict";(self.webpackChunkLayer5=self.webpackChunkLayer5||[]).push([[4524],{60434:function(e,t,n){n.r(t),n.d(t,{Head:function(){return E},default:function(){return w}});var a=n(67294),r=n(17875),i=n(37242),l=n(33754),o=n(36966),s=n(91744),c=n(64423).default.div.withConfig({displayName:"blogGridstyle__BlogPageWrapper",componentId:"sc-1m69vla-0"})(["\n  .blog-grid-wrapper {\n    margin: 5rem auto;\n  }\n  .tooltip-search {\n    margin-bottom: 0.8rem;\n  }\n  .post-thumb-block {\n    img {\n      padding: 0px;\n      margin-top: 0.5rem;\n      width: 100%;\n      height: 100%;\n    }\n  }\n  @media only screen and (max-width: 576px) {\n    .blog-grid-wrapper {\n      margin: 0 auto 1rem;\n    }\n    .tooltip-search {\n\t\t\tdisplay: block;\n\t\t}\n  }\n\n  @media only screen and (max-width: 992px) {\n    .blog-page-wrapper {\n      margin-bottom: 5rem;\n    }\n\n    .post-meta-block {\n      height: 3.5rem;\n    }\n  }\n\n  @media only screen and (min-width: 577px) {\n    .tooltip-search {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      margin-bottom: 0;\n    }\n  }\n  /* @media only screen and (min-width: 990px) {\n    .tooltip-search {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n    }\n  } */\n"]),m=n(89725),u=n(20749),d=n(60580),p=n(34945),g=n(91988),f=function(e){var t=e.isListView,n=e.setListView,r=e.setGridView,f=e.pageContext,h=e.data,w=(0,a.useState)(1),E=w[0],b=w[1],x=(0,a.useState)(10)[0],y=E*x,v=y-x,L=(0,a.useState)(""),V=L[0],Z=L[1],k=(0,g.Z)(h.allMdx.nodes,Z,V,["frontmatter","title"],"id"),C=k.queryResults,P=k.searchData,X=C.slice(v,y),J=function(e){b(e),window.scrollTo({top:150,left:100,behavior:"smooth"})};return a.createElement(c,null,a.createElement(l.Z,{title:"Blog",path:"Blog",img:s.Z,feedlink:"/blog/feed.xml"}),a.createElement("div",{className:"blog-page-wrapper"},a.createElement(i.W2,null,a.createElement(i.X2,null,a.createElement(i.JX,{xs:12,lg:8},a.createElement("div",{className:"tooltip-search"},a.createElement(u.Z,{isListView:t,setListView:n,setGridView:r}),a.createElement(d.Z,{searchQuery:V,searchData:P,paginate:J,currentPage:E})),a.createElement("div",{className:"blog-grid-wrapper"},a.createElement(i.X2,null,C.length<1&&a.createElement(i.JX,{xs:12,sm:6},'No blog post that matches the title "',V,'" found.'),X.length>0&&X.map((function(e){var t=e.id,n=e.frontmatter,r=e.fields;return a.createElement(i.JX,{key:t,xs:12,sm:6},a.createElement(m.Z,{frontmatter:n,fields:r}))})),a.createElement(i.JX,null,X.length>0&&a.createElement(p.Z,{postsPerPage:x,totalPosts:C.length,paginate:J,currentPage:E}))))),a.createElement(i.JX,{xs:12,lg:4},a.createElement(o.Z,{pageContext:f}))))))},h=(0,n(40156).ZP)((function(){return n.e(1634).then(n.bind(n,31634))})),w=function(e){var t=(0,a.useState)(!1),n=t[0],r=t[1],i=function(){r(!0)};(0,a.useEffect)((function(){e.location.state&&e.location.state.isListView&&i()}),[]);var l=function(e){return n?a.createElement(h,e):a.createElement(f,e)};return a.createElement(a.Fragment,null,a.createElement(l,{isListView:n,setListView:i,setGridView:function(){r(!1)},pageContext:e.pageContext,data:e.data}))},E=function(){return a.createElement(r.Z,{title:"Blog",description:"The latest news and announcements about Layer5, our products, and our ecosystem, as well as voices from across our community."})}}}]);
//# sourceMappingURL=component---src-pages-blog-index-js-ecca201847c5f641a885.js.map