import { WebcamImage } from "ngx-webcam";

export interface Intern {
    _id?: string,
    id: number,
    first_name: string,
    last_name: string,
    passport: number,
    telephone: string,
    pic?: WebcamImage,
    personal?: {
        age: number,
        country: string,
        city: string,
        gradgYear: number,
        acdInst: string
    },
    professional?: {
        medInst: string,
        residency: string,
        yearInResidency: number,
        department: string
    }
}
