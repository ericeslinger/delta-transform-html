import * as Reg from './operations/registry';

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

import { tokenize as _tokenize } from './operations/tokenize';
import { blockize as _blockize } from './operations/blockize';

export const tokenize = _tokenize;
export const blockize = _blockize;

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

export function transform(delta) {
  return blockize(tokenize(delta.ops)).toHTML();
}

export function transformAsync(delta) {
  return blockize(tokenize(delta.ops)).toHTMLAsync();
}

export function plainText(delta) {
  return blockize(tokenize(delta.ops)).plainText();
}

export function plainTextAsync(delta) {
  return blockize(tokenize(delta.ops)).plainTextAsync();
}
