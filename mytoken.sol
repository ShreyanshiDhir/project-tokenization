pragma solidity >=0.4.22 <0.7.0;
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol";
contract mytoken is ERC20{
    constructor(string memory _name, string memory _symbol, uint  _initialSupply) ERC20(_name,_symbol) public {
        _mint(msg.sender,_initialSupply);
    }
}