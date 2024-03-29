import dotevnv from "dotenv";
import { Contract, JsonRpcProvider, Wallet } from 'ethers';
import invariant from 'tiny-invariant';
import ERC721_ABI from "./abis/ERC721.json";
import KEYS_FACTORY_ABI from "./abis/KeysFactory.json";
dotevnv.config()

// Keys Factory Address Contract Reference: https://github.com/AI-Protocol-Official/ai-protocol-v3-periphery/blob/master/contracts/bonding_curves/SharesFactoryV1.sol
const KEYS_FACTORY_ADDRSS = "0x80f5bcc38b18c0f0a18af3c6fba515c890689342"
const { PRIVATE_KEY, RPC_URL, NFT_COLLECTION_ADDRESS, NFT_TOKEN_ID } = process.env

async function main() {

    invariant(PRIVATE_KEY, "Private key missing")

    invariant(RPC_URL, "RPC_URL missing")

    invariant(NFT_COLLECTION_ADDRESS, "NFT_COLLECTION_ADDRESS is missing")

    invariant(NFT_TOKEN_ID, "NFT_TOKEN_ID is missing")

    // Initialize a provider
    const provider = new JsonRpcProvider(RPC_URL)

    // Initialize a singer wallet
    const wallet = new Wallet(PRIVATE_KEY, provider)
    const account = wallet.getAddress()

    // Initialize NFT Contract
    const nftContract = new Contract(NFT_COLLECTION_ADDRESS, ERC721_ABI, provider)

    // Initialize Keys Factory Contract. Contract Reference: https://github.com/AI-Protocol-Official/ai-protocol-v3-periphery/blob/master/contracts/bonding_curves/SharesFactoryV1.sol
    const keysFactoryContract = new Contract(KEYS_FACTORY_ADDRSS, KEYS_FACTORY_ABI, wallet)

    const nftOwner = await nftContract.ownerOf(NFT_TOKEN_ID)

    // Initialized Wallet should own the NFT
    invariant(nftOwner === account, "You must own the NFT")

    console.log(`Your DPT is being created.....`)

    /**
     * Convert NFT into DPT by calling deploySharesContract of Keys Factory Reference: https://github.com/AI-Protocol-Official/ai-protocol-v3-periphery/blob/master/contracts/bonding_curves/SharesFactoryV1.sol#L459
     * @param implementationType This denotes the underlying currency that will be used to buy and sell keys. 0 = ETH and 1 = ALI
     * @param sharesSubject NFT subject to which the keys contract will be launched.
     */
    const tx = await keysFactoryContract.deploySharesContract(1, {
        tokenAddress: NFT_COLLECTION_ADDRESS,
        tokenId: NFT_TOKEN_ID
    })

    console.log(`Your DPT is created. Transaction: https://basescan.org/tx/${tx.hash}`)

}
main()