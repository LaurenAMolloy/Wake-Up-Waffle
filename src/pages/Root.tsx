import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom'

export default function Root() {
  return (
    <div className="min-h-screen flex flex-col">
    <Header />
    <div className='w-full flex-1'>
        <Outlet />
    </div>
    <Footer />
    </div>
  )
}
