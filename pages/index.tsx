import { Header, Education, Skills, Experience, Projects, Accomplishments } from '@/components';
import Head from 'next/head';
import data from '@/data'

export default function Home() {
    return (
        <>
            <Head>
                <title>resume-muhammad-saad</title>
            </Head>
            <div className='bg-white min-h-screen text-black space-y-3 font-light'>
                <Header />
                <Experience />
                <Education />
                <Projects />
                <Skills />
                <Accomplishments />
            </div>
        </>
    );
}
