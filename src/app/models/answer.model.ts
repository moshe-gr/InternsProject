import { TestModel } from "./test.model";
import { User } from "./user.model";

export interface AnswerModel {
    _id?: string
    intern?: User,
    done?: {
        test?: TestModel['tasks'][0],
        file_url?: string,
        result?: number,
        date?: number
    }[]
}