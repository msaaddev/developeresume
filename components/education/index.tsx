import data from '@/data';

const Education = () => {
	const { education } = data;
	return (
		<div>
			<h2 className="font-semibold text-lg uppercase border-b border-gray-400 mb-2">
				Education
			</h2>
			<div className="font-light">
				{education.map(value => (
					<div key={value.id} className="first:mt-0 mt-2">
						<div className="flex justify-between">
							<p className="font-medium">{value.university}</p>
							<p>{value.location}</p>
						</div>
						<div className="flex justify-between">
							<p>{value.degree}</p>
							<em>{value.duration}</em>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Education;
