import{d as p}from"./vuedraggable.umd.6a31bc48.js";import{a as x,ec as c,f as v,ah as h,au as u,aw as r,o as y,h as w,x as _,y as k,n,z as b,i as C,aB as S,aC as F}from"./index.a0f4a53f.js";import z from"./LayoutItem.bd7705d0.js";import{u as E}from"./useFormDesignState.eb5822a3.js";/* empty css              *//* empty css              */import{F as I}from"./Form.1dc8a98e.js";import"./FormNode.3dc565b8.js";import"./FormNodeOperate.d4a34f42.js";import"./index.05ba8a79.js";import"./isNumber.8890bb61.js";import"./index.1add0bdc.js";import"./formItemConfig.fe275348.js";import"./componentMap.532712b5.js";import"./index.c614ae28.js";import"./Checkbox.7a2e3c7b.js";import"./index.a4da4b30.js";import"./index.8681b128.js";import"./index.74f87750.js";import"./index.7392d982.js";import"./index.e3018fdb.js";import"./index.152abf5f.js";import"./index.acf588db.js";import"./useFormItem.51e35cd3.js";import"./RadioButtonGroup.0d384df5.js";import"./get.72cb776d.js";import"./index.112a9f37.js";import"./eagerComputed.f27ac635.js";import"./index.c34f9609.js";import"./_baseIteratee.7eef18d3.js";import"./DeleteOutlined.e19abfbb.js";import"./index.da68fb2b.js";import"./useRefs.727c25ab.js";import"./transButton.e15f313e.js";import"./index.49be5f7f.js";import"./useFlexGapSupport.55bd0324.js";import"./index.73a625c6.js";import"./useWindowSizeFn.61bf8fec.js";import"./FullscreenOutlined.a503eb0e.js";import"./index.0b5da165.js";import"./index.98ddc2e5.js";import"./uuid.2b29000c.js";import"./download.56687849.js";import"./base64Conver.08b9f4ec.js";import"./index.38d55bea.js";import"./index.82b1ebe6.js";import"./index.9fa96fb8.js";import"./Col.82157996.js";import"./index.3facd4b8.js";import"./useSize.bbc03f2d.js";const D=x({name:"FormComponentPanel",components:{LayoutItem:z,draggable:p,Form:I,Empty:c},emits:["handleSetSelectItem"],setup(o,{emit:e}){const{formConfig:a}=E(),l=({newIndex:t})=>{a.value.schemas=a.value.schemas||[];const i=a.value.schemas;i[t]=h(i[t]),e("handleSetSelectItem",i[t])},m=t=>{e("handleSetSelectItem",a.value.schemas[t.oldIndex])},g=v(()=>a.value.layout==="horizontal"?"Col":"div");return{addItem:l,handleDragStart:m,formConfig:a,layoutTag:g}}}),A={class:"form-panel v-form-container"},B={class:"draggable-box"};function P(o,e,a,l,m,g){const t=r("Empty"),i=r("LayoutItem"),s=r("draggable"),f=r("Form");return y(),w("div",A,[_(n(t,{class:"empty-text",description:"\u4ECE\u5DE6\u4FA7\u9009\u62E9\u63A7\u4EF6\u6DFB\u52A0"},null,512),[[k,o.formConfig.schemas.length===0]]),n(f,S(F(o.formConfig)),{default:b(()=>[C("div",B,[n(s,{class:"list-main ant-row",group:"form-draggable","component-data":{name:"list",tag:"div",type:"transition-group"},ghostClass:"moving",animation:180,handle:".drag-move",modelValue:o.formConfig.schemas,"onUpdate:modelValue":e[0]||(e[0]=d=>o.formConfig.schemas=d),"item-key":"key",onAdd:o.addItem,onStart:o.handleDragStart},{item:b(({element:d})=>[n(i,{class:"drag-move",schema:d,data:o.formConfig,"current-item":o.formConfig.currentItem||{}},null,8,["schema","data","current-item"])]),_:1},8,["modelValue","onAdd","onStart"])])]),_:1},16)])}var Ao=u(D,[["render",P],["__scopeId","data-v-1556f0f2"]]);export{Ao as default};