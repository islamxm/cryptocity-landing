import Head from 'next/head'
import Header from '@/components/Header/Header'
import Social from '@/components/Social/Social'
import Hero from '@/blocks/Hero/Hero'
import How from '@/blocks/How/How'
import AdvList from '@/blocks/AdvList/AdvList'
import Steps from '@/blocks/Steps/Steps'
import Start from '@/blocks/Start/Start'
import RoadMap from '@/blocks/RoadMap/RoadMap'
import Faq from '@/blocks/Faq/Faq'
import Fb from '@/blocks/Fb/Fb'
import Footer from '@/components/Footer/Footer'
import {useState} from 'react';
import CheckLoc from '@/hoc/checkLoc'
export default function Home() {

  const [menuIsActive, setMenuIsActive] = useState<boolean>(false)

  return (
    <CheckLoc>
      <Head>
        <title>MyCryptown</title>
        <meta name="description" content="MyCryptown Web Site"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header menuIsActive={menuIsActive}/>
      <main>
        <Social/>
        <Hero/>
        <How/>  
        <AdvList/>
        <Steps/>
        <Start/>
        <RoadMap/>
        <Faq/>
        <Fb/>
      </main>
      <Footer/>
    </CheckLoc>
  )
}
