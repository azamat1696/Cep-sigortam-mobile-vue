import{C as p,D as f,E as c,bl as b,o as h,r as _,au as g,_ as v,n as w,aN as y,f as o,q as a,x,Q as l,s as r,I as n,bm as i,u as F}from"./index.514420a3.js";import{Q as q}from"./QForm.aa023094.js";var B=p({name:"ForgotPassword",setup(){const e=f(),{user:t,permenantUser:s,authToken:d}=c(e),{updatePassword:u}=e,m=b();return h(()=>{d.value&&m.push({name:"homeLogin"})}),{test:_(!1),formFields:g({id_card:"2830404084",phone:"5428872827"}),updatePassword:u,permenantUser:s}},methods:{onSubmit:function(){let e=new FormData;for(const[t,s]of Object.entries(this.formFields))e.append(t,s);this.permenantUser=this.formFields,this.updatePassword(e)}}});const E={class:"full-width flex flex-center no-padding"},S={class:"text-primary text-left cep-sigortam"},V={class:"flex justify-between q-pt-md"};function k(e,t){return w(),y("div",E,[o(x,{class:"no-shadow transparent",style:{height:"auto","min-width":"370px","margin-top":"130px"}},{default:a(()=>[o(l,{class:"q-pb-xs"},{default:a(()=>[r("div",S,n(e.$t("enter_your_info")),1)]),_:1}),o(l,{class:"q-pt-xs"},{default:a(()=>[o(q,{onSubmit:e.onSubmit},{default:a(()=>[o(i,{modelValue:e.formFields.id_card,"onUpdate:modelValue":t[0]||(t[0]=s=>e.formFields.id_card=s),outlined:"",color:"#EBEBEB",label:e.$t("identity_no"),clearable:"",class:"q-pt-sm q-pb-md","lazy-rules":"",rules:[s=>s.length>0||"L\xFCtfen bilgilerinizi giriniz"]},null,8,["modelValue","label","rules"]),o(i,{modelValue:e.formFields.phone,"onUpdate:modelValue":t[1]||(t[1]=s=>e.formFields.phone=s),outlined:"",color:"#EBEBEB",label:e.$t("phone_no"),clearable:"",class:"q-pt-sm q-pb-sm",prefix:"+90",mask:"### ### ## ##","unmasked-value":"","lazy-rules":"",rules:[s=>s.length>0||"L\xFCtfen bilgilerinizi giriniz"]},null,8,["modelValue","label","rules"]),o(F,{type:"submit",color:"primary","text-color":"white",label:e.$t("change_password"),"no-caps":"",class:"full-width q-mt-md",style:{"border-radius":"8px"},size:"20px"},null,8,["label"]),r("div",V,[r("div",{class:"custom-text text-subtitle2 text-bold cursor-pointer",onClick:t[2]||(t[2]=s=>e.$router.push({name:"loginPage"}))},n(e.$t("subscriber_login")),1)])]),_:1},8,["onSubmit"])]),_:1}),o(l,{class:"q-pt-xl"})]),_:1})])}var $=v(B,[["render",k],["__scopeId","data-v-0077a014"]]);export{$ as default};
