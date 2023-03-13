import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const index = () => {
    function simulateNetworkRequest() {
        return new Promise((resolve) => setTimeout(resolve, 2000));
    }
    
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
    if (isLoading) {
        simulateNetworkRequest().then(() => {
        setLoading(false);
        });
    }
    }, [isLoading]);

    const handleClick = () => {setLoading(true)};

    return (
        <main className='bg-18191B w-screen h-screen'>
            <div className='flex h-screen'>
                <form className="m-auto w-3/4">
                    <div gap={5} className='stack'>
                        <h1 className="text-center text-FF7171 text-2xl md:text-4xl mb-10 font-medium">Register</h1>
                        <p className="text-center text-white mb-2 font-medium md:text-lg text-sm">
                            Please complete the information and check before pressing the Register button.
                        </p>
                    </div>
                    <div class="grid md:grid-cols-2 md:gap-4 grid-cols-1  mb-6">
                        <div>
                            <div className="mb-1">
                                <label for="phone" class="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Your phone</label>
                                <input type="number" id="phone" className="bg-white text-18191B text-sm rounded-lg block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-18191B" placeholder="Phone" required />
                            </div>
                            <div className="mb-1">
                                <label for="email" class="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input type="email" id="email" className="bg-white text-18191B text-sm rounded-lg block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-18191B" placeholder="Email" required />
                            </div>
                            <div className="mb-1">
                                <label for="password" class="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                                <input type="password" id="password" className="bg-white text-18191B text-sm rounded-lg block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-18191B" placeholder="Password" required />
                            </div>                            
                            <div className="mb-1">
                                <label for="confirm_email" class="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                                <input type="password" id="confirm_email" className="bg-white text-18191B text-sm rounded-lg block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-18191B" placeholder="Confirm Password" required />
                            </div>
                        </div>
                        
                        <div>
                            <div className="mb-1">
                                <label for="first_name" class="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Your first name</label>
                                <input type="text" id="first_name" className="bg-white text-18191B text-sm rounded-lg block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-18191B" placeholder="First Name" required />
                            </div>
                            <div className="mb-1">
                                <label for="last_name" class="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Your last name</label>
                                <input type="text" id="last_name" className="bg-white text-18191B text-sm rounded-lg block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-18191B" placeholder="Last Name" required />
                            </div>
                            <div className="mb-1">
                                <label for="nick_name" class="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Your nick name</label>
                                <input type="text" id="nick_name" className="bg-white text-18191B text-sm rounded-lg block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-18191B" placeholder="Nick Name" required />
                            </div>
                            <div className="mb-1">
                                <label for="stdID" class="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Your student ID</label>
                                <input type="number" id="stdID" className="bg-white text-18191B text-sm rounded-lg block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-18191B" placeholder="Student ID" required />
                            </div>
                        </div>

                    </div>
                    <div className='flex justify-center mb-2'>
                        <button 
                            type="submit" 
                            className="text-white bg-08D9D6 hover:bg-12A6A4 font-medium rounded-lg text-sm w-auto px-5 py-2.5 text-center dark:bg-08D9D6 dark:hover:bg-12A6A4"
                            disabled={isLoading}
                            onClick={!isLoading ? handleClick : null}
                        >{isLoading ? 'Loading…' : 'Register'}</button>       
                    </div>
                    <div className='flex justify-center'>
                        <label className='text-white font-medium md:text-lg text-sm'>Have an account? <a href='/login' className='text-FF7171 dark:text-FF7171 underline'>Login</a></label>
                    </div>
                    
                </form>
            </div>
        </main>
  )
}

export default index