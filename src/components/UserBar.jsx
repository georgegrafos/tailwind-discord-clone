import { Microphone, Headphones, Gear } from "@phosphor-icons/react";

const user = {
  username: "George",
  avatar: "https://api.dicebear.com/7.x/micah/svg?radius=50",
  status: "Online",
};

const UserBar = () => {
  return (
    <div className="flex h-14 w-full items-center bg-gray-200 dark:bg-gray-900">
      <div className="flex flex-auto items-center p-2">
        <div className="flex w-full cursor-pointer gap-2 rounded p-1 dark:hover:bg-gray-700">
          <UserIcon />
          <UserName />
        </div>
        <ActionsIcons />
      </div>
    </div>
  );
};

const UserIcon = () => {
  return (
    <div className="relative -ml-1 flex h-8 w-8">
      <img
        className="rounded-full bg-white"
        src={user.avatar}
        alt="User avatar"
      />
      <div
        className="absolute -bottom-1 -right-1  h-4 w-4
                   items-center justify-center rounded-full
                   bg-gray-200 text-center dark:bg-gray-900"
      >
        <div
          className="relative left-1/2 top-1/2 h-2.5 w-2.5 
                        -translate-x-1/2 -translate-y-1/2 rounded-full
                        bg-green-600 text-center"
        ></div>
      </div>
    </div>
  );
};

const UserName = () => {
  return (
    <div className="flex flex-col">
      <div className="text-sm font-semibold text-gray-900 dark:text-gray-100">
        {user.username}
      </div>
      <div className="text-xs font-medium text-gray-500">{user.status}</div>
    </div>
  );
};

const ActionsIcons = () => {
  return (
    <div className="ml-auto flex">
      <div
        className="flex h-8 w-8 cursor-pointer items-center justify-center
                      rounded text-center dark:hover:bg-gray-700"
      >
        <Microphone
          className="cursor-pointer text-gray-600 hover:text-gray-800
                   dark:text-gray-400 dark:hover:text-gray-200"
          weight="fill"
          size={20}
        />
      </div>
      <div
        className="flex h-8 w-8 cursor-pointer items-center justify-center
                      rounded text-center dark:hover:bg-gray-700"
      >
        <Headphones
          className="cursor-pointer text-gray-600 hover:text-gray-800
                   dark:text-gray-400 dark:hover:text-gray-200"
          weight="fill"
          size={20}
        />
      </div>
      <div
        className="flex h-8 w-8 cursor-pointer items-center justify-center
                      rounded text-center dark:hover:bg-gray-700"
      >
        <Gear
          className="cursor-pointer text-gray-600 hover:text-gray-800
                   dark:text-gray-400 dark:hover:text-gray-200"
          weight="fill"
          size={20}
        />
      </div>
    </div>
  );
};

export default UserBar;
