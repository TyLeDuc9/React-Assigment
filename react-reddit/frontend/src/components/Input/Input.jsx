import React from 'react'

export const Input = ({ inputType = "text", data, setData, label }) => {
    return (
        <div className='flex flex-col mb-4'>
            <label className='mb-2 text-white font-medium'>{label}</label>
            {
                inputType === "textarea" ? (
                    <textarea
                        value={data}
                        onChange={(e) => setData(e.target.value)}
                        className='px-4 py-2 w-96 rounded-xl border border-gray-300 
                        focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm'
                        rows={4}
                        placeholder={label}
                    />
                ) : (
                    <input
                        value={data}
                        type={inputType}
                        onChange={(e) => setData(e.target.value)}
                        className='rounded-xl border border-gray-300 
                            focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm px-4 py-2 w-96'
                        placeholder={inputType !== "color" ? label : undefined}
                    />
                )
            }
        </div>
    )
}
