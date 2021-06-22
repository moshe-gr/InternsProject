import { InternInfo } from "./intern-info.model";
import { Supervisor } from "./supervisor.model";

export interface User {
    _id?: string,
    id: number,
    first_name: string,
    last_name: string,
    passport: number,
    telephone: string,
    role?: string,
    role_number: number,
    pic?: string,
    more_info?: InternInfo | Supervisor | any
}