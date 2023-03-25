import {reactive} from "vue";

const myState = reactive({
    usePageTransition: false,
    iosBrowserSwipingBack: false
})


const myStore = {
    myState,
}
export default myStore
