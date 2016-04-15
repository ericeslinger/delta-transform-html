# delta-transform-html
A transformer that pulls in ottypes/rich-text Deltas and emits HTML.

This is still under heavy development, and not guaranteed to work yet. Use at your own risk.

## supported formats:
- [x] plain text
- [x] unordered list
- [x] ordered list
- [ ] multilevel lists
- [x] bold
- [x] italic
- [x] underscore
- [x] superscript
- [x] subscript
- [ ] preformatted
- [x] strikethrough
- [x] color
- [x] background-color
- [x] link

## interface:

    var transformer = require('delta-transform-html');
    var testVal = {
      ops: [
        {insert: 'multiline \n value'},
        {insert: '\n'},
      ],
    };
    var htmlString = transformer.transform(testVal);

One can register custom formats by calling `transformer.Registry.add('formatName', FormatterClass);`

FormatterClass should look a bit like:

    const TreeNode = transformer.Registry.get('TreeNode');
    class FormatterClass extends TreeNode {
      openTag() {
        return '<some-tag>';
      }
      closeTag() {
        return '</some-tag>';
      }
    }
    FormatterClass.priority = 44

Note that there's a special node type (text.js) that handles the actual text content in the token.
The priority value on the constructor is used to figure out a stable inside - outside order. Given
a text node like `{insert: 'foo', attributes: {bold: true, italic: true}}`, the `<em>` tag will
always be outside the `<strong>` tag, because the priority on ItalicNode is 2 and BoldNode is 1.
