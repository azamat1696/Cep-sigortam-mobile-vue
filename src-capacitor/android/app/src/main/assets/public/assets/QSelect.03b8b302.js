import{a0 as Pt,r as E,c as S,w as se,aj as re,a8 as Ht,aH as _t,a9 as Rt,aa as Lt,M as Ne,h as V,g as $e,m as Qe,aQ as je,aR as St,aS as gt,aT as ht,ae as Dt,S as Kt,aU as Nt,af as $t,V as Qt,aV as jt,ag as Wt,aW as Ut,ah as Xt,aX as Yt,aY as Zt,a6 as Gt,aZ as Jt,a_ as it,aq as el,a$ as tl,k as ll,N as ul,b0 as nl,b1 as ol,b2 as al,Y as me,b3 as il,b4 as rl,b5 as rt,b6 as pe,b7 as sl,b8 as cl,a4 as Le,v as dl,b9 as fl,a5 as ke,X as vl,ba as ml,y as Sl,ab as gl}from"./index.30f5c437.js";import{Q as hl}from"./QChip.e0a903dc.js";import{a as yl,Q as bl}from"./QItem.5a6d01d8.js";import{Q as wl}from"./QItemLabel.914dfdc7.js";import{u as Cl,v as st,a as Vl,b as kl,c as xl,p as ct,r as dt,s as Al,d as Ol}from"./position-engine.bbf55c97.js";import{r as Ke}from"./rtl.b51694b1.js";import{n as ft}from"./format.c860d4da.js";const X=1e3,pl=["start","center","end","start-force","center-force","end-force"],yt=Array.prototype.filter,Fl=window.getComputedStyle(document.body).overflowAnchor===void 0?Pt:function(e,d){e!==null&&(e._qOverflowAnimationFrame!==void 0&&cancelAnimationFrame(e._qOverflowAnimationFrame),e._qOverflowAnimationFrame=requestAnimationFrame(()=>{if(e===null)return;e._qOverflowAnimationFrame=void 0;const s=e.children||[];yt.call(s,p=>p.dataset&&p.dataset.qVsAnchor!==void 0).forEach(p=>{delete p.dataset.qVsAnchor});const C=s[d];C&&C.dataset&&(C.dataset.qVsAnchor="")}))};function xe(e,d){return e+d}function De(e,d,s,C,p,i,F,y){const b=e===window?document.scrollingElement||document.documentElement:e,z=p===!0?"offsetWidth":"offsetHeight",r={scrollStart:0,scrollViewSize:-F-y,scrollMaxSize:0,offsetStart:-F,offsetEnd:-y};if(p===!0?(e===window?(r.scrollStart=window.pageXOffset||window.scrollX||document.body.scrollLeft||0,r.scrollViewSize+=document.documentElement.clientWidth):(r.scrollStart=b.scrollLeft,r.scrollViewSize+=b.clientWidth),r.scrollMaxSize=b.scrollWidth,i===!0&&(r.scrollStart=(Ke===!0?r.scrollMaxSize-r.scrollViewSize:0)-r.scrollStart)):(e===window?(r.scrollStart=window.pageYOffset||window.scrollY||document.body.scrollTop||0,r.scrollViewSize+=document.documentElement.clientHeight):(r.scrollStart=b.scrollTop,r.scrollViewSize+=b.clientHeight),r.scrollMaxSize=b.scrollHeight),s!==null)for(let g=s.previousElementSibling;g!==null;g=g.previousElementSibling)g.classList.contains("q-virtual-scroll--skip")===!1&&(r.offsetStart+=g[z]);if(C!==null)for(let g=C.nextElementSibling;g!==null;g=g.nextElementSibling)g.classList.contains("q-virtual-scroll--skip")===!1&&(r.offsetEnd+=g[z]);if(d!==e){const g=b.getBoundingClientRect(),x=d.getBoundingClientRect();p===!0?(r.offsetStart+=x.left-g.left,r.offsetEnd-=x.width):(r.offsetStart+=x.top-g.top,r.offsetEnd-=x.height),e!==window&&(r.offsetStart+=r.scrollStart),r.offsetEnd+=r.scrollMaxSize-r.offsetStart}return r}function vt(e,d,s,C){d==="end"&&(d=(e===window?document.body:e)[s===!0?"scrollWidth":"scrollHeight"]),e===window?s===!0?(C===!0&&(d=(Ke===!0?document.body.scrollWidth-document.documentElement.clientWidth:0)-d),window.scrollTo(d,window.pageYOffset||window.scrollY||document.body.scrollTop||0)):window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,d):s===!0?(C===!0&&(d=(Ke===!0?e.scrollWidth-e.offsetWidth:0)-d),e.scrollLeft=d):e.scrollTop=d}function Fe(e,d,s,C){if(s>=C)return 0;const p=d.length,i=Math.floor(s/X),F=Math.floor((C-1)/X)+1;let y=e.slice(i,F).reduce(xe,0);return s%X!==0&&(y-=d.slice(i*X,s).reduce(xe,0)),C%X!==0&&C!==p&&(y-=d.slice(C,F*X).reduce(xe,0)),y}const bt={virtualScrollSliceSize:{type:[Number,String],default:null},virtualScrollSliceRatioBefore:{type:[Number,String],default:1},virtualScrollSliceRatioAfter:{type:[Number,String],default:1},virtualScrollItemSize:{type:[Number,String],default:24},virtualScrollStickySizeStart:{type:[Number,String],default:0},virtualScrollStickySizeEnd:{type:[Number,String],default:0},tableColspan:[Number,String]},Kl=Object.keys(bt),ql={virtualScrollHorizontal:Boolean,onVirtualScroll:Function,...bt};function Ml({virtualScrollLength:e,getVirtualScrollTarget:d,getVirtualScrollEl:s,virtualScrollItemSizeComputed:C}){const p=$e(),{props:i,emit:F,proxy:y}=p,{$q:b}=y;let z,r,g,x=[],w;const L=E(0),B=E(0),Q=E({}),j=E(null),_=E(null),W=E(null),q=E({from:0,to:0}),M=S(()=>i.tableColspan!==void 0?i.tableColspan:100);C===void 0&&(C=S(()=>i.virtualScrollItemSize));const U=S(()=>C.value+";"+i.virtualScrollHorizontal),$=S(()=>U.value+";"+i.virtualScrollSliceRatioBefore+";"+i.virtualScrollSliceRatioAfter);se($,()=>{Z()}),se(U,le);function le(){te(r,!0)}function ue(n){te(n===void 0?r:n)}function Y(n,c){const m=d();if(m==null||m.nodeType===8)return;const A=De(m,s(),j.value,_.value,i.virtualScrollHorizontal,b.lang.rtl,i.virtualScrollStickySizeStart,i.virtualScrollStickySizeEnd);g!==A.scrollViewSize&&Z(A.scrollViewSize),ne(m,A,Math.min(e.value-1,Math.max(0,parseInt(n,10)||0)),0,pl.indexOf(c)>-1?c:r>-1&&n>r?"end":"start")}function K(){const n=d();if(n==null||n.nodeType===8)return;const c=De(n,s(),j.value,_.value,i.virtualScrollHorizontal,b.lang.rtl,i.virtualScrollStickySizeStart,i.virtualScrollStickySizeEnd),m=e.value-1,A=c.scrollMaxSize-c.offsetStart-c.offsetEnd-B.value;if(z===c.scrollStart)return;if(c.scrollMaxSize<=0){ne(n,c,0,0);return}g!==c.scrollViewSize&&Z(c.scrollViewSize),ee(q.value.from);const T=Math.floor(c.scrollMaxSize-Math.max(c.scrollViewSize,c.offsetEnd)-Math.min(w[m],c.scrollViewSize/2));if(T>0&&Math.ceil(c.scrollStart)>=T){ne(n,c,m,c.scrollMaxSize-c.offsetEnd-x.reduce(xe,0));return}let h=0,f=c.scrollStart-c.offsetStart,P=f;if(f<=A&&f+c.scrollViewSize>=L.value)f-=L.value,h=q.value.from,P=f;else for(let l=0;f>=x[l]&&h<m;l++)f-=x[l],h+=X;for(;f>0&&h<m;)f-=w[h],f>-c.scrollViewSize?(h++,P=f):P=w[h]+f;ne(n,c,h,P)}function ne(n,c,m,A,T){const h=typeof T=="string"&&T.indexOf("-force")>-1,f=h===!0?T.replace("-force",""):T,P=f!==void 0?f:"start";let l=Math.max(0,m-Q.value[P]),H=l+Q.value.total;H>e.value&&(H=e.value,l=Math.max(0,H-Q.value.total)),z=c.scrollStart;const ie=l!==q.value.from||H!==q.value.to;if(ie===!1&&f===void 0){ae(m);return}const{activeElement:ce}=document,J=W.value;ie===!0&&J!==null&&J!==ce&&J.contains(ce)===!0&&(J.addEventListener("focusout",oe),setTimeout(()=>{J!==null&&J.removeEventListener("focusout",oe)})),Fl(J,m-l);const qe=f!==void 0?w.slice(l,m).reduce(xe,0):0;if(ie===!0){const de=H>=q.value.from&&l<=q.value.to?q.value.to:H;q.value={from:l,to:de},L.value=Fe(x,w,0,l),B.value=Fe(x,w,H,e.value),requestAnimationFrame(()=>{q.value.to!==H&&z===c.scrollStart&&(q.value={from:q.value.from,to:H},B.value=Fe(x,w,H,e.value))})}requestAnimationFrame(()=>{if(z!==c.scrollStart)return;ie===!0&&ee(l);const de=w.slice(l,m).reduce(xe,0),ge=de+c.offsetStart+L.value,Me=ge+w[m];let Ae=ge+A;if(f!==void 0){const Ee=de-qe,D=c.scrollStart+Ee;Ae=h!==!0&&D<ge&&Me<D+c.scrollViewSize?D:f==="end"?Me-c.scrollViewSize:ge-(f==="start"?0:Math.round((c.scrollViewSize-w[m])/2))}z=Ae,vt(n,Ae,i.virtualScrollHorizontal,b.lang.rtl),ae(m)})}function ee(n){const c=W.value;if(c){const m=yt.call(c.children,l=>l.classList&&l.classList.contains("q-virtual-scroll--skip")===!1),A=m.length,T=i.virtualScrollHorizontal===!0?l=>l.getBoundingClientRect().width:l=>l.offsetHeight;let h=n,f,P;for(let l=0;l<A;){for(f=T(m[l]),l++;l<A&&m[l].classList.contains("q-virtual-scroll--with-prev")===!0;)f+=T(m[l]),l++;P=f-w[h],P!==0&&(w[h]+=P,x[Math.floor(h/X)]+=P),h++}}}function oe(){W.value!==null&&W.value!==void 0&&W.value.focus()}function te(n,c){const m=1*C.value;(c===!0||Array.isArray(w)===!1)&&(w=[]);const A=w.length;w.length=e.value;for(let h=e.value-1;h>=A;h--)w[h]=m;const T=Math.floor((e.value-1)/X);x=[];for(let h=0;h<=T;h++){let f=0;const P=Math.min((h+1)*X,e.value);for(let l=h*X;l<P;l++)f+=w[l];x.push(f)}r=-1,z=void 0,L.value=Fe(x,w,0,q.value.from),B.value=Fe(x,w,q.value.to,e.value),n>=0?(ee(q.value.from),re(()=>{Y(n)})):G()}function Z(n){if(n===void 0&&typeof window!="undefined"){const f=d();f!=null&&f.nodeType!==8&&(n=De(f,s(),j.value,_.value,i.virtualScrollHorizontal,b.lang.rtl,i.virtualScrollStickySizeStart,i.virtualScrollStickySizeEnd).scrollViewSize)}g=n;const c=parseFloat(i.virtualScrollSliceRatioBefore)||0,m=parseFloat(i.virtualScrollSliceRatioAfter)||0,A=1+c+m,T=n===void 0||n<=0?1:Math.ceil(n/C.value),h=Math.max(1,T,Math.ceil((i.virtualScrollSliceSize>0?i.virtualScrollSliceSize:10)/A));Q.value={total:Math.ceil(h*A),start:Math.ceil(h*c),center:Math.ceil(h*(.5+c)),end:Math.ceil(h*(1+c)),view:T}}function Se(n,c){const m=i.virtualScrollHorizontal===!0?"width":"height",A={["--q-virtual-scroll-item-"+m]:C.value+"px"};return[n==="tbody"?V(n,{class:"q-virtual-scroll__padding",key:"before",ref:j},[V("tr",[V("td",{style:{[m]:`${L.value}px`,...A},colspan:M.value})])]):V(n,{class:"q-virtual-scroll__padding",key:"before",ref:j,style:{[m]:`${L.value}px`,...A}}),V(n,{class:"q-virtual-scroll__content",key:"content",ref:W,tabindex:-1},c.flat()),n==="tbody"?V(n,{class:"q-virtual-scroll__padding",key:"after",ref:_},[V("tr",[V("td",{style:{[m]:`${B.value}px`,...A},colspan:M.value})])]):V(n,{class:"q-virtual-scroll__padding",key:"after",ref:_,style:{[m]:`${B.value}px`,...A}})]}function ae(n){r!==n&&(i.onVirtualScroll!==void 0&&F("virtualScroll",{index:n,from:q.value.from,to:q.value.to-1,direction:n<r?"decrease":"increase",ref:y}),r=n)}Z();const G=Ht(K,b.platform.is.ios===!0?120:35);_t(()=>{Z()});let a=!1;return Rt(()=>{a=!0}),Lt(()=>{if(a!==!0)return;const n=d();z!==void 0&&n!==void 0&&n!==null&&n.nodeType!==8?vt(n,z,i.virtualScrollHorizontal,b.lang.rtl):Y(r)}),Ne(()=>{G.cancel()}),Object.assign(y,{scrollTo:Y,reset:le,refresh:ue}),{virtualScrollSliceRange:q,virtualScrollSliceSizeComputed:Q,setVirtualScrollSize:Z,onVirtualScrollEvt:G,localResetVirtualScroll:te,padVirtualScroll:Se,scrollTo:Y,reset:le,refresh:ue}}var zl=Qe({name:"QField",inheritAttrs:!1,props:je,emits:St,setup(){return gt(ht())}}),Il=Qe({name:"QMenu",inheritAttrs:!1,props:{...Cl,...Dt,...Kt,...Nt,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:st},self:{type:String,validator:st},offset:{type:Array,validator:Vl},scrollTarget:{default:void 0},touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...$t,"click","escapeKey"],setup(e,{slots:d,emit:s,attrs:C}){let p=null,i,F,y;const b=$e(),{proxy:z}=b,{$q:r}=z,g=E(null),x=E(!1),w=S(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),L=Qt(e,r),{registerTick:B,removeTick:Q}=jt(),{registerTimeout:j}=Wt(),{transitionProps:_,transitionStyle:W}=Ut(e),{localScrollTarget:q,changeScrollEvent:M,unconfigureScrollTarget:U}=kl(e,m),{anchorEl:$,canShow:le}=xl({showing:x}),{hide:ue}=Xt({showing:x,canShow:le,handleShow:a,handleHide:n,hideOnRouteChange:w,processOnMount:!0}),{showPortal:Y,hidePortal:K,renderPortal:ne}=Yt(b,g,P,"menu"),ee={anchorEl:$,innerRef:g,onClickOutside(l){if(e.persistent!==!0&&x.value===!0)return ue(l),(l.type==="touchstart"||l.target.classList.contains("q-dialog__backdrop"))&&me(l),!0}},oe=S(()=>ct(e.anchor||(e.cover===!0?"center middle":"bottom start"),r.lang.rtl)),te=S(()=>e.cover===!0?oe.value:ct(e.self||"top start",r.lang.rtl)),Z=S(()=>(e.square===!0?" q-menu--square":"")+(L.value===!0?" q-menu--dark q-dark":"")),Se=S(()=>e.autoClose===!0?{onClick:A}:{}),ae=S(()=>x.value===!0&&e.persistent!==!0);se(ae,l=>{l===!0?(nl(h),Ol(ee)):(it(h),dt(ee))});function G(){ol(()=>{let l=g.value;l&&l.contains(document.activeElement)!==!0&&(l=l.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||l.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||l.querySelector("[autofocus], [data-autofocus]")||l,l.focus({preventScroll:!0}))})}function a(l){if(p=e.noRefocus===!1?document.activeElement:null,Zt(T),Y(),m(),i=void 0,l!==void 0&&(e.touchPosition||e.contextMenu)){const H=Gt(l);if(H.left!==void 0){const{top:ie,left:ce}=$.value.getBoundingClientRect();i={left:H.left-ce,top:H.top-ie}}}F===void 0&&(F=se(()=>r.screen.width+"|"+r.screen.height+"|"+e.self+"|"+e.anchor+"|"+r.lang.rtl,f)),e.noFocus!==!0&&document.activeElement.blur(),B(()=>{f(),e.noFocus!==!0&&G()}),j(()=>{r.platform.is.ios===!0&&(y=e.autoClose,g.value.click()),f(),Y(!0),s("show",l)},e.transitionDuration)}function n(l){Q(),K(),c(!0),p!==null&&(l===void 0||l.qClickOutside!==!0)&&(((l&&l.type.indexOf("key")===0?p.closest('[tabindex]:not([tabindex^="-"])'):void 0)||p).focus(),p=null),j(()=>{K(!0),s("hide",l)},e.transitionDuration)}function c(l){i=void 0,F!==void 0&&(F(),F=void 0),(l===!0||x.value===!0)&&(Jt(T),U(),dt(ee),it(h)),l!==!0&&(p=null)}function m(){($.value!==null||e.scrollTarget!==void 0)&&(q.value=el($.value,e.scrollTarget),M(q.value,f))}function A(l){y!==!0?(tl(z,l),s("click",l)):y=!1}function T(l){ae.value===!0&&e.noFocus!==!0&&al(g.value,l.target)!==!0&&G()}function h(l){s("escapeKey"),ue(l)}function f(){const l=g.value;l===null||$.value===null||Al({el:l,offset:e.offset,anchorEl:$.value,anchorOrigin:oe.value,selfOrigin:te.value,absoluteOffset:i,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function P(){return V(ul,_.value,()=>x.value===!0?V("div",{role:"menu",...C,ref:g,tabindex:-1,class:["q-menu q-position-engine scroll"+Z.value,C.class],style:[C.style,W.value],...Se.value},ll(d.default)):null)}return Ne(c),Object.assign(z,{focus:G,updatePosition:f}),ne}});const mt=e=>["add","add-unique","toggle"].includes(e),Tl=".*+?^${}()|[]\\",El=Object.keys(je);var Nl=Qe({name:"QSelect",inheritAttrs:!1,props:{...ql,...il,...je,modelValue:{required:!0},multiple:Boolean,displayValue:[String,Number],displayValueHtml:Boolean,dropdownIcon:String,options:{type:Array,default:()=>[]},optionValue:[Function,String],optionLabel:[Function,String],optionDisable:[Function,String],hideSelected:Boolean,hideDropdownIcon:Boolean,fillInput:Boolean,maxValues:[Number,String],optionsDense:Boolean,optionsDark:{type:Boolean,default:null},optionsSelectedClass:String,optionsHtml:Boolean,optionsCover:Boolean,menuShrink:Boolean,menuAnchor:String,menuSelf:String,menuOffset:Array,popupContentClass:String,popupContentStyle:[String,Array,Object],useInput:Boolean,useChips:Boolean,newValueMode:{type:String,validator:mt},mapOptions:Boolean,emitValue:Boolean,inputDebounce:{type:[Number,String],default:500},inputClass:[Array,String,Object],inputStyle:[Array,String,Object],tabindex:{type:[String,Number],default:0},autocomplete:String,transitionShow:String,transitionHide:String,transitionDuration:[String,Number],behavior:{type:String,validator:e=>["default","menu","dialog"].includes(e),default:"default"},virtualScrollItemSize:{type:[Number,String],default:void 0},onNewValue:Function,onFilter:Function},emits:[...St,"add","remove","inputValue","newValue","keyup","keypress","keydown","filterAbort"],setup(e,{slots:d,emit:s}){const{proxy:C}=$e(),{$q:p}=C,i=E(!1),F=E(!1),y=E(-1),b=E(""),z=E(!1),r=E(!1);let g=null,x,w,L,B=null,Q,j,_,W;const q=E(null),M=E(null),U=E(null),$=E(null),le=E(null),ue=rl(e),Y=fl(lt),K=S(()=>Array.isArray(e.options)?e.options.length:0),ne=S(()=>e.virtualScrollItemSize===void 0?e.optionsDense===!0?24:48:e.virtualScrollItemSize),{virtualScrollSliceRange:ee,virtualScrollSliceSizeComputed:oe,localResetVirtualScroll:te,padVirtualScroll:Z,onVirtualScrollEvt:Se,scrollTo:ae,setVirtualScrollSize:G}=Ml({virtualScrollLength:K,getVirtualScrollTarget:kt,getVirtualScrollEl:et,virtualScrollItemSizeComputed:ne}),a=ht(),n=S(()=>{const t=e.mapOptions===!0&&e.multiple!==!0,o=e.modelValue!==void 0&&(e.modelValue!==null||t===!0)?e.multiple===!0&&Array.isArray(e.modelValue)?e.modelValue:[e.modelValue]:[];if(e.mapOptions===!0&&Array.isArray(e.options)===!0){const u=e.mapOptions===!0&&x!==void 0?x:[],v=o.map(O=>Vt(O,u));return e.modelValue===null&&t===!0?v.filter(O=>O!==null):v}return o}),c=S(()=>{const t={};return El.forEach(o=>{const u=e[o];u!==void 0&&(t[o]=u)}),t}),m=S(()=>e.optionsDark===null?a.isDark.value:e.optionsDark),A=S(()=>rt(n.value)),T=S(()=>{let t="q-field__input q-placeholder col";return e.hideSelected===!0||n.value.length===0?[t,e.inputClass]:(t+=" q-field__input--padding",e.inputClass===void 0?t:[t,e.inputClass])}),h=S(()=>(e.virtualScrollHorizontal===!0?"q-virtual-scroll--horizontal":"")+(e.popupContentClass?" "+e.popupContentClass:"")),f=S(()=>K.value===0),P=S(()=>n.value.map(t=>N.value(t)).join(", ")),l=S(()=>e.displayValue!==void 0?e.displayValue:P.value),H=S(()=>e.optionsHtml===!0?()=>!0:t=>t!=null&&t.html===!0),ie=S(()=>e.displayValueHtml===!0||e.displayValue===void 0&&(e.optionsHtml===!0||n.value.some(H.value))),ce=S(()=>a.focused.value===!0?e.tabindex:-1),J=S(()=>{const t={tabindex:e.tabindex,role:"combobox","aria-label":e.label,"aria-readonly":e.readonly===!0?"true":"false","aria-autocomplete":e.useInput===!0?"list":"none","aria-expanded":i.value===!0?"true":"false","aria-controls":`${a.targetUid.value}_lb`};return y.value>=0&&(t["aria-activedescendant"]=`${a.targetUid.value}_${y.value}`),t}),qe=S(()=>({id:`${a.targetUid.value}_lb`,role:"listbox","aria-multiselectable":e.multiple===!0?"true":"false"})),de=S(()=>n.value.map((t,o)=>({index:o,opt:t,html:H.value(t),selected:!0,removeAtIndex:Ct,toggleOption:fe,tabindex:ce.value}))),ge=S(()=>{if(K.value===0)return[];const{from:t,to:o}=ee.value;return e.options.slice(t,o).map((u,v)=>{const O=he.value(u)===!0,k=t+v,I={clickable:!0,active:!1,activeClass:Ee.value,manualFocus:!0,focused:!1,disable:O,tabindex:-1,dense:e.optionsDense,dark:m.value,role:"option",id:`${a.targetUid.value}_${k}`,onClick:()=>{fe(u)}};return O!==!0&&(He(u)===!0&&(I.active=!0),y.value===k&&(I.focused=!0),I["aria-selected"]=I.active===!0?"true":"false",p.platform.is.desktop===!0&&(I.onMousemove=()=>{i.value===!0&&ye(k)})),{index:k,opt:u,html:H.value(u),label:N.value(u),selected:I.active,focused:I.focused,toggleOption:fe,setOptionIndex:ye,itemProps:I}})}),Me=S(()=>e.dropdownIcon!==void 0?e.dropdownIcon:p.iconSet.arrow.dropdown),Ae=S(()=>e.optionsCover===!1&&e.outlined!==!0&&e.standout!==!0&&e.borderless!==!0&&e.rounded!==!0),Ee=S(()=>e.optionsSelectedClass!==void 0?e.optionsSelectedClass:e.color!==void 0?`text-${e.color}`:""),D=S(()=>Pe(e.optionValue,"value")),N=S(()=>Pe(e.optionLabel,"label")),he=S(()=>Pe(e.optionDisable,"disable")),ze=S(()=>n.value.map(t=>D.value(t))),wt=S(()=>{const t={onInput:lt,onChange:Y,onKeydown:Je,onKeyup:Ze,onKeypress:Ge,onFocus:Xe,onClick(o){w===!0&&ke(o)}};return t.onCompositionstart=t.onCompositionupdate=t.onCompositionend=Y,t});se(n,t=>{x=t,e.useInput===!0&&e.fillInput===!0&&e.multiple!==!0&&a.innerLoading.value!==!0&&(F.value!==!0&&i.value!==!0||A.value!==!0)&&(L!==!0&&Ve(),(F.value===!0||i.value===!0)&&be(""))},{immediate:!0}),se(()=>e.fillInput,Ve),se(i,_e),se(K,Bt);function We(t){return e.emitValue===!0?D.value(t):t}function Be(t){if(t>-1&&t<n.value.length)if(e.multiple===!0){const o=e.modelValue.slice();s("remove",{index:t,value:o.splice(t,1)[0]}),s("update:modelValue",o)}else s("update:modelValue",null)}function Ct(t){Be(t),a.focus()}function Ue(t,o){const u=We(t);if(e.multiple!==!0){e.fillInput===!0&&Oe(N.value(t),!0,!0),s("update:modelValue",u);return}if(n.value.length===0){s("add",{index:0,value:u}),s("update:modelValue",e.multiple===!0?[u]:u);return}if(o===!0&&He(t)===!0||e.maxValues!==void 0&&e.modelValue.length>=e.maxValues)return;const v=e.modelValue.slice();s("add",{index:v.length,value:u}),v.push(u),s("update:modelValue",v)}function fe(t,o){if(a.editable.value!==!0||t===void 0||he.value(t)===!0)return;const u=D.value(t);if(e.multiple!==!0){o!==!0&&(Oe(e.fillInput===!0?N.value(t):"",!0,!0),ve()),M.value!==null&&M.value.focus(),(n.value.length===0||pe(D.value(n.value[0]),u)!==!0)&&s("update:modelValue",e.emitValue===!0?u:t);return}if((w!==!0||z.value===!0)&&a.focus(),Xe(),n.value.length===0){const k=e.emitValue===!0?u:t;s("add",{index:0,value:k}),s("update:modelValue",e.multiple===!0?[k]:k);return}const v=e.modelValue.slice(),O=ze.value.findIndex(k=>pe(k,u));if(O>-1)s("remove",{index:O,value:v.splice(O,1)[0]});else{if(e.maxValues!==void 0&&v.length>=e.maxValues)return;const k=e.emitValue===!0?u:t;s("add",{index:v.length,value:k}),v.push(k)}s("update:modelValue",v)}function ye(t){if(p.platform.is.desktop!==!0)return;const o=t>-1&&t<K.value?t:-1;y.value!==o&&(y.value=o)}function Ie(t=1,o){if(i.value===!0){let u=y.value;do u=ft(u+t,-1,K.value-1);while(u!==-1&&u!==y.value&&he.value(e.options[u])===!0);y.value!==u&&(ye(u),ae(u),o!==!0&&e.useInput===!0&&e.fillInput===!0&&Te(u>=0?N.value(e.options[u]):Q))}}function Vt(t,o){const u=v=>pe(D.value(v),t);return e.options.find(u)||o.find(u)||t}function Pe(t,o){const u=t!==void 0?t:o;return typeof u=="function"?u:v=>v!==null&&typeof v=="object"&&u in v?v[u]:v}function He(t){const o=D.value(t);return ze.value.find(u=>pe(u,o))!==void 0}function Xe(t){e.useInput===!0&&M.value!==null&&(t===void 0||M.value===t.target&&t.target.value===P.value)&&M.value.select()}function Ye(t){vl(t,27)===!0&&i.value===!0&&(ke(t),ve(),Ve()),s("keyup",t)}function Ze(t){const{value:o}=t.target;if(t.keyCode!==void 0){Ye(t);return}if(t.target.value="",g!==null&&(clearTimeout(g),g=null),Ve(),typeof o=="string"&&o.length>0){const u=o.toLocaleLowerCase(),v=k=>{const I=e.options.find(R=>k.value(R).toLocaleLowerCase()===u);return I===void 0?!1:(n.value.indexOf(I)===-1?fe(I):ve(),!0)},O=k=>{v(D)!==!0&&(v(N)===!0||k===!0||be(o,!0,()=>O(!0)))};O()}else a.clearValue(t)}function Ge(t){s("keypress",t)}function Je(t){if(s("keydown",t),ml(t)===!0)return;const o=b.value.length>0&&(e.newValueMode!==void 0||e.onNewValue!==void 0),u=t.shiftKey!==!0&&e.multiple!==!0&&(y.value>-1||o===!0);if(t.keyCode===27){Le(t);return}if(t.keyCode===9&&u===!1){we();return}if(t.target===void 0||t.target.id!==a.targetUid.value)return;if(t.keyCode===40&&a.innerLoading.value!==!0&&i.value===!1){me(t),Ce();return}if(t.keyCode===8&&e.hideSelected!==!0&&b.value.length===0){e.multiple===!0&&Array.isArray(e.modelValue)===!0?Be(e.modelValue.length-1):e.multiple!==!0&&e.modelValue!==null&&s("update:modelValue",null);return}(t.keyCode===35||t.keyCode===36)&&(typeof b.value!="string"||b.value.length===0)&&(me(t),y.value=-1,Ie(t.keyCode===36?1:-1,e.multiple)),(t.keyCode===33||t.keyCode===34)&&oe.value!==void 0&&(me(t),y.value=Math.max(-1,Math.min(K.value,y.value+(t.keyCode===33?-1:1)*oe.value.view)),Ie(t.keyCode===33?1:-1,e.multiple)),(t.keyCode===38||t.keyCode===40)&&(me(t),Ie(t.keyCode===38?-1:1,e.multiple));const v=K.value;if((_===void 0||W<Date.now())&&(_=""),v>0&&e.useInput!==!0&&t.key!==void 0&&t.key.length===1&&t.altKey===!1&&t.ctrlKey===!1&&t.metaKey===!1&&(t.keyCode!==32||_.length>0)){i.value!==!0&&Ce(t);const O=t.key.toLocaleLowerCase(),k=_.length===1&&_[0]===O;W=Date.now()+1500,k===!1&&(me(t),_+=O);const I=new RegExp("^"+_.split("").map(Re=>Tl.indexOf(Re)>-1?"\\"+Re:Re).join(".*"),"i");let R=y.value;if(k===!0||R<0||I.test(N.value(e.options[R]))!==!0)do R=ft(R+1,-1,v-1);while(R!==y.value&&(he.value(e.options[R])===!0||I.test(N.value(e.options[R]))!==!0));y.value!==R&&re(()=>{ye(R),ae(R),R>=0&&e.useInput===!0&&e.fillInput===!0&&Te(N.value(e.options[R]))});return}if(!(t.keyCode!==13&&(t.keyCode!==32||e.useInput===!0||_!=="")&&(t.keyCode!==9||u===!1))){if(t.keyCode!==9&&me(t),y.value>-1&&y.value<v){fe(e.options[y.value]);return}if(o===!0){const O=(k,I)=>{if(I){if(mt(I)!==!0)return}else I=e.newValueMode;if(k==null)return;Oe("",e.multiple!==!0,!0),(I==="toggle"?fe:Ue)(k,I==="add-unique"),e.multiple!==!0&&(M.value!==null&&M.value.focus(),ve())};if(e.onNewValue!==void 0?s("newValue",b.value,O):O(b.value),e.multiple!==!0)return}i.value===!0?we():a.innerLoading.value!==!0&&Ce()}}function et(){return w===!0?le.value:U.value!==null&&U.value.contentEl!==null?U.value.contentEl:void 0}function kt(){return et()}function xt(){return e.hideSelected===!0?[]:d["selected-item"]!==void 0?de.value.map(t=>d["selected-item"](t)).slice():d.selected!==void 0?[].concat(d.selected()):e.useChips===!0?de.value.map((t,o)=>V(hl,{key:"option-"+o,removable:a.editable.value===!0&&he.value(t.opt)!==!0,dense:!0,textColor:e.color,tabindex:ce.value,onRemove(){t.removeAtIndex(o)}},()=>V("span",{class:"ellipsis",[t.html===!0?"innerHTML":"textContent"]:N.value(t.opt)}))):[V("span",{[ie.value===!0?"innerHTML":"textContent"]:l.value})]}function tt(){if(f.value===!0)return d["no-option"]!==void 0?d["no-option"]({inputValue:b.value}):void 0;const t=d.option!==void 0?d.option:u=>V(bl,{key:u.index,...u.itemProps},()=>V(yl,()=>V(wl,()=>V("span",{[u.html===!0?"innerHTML":"textContent"]:u.label}))));let o=Z("div",ge.value.map(t));return d["before-options"]!==void 0&&(o=d["before-options"]().concat(o)),gl(d["after-options"],o)}function At(t,o){const u=o===!0?{...J.value,...a.splitAttrs.attributes.value}:void 0,v={ref:o===!0?M:void 0,key:"i_t",class:T.value,style:e.inputStyle,value:b.value!==void 0?b.value:"",type:"search",...u,id:o===!0?a.targetUid.value:void 0,maxlength:e.maxlength,autocomplete:e.autocomplete,"data-autofocus":t===!0||e.autofocus===!0||void 0,disabled:e.disable===!0,readonly:e.readonly===!0,...wt.value};return t!==!0&&w===!0&&(Array.isArray(v.class)===!0?v.class=[...v.class,"no-pointer-events"]:v.class+=" no-pointer-events"),V("input",v)}function lt(t){g!==null&&(clearTimeout(g),g=null),!(t&&t.target&&t.target.qComposing===!0)&&(Te(t.target.value||""),L=!0,Q=b.value,a.focused.value!==!0&&(w!==!0||z.value===!0)&&a.focus(),e.onFilter!==void 0&&(g=setTimeout(()=>{g=null,be(b.value)},e.inputDebounce)))}function Te(t){b.value!==t&&(b.value=t,s("inputValue",t))}function Oe(t,o,u){L=u!==!0,e.useInput===!0&&(Te(t),(o===!0||u!==!0)&&(Q=t),o!==!0&&be(t))}function be(t,o,u){if(e.onFilter===void 0||o!==!0&&a.focused.value!==!0)return;a.innerLoading.value===!0?s("filterAbort"):(a.innerLoading.value=!0,r.value=!0),t!==""&&e.multiple!==!0&&n.value.length>0&&L!==!0&&t===N.value(n.value[0])&&(t="");const v=setTimeout(()=>{i.value===!0&&(i.value=!1)},10);B!==null&&clearTimeout(B),B=v,s("filter",t,(O,k)=>{(o===!0||a.focused.value===!0)&&B===v&&(clearTimeout(B),typeof O=="function"&&O(),r.value=!1,re(()=>{a.innerLoading.value=!1,a.editable.value===!0&&(o===!0?i.value===!0&&ve():i.value===!0?_e(!0):i.value=!0),typeof k=="function"&&re(()=>{k(C)}),typeof u=="function"&&re(()=>{u(C)})}))},()=>{a.focused.value===!0&&B===v&&(clearTimeout(B),a.innerLoading.value=!1,r.value=!1),i.value===!0&&(i.value=!1)})}function Ot(){return V(Il,{ref:U,class:h.value,style:e.popupContentStyle,modelValue:i.value,fit:e.menuShrink!==!0,cover:e.optionsCover===!0&&f.value!==!0&&e.useInput!==!0,anchor:e.menuAnchor,self:e.menuSelf,offset:e.menuOffset,dark:m.value,noParentEvent:!0,noRefocus:!0,noFocus:!0,square:Ae.value,transitionShow:e.transitionShow,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,separateClosePopup:!0,...qe.value,onScrollPassive:Se,onBeforeShow:nt,onBeforeHide:pt,onShow:Ft},tt)}function pt(t){ot(t),we()}function Ft(){G()}function qt(t){ke(t),M.value!==null&&M.value.focus(),z.value=!0,window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,0)}function Mt(t){ke(t),re(()=>{z.value=!1})}function zt(){const t=[V(zl,{class:`col-auto ${a.fieldClass.value}`,...c.value,for:a.targetUid.value,dark:m.value,square:!0,loading:r.value,itemAligned:!1,filled:!0,stackLabel:b.value.length>0,...a.splitAttrs.listeners.value,onFocus:qt,onBlur:Mt},{...d,rawControl:()=>a.getControl(!0),before:void 0,after:void 0})];return i.value===!0&&t.push(V("div",{ref:le,class:h.value+" scroll",style:e.popupContentStyle,...qe.value,onClick:Le,onScrollPassive:Se},tt())),V(Sl,{ref:$,modelValue:F.value,position:e.useInput===!0?"top":void 0,transitionShow:j,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,onBeforeShow:nt,onBeforeHide:It,onHide:Tt,onShow:Et},()=>V("div",{class:"q-select__dialog"+(m.value===!0?" q-select__dialog--dark q-dark":"")+(z.value===!0?" q-select__dialog--focused":"")},t))}function It(t){ot(t),$.value!==null&&$.value.__updateRefocusTarget(a.rootRef.value.querySelector(".q-field__native > [tabindex]:last-child")),a.focused.value=!1}function Tt(t){ve(),a.focused.value===!1&&s("blur",t),Ve()}function Et(){const t=document.activeElement;(t===null||t.id!==a.targetUid.value)&&M.value!==null&&M.value!==t&&M.value.focus(),G()}function we(){F.value!==!0&&(y.value=-1,i.value===!0&&(i.value=!1),a.focused.value===!1&&(B!==null&&(clearTimeout(B),B=null),a.innerLoading.value===!0&&(s("filterAbort"),a.innerLoading.value=!1,r.value=!1)))}function Ce(t){a.editable.value===!0&&(w===!0?(a.onControlFocusin(t),F.value=!0,re(()=>{a.focus()})):a.focus(),e.onFilter!==void 0?be(b.value):(f.value!==!0||d["no-option"]!==void 0)&&(i.value=!0))}function ve(){F.value=!1,we()}function Ve(){e.useInput===!0&&Oe(e.multiple!==!0&&e.fillInput===!0&&n.value.length>0&&N.value(n.value[0])||"",!0,!0)}function _e(t){let o=-1;if(t===!0){if(n.value.length>0){const u=D.value(n.value[0]);o=e.options.findIndex(v=>pe(D.value(v),u))}te(o)}ye(o)}function Bt(t,o){i.value===!0&&a.innerLoading.value===!1&&(te(-1,!0),re(()=>{i.value===!0&&a.innerLoading.value===!1&&(t>o?te():_e(!0))}))}function ut(){F.value===!1&&U.value!==null&&U.value.updatePosition()}function nt(t){t!==void 0&&ke(t),s("popupShow",t),a.hasPopupOpen=!0,a.onControlFocusin(t)}function ot(t){t!==void 0&&ke(t),s("popupHide",t),a.hasPopupOpen=!1,a.onControlFocusout(t)}function at(){w=p.platform.is.mobile!==!0&&e.behavior!=="dialog"?!1:e.behavior!=="menu"&&(e.useInput===!0?d["no-option"]!==void 0||e.onFilter!==void 0||f.value===!1:!0),j=p.platform.is.ios===!0&&w===!0&&e.useInput===!0?"fade":e.transitionShow}return sl(at),cl(ut),at(),Ne(()=>{g!==null&&clearTimeout(g)}),Object.assign(C,{showPopup:Ce,hidePopup:ve,removeAtIndex:Be,add:Ue,toggleOption:fe,getOptionIndex:()=>y.value,setOptionIndex:ye,moveOptionSelection:Ie,filter:be,updateMenuPosition:ut,updateInputValue:Oe,isOptionSelected:He,getEmittingOptionValue:We,isOptionDisabled:(...t)=>he.value.apply(null,t)===!0,getOptionValue:(...t)=>D.value.apply(null,t),getOptionLabel:(...t)=>N.value.apply(null,t)}),Object.assign(a,{innerValue:n,fieldClass:S(()=>`q-select q-field--auto-height q-select--with${e.useInput!==!0?"out":""}-input q-select--with${e.useChips!==!0?"out":""}-chips q-select--${e.multiple===!0?"multiple":"single"}`),inputRef:q,targetRef:M,hasValue:A,showPopup:Ce,floatingLabel:S(()=>e.hideSelected!==!0&&A.value===!0||typeof b.value=="number"||b.value.length>0||rt(e.displayValue)),getControlChild:()=>{if(a.editable.value!==!1&&(F.value===!0||f.value!==!0||d["no-option"]!==void 0))return w===!0?zt():Ot();a.hasPopupOpen===!0&&(a.hasPopupOpen=!1)},controlEvents:{onFocusin(t){a.onControlFocusin(t)},onFocusout(t){a.onControlFocusout(t,()=>{Ve(),we()})},onClick(t){if(Le(t),w!==!0&&i.value===!0){we(),M.value!==null&&M.value.focus();return}Ce(t)}},getControl:t=>{const o=xt(),u=t===!0||F.value!==!0||w!==!0;if(e.useInput===!0)o.push(At(t,u));else if(a.editable.value===!0){const O=u===!0?J.value:void 0;o.push(V("input",{ref:u===!0?M:void 0,key:"d_t",class:"q-select__focus-target",id:u===!0?a.targetUid.value:void 0,value:l.value,readonly:!0,"data-autofocus":t===!0||e.autofocus===!0||void 0,...O,onKeydown:Je,onKeyup:Ye,onKeypress:Ge})),u===!0&&typeof e.autocomplete=="string"&&e.autocomplete.length>0&&o.push(V("input",{class:"q-select__autocomplete-input",autocomplete:e.autocomplete,tabindex:-1,onKeyup:Ze}))}if(ue.value!==void 0&&e.disable!==!0&&ze.value.length>0){const O=ze.value.map(k=>V("option",{value:k,selected:!0}));o.push(V("select",{class:"hidden",name:ue.value,multiple:e.multiple},O))}const v=e.useInput===!0||u!==!0?void 0:a.splitAttrs.attributes.value;return V("div",{class:"q-field__native row items-center",...v,...a.splitAttrs.listeners.value},o)},getInnerAppend:()=>e.loading!==!0&&r.value!==!0&&e.hideDropdownIcon!==!0?[V(dl,{class:"q-select__dropdown-icon"+(i.value===!0?" rotate-180":""),name:Me.value})]:null}),gt(a)}});export{Nl as Q,Ml as a,Il as b,Kl as c,ql as u};
