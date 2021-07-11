import { User } from "./user.model";

export interface TestModel {
    _id?: string
    supervisor?: User
    tasks?: {
        name: string,
        task: string,
        modified: number,
        file_url: string
    }[]
}