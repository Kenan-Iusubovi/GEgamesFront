import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from '../styles/App.module.css';

export default function VerifyEmail() {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState<'pending' | 'success' | 'error'>('pending');

  useEffect(() => {
    const code = searchParams.get('code');
    if (!code) {
      setStatus('error');
      return;
    }

    fetch(`/api/verify?code=${code}`)
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setStatus('success');
          setTimeout(() => navigate('/login'), 3000);
        } else {
          setStatus('error');
        }
      })
      .catch(() => setStatus('error'));
  }, [searchParams, navigate]);

  return (
    <div className={styles.container}>
      {status === 'pending' && <p>{t('verify.pending')}</p>}
      {status === 'success' && <p>{t('verify.success')}</p>}
      {status === 'error' && <p>{t('verify.error')}</p>}
    </div>
  );
}