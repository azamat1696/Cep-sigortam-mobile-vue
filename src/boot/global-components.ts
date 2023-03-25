
import { boot } from 'quasar/wrappers'

import Page from 'components/Page/Page.vue'
import PageHeader from 'components/Page/PageHeader.vue'
const globalComponents = {
    'page': Page,
    'page-header': PageHeader
}

export default boot(async ({ app }) => {
    for (const key in globalComponents) {
        // @ts-ignore
        app.component(key,globalComponents[key])
    }
})
