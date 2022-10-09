import React from 'react'
import PostCard from './PostCard'
import UserHelper from './UserHelper'
import data from '../data.json'

const newdates = Object.keys(data.posts_by_date);


const dates = newdates.sort(function(a,b) {
  a = a.split('/').reverse().join('');
  b = b.split('/').reverse().join('');
  return b > a ? 1 : b < a ? -1 : 0;
  
});

console.log(dates);
const posts = Object.values(data.posts_by_date['2021-06-17']).concat(Object.values(data.posts_by_date['2021-07-01']));
console.log(posts);



const Home = () => {
  
  return (
    <div className='posts'>
        <UserHelper />
        <div className='flex flex-col'>
          {dates.map((date, index) => 
            <>
            <div className='mt-10'>
            <h2 key={index}>{date}</h2>
            </div>
            <div className='postcard-div flex flex-row'>
            {posts.map((post, i) => {
              const str = post.published_at.substring(0,10);
              if(str === date) {
                return <PostCard post={post} key={i}/>
              }
              return null;
            })}
            </div>
            </>
            )}
        </div>
       
    </div>
  )
}

export default Home

// {posts_by_date.map((date) => (
//   <h1>{date}</h1> 
//  ))} date[1].created_at.includes(date[0]