const dbConnect = require('@/utils/dbConnect');
const Project = require('@/models/Project');
const seed = async () => {
  await dbConnect();

  await Project.deleteMany({});
  await Language.deleteMany({});

  const projects = [
    {
      name: "Project 1",
      description: "Description for project 1",
      projectLink: "http://project1.com",
      imageUrl: "http://project1.com/image.jpg",
      sourceCode: "http://github.com/project1"
    },
    {
      name: "Project 2",
      description: "Description for project 2",
      projectLink: "http://project2.com",
      imageUrl: "http://project2.com/image.jpg",
      sourceCode: "http://github.com/project2"
    }
  ];

  await Project.insertMany(projects);
  console.log("Database seeded!");
  process.exit();
};

seed();
