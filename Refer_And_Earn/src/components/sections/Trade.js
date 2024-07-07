import React, { useState } from 'react';

// Importing data
import { courses } from '../../data';

// Icons
import { IoIosArrowForward } from 'react-icons/io';

const Trade = () => {
    const [selectedCourse, setSelectedCourse] = useState(courses[0]);

    return (
        <section className='section lg:pt-[320px] bg-gradient-to-b from-[#f8f9fb] to-[#e2e3e7] text-gray-600 lg:-mt-[350px]'>
            <div className='container mx-auto'>
                <h2 className='section-title text-center mb-16'
                    data-aos='fade-up'
                    data-aos-offset='400'>
                    Discover and Trade Courses Securely
                </h2>
                {/* Courses */}
                <div className='flex flex-col gap-[45px] lg:flex-row'
                    data-aos='fade-up'
                    data-aos-offset='450'>
                    {courses.map((course, index) => (
                        <div
                            onClick={() => setSelectedCourse(course)}
                            className={`${selectedCourse === course ? 'bg-blue text-white' : 'bg-white'
                                } w-full rounded-2xl py-12 px-6 shadow-primary cursor-pointer transition duration-300`}
                            key={index}>
                            <div className='flex flex-col justify-center items-center'>
                                {/* Course image */}
                                <img className='mb-12' src={course.image} alt='' />
                                {/* Course details */}
                                <div className='mb-4 flex items-center gap-x-2'>
                                    <div className='text-[32px] font-bold'>{course.name}</div>
                                    <div className='text-lg text-gray-400 font-medium'>
                                        {course.abbreviation}
                                    </div>
                                </div>
                                {/* Course description */}
                                <p className='mb-6 text-center'>{course.description}</p>
                                {/* Button */}
                                <button
                                    className={`${selectedCourse === course
                                        ? 'text-white bg-blue hover:bg-blue-hover border-none pl-8 pr-6 gap-x-3 transition duration-300'
                                        : 'text-blue w-16'
                                        } border-2 border-gray-300 rounded-full h-16 flex justify-center items-center`}>
                                    {selectedCourse === course && (
                                        <div className='text-lg font-medium'>Refer Now</div>
                                    )}
                                    <IoIosArrowForward
                                        className={`${selectedCourse === course ? 'text-2xl' : 'text-3xl'
                                            }`}
                                    />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Trade;
