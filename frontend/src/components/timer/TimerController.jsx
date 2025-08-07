// Componente enfocado en los botones de selección (Pomodoro / Short Break / Long Break)

import React from 'react';

// Este componente envía a su padre el nuevo tiempo inicial cuando se elige una opción
export default function TimerController({ setTiempoInicial }) {
  return (
    <div className="w-full flex flex-col md:flex-row gap-2 justify-around bg-gradient-to-br from-gray-200/50 to-gray drop-shadow-2xl backdrop-blur-md border border-gray-200 p-4 rounded-md">
        <button className='text-sm cursor-pointer py-2 px-8 rounded-lg border border-gray-300 backdrop-blur-2xl hover:bg-gray-300/50 focus:border-gray-500 focus:bg-gray-300/50 shadow focus:shadow-blue-950 hover:animate-squeeze' onClick={() => setTiempoInicial('25:00')}>Pomodoro</button>
        <button className='text-sm cursor-pointer py-2 px-8 rounded-lg border border-gray-300 backdrop-blur-2xl hover:bg-gray-300/50 focus:border-gray-500 focus:bg-gray-300/50 shadow focus:shadow-blue-950 hover:animate-squeeze' onClick={() => setTiempoInicial('05:00')}>Short Break</button>
        <button className='text-sm cursor-pointer py-2 px-8 rounded-lg border border-gray-300 backdrop-blur-2xl hover:bg-gray-300/50 focus:border-gray-500 focus:bg-gray-300/50 shadow focus:shadow-blue-950 hover:animate-squeeze' onClick={() => setTiempoInicial('15:00')}>Long Break</button>
    </div>
  );
}

