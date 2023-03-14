import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { setCookie } from 'cookies-next';
import { useRouter } from 'next/router'

const index = () => {
    const router = useRouter();

    //user handle
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    //Fetch data
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          "email": email,
          "password" : pass,
        })
      };

    const postLogin = async () => {
        await fetch('http://localhost:8080/auth/login', requestOptions)
          .then(response => {
            response.json()
                .then(data => {
                  setCookie('token', data.token);
                  setCookie('firstname', data.first_name);
                  setCookie('lastname', data.last_name);
                  setCookie('nickname', data.nick_name);
                  setCookie('phone', data.phone);
                  setCookie('stdID', data.student_id)
                  setCookie('id', data.user_id);
                  console.log(data)
                  console.log(data.token)
                  console.log(data.first_name)
                  console.log(data.last_name)
                  console.log(data.nick_name)
                  console.log(data.phone)
                  console.log(data.classrooms)
                  console.log("Email = " + email)
                  console.log("Password = " + pass)
                  router.push('/')
                });
        })
        .catch (error => {
          if (error.message == 'Error: You need to specify name or key when calling navigate with an object as the argument. See https://reactnavigation.org/docs/navigation-actions#navigate for usage.') {
          }
          console.error(error);
        }) 
      }
    //function loading
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

    const handleClick = () => {setLoading(true), postLogin()};

    return (
        <>

        <main className='bg-18191B w-screen h-screen'>
            <div className='flex h-screen'>
                <form className="m-auto md:w-2/6">
                    <div gap={5} className='stack'>
                        <h1 className="text-center text-FF7171 text-2xl md:text-4xl mb-10 font-medium">Sign in</h1>
                        <p className="text-center text-white mb-2 font-medium md:text-lg text-sm">
                            Sign in and start learn effectively
                        </p>
                    </div>

                    {/* <div className="mb-1">
                        <label for="email" class="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" id="email" className="bg-white outline-offset-0 outline-offset-2 outline-B66D43 text-18191B text-sm rounded-lg block w-full p-2.5 dark:bg-white dark:border-18191B dark:placeholder-gray-400 dark:text-18191B" placeholder="Email" required />
                    </div>
                    <div className="mb-6">
                        <label for="email" class="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                        <input type="password" id="password" className="bg-white outline-offset-0 outline-offset-2 outline-B66D43 text-18191B text-sm rounded-lg block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-18191B" placeholder="Password" required />
                    </div> */}
                    <div className="mb-1">
                        <label for="email" class="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input 
                            type="email" 
                            id="email" 
                            className="bg-white outline-none text-18191B text-sm rounded-lg block w-full p-2.5 dark:bg-white dark:border-18191B dark:placeholder-gray-400 dark:text-18191B" 
                            placeholder="Email" 
                            required 
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-6">
                        <label for="email" class="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                        <input 
                            type="password" 
                            id="password" 
                            className="bg-white outline-none text-18191B text-sm rounded-lg block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-18191B" 
                            placeholder="Password" 
                            required 
                            onChange={e => setPass(e.target.value)}
                        />
                    </div>

                    <div className="flex justify-center mb-6">
                        <div className="flex items-center md:h-7 h-5">
                            <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                        </div>
                        <label for="remember" className="ml-2 md:text-lg text-sm font-medium text-white dark:text-white">Remember me</label>
                        <label className="ml-4 md:text-lg text-sm font-medium text-828282 dark:text-828282"><a href='/register'>Forgot Password?</a></label>
                    </div>
                    <div className='flex justify-center'>
                        <Link  href='/register' className='mr-6'>
                           <button type="submit" className="text-black bg-white hover:bg-gray-300 font-medium rounded-lg text-sm w-auto px-5 py-2.5 text-center dark:bg-white dark:hover:bg-gray-300">Register</button> 
                        </Link>   
                        <button 
                            type="submit" 
                            className="text-white bg-08D9D6 hover:bg-12A6A4 font-medium rounded-lg text-sm w-auto px-5 py-2.5 text-center dark:bg-08D9D6 dark:hover:bg-12A6A4 ml-6"
                            disabled={isLoading}
                            onClick={!isLoading ? handleClick : null}
                        >{isLoading ? 'Loading…' : 'Login'}</button>       
                    </div>
                </form>
            </div>
        </main>
        </>
  )
}

export default index