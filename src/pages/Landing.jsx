import React, { useEffect, useState } from "react";
import { IconP } from "./IconP";
import { isMobile } from "react-device-detect";
import { useNavigate } from 'react-router-dom'

export const Landing = () => {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            setTimeout(() => {
                navigate('/home')
            }, 3000)
        }, 3000)
    }, [])

    return (
        <div id="landing" className="vh-100 d-flex flex-column align-items-center justify-content-center text-center">
            <IconP />
            <p style={{ fontSize: isMobile ? '15px' : '30px' }} id="myname">PATRICK LLEGOS</p>
        </div>
    )
}