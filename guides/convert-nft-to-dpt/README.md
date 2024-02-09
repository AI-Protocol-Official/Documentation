# How can I convert my NFT into a DPT?
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

PRIVATE_KEY=`your wallet private key which owns the nft`

RPC_URL=`rpc url of base network`

# Add you nft details

NFT_COLLECTION_ADDRESS="nft collection address in which you own the nft"

# The wallet you previously specified must own this nft

NFT_TOKEN_ID="nft token id"
```


## Deploy your DPT

```bash
# Now that we all setup. Run this to convert your NFT into DPT
npm run deploy
```

Hurray you have just created a DPT with your NFT 🥳