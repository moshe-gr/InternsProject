import { User } from "./user.model";

export interface InternInfo {
    _id?: string,
    user?: User | string,
    personal?: {
        age: number,
        country: string,
        city: string,
        graduation_year: number,
        academic_institution: string
    },
    professional?: {
        medical_institution: string,
        residency: string,
        year_in_residency: number,
        department: string
    },
    tasks?: {
        done?: {
            file_url: string,
            result: number,
            date: Date
        }[],
        todo?: {
            name: string,
            task: string,
            modified: Date,
            file_url: string
        }[]
    }
}