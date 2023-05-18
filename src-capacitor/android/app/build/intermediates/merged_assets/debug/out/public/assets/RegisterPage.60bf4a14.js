import{_ as E,C as k,E as U,D as m,bm as P,r as i,o as Q,n as B,aO as T,f as t,q as u,x as S,Q as p,s as r,I as v,bn as o,aM as d,v as x,aA as D,t as F,u as f}from"./index.30f5c437.js";import{Q as M}from"./QSelect.03b8b302.js";import{Q as I,a as A}from"./QPopupProxy.89031557.js";import{Q as _}from"./QForm.a1289c72.js";import{C as N}from"./ClosePopup.d9a81c54.js";import{u as O}from"./vue-i18n.runtime.esm-bundler.6da63653.js";import"./QChip.e0a903dc.js";import"./QItem.5a6d01d8.js";import"./QItemLabel.914dfdc7.js";import"./position-engine.bbf55c97.js";import"./selection.027ba7fc.js";import"./rtl.b51694b1.js";import"./format.c860d4da.js";import"./use-cache.b0833c75.js";import"./date.3e6ee8a6.js";const R={class:"full-width flex flex-center no-padding"},K={class:"text-primary text-uppercase text-left cep-sigortam"},Y={class:"row items-center justify-end"},j={class:"flex justify-between q-pt-md"},H=k({__name:"RegisterPage",setup(L){const{locale:V}=O(),{user:G,authToken:q}=U(m()),{register:y}=m(),b=P();m();const g={months:["Ocak","\u015Eubat","Mart","Nisan","May\u0131s","Haziran","Temmuz","A\u011Fustos","Eyl\xFCl","Ekim","Kas\u0131m","Aral\u0131k"],monthsShort:["Oca","\u015Eub","Mar","Nis","May","Haz","Tem","A\u011Fu","Eyl","Eki","Kas","Ara"],days:["Pazar","Pazartesi","Sal\u0131","\xC7ar\u015Famba","Per\u015Fembe","Cuma","Cumartesi"],daysShort:["Paz","Pzt","Sal","\xC7ar","Per","Cum","Cmt"]},h=V.value==="tr"?g:null,$=[{value:"E",label:"Erkek"},{value:"K",label:"Kad\u0131n"}];i(!1);const a=i({id_card:"",TCVat:!1,phone:"",surname:"",name:"",password:"",password_confirmation:"",email:"",birthplace:"",gender:"",birth_date:"",address:"",email_fav:!1,phone_fav:!1,sms_fav:!1}),C=i(!0),w=s=>{a.value.id_card=s,s.length===11?a.value.TCVat=!0:a.value.TCVat=!1},c=async()=>{let s=new FormData;for(let[l,e]of Object.entries(a.value))if(l==="TCVat"||l==="email_fav"||l==="phone_fav"||l==="sms_fav")s.append(l,e?1:0);else if(l==="birth_date"){let n=e.split("/"),z=n[2]+"-"+n[1]+"-"+n[0];s.append(l,z)}else s.append(l,e);y(s).then(l=>{l!==void 0&&b.push({name:"optVerificationSuccessPage"})})};return Q(()=>{q.value&&b.push({name:"homeLogin"})}),(s,l)=>(B(),T("div",R,[t(S,{class:"no-shadow transparent",style:{"min-width":"370px","margin-top":"0px"}},{default:u(()=>[t(p,{class:"q-pb-xs"},{default:u(()=>[r("div",K,v(s.$t("register_title")),1)]),_:1}),t(p,{class:"q-pt-xs"},{default:u(()=>[t(_,{onSubmit:c},{default:u(()=>[t(o,{modelValue:a.value.id_card,"onUpdate:modelValue":[l[0]||(l[0]=e=>a.value.id_card=e),w],outlined:"",color:"#EBEBEB",label:s.$t("identity_no"),clearable:"",dense:"",mask:"#### #### ###","unmasked-value":"",class:"q-pt-sm q-pb-sm","lazy-rules":"",rules:[e=>e&&e.length>0||s.$t("required")]},null,8,["modelValue","label","rules"]),t(d,{modelValue:a.value.TCVat,"onUpdate:modelValue":l[1]||(l[1]=e=>a.value.TCVat=e),dense:"",label:s.$t("tc_citizen"),class:"q-pt-md q-pb-sm text-subtitle2",disable:C.value},null,8,["modelValue","label","disable"]),t(o,{outlined:"",modelValue:a.value.phone,"onUpdate:modelValue":l[2]||(l[2]=e=>a.value.phone=e),type:"text",label:s.$t("phone_no"),class:"q-pt-sm q-pb-sm","hide-bottom-space":"",dense:"",mask:"### ### ## ##","unmasked-value":"","lazy-rules":"",prefix:"+90",rules:[e=>e&&e.length===10||s.$t("required")]},null,8,["modelValue","label","rules"]),t(o,{outlined:"",modelValue:a.value.name,"onUpdate:modelValue":l[3]||(l[3]=e=>a.value.name=e),type:"text",label:s.$t("name"),"hide-bottom-space":"",class:"q-pt-sm q-pb-sm",dense:"","lazy-rules":"",rules:[e=>e&&e.length>0||s.$t("required")]},null,8,["modelValue","label","rules"]),t(o,{outlined:"",modelValue:a.value.surname,"onUpdate:modelValue":l[4]||(l[4]=e=>a.value.surname=e),type:"text",label:s.$t("surname"),"hide-bottom-space":"",class:"q-pt-sm q-pb-sm",dense:"","lazy-rules":"",rules:[e=>e&&e.length>0||s.$t("required")]},null,8,["modelValue","label","rules"]),t(o,{modelValue:a.value.password,"onUpdate:modelValue":l[5]||(l[5]=e=>a.value.password=e),type:"password",outlined:"",color:"#EBEBEB",label:s.$t("password"),clearable:"",class:"q-pt-sm q-pb-sm","hide-bottom-space":"",dense:"","lazy-rules":"",rules:[e=>e&&e.length>0||s.$t("required")]},null,8,["modelValue","label","rules"]),t(o,{modelValue:a.value.password_confirmation,"onUpdate:modelValue":l[6]||(l[6]=e=>a.value.password_confirmation=e),type:"password",outlined:"",color:"#EBEBEB",label:s.$t("password_confirmation"),clearable:"",class:"q-pt-sm q-pb-sm","hide-bottom-space":"",dense:"","lazy-rules":"",rules:[e=>a.value.password===a.value.password_confirmation||s.$t("required")]},null,8,["modelValue","label","rules"]),t(o,{outlined:"",modelValue:a.value.email,"onUpdate:modelValue":l[7]||(l[7]=e=>a.value.email=e),type:"email",label:s.$t("email"),"hide-bottom-space":"",class:"q-pt-sm q-pb-sm",dense:"","lazy-rules":"",rules:[e=>e&&e.length>0||s.$t("required")]},null,8,["modelValue","label","rules"]),t(o,{outlined:"",modelValue:a.value.birthplace,"onUpdate:modelValue":l[8]||(l[8]=e=>a.value.birthplace=e),type:"text",label:s.$t("birthplace"),"hide-bottom-space":"",class:"q-pt-sm q-pb-sm",dense:"","lazy-rules":"",rules:[e=>e&&e.length>0||s.$t("required")]},null,8,["modelValue","label","rules"]),t(M,{outlined:"",modelValue:a.value.gender,"onUpdate:modelValue":l[9]||(l[9]=e=>a.value.gender=e),options:$,"option-label":e=>e.label,"option-value":"value",label:s.$t("gender"),dense:"",class:"q-pt-sm q-pb-sm","emit-value":"","map-options":"","hide-bottom-space":"",behavior:"menu","lazy-rules":"",rules:[e=>e!==null&&e!==""||s.$t("required")]},null,8,["modelValue","option-label","label","rules"]),t(o,{modelValue:a.value.birth_date,"onUpdate:modelValue":l[11]||(l[11]=e=>a.value.birth_date=e),outlined:"",dense:"","hide-bottom-space":"",class:"q-pt-sm q-pb-sm",label:s.$t("birth_date")},{append:u(()=>[t(x,{name:"event",class:"cursor-pointer"},{default:u(()=>[t(I,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:u(()=>[t(A,{modelValue:a.value.birth_date,"onUpdate:modelValue":l[10]||(l[10]=e=>a.value.birth_date=e),mask:"DD/MM/YYYY",locale:D(h)},{default:u(()=>[r("div",Y,[F(t(f,{label:s.$t("close"),color:"primary",flat:""},null,8,["label"]),[[N]])])]),_:1},8,["modelValue","locale"])]),_:1})]),_:1})]),_:1},8,["modelValue","label"]),t(o,{outlined:"",modelValue:a.value.address,"onUpdate:modelValue":l[12]||(l[12]=e=>a.value.address=e),type:"text",label:s.$t("address"),"hide-bottom-space":"",class:"q-pt-sm q-pb-sm",dense:"","lazy-rules":"",rules:[e=>e&&e.length>0||s.$t("required")]},null,8,["modelValue","label","rules"]),t(d,{modelValue:a.value.email_fav,"onUpdate:modelValue":l[13]||(l[13]=e=>a.value.email_fav=e),dense:"",label:s.$t("email"),class:"q-pt-sm q-pb-sm q-pr-sm text-subtitle2"},null,8,["modelValue","label"]),t(d,{modelValue:a.value.phone_fav,"onUpdate:modelValue":l[14]||(l[14]=e=>a.value.phone_fav=e),dense:"",label:s.$t("phone"),class:"q-pt-sm q-pb-sm text-subtitle2"},null,8,["modelValue","label"]),t(d,{modelValue:a.value.sms_fav,"onUpdate:modelValue":l[15]||(l[15]=e=>a.value.sms_fav=e),dense:"",label:s.$t("sms"),class:"q-pt-sm q-pb-sm q-pl-sm text-subtitle2"},null,8,["modelValue","label"]),t(f,{color:"primary","text-color":"white",label:s.$t("register"),"no-caps":"",dense:"",class:"full-width q-mt-md",style:{"border-radius":"8px"},size:"20px",type:"submit"},null,8,["label"]),r("div",j,[r("div",{class:"custom-text text-subtitle1 text-bold cursor-pointer",onClick:l[16]||(l[16]=e=>s.$router.push({name:"loginPage"}))},v(s.$t("login")),1)])]),_:1})]),_:1}),t(p,{class:"q-pt-xl"})]),_:1})]))}});var ie=E(H,[["__scopeId","data-v-0a394195"]]);export{ie as default};
