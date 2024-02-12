# How can I convert my NFT / iNFT into a DPT?
A guide for showcasing how can you convert your existing NFT or (iNFT) into a DPT using AI Protocol smart contracts.

# Instructions

## Setup the repo locally
```bash
# Clone the repo
git clone https://github.com/AI-Protocol-Official/Documentation.git

# Move to working directory
cd guides/convert-nft-to-dpt

# Install dependencies
npm install
```

## Setup the environment variables

```bash
# Create a environment variables file
cp .env.example .env

# Open .env file in a editor and add the following variables

PRIVATE_KEY=`your wallet private key which owns the NFT`

RPC_URL=`rpc url of base network`

# Add you NFT details
# In the case of iNFT the collection address will be 0xce69a87c02baa8c5f17ed7eb8b1c2657afc2e1af on Ethereum

NFT_COLLECTION_ADDRESS="NFT or iNFT collection address in which you own the NFT"

# The wallet you previously specified must own this NFT

NFT_TOKEN_ID="NFT or iNFT token id"
```


## Deploy your DPT

```bash
# Now that we all setup. Run this to convert your NFT into DPT
npm run deploy
```

Hurray you have just created a DPT with your NFT 🥳