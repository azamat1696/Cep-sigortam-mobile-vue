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
                            <div class="text-subtitle2 text-weight-bold">{{ $t('accident_after') }}</div>
                            <div class="text-caption text-weight-medium q-pt-sm">
                                1. {{ $t('accident_after_text1') }}
                            </div>
                            <div class="text-caption text-weight-medium  q-pt-sm">
                                2. {{ $t('accident_after_text2') }}
                            </div>
                            <div class="text-caption text-weight-medium  q-pt-sm">
                                3. {{ $t('accident_after_text3') }}
                            </div>
                            <div class="text-caption text-weight-medium q-pt-sm">
                                4. {{ $t('accident_after_text4') }}
                            </div>
                            <div class="text-caption text-weight-medium q-pt-sm">
                                5. {{ $t('accident_after_text5') }}
                            </div>
                        </q-item-section>
                    </q-item>
                    <a href="tel:112" style="text-decoration: none">
                        <q-item clickable v-ripple>
                            <q-item-section avatar top>
                                <q-img src="/app-icons/emergency-car.png" height="32px" width="32px" />
                            </q-item-section>

                            <q-item-section class="text-white">
                                <div class="text-subtitle2 text-weight-bold">{{$t('call_ambulance')}}</div>
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
                                <div class="text-subtitle2 text-weight-bold">{{$t('call_police')}}</div>
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
                            <a href="https://wa.me/+905488292277" style="text-decoration: none" class="text-white">
                                <div class="text-subtitle2 text-weight-bold text-white">{{$t('whatsapp_up')}}</div>
                                <div class="text-subtitle2 text-weight-medium q-pt-sm">
                                    +905488292277
                                </div>
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
