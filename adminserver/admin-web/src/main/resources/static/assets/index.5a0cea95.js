import{u as m}from"./useContextMenu.815ac96c.js";import{au as d,a as C,cD as _,aw as l,o as f,j as b,z as t,n as a,B as c,E as x}from"./index.a0f4a53f.js";import{P as h}from"./index.77638da0.js";import"./index.acf588db.js";import"./index.ee2c9f76.js";import"./index.eaffcdc0.js";import"./useSize.bbc03f2d.js";import"./eagerComputed.f27ac635.js";import"./useWindowSizeFn.61bf8fec.js";import"./useContentViewHeight.66e53fe3.js";import"./ArrowLeftOutlined.41cc7a18.js";import"./index.0c949780.js";import"./transButton.e15f313e.js";const w=C({components:{CollapseContainer:_,PageWrapper:h},setup(){const[e]=m(),{createMessage:n}=x();function i(o){e({event:o,items:[{label:"New",icon:"bi:plus",handler:()=>{n.success("click new")}},{label:"Open",icon:"bx:bxs-folder-open",handler:()=>{n.success("click open")}}]})}function r(o){e({event:o,items:[{label:"New",icon:"bi:plus",children:[{label:"New1-1",icon:"bi:plus",divider:!0,children:[{label:"New1-1-1",handler:()=>{n.success("click new")}},{label:"New1-2-1",disabled:!0}]},{label:"New1-2",icon:"bi:plus"}]}]})}return{handleContext:i,handleMultipleContext:r}}});function N(e,n,i,r,o,g){const s=l("a-button"),p=l("CollapseContainer"),u=l("PageWrapper");return f(),b(u,{title:"\u53F3\u952E\u83DC\u5355\u793A\u4F8B"},{default:t(()=>[a(p,{title:"Simple"},{default:t(()=>[a(s,{type:"primary",onContextmenu:e.handleContext},{default:t(()=>[c(" Right Click on me ")]),_:1},8,["onContextmenu"])]),_:1}),a(p,{title:"Multiple",class:"mt-4"},{default:t(()=>[a(s,{type:"primary",onContextmenu:e.handleMultipleContext},{default:t(()=>[c(" Right Click on me ")]),_:1},8,["onContextmenu"])]),_:1})]),_:1})}var j=d(w,[["render",N]]);export{j as default};