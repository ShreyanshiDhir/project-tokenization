pragma solidity >=0.4.22 <0.7.0;
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v2.5.0/contracts/crowdsale/Crowdsale.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v2.5.0/contracts/crowdsale/emission/AllowanceCrowdsale.sol";



contract MyCrowdsale is Crowdsale, AllowanceCrowdsale {
    constructor(
        uint256 _rate,
        address payable _wallet,
        IERC20 _token,
        address _tokenWallet  // <- new argument
    )
        Crowdsale(_rate, _wallet, _token)
        AllowanceCrowdsale(_tokenWallet)  // <- used here
        
        public
    {

    }
}