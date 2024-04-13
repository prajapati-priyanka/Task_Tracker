import React from 'react'
import Dropdown from './Dropdown'
import TaskCard from './TaskCard'
import { useSelector } from 'react-redux';

const Task = () => {
    const tasks = useSelector((state) => state.tasks.tasks);

    console.log(tasks,"task")
    return (
        <section>
            <div className='items-center grid grid-cols-[1fr_auto_1fr] gap-4 md:gap-0 md:flex sm:justify-between'>
                <h1 className='font-medium my-5 text-center sm:text-left sm:my-8 md:text-2xl text-lg text-center'> Tasks Heading</h1>
                {/* dropdown component */}
                <Dropdown />

            </div>
            <div className='flex flex-row gap-8 mt-10'>
                {/* Task component */}
                {tasks.map((task) => (
                    <TaskCard key={task.id} task={task} />
                ))}

            </div>
        </section>
    )
}

export default Task