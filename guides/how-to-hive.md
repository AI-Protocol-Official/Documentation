# Hive-related How-tos #

## How to Create a Hive ##

### Prerequisite(s): ###

* AI Pod Level 5
  * either owned directly by the wallet,
  * or owned as iNFT (AI Pod Level 5 is fused with the NFT directly owned by the wallet),
  * or staked

### Creation Flow (via Etherscan): ###

* Open the HiveRegistry Contract
  [0x45deb2873681E46e0E9F58A83AbCa491E35aC423](https://etherscan.io/address/0x45deb2873681E46e0E9F58A83AbCa491E35aC423#writeProxyContract#F2)
  on Etherscan, navigate to _Write as Proxy_
* Locate the `createHive(uint256 _podId, string calldata _hiveURI)` function
  and submit Hive creation request details:
  * AI Pod ID: this must be Level 5 AI Pod owned by the wallet executing the transaction (see prerequisites)
  * Hive URI: arbitrary string URI, this can also be empty and set/updated at any time later
* Submit the transaction

### Updating Hive URI (via Etherscan): ###

* Open the HiveRegistry Contract
  [0x45deb2873681E46e0E9F58A83AbCa491E35aC423](https://etherscan.io/address/0x45deb2873681E46e0E9F58A83AbCa491E35aC423#writeProxyContract#F13)
  on Etherscan, navigate to _Write as Proxy_
* Locate the `updateHiveURI(uint256 _hiveId, string calldata _hiveURI)` function
  and submit the request details:
  * Hive ID: ID of the Hive to set/update URI for
  * Hive URI: arbitrary string URI
* Submit the transaction

## How to Connect AI Pod with a Hive ##

### Prerequisite(s): ###

* AI Pod
  * either owned directly by the wallet,
  * or owned as iNFT (AI Pod Level 5 is fused with the NFT directly owned by the wallet),
  * or staked

### Asset Linking Flow (via Etherscan): ###

* Open the HiveRegistry Contract
  [0x45deb2873681E46e0E9F58A83AbCa491E35aC423](https://etherscan.io/address/0x45deb2873681E46e0E9F58A83AbCa491E35aC423#writeProxyContract#F7)
  on Etherscan, navigate to _Write as Proxy_
* Locate the `linkAsset(TradeableShares.SharesSubject calldata _asset, uint16 _hiveId, uint16 _category)` function
  and submit Asset linking request details:
  * Asset: a tuple
    * Contract address: `0xa189121eE045AEAA8DA80b72F7a1132e3B216237` (AI Pod ERC721 address)
    * AI Pod ID: this must be an AI Pod owned by the wallet executing the transaction (see prerequisites)
  * Hive ID: ID of the Hive to join
  * Category: `1` (`Intelligence_POD`)
* Submit the transaction

### Asset Unlinking Flow (via Etherscan) ###

* Open the HiveRegistry Contract
  [0x45deb2873681E46e0E9F58A83AbCa491E35aC423](https://etherscan.io/address/0x45deb2873681E46e0E9F58A83AbCa491E35aC423#writeProxyContract#F11)
  on Etherscan, navigate to _Write as Proxy_
* Locate the `unlinkAsset(TradeableShares.SharesSubject calldata _asset)` function
  and submit Asset unlinking request details:
  * Asset: a tuple
    * Contract address: `0xa189121eE045AEAA8DA80b72F7a1132e3B216237` (AI Pod ERC721 address)
    * AI Pod ID: this must be an AI Pod owned by the wallet executing the transaction (see prerequisites),
      and previously linked with the Hive
* Submit the transaction

### Checking the Asset Status ###

* Open the HiveRegistry Contract
  [0x45deb2873681E46e0E9F58A83AbCa491E35aC423](https://etherscan.io/address/0x45deb2873681E46e0E9F58A83AbCa491E35aC423#readProxyContract#F19)
  on Etherscan, navigate to _Read as Proxy_
* Locate the `getLinkedAssetDetails(TradeableShares.SharesSubject calldata _asset)` function
  and submit Asset unlinking request details:
  * Asset: a tuple
    * Contract address: `0xa189121eE045AEAA8DA80b72F7a1132e3B216237` (AI Pod ERC721 address)
    * AI Pod ID
* Execute query

## Appendix A: Hive-related Addresses ##

| Contract      | Network / ID | Address                                    |
|---------------|--------------|--------------------------------------------|
| HiveRegistry  | Mainnet / 1  | 0x45deb2873681E46e0E9F58A83AbCa491E35aC423 |
| HiveRegistry  | Base / 8453  | 0x45deb2873681E46e0E9F58A83AbCa491E35aC423 |
| SharesFactory | Mainnet / 1  | 0xABA615044d5640bd151A1B0bdac1C04806AF1AD5 |
| SharesFactory | Base / 8453  | 0x63aCBC42e466d29F271c102Bf97A18B52203b308 |
