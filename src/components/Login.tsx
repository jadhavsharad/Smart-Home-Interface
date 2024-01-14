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
            <div className=' z-10 bg-black border-[1px] w-full flex flex-col gap-6 items-center justify-center max-w-md md:max-w-lg border-zinc-800 rounded-3xl'>
                <Divider/>
                <div className=''><img src={loginlogo} className='h-52' alt="" /></div>
                <div className='py-5 text-white px-6 flex flex-col gap-6 w-full'>
                    <form className='flex flex-col gap-2'>
                        <label htmlFor="email" className='font-Inter font-medium'>Enter Email</label>
                        <input type="email" id='email' placeholder='Enter Email' className='py-2 px-4 font-Inter outline-none rounded-lg' />
                    </form>
                    <form className='flex flex-col gap-2'>
                        <label htmlFor="passsword" className='font-Inter font-medium'>Enter Password</label>
                        <input type="password" id='email' placeholder='Enter Password' className='py-2 px-4 font-Inter outline-none rounded-lg' />
                    </form>
                    <button className='bg-rose-600 text-white font-Inter font-bold w-full py-2 rounded-lg'>Log In</button>
                </div>
            </div>
                <div className='w-80 h-80 blur-[100px] bg-gradient-to-t from-purple-500 to-teal-500 saturate-200 absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2'></div>
        </div>
    )
}
