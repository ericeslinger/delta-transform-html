import { BlockNode } from './block';
import { Token } from '../tokenize';
export declare class HeaderNode extends BlockNode {
    openTag(): string;
    closeTag(): string;
    absorb(child: any): any;
    static matches(token: Token): any;
}
