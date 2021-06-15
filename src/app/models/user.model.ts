import { InternInfo } from "./intern-info.model";

export interface User {
    _id?: string,
    id: number,
    first_name: string,
    last_name: string,
    passport: number,
    telephone: string,
    role_number: number,
    pic?: { imageAsDataUrl: string },
    intern_info?: InternInfo
}