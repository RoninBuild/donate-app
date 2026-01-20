import type { Metadata } from "next";
import DonateClient from "./DonateClient";

export const metadata: Metadata = {
  title: "Donate Ronin",
  description: "Support my work with a small donation",
};

export default function Home() {
  return <DonateClient />;
}
