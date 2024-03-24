import { useLoaderData } from "react-router-dom";
import anotherImg from "../assets/images/404.jpg";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const Content = () => {
  const blog = useLoaderData();
  console.log(blog);
  const { cover_image, title, tags, body_html } = blog;
  return (
    <div className="p-2 border-2 border-opacity-30 mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
      <img
        role="presentation"
        className="object-cover w-full rounded h-44 dark:bg-gray-500"
        src={cover_image || anotherImg}
      />
      <div className="flex flex-wrap py-2 gap-2 border-t border-dashed dark:border-gray-600">
        {tags.map((tag) => (
          <a
            key={tag.id}
            rel="noopener noreferrer"
            href="#"
            className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-600 dark:text-gray-50"
          >
            #{tag}
          </a>
        ))}
      </div>
      <div className="">
        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline mb-4">
          {title}
        </h3>
        <div className="truncate">
          <Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>
        </div>
      </div>
    </div>
  );
};

export default Content;
<h1>Boss content a ase</h1>;
