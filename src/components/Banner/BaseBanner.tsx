export default function BaseBanner({ title, description, image }: { title: string; description: string; image: string }) {
  return (
    <div
      className="w-full h-[300px] bg-cover bg-center text-white flex items-center justify-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="bg-black/40 p-6 rounded-xl text-center">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="mt-2 text-lg">{description}</p>
      </div>
    </div>
  );
}
