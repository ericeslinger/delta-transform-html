import { TreeNode } from './treeNode';
export declare class BlockNode extends TreeNode {
    constructor(opts: any);
    plainTextAsync(): Promise<string>;
    plainText(): string;
    appendChild(child: any): void;
}
