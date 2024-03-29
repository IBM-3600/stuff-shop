import React from 'react'
import Head from '../components/Head'
import Footer from '../components/Footer'
import TopSelling from '../components/TopSelling'
import Categories from '../components/Categories'
import View from '../components/View'
import '../styles/Home.css'
function Home() {
  return (
    <div>
        {/* Header */}
      <Head/>
      <TopSelling/>
      <div className='mid-layout'>
        <Categories/>
        <View/>
      </div>
      <Footer/>
        {/* Footer */}
    </div>
  )
}

export default Home