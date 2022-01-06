import Dice from '@/components/Dice.vue'
import { shallowMount } from '@vue/test-utils'

describe('Dice.vue', () => {
  it('renders props.letter=A when passed', () => {
    const wrapper = shallowMount(Dice, {
      props: {
        letter: 'A',
      },
    })

    let res = wrapper.text()

    expect(res).toEqual('A')
    let span = wrapper.find('span')
    expect(span.classes('underline')).toBe(false)
  })

  it('render Q', () => {
    const letter = 'Q'
    const wrapper = shallowMount(Dice, {
      props: { letter },
    })

    let res = wrapper.text()
    let span = wrapper.find('span')

    expect(res).toEqual('Qu')
    expect(span.classes('underline')).toBe(false)
  })

  /**
   * Tests classes underlines
   */
  it.each(['W', 'Z', 'N'])('test underline class for %s', (letter) => {
    const wrapper = shallowMount(Dice, {
      props: { letter },
    })

    let span = wrapper.find('span')
    expect(span.classes('underline')).toBe(true)
  })
})
