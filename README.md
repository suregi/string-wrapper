# what is this?

Returns string wrapped in specified wrapper string

# installation

`npm i string-wrapper`

# usage

```
import { wrap } from string-wrapper;

wrap('hello', '#'); // #hello#
wrap(' world ', '***'); // *** world ***
wrap('parenthesis', '()'); // (parenthesis)
wrap('square', '[]'); // [square]
wrap('curly', '{}'); // {curly}
wrap('angle', '<>'); // <angle>
```
