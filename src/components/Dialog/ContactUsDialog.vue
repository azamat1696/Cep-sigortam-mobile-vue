<template>
    <q-dialog ref="dialog" @hide="onDialogHide" :persistent="true"   maximized  >
        <q-card class="q-dialog-plugin bg-transparent" style="background-color: #000000">
         <q-card-section class="q-mt-xl">
           <div class="flex text-white justify-between justify-center">
               <div class="text-subtitle1 text-weight-bold text-center flex " style="align-items: center">Bize Ulaşın</div>
               <div>
                   <q-btn v-close-popup unelevated text-color="white"  size="lg" no-caps>
                     <span class="text-h6 text-weight-bold text-center flex " style="align-items: center">x</span>
                   </q-btn>
               </div>
           </div>
         </q-card-section>
         <q-card-section class="q-mb-xl" style="top: 25%">
             <div class="text-white flex no-wrap">
                 <div class="box_border1">
                    <div class="q-pa-sm"> <q-icon name="phone_in_talk" size="lg"/></div>
                    <div class="text-subtitle2 text-weight-bold"> Bizi Arayın</div>
                    <div class="text-subtitle2 text-weight-medium"> +90 (392) 444 0 637</div>
                 </div>
                 <div class="box_border2">
                     <div class="q-pa-sm"><q-icon name="sms" size="lg" /></div>
                     <div class="text-subtitle2 text-weight-bold">Bize Yazin</div>
                     <div class="text-subtitle2 text-weight-medium"> info@neareastsigorta.com</div>
                 </div>
             </div>
         </q-card-section>
        </q-card>
    </q-dialog>

</template>

<script>
export default {
    name: "ContactUsDialog",
    setup(){
        return {

        }
    },

    emits: [
        // REQUIRED
        'ok', 'hide'
    ],
  methods: {
      hide () {
          this.$refs.dialog.hide()

      },

      onDialogHide () {
          // required to be emitted
          // when QDialog emits "hide" event
          this.$emit('hide')
      },

      onOKClick () {
          // on OK, it is REQUIRED to
          // emit "ok" event (with optional payload)
          // before hiding the QDialog

          this.$emit('ok')
          // or with payload: this.$emit('ok', { ... })


          // then hiding dialog

      },

      onCancelClick () {
          // we just need to hide the dialog
          this.hide()
      },
    show() {
      this.$refs.dialog.show()
    },
  }
}
</script>

<style scoped>
.bg-transparent {
    background: #000000c4 !important;
}
.box_border1 {
    border: 1px solid #ffffff;
    padding: 10px;
    border-radius: 10px 0 0 10px;
    width: 190px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.box_border2 {
    border: 1px solid #ffffff;
    padding: 10px;
    border-radius: 0 10px 10px 0;
    width: 190px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}


</style>
