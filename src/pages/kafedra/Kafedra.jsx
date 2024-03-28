import React from 'react'
import SubjectsCard from '../../components/kafedra/SubjectsCard'

const Kafedra = () => {
    return (
        <div className='main-container'>
            <div className='flex justify-center pt-5'>
                <input className='max-w-[500px] rounded-s-xl border-blue-500 rounded-e-none' type="text" placeholder='Fanlarni qidirish'/>
                <button className='bg rounded-s-none rounded-e-xl px-5'>Qidiruv</button>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-7 lg:grid-cols-3 mt-20 xl:grid-cols-4 '>
                <SubjectsCard title={"Axborot tizimlari va texnologiyalari"} />
                <SubjectsCard title={"Axborot tizimlari va texnologiyalari"} />
                <SubjectsCard title={"Axborot tizimlari va texnologiyalari"} />
                <SubjectsCard title={"Axborot tizimlari va texnologiyalari"} />
                <SubjectsCard title={"Axborot tizimlari va texnologiyalari"} />
                <SubjectsCard title={"Axborot tizimlari va texnologiyalari"} />
                <SubjectsCard title={"Axborot tizimlari va texnologiyalari"} />
                <SubjectsCard title={"Axborot tizimlari va texnologiyalari"} />
                <SubjectsCard title={"Axborot tizimlari va texnologiyalari"} />
            </div>
        </div>
    )
}

export default Kafedra