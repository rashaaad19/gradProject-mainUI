import './Popular.css'
import PopularSlider from './popularPlaces/PopularSlider'

const Popular=()=>{
    return<>
    <div className='slick1__container'>

    <p className='popular__header'>Popular Places</p>

    <div className='slider__container'>
    <PopularSlider></PopularSlider>
    </div>
    </div>

    </>
}
export default Popular