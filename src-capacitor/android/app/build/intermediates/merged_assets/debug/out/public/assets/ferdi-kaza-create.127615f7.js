import{aB as i,bv as e,aC as s,aD as r}from"./index.30f5c437.js";const c=i("ferdiKazaCreate",{state:()=>({ferdiKaza:{},createdFerdiKaza:{}}),getters:{},actions:{async hesaplaFerdiKaza(t){return e.show(),await s.post("/hesapla260Cep",t).then(a=>{if(a.data.status==="success")return this.ferdiKaza=a.data,!0}).catch(a=>(r(a),!1)).finally(()=>{e.hide()})},async createFerdiKaza(t){e.show(),await s.post("/Kayet260Cep",t).then(a=>{a.data.status==="success"&&(this.createdFerdiKaza=a.data,this.router.push({name:"FerdiKazaSuccess"}))}).catch(a=>{r(a)}).finally(()=>{e.hide()})}}});export{c as u};