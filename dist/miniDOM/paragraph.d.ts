import { BlockNode } from './block';
import { Token } from '../tokenize';
export declare class ParagraphNode extends BlockNode {
    openTag(): string;
    closeTag(): string;
    absorb(child: any): any;
    toHTMLAsync(indentLevel?: number): Promise<string>;
    toHTML(indentLevel?: number): any;
    static matches(token: Token): boolean;
}
