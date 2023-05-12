import React from 'react'

const Header = () => {
  return (
    <header className='bg-green-300 flex justify-between h-16 align-middle'>
        <span className="mx-4 text-xl bold ">
            Ink World
        </span>
        
          <nav className="flex px-3">
              
            <ul className=" w-6/12 bg-red-300 flex justify-between align-center relative">
                <li className="text-center">Home</li>
                <li className="text-center">About</li>
                <li className="text-center">What I Do</li>
                <li className="text-center">Resume</li>
                <li className="text-center">Protfolio</li>
                <li className="text-center">Client</li>
                <li className="text-center">Contacts</li>
            </ul>
        </nav>
    </header>
  )
}

export default Header