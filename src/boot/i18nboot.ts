let localeInstance = void 0
// @ts-ignore
export default async ({app,router,store}) => {
    // something to do
    localeInstance = app.config.globalProperties.$i18n.locale
    //console.log(app.config.globalProperties.$i18n.locale)
    // router.afterEach((to:object, from:object) => {
    //     let fromRoutePath = ``
    //
    //
    //     // @ts-ignore
    //     console.log("router.afterEach",from.path.split("/")[1],to.path.split("/")[1])
    // })


}
export { localeInstance }
