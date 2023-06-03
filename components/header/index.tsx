import data from '@/data';

const Header = () => {
    const { header } = data;

    return (
        <div className='flex flex-col items-center space-y-1'>
            <h1 className='font-semibold text-4xl'>{header.name}</h1>
            <div className='space-x-2 font-light'>
                <span>
                    <a href={`tel:${header.phoneNumber}`}>{header.phoneNumber}</a>
                </span>
                <span>|</span>
                <span>{header.location}</span>
            </div>
            <div className='space-x-2 font-light'>
                <span className='text-blue-500'>
                    <a href={`mailto:${header.email}`}>{header.email}</a>
                </span>
                <span>|</span>
                <span className='text-blue-500'>
                    <a href={`https://${header.linkedIn}`}>{header.linkedIn}</a>
                </span>
                <span>|</span>
                <span className='text-blue-500'>
                    <a href={`https://${header.github}`}>{header.github}</a>
                </span>
            </div>
        </div>
    );
};

export default Header;
