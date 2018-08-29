- `templateNamespace` must be 'svg', angularjs needs to know this information to do some special operations to svg related tags
- `replace` is deprecated in most cases, but it's the correct usage here with `svg` case:
<https://docs.angularjs.org/api/ng/service/$compile#-replace->
- `template` should not contain `<svg>` tag, it should be declared in html