import Image from "next/image";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Final Exam 343</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-1">Genghui, Lin</h2>
      <h3 className="text-xl text-gray-600">Spring 2025</h3>   
      <div className="font-montserrat text-gray-800">
      <header className="bg-[#1e1e2f] text-white text-center py-20 px-4">
        <h1 className="text-4xl font-bold mb-4">Creative Design Studio</h1>
        <p className="text-lg">Your vision, our design — posters, walls, and paint art made to impress</p>
        <div className="mt-8">
          <a
            href="#get-started"
            className="inline-block bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg text-base transition"
          >
            Get a Custom Design
          </a>
        </div>
      </header>

      <section id="get-started" className="bg-gradient-to-br from-gray-100 to-gray-200 py-16 px-4 text-center">
        <h2 className="text-3xl font-semibold mb-6">Start Your Project Today</h2>
        <p className="max-w-xl mx-auto text-base">
          Let our creative team craft stunning visual designs tailored for your space. Whether it’s a poster,
          mural, or a painted wall — we bring ideas to life with style.
        </p>
      </section>
    </div>  <div className="font-montserrat text-gray-800">
      <header className="bg-[#1e1e2f] text-white text-center py-20 px-4">
        <h1 className="text-4xl font-bold mb-4">Creative Design Studio</h1>
        <p className="text-lg">Your vision, our design — posters, walls, and paint art made to impress</p>
        <div className="mt-8">
          <a
            href="#get-started"
            className="inline-block bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg text-base transition"
          >
            Get a Custom Design
          </a>
        </div>
      </header>

      <section id="get-started" className="bg-gradient-to-br from-gray-100 to-gray-200 py-16 px-4 text-center">
        <h2 className="text-3xl font-semibold mb-6">Start Your Project Today</h2>
        <p className="max-w-xl mx-auto text-base">
          Let our creative team craft stunning visual designs tailored for your space. Whether it’s a poster,
          mural, or a painted wall — we bring ideas to life with style.
        </p>
      </section>
    </div>
    </>
  )
}