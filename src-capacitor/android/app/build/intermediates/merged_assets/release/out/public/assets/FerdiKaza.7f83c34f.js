import{C as Me,bl as Se,D as ge,E as A,o as he,r as i,n as $e,p as ke,q as u,az as Ce,f as t,J as h,I as m,bm as r,aL as D,v as Ke,s as d,t as Ue,u as $,aA as b,B as Le}from"./index.514420a3.js";import{Q as Oe,a as Te}from"./QPopupProxy.c40c4994.js";import{Q as s}from"./QSelect.5be88002.js";import{Q as we,a as ze}from"./QItem.c8aa57d0.js";import{Q as Ae,a as q,b as Q}from"./QStepper.1ded5221.js";import{Q as B}from"./QForm.aa023094.js";import{a as De,Q as qe}from"./QLayout.21d8098c.js";import{C as Qe}from"./ClosePopup.e0566f01.js";import{u as Be}from"./main-store.1577ce43.js";import{u as Ie}from"./ferdi-kaza-store.59bc42c4.js";import{H as Fe}from"./HeaderComponent.0f865f5b.js";import"./use-cache.b0833c75.js";import"./date.f65a5c9c.js";import"./format.c860d4da.js";import"./position-engine.6d27fd84.js";import"./selection.24b916b5.js";import"./QChip.24369297.js";import"./QItemLabel.52ffe8a8.js";import"./rtl.b51694b1.js";import"./QSlideTransition.e208e9bd.js";import"./use-panel.38a4983e.js";import"./touch.70a9dd44.js";import"./QToolbarTitle.a74a9cdc.js";import"./QHeader.40c6787a.js";const Ge={class:"row items-center justify-end"},Ne={class:"row"},Ee={class:"col-1"},Pe={class:"col-11 text-grey-8",style:{"font-size":"11px"}},Ye={class:"col-12"},je={class:"col-12"},Vl=Me({__name:"FerdiKaza",setup(Re){const I=Se(),k=Be(),F=ge(),G=Ie(),{countries:v,il:C,ilce:N,belediyeSelect:E,mahalleSelect:P,sokakSelect:Y,agent:f,jobs:j}=A(k);A(F);const{countriesGet:R,ilGet:H,ilceSelectGet:J,belediyeSelectGet:W,mahalleSelectGet:X,sokakSelectGet:Z,agentGet:_,getJobs:x}=k;he(()=>{x(),R(),H(),J(),W(),X(),Z(),_()});const ee=[{value:"Erkek",label:"Erkek"},{value:"Kad\u0131n",label:"Kad\u0131n"}],le=[{value:"TL",label:"TL"},{value:"USD",label:"USD"},{value:"EUR",label:"EUR"},{value:"GBP",label:"GBP"}],oe=[{value:"200000",label:"200.000 TL"},{value:"400000",label:"400.000 TL"},{value:"750000",label:"750.000 TL"},{value:"1000000",label:"1.000.000 TL"},{value:"1500000",label:"1.500.000 TL"}],ae=[{value:"10",label:"10.000"},{value:"25",label:"25.000"},{value:"40",label:"40.000 "},{value:"70",label:"70.000"},{value:"100",label:"100.000"}];let te=i(j.value),c=i(v.value);i();const K=i(C.value);let V=i([]),U=i([]);const y=i([]),L=i([]),M=i([]),O=i([]),T=i([]),w=i([]),S=i(f.value);let g=i();const ue=(l,o)=>{if(l===""){o(()=>{c.value=v.value});return}o(()=>{const e=l.toLowerCase();c.value=v.value.filter(n=>n.Aciklama.toLowerCase().indexOf(e)>-1)})},ie=(l,o)=>{o(()=>{const e=l.toLowerCase();K.value=C.value.filter(n=>n.Aciklama.toLowerCase().indexOf(e)>-1)})},ne=(l,o)=>{o(()=>{const e=l.toLowerCase();U.value=V.value.filter(n=>n.ilce_Adi.toLowerCase().indexOf(e)>-1)})},se=(l,o)=>{o(()=>{const e=l.toLowerCase();L.value=y.value.filter(n=>n.Belediye_Adi.toLowerCase().indexOf(e)>-1)})},re=(l,o)=>{o(()=>{const e=l.toLowerCase();O.value=M.value.filter(n=>n.Mahalle_Adi.toLowerCase().indexOf(e)>-1)})},de=(l,o)=>{o(()=>{const e=l.toLowerCase();w.value=T.value.filter(n=>{var z;return((z=n.Sokak_Adi)==null?void 0:z.toLowerCase().indexOf(e))>-1})})},pe=(l,o)=>{if(l===""){o(()=>{S.value=f.value});return}o(()=>{const e=l.toLowerCase();S.value=f.value.filter(n=>n.Acente_Adi.toLowerCase().indexOf(e)>-1)})},me=l=>{l!==null?V.value=N.value.filter(o=>o.il_Kodu===+l):V.value=[]},be=l=>{l!==null?y.value=E.value.filter(o=>o.ilce_Kodu===+l):y.value=[]},ve=l=>{l!==null?M.value=P.value.filter(o=>+o.belediyenin_Kodu==+l):M.value=[]},fe=l=>{T.value=Y.value.filter(o=>+o.mahallenin_Kodu==+l)},ce=l=>{l==="TL"&&l!==null?g.value=oe:(l==="USD"||l==="EUR"||l==="GBP")&&(console.log(l),g.value=ae)},Ve=()=>{p.value++},ye=async()=>{let l=new FormData;for(const[o,e]of Object.entries(a.value))l.append(o,e);await G.ferdiKazaFormSubmit(l).then(o=>{o===!0&&I.push({name:"trafikSuccess"})})},p=i(1),a=i({KullaniciAdi:"Ali",KullaniciSoyAdi:"sahin",MusteriTcKimlikNo:"76876876786",MusteriDogumYeri:"Tkm",MusteriCinsiyet:"Erkek",MusteriUyruk:2,MusteriDogumTarihi:"01 / 02 /2023",MusteriIlceKodu:"",MusteriBucakKodu:"",MusteriBelediyeKodu:"",MusteriMahalleKodu:"",MusteriCSBMKodu:"",MusteriCepTelefonNo:"5488321621",MusteriEPosta:"azamat1696@gmail.com",AcenteId:"",uyar:!1,TeminatLimiti:"",Lehtar:"",Meslegi:"",DovicSelect:"",TCVat:!1});return(l,o)=>($e(),ke(Ce,{appear:"","enter-active-class":"animated fadeIn","leave-active-class":"animated fadeIn"},{default:u(()=>[t(qe,{key:"ferdiKazaTeklif",view:"lHh Lpr lFf"},{default:u(()=>[t(Fe,null,{default:u(()=>[h(m(l.$t("personel_accident")),1)]),_:1}),t(De,null,{default:u(()=>[t(Ae,{modelValue:p.value,"onUpdate:modelValue":o[22]||(o[22]=e=>p.value=e),"header-nav":"",ref:"stepper",color:"primary","active-icon":"none","done-icon":"none",animated:"",class:"no-shadow","header-class":"no-border"},{default:u(()=>[t(q,{name:1,prefix:1,title:"",done:p.value>1,"header-nav":p.value>1,class:"q-pt-none"},{default:u(()=>[t(B,{onSubmit:Ve,class:"q-gutter-md"},{default:u(()=>[t(r,{dense:"",outlined:"",modelValue:a.value.KullaniciAdi,"onUpdate:modelValue":o[0]||(o[0]=e=>a.value.KullaniciAdi=e),label:l.$t("name"),"hide-bottom-space":"","lazy-rules":"",rules:[e=>e&&e.length>0||l.$t("required")]},null,8,["modelValue","label","rules"]),t(r,{dense:"",outlined:"",modelValue:a.value.KullaniciSoyAdi,"onUpdate:modelValue":o[1]||(o[1]=e=>a.value.KullaniciSoyAdi=e),label:l.$t("surname"),"hide-bottom-space":"","lazy-rules":"",rules:[e=>e&&e.length>0||l.$t("required")]},null,8,["modelValue","label","rules"]),t(r,{dense:"",outlined:"",modelValue:a.value.MusteriTcKimlikNo,"onUpdate:modelValue":o[2]||(o[2]=e=>a.value.MusteriTcKimlikNo=e),label:l.$t("identity_no"),"hide-bottom-space":"","lazy-rules":"",rules:[e=>e&&e.length>0||l.$t("required")]},null,8,["modelValue","label","rules"]),t(D,{modelValue:a.value.TCVat,"onUpdate:modelValue":o[3]||(o[3]=e=>a.value.TCVat=e),dense:"",label:l.$t("tc_citizen"),class:"text-subtitle2"},null,8,["modelValue","label"]),t(r,{modelValue:a.value.MusteriDogumTarihi,"onUpdate:modelValue":o[5]||(o[5]=e=>a.value.MusteriDogumTarihi=e),outlined:"",dense:"","hide-bottom-space":"",label:l.$t("birth_date")},{append:u(()=>[t(Ke,{name:"event",class:"cursor-pointer"},{default:u(()=>[t(Oe,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:u(()=>[t(Te,{modelValue:a.value.MusteriDogumTarihi,"onUpdate:modelValue":o[4]||(o[4]=e=>a.value.MusteriDogumTarihi=e),mask:"DD / MM /YYYY"},{default:u(()=>[d("div",Ge,[Ue(t($,{label:l.$t("close"),color:"primary",flat:""},null,8,["label"]),[[Qe]])])]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue","label"]),t(r,{dense:"",outlined:"",modelValue:a.value.MusteriDogumYeri,"onUpdate:modelValue":o[6]||(o[6]=e=>a.value.MusteriDogumYeri=e),label:l.$t("birthplace"),"hide-bottom-space":"","lazy-rules":"",rules:[e=>e&&e.length>0||l.$t("required")]},null,8,["modelValue","label","rules"]),t(s,{outlined:"",modelValue:a.value.MusteriCinsiyet,"onUpdate:modelValue":o[7]||(o[7]=e=>a.value.MusteriCinsiyet=e),options:ee,"option-label":e=>e.label,"option-value":"value",label:l.$t("gender"),dense:"","emit-value":"","map-options":"","hide-bottom-space":"",behavior:"menu","lazy-rules":"",rules:[e=>e!==null&&e!==""||l.$t("required")]},null,8,["modelValue","option-label","label","rules"]),t(s,{outlined:"",modelValue:a.value.MusteriUyruk,"onUpdate:modelValue":o[8]||(o[8]=e=>a.value.MusteriUyruk=e),options:b(c),"option-label":e=>e.Aciklama,"option-value":"id","emit-value":"","map-options":"","use-input":"","input-debounce":"0","options-dense":"",label:l.$t("country"),dense:"","hide-bottom-space":"",clearable:"",onFilter:ue,behavior:"menu","lazy-rules":"",rules:[e=>e!==null&&e!==""||l.$t("required")]},{"no-option":u(()=>[t(we,null,{default:u(()=>[t(ze,{class:"text-grey"},{default:u(()=>[h(" No results ")]),_:1})]),_:1})]),_:1},8,["modelValue","options","option-label","label","rules"]),t(r,{dense:"",outlined:"",modelValue:a.value.MusteriCepTelefonNo,"onUpdate:modelValue":o[9]||(o[9]=e=>a.value.MusteriCepTelefonNo=e),type:"text",label:l.$t("phone_no"),"hide-bottom-space":"",prefix:"+90","lazy-rules":"",rules:[e=>e&&e.length>0||l.$t("required")]},null,8,["modelValue","label","rules"]),t(r,{dense:"",outlined:"",modelValue:a.value.MusteriEPosta,"onUpdate:modelValue":o[10]||(o[10]=e=>a.value.MusteriEPosta=e),type:"text",label:l.$t("email_address"),"hide-bottom-space":"","lazy-rules":"",rules:[e=>e&&e.length>7||l.$t("required")]},null,8,["modelValue","label","rules"]),t(s,{outlined:"",modelValue:a.value.MusteriIlceKodu,"onUpdate:modelValue":[o[11]||(o[11]=e=>a.value.MusteriIlceKodu=e),me],options:K.value,"option-label":e=>e.Aciklama,"option-value":"id","emit-value":"","map-options":"",label:l.$t("province_select"),dense:"","hide-bottom-space":"",behavior:"menu",clearable:"","use-input":"",onFilter:ie,"lazy-rules":"",rules:[e=>e!==null&&e!==""||l.$t("required")]},null,8,["modelValue","options","option-label","label","rules"]),t(s,{outlined:"",modelValue:a.value.MusteriBucakKodu,"onUpdate:modelValue":[o[12]||(o[12]=e=>a.value.MusteriBucakKodu=e),be],options:b(U),"option-label":e=>e.ilce_Adi,"option-value":"id","emit-value":"","map-options":"",label:l.$t("district_select"),dense:"",clearable:"","hide-bottom-space":"",behavior:"menu","use-input":"",onFilter:ne,"lazy-rules":"",rules:[e=>e!==null&&e!==""||l.$t("required")]},null,8,["modelValue","options","option-label","label","rules"]),t(Q,null,{default:u(()=>[t($,{type:"submit",color:"primary",label:l.$t("forward"),"no-caps":"",class:"full-width"},null,8,["label"])]),_:1})]),_:1})]),_:1},8,["done","header-nav"]),t(q,{name:2,prefix:"2",title:"","header-nav":p.value>2,style:{"min-height":"200px"}},{default:u(()=>[t(B,{onSubmit:ye,class:"q-gutter-md"},{default:u(()=>[t(s,{outlined:"",modelValue:a.value.MusteriBelediyeKodu,"onUpdate:modelValue":[o[13]||(o[13]=e=>a.value.MusteriBelediyeKodu=e),ve],options:L.value,"option-label":e=>e.Belediye_Adi,"option-value":"id","emit-value":"","map-options":"",label:l.$t("council_select"),dense:"",clearable:"","hide-bottom-space":"",behavior:"menu","use-input":"",onFilter:se,"lazy-rules":"",rules:[e=>e!==null&&e!==""||l.$t("required")]},null,8,["modelValue","options","option-label","label","rules"]),t(s,{outlined:"",modelValue:a.value.MusteriMahalleKodu,"onUpdate:modelValue":[o[14]||(o[14]=e=>a.value.MusteriMahalleKodu=e),fe],options:O.value,"option-label":e=>e.Mahalle_Adi,"option-value":"id","emit-value":"","map-options":"",label:l.$t("municipality_select"),dense:"",clearable:"","hide-bottom-space":"","use-input":"",onFilter:re,behavior:"menu","lazy-rules":"",rules:[e=>e!==null&&e!==""||l.$t("required")]},null,8,["modelValue","options","option-label","label","rules"]),t(s,{outlined:"",modelValue:a.value.MusteriCSBMKodu,"onUpdate:modelValue":o[15]||(o[15]=e=>a.value.MusteriCSBMKodu=e),options:w.value,"option-label":e=>e.Sokak_Adi,"option-value":"id","emit-value":"","map-options":"",label:l.$t("street_select"),dense:"",clearable:"","use-input":"",onFilter:de,"hide-bottom-space":"",behavior:"menu","lazy-rules":"",rules:[e=>e!==null&&e!==""||l.$t("required")]},null,8,["modelValue","options","option-label","label","rules"]),t(s,{outlined:"",modelValue:a.value.DovicSelect,"onUpdate:modelValue":[o[16]||(o[16]=e=>a.value.DovicSelect=e),ce],options:le,"option-label":e=>e.label,"option-value":"value","emit-value":"","map-options":"",label:l.$t("currency_select"),dense:"",clearable:"","use-input":"","hide-bottom-space":"",behavior:"menu","lazy-rules":"",rules:[e=>e!==null&&e!==""||l.$t("required")]},null,8,["modelValue","option-label","label","rules"]),t(s,{outlined:"",modelValue:a.value.TeminatLimiti,"onUpdate:modelValue":o[17]||(o[17]=e=>a.value.TeminatLimiti=e),options:b(g),"option-label":e=>e.label,"option-value":"value","emit-value":"","map-options":"",label:l.$t("death_and_permanent_disability"),dense:"",clearable:"","use-input":"","hide-bottom-space":"",behavior:"menu","lazy-rules":"",rules:[e=>e!==null&&e!==""||l.$t("required")]},null,8,["modelValue","options","option-label","label","rules"]),t(r,{dense:"",outlined:"",modelValue:a.value.Lehtar,"onUpdate:modelValue":o[18]||(o[18]=e=>a.value.Lehtar=e),type:"text",label:l.$t("lehtar"),"hide-bottom-space":""},null,8,["modelValue","label"]),t(s,{outlined:"",modelValue:a.value.Meslegi,"onUpdate:modelValue":o[19]||(o[19]=e=>a.value.Meslegi=e),options:b(te),"option-label":e=>e.MeslekSinifi,"option-value":"id","emit-value":"","map-options":"",label:l.$t("job_select"),dense:"",clearable:"","use-input":"","hide-bottom-space":"",behavior:"menu","lazy-rules":"",rules:[e=>e!==null&&e!==""||l.$t("required")]},null,8,["modelValue","options","option-label","label","rules"]),t(s,{outlined:"",modelValue:a.value.AcenteId,"onUpdate:modelValue":o[20]||(o[20]=e=>a.value.AcenteId=e),options:S.value,"option-label":e=>e.Acente_Adi,"option-value":"id","emit-value":"","map-options":"",label:l.$t("agent_select"),dense:"",clearable:"","use-input":"",onFilter:pe,"hide-bottom-space":"",behavior:"menu","lazy-rules":"",rules:[e=>e!==null&&e!==""||l.$t("required")]},null,8,["modelValue","options","option-label","label","rules"]),t(Q,null,{default:u(()=>[t($,{type:"submit",color:"primary",label:l.$t("get_a_quote"),"no-caps":"",class:"full-width"},null,8,["label"])]),_:1}),d("div",Ne,[d("div",Ee,[t(D,{modelValue:a.value.uyar,"onUpdate:modelValue":o[21]||(o[21]=e=>a.value.uyar=e),color:"primary",dense:""},null,8,["modelValue"])]),d("div",Pe,[d("b",null,m(l.$t("warning"))+":",1),h(" "+m(l.$t("warning_text")),1)]),d("div",Ye,[t(Le,{spaced:""})]),d("div",je,m(l.$t("warning_text2")),1)])]),_:1})]),_:1},8,["header-nav"])]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}))}});export{Vl as default};