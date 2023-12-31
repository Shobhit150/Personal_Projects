"use client"
import React, { useEffect, useRef } from 'react';
import { drawPieChart } from '../../public/assets/js/graph';
const s1 = '/assets/image/graph/ok.png';
const s2 = '/assets/image/graph/ok2.png';
const s3 = '/assets/image/graph/ok3.png';
const s4 = '/assets/image/graph/ok5.png';
import '@/styles/graph.css'
const Graph = () => {
    const data = [
        { value: 75, imageUrl: s1, label: 'Presale allocation 75%' },
        { value: 10, imageUrl: s2, label: 'Liquidity 10%' },
        { value: 10, imageUrl: s3, label: 'Marketing 10%' },
        { value: 5, imageUrl: s4, label: 'Airdrops 5%' }
    ];
    const svgRef = useRef(null);

    useEffect(() => {
        if(svgRef.current) {
            drawPieChart(svgRef.current, data);
        }
    }, [data]);
    

    return (
        <div className='flex flex-col justify-center items-center'>
        <section id='Tokenomics' className="graph w-full text-center mt-[5rem] overflow-hidden">
            <div className="graph__container">
                <div className="graph__text text-hallo font-display text-[2.2rem] md:text-[4rem]">
                    Tokenomics
                </div>
                <h2 className='h2 mt-20 text-3xl'>Initial Market Cap <span className='text-hallo'>$150,000</span></h2>
                <div className="w-full outer-container flex justify-start md:justify-center  pl-[12%] md:pl-0 items-center h-[27rem] md:h-[40rem] md:mt-[5rem]">
                    <svg ref={svgRef} id="pieChart" className=''></svg>
                </div>
            </div>
                
        </section>
        <a target='_blank' href="https://bscscan.com/token/0x834C108A211f725F6fAa327F7c386D8F3a770DBE">
                    <button className='py-2 px-4 z-50 mt-4 bg-hallo text-white
                        rounded-md hover:bg-opacity-70 active:scale-90 transition ease-in-out
                        shadow-md'>
                        Token Contract
                    </button>
                </a>
        </div>
    );
}

export default Graph;
