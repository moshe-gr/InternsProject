import { InternInfo } from "./intern-info.model";
import { User } from "./user.model";

export interface Supervisor {
    _id?: string
    medical_institution: string,
    students?: InternInfo[] | string[],
    user?: User | string
}
