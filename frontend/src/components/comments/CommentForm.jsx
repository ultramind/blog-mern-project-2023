import React, { useState } from "react";

const CommentForm = ({
  btnLabel,
  formSubmitHandler,
  formCanncelHandler = null,
  initialText,
}) => {
  const [value, setValue] = useState(initialText);
  const handleSubmit = (e) => {
    e.preventDefault();
    formSubmitHandler(value);
    setValue("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col items-end border border-primary rounded-lg p-4">
        <textarea
          className="w-full focus:outline-none bg-transparent"
          rows="5"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Send your reply here..."
        />
        <div className="flex flex-col-reverse items-center gap-y-2 gap-x-2 pt-2 min-[420px]:flex-row">
          {formCanncelHandler && (
            <button
              onClick={formCanncelHandler}
              type="submit"
              className="border-2 border-red-500 text-red-500 px-6 py-2.5 font-roboto rounded-lg"
            >
              Cancel
            </button>
          )}
          <button
            type="submit"
            className="bg-primary text-white px-6 py-2.5 font-semibold font-roboto rounded-lg"
          >
            {btnLabel}
          </button>
        </div>
      </div>
    </form>
  );
};

export default CommentForm;
