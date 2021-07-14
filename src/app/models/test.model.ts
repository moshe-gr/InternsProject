import { User } from "./user.model";

export interface TestModel {
    _id?: string
    supervisor?: User | any,
    name: string,
    task: string,
    modified?: number,
    file_url: string
}