"use strict";(self.webpackChunkLayer5=self.webpackChunkLayer5||[]).push([[8173,1634],{31634:function(t,e,n){n.r(e),n.d(e,{default:function(){return d}});var a=n(67294),r=n(20749),i=n(37242),l=n(33754),o=n(36966),s=n(89725),m=n(64423).default.div.withConfig({displayName:"blogListstyle__BlogPageWrapper",componentId:"sc-9xipt1-0"})(["\n\t.blog-list-wrapper {\n\t\tmargin-bottom: 5rem;\n\t}\n\n\t.blog-lists{\n\t\tmargin-top: 5rem;\n\t\t\n\t}\n\t.post-block{\n\t\tbackground-color: ",";\n\t\twidth: 100%;\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t\t\n\t\t\n\t}\n\t.blog-lists{\n\t\tmargin-top: 5rem;\n\t}\n\t.post-thumb-block{\n\t\theight: 8rem;\n\t\twidth: 25%;\n\t\timg{\n\t\t\tpadding: 0px;\n\t\t\tmargin: 0px;\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t}\n\t}\n\n\t.post-content-block{\n\t\theight: 8.5rem;\n\t\twidth: 75%;\n\t}\n\n\t.post-title{\n\t\tfont-size: 1.5rem;\n\t}\n\n\t.post-meta-block{\n\t\tflex-direction: row-reverse;\n\t\tp{\n\t\t\tfont-size: 1rem;\n\t\t\ttext-align: end;\n\t\t}\n\t\t.author{\n\t\t\tfont-size: 1rem;\n\t\t\ttext-align: start;\n\t\t\tmargin-bottom:0;\n\t\t}\n\t}\n\n\t@media screen and (max-width:1200px){\n\t\t.post-block{\n\t\t\theight: auto;\n\t\t}\n\t\t.post-thumb-block{\n\t\t\theight: 8rem;\n\t\n\t\t\timg{\n\t\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\t}\n\t\t}\n\t}\n\n\t@media screen and (max-width:992px){\n\t\t.post-block{\n\t\t\theight: 10rem;\n\t\t}\n\t\t.post-thumb-block{\n\t\t\theight: 15rem;\n\t\n\t\t\timg{\n\t\t\t\tmax-height:15rem;\n\t\t\t}\n\t\t}\n\t}\n\n\t@media screen and (max-width:500px){\n\t\t.post-block{\n\t\t\theight: 9rem;\n\t\t}\n\t\t.blog-list-wrapper{\n\t\t\tmargin: 0rem auto 5rem;\n\t\t}\n\t\t.blog-lists{\n\t\t\tmargin-top: 0rem;\n\t\t}\n\t\t.post-content-block{\n\t\t\theight: fit-content;\n\t\t}\n\t}\n\n\t@media only screen and (min-width: 575px) {\n    .tooltip-search {\n      margin-bottom: 0;\n    }\n  }\n  @media only screen and (min-width: 990px) {\n    .tooltip-search {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n    }\n  }\n  \n"],(function(t){return t.theme.DarkTheme?"#212121":"#FFFFFF"})),c=n(91744),g=n(34945),h=n(60580),u=n(91988),d=function(t){var e=t.isListView,n=t.setListView,d=t.setGridView,p=t.pageContext,f=t.data,b=t.theme,w=(0,a.useState)(1),x=w[0],E=w[1],y=(0,a.useState)(10)[0],k=x*y,Z=k-y,v=f.allMdx,C=v.totalCount,L=v.nodes,P=(0,a.useState)(""),F=P[0],V=P[1],X=(0,u.Z)(L,V,F,["frontmatter","title"],"id"),S=X.queryResults,z=X.searchData,B=p.category?p.category:null,D=p.tag?p.tag:null,J=S.slice(Z,k);C=S.length;var N=D?C+" post"+(1===C?"":"s")+' tagged with "'+D+'"':B?C+" post"+(1===C?"":"s")+' categorized as "'+B+'"':"Blog",T=function(t){E(t)};return a.createElement(m,null,a.createElement(l.Z,{title:N,path:"Blog",img:c.Z,feedlink:"/blog/feed.xml"}),a.createElement("div",{className:"blog-list-wrapper"},a.createElement(i.W2,null,a.createElement(i.X2,null,a.createElement(i.JX,{sm:12,md:8},p.tag||p.category?a.createElement(h.Z,{searchQuery:F,searchData:z,paginate:T,currentPage:x}):a.createElement("div",{className:"tooltip-search"},a.createElement(r.Z,{isListView:e,setListView:n,setGridView:d}),a.createElement(h.Z,{searchQuery:F,searchData:z,paginate:T,currentPage:x})),a.createElement(i.X2,{className:"blog-lists"},J.length>0&&J.map((function(t){var e=t.id,n=t.frontmatter,r=t.fields;return a.createElement(i.JX,{xs:12,key:e},a.createElement(s.Z,{theme:b,frontmatter:n,fields:r}))})),a.createElement(i.JX,null,J.length>0&&a.createElement(g.Z,{postsPerPage:y,totalPosts:S.length,currentPage:x,paginate:T})))),a.createElement(i.JX,{sm:12,md:4},a.createElement(o.Z,{pageContext:p}))))))}},14087:function(t,e,n){n.r(e),n.d(e,{Head:function(){return h}});var a=n(67294),r=n(64423),i=n(63275),l=n(59423),o=n(82520),s=n(31634),m=n(27563),c=n(35085),g=n(38001);e.default=function(t){var e=t.pageContext,n=t.data,l=(0,a.useState)(),h=l[0],u=l[1];return a.createElement(r.ThemeProvider,{theme:"dark"===h?g.k:g.Z},a.createElement(i.Z,null,a.createElement(c.Z,null),a.createElement(o.Z,{theme:h,themeSetter:function(t){u(t)}}),a.createElement(s.default,{data:n,pageContext:e}),a.createElement(m.default,null)))};var h=function(){return a.createElement(l.Z,{title:"Blog",description:"The latest news and announcements about Layer5, our products, and our ecosystem, as well as voices from across our community.",canonical:"https://layer5.io/blog"})}}}]);
//# sourceMappingURL=component---src-templates-blog-tag-list-js-c4eb4376f3b4112b5e33.js.map