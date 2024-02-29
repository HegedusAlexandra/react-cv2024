import React from 'react'
import { useTranslation } from 'react-i18next'

export default function SreenHeader({bg,title}) {
const {t} = useTranslation()

  return (
    <h2 className={`flex flex-col w-[100%] md:px-[30%] px-[4%] md:pt-[20vh] md:pb-[0vh] pt-[10vh] pb-[2vh] ${bg}`}>
          <p className="md:w-[100%] w-[92%] md:text-[5vh] text-[6vh] font-roboto font-semibold capitalize">
            // {t(title)}
          </p>
    </h2>
  )
}
