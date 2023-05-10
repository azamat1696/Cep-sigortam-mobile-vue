import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [

    {
        meta: {requiresAuth: false},
        path: "/",
        component: () => import("layouts/MainLayout.vue"),
        children: [
            {
                meta : {requiresAuth : false},
                path: "",
                redirect: { name: localStorage.getItem("authToken") && localStorage.getItem("authToken") !== "undefined" ? "homeLogin" :  "sliderPage"},
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
                meta: {requiresAuth: false},
                path: "services",
                name: "showServices",
                component: () => import("pages/Home/ShowServicesPage.vue"),
            },
        ],
    },
    {
        meta: {requiresAuth: false},
        path: "/auth",
        component: () => import("layouts/AuthLayout.vue"),
        children: [
            {
                meta: {requiresAuth: false},
                path: "login",
                name: "loginPage",
                component: () => import("pages/Auth/LoginPage.vue"),
            },
            {
                meta: {requiresAuth: false},
                path: "register",
                name: "registerPage",
                component: () => import("pages/Auth/RegisterPage.vue"),
            },
            {
                meta: {requiresAuth: false},
                path: "renew-password",
                name: "renewPasswordPage",
                component: () => import("pages/Auth/RenewPasswordPage.vue"),
            },
            {
                meta: {requiresAuth: false},
                path: "forgot-password",
                name: "forgotPasswordPage",
                component: () => import("pages/Auth/ForgotPassword.vue"),
            },
            {
                meta: {requiresAuth: false},
                path: "opt-verification",
                name: "optVerificationPage",
                component: () =>
                    import("pages/Auth/OptPasswordVerification.vue"),
            },
            {
                meta: {requiresAuth: false},
                path: "opt-password-verification",
                name: "optPasswordResetVerificationPage",
                component: () =>
                    import("pages/Auth/OptPasswordResetVerification.vue"),
            },
            {
                meta: {requiresAuth: false},
                path: "success",
                name: "optVerificationSuccessPage",
                component: () => import("pages/Auth/VerificationSuccess.vue"),
            },
        ],
    },
    {
        meta: {requiresAuth: false},
        path: "/services",
        component: () => import("layouts/ServicesLayout.vue"),
        children: [
            {
                meta: {requiresAuth: false},
                path: "/kasko",
                name: "kaskoRegister",
                component: () => import("pages/TeklifAl/Kasko/KaskoPage.vue"),
            },
            {
                meta: {requiresAuth: false},
                path: "/konut",
                name: "KonutRegister",
                component: () => import("pages/TeklifAl/Konut/KonutPage.vue"),
            },
            {
                meta: {requiresAuth: false},
                path: "/trafik",
                name: "TrafikSigortaRegister",
                component: () => import("pages/TeklifAl/TrafikSigorta/TrafikSigortaPage.vue"),
            },
            {
                meta: {requiresAuth: false},
                path: "/ferdi-kaza",
                name: "FerdiKazaRegister",
                component: () => import("pages/TeklifAl/FerdiKaza/FerdiKaza.vue"),
            },

        ],
    },
    {
        path: "/create-policy",
        component: () => import("layouts/CreatePolicyLayout.vue"),
        children: [
            {
                meta: {requiresAuth: true},
                path: "create-ferdi-kaza",
                name: "FerdiKazaCreate",
                component: () => import("pages/MakePolice/FerdiKaza/FerdiKaza.vue"),
            },
            {
                meta: {requiresAuth: true},
                path: "hesaplanan-ferdikaza",
                name: "FerdiKazaHesaplananPirim",
                component: () => import("pages/MakePolice/FerdiKaza/HesaplananPirim.vue"),
            },
            {
                meta: {requiresAuth: true},
                path: "paymentprim-ferdikaza",
                name: "FerdiKazaPaymentPirim",
                component: () => import("pages/MakePolice/FerdiKaza/PaymentPirim.vue"),
            },
            {
                meta: {requiresAuth: true},
                path: "payment-ferdikaza",
                name: "FerdiKazaPayment",
                component: () => import("pages/MakePolice/FerdiKaza/Payment.vue"),
            },
            {
                meta: {requiresAuth: true},
                path: "success-ferdikaza",
                name: "FerdiKazaSuccess",
                component: () => import("pages/MakePolice/FerdiKaza/FerdiKazaSuccess.vue"),
            },
            {
                meta: {requiresAuth: true},
                path: "trafik-create",
                name: "TrafikSigortaCreate",
                component: () => import("pages/MakePolice/TrafikSigorta/TrafikSigortaPage.vue"),
            },
            {
                meta: {requiresAuth: true},
                path: "hesaplanan-trafikcreate",
                name: "TrafikSigortaHesaplananPirim",
                component: () => import("pages/MakePolice/TrafikSigorta/HesaplananPirimTrafik.vue"),
            },
            {
                meta: {requiresAuth: true},
                path: "paymentprim-trafikcreate",
                name: "TrafikSigortaPaymentPirim",
                component: () => import("pages/MakePolice/TrafikSigorta/PaymentPirimTrafik.vue"),
            },
            {
                meta: {requiresAuth: true},
                path: "payment-trafikcreate",
                name: "TrafikSigortaPayment",
                component: () => import("pages/MakePolice/TrafikSigorta/PaymentTrafik.vue"),
            },
            {
                meta: {requiresAuth: true},
                path: "success-trafikcreate",
                name: "TrafikSigortaSuccess",
                component: () => import("pages/MakePolice/TrafikSigorta/TrafikSigortaSuccessPage.vue"),
            },
        ]
    },
    {
        meta: {requiresAuth: false},
        path: "/success",
        component: () => import("layouts/EmptyLayout.vue"),
        children: [
            {
                meta: {requiresAuth: false},
                path: "/slider",
                name: "sliderPage",
                component: () => import("pages/Home/SliderHomePage.vue"),
            },
            {
                meta: {requiresAuth: false},
                path: "kasko",
                name: "kaskoSuccess",
                component: () => import("pages/TeklifAl/Kasko/KaskoSuccessPage.vue"),
            },
            {
                meta: {requiresAuth: false},
                path: "konut",
                name: "konutSuccess",
                component: () => import("pages/TeklifAl/Konut/KonutSuccessPage.vue"),
            },
            {
                meta: {requiresAuth: false},
                path: "trafik",
                name: "trafikSuccess",
                component: () => import("pages/TeklifAl/TrafikSigorta/TrafikSigortaSuccessPage.vue"),
            },
            {
                meta: {requiresAuth: false},
                path: "user-agreement",
                name: "userAgreementPage",
                component: () => import("pages/UserAgreement/UserAgreement.vue"),
            }

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
