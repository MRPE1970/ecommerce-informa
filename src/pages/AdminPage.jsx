import React from 'react';
import Header from '../components/Header';
import { useTranslation } from 'react-i18next';

export default function AdminPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="py-12 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">{t('admin.title')}</h2>
        <p className="text-gray-600">{t('admin.instructions')}</p>
      </main>
    </div>
  );
}
