
export interface InternInfo {
    _id?: string,
    personal?: {
        age: number,
        country: string,
        city: string,
        gradgYear: number,
        acdInst: string
    },
    professional?: {
        medInst: string,
        residency: string,
        yearInResidency: number,
        department: string
    }
}