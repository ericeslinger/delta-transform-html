import { TreeNode } from './treeNode';
export declare class ListItemNode extends TreeNode {
    openTag(): string;
    closeTag(): string;
    absorb(child: any): any;
    plainTextAsync(): any;
    plainText(): string;
    static matches(token?: {}): boolean;
}
