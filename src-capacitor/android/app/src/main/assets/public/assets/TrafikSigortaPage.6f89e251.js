import{C as Le,bm as Pe,D as Be,E as L,r,w as Ne,n as Ie,p as Fe,q as i,az as Ye,f as o,H as Ge,v as ee,J as f,I as b,s as u,bn as d,t as Ee,u as m,aA as M,aM as He}from"./index.30f5c437.js";import{Q as je}from"./QToolbarTitle.a6819191.js";import{a as Re,Q as Je}from"./QHeader.3c71bea2.js";import{Q as We,a as Xe}from"./QPopupProxy.89031557.js";import{Q as p}from"./QSelect.03b8b302.js";import{Q as A,a as g}from"./QItem.5a6d01d8.js";import{Q as Ze,a as y,b as V}from"./QStepper.37bcbf08.js";import{Q as P}from"./QForm.a1289c72.js";import{Q as xe}from"./QPageContainer.392f171c.js";import{Q as el}from"./QLayout.b47518c6.js";import{C as ll}from"./ClosePopup.d9a81c54.js";import{u as B}from"./main-store.9c391812.js";import{u as al}from"./trafik-store.4f2d477c.js";import{u as ol}from"./trafik-sigorta-create.8b44c484.js";import{d as tl}from"./date.3e6ee8a6.js";import il from"./HesaplananPirimTrafik.9d1fba65.js";import ul from"./PaymentPirimTrafik.ee2dcf84.js";import nl from"./PaymentTrafik.6f02f5e7.js";import"./use-cache.b0833c75.js";import"./format.c860d4da.js";import"./position-engine.bbf55c97.js";import"./selection.027ba7fc.js";import"./QChip.e0a903dc.js";import"./QItemLabel.914dfdc7.js";import"./rtl.b51694b1.js";import"./QSlideTransition.da40cf02.js";import"./use-panel.c1f97c66.js";import"./touch.70a9dd44.js";import"./QExpansionItem.a6d51037.js";import"./QList.1b8644ff.js";import"./Payment.8ca22582.js";import"./ferdi-kaza-create.127615f7.js";const rl={class:"q-pt-xl"},sl={class:"row items-center justify-end"},dl={class:"row no-wrap justify-between"},pl={class:"col-3 q-my-auto"},ml={class:"text-no-wrap text-center"},vl={class:"col-9 row"},bl={class:"col-6"},cl={class:"col-6"},fl={class:"row"},yl={class:"col-6"},Vl={class:"col-6 text-right"},kl={class:"row"},Ml={class:"col-6"},hl={class:"col-6 text-right"},Al={class:"row"},gl={class:"col-1"},$l={class:"col-11 text-grey-8",style:{"font-size":"11px"}},Sl={class:"row"},Cl={class:"col-6"},wl={class:"col-6 text-right"},Tl={class:"row"},zl={class:"col-6"},ql=u("div",{class:"col-6 text-right"},null,-1),pa=Le({__name:"TrafikSigortaPage",setup(Kl){var J,W,X,Z;Pe(),B();const le=Be(),{user:v}=L(le),N=ol();L(N),al();const{countries:ae,aracMarka:$,aracTipi:S,aracTarz:Ol,aracModelSelect:I,renk:C,il:F,ilce:oe,belediyeSelect:te,mahalleSelect:ie,sokakSelect:ue,agent:w}=L(B()),{countriesGet:ne,aracMarkaGet:re,aracModelSelectGet:se,renkGet:de,ilGet:pe,ilceSelectGet:me,belediyeSelectGet:ve,mahalleSelectGet:be,sokakSelectGet:ce,agentGet:fe,aracTipiGet:ye}=B();ne(),re(),se(),de(),pe(),me(),ve(),be(),ce(),fe(),ye();const Ve=[{value:"E",label:"Erkek"},{value:"K",label:"Kad\u0131n"}],ke=[{value:"1",label:"Benzin"},{value:"2",label:"Dizel"},{value:"3",label:"Hibrid"},{value:"4",label:"Elektrik"},{value:"5",label:"LPG"}],Me=[{value:"Manuel",label:"Manuel"},{value:"Otomatik",label:"Otomatik"},{value:"Triptonik",label:"Triptonik"}],he=[{value:"Sa\u011F",label:"Sa\u011F"},{value:"Sol",label:"Sol"}];r(ae.value);let h=r($.value),T=r(S.value);const z=r([]);let Y=r([]);I.value;let q=r(C.value);const G=r(F.value);let K=r([]),E=r([]);const O=r([]),H=r([]),_=r([]),j=r([]),U=r(),Q=r(w.value),D=r([]),R=(l,a)=>{if(l===""){a(()=>{h.value=$.value});return}a(()=>{const e=l.toLowerCase();h.value=$.value.filter(n=>n.Marka_Adi.toLowerCase().indexOf(e)>-1)})},Ae=(l,a)=>{a(()=>{const e=l.toLowerCase();Y.value=z.value.filter(n=>n.Tip_Adi.toLowerCase().indexOf(e)>-1)})},ge=(l,a)=>{if(l===""){a(()=>{T.value=S.value});return}a(()=>{const e=l.toLowerCase();T.value=S.value.filter(n=>n.arac_tipi.toLowerCase().indexOf(e)>-1)})},$e=(l,a)=>{if(l===""){a(()=>{q.value=C.value});return}a(()=>{const e=l.toLowerCase();q.value=C.value.filter(n=>n.adi.toLowerCase().indexOf(e)>-1)})},Se=(l,a)=>{a(()=>{const e=l.toLowerCase();G.value=F.value.filter(n=>n.Aciklama.toLowerCase().indexOf(e)>-1)})},Ce=(l,a)=>{a(()=>{const e=l.toLowerCase();E.value=K.value.filter(n=>n.ilce_Adi.toLowerCase().indexOf(e)>-1)})},we=(l,a)=>{a(()=>{const e=l.toLowerCase();H.value=O.value.filter(n=>n.Belediye_Adi.toLowerCase().indexOf(e)>-1)})},Te=(l,a)=>{console.log(l),a(()=>{const e=l.toLowerCase();j.value=_.value.filter(n=>n.Mahalle_Adi.toLowerCase().indexOf(e)>-1)})},ze=(l,a)=>{if(l===""){a(()=>{D.value=U.value});return}a(()=>{const e=l.toLowerCase();D.value=U.value.filter(n=>{var x;return((x=n.Sokak_Adi)==null?void 0:x.toLowerCase().indexOf(e))>-1})})},qe=(l,a)=>{if(l===""){a(()=>{Q.value=w.value});return}a(()=>{const e=l.toLowerCase();Q.value=w.value.filter(n=>n.Acente_Adi.toLowerCase().indexOf(e)>-1)})},Ke=l=>{let a=h.value.find(e=>+e.Marka_Kod==+l);l!==null?z.value=I.value.filter(e=>e.Marka_Adi===a.Marka_Adi&&+e.Marka_Kod==+a.Marka_Kod):z.value=[]},Oe=l=>{l!==null?K.value=oe.value.filter(a=>a.il_Kodu===+l):K.value=[]},_e=l=>{l!==null?O.value=te.value.filter(a=>a.ilce_Kodu===+l):O.value=[]},Ue=l=>{l!==null?_.value=ie.value.filter(a=>+a.belediyenin_Kodu==+l):_.value=[]},Qe=l=>{U.value=ue.value.filter(a=>+a.mahallenin_Kodu==+l)},c=()=>{s.value++},k=()=>{s.value--},De=async()=>{let l=new FormData;for(const[a,e]of Object.entries(t.value))a==="uyar"||a==="TCVat"?l.append(a,e?"1":"0"):l.append(a,e);await N.hesaplaTrafikSigorta(l).then(a=>{console.log(a),a&&c()})},s=r(1),t=r({KullaniciAdi:(J=v.value)==null?void 0:J.name,KullaniciSoyAdi:(W=v.value)==null?void 0:W.surname,MusteriTcKimlikNo:v.value.id_card,MusteriDogumYeri:v.value.birthplace,MusteriCinsiyet:v.value.gender,MusteriUyruk:"",MusteriDogumTarihi:tl.formatDate(v.value.birth_date,"DD/MM/YYYY"),AracPlaka1:"",AracPlaka2:"",AracPlakaIlKodu:"",AracMarka:"",AracModelYili:"",AracTarz:"",_YakitTipi:"",Motor_cc:"",ipotekli:"",AracMotorNo:"",AracSasiNo:"",AracDireksiyonTarafi:"",_AracVitesBilgisi:"",MusteriIlceKodu:"",MusteriBucakKodu:"",MusteriBelediyeKodu:"",MusteriMahalleKodu:"",MusteriCSBMKodu:"",MusteriApartmanAdi:"",MusteriApartmanNo:"",MusteriCepTelefonNo:(X=v.value)==null?void 0:X.phone,MusteriEPosta:(Z=v.value)==null?void 0:Z.email,AcenteId:"",_SbmCarColorCode:"",uyar:!1,TCVat:!1});return Ne(t.value,(l,a,e)=>{l.AracPlaka1&&(t.value.AracPlaka1=l.AracPlaka1.toUpperCase())}),(l,a)=>(Ie(),Fe(Ye,{appear:"","enter-active-class":"animated fadeIn","leave-active-class":"animated fadeIn"},{default:i(()=>[o(el,{key:"trafik",view:"lHh Lpr lFf"},{default:i(()=>[o(Re,{reveal:"",elevated:""},{default:i(()=>[o(Je,null,{default:i(()=>[o(Ge,{size:"sm"},{default:i(()=>[o(ee,{name:"chevron_left",onClick:a[0]||(a[0]=e=>l.$router.push({name:"homeLogin"})),size:"md",class:"cursor-pointer"})]),_:1}),o(je,{class:"text-subtitle2 text-bold text-center"},{default:i(()=>[f(b(l.$t("motor")),1)]),_:1})]),_:1})]),_:1}),o(xe,null,{default:i(()=>[u("div",rl,[o(Ze,{modelValue:s.value,"onUpdate:modelValue":a[33]||(a[33]=e=>s.value=e),"header-nav":"",ref:"stepper",color:"primary","active-icon":"none",animated:"",class:"no-shadow","header-class":"no-border hide_header"},{default:i(()=>[o(y,{name:1,prefix:1,title:"",done:s.value>1,"header-nav":s.value>1,class:"q-pt-none"},{default:i(()=>[o(P,{onSubmit:c,class:"q-gutter-md"},{default:i(()=>[o(d,{dense:"",outlined:"",modelValue:t.value.KullaniciAdi,"onUpdate:modelValue":a[1]||(a[1]=e=>t.value.KullaniciAdi=e),label:l.$t("name"),"hide-bottom-space":"",readonly:"","lazy-rules":"",rules:[e=>e&&e.length>0||l.$t("required")]},null,8,["modelValue","label","rules"]),o(d,{dense:"",outlined:"",modelValue:t.value.KullaniciSoyAdi,"onUpdate:modelValue":a[2]||(a[2]=e=>t.value.KullaniciSoyAdi=e),label:l.$t("surname"),readonly:"","hide-bottom-space":"","lazy-rules":"",rules:[e=>e&&e.length>0||l.$t("required")]},null,8,["modelValue","label","rules"]),o(d,{dense:"",outlined:"",modelValue:t.value.MusteriTcKimlikNo,"onUpdate:modelValue":a[3]||(a[3]=e=>t.value.MusteriTcKimlikNo=e),label:l.$t("identity_no"),"hide-bottom-space":"",readonly:"","lazy-rules":"",rules:[e=>e&&e.length>0||l.$t("required")]},null,8,["modelValue","label","rules"]),o(d,{modelValue:t.value.MusteriDogumTarihi,"onUpdate:modelValue":a[5]||(a[5]=e=>t.value.MusteriDogumTarihi=e),outlined:"",dense:"",readonly:"","hide-bottom-space":"",label:l.$t("birth_date")},{append:i(()=>[o(ee,{name:"event",class:"cursor-pointer"},{default:i(()=>[o(We,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:i(()=>[o(Xe,{modelValue:t.value.MusteriDogumTarihi,"onUpdate:modelValue":a[4]||(a[4]=e=>t.value.MusteriDogumTarihi=e),mask:"DD/MM/YYYY"},{default:i(()=>[u("div",sl,[Ee(o(m,{label:l.$t("close"),color:"primary",flat:""},null,8,["label"]),[[ll]])])]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue","label"]),u("div",dl,[u("div",pl,[u("label",ml,b(l.$t("license_plate_no")),1)]),u("div",vl,[u("div",bl,[o(d,{dense:"",outlined:"",modelValue:t.value.AracPlaka1,"onUpdate:modelValue":a[6]||(a[6]=e=>t.value.AracPlaka1=e),"hide-bottom-space":"","lazy-rules":"",onInput:a[7]||(a[7]=e=>{l.console.log(e)}),rules:[e=>e&&e.length>0||" "],class:"q-mr-xs q-ml-xs"},null,8,["modelValue","rules"])]),u("div",cl,[o(d,{dense:"",outlined:"",modelValue:t.value.AracPlaka2,"onUpdate:modelValue":a[8]||(a[8]=e=>t.value.AracPlaka2=e),"hide-bottom-space":"","lazy-rules":"",rules:[e=>e&&e.length>0||" "],class:"q-ml-xs q-mr-xs",autogrow:""},null,8,["modelValue","rules"])])])]),o(d,{dense:"",outlined:"",modelValue:t.value.MusteriDogumYeri,"onUpdate:modelValue":a[9]||(a[9]=e=>t.value.MusteriDogumYeri=e),label:l.$t("birthplace"),"hide-bottom-space":"",readonly:"","lazy-rules":"",rules:[e=>e&&e.length>0||l.$t("required")]},null,8,["modelValue","label","rules"]),o(p,{outlined:"",modelValue:t.value.MusteriCinsiyet,"onUpdate:modelValue":a[10]||(a[10]=e=>t.value.MusteriCinsiyet=e),options:Ve,"option-label":e=>e.label,"option-value":"value",label:l.$t("gender"),dense:"",readonly:"","emit-value":"","map-options":"","hide-bottom-space":"",behavior:"menu","lazy-rules":"",rules:[e=>e!==null&&e!==""||l.$t("required")]},null,8,["modelValue","option-label","label","rules"]),o(p,{outlined:"",modelValue:t.value.AracMarka,"onUpdate:modelValue":[a[11]||(a[11]=e=>t.value.AracMarka=e),Ke],options:M(h),"option-label":e=>e.Marka_Adi,"option-value":"Marka_Kod","emit-value":"","map-options":"","use-input":"","input-debounce":"0","options-dense":"",label:l.$t("car_brand"),dense:"","hide-bottom-space":"",clearable:"",onFilter:R,behavior:"menu","lazy-rules":"",rules:[e=>e!==null&&e!==""||l.$t("required")]},{"no-option":i(()=>[o(A,null,{default:i(()=>[o(g,{class:"text-grey"},{default:i(()=>[f(b(l.$t("no_results")),1)]),_:1})]),_:1})]),_:1},8,["modelValue","options","option-label","label","rules"]),o(p,{outlined:"",modelValue:t.value.AracTipi,"onUpdate:modelValue":a[12]||(a[12]=e=>t.value.AracTipi=e),options:M(Y),"option-label":e=>e.Tip_Adi,"option-value":"Tip_Kod","emit-value":"","map-options":"","use-input":"","input-debounce":"0","options-dense":"",label:l.$t("car_model"),dense:"","hide-bottom-space":"",clearable:"",onFilter:Ae,behavior:"menu","lazy-rules":"",rules:[e=>e!==null&&e!==""||l.$t("required")]},{"no-option":i(()=>[o(A,null,{default:i(()=>[o(g,{class:"text-grey"},{default:i(()=>[f(b(l.$t("no_results")),1)]),_:1})]),_:1})]),_:1},8,["modelValue","options","option-label","label","rules"]),o(d,{dense:"",outlined:"",modelValue:t.value.AracModelYili,"onUpdate:modelValue":a[13]||(a[13]=e=>t.value.AracModelYili=e),type:"number",label:l.$t("car_model_year"),"hide-bottom-space":"","lazy-rules":"",rules:[e=>e&&e.length>0||l.$t("required")]},null,8,["modelValue","label","rules"]),o(p,{outlined:"",modelValue:t.value.AracTarz,"onUpdate:modelValue":a[14]||(a[14]=e=>t.value.AracTarz=e),options:M(T),"option-label":e=>e.arac_tipi,"option-value":"id","emit-value":"","map-options":"","use-input":"","input-debounce":"0","options-dense":"",label:l.$t("use_type"),dense:"","hide-bottom-space":"",clearable:"",onFilter:ge,behavior:"menu","lazy-rules":"",rules:[e=>e!==null&&e!==""||l.$t("required")]},{"no-option":i(()=>[o(A,null,{default:i(()=>[o(g,{class:"text-grey"},{default:i(()=>[f(" No results ")]),_:1})]),_:1})]),_:1},8,["modelValue","options","option-label","label","rules"]),o(p,{outlined:"",modelValue:t.value._YakitTipi,"onUpdate:modelValue":a[15]||(a[15]=e=>t.value._YakitTipi=e),options:ke,"option-label":e=>e.label,"option-value":"value","emit-value":"","map-options":"","use-input":"","input-debounce":"0","options-dense":"",label:l.$t("fuel_type"),dense:"","hide-bottom-space":"",clearable:"",onFilter:R,behavior:"menu","lazy-rules":"",rules:[e=>e!==null&&e!==""||l.$t("required")]},{"no-option":i(()=>[o(A,null,{default:i(()=>[o(g,{class:"text-grey"},{default:i(()=>[f(b(l.$t("no_results")),1)]),_:1})]),_:1})]),_:1},8,["modelValue","option-label","label","rules"]),o(V,null,{default:i(()=>[o(m,{type:"submit",color:"primary",label:l.$t("forward"),"no-caps":"",class:"full-width"},null,8,["label"])]),_:1})]),_:1})]),_:1},8,["done","header-nav"]),o(y,{name:2,prefix:"2",title:"",done:s.value>2,"header-nav":s.value>2,style:{"min-height":"200px"}},{default:i(()=>[o(P,{onSubmit:c,class:"q-gutter-md"},{default:i(()=>[o(d,{dense:"",outlined:"",modelValue:t.value.Motor_cc,"onUpdate:modelValue":a[16]||(a[16]=e=>t.value.Motor_cc=e),type:"number",label:l.$t("motor_cc"),"hide-bottom-space":"","lazy-rules":"",rules:[e=>e&&e.length>0||l.$t("required")]},null,8,["modelValue","label","rules"]),o(d,{dense:"",outlined:"",modelValue:t.value.AracMotorNo,"onUpdate:modelValue":a[17]||(a[17]=e=>t.value.AracMotorNo=e),type:"text",label:l.$t("motor_no"),"hide-bottom-space":"","lazy-rules":"",rules:[e=>e&&e.length>0||l.$t("required")]},null,8,["modelValue","label","rules"]),o(d,{dense:"",outlined:"",modelValue:t.value.AracSasiNo,"onUpdate:modelValue":a[18]||(a[18]=e=>t.value.AracSasiNo=e),type:"text",label:l.$t("chassis_no"),"hide-bottom-space":"","lazy-rules":"",rules:[e=>e&&e.length>0||l.$t("required")]},null,8,["modelValue","label","rules"]),o(p,{outlined:"",modelValue:t.value.AracDireksiyonTarafi,"onUpdate:modelValue":a[19]||(a[19]=e=>t.value.AracDireksiyonTarafi=e),options:he,"option-label":e=>e.label,"option-value":"value","emit-value":"","map-options":"",label:l.$t("car_direction"),dense:"","hide-bottom-space":"",clearable:"",behavior:"menu","lazy-rules":"",rules:[e=>e!==null&&e!==""||l.$t("required")]},null,8,["modelValue","option-label","label","rules"]),o(p,{outlined:"",modelValue:t.value._SbmCarColorCode,"onUpdate:modelValue":a[20]||(a[20]=e=>t.value._SbmCarColorCode=e),options:M(q),"option-label":e=>e.adi,"option-value":"id","emit-value":"","map-options":"",label:l.$t("car_color"),"options-dense":"",dense:"","use-input":"","hide-bottom-space":"",clearable:"",onFilter:$e,behavior:"menu","lazy-rules":"",rules:[e=>e!==null&&e!==""||l.$t("required")]},null,8,["modelValue","options","option-label","label","rules"]),o(p,{outlined:"",modelValue:t.value._AracVitesBilgisi,"onUpdate:modelValue":a[21]||(a[21]=e=>t.value._AracVitesBilgisi=e),options:Me,"option-label":e=>e.label,"option-value":"value","emit-value":"","map-options":"",label:l.$t("gear_type"),dense:"","hide-bottom-space":"",clearable:"",behavior:"menu","lazy-rules":"",rules:[e=>e!==null&&e!==""||l.$t("required")]},null,8,["modelValue","option-label","label","rules"]),o(V,null,{default:i(()=>[u("div",fl,[u("div",yl,[o(m,{color:"primary",label:l.$t("backward"),"no-caps":"",onClick:k},null,8,["label"])]),u("div",Vl,[o(m,{type:"submit",color:"primary",label:l.$t("forward"),"no-caps":"",onClick:c},null,8,["label"])])])]),_:1})]),_:1})]),_:1},8,["done","header-nav"]),o(y,{name:3,prefix:"3",title:"","header-nav":s.value>3,style:{"min-height":"200px"}},{default:i(()=>[o(P,{onSubmit:De,class:"q-gutter-md"},{default:i(()=>[o(p,{outlined:"",modelValue:t.value.MusteriIlceKodu,"onUpdate:modelValue":[a[22]||(a[22]=e=>t.value.MusteriIlceKodu=e),Oe],options:G.value,"option-label":e=>e.Aciklama,"option-value":"id","emit-value":"","map-options":"",label:l.$t("province_select"),dense:"","hide-bottom-space":"",behavior:"menu",clearable:"","use-input":"",onFilter:Se,"lazy-rules":"",rules:[e=>e!==null&&e!==""||l.$t("required")]},null,8,["modelValue","options","option-label","label","rules"]),o(p,{outlined:"",modelValue:t.value.MusteriBucakKodu,"onUpdate:modelValue":[a[23]||(a[23]=e=>t.value.MusteriBucakKodu=e),_e],options:M(E),"option-label":e=>e.ilce_Adi,"option-value":"id","emit-value":"","map-options":"",label:l.$t("district_select"),dense:"",clearable:"","hide-bottom-space":"",behavior:"menu","use-input":"",onFilter:Ce,"lazy-rules":"",rules:[e=>e!==null&&e!==""||l.$t("required")]},null,8,["modelValue","options","option-label","label","rules"]),o(p,{outlined:"",modelValue:t.value.MusteriBelediyeKodu,"onUpdate:modelValue":[a[24]||(a[24]=e=>t.value.MusteriBelediyeKodu=e),Ue],options:H.value,"option-label":e=>e.Belediye_Adi,"option-value":"id","emit-value":"","map-options":"",label:l.$t("council_select"),dense:"",clearable:"","hide-bottom-space":"",behavior:"menu","use-input":"",onFilter:we,"lazy-rules":"",rules:[e=>e!==null&&e!==""||l.$t("required")]},null,8,["modelValue","options","option-label","label","rules"]),o(p,{outlined:"",modelValue:t.value.MusteriMahalleKodu,"onUpdate:modelValue":[a[25]||(a[25]=e=>t.value.MusteriMahalleKodu=e),Qe],options:j.value,"option-label":e=>e.Mahalle_Adi,"option-value":"id","emit-value":"","map-options":"",label:l.$t("municipality_select"),dense:"",clearable:"","hide-bottom-space":"","use-input":"",onFilter:Te,behavior:"menu","lazy-rules":"",rules:[e=>e!==null&&e!==""||l.$t("required")]},null,8,["modelValue","options","option-label","label","rules"]),o(p,{outlined:"",modelValue:t.value.MusteriCSBMKodu,"onUpdate:modelValue":a[26]||(a[26]=e=>t.value.MusteriCSBMKodu=e),options:D.value,"option-label":e=>e.Sokak_Adi,"option-value":"id","emit-value":"","map-options":"",label:l.$t("street_select"),dense:"",clearable:"","use-input":"",onFilter:ze,"hide-bottom-space":"",behavior:"menu","lazy-rules":"",rules:[e=>e!==null&&e!==""||l.$t("required")]},null,8,["modelValue","options","option-label","label","rules"]),o(d,{dense:"",outlined:"",modelValue:t.value.MusteriApartmanAdi,"onUpdate:modelValue":a[27]||(a[27]=e=>t.value.MusteriApartmanAdi=e),type:"text",label:l.$t("building_no"),"hide-bottom-space":"","lazy-rules":"",rules:[e=>e&&e.length>0||l.$t("required")]},null,8,["modelValue","label","rules"]),o(d,{dense:"",outlined:"",modelValue:t.value.MusteriApartmanNo,"onUpdate:modelValue":a[28]||(a[28]=e=>t.value.MusteriApartmanNo=e),type:"text",label:l.$t("apartment_no"),"hide-bottom-space":"","lazy-rules":"",rules:[e=>e&&e.length>0||l.$t("required")]},null,8,["modelValue","label","rules"]),o(d,{dense:"",outlined:"",modelValue:t.value.MusteriCepTelefonNo,"onUpdate:modelValue":a[29]||(a[29]=e=>t.value.MusteriCepTelefonNo=e),type:"text",label:l.$t("phone_no"),"hide-bottom-space":"",prefix:"+90",mask:"### ### ## ##","unmasked-value":"","lazy-rules":"",rules:[e=>e&&e.length>0||l.$t("required")]},null,8,["modelValue","label","rules"]),o(d,{dense:"",outlined:"",modelValue:t.value.MusteriEPosta,"onUpdate:modelValue":a[30]||(a[30]=e=>t.value.MusteriEPosta=e),type:"email",label:l.$t("email_address"),"hide-bottom-space":"","lazy-rules":"",rules:[e=>e&&e.length>7||l.$t("required")]},null,8,["modelValue","label","rules"]),o(p,{outlined:"",modelValue:t.value.AcenteId,"onUpdate:modelValue":a[31]||(a[31]=e=>t.value.AcenteId=e),options:Q.value,"option-label":e=>e.Acente_Adi,"option-value":"id","emit-value":"","map-options":"",label:l.$t("agent_select"),dense:"",clearable:"","use-input":"",onFilter:qe,"hide-bottom-space":"",behavior:"menu","lazy-rules":"",rules:[e=>e!==null&&e!==""||l.$t("required")]},null,8,["modelValue","options","option-label","label","rules"]),o(V,null,{default:i(()=>[u("div",kl,[u("div",Ml,[o(m,{color:"primary",label:l.$t("backward"),"no-caps":"",onClick:k},null,8,["label"])]),u("div",hl,[o(m,{type:"submit",color:"primary",label:l.$t("calculate"),"no-caps":"",disable:!t.value.uyar},null,8,["label","disable"])])])]),_:1}),u("div",Al,[u("div",gl,[o(He,{modelValue:t.value.uyar,"onUpdate:modelValue":a[32]||(a[32]=e=>t.value.uyar=e),color:"primary",dense:""},null,8,["modelValue"])]),u("div",$l,[u("b",null,b(l.$t("warning"))+":",1),f(" "+b(l.$t("warning_text")),1)])])]),_:1})]),_:1},8,["header-nav"]),o(y,{name:4,done:s.value>4,prefix:4,"header-nav":s.value>4,style:{"min-height":"200px"}},{default:i(()=>[o(il),o(V,null,{default:i(()=>[u("div",Sl,[u("div",Cl,[o(m,{color:"primary",label:l.$t("backward"),"no-caps":"",onClick:k},null,8,["label"])]),u("div",wl,[o(m,{type:"submit",color:"primary",label:l.$t("forward"),"no-caps":"",onClick:c},null,8,["label"])])])]),_:1})]),_:1},8,["done","header-nav"]),o(y,{name:5,done:s.value>5,prefix:5,"header-nav":s.value>5,style:{"min-height":"200px"}},{default:i(()=>[o(ul,{onGoToPayment:c}),o(V,null,{default:i(()=>[o(m,{color:"primary",label:l.$t("backward"),"no-caps":"",onClick:k},null,8,["label"])]),_:1})]),_:1},8,["done","header-nav"]),o(y,{name:6,done:s.value>6,prefix:6,"header-nav":s.value>6,style:{"min-height":"200px"}},{default:i(()=>[o(nl),o(V,null,{default:i(()=>[u("div",Tl,[u("div",zl,[o(m,{color:"primary",label:l.$t("backward"),"no-caps":"",onClick:k},null,8,["label"])]),ql])]),_:1})]),_:1},8,["done","header-nav"])]),_:1},8,["modelValue"])])]),_:1})]),_:1})]),_:1}))}});export{pa as default};