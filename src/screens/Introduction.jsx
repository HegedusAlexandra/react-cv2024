import React from "react";
import lemon from "../assets/pictures/lemon.jpg";
import arrow from "../assets/pictures/arrow.jpg";

export default function Introduction() {
  return (
    <div className="flex flex-col">
      <div className="flex md:flex-row flex-col justify-center w-[100%]">
        <div className="flex flex-col items-end md:w-[50%] w-[100%] bg-[#ffffff14] backdrop-blur-sm md:bg-gradient-to-b from-[#f2be0300] to-[30%] to-[#FEE946]">
          <div className="md:absolute static md:w-[20vw] md:py-[10vh] py-[2vh] pr-[2vw] px-[4%] md:px-[0%] font-roboto text-[2vh] bg-[#ffffff63] md:bg-transparent backdrop-blur-sm">
            A nevem Alexandra, és lelkes kezdő frontend fejlesztőként több
            mint egy éves tapasztalattal rendelkezem a webes technológiák
            világában. Jelenleg aktívan bővítem tudásomat mind a gyakorlati,
            mind az elméleti területeken, miközben gazdaságinformatikát tanulok
            egyetemen. Az elmúlt év során számos projektben vettem részt. Büszke
            vagyok arra, hogy képes vagyok dinamikus és responsív weboldalakat
            létrehozni, amelyek nem csak esztétikailag vonzóak, hanem a
            felhasználói igényekhez is igazodnak.
            {window.innerWidth < 780 && (
              <p>
                Folyamatosan törekszem arra, hogy naprakész maradjak a legújabb
                frontend technológiák és trendek terén, és rendszeresen részt
                veszek online kurzusokon és workshopokon. Hiszem, hogy a
                folyamatos tanulás és fejlődés kulcsfontosságú a technológiai
                ágazatban, és motivált vagyok abban, hogy tovább bővítsem
                szakmai tudásomat. Célom, hogy egy olyan csapat részese legyek,
                ahol megoszthatom eddigi tapasztalataimat és együtt dolgozhatunk
                izgalmas projekteken, miközben további tapasztalatokat
                szerezhetek. Hiszem, hogy a kreativitás, a csapatmunka és a
                technológiai innováció kombinációja képes valóban lenyűgöző
                eredményeket elérni. Izgatottan várom, hogy a jövőben milyen
                kihívásokkal és lehetőségekkel találkozom a frontend fejlesztés
                területén.
              </p>
            )}
          </div>
         {window.innerWidth > 780 && <img
            loading="eager"
            className="md:w-[100%] md:h-auto object-cover py-[2vh] md:py-[0vh]"
            src={lemon}
            alt="lemon"
          />}
        </div>
       {window.innerWidth > 780 &&  <div className="flex flex-col items-start md:w-[50%] w-[100%] bg-transparent md:bg-[#CFC7B9]">
          <img
            className="md:w-[100%] h-[100vh] md:h-auto object-cover object-left"
            src={arrow}
            alt="arrow"
            loading="eager"
          />
          <div className="w-[40%] font-roboto py-[8vh] pl-[1vw] text-[2vh]">
            <p>
              Folyamatosan törekszem arra, hogy naprakész maradjak a legújabb
              frontend technológiák és trendek terén, és rendszeresen részt
              veszek online kurzusokon és workshopokon. Hiszem, hogy a
              folyamatos tanulás és fejlődés kulcsfontosságú a technológiai
              ágazatban, és motivált vagyok abban, hogy tovább bővítsem szakmai
              tudásomat. Célom, hogy egy olyan csapat részese legyek, ahol
              megoszthatom eddigi tapasztalataimat és együtt dolgozhatunk
              izgalmas projekteken, miközben további tapasztalatokat
              szerezhetek. Hiszem, hogy a kreativitás, a csapatmunka és a
              technológiai innováció kombinációja képes valóban lenyűgöző
              eredményeket elérni. Izgatottan várom, hogy a jövőben milyen
              kihívásokkal és lehetőségekkel találkozom a frontend fejlesztés
              területén.
            </p>
          </div>
        </div>}
      </div>
    </div>
  );
}
