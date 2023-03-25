import {defineStore} from "pinia";
import {api} from "boot/axios";
import {Loading, Notify} from "quasar";
export const useAuthStore = defineStore("auth", {
       state: () => ({
           authToken: "",
              user: {},
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
                try {
                        Loading.show();
                        await api.post("/loginCep", payload);
                        Loading.hide();
                        Notify.create({
                            type: "positive",
                            message: "Logged in successfully",
                        });

                        return true;
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
                     Loading.hide();
                     Notify.create({
                         type: "positive",
                         message: "Logged in successfully",
                     });
                     api.defaults.headers.common["Authorization"] = `Bearer ${response.data.accessToken}`;
                     localStorage.setItem("authToken", response.data.accessToken);
                     localStorage.setItem("user", JSON.stringify(this.user));
                     this.authToken = response.data.accessToken;
                     return true;
                 } catch (error) {
                     Loading.hide();
                     Notify.create({
                         type: "negative",

                         message: error.response.data.message,
                     });

                 }
             },
             initAuth() {
                    if (localStorage.getItem("authToken")) {
                        console.log(localStorage.getItem("authToken"))
                        this.authToken = localStorage.getItem("authToken")!;
                        this.user = JSON.parse(localStorage.getItem("user")!);
                        api.defaults.headers.common["Authorization"] = `Bearer ${this.authToken}`;
                    }

                },
                logout() {
                    this.authToken = "";
                    this.user = {};
                    localStorage.removeItem("authToken");
                    localStorage.removeItem("user");
                    api.defaults.headers.common["Authorization"] = "";

             }
         }

})
