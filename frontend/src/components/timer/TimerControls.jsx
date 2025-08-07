// Este es el componente donde se gestiona la lógica de los botones Start / Pause / Reset
// import { Icon } from "astro-icon/components" No permite, se necesita usar dependencia para exportar componentes de iconos
import { PlayIcon, PauseIcon, ArrowPathIcon } from '@heroicons/react/24/solid'


export default function TimerControls({ corriendo, iniciarPausar, reiniciar }) {

    return(
        <div className="flex items-center gap-4 lg:mt-2.5">
            <button className="cursor-pointer w-[120px] h-[49px] border-1 p-3 rounded-xl bg-[#171212] hover:animate-squeeze text-[#FFFEFE] font-bold text-lg flex items-center shadow-xl justify-center-safe" onClick={iniciarPausar}>
                {corriendo ? (
                    <PauseIcon className="text-white size-7 mr-2" />
                ) : (
                    <PlayIcon className="text-white size-7 mr-2" />
                )}
                {corriendo ? "Pause" : "Start"}   
            </button>
            <button className="cursor-pointer border-1 border-[#C6C2C2] p-3 rounded-xl hover:animate-squeeze shadow-xl" onClick={reiniciar}>
                {<ArrowPathIcon id="icon-reset" name="reset" className="text-gray-900 size-6" />}
            </button>
        </div>  
    )
}