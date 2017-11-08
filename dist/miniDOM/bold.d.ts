import { SpanNode } from './span';
import { Token } from '../tokenize';
export declare class BoldNode extends SpanNode {
    openTag(): string;
    closeTag(): string;
    static matches(token: Token): any;
}
