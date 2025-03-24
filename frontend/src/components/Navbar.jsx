import React from 'react'
import { Link } from 'react-router-dom'


const navbar = () => {
  return (
    <header className='max-w-screen-2xl mx-auto px-4 py-6'>
            <nav className='flex justify-between items-center'>

                {/* left side */}
                <div className='flex items-center md:gap-16 gap-4'>
                    <Link to="/">
                        
                    </Link>

                    {/* serch bar input */}
                    <div className='relative sm:w-72 w-40 space-x-2'>
                        

                        <input type="text" placeholder='Search here'
                            className='bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none'
                        />
                    </div>
                </div>


                {/* right side */}
                <div className='relative flex items-center md:space-x-3 space-x-2'>
                    <div>
                                <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                                </button>

                                
                        
                    </div>

                    <button className='hidden sm:block'>
                    </button>

                    <Link to="/cart" className='bg-primary p-1 sm:px-6 px-2 flex items-center rounded-sm'>
                        {
                        }

                    </Link>
                </div>
            </nav>
        </header>
  )
}

export default navbar