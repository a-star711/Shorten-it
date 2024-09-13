"use client";
import { useEffect, useState } from "react";
import { DebounceInput } from "react-debounce-input";
import { Button } from "../ui/button";
import { toast } from "react-toastify";
import { showToast } from "@/lib/toast-function";
import Link from "next/link";

type UrlPair = {
  originalUrl: string;
  shortUrl: string;
};

const UrlShortener = () => {
  const [inputUrl, setInputUrl] = useState("");
  const [shortUrlArray, setShortUrlArray] = useState<UrlPair[]>([]);
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null); // New state
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const storedShortUrls = sessionStorage.getItem("shortUrls");
    if (storedShortUrls) {
      setShortUrlArray(JSON.parse(storedShortUrls));
    }
  }, []);

  useEffect(() => {
    if (shortUrlArray.length > 0) {
      sessionStorage.setItem("shortUrls", JSON.stringify(shortUrlArray));
    }
  }, [shortUrlArray]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/shorten", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: inputUrl }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to shorten URL");
      }

      setShortUrlArray((prevShortUrls) => {
        if (
          !prevShortUrls.some((urlPair) => urlPair.shortUrl === data.shortUrl)
        ) {
          return [
            ...prevShortUrls,
            {
              originalUrl: inputUrl,
              shortUrl: data.shortUrl,
            },
          ];
        }

        sessionStorage.setItem("shortUrls", JSON.stringify(prevShortUrls));
        return prevShortUrls;
      });
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipBoard = (text: string) => {
    navigator.clipboard.writeText(text).then(
      () => {
        showToast("success", "Copied to clipboard", {
          position: "top-right",
          autoClose: 2500,
          hideProgressBar: true,
          closeOnClick: true,
          progress: undefined,
          theme: "colored",
        });
        setCopiedUrl(text);

        setTimeout(() => {
          setCopiedUrl(null);
        }, 3000);
      },
      () => {
        toast.error("Failed to copy!");
      }
    );
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-7xl">
        <h1 className="text-2xl font-bold text-center mb-4">URL Shortener</h1>
        <form
          onSubmit={handleSubmit}
          className="bg-blue-100 p-6 rounded-lg shadow-lg w-full flex flex-row space-x-12 "
        >
          <DebounceInput
            className="w-full max-w-2xl h-10 mb-4  rounded-full text-black px-4"
            type="text"
            value={inputUrl}
            onChange={(e) => setInputUrl(e.target.value)}
            debounceTimeout={500}
            placeholder="Enter URL to shorten"
            required
          />
          <Button
            type="submit"
            disabled={loading}
            className="w-64 ml-4 max-w-xs text-black font-bold bg-blue-400  rounded-full hover:bg-blue-300"
          >
            {loading ? "Shortening..." : "Shorten It !"}
          </Button>
        </form>

        {error && <p className="text-red-500 mt-4">{error}</p>}
        {shortUrlArray.length !== 0 && (
          <ul className="mt-4 bg-blue-100 rounded-lg divide-y-8 divide-white">
            {shortUrlArray.map(({ originalUrl, shortUrl }) => (
              <li
                className="flex justify-between items-center p-4 border-gray-200"
                key={originalUrl}
              >
                <span className="flex-1 text-left text-1xl text-black">
                  <Link
                    href={originalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {originalUrl}
                  </Link>
                </span>

                <span>
                  <Link
                    href={shortUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-left text-1xl text-black"
                  >
                    {shortUrl}
                  </Link>
                </span>

                <Button
                  onClick={() => copyToClipBoard(shortUrl)}
                  className="ml-4"
                >
                  {copiedUrl === shortUrl ? "Copied!" : "Copy"}
                </Button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default UrlShortener;
