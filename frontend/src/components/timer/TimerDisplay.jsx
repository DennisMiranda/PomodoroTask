// Componente enfocado en mostrar el tiempo restante
import React from "react"

export default function TimerDisplay({ segundos }){
    const minutos = String(Math.floor(segundos / 60)).padStart(2, '0');
    const segundosRestantes = String(Math.floor(segundos % 60)).padStart(2, '0');

    return(
        <>
        <h2 id="timer-task" class="text-[#171212]/80 font-medium text-base">Select a session to begin</h2>
        <div id="timer-circle" class="flex items-center justify-center border-2 rounded-full size-52">
            <h1 className="text-4xl font-semibold text-black/80">{`${minutos}:${segundosRestantes}`}</h1>
        </div>
        </>
    )
}