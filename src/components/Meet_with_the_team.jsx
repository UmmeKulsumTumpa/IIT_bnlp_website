import React, { useState } from 'react';
import Person1Image from '../assets/Meet_with_the_teams/Dr Ahmedul Kabir.jpg';
import Person2Image from '../assets/Meet_with_the_teams/Shebuty Rayana.jpg';
import Person3Image from '../assets/Meet_with_the_teams/Zarif Masud.jpg';
import Person4Image from '../assets/Meet_with_the_teams/Abhijit Paul.jpg';
import Person5Image from '../assets/Meet_with_the_teams/Sharif Mohammad Abdullah.jpg';
import Person6Image from '../assets/Meet_with_the_teams/Mashiat Amin Farin.jpg';

const TeamMember = ({ name, position, email, github, linkedin, image }) => {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div className="flex items-center mb-8 md:w-1/2 lg:w-1/3 cursor-pointer" onClick={() => setShowDescription(!showDescription)}>
      <img src={image} alt={name} className="w-32 h-32 rounded-full mr-6" />
      <div>
        <h2 className="text-xl font-semibold mr-4">{name}</h2>
        {showDescription && (
          <div className="description-container mt-2 bg-gray-100 p-4 rounded-lg">
            <p className="text-gray-800 mb-2 flex items-center"><i className="fas fa-user mr-2"></i>Designation: {position}</p>
            <p className="text-gray-800 mb-2 flex items-center"><i className="fas fa-envelope mr-2"></i>Email: {email}</p>
            <p className="text-gray-800 mb-2 flex items-center"><i className="fab fa-github mr-2"></i>Github: <a href={github} className="text-blue-600 hover:underline">{github}</a></p>
            <p className="text-gray-800 mb-2 flex items-center"><i className="fab fa-linkedin mr-2"></i>LinkedIn: <a href={linkedin} className="text-blue-600 hover:underline">{linkedin}</a></p>
          </div>
        )}
      </div>
    </div>
  );
};

const Team = () => {
  return (
    <div className="container mx-auto py-10 bg-white">
      <h1 className="text-3xl font-bold text-center mb-8">Meet the Team</h1>
      <div className="flex flex-row md:flex-wrap">
        {/* Member 1 */}
        <TeamMember
          name="Dr Ahmedul Kabir"
          position="Professor"
          email="person1@example.com"
          github="https://github.com/person1"
          linkedin="https://www.linkedin.com/in/ahmedul-kabir-90469134/"
          image={Person1Image}
        />
        {/* Member 2 */}
        <TeamMember
          name="Shebuty Rayana"
          position="Software Engineer"
          email="person2@example.com"
          github="https://github.com/person2"
          linkedin="https://www.linkedin.com/in/shebuti-rayana/"
          image={Person2Image}
        />
        {/* Member 3 */}
        <TeamMember
          name="Zarif Masud"
          position="Project Manager"
          email="person3@example.com"
          github="https://github.com/person3"
          linkedin="https://www.linkedin.com/in/zarifmasud/"
          image={Person3Image}
        />
        {/* Member 4 */}
        <TeamMember
          name="Abhijit Paul"
          position="Software Developer"
          email="person4@example.com"
          github="https://github.com/person4"
          linkedin="https://www.linkedin.com/in/abj-paul/"
          image={Person4Image}
        />
        {/* Member 5 */}
        <TeamMember
          name="Sharif Mohammad Abdullah"
          position="UI/UX Designer"
          email="person5@example.com"
          github="https://github.com/person5"
          linkedin="https://www.linkedin.com/in/sharifmabdullah/"
          image={Person5Image}
        />
        {/* Member 6 */}
        <TeamMember
          name="Mashiat Amin Farin"
          position="Frontend Developer"
          email="person6@example.com"
          github="https://github.com/person6"
          linkedin="https://www.linkedin.com/in/mashiataminfarin/"
          image={Person6Image}
        />
      </div>
    </div>
  );
};

export default Team;
