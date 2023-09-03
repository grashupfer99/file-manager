// core
import { FC } from "react";
// components
import { Container } from "@chakra-ui/react";
import DataTable from "components/DataTable";
// hooks
import { usePageTitle } from "hooks";
// config
import { PAGE_TITLES } from "config";

// ----------------------------------------------------------------------
const LINKS = [
  {
    created_at: 1693239694,
    key: "SBRY1M9H",
    expires_at: 1693409494,
    download_count: 3,
    count: 1,
    size: 3460300,
    summary: "sobaeksan.png",
    thumbnailUrl: "https://storage-fe.fastraffic.io/thumbnails/SBRY1M9H.jpg",
    files: [
      {
        key: "f2b23a10323234cbd819d6f0786937208.jpg",
        thumbnailUrl:
          "https://storage-fe.fastraffic.io/thumbnails/SBRY1M9H/f2b23a10323234cbd819d6f0786937208.jpeg",
        name: "sobaeksan.jpg",
        size: 3460300,
      },
    ],
    sent: {
      subject: "Sobaek Mountain Photo",
      content: "Sharing Photo File",
      emails: ["recruit@send-anywhere.com"],
    },
  },
  {
    created_at: 1693240877,
    key: "RLV09BBB",
    expires_at: 1694450477,
    download_count: 0,
    count: 1,
    size: 3460300,
    summary: "sobaeksan.png",
    thumbnailUrl: "https://storage-fe.fastraffic.io/thumbnails/RLV09BBB.jpg",
    files: [
      {
        key: "f2b23a10323234cbd819d6f0786937208.jpg",
        thumbnailUrl:
          "https://storage-fe.fastraffic.io/thumbnails/RLV09BBB/f2b23a10323234cbd819d6f0786937208.jpeg",
        name: "sobaeksan.jpg",
        size: 3460300,
      },
    ],
    sent: {
      subject: "Sobaek Mountain Photo",
      content: "Sharing Photo File",
      emails: ["recruit@send-anywhere.com"],
    },
  },
  {
    created_at: 1693241001,
    key: "7LF4MDLY",
    expires_at: 1693410801,
    download_count: 0,
    count: 1,
    size: 3460300,
    summary: "sobaeksan.png",
    thumbnailUrl: "https://storage-fe.fastraffic.io/thumbnails/7LF4MDLY.jpg",
    files: [
      {
        key: "f2b23a10323234cbd819d6f0786937208.jpg",
        thumbnailUrl:
          "https://storage-fe.fastraffic.io/thumbnails/7LF4MDLY/f2b23a10323234cbd819d6f0786937208.jpeg",
        name: "sobaeksan.jpg",
        size: 3460300,
      },
    ],
    sent: {
      subject: "Sobaek Mountain Photo",
      content: "Sharing Photo File",
      emails: ["recruit@send-anywhere.com"],
    },
  },
];
// ----------------------------------------------------------------------

const Home: FC = () => {
  usePageTitle(PAGE_TITLES.HOME);

  return (
    <Container py={12} maxWidth="container.lg">
      <DataTable data={LINKS} />
    </Container>
  );
};

export default Home;
