import { shallowMount } from '@vue/test-utils'
import Jade from './resources/Jade.vue'

test('processes .vue file with jade template', () => {
  const wrapper = shallowMount(Jade)
  expect(wrapper.is('div')).toBe(true)
  expect(wrapper.classes()).toContain('jade')
})
