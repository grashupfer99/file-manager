// core
import type { FC } from "react";
import { useNavigate } from "react-router-dom";
// component
import { Container, Heading, Text, Button } from "@chakra-ui/react";
// hooks
import { usePageTitle } from "hooks";
// config
import { PAGE_TITLES } from "config";
// routes
import { ROOT } from "routes/paths";
// ----------------------------------------------------------------------

const ErrorComponent: FC = () => {
  usePageTitle(PAGE_TITLES.ERROR);
  const navigate = useNavigate();

  return (
    <Container py={12} textAlign="center">
      <Heading mb={12}>Oops somethig went wrong!</Heading>
      <Text>Things are a little unstable here. Please come back later.</Text>
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

export default ErrorComponent;
