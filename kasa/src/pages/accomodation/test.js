import './accomodation.scss'
import { useEffect, useState } from "react"
import { useParams, useNavigate, } from "react-router-dom";
import datas from '../../data/data.json'
import Header from "../../components/header/Header";
import Slider from "../../components/carousel/Carousel"
import Footer from "../../components/footer/Footer";
import Collapse from '../../components/collapse/Collapse';
import greyStar from '../../assets/grey_star.png';
import redStar from '../../assets/red_star.png';

function idError() {
    const idAccomodation = useParams('id').id;
    const dataCurrentAccomodation = datas.filter;
    if {
        idAccomodation === dataCurrentAccomodation
    }
}