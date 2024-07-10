'use client';

import { genShortUrl } from "@/utils/actions";
import { useState, FormEvent } from "react";
import toast, { Toaster } from 'react-hot-toast';
import ClipboardSVG from "./ClipboardSVG";

export default function Form() {

  const [shortUrl, setShortUrl] = useState<string | undefined>()
  const [err, setErr] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    try {
      e.preventDefault()

      const formData = new FormData(e.target as HTMLFormElement);
      const input = formData.get('fullUrl') as string;

      if (!input) return;

      const fullUrl = new URL(input)

      if (!fullUrl) return;

      const newShortUrl = await genShortUrl(fullUrl.href)

      if (!newShortUrl) return;

      setErr(false);
      setShortUrl(`${window.location.protocol}//${window.location.hostname}:${window.location.port}/${newShortUrl}`)

    } catch (err: any) {
      console.log(err.message);

      if (err.message === "Failed to construct 'URL': Invalid URL") {
        setErr(true);
        setShortUrl("Invalid URL. It should be in the format 'https://example.com'")
      }
    }
  }

  return (
    <>
      <Toaster position="bottom-center" />

      <form className="flex md:h-12 w-full gap-4 justify-center flex-col md:flex-row" onSubmit={handleSubmit}>
        <input type="text" name='fullUrl' placeholder="Enter URL" className="text-lg h-12 md:h-full w-full md:w-2/5 rounded px-4 outline-none" />
        <button type="submit" className="bg-accent rounded text-lg text-secondary px-4 h-12 md:h-full transition-colors duration-200 active:bg-accentDark">Shorten</button>
      </form>

      <div className="flex flex-col md:flex-row gap-4 items-center h-16 box-border">
        <a className="text-secondary text-lg md:text-2xl" href={err ? '' : shortUrl}>{shortUrl}</a>

        {shortUrl &&
          !err &&
          <ClipboardSVG className="fill-secondary size-5 cursor-pointer"
            onClick={() => {
              navigator.clipboard.writeText(shortUrl)
                .then(() => toast.success('Copied to clipboard!'))
                .catch(err => toast.error('Could not copy to clipboard'));
            }}
          />}

      </div>
    </>
  )
}
