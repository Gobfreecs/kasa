import './accomodation.scss'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import datas from '../../data/data.json'
import Header from "../../components/header/Header";
import Slider from "../../components/carousel/Carousel"
import Footer from "../../components/footer/Footer";
import Collapse from '../../components/collapse/Collapse';
import greyStar from '../../assets/grey_star.png';
import redStar from '../../assets/red_star.png';
import NotFound from '../notFound/NotFound'

export default function Accomodation() {
    const [imageSlider, setImageSlider] = useState([]);
    const [loader, setLoader] = useState(true);

    const idAccomodation = useParams('id').id;
    const dataCurrentAccomodation = datas.filter(data => data.id === idAccomodation);

    useEffect(() => {
        const dataCurrentAccomodation = datas.filter(data => data.id === idAccomodation);
        setImageSlider(dataCurrentAccomodation[0]?.pictures ?? 0);
        setLoader(false);
    }
    );


    return (
        <>
            {dataCurrentAccomodation.length > 0 ?
                <>
                    <Header />
                    <Slider imageSlider={imageSlider} />
                    {
                        loader ? <p>Chargement</p> :
                            <main className="accomodation">
                                <div className="accomodation_content">
                                    <div className="accomodation_content_infos">
                                        <h1>{dataCurrentAccomodation[0].title}</h1>
                                        <p>{dataCurrentAccomodation[0].location}</p>
                                        <div>
                                            {dataCurrentAccomodation[0].tags.map((tag, index) => {
                                                return (
                                                    <button key={index}>{tag}</button>
                                                )
                                            })}
                                        </div>
                                    </div>
                                    <div className="accomodation_content_host">
                                        <div>
                                            <div className='accomodation_content_host_name'>
                                                <span>{dataCurrentAccomodation[0].host.name.split(' ')[0]}</span>
                                                <span>{dataCurrentAccomodation[0].host.name.split(' ')[1]}</span>
                                            </div>
                                            <img src={dataCurrentAccomodation[0].host.picture} alt="host of this accomodation" />
                                        </div>

                                        <div className="accomodation_content_host_stars">
                                            {[...Array(5)].map((star, index) => {
                                                const ratingValue = index + 1;
                                                return (
                                                    <img key={index} src={ratingValue <= dataCurrentAccomodation[0].rating ? redStar : greyStar} alt="star" />
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                                <div className="accomodation_collapse">
                                    <div className="accomodation_collapse_item">
                                        <Collapse title={'Description'} content={dataCurrentAccomodation[0].description} />
                                    </div>
                                    <div className="accomodation_collapse_item">
                                        <Collapse title={'Équipements'} content={dataCurrentAccomodation[0].equipments} />
                                    </div>
                                </div>
                            </main>
                    }
                    <Footer />
                </>
                :

                <NotFound />}
        </>
    )
}