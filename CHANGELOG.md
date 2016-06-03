## 1.0.1 (2016-06-03)

API Extension:
  - Allow TextNode to be subclassed and the escape() function extended.

```javascript
import { Registry } from 'delta-transform-html';
export class Text extends Registry.get('text') {
  escape(contents) {
    return super.escape(contents)
    .replace(/{{/g, '{{&quot;{{&quot;}}');
  }
}
Registry.add('text', Text);
```

As an example - the above will escape double-curly braces in angular-parsed contexts, in order to prevent
injection attacks.

## 1.0.0 (2016-06-02)

Initial Release
