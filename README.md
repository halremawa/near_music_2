# halilu_test


Write a simple API wrapper for NEAR's  testnet API in one of C#. You should then build a simple music streaming app using the API you built. Please only use Royalty Free music. You can find some [here](https://pixabay.com/music/) and [here](https://www.bensound.com/).

You should write tests for both the API and the phot sharing app. You should also include setup instructions for both the API and the app.

# Resources
- [NEAR RPC Endpoints](https://docs.near.org/docs/api/rpc)

- [Arweave Docs](https://docs.arweave.org/)

# Note 
You would be paid for successfully completing the assignment. In receiving the payment, you would be giving up all rights to the work. 


# Submission Overview

## Description

This particular project is free for end users. Everything is paid for server side using my own keys. End users need a near testnet account to login, but that is all they need it for (for now, eventually if one wanted to say implement a subscription service then they could pay using that)

NEAR stores all data asides from the music uploads themselves, those are stored on arweave

*Notes on arweave uploads*

Arweave's network can, at times, become unstable, at least enough for timeouts to occur internally in their libraries (the music still gets uploaded usually, but for now the app cannot tell that). When that happens simply reload and try again. Also, even with upload success, it might still take a while for the song to become available, usually I think it is confiming the transactions before it becomes fully available. This shouldn't take more than 2-3 minutes when it occurs though, so just note that immediately after upload, the song might not be immediately playable.

A smoother experience may probably be built (something akin to what the arweave wallet app is like) but that would require more time to build.

## Projects

music-server-js - The javascript node.js service for NEAR and arweave

music-ui - The react frontend

NearCore - .NET core wrapper for NEAR RPC

near-music-contract - The NEAR contract


## Install

Find in each folder please.