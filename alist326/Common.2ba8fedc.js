import{d as v,u as $,a as l,bj as o,bK as C,c4 as w,e as I,j as t,c5 as R,aq as L,bp as r,n as p,a1 as T,B as u,X as _}from"./index.b4298eea.js";import{o as j}from"./index.73ff8816.js";import{I as x}from"./SettingItem.e13ae6b7.js";import{R as B}from"./ResponsiveGrid.31053da5.js";import"./index.27806543.js";import"./index.1acfb043.js";import"./item_type.be442da4.js";const V=d=>{const s=v(),{pathname:m}=$();j(`manage.sidemenu.${m().split("/").pop()}`);const[h,f]=l(()=>o.get(`/admin/setting/list?group=${d.group}`)),[c,i]=C([]),a=async()=>{const e=await f();r(e,i)};a();const[S,k]=l(()=>o.post("/admin/setting/save",w(c))),[y,g]=I(!1);return t(_,{w:"$full",alignItems:"start",spacing:"$2",get children(){return[t(B,{get children(){return t(R,{each:c,children:(e,q)=>t(x,L(e,{onChange:n=>{i(b=>e().key===b.key,"value",n)},onDelete:async()=>{g(!0);const n=await o.post(`/admin/setting/delete?key=${e().key}`);g(!1),r(n,()=>{p.success(s("global.delete_success")),a()})}}))})}}),t(T,{spacing:"$2",get children(){return[t(u,{colorScheme:"accent",onClick:a,get loading(){return h()||y()},get children(){return s("global.refresh")}}),t(u,{get loading(){return S()},onClick:async()=>{const e=await k();r(e,()=>p.success(s("global.save_success")))},get children(){return s("global.save")}})]}})]}})};export{V as default};
