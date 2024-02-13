# How to create a Liquidity Pool on Uniswap for the Utility Token of your Hive?

A utility token is a native ERC-20 token specific to each Hive. It is used to facilitate governance, payments, and distribution of rewards, incentivize the creation of assets, and kickstart and reward participation within Hive’s ecosystem.

Setting up a liquidity pool allows users to swap Hive's utility token for their existing assets. To facilitate your Hive’s ecosystem you must create a liquidity pool of your  Hive’s liquidity token. 

## Prerequisites
1. Utility token of your Hive. [How to launch a utility token?](./how-to-launch-utility-token.md)
2. Basic knowledge of how DEX works
3. Your wallet must have a sufficient balance of the utility token and the token you want to create the pair against.
4. You must define a price for your utility token.

For example, 

Let's say I have a utility token of a hive with the following details. 

Address: `0xC6729C6cFc6B872acF641EB3EA628C9F038e5ABb`, Name: `Utility Token`, Symbol: `UTT`

And I want to create a pair of (UTT / USDc). Since I am the first Liquidity provider of this token I will be defining the price of this liquidity pool.

For this example, I say that 1 UTT is equal to 0.1 USDc. And I want to add liquidity of 1000 UTT. In this case, I must have a balance of 1000 UTT and 100 USDc in my wallet. 

Once you have checked all the prerequisites you can follow this [Uniswap's article](https://support.uniswap.org/hc/en-us/articles/7423194619661-How-to-add-liquidity-to-Uniswap-v3) to create a liquidity pool.
