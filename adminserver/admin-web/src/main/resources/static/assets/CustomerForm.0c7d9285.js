import{B as C}from"./BasicForm.539460c6.js";import"./componentMap.532712b5.js";import{u as B}from"./useForm.c64d8c6a.js";import"./RadioButtonGroup.0d384df5.js";import{au as E,a as g,cD as F,I as n,aw as e,o as h,j as b,z as p,n as i,bS as v,E as A}from"./index.a0f4a53f.js";import{P}from"./index.77638da0.js";/* empty css              *//* empty css              */import"./FormItem.vue_vue_type_script_lang.92918688.js";import"./index.acf588db.js";import"./index.c34f9609.js";import"./_baseIteratee.7eef18d3.js";import"./get.72cb776d.js";import"./DeleteOutlined.e19abfbb.js";import"./index.da68fb2b.js";import"./useRefs.727c25ab.js";import"./Form.1dc8a98e.js";import"./Col.82157996.js";import"./useFlexGapSupport.55bd0324.js";import"./useSize.bbc03f2d.js";import"./index.9fa96fb8.js";import"./uniqBy.9a18c29f.js";import"./index.73a625c6.js";import"./useWindowSizeFn.61bf8fec.js";import"./FullscreenOutlined.a503eb0e.js";import"./index.3facd4b8.js";import"./index.c614ae28.js";import"./Checkbox.7a2e3c7b.js";import"./index.a4da4b30.js";import"./index.8681b128.js";import"./index.74f87750.js";import"./index.7392d982.js";import"./index.e3018fdb.js";import"./index.152abf5f.js";import"./useFormItem.51e35cd3.js";import"./index.112a9f37.js";import"./eagerComputed.f27ac635.js";import"./transButton.e15f313e.js";import"./index.49be5f7f.js";import"./index.0b5da165.js";import"./index.98ddc2e5.js";import"./isNumber.8890bb61.js";import"./uuid.2b29000c.js";import"./download.56687849.js";import"./base64Conver.08b9f4ec.js";import"./index.38d55bea.js";import"./index.82b1ebe6.js";import"./index.ee2c9f76.js";import"./index.eaffcdc0.js";import"./useContentViewHeight.66e53fe3.js";import"./ArrowLeftOutlined.41cc7a18.js";import"./index.0c949780.js";const u=[{field:"field1",component:"Input",label:"render\u65B9\u5F0F",colProps:{span:8},rules:[{required:!0}],render:({model:o,field:t})=>v(n,{placeholder:"\u8BF7\u8F93\u5165",value:o[t],onChange:r=>{o[t]=r.target.value}})},{field:"field2",component:"Input",label:"render\u7EC4\u4EF6slot",colProps:{span:8},rules:[{required:!0}],renderComponentContent:()=>({suffix:()=>"suffix"})},{field:"field3",component:"Input",label:"\u81EA\u5B9A\u4E49Slot",slot:"f3",colProps:{span:8},rules:[{required:!0}]}],S=g({components:{BasicForm:C,CollapseContainer:F,PageWrapper:P,[n.name]:n},setup(){const{createMessage:o}=A(),[t,{setProps:r}]=B({labelWidth:120,schemas:u,actionColOptions:{span:24}});return{register:t,schemas:u,handleSubmit:m=>{o.success("click search,values:"+JSON.stringify(m))},setProps:r}}});function I(o,t,r,m,x,W){const l=e("a-input"),c=e("BasicForm"),d=e("CollapseContainer"),f=e("PageWrapper");return h(),b(f,{title:"\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u793A\u4F8B"},{default:p(()=>[i(d,{title:"\u81EA\u5B9A\u4E49\u8868\u5355"},{default:p(()=>[i(c,{onRegister:o.register,onSubmit:o.handleSubmit},{f3:p(({model:a,field:s})=>[i(l,{value:a[s],"onUpdate:value":_=>a[s]=_,placeholder:"\u81EA\u5B9A\u4E49slot"},null,8,["value","onUpdate:value"])]),_:1},8,["onRegister","onSubmit"])]),_:1})]),_:1})}var Wo=E(S,[["render",I]]);export{Wo as default};