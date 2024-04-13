import React from 'react'

const Navlinks = () => {
    const links = [

        {
            name: "All tasks",

        },

        {
            name: "Completed tasks",

        },
        {
            name: "Pending tasks",

        },
    ];

    return (
        <nav>
            <ul className="grid gap-2">
                {links.map((link) => (
                    <li key={link.path} className={`px-4 py-2 w-full block transition hover:text-rose-600 dark:hover:text-slate-200 
            
                }`}>



                        {link.name}

                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navlinks