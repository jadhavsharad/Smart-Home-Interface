import { Divider } from '@nextui-org/react'
// import loginlogo from '../assets/loginlogo.svg'
import loginlogo from '../assets/smart-house.png'

export default function Login() {
    return (
        <div className=' w-full h-full flex flex-col items-center px-5 md:px-10 py-5 md:py-7 lg:py-10'>
            <div className='text-white text-3xl lg:text-4xl xl:text-5xl flex justify-center items-center h-full '>
                <h1 className='font-Syne font-bold'>Access Your Smart Home</h1>
            </div>
            <Divider className='my-3 md:my-5 lg:my-7 xl:my-10 bg-white rounded-full' />
            <div className='my-10 md:my-5 lg:my-0 z-10 border-[1px] w-full flex flex-col gap-6 items-center justify-center max-w-md md:max-w-lg border-zinc-800 rounded-3xl'>
                <Divider/>
                <div className=''><img src={loginlogo} className='w-1/2 mx-auto' alt="" /></div>
                <div className='py-5 text-zinc-400 px-6 flex flex-col gap-6 w-full'>
                    <form className='flex flex-col gap-2'>
                        <label htmlFor="email" className='font-Inter font-medium'>Enter Email</label>
                        <input type="email" id='email' placeholder='Enter Email' className='py-2 px-4 bg-zinc-900 border-[1.5px] border-zinc-800 hover:border-blue-500 focus:border-yellow-400 font-Inter outline-none rounded-lg' />
                    </form>
                    <form className='flex flex-col gap-2'>
                        <label htmlFor="passsword" className='font-Inter font-medium'>Enter Password</label>
                        <input type="password" id='password' placeholder='Enter Password' className='py-2 px-4 bg-zinc-900 border-[1.5px] border-zinc-800 hover:border-blue-500 focus:border-yellow-400 font-Inter outline-none rounded-lg' />
                    </form>
                    <button className='bg-blue-500 text-white font-Inter font-bold w-full py-2 rounded-lg'>Log In</button>
                </div>
            </div>
                {/* <div className='w-80 h-80 blur-[100px] bg-gradient-to-t from-purple-500 to-blue-500 saturate-200 absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2'></div> */}
        </div>
    )
}
