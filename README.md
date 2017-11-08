# delta-transform-html
A transformer that pulls in ottypes/rich-text Deltas and emits HTML.

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

    import { Formatter } from 'delta-transform-html';

    const testVal = {
      ops: [
        {insert: 'multiline \n value'},
        {insert: '\n'},
      ],
    };
    const htmlString = transformer.transform(testVal);

You can request that the output html be wrapped in a root node by passing options to transform (and transformAsync)
thusly:

    var htmlString = transformer.transform(testVal, { rootNode: 'my-element', rootClass: 'class1 class2'});
    htmlString === '<my-element class="class1 class2"> ... stuff ... </my-element>'

One can register custom formats or override formats by extending the Formatter class. If you replace `this.formats.italic` in
the subclass constructor with a new italic format, you'll use that one instead. Similarly, you can create new formats and add them
in the subclass constructor as well.
Be sure to call `this.sortRegistry()` and `this.checkPriorities()` at the end of the constructor.

FormatterClass should look a bit like:

    import { TreeNode } from 'delta-transform-html';
    class FormatterClass extends TreeNode {
      openTag() {
        return '<some-tag>';
      }
      closeTag() {
        return '</some-tag>';
      }
    }
    FormatterClass.priority = 44

Note that there's a special node type (text) that handles the actual text content in the token.
The priority value on the constructor is used to figure out a stable inside - outside order. Given
a text node like `{insert: 'foo', attributes: {bold: true, italic: true}}`, the `<em>` tag will
always be outside the `<strong>` tag, because the priority on ItalicNode is 2 and BoldNode is 1.
