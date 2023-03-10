<!--suppress ALL -->
<template>
    <q-layout view="lHh Lpr lFf">
        <q-header reveal elevated>
            <q-toolbar>
                <q-avatar size="sm">
                    <q-icon
                        name="chevron_left"
                        @click="$router.push({ name: 'home' })"
                        size="md"
                        class="cursor-pointer"
                    />
                </q-avatar>
                <q-toolbar-title class="text-subtitle2 text-bold text-center"
                    >Konut</q-toolbar-title
                >
            </q-toolbar>
        </q-header>
        <q-page-container>
            <div>
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
                            />
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
                        prefix="2"
                        title=""
                        :done="step > 2"
                        :header-nav="step > 2"
                        style="min-height: 200px"
                    >
                        <q-form @submit="onNextStep" class="q-gutter-md">
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
                            />

                            <q-input
                                dense
                                outlined
                                v-model="formFields.MusteriApartmanAdi"
                                type="text"
                                label="Apartman Adı"
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
                                v-model="formFields.MusteriApartmanNo"
                                type="text"
                                label="Apartman No"
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
                                v-model="formFields.SigortalanacakKonutunAdresi"
                                type="text"
                                label="Sigortalanacak Konutun Adresi"
                                hide-bottom-space
                                lazy-rules
                                :rules="[
                                    (val) =>
                                        (val && val.length > 0) ||
                                        'Lutfen Şasi No giriniz',
                                ]"
                            />

                            <q-select
                                outlined
                                v-model="formFields.SigortalSifati"
                                :options="sigortalSifatiOptions"
                                :option-label="(option) => option.label"
                                option-value="value"
                                emit-value
                                map-options
                                label="Sigortalının Sıfatı "
                                dense
                                clearable
                                hide-bottom-space
                                behavior="menu"
                            />

                            <q-input
                                dense
                                outlined
                                v-model="formFields.Rehinli"
                                type="text"
                                label="Rehinli Alacaklı Var Mı?   Varsa Bilgileri"
                                hide-bottom-space
                                lazy-rules
                                :rules="[
                                    (val) =>
                                        (val && val.length > 0) ||
                                        'Lutfen Şasi No giriniz',
                                ]"
                            />

                            <q-select
                                outlined
                                v-model="formFields.KonutKullanim"
                                :options="konutKullanimOptions"
                                :option-label="(option) => option.label"
                                option-value="value"
                                emit-value
                                map-options
                                label="Konut Kullanım Tarzı "
                                dense
                                clearable
                                hide-bottom-space
                                behavior="menu"
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
                        :name="3"
                        prefix="3"
                        title=""
                        :header-nav="step > 3"
                        style="min-height: 200px"
                    >
                        <q-form @submit="onSubmitKonut" class="q-gutter-md">
                            <q-select
                                outlined
                                v-model="formFields.BinaYapi"
                                :options="binaYapiOptions"
                                :option-label="(option) => option.label"
                                option-value="value"
                                emit-value
                                map-options
                                label="Bina Yapı Tarzı"
                                dense
                                clearable
                                hide-bottom-space
                                behavior="menu"
                            />
                            <q-select
                                outlined
                                v-model="formFields.KonutTipi"
                                :options="konutTipiOptions"
                                :option-label="(option) => option.label"
                                option-value="value"
                                emit-value
                                map-options
                                label="Konut Tipi"
                                dense
                                clearable
                                hide-bottom-space
                                behavior="menu"
                            />
                            <q-select
                                outlined
                                v-model="formFields.KatBilgisi"
                                :options="katBilgisiOptions"
                                :option-label="(option) => option.label"
                                option-value="value"
                                emit-value
                                map-options
                                label="Kat Bilgisi"
                                dense
                                clearable
                                hide-bottom-space
                                behavior="menu"
                            />
                            <q-input
                                dense
                                outlined
                                v-model="formFields.YasayanKisiSayisi"
                                type="text"
                                label="Konutta Yaşayan Kişi Sayısı"
                                hide-bottom-space
                                lazy-rules
                                :rules="[
                                    (val) =>
                                        (val && val.length > 0) ||
                                        'Lutfen Şasi No giriniz',
                                ]"
                            />

                            <q-select
                                outlined
                                v-model="formFields.HasarDurumu"
                                :options="hasarDurumuOptions"
                                :option-label="(option) => option.label"
                                option-value="value"
                                emit-value
                                map-options
                                label="Hasar Durumu"
                                dense
                                clearable
                                hide-bottom-space
                                behavior="menu"
                            />
                            <div class="row no-wrap justify-between">
                                <div class="col-3 q-my-auto">
                                    <label class="text-no-wrap text-center"
                                    >Bina İnşa Yılı</label
                                    >
                                </div>
                                <div class="col-9 row">
                                    <div class="col-5">
                                        <q-input
                                            dense
                                            outlined
                                            v-model="formFields.insaYili"
                                            hide-bottom-space
                                            lazy-rules
                                            :rules="[
                                                (val) =>
                                                    (val && val.length > 0) ||
                                                    '',
                                            ]"
                                            class="q-mr-xs q-ml-xs"
                                        />
                                    </div>
                                    <div class="col-2 q-my-auto">
                                        <div class="text-center text-subtitle2">
                                            <p>M <sup>2</sup></p>
                                        </div>
                                    </div>
                                    <div class="col-5">
                                        <q-input
                                            dense
                                            outlined
                                            v-model="formFields.M2"
                                            hide-bottom-space
                                            lazy-rules
                                            :rules="[
                                                (val) =>
                                                    (val && val.length > 0) ||
                                                    '',
                                            ]"
                                            class="q-ml-xs q-mr-xs"
                                            autogrow
                                        />
                                    </div>
                                </div>
                            </div>

                            <q-input
                                dense
                                outlined
                                v-model="formFields.BinaBedeli"
                                type="text"
                                label="Yeni Bina Bedeli"
                                hide-bottom-space
                                lazy-rules
                                :rules="[
                                    (val) =>
                                        (val && val.length > 0) ||
                                        'Lutfen bina bedeli giriniz',
                                ]"
                            />
                            <q-input
                                dense
                                outlined
                                v-model="formFields.EsyaBedeli"
                                type="text"
                                label="Yeni Eşya Bedeli"
                                hide-bottom-space
                                lazy-rules
                                :rules="[
                                    (val) =>
                                        (val && val.length > 0) ||
                                        'Lutfen  eşya bedeli giriniz',
                                ]"
                            />
                            <q-input
                                dense
                                outlined
                                v-model="formFields.CamBedeli"
                                type="text"
                                label="Cam Bedeli"
                                hide-bottom-space
                                lazy-rules
                                :rules="[
                                    (val) =>
                                        (val && val.length > 0) ||
                                        'Lutfen  cam bedeli giriniz',
                                ]"
                            />
                            <q-input
                                dense
                                outlined
                                v-model="formFields.KonuttaHasarYasandi"
                                type="text"
                                label="Son 5 Yılda Konutta Hasar Yaşandı mı?"
                                hide-bottom-space
                                lazy-rules
                                :rules="[
                                    (val) =>
                                        (val && val.length > 0) ||
                                        'Lutfen  cevab giriniz',
                                ]"
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
                            />
                            <q-stepper-navigation>
                                <q-btn
                                    type="submit"
                                    color="primary"
                                    label="Teklif Al"
                                    no-caps
                                    class="full-width"
                                />
                                <!--          <q-btn flat @click="step = 1" color="primary" label="Back" class="q-ml-sm" />-->
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
                                    Önemli Not: Sigorta bedeli hesaplanırken
                                    arsa hariç binanın yeni inşa değeri,eşyanın
                                    da yeni (satın alma) değeri esas alınır.
                                </div>
                            </div>
                        </q-form>
                    </q-step>
                </q-stepper>
            </div>
        </q-page-container>
    </q-layout>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useMainStore } from "../../../stores/main-store";
import { api } from "boot/axios";
import { Loading, Notify } from "quasar";
import { useRouter } from "vue-router";
import { useKonutStore } from "stores/konut-store";
const router = useRouter();
const store = useMainStore();
const konutStore = useKonutStore();
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
const sigortalSifatiOptions = [
    { value: "Mal Sahibi", label: "Mal Sahibi" },
    { value: "Kiracı", label: "Kiracı" },
];
const binaYapiOptions = [
    { value: "Tam Kagir", label: "Tam Kagir" },
    { value: "Yığma", label: "Yığma" },
    { value: "Diğer", label: "Diğer" },
];
const konutTipiOptions = [
    { value: "Apartman", label: "Apartman" },
    { value: "Müstakil", label: "Müstakil" },
];
const katBilgisiOptions = [
    { value: "Bodrum", label: "Bodrum" },
    { value: "Zemin", label: "Zemin" },
    { value: "Giriş", label: "Giriş" },
    { value: "Ara", label: "Ara" },
    { value: "Çatı", label: "Çatı" },
    { value: "Tamamı", label: "Tamamı" },
];
const hasarDurumuOptions = [
    { value: "Hasarsız", label: "Hasarsız" },
    { value: "Hafif Hasarlı", label: "Hafif Hasarlı" },
    { value: "Orta Hasarlı", label: "Orta Hasarlı" },
];
const konutKullanimOptions = [
    { value: "Daimi İkametgah", label: "Daimi İkametgah" },
    { value: "Yazlık", label: "Yazlık" },
];

// ************* Options for the form *************** /
let countriesOptions = ref(countries.value);
 let aracModelOptions = ref();
 const ilOptions = ref(il.value);
let ilceSelectGetOptions = ref();
const belediyeSelectGetOptions = ref();
const mahalleSelectOptions = ref(mahalleSelect.value);
const sokakSelectOptions = ref();
const agentOptions = ref(agent.value);

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
    if (val === "") {
        update(() => {
            ilOptions.value = il.value;
        });
        return;
    }
    update(() => {
        const needle = val.toLowerCase();
        ilOptions.value = il.value.filter(
            // @ts-ignore
            (v) => v.Aciklama.toLowerCase().indexOf(needle) > -1
        );
    });
};
const filterIlce = (val: string, update: any) => {
    if (val === "") {
        update(() => {
            ilceSelectGetOptions.value = ilce.value;
        });
        return;
    }
    update(() => {
        const needle = val.toLowerCase();
        ilceSelectGetOptions.value = ilce.value.filter(
            // @ts-ignore
            (v) => v.ilce_Adi.toLowerCase().indexOf(needle) > -1
        );
    });
};
const filterBelediye = (val: string, update: any) => {
    if (val === "") {
        update(() => {
            belediyeSelectGetOptions.value = belediyeSelect.value;
        });
        return;
    }
    update(() => {
        const needle = val.toLowerCase();
        belediyeSelectGetOptions.value = belediyeSelect.value.filter(
            // @ts-ignore
            (v) => v.Belediye_Adi.toLowerCase().indexOf(needle) > -1
        );
    });
};
const filterMahalle = (val: string, update: any) => {
    if (val === "") {
        update(() => {
            mahalleSelectOptions.value = mahalleSelect.value;
        });
        return;
    }
    update(() => {
        const needle = val.toLowerCase();
        mahalleSelectOptions.value = mahalleSelect.value.filter(
            // @ts-ignore
            (v) => v.Mahalle_Adi.toLowerCase().indexOf(needle) > -1
        );
    });
};
const filterSokak = (val: string, update: any) => {
    if (val === "") {
        update(() => {
            sokakSelectOptions.value = sokakSelect.value;
        });
        return;
    }
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
const onSubmitKonut = async () => {
    let formData = new FormData();
    for (const [key, val] of Object.entries(formFields.value)) {
        // @ts-ignore
        formData.append(key, val);
    }
    // @ts-ignore
    for (const pair of formData.entries()) {
      console.log(pair[0] + ', ' + pair[1]);
    }

    await konutStore.konutFormSubmit(formData).then((res) => {
        if (res === true) {
            router.push({ name: "konutSuccess" });
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
    MusteriEPosta: "azamat1696@gmail.com", // input
    AcenteNo: "", // input
    MusteriCepTelefonNo: "05488321621", // input
    MusteriDogumTarihi: "01 / 02 /2023",
    SigortalanacakKonutunAdresi: "Sigortalı adresi",
    SigortalSifati: "",
    Rehinli: "Rehinli değil",
    KonutKullanim: "",
    BinaYapi: "",
    KonutTipi: "",
    KatBilgisi: "",
    YasayanKisiSayisi: "",
    HasarDurumu: "", // select box
    insaYili: "",
    M2: "",
    BinaBedeli: "",
    EsyaBedeli: "",
    CamBedeli: "",
    KonuttaHasarYasandi: "",
    MusteriIlceKodu: "", // select box
    MusteriBucakKodu: "", // select box
    MusteriBelediyeKodu: "", // select box
    MusteriMahalleKodu: "", // select box
    MusteriCSBMKodu: "", // select box
    MusteriApartmanAdi: "apartman adı", //
    MusteriApartmanNo: "34", // input
    uyar: "", // 'accepted'
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
