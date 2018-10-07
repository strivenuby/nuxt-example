import Vue from 'vue';
import SvgIcon from '~/components/svg-icon.vue'
Vue.component('svg-icon', SvgIcon)

const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('~/assets/svg', false, /\.svg$/)
requireAll(req)