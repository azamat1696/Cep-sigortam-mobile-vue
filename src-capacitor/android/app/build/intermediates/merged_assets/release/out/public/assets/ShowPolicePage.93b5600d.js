import{_ as v,C as b,D as Q,E as g,n as i,p as w,q as s,f as t,H as P,v as h,J as p,I as e,aN as _,bd as S,aA as r,F as $,s as o,aO as z,x as B,Q as d,z as C,A as I}from"./index.514420a3.js";import{Q as N}from"./QToolbarTitle.a74a9cdc.js";import{Q as V,a as k}from"./QHeader.40c6787a.js";import{Q as L}from"./QExpansionItem.3e8e8ffb.js";import{Q as T}from"./QList.8b584b97.js";import{Q as A,a as j}from"./QLayout.21d8098c.js";import"./QItem.c8aa57d0.js";import"./QItemLabel.52ffe8a8.js";import"./QSlideTransition.e208e9bd.js";const q=n=>(C("data-v-2a28d735"),n=n(),I(),n),E={class:"text-subtitle2 q-pb-md"},F={style:{"font-size":"12px"}},H={style:{"font-size":"12px"}},D={style:{"font-size":"12px"}},J={style:{"font-size":"12px"}},O=q(()=>o("br",null,null,-1)),R={style:{"font-size":"12px"}},G={key:0,class:"row absolute-center"},K={class:"text-subtitle2 text-primary col-12 text-center text-bold q-pt-lg"},M={class:"col-12 text-center"},U=b({__name:"ShowPolicePage",setup(n){const u=Q(),{policy:f,user:c}=g(u),{getAllPolicy:x}=u;return x(),(a,m)=>(i(),w(A,{view:"lHh Lpr lFf"},{default:s(()=>[t(k,{elevated:"",reveal:""},{default:s(()=>[t(V,null,{default:s(()=>[t(P,{size:"sm"},{default:s(()=>[t(h,{class:"cursor-pointer",name:"chevron_left",size:"md",onClick:m[0]||(m[0]=l=>a.$router.push({name:"homeLogin"}))})]),_:1}),t(N,{class:"text-subtitle2 text-bold text-center"},{default:s(()=>[p(e(a.$t("my_policies")),1)]),_:1})]),_:1})]),_:1}),t(j,null,{default:s(()=>[(i(!0),_($,null,S(r(f),(l,y)=>(i(),_("div",{class:"q-pa-md",key:y},[o("div",E,e(y+1)+". "+e(a.$t("active_commercial_papers")),1),t(T,{bordered:"",dense:"",style:{"border-radius":"8px"}},{default:s(()=>[t(L,{class:"text-grey-8","expand-separator":"",label:l.Brans+"- "+l.PoliceNo+" / "+l.VadeBaslangic.split(" ")[0]},{default:s(()=>[t(B,null,{default:s(()=>[t(d,{class:"flex justify-between items-start"},{default:s(()=>[o("span",F,e(a.$t("identity_no"))+": "+e(r(c).id_card),1)]),_:1}),t(d,{class:"flex justify-between items-start"},{default:s(()=>[o("span",H,e(a.$t("name_surname"))+": "+e(r(c).name+" "+r(c).surname),1)]),_:1}),t(d,{class:"flex justify-between items-start"},{default:s(()=>[o("span",D,e(a.$t("commercial_paper_no"))+": "+e(l.PoliceNo),1)]),_:2},1024),t(d,{class:"flex justify-between items-start"},{default:s(()=>[o("span",J,[p(e(a.$t("start_end_date"))+":",1),O,p(" "+e(l.VadeBaslangic.split(" ")[0])+" - "+e(l.VadeBitis.split(" ")[0]),1)]),o("span",R,e(a.$t("total_pirim"))+": "+e(l.BrutPrim)+" TL",1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["label"])]),_:2},1024)]))),128)),r(f).length<=0?(i(),_("div",G,[o("div",K,e(a.$t("no_active_commercial_papers")),1),o("div",M,[t(h,{name:"folder_off",size:"xl",color:"primary"})])])):z("",!0)]),_:1})]),_:1}))}});var le=v(U,[["__scopeId","data-v-2a28d735"]]);export{le as default};