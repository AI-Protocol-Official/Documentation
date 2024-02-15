# How can I convert my iNFT into a DPT?
Any iNFT can be converted into a DPT using AI Protocol smart contracts. To do so you must have ownership of that iNFT

# Instructions
## Option 1: Using Etherscan

1. Open https://etherscan.io/address/0xABA615044d5640bd151A1B0bdac1C04806AF1AD5#writeProxyContract#F3 and fill in the details for function 3. `deploySharesContractPaused (0x2b30a5d7)`. Format
    ```
    _implementationType (uint8): 0 (This will be zero for every DPT)
    _sharesSubject (tuple): ["collection_address","tokenId"] eg: ["0xce69a87c02baa8c5f17ed7eb8b1c2657afc2e1af","7"]
    ```
2. Connect your wallet using **Connect Wallet** button
3. Click **Write** and approve the transaction in MetaMask

## Option 2: Using Nodejs
## Setup the repo locally
```bash
# Clone the repo
git clone https://github.com/AI-Protocol-Official/Documentation.git

# Move to working directory
cd guides/convert-inft-to-dpt

# Install dependencies
npm install
```

## Setup the environment variables

```bash
# Create a environment variables file
cp .env.example .env

# Open .env file in a editor and add the following variables

PRIVATE_KEY="your wallet private key which owns the iNFT"

# rpc url of ethereum network
RPC_URL="https://cloudflare-eth.com"

# Add your iNFT details
# iNFT collection address on Ethereum
NFT_COLLECTION_ADDRESS="0xce69a87c02baa8c5f17ed7eb8b1c2657afc2e1af"

# The wallet you previously specified must own this iNFT

NFT_TOKEN_ID="iNFT token id"
```


## Deploy your DPT

```bash
# Now that we all setup. Run this to convert your iNFT into DPT
npm run deploy
```

Hurray you have just created a DPT with your iNFT 🥳