import{C as b,D as x,E as u,au as h,n as g,aN as v,s as e,I as t,f as a,q as i,aL as S,u as $,x as k,Q as d,aA as o,J as f}from"./index.514420a3.js";import{Q as C}from"./QExpansionItem.3e8e8ffb.js";import{Q}from"./QList.8b584b97.js";import{u as w}from"./trafik-sigorta-create.872768c6.js";import{d as p}from"./date.f65a5c9c.js";import"./QItem.c8aa57d0.js";import"./QItemLabel.52ffe8a8.js";import"./QSlideTransition.e208e9bd.js";import"./format.c860d4da.js";const D={class:"text-subtitle1 text-weight-bold text-grey-8 q-pt-md q-pb-sm"},Y={style:{"font-size":"11px"}},T={style:{"font-size":"11px"}},z={style:{"font-size":"12px"}},P=e("br",null,null,-1),V={style:{"font-size":"12px"}},q={class:"row q-pt-md"},B={class:"col-1"},A={class:"col-11 text-grey-8",style:{"font-size":"12px"}},M={class:"q-pt-md"},G=b({__name:"PaymentPirimTrafik",setup(N){const _=w(),c=x(),{trafikSigorta:r}=u(_),{user:y}=u(c),l=h({uyar2:!1});return(s,n)=>(g(),v("div",null,[e("div",D,t(s.$t("for_policy_payment")),1),a(Q,{bordered:"",dense:"",style:{"border-radius":"8px"}},{default:i(()=>[a(C,{class:"text-grey-8","expand-separator":"",label:" Ferdi Kaza Sigortas\u0131 ","default-opened":""},{default:i(()=>[a(k,null,{default:i(()=>[a(d,{class:"flex justify-between items-start"},{default:i(()=>[e("span",Y,t(s.$t("identity_no"))+": "+t(o(y).id_card),1)]),_:1}),a(d,{class:"flex justify-between items-start"},{default:i(()=>[e("span",T,t(s.$t("name_surname"))+": "+t(o(r).info.KullaniciAdi+"  "+o(r).info.KullaniciSoyAdi),1)]),_:1}),a(d,{class:"flex justify-between items-start"},{default:i(()=>[e("span",z,[f(t(s.$t("start"))+" - "+t(s.$t("end_date"))+":",1),P,f(" "+t(o(p).formatDate(o(r).info.startdate,"DD-MM-YYYY"))+" - "+t(o(p).formatDate(o(r).info.endtdate,"DD-MM-YYYY")),1)]),e("span",V,t(s.$t("total_preminum"))+": "+t(o(r).BrutPrim)+" TL",1)]),_:1})]),_:1})]),_:1})]),_:1}),e("div",q,[e("div",B,[a(S,{modelValue:l.uyar2,"onUpdate:modelValue":n[0]||(n[0]=m=>l.uyar2=m),color:"primary",dense:""},null,8,["modelValue"])]),e("div",A,t(s.$t("warning_text3")),1)]),e("div",M,[a($,{type:"submit",color:"primary",label:s.$t("go_to_payment"),"no-caps":"",class:"full-width",onClick:n[1]||(n[1]=m=>s.$emit("goToPayment")),disable:!l.uyar2},null,8,["label","disable"])])]))}});export{G as default};
