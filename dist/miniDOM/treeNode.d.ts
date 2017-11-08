import { Token } from '../tokenize';
export interface TreeAttributes {
}
export declare class TreeNode {
    static priority: number;
    children: TreeNode[];
    attributes: any;
    type: string;
    contents: string;
    level: 'span' | 'block';
    promisePlainContents?: () => Promise<string>;
    constructor(opts?: {
        attributes?: any;
    });
    dfsTraverse(): TreeNode[];
    openTag(): string;
    closeTag(): string;
    promiseContents(): Promise<string>;
    toHTMLAsync(indentLevel?: number): any;
    plainTextAsync(): any;
    plainText(): any;
    toHTML(indentLevel?: number): any;
    isLeaf(): boolean;
    appendChild(child: any): void;
    absorb(child: any): any;
    toJSON(): {
        type: string;
        level: "span" | "block";
        children: TreeNode[];
        attributes: any;
        contents: string;
    };
    readonly priority: any;
    static matches(token: Token): boolean;
}
