import React from 'react'
import { Project } from './homepage'
import { Link } from 'react-router-dom'

function Portfolio() {
    return (
        <div className="flex flex-col items-center w-full">
              <div className='h-auto'>
          {/* <h1 className='mb-12 text-4xl font-bold text-blue-600'>
            My Latest work
          </h1> */}
          <div className='grid grid-flow-row grid-cols-1 overflow-hidden sm:grid-cols-2 md:grid-cols-3'>
            <Project
              name='Maktabati online library'
              image='./portfolio/1.png'
              technologies={["React", "Css"]}
            />
            <Project
              name='Bab Dari home rental'
              image='./portfolio/2.png'
              technologies={["Html", "JS", "Tailwind"]}
            />
            <Project
              name='Blockchain'
              image='./portfolio/3.png'
              technologies={["Html", "Css", "JS"]}
            />
            <Project
              name='Megarama'
              image='./portfolio/4.png'
              technologies={["Html", "Css", "JS"]}
            />
            <Project
              name='Authentication'
              image='./portfolio/5.png'
              technologies={["React", "Tailwind"]}
            />
            <Project
              name='Yogitopia logo'
              image='./portfolio/6.png'
              technologies={["Canva"]}
            />
            <Project
              name='Zen met Gwen branding'
              image='./portfolio/7.png'
              technologies={["Adobe illustrator"]}
            />
            <Project
              name='Morocco Travel Dream logo'
              image='./portfolio/8.png'
              technologies={["Adobe illustrator"]}
            />
          </div>
      </div>
        </div>
    )
}

export default Portfolio