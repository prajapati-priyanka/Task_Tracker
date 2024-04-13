import React from 'react'
import Header from './Header/Header'
import Task from '../TaskSection/Task'

const Main = () => {
    
    return (
        <div className='pt-5 pb-8 sm:pb-16 px-3 md:px-8 md:w-full xl:w-8/12 m-auto min-h-screen'  >
         <Header />
         <Task title="All tasks"/>
        </div>
    )
}

export default Main