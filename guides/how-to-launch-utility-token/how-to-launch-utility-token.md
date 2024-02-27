# How to launch a Utility Token for your Hive?

Each Hive has its utility token, which is utilized for leveraging tokenomics, facilitating governance and payments, distributing rewards, and incentivizing the creation of assets within its ecosystem.

## Prerequisites
1. Your token should be compliant with ERC20, ERC1363, EIP2612, and EIP3009 Standards.

## Instructions using Remix
**These instructions include our implementation of ERC20 which fulfills all standards mentioned above**

1. Open [Code in remix](https://remix.ethereum.org/?#code=Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC40OwoKaW1wb3J0ICJodHRwczovL2dpdGh1Yi5jb20vQUktUHJvdG9jb2wtT2ZmaWNpYWwvYWktcHJvdG9jb2wtdjMtY29yZS9ibG9iL21haW4vY29udHJhY3RzL3Rva2VuL1doaXRlbGFiZWxFUkMyMC5zb2w7Cgpjb250cmFjdCBUb2tlbk5hbWVFUkMyMCBpcyBXaGl0ZWxhYmVsRVJDMjAgewogICAgLy8gdG90YWwgc3VwcGx5OiAxIHRyaWxsaW9uICgxMF4xMiArIDE4IGRlY2ltYWxzKQogICAgY29uc3RydWN0b3IoKQogICAgICAgIFdoaXRlbGFiZWxFUkMyMCgiVG9rZW5OYW1lIiwgIlRva2VuU3ltYm9sIiwgbXNnLnNlbmRlciwgMTAqKigxMiArIDE4KSkKICAgIHt9Cn0K)

2. Change the contract name from `TokenNameERC20` to whatever you wanna call your token.

3. Change the `TokenName`, `TokenSymbol`, and token supply.

4. Compile the contract.

4. Navigate to `Deploy and run transactions` from the left navigation.

5. Change the environment from Remix VM to Injected Provider. And connect your Metamask.

6. Select the token contract to deploy.

7. Click on **Deploy** and approve the transaction in Metamask.

8. Congratulations you have deployed ERC20 token for your hive.
