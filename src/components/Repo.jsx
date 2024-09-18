import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { motion } from "framer-motion"

function Repo({data,reference}) {
  return (
    <motion.div drag dragConstraints={reference} className='drop-shadow-lg p-6 flex flex-col justify-between bg-zinc-900/70 w-52 h-64 rounded-[50px] flex-shrink-0'>
      <div className='text-zinc-400'>
        <span className='font-bold text-lg'>{data.name}</span>
        <div className='text-zinc-700 pt-1 overflow-auto h-24'>
        {data.description}
        </div>
      </div>
    
      <div className='flex items-center justify-between text-zinc-400 font-semibold mt-4 text-xl'>
        <FaGithub/>
        <a
          className='hover:text-green-500 transition-colors pr-2'
          href={data.html_url}
          target='_blank'
          rel='noopener noreferrer'
        >
          Go
        </a>
      </div>
    </motion.div>
  );
}

export default Repo;
