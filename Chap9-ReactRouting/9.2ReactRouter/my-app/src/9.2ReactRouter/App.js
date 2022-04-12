
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Content from './Pages/content';
import { About } from './Pages/about';
import { Posts } from './Pages/posts';
import { Contact } from './Pages/contact';
import { Login } from './Pages/login';
import { Product } from './Pages/post';
import {posts} from './Data/posts'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Content/>} >
            <Route path="/about" element={<About/>} />
            <Route path="/posts" element={<Posts posts={posts}/>} />
            <Route path="/posts/:id" element={<Product posts={posts}/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Route>
          
          <Route path="/login" element={<Login/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
