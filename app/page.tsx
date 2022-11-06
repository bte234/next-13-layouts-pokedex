export default function Home() {
  return (
    <>
      <h1 className="text-5xl font-bold text-slate-70 mb-8">Find Pokemon</h1>
      <form className="space-y-8" action="/api/pokemon">
        <label className="flex flex-col gap-2">
          <span>Enter pokemon name</span>
          <input
            type="text"
            name="pokemon"
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
