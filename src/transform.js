import { Registry } from './registry';

import { BoldFormat } from './bold';

Registry.bold = BoldFormat;

export function registerFormat(type, formatter) {
  Registry[type] = formatter;
}

function tokenize(ops) {
  const retVal = [];
  ops.forEach((op) => {
    if (typeof op.insert !== 'string') {
      retVal.push({
        type: 'text',
        contents: op.insert,
        attributes: op.attributes || {},
      });
    } else if (op.insert === '\n') {
      retVal.push({
        type: 'linebreak',
        attributes: op.attributes || {},
      });
    } else if (op.insert.indexOf('\n') < 0) {
      retVal.push({
        type: 'text',
        contents: op.insert,
        attributes: op.attributes || {},
      });
    } else {
      op.insert.split('\n').forEach((subText, i, ary) => {
        if (subText === '') {
          return; // end of line was \n
        }
        retVal.push({
          type: 'text',
          contents: subText,
          attributes: op.attributes || {},
        });
        if (i < (ary.length - 1)) {
          retVal.push({
            type: 'linebreak',
            attributes: {}, // mid-insert linebreaks have no line-level styling
          });
        }
      });
    }
  });
  return retVal;
}

function assembleLines(tokens) {
  const retVal = [];
  let currentLine = [];
  tokens.forEach((token) => {
    if (token.type === 'linebreak') {
      retVal.push({
        lineAttributes: token.attributes,
        elements: currentLine,
      });
      currentLine = [];
    } else {
      currentLine.push(token);
    }
  });
  if (currentLine.length) {
    retVal.push({
      lineAttributes: {},
      elements: currentLine,
    });
  }
  return retVal;
}


export function testDeltas() {
  const testVal = {
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
  console.log(JSON.stringify(assembleLines(tokenize(testVal.ops)), null, 2));
}

testDeltas();
