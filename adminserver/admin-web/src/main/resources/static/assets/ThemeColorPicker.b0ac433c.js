import{au as m,a as l,dZ as c,b as d,aw as _,o as i,h as r,F as f,az as u,q as p,bm as k,n as h}from"./index.a0f4a53f.js";import{b as v}from"./index.2bb02504.js";import"./index.de88b89b.js";import"./index.f7ff2165.js";import"./ArrowLeftOutlined.41cc7a18.js";import"./index.acf588db.js";import"./index.362b741c.js";import"./FullscreenOutlined.a503eb0e.js";import"./index.1933480a.js";import"./useWindowSizeFn.61bf8fec.js";import"./useContentViewHeight.66e53fe3.js";import"./uniqBy.9a18c29f.js";import"./_baseIteratee.7eef18d3.js";import"./get.72cb776d.js";import"./index.58a233b4.js";import"./useRefs.727c25ab.js";import"./PlusOutlined.6c06013c.js";import"./RedoOutlined.32db9eb1.js";import"./index.82156895.js";import"./lock.efcf4217.js";const C=l({name:"ThemeColorPicker",components:{CheckOutlined:c},props:{colorList:{type:Array,default:()=>[]},event:{type:Number},def:{type:String}},setup(e){const{prefixCls:n}=d("setting-theme-picker");function o(s){e.event&&v(e.event,s)}return{prefixCls:n,handleClick:o}}}),b=["onClick"];function g(e,n,o,s,x,y){const a=_("CheckOutlined");return i(),r("div",{class:p(e.prefixCls)},[(i(!0),r(f,null,u(e.colorList||[],t=>(i(),r("span",{key:t,onClick:$=>e.handleClick(t),class:p([`${e.prefixCls}__item`,{[`${e.prefixCls}__item--active`]:e.def===t}]),style:k({background:t})},[h(a)],14,b))),128))],2)}var J=m(C,[["render",g]]);export{J as default};
