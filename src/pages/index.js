//home page

import React from 'react'
import HeroSection from '../components/HeroSelection'
import InfoSection from '../components/InfoSection'
import { homeObjOne } from '../components/InfoSection/Data'
import Benefits from '../components/Benefits'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { GlobalProvider } from '../context/GlobalState'
import Header from '../components/Header'
import Balance from '../components/Balance'
import IncomeExpenses from '../components/IncomeExpenses'
import  TransactionList from '../components/TransactionList'
import AddTransaction from '../components/AddTransaction'



const Home = () => {
    
    return (
        <>
        <Navbar />
        <HeroSection />
        <InfoSection {...homeObjOne}/>  
        <GlobalProvider>
            <Header/>
            <div className="container">
            <Balance/>
            <IncomeExpenses />
            <TransactionList />
            <AddTransaction />
            </div>
        </GlobalProvider>
        <Benefits />
        <Footer/>
        </>
    )
}

export default Home
