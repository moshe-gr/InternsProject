
export interface InternInfo {
    _id?: string,
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
    }
}