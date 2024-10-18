import React from "react";
import { useTranslation } from 'react-i18next';

export function ContactInfo() {
    const { t } = useTranslation();
    return (
        <div className="d-flex flex-column align-items-center">
            <h2 className="fs-1 mb-3 text-uppercase fw-bold">{t('contact.find')}</h2>
            <p className="mb-5">{t('contact.address')}</p>
            <h3>{t('contact.opening')}</h3>
            <p className="m-0">{t('contact.hours')}</p>
            <p>+201117164605</p>
            <button className="btn btn-primary" type="submit" onClick={() => window.location.href = 'https://m.facebook.com/Break.Cafe.Mansoura/'}>{t('contact.cont')}</button>

        </div>
    )
}