"use client";

import { useEffect } from "react";
import { sdk } from "@farcaster/miniapp-sdk";

import { Wallet } from "@coinbase/onchainkit/wallet";
import {
  Transaction,
  TransactionButton,
  TransactionStatus,
  TransactionStatusLabel,
  TransactionStatusAction,
} from "@coinbase/onchainkit/transaction";

import { base } from "viem/chains";
import { parseEther } from "viem";
import styles from "./page.module.css";

// Твой адрес для донатов
const DONATE_ADDRESS = "0xdA5043637A9505A9daA85c86fEE7D8D463307698";

// Суммы доната в ETH
const DONATE_AMOUNTS = [
  { label: "☕ 0.0001 ETH", value: "0.0001" },
  { label: "🍕 0.001 ETH", value: "0.001" },
  { label: "🚀 0.01 ETH", value: "0.01" },
];

export default function Home() {
  useEffect(() => {
    // важно: без этого Warpcast/FC будет держать splash
    sdk.actions.ready();
  }, []);

  return (
    <div className={styles.container}>
      <header className={styles.headerWrapper}>
        <Wallet />
      </header>

      <div className={styles.content}>
        <h1 className={styles.title}>Donate Ronin</h1>
        <p style={{ marginBottom: "20px", color: "#888" }}>
          Support my work with a small donation 💙
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {DONATE_AMOUNTS.map((amount) => (
            <Transaction
              key={amount.value}
              chainId={base.id}
              calls={[
                {
                  to: DONATE_ADDRESS,
                  value: parseEther(amount.value),
                },
              ]}
              onSuccess={() => alert("Respect Bro! 🎉")}
              onError={() => alert("Repeat? Something went wrong")}
            >
              <TransactionButton text={amount.label} />
              <TransactionStatus>
                <TransactionStatusLabel />
                <TransactionStatusAction />
              </TransactionStatus>
            </Transaction>
          ))}
        </div>
      </div>
    </div>
  );
}
