'use client';

import { genShortUrl } from "@/utils/actions";
import { useState, FormEvent, useEffect } from "react";
import toast, { Toaster } from 'react-hot-toast';
import ClipboardSVG from "./ClipboardSVG";
import { ClipLoader } from "react-spinners";
import { chococooky } from "@/utils/fonts";

export default function Form() {

  const [shortUrl, setShortUrl] = useState<string | null>()
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    try {
      const formData = new FormData(e.target as HTMLFormElement);
      const input = formData.get('fullUrl') as string;

      if (!input) return;

      const fullUrl = new URL(input)

      if (!fullUrl) return;

      setLoading(true);
      const newShortUrl = await genShortUrl(fullUrl.href)
      setLoading(false);

      if (!newShortUrl) return;

      setShortUrl(`${window.location.protocol}//${window.location.hostname}/${newShortUrl}`)

    } catch (err: any) {
      console.log(err.message);

      if (err.message === "Failed to construct 'URL': Invalid URL") {
        setErr(true);
        setShortUrl(null)
      }
    }
  }

  useEffect(() => {
    if (err) {
      toast.error("Invalid URL. It should be in the format 'https://example.com'");
      setErr(false);
    }
  }, [err]);

  return (
    <>
      <Toaster position="bottom-center" />

      <form className="flex md:h-16 gap-8 md:gap-4 flex-col md:flex-row" onSubmit={handleSubmit}>

        <input type="text" name='fullUrl' placeholder="Enter url" className="md:flex-1 text-2xl h-16 md:h-full rounded-xl px-4 outline-none border-[3px] border-black" />

        <div className="relative w-full">
          <img className="image" src='/bongo-cat.gif' alt="bongo-cat" />
          <button type="submit" className={`${chococooky.className} bg-pastelRed rounded-xl text-2xl text-white px-6 h-16 w-full md:h-full transition-colors duration-200 active:bg-black`}>Make it smol!</button>
        </div>

      </form>

      <div className="flex flex-col md:flex-row gap-4 justify-center items-center text-center box-border">
        {loading ? <ClipLoader color="#000" size={60} /> : (
          shortUrl && (
            <>
              <a className="text-secondary text-3xl" href={err ? '' : shortUrl}>{shortUrl}</a>
              <ClipboardSVG className="fill-black size-8 cursor-pointer"
                onClick={() => {
                  navigator.clipboard.writeText(shortUrl)
                    .then(() => toast.success('Copied to clipboard!'))
                    .catch(err => toast.error('Could not copy to clipboard'));
                }}
              />
            </>
          )
        )
        }
      </div>
    </>
  )
}
