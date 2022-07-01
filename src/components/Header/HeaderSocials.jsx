import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {SiIndeed} from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className='headerSocials'>
        <a href="https://www.linkedin.com/in/rohan-surti-8766471b2/" target="_blank" rel='noreferrer'><BsLinkedin /></a>
        <a href="https://github.com/Rohan-3002" target= "_blank" rel='noreferrer'><BsGithub /></a>
        <a href="https://my.indeed.com/resume?hl=en&co=IN&from=gnav-homepage&_ga=2.63481388.2045011681.1654850679-987654968.1654268922" target= "_blank" rel='noreferrer'><SiIndeed /></a>
    </div>
  )
}

export default HeaderSocials