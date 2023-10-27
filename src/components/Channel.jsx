import { Gif, Gift, PlusCircle, Smiley, Sticker } from "@phosphor-icons/react";
import ChannelBar from "./ChannelBar";
import posts from "../posts";

const dateFormatter = new Intl.DateTimeFormat("en", {
  timeStyle: "medium",
  dateStyle: "short",
});

const Channel = ({ channelName }) => {
  return (
    <div className="relative flex w-full flex-col dark:bg-gray-700">
      <ChannelBar channelName={channelName} />
      <Divider />
      <Posts />
      <MessageInput channelName={channelName} />
    </div>
  );
};

const Divider = () => (
  <hr
    className="m-0 w-full border
                border-gray-400 bg-gray-400 p-0
                dark:border-gray-800 dark:bg-gray-800"
  />
);

const Posts = () => {
  const userPosts = posts.map((post) => <Post post={post} key={post.id} />);

  return <div className="h-full">{userPosts}</div>;
};

const Post = ({ post }) => {
  const date = new Date(post.date);
  const formattedDate = dateFormatter.format(date).replace(",", "");

  return (
    <div className="mt-4 flex">
      <img
        className="mx-4 h-10 rounded-full bg-transparent"
        src={post.avatar}
        alt="User avatar"
      />

      <div className="flex flex-col items-start justify-start">
        <div className="mb-1 flex justify-start leading-none">
          <h6 className={`font-medium leading-none ${post.usernameColour}`}>
            {post.username}
          </h6>
          <p className="ml-2 self-end text-xs font-medium leading-tight dark:text-gray-500 text-gray-600">
            {formattedDate}
          </p>
        </div>

        <div className="dark:text-gray-400 text-gray-900">{post.message}</div>
      </div>
    </div>
  );
};

const MessageInput = ({ channelName }) => {
  return (
    <div className="mx-4 my-6 flex items-center rounded-lg bg-gray-300 py-2 dark:bg-gray-600">
      <div>
        <PlusCircle
          className="mx-4 cursor-pointer text-gray-600 
                  hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
          weight="fill"
          size={26}
        />
      </div>

      <input
        className="w-full bg-inherit text-gray-900 outline-none
                 placeholder:text-gray-500 dark:text-white dark:placeholder:text-gray-400"
        type="text"
        placeholder={`Message #${channelName}`}
      />

      <div className="mr-1 flex">
        <Gift
          className="mx-1.5 cursor-pointer text-gray-600 
                  hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
          weight="fill"
          size={28}
        />
        <Gif
          className="mx-1.5 cursor-pointer text-gray-600 
                  hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
          weight="fill"
          size={28}
        />
        <Sticker
          className="mx-1.5 cursor-pointer text-gray-600 
                  hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
          weight="fill"
          size={28}
        />
        <Smiley
          className="mx-1.5 cursor-pointer text-gray-600 
                  hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
          weight="fill"
          size={28}
        />
      </div>
    </div>
  );
};

export default Channel;
