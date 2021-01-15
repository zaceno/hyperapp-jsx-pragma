import { h, text } from 'hyperapp'
import { t, deepEqual } from 'twist'
import jsx from './index.js'

const simpleComponent = props => jsx('component', props)
const containerComponent = (props, content) =>
    jsx('container', props, [
        jsx('preamble', {}, 'pre'),
        content,
        jsx('postamble', {}, 'post'),
    ])

export default [
    t('hyperapp', [
        t('simple jsx calls map to simple h calls', [
            deepEqual(
                h('zord', { foo: true }, []),
                jsx('zord', { foo: true }, [])
            ),
        ]),
        t('strings become text nodes', [
            deepEqual(h('p', {}, text('tenet')), jsx('p', {}, 'tenet')),
        ]),
        t('numbers become text nodes', [
            deepEqual(h('p', {}, text(42)), jsx('p', {}, 42)),
        ]),
        t('nested arrays of children are flattened', [
            deepEqual(
                h('p', {}, [text('a'), text('b')]),
                jsx('p', {}, ['a', ['b']])
            ),
            deepEqual(
                h('p', {}, [text('a'), text('b'), text('c'), text('d')]),
                jsx('p', {}, ['a', ['b', ['c'], 'd']])
            ),
        ]),
        t('components work', [
            deepEqual(h('component', {}), jsx(simpleComponent)),
            deepEqual(h('component', { a: 1 }), jsx(simpleComponent, { a: 1 })),
            deepEqual(
                h('container', { a: 1 }, [
                    h('preamble', {}, text('pre')),
                    h('p', {}, text('child one')),
                    h('p', {}, text('child two')),
                    h('postamble', {}, text('post')),
                ]),
                jsx(
                    containerComponent,
                    { a: 1 },
                    jsx('p', {}, 'child one'),
                    jsx('p', {}, 'child two')
                )
            ),
        ]),
    ]),
]
