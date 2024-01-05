
import Nav from './Nav';

export default function Sidebar() {
  return (
    <div>
      <div className='text-white grid justify-center py-8 px-4'>
        <div className='w-72 rounded-2xl bg-white overflow-hidden'><img src="https://images.freeimages.com/images/large-previews/4c2/at-home-1231031.jpg" className=' duration-150 hover:scale-110' alt="" /></div>
      </div>
      <div>
        <Nav />
      </div>
    </div>
  )
}
