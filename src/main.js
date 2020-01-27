import DefaultLayout from '~/layouts/Default.vue'
import Section from '~/components/Section.vue'
import 'typeface-abel'

export default function (Vue, { router, head, isClient }) {
  Vue.component('Layout', DefaultLayout)
  Vue.component('Section', Section)
}
