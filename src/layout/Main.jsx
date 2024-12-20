
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


const Main = () => {
    return (
        <div>
            <div className='bg-cyan-600'>
                <Navbar />
            </div>
            <div className='min-h-screen'>
                <Outlet />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Main