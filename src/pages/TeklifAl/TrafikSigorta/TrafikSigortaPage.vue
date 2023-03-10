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
                    >Trafik</q-toolbar-title
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
                            <div class="row no-wrap justify-between">
                                <div class="col-3 q-my-auto">
                                    <label class="text-no-wrap text-center"
                                        >Plaka No</label
                                    >
                                </div>
                                <div class="col-9 row">
                                    <div class="col-4">
                                        <q-input
                                            dense
                                            outlined
                                            v-model="formFields.AracPlaka1"
                                            hide-bottom-space
                                            lazy-rules
                                            @input="
                                                (v) => {
                                                    console.log(v);
                                                }
                                            "
                                            :rules="[
                                                (val) =>
                                                    (val && val.length > 0) ||
                                                    ' ',
                                            ]"
                                            class="q-mr-xs q-ml-xs"
                                        />
                                    </div>
                                    <div class="col-4">
                                        <q-input
                                            dense
                                            outlined
                                            v-model="formFields.AracPlaka2"
                                            hide-bottom-space
                                            lazy-rules
                                            :rules="[
                                                (val) =>
                                                    (val && val.length > 0) ||
                                                    ' ',
                                            ]"
                                            class="q-ml-xs q-mr-xs"
                                            autogrow
                                        />
                                    </div>
                                    <div class="col-4">
                                        <q-select
                                            outlined
                                            v-model="formFields.AracPlakaIlKodu"
                                            :options="aracPlakaIlKoduOptions"
                                            :option-label="
                                                (option) => option.label
                                            "
                                            option-value="value"
                                            emit-value
                                            map-options
                                            dense
                                            options-dense
                                            hide-bottom-space
                                            class="q-ml-xs"
                                            behavior="menu"
                                        />
                                    </div>
                                </div>
                            </div>
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
                            <q-select
                                outlined
                                v-model="formFields.AracMarka"
                                :options="aracMarkaOptions"
                                :option-label="(item) => item.Marka_Adi"
                                option-value="id"
                                emit-value
                                map-options
                                use-input
                                input-debounce="0"
                                options-dense
                                label="Aracin Markasi"
                                dense
                                hide-bottom-space
                                clearable
                                @filter="filterAracMarka"
                                @update:model-value="aracMarkaUpdated"
                                behavior="menu"
                                lazy-rules
                                :rules="[val => val !== null && val !== ''
                                || 'Lütfen marka seçiniz!',]"
                            >
                                <template v-slot:no-option>
                                    <q-item>
                                        <q-item-section class="text-grey">
                                            No results
                                        </q-item-section>
                                    </q-item>
                                </template>
                            </q-select>
                            <q-select
                                outlined
                                v-model="formFields.AracTipi"
                                :options="aracModelOptions"
                                :option-label="(item) => item.Tip_Adi"
                                option-value="id"
                                emit-value
                                map-options
                                use-input
                                input-debounce="0"
                                options-dense
                                label="Aracin Modeli"
                                dense
                                hide-bottom-space
                                clearable
                                @filter="filterAracModel"
                                behavior="menu"
                                lazy-rules
                                :rules="[val => val !== null && val !== ''
                                || 'Lütfen model seçiniz!',]"
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
                                v-model="formFields.AracModelYili"
                                type="number"
                                label="Model Yili"
                                hide-bottom-space
                                lazy-rules
                                :rules="[
                                    (val) =>
                                        (val && val.length > 0) ||
                                        'Lutfen Model Yili giriniz',
                                ]"
                            />
                            <q-select
                                outlined
                                v-model="formFields.AracTarz"
                                :options="aracTipiOptions"
                                :option-label="(item) => item.arac_tipi"
                                option-value="id"
                                emit-value
                                map-options
                                use-input
                                input-debounce="0"
                                options-dense
                                label="Kullanım Şekli"
                                dense
                                hide-bottom-space
                                clearable
                                @filter="filterAracTarz"
                                behavior="menu"
                                lazy-rules
                                :rules="[val => val !== null && val !== ''
                                || 'Lütfen kullanım şekli seçiniz!',]"
                            >
                                <template v-slot:no-option>
                                    <q-item>
                                        <q-item-section class="text-grey">
                                            No results
                                        </q-item-section>
                                    </q-item>
                                </template>
                            </q-select>
                            <q-select
                                outlined
                                v-model="formFields._YakitTipi"
                                :options="yakitTipiOptions"
                                :option-label="(item) => item.label"
                                option-value="value"
                                emit-value
                                map-options
                                use-input
                                input-debounce="0"
                                options-dense
                                label="Yakıt Tipi"
                                dense
                                hide-bottom-space
                                clearable
                                @filter="filterAracMarka"
                                behavior="menu"
                                lazy-rules
                                :rules="[val => val !== null && val !== ''
                                || 'Lütfen yakıt tiipi seçiniz!',]"
                            >
                                <template v-slot:no-option>
                                    <q-item>
                                        <q-item-section class="text-grey">
                                            No results
                                        </q-item-section>
                                    </q-item>
                                </template>
                            </q-select>

                            <q-stepper-navigation>
                                <!--            <q-btn @click="() => { done1 = true; step = 2 }" type="submit" color="primary" label="Ilerle" no-caps class="full-width" />-->
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
                            <q-input
                                dense
                                outlined
                                v-model="formFields.Motor_cc"
                                type="number"
                                label="Motor cc Gücü"
                                hide-bottom-space
                                lazy-rules
                                :rules="[
                                    (val) =>
                                        (val && val.length > 0) ||
                                        'Lutfen Motor cc Gücü giriniz',
                                ]"
                            />
<!--                            <q-input-->
<!--                                dense-->
<!--                                outlined-->
<!--                                v-model="formFields.AracBedeli"-->
<!--                                type="number"-->
<!--                                label="Araç Bedeli"-->
<!--                                hide-bottom-space-->
<!--                                lazy-rules-->
<!--                                :rules="[-->
<!--                                    (val) =>-->
<!--                                        (val && val.length > 0) ||-->
<!--                                        'Lutfen Araç Bedeli giriniz',-->
<!--                                ]"-->
<!--                            />-->
                            <q-input
                                dense
                                outlined
                                v-model="formFields.ipotekli"
                                type="text"
                                label="İpotekli İse Banka ve Şube İsmi"
                                hide-bottom-space
                                lazy-rules
                                :rules="[
                                    (val) =>
                                        (val && val.length > 0) ||
                                        'Lutfen Banka veya şube  giriniz',
                                ]"
                            />
                            <q-input
                                dense
                                outlined
                                v-model="formFields.AracMotorNo"
                                type="text"
                                label="Motor No"
                                hide-bottom-space
                                lazy-rules
                                :rules="[
                                    (val) =>
                                        (val && val.length > 0) ||
                                        'Lutfen Motor No  giriniz',
                                ]"
                            />
                            <q-input
                                dense
                                outlined
                                v-model="formFields.AracSasiNo"
                                type="text"
                                label="Şasi No"
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
                                v-model="formFields.AracDireksiyonTarafi"
                                :options="aracDireksiyonOptions"
                                :option-label="(option) => option.label"
                                option-value="value"
                                emit-value
                                map-options
                                label="Direksiyon Tarafı"
                                dense
                                hide-bottom-space
                                clearable
                                behavior="menu"
                                lazy-rules
                                :rules="[val => val !== null && val !== ''
                                || 'Lütfen direksiyon tarafı seçiniz!',]"
                            />
                            <q-select
                                outlined
                                v-model="formFields._SbmCarColorCode"
                                :options="renkOptions"
                                :option-label="(option) => option.adi"
                                option-value="id"
                                emit-value
                                map-options
                                label="Araç Rengi"
                                options-dense
                                dense
                                use-input
                                hide-bottom-space
                                clearable
                                @filter="filterRenk"
                                behavior="menu"
                                lazy-rules
                                :rules="[val => val !== null && val !== ''
                                || 'Lütfen araç rengi seçiniz!',]"
                            />
                            <q-select
                                outlined
                                v-model="formFields._AracVitesBilgisi"
                                :options="aracVitesOptions"
                                :option-label="(option) => option.label"
                                option-value="value"
                                emit-value
                                map-options
                                label="Araç Vites Türü"
                                dense
                                hide-bottom-space
                                clearable
                                behavior="menu"
                                lazy-rules
                                :rules="[val => val !== null && val !== ''
                                || 'Lütfen vites seçiniz!',]"
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
                        <q-form @submit="onSubmitKasko" class="q-gutter-md">
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
                            </div>
                        </q-form>
                    </q-step>
                </q-stepper>

                <!--    <form action="https://sanalposprov.garanti.com.tr/servlet/gt3dengine">-->
                <!--       <div id="formel"></div>-->
                <!--      <button type="submit" color="primary"  class="full-width"> Ödeme Yap</button>-->
                <!--    </form>-->

                <!--  <button @click="onSubmitPay">test</button>-->
            </div>
        </q-page-container>
    </q-layout>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { storeToRefs } from "pinia";
import { useMainStore } from "../../../stores/main-store";
import { api } from "boot/axios";
import { Loading, Notify } from "quasar";
import { useRouter } from "vue-router";
import { useTrafikSigortaStore } from "stores/trafik-store";
const router = useRouter();
const store = useMainStore();
const trafikSigortaStore = useTrafikSigortaStore();
const {
    countries: countries,
    aracMarka: aracMarka,
    aracTipi: aracTipi,
    aracTarz: aracTarz,
    aracModelSelect,
    renk,
    il: il,
    ilce,
    belediyeSelect,
    mahalleSelect,
    sokakSelect,
    agent,
} = storeToRefs(useMainStore());
const {
    countriesGet: countriesGet,
    aracMarkaGet: aracMarkaGet,
    aracModelSelectGet,
    renkGet: renkGet,
    ilGet: ilGet,
    ilceSelectGet: ilceSelectGet,
    belediyeSelectGet: belediyeSelectGet,
    mahalleSelectGet: mahalleSelectGet,
    sokakSelectGet: sokakSelectGet,
    agentGet: agentGet,
    aracTipiGet: aracTipiGet,
} = useMainStore();

countriesGet();
aracMarkaGet();
aracModelSelectGet();
renkGet();
ilGet();
ilceSelectGet();
belediyeSelectGet();
mahalleSelectGet();
sokakSelectGet();
agentGet();
aracTipiGet()
const genderOptions = [
    { value: "Erkek", label: "Erkek" },
    { value: "Kadın", label: "Kadın" },
];
const aracPlakaIlKoduOptions = [
    { value: "KKTC", label: "KKTC" },
    { value: "TC", label: "TC" },
    { value: "DİĞER", label: "DİĞER" },
];
const yakitTipiOptions = [
    { value: "Benzin", label: "Benzin" },
    { value: "Dizel", label: "Dizel" },
    { value: "LPG", label: "LPG" },
    { value: "Elektrikli", label: "Elektrik" },
];
const aracVitesOptions = [
    { value: "Manuel", label: "Manuel" },
    { value: "Otomatik", label: "Otomatik" },
    { value: "Triptonik", label: "Triptonik" },
];
const aracDireksiyonOptions = [
    { value: "Sağ", label: "Sağ" },
    { value: "Sol", label: "Sol" },
];
// ************* Options for the form *************** /
let countriesOptions = ref(countries.value);
let aracMarkaOptions = ref(aracMarka.value);
let aracTipiOptions = ref(aracTipi.value);
let aracModelOptions = ref();
let filteredArachModel = aracModelSelect.value;
let renkOptions = ref(renk.value);
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
const filterAracMarka = (val: any, update: any) => {
    if (val === "") {
        update(() => {
            aracMarkaOptions.value = aracMarka.value;
        });
        return;
    }
    update(() => {
        const needle = val.toLowerCase();
        aracMarkaOptions.value = aracMarka.value.filter(
            // @ts-ignore
            (v) => v.Marka_Adi.toLowerCase().indexOf(needle) > -1
        );
    });
};
const filterAracModel = (val: any, update: any) => {
    // @ts-ignore
    formFields.AracModel = "";
    if (val === "") {
        update(() => {
            aracModelOptions.value = filteredArachModel;
        });
        return;
    }
    update(() => {
        const needle = val.toLowerCase();
        aracModelOptions.value = filteredArachModel.filter(
            // @ts-ignore
            (v) => v.Tip_Adi.toLowerCase().indexOf(needle) > -1
        );
    });
};
const filterAracTarz = (val: any, update: any) => {
    if (val === "") {
        update(() => {
            aracTipiOptions.value = aracTipi.value;
        });
        return;
    }
    update(() => {
        const needle = val.toLowerCase();
        aracTipiOptions.value = aracTipi.value.filter(
            // @ts-ignore
            (v) => v.arac_tipi.toLowerCase().indexOf(needle) > -1
        );
    });
};
const filterRenk = (val: any, update: any) => {
    if (val === "") {
        update(() => {
            renkOptions.value = renk.value;
        });
        return;
    }
    update(() => {
        const needle = val.toLowerCase();
        renkOptions.value = renk.value.filter(
            // @ts-ignore
            (v) => v.adi.toLowerCase().indexOf(needle) > -1
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
const aracMarkaUpdated = (id?: number) => {
    // @ts-ignore
    const marka = aracMarka.value.find((item) => item.id === id);
    let filteredModels = aracModelSelect.value.filter(
        // @ts-ignore
        (item) => item.Marka_Kod === marka?.Marka_Kod
    );
    filteredArachModel = filteredModels;
};

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
const onSubmitKasko = async () => {
    let formData = new FormData();
    for (const [key, val] of Object.entries(formFields.value)) {
        // @ts-ignore
        formData.append(key, val);
    }
    // for (const pair of formData.entries()) {
    //   console.log(pair[0] + ', ' + pair[1]);
    // }

    await trafikSigortaStore.trafikSigortaFormSubmit(formData).then((res) => {
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
    AracPlaka1: "ds",
    AracPlaka2: "786",
    AracPlakaIlKodu: "", // select box
    AracMarka: 3, // select box
    AracModelYili: "2000", // select box
    AracTarz: "", // select box
    _YakitTipi: "", // select box
    Motor_cc: "54",
    // AracBedeli: "87897979",
    ipotekli: "ipotekli değil",
    AracMotorNo: "232323232",
    AracSasiNo: "232323232323",
    AracDireksiyonTarafi: "Sağ", // select box
    _AracVitesBilgisi: "", // select box
    MusteriIlceKodu: "", // select box
    MusteriBucakKodu: "", // select box
    MusteriBelediyeKodu: "", // select box
    MusteriMahalleKodu: "", // select box
    MusteriCSBMKodu: "", // select box
    MusteriApartmanAdi: "apartman adı", //
    MusteriApartmanNo: "34", // input
    MusteriCepTelefonNo: "05488321621", // input
    MusteriEPosta: "azamat1696@gmail.com", // input
    AcenteNo: "000111", // input
    _SbmCarColorCode: "", // select box
    uyar: "", // 'accepted'
});
// ************* Garanti ödeme test *************** /
// const data ={
//
// }
// const onSubmitPay = () => {
//  let html = ''
//   for (const [key, value] of Object.entries(data)) {
//     html += `<input type="text" name="${key}" value="${value}">`
//   }
//   document.getElementById('formel').innerHTML = html
//
// }
// ************* Watcher for AracPlaka1 *************** /
watch(formFields.value, (value, oldValue, onCleanup) => {
    if (value.AracPlaka1) {
        formFields.value.AracPlaka1 = value.AracPlaka1.toUpperCase();
    }
});
// let testdata = {"message":"The given data was invalid.","errors":{"uyar":["The uyar must be accepted."]}}
// for (const [key, value] of Object.entries(testdata?.errors)) {
//   Notify.create({
//     message: 'Başvuru: ' + value[0],
//     color: 'negative',
//     position: 'bottom-right',
//     timeout: 1500,
//   })
// }
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
