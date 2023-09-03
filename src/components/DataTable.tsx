// core
import { FC } from "react";
import { useNavigate } from "react-router-dom";
// components
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Text,
  Avatar,
  Image,
  HStack,
  Box,
} from "@chakra-ui/react";
// svg
import fileIcon from "assets/file.svg";
// consts
import { LINK } from "routes/paths";
import { DOMAIN_ADDRESS } from "config";

// ----------------------------------------------------------------------

const DataTable: FC<{ data: ILink[]; cols?: string[] }> = ({
  data,
  cols = [],
}) => {
  return (
    <Table>
      <TableHead cols={cols} />
      <Tbody>
        {data.length > 0 ? (
          data.map((item) => {
            return <TableRow key={item.key} link={item} />;
          })
        ) : (
          <Tr>
            <Td colSpan={cols.length} textAlign="center" py={12}>
              Oops! It looks like there is no data to display in the table.
            </Td>
          </Tr>
        )}
      </Tbody>
    </Table>
  );
};

DataTable.defaultProps = {
  cols: ["Subject", "Number of Files", "Size", "Validity Period", "Recipients"],
};

const TableHead: FC<{ cols: string[] }> = ({ cols }) => {
  return (
    <Thead>
      <Tr>
        {cols.map((col, colKey) => (
          <Th textTransform="capitalize" color="gray.500" key={colKey}>
            {col}
          </Th>
        ))}
      </Tr>
    </Thead>
  );
};

const TableRow: FC<{ link: ILink }> = ({ link }) => {
  const navigate = useNavigate();

  const linkUrl = DOMAIN_ADDRESS + "/" + link.key;
  return (
    <Tr
      key={link.key}
      onClick={() => {
        navigate(LINK + "/" + link.key, { state: link });
      }}
    >
      <Td>
        <HStack>
          <Box pr={3}>
            <Image src={fileIcon} width={10} height={10} />
          </Box>
          <Box>
            <Text fontSize="sm" fontWeight="bold">
              {link.sent.subject}
            </Text>
            <Text
              fontSize="sm"
              cursor="pointer"
              decoration="underline"
              color="gray.500"
            >
              {linkUrl}
            </Text>
          </Box>
        </HStack>
      </Td>
      <Td fontSize="sm" color="gray.500">
        {link.files.length}
      </Td>
      <Td fontSize="sm" color="gray.500">
        {link.size}
      </Td>
      <Td fontSize="sm" color="gray.500">
        {link.expires_at}
      </Td>
      <Td>
        <Avatar
          size="sm"
          backgroundColor="green"
          name={link.sent.emails.length > 0 ? link.sent.emails[0] : "J"}
        />
      </Td>
    </Tr>
  );
};

export default DataTable;
