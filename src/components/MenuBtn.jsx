import React from "react";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export function MenuBtn() {
    const { t } = useTranslation(); 
    return (
        <div>
            <Link to="/menu">
                <button type="button" className="btn btn-success btn-lg">{t('home.fullMenu')}</button>
            </Link>
        </div>
    )
}