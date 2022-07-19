# FullStack Notes DApps (Decentralized Application)
Complete Full Stack Notes DApp (Decentralized Application) using solidity language for Smart Contract, hardhat for Dev Enviroment, and react.js library using vite for frontend.

_Smart Contract Deployed on **Rinkeby Test Network**_ -> 0xE23f40A669C6A74B1e3de431d31fEfB5Efb18849


<a href="https://ibb.co/ZKhw4zh"><img src="https://i.ibb.co/Qn6qSv6/Screenshot-122.png" alt="Screenshot-122" border="0"></a>


## Functionalities :-
 - **Add Notes** which is stored in blockchain.
 - **Get Notes** of perticular user.
 - Delete Note (Used soft delete).
 - Good User Interface




## How to Setup in your local enviroment :-

### Frontend 
    1. cd Frontend
    2. yarn install
    3. yarn run dev


### Blockchain
    1. cd Smart-Contract
    2. yarn install
    3. setup env for rinkeby test network or you can use localhost.
    4. yarn hardhat test
    5. yarn hardhat deploy --network localhost
    
    
    
## Technologies/Frameworks Used :-

### Frontend
1. React.js (Using Vite).
2. Tailwind CSS (For styling).
3. ts-particles (for background animations).
4. **ethers.js** for Web3 integration.
5. Fleek IPFS (For deploying frontend)

## Blockchain
1. **Solidity** (To develop Smart Contract)
2. Javascript (For deploying scripts)
3. **Chai** (For testing Smart Contract)
4. Rinkeby (Test network)
5. Hardhat
6. ethers
