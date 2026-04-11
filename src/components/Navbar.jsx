import Button from './Button'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="bg-blue-900x bg-gray-950 px-10 py-5 flex justify-between items-center">
            <NavLink to='/' className="font-semibold text-2xl">
                MediaSearch
            </NavLink>

            <div className="flex justify-between items-center gap-5 text-xl">
                <NavLink
                    to='/'
                >
                    <Button text='Search' />
                </NavLink>
                <NavLink
                    to='/collection'
                >
                    <Button text='Collection' />
                </NavLink>
            </div>
        </div>
    )
}

export default Navbar
