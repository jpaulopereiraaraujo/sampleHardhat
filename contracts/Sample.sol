//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract Sample {

    //
    string public constant hello = "Hello World";
    address private owner;


    modifier isOwner() {
        require(address(msg.sender) == owner, "You are not the owner!");

        _;
    }

    constructor () {
        owner = msg.sender;
    }

    function getOwner() public view isOwner returns(address) {
        return address(owner);
    }

    function sayHello() public pure returns(string memory) {
        
        return hello;
    }
}