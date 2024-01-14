import Body from './components/Body'
import Firebase from './components/Firebase'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <>
      <div className='sm__container'>
        <div className='sm__sidebar hidden lg:block overflow-hidden'>
          <Sidebar />
        </div>
        <div className='sm__body'>
          <Body />
        </div>
      </div>
    </>
  )
}

export default App
