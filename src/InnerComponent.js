import React from 'react';
import { useTranslation } from 'react-i18next';

const InnerComponent = () => {
  const { t } = useTranslation();
  return(
    <div>
      {t('active_term_label.from')} - {t('active_term_label.to')}
    </div>
  );
}

export default InnerComponent;
