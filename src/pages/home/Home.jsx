import React from 'react'
import Header from '../../components/home/Header'
import ApexChart from '../../components/chart/ApexChart'
import CourseCard from '../../components/home/CourseCard'
import att from "../../../logo kafedras/ATT.jpg"
import biq from "../../../logo kafedras/BIQ.jpg"
import fizik from "../../../logo kafedras/FIZIKA.jpg"
import chet from "../../../logo kafedras/CHET.jpg"
import arxi from "../../../logo kafedras/Arxitektura.jpg"
import bugal from "../../../logo kafedras/bugalter.jpg"
import energiya from "../../../logo kafedras/energiya.jpg"
import qxm from "../../../logo kafedras/QXM.jpg"
import foydali from "../../../logo kafedras/foydali qazilma.jpg"
import mkgk from "../../../logo kafedras/MKG.jpg"
import yhx from "../../../logo kafedras/YHX.jpg"
import uzbektili from "../../../logo kafedras/UZBEK TILI.jpg"
import trlog from "../../../logo kafedras/TRANSPORTLOGOSTIKA.jpg"
import matem from "../../../logo kafedras/MATEMATIKA.jpg"
import mq from "../../../logo kafedras/MQ.jpg"
import ttat from "../../../logo kafedras/TTAT.jpg"
import mkqm from "../../../logo kafedras/MKQM.jpg"
import ms from "../../../logo kafedras/MS.jpg"
import tmj from "../../../logo kafedras/TMJ.jpg"
import jmk from "../../../logo kafedras/JMK.jpg"
import iqsod from "../../../logo kafedras/IQSOD.jpg"
import mt from "../../../logo kafedras/MT.jpg"
import menjment from "../../../logo kafedras/MENEJMENT.jpg"
import hfx from "../../../logo kafedras/HFX.jpg"
import utfk from "../../../logo kafedras/UTFK.jpg"
import energ from "../../../logo kafedras/ENERGETIKA.jpg"
import ijtimoiy from "../../../logo kafedras/IJTIMOIY.jpg"
import tarnsport from "../../../logo kafedras/TRANSPORT.jpg"
import ym from "../../../logo kafedras/YM.jpg"
import qmb from "../../../logo kafedras/QMB.jpg"
import ktk from "../../../logo kafedras/KTK.jpg"
import { getKafedra } from '../../hooks/GetKafedraData'
import { url } from '../../api/axios'

const Home = () => {
    const { data } = getKafedra()
    console.log(data);
    return (
        <div>
            <Header />
            <ApexChart />
            <div id='kafedralar'>
                <div className='my-20 text-center relative w-full md:w-[600px] m-auto'>
                    <div className='absolute w-36 h-1 -top-5 left-[50%] -translate-x-[50%] bg-[#0f95ee]'></div>
                    <h1 className='text-bg text-3xl pb-5 sm:text-4xl md:text-5xl font-semibold '>Kafedralar</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit deserunt ab vitae velit. Beatae, consequatur ab in quasi non minima!</p>
                </div>
                <div className="grid main-container grid-cols-1 sm:grid-cols-2 gap-7 lg:grid-cols-3 mt-10 xl:grid-cols-4">
                    {data?.map((item, i) => (
                        <CourseCard key={i} logo={url + item.icon} title={item.name} path={item.id} type="allCourse" />
                    ))}
                </div>
                {/* <div className="grid main-container grid-cols-1 sm:grid-cols-2 gap-7 lg:grid-cols-3 mt-10 xl:grid-cols-4">
                    <CourseCard logo={att} title={"Axborot tizimlari va texnologiyalari kafedrasi"} path="/axborot-tizimlari-va-texnologiyalari-kafedrasi" type="allCourse" />
                    <CourseCard logo={biq} title={"Bino inshoatlar qurulishi kafedrasi"} path="/bino-inshoatlar-qurulishi-kafedrasi" type="allCourse" />
                    <CourseCard logo={fizik} title={"Fizika kafedrasi"} path="/fizika-kafedrasi" type="allCourse" />
                    <CourseCard logo={chet} title={"Chet tillar kafedrasi"} path="/chet-tillar-kafedrasi" type="allCourse" />
                    <CourseCard logo={arxi} title={"Arxitektura kafedrasi"} path="/arxitektura-kafedrasi" type="allCourse" />
                    <CourseCard logo={bugal} title={"Bugalteriya hisobi va audit kafedrasi"} path="/bugalteriya-hisobi-va-audit-kafedrasi" type="allCourse" />
                    <CourseCard logo={energiya} title={"Energiya tejamkorligi va muqobil energiya manbalari kafedrasi"} path="/energiya-tejamkorligi-va-muqobil-energiya-manbalar-kafedrasi" type="allCourse" />
                    <CourseCard logo={qxm} title={"Qishloq xo'jaligini mexanizatsiyalashtirish kafedrasi"} path="/qishloq-xojaligini-mexanizatsiyalashtirish-kafedra" type="allCourse" />
                    <CourseCard logo={foydali} title={"Foydali qazilmalar va qayta ishlash texnologiyalari kafedrasi"} path="/foydali-qazilmalar-va-qayta-ishlash-texnologiyalari-kafedrasi" type="allCourse" />
                    <CourseCard logo={mkgk} title={"Muhandislik va kompyuter grafikasi kafedrasi"} path="/muhandislik-va-kompyuter-grafikasi-kafedrasi" type="allCourse" />
                    <CourseCard logo={yhx} title={"Yo'l harakati xavfsizligi kafedrasi"} path="/yol-harakati-xavfsizligi-kafedrasi" type="allCourse" />
                    <CourseCard logo={uzbektili} title={"O'zbek tili va adabiyoti kafedrasi"} path="/ozbek-tili-va-adabiyoti-kafedrasi" type="allCourse" />
                    <CourseCard logo={trlog} title={"Transport logistikasi kafedrasi"} path="/transport-logistikasi-kafedrasi" type="allCourse" />
                    <CourseCard logo={matem} title={"Oliy matematika kafedrasi"} path="/oliy-matematika-kafedrasi" type="allCourse" />
                    <CourseCard logo={mq} title={"Materiallar qarshiligi va mexanika kafedrasi"} path="/materiallar-qarshiligi-va-mexanika-kafedrasi" type="allCourse" />
                    <CourseCard logo={ttat} title={"Texnik tizimlarda axborot texnologiyalari kafedrasi"} path="/texnik-tizimlarda-axborot-texnologiyalari-kafedrasi" type="allCourse" />
                    <CourseCard logo={mkqm} title={"Muhandislik kommunikatsiyalari qurilishi va montaji kafedrasi"} path="/muhandislik-kommunikatsiyalari-qurilishi-va-montaji-kafedrasi" type="allCourse" />
                    <CourseCard logo={ms} title={"Metrologiya va standartlashtirish kafedrasi"} path="/metrologiya-va-standartlashtirish-kafedrasi" type="allCourse" />
                    <CourseCard logo={tmj} title={"Texnologik mashina va jihozlar kafedrasi"} path="/texnologik-mashina-va-jihozlar-kafedrasi" type="allCourse" />
                    <CourseCard logo={jmk} title={"Jismoniy tarbiya va sport kafedrasi"} path="/jismoniy-tarbiya-va-sport-kafedrasi" type="allCourse" />
                    <CourseCard logo={iqsod} title={"Iqtisodiyot kafedrasi"} path="/iqtisodiyot-kafedrasi" type="allCourse" />
                    <CourseCard logo={mt} title={"Mashinasozlik texnologiyasi kafedrasi"} path="/mashinasozlik-texnologiyasi-kafedrasi" type="allCourse" />
                    <CourseCard logo={menjment} title={"Menejment kafedrasi"} path="/menejment-kafedrasi" type="allCourse" />
                    <CourseCard logo={hfx} title={"Hayot faoliyati xavfsizligi kafedrasi"} path="/hayot-faoliyati-xavfsizligi-kafedrasi" type="allCourse" />
                    <CourseCard logo={utfk} title={"Umumtexnika fanlar kafedrasi"} path="/umumtexnika-fanlar-kafedrasi" type="allCourse" />
                    <CourseCard logo={energ} title={"Energetika kafedrasi"} path="/energetika-kafedrasi" type="allCourse" />
                    <CourseCard logo={ijtimoiy} title={"Ijtimoiy fanlar kafedrasi"} path="/ijtimoiy-fanlar-kafedrasi" type="allCourse" />
                    <CourseCard logo={tarnsport} title={"Transport vositalari muhandisligi kafedrasi"} path="/transport-vositalari-muhandisligi-kafedrasi" type="allCourse" />
                    <CourseCard logo={ym} title={"Yo'l muhandisligi kafedrasi"} path="/yol-muhandisligi-kafedrasi" type="allCourse" />
                    <CourseCard logo={qmb} title={"Qurilish materiallari va buyumlari kafedrasi"} path="/qurilish-materiallari-va-buyumlari-kafedrasi" type="allCourse" />
                    <CourseCard logo={ktk} title={"Kimyoviy texnologiya kafedrasi"} path="/kimyoviy-texnologiya-kafedrasi" type="allCourse" />
                </div> */}
            </div>
        </div>
    )
}

export default Home