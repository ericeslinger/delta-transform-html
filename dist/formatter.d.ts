import * as MiniDOM from './miniDOM';
import { RootNode, TreeNode } from './miniDOM';
export interface TypeRegistry {
    bold?: typeof MiniDOM.BoldNode;
    italic?: typeof MiniDOM.ItalicNode;
    link?: typeof MiniDOM.LinkNode;
    listItem?: typeof MiniDOM.ListItemNode;
    ordered?: typeof MiniDOM.OrderedListNode;
    paragraph?: typeof MiniDOM.ParagraphNode;
    text?: typeof MiniDOM.TextNode;
    TreeNode?: typeof MiniDOM.TreeNode;
    RootNode?: typeof MiniDOM.RootNode;
    bullet?: typeof MiniDOM.UnorderedListNode;
    header?: typeof MiniDOM.HeaderNode;
    underline?: typeof MiniDOM.UnderlineNode;
    strikethrough?: typeof MiniDOM.StrikethroughNode;
    color?: typeof MiniDOM.ColorNode;
    bgcolor?: typeof MiniDOM.BackgroundColorNode;
    subscript?: typeof MiniDOM.SuperscriptNode;
    superscript?: typeof MiniDOM.SubscriptNode;
    SpanNode?: typeof MiniDOM.SpanNode;
    BlockNode?: typeof MiniDOM.BlockNode;
    image?: typeof MiniDOM.ImageNode;
}
export interface FormatOptions {
    rootNode?: string;
    rootClass?: string;
}
export declare class Formatter {
    formats: TypeRegistry;
    formatList: (typeof MiniDOM.TreeNode)[];
    constructor();
    sortRegistry(): void;
    checkPriorities(): void;
    transform(delta: any, opts?: FormatOptions): string;
    build(token: any): TreeNode;
    blockize(tokens: any): RootNode;
    transformAsync(delta: any, opts?: any): Promise<string>;
    plainText(delta: any): any;
    plainTextAsync(delta: any): any;
}
