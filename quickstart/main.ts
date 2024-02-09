import dotevnv from "dotenv";
import { JsonRpcProvider, Wallet } from 'ethers';
import invariant from 'tiny-invariant';
dotevnv.config()


async function main() {

    invariant(process.env.PRIVATE_KEY, "Private key missing")

    invariant(process.env.RPC_URL, "RPC_URL missing")

    const provider = new JsonRpcProvider(process.env.RPC_URL)
    const wallet = new Wallet(process.env.PRIVATE_KEY, provider)

}
main()