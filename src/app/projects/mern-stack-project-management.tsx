import DetailedPage from '@/components/DetailedPage';

const Project = () => {
  return (
    <DetailedPage
      stack={[
        'TypeScript',
        'React',
        'Redux',
        'Semantic UI',
        'Node.js',
        'Express.js',
        'Passport.js',
        'JWT',
        'Axios',
        'MongoDB',
        'Mongoose',
      ]}
      githubUrl="https://github.com/bennymeier/mern-stack-project-management"
      type="Personal"
      images={['img/projects/mern-stack-project-management-login.png']}
      description="I have tried to use the well known MERN stack in a meaningful way. I had
      the idea of a Kanban Board, similar to Jira Project Management.
      You can create project boards to which you can later assign tasks, bugs,
      features or epics. These different types can then be moved in the Kanban
      Board, e.g. a bug can be moved from Todo to In Progress and when it is
      finished, to done.
      For the drag and drop I used the library of Airbnb. This library works
      very smooth and is based on different algorithms for scrolling.
      In the frontend I chose React because I have many components that I can
      use again elsewhere. To have my state global I used Redux.
      In the backend I used Node.js and MongoDB. Both can be linked quite easily
      thanks to the library Mongoose.
      There is a big API for creating, reading, updating and deleting:
      I have also worked with new libraries, including Passport.js and JWT.
      Passport.js for easy authentication in Node.js in
      combination with JWT."
      title="MERN Stack Project Management"
    />
  );
};

export default Project;
