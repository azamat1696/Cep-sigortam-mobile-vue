import {defineStore} from "pinia";
import {api} from "boot/axios";
import {Loading, Notify} from "quasar";
import {useRouter} from "vue-router";
const router = useRouter();
export const useAuthStore = defineStore("auth", {
       state: () => ({
           authToken: "",
              user: {},
           policy: [],
           permenantUser: {},
           hasarPolicy: [],
       }),
         getters: {},
         actions: {
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
                     Notify.create({
                          type: "negative",
                         //@ts-ignore
                          message: error.response.data.message,
                     });
                     //@ts-ignore
                     for (const [key,val] of Object.entries(error.response.data.errors))
                     {
                         //@ts-ignore
                         if (val.length > 1){
                             //@ts-ignore
                             for (let v  in val)
                                //@ts-ignore
                                Notify.create({
                                    type: "negative",
                                    //@ts-ignore
                                    message: v,
                                });
                         }else {
                             Notify.create({
                                 type: "negative",
                                 //@ts-ignore
                                 message: val[0],
                             });
                         }


                     }
                }
           },
           async login(payload: any) {

                        Loading.show();
                        await api.post("/loginCep", payload).then((res) => {
                            this.router.push({name: "optVerificationPage"});
                        }).catch((err) => {
                            console.log(err)
                            Notify.create({
                                type: "negative",
                                message: 'Kullanıcı Adı veya Şifre Hatalı',
                                position: "bottom"
                            })
                        }).finally(() => {
                            Loading.hide();
                        });



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
                             message: "Başarılı Şekilde Giriş Yapdınız",
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
                     Loading.hide();
                     Notify.create({
                         type: "negative",
                          //@ts-ignore
                         message: error.response.data.message,
                     });

                 }
             },
            async initAuth() {

                    if (localStorage.getItem("authToken") && localStorage.getItem("authToken") !== "undefined") {
                         this.authToken = localStorage.getItem("authToken")!;
                         this.user = JSON.parse(localStorage.getItem("user")!);
                         api.defaults.headers.common["Authorization"] = `Bearer ${this.authToken}`;
                         const user = await api.get('/userInfo')
                         if (user.status === 200){
                             this.user =   user.data;
                             localStorage.setItem("user", JSON.stringify(this.user));
                         }

                    }

                },
             logout() {
                    api.post("/logoutCep")
                    this.authToken = "";
                    this.user = {};
                    localStorage.removeItem("authToken");
                    localStorage.removeItem("user");
                    api.defaults.headers.common["Authorization"] = "";

             },
             getUserInfo() {
                 api.get('/userInfo').then((res) => {
                     this.user = res.data;
                     localStorage.setItem("user", JSON.stringify(this.user));
                 })
             },
             async getAllPolicy() {
               const res = await api.get('/policies')
                 if (res.data.status === 'success')
                     this.policy = res.data.policeInfo
             },
             async getHasarPolicy() {
                   const res = await api.get('/hasarCep')
                      if (res.data.status === 'success' && res.data.damageInfo.length > 0)
                          this.hasarPolicy = res.data.damageInfo

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
                async passwordReset(payload: any) {
                    Loading.show();
                    await api.post("/passwordReset", payload).then((res) => {
                        if (res.data.status === "success") {
                            this.router.push({name: "loginPage"});
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
                }


         }

})
