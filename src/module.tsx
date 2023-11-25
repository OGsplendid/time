export interface IListItem {
    url: string,
    date: string,
}

export interface IList {
    list: IListItem[],
}

export type TDate = {
    date: string,
}
