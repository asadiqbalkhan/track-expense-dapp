// SPDX-License-Identifier: MIT
//@Author: Asad Iqbal
pragma solidity >=0.4.22 <0.9.0;

contract Tracker {
    // initial balance 
    int public balance = 10;
    // store transactions in an array(struct)
    Transaction[] public transaction;

    struct Transaction {
        address owner;
        string transactionDetails;
        int64 amount;
    }
    // function to add transactions onto the blockchain
    function addTransaction(string memory desc, int64 amount) public {
        Transaction memory storedTrans = Transaction(msg.sender, desc, amount);
        transaction.push(storedTrans);
        balance += amount;
    }
    //function get available transactions in the arrary
    function getTransactionCount() public view returns(uint){
        return transaction.length;
    }
}