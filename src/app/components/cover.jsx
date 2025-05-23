import Image from 'next/image'

export default function Header() {
  return (
    <header className="bg-gray-900 text-white text-center py-20">
      <div className="relative w-full h-80">
        <Image
          src="/hero.png"
          alt="Creative Design Hero"
          layout="fill"
          objectFit="cover"
          className="opacity-30"
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold z-10">Creative Design Studio</h1>
          <p className="text-lg mt-2 z-10">
            Your vision, our design — posters, walls, and paint art made to impress
          </p>
          <div className="mt-6 z-10">
            <a
              href="#"
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded"
            >
              Get a Custom Design
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}