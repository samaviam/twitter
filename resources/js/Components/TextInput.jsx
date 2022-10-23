import React, { useState, useEffect, useRef } from 'react';

export default function TextInput(props) {
    const [focused, setFocus] = useState(props.defaultValue || false);
    const input = useRef();

    useEffect(() => {
        if (props.isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <div className="py-3">
            <label className={`relative flex items-center rounded border ${
                focused
                ? 'border-twitter-blue shadow-[0_0_0_1px_#1d9bf0]'
                : 'border-[#333639]'
            }`}>
                <span
                    className={`absolute pl-2 leading-[21px] transition-all ${
                        focused
                        ? 'text-twitter-blue'
                        : 'text-twitter-gray'
                    } ${
                        focused || input.current?.value
                        ? 'text-[13px] top-2'
                        : 'text-[17px] top-5'
                    }`}
                >{props.label}</span>

                <div className="w-full mt-[16px] px-2 pt-[12px] pb-2">
                    <input
                        type={props.type}
                        className={
                            `w-full bg-transparent p-0 border-0 text-twitter-input outline-0 focus:ring-0 ` +
                            props.className
                        }
                        ref={input}
                        onFocus={() => setFocus(true)}
                        onBlur={() => setFocus(false)}
                        {...props}
                    />
                </div>
            </label>
        </div>
    );
}
