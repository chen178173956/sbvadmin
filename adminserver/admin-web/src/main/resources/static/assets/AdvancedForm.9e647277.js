import{B as c}from"./BasicForm.539460c6.js";import"./componentMap.532712b5.js";import{u as a}from"./useForm.c64d8c6a.js";import"./RadioButtonGroup.0d384df5.js";import{au as B,a as d,cD as f,aw as r,o as b,j as P,z as n,n as t}from"./index.a0f4a53f.js";import{P as h}from"./index.77638da0.js";/* empty css              *//* empty css              */import"./FormItem.vue_vue_type_script_lang.92918688.js";import"./index.acf588db.js";import"./index.c34f9609.js";import"./_baseIteratee.7eef18d3.js";import"./get.72cb776d.js";import"./DeleteOutlined.e19abfbb.js";import"./index.da68fb2b.js";import"./useRefs.727c25ab.js";import"./Form.1dc8a98e.js";import"./Col.82157996.js";import"./useFlexGapSupport.55bd0324.js";import"./useSize.bbc03f2d.js";import"./index.9fa96fb8.js";import"./uniqBy.9a18c29f.js";import"./index.73a625c6.js";import"./useWindowSizeFn.61bf8fec.js";import"./FullscreenOutlined.a503eb0e.js";import"./index.3facd4b8.js";import"./index.c614ae28.js";import"./Checkbox.7a2e3c7b.js";import"./index.a4da4b30.js";import"./index.8681b128.js";import"./index.74f87750.js";import"./index.7392d982.js";import"./index.e3018fdb.js";import"./index.152abf5f.js";import"./useFormItem.51e35cd3.js";import"./index.112a9f37.js";import"./eagerComputed.f27ac635.js";import"./transButton.e15f313e.js";import"./index.49be5f7f.js";import"./index.0b5da165.js";import"./index.98ddc2e5.js";import"./isNumber.8890bb61.js";import"./uuid.2b29000c.js";import"./download.56687849.js";import"./base64Conver.08b9f4ec.js";import"./index.38d55bea.js";import"./index.82b1ebe6.js";import"./index.ee2c9f76.js";import"./index.eaffcdc0.js";import"./useContentViewHeight.66e53fe3.js";import"./ArrowLeftOutlined.41cc7a18.js";import"./index.0c949780.js";const m=()=>[{field:"field1",component:"Input",label:"\u5B57\u6BB51",colProps:{span:8},componentProps:{placeholder:"\u81EA\u5B9A\u4E49placeholder",onChange:o=>{}}},{field:"field2",component:"Input",label:"\u5B57\u6BB52",colProps:{span:8}},{field:"field3",component:"DatePicker",label:"\u5B57\u6BB53",colProps:{span:8}},{field:"field4",component:"Select",label:"\u5B57\u6BB54",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1",key:"1"},{label:"\u9009\u98792",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"\u5B57\u6BB55",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]}}];function C(){return[{field:"field10",component:"Input",label:"\u5B57\u6BB510",colProps:{span:8}},{field:"field11",component:"Input",label:"\u5B57\u6BB511",colProps:{span:8}},{field:"field12",component:"Input",label:"\u5B57\u6BB512",colProps:{span:8}},{field:"field13",component:"Input",label:"\u5B57\u6BB513",colProps:{span:8}}]}const F=d({components:{BasicForm:c,CollapseContainer:f,PageWrapper:h},setup(){const[o]=a({labelWidth:120,schemas:m(),actionColOptions:{span:24},compact:!0,showAdvancedButton:!0}),p=[];for(let e=14;e<30;e++)p.push({field:"field"+e,component:"Input",label:"\u5B57\u6BB5"+e,colProps:{span:8}});const[i]=a({labelWidth:120,schemas:[...m(),...C(),{field:"",component:"Divider",label:"\u66F4\u591A\u5B57\u6BB5"},...p],actionColOptions:{span:24},compact:!0,showAdvancedButton:!0,alwaysShowLines:2});return{register:o,register1:i}}});function g(o,p,i,e,_,A){const l=r("BasicForm"),u=r("CollapseContainer"),s=r("PageWrapper");return b(),P(s,{title:"\u53EF\u6298\u53E0\u8868\u5355\u793A\u4F8B"},{default:n(()=>[t(u,{title:"\u57FA\u7840\u6536\u7F29\u793A\u4F8B"},{default:n(()=>[t(l,{onRegister:o.register},null,8,["onRegister"])]),_:1}),t(u,{title:"\u8D85\u8FC73\u884C\u81EA\u52A8\u6536\u8D77\uFF0C\u6298\u53E0\u65F6\u4FDD\u75592\u884C",class:"mt-4"},{default:n(()=>[t(l,{onRegister:o.register1},null,8,["onRegister"])]),_:1})]),_:1})}var Ao=B(F,[["render",g]]);export{Ao as default};