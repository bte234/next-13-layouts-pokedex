import type { NextApiRequest, NextApiResponse } from "next";

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

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const query = req.query;
  res.redirect(`/pokemon/${formatInput(query.pokemon as string)}`);
}
