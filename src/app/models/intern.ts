import { WebcamImage } from "ngx-webcam";

export interface Intern {
    id: number,
    firstName: string,
    surName: string,
    passport: number,
    telephone: string,
    pic?: WebcamImage
}
