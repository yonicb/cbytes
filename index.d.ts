export interface More {
    [key: string]: any;
}
export interface Units {
    size: any;
    format: any;
}

export interface Options extends More {
    decimals?: number;
    separator?: string;
}
export interface FormatToObjectReturn {
    unit: string | null | undefined;
    size: number | null | undefined;
    format: string | null | undefined;
}
// tslint:disable-next-line: no-empty-interface
export interface ObjectToFormat extends FormatToObjectReturn { }

export interface ObjectToFormatOptions {
    separator: string;
}
export declare function toString(val: number): string
export declare function toNumber(val: string): number
export declare function formatToObject(format: string): FormatToObjectReturn
export declare function objectToFormat(obj: ObjectToFormat, options?: ObjectToFormatOptions): ObjectToFormatOptions
export declare function sizeToObject(size: number): FormatToObjectReturn
declare function cbytes(val: number | string, options?: Options): any
export default cbytes;