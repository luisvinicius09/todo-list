(()=>{var e={468:e=>{const t=e=>{if(0===e.length)return void(document.querySelector("#tasks-container").innerHTML="<h2>No tasks created</h2>");const t=e.map(((e,t)=>`<div class='singleTask'>\n      <h3>${e.name}</h3>\n      <input class='task-input editing' value=${e.name}>\n      <p>${e.desc}</p>\n      <input class='task-input editing' value=${e.desc}>\n      <p>${e.priority}</p>\n      <input class='task-input editing' value=${e.priority}>\n      <p>${e.date}</p>\n      <input class='task-input editing' type='date' value=${e.date}>\n\n      <button id='edit-btn' type='button' onClick='editTask()'>Edit</button>\n      \n      <button class='task-input editing' type='button'>Save</button>\n\n      <button class='task-input editing' type='button' onClick='deleteTask(${t})'>Delete</button>\n    </div>`)).join("\n");document.querySelector("#tasks-container").innerHTML=t};e.exports={filteringBtns:()=>{const e=document.querySelectorAll(".projectBtn");for(let n=0;n<e.length;n+=1)e[n].addEventListener("click",(()=>{const o=JSON.parse(localStorage.getItem("tasks")).filter((t=>{if(t.project==e[n].innerText)return t}));t(o)}))}}},15:(e,t,n)=>{const{filteringBtns:o}=n(468),a=document.querySelector("#project-btn"),r=document.querySelector("#new-project"),s=()=>JSON.parse(localStorage.getItem("projects")),l=()=>{const e=s().map((e=>`<button class='projectBtn' >${e.name}</button>`)).join("\n");document.querySelector("#projects-container").innerHTML=e},c=()=>{const e=JSON.parse(localStorage.getItem("projects")),t=document.querySelector("#task-project"),n=e.map((e=>`<option id='${e.name}'>${e.name}</option>`));t.innerHTML=n},i=document.querySelector("p");for(let e in i)docum;e.exports={displayProjects:l,projectCreation:()=>{a.addEventListener("click",(()=>{(e=>{if(null===e.value||""===e.value)return alert("Please fill the required fields"),!0})(r)||((e=>{const t=(e=>({name:e}))(e),n=s();var o;n.push(t),o=n,localStorage.setItem("projects",JSON.stringify(o)),r.value=""})(r.value),l(),c(),o())}))},updatedProjects:s,addProjectsToSelection:c}},507:e=>{const t=document.querySelector("#task-name"),n=document.querySelector("#task-desc"),o=document.querySelector("#task-date"),a=document.querySelector("#task-priority"),r=document.querySelector("#task-project"),s=document.querySelector("#task-btn"),l=()=>JSON.parse(localStorage.getItem("tasks")),c=e=>{localStorage.setItem("tasks",JSON.stringify(e))},i=()=>{const e=l().map(((e,t)=>`<div class='singleTask'>\n      <h3>${e.name}</h3>\n      <p>${e.desc}</p>\n      <p>${e.priority}</p>\n      <p>${e.date}</p>\n      <button type='button' onClick='deleteTask(${t})'>Delete</button>\n    </div>`)).join("\n");document.querySelector("#tasks-container").innerHTML=e,d()};window.deleteTask=deleteTask=e=>{const t=l();t.splice(e,1),c(t),i()};const d=()=>{const e=document.querySelectorAll(".singleTask");for(let t=0;t<e.length;t+=1){const n=document.createElement("button");n.innerText="Edit",n.type="button",n.addEventListener("click",(()=>{u(t)})),e[t].appendChild(n)}},u=e=>{const n=l(),o=document.querySelector("#content"),a=document.createElement("div");a.classList.add("modal"),a.id="taskModal";const r=document.createElement("div");r.classList.add("modalContent");const s=document.createElement("span");s.classList.add("close"),s.innerText="X",document.createElement("input").value=n[e].name;const c=document.createElement("input");c.value=n[e].desc;const i=document.createElement("input");i.type="date",i.value=n[e].date,document.createElement("select"),document.createElement("select"),r.appendChild(i),r.appendChild(c),r.appendChild(t),r.appendChild(s),a.appendChild(r),o.appendChild(a);const d=document.querySelector(".modal");d.style.display="block",s.onclick=()=>{d.style.display="none",a.remove()}};window.saveTask=saveTask=()=>{},e.exports={taskCreation:()=>{s.addEventListener("click",(()=>{(e=>{if(null===e.value||""===e.value)return alert("Please fill the required fields"),!0})(t)||(((e,r,s,i,d)=>{const u=((e,t,n,o,a)=>({name:e,desc:t,date:n,priority:o,project:a}))(e,r,s,i,d),p=l();p.push(u),c(p),t.value="",n.value="",o.value="",a.value=""})(t.value,n.value,o.value,a.value,r.value),i())}))},displayTasks:i}}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e=n(15),t=n(507),o=n(468);window.addEventListener("load",(()=>{null===JSON.parse(localStorage.getItem("projects"))&&localStorage.setItem("projects",JSON.stringify([{name:"Inbox"}])),null===JSON.parse(localStorage.getItem("tasks"))&&localStorage.setItem("tasks",JSON.stringify(new Array)),(0,e.displayProjects)(),(0,t.displayTasks)(),(0,e.addProjectsToSelection)(),(0,e.projectCreation)(),(0,t.taskCreation)(),(0,o.filteringBtns)()}))})()})();