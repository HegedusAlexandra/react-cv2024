import React from "react";
import plate from "../assets/pictures/plate.jpg";
import construct from "../assets/pictures/construct.jpg";

export default function Introduction() {
  return (
    <div className="flex flex-row justify-center w-[100%] bg-[#F9E3D5] py-[2vh]">
      <div className="flex flex-col items-end w-[50%] mr-[0.5%]">
        <div className="w-[40%] h-[2vh] mb-[2vh] ml-[60%] leftShadow rounded-md"></div>
        <div className="w-[100%] h-[6vh]">
          <h2 className="font-opensans md:text-[3vh] ml-[30vw]">
            // Introduction
          </h2>
        </div>
        <div className="w-[40%] font-opensans p-2">
          <p>
            Szia! A nevem Alexandra, és lelkes kezdő frontend fejlesztőként több
            mint egy éves tapasztalattal rendelkezem a webes technológiák
            világában. Jelenleg aktívan bővítem tudásomat mind a gyakorlati,
            mind az elméleti területeken, miközben gazdaságinformatikát tanulok
            egyetemen. Az elmúlt év során számos projektben vettem részt. Büszke
            vagyok arra, hogy képes vagyok dinamikus és responsív weboldalakat
            létrehozni, amelyek nem csak esztétikailag vonzóak, hanem a
            felhasználói igényekhez is igazodnak. Folyamatosan törekszem arra,
            hogy naprakész maradjak a legújabb frontend technológiák és trendek
            terén, és rendszeresen részt veszek online kurzusokon és
            workshopokon. Hiszem, hogy a folyamatos tanulás és fejlődés
            kulcsfontosságú a technológiai ágazatban, és motivált vagyok abban,
            hogy tovább bővítsem szakmai tudásomat. Célom, hogy egy olyan csapat
            részese legyek, ahol megoszthatom eddigi tapasztalataimat és együtt
            dolgozhatunk izgalmas projekteken, miközben további tapasztalatokat
            szerezhetek. Hiszem, hogy a kreativitás, a csapatmunka és a
            technológiai innováció kombinációja képes valóban lenyűgöző
            eredményeket elérni. Izgatottan várom, hogy a jövőben milyen
            kihívásokkal és lehetőségekkel találkozom a frontend fejlesztés
            területén.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-start w-[50%] ml-[0.5%]">
        <img className="w-[39%] h-[50vh] mb-[1vh]" src={plate} alt="plate" />
        <img className="w-[39%] h-[20vh]" src={construct} alt="construct" />
        <div className="w-[100%] h-[4vh]">
          <div className="w-[40%] h-[2vh] my-[3vh] leftShadow rounded-md"></div>
        </div>
        <div className="w-[100%] h-[4vh]">
          <div className="w-[40%] h-[2vh] my-[3vh] leftShadow rounded-md"></div>
        </div>
        <div className="w-[100%] h-[4vh]">
          <div className="w-[40%] h-[2vh] my-[3vh] leftShadow rounded-md"></div>
        </div>
      </div>
    </div>
  );
}
