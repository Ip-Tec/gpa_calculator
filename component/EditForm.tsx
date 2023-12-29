import React, { useState } from "react";
import { CourseProps } from "@/type";

const EditForm: React.FC<{ course: CourseProps; onSave: (editedCourse: CourseProps) => void; onCancel: () => void }> = ({ course, onSave, onCancel }) => {
  const [editedCourse, setEditedCourse] = useState(course);

  const handleInputChange = (field: keyof CourseProps, value: string | number) => {
    setEditedCourse((prevCourse) => ({ ...prevCourse, [field]: value }));
  };

  const handleSaveClick = () => {
    onSave(editedCourse);
  };

  return (
    <div className="max-w-sm">
      <span>
        <input width={"2rem"} type="text" value={editedCourse.CourseCode} onChange={(e) => handleInputChange("CourseCode", e.target.value)} style={{width:"2rem"}} />
      </span>
      <span>
        <input width={"2rem"} type="number" value={editedCourse.CourseScore} onChange={(e) => handleInputChange("CourseScore", +e.target.value)} style={{width:"2rem"}} />
      </span>
      <span>
        <input width={"2rem"} type="number"  value={editedCourse.CourseUnit} onChange={(e) => handleInputChange("CourseUnit", +e.target.value)} style={{width:"2rem"}} />
      </span>
      <span>
        <button onClick={handleSaveClick}>Save</button>
        <button onClick={onCancel}>Cancel</button>
      </span>
    </div>
  );
};

export default EditForm;
