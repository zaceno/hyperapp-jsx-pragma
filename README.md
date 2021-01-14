# hyperapp-jsx-pragma

This library allows you to write your hyperapp views in JSX.

**_ `my-component.jsx` _**

```jsx
import h from 'hyperapp-jsx-pragma'

export default props => (
    <div>
        <h1>Hello, {props.name}</h1>
        {props.clickable && <button onclick={props.onclick}>Click me</button>}
    </div>
)
```

## Set up

Install it with:

```
npm i hyperapp-jsx-pragma
```

There is a peer dependency on hyperapp > 2.0.8 so make sure that is installed as well

You may need to set the pragma in your `.babelrc`:

```
{
  "plugins": [
    [
      "@babel/plugin-transform-react-jsx",
      {
          "pragma": "h"
      }
    ]
  ]
}
```


Fragments (`<>...</>`) are not supported and I am not planning on supporting any future JSX features.
