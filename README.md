# what is this?

Returns string wrapped in specified wrapper string

# installation

`npm i string-wrapper`

# usage

`wrap(<string_to_wrap>, <wrapper_string>)`

```
import { wrap, wrapP, wrapC, wrapA, wrapS, wrapQ, wrapD } from string-wrapper;

wrap('hello', '#'); // #hello#
wrap(' world ', '***'); // *** world ***
wrap('parenthesis', '()'); // (parenthesis)
wrap('square', '[]'); // [square]
wrap('curly', '{}'); // {curly}
wrap('angle', '<>'); // <angle>

wrapP('paren'); // (paren)
wrapC('curly'); // {curly}
wrapA('angle'); // <angle>
wrapS('square'); // [square]
wrapS('quote'); // 'quote'
wrapD('double quote'); // "double quote"
```
