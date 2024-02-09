import dotevnv from "dotenv";
import { Contract, JsonRpcProvider, Wallet } from 'ethers';
import invariant from 'tiny-invariant';
import ERC721_ABI from "./abis/ERC721.json";
import KEYS_FACTORY_ABI from "./abis/KeysFactory.json";
dotevnv.config()

const KEYS_FACTORY_ADDRSS = "0x63aCBC42e466d29F271c102Bf97A18B52203b308"
const { PRIVATE_KEY, RPC_URL, NFT_COLLECTION_ADDRESS, NFT_TOKEN_ID } = process.env

async function main() {

    invariant(PRIVATE_KEY, "Private key missing")

    invariant(RPC_URL, "RPC_URL missing")

    invariant(NFT_COLLECTION_ADDRESS, "NFT_COLLECTION_ADDRESS is missing")

    invariant(NFT_TOKEN_ID, "NFT_TOKEN_ID is missing")

    const provider = new JsonRpcProvider(RPC_URL)
    const wallet = new Wallet(PRIVATE_KEY, provider)
    const account = wallet.getAddress()
    const nftContract = new Contract(NFT_COLLECTION_ADDRESS, ERC721_ABI, provider)
    const keysFactoryContract = new Contract(KEYS_FACTORY_ADDRSS, KEYS_FACTORY_ABI, wallet)

    const nftOwner = await nftContract.ownerOf(NFT_TOKEN_ID)

    invariant(nftOwner === account, "You must own the NFT")

    console.log(`Your DPT is being created.....`)

    const tx = await keysFactoryContract.deploySharesContract(0, {
        tokenAddress: NFT_COLLECTION_ADDRESS,
        tokenId: NFT_TOKEN_ID
    })

    console.log(`Your DPT is created. Transaction: https://basescan.org/tx/${tx.hash}`)

}
main()