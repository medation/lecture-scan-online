export class MangaModel {

    id: string;
    title: string;

    constructor() {
    }

    public static isNull(manga: MangaModel): boolean {
        return manga.title === null;
    }
}
