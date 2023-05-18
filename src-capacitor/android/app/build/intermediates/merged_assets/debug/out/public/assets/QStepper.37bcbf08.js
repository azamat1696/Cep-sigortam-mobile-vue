import{m as b,h as n,k as S,r as x,c as l,v as A,t as N,R as T,g as I,i as B,j as P,bw as k,bl as D,S as K,V as $,ao as R,ab as V,ak as W}from"./index.30f5c437.js";import{Q as j}from"./QSlideTransition.da40cf02.js";import{u as E,a as F,b as L,c as U}from"./use-panel.c1f97c66.js";import{u as z}from"./use-cache.b0833c75.js";var Y=b({name:"QStepperNavigation",setup(e,{slots:o}){return()=>n("div",{class:"q-stepper__nav"},S(o.default))}}),w=b({name:"StepHeader",props:{stepper:{},step:{},goToPanel:Function},setup(e,{attrs:o}){const{proxy:{$q:s}}=I(),i=x(null),r=l(()=>e.stepper.modelValue===e.step.name),c=l(()=>{const t=e.step.disable;return t===!0||t===""}),p=l(()=>{const t=e.step.error;return t===!0||t===""}),u=l(()=>{const t=e.step.done;return c.value===!1&&(t===!0||t==="")}),_=l(()=>{const t=e.step.headerNav,a=t===!0||t===""||t===void 0;return c.value===!1&&e.stepper.headerNav&&a}),d=l(()=>e.step.prefix&&(r.value===!1||e.stepper.activeIcon==="none")&&(p.value===!1||e.stepper.errorIcon==="none")&&(u.value===!1||e.stepper.doneIcon==="none")),f=l(()=>{const t=e.step.icon||e.stepper.inactiveIcon;if(r.value===!0){const a=e.step.activeIcon||e.stepper.activeIcon;return a==="none"?t:a||s.iconSet.stepper.active}if(p.value===!0){const a=e.step.errorIcon||e.stepper.errorIcon;return a==="none"?t:a||s.iconSet.stepper.error}if(c.value===!1&&u.value===!0){const a=e.step.doneIcon||e.stepper.doneIcon;return a==="none"?t:a||s.iconSet.stepper.done}return t}),v=l(()=>{const t=p.value===!0?e.step.errorColor||e.stepper.errorColor:void 0;if(r.value===!0){const a=e.step.activeColor||e.stepper.activeColor||e.step.color;return a!==void 0?a:t}return t!==void 0?t:c.value===!1&&u.value===!0?e.step.doneColor||e.stepper.doneColor||e.step.color||e.stepper.inactiveColor:e.step.color||e.stepper.inactiveColor}),g=l(()=>"q-stepper__tab col-grow flex items-center no-wrap relative-position"+(v.value!==void 0?` text-${v.value}`:"")+(p.value===!0?" q-stepper__tab--error q-stepper__tab--error-with-"+(d.value===!0?"prefix":"icon"):"")+(r.value===!0?" q-stepper__tab--active":"")+(u.value===!0?" q-stepper__tab--done":"")+(_.value===!0?" q-stepper__tab--navigation q-focusable q-hoverable":"")+(c.value===!0?" q-stepper__tab--disabled":"")),q=l(()=>e.stepper.headerNav!==!0?!1:_.value);function h(){i.value!==null&&i.value.focus(),r.value===!1&&e.goToPanel(e.step.name)}function C(t){t.keyCode===13&&r.value===!1&&e.goToPanel(e.step.name)}return()=>{const t={class:g.value};_.value===!0&&(t.onClick=h,t.onKeyup=C,Object.assign(t,c.value===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:o.tabindex||0}));const a=[n("div",{class:"q-focus-helper",tabindex:-1,ref:i}),n("div",{class:"q-stepper__dot row flex-center q-stepper__line relative-position"},[n("span",{class:"row flex-center"},[d.value===!0?e.step.prefix:n(A,{name:f.value})])])];if(e.step.title!==void 0&&e.step.title!==null){const m=[n("div",{class:"q-stepper__title"},e.step.title)];e.step.caption!==void 0&&e.step.caption!==null&&m.push(n("div",{class:"q-stepper__caption"},e.step.caption)),a.push(n("div",{class:"q-stepper__label q-stepper__line relative-position"},m))}return N(n("div",t,a),[[T,q.value]])}}});function Q(e){return n("div",{class:"q-stepper__step-content"},[n("div",{class:"q-stepper__step-inner"},S(e.default))])}const y={setup(e,{slots:o}){return()=>Q(o)}};var Z=b({name:"QStep",props:{...E,icon:String,color:String,title:{type:String,required:!0},caption:String,prefix:[String,Number],doneIcon:String,doneColor:String,activeIcon:String,activeColor:String,errorIcon:String,errorColor:String,headerNav:{type:Boolean,default:!0},done:Boolean,error:Boolean,onScroll:[Function,Array]},setup(e,{slots:o,emit:s}){const{proxy:{$q:i}}=I(),r=B(k,P);if(r===P)return console.error("QStep needs to be a child of QStepper"),P;const{getCacheWithFn:c}=z(),p=x(null),u=l(()=>r.value.modelValue===e.name),_=l(()=>i.platform.is.ios!==!0&&i.platform.is.chrome===!0||u.value!==!0||r.value.vertical!==!0?{}:{onScroll(v){const{target:g}=v;g.scrollTop>0&&(g.scrollTop=0),e.onScroll!==void 0&&s("scroll",v)}}),d=l(()=>typeof e.name=="string"||typeof e.name=="number"?e.name:String(e.name));function f(){const v=r.value.vertical;return v===!0&&r.value.keepAlive===!0?n(D,r.value.keepAliveProps.value,u.value===!0?[n(r.value.needsUniqueKeepAliveWrapper.value===!0?c(d.value,()=>({...y,name:d.value})):y,{key:d.value},o.default)]:void 0):v!==!0||u.value===!0?Q(o):void 0}return()=>n("div",{ref:p,class:"q-stepper__step",role:"tabpanel",..._.value},r.value.vertical===!0?[n(w,{stepper:r.value,step:e,goToPanel:r.value.goToPanel}),r.value.animated===!0?n(j,f):f()]:[f()])}});const H=/(-\w)/g;function M(e){const o={};for(const s in e){const i=s.replace(H,r=>r[1].toUpperCase());o[i]=e[s]}return o}var ee=b({name:"QStepper",props:{...K,...F,flat:Boolean,bordered:Boolean,alternativeLabels:Boolean,headerNav:Boolean,contracted:Boolean,headerClass:String,inactiveColor:String,inactiveIcon:String,doneIcon:String,doneColor:String,activeIcon:String,activeColor:String,errorIcon:String,errorColor:String},emits:L,setup(e,{slots:o}){const s=I(),i=$(e,s.proxy.$q),{updatePanelsList:r,isValidPanelName:c,updatePanelIndex:p,getPanelContent:u,getPanels:_,panelDirectives:d,goToPanel:f,keepAliveProps:v,needsUniqueKeepAliveWrapper:g}=U();R(k,l(()=>({goToPanel:f,keepAliveProps:v,needsUniqueKeepAliveWrapper:g,...e})));const q=l(()=>`q-stepper q-stepper--${e.vertical===!0?"vertical":"horizontal"}`+(e.flat===!0?" q-stepper--flat":"")+(e.bordered===!0?" q-stepper--bordered":"")+(i.value===!0?" q-stepper--dark q-dark":"")),h=l(()=>`q-stepper__header row items-stretch justify-between q-stepper__header--${e.alternativeLabels===!0?"alternative":"standard"}-labels`+(e.flat===!1||e.bordered===!0?" q-stepper__header--border":"")+(e.contracted===!0?" q-stepper__header--contracted":"")+(e.headerClass!==void 0?` ${e.headerClass}`:""));function C(){const t=S(o.message,[]);if(e.vertical===!0){c(e.modelValue)&&p();const a=n("div",{class:"q-stepper__content"},S(o.default));return t===void 0?[a]:t.concat(a)}return[n("div",{class:h.value},_().map(a=>{const m=M(a.props);return n(w,{key:m.name,stepper:e,step:m,goToPanel:f})})),t,W("div",{class:"q-stepper__content q-panel-parent"},u(),"cont",e.swipeable,()=>d.value)]}return()=>(r(o),n("div",{class:q.value},V(o.navigation,C())))}});export{ee as Q,Z as a,Y as b};
