// Este será el componente padre donde se controlará todo
import React, { useState, useEffect, useRef } from 'react';
// import { Icon } from "astro-icon/components"; // No se puede utilizar en React
import { Cog6ToothIcon, ChevronDownIcon } from '@heroicons/react/24/solid'
import TimerController from './TimerController';
import TimerDisplay from './TimerDisplay';
import TimerControls from './TimerControls';

export default function TimerLayout () {
    const [tiempoInicial, setTiempoInicial] = useState('25:00'); // Cambia según el modo seleccionado
    const [tiempoRestante, setTiempoRestante] = useState(1500); // 25 minutos = 25 * 60 
    const [corriendo, setCorriendo] = useState(false);
    const intervaloRef = useRef(null);

    // Convertimos el tiempoInicial (string) a segundos cada vez que se selecciona un button
    useEffect(() => {
        const [minutos, segundos] = tiempoInicial.split(':').map(Number); // Dividimos el string "25:00" -> ["25", "00"] -> [25, 0]
        setTiempoRestante(minutos * 60 + segundos) // Convertimos el tiempo "25:00" a segundos
        setCorriendo(false) // Aquí pausamos el temporizador si estaba corriendo
        clearInterval(intervaloRef.current)
    }, [tiempoInicial]);

    // Decrementar el tiempo si esta corriendo
    useEffect(() => {
        if(corriendo) {
            intervaloRef.current = setInterval(() => {
                setTiempoRestante(prev => {
                    if(prev <= 1) {
                        clearInterval(intervaloRef.current);
                        setCorriendo(false);
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        }

        return () => clearInterval(intervaloRef.current);
    }, [corriendo]);

    // Funciones de control
    const iniciarPausar = () => setCorriendo(prev => !prev);
    const reiniciar = () => {
        const [minutos, segundos] = tiempoInicial.split(':').map(Number);
        setTiempoRestante( minutos * 60 + segundos );
        setCorriendo(false);
        clearInterval(intervaloRef.current);
    };


    return(
        <section className="flex flex-col gap-6 justify-center items-center">
            <div class="flex w-full justify-center gap-2 mb-4 md:justify-between">
                <h1 id="timer-title" class="text-3xl text-[28px] font-bold">Pomodoro Timer</h1>
                <button id="caret-down" class="transition-transform duration-300 cursor-pointer">
                    <div class="flex items-center justify-center hover:bg-gray-300 hover:animate-squeeze py-1 px-0.5 rounded-lg">
                        <Cog6ToothIcon class="size-5"/>
                        <ChevronDownIcon id="iconMenu" name="arrow-down" class="size-5"/>
                    </div>
                </button>
            </div>
            <TimerController setTiempoInicial={setTiempoInicial}/>
            <TimerDisplay segundos={tiempoRestante} />
            <TimerControls 
                corriendo={corriendo}
                iniciarPausar={iniciarPausar}
                reiniciar={reiniciar}
            />
        </section>
    )
}