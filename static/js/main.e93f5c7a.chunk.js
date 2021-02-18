(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{112:function(e,a,t){e.exports=t(244)},117:function(e,a,t){},118:function(e,a,t){},196:function(e,a){},214:function(e,a){},215:function(e,a){},216:function(e,a){},231:function(e,a){},244:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),s=t(49),c=t.n(s),o=(t(117),t(11)),i=t(12),l=t(14),m=t(13),u=t(15),h=(t(118),t(74)),p=t.n(h);p.a.initializeApp({apiKey:"AIzaSyBj4ccOkHKuMW3f_d67z8qzWFbA0fn5oTc",authDomain:"one-chan-playground.firebaseapp.com",databaseURL:"https://one-chan-playground.firebaseio.com",projectId:"one-chan-playground",storageBucket:"",messagingSenderId:"1032608414674"});var g=p.a,d=t(253),b=t(254),v=t(255),f=t(36),E=t.n(f),O=t(28),y=t(245),j=t(246),w=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(l.a)(this,Object(m.a)(a).call(this,e))).state={message:""},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"handleChange",value:function(e){this.setState({message:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault();var a=this.state.message;""!==a.replace(/\s/g,"")&&this.props.createMessage(a.trim()),this.setState({message:""})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(y.a,{onSubmit:this.handleSubmit.bind(this)},r.a.createElement(j.a,{type:"text",placeholder:"Why not say something?",value:this.state.message,onChange:this.handleChange.bind(this)})))}}]),a}(n.Component),k=t(8),x=t(247),N=t(248),C=t(249),I=t(261),M=t(250),S=t(251),L=t(252),z=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(l.a)(this,Object(m.a)(a).call(this,e))).toggle=t.toggle.bind(Object(k.a)(Object(k.a)(t))),t.state={isOpen:!1},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(x.a,{color:"dark",dark:!0,expand:"md",fixed:"top"},r.a.createElement(N.a,{href:"#"},"onechan"),r.a.createElement(C.a,{onClick:this.toggle}),r.a.createElement(I.a,{isOpen:this.state.isOpen,navbar:!0},r.a.createElement(M.a,{navbar:!0},r.a.createElement(S.a,null,r.a.createElement(L.a,{href:"https://github.com/mattxwang/onechan"},"an anonymous one-channel chatroom"))),r.a.createElement(M.a,{className:"ml-auto",navbar:!0},r.a.createElement(S.a,null,r.a.createElement(L.a,{href:"https://matthewwang.me"},"made by matt wang"))))))}}]),a}(n.Component),A=t(109),B=t.n(A),D=t(110),T=t.n(D),U=function(e){function a(){return Object(o.a)(this,a),Object(l.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"createMarkup",value:function(e){var a=T()(e);return{__html:t(239).markdown.toHTML(a)}}},{key:"render",value:function(){return r.a.createElement("div",{className:"my-2"},r.a.createElement(d.a,{fluid:!0},r.a.createElement(b.a,null,r.a.createElement(v.a,{xs:"2",md:"1"},r.a.createElement("img",{className:"message-image rounded",src:this.props.messageObject.image,alt:"A random avatar generated from adorable avatars."})),r.a.createElement(v.a,{xs:"10",md:"11"},r.a.createElement("div",null,r.a.createElement("b",null,"@",this.props.messageObject.username)," ",B()(this.props.messageObject.timestamp).fromNow()),r.a.createElement("div",{dangerouslySetInnerHTML:this.createMarkup(this.props.messageObject.message)})))),r.a.createElement("hr",{className:"message-dividers"}))}}]),a}(n.Component),W=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(t=Object(l.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(s)))).messagesEnd=r.a.createRef(),t.scrollToBottom=function(){t.messagesEnd.current.scrollIntoView({behavior:"smooth"})},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){this.scrollToBottom()}},{key:"componentDidUpdate",value:function(){this.scrollToBottom()}},{key:"render",value:function(){return 0===this.props.messageList.length?r.a.createElement("div",{className:"text-white"},"It's empty. Why not say something?",r.a.createElement("div",{ref:this.messagesEnd})):r.a.createElement("div",{className:"message-list"},this.props.messageList.map(function(e,a){return r.a.createElement(U,{messageObject:e,key:a})}),r.a.createElement("div",{ref:this.messagesEnd}))}}]),a}(n.Component),H=t(256),_=t(257),J=t(258),K=t(259),R=t(260),q=function(e){function a(){return Object(o.a)(this,a),Object(l.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(H.a,{color:"dark",inverse:!0},r.a.createElement(_.a,{top:!0,className:"img-responsive",src:this.props.image,alt:"A random avatar generated from adorable avatars."}),r.a.createElement(J.a,null,r.a.createElement(K.a,null,"you are ",r.a.createElement("b",null,"@",this.props.username)),r.a.createElement(R.a,{color:"primary",outline:!0,onClick:this.props.generateNewUser},"become someone else"))))}}]),a}(n.Component),F=function(e){function a(e){var t;Object(o.a)(this,a),t=Object(l.a)(this,Object(m.a)(a).call(this,e));var n=E()()+E()(),r=O["adorable-avatars-url"]+O["profile-avatar-size"]+"/"+n+".png";return t.state={userImage:r,username:n,messageList:[]},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;g.database().ref("messages").on("value",function(a){var t=a.val(),n=[];for(var r in t){var s={message:t[r].message,image:t[r].image.replace("https://api.adorable.io/avatars/",O["adorable-avatars-url"]),username:t[r].username,timestamp:t[r].timestamp};n.push(s)}e.setState({messageList:n})})}},{key:"createMessage",value:function(e){var a={image:this.state.userImage,message:e,username:this.state.username,timestamp:Date.now()};g.database().ref("messages").push(a)}},{key:"generateNewUser",value:function(){var e=E()()+E()(),a=O["adorable-avatars-url"]+O["profile-avatar-size"]+"/"+e+".png";this.setState({userImage:a,username:e})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement(z,null),r.a.createElement(d.a,{fluid:!0},r.a.createElement(b.a,null,r.a.createElement(v.a,{xs:"3"},r.a.createElement(q,{username:this.state.username,image:this.state.userImage,generateNewUser:function(){e.generateNewUser()}}),r.a.createElement("div",{className:"text-white text-center"},r.a.createElement("small",null,"made by ",r.a.createElement("a",{href:"https://matthewwang.me"},"matt")," on ",r.a.createElement("a",{href:"https://github.com/mattxwang/onechan"},"GitHub")," with react, firebase, and ",r.a.createElement("a",{href:"https://github.com/mattxwang/onechan"},"many other node libraries")," |  avatars from ",r.a.createElement("a",{href:"http://avatars.adorable.io/"},"adorable avatars")))),r.a.createElement(v.a,{xs:"9"},r.a.createElement(W,{messageList:this.state.messageList})))),r.a.createElement(d.a,{className:"fixed-bottom mb-1",fluid:!0},r.a.createElement(b.a,null,r.a.createElement(v.a,{xs:"3"}),r.a.createElement(v.a,{xs:"9"},r.a.createElement(w,{createMessage:function(a){e.createMessage(a)}})))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(243);c.a.render(r.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},28:function(e){e.exports={"adorable-avatars-url":"https://api.hello-avatar.com/adorables/","profile-avatar-size":256}}},[[112,1,2]]]);
//# sourceMappingURL=main.e93f5c7a.chunk.js.map