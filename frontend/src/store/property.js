import { createSlice } from "@reduxjs/toolkit";
import API from "../api/api";
import Web3 from "web3";
const initialState = {
	properties: [],
	property: null,
	loading: true,
};

const propertySlice = createSlice({
	name: "property",
	initialState,
	reducers: {
		setLoading(state, action) {
			state.loading = action.payload;
		},
		setProperties(state, action) {
			state.properties = action.payload;
			state.loading = false;
		},
		setProperty(state, action) {
			state.property = action.payload;
			state.loading = false;
		},
	},
});
export const { setLoading, setProperties, setProperty } = propertySlice.actions;

export default propertySlice.reducer;

//Load all properties
export const loadAllProperties = () => async (dispatch) => {
	try {
		dispatch(setLoading(true));
		const res = await API.get("/api/property");
		console.log(res);
		dispatch(setProperties(res.data.properties));
	} catch (err) {
		console.log(err);
		dispatch(setLoading(false));
	}
};

//New ERC20 token contract deployment
export const newToken = (
	{ name, description, image, tokenValue, symbol, initialSupply, owner },
	web3,
	history
) => async (dispatch) => {
	try {
		dispatch(setLoading(true));
		if (!web3) {
			try {
				// Request account access if needed
				await window.ethereum.enable();
				// We don't know window.web3 version, so we use our own instance of Web3
				// with the injected provider given by MetaMask
				web3 = new Web3(window.ethereum);
				console.log(web3.version);
			} catch (error) {
				window.alert("You need to allow MetaMask.");
				return;
			}
		}
		const coinbase = await web3.eth.getCoinbase();
		if (!coinbase) {
			window.alert("Please activate MetaMask first.");
			return;
		}

		var mytokenContract = new web3.eth.Contract([
			{
				inputs: [
					{ internalType: "string", name: "_name", type: "string" },
					{ internalType: "string", name: "_symbol", type: "string" },
					{
						internalType: "uint256",
						name: "_initialSupply",
						type: "uint256",
					},
				],
				stateMutability: "nonpayable",
				type: "constructor",
			},
			{
				anonymous: false,
				inputs: [
					{
						indexed: true,
						internalType: "address",
						name: "owner",
						type: "address",
					},
					{
						indexed: true,
						internalType: "address",
						name: "spender",
						type: "address",
					},
					{
						indexed: false,
						internalType: "uint256",
						name: "value",
						type: "uint256",
					},
				],
				name: "Approval",
				type: "event",
			},
			{
				anonymous: false,
				inputs: [
					{
						indexed: true,
						internalType: "address",
						name: "from",
						type: "address",
					},
					{
						indexed: true,
						internalType: "address",
						name: "to",
						type: "address",
					},
					{
						indexed: false,
						internalType: "uint256",
						name: "value",
						type: "uint256",
					},
				],
				name: "Transfer",
				type: "event",
			},
			{
				inputs: [
					{ internalType: "address", name: "owner", type: "address" },
					{
						internalType: "address",
						name: "spender",
						type: "address",
					},
				],
				name: "allowance",
				outputs: [
					{ internalType: "uint256", name: "", type: "uint256" },
				],
				stateMutability: "view",
				type: "function",
			},
			{
				inputs: [
					{
						internalType: "address",
						name: "spender",
						type: "address",
					},
					{
						internalType: "uint256",
						name: "amount",
						type: "uint256",
					},
				],
				name: "approve",
				outputs: [{ internalType: "bool", name: "", type: "bool" }],
				stateMutability: "nonpayable",
				type: "function",
			},
			{
				inputs: [
					{
						internalType: "address",
						name: "account",
						type: "address",
					},
				],
				name: "balanceOf",
				outputs: [
					{ internalType: "uint256", name: "", type: "uint256" },
				],
				stateMutability: "view",
				type: "function",
			},
			{
				inputs: [],
				name: "decimals",
				outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
				stateMutability: "view",
				type: "function",
			},
			{
				inputs: [
					{
						internalType: "address",
						name: "spender",
						type: "address",
					},
					{
						internalType: "uint256",
						name: "subtractedValue",
						type: "uint256",
					},
				],
				name: "decreaseAllowance",
				outputs: [{ internalType: "bool", name: "", type: "bool" }],
				stateMutability: "nonpayable",
				type: "function",
			},
			{
				inputs: [
					{
						internalType: "address",
						name: "spender",
						type: "address",
					},
					{
						internalType: "uint256",
						name: "addedValue",
						type: "uint256",
					},
				],
				name: "increaseAllowance",
				outputs: [{ internalType: "bool", name: "", type: "bool" }],
				stateMutability: "nonpayable",
				type: "function",
			},
			{
				inputs: [],
				name: "name",
				outputs: [{ internalType: "string", name: "", type: "string" }],
				stateMutability: "view",
				type: "function",
			},
			{
				inputs: [],
				name: "symbol",
				outputs: [{ internalType: "string", name: "", type: "string" }],
				stateMutability: "view",
				type: "function",
			},
			{
				inputs: [],
				name: "totalSupply",
				outputs: [
					{ internalType: "uint256", name: "", type: "uint256" },
				],
				stateMutability: "view",
				type: "function",
			},
			{
				inputs: [
					{
						internalType: "address",
						name: "recipient",
						type: "address",
					},
					{
						internalType: "uint256",
						name: "amount",
						type: "uint256",
					},
				],
				name: "transfer",
				outputs: [{ internalType: "bool", name: "", type: "bool" }],
				stateMutability: "nonpayable",
				type: "function",
			},
			{
				inputs: [
					{
						internalType: "address",
						name: "sender",
						type: "address",
					},
					{
						internalType: "address",
						name: "recipient",
						type: "address",
					},
					{
						internalType: "uint256",
						name: "amount",
						type: "uint256",
					},
				],
				name: "transferFrom",
				outputs: [{ internalType: "bool", name: "", type: "bool" }],
				stateMutability: "nonpayable",
				type: "function",
			},
		]);
		console.log(coinbase);
		var token;
		mytokenContract
			.deploy({
				data:
					"0x60806040523480156200001157600080fd5b506040516200164b3803806200164b833981810160405260608110156200003757600080fd5b81019080805160405193929190846401000000008211156200005857600080fd5b838201915060208201858111156200006f57600080fd5b82518660018202830111640100000000821117156200008d57600080fd5b8083526020830192505050908051906020019080838360005b83811015620000c3578082015181840152602081019050620000a6565b50505050905090810190601f168015620000f15780820380516001836020036101000a031916815260200191505b50604052602001805160405193929190846401000000008211156200011557600080fd5b838201915060208201858111156200012c57600080fd5b82518660018202830111640100000000821117156200014a57600080fd5b8083526020830192505050908051906020019080838360005b838110156200018057808201518184015260208101905062000163565b50505050905090810190601f168015620001ae5780820380516001836020036101000a031916815260200191505b506040526020018051906020019092919050505082828160039080519060200190620001dc9291906200049b565b508060049080519060200190620001f59291906200049b565b506012600560006101000a81548160ff021916908360ff16021790555050506200022633826200022f60201b60201c565b5050506200054a565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415620002d3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f45524332303a206d696e7420746f20746865207a65726f20616464726573730081525060200191505060405180910390fd5b620002e7600083836200040d60201b60201c565b62000303816002546200041260201b62000f2d1790919060201c565b60028190555062000361816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546200041260201b62000f2d1790919060201c565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b505050565b60008082840190508381101562000491576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620004de57805160ff19168380011785556200050f565b828001600101855582156200050f579182015b828111156200050e578251825591602001919060010190620004f1565b5b5090506200051e919062000522565b5090565b6200054791905b808211156200054357600081600090555060010162000529565b5090565b90565b6110f1806200055a6000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c80633950935111610071578063395093511461025f57806370a08231146102c557806395d89b411461031d578063a457c2d7146103a0578063a9059cbb14610406578063dd62ed3e1461046c576100a9565b806306fdde03146100ae578063095ea7b31461013157806318160ddd1461019757806323b872dd146101b5578063313ce5671461023b575b600080fd5b6100b66104e4565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156100f65780820151818401526020810190506100db565b50505050905090810190601f1680156101235780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61017d6004803603604081101561014757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610586565b604051808215151515815260200191505060405180910390f35b61019f6105a4565b6040518082815260200191505060405180910390f35b610221600480360360608110156101cb57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506105ae565b604051808215151515815260200191505060405180910390f35b610243610687565b604051808260ff1660ff16815260200191505060405180910390f35b6102ab6004803603604081101561027557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061069e565b604051808215151515815260200191505060405180910390f35b610307600480360360208110156102db57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610751565b6040518082815260200191505060405180910390f35b610325610799565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561036557808201518184015260208101905061034a565b50505050905090810190601f1680156103925780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6103ec600480360360408110156103b657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061083b565b604051808215151515815260200191505060405180910390f35b6104526004803603604081101561041c57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610908565b604051808215151515815260200191505060405180910390f35b6104ce6004803603604081101561048257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610926565b6040518082815260200191505060405180910390f35b606060038054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561057c5780601f106105515761010080835404028352916020019161057c565b820191906000526020600020905b81548152906001019060200180831161055f57829003601f168201915b5050505050905090565b600061059a6105936109ad565b84846109b5565b6001905092915050565b6000600254905090565b60006105bb848484610bac565b61067c846105c76109ad565b6106778560405180606001604052806028815260200161102660289139600160008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600061062d6109ad565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610e6d9092919063ffffffff16565b6109b5565b600190509392505050565b6000600560009054906101000a900460ff16905090565b60006107476106ab6109ad565b8461074285600160006106bc6109ad565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610f2d90919063ffffffff16565b6109b5565b6001905092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b606060048054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156108315780601f1061080657610100808354040283529160200191610831565b820191906000526020600020905b81548152906001019060200180831161081457829003601f168201915b5050505050905090565b60006108fe6108486109ad565b846108f98560405180606001604052806025815260200161109760259139600160006108726109ad565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610e6d9092919063ffffffff16565b6109b5565b6001905092915050565b600061091c6109156109ad565b8484610bac565b6001905092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610a3b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001806110736024913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610ac1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180610fde6022913960400191505060405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040518082815260200191505060405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610c32576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602581526020018061104e6025913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610cb8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526023815260200180610fbb6023913960400191505060405180910390fd5b610cc3838383610fb5565b610d2e81604051806060016040528060268152602001611000602691396000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610e6d9092919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610dc1816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610f2d90919063ffffffff16565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a3505050565b6000838311158290610f1a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610edf578082015181840152602081019050610ec4565b50505050905090810190601f168015610f0c5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008385039050809150509392505050565b600080828401905083811015610fab576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b50505056fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636545524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa264697066735822122038d4b9e372068abfe9ff5738290bc158fb90d381973ad6a228e60e3c6d72dfe164736f6c63430006060033",
				arguments: [name, symbol, web3.utils.toWei(initialSupply)],
			})
			.send({
				from: coinbase,
				gas: "4700000",
			})
			.then(function (contract) {
				console.log(contract.options.address);
				if (typeof contract.options.address !== "undefined") {
					token = contract.options.address;
					console.log(
						"Contract mined! address: " +
							contract.options.address +
							" transactionHash: " +
							contract.options.transactionHash
					);

					var mycrowdsaleContract = new web3.eth.Contract([
						{
							constant: true,
							inputs: [],
							name: "rate",
							outputs: [
								{
									name: "",
									type: "uint256",
								},
							],
							payable: false,
							stateMutability: "view",
							type: "function",
						},
						{
							constant: true,
							inputs: [],
							name: "weiRaised",
							outputs: [
								{
									name: "",
									type: "uint256",
								},
							],
							payable: false,
							stateMutability: "view",
							type: "function",
						},
						{
							constant: true,
							inputs: [],
							name: "wallet",
							outputs: [
								{
									name: "",
									type: "address",
								},
							],
							payable: false,
							stateMutability: "view",
							type: "function",
						},
						{
							constant: true,
							inputs: [],
							name: "remainingTokens",
							outputs: [
								{
									name: "",
									type: "uint256",
								},
							],
							payable: false,
							stateMutability: "view",
							type: "function",
						},
						{
							constant: true,
							inputs: [],
							name: "tokenWallet",
							outputs: [
								{
									name: "",
									type: "address",
								},
							],
							payable: false,
							stateMutability: "view",
							type: "function",
						},
						{
							constant: false,
							inputs: [
								{
									name: "beneficiary",
									type: "address",
								},
							],
							name: "buyTokens",
							outputs: [],
							payable: true,
							stateMutability: "payable",
							type: "function",
						},
						{
							constant: true,
							inputs: [],
							name: "token",
							outputs: [
								{
									name: "",
									type: "address",
								},
							],
							payable: false,
							stateMutability: "view",
							type: "function",
						},
						{
							inputs: [
								{
									name: "_rate",
									type: "uint256",
								},
								{
									name: "_wallet",
									type: "address",
								},
								{
									name: "_token",
									type: "address",
								},
								{
									name: "_tokenWallet",
									type: "address",
								},
							],
							payable: false,
							stateMutability: "nonpayable",
							type: "constructor",
						},
						{
							payable: true,
							stateMutability: "payable",
							type: "fallback",
						},
						{
							anonymous: false,
							inputs: [
								{
									indexed: true,
									name: "purchaser",
									type: "address",
								},
								{
									indexed: true,
									name: "beneficiary",
									type: "address",
								},
								{
									indexed: false,
									name: "value",
									type: "uint256",
								},
								{
									indexed: false,
									name: "amount",
									type: "uint256",
								},
							],
							name: "TokensPurchased",
							type: "event",
						},
					]);
					mycrowdsaleContract
						.deploy({
							data:
								"0x608060405234801561001057600080fd5b50604051608080610bca8339810180604052608081101561003057600080fd5b508051602082015160408301516060909301516000805460ff1916600117905591929091808484848215156100c657604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f43726f776473616c653a20726174652069732030000000000000000000000000604482015290519081900360640190fd5b6001600160a01b0382161515610127576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526025815260200180610ba56025913960400191505060405180910390fd5b6001600160a01b0381161515610188576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526024815260200180610b816024913960400191505060405180910390fd5b600292909255600180546001600160a01b0319166001600160a01b0392831617905560008054610100600160a81b031916610100938316939093029290921790915581161515610223576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526034815260200180610b4d6034913960400191505060405180910390fd5b600480546001600160a01b039092166001600160a01b0319909216919091179055505050506108f6806102576000396000f3fe6080604052600436106100705760003560e01c8063bf5839031161004e578063bf583903146100ef578063bff99c6c14610104578063ec8ac4d814610119578063fc0c546a1461013f57610070565b80632c4e722e146100825780634042b66f146100a9578063521eb273146100be575b61008061007b610154565b610158565b005b34801561008e57600080fd5b5061009761027f565b60408051918252519081900360200190f35b3480156100b557600080fd5b50610097610285565b3480156100ca57600080fd5b506100d361028b565b604080516001600160a01b039092168252519081900360200190f35b3480156100fb57600080fd5b5061009761029a565b34801561011057600080fd5b506100d36103b9565b6100806004803603602081101561012f57600080fd5b50356001600160a01b0316610158565b34801561014b57600080fd5b506100d36103c8565b3390565b60005460ff1615156101b45760408051600160e51b62461bcd02815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015290519081900360640190fd5b6000805460ff19169055346101c982826103dc565b60006101d482610481565b6003549091506101ea908363ffffffff61049e16565b6003556101f78382610502565b826001600160a01b0316610209610154565b6001600160a01b03167f6faf93231a456e552dbc9961f58d9713ee4f2e69d15f1975b050ef0911053a7b8484604051808381526020018281526020019250505060405180910390a361025b838361047d565b61026361050c565b61026d838361047d565b50506000805460ff1916600117905550565b60025490565b60035490565b6001546001600160a01b031690565b60006103b46102a76103c8565b6004805460408051600160e01b6370a082310281526001600160a01b0392831693810193909352519216916370a0823191602480820192602092909190829003018186803b1580156102f857600080fd5b505afa15801561030c573d6000803e3d6000fd5b505050506040513d602081101561032257600080fd5b505161032c6103c8565b6004805460408051600160e11b636eb1769f0281526001600160a01b03928316938101939093523060248401525192169163dd62ed3e91604480820192602092909190829003018186803b15801561038357600080fd5b505afa158015610397573d6000803e3d6000fd5b505050506040513d60208110156103ad57600080fd5b5051610548565b905090565b6004546001600160a01b031690565b60005461010090046001600160a01b031690565b6001600160a01b038216151561042657604051600160e51b62461bcd02815260040180806020018281038252602a815260200180610877602a913960400191505060405180910390fd5b80151561047d5760408051600160e51b62461bcd02815260206004820152601960248201527f43726f776473616c653a20776569416d6f756e74206973203000000000000000604482015290519081900360640190fd5b5050565b60006104986002548361055e90919063ffffffff16565b92915050565b6000828201838110156104fb5760408051600160e51b62461bcd02815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b61047d82826105be565b6001546040516001600160a01b03909116903480156108fc02916000818181858888f19350505050158015610545573d6000803e3d6000fd5b50565b600081831061055757816104fb565b5090919050565b600082151561056f57506000610498565b82820282848281151561057e57fe5b04146104fb57604051600160e51b62461bcd0281526004018080602001828103825260218152602001806108566021913960400191505060405180910390fd5b60045461047d906001600160a01b031683836105d86103c8565b6001600160a01b031692919063ffffffff6105ef16565b604080516001600160a01b0385811660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b0316600160e01b6323b872dd0217905261064c908590610652565b50505050565b610664826001600160a01b0316610819565b15156106ba5760408051600160e51b62461bcd02815260206004820152601f60248201527f5361666545524332303a2063616c6c20746f206e6f6e2d636f6e747261637400604482015290519081900360640190fd5b60006060836001600160a01b0316836040518082805190602001908083835b602083106106f85780518252601f1990920191602091820191016106d9565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d806000811461075a576040519150601f19603f3d011682016040523d82523d6000602084013e61075f565b606091505b50915091508115156107bb5760408051600160e51b62461bcd02815260206004820181905260248201527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564604482015290519081900360640190fd5b80511561064c578080602001905160208110156107d757600080fd5b5051151561064c57604051600160e51b62461bcd02815260040180806020018281038252602a8152602001806108a1602a913960400191505060405180910390fd5b6000813f7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a47081811480159061084d57508115155b94935050505056fe536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f7743726f776473616c653a2062656e656669636961727920697320746865207a65726f20616464726573735361666545524332303a204552433230206f7065726174696f6e20646964206e6f742073756363656564a165627a7a723058200a0f05de7af099a069746f9cb066c52db642f67b0820f9a26d095e26a8cee8e60029416c6c6f77616e636543726f776473616c653a20746f6b656e2077616c6c657420697320746865207a65726f206164647265737343726f776473616c653a20746f6b656e20697320746865207a65726f206164647265737343726f776473616c653a2077616c6c657420697320746865207a65726f2061646472657373",
							arguments: [
								Math.pow(10, 18) /
									(tokenValue * Math.pow(10, 18)), //rate
								"0xcB55B9cD34c6d23c45448A3Ac7f1191B98CbB312",
								contract.options.address,
								"0xcB55B9cD34c6d23c45448A3Ac7f1191B98CbB312",
							],
						})
						.send({
							from: coinbase,
							gas: "4700000",
						})
						.then(async function (contract) {
							console.log(contract.options);
							if (
								typeof contract.options.address !== "undefined"
							) {
								console.log(
									"Contract mined! address: " +
										contract.options.address +
										" transactionHash: " +
										contract.options.transactionHash
								);
								mytokenContract.options.address = token;
								await mytokenContract.methods
									.approve(
										contract.options.address,
										web3.utils.toWei(initialSupply)
									) //this amount needs change
									.send({ from: coinbase });
								const tokenAddress = token;
								const crowdsaleAddress =
									contract.options.address;
								const body = JSON.stringify({
									name,
									description,
									image,
									tokenValue,
									initialSupply,
									symbol,
									tokenAddress,
									crowdsaleAddress,
									owner,
								});
								const data = await API.post(
									"/api/property",
									body
								);
							}
						});
				}
			});
		dispatch(setLoading(false));
	} catch (err) {
		// const errors = err.response.data.error;
		console.log(err);
		dispatch(setLoading(false));
	}
};

//Load A Specific Property
export const loadProperty = (id) => async (dispatch) => {
	try {
		dispatch(setLoading(true));
		const res = await API.get(`/api/property/${id}`);
		console.log(res);
		dispatch(setProperty(res.data.property));
	} catch (err) {
		console.log(err);
		dispatch(setLoading(false));
	}
};

//Buy Token
export const buyTokens = (property,price,user,web3) => async (dispatch) => {
	try {
		dispatch(setLoading(true));
		if (!web3) {
			try {
				// Request account access if needed
				await window.ethereum.enable();
				// We don't know window.web3 version, so we use our own instance of Web3
				// with the injected provider given by MetaMask
				web3 = new Web3(window.ethereum);
				console.log(web3.version);
			} catch (error) {
				window.alert("You need to allow MetaMask.");
				return;
			}
		}
		const coinbase = await web3.eth.getCoinbase();
		if (!coinbase) {
			window.alert("Please activate MetaMask first.");
			return;
		}
		var mycrowdsaleContract = new web3.eth.Contract([
			{
				constant: true,
				inputs: [],
				name: "rate",
				outputs: [
					{
						name: "",
						type: "uint256",
					},
				],
				payable: false,
				stateMutability: "view",
				type: "function",
			},
			{
				constant: true,
				inputs: [],
				name: "weiRaised",
				outputs: [
					{
						name: "",
						type: "uint256",
					},
				],
				payable: false,
				stateMutability: "view",
				type: "function",
			},
			{
				constant: true,
				inputs: [],
				name: "wallet",
				outputs: [
					{
						name: "",
						type: "address",
					},
				],
				payable: false,
				stateMutability: "view",
				type: "function",
			},
			{
				constant: true,
				inputs: [],
				name: "remainingTokens",
				outputs: [
					{
						name: "",
						type: "uint256",
					},
				],
				payable: false,
				stateMutability: "view",
				type: "function",
			},
			{
				constant: true,
				inputs: [],
				name: "tokenWallet",
				outputs: [
					{
						name: "",
						type: "address",
					},
				],
				payable: false,
				stateMutability: "view",
				type: "function",
			},
			{
				constant: false,
				inputs: [
					{
						name: "beneficiary",
						type: "address",
					},
				],
				name: "buyTokens",
				outputs: [],
				payable: true,
				stateMutability: "payable",
				type: "function",
			},
			{
				constant: true,
				inputs: [],
				name: "token",
				outputs: [
					{
						name: "",
						type: "address",
					},
				],
				payable: false,
				stateMutability: "view",
				type: "function",
			},
			{
				inputs: [
					{
						name: "_rate",
						type: "uint256",
					},
					{
						name: "_wallet",
						type: "address",
					},
					{
						name: "_token",
						type: "address",
					},
					{
						name: "_tokenWallet",
						type: "address",
					},
				],
				payable: false,
				stateMutability: "nonpayable",
				type: "constructor",
			},
			{
				payable: true,
				stateMutability: "payable",
				type: "fallback",
			},
			{
				anonymous: false,
				inputs: [
					{
						indexed: true,
						name: "purchaser",
						type: "address",
					},
					{
						indexed: true,
						name: "beneficiary",
						type: "address",
					},
					{
						indexed: false,
						name: "value",
						type: "uint256",
					},
					{
						indexed: false,
						name: "amount",
						type: "uint256",
					},
				],
				name: "TokensPurchased",
				type: "event",
			},
		],property.crowdsaleAddress);
		const val = price * property.tokenValue.$numberDecimal;
		mycrowdsaleContract.methods
			.buyTokens(coinbase) //for the current metamask account
			.send({ from: coinbase, value: web3.utils.toWei(val.toString()) })//from the current metamask account
			.then(async function(receipt){
				console.log(receipt);
				const body = JSON.stringify({ symbol : property.symbol, id : property._id });
				const res = await API.put("/api/user",body);
				if(res.data)
				{
					console.log("user token added")
					dispatch(setLoading(false)); 
				}
			});
	} catch (err) {
		// const errors = err.response.data.error;
		console.log(err);
		dispatch(setLoading(false));
	}
}
