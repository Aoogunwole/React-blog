
import { Routes, Route, useNavigate } from "react-router-dom";
import Nav from "./Nav";
import Header from "./Header";
import Home from "./Home";
import Newpost from "./Newpost";
import Postpage from "./Postpage";
import About from "./About";
import Missing from "./Missing";
import Footer from "./Footer";
import { useState, useEffect} from 'react';
import { format } from 'date-fns';
import api from './api/post';
import EditPost from './EditPost';
import useWindowSize from "./hooks/useWindowSize";
import useAxiosFetch from "./hooks/useAxiosFetch";



function App() {
  const [posts, setPosts] = useState([]);



  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  const [editTitle, setEditTitle] = useState('');
  const [editBody, setEditBody] = useState('');
  const navigate = useNavigate();
  const { width } = useWindowSize();
  const {data, fetchError, isLoading } = useAxiosFetch('http://localhost:3500/posts');

  useEffect(() => {
    setPosts(data);
  }, [data])

 

  useEffect(() => {
    const filteredResults = posts.filter(post =>(
      (post.body).toLowerCase()).includes(search.toLowerCase())
      || ((post.title).toLowerCase()).includes(search.toLowerCase())
      )

      setSearchResult(filteredResults .reverse());
  }, [posts, search])
  


  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = posts.length? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), ' MMMM dd, yyyy pp');
    const newPost = { id, title:postTitle, datetime, body: postBody };
    try{
      const response = await api.post('/posts', newPost)
      const allPosts = [ ...posts, response.data ];
      setPosts(allPosts);
      setPostTitle('');
      setPostBody('');
      navigate('/');
    } catch(err) {
      console.log(`Error${err.message}`);
    }


    
  }
  
  const handleEdit = async (id) => {
    const datetime = format(new Date(), ' MMMM dd, yyyy pp');
    const updatedPost = { id, title: editTitle, datetime, body: editBody };

    try{
      const response = await api.put(`/posts/${id}`, updatedPost);
      setPosts(posts.map(post => post.id === id ? { ...response.data } : post))
      setEditTitle('');
      setEditBody('');
      navigate('/');
    }catch (err) {
      console.log(`Error${err.message}`);
    }
  }

  const handleDelete = async (id) => {
    await api.delete(`/posts/${id}`)
    const postLists = posts.filter(post => post.id !== id);
    setPosts(postLists);
    navigate('/');

  }
  

  return (
    <div className="App">
      <Header title = 'React Blog' width = {width}/>
      <Nav
        search = {search}
        setSearch = {setSearch}
      />
      <Routes>

        <Route path='/' element={<Home
         posts = {searchResult}
         fetchError = {fetchError}
         isLoading = {isLoading} 
         />} />
        <Route path='/post' element={<Newpost
          postTitle = {postTitle}
          setPostTitle = {setPostTitle}
          postBody = {postBody}
          setPostBody = {setPostBody}
          handleSubmit = {handleSubmit}

        />} />
        <Route path='/edit/:id' element={<EditPost
          posts = {posts}
          editTitle = {editTitle}
          setEditTitle = {setEditTitle}
          editBody = {editBody}
          setEditBody = {setEditBody}
          handleEdit = {handleEdit}

        />} />
        <Route path='/post/:id' element={<Postpage posts = {posts} handleDelete = {handleDelete}/>} />
        <Route path='/about' element={<About />} />
        <Route path='*' element = {<Missing />} />

      </Routes>
      <Footer /> 
    </div>


  );
}

export default App;
