(window.webpackJsonpportfolio=window.webpackJsonpportfolio||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){},102:function(e,t,a){},103:function(e,t,a){},104:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(19),c=a.n(r),s=(a(44),a(2)),o=a(3),l=a(5),p=a(4),m=a(6),d=(a(45),a(37)),u=a(20),h=a.n(u),g=(a(53),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{id:"home",className:"App-header",style:b},i.a.createElement("div",{style:v},i.a.createElement("div",{className:"view"},i.a.createElement("div",{className:"plane main"},i.a.createElement("div",{className:"circle"}),i.a.createElement("div",{className:"circle"}),i.a.createElement("div",{className:"circle"}),i.a.createElement("div",{className:"circle"}),i.a.createElement("div",{className:"circle"}),i.a.createElement("div",{className:"circle"})))),i.a.createElement("h1",{className:"headerTitle"},"Software Development"),i.a.createElement("div",{className:"headerSubtitle"},i.a.createElement("p",{className:"subtitle"},"Turn your ideas into reality")),i.a.createElement(h.a,{className:"contactButton",variant:"primary",href:"#contact"},"Contact"))}}]),t}(n.Component)),v={position:"relative",display:"flex",marginTop:"0px",width:"100%",height:"200px"},b={display:"flex",width:"100%",height:"82vh",marginTop:"50px",background:"#000 url(./hero_space.png) no-repeat center",backgroundSize:"cover"},f=g,j=a(16),E=a.n(j),y=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement(E.a,{style:O},i.a.createElement(E.a.Body,null,i.a.createElement("i",{className:"material-icons",style:k},this.props.service.image),i.a.createElement(E.a.Title,null,this.props.service.title),i.a.createElement(E.a.Text,null,this.props.service.description)))}}]),t}(n.Component),k={fontSize:"84px",color:"#5190f5"},O={width:"300px",height:"230px",alignSelf:"center"},w=y,N=a(38),C=a.n(N),_=(a(75),a(76),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(i)))).responsive={0:{items:1},700:{items:2},1024:{items:3}},a.padding={paddingLeft:10,paddingRight:10},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=function(e){return e.preventDefault()},t=this.props.services.map(function(t){return i.a.createElement(w,{key:t.id,service:t,onDragStart:e})});return i.a.createElement("div",{className:"servicesContainer"},i.a.createElement("span",{id:"services",className:"servicesAnchor"}),i.a.createElement(C.a,{mouseDragEnabled:!0,items:t,responsive:this.responsive,buttonsDisabled:!0,autoPlay:!0,autoPlayInterval:3e3,stagePadding:this.padding}))}}]),t}(n.Component)),z=a(17),A=a.n(z),x=a(15),S=a.n(x),L=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement(A.a,{collapseOnSelect:!0,expand:"lg",fixed:"top",bg:"dark",variant:"dark"},i.a.createElement(A.a.Brand,{href:"#home"},"Home"),i.a.createElement(A.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),i.a.createElement(A.a.Collapse,{id:"responsive-navbar-nav"},i.a.createElement(S.a,{className:"ml-auto"},i.a.createElement(S.a.Link,{href:"#services"},"Services"),i.a.createElement(S.a.Link,{href:"#projects"},"Projects"),i.a.createElement(S.a.Link,{href:"#skills"},"Skills"),i.a.createElement(S.a.Link,{href:"#contact"},"Contact"))))}}]),t}(n.Component),T=(a(99),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e="./".concat(this.props.project.image);return i.a.createElement("div",{className:"projectItemContainer"},i.a.createElement("div",{className:"projectImage"},i.a.createElement("img",{src:e,alt:this.props.project.title})),i.a.createElement("div",{className:"projectDescription"},i.a.createElement("h3",{className:"projectTitle"},this.props.project.title),i.a.createElement("p",{className:"projectDesc"},this.props.project.description),this.props.project.visitEnabled&&i.a.createElement(h.a,{className:"visitButton",variant:"outline-primary",href:this.props.project.projectLink},"Visit Project")))}}]),t}(n.Component)),D=(a(100),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.projects.map(function(e){return i.a.createElement(T,{key:e.id,project:e})});return i.a.createElement("div",{className:"projectContainer"},i.a.createElement("span",{id:"projects",className:"projectsAnchor"}),e)}}]),t}(n.Component)),I=(a(101),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(i)))).state={name:"",email:"",message:""},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"contactContainer"},i.a.createElement("span",{id:"contact",className:"contactAnchor"}),i.a.createElement("iframe",{src:"https://docs.google.com/forms/d/e/1FAIpQLSdNqynq57dl2_R_VZdZOxhiE3eo6CsCoRcfmiIzy-Pv6Fzpsw/viewform?embedded=true",width:"640",height:"700",frameborder:"0",marginheight:"0",marginwidth:"0",title:"contactForm"},"Loading\u2026"))}}]),t}(n.Component)),M=(a(102),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e="./".concat(this.props.skill.image),t=this.props.skill.title;return i.a.createElement("div",{className:"skillItemContainer"},i.a.createElement("img",{src:e,alt:t,title:t,style:{width:"100%"}}))}}]),t}(n.Component)),P=(a(103),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"skillsContainer"},i.a.createElement("span",{id:"skills",className:"skillsAnchor"}),i.a.createElement("h3",{className:"skillsTitle"},"Skills"),i.a.createElement("div",{className:"skillsContent"},this.props.skills.map(function(e){return i.a.createElement(M,{key:e.id,skill:e})})))}}]),t}(n.Component)),B=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(i)))).url="",a.state={services:[{id:1,title:"Web Development",description:"Custom web applications to turn your startup or project idea into a reality",image:"laptop_mac"},{id:2,title:"Mobile Development",description:"Cross-platform applications and native Android development",image:"android"},{id:3,title:"Wordpress Development",description:"Get a web page for your business or organization, start a personal blog, etc",image:"art_track"},{id:4,title:"Machine Learning",description:"Make use of machine learning to improve your business and get insights from data",image:"blur_on"}],projects:[{id:21,title:"Money Manager",description:"Native Android Application for personal finances. The App helps users take control over their money by keeping track of expenses, bills, budgets, savings, debts and loans. The App also offers reports to know where their money goes.",image:"proj1.png",projectLink:"https://play.google.com/store/apps/details?id=com.sharkmoney&hl=en",visitEnabled:!0},{id:22,title:"Fitness Tracker",description:"Mobile friendly web application to help people achieve their fitness goals and improve their health. Users can track their calories and workouts and see their progress based on their own goals.",image:"proj2.png",projectLink:"",visitEnabled:!0},{id:23,title:"Sign Interpreter",description:"Mobile application with machine learning technology that helps the average person to understand the sign language. A deep neural network is used to identify images of signs captured with the mobile device's camera.",image:"proj3.png",projectLink:"",visitEnabled:!1}],skills:[{id:51,title:"java",image:"zic_java.png"},{id:52,title:"python",image:"zic_python.png"},{id:53,title:"javascript",image:"zic_javascript.png"},{id:54,title:"typescript",image:"zic_typescript.png"},{id:55,title:"angular",image:"zic_angular.png"},{id:56,title:"spring",image:"zic_spring.png"},{id:57,title:"mysql",image:"zic_mysql.png"},{id:58,title:"android",image:"zic_android.png"},{id:59,title:"html",image:"zic_html.png"},{id:60,title:"css",image:"zic_css.png"},{id:61,title:"wordpress",image:"zic_wordpress.png"},{id:62,title:"ionic",image:"zic_ionic.png"},{id:63,title:"hibernate",image:"zic_hibernate.png"},{id:64,title:"selenium",image:"zic_selenium.png"}]},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(d.Helmet,null,i.a.createElement("meta",{charSet:"utf-8"}),i.a.createElement("title",null,"Portfolio")),i.a.createElement(L,null),i.a.createElement(f,null),i.a.createElement(_,{services:this.state.services}),i.a.createElement(D,{projects:this.state.projects}),i.a.createElement(P,{skills:this.state.skills}),i.a.createElement(I,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},39:function(e,t,a){e.exports=a(104)},44:function(e,t,a){},45:function(e,t,a){},53:function(e,t,a){},76:function(e,t,a){},99:function(e,t,a){}},[[39,1,2]]]);
//# sourceMappingURL=main.2481b690.chunk.js.map