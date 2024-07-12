import { getFullUrl } from "@/utils/actions";
import { redirect } from "next/navigation";

export default async function page({ params }: { params: { shortUrl: string } }) {

  const url = await getFullUrl(params.shortUrl);

  if (url) {
    redirect(url);
  }
}
