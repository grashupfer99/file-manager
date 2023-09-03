import { LINKS_ENDPOINT } from "config";
// ----------------------------------------------------------------------

export async function getLinks(): Promise<ILink[]> {
  const response = await fetch(LINKS_ENDPOINT.PROXY);
  const result = (await response.json()) as ILink[];
  // get first 15 links, handle other empty data case
  return Array.isArray(result) ? result.slice(0, 15) : [];
}
