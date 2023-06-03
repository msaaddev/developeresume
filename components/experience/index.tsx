import data from '@/data';

const Experience = () => {
    const { experience } = data;
    return (
        <div>
            <h2 className='font-semibold text-lg uppercase border-b border-gray-400 mb-2'>
                Work Experience
            </h2>
            {experience.map(exp => (
                <div key={exp.id}>
                    <div className='flex justify-between'>
                        <h3 className='font-semibold'>{exp.designation}</h3>
                        <span>{exp.duration}</span>
                    </div>
                    <div className='flex justify-between'>
                        <h3>{exp.company}</h3>
                        <em>{exp.location}</em>
                    </div>
                    <div className='my-2'>
                        <ul className='pl-4 leading-5 space-y-3 w-[86%]'>
                            {exp.tasks.map((task, index) => (
                                <div className='space-x-2 flex' key={index}>
                                    <span>•</span>
                                    <li
                                        className='inline-block'
                                        dangerouslySetInnerHTML={{ __html: task }}
                                    />
                                </div>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Experience;
