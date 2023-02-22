import React, { useEffect, useRef, useState } from "react";
import { onSnapshot, query, collection, orderBy } from "firebase/firestore";

import { firestore } from "../firebase/firebase";
import Post from "./Post";

import Skeleton from "./Skeleton/Skeleton";
import { FaComment, FaHeart, FaMusic, FaShare } from "react-icons/fa";

const VideoInfo = () => {
  return (
    <div className="flex flex-row">
      <img
        className="w-[50px] h-[50px] rounded-full"
        src="https://scontent.fhan18-1.fna.fbcdn.net/v/t39.30808-6/306608548_785563116227783_3838541921291596804_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=174925&_nc_ohc=HCPfIb7fuTkAX9Ijeyi&_nc_ht=scontent.fhan18-1.fna&oh=00_AfBO9WHDW1YY6FnkbJVXyQVBQ7BRqwJ_taxQKuozZoPrRA&oe=63F5E226"
        alt=""
      />
      <div className="ml-3 min-w-[80%]">
        <div>
          <a href="#" className="text-xl font-bold hover:underline">
            anh dang code
          </a>
        </div>
        <div>hay ghe tham anh code</div>
        <div className="flex flex-row items-center">
          <FaMusic />
          <span className="ml-3">bai hat dang phat</span>
        </div>
      </div>
      <div>
        <button className="p-1 pl-3 pr-3 border-2 border-red-400 text-red-400 rounded-md">
          Follow
        </button>
      </div>
    </div>
  );
};
const VideoContent = () => {
  const videoRef = useRef();
  const [playing, setPlaying] = useState(false);
  const handleVideo = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };
  return (
    <div className="flex flex-row  ">
      <video
        ref={videoRef}
        onClick={handleVideo}
        src="https://firebasestorage.googleapis.com/v0/b/tiktok-clone-be0aa.appspot.com/o/posts%2FZkhFo1Q9LjMSGCCQFus2%2Fimage?alt=media&amp;token=7c955972-6519-468f-b378-e869e2258753"
        loop
      />
      <div className="flex flex-col justify-end ml-7">
        <div className="text-center mb-4">
          <div className="w-[40px] h-[40px] rounded-full bg-slate-200 flex items-center justify-center">
            <FaHeart className="text-xl" />
          </div>
          <span>123</span>
        </div>
        <div className="text-center mb-4">
          <div className="w-[40px] h-[40px] rounded-full bg-slate-200 flex items-center justify-center">
            <FaComment className="text-xl text-center" />
          </div>
          <span>234</span>
        </div>
        <div className="text-center">
          <div className="w-[40px] h-[40px] rounded-full bg-slate-200 flex items-center justify-center">
            <FaShare className="text-xl text-center" />
          </div>
          <span>234</span>
        </div>
      </div>
    </div>
  );
};
const RightHandSide = () => {
  return (
    <div className="snap-start max-w-[600px] border-b-2 border-gray-200 pb-10 pt-10 ">
      <VideoInfo />
      <VideoContent />
    </div>
  );
};
// const RightHandSide = () => {
//   const [posts, setPosts] = useState([]);
//   const [isShow, setIsShow] = useState(false);
//   const videoRef = useRef();
//   const [playing, setPlaying] = useState(false);

// useEffect(
//   () =>
//     onSnapshot(
//       query(collection(firestore, "posts"), orderBy("timestamp", "desc")),
//       (snapshot) => {
//         setPosts(snapshot.docs);
//       }
//     ),
//   [firestore]
// );

// useEffect(() => {
//   setTimeout(() => {
//     if (posts) {
//       setIsShow(true);
//     } else return;
//   }, 3000);
// }, [posts]);

// return (
//   <div className="right mt-4">

{
  /* {isShow ? (
        <>
          {posts.map((post) => (
            <Post
              key={post.id}
              caption={post.data().caption}
              company={post.data().company}
              video={post.data().image}
              profileImage={post.data().profileImage}
              topic={post.data().topic}
              timestamp={post.data().timestamp}
              username={post.data().username}
              userId={post.data().userId}
              songName={post.data().songName}
              id={post.id}
            />
          ))}
        </>
      ) : (
        <Skeleton />
      )} */
}
// </div>
//   );
// };

export default RightHandSide;
