import { ThirdwebSDK } from "@thirdweb-dev/sdk/evm";

const sdk = new ThirdwebSDK("arbitrum");
const contract = await sdk.getContract("0xaA9D9a8f810463f24825c05f3075c1Fc6a430430");

const appURI = await contract.appURI.get(appURI);
console.log(appURI) // "ipfs://some_ipfs_hash";

const metadata = await contract.metadata.get();
console.log(metadata);

const rolesAndMembers = await contract.roles.getAll();