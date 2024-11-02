// src/components/CommentList.js
import React, { useEffect, useState } from 'react';
import { collection, query, orderBy, onSnapshot, limit } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import flower from'../../assets/frame.png';
import './CommentList.css'
function CommentList({ commentLimit }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const q = query(collection(db, 'testkomen'), orderBy('createdAt', 'desc'), limit(commentLimit));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const commentsData = [];
      querySnapshot.forEach((doc) => {
        commentsData.push({ ...doc.data(), id: doc.id });
      });
      setComments(commentsData);
    });

    return () => unsubscribe();
  }, [commentLimit]);

  return (
    <div className='ucapan-container'>
      
      {comments.map((comment) => (
        <div className='ucapan-percard' key={comment.id}>
          <div className=''>
            <p>{comment.comment} <br /> -{comment.name}</p>
            <p><small>
              {comment.createdAt && comment.createdAt.toDate
                ? new Date(comment.createdAt.toDate()).toLocaleString()
                : "Invalid date"}
            </small></p>
            <img src={flower} className='ucapan-flower'></img>
          </div>

        </div>
      ))}
    </div>
  );
}

export default CommentList;
