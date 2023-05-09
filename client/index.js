const axios = require('axios');
const niceList = require('../utils/niceList.json');
const MerkleTree = require('../utils/MerkleTree');

const serverUrl = 'http://localhost:1225';
const merkleTree = new MerkleTree(niceList);

async function main() {
  // TODO: how do we prove to the server we're on the nice list? 
  const leaf = 'Melli Tiara';
  const index = niceList.findIndex(n => n === leaf);
  const proof = merkleTree.getProof(index);

  const { data: gift } = await axios.post(`${serverUrl}/gift`, {
    // TODO: add request body parameters here!
    proof,
    leaf
  });

  console.log({ gift });
}

main();