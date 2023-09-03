import { FC } from "react";
import { useParams } from "react-router-dom";
// ----------------------------------------------------------------------

const Link: FC = () => {
  const { linkId } = useParams<{ linkId: string }>();
  return <div>LINK {linkId}</div>;
};

export default Link;
