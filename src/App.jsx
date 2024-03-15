
import './App.css'
// import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import BookMarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'
function App() {

  return (
    <>

      <Header></Header>

      <div className='md:flex'>
        <Blogs></Blogs>
        <BookMarks></BookMarks>
      </div>

    </>
  )
}

export default App

