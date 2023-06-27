import React from "react";
import MainLayout from "../../components/MainLayout";
import BreadCrumbs from "../../components/BreadCrumbs";
import { images } from "../../constant";
import { Link } from "react-router-dom";
import SuggestedPosts from "./container/SuggestedPosts";

const breadCrumbsData = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Blog",
    link: "/blog",
  },
  {
    name: "Article Title",
    link: "/blog/1",
  },
];

const postData = [
  {
    _id: 1,
    image: images.Post1Image,
    title: "Help children get better education",
    createdAt: "2023-06-26T14:34:46.607+0000",
  },
  {
    _id: 2,
    image: images.Post1Image,
    title: "Help children get better education",
    createdAt: "2023-06-26T14:34:46.607+0000",
  },
  {
    _id: 3,
    image: images.Post1Image,
    title: "Help children get better education",
    createdAt: "2023-06-26T14:34:46.607+0000",
  },
  {
    _id: 4,
    image: images.Post1Image,
    title: "Help children get better education",
    createdAt: "2023-06-26T14:34:46.607+0000",
  },
];

const tagData = ["Medical", "LifeStyle", "Learn", "Food", "Diet", "Education"];

const ArticleDetails = () => {
  return (
    <MainLayout>
      <section className="container mx-auto max-w-5xl flex flex-col px-5 py-5 lg:flex-row lg:gap-x-5 lg:items-start">
        <article className="flex-1">
          <BreadCrumbs data={breadCrumbsData} />
          <img
            src={images.Post1Image}
            alt="blog image"
            className="rounded-xl w-full"
          />
          <Link
            to="/blog?category=selectedCategory"
            className="text-primary text-sm font-roboto block md:text-base md:mt-4"
          >
            {" "}
            EDUCATION
          </Link>
          <h1 className="text-xl font-medium font-roboto mt-4 text-dark-hard md:text-[26px]">
            Help children get better education
          </h1>
          <div className="mt-4 text-dark-soft">
            <p className="leading-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae
              congue mauris rhoncus aenean vel elit scelerisque. In egestas erat
              imperdiet sed euismod nisi porta lorem mollis. Morbi tristique
              senectus et netus. Mattis pellentesque id nibh tortor id aliquet
              lectus proin.
            </p>
          </div>
        </article>
        <SuggestedPosts
          className="mt-8 lg:mt-0 lg:max-w-xs"
          header="Latest Posts"
          posts={postData}
          tags={tagData}
        />
      </section>
    </MainLayout>
  );
};

export default ArticleDetails;
