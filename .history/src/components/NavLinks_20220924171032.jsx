import { NavLink } from "react-router-dom"

const NavLinks = ({ handleClick }) => (
    <div className="mt-10">
      {links.map((item) => (
        <NavLink
         key={item.name}
         to={item.to}
         className='flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-cyan-400'
         onClick={() => handleClick && handleClick()}
        >
          <item.icon className="w-6 h-6 mr-2" />
          {item.name}
        </NavLink>
      ))}
    </div>
  )
