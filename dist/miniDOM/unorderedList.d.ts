import { BlockNode } from './block';
import { Token } from '../tokenize';
export declare class UnorderedListNode extends BlockNode {
    constructor(opts: any);
    appendChild(node: any): void;
    openTag(): string;
    closeTag(): string;
    absorb(child: any): any;
    static matches(token: Token): boolean;
}
