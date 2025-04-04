"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const WhyChooseUs = () => {   
    const content = [
        {
          title: "Personalized Music Lessons",
          description:
            "Unlock your musical potential with personalized lessons tailored to your skill level and interests. Whether you're a beginner or an advanced musician, our instructors will help you master your favorite instrument or vocal style.",
          content: (
            <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--purple-500))] text-white">
              Personalized Music Lessons
            </div>
          ),
        },
        {
          title: "State-of-the-Art Facilities",
          description:
            "Our music school offers top-notch facilities, including soundproof practice rooms, recording studios, and performance stages. Experience professional environments designed to inspire and elevate your music journey.",
          content: (
            <div className="flex h-full w-full items-center justify-center text-white">
              <Image
                src="/Arun.jpg"
                width={300}
                height={300}
                className="h-full w-full   object-cover"
                alt="Music studio"
              />
            </div>
          ),
        },
        {
          title: "Expert Instructors",
          description:
            "Learn from the best! Our instructors are experienced musicians and educators dedicated to helping you achieve your musical goals. Get hands-on guidance, personalized feedback, and motivation to keep progressing.",
          content: (
            <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--red-500),var(--yellow-500))] text-white">
              Expert Instructors
            </div>
          ),
        },
        {
          title: "Community Performances",
          description:
            "Showcase your skills in community performances and recitals. Join our music family and gain invaluable stage experience while connecting with fellow musicians. Whether solo or ensemble, we have opportunities for everyone!",
          content: (
            <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--green-500),var(--teal-500))] text-white">
              Community Performances
            </div>
          ),
        },
        {
          title: "Music Theory Workshops",
          description:
            "Deepen your understanding of music with theory workshops designed to enhance your composition and performance skills. Learn about scales, harmony, rhythm, and more from expert instructors.",
          content: (
            <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--indigo-500),var(--cyan-500))] text-white">
              Music Theory Workshops
            </div>
          ),
        },
        {
          title: "Recording and Production",
          description:
            "Get hands-on experience with recording and music production. Our professional studios are equipped with the latest technology, allowing you to create high-quality recordings and produce your own music.",
          content: (
            <div className="flex h-full w-full items-center justify-center text-white">
              <Image
                src="/Arun.jpg"
                width={300}
                height={300}
                className="h-full w-full p-4 object-cover"
                alt="Recording studio"
              />
            </div>
          ),
        },
        {
          title: "Instrument Rentals",
          description:
            "Don’t own an instrument yet? No worries! We offer a wide range of high-quality instruments for rent, so you can practice and perform without the commitment of purchasing one.",
          content: (
            <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--pink-500))] text-white">
              Instrument Rentals
            </div>
          ),
        },
        {
          title: "Online Classes",
          description:
            "Can’t make it to the school? Join our interactive online classes from the comfort of your home. Learn from expert instructors via live video sessions and continue your music journey no matter where you are.",
          content: (
            <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
              Online Classes
            </div>
          ),
        },
        {
          title: "Performance Ensembles",
          description:
            "Join one of our ensembles and perform with fellow musicians. From jazz bands to classical orchestras, we have a group for every musical taste and skill level. Develop teamwork and perform on stage!",
          content: (
            <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--violet-500),var(--amber-500))] text-white">
              Performance Ensembles
            </div>
          ),
        },
        {
          title: "Summer Music Camps",
          description:
            "Immerse yourself in music during our summer camps! Join other passionate musicians for workshops, rehearsals, and performances, while building lifelong friendships and memories.",
          content: (
            <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--yellow-500),var(--lime-500))] text-white">
              Summer Music Camps
            </div>
          ),
        },
      ];      
  
  return (
    <div>
        <StickyScroll  content={content} />
    </div>
  )
}

export default WhyChooseUs