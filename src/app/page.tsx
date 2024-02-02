import { db } from "@/db";
import { Elements } from "@/db/schema";

export const dynamic = 'force-dynamic';

const getElements = async () => {
  const elements = await db.select().from(Elements)
  return elements;
};

export default async function Home() {
  const elements = await getElements();

  return (
    <main className="min-h-screen py-8 flex items-center justify-center bg-[#1A1A1A]">
      <ul className="grid grid-cols-2 md:grid-cols-5 gap-5">
        {elements.map((element) => (
          <li
            key={element.id}
            className="relative flex flex-col text-center p-5 rounded-md bg-[#00E699] transition-colors hover:bg-[#00e5BF] text-[black]"
          >
            <p className="absolute top-2 left-2 text-sm">
              {element.atomicNumber}
            </p>
            <h2 className="text-2xl font-medium">{element.symbol}</h2>
            <p className="text-base">{element.name}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
