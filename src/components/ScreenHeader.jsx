import React from 'react'
import { useTranslation } from 'react-i18next'

export default function ScreenHeader({title}) {
const {t} = useTranslation()

  return (
    <h2 className={`flex flex-col justify-end w-[100%] h-[20vh] md:w-[100%] md:text-[5vh] text-[2vh] font-roboto font-semibold capitalize`}>
        // {t(title)}
    </h2>
  )
}
