// ------------  IMPORTS
import { useState, useEffect } from 'react';
import { showAllPosts } from '../api';
import '../styles/Posts.scss';
import { FaTrash, FaPen } from 'react-icons/fa';

// ----------- POSTS COMPONENT
const Posts = ({ allPosts, setAllPosts, loggedIn, setLoggedIn }) => {
  // useState
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [search, setSearch] = useState('');
  
  // useEffect
  useEffect(() => {
    const fetchPosts = async () => {
      const data = await showAllPosts();
      if (search) {
        setAllPosts(filteredPosts) 
      } else {
        setAllPosts(data.data.posts);
      }
    };
    fetchPosts();
  }, [filteredPosts]);

// FUNCTIONS
  function searchTextHandler(e) {
    e.preventDefault();
    const filter = allPosts.filter(post => searchTermHandler(post, search));
    console.log(filter);
    setFilteredPosts(filter);
  }

  function searchTermHandler(post,search){
    return post.title.includes(search)
  }

// RENDER
  return (
    <div className='main-post-container'>
      <form>
        <span className='search-bar-content'>
          <input
            className='search-bar'
            type='text'
            placeholder='Search Posts'
           onChange={(e) => setSearch(e.target.value)}
          ></input>
          <button onClick={searchTextHandler} className='search-button' type='submit'>
            Search
          </button>
        </span>
      </form>
      <div className='post-area'>
        {allPosts.map((allPost) => {
          if (loggedIn) {
            return (
              <div key={allPost._id} className='post-card'>
                <span className='card-title'>{allPost.title}</span>
                <hr />
                <span className='card-author'>
                  <p>Author:</p> {allPost.author.username}
                  <br/>
                  <p>Price($):</p> {allPost.price}
                </span>
                <div className='card-main'>{allPost.description}</div>
                <button className='card-edit-btn'>
                  <FaPen />
                </button>
                <button className='card-delete-btn'>
                  <FaTrash />
                </button>
              </div>
            );
          } else {
            return (
              <div key={allPost._id} className='post-card'>
                <span className='card-title'>{allPost.title}</span>
                <hr />
                <span className='card-author'>
                  <p>Author:</p> {allPost.author.username}
                  <br/>
                  <p className='price'>Price($):{allPost.price}</p> 

                </span>
                <div className='card-main'>{allPost.description}</div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Posts;
