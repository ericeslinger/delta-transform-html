import { SpanNode } from './span';
import { Token } from '../tokenize';
export declare class TextNode extends SpanNode {
    unescapedContents: string;
    constructor(opts?: any);
    readonly contents: any;
    plainText(): string;
    openTag(): string;
    closeTag(): string;
    appendChild(): void;
    isLeaf(): boolean;
    absorb(child: any): any;
    escape(contents: any): any;
    static matches(token: Token): boolean;
}
