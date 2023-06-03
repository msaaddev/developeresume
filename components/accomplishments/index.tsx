import data from '@/data';

const Accomplishments = () => {
    const { accomplishments } = data;
    return (
        <div>
            <h2 className='font-semibold text-lg uppercase border-b border-gray-400 mb-2'>
                Notable Accomplishments
            </h2>
            <div>
                <div className='my-2'>
                    <ul className='pl-4 leading-5 space-y-3 w-[86%]'>
                        {accomplishments.map(accomplishment => (
                            <div className='space-x-2 flex' key={Math.random() * 1000}>
                                <span>•</span>
                                <li
                                    className='inline-block'
                                    dangerouslySetInnerHTML={{ __html: accomplishment }}
                                />
                            </div>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Accomplishments;
