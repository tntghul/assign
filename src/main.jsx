import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Nav from '../Components/Nav.jsx'
import Section from "../Components/Section.jsx"
import Services from "../Components/Services.jsx"
import Subscribe from "../Components/Subscribe.jsx"
import Customer from "../Components/Customer.jsx"
import Innovation from "../Components/Innovation"
import Specialist from "../Components/Specialist.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav />
    <Section/>
    <Innovation/>
    <Services />
    <Specialist />
    <Customer/>
    <Subscribe />
  </StrictMode>,
)
