"use client";
import Image from 'next/image'
import Banner from './components/Banner'
import Playlist from './components/Playlist'
import Footer from './components/Footer'


export default function Home() {
  return (
    <main>
     <Banner />
     <Playlist />
    </main>
  )
}
