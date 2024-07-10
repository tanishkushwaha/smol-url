import { getFullUrl } from "@/utils/actions";
import { redirect } from "next/navigation";


export default async function page({ params }: { params: { shortUrl: string } }) {
  console.log(params.shortUrl);

  const fullUrl = await getFullUrl(params.shortUrl)

  if (fullUrl) {
    redirect(fullUrl)
  }

  redirect('/')

  return (
    <div>404</div>
  )
}
