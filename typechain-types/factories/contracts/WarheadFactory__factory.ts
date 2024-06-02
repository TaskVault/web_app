/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../common";
import type {
  WarheadFactory,
  WarheadFactoryInterface,
} from "../../contracts/WarheadFactory";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_trustedForwarder",
        type: "address",
      },
      {
        internalType: "contract WarheadNft",
        name: "_warheadNft",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "warheadId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "claimer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "claimedAt",
        type: "uint256",
      },
    ],
    name: "WarheadClaimed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "warheadId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "dropper",
        type: "address",
      },
    ],
    name: "WarheadCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "warheadId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "dropper",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "targetReceiver",
        type: "address",
      },
    ],
    name: "WarheadCreatedWithReceiver",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "warheadId",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "int256",
            name: "lat",
            type: "int256",
          },
          {
            internalType: "int256",
            name: "long",
            type: "int256",
          },
        ],
        indexed: false,
        internalType: "struct WarheadFactory.Coord",
        name: "target",
        type: "tuple",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "impactTime",
        type: "uint256",
      },
    ],
    name: "WarheadDropped",
    type: "event",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "int256",
            name: "lat",
            type: "int256",
          },
          {
            internalType: "int256",
            name: "long",
            type: "int256",
          },
        ],
        internalType: "struct WarheadFactory.Coord",
        name: "location",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "warheadId",
        type: "uint256",
      },
    ],
    name: "claim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "targetReceiver",
        type: "address",
      },
    ],
    name: "createWarhead",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "warheadId",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "int256",
            name: "lat",
            type: "int256",
          },
          {
            internalType: "int256",
            name: "long",
            type: "int256",
          },
        ],
        internalType: "struct WarheadFactory.Coord",
        name: "coord",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "impactTime",
        type: "uint256",
      },
    ],
    name: "dropWarhead",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "warheadId",
        type: "uint256",
      },
    ],
    name: "fetchWarheadInfo",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "dropper",
            type: "address",
          },
          {
            internalType: "bool",
            name: "isLaunched",
            type: "bool",
          },
          {
            components: [
              {
                internalType: "int256",
                name: "lat",
                type: "int256",
              },
              {
                internalType: "int256",
                name: "long",
                type: "int256",
              },
            ],
            internalType: "struct WarheadFactory.Coord",
            name: "target",
            type: "tuple",
          },
          {
            internalType: "uint256",
            name: "impactTime",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "claimer",
            type: "address",
          },
          {
            internalType: "bool",
            name: "isClaimed",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "claimedAt",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "targetReceiver",
            type: "address",
          },
        ],
        internalType: "struct WarheadFactory.WarheadObject",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "forwarder",
        type: "address",
      },
    ],
    name: "isTrustedForwarder",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "trustedForwarder",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "versionRecipient",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "warheadNft",
    outputs: [
      {
        internalType: "contract WarheadNft",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a060405260006001553480156200001657600080fd5b506040516200262b3803806200262b83398181016040528101906200003c9190620001ab565b818073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff16815250505080600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555033600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050620001f2565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200012e8262000101565b9050919050565b620001408162000121565b81146200014c57600080fd5b50565b600081519050620001608162000135565b92915050565b6000620001738262000121565b9050919050565b620001858162000166565b81146200019157600080fd5b50565b600081519050620001a5816200017a565b92915050565b60008060408385031215620001c557620001c4620000fc565b5b6000620001d5858286016200014f565b9250506020620001e88582860162000194565b9150509250929050565b60805161241d6200020e6000396000610479015261241d6000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c80638da5cb5b116100665780638da5cb5b1461016f578063965e43501461018d578063c0b0bdcc146101a9578063fd5552f0146101c7578063ff08b9fa146101e35761009e565b8063150b7a02146100a3578063486ff0cd146100d3578063572b6c05146100f1578063619cfe70146101215780637da0a87714610151575b600080fd5b6100bd60048036038101906100b89190611383565b6101ff565b6040516100ca9190611446565b60405180910390f35b6100db610214565b6040516100e891906114f1565b60405180910390f35b61010b60048036038101906101069190611513565b610251565b604051610118919061155b565b60405180910390f35b61013b60048036038101906101369190611576565b610290565b60405161014891906116bb565b60405180910390f35b610159610475565b60405161016691906116e6565b60405180910390f35b61017761049d565b60405161018491906116e6565b60405180910390f35b6101a760048036038101906101a291906117fd565b6104c3565b005b6101b16106ef565b6040516101be91906118af565b60405180910390f35b6101e160048036038101906101dc91906118ee565b610715565b005b6101fd60048036038101906101f89190611513565b610d06565b005b600063150b7a0260e01b905095945050505050565b60606040518060400160405280600181526020017f3100000000000000000000000000000000000000000000000000000000000000815250905090565b600061025b610475565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16149050919050565b6102986111cb565b60015482106102dc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102d39061197a565b60405180910390fd5b600080838152602001908152602001600020604051806101000160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016000820160149054906101000a900460ff1615151515815260200160018201604051806040016040529081600082015481526020016001820154815250508152602001600382015481526020016004820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016004820160149054906101000a900460ff16151515158152602001600582015481526020016006820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815250509050919050565b60007f0000000000000000000000000000000000000000000000000000000000000000905090565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6001548310610507576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104fe9061197a565b60405180910390fd5b61050f61106f565b73ffffffffffffffffffffffffffffffffffffffff1660008085815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146105b1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105a890611a0c565b60405180910390fd5b60008084815260200190815260200160002060000160149054906101000a900460ff1615610614576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161060b90611a78565b60405180910390fd5b428111610656576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161064d90611b0a565b60405180910390fd5b6000806000858152602001908152602001600020905060018160000160146101000a81548160ff021916908315150217905550828160010160008201518160000155602082015181600101559050508181600301819055507fd7e80e8a3cce1e964e02003e756a147713df44ee24effeacc139fb94c68499d48484846040516106e193929190611b68565b60405180910390a150505050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b80600154811061075a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107519061197a565b60405180910390fd5b60008082815260200190815260200160002060000160149054906101000a900460ff166107bc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107b390611beb565b60405180910390fd5b60008082815260200190815260200160002060040160149054906101000a900460ff161561081f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161081690611c57565b60405180910390fd5b426000808381526020019081526020016000206003015410610876576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161086d90611cc3565b60405180910390fd5b6000806000848152602001908152602001600020604051806101000160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016000820160149054906101000a900460ff1615151515815260200160018201604051806040016040529081600082015481526020016001820154815250508152602001600382015481526020016004820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016004820160149054906101000a900460ff16151515158152602001600582015481526020016006820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815250509050610a1461106f565b73ffffffffffffffffffffffffffffffffffffffff16816000015173ffffffffffffffffffffffffffffffffffffffff1603610a85576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a7c90611d2f565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168160e0015173ffffffffffffffffffffffffffffffffffffffff1614610b3757610ac561106f565b73ffffffffffffffffffffffffffffffffffffffff168160e0015173ffffffffffffffffffffffffffffffffffffffff1614610b36576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b2d90611dc1565b60405180910390fd5b5b6000610b57826040015186803603810190610b529190611de1565b6110e4565b9050610190811115610b9e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b9590611e5a565b60405180910390fd5b60008060008681526020019081526020016000209050610bbc61106f565b8160040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060018160040160146101000a81548160ff021916908315150217905550428160050181905550600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166342842e0e30610c6b61106f565b886040518463ffffffff1660e01b8152600401610c8a93929190611e7a565b600060405180830381600087803b158015610ca457600080fd5b505af1158015610cb8573d6000803e3d6000fd5b505050507f6fb21b090ef5a80178d92fae262e1a5e618d9ae35e13fda0efd7677a4c803fb785610ce661106f565b42604051610cf693929190611eb1565b60405180910390a1505050505050565b600060016000815480929190610d1b90611f17565b919050559050600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f0a48bd830836040518363ffffffff1660e01b8152600401610d7e929190611f5f565b600060405180830381600087803b158015610d9857600080fd5b505af1158015610dac573d6000803e3d6000fd5b50505050604051806101000160405280610dc461106f565b73ffffffffffffffffffffffffffffffffffffffff1681526020016000151581526020016040518060400160405280600081526020016000815250815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600015158152602001600081526020018373ffffffffffffffffffffffffffffffffffffffff1681525060008083815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160000160146101000a81548160ff021916908315150217905550604082015181600101600082015181600001556020820151816001015550506060820151816003015560808201518160040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060a08201518160040160146101000a81548160ff02191690831515021790555060c0820151816005015560e08201518160060160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550905050600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161461102a577f3677b070ba3908bb838cc6aa32e2230792b505a8b6fd9c5541cbd5e73f411b578161100d61106f565b8460405161101d93929190611f88565b60405180910390a161106b565b7ff88406262d1acf4e96aa7be5d6a4795eabf142090ad606434f7b147349e5ec3b8161105461106f565b604051611062929190611fbf565b60405180910390a15b5050565b600080600036905090506000611083611140565b905061108e33610251565b801561109a5750808210155b156110d45760003682846110ae9190611fe8565b9080926110bd93929190612026565b906110c891906120a5565b60601c925050506110e1565b6110dc611149565b925050505b90565b60006111386002836020015185602001516110ff9190612104565b61110991906122a3565b60028460000151866000015161111f9190612104565b61112991906122a3565b611133919061230f565b611151565b905092915050565b60006014905090565b600033905090565b600060038211156111b857819050600060016002846111709190612382565b61117a91906123b3565b90505b818110156111b25780915060028182856111979190612382565b6111a191906123b3565b6111ab9190612382565b905061117d565b506111c6565b600082146111c557600190505b5b919050565b604051806101000160405280600073ffffffffffffffffffffffffffffffffffffffff16815260200160001515815260200161120561125c565b815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200160001515815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff1681525090565b604051806040016040528060008152602001600081525090565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006112b58261128a565b9050919050565b6112c5816112aa565b81146112d057600080fd5b50565b6000813590506112e2816112bc565b92915050565b6000819050919050565b6112fb816112e8565b811461130657600080fd5b50565b600081359050611318816112f2565b92915050565b600080fd5b600080fd5b600080fd5b60008083601f8401126113435761134261131e565b5b8235905067ffffffffffffffff8111156113605761135f611323565b5b60208301915083600182028301111561137c5761137b611328565b5b9250929050565b60008060008060006080868803121561139f5761139e611280565b5b60006113ad888289016112d3565b95505060206113be888289016112d3565b94505060406113cf88828901611309565b935050606086013567ffffffffffffffff8111156113f0576113ef611285565b5b6113fc8882890161132d565b92509250509295509295909350565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6114408161140b565b82525050565b600060208201905061145b6000830184611437565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561149b578082015181840152602081019050611480565b60008484015250505050565b6000601f19601f8301169050919050565b60006114c382611461565b6114cd818561146c565b93506114dd81856020860161147d565b6114e6816114a7565b840191505092915050565b6000602082019050818103600083015261150b81846114b8565b905092915050565b60006020828403121561152957611528611280565b5b6000611537848285016112d3565b91505092915050565b60008115159050919050565b61155581611540565b82525050565b6000602082019050611570600083018461154c565b92915050565b60006020828403121561158c5761158b611280565b5b600061159a84828501611309565b91505092915050565b6115ac816112aa565b82525050565b6115bb81611540565b82525050565b6000819050919050565b6115d4816115c1565b82525050565b6040820160008201516115f060008501826115cb565b50602082015161160360208501826115cb565b50505050565b611612816112e8565b82525050565b6101208201600082015161162f60008501826115a3565b50602082015161164260208501826115b2565b50604082015161165560408501826115da565b5060608201516116686080850182611609565b50608082015161167b60a08501826115a3565b5060a082015161168e60c08501826115b2565b5060c08201516116a160e0850182611609565b5060e08201516116b56101008501826115a3565b50505050565b6000610120820190506116d16000830184611618565b92915050565b6116e0816112aa565b82525050565b60006020820190506116fb60008301846116d7565b92915050565b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61173e826114a7565b810181811067ffffffffffffffff8211171561175d5761175c611706565b5b80604052505050565b6000611770611276565b905061177c8282611735565b919050565b61178a816115c1565b811461179557600080fd5b50565b6000813590506117a781611781565b92915050565b6000604082840312156117c3576117c2611701565b5b6117cd6040611766565b905060006117dd84828501611798565b60008301525060206117f184828501611798565b60208301525092915050565b60008060006080848603121561181657611815611280565b5b600061182486828701611309565b9350506020611835868287016117ad565b925050606061184686828701611309565b9150509250925092565b6000819050919050565b600061187561187061186b8461128a565b611850565b61128a565b9050919050565b60006118878261185a565b9050919050565b60006118998261187c565b9050919050565b6118a98161188e565b82525050565b60006020820190506118c460008301846118a0565b92915050565b600080fd5b6000604082840312156118e5576118e46118ca565b5b81905092915050565b6000806060838503121561190557611904611280565b5b6000611913858286016118cf565b925050604061192485828601611309565b9150509250929050565b7f5761726865616420646f6573206e6f7420657869737400000000000000000000600082015250565b600061196460168361146c565b915061196f8261192e565b602082019050919050565b6000602082019050818103600083015261199381611957565b9050919050565b7f43616e6e6f742064726f7020736f6d656f6e6520656c7365277320776172686560008201527f6164000000000000000000000000000000000000000000000000000000000000602082015250565b60006119f660228361146c565b9150611a018261199a565b604082019050919050565b60006020820190508181036000830152611a25816119e9565b9050919050565b7f5761726865616420697320616c7265616479206c61756e636865640000000000600082015250565b6000611a62601b8361146c565b9150611a6d82611a2c565b602082019050919050565b60006020820190508181036000830152611a9181611a55565b9050919050565b7f496d706163742074696d652073686f756c6420626520696e207468652066757460008201527f7572650000000000000000000000000000000000000000000000000000000000602082015250565b6000611af460238361146c565b9150611aff82611a98565b604082019050919050565b60006020820190508181036000830152611b2381611ae7565b9050919050565b611b33816112e8565b82525050565b604082016000820151611b4f60008501826115cb565b506020820151611b6260208501826115cb565b50505050565b6000608082019050611b7d6000830186611b2a565b611b8a6020830185611b39565b611b976060830184611b2a565b949350505050565b7f57617268656164206973206e6f7420796574206c61756e636865640000000000600082015250565b6000611bd5601b8361146c565b9150611be082611b9f565b602082019050919050565b60006020820190508181036000830152611c0481611bc8565b9050919050565b7f5761726865616420697320616c726561647920636c61696d6564000000000000600082015250565b6000611c41601a8361146c565b9150611c4c82611c0b565b602082019050919050565b60006020820190508181036000830152611c7081611c34565b9050919050565b7f5761726865616420686173206e6f74206c616e64656420796574000000000000600082015250565b6000611cad601a8361146c565b9150611cb882611c77565b602082019050919050565b60006020820190508181036000830152611cdc81611ca0565b9050919050565b7f43616e6e6f7420636c61696d20796f7572206f776e2077617268656164000000600082015250565b6000611d19601d8361146c565b9150611d2482611ce3565b602082019050919050565b60006020820190508181036000830152611d4881611d0c565b9050919050565b7f43616e6e6f7420636c61696d207761726865616420666f7220736f6d656f6e6560008201527f20656c7365000000000000000000000000000000000000000000000000000000602082015250565b6000611dab60258361146c565b9150611db682611d4f565b604082019050919050565b60006020820190508181036000830152611dda81611d9e565b9050919050565b600060408284031215611df757611df6611280565b5b6000611e05848285016117ad565b91505092915050565b7f4c6f636174696f6e20697320746f6f206661722066726f6d2074617267657400600082015250565b6000611e44601f8361146c565b9150611e4f82611e0e565b602082019050919050565b60006020820190508181036000830152611e7381611e37565b9050919050565b6000606082019050611e8f60008301866116d7565b611e9c60208301856116d7565b611ea96040830184611b2a565b949350505050565b6000606082019050611ec66000830186611b2a565b611ed360208301856116d7565b611ee06040830184611b2a565b949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611f22826112e8565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611f5457611f53611ee8565b5b600182019050919050565b6000604082019050611f7460008301856116d7565b611f816020830184611b2a565b9392505050565b6000606082019050611f9d6000830186611b2a565b611faa60208301856116d7565b611fb760408301846116d7565b949350505050565b6000604082019050611fd46000830185611b2a565b611fe160208301846116d7565b9392505050565b6000611ff3826112e8565b9150611ffe836112e8565b925082820390508181111561201657612015611ee8565b5b92915050565b600080fd5b600080fd5b6000808585111561203a5761203961201c565b5b8386111561204b5761204a612021565b5b6001850283019150848603905094509492505050565b600082905092915050565b60007fffffffffffffffffffffffffffffffffffffffff00000000000000000000000082169050919050565b600082821b905092915050565b60006120b18383612061565b826120bc813561206c565b925060148210156120fc576120f77fffffffffffffffffffffffffffffffffffffffff00000000000000000000000083601403600802612098565b831692505b505092915050565b600061210f826115c1565b915061211a836115c1565b925082820390508181126000841216828213600085121516171561214157612140611ee8565b5b92915050565b60008160011c9050919050565b6000808291508390505b600185111561219e5780860481111561217a57612179611ee8565b5b60018516156121895780820291505b808102905061219785612147565b945061215e565b94509492505050565b600082600081146121bf57600181146121c9576121d2565b600191505061228e565b8291505061228e565b50816121e1576000905061228e565b6001905060008213600181146121fe57600081146122165761222a565b82860483111561221157612210611ee8565b5b61222a565b82860583121561222957612228611ee8565b5b5b506001831615612238578190505b818202915061224683612147565b925061225485848484612154565b9250905081850481116000821316156122705761226f611ee8565b5b818405811260008212161561228857612287611ee8565b5b81810290505b949350505050565b600060ff82169050919050565b60006122ae826115c1565b91506122b983612296565b92506123077f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f800000000000000000000000000000000000000000000000000000000000000085856121a7565b905092915050565b600061231a826115c1565b9150612325836115c1565b92508282019050828112156000831216838212600084121516171561234d5761234c611ee8565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600061238d826112e8565b9150612398836112e8565b9250826123a8576123a7612353565b5b828204905092915050565b60006123be826112e8565b91506123c9836112e8565b92508282019050808211156123e1576123e0611ee8565b5b9291505056fea264697066735822122094c487d8d175e5736b9042c9b38ed091e35110d6cbf161b3d92a9dbc97abb38e64736f6c63430008180033";

type WarheadFactoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: WarheadFactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class WarheadFactory__factory extends ContractFactory {
  constructor(...args: WarheadFactoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _trustedForwarder: AddressLike,
    _warheadNft: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      _trustedForwarder,
      _warheadNft,
      overrides || {}
    );
  }
  override deploy(
    _trustedForwarder: AddressLike,
    _warheadNft: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(
      _trustedForwarder,
      _warheadNft,
      overrides || {}
    ) as Promise<
      WarheadFactory & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): WarheadFactory__factory {
    return super.connect(runner) as WarheadFactory__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): WarheadFactoryInterface {
    return new Interface(_abi) as WarheadFactoryInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): WarheadFactory {
    return new Contract(address, _abi, runner) as unknown as WarheadFactory;
  }
}
