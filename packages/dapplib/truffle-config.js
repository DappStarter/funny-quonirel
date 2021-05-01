require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid problem oppose venture strike rival sad snake include clock army gasp'; 
let testAccounts = [
"0x15f9c2d447f73024f98aafbdfeb86126d81c5666a4a54291ac13f9c91f1b07a3",
"0xc61e12188393d366f50bc1a694b200b4fc5fc5f6207ffef2a8cee6090e61c9a6",
"0x8cc9b407e5377aa5ad06b400dd9649a1d637c103ff93b43b4ebdc30809eca3b3",
"0x0bf23dcf6ba85a4cf684813062e2f25ff7e45f51a96935eaa4a4c848802120ce",
"0xf9f53703d93ae08d71f95793a1e19b4c17fc1d5ef05a9171c0133fd362727398",
"0xb4ba8e7a18178bf40bcfde9dfb6f4b1c0795950103434f9e8293fbf778c86b0a",
"0x5f42fe5d125105fdad87aad1a8e63aec4bdcb77a47034873201739688e1c2889",
"0x2ebc4aee3cd693599cafcf32399f0fc55e5822ad5bfccb971893272f8b13d799",
"0x8fbc8ca30ffb266ae2c85d475b9315231c20edc934cb95d2889ec3e96f439e1b",
"0x4fbb064506fa4a122ce3af41f3daf40cc603ada6da39ece4b418f0437c9e96d7"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
