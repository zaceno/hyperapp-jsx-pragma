import { h, text } from 'hyperapp'

/* Originally suggested by Jorge Bucaran on slack: */
export default (type, props, ...children) =>
    typeof type === 'function'
        ? type(props, children)
        : h(
              type,
              props || {},
              []
                  .concat(...children)
                  .map(any =>
                      typeof any === 'string' || typeof any === 'number'
                          ? text(any)
                          : any
                  )
          )
