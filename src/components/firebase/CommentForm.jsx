// src/components/CommentForm.js
import React, { useState } from 'react';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

function CommentForm({ name }) { // Accept the name prop
  const [comment, setComment] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'testkomen'), {
        name, // Use the name prop here
        comment,
        createdAt: Timestamp.fromDate(new Date())
      });
      setComment('');
    } catch (error) {
      console.error('Error adding comment: ', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='input-container'>
        <label htmlFor="comment"></label>
        <textarea
          className='input'
          placeholder="Ketik Ucapan Disini"
          spellcheck="false"
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        />
      </div>
      
      <button className='button-2' type="submit">Kirim Ucapan</button>
    </form>
  );
}

export default CommentForm;
