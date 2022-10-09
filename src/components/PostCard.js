import React from 'react'
import IceCone from '../images/ice-cream.png'
import {FaFacebookF, FaInstagram, FaTwitter} from 'react-icons/fa'
import {VscTrash} from 'react-icons/vsc'
import {MdNotInterested} from 'react-icons/md'
import {HiOutlineDotsCircleHorizontal} from 'react-icons/hi'
import {AiOutlineLike} from 'react-icons/ai'
import {BiMessageRounded} from 'react-icons/bi'
import {FiShare2, FiEye} from 'react-icons/fi'
import data from '../data.json';



const PostCard = ({post}) => {

  const statuschecker = () => {
    if(post.status === 0) return 'orange';
    if(post.status === 1) return 'green';
    if(post.status === 2) return 'blue';
    if(post.status === 3) return 'gray';
    if(post.status === 4) return 'red';
    return;
  }
  
  const iconchecker = () => {
    if(post.account.channel === 'twitter') return <FaTwitter className='font-xl white' />;
    if(post.account.channel === 'instagrambusiness') return <FaInstagram className='font-xl white' />;
    if(post.account.channel === 'facebook') return <FaFacebookF className='font-xl white' />
    return; 
  }

  return (
    <div className='postcard'>
        <div className={`social-icon-split flex ${statuschecker()}`}>
            {iconchecker()}
        </div>
        <div className='card-content'>
            <div className='mt-15 flex between center'>
                <p className='font-m text-gray'>16 January 2016</p>
                <ul className='none flex flex-row evenly'>
                    <li className='font-xl text-gray'><VscTrash/></li>
                    <li className='font-xl ml-10 text-gray'><MdNotInterested/></li>
                    <li className='font-xl ml-10 text-gray'><HiOutlineDotsCircleHorizontal/></li>
                </ul>
            </div>
            <p className='mt-10 font-m text-gray'>{post.entry.message}</p> 
            <img className='mt-5 post-image' src={IceCone}></img>
            <div className=''>
                <ul className='none flex flex-row mt-5 between'>
                    <li className='pt-10 ml-3 text-center'>
                        <AiOutlineLike className='text-gray'/>
                        <p className='inline ml-3 text-gray'>230</p>
                    </li>
                    <li className='pt-10 ml-3 text-center'>
                        <BiMessageRounded className='text-gray'/>
                        <p className='inline ml-3 text-gray'>98</p>
                    </li>
                    <li className='pt-10 ml-3 text-center'>
                        <FiShare2 className='text-gray'/>
                        <p className='inline ml-3 text-gray'>36</p>
                    </li>
                    <li className='pt-10 ml-3 text-center'>
                        <FiEye className='text-gray'/>
                        <p className='inline ml-3 text-gray'>1448</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default PostCard