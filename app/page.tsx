"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

const formatInput = (str: string) => {
  return str
    .replace(/♂/gi, "-m")
    .replace(/♀/gi, "-f")
    .replace(/é/gi, "e")
    .replaceAll(/[^\w\s-]/gi, "")
    .split(" ")
    .join("-")
    .toLowerCase();
};

export default function Home() {
  const [text, setText] = useState("");
  const router = useRouter();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/${formatInput(text)}`);
  };

  return (
    <>
      <h1 className="text-5xl font-bold text-slate-70 mb-8">Find Pokemon</h1>
      <form onSubmit={onSubmit} className="space-y-8">
        <label className="flex flex-col gap-2">
          <span>Enter pokemon name</span>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="py-2 px-6 border-slate-200 rounded border"
          />
        </label>
        <button
          type="submit"
          className="py-2 px-6 rounded bg-red-700 hover:bg-red-900 text-white">
          Submit
        </button>
      </form>
    </>
  );
}
