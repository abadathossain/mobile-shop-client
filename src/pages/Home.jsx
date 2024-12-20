
import Accordion from '../components/home/Accordion';
import Feature from '../components/home/Feature';
import Testimonials from '../components/home/Testimonials';
import UserReview from '../components/home/UserReview';
import Banner from './../components/home/Banner';

const Home = () => {
    return (
        <div>
            <Banner />
            <UserReview />
            <Feature />
            <Accordion />
            <Testimonials />
        </div>
    )
}

export default Home