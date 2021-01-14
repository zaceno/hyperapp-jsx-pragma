import { h, text } from 'hyperapp'

function flattenAll(input) {
    const stack = [...input];
    const res = [];
    while(stack.length) {
        const next = stack.pop();
        if(Array.isArray(next)) {
            stack.push(...next);
        } else {
            res.push(next);
        }
    }
    return res.reverse();
}

/* Originally suggested by Jorge Bucaran on slack: */
export default (type, props, ...children) =>
    typeof type === 'function'
        ? type(props, children)
        : h(
              type,
              props || {},
              flattenAll(children)
                  .map(any =>
                      typeof any === 'string' || typeof any === 'number'
                          ? text(any)
                          : any
                  )
          )
