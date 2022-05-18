const nearAPI = require("near-api-js");

const { keyStores, KeyPair, connect, WalletConnection } = nearAPI;
const DEFAULT_ACCOUNT_ID = "halremawa.testnet";
// creates keyStore from a private key string
// you can define your key here or use an environment variable

let keyStore, keyPair, config, near, default_account, contract;//wallet

const PRIVATE_KEY =
    "ed25519:2cugYUvidWRDcDEvkZ8reDed3Cxytpux4qbmLLptXgUnFDhqsMv1tZZt6qHLyvMU5nT31vChLdsSp8sbZy9bnAbP";

const initParameters = new Promise(async (resolve, reject) => {
    keyStore = new keyStores.InMemoryKeyStore();
    // creates a public / private key pair using the provided private key
    keyPair = KeyPair.fromString(PRIVATE_KEY);
    // adds the keyPair you created to keyStore
    await keyStore.setKey("testnet", "halremawa.testnet", keyPair);


    config = {
        networkId: "testnet",
        keyStore: keyStore,
        nodeUrl: "https://rpc.testnet.near.org",
        walletUrl: "https://wallet.testnet.near.org",
        helperUrl: "https://helper.testnet.near.org",
        explorerUrl: "https://explorer.testnet.near.org",
    };

    // connect to NEAR
    near = await connect(config);

    // create wallet connection
    //wallet = new WalletConnection(near);

    // create default account
    default_account = await near.account(DEFAULT_ACCOUNT_ID);

    contract = new nearAPI.Contract(
        default_account, // the account object that is connecting
        "music.halremawa.testnet",
        {
            // name of contract you're connecting to
            viewMethods: ["getSong", "getSongs", "getSongsForUser", "getSongsForCurrentUser"], // view methods do not change state but usually return a value
            changeMethods: ["setSong", "uploadSong", "updateSong", "deleteSong"], // change methods modify state
            sender: default_account // account object to initialize and sign transactions.
        }
    );

    console.log("Near connected");
    resolve({
        near,
        default_account,
        contract,
        nearAPI
    });
});



exports.nearItems = initParameters;
