import React from 'react'
import CourseCard from '../../components/home/CourseCard'
import att from "../../../logo kafedras/ATT.jpg"
import biq from "../../../logo kafedras/BIQ.jpg"
import fizik from "../../../logo kafedras/FIZIKA.jpg"
import chet from "../../../logo kafedras/CHET.jpg"
import arxi from "../../../logo kafedras/Arxitektura.jpg"
import bugal from "../../../logo kafedras/bugalter.jpg"
import energ from "../../../logo kafedras/ENERGETIKA.jpg"
import Header from '../../components/home/Header'
import ApexChart from '../../components/chart/ApexChart'

const Home = () => {
    return (
        <div>
            <Header />
            <ApexChart/>
            <div>
                <div className='my-20 text-center relative w-full md:w-[600px] m-auto'>
                    <div className='absolute w-36 h-1 -top-5 left-[50%] -translate-x-[50%] bg-[#0f95ee]'></div>
                    <h1 className='text-bg text-3xl pb-5 sm:text-4xl md:text-5xl font-semibold '>Kafedralar</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit deserunt ab vitae velit. Beatae, consequatur ab in quasi non minima!</p>
                </div>
                <div className="grid main-container grid-cols-1 sm:grid-cols-2 gap-7 lg:grid-cols-3 mt-10 xl:grid-cols-4">
                    <CourseCard logo={att} title={"Axborot tizimlari va texnologiyalari"} path="/att" type="allCourse" />
                    <CourseCard logo={biq} title={"Bino inshoatlar qurulishi"} path="/biq" type="allCourse" />
                    <CourseCard logo={fizik} title={"Fizika kafedrasi"} path="/fizik" type="allCourse" />
                    <CourseCard logo={chet} title={"Chettillari kafedrasi"} path="/chet" type="allCourse" />
                    <CourseCard logo={arxi} title={"Arxitektura kafedrasi"} path="arxi/" type="allCourse" />
                    <CourseCard logo={bugal} title={"Bugalteriya hisobi va Audit kafedrasi"} path="/" type="allCourse" />
                    <CourseCard logo={energ} title={"Energetika kafedrasi"} path="/" type="allCourse" />
                </div>
            </div>
        </div>
    )
}

export default Home