import { Registry } from './registry';

export function registerNodeType(type, nodeType) {
  Registry[type] = nodeType;
}

export function getNodeType(type) {
  return Registry[type];
}

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

registerNodeType('bold', BoldNode);
registerNodeType('italic', ItalicNode);
registerNodeType('link', LinkNode);
registerNodeType('listItem', ListItemNode);
registerNodeType('ordered', OrderedListNode);
registerNodeType('paragraph', ParagraphNode);
registerNodeType('text', TextNode);
registerNodeType('TreeNode', TreeNode);
registerNodeType('RootNode', RootNode);
registerNodeType('bullet', UnorderedListNode);

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
  const retVal = [];
  let currentBlock = null;
  tokens.forEach((token) => {
    if (currentBlock === null) {
      currentBlock = {type: 'unknown', children: []};
    }
    if (token.type === 'linebreak') {
      if (token.attributes.list === 'bullet') {
        currentBlock.type = 'bullet';
      } else if (token.attributes.list === 'ordered') {
        currentBlock.type = 'ordered';
      } else {
        currentBlock.type = 'paragraph';
      }
      retVal.push(currentBlock);
      currentBlock = null;
    } else {
      currentBlock.children.push(token);
    }
  });
  return retVal;
}

function assembleLines(blocks) {
  const retVal = new RootNode();
  blocks.forEach((block) => {
    const blockNode = new Registry[block.type](block);
    retVal.absorb(blockNode);
    block.children.forEach((child) => {
      blockNode.appendChild(TreeNode.build(child));
    });
  });
  return retVal;
}

export function transform(delta) {
  return assembleLines(createBlocks(tokenize(delta.ops))).toHTML();
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
      {insert: 'bold multiline\nvalue', attributes: {bold: true}},
      {insert: 'italic value', attributes: {italic: true}},
      {insert: 'bold-italic value', attributes: {bold: true, italic: true}},
      {insert: '\n'},
    ],
  };
  console.log(transform(testVal));
}
