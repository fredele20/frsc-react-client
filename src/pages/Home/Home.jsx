import React, { useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Header } from '../../Components/Header/Header'
import { Footer } from '../../Components/Footer/index'
import { Index } from "../../Components/bus-card/Index"
import { IndexSearch } from "../../Components/search/Index"
import { Head, Card } from "./styles"


export function Home() {

    return (
        <div>
            <Header />
            <Head>List of Registered Interstate Travel Buses in Nigeria</Head>
            {/* <IndexSearch /> */}
            <Card className="container">
                <div className="row">
                    <Index />
                </div>
            </Card>   
            <Footer />
        </div>
    )
}


