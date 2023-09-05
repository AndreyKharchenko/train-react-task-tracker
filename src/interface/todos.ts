export interface ITodo {
    userId: number,
    id: number,
    title: string,
    completed: boolean,
    desc: string,
    startDt: string,
    endDt: string,
    tags: ITag[]
}

export interface ITag {
    text: string,
    type: 'first' | 'second'
}