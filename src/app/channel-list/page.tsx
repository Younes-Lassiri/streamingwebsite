import { Metadata } from "next";
import ChannelList from "./channels";

export const metadata: Metadata = {
  title: "IPTV Channel List | 25,000+ Channels | 8K Stream Live",
  description: "Browse our massive library of 25,000+ live channels and 120,000+ VODs.",
  alternates: {
    canonical: "/channel-list",
  },
};

export default function Page() {
  return <ChannelList />;
}