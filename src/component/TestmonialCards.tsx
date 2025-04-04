"use client";

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { cn } from "@/lib/utils";

const testimonials = [
    {
        quote:
            "This platform has completely transformed our team's workflow. We’ve saved countless hours and significantly boosted productivity!",
        name: "John D.",
        title: "Marketing Manager",
    },
    {
        quote:
            "Absolutely love how intuitive and user-friendly it is. It made project management a breeze and kept us on track effortlessly.",
        name: "Sarah L.",
        title: "Small Business Owner",
    },
    {
        quote:
            "The integration was seamless, and the documentation was spot on. It’s rare to find software that works this well out of the box.",
        name: "Michael R.",
        title: "Software Developer",
    },
    {
        quote:
            "We’ve seen a remarkable improvement in collaboration and communication since using this tool. Highly recommend it!",
        name: "Emily K.",
        title: "HR Coordinator",
    },
    {
        quote:
            "It’s like having an extra team member who never gets tired. Our projects are smoother and more organized than ever before.",
        name: "David P.",
        title: "Graphic Designer",
    },
    {
        quote:
            "Managing tasks has never been easier. Our team feels more connected and empowered to take on new challenges.",
        name: "Lisa M.",
        title: "Project Lead",
    },
    {
        quote:
            "Perfect for freelancers juggling multiple projects. Keeps me organized and focused on delivering quality work.",
        name: "Tom S.",
        title: "Freelancer",
    },
    {
        quote:
            "Our daily operations have become more streamlined and efficient. Can’t imagine going back to the old way of doing things!",
        name: "Rachel A.",
        title: "Operations Manager",
    },
    {
        quote:
            "This tool is a lifesaver for educators. I can easily track student progress and manage lesson plans without feeling overwhelmed.",
        name: "Nathan C.",
        title: "Educator",
    },
    {
        quote:
            "From content planning to execution, it’s my go-to tool. I’m way more organized, and my output has significantly increased.",
        name: "Jessica W.",
        title: "Content Creator",
    },
];

const MusicSchoolTestimonial = () => {
    return (
        <div className="relative flex h-[50rem] w-full items-center justify-center bg-white dark:bg-black">
            {/* Moving grid background with responsive size */}
            <div
                className={cn(
                    "absolute inset-0 -z-10 animate-gridMove",
                    "bg-[length:20px_20px] sm:bg-[length:30px_30px] md:bg-[length:40px_40px] lg:bg-[length:50px_50px]",
                    "bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
                    "dark:bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
                )}
            />
            {/* Radial gradient for the container to give a faded look */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
            <div className="w-full">
    {/* Responsive Heading */}
    <h2 className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-4 text-2xl font-bold text-center sm:text-3xl md:text-4xl lg:text-5xl">
        Hear our Harmony: Voices of Success
    </h2>

    {/* Centered Container with Overflow Handling */}
    <div className="flex justify-center w-full px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-4xl bg-transparent px-4 sm:px-6 md:px-8 lg:px-10">
            <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="slow"
            />
        </div>
    </div>
</div>

        </div>


    );
};

export default MusicSchoolTestimonial;
