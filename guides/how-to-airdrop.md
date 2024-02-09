# How to do an Airdrop for your Hive

## Prerequisites

1.  Deployed ERC20 token and the required balance of that token for airdrop
2.  List of the addresses and their corresponding airdrop balances,
    summing up to the value not exceeding the available airdrop balance.

For example,

Let ERC20 token address be `0xC6729C6cFc6B872acF641EB3EA628C9F038e5ABb`
and the required airdrop balance be `10,000` (ten thousand).

Let the list of the addresses for an airdrop and their balances be:

| Airdrop Address                            | Airdrop Value |
|--------------------------------------------|---------------|
| 0x9ccb39895e170B0ad4a94F07C330432A95779818 | 5,000         |
| 0x42A31821339ea6695AFc19d6d8E2C9F6b18d3B8C | 3,000         |
| 0x1dF933032AB33A60A16101C896481b010f6068aE | 1,000         |
| 0xF17D62543541B67b23405B51E3946A0Bc3f62A55 | 600           |
| 0x56Be99a74a3Aa0AeF4AB79Ae67CfD2a05Ecb110e | 400           |
| Total:                                     | 10,000        |

Replace the addresses (including token address) and values above with your relevant values

## Option 1: Push via Disperse APP GUI

1. Open the disperse.app https://disperse.app/
2. Connect wallet and select the base network
3. Select "send token", enter token address and click "load"
4. Input the addresses and airdrop amounts
5. Approve and disperse the token

## Option 2: Push via Disperse APP Smart Contract

1.  Approve disperse.app `0xD152f549545093347A162Dce210e7293f1452150` on base to spend the required balance
2.  Open https://basescan.org/address/0xd152f549545093347a162dce210e7293f1452150#writeContract#F1 and
    fill in the details for function 1. `disperseTokenSimple`. Format:
    ```
    token (address): 0xC6729C6cFc6B872acF641EB3EA628C9F038e5ABb
    recipients (address[]): ["0x9ccb39895e170B0ad4a94F07C330432A95779818","0x42A31821339ea6695AFc19d6d8E2C9F6b18d3B8C","0x1dF933032AB33A60A16101C896481b010f6068aE","0xF17D62543541B67b23405B51E3946A0Bc3f62A55","0x56Be99a74a3Aa0AeF4AB79Ae67CfD2a05Ecb110e"]
    values (uint256[]): [5000000000000000000000,3000000000000000000000,1000000000000000000000,600000000000000000000,400000000000000000000]
    ```
    > Note 18 zeroes for the token. This must correspond with the token's `decimals` value
3.  Click "Write" and approve transaction in MetaMask

## Option 3: Pull via RewardSystem

1.  Deploy `RewardSystem` smart contract from [ai-protocol-v3-periphery](https://github.com/AI-Protocol-Official/ai-protocol-v3-periphery).
    Follow the deployment instructions to deploy. Use `RewardSystem_Proxy` tag for deployment.
2.  Generate the Merkle tree for the airdrop balances. Use `merkle_utils.js` from the [ai-protocol-v3-periphery](https://github.com/AI-Protocol-Official/ai-protocol-v3-periphery) repo for the reference.
3.  Set/update the Merkle root on the `RewardSystem` contract with `setInputDataRoot`.
4.  Share the airdrop addresses and balances together with the generated Merkle proofs.
5.  Users should call `claimReward` function, specifying their address, balance, and previously shared proof.

