(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(7),r=a.n(l),o=(a(13),a(14),a(1)),i=a(2),s=a(5),d=a(4),m=a(3),u=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{title:this.props.title,onClick:this.props.onClick,className:[this.props.active===this.props.title&&"active","navbar-content"].join(" ")},c.a.createElement("p",{title:this.props.title},this.props.title))}}]),a}(n.Component),h=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleClick=n.handleClick.bind(Object(s.a)(n)),n.state={expanded:!1},n}return Object(i.a)(a,[{key:"handleClick",value:function(e){var t=document.createElement("div"),a=document.createElement("img");t.classList.add("whole-page"),t.onclick=function(){t.parentNode.removeChild(t)},a.classList.add("large-in-charge"),a.src=e.target.getAttribute("src"),t.appendChild(a),document.querySelector("body").appendChild(t)}},{key:"render",value:function(){return c.a.createElement("img",{src:this.props.src,alt:"",onClick:this.handleClick})}}]),a}(n.Component);function p(){return c.a.createElement("div",{class:"body-container"},c.a.createElement("div",{class:"text"},c.a.createElement("h1",null,"My Life"),c.a.createElement("p",null,"I'm a sophomore CS Student at UCSB, graduating in 2022. I have plans to participate in the 5 year BS/MS Program to graduate with an MS in Computer Science in 23. After that, I don't really know what I want to do. There are so many options out there and I'd like to metaphorically shop around before I choose what I want to specialize in."),c.a.createElement(h,{src:"https://images.squarespace-cdn.com/content/v1/5af699e5c3c16a3922f8f0f6/1531812330123-RHVWYUVHXQQPNXYPT0KK/ke17ZwdGBToddI8pDm48kF6XmQBVZlvvJ0SVmgiS8kJZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpwxNEJmDBzRg8XZK26bl2cGOrIs4x3KMiyOodDqFSVNLq3sPAflOY5lB3Y5-FpRzI8/Screen+Shot+2018-07-17+at+12.25.12+AM.png?format=2500w"})))}function v(){return c.a.createElement("div",{class:"body-container"},c.a.createElement(b,{title:"UCSBB",desc:"An app, built using React Native, that allows the user to find the nearest bathroom to them on campus using a map and a list of all bathrooms. Built for CS48 with Prof. Tobias Hollerer",src:"videos/vid1.mp4"}),c.a.createElement(b,{title:"Placeholder",desc:"Yet another Placeholder",src:"videos/vid2.mp4"}),c.a.createElement(b,{title:"Placeholder 2",desc:"Imagine I created a project that has something to do with this video :)",src:"videos/vid2.mp4"}),c.a.createElement(b,{title:"Placeholder 2",desc:"Imagine I created a project that has something to do with this video :)",src:"videos/vid2.mp4"}))}function b(e){return c.a.createElement("div",{className:"project"},c.a.createElement("span",{class:"project-desc"},c.a.createElement("h1",null,e.title),c.a.createElement("p",null,e.desc)),c.a.createElement("video",{class:"project-vid",width:640,height:480,controls:!0},c.a.createElement("source",{src:e.src,type:"video/mp4"})))}function E(){return c.a.createElement("div",{class:"body-container"},c.a.createElement("div",{class:"container"},c.a.createElement(h,{src:"email.png"}),c.a.createElement("a",{href:"mailto://nick.arenberg22@gmail.com",class:"button"},"Email")),c.a.createElement("div",{class:"container"},c.a.createElement(h,{src:"https://1000logos.net/wp-content/uploads/2017/03/LinkedIn-Logo-500x500.png"}),c.a.createElement("a",{href:"https://www.linkedin.com/in/nickarenberg/",class:"button"},"LinkedIn")),c.a.createElement("div",{class:"container"},c.a.createElement(h,{src:"https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"}),c.a.createElement("a",{href:"https://github.com/narenberg",class:"button"},"Github")))}function f(e){return c.a.createElement("div",null,c.a.createElement("div",{className:"text",id:"summary"},c.a.createElement("h2",null,"Computer Science Student at UCSB")),c.a.createElement("div",{className:"body-container"},c.a.createElement("div",{className:"links-container"},c.a.createElement("h2",null,"Here's a little more about me"),c.a.createElement("div",{className:"button-container"},c.a.createElement("a",{href:"#",className:"button",onClick:e.onButtonPress,title:"About"},"About Me"),c.a.createElement("a",{href:"#",className:"button",onClick:e.onButtonPress,title:"Projects"},"Projects"),c.a.createElement("a",{href:"#",className:"button",onClick:e.onButtonPress,title:"Contact"},"Contact Me"))),c.a.createElement(h,{src:"portrait.jpg",id:"portrait"})))}var k=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return c.a.createElement("a",{href:"#",class:"button scroll-top-button",onClick:this.props.onClick},"Back To Top")}}]),a}(n.Component),g=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleClick=function(e){n.setState({activeTab:e.target.getAttribute("title")})},n.state={activeTab:"Homepage",scrolled:!1},n.handleClick=n.handleClick.bind(Object(s.a)(n)),n.handleScroll=n.handleScroll.bind(Object(s.a)(n)),n.handleScrollClick=n.handleScrollClick.bind(Object(s.a)(n)),n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"handleScrollClick",value:function(e){window.scrollTo(0,0),this.setState({scrolled:!1})}},{key:"handleScroll",value:function(e){this.setState({scrolled:!0}),window.scrollY<=100&&this.setState({scrolled:!1})}},{key:"render",value:function(){var e,t=this,a=this.state.activeTab;"Homepage"===a&&(e=c.a.createElement(f,{onButtonPress:this.handleClick})),"About"===a&&(e=c.a.createElement(p,null)),"Projects"===a&&(e=c.a.createElement(v,null)),"Contact"===a&&(e=c.a.createElement(E,null));var n=c.a.createElement(k,{onClick:this.handleScrollClick});return c.a.createElement("div",null,c.a.createElement("div",{className:"navbar-container"},c.a.createElement(u,{title:"Homepage",active:this.state.activeTab,onClick:function(e){return t.handleClick(e)}}),c.a.createElement(u,{title:"About",active:this.state.activeTab,onClick:function(e){return t.handleClick(e)}}),c.a.createElement(u,{title:"Projects",active:this.state.activeTab,onClick:function(e){return t.handleClick(e)}}),c.a.createElement(u,{title:"Contact",active:this.state.activeTab,onClick:function(e){return t.handleClick(e)}})),e,this.state.scrolled&&n)}}]),a}(c.a.Component);var C=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(g,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.0172cc74.chunk.js.map