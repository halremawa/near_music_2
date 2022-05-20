# Near API 

## Description

This service runs my account using my key to perform certain tasks server side. This includes stuff like checking balances (not just for my account, but for any account) as well as making transactions on the Music share app I was tasked with building. It is a node.js express service that uses NEAR's javascript API.


## Install


You can run the project folder as a Node.js service. After downloading the repo, run `npm install` in the "music-server-js" folder to install dependencies locally. You can then run `npm run start` to start the project. The service should have started on your localhost port 3001 (ie address should thus look like http://localhost:3001). You can then proceed to test the services using Postman.

## Available endpoints

1. **/near/account-details**

GET

*Parameters* - 

accountId - optional

*Description* - If the account id is given then returns details of the given account id, else returns details of the account running on the server (ie my account)

2. **/near/account-balance**

GET

*Parameters* - 

accountId - optional

*Description* - If the account id is given, then returns balance of the given account id, else returns balance of the account running on the server (ie my account)

3. **/near/send-token**

GET

*parameters* 

amount - amount to be sent

to - account id of wallet to be sent to

*Description* - Sends tokens from my testnet account to the designated wallet



### Music-share marketplace specific services

These endpoints perform tasks on the music share contract using my account


4. **/near/songlist**

GET

*Description* - Retrieves a list of all songs stored by contract

5. **/near/songs**

GET

*parameters* 

songId - id of song to view

*Description* - Gets the song with the id supplied

6. **/near/songs**

DELETE

*parameters* 

songId - id of song to delete (this parameter should structured like so - */near/songs/{songId}*)

*Description* - Deletes song with supplied id

7. **/near/songs**

POST

*parameters* 

song - this should be part of the body, as raw. The body should look like this
```
{
  "song": {
    "id": "10",
    "name": "no",
    "image": "nono",
    "owner": "halremawa.testnet",
    "artist": "finals",
    "location": "nonono"
  }
}
```
You should also make sure to add the header 'Content-Type : application/json' to the request

*Description* - Adds the song given by the post

8. **/near/songs**

PUT

*parameters* 

song - this should be part of the body, as raw. The body should look like this
```
{
  "song": {
    "id": "10",
    "name": "no",
    "image": "nono",
    "owner": "halremawa.testnet",
    "artist": "finals",
    "location": "nonono"
  }
}
```
You should also make sure to add the header 'Content-Type : application/json' to the request

*Description* - Updates the song given by the post


# Arweave API 

This service also handles uploads to the arweave network using my account. The services are all in the arweave-api folder.









