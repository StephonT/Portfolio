import Image from 'next/image'
import Link from 'next/link'
import React from 'react'





const ProjectItem = ({title, backgroundImg, techUsed, projectUrl}) => {
  return (
    <div>
        <div className='relative flex items-center justify-center h-auto w-full shadow-lg shadow-amber-300 rounded-xl p-4 group hover:bg-gradient-to-r from-[#1e3f71] to-amber-400'>
                <Image className='rounded-xl group-hover:opacity-10' src={backgroundImg} alt='/' />
                <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                    <h3 className='text-2xl text-white tracking-wider text-center'>{title}</h3>
                    <p className='pb-4 pt-2 text-white text-center uppercase'>{techUsed}</p>
                    <Link href={projectUrl} >
                      <p className='text-center py-3 rounded-lg bg-white font-bold text-lg cursor-pointer'>More Info</p>
                    </Link>
                </div>
            </div>
    </div>
  )
}

export default ProjectItem