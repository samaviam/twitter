import React, { useState, useEffect } from 'react';
import { Head, Link } from '@inertiajs/inertia-react';
import Modal from '@/Components/Modal';
import TextInput from '@/Components/TextInput';
import Select from '@/Components/Select';

export default function SignUp(props) {
    const [filled, filling] = useState(false);
    const [phone, usePhone] = useState(false);
    const [values, setValues] = useState({name: null, phone: null, email: null, month: null, day: null, year: null});

    const years = () => {
        let years = [
            {value: '', label: '', disabled: 'disabled', selected: 'selected'}
        ];
        let year = new Date().getFullYear();

        for (let i = year - 120; i <= year; i++) {
            years.push({value: i, label: i});
        }

        return years;
    };
    const months = () => {
        return [
            {value: '', label: '', disabled: 'disabled', selected: 'selected'},
            {value: 1, label: 'January'},
            {value: 2, label: 'February'},
            {value: 3, label: 'March'},
            {value: 4, label: 'April'},
            {value: 5, label: 'May'},
            {value: 6, label: 'June'},
            {value: 7, label: 'July'},
            {value: 8, label: 'August'},
            {value: 9, label: 'September'},
            {value: 10, label: 'October'},
            {value: 11, label: 'November'},
            {value: 12, label: 'December'},
        ];
    };
    const days = () => {
        let days = [
            {value: '', label: '', disabled: 'disabled', selected: 'selected'}
        ];

        for (let i = 1; i <= 31; i++) {
            days.push({value: i, label: i});
        }

        return days;
    };

    const handleChange = e => {
        setValues(values => ({
            ...values,
            [e.target.name]: e.target.value,
        }));
    };

    useEffect(() => {
        let filled = (() => {
            for (const [key, value] of Object.entries(values)) {
                if (key === 'phone' && !phone) {
                    continue;
                }

                if (! Boolean(value)) {
                    return false;
                }
            }

            return true;
        })();

        filling(filled);
    });

    return (
        <>
            <Head title="Sign up for Twitter" />

            <Modal title="Step 1 of 5" exitTo="/">
                <div className="px-[30px] md:px-20">
                    <h1 className="text-[25px] text-twitter-input font-twitterR font-bold leading-[30px] my-[19px] md:text-[31px] md:leading-9">Create your account</h1>
                    <form action="">
                        <TextInput name="name" label="Name" defaultValue="" autoFocus="autoFocus" onChange={handleChange} />
                        {phone ? (
                            <TextInput name="phone" label="Phone" defaultValue="" onChange={handleChange} />
                        ) : (
                            <TextInput type="email" name="email" label="Email" defaultValue="" onChange={handleChange} />
                        )}
                        <div
                            className="text-right text-sm text-twitter-blue font-twitterR hover:underline"
                            onClick={() => usePhone(!phone)}
                        >
                            <span>Use {phone ? 'email' : 'phone'} instead</span>
                        </div>
                        <div className="mt-[19px]">
                            <p className="text-twitter-input text-sm font-bold mb-2">Date of birth</p>
                            <p className="text-[#71767b] text-[13px] font-twitterR font-normal leading-[15px] mb-1">This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</p>
                            <div className="flex gap-x-[11px] my-[15px]">
                                <Select name="month" label="Month" className="flex-auto" options={months()} onChange={handleChange} />

                                <Select name="day" label="Day" className="flex-auto" options={days()} onChange={handleChange} />

                                <Select name="year" label="Year" className="flex-auto" options={years()} onChange={handleChange} />
                            </div>
                        </div>
                    </form>
                </div>

                {/* Modal footer */}
                <div className="w-full absolute bottom-0 px-[30px] md:px-20">
                    <button
                        className={`w-full my-[23px] bg-[#eff3f4] text-[#0f1419] text-base font-twitterR font-bold leading-[17px] rounded-full py-4${
                            filled
                            ? ''
                            : ' bg-opacity-50'
                        }`}
                        disabled={!filled}
                    >Next</button>
                </div>
            </Modal>
        </>
    );
}
