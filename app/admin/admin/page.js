"use client"
import NavBar from './NavBar';
import { useState } from 'react';
import Container from './container';

export default function Home() {
  const [active, setActive] = useState('Home')
  
  return <div>
      <NavBar setActive={setActive}/>
      <main>
        <div className='container-fluid p-5'>
          <Container active={active} />
        </div>
      </main>
    </div>
}