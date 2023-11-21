
import { Routes, Route, History } from "react-router-dom";
import Nav from "./Nav";
import Header from "./Header";
import Home from "./Home";
import Newpost from "./Newpost";
import Postpage from "./Postpage";
import About from "./About";
import Missing from "./Missing";
import Footer from "./Footer";
import { useState, useEffect} from 'react';



function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "My First Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    },
    {
      id: 2,
      title: "My 2nd Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    },
    {
      id: 3,
      title: "My 3rd Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    },
    {
      id: 4,
      title: "My Fourth Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    }
  ]);


  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  return (
    <div className="App">
      <Header title = 'React Blog'/>
      <Nav
        search = {search}
        setSearch = {setSearch}
      />
      <Routes>

        <Route path='/' element={<Home posts = {posts}/>} />
        <Route path='/post' element={<Newpost/>} />
        <Route path='/post/:id' element={<Postpage />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element = {<Missing />} />

      </Routes>
      <Footer /> 
    </div>


  );
}

export default App;
