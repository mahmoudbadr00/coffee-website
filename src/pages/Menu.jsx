import React from 'react';
import './Menu.css';
import menu1 from '../utils/img/menu1.jpg';
import menu2 from '../utils/img/menu2.jpg';
import menu3 from '../utils/img/menu3.jpg';
import menu4 from '../utils/img/menu4.jpg';
import { useTranslation } from 'react-i18next';
function Menu() {
    const { t } = useTranslation(); 
    return (
        <div className='menu-page'>
            <header className='mt-5'>
                <div className='container h-100 d-flex align-items-center justify-content-center'>
                    <h1 className='text-light'>{t('menu')}</h1>
                </div>
            </header>
            <div className='breakfast my-5'>
                <div className='container'>
                    <div className='row flex-column-reverse flex-lg-row'>
                        <div className='col-lg-6 d-flex justify-content-center mb-4'>
                            <img src={menu1} className='img-fluid w-76 mx-5 mt-4 mt-lg-0' alt="" />
                        </div>
                        <div className='col-lg-6 d-flex justify-content-center mb-4'>
                            <img src={menu2} className='img-fluid w-76 mx-5 mt-4 mt-lg-0' alt="" />
                        </div>
                        <div className='col-lg-6 d-flex justify-content-center mb-4'>
                            <img src={menu3} className='img-fluid w-76 mx-5 mt-4 mt-lg-0' alt="" />
                        </div>
                        <div className='col-lg-6 d-flex justify-content-center mb-4'>
                            <img src={menu4} className='img-fluid w-76 mx-5 mt-4 mt-lg-0' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Menu;