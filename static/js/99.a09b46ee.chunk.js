"use strict";(self.webpackChunkreact_kabzda_1=self.webpackChunkreact_kabzda_1||[]).push([[99],{337:(a,e,s)=>{s.r(e),s.d(e,{default:()=>A});var i=s(43);const t="Dialogs_dialogs__P9QVB",l="Dialogs_dialogsItems__GHkAb",n="Dialogs_messages__jluhN",d="Dialogs_content__mtwJX",c="Dialogs_messagesElements__PycBx",r="Dialogs_newMessageForm__bHr6v",g="Dialogs_newMessageFild__W4adw",m="Dialogs_btnWrapper__cRrq6",o={dialog:"DialogItem_dialog__j8fbf",active:"DialogItem_active__ss0sa",ava:"DialogItem_ava__j8cfk",name:"DialogItem_name__G+-KC"};var _=s(475),v=s(579);const h=a=>{const e="/dialogs/"+a.id;return(0,v.jsx)("div",{id:o.key,className:o.dialog,children:(0,v.jsxs)(_.k2,{className:a=>{let{isActive:e}=a;return e?o.active:""},to:e,children:[(0,v.jsx)("div",{className:o.ava,children:(0,v.jsx)("img",{src:a.avatar,alt:"ava"})}),(0,v.jsx)("div",{className:o.name,children:a.name})]})})},j="Message_message__asuSK",u="Message_ava__QoGXy",x="Message_name__cg7j+",b="Message_date__1XDFC",N="Message_text__nAlzc",p=a=>{const e=a.date&&a.date.split(",")[1];return(0,v.jsxs)("div",{className:j,children:[(0,v.jsx)("div",{className:u,children:(0,v.jsx)("img",{src:a.avatar,alt:"ava"})}),(0,v.jsx)("div",{className:x,children:a.name||"name"}),(0,v.jsx)("div",{className:b,children:e}),(0,v.jsx)("div",{className:N,children:a.message})]})};var D=s(3),M=s(847),k=s(216);const f=a=>({auth:a.auth});var w=s(923),y=s(775),S=s(781),I=s(383);const P=a=>{let{onSendMessage:e}=a;return(0,v.jsx)(y.lV,{onSubmit:e,render:a=>{let{handleSubmit:e,form:s,submitting:i,pristine:t,values:l}=a;return(0,v.jsxs)("form",{onSubmit:e,className:r,children:[(0,v.jsx)(y.D0,{name:"newMessageBody",component:I.T,placeholder:"Write a message...",type:"text",className:g}),(0,v.jsx)("div",{className:m,children:(0,v.jsx)(S.A,{type:"submit",disabled:i||t,children:"Send"})})]})}})};const A=(0,w.Zz)((a=>(0,D.Ng)(f)((e=>e.auth.isAuth?(0,v.jsx)(a,{...e}):(0,v.jsx)(k.C5,{to:"/login"})))),(0,D.Ng)((a=>({dialogsPage:a.dialogsPage})),{sendMessage:M._}))((a=>{let e=a.dialogsPage.dialogs.map((a=>(0,v.jsx)(h,{id:a.id,name:a.name||"name",avatar:a.avatar||"https://i5.imageban.ru/out/2024/04/23/1bb19e775b66a89851ce626a69603c73.png"},a.id))),s=a.dialogsPage.messages.map((a=>(0,v.jsx)(p,{id:a.id,message:a.message,avatar:a.avatar||"https://i5.imageban.ru/out/2024/04/23/1bb19e775b66a89851ce626a69603c73.png",date:a.date},a.id)));const r=(0,i.useRef)(null);return(0,v.jsxs)("div",{className:t,children:[(0,v.jsx)("div",{className:l,children:e}),(0,v.jsx)("div",{className:n,children:(0,v.jsxs)("div",{className:d,children:[(0,v.jsx)("div",{className:c,children:s}),(0,v.jsx)(P,{onSendMessage:async(e,s)=>{await a.sendMessage(e.newMessageBody),r.current&&r.current.scrollIntoView({behavior:"smooth",block:"start"}),s.reset()}}),(0,v.jsx)("div",{ref:r})]})})]})}))}}]);
//# sourceMappingURL=99.a09b46ee.chunk.js.map