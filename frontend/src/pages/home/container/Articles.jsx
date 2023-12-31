import React from "react";
import ArticleCard from "../../../components/ArticleCard";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { changeCount } from "../../../store/actions/countActions";

const Articles = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const countChangeHandler = (type) => {
    dispatch(changeCount(type));
  };

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
      <div className="mt-2 flex items-center gap-x-5">
        <button onClick={() => countChangeHandler("DECREASE")}>decrease</button>
        {count.number}
        <button onClick={() => countChangeHandler("INCREASE")}>increase</button>
      </div>
    </section>
  );
};

export default Articles;
