import { default as React, useEffect } from "react";
import EditorJS from "@editorjs/editorjs";
import constants from "./constants";
import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
const Editor = () => {
  // const [editor, setEditor] = useState(null);
  const [categoryPost, setCategoryPost] = useState("");
  const [title, setTitle] = useState("");
  let editor = { isReady: false };
  useEffect(() => {
    if (!editor.isReady) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      editor = new EditorJS(constants())
    }
  }, []);
  const handleSave = () => {
    editor
      .save()
      .then(async (body) => {
        const data = await axios({
          url: "http://192.168.126.34:3000/v1/api/post",
          method: "POST",
          data: {
            categoryId: categoryPost,
            body: JSON.stringify(body),
            title: title,
          },
        });
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const category = useSelector((state) => state.category);

  return (
    <>
      {/* <h2 className='text-center text-lg'>پست جدید</h2> */}

      <div className="mx-2 bg-gray-100/80 shadow-md p-2 pt-4 rounded">
        <div className=" w-full flex justify-between border-b pb-3">
          <button
            className="btn text-white disabled:bg-gray-200"
            disabled={
              categoryPost.length === 0 ||
              categoryPost === "null" ||
              title.length < 5
            }
            onClick={handleSave}
          >
            ذخیره{" "}
          </button>
          <div className="w-full text-left">
            <select
              onChange={(e) => {
                setCategoryPost(e.target.value);
              }}
              className="bg-gray-50 border py-1 px-2 md:w-1/3 w-1/2 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 outline-none"
            >
              <option value="null"> دسته بندی را انتخاب کنید </option>
              {category.map((cate) => (
                <option key={cate.id} value={cate.id}>
                  {cate.name}{" "}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex items-center m-2">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mr-1 appearance-none w-full py-2 px-3 text-gray-900 bg-transparent focus:outline-none focus:shadow-outline text-lg"
            id="title"
            type="text"
            placeholder="عنوان را تایپ کنید ... "
          />
        </div>
        <div className="" id="editor" />
      </div>
    </>
  );
};

export default Editor;
