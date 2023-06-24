import React from "react";
import ArticleCard from "../../../components/ArticleCard";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Articles = () => {
  return (
    <section className="flex flex-col container mx-auto md:gap-x-5 gap-y-5 px-5 py-10">
      <div className="flex flex-wrap md:gap-x-5 gap-y-5 pb-10">
        <ArticleCard className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]" />
        <ArticleCard className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]" />
        <ArticleCard className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]" />
      </div>
      <button className="mx-auto flex items-center gap-x-2 font-bold text-primary border-2 border-primary rounded-lg px-6 py-3">
        <span>More Articles</span>
        <MdKeyboardDoubleArrowRight className="w-3 h-3" />
      </button>
    </section>
  );
};

export default Articles;
