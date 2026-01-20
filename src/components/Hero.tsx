import HeroImg from '../assets/herowaffle.jpg'

export default function Hero() {
  return (
    <section className="relative h-screen w-full">
        <img
        src={HeroImg}
        alt="Hero"
        className="absolute inset-0 h-full w-full object-cover">
        </img>

        <div className="absolute inset-0 bg/black/50"></div>

        <div className="relative z-10 flex h-full items-center justify-center text-center px-6">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Breakfast at Wake Up Waffles!
          </h1>
          <p className="mt-4 text-lg md:text-xl opacity-90">
            The best way to start your day
          </p>

          <div className="mt-6 flex justify-center gap-4">
            <button className="rounded-lg bg-white px-6 py-3 text-black font-semibold hover:bg-gray-200 transition">
              Menu
            </button>
          </div>
        </div>
      </div> 
    </section>
  )
}
