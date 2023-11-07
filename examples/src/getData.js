// https://stackoverflow.com/questions/60059121/nodejs-es6-imports-cannot-find-module#comment106219502_60059121
// eslint-disable-next-line import/extensions
import { getInstance } from './instantiation.js';

const myERC725 = getInstance();

const dataAllKeys = await myERC725.getData();
/**
[
  {
    name: 'LSP3Profile',
    key: '0x5ef83ad9559033e6e941db7d7c495acdce616347d28e90c7ce47cbfcfcad3bc5',
    value: {
      verification: {
        method: 'keccak256(utf8)',
        data: '0xd96ff7776660095f661d16010c4349aa7478a9129ce0670f771596a6ff2d864a',
      },
      url: 'ipfs://QmbTmcbp8ZW23vkQrqkasMFqNg2z1iP4e3BCUMz9PKDsSV'
    }
  },
  {
    key: '0x0cfc51aec37c55a4d0b1a65c6255c4bf2fbdf6277f3cc0730c45b828b6db8b47',
    name: 'LSP1UniversalReceiverDelegate',
    value: '0x50A02EF693fF6961A7F9178d1e53CC8BbE1DaD68'
  },
  {
    name: 'LSP3IssuedAssets[]',
    key: '0x3a47ab5bd3a594c3a8995f8fa58d0876c96819ca4516bd76100c92462f2f9dc0',
    value: [
      '0xc444009d38d3046bb0cF81Fa2Cd295ce46A67C78',
      '0x4fEbC3491230571F6e1829E46602e3b110215A2E',
      '0xB92a8DdA288638491AEE5C2a003D4CAbfa47aE3F',
      '0x1e52e7F1707dcda57dD33F003B2311652A465acA',
      '0x0BDA71aA980D37Ea56E8a3784E4c309101DAf3E4',
      '0xfDB4D9C299438B9839e9d04E34B9609C5b56600D',
      '0x081D3F0bff8ae2339cb65113822eEc1510704d5c',
      '0x55C98c6944B7497FaAf4db0386a1aD1E6efF526E',
      '0x90D1a1D68fa23AEEE991220703f1a1C3782e0b35',
      '0xdB5AB19792d9fB61c1Dff57810Fb7C6f839Af8ED'
    ]
  }
]
*/

const dataOneKey = await myERC725.getData('LSP3Profile');
/**
{
  key: '0x5ef83ad9559033e6e941db7d7c495acdce616347d28e90c7ce47cbfcfcad3bc5',
  name: 'LSP3Profile',
  value: {
    verification: {
      method: 'keccak256(utf8)',
      data: '0xd96ff7776660095f661d16010c4349aa7478a9129ce0670f771596a6ff2d864a',
    },
    url: 'ipfs://QmbTmcbp8ZW23vkQrqkasMFqNg2z1iP4e3BCUMz9PKDsSV'
  }
}
*/

const dataManyKeys = await myERC725.getData([
  'LSP3Profile',
  'LSP1UniversalReceiverDelegate',
]);
/**
[
  {
    key: '0x5ef83ad9559033e6e941db7d7c495acdce616347d28e90c7ce47cbfcfcad3bc5',
    name: 'LSP3Profile',
    value: {
      verification: {
        method: 'keccak256(utf8)',
        data: '0xd96ff7776660095f661d16010c4349aa7478a9129ce0670f771596a6ff2d864a',
      },
      url: 'ipfs://QmbTmcbp8ZW23vkQrqkasMFqNg2z1iP4e3BCUMz9PKDsSV'
    }
  },
  {
    key: '0x0cfc51aec37c55a4d0b1a65c6255c4bf2fbdf6277f3cc0730c45b828b6db8b47',
    name: 'LSP1UniversalReceiverDelegate',
    value: '0x50A02EF693fF6961A7F9178d1e53CC8BbE1DaD68'
  }
]
*/

console.log('/*--------------------------------------------/*');
console.log('/* getData - all keys                         /*');
console.log('/*--------------------------------------------/*');
console.log(dataAllKeys);

console.log('/*--------------------------------------------/*');
console.log('/* getData - one key                          /*');
console.log('/*--------------------------------------------/*');
console.log(dataOneKey);

console.log('/*--------------------------------------------/*');
console.log('/* getData - many keys                        /*');
console.log('/*--------------------------------------------/*');
console.log(dataManyKeys);
