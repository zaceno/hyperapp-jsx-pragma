import{h as p,text as t}from"https://unpkg.com/hyperapp";export default(o,e,...f)=>"function"==typeof o?o(e,f):p(o,e||{},[].concat(...f).map(p=>"string"==typeof p||"number"==typeof p?t(p):p));
