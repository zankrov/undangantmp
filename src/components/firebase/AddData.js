// src/components/AddData.js
import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';

function AddData() {
  const [name, setName] = useState('');

  const handleAdd = async () => {
    try {
      const docRef = await addDoc(collection(db, 'users'), {
        name: name
      });
      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  return (
    <div>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={handleAdd}>Add Data</button>
    </div>
  );
}

export default AddData;
