// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract MetaNFT is ERC721 {
    uint256 public mintingFee = 10000000000000000;

    constructor() ERC721("Meta NFT", "MNFT") {}

    function _baseURI() internal pure override returns (string memory) {
        return
            "https://blue-clear-mole-324.mypinata.cloud/ipfs/Qmcd7BP4Ar7DwCiaFKnhi7kmebVdiLvm4TMcAB6M7dpdHS/";
    }

    function safeMint(address to, uint256 tokenId) public payable {
        require(msg.value >= mintingFee, "Not enough minting fee");
        _safeMint(to, tokenId);
    }
}
// 0x5FbDB2315678afecb367f032d93F642f64180aa3
