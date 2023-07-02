import React from "react";
import { Link } from "react-router-dom";

const SuggestedPosts = ({ className, header, posts, tags }) => {
  return (
    <div
      className={`w-full shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] rounded-lg p-4 ${className}`}
    >
      <h2 className="font-roboto font-semibold text-dark-hard md:text-xl">
        {header}
      </h2>
      <div className="grid gap-y-5 mt-5 md:grid-cols-2 md:gap-x-5 lg:grid-cols-1">
        {posts.map((item, index) => (
          <div
            key={item._id}
            className="flex space-x-3 flex-nowrap items-center"
          >
            <img
              className="aspect-square object-cover rounded-lg w-1/5"
              src={item.image}
              alt="Post image"
            />
            <div className="text-sm font-roboto text-dark-hard font-semibold">
              <h3 className="font-semibold text-lg mt-4">{item.title}</h3>
              <span className="text-sm opacity-60">
                {new Date(item.createdAt).toLocaleDateString("ens-US", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </span>
            </div>
          </div>
        ))}
      </div>
      <h2 className="font-semibold mt-8 md:text-xl">Tags</h2>
      <div className="flex flex-wrap gap-x-2 gap-y-2 mt-4">
        {tags.map((item, index) => (
          <Link
            key={index}
            to="/"
            className="inline-block px-2 py-1.5 text-sm rounded-md bg-primary text-white md:text-sm"
          >
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SuggestedPosts;
