import { PersistentUnorderedMap, context } from "near-sdk-as";

@nearBindgen
export class Song {
    id: string;
    name: string;
    artist: string;
    image: string;
    location: string;
    tags: string[] = [];
    owner: string;
    plays: u32;
    isPaid: bool;
    isUploaded: bool;
    timeStamp: u64;
    editTimeStamp: u64;
    public static fromPayload(payload: Song): Song {
        const product = new Song();
        product.id = payload.id;
        product.name = payload.name;
        product.artist = payload.artist;
        product.image = payload.image;
        product.location = payload.location;
        product.tags = payload.tags;
        product.plays = payload.plays;
        product.isPaid = payload.isPaid;
        product.isUploaded = payload.isUploaded;
        product.editTimeStamp = payload.editTimeStamp;
        product.timeStamp = payload.timeStamp;
        product.owner = context.sender;
        return product;
    }
    public incrementSoldAmount(): void {
        this.plays = this.plays + 1;
    }
}

export const listedSongs = new PersistentUnorderedMap<string, Song>("LISTED_SONGS");