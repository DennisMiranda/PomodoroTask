// Este es el componente donde se gestiona la lógica de los botones Start / Pause / Reset
// import { Icon } from "astro-icon/components" No permite, se necesita usar dependencia para exportar componentes de iconos
import { PlayIcon, PauseIcon, ArrowPathIcon } from '@heroicons/react/24/solid'


export default function TimerControls() {

    return(
        <div id="timer-controls" class="flex items-center gap-4 lg:mt-2.5">
            <button id="btn-start" class="cursor-pointer w-[120px] h-[49px] border-1 p-3 rounded-xl bg-[#171212] hover:animate-squeeze text-[#FFFEFE] font-bold text-lg flex items-center shadow-xl justify-center-safe">
                {<PlayIcon id="icon-play" name="play" className="text-white size-7" />}
                {<PauseIcon id="icon-pause" name="pause" class="text-white size-7 hidden" />}
                <p id="btn-text">Start</p>    
            </button>
            <button id="btn-reset" class="cursor-pointer border-1 border-[#C6C2C2] p-3 rounded-xl hover:animate-squeeze shadow-xl">
                {<ArrowPathIcon id="icon-reset" name="reset" class="text-gray-900 size-6" />}
            </button>
        </div>  
    )
}