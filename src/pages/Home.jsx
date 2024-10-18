import React from 'react';
import { MenuBtn } from '../components/MenuBtn';
import './Home.css';
import AboutImg from '../utils/img/place2.jpg';
import { Link } from 'react-router-dom';
import { ImageGallery } from '../components/ImageGallery';
import { ContactInfo } from '../components/ContactInfo';
import ContactImage from '../utils/img/contact-img.jpg';
import { useTranslation } from 'react-i18next';
function Home() {
    const { t } = useTranslation(); 
    return (
        <div className='home-page'>
            <header className='h-100 min-vh-100 d-flex align-items-center text-light shadow'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-6 d-flex d-sm-block flex-column align-items-center'>
                            <h2 className='mb-0 text-black fw-bold'>{t('home.welcomeTo')}</h2>
                            <h1 className='mb-5 text-black fw-bold text-center text-sm-start'>Break Coffee</h1>
                            <MenuBtn />
                        </div>
                    </div>
                </div>
            </header>
            <div className='container my-5'>
                <div className='row'>
                    <div className='col-lg-6 d-flex justify-content-center d-none d-lg-flex'>
                        <img src={AboutImg} className='img-fluid w-50' alt="about img" />
                    </div>
                    <div className='col-lg-6 d-flex flex-column align-items-center justify-content-center text-center'>
                        <h2 className='fs-1 mb-5 text-uppercase fw-bold'>{t('home.aboutUsHeading')}</h2>
                        <b className='fs-5'><i>{t('about.firstAbout')}</i></b><br></br>
                        <p>{t('about.secondAbout')}</p>
                        <p className='mb-5'>{t('about.thirdAbout')}</p>
                        <Link to="/about">
                            <button type='button' className='btn btn-outline-success btn-lg'>{t('home.moreAboutUs')}</button>
                        </Link>
                    </div>
                </div>
            </div>
            <ImageGallery />
            <div className='bg-dark text-light py-5 shadow'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6 d-flex flex-column align-items-center justify-content-center mb-5 mb-lg-0'>
                            <ContactInfo />
                        </div>
                        <div className='col-lg-6 d-flex justify-content-center'>
                            <img src={ContactImage} className='img-fluid w-50' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;