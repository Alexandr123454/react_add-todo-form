(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){e.exports=a(21)},20:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(9),s=a.n(i),o=a(7),l=a.n(o),c=a(10),u=a(11),m=a(12),d=a(1),p=a(2),h=a(4),b=a(3),f=a(5),y=(a(20),function(e){var t=e.user;return r.a.createElement("div",{className:"todo-list_name"},t.name)}),g=function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props.todo;return r.a.createElement("div",{className:"todo"},r.a.createElement("tbody",null,r.a.createElement("tr",{className:"todo-list"},r.a.createElement("td",null,e.id),r.a.createElement("td",null,r.a.createElement(y,{user:e.user})),r.a.createElement("td",null,e.title),r.a.createElement("td",null,r.a.createElement("input",{className:"todo-check",type:"checkbox",id:e.id,defaultChecked:e.completed})))))}}]),t}(r.a.Component),v=a(6),E=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",address:{street:"Kulas Light",suite:"Apt. 556",city:"Gwenborough",zipcode:"92998-3874",geo:{lat:"-37.3159",lng:"81.1496"}},phone:"1-770-736-8031 x56442",website:"hildegard.org",company:{name:"Romaguera-Crona",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",address:{street:"Victor Plains",suite:"Suite 879",city:"Wisokyburgh",zipcode:"90566-7771",geo:{lat:"-43.9509",lng:"-34.4618"}},phone:"010-692-6593 x09125",website:"anastasia.net",company:{name:"Deckow-Crist",catchPhrase:"Proactive didactic contingency",bs:"synergize scalable supply-chains"}},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",address:{street:"Douglas Extension",suite:"Suite 847",city:"McKenziehaven",zipcode:"59590-4157",geo:{lat:"-68.6102",lng:"-47.0653"}},phone:"1-463-123-4447",website:"ramiro.info",company:{name:"Romaguera-Jacobson",catchPhrase:"Face to face bifurcated interface",bs:"e-enable strategic applications"}},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",address:{street:"Hoeger Mall",suite:"Apt. 692",city:"South Elvis",zipcode:"53919-4257",geo:{lat:"29.4572",lng:"-164.2990"}},phone:"493-170-9623 x156",website:"kale.biz",company:{name:"Robel-Corkery",catchPhrase:"Multi-tiered zero tolerance productivity",bs:"transition cutting-edge web services"}},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",address:{street:"Skiles Walks",suite:"Suite 351",city:"Roscoeview",zipcode:"33263",geo:{lat:"-31.8129",lng:"62.5342"}},phone:"(254)954-1289",website:"demarco.info",company:{name:"Keebler LLC",catchPhrase:"User-centric fault-tolerant solution",bs:"revolutionize end-to-end systems"}},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",address:{street:"Norberto Crossing",suite:"Apt. 950",city:"South Christy",zipcode:"23505-1337",geo:{lat:"-71.4197",lng:"71.7478"}},phone:"1-477-935-8478 x6430",website:"ola.org",company:{name:"Considine-Lockman",catchPhrase:"Synchronised bottom-line interface",bs:"e-enable innovative applications"}},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",address:{street:"Rex Trail",suite:"Suite 280",city:"Howemouth",zipcode:"58804-1099",geo:{lat:"24.8918",lng:"21.8984"}},phone:"210.067.6132",website:"elvis.io",company:{name:"Johns Group",catchPhrase:"Configurable multimedia task-force",bs:"generate enterprise e-tailers"}},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",address:{street:"Ellsworth Summit",suite:"Suite 729",city:"Aliyaview",zipcode:"45169",geo:{lat:"-14.3990",lng:"-120.7677"}},phone:"586.493.6943 x140",website:"jacynthe.com",company:{name:"Abernathy Group",catchPhrase:"Implemented secondary concept",bs:"e-enable extensible e-tailers"}},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",address:{street:"Dayna Park",suite:"Suite 449",city:"Bartholomebury",zipcode:"76495-3109",geo:{lat:"24.6463",lng:"-168.8889"}},phone:"(775)976-6794 x41206",website:"conrad.com",company:{name:"Yost and Sons",catchPhrase:"Switchable contextually-based project",bs:"aggregate real-time technologies"}},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",address:{street:"Kattie Turnpike",suite:"Suite 198",city:"Lebsackbury",zipcode:"31428-2261",geo:{lat:"-38.2386",lng:"57.2232"}},phone:"024-648-3804",website:"ambrose.net",company:{name:"Hoeger LLC",catchPhrase:"Centralized empowering task-force",bs:"target end-to-end models"}}],S=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(h.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",userId:0,errorsMap:{title:"",user:""}},a.handleFormSubmit=function(e){e.preventDefault();var t={};a.setState(function(e){if(e.title||(t.title="Enter todo, please"),0===+e.userId&&(t.user="Select user, please"),Object.keys(t).length>0)return{errorsMap:t};a.props.onSubmit({id:a.props.todos.length+1,user:0!==+a.state.userId?E.find(function(e){return+a.state.userId===+e.id}):{},title:a.state.title,complited:"false"})}),a.setState({userId:0,title:""})},a.handleChange=function(e){var t;e.preventDefault();var n=e.target,r=n.name,i=n.value;a.setState((t={},Object(v.a)(t,r,i),Object(v.a)(t,"errorsMap",{user:"",title:""}),t))},a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.state,t=e.title,a=e.userId,n=e.errorsMap;return r.a.createElement("form",{onSubmit:this.handleFormSubmit,className:"form"},r.a.createElement("div",{className:"form-field"},r.a.createElement("label",{htmlFor:"form-input"},r.a.createElement("input",{className:"form-field_input",value:t,id:"form-input",type:"text",name:"title",placeholder:"Enter todo",onChange:this.handleChange})),r.a.createElement("div",{className:"form-field_error"},n.title&&r.a.createElement("div",null,n.title)),r.a.createElement("label",{htmlFor:"form-select"},r.a.createElement("select",{id:"form-select",className:"form-field_input",name:"userId",value:a,onChange:this.handleChange},r.a.createElement("option",null,"Select user"),E.map(function(e){return r.a.createElement("option",{value:e.id,key:e.id},e.name)}))),r.a.createElement("div",{className:"form-field_error"},n.user&&r.a.createElement("div",null,n.user)),r.a.createElement("button",{type:"submit",className:"form-field_button"},"Save")))}}]),t}(r.a.Component),w=[{userId:1,id:1,title:"delectus aut autem",completed:!1},{userId:1,id:2,title:"quis ut nam facilis et officia qui",completed:!1}],k=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(h.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={visibleTodos:[]},a.addTodo=function(e){a.setState(function(t){return{visibleTodos:[].concat(Object(m.a)(t.visibleTodos),[e])}})},a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=Object(u.a)(l.a.mark(function e(){var t;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=w.map(function(e,t){return Object(c.a)({id:t+1},e,{user:E.find(function(t){return e.userId===t.id})})}),this.setState({visibleTodos:t});case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(S,{todos:this.state.visibleTodos,onSubmit:this.addTodo}),this.state.visibleTodos.map(function(e){return r.a.createElement(g,{key:e.id,todo:e})}))}}]),t}(r.a.Component);s.a.render(r.a.createElement(k,null),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.acfbb3a9.chunk.js.map