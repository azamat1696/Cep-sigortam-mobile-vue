<!--suppress ALL -->
<template>
    <transition-group
        appear
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeIn"
    >
        <q-layout key="ferdiKazaOlustur" view="lHh Lpr lFf">
            <q-header   elevated>
                <q-toolbar>
                    <q-avatar size="sm">
                        <q-icon
                            name="chevron_left"
                            @click="$router.push({ name: 'homeLogin' })"
                            size="md"
                            class="cursor-pointer"
                        />
                    </q-avatar>
                    <q-toolbar-title class="text-subtitle2 text-bold text-center"
                    >Ferdi Kaza</q-toolbar-title
                    >
                </q-toolbar>
            </q-header>
            <q-page-container>
                <q-stepper
                    v-model="step"
                    header-nav
                    ref="stepper"
                    color="primary"
                    active-icon="none"
                    done-icon="none"
                    animated
                    class="no-shadow"
                    header-class="no-border"
                >
                    <q-step
                        :name="1"
                        :prefix="1"
                        title=""
                        :done="step > 1"
                        :header-nav="step > 1"
                        class="q-pt-none"
                    >
                        <q-form @submit="onNextStep" class="q-gutter-md">
                            <q-input
                                dense
                                outlined
                                v-model="formFields.KullaniciAdi"
                                label="Adi "
                                hide-bottom-space
                                lazy-rules
                                :rules="[
                                    (val) =>
                                        (val && val.length > 0) ||
                                        'Lutfen adinizi giriniz',
                                ]"
                            />
                            <q-input
                                dense
                                outlined
                                v-model="formFields.KullaniciSoyAdi"
                                label="SoyAdi"
                                hide-bottom-space
                                lazy-rules
                                :rules="[
                                    (val) =>
                                        (val && val.length > 0) ||
                                        'Lutfen soyadinizi giriniz',
                                ]"
                            />
                            <q-input
                                dense
                                outlined
                                v-model="formFields.MusteriTcKimlikNo"
                                label="Kimlik No"
                                hide-bottom-space
                                lazy-rules
                                :rules="[
                                    (val) =>
                                        (val && val.length > 0) ||
                                        'Lutfen Kimlik No giriniz',
                                ]"
                            />

                            <q-input
                                v-model="formFields.MusteriDogumTarihi"
                                outlined
                                dense
                                hide-bottom-space
                                label="Doğum Tarihi"
                            >
                                <template v-slot:append>
                                    <q-icon name="event" class="cursor-pointer">
                                        <q-popup-proxy
                                            cover
                                            transition-show="scale"
                                            transition-hide="scale"
                                        >
                                            <q-date
                                                v-model="
                                                    formFields.MusteriDogumTarihi
                                                "
                                                mask="DD / MM /YYYY"
                                            >
                                                <div
                                                    class="row items-center justify-end"
                                                >
                                                    <q-btn
                                                        v-close-popup
                                                        label="Kapat"
                                                        color="primary"
                                                        flat
                                                    />
                                                </div>
                                            </q-date>
                                        </q-popup-proxy>
                                    </q-icon>
                                </template>
                            </q-input>

                            <q-input
                                dense
                                outlined
                                v-model="formFields.MusteriDogumYeri"
                                label="Doğum Yeri"
                                hide-bottom-space
                                lazy-rules
                                :rules="[
                                    (val) =>
                                        (val && val.length > 0) ||
                                        'Lutfen doğum yeri giriniz',
                                ]"
                            />
                            <q-select
                                outlined
                                v-model="formFields.MusteriCinsiyet"
                                :options="genderOptions"
                                :option-label="(option) => option.label"
                                option-value="value"
                                label="Cinsiyet"
                                dense
                                emit-value
                                map-options
                                hide-bottom-space
                                behavior="menu"
                                lazy-rules
                                :rules="[val => val !== null && val !== ''
                                || 'Lütfen cinsiyet seçiniz!',]"
                            />

                            <q-select
                                outlined
                                v-model="formFields.MusteriUyruk"
                                :options="countriesOptions"
                                :option-label="(item) => item.Aciklama"
                                option-value="id"
                                emit-value
                                map-options
                                use-input
                                input-debounce="0"
                                options-dense
                                label="Ulke"
                                dense
                                hide-bottom-space
                                clearable
                                @filter="filterCountries"
                                behavior="menu"
                                lazy-rules
                                :rules="[val => val !== null && val !== ''
                                || 'Lütfen ülke seçiniz!',]"
                            >
                                <template v-slot:no-option>
                                    <q-item>
                                        <q-item-section class="text-grey">
                                            No results
                                        </q-item-section>
                                    </q-item>
                                </template>
                            </q-select>
                            <q-input
                                dense
                                outlined
                                v-model="formFields.MusteriCepTelefonNo"
                                type="text"
                                label="Telefon Numarası"
                                hide-bottom-space
                                lazy-rules
                                :rules="[
                                    (val) =>
                                        (val && val.length > 0) ||
                                        'Lutfen Şasi No giriniz',
                                ]"
                            />
                            <q-input
                                dense
                                outlined
                                v-model="formFields.MusteriEPosta"
                                type="text"
                                label="E-Posta Adresi"
                                hide-bottom-space
                                lazy-rules
                                :rules="[
                                    (val) =>
                                        (val && val.length > 7) ||
                                        'Lutfen E-Posta Adresi giriniz',
                                ]"
                            />
                            <q-select
                                outlined
                                v-model="formFields.MusteriIlceKodu"
                                :options="ilOptions"
                                :option-label="(option) => option.Aciklama"
                                option-value="id"
                                emit-value
                                map-options
                                label="İl seç"
                                dense
                                hide-bottom-space
                                behavior="menu"
                                clearable
                                use-input
                                @filter="filterIl"
                                @update:model-value="getIlOnSelect"
                                lazy-rules
                                :rules="[val => val !== null && val !== ''
                                || 'Lütfen il seçiniz!',]"
                            />
                            <q-select
                                outlined
                                v-model="formFields.MusteriBucakKodu"
                                :options="ilceSelectGetOptions"
                                :option-label="(option) => option.ilce_Adi"
                                option-value="id"
                                emit-value
                                map-options
                                label="İlçe seç"
                                dense
                                clearable
                                hide-bottom-space
                                behavior="menu"
                                use-input
                                @filter="filterIlce"
                                @update:model-value="getIlceOnSelect"
                                lazy-rules
                                :rules="[val => val !== null && val !== ''
                                || 'Lütfen ilçe seçiniz!',]"
                            />
                            <q-stepper-navigation>
                                <q-btn
                                    type="submit"
                                    color="primary"
                                    label="İlerle"
                                    no-caps
                                    class="full-width"
                                />
                            </q-stepper-navigation>

                        </q-form>

                    </q-step>

                    <q-step
                        :name="2"
                        prefix="3"
                        title=""
                        :header-nav="step > 2"
                        style="min-height: 200px"
                    >
                        <q-form @submit="onSubmitFerdiKaza" class="q-gutter-md">

                            <q-select
                                outlined
                                v-model="formFields.MusteriBelediyeKodu"
                                :options="belediyeSelectGetOptions"
                                :option-label="(option) => option.Belediye_Adi"
                                option-value="id"
                                emit-value
                                map-options
                                label="Belediye seç"
                                dense
                                clearable
                                hide-bottom-space
                                behavior="menu"
                                use-input
                                @filter="filterBelediye"
                                @update:model-value="getBelediyeOnSelect"
                                lazy-rules
                                :rules="[val => val !== null && val !== ''
                                || 'Lütfen belediye seçiniz!',]"

                            />
                            <q-select
                                outlined
                                v-model="formFields.MusteriMahalleKodu"
                                :options="mahalleSelectOptions"
                                :option-label="(option) => option.Mahalle_Adi"
                                option-value="id"
                                emit-value
                                map-options
                                label="Mahalle seç"
                                dense
                                clearable
                                hide-bottom-space
                                use-input
                                @filter="filterMahalle"
                                @update:model-value="getMahalleOnSelect"
                                behavior="menu"
                                lazy-rules
                                :rules="[val => val !== null && val !== ''
                                || 'Lütfen mahalle seçiniz!',]"
                            />
                            <q-select
                                outlined
                                v-model="formFields.MusteriCSBMKodu"
                                :options="sokakSelectOptions"
                                :option-label="(option) => option.Sokak_Adi"
                                option-value="id"
                                emit-value
                                map-options
                                label="Sokak"
                                dense
                                clearable
                                use-input
                                @filter="filterSokak"
                                hide-bottom-space
                                behavior="menu"
                                lazy-rules
                                :rules="[val => val !== null && val !== ''
                                || 'Lütfen sokak seçiniz!',]"
                            />
                            <div class="row">
                                <div class="col-6">
                                    <q-select
                                        outlined
                                        v-model="formFields.MusteriCSBMKodu"
                                        :options="sokakSelectOptions"
                                        :option-label="(option) => option.Sokak_Adi"
                                        option-value="id"
                                        emit-value
                                        map-options
                                        label="Sokak"
                                        dense
                                        clearable
                                        use-input
                                        @filter="filterSokak"
                                        hide-bottom-space
                                        behavior="menu"
                                        lazy-rules
                                        :rules="[val => val !== null && val !== ''
                                || 'Lütfen sokak seçiniz!',]"
                                    />
                                </div>
                                <div class="col-6">
                                    <q-select
                                        outlined
                                        v-model="formFields.MusteriCSBMKodu"
                                        :options="sokakSelectOptions"
                                        :option-label="(option) => option.Sokak_Adi"
                                        option-value="id"
                                        emit-value
                                        map-options
                                        label="Sokak"
                                        dense
                                        clearable
                                        use-input
                                        @filter="filterSokak"
                                        hide-bottom-space
                                        behavior="menu"
                                        lazy-rules
                                        :rules="[val => val !== null && val !== ''
                                || 'Lütfen sokak seçiniz!',]"
                                    />
                                </div>

                            </div>
                            <q-input
                                dense
                                outlined
                                v-model="formFields.TeminatLimiti"
                                type="number"
                                label="Teminat Limiti"
                                hide-bottom-space
                                lazy-rules
                                :rules="[
                                    (val) =>
                                        (val && val.length > 0) ||
                                        'Lutfen temimat limiti giriniz',
                                ]"
                            />
                            <q-input
                                dense
                                outlined
                                v-model="formFields.Lehtar"
                                type="text"
                                label="Lehtar"
                                hide-bottom-space
                                lazy-rules
                                :rules="[
                                    (val) =>
                                        (val && val.length > 0) ||
                                        'Lutfen lehtar giriniz',
                                ]"
                            />
                            <q-select
                                outlined
                                v-model="formFields.Meslegi"
                                :options="jobOptions"
                                :option-label="(option) => option.label"
                                option-value="value"
                                emit-value
                                map-options
                                label="Mesleği"
                                dense
                                clearable
                                use-input
                                hide-bottom-space
                                behavior="menu"
                                lazy-rules
                                :rules="[val => val !== null && val !== ''
                                || 'Lütfen rakam seçiniz!',]"
                            />



                            <q-select
                                outlined
                                v-model="formFields.AcenteNo"
                                :options="agentOptions"
                                :option-label="(option) => option.Acente_Adi"
                                option-value="id"
                                emit-value
                                map-options
                                label="Acentenizi Seçiniz"
                                dense
                                clearable
                                use-input
                                @filter="filterAgent"
                                hide-bottom-space
                                behavior="menu"
                                lazy-rules
                                :rules="[val => val !== null && val !== ''
                                || 'Lütfen acente seçiniz!',]"
                            />

                            <q-stepper-navigation>
                                <q-btn
                                    type="submit"
                                    color="primary"
                                    label="Teklif Al"
                                    no-caps
                                    class="full-width"
                                />
                            </q-stepper-navigation>
                            <div class="row">
                                <div class="col-1">
                                    <q-checkbox
                                        v-model="formFields.uyar"
                                        color="primary"
                                        dense
                                    />
                                </div>
                                <div
                                    class="col-11 text-grey-8"
                                    style="font-size: 11px"
                                >
                                    <b>Uyarı:</b> Bir sigorta poliçesinin
                                    düzenlenmesi amacı ile beyan edilen
                                    bilgilerin eksiklik içermesi ve/veya yanlış
                                    olması ve/veya yanıltıcı beyan içermesi
                                    halinde, işbu sigorta poliçesi ile ilgili
                                    şirketimizin her hangi bir sorumluluğu
                                    bulunmayacak ve/veya poliçe geçersiz
                                    kılınabilecektir.
                                </div>
                                <div class="col-12">
                                    <q-separator spaced />
                                </div>
                                <div class="col-12">
                                    Önemli Not: Lehtar kısmı doldurulmaması halinde kanuni varisleri lehtar olarak değerlendirilecektir.
                                </div>
                            </div>
                        </q-form>
                    </q-step>



                </q-stepper>

            </q-page-container>
        </q-layout>
    </transition-group>

</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { storeToRefs } from "pinia";
import { useMainStore } from "../../../stores/main-store";
import { api } from "boot/axios";
import { Loading, Notify } from "quasar";
import { useRouter } from "vue-router";
import {useFerdiKazaStore} from "stores/ferdi-kaza-store";
const router = useRouter();
const store = useMainStore();
const ferdiKazaStore = useFerdiKazaStore();
const {
    countries: countries,
    il: il,
    ilce,
    belediyeSelect,
    mahalleSelect,
    sokakSelect,
    agent,
} = storeToRefs(useMainStore());
const {
    countriesGet: countriesGet,
    ilGet: ilGet,
    ilceSelectGet: ilceSelectGet,
    belediyeSelectGet: belediyeSelectGet,
    mahalleSelectGet: mahalleSelectGet,
    sokakSelectGet: sokakSelectGet,
    agentGet: agentGet,
} = useMainStore();

countriesGet();
ilGet();
ilceSelectGet();
belediyeSelectGet();
mahalleSelectGet();
sokakSelectGet();
agentGet();
const genderOptions = [
    { value: "Erkek", label: "Erkek" },
    { value: "Kadın", label: "Kadın" },
];
const currencyOptions = [
    { value: "TL", label: "TL" },
    { value: "USD", label: "USD" },
    { value: "EUR", label: "EUR" },
    {value: "GBP", label: "GBP" }
];
const tlCurrencyOptions = [
    { value: "200", label: "200.000" },
    { value: "400", label: "400.000" },
    { value: "750", label: "750.000 " },
    { value: "1000", label: "1000.000" },
    { value: "1500", label: "1500.000" },
]
const usdCurrencyOptions = [
    { value: "10", label: "10.000" },
    { value: "25", label: "25.000" },
    { value: "40", label: "40.000 " },
    { value: "70", label: "70.000" },
    { value: "100", label: "100.000" },
]

// ************* Options for the form *************** /
let countriesOptions = ref(countries.value);
let aracModelOptions = ref();
const ilOptions = ref(il.value);
let ilceSelectGetOptions = ref();
const belediyeSelectGetOptions = ref();
const mahalleSelectOptions = ref(mahalleSelect.value);
const sokakSelectOptions = ref();
const agentOptions = ref(agent.value);
const jobOptions = ref();
// ************* Fiters for the form  select *************** /
const filterCountries = (val: any, update: any) => {
    if (val === "") {
        update(() => {
            countriesOptions.value = countries.value;
        });
        return;
    }
    update(() => {
        const needle = val.toLowerCase();
        countriesOptions.value = countries.value.filter(
            // @ts-ignore
            (v) => v.Aciklama.toLowerCase().indexOf(needle) > -1
        );
    });
};

const filterIl = (val: any, update: any) => {

    update(() => {
        const needle = val.toLowerCase();
        ilOptions.value = il.value.filter(
            // @ts-ignore
            (v) => v.Aciklama.toLowerCase().indexOf(needle) > -1
        );
    });
};
const filterIlce = (val: string, update: any) => {
    // if (val === "") {
    //     update(() => {
    //         ilceSelectGetOptions.value = ilce.value;
    //     });
    //     return;
    // }
    update(() => {
        const needle = val.toLowerCase();
        ilceSelectGetOptions.value = ilce.value.filter(
            // @ts-ignore

            (v) => v.ilce_Adi.toLowerCase().indexOf(needle) > -1
        );
    });
};
const filterBelediye = (val: string, update: any) => {
    // if (val === "") {
    //     update(() => {
    //         belediyeSelectGetOptions.value = belediyeSelect.value;
    //     });
    //     return;
    // }
    update(() => {
        const needle = val.toLowerCase();
        belediyeSelectGetOptions.value = belediyeSelect.value.filter(
            // @ts-ignore

            (v) => v.Belediye_Adi.toLowerCase().indexOf(needle) > -1
        );
    });
};
const filterMahalle = (val: string, update: any) => {
    // if (val === "") {
    //     update(() => {
    //         mahalleSelectOptions.value = mahalleSelect.value;
    //     });
    //     return;
    // }
    update(() => {
        const needle = val.toLowerCase();
        mahalleSelectOptions.value = mahalleSelect.value.filter(
            // @ts-ignore
            (v) => v.Mahalle_Adi.toLowerCase().indexOf(needle) > -1
        );
    });
};
const filterSokak = (val: string, update: any) => {
    // if (val === "") {
    //     update(() => {
    //         sokakSelectOptions.value = sokakSelect.value;
    //     });
    //     return;
    // }
    update(() => {
        const needle = val.toLowerCase();
        sokakSelectOptions.value = sokakSelect.value.filter(
            // @ts-ignore
            (v) => v.Sokak_Adi.toLowerCase().indexOf(needle) > -1
        );
    });
};
const filterAgent = (val: string, update: any) => {
    if (val === "") {
        update(() => {
            agentOptions.value = agent.value;
        });
        return;
    }
    update(() => {
        const needle = val.toLowerCase();
        agentOptions.value = agent.value.filter(
            // @ts-ignore
            (v) => v.Acente_Adi.toLowerCase().indexOf(needle) > -1
        );
    });
};

// ************* Select box on update for the form *************** /

const getIlOnSelect = (data: object) => {
    ilceSelectGetOptions.value = ilce.value.filter(
        // @ts-ignore
        (item) => item.il_Kodu === data?.id
    );
};
const getIlceOnSelect = (data: object) => {
    belediyeSelectGetOptions.value = belediyeSelect.value.filter(
        // @ts-ignore

        (item) => item.ilce_Kodu === data?.id
    );
};
const getBelediyeOnSelect = (data: object) => {
    mahalleSelectOptions.value = mahalleSelect.value.filter(
        // @ts-ignore
        (item) => item.belediyenin_Kodu === data?.id
    );
};
const getMahalleOnSelect = (data: object) => {
    sokakSelectOptions.value = sokakSelect.value.filter(
        // @ts-ignore
        (item) => item.mahallenin_Kodu === data?.id
    );
};
const onNextStep = () => {
    step.value++;
};

// ************* Form Submit *************** /
const onSubmitFerdiKaza = async () => {
    let formData = new FormData();
    for (const [key, val] of Object.entries(formFields.value)) {
        // @ts-ignore
        formData.append(key, val);
    }
    // for (const pair of formData.entries()) {
    //   console.log(pair[0] + ', ' + pair[1]);
    // }

    await ferdiKazaStore.ferdiKazaFormSubmit(formData).then((res) => {
        if (res === true) {
            router.push({ name: "trafikSuccess" });
        }
    });
};
// ************* Form Field states *************** /
const step = ref(1);
const formFields = ref({
    KullaniciAdi: "Ali",
    KullaniciSoyAdi: "sahin",
    MusteriTcKimlikNo: "76876876786",
    MusteriDogumYeri: "Tkm",
    MusteriCinsiyet: "Erkek",
    MusteriUyruk: 2,
    MusteriDogumTarihi: "01 / 02 /2023",
    MusteriIlceKodu: "", // select box
    MusteriBucakKodu: "", // select box
    MusteriBelediyeKodu: "", // select box
    MusteriMahalleKodu: "", // select box
    MusteriCSBMKodu: "", // select box
    MusteriCepTelefonNo: "05488321621", // input
    MusteriEPosta: "azamat1696@gmail.com", // input
    AcenteNo: "", // input
    uyar: "", // 'accepted'
    TeminatLimiti: "", // select box
    Lehtar: "", // select box
    Meslegi: "", // select box
    TCVat: false
});

</script>

<style>
.q-field--outlined .q-field__control {
    border-radius: 8px !important;
}
.q-select__dialog {
    max-height: calc(100vh - 500px) !important;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

input[type="number"] {
    -moz-appearance: textfield;
}
.q-stepper--horizontal .q-stepper__step-inner {
    padding-top: 0px !important;
}
</style>
