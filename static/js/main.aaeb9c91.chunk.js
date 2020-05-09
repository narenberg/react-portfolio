(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{20:function(e,t,a){e.exports=a(39)},25:function(e,t,a){},26:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(18),l=a.n(r),i=(a(25),a(26),a(12)),o=a.n(i),s=a(14),m=a(4),u=a(5),d=a(9),h=a(7),p=a(6),b=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{title:this.props.title,onClick:this.props.onClick,className:[this.props.active===this.props.title&&"active","navbar-content"].join(" ")},c.a.createElement("p",{title:this.props.title},this.props.title))}}]),a}(n.Component),v=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).handleClick=n.handleClick.bind(Object(d.a)(n)),n.state={expanded:!1},n}return Object(u.a)(a,[{key:"handleClick",value:function(e){var t=document.createElement("div"),a=document.createElement("img");t.classList.add("whole-page"),t.onclick=function(){t.parentNode.removeChild(t)},a.classList.add("large-in-charge"),a.src=e.target.getAttribute("src"),t.appendChild(a),document.querySelector("body").appendChild(t)}},{key:"render",value:function(){return c.a.createElement("img",{src:this.props.src,alt:"",onClick:this.handleClick})}}]),a}(n.Component);function E(){return c.a.createElement("div",{class:"body-container"},c.a.createElement("div",{class:"text"},c.a.createElement("h1",null,"My Life"),c.a.createElement("p",null,"I'm a sophomore CS Student at UCSB, graduating in 2022. I have plans to participate in the 5 year BS/MS Program to graduate with an MS in Computer Science in 23. After that, I don't really know what I want to do. There are so many options out there and I'd like to metaphorically shop around before I choose what I want to specialize in."),c.a.createElement(v,{src:"https://images.squarespace-cdn.com/content/v1/5af699e5c3c16a3922f8f0f6/1531812330123-RHVWYUVHXQQPNXYPT0KK/ke17ZwdGBToddI8pDm48kF6XmQBVZlvvJ0SVmgiS8kJZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpwxNEJmDBzRg8XZK26bl2cGOrIs4x3KMiyOodDqFSVNLq3sPAflOY5lB3Y5-FpRzI8/Screen+Shot+2018-07-17+at+12.25.12+AM.png?format=2500w"})))}function f(){return c.a.createElement("div",{class:"body-container"},c.a.createElement(g,{title:"UCSBB",desc:"An app, built using React Native, that allows the user to find the nearest bathroom to them on campus using a map and a list of all bathrooms. Built for CS48 with Prof. Tobias Hollerer",src:"videos/vid1.mp4"}),c.a.createElement(g,{title:"Placeholder",desc:"Yet another Placeholder",src:"videos/vid2.mp4"}),c.a.createElement(g,{title:"Placeholder 2",desc:"Imagine I created a project that has something to do with this video :)",src:"videos/vid2.mp4"}),c.a.createElement(g,{title:"Placeholder 2",desc:"Imagine I created a project that has something to do with this video :)",src:"videos/vid2.mp4"}))}function g(e){return c.a.createElement("div",{className:"project"},c.a.createElement("span",{className:"project-desc"},c.a.createElement("h1",null,e.title),c.a.createElement("p",null,e.desc)),c.a.createElement("video",{class:"project-vid",width:640,height:480,controls:!0},c.a.createElement("source",{src:e.src,type:"video/mp4"})))}function k(){return c.a.createElement("div",{className:"body-container"},c.a.createElement("div",{className:"container"},c.a.createElement(v,{src:"email.png"}),c.a.createElement("a",{href:"mailto://nick.arenberg22@gmail.com",className:"button"},"Email")),c.a.createElement("div",{className:"container"},c.a.createElement(v,{src:"https://1000logos.net/wp-content/uploads/2017/03/LinkedIn-Logo-500x500.png"}),c.a.createElement("a",{href:"https://www.linkedin.com/in/nickarenberg/",className:"button"},"LinkedIn")),c.a.createElement("div",{className:"container"},c.a.createElement(v,{src:"https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"}),c.a.createElement("a",{href:"https://github.com/narenberg",className:"button"},"Github")))}function C(e){return c.a.createElement("div",null,c.a.createElement("div",{className:"text",id:"summary"},c.a.createElement("h2",null,"Computer Science Student at UCSB")),c.a.createElement("div",{className:"body-container"},c.a.createElement("div",{className:"links-container"},c.a.createElement("h2",null,"Here's a little more about me"),c.a.createElement("div",{className:"button-container"},c.a.createElement("a",{href:"#",className:"button",onClick:e.onButtonPress,title:"About"},"About Me"),c.a.createElement("a",{href:"#",className:"button",onClick:e.onButtonPress,title:"Projects"},"Projects"),c.a.createElement("a",{href:"#",className:"button",onClick:e.onButtonPress,title:"Contact"},"Contact Me"))),c.a.createElement(v,{src:"portrait.jpg",id:"portrait"})))}var y=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return c.a.createElement("a",{href:"#",class:"button scroll-top-button",onClick:this.props.onClick},"Back To Top")}}]),a}(n.Component),j=a(19),S=a(16),O=a.n(S),w={apiKey:"AIzaSyACmUfTItOa_Pb-vp4PMZvbAv9KO_5mE18",authDomain:"portfolio-cs185.firebaseapp.com",databaseURL:"https://portfolio-cs185.firebaseio.com"};O.a.initializeApp(w);var N=O.a,x=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(e){var n;Object(m.a)(this,a);return(n=t.call(this,e)).state={name:"",desc:"",msg:"",public:!1,email:""},n.handleChange=n.handleChange.bind(Object(d.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(d.a)(n)),n}return Object(u.a)(a,[{key:"handleChange",value:function(e){var t=e.target.name;"public"===t?this.setState({public:e.target.checked}):this.setState(Object(j.a)({},t,e.target.value))}},{key:"handleSubmit",value:function(e){console.log(this.state);var t=this.state,a=new Date;t.date=a.getMonth()+"/"+a.getDate()+"/"+a.getFullYear(),N.database().ref("data").push(t),alert("Message submitted successfully!"),e.target.reset(),window.reload(),e.preventDefault()}},{key:"render",value:function(){return c.a.createElement("div",{className:"guest-form-container"},c.a.createElement("h1",null,"Leave me a message!"),c.a.createElement("form",{className:"guest-form",onSubmit:this.handleSubmit,onChange:this.handleChange},c.a.createElement("label",{htmlFor:"name"},"Your name:"),c.a.createElement("input",{type:"text",id:"name",name:"name",minLength:5,maxLength:20,required:!0}),c.a.createElement("label",{htmlFor:"desc"},c.a.createElement("span",null,"A short self-description (No more than 100 characters):")),c.a.createElement("input",{type:"text",id:"desc",name:"desc",maxLength:100}),c.a.createElement("label",{htmlFor:"msg"},c.a.createElement("span",null,"Enter your message here (No more than 500 characters)")),c.a.createElement("input",{type:"text",id:"msg",name:"msg",minLength:15,maxLength:500,required:!0}),c.a.createElement("label",{htmlFor:"public"}," Should this post be visible to others? "),c.a.createElement("input",{type:"checkbox",id:"public",name:"public"}),c.a.createElement("label",{htmlFor:"email"},"Enter your email so I can get back to you:"),c.a.createElement("input",{type:"text",pattern:"*@*.*",name:"email",id:"email"}),c.a.createElement("input",{type:"submit",value:"Submit"})))}}]),a}(c.a.Component),B=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={messages:[],shouldUpdate:!1},n}return Object(u.a)(a,[{key:"componentWillMount",value:function(){var e=Object(s.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state.messages,e.next=3,N.database().ref("data").orderByKey();case 3:return a=e.sent,e.next=6,a.on("child_added",(function(e){e.toJSON().public&&t.push(e.toJSON())}));case 6:this.setState({messages:t});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.messages;return c.a.createElement("div",{className:"msg-container"},e.map((function(e,t){return c.a.createElement("div",{className:"msg",key:t},c.a.createElement("h3",null,e.name),c.a.createElement("p",{className:"subtitle"},e.date),c.a.createElement("p",null,e.desc),c.a.createElement("p",null,e.msg))})))}}]),a}(n.Component),I=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={messages:e.messages},n}return Object(u.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"body-container"},c.a.createElement(x,null),c.a.createElement(B,{messages:this.state.messages}))}}]),a}(n.Component),P=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).handleClick=function(e){n.setState({activeTab:e.target.getAttribute("title")})},n.state={activeTab:"Homepage",scrolled:!1},n.handleClick=n.handleClick.bind(Object(d.a)(n)),n.handleScroll=n.handleScroll.bind(Object(d.a)(n)),n.handleScrollClick=n.handleScrollClick.bind(Object(d.a)(n)),n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=Object(s.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return window.addEventListener("scroll",this.handleScroll),t=[],e.next=4,N.database().ref("data").orderByKey();case 4:return a=e.sent,e.next=7,a.on("child_added",(function(e){console.log(e.toJSON().public),e.toJSON().public&&t.push(e.toJSON())}));case 7:this.setState({messages:t});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"handleScrollClick",value:function(e){window.scrollTo(0,0),this.setState({scrolled:!1})}},{key:"handleScroll",value:function(e){this.setState({scrolled:!0}),window.scrollY<=100&&this.setState({scrolled:!1})}},{key:"render",value:function(){var e,t=this,a=this.state.activeTab;"Homepage"===a&&(e=c.a.createElement(C,{onButtonPress:this.handleClick})),"About"===a&&(e=c.a.createElement(E,null)),"Projects"===a&&(e=c.a.createElement(f,null)),"Contact"===a&&(e=c.a.createElement(k,null)),"Guest Book"===a&&(e=c.a.createElement(I,{messages:this.state.messages}));var n=c.a.createElement(y,{onClick:this.handleScrollClick});return c.a.createElement("div",null,c.a.createElement("div",{className:"navbar-container"},c.a.createElement(b,{title:"Homepage",active:this.state.activeTab,onClick:function(e){return t.handleClick(e)}}),c.a.createElement(b,{title:"About",active:this.state.activeTab,onClick:function(e){return t.handleClick(e)}}),c.a.createElement(b,{title:"Projects",active:this.state.activeTab,onClick:function(e){return t.handleClick(e)}}),c.a.createElement(b,{title:"Contact",active:this.state.activeTab,onClick:function(e){return t.handleClick(e)}}),c.a.createElement(b,{title:"Guest Book",active:this.state.activeTab,onClick:function(e){return t.handleClick(e)}})),e,this.state.scrolled&&n)}}]),a}(c.a.Component);var T=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(P,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.aaeb9c91.chunk.js.map