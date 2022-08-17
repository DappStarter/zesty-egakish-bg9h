require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney clog tackle venture stone recipe mad honey inflict dose army genuine'; 
let testAccounts = [
"0x113cdfcebe27187248aa543b862ab5dafbc0e374e78c30fbd06b45c2297d6a35",
"0x4700885dc6d5a75ff8d8e009908d7796b1918e0d1e9f42faffd09598bb23de8d",
"0xcf70b09bb294359238899fa5eb64e621efdbd53acfa2b782803ac9b0fd0af448",
"0x68f7020b28721f9f706e963b767603fb3cfebdb54508dd43a96cb8aba9a67f69",
"0xc24b0413ac008e046fa164fa7c9848172fe1229dfcf0d2b500ec8033f8da2a62",
"0x8e7d789be5cb7f4d88529eb0fe0aecd2de4f15d29e1be1480ff0a1fd88d3ba81",
"0x46ee08a92c4b8264cf3c5c7d8e979a3704bfcd30ba98de9995f3443b2e542fc6",
"0xa82f663f408e71b7da5188f579e42b8900df30d144bf1aa329c708da7c484413",
"0x1fbdfda6d832dc85875da7dd0ab7cde6fc2c3ccc98260490529f3d077a74fff1",
"0x6445135258e04259c323c26cb6f9b043b618757019e7f87bb9e29f674c127e8b"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

