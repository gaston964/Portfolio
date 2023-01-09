import React from 'react'
import Sidebar from './Sidebar'
import 'animate.css';
import Portfolio from './Portfolio';
import CardFlip from './CardFlip';
import Skills from './Skills';

const Dashboard = () => {
    return (
        <>
        <div className="containerPadre">
            <Sidebar/>
            <main className='dashboardMain'>
                <section>
                <div class="logo"><b>B<span>ie</span>nv<span>eni</span>dos</b></div>
                </section>

                
            </main>
        </div>
        </>
    )
}

export default Dashboard