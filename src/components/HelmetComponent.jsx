import React from 'react'
import { Helmet } from "react-helmet-async";
import { useTranslation } from 'react-i18next';

export default function HelmetComp({url='',content,title}) {
  const {t} = useTranslation()

  return (
    <Helmet>
          <title>{'Alexa.H // ' + t(title)}</title>
          <meta name="description" content={t(content)} />
          <link rel="canonical" href={`https://www.alexahegedus.com/${url}`} />
    </Helmet>  
  )
}
