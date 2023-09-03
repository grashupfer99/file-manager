// core
import type { FC } from "react";
import { useParams, useLocation, Navigate } from "react-router-dom";
// components
import {
  Container,
  Stack,
  Heading,
  Text,
  Box,
  Button,
  Divider,
  Flex,
  Image,
} from "@chakra-ui/react";
// hooks
import { usePageTitle } from "hooks";

// config
import { DOMAIN_ADDRESS, PAGE_TITLES } from "config";
// paths
import { NOT_FOUND } from "routes/paths";
// ----------------------------------------------------------------------

interface RouterState {
  state: ILink | undefined;
}
// ----------------------------------------------------------------------

const Link: FC = () => {
  const { linkId } = useParams<{ linkId: string }>();
  const { state } = useLocation() as RouterState;
  console.log("linkId ", linkId);
  console.log("location ", state);
  usePageTitle(PAGE_TITLES.LINK + " " + state?.key);

  if (!state || (state.key && state.key !== linkId))
    return <Navigate to={NOT_FOUND} />;

  return (
    <Container
      py={12}
      maxWidth="container.lg"
      textAlign={["center", "initial"]}
    >
      {/* Header */}
      <Stack spacing="8" direction={["column", "row"]}>
        <Box>
          <Heading fontSize="2xl">{state.sent.subject}</Heading>
          <Text cursor="pointer" textDecoration="underline" color="gray.500">
            {DOMAIN_ADDRESS}/{state.key}
          </Text>
        </Box>
        <Box ml={[0, "auto"]}>
          <Button
            fontSize="sm"
            leftIcon={
              <svg
                width="16px"
                height="16px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5535 16.5061C12.4114 16.6615 12.2106 16.75 12 16.75C11.7894 16.75 11.5886 16.6615 11.4465 16.5061L7.44648 12.1311C7.16698 11.8254 7.18822 11.351 7.49392 11.0715C7.79963 10.792 8.27402 10.8132 8.55352 11.1189L11.25 14.0682V3C11.25 2.58579 11.5858 2.25 12 2.25C12.4142 2.25 12.75 2.58579 12.75 3V14.0682L15.4465 11.1189C15.726 10.8132 16.2004 10.792 16.5061 11.0715C16.8118 11.351 16.833 11.8254 16.5535 12.1311L12.5535 16.5061Z"
                  fill="#FFFFFF"
                />
                <path
                  d="M3.75 15C3.75 14.5858 3.41422 14.25 3 14.25C2.58579 14.25 2.25 14.5858 2.25 15V15.0549C2.24998 16.4225 2.24996 17.5248 2.36652 18.3918C2.48754 19.2919 2.74643 20.0497 3.34835 20.6516C3.95027 21.2536 4.70814 21.5125 5.60825 21.6335C6.47522 21.75 7.57754 21.75 8.94513 21.75H15.0549C16.4225 21.75 17.5248 21.75 18.3918 21.6335C19.2919 21.5125 20.0497 21.2536 20.6517 20.6516C21.2536 20.0497 21.5125 19.2919 21.6335 18.3918C21.75 17.5248 21.75 16.4225 21.75 15.0549V15C21.75 14.5858 21.4142 14.25 21 14.25C20.5858 14.25 20.25 14.5858 20.25 15C20.25 16.4354 20.2484 17.4365 20.1469 18.1919C20.0482 18.9257 19.8678 19.3142 19.591 19.591C19.3142 19.8678 18.9257 20.0482 18.1919 20.1469C17.4365 20.2484 16.4354 20.25 15 20.25H9C7.56459 20.25 6.56347 20.2484 5.80812 20.1469C5.07435 20.0482 4.68577 19.8678 4.40901 19.591C4.13225 19.3142 3.9518 18.9257 3.85315 18.1919C3.75159 17.4365 3.75 16.4354 3.75 15Z"
                  fill="#FFFFFF"
                />
              </svg>
            }
            onClick={() => {
              alert("Downloaded");
            }}
            colorScheme="green"
          >
            Download
          </Button>
        </Box>
      </Stack>
      {/* Card */}
      <Box
        sx={{
          mt: 6,
          borderWidth: 1,
          borderRadius: 6,
          borderColor: "gray.200",
        }}
      >
        <Flex
          m={6}
          flexDirection={["column", "column", "row"]}
          minWidth="max-content"
          alignItems="center"
          gap="2"
        >
          <Box flex="1" mb="auto">
            <Text fontSize="sm" fontWeight="bold" color="gray.500">
              Link Creation Date
            </Text>
            <Text fontSize="sm" mb={6}>
              {state.created_at}
            </Text>
            <Text fontSize="sm" fontWeight="bold" color="gray.500">
              Content
            </Text>
            <Text fontSize="sm" mb={6}>
              {state.sent.content}
            </Text>
            <Text fontSize="sm" fontWeight="bold" color="gray.500">
              Download Count
            </Text>
            <Text fontSize="sm" mb={6}>
              {state.download_count}
            </Text>
          </Box>
          <Box flex="1">
            <Box bgColor="#f8f0f0">
              <Image
                mx="auto"
                boxSize={["200px", "320px"]}
                objectFit="cover"
                src={state.thumbnailUrl}
                alt={state.sent.subject}
              />
            </Box>
          </Box>
        </Flex>

        <Divider color="gray.200" />
        <Box display="flex" m={6}>
          <Text fontSize="sm" fontWeight="bold" color="gray.500" mr="auto">
            Total {state.files.length} file
            {state.files.length === 1 ? "" : "s"}
          </Text>
          <Text fontSize="sm" fontWeight="bold" color="gray.500">
            1.00 MB
          </Text>
        </Box>
        {state.files.length === 0
          ? null
          : state.files.map((file, index) => (
              <Box key={file.key} mb={state.files.length - 1 === index ? 3 : 0}>
                <Divider my={3} color="gray.200" />
                <Box mx={6} display="flex" alignItems="center">
                  <Image
                    boxSize="40px"
                    objectFit="cover"
                    src={file.thumbnailUrl}
                    alt={file.name}
                  />
                  <Text fontSize="sm" ml={2}>
                    {file.name}
                  </Text>
                  <Text fontSize="sm" ml="auto">
                    {file.size}
                  </Text>
                </Box>
              </Box>
            ))}
      </Box>
    </Container>
  );
};

export default Link;
