import { Song, listedSongs } from './model';
import { ContractPromiseBatch, context, u128 } from 'near-sdk-as';

export function setSong(song: Song): void {
    let storedSong = listedSongs.get(song.id);
    if (storedSong !== null) {
        throw new Error(`a song with ${song.id} already exists`);
    }
    storedSong=Song.fromPayload(song);
    storedSong.timeStamp=context.blockTimestamp;
    //storedSong.owner=context.sender;
    //ContractPromiseBatch.create(song.owner).transfer(context.attachedDeposit);
    listedSongs.set(song.id, storedSong);
}

export function uploadSong(song: Song, uploadPrice:u128): void {
    let storedSong = listedSongs.get(song.id);
    if (storedSong !== null) {
        throw new Error(`a song with ${song.id} already exists`);
    }
    if (uploadPrice.toString() != context.attachedDeposit.toString()) {
        throw new Error("attached deposit should equal to the upload price");
    }
    storedSong=Song.fromPayload(song);
    storedSong.timeStamp=context.blockTimestamp;
    //storedSong.owner=context.sender;
    ContractPromiseBatch.create(song.owner).transfer(context.attachedDeposit);
    listedSongs.set(song.id, storedSong);
}

export function updateSong(song: Song): void {
    let storedSong = listedSongs.get(song.id);
    if (storedSong === null) {
        throw new Error(`song with ${song.id} does not exist`);
    }
    let updateSong = Song.fromPayload(song);
    updateSong.editTimeStamp=context.blockTimestamp;
    //updateSong.owner=storedSong.owner;
    updateSong.location=storedSong.location;
    listedSongs.set(song.id, updateSong);
}

export function getSong(id: string): Song | null {
    return listedSongs.get(id);
}

export function getSongs(): Song[] {
    const transactions= listedSongs.values();
    //sort transactions by descending timeStamp
    transactions.sort((a,b) => (a.timeStamp - b.timeStamp) as i32);
    return transactions;
}

// export function uploadSong(songId: string, uploadPrice: u128): void {
//     const song = getSong(songId);
//     if (song == null) {
//         throw new Error("song not found");
//     }
//     if (uploadPrice != context.attachedDeposit) {
//         throw new Error("attached deposit should equal to the upload price");
//     }
//     ContractPromiseBatch.create(song.owner).transfer(context.attachedDeposit);
//     song.incrementSoldAmount();
//     listedSongs.set(song.id, song);
// }


export function deleteSong(songId: string): void {
    const song = getSong(songId);
    if (song == null) {
        throw new Error("song not found");
    }
    listedSongs.delete(songId);
}


let temp="";
export function getSongsForUser(userId:string): Song[] {
    temp=userId;
    const transactions= listedSongs.values().filter(t=>t.owner===temp);
    //sort transactions by descending timeStamp
    transactions.sort((a,b) => (b.timeStamp - a.timeStamp) as i32);
    return transactions;
}
export function getSongsForCurrentUser(): Song[] {
    const transactions= listedSongs.values().filter(t=>t.owner===context.sender);
    //sort transactions by descending timeStamp
    transactions.sort((a,b) => (b.timeStamp - a.timeStamp) as i32);
    return transactions;
}


