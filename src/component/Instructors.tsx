'use client'
import { AnimatedTooltip } from "./ui/animated-tooltip"
import { WavyBackground } from "./ui/wavy-background"

const instructor=[
    {
        id: 1,
        name: 'Arun Kumar Verma',
        designation: 'Web Developer',
        image: '/Arun.jpg',
    },
    {
        id: 2,
        name: 'Priya Sharma',
        designation: 'UI/UX Designer',
        image: 'https://media.istockphoto.com/id/1352606416/photo/young-woman-working-at-home-stock-photo.jpg?s=1024x1024&w=is&k=20&c=eQx3lFg0iNYAFhsJPBOwfOQTj0qDrWZPncz70RJkvS0=',
    },
    {
        id: 3,
        name: 'Rahul Singh',
        designation: 'Full Stack Developer',
        image: 'https://media.istockphoto.com/id/1309101136/photo/anger-man-confused-image.jpg?s=1024x1024&w=is&k=20&c=9NXTonaqYPAZevHARJrLefIgBHvFh4CS627svSwlS1Q=',
    },
    {
        id: 4,
        name: 'Neha Kapoor',
        designation: 'Project Manager',
        image: 'https://media.istockphoto.com/id/1364392269/photo/woman-with-laptop-stock-photo.jpg?s=1024x1024&w=is&k=20&c=pecGRf5niPs9f0iWIJo5qKW0Nspih0rNLdFlfNJY09Y=',
    },
    {
        id: 5,
        name: 'Vikas Tiwari',
        designation: 'Software Engineer',
        image: 'https://media.istockphoto.com/id/1074604876/photo/indian-male-in-a-jacket.jpg?s=1024x1024&w=is&k=20&c=Q88NDHR3ejzYvks_Z6KpJM7420J52LdhUd8og50N2LI=',
    },
    {
        id: 6,
        name: 'Anjali Mehta',
        designation: 'Marketing Lead',
        image: 'https://media.istockphoto.com/id/1352606416/photo/young-woman-working-at-home-stock-photo.jpg?s=1024x1024&w=is&k=20&c=eQx3lFg0iNYAFhsJPBOwfOQTj0qDrWZPncz70RJkvS0=',
    }
]

const Instructors = () => {
    return (
        <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
            <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
                <h2 className="text-2xl ms:text-4xl lg:text-7xl text-white font-bold text-center mb-8">Meet Our instructors</h2>
                <p className="text-base md:text-lg text-white text-center mb-4">Discover the talented professionals who will guide your musical journey</p>
                <div className="flex flex-row items-center justify-center mb-10 w-full">
                 <AnimatedTooltip items={instructor}/>
                </div>
            </WavyBackground>
        </div>
    )
}

export default Instructors