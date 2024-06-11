import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './page/layout'
import Home from './page/Home'
import Blogs from './page/Blogs'
import Contact from './page/Contact'
import PageNotFound from './page/Pagenotfound'
export default function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout></Layout>} >
                <Route index element={<Home></Home>} />
                <Route path='blogs' element={<Blogs></Blogs>} />
                <Route path='contact' element={<Contact></Contact>} />
                <Route path='*' element={<PageNotFound></PageNotFound>} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

