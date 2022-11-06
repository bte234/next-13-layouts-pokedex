import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const getPokemonInfo = async (name: string) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  if (!res.ok) {
    return {
      ok: false,
      message: "not found",
    };
  }
  const data = (await res.json()) as {
    name: string;
    id: number;
    weight: number;
    sprites: {
      front_default: string;
    };
  };
  return {
    ok: true,
    data,
  };
};

const PokemonInfoPage = async ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const { id } = params;
  const result = await getPokemonInfo(id);
  if (!result.ok) {
    notFound();
  }

  return (
    <div className="space-y-8">
      <Link href="/" className="text-slate-600 hover:text-slate-900">
        &lt;- Back to search
      </Link>
      <h1 className="text-4xl font-bold text-slate-700">Pokemon Information</h1>
      <Image
        src={result.data?.sprites.front_default ?? ""}
        alt={`The sprite of the pokemon ${id}`}
        width={500}
        height={500}
        className="w-full max-w-[500px] mx-auto [image-rendering:pixelated]"
      />
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-slate-700">Id</h2>
        <p className="text-xl text-slate-700">{result.data?.id}</p>
      </div>
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-slate-700">Name</h2>
        <p className="text-xl text-slate-700">{result.data?.name}</p>
      </div>
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-slate-700">Weight</h2>
        <p className="text-xl text-slate-700">{result.data?.weight}</p>
      </div>
    </div>
  );
};

export default PokemonInfoPage;
