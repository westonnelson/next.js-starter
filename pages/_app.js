import { ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "arbitrum";

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider activeChain={activeChain}>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

import { Web3Button } from "@thirdweb-dev/react";

const Home = () => {
  return (
    <Web3Button
      contractAddress="{{contract_address}}"
      action={async (contract) => contract.call("myFunctionName")}
    >
      Call myFunctionName from the connected wallet
    </Web3Button>
  );
};

export default MyApp;