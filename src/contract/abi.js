// local host contract address
//export const TRACKER_ADDRESS = "0x573e32310385B9c3Ef4D74f772A907caa0EfF286";
// ropsten contract address 
export const TRACKER_ADDRESS = "0x934DD5c7ef01259e425C5a0a797AeA9b470A7F4c";

export const TRACKER_ABI = [
  {
    "constant": true,
    "inputs": [],
    "name": "balance",
    "outputs": [
      {
        "internalType": "int256",
        "name": "",
        "type": "int256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "transaction",
    "outputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "transactionDetails",
        "type": "string"
      },
      {
        "internalType": "int64",
        "name": "amount",
        "type": "int64"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "string",
        "name": "desc",
        "type": "string"
      },
      {
        "internalType": "int64",
        "name": "amount",
        "type": "int64"
      }
    ],
    "name": "addTransaction",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getTransactionCount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
]