(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"8rvu":function(e,t,a){var n=a("q1tI");function r(e){return n.createElement("svg",e,n.createElement("path",{d:"M19.9999 11V13H7.99991L13.4999 18.5L12.0799 19.92L4.15991 12L12.0799 4.08L13.4999 5.5L7.99991 11H19.9999Z",fill:"currentColor"}))}r.defaultProps={width:"24",height:"24",viewBox:"0 0 24 24",fill:"none"},e.exports=r,r.default=r},IB3r:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),i=a("L6Je"),l=a("/GUw"),o=a("Wbzz"),s=a("Ji2X"),c=a("Z3vd"),u=(a("5hZ/"),function(e){var t=e.sectionTitle,a=e.title,n=e.subtitle,i=e.buttonTitle,l=e.onButtonClick,u=e.anchorLink,m=r.a.createElement(c.a,{variant:"contained",color:"primary",className:"hero-btn",onClick:l},i);return u&&(m=r.a.createElement(c.a,{component:o.a,to:u,variant:"contained",color:"primary",className:"hero-btn",onClick:l},i)),r.a.createElement("div",{className:"generic-hero"},r.a.createElement(s.a,null,r.a.createElement("div",{className:"content-wrapper"},r.a.createElement("div",{className:"section-title"},t),r.a.createElement("h1",null,a),r.a.createElement("p",null,n),m)))}),m=a("TSYQ"),d=a.n(m),h=a("6u8J"),p=a("tRbT"),f=a("Pepv"),v=a("ymGY"),g=a("WWUh"),E=(a("hY+d"),a("pk4C")),y=a.n(E),w=a("8rvu"),b=a.n(w);var k=function(e){var t,a;function n(t){var a;(a=e.call(this,t)||this).handleNext=function(){var e=a.state,t=e.currentPage,n=e.testimonials;a.setState({direction:"left",currentPage:(t+1)%n.length})},a.handleBack=function(){var e=a.state,t=e.currentPage,n=e.testimonials;a.setState({direction:"right",currentPage:t-1>=0?t-1:n.length-1})};var n=t.data.allMarkdownRemark.edges.reduce((function(e,t){return t.node.frontmatter.testimonial?(e.length&&2!==e[e.length-1].length?e[e.length-1].push(t):e.push([t]),e):e}),[]);return a.state={currentPage:0,direction:"left",testimonials:n},a}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.state,t=e.currentPage,a=e.direction,n=e.testimonials;return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,null),r.a.createElement(f.a,{title:"Testimonials",subtitle:"What people are saying about us",className:"testimonials",id:"testimonials"},r.a.createElement(s.a,null,r.a.createElement("div",{className:"carousel-wrapper"},r.a.createElement(p.a,{container:!0,direction:"row",justify:"center",alignItems:"stretch",spacing:3,className:"controls"},n.length>1&&r.a.createElement(p.a,{item:!0,xs:12,sm:12,md:8},r.a.createElement(b.a,{alt:"arrow back",onClick:this.handleBack,style:{marginRight:30}}),r.a.createElement(y.a,{alt:"arrow forward",onClick:this.handleNext}))),r.a.createElement(p.a,{container:!0,direction:"row",justify:"center",alignItems:"stretch",spacing:3},n[t].map((function(e,n){return r.a.createElement(p.a,{item:!0,xs:12,sm:6,md:4,key:t+"-"+n},r.a.createElement(h.a,{direction:a,in:!0,mountOnEnter:!0,unmountOnExit:!0},r.a.createElement(g.a,{testimonial:e.node.frontmatter.testimonial,author:e.node.frontmatter.author})))}))),n.length>1&&r.a.createElement("div",{className:"indicators"},n.map((function(e,a){return r.a.createElement("span",{className:d()("bullet",{active:a===t}),key:a})})))))))},n}(r.a.Component),L=a("WFOo");a("8nsx");a.d(t,"query",(function(){return x}));t.default=function(e){var t=e.data;return r.a.createElement(i.a,null,r.a.createElement(l.a,{title:"We have stories to inspire you | Blue Pixel",pathname:"/case-studies/",description:"Over the years, businesses have trusted us for the agility, neatness and the robustness we promise and deliver."}),r.a.createElement(u,{sectionTitle:"Case Studies",title:"We have stories to inspire you",subtitle:"Over the years, businesses have trusted us for the agility, neatness and the robustness we promise and deliver.",buttonTitle:"Read ALL Stories",anchorLink:"/case-studies/#portfolio"}),r.a.createElement(k,{data:t}),r.a.createElement(L.a,{data:t}))};var x="2268511814"},TSYQ:function(e,t,a){var n;a("LK8F"),function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)&&n.length){var l=r.apply(null,n);l&&e.push(l)}else if("object"===i)for(var o in n)a.call(n,o)&&n[o]&&e.push(o)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},pk4C:function(e,t,a){var n=a("q1tI");function r(e){return n.createElement("svg",e,n.createElement("path",{d:"M0.5 7.00002V9.00002H36L30.5 14.5L31.92 15.92L39.84 8.00002L31.92 0.0800171L30.5 1.50002L36 7.00002H0.5Z",fill:"currentColor"}))}r.defaultProps={width:"40",height:"16",viewBox:"0 0 40 16",fill:"none"},e.exports=r,r.default=r}}]);
//# sourceMappingURL=component---src-pages-case-studies-jsx-c34ae919d8d920e4ee4c.js.map