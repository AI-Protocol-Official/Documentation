# How to create a Liquidity Pool on Uniswap for the Token of your ALI Agent?

Setting up a liquidity pool allows users to swap ALI Agents token for their existing assets. To facilitate your ALI Agents ecosystem you must create a liquidity pool of your ALI Agents liquidity token. 

## Prerequisites
1. Token of your ALI Agent. [How to launch a token?](./how-to-launch-utility-token/how-to-launch-token-ali-agent.md)
2. Basic knowledge of how DEX works
3. Your wallet must have a sufficient balance of the token and the token you want to create the pair against.
4. You must define a price for your token.

For example, 

Let's say I have a token of an ALI Agent with the following details. 

Address: `0xC6729C6cFc6B872acF641EB3EA628C9F038e5ABb`, Name: `Elana`, Symbol: `ELN`

And I want to create a pair of (ELN / USDc). Since I am the first Liquidity provider of this token I will be defining the price of this liquidity pool.

For this example, I say that 1 ELN is equal to 0.1 USDc. And I want to add liquidity of 1000 ELN. In this case, I must have a balance of 1000 ELN and 100 USDc in my wallet. 

Once you have checked all the prerequisites you can follow this [Uniswap's article](https://support.uniswap.org/hc/en-us/articles/7423194619661-How-to-add-liquidity-to-Uniswap-v3) to create a liquidity pool.
