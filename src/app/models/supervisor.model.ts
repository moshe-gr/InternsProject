import { AnswerModel } from "./answer.model";
import { InternInfo } from "./intern-info.model";
import { TestModel } from "./test.model";
import { User } from "./user.model";

export interface Supervisor {
    _id?: string,
    medical_institution: string,
    students?: InternInfo[] | string[],
    user?: User | string,
    tasks?: TestModel | string,
    done?: AnswerModel[] | string[]
}
