import {defineStore} from "pinia";
import {api} from "boot/axios";
import {Loading, Notify} from "quasar";
import {ErrorHandle} from "src/utils/ErrorHandle";
  export const useAuthStore = defineStore("auth",
    {
        state: () => ({
            authToken: "",
            user: {},
            policy: [],
            permenantUser: {},
            hasarPolicy: [],
            greetingsLang: {},
            coockie: true,
        }),
        getters: {
            getActivePolicies(state) {
                // filter by date
                return state.policy.filter((item: any) => {
                    const date = new Date(item.date);
                    const today = new Date();
                    return date > today;
                });

            }
        },
        actions: {
            async getAllPolicy() {
                const res = await api.get('/policies')
                if (res.data.status === 'success')
                    this.policy = res.data.policeInfo
            },
            getHasarPolicy: async function () {
                const res = await api.get('/hasarCep')
                if (!(res.data.status === 'success' && res.data.damageInfo.length > 0)) {
                    return;
                }
                let arr2 = []
                for (let i = 0; i < res.data.damageInfo.length; i++) {
                    arr2.push(res.data.damageInfo[i][0])

                }
                let newa = arr2.map((item: any) => {
                    return this.renameKeys('s', item)
                })
                // @ts-ignore
                this.hasarPolicy = newa

            },
            getUserInfo() {
                api.get('/userInfo').then((res) => {
                    this.user = res.data;
                    localStorage.setItem("user", JSON.stringify(this.user));
                })
            },
            async initAuth() {

                if (localStorage.getItem("authToken") && localStorage.getItem("authToken") !== "undefined") {
                    this.authToken = localStorage.getItem("authToken")!;
                    this.user = JSON.parse(localStorage.getItem("user")!);
                    api.defaults.headers.common["Authorization"] = `Bearer ${this.authToken}`;
                    const user = await api.get('/userInfo')
                    if (user.status === 200) {
                        this.user = user.data;
                        localStorage.setItem("user", JSON.stringify(this.user));
                    }

                }

            },
            async login(payload: any) {

                Loading.show();
                await api.post("/loginCep", payload).then((res) => {
                    this.router.push({name: "optVerificationPage"});
                 if (res.data.status === "success") {
                     Notify.create({
                         type: "positive",
                         message: "Giriş başarılı lütfen telefonunuza gelen kodu giriniz",
                         position: "bottom",
                     })
                    }
                }).catch((err) => {
                   ErrorHandle(err)
                }).finally(() => {
                    Loading.hide();
                });
            },
            logout() {
                api.post("/logoutCep")
                this.authToken = "";
                this.user = {};
                localStorage.removeItem("authToken");
                localStorage.removeItem("user");
                api.defaults.headers.common["Authorization"] = "";

            },
            async passwordReset(payload: any) {
                Loading.show();
                await api.post("/passwordReset", payload).then((res) => {
                    if (res.data.status === "success") {
                        this.router.push({name: "loginPage"});
                    }
                }).catch((err) => {
                    ErrorHandle(err)
                    Notify.create({
                        type: "negative",
                        message: "Girdiğiniz bilgiler hatalı",
                    })
                    console.log(err)
                }).finally(
                    () => {
                        Loading.hide();
                    }
                );
            },
            async passwordResetSms(payload: any) {

                Loading.show();
                await api.post("/passwordCode", payload).then((res) => {

                    if (res.data.status === "success") {
                        this.router.push({name: "renewPasswordPage"});
                    }
                }).catch((err) => {
                    console.log(err)
                }).finally(() => {
                    Loading.hide();
                });
                // save auth token to local storage with user data and  set initAuth when reload page


            },
            async register(payload: any) {
                try {
                    Loading.show();
                    await api.post("/registerCep", payload);
                    Loading.hide();
                    Notify.create({
                        type: "positive",
                        message: "Registered successfully",
                    });

                    return true;
                } catch (error) {
                    Loading.hide();
                    ErrorHandle(error)
                    // Notify.create({
                    //     type: "negative",
                    //     //@ts-ignore
                    //     message: error.response.data.message,
                    // });
                    // //@ts-ignore
                    // for (const [key, val] of Object.entries(error.response.data.errors)) {
                    //     //@ts-ignore
                    //     if (val.length > 1) {
                    //         //@ts-ignore
                    //         for (let v in val)
                    //             //@ts-ignore
                    //             Notify.create({
                    //                 type: "negative",
                    //                 //@ts-ignore
                    //                 message: v,
                    //             });
                    //     } else {
                    //         Notify.create({
                    //             type: "negative",
                    //             //@ts-ignore
                    //             message: val[0],
                    //         });
                    //     }
                    //
                    //
                    // }
                }
            },
            renameKeys: function (keysMap: any, obj: any) {
                return Object.keys(obj).reduce(function (acc: any, key: any) {
                    const renamedKey = key.split(' ').join('_');
                    acc[renamedKey] = obj[key];
                    return acc;
                }, {});
            },
            async resendSmsCode(payload: any) {


                Loading.show();
                const response = await api.post("/resendSMSCep", payload);

                Loading.hide();

                if (response.data.status === "success") {
                    return true;
                } else {
                    Loading.hide();
                    return false;
                }


            },
            async updatePassword(payload: any) {
                Loading.show();
                await api.post("/renewpassword", payload).then((res) => {
                    if (res.data.status === "success") {
                        this.router.push({name: "optPasswordResetVerificationPage"});
                    }
                }).catch((err) => {
                    Notify.create({
                        type: "negative",
                        message: "Girdiğiniz bilgiler hatalı",
                    })
                    console.log(err)
                }).finally(
                    () => {
                        Loading.hide();
                    }
                );
            },
            async updateProfile(payload: any) {

                try {
                    Loading.show();
                    const response = await api.post("/updatecontact", payload);
                    Loading.hide();

                    if (response.data.status === "success") {
                        Notify.create({
                            type: "positive",
                            message: "Profiliniz başarıyla güncellendi",
                        });
                        return true;
                    } else {
                        return false;
                    }

                } catch (error) {
                    Loading.hide();
                    Notify.create({
                        type: "negative",
                        //@ts-ignore
                        message: error.response.data.message,
                    });

                }
            },
            async verifySmsCode(payload: any) {
                try {
                    Loading.show();
                    const response = await api.post("/loginSMSCep", payload);
                    // save auth token to local storage with user data and  set initAuth when reload page

                    if (response.data.status === "success") {
                        Loading.hide();
                        Notify.create({
                            type: "positive",
                            message: "Başarılı Şekilde Giriş Yaptınız",
                        });
                        this.authToken = response.data.accessToken;
                        this.user = response.data.user;

                        api.defaults.headers.common["Authorization"] = `Bearer ${response.data.accessToken}`;
                        localStorage.setItem("authToken", response.data.accessToken);
                        localStorage.setItem("user", JSON.stringify(response.data.user));
                        return true;
                    } else {
                        return false;
                    }

                } catch (error) {
                    ErrorHandle(error)
                    Loading.hide();
                    Notify.create({
                        type: "negative",
                        //@ts-ignore
                        message: error.response.data.message,
                    });

                }
            },
            getCurrentGreetings(){
                let today = new Date();
                let currentHour = today.getHours();

                if (currentHour < 12) {
                    this.greetingsLang = {
                        tr: "Günaydın",
                        en: "Good Morning",
                    };
                } else if (currentHour < 18) {
                    this.greetingsLang = {
                        tr: "İyi Günler",
                        en: "Good Afternoon",
                    }
                }
            }


        }

    })
