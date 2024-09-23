import React from 'react';
import data_course from '../../Assets/data.js';
import Item from "../Courses/Item.jsx";

const DisplayCourse = ({ selectedCategory }) => {
  // Get courses for the selected category
  const courses = data_course[selectedCategory] || [];

  console.log(courses);

  return (
      <div className='courses_data_container'>
        <div className='course_list grid grid-cols-3 gap-5 px-5 py-5'>
          {courses.length > 0 ? (
              courses.map(course => (
                  <Item
                      key={course.title}
                      image={course.image}
                      name={course.title}
                      instructor={course.instructors.join(', ')}
                      rating={course.rating.value}
                      reviews={course.rating.reviews}
                      new_price={course.price.current}
                      old_price={course.price.original}
                  />
              ))
          ) : (
              <p>No courses found for the selected category.</p>
          )}
        </div>
      </div>
  );
};

export default DisplayCourse;