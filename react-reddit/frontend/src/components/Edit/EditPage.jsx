import React, { useState } from 'react'
import { Input } from '../Input/Input'
import { useSelector, useDispatch } from 'react-redux'
import { update } from '../../redux/userSlice'
export const EditPage = ({ setEdit }) => {

    const avatarUrl = [
        "https://i.pinimg.com/736x/83/5b/0d/835b0da48dd76dbe9fb9d426ec30c6ad.jpg",
        "https://i.pinimg.com/736x/34/bd/d9/34bdd985a5ed18c257ea4792238ccd5c.jpg",
        "https://i.pinimg.com/736x/5b/af/75/5baf75acf0b31c8cd1faf8ca1f31ba43.jpg",
        "https://i.pinimg.com/736x/3e/0f/05/3e0f052d9339d0d282377286785d6f38.jpg",
        "https://i.pinimg.com/736x/8c/4b/ac/8c4bac780e1e012f8aa4d0d22baf6a75.jpg",
        "https://i.pinimg.com/736x/62/3d/c3/623dc329fc11f751f8292899ddf1b162.jpg",
        "https://i.pinimg.com/736x/20/44/9f/20449f234e01ac441a95c725215759c2.jpg",
        "https://i.pinimg.com/736x/e3/27/88/e32788722e6172356b6a8ab1c3054764.jpg",
        "https://i.pinimg.com/736x/8a/79/90/8a799030b42b7fd3354f968cb8f92baa.jpg"
    ]
    const user = useSelector((state) => state.userReducer)

    const dispatch = useDispatch()

    const [name, setName] = useState(user.name)
    const [age, setAge] = useState(user.age)
    const [about, setAbout] = useState(user.about)
    const [url, setUrl] = useState(user.avatarUrl)
    const [theme, setTheme] = useState('#1f2937')

    const handleSubmit = (e) => {
        e.preventDefault();
        setEdit(false)
        const updateUser = {
            name: name,
            age: age,
            about: about,
            avatarUrl: url,
            themeColor:theme
        }
        dispatch(update(updateUser))

    }
   






    return (

        <form onSubmit={handleSubmit} type='submit'>
            <h1 className='text-center text-white pt-4 text-2xl font-semibold'>Edit Profile</h1>
            <button
                type="submit"
                className='border-2 border-red-500  p-2 rounded-2xl cursor-pointer 
                font-semibold bg-white text-black absolute right-40 top-6'>
                Save
            </button>
            <section className='flex'>
                <div className='text-white mt-20 ml-14'>
                    <Input label="Name" data={name} setData={setName} />
                    <Input label="Age" data={age} setData={setAge} />
                    <Input label="About" inputType="textarea" data={about} setData={setAbout} />
                    <Input label="Theme" inputType="color" data={theme} setData={setTheme} />

                </div>
                <p className='text-white text-[1rem] ml-[30%] mt-14'>Profile Picture</p>
                <div className="grid grid-cols-3 mt-28 gap-6 -ml-56">

                    {
                        avatarUrl.map((aurl, index) => {
                            return (
                                <img
                                    onClick={(e) => setUrl(e.target.src)}
                                    key={index}
                                    src={aurl}
                                    className="w-24 h-24 object-cover rounded-full border-2 
                                        border-white shadow-lg
                                        cursor-pointer hover:scale-105 transition-transform duration-300"
                                    alt="avatar"
                                />
                            );
                        })
                    }
                </div>

            </section>
        </form>
    )
}
