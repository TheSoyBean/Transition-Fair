import { useState } from 'react';
import { createRoot } from 'react-dom/client';

function openNav(){
    document.getElementById("my-sidenav").style.width = "250px";
}

function closeNav(){
    document.getElementById("my-sidenav").style.width = "0px";
}