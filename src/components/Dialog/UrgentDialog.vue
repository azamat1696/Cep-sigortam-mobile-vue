<template>
    <q-dialog ref="dialog" @hide="onDialogHide" :persistent="true"   maximized  >
        <q-card class="q-dialog-plugin bg-transparent" >
            <q-card-section class="q-pb-none">
                <div class="flex text-white justify-between justify-center">
                    <div class="text-subtitle1 text-weight-bold text-center flex " style="align-items: center">Acil</div>
                    <div>
                        <q-btn v-close-popup unelevated text-color="white"  size="lg" no-caps>
                            <span class="text-h6 text-weight-bold text-center flex " style="align-items: center">x</span>
                        </q-btn>
                    </div>
                </div>
            </q-card-section>
            <q-card-section>
                <q-list  >
                    <q-item clickable v-ripple>
                        <q-item-section avatar top>
                               <q-img src="/app-icons/after-crash.png" height="32px" width="32px" />
                        </q-item-section>
                        <q-item-section class="text-white">
                            <div class="text-subtitle2 text-weight-bold">Kaza Sonrası Yapılması Gerekenler</div>
                            <div class="text-caption text-weight-medium q-pt-sm">
                                1. Kaza yerine trafik polisi çağrılmalı ve
                                polis gelene kadar araç olay mahallinden kaldırılmamalıdır.
                                Polis raporu olmayan hasarlardan şirketimiz sorumlu değildir.
                            </div>
                            <div class="text-caption text-weight-medium  q-pt-sm">
                                2. Meydana gelen hasarlar en geç 24 saat
                                içinde merkez ofisimize veya şubelerimize bildirilmelidir.
                            </div>
                            <div class="text-caption text-weight-medium  q-pt-sm">
                                3. Kazanın oluşundan itibaren ilk 60 dakika içerisinde alkol testi
                                yapılmalıdır. Polis raporunda alkol testi sonucu bulunmayan
                                hasarlardan şirketimiz sorumlu değildir.
                            </div>
                            <div class="text-caption text-weight-medium q-pt-sm">
                                4. Şirketimizin talimatı olmadan hiçbir surette tamirat başlatılmamalıdır.
                                Şirket onayı alınmadan tamiratı yaptırılan hasarlardan şirketimiz sorumlu değildir.
                            </div>
                            <div class="text-caption text-weight-medium q-pt-sm">
                                5. Kaza sonrası yapılması gereken işlemlerden herhangi birinin
                                yapılmaması veya eksik yapılması durumunda meydana gelen
                                hasardan şirketimiz sorumlu değildir.
                            </div>
                        </q-item-section>
                    </q-item>
                    <a href="tel:112" style="text-decoration: none">
                        <q-item clickable v-ripple>
                            <q-item-section avatar top>
                                <q-img src="/app-icons/emergency-car.png" height="32px" width="32px" />
                            </q-item-section>

                            <q-item-section class="text-white">
                                <div class="text-subtitle2 text-weight-bold">Ambulans Ara</div>
                                <div class="text-subtitle2 text-weight-medium q-pt-sm">
                                    112
                                </div>
                            </q-item-section>
                        </q-item>
                    </a>
                    <a href="tel:155" style="text-decoration: none">
                        <q-item clickable v-ripple >
                            <q-item-section avatar top>
                                <q-img src="/app-icons/police-man.png" height="32px" width="32px" />
                            </q-item-section>

                            <q-item-section class="text-white">
                                <div class="text-subtitle2 text-weight-bold">Polisi Ara</div>
                                <div class="text-subtitle2 text-weight-medium q-pt-sm">
                                    155
                                </div>

                            </q-item-section>
                        </q-item>
                    </a>
                    <q-separator color="white"  inset/>
                    <q-item clickable v-ripple class="q-pt-md">
                        <q-item-section avatar top>
                            <q-img src="/app-icons/whatsupp.png" height="32px" width="32px" />
                        </q-item-section>

                        <q-item-section class="text-white">
                            <a href="tel:05488292277" style="text-decoration: none" class="text-white">
                                <div class="text-subtitle2 text-weight-bold text-white">WhatsApp Hattı</div>
                            </a>
                        </q-item-section>
                    </q-item>
                </q-list>
            </q-card-section>

        </q-card>
    </q-dialog>

</template>

<script>
export default {
    name: "UrgentDialog",
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
</style>
