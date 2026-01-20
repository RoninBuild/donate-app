import type { Metadata } from "next";
import DonateClient from "./DonateClient";

export const metadata: Metadata = {
  other: {
    "base:app_id": "696d16d7c0ab25addaaaf46a",
  },
};

export default function Home() {
  return <DonateClient />;
}
