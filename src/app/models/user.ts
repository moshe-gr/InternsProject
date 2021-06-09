import { WebcamImage } from "ngx-webcam";
import { InternInfo } from "./intern-info";

export interface User {
    _id?: string,
    id: number,
    first_name: string,
    last_name: string,
    passport: number,
    telephone: string,
    rolNumber: number,
    pic?: WebcamImage,
    intern_info?: InternInfo
}
