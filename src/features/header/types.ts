export interface Metadata {
        type?:string;   
        bucket: string;
        generation: string;
        metageneration: string;
        fullPath: string;
        name: string;
        size: number;
        timeCreated: string;
        updated: string;
        md5Hash?: string | undefined;
        contentDisposition?: string | undefined;
        contentEncoding?: string | undefined;
        contentType?: string | undefined;
    }

    export interface UserObject {
        name: string|undefined
        photoURL:string|undefined
        id:string|undefined
        email:string|undefined
    }
    
    export interface Fields {
        [field : string] : string
    }