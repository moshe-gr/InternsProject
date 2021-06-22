import { User } from "./user.model";

export interface Supervisor {
    _id?: string
    medical_institution: string,
    students?: [],
    user?: User | string
}
