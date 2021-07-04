export interface TestModel {
    tasks?: {
        name: string,
        task: string,
        modified: Date,
        file_url: string
    }[]
    done?: {
        intern: string,
        file_url: string,
        result: number,
        date: Date
    }[]
}
