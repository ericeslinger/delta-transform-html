import * as Reg from './registry';

export const Registry = Reg;

import BoldNode from './miniDOM/bold';
import ItalicNode from './miniDOM/italic';
import LinkNode from './miniDOM/link';
import ListItemNode from './miniDOM/listItem';
import OrderedListNode from './miniDOM/orderedList';
import ParagraphNode from './miniDOM/paragraph';
import TextNode from './miniDOM/text';
import TreeNode from './miniDOM/treeNode';
import RootNode from './miniDOM/root';
import UnorderedListNode from './miniDOM/unorderedList';
import HeaderNode from './miniDOM/header';
import UnderlineNode from './miniDOM/underline';
import StrikethroughNode from './miniDOM/strikethrough';
import ColorNode from './miniDOM/color';
import BackgroundColorNode from './miniDOM/bgcolor';
import SuperscriptNode from './miniDOM/superscript';
import SubscriptNode from './miniDOM/subscript';
import SpanNode from './miniDOM/span';
import BlockNode from './miniDOM/block';
import ImageNode from './miniDOM/image';

Registry.add('bold', BoldNode);
Registry.add('italic', ItalicNode);
Registry.add('link', LinkNode);
Registry.add('listItem', ListItemNode);
Registry.add('ordered', OrderedListNode);
Registry.add('paragraph', ParagraphNode);
Registry.add('text', TextNode);
Registry.add('TreeNode', TreeNode);
Registry.add('RootNode', RootNode);
Registry.add('bullet', UnorderedListNode);
Registry.add('header', HeaderNode);
Registry.add('underline', UnderlineNode);
Registry.add('strikethrough', StrikethroughNode);
Registry.add('color', ColorNode);
Registry.add('bgcolor', BackgroundColorNode);
Registry.add('subscript', SuperscriptNode);
Registry.add('superscript', SubscriptNode);
Registry.add('SpanNode', SpanNode);
Registry.add('BlockNode', BlockNode);
Registry.add('image', ImageNode);

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

function createBlocks(tokens) {
  const retVal = new RootNode();
  let childList = [];
  tokens.forEach((token) => {
    if (token.type === 'linebreak') {
      const currentBlock = new (Registry.listFormats().filter((f) => f.matches(token))[0])(token);
      childList.forEach((child) => currentBlock.appendChild(TreeNode.build(child)));
      retVal.absorb(currentBlock);
      childList = [];
    } else {
      childList.push(token);
    }
  });
  return retVal;
}

// function assembleLines(blocks) {
//   blocks.forEach((block) => {
//     const blockNode = new block.Type(block); // eslint-disable-line new-cap
//     retVal.absorb(blockNode);
//     block.children.forEach((child) => {
//       blockNode.appendChild(TreeNode.build(child));
//     });
//   });
//   return retVal;
// }

export function transform(delta) {
  return createBlocks(tokenize(delta.ops)).toHTML();
}

export function testDeltas() {
  const testVal = {
    ops: [
      {insert: 'multiline \n value'},
      {insert: '\n'},
      {insert: 'bulleted list one', attributes: {link: 'linkTarget'}},
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
      {insert: 'header two'},
      {insert: '\n', attributes: {header: 2}},
      {insert: 'underlined header one', attributes: {underline: true}},
      {insert: '\n', attributes: {header: 1}},
      {insert: 'red', attributes: {color: 'red'}},
      {insert: 'bgred', attributes: {bg: 'red'}},
      {insert: 'strikethru', attributes: {strike: true}},
      {insert: '\n'},
      {insert: {image: 'IMAGEURL'}},
      {insert: 'escaped HTML & < > " \' &'},
      {insert: '\n'},
      {insert: 'going NUTS', attributes: {
        italic: true,
        bold: true,
        sub: true,
        super: true,
        bg: '#000000',
        color: '#ffffff',
        strike: true,
        underline: true,
      }},
      {insert: '\n'},
      {insert: 'bold multiline\nvalue', attributes: {bold: true}},
      {insert: 'italic value', attributes: {italic: true}},
      {insert: 'bold-italic value', attributes: {bold: true, italic: true}},
      {insert: '\n'},
    ],
  };
  console.log('testing uniqueness on sort keys');
  Registry.checkPriorities();
  console.log(transform(testVal));
}
