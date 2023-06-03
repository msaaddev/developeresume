import data from '@/data';
import { Fragment } from 'react';

const Skills = () => {
	const { skills } = data;

	return (
		<div>
			<h2 className="font-semibold text-lg uppercase border-b border-gray-400 mb-2">
				Skills
			</h2>
			{skills.map(type => (
				<div className="flex space-y-2" key={type.id}>
					<h3 className="basis-1/3 font-semibold">{type.name}</h3>
					<ul className="grid grid-cols-2">
						{type.skill.map(skill => (
							<div
								key={skill}
								className="flex flex-wrap space-x-2 mr-4 w-[180px]"
							>
								<span>•</span>
								<li>{skill}</li>
							</div>
						))}
					</ul>
				</div>
			))}
		</div>
	);
};

export default Skills;
