import './accomodation.scss'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import NotFound from '../notFound/NotFound';
import datas from '../../data/data'
import Header from "../../components/header/Header";
import Slider from "../../components/carousel/Carousel"
import Footer from "../../components/footer/Footer";
import Collapse from '../../components/collapse/Collapse';
import greyStar from '../../assets/grey_star.png';
import redStar from '../../assets/red_star.png';

export default function Accomodation() {

    const [imageSlider, setImageSlider] = useState([]);
    const [error, setError] = useState(false);
    const [house, setHouse] = useState([]);

    const idAccomodation = useParams('id').id;

    function filterHouse() {
        const house = datas.filter(data => data.id === idAccomodation);
        if (house.length === 0) setError(true)
        return house;
    }

    useEffect(() => {
        const dataCurrentAccomodation = datas.filter(data => data.id === idAccomodation);
        setHouse(filterHouse());
        if (house.length === 0) {
            setError(true);
            console.log('retertetr')
        }
        setImageSlider(dataCurrentAccomodation[0].pictures);
    }, [idAccomodation]);
    console.log(error)
    console.log(house)
    return (
        <>
            {
                error === true ? <NotFound /> :
                    house ?
                        <>
                            <Header />
                            <Slider imageSlider={imageSlider} />
                            <main className="accomodation">
                                <div className="accomodation_content">
                                    <div className="accomodation_content_infos">
                                        <h1>{house[0].title}</h1>
                                        <p>{house[0].location}</p>
                                        <div>
                                            {house[0].tags.map((tag, index) => {
                                                return (
                                                    <button key={index}>{tag}</button>
                                                )
                                            })}
                                        </div>
                                    </div>
                                    <div className="accomodation_content_host">
                                        <div>
                                            <div className='accomodation_content_host_name'>
                                                <span>{house[0].host.name.split(' ')[0]}</span>
                                                <span>{house[0].host.name.split(' ')[1]}</span>
                                            </div>
                                            <img src={house[0].host.picture} alt="host of this accomodation" />
                                        </div>

                                        <div className="accomodation_content_host_stars">
                                            {[...Array(5)].map((star, index) => {
                                                const ratingValue = index + 1;
                                                return (
                                                    <img key={index} src={ratingValue <= house[0].rating ? redStar : greyStar} alt="star" />
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                                <div className="accomodation_collapse">
                                    <div className="accomodation_collapse_item">
                                        <Collapse title={'Description'} content={house[0].description} />
                                    </div>
                                    <div className="accomodation_collapse_item">
                                        <Collapse title={'Équipements'} content={house[0].equipments} />
                                    </div>
                                </div>
                            </main>
                            <Footer />
                        </>
                        : <p>erzlmkjertlk</p>
            }
        </>
    )
}