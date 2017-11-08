export interface BasicToken {
    type: string;
    attributes: {
        [key: string]: any;
    };
}
export interface TextToken extends BasicToken {
    type: 'text';
    contents: string;
}
export interface LinebreakToken extends BasicToken {
    type: 'linebreak';
}
export interface ImageToken extends BasicToken {
    type: 'image';
    contents: {
        image: string;
    };
}
export declare type Token = TextToken | LinebreakToken | ImageToken;
export declare function tokenize(ops: any): Token[];
