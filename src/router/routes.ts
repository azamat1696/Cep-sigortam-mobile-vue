import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [

    {
        path: "/",
        component: () => import("layouts/MainLayout.vue"),
        children: [

            {
                meta : {requiresAuth : false},
                path: "",
                redirect: { name: "sliderPage" }
            },
            {
                meta : {requiresAuth : false},
                path: "/home",
                name: "home",
                component: () => import("pages/Home/HomePage.vue"),
            },
            {
                meta : {requiresAuth : true},
                path: "/home-login",
                name: "homeLogin",
                component: () => import("pages/Home/HomePageWithLogin.vue"),

            },
        ],
    },
    {
        path: "/my",
        component: () => import("layouts/EmptyLayout.vue"),
        children: [
            {
                meta : {requiresAuth : true},
                path: "teklif-al",
                name: "teklifAl",
                component: () => import("pages/Home/TeklifAlPage.vue"),
            },
            {
                meta : {requiresAuth : true},
                path: "damage",
                name: "showDamage",
                component: () => import("pages/Home/ShowDamagePage.vue"),
            },
            {
                meta : {requiresAuth : true},
                path: "police",
                name: "showPolice",
                component: () => import("pages/Home/ShowPolicePage.vue"),
            },
            {
                meta : {requiresAuth : true},
                path: "profile",
                name: "showProfile",
                component: () => import("pages/Home/MyProfilePage.vue"),
            },
            {
                path: "services",
                name: "showServices",
                component: () => import("pages/Home/ShowServicesPage.vue"),
            },
        ],
    },
    {
        path: "/auth",
        component: () => import("layouts/AuthLayout.vue"),
        children: [
            {
                path: "login",
                name: "loginPage",
                component: () => import("pages/Auth/LoginPage.vue"),
            },
            {
                path: "register",
                name: "registerPage",
                component: () => import("pages/Auth/RegisterPage.vue"),
            },
            {
                path: "renew-password",
                name: "renewPasswordPage",
                component: () => import("pages/Auth/RenewPasswordPage.vue"),
            },
            {
                path: "forgot-password",
                name: "forgotPasswordPage",
                component: () => import("pages/Auth/ForgotPassword.vue"),
            },
            {
                path: "opt-verification",
                name: "optVerificationPage",
                component: () =>
                    import("pages/Auth/OptPasswordVerification.vue"),
            },
            {
                path: "opt-password-verification",
                name: "optPasswordResetVerificationPage",
                component: () =>
                    import("pages/Auth/OptPasswordResetVerification.vue"),
            },
            {
                path: "success",
                name: "optVerificationSuccessPage",
                component: () => import("pages/Auth/VerificationSuccess.vue"),
            },
        ],
    },
    {
        path: "/services",
        component: () => import("layouts/ServicesLayout.vue"),
        children: [
            {
                path: "kasko",
                name: "kaskoRegister",
                component: () => import("pages/TeklifAl/Kasko/KaskoPage.vue"),
            },
            {
                path: "konut",
                name: "KonutRegister",
                component: () => import("pages/TeklifAl/Konut/KonutPage.vue"),
            },
            {
                path: "trafik",
                name: "TrafikSigortaRegister",
                component: () => import("pages/TeklifAl/TrafikSigorta/TrafikSigortaPage.vue"),
            },
            {
                path: "ferdi-kaza",
                name: "FerdiKazaRegister",
                component: () => import("pages/TeklifAl/FerdiKaza/FerdiKaza.vue"),
            },
            {
                meta: {requiresAuth: true},
                path: "create-ferdi-kaza",
                name: "FerdiKazaCreate",
                component: () => import("pages/MakePolice/FerdiKaza/FerdiKaza.vue"),
            },
            {
                meta: {requiresAuth: true},
                path: "trafik-create",
                name: "TrafikSigortaCreate",
                component: () => import("pages/MakePolice/TrafikSigorta/TrafikSigortaPage.vue"),
            },
        ],
    },
    {
        path: "/success",
        component: () => import("layouts/EmptyLayout.vue"),
        children: [
            {
                path: "/slider",
                name: "sliderPage",
                component: () => import("pages/Home/SliderHomePage.vue"),
            },
            {
                path: "kasko",
                name: "kaskoSuccess",
                component: () => import("pages/TeklifAl/Kasko/KaskoSuccessPage.vue"),
            },
            {
                path: "konut",
                name: "konutSuccess",
                component: () => import("pages/TeklifAl/Konut/KonutSuccessPage.vue"),
            },
            {
                path: "trafik",
                name: "trafikSuccess",
                component: () => import("pages/TeklifAl/TrafikSigorta/TrafikSigortaSuccessPage.vue"),
            },

        ],
    },
    // Always leave this as last one,
    // but you can also remove it
    {
        path: "/:catchAll(.*)*",
        component: () => import("pages/ErrorNotFound.vue"),
    },
];

export default routes;
