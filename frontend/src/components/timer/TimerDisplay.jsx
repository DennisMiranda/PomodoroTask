// Componente enfocado en mostrar el tiempo restante
import React from "react"

export default function TimerDisplay(){

    return(
        <>
        <h2 id="timer-task" class="text-[#171212] font-medium text-base">Grocery Shopping</h2>
        <div id="timer-circle" class="flex items-center justify-center border-2 rounded-full size-52">
        </div>
        </>
    )
}