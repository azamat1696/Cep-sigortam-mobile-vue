import{r as v,bb as b,w as f,aH as F,o as y,M as h,g as x,bc as p}from"./index.30f5c437.js";let r=0;const g={fullscreen:Boolean,noRouteFullscreenExit:Boolean},E=["update:fullscreen","fullscreen"];function w(){const d=x(),{props:o,emit:m,proxy:e}=d;let n,u,c;const l=v(!1);b(d)===!0&&f(()=>e.$route.fullPath,()=>{o.noRouteFullscreenExit!==!0&&t()}),f(()=>o.fullscreen,s=>{l.value!==s&&a()}),f(l,s=>{m("update:fullscreen",s),m("fullscreen",s)});function a(){l.value===!0?t():i()}function i(){l.value!==!0&&(l.value=!0,c=e.$el.parentNode,c.replaceChild(u,e.$el),document.body.appendChild(e.$el),r++,r===1&&document.body.classList.add("q-body--fullscreen-mixin"),n={handler:t},p.add(n))}function t(){l.value===!0&&(n!==void 0&&(p.remove(n),n=void 0),c.replaceChild(e.$el,u),l.value=!1,r=Math.max(0,r-1),r===0&&(document.body.classList.remove("q-body--fullscreen-mixin"),e.$el.scrollIntoView!==void 0&&setTimeout(()=>{e.$el.scrollIntoView()})))}return F(()=>{u=document.createElement("span")}),y(()=>{o.fullscreen===!0&&i()}),h(t),Object.assign(e,{toggleFullscreen:a,setFullscreen:i,exitFullscreen:t}),{inFullscreen:l,toggleFullscreen:a}}export{E as a,w as b,g as u};
