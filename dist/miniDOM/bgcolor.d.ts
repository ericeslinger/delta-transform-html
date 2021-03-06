import { SpanNode } from './span';
import { Token } from '../tokenize';
export declare class BackgroundColorNode extends SpanNode {
    openTag(): string;
    closeTag(): string;
    static matches(token: Token): any;
}
