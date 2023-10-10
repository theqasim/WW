import React from "react";
import Image from 'next/image'


interface BlogPostProps {
    title: string;
    thumbnail: string;
    description: string;
    destination: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ title, thumbnail, description, destination }) => {
    return (

<div className="grid grid-cols-1 gap-4 justify-content-space-between mx-auto hover:scale-105 transform transition-all duration-300 mb-10">
  <div className="max-w-sm border border-white border-2 rounded-lg dark:bg-gray-800 ">
    <a href={destination}>
      <Image className="rounded-t-lg" width={500} height={500} src={thumbnail} alt="" />
    </a>
    <div className="p-5">
      <a href={destination}>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
      <a href={destination} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Read Course
        <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
      </a>
    </div>
  </div>
</div>

    );
};

const LessonsArchive: React.FC = () => {
  const blogPosts = [
    {
      title: "How I Would Start Dropshipping with $0 (FREE COURSE)",
      thumbnail: "/30days-dropshipping.jpg",
      description: "Dropshipping is a very popular business model, and it has been around for a long time. It has a resurgence over the past year with a lot of people attempting it, and a lot of them are doing it incorrectly. Leading them to waste their time and money. In this lesson, I will teach you exactly how to Dropshipping and do it successfully. ",
      destination: "/lessons/dropshipwithnomoney",
    },
    {
        title: "How to make money as a teen with $0",
        thumbnail: "/30days-dropshipping.jpg",
        description: "Struggling to make money online? Have no idea where to start? I've been there, I have been making online for 6 years, since the age of 14. I have tested a variety of business models and side hustles. I will teach you the easiest and best way to make money online, and the best part is you need $0 to start. You will lose nothing doing this, but you have everything to gain.",
        destination: "",
      },
      {
        title: "More coming soon!",
        thumbnail: "/30days-dropshipping.jpg",
        description: "",
        destination: "",
      },


  ];

  return (
    <div className="grid grid-cols-3 max-md:grid-cols-1 gap-4 place-items-stretch h-56 mt-20 ">
      {blogPosts.map((blogPost) => (
        <BlogPost
          key={blogPost.title}
          title={blogPost.title}
          thumbnail={blogPost.thumbnail}
          description={blogPost.description}
          destination={blogPost.destination}
        />
      ))}
    </div>
  );
};

const PageWrapper: React.FC = () => {
  return (
    <div className="bg-black min-h-screen">
      <LessonsArchive />
    </div>
  );
};

export default PageWrapper;
