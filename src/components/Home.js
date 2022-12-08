import MainCard from './mainPage/MainCard';
import './Home.css'
import MainImage from './mainPage/MainImage';
const Home=()=>{
    return<>
    <div className='overAll__container'>
        <MainImage></MainImage>
        <MainCard></MainCard>
    </div>
    </>
}
export default Home