import { v4 as uuid4 } from "uuid";
//import { parseNearAmount } from "near-api-js/lib/utils/format";

//const GAS = 100000000000000;
const apiBaseUrl = "http://localhost:3001/";


//old name = createSong
export async function uploadSong(song) {
  song.id = uuid4();
  song.isUploaded=true;
    song.isPaid=true;
    song.owner=window.accountId;
    let away=JSON.stringify(song);
    away="{\"song\":"+away+"}";
  //song.price = parseNearAmount(song.price + "");
  var res=await fetch(apiBaseUrl + "near/songs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
      },
      body: away
  });
  var response= await res.json();
  return response;
}

// export function uploadSong(song) {
//     song.id = uuid4();
//     song.isUploaded=true;
//       song.isPaid=true;
//     return window.contract.uploadSong({ song:song, uploadPrice: parseNearAmount("0.01")});
//   }

  export async function editSong(song) {
    //song.price = parseNearAmount(song.price + "");
    song.isUploaded=true;
    song.isPaid=true;
    let away=JSON.stringify(song);
    away="{\"song\":"+away+"}";
    debugger;
    var res=await fetch(apiBaseUrl + "near/songs", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
        },
        body: away
    });
    var response= await res.json();
    return response;
  }

export async function getSongs() {
  //debugger;
  var res= await fetch(apiBaseUrl + "near/songList", {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
      },
  });
  var songs= await res.json();
  return songs;
}


  export async function deleteSong(id) {
      debugger;
      var res= await fetch(apiBaseUrl + "near/song?songId="+id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
      },
  });
  var res= await res.json();
  return res;
  }