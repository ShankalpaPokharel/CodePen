import React from 'react'

export default function Button({text,className}) {
  
  return (
    <div className={`text-[13px] px-1 md:text-xs flex items-center text-center justify-center sm:px-4 py-2 min-w-14 overflow-clip rounded-md ${className}`}>
        {text}
    </div>
  )
}
