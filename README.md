# delta-transform-html
A transformer that pulls in ottypes/rich-text Deltas and emits HTML.

This is still under heavy development, and not guaranteed to work yet. Use at your own risk.

## supported formats:
- [ ] plain text
- [ ] unordered list
- [ ] ordered list
- [ ] multilevel lists
- [ ] bold
- [ ] italic
- [ ] underscore
- [ ] superscript
- [ ] subscript
- [ ] preformatted
- [ ] strikethrough
- [ ] color
- [ ] background-color
- [ ] link

## interface:

    var transformer = require('delta-transform-html');
    var testVal = {
      ops: [
        {insert: 'multiline \n value'},
        {insert: '\n'},
        {insert: 'bulleted list one'},
        {insert: '\n', attributes: {list: 'bullet'}},
        {insert: 'bulleted list two'},
        {insert: '\n', attributes: {list: 'bullet'}},
        {insert: 'bulleted list three'},
        {insert: '\n', attributes: {list: 'bullet'}},
        {insert: 'numbered list one'},
        {insert: '\n', attributes: {list: 'ordered'}},
        {insert: 'numbered list two'},
        {insert: '\n', attributes: {list: 'ordered'}},
        {insert: 'numbered list three'},
        {insert: '\n', attributes: {list: 'ordered'}},
        {insert: 'bold multiline\nvalue', attributes: {bold: true}},
        {insert: 'italic value', attributes: {italic: true}},
        {insert: 'bold-italic value', attributes: {bold: true, italic: true}},
        {insert: '\n'},
      ],
    };
    var htmlString = transformer.transform(testVal);

One can register custom formats by calling `transformer.registerFormat('formatName', FormatterClass);`
FormatterClass needs to expose an openTag and closeTag method, and will be passed the operation itself
in the constructor.
