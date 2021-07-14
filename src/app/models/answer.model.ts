import { TestModel } from "./test.model";
import { User } from "./user.model";

export interface AnswerModel {
    _id?: string
    intern?: User | any,
    test?: TestModel,
    file_url?: string,
    result?: number,
    date?: number
}