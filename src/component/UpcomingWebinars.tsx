import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";
const UpcomingWebinars = () => {
    const featureWebinars = [
        {   id:1,
            title: "Mastering Your Instrument",
            description: "Advance techniques to master your musical instrument of choice",
            slug: "mastering-your-instrument",
            isFeatured: true,
        },
        {id:2,
            title: "The Art of Public Speaking",
            description: "Learn to captivate your audience with confidence and clarity",
            slug: "the-art-of-public-speaking",
            isFeatured: false,
        },
        {id:3,
            title: "Startup Success Strategies",
            description: "Essential tips for launching and growing a successful startup",
            slug: "startup-success-strategies",
            isFeatured: true,
        },
        { id:4,
            title: "AI & The Future of Work",
            description: "How artificial intelligence is reshaping industries and careers",
            slug: "ai-and-future-of-work",
            isFeatured: false,
        },
        {id:5,
            title: "Photography for Beginners",
            description: "Master the fundamentals of photography and composition",
            slug: "photography-for-beginners",
            isFeatured: true,
        },
        { id:6,
            title: "Healthy Lifestyle Hacks",
            description: "Simple habits to improve physical and mental well-being",
            slug: "healthy-lifestyle-hacks",
            isFeatured: false,
        },
        {id:7,
            title: "Financial Freedom Blueprint",
            description: "A step-by-step guide to managing money and building wealth",
            slug: "financial-freedom-blueprint",
            isFeatured: true,
        },
        { id:9,
            title: "Coding for Non-Techies",
            description: "Learn basic coding concepts without prior experience",
            slug: "coding-for-non-techies",
            isFeatured: false,
        },
        { id:9,
            title: "Mastering Social Media Marketing",
            description: "Boost your online presence and grow your brand effectively",
            slug: "mastering-social-media-marketing",
            isFeatured: true,
        },    
    ];

    return (
        <div className="p-0 sm:p-10 md:p-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Heading Section */}
            <div className="text-center">
                <h2 className="text-sm sm:text-base text-teal-500 font-semibold tracking-wide uppercase">
                    FEATURED Webinars
                </h2>
                <p className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white">
                    Enhance Your Musical Journey
                </p>
            </div>
    
            {/* Hover Effect Section */}
            <div className="mt-10 w-full flex justify-center">
                <div className="w-full max-w-6xl px-4 sm:px-6 md:px-8 lg:px-10">
                    <HoverEffect
                        items={featureWebinars.map((webinar) => ({
                            title: webinar.title,
                            description: webinar.description,
                            link: '#',
                            key: `${webinar.title}-${webinar.id}`,
                        }))}
                    />
                </div>
            </div>
    
            {/* View All Button */}
            <div className="mt-10 text-center">
                <Link
                    href="/"
                    className="px-4 py-2 text-sm sm:text-base rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
                >
                    View All Webinars
                </Link>
            </div>
        </div>
    </div>
    
    )
}

export default UpcomingWebinars