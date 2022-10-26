import { useState } from 'react'

export default function Select(props) {
    const [focused, setFocus] = useState(false);

    return (
        <label className={`relative flex flex-col bg-black border rounded ${
            focused
            ? 'border-twitter-blue shadow-[0_0_0_1px_#1d9bf0]'
            : 'border-[#333639]'
        }`}>
            <span
                className={`absolute text-xs font-twitterR font-normal leading-[15px] pt-2 px-2 ${
                    focused
                    ? 'text-twitter-blue'
                    : 'text-twitter-gray'
                }`}
            >
                {props.label}
            </span>

            <select
                {...props}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
                className="bg-none bg-transparent pt-[11px] pb-2 px-2 mt-[15px] border-0 text-base text-twitter-input font-twitterR focus:ring-0"
            >
                {props.children}
            </select>

            <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className={`absolute top-2/4 right-[11px] inline-block h-6 fill-current -mt-3 select-none pointer-events-none align-text-bottom ${
                    focused
                    ? 'text-twitter-blue'
                    : 'text-twitter-gray'
                }`}
            >
                <g><path d="M3.543 8.96l1.414-1.42L12 14.59l7.043-7.05 1.414 1.42L12 17.41 3.543 8.96z"></path></g>
            </svg>
        </label>
    );
}
