import { useParams } from "react-router-dom";

export default function ProgramDetail() {
  const { slug } = useParams();
  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold">Program: {slug}</h1>
      <p className="mt-4 text-gray-600">Detail page coming in OW-33.</p>
    </main>
  );
}
