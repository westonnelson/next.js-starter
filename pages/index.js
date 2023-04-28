import { ConnectWallet } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to NFTE staking rewards!
        </h1>

        <p className={styles.description}>
          Stake your $NFTE tokens and earn $ARB rewards. 
          Staking contract address on Arbitrum: 0xaa9d9a8f810463f24825c05f3075c1fc6a430430
      
        </p>

        <div className={styles.connect}>
          <ConnectWallet />
        </div>

        <div className={styles.grid}>
          <a href="https://arbiscan.io/address/0xaa9d9a8f810463f24825c05f3075c1fc6a430430" className={styles.card}>
            <h2>View on Arbiscan &rarr;</h2>
            <p>
              Review the token staking contract on the Arbitrum block explorer.
            </p>
          </a>

          <a href="https://nftearth.exchange" className={styles.card}>
            <h2>Marketplace &rarr;</h2>
            <p>
              Trade NFTs on L2.
            </p>
          </a>

          <a
            href="https://docs.nftearth.exchange"
            className={styles.card}
          >
            <h2>Docs &rarr;</h2>
            <p>
              Docs
            </p>
          </a>
        </div>
      </main>
    </div>
  );
}
