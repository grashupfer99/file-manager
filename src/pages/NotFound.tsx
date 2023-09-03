// core
import type { FC } from "react";
import { useNavigate } from "react-router-dom";
// components
import { Container, Heading, Text, Button } from "@chakra-ui/react";
// hooks
import { usePageTitle } from "hooks";
// config
import { PAGE_TITLES } from "config";
// routes
import { ROOT } from "routes/paths";
// ----------------------------------------------------------------------

const NotFound: FC = () => {
  usePageTitle(PAGE_TITLES.NOT_FOUND);
  const navigate = useNavigate();

  return (
    <Container py={12} textAlign="center">
      <Heading mb={12}>Not Found!</Heading>
      <Text>
        The page you are looking for may have been removed, deleted, or possibly
        never existed.
      </Text>
      <Button
        sx={{ mt: 10 }}
        onClick={() => {
          navigate(ROOT);
        }}
      >
        Back Home
      </Button>
    </Container>
  );
};

export default NotFound;
