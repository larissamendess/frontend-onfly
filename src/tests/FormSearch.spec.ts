import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { QInput, Quasar } from 'quasar'
import FormSearch from '../components/FormSearch.vue'

describe('FormSearch', () => {
  it('atualiza o v-model ao digitar no input', async () => {
    const wrapper = mount(FormSearch, {
      global: {
        components: {
          QInput
        },
      plugins: [[Quasar, {}]]
      },
      props: {
        modelValue: '',
        'onUpdate:modelValue': (e: string) => wrapper.setProps({ modelValue: e })
      }
    })

    const input = wrapper.find('input')

    if (!input.exists()) {
      console.log('HTML gerado:', wrapper.html())
    }

    expect(input.exists()).toBe(true)

    await input.setValue('São Paulo')

    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['São Paulo'])
  })
})