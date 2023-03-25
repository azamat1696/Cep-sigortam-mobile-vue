let routerInstance = void 0
// @ts-ignore
export default async ({router: router}) => {
  // something to do
  routerInstance = router
    // router.afterEach((to:object, from:object) => {
    //     let fromRoutePath = ``
    //
    //
    //     // @ts-ignore
    //     console.log("router.afterEach",from.path.split("/")[1],to.path.split("/")[1])
    // })


}
export { routerInstance }
