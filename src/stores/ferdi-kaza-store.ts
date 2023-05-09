import { defineStore } from "pinia";
import { api } from "boot/axios";
import { Loading, Notify } from "quasar";
import {ErrorHandle} from "src/utils/ErrorHandle";

export const useFerdiKazaStore = defineStore("ferdiKaza", {
    state: () => ({
        error: {},
    }),
    getters: {},
    actions: {
        ferdiKazaFormSubmit: async function (data: any) {
            Loading.show({ message: "Başvuru Yapılıyor..." });
            try {
                const res = await api
                    .post("/ferdiKazaCepForm", data)
                    .then((res) => res.data);
                if (res.status === "success") {
                    Notify.create({
                        message: "Başvuru Başarılı",
                        color: "positive",
                        timeout: 5000,
                    });
                    return true;
                }
            } catch (err) {
                ErrorHandle(err)
                // @ts-ignore
                // if (err.response) {
                //     // @ts-ignore
                //     const { data, status } = err.response;
                //     if (status === 422) {
                //         Notify.create({
                //             message: "Başvuru: " + data.message,
                //             color: "negative",
                //             timeout: 3000,
                //         });
                //
                //         for (const value of Object.entries(data.errors)) {
                //             Notify.create({
                //                 message: "Başvuru: " + value[1],
                //                 color: "negative",
                //                 timeout: 3000,
                //             });
                //         }
                //     } else {
                //         this.error = {};
                //     }
                // } else {
                //     this.error = {};
                // }
                // // @ts-ignore
                // return err.response;
            } finally {
                Loading.hide();
            }
        },
    },
});
