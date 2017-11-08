import { TreeNode } from './treeNode';
export declare class RootNode extends TreeNode {
    constructor(opts?: {});
    absorb(child: any): any;
    toHTML(): string;
    toHTMLAsync(): Promise<string>;
}
