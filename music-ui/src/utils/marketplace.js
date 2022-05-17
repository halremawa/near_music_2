import { v4 as uuid4 } from "uuid";
import { parseNearAmount } from "near-api-js/lib/utils/format";

const GAS = 100000000000000;

export function createSong(song) {
  song.id = uuid4();
  song.isUploaded=true;
    song.isPaid=true;
  //song.price = parseNearAmount(song.price + "");
  return window.contract.setSong({ song });
}

export function uploadSong(song) {
    song.id = uuid4();
    song.isUploaded=true;
      song.isPaid=true;
    return window.contract.uploadSong({ song:song, uploadPrice: parseNearAmount("0.01")});
  }

  export function editSong(song) {
    //song.price = parseNearAmount(song.price + "");
    song.isUploaded=true;
    song.isPaid=true;
    debugger;
    return window.contract.updateSong({ song });
  }

export function getSongs() {
  return window.contract.getSongs();
}


  export async function deleteSong(id) {
      //debugger;
    await window.contract.deleteSong({ songId: id });
  }