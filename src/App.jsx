import React from "react"; 
import Header from "./components/Header.jsx"; 
import { Button, Typography } from "@mui/material"; 
import CourseCard from "./components/CourseCard.jsx"; 
import './App.css';

const CourseList = [
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTebnR5AMSTxJ_9lkten1u9YFrj0BGTxrHGUw&s", // Replace with a valid URL
    heading: "Full Stack Development",
    description: "A full stack developer can build both the front end and back end of an application.",
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh0UXfxjjO7up3CDL6Fo6Zn8XJLOsvsj3oHw&s", // Replace with a valid URL
    heading: "Software Testing",
    description: "Software testing automation and manual testing ensure application quality.",
  },
  {
    image: "https://assets.intersystems.com/26/bd/6a6aa762425f87ad7d5c2fe65f8c/awslogo-image.jpg", // Replace with a valid URL
    heading: "AWS",
    description: "AWS allows secure application hosting with various management tools.",
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTebnR5AMSTxJ_9lkten1u9YFrj0BGTxrHGUw&s", // Replace with a valid URL
    heading: "Full Stack Development",
    description: "A full stack developer can build both the front end and back end of an application.",
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh0UXfxjjO7up3CDL6Fo6Zn8XJLOsvsj3oHw&s", // Replace with a valid URL
    heading: "Software Testing",
    description: "Software testing automation and manual testing ensure application quality.",
  },
  {
    image: "https://assets.intersystems.com/26/bd/6a6aa762425f87ad7d5c2fe65f8c/awslogo-image.jpg", // Replace with a valid URL
    heading: "AWS",
    description: "AWS allows secure application hosting with various management tools.",
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTebnR5AMSTxJ_9lkten1u9YFrj0BGTxrHGUw&s", // Replace with a valid URL
    heading: "Full Stack Development",
    description: "A full stack developer can build both the front end and back end of an application.",
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh0UXfxjjO7up3CDL6Fo6Zn8XJLOsvsj3oHw&s", // Replace with a valid URL
    heading: "Software Testing",
    description: "Software testing automation and manual testing ensure application quality.",
  },
  {
    image: "https://assets.intersystems.com/26/bd/6a6aa762425f87ad7d5c2fe65f8c/awslogo-image.jpg", // Replace with a valid URL
    heading: "AWS",
    description: "AWS allows secure application hosting with various management tools.",
  },
];


const App = () => {
  return (
    <div>
      <Header />

      <div style={{ marginTop: "30px" }}>
        <Typography variant="h3" align="center">
          Welcome to Kanish
        </Typography>

        <Typography variant="body2" align="center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          minima molestias aperiam dignissimos, distinctio rerum reiciendis
          fugiat quis sit eveniet iure provident consequatur quibusdam atque
          temporibus voluptatum hic velit neque!
        </Typography>
        
      </div>
      <Typography variant="h4"  align='center'>
       Dive into our cources
       </Typography>

      <div style={{ display: 'flex', flexWrap:'wrap', gap: '20px', justifyContent: 'center', margin: '20px' }}>
        {CourseList.map((course, index) => (
          <CourseCard 
            key={index} 
            image={course.image} 
            heading={course.heading} 
            description={course.description} 
          />
        ))}
      </div>
    </div>
  );
};

export default App;
