import React from 'react'
import Intro from '../../components/intro/Intro'
import Cards from '../../components/cards/Cards'
import AboutApp from '../../components/about/AboutApp'
import NewsLetter from './NewsLetter'
import UserFooter from '../../components/footer/UserFooter'

const UserLanding = () => {
  return (
    <div>
      
      <Intro/>
      <Cards/>
      <hr style={{ display: 'none' }}/>
      <AboutApp/>
      <NewsLetter/>
      <UserFooter/>
    </div>
  )
}

export default UserLanding
