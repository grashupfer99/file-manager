// core
import { Suspense, FC } from "react";
import { useLoaderData, Await } from "react-router-dom";
// components
import { Container, Spinner, Box } from "@chakra-ui/react";
import ErrorComponent from "components/ErrorComponent";
import DataTable from "components/DataTable";

// hooks
import { usePageTitle } from "hooks";
// config
import { PAGE_TITLES } from "config";

// ----------------------------------------------------------------------

const Home: FC = () => {
  usePageTitle(PAGE_TITLES.HOME);
  const loaderData = useLoaderData() as { links: ILink[] };

  return (
    <Container py={12} maxWidth="container.lg">
      <Suspense
        fallback={
          <Box textAlign="center" py={12}>
            <Spinner size="xl" />
          </Box>
        }
      >
        <Await resolve={loaderData.links} errorElement={<ErrorComponent />}>
          {(data) => <DataTable data={data as ILink[]} />}
        </Await>
      </Suspense>
    </Container>
  );
};

export default Home;
