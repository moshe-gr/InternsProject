import { EmailValidator } from "@angular/forms";
import { InternInfo } from "./intern-info.model";
import { Supervisor } from "./supervisor.model";

export interface User {
    _id?: string,
    email: string,
    first_name: string,
    last_name: string,
    passport: string,
    telephone: string,
    role?: string,
    role_number: number,
    pic?: string,
    more_info?: InternInfo | Supervisor | any
}