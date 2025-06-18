import React from 'react'
const moods = [
    {
        name: "Happy",
        color: "#ffe066",
        message: "You look cheerful",
    },
    {
        name: "Sad",
        color: "#74c0fc",
        message: "Its's ok to feel sad",
    },
    {
        name: "Angry",
        color: "#ff6b6b",
        message: "Take a deep breath",
    },
    {
        name: "Relaxed",
        color: "#b2f2bb",
        message: "Chill vibes only",
    }
]

export const MoodSelector = ({ onMoodChange }) => {
    return (
        <div className='text-center m-5'>   
            {moods.map((mood) => (
                <button
                    key={mood.name}
                    className='p-2 m-3.5 text-black w-24 rounded hover:opacity-80 cursor-pointer transition font-semibold'
                    style={{ backgroundColor: mood.color }}
                    onClick={() => onMoodChange(mood)}
                >
                    {mood.name}
                </button>
            ))}
        </div>
    );
};
