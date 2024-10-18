import React from 'react';
import './About.css';
import AboutChef1 from '../utils/img/place1.jpg';
import AboutChef2 from '../utils/img/place3.jpg';
import { ImageGallery } from '../components/ImageGallery';
import { useTranslation } from 'react-i18next';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

function About() {
    const { t } = useTranslation();

    const location = {
        lat: 31.0350, 
        lng: 31.3606  
    };
    
    const containerStyle = {
        width: '100%',
        height: '400px',
    };
    const center = location;

    return (
        <div className='about-page'>
            <header className='mt-5'>
                <div className='container h-100 d-flex align-items-center justify-content-center'>
                    <h1 className='text-light text-center'>{t('home.aboutUsHeading')}</h1>
                </div>
            </header>

            <div className='container my-5 text-center'>
                <b className='fs-5'><i>{t('about.firstAbout')}</i></b><br />
                <p className='mt-4'>{t('about.secondAbout')}</p>
                <p>{t('about.thirdAbout')}</p>
                <p>{t('about.fourthAbout')}</p>
                <div className='row justify-content-center'>
                    <div className='col-lg-6'>
                        <img src={AboutChef1} className='img-fluid my-4' alt="" />
                    </div>
                    <div className='col-lg-6'>
                        <img src={AboutChef2} className='img-fluid my-4' alt="" />
                    </div>
                </div>
                <b className='fs-5'><i>{t('about.fifthAbout')}</i></b>
                <p className='mt-4'>{t('about.sixthAbout')}</p>
                <p>{t('about.seventhAbout')}</p>
                <p>{t('about.eightAbout')}</p>
                <p>{t('about.nineAbout')}</p>
                <p>{t('about.tenAbout')}</p>
            </div>

            <div className='bg-dark text-light'>
                <ImageGallery />
            </div>

            <div className='container my-5 text-center'>
                <b className='fs-5'><i>{t('about.elevenAbout')}</i></b>
                <p className='mt-4'>{t('about.twelveAbout')}</p>
            </div>

            <h2 className="text-center fs-1 mb-5 text-uppercase fw-bold">{t('about.location')}</h2>
            <div className="mt-5">
                <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={14}
                    >
                        <Marker position={center} />
                    </GoogleMap>
                </LoadScript>
            </div>
        </div>
    );
}

export default About;
