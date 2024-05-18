import { Card, CardBody, CardFooter, CardHeader, Typography } from '@material-tailwind/react'
import React from 'react'
import att from "../../../logo kafedras/ATT.jpg"
import { Link } from 'react-router-dom'

const SubjectsCard = ({ title, teacher, photo, path }) => {
    return (
        <Card className="w-full mt-5 bg-[#f8f9f9]">
            <div className='mx-auto'>
                <CardHeader color="blue-gray" className="relative mx-auto  w-32 mb-5 h-32 md:mx-3 aspect-[5/3]">
                    <img className='w-full h-full object-cover'
                        src={photo}
                    />
                </CardHeader>
            </div>
            <CardBody className='px-3 pt-3 pb-0'>
                <Typography color="blue-gray">
                    <span className='text-md'><span className='font-medium'>Fan nomi</span> : {title}</span>
                </Typography>
                <Typography color="blue-gray">
                    <span className='text-md'><span className='font-medium'>O'qituvchi </span>: {teacher}</span>
                </Typography>
                {/* <ProgressBar bar={10} /> */}
            </CardBody>
            <CardFooter className="px-3 pt-0 pb-3 mt-auto">
                <a href={path} target='_blank' className='bg py-2 w-full block text-center mt-3 rounded-lg text-white'>Kirish</a>

            </CardFooter>
        </Card>
    )
}

export default SubjectsCard