// YourMainComponent.js
import React, { useState } from 'react';
import { useUser } from '@/context/UserContext';

const YourMainComponent = () => {
  const { user, dispatch } = useUser();
  const [newCourse, setNewCourse] = useState({ code: '', score: 0, unit: 0, grade: '', wgp: 0 });
  const year = 1; // Change this dynamically

  const addCourse = () => {
    dispatch({ type: 'ADD_COURSE', payload: { year, course: newCourse } });
    setNewCourse({ code: '', score: 0, unit: 0, grade: '', wgp: 0 });
  };

  return (
    <div>
      <h1>Your GPA Calculator</h1>
      <input
        type="text"
        value={newCourse.code}
        onChange={(e) => setNewCourse({ ...newCourse, code: e.target.value })}
      />
      {/* Add other input fields for score, unit, grade, wgp */}
      <button onClick={addCourse}>Add Course</button>
      {/* Display user data as needed */}
    </div>
  );
};

export default YourMainComponent;
