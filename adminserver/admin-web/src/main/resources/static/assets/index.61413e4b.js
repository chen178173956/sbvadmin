var F=(u,s,e)=>new Promise((i,m)=>{var d=t=>{try{o(e.next(t))}catch(a){m(a)}},p=t=>{try{o(e.throw(t))}catch(a){m(a)}},o=t=>t.done?i(t.value):Promise.resolve(t.value).then(d,p);o((e=e.apply(u,s)).next())});import{P as B}from"./index.44a6cc14.js";import{aw as C,a as f,s as E,ay as c,o as D,j as A,z as r,n,B as l,i as y}from"./index.26fcfc43.js";import{t as g}from"./account.d46efef1.js";import{C as _}from"./index.3c03e40b.js";import"./index.5c68a18c.js";/* empty css              */import"./index.2245f205.js";import"./index.f2fc0df8.js";import"./useSize.25d44e1a.js";import"./eagerComputed.c053c9c2.js";import"./useWindowSizeFn.d178ecd3.js";import"./useContentViewHeight.4f2058b0.js";import"./ArrowLeftOutlined.2e1e63d4.js";import"./index.672a21ec.js";import"./transButton.2853c7d5.js";import"./index.5adf5b3f.js";import"./index.995e13ea.js";import"./Col.ad062a60.js";import"./useFlexGapSupport.71c58254.js";import"./useRefs.753293e1.js";import"./PlusOutlined.15e93643.js";const k=f({name:"TestSessionTimeout",components:{ACardGrid:_.Grid,ACard:_,PageWrapper:B},setup(){const u=E();function s(){return F(this,null,function*(){u.setToken(void 0),u.setSessionTimeout(!0)})}function e(){return F(this,null,function*(){try{yield g()}catch(i){i.message}})}return{test1:s,test2:e}}}),h=l("HttpStatus == 401"),x=y("span",null,null,-1),T=l("Response.code == 401");function w(u,s,e,i,m,d){const p=c("a-button"),o=c("a-card-grid"),t=c("a-card"),a=c("PageWrapper");return D(),A(a,{title:"\u767B\u5F55\u8FC7\u671F\u793A\u4F8B",content:"\u7528\u6237\u767B\u5F55\u8FC7\u671F\u793A\u4F8B\uFF0C\u4E0D\u518D\u8DF3\u8F6C\u767B\u5F55\u9875\uFF0C\u76F4\u63A5\u751F\u6210\u9875\u9762\u8986\u76D6\u5F53\u524D\u9875\u9762\uFF0C\u65B9\u4FBF\u4FDD\u6301\u8FC7\u671F\u524D\u7684\u7528\u6237\u72B6\u6001\uFF01"},{default:r(()=>[n(t,{title:"\u8BF7\u70B9\u51FB\u4E0B\u9762\u7684\u6309\u94AE\u8BBF\u95EE\u6D4B\u8BD5\u63A5\u53E3",extra:"\u6240\u8BBF\u95EE\u7684\u63A5\u53E3\u4F1A\u8FD4\u56DEToken\u8FC7\u671F\u54CD\u5E94"},{default:r(()=>[n(o,{style:{width:"50%","text-align":"center"}},{default:r(()=>[n(p,{type:"primary",onClick:u.test1},{default:r(()=>[h]),_:1},8,["onClick"])]),_:1}),n(o,{style:{width:"50%","text-align":"center"}},{default:r(()=>[x,n(p,{class:"ml-4",type:"primary",onClick:u.test2},{default:r(()=>[T]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1})}var X=C(k,[["render",w]]);export{X as default};