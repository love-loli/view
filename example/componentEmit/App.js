import { h } from '../../lib/index.mjs'
import { Foo } from './Foo.js'

export default {
  name: 'App',
  render() {
    // emit
    return h('div', {}, [
      h('div', {}, 'App'),
      h(Foo, {
        onAdd(a, b) {
          console.log('onAdd', a, b)
        },
        onAddFoo() {
          console.log('add-foo')
        },
      })])
  },
  setup() {
    return {}
  },
}
