const boxerBtn = document.getElementById('boxer');
const bulldogBtn = document.getElementById('bulldog');
const retrieverBtn = document.getElementById('retriever');
const terrierBtn = document.getElementById('terrier');

let list = ['0', '0', '0', '0'];

let account;
if (window.ethereum) {
	window.web3 = new Web3(window.ethereum)
	// ask user for permission
	ethereum
		.request({ method: 'eth_requestAccounts' })
		.then(result => {
			account = result[0];
			web3.eth.defaultAccount = result[0]
		})
		.catch((error) => {
			if (error.code === 4001) {
				// EIP-1193 userRejectedRequest error
				console.log('Please connect to MetaMask.');
			} else {
				console.error(error);
			}
		});
	// user approved permission

	// user rejected permission
}
else if (window.web3) {
	window.web3 = new Web3(window.web3.currentProvider)
	// no need to ask for permission
}
else {
	window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
}

// Remix IDE를 통해 얻은 컨트렉트 주소
const contractAddress = '0x9Efd99D6e6C1c1C483E854bE65b697aF04EF4E52';

// Remix IDE를 통해 ABI 값
const abi = JSON.parse(`[
	{
		"constant": true,
		"inputs": [],
		"name": "getAdopters",
		"outputs": [
			{
				"name": "",
				"type": "address[4]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "adopters",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "petId",
				"type": "uint256"
			}
		],
		"name": "adopt",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	}
]`)

const contract = new web3.eth.Contract(abi, contractAddress);

boxerBtn.onclick = (e) => {
	contract.methods.adopt(0).send({ from: account }).then(text => {
		list[0] = text.from;
		registerGetInfo(e)
	})
}

bulldogBtn.onclick = (e) => {
	contract.methods.adopt(1).send({ from: account }).then(text => {
		list[1] = text.from;
		registerGetInfo(e)
	})
}

retrieverBtn.onclick = (e) => {
	contract.methods.adopt(2).send({ from: account }).then(text => {
		list[2] = text.from;
		registerGetInfo(e)
	})
}

terrierBtn.onclick = (e) => {
	contract.methods.adopt(3).send({ from: account }).then(text => {
		list[3] = text.from;
		registerGetInfo(e)
	})
}


function registerGetInfo(e) {
	e.target.innerText = '입양완료'
	contract.methods.getAdopters().call()
}

function init() {
	contract.methods.getAdopters().call().then(info => {
		info.map((addressId, idx) => {
			list[idx] = addressId
		})

		if (list[0].toUpperCase() == account.toUpperCase()) {
			boxerBtn.innerText = '입양완료'
		}
		if (list[1].toUpperCase() == account.toUpperCase()) {
			bulldogBtn.innerText = '입양완료'
		}
		if (list[2].toUpperCase() == account.toUpperCase()) {
			retrieverBtn.innerText = '입양완료'
		}
		if (list[3].toUpperCase() == account.toUpperCase()) {
			terrierBtn.innerText = '입양완료'
		}
	});
}

init()