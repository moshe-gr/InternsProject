import { User } from "./user.model";

export interface TestModel {
    supervisor?: User
    tasks?: {
        name: string,
        task: string,
        modified: Date,
        file_url: string
    }[]
}