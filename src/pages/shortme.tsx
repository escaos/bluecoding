// src/pages/login.tsx
import { useLoginMutation } from "@/services/useLogin";
import Link from "next/link";
import { ChangeEvent, useState, PropsWithChildren } from "react";

type IRecordUrl = {
  url: string;
  title?: string;
  counter: number;
};

const Cell = ({ children }: PropsWithChildren) => {
  return <td className="tw-w-[10%]">{children}</td>;
};

const ShortmePage = () => {
  const [srcUrl, setSrcUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("sdsds");
  const [records, setRecords] = useState<IRecordUrl[]>([]);
  const { mutate: login } = useGetPopularQuery();

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    setSrcUrl(e?.target?.value);
  };

  const handleConvert = () => {};

  return (
    <main className="tw-container tw-flex tw-h-screen tw-w-screen tw-flex-col tw-items-start tw-p-2 tw-px-4 tw-gap-8">
      <header className="flex flex-row tw-justify-between">
        <h1>Short Me!</h1>
      </header>
      <section className="tw-flex tw-flex-col tw-w-full tw-h-min-24 tw-p-8 tw-justify-center tw-items-center tw-gap-6">
        <input
          className="tw-w-[50%] tw-h-8 tw-rounded-sm tw-text-black"
          value={srcUrl}
          onChange={handleChangeInput}
        ></input>
        <button
          type="button"
          onClick={handleConvert}
          className="tw-p-2 tw-rounded-lg tw-bg-slate-500"
        >
          Convert
        </button>
        {Boolean(shortUrl?.length) && (
          <Link href={shortUrl} className="tw-underline">
            {shortUrl}
          </Link>
        )}
      </section>
      <section className="tw-flex tw-flex-col tw-w-full tw-h-min-24 tw-p-8 tw-justify-center tw-items-center tw-gap-6">
        <table>
          <thead>
            <tr>
              <Cell>Title</Cell>
              <Cell>URL</Cell>
              <Cell>Counter</Cell>
            </tr>
          </thead>
          <tbody>
            {records.map(({ title, url, counter }) => (
              <tr key={url}>
                <Cell>{title}</Cell>
                <Cell>{url}</Cell>
                <Cell>{counter}</Cell>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
};

export default ShortmePage;
