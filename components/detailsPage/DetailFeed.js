import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { onSnapshot, query, collection, orderBy } from "firebase/firestore";

import { firestore } from "../../firebase/firebase";
import VideoDetail, { VideoContent } from "./VideoDetail";

const DetailFeed = () => {
  const router = useRouter();
  const { videoId } = router.query;
  const [posts, setPosts] = useState([]);

  useEffect(
    () =>
      onSnapshot(
        query(collection(firestore, "posts"), orderBy("timestamp", "desc")),
        (snapshot) => {
          setPosts(snapshot.docs);
        }
      ),
    [firestore]
  );
  /*   console.log(posts); */

  return (
    //   <div
    //     style="height: 200px;
    // width: 500px;
    // background-color: powderblue;"
    //   >
    //     <p
    //       style="height: 200px;
    // width: 500px;
    // background-color: powderblue;"
    //     >
    //       testing
    //     </p>

    //   </div>
    <div>
      {posts.map((post) => (
        <VideoDetail
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
          videoId={videoId}
        />
      ))}
    </div>
  );
};

export default DetailFeed;
