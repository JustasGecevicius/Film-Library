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
    
export interface IconsObject {
    [field: string]: string;
  }