import{C as b,D as x,E as m,au as h,n as v,aO as z,s as t,I as e,f as s,q as i,aM as Q,u as g,x as w,Q as n,aA as o,J as p}from"./index.30f5c437.js";import{Q as C}from"./QExpansionItem.a6d51037.js";import{Q as D}from"./QList.1b8644ff.js";import{u as Y}from"./ferdi-kaza-create.127615f7.js";import{d as u}from"./date.3e6ee8a6.js";import"./QItem.5a6d01d8.js";import"./QItemLabel.914dfdc7.js";import"./QSlideTransition.da40cf02.js";import"./format.c860d4da.js";const $={class:"q-pa-xs"},P={class:"text-subtitle1 text-weight-bold text-grey-8 q-pt-md q-pb-sm"},S={style:{"font-size":"12px"}},q={style:{"font-size":"12px"}},K={style:{"font-size":"12px"}},V=t("br",null,null,-1),B={style:{"font-size":"12px"}},M={class:"row q-pt-md"},A={class:"col-1"},T={class:"col-11 text-grey-8",style:{"font-size":"12px"}},j={class:"q-pt-md"},G=b({__name:"PaymentPirim",setup(k){const _=Y(),c=x(),{ferdiKaza:r}=m(_),{user:f}=m(c),l=h({uyar2:!1});return(a,d)=>(v(),z("div",$,[t("div",P,e(a.$t("for_policy_payment")),1),s(D,{bordered:"",dense:"",style:{"border-radius":"8px"}},{default:i(()=>[s(C,{class:"text-grey-8","expand-separator":"",label:a.$t("personel_accident_insurance"),"default-opened":""},{default:i(()=>[s(w,null,{default:i(()=>[s(n,{class:"flex justify-between items-start"},{default:i(()=>[t("span",S,e(a.$t("identity_no"))+": "+e(o(f).id_card),1)]),_:1}),s(n,{class:"flex justify-between items-start"},{default:i(()=>[t("span",q,e(a.$t("name_surname"))+": "+e(o(r).info.KullaniciAdi+"  "+o(r).info.KullaniciSoyAdi),1)]),_:1}),s(n,{class:"flex justify-between items-start"},{default:i(()=>[t("span",K,[p(e(a.$t("start"))+" - "+e(a.$t("end_date"))+":",1),V,p(" "+e(o(u).formatDate(o(r).info.startdate,"DD-MM-YYYY"))+" - "+e(o(u).formatDate(o(r).info.endtdate,"DD-MM-YYYY")),1)]),t("span",B,"Toplam Prim: "+e(o(r).BrutPrim)+" TL",1)]),_:1}),s(n)]),_:1})]),_:1},8,["label"])]),_:1}),t("div",M,[t("div",A,[s(Q,{modelValue:l.uyar2,"onUpdate:modelValue":d[0]||(d[0]=y=>l.uyar2=y),color:"primary",dense:""},null,8,["modelValue"])]),t("div",T,e(a.$t("warning_text3")),1)]),t("div",j,[s(g,{type:"submit",color:"primary",label:a.$t("go_to_payment"),"no-caps":"",class:"full-width",to:{name:"FerdiKazaPayment"},disable:!l.uyar2},null,8,["label","disable"])])]))}});export{G as default};