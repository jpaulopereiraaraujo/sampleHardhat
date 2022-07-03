const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Sample", function () {
  it("Should return Hello Word", async function () {
    const [owner, wallet1, wallet2] = await ethers.getSigners();
    const Sample = await ethers.getContractFactory("Sample");
    const sample = await Sample.deploy();
    await sample.deployed();
    


    expect(await sample.sayHello()).to.equal("Hello World");

    
  });

  it("Test Owner", async function () {
    const [owner, wallet1, wallet2] = await ethers.getSigners();
    const Sample = await ethers.getContractFactory("Sample");
    const sample = await Sample.deploy();
    await sample.deployed();
    


    expect(await sample.getOwner()).to.equal(owner.address);

    
  });

  it("Test Owner - negative", async function () {
    const [owner, wallet1, wallet2] = await ethers.getSigners();
    const Sample = await ethers.getContractFactory("Sample");
    const sample = await Sample.deploy();
    await sample.deployed();
    

    //Aqui vão 2 exemplos de teste, o connect usa outra carteira e o revertedWith testa se a
    //função está retornando o erro.
    //ps: nesse caso o await é na frente do expect.
    await expect(sample.connect(wallet1).getOwner()).to.be.revertedWith("You are not the owner!");

    
  });



});
