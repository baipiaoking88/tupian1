import{d as c,e as r,j as e,a1 as p,B as n,bm as u,cB as g,o as a,cA as f}from"./index.b4298eea.js";import{a as d}from"./useUtil.7ca0bda2.js";import{F as h}from"./File.d4aec7a1.js";import"./api.5a741649.js";import"./icon.f2fe2827.js";import"./index.73ff8816.js";import"./index.1acfb043.js";import"./Layout.19d5b48c.js";import"./Markdown.944cde28.js";import"./index.9a19b081.js";import"./FolderTree.341a488f.js";const U=()=>{const t=c(),[o,i]=r(!1),[s,l]=r(!1),{currentObjLink:m}=d();return e(h,{get children(){return e(p,{spacing:"$2",get children(){return[e(n,{as:"a",get href(){return`itms-services://?action=download-manifest&url=${u}/i/${g(encodeURIComponent(a.raw_url)+"/"+f(encodeURIComponent(a.obj.name)))}.plist`},onClick:()=>{i(!0)},get children(){return t(`home.preview.${o()?"installing":"install"}`)}}),e(n,{as:"a",colorScheme:"primary",get href(){return"apple-magnifier://install?url="+encodeURIComponent(m(!0))},onClick:()=>{l(!0)},get children(){return t(`home.preview.${s()?"tr-installing":"tr-install"}`)}})]}})}})};export{U as default};
