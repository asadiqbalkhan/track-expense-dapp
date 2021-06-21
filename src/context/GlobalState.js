import React, { createContext, useReducer, useEffect} from 'react';
import AppReducer from './AppReducer';
import Web3 from 'web3';
import { TRACKER_ABI, TRACKER_ADDRESS } from '../contract/abi';

// Initial state
const initialState = {
    transactions: [],
    web3: null,
    contract: null,
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
   
    useEffect(() => {
        loadBlockchainData();
    }, []);

    // this function loads web3 in the browser and blockchain data (accounts, owner , methods etc)
    async function loadBlockchainData(){
        try {
            const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
            await Web3.givenProvider.enable();
            //call setups for web3 and contract
            web3Setup(web3);
            console.log("Web3 successfully injected in browser");
            const contract = new web3.eth.Contract(TRACKER_ABI, TRACKER_ADDRESS);
            contractSetup(contract);
            console.log("contract setup successful = ", contract);
            let getTransactionCount = await contract.methods.getTransactionCount().call();
            console.log("transactions performed = ", getTransactionCount);
            // loop through available transactions to instantiate object and add it in the array
            for(var i = 0 ; i < getTransactionCount; i++){
                const{amount, transactionDetails, owner} = await contract.methods.transaction(i).call();
                let transactionObject = {
                    amount: parseInt(amount),
                    transactionDetails,
                    owner
                }
                console.log("transactions in object", transactionObject);
                // add obj in transaction array
                addTransaction(transactionObject);
            }
            
        } catch(e){
            console.log("Web3 injection unsuccessful", e);
        }
    }
    // actions 
    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    async function asyncAddTransaction(transaction){
        const {web3, contract} = state;
        const account = await web3.eth.getAccounts();
        console.log("before transaction");
        const receipt = await contract.methods.addTransaction(transaction.transactionDetails, transaction.amount).send({from: account[0]});
        addTransaction(transaction);
    }

    function addTransaction(transaction){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }
    function web3Setup(web3){
        dispatch({
            type: 'SETUP_WEB3',
            payload: web3
        });
    }
    function contractSetup(contract){
        dispatch({
            type: 'SETUP_CONTRACT',
            payload: contract
        });
    }

    return (
    <GlobalContext.Provider value={{transactions:state.transactions,
                                     deleteTransaction,
                                     asyncAddTransaction,
                                      addTransaction,
                                      web3: state.web3,
                                      contract: state.contract
                                      }}>
        {children}
    </GlobalContext.Provider>);
    
}
