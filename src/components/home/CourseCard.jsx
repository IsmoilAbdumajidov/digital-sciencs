import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import ProgressBar from '../progressBar/ProgressBar';

const CourseCard = ({ title, logo, path }) => {
  const navigate = useNavigate()
  return (
    <Card className="w-full mt-5 bg-[#f8f9f9]">
      <div className='mx-auto'>
        <CardHeader color="blue-gray" className="relative mx-auto rounded-full w-32 h-32 md:mx-3 aspect-[5/3]">
          <img className='w-full h-full object-cover'
            src={logo}
          />
        </CardHeader>
      </div>
      <CardBody className='px-3 pt-3 pb-0 text-center'>
        <Typography color="blue-gray">
          <span className='text-md'>{title}</span>
        </Typography>
        {/* <ProgressBar bar={10} /> */}
      </CardBody>
      <CardFooter className="px-3 pt-0 pb-3 mt-auto">
        <button onClick={() => navigate(`/kafedra/${path}`)} className='bg py-2 mt-3 w-full rounded-lg text-white'>Kirish</button>
      </CardFooter>
    </Card>
  )
}

export default CourseCard
