import HeroImg from '@/assets/herowaffle.jpg'
import { Link } from 'react-router'

export default function Hero() {
  return (
    <section className="relative h-screen w-full">
        <img
        src={HeroImg}
        alt="Hero"
        className="absolute inset-0 h-full w-full object-cover">
        </img>

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 flex h-full justify-center items-center text-center px-6">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Breakfast at Wake Up Waffles!
          </h1>
          <p className="mt-4 text-lg md:text-xl opacity-90">
            The best way to start your day
          </p>

          <div className="mt-6 flex justify-center gap-4">
            <Link to={"/menu"} className="rounded-lg bg-white px-6 py-3 text-black font-semibold hover:bg-gray-200 transition">
              Menu
            </Link>
          </div>
        </div>
      </div> 
    </section>
  )
}
