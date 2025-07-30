import React from 'react';
import Header from '../components/Header';
import { useTranslation } from 'react-i18next';

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="py-12 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4 text-blue-900">{t('home.title')}</h1>
        <p className="text-lg text-gray-700 mb-8">
          {t('home.description')}
        </p>
        <div className="flex justify-center gap-4">
          <a href="/catalog" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
            {t('home.view_catalog')}
          </a>
          <a href="/admin" className="bg-gray-100 text-blue-700 border border-blue-600 px-6 py-3 rounded hover:bg-gray-200">
            {t('home.admin_area')}
          </a>
        </div>
      </main>
    </div>
  );
}
