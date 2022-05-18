# halilu_test


Write a simple API wrapper for NEAR's  testnet API in one of C#. You should then build a simple music streaming app using the API you built. Please only use Royalty Free music. You can find some [here](https://pixabay.com/music/) and [here](https://www.bensound.com/).

You should write tests for both the API and the phot sharing app. You should also include setup instructions for both the API and the app.

# Resources
- [NEAR RPC Endpoints](https://docs.near.org/docs/api/rpc)

- [Arweave Docs](https://docs.arweave.org/)

# Note 
You would be paid for successfully completing the assignment. In receiving the payment, you would be giving up all rights to the work. 



# Near API 

## Description

This service runs my account using my key to perform certain tasks server side. This includes things like checking balances (not just for my account, but for any account) as well as making transactions on the Music share app I was tasked with building. It is a node.js express service that uses NEAR's javascript API.

As the Near API is the priority for now, I will be focusing on just that for now.

## Install

The Near API Folder is located [here](https://github.com/CommandLineHQ/halilu_test/tree/main/music-server-js/near-api)

You can run the project folder it is located [in](https://github.com/CommandLineHQ/halilu_test/tree/main/music-server-js) as a Node.js service. After downloading the folder, run `npm install` in the folder to install dependencies locally, then `npm run start` to run the project. The service should then start on your localhost port 3001 (ie address should thus look like http://localhost:3001). You can then proceed to test the services using Postman.

## Available services

1. **/near/account-details**

GET

*Parameters* - 

accountId - optional

*Description* - If the account id is given, then returns details of the given account id, else returns details of the account running on the server (ie my account)

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

songId - id of song to delete

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
You should also make sure to add the header 'Content-Type : application/json'

*Description* - Uploads the song given by the post

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
You should also make sure to add the header 'Content-Type : application/json'

*Description* - Updates the song given by the post









