console.log("Lancement du seed")

const dbConnect = require('../utils/dbConnect');
const Project = require('../models/Project');
const seed = async () => {

  await dbConnect();

  await Project.deleteMany({});

  const projects = [
    {
      title: "Project 1",
      description: "Description for project 1",
      techs: ["Node.js", "Express", "MongoDB"],
      image: "http://project1.com/image.jpg",
      project_url: "http://github.com/project1"
    },
    {
      title: "Project 2",
      description: "Description for project 2",
      techs: ["React", "Tailwind CSS", "MongoDB"],
      image: "http://project2.com/image.jpg",
      project_url: "http://github.com/project2"
    }
  ];

  await Project.insertMany(projects);
  console.log("Database seeded!");
  process.exit();
};

seed();
