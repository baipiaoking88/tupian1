import{d as i,u,j as e,br as c,I as g,_ as p,N as d,c3 as m,a1 as o,bs as h,aP as a,B as s,X as $}from"./index.b4298eea.js";import{a as f}from"./Layout.19d5b48c.js";import{L as b}from"./index.1acfb043.js";import"./index.73ff8816.js";import"./Markdown.944cde28.js";import"./api.5a741649.js";import"./useUtil.7ca0bda2.js";import"./index.9a19b081.js";import"./FolderTree.341a488f.js";const x=()=>{const t=i(),{refresh:n}=f(),{back:l}=u();return e($,{w:{"@initial":"$full","@md":"$lg"},p:"$8",spacing:"$3",alignItems:"start",get children(){return[e(c,{get children(){return t("home.input_password")}}),e(g,{type:"password",get value(){return p()},get background(){return d("$neutral3","$neutral2")()},onKeyDown:r=>{r.key==="Enter"&&n(!0)},onInput:r=>m(r.currentTarget.value)}),e(o,{w:"$full",justifyContent:"space-between",get children(){return[e(h,{fontSize:"$sm",color:"$neutral10",direction:{"@initial":"column","@sm":"row"},columnGap:"$1",get children(){return[e(a,{get children(){return t("global.have_account")}}),e(a,{color:"$info9",as:b,get href(){return`/@login?redirect=${encodeURIComponent(location.pathname)}`},get children(){return t("global.go_login")}})]}}),e(o,{spacing:"$2",get children(){return[e(s,{colorScheme:"neutral",onClick:l,get children(){return t("global.back")}}),e(s,{onClick:()=>n(!0),get children(){return t("global.ok")}})]}})]}})]}})};export{x as default};
