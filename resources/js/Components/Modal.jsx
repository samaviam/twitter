import React from 'react';
import { Link } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';

export default function Modal(props) {
    const close = () => props.exitTo ? Inertia.visit(props.exitTo) : window.history.back();

    return (
        <div tabIndex="-1" className="fixed flex justify-center items-center bg-[#5b708366] overflow-x-hidden top-0 right-0 left-0 z-50 w-full h-screen md:inset-0 h-modal">
            <div className="relative w-full max-w-[600px] h-full z-10 md:h-auto md:p-4">
                {/* Modal content */}
                <div className="relative h-full bg-white shadow dark:bg-black md:rounded-lg">
                    {/* Modal header */}
                    <div className="flex items-center p-2 rounded-t">
                        <button type="button" onClick={close} className="w-9 h-9 justify-center items-center bg-transparent rounded-full text-sm inline-flex text-gray-400 hover:bg-gray-50 hover:bg-opacity-10 hover:text-gray-900 dark:hover:bg-gray-100 dark:hover:bg-opacity-10 dark:hover:text-white">
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                        <h2 className="ml-6 text-base font-twitterM font-medium text-gray-900 dark:text-white md:ml-8 md:text-xl">{props.title}</h2>
                    </div>

                    {/* Modal body */}
                    {props.children}
                </div>
            </div>
        </div>
    );
}
