var F=(t,s,e)=>new Promise((c,m)=>{var d=u=>{try{o(e.next(u))}catch(a){m(a)}},i=u=>{try{o(e.throw(u))}catch(a){m(a)}},o=u=>u.done?c(u.value):Promise.resolve(u.value).then(d,i);o((e=e.apply(t,s)).next())});import{P as _}from"./index.77638da0.js";import{au as C,a as f,s as E,aw as p,o as D,j as A,z as r,n,B as l,i as g}from"./index.a0f4a53f.js";import{t as k}from"./account.951de070.js";import{C as B}from"./index.0d5c8abf.js";import"./index.58a233b4.js";/* empty css              */import"./index.ee2c9f76.js";import"./index.eaffcdc0.js";import"./useSize.bbc03f2d.js";import"./eagerComputed.f27ac635.js";import"./useWindowSizeFn.61bf8fec.js";import"./useContentViewHeight.66e53fe3.js";import"./ArrowLeftOutlined.41cc7a18.js";import"./index.0c949780.js";import"./transButton.e15f313e.js";import"./index.82156895.js";import"./index.3facd4b8.js";import"./Col.82157996.js";import"./useFlexGapSupport.55bd0324.js";import"./index.9fa96fb8.js";import"./useRefs.727c25ab.js";import"./PlusOutlined.6c06013c.js";const y=f({name:"TestSessionTimeout",components:{ACardGrid:B.Grid,ACard:B,PageWrapper:_},setup(){const t=E();function s(){return F(this,null,function*(){t.setToken(void 0),t.setSessionTimeout(!0)})}function e(){return F(this,null,function*(){try{yield k()}catch(c){}})}return{test1:s,test2:e}}}),x=g("span",null,null,-1);function h(t,s,e,c,m,d){const i=p("a-button"),o=p("a-card-grid"),u=p("a-card"),a=p("PageWrapper");return D(),A(a,{title:"\u767B\u5F55\u8FC7\u671F\u793A\u4F8B",content:"\u7528\u6237\u767B\u5F55\u8FC7\u671F\u793A\u4F8B\uFF0C\u4E0D\u518D\u8DF3\u8F6C\u767B\u5F55\u9875\uFF0C\u76F4\u63A5\u751F\u6210\u9875\u9762\u8986\u76D6\u5F53\u524D\u9875\u9762\uFF0C\u65B9\u4FBF\u4FDD\u6301\u8FC7\u671F\u524D\u7684\u7528\u6237\u72B6\u6001\uFF01"},{default:r(()=>[n(u,{title:"\u8BF7\u70B9\u51FB\u4E0B\u9762\u7684\u6309\u94AE\u8BBF\u95EE\u6D4B\u8BD5\u63A5\u53E3",extra:"\u6240\u8BBF\u95EE\u7684\u63A5\u53E3\u4F1A\u8FD4\u56DEToken\u8FC7\u671F\u54CD\u5E94"},{default:r(()=>[n(o,{style:{width:"50%","text-align":"center"}},{default:r(()=>[n(i,{type:"primary",onClick:t.test1},{default:r(()=>[l("HttpStatus == 401")]),_:1},8,["onClick"])]),_:1}),n(o,{style:{width:"50%","text-align":"center"}},{default:r(()=>[x,n(i,{class:"ml-4",type:"primary",onClick:t.test2},{default:r(()=>[l("Response.code == 401")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1})}var Q=C(y,[["render",h]]);export{Q as default};