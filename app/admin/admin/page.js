"use client"
import NavBar from './NavBar';
import { useState } from 'react';
import Container from './container';
import Fab from '@/app/components/fab';

export default function Home() {
  const [active, setActive] = useState('Home')
  
  return <div>
      <NavBar setActive={setActive}/>
      <main className='flex flex-col items-center'>
        <div className="backPanelNav"></div>
        <div className='container-fluid p-5'>
          <Container active={active} />
        </div>
      </main>
      
        <Fab/>
    </div>
}