// Este será el componente padre donde se controlará todo
import { useState } from "react";
// import { Icon } from "astro-icon/components"; // No se puede utilizar en React
import { Cog6ToothIcon, ChevronDownIcon } from '@heroicons/react/24/solid'
import TimerController from "./TimerController";
import TimerDisplay from "./TimerDisplay";
import TimerControls from './TimerControls';

export default function TimerLayout () {



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
            <TimerController />
            <TimerDisplay />
            <TimerControls />
        </section>
    )
}