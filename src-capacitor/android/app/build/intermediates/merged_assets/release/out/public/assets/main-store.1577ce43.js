import{aB as i,aC as t}from"./index.514420a3.js";const l=i("main",{state:()=>({countries:[],aracMarka:[],aracTipi:[],aracTarz:[],il:[],ilce:[],mahalleSelect:[],agent:[],aracModelSelect:[],renk:[],belediyeSelect:[],sokakSelect:[],jobs:[]}),getters:{countriesGetter:e=>e.countries,aracModelByMarkaIdGetter:e=>a=>e.aracModelSelect.filter(c=>+c.Marka_Kod==a)},actions:{async countriesGet(){await t.get("/ulke").then(e=>e.data).then(e=>this.countries=e),console.log(this.countries)},async ilceSelectGet(){await t.get("/ilceSelect").then(e=>e.data).then(e=>this.ilce=e)},async mahalleSelectGet(){await t.get("/mahalleSelect").then(e=>e.data).then(e=>this.mahalleSelect=e)},async belediyeSelectGet(){await t.get("/belediyeSelect").then(e=>e.data).then(e=>this.belediyeSelect=e)},async sokakSelectGet(){await t.get("/sokakSelect").then(e=>e.data).then(e=>this.sokakSelect=e)},async aracMarkaGet(){await t.get("/aracMarka").then(e=>e.data).then(e=>this.aracMarka=e)},async aracModelSelectGet(){await t.get("/aracModelSelect").then(e=>e.data).then(e=>{this.aracModelSelect=e})},async ilGet(){await t.get("/il").then(e=>e.data).then(e=>this.il=e)},async agentGet(){await t.get("/acent").then(e=>e.data).then(e=>this.agent=e)},async renkGet(){await t.get("/renk").then(e=>e.data).then(e=>this.renk=e)},async aracTipiGet(){await t.get("/aractipi").then(e=>e.data).then(e=>this.aracTipi=e)},async getJobs(){await t.get("/meslekler").then(e=>e.data).then(e=>this.jobs=e)}}});export{l as u};