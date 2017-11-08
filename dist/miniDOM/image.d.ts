import { SpanNode } from './span';
import { Token } from '../tokenize';
export declare class ImageNode extends SpanNode {
    imageUrl: string;
    constructor(opts?: any);
    plainText(): string;
    isLeaf(): boolean;
    openTag(): string;
    closeTag(): string;
    static matches(token: Token): boolean;
}
