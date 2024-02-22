# How to fuse a Level 5 Pod with a DPT?

AI Pod or Intelligence Pod, (previously known as a Personality Pod) within the AI Protocol, is an essential ERC-721 Asset. It plays a crucial role in the formation of a DPT [Learn more]()

## Prerequisites
1. You must own a Level 5 AI Pod aka Intelligence Pod.
2. You must own a DPT.
3. Keep in mind that your pod will be locked.
4. **If you attempt to fuse the Pod with a DPT that you do not own, you risk losing your Pod.**

## Instructions using Etherscan

1. Open https://etherscan.io/address/0xDd70AF84BA86F29bf437756B655110D134b5651C#writeContract#F1 and fill in the details for function 1. `approve`. Format:
    ```
    _approved (address): 0xb9f02fc926b2ab66cadd6ea1ee90fb0d8698790b (This address will be same)
    _tokenId (uint256): 538 (Your pod id)
    ```

    ![Approve details](./screenshots/1.png)

2. Connect your wallet using **Connect to Web3** button

    ![Connect](./screenshots/2.png)

3. Click **Write** and approve the transaction in MetaMask

    ![Write](./screenshots/3.png)

4. Before moving to the next step. Wait for the transaction to be confirmed.

5. Open https://etherscan.io/address/0xb9f02fc926b2ab66cadd6ea1ee90fb0d8698790b#writeProxyContract#F2 and
    fill in the details for function 2. `link`. Format:
     ```
    personalityId (uint96): 538 (Your pod id)
    targetContract (address): 0xce69a87c02baa8c5f17ed7eb8b1c2657afc2e1af (NFT collection address)
    targetId (uint256): 2283 (NFT id)
    ```

    ![Link Details](./screenshots/4.png)

6. Connect your wallet using **Connect to Web3** button

    ![Connect](./screenshots/5.png)

7. Click "Write" and approve the transaction in MetaMask

    ![Write](./screenshots/6.png)

8. Wait for the transaction to be confirmed. Congratulations your Pod is being fused with your DPT