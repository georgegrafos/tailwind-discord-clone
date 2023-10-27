import {
  Bell,
  Chats,
  Hash,
  MagnifyingGlass,
  PushPin,
  Question,
  Tray,
  Users,
  Sun,
  Moon,
} from "@phosphor-icons/react";
import useDarkMode from "../hooks/useDarkMode";

const ChannelBar = ({ channelName }) => {
  return (
    <div className="relative flex h-12 w-full items-center justify-between py-3 px-4">
      <div className="relative flex min-w-0 flex-auto items-center overflow-hidden">
        <Hash className="mr-2 overflow-hidden text-gray-500" size={24} />
        <h1 className="text-base font-semibold text-gray-900 dark:text-gray-100">
          {channelName}
        </h1>
      </div>

      <div className="flex items-center gap-4">
        <ThemeIcon />
        <IconButton icon={"threads"} tooltipText={"Threads"} />
        <IconButton icon={"bell"} tooltipText={"Notification Settings"} />
        <IconButton icon={"pin"} tooltipText={"Pinned Messages"} />
        <IconButton icon={"users"} tooltipText={"Show Member List"} />
        <SearchBar />
        <IconButton icon={"inbox"} tooltipText={"Inbox"} />
        <IconButton icon={"question"} tooltipText={"Help"} />
      </div>
    </div>
  );
};

const SearchBar = () => {
  return (
    <div className="flex items-center justify-end">
      <input
        type="text"
        placeholder="Search"
        className="h-6 w-36 rounded p-2 text-sm outline-none transition-all
                   duration-300 ease-in-out focus:w-60
                   motion-reduce:transition-none motion-reduce:focus:transform-none
                   dark:bg-gray-900 dark:text-gray-100 dark:placeholder-gray-500
                   bg-gray-300 text-gray-800 placeholder-gray-600"
      />
      <MagnifyingGlass className="absolute mr-2 dark:text-gray-400" />
    </div>
  );
};

const IconButton = ({ icon, tooltipText }) => {
  const iconProps = {
    className:
      "cursor-pointer dark:text-gray-400 dark:hover:text-gray-200 text-gray-600 hover:text-gray-800",
    weight: "fill",
    size: 24,
  };

  let iconEl;
  switch (icon) {
    case "bell":
      iconEl = <Bell {...iconProps} />;
      break;
    case "threads":
      iconEl = <Chats {...iconProps} />;
      break;
    case "hashtag":
      iconEl = <Hash {...iconProps} />;
      break;
    case "pin":
      iconEl = <PushPin {...iconProps} />;
      break;
    case "question":
      iconEl = <Question {...iconProps} />;
      break;
    case "inbox":
      iconEl = <Tray {...iconProps} />;
      break;
    case "users":
      iconEl = <Users {...iconProps} />;
      break;
    default:
      break;
  }

  return (
    <div className="group relative flex flex-col items-center">
      {iconEl}
      <Tooltip text={tooltipText} />
    </div>
  );
};

const Tooltip = ({ text = "Hello" }) => {
  return (
    <div
      className="pointer-events-none absolute top-full mt-1 hidden
                 flex-col items-center group-hover:flex"
    >
      <div className="-mb-2 h-3 w-3 rotate-45 bg-white dark:bg-black"></div>
      <div
        className="relative min-w-max rounded bg-white py-1.5 px-3 text-sm
                 text-gray-900 shadow-lg dark:bg-black dark:text-gray-100"
      >
        {text}
      </div>
    </div>
  );
};

const ThemeIcon = () => {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = () => setDarkTheme(!darkTheme);

  return (
    <span onClick={handleMode}>
      {darkTheme ? (
        <Sun
          size="24"
          weight="fill"
          className="cursor-pointer text-gray-600
                      transition duration-300 ease-in-out
                      hover:text-pink-400
                      dark:text-gray-400 hover:dark:text-pink-400"
        />
      ) : (
        <Moon
          size="24"
          weight="fill"
          className="cursor-pointer text-gray-600
                      transition duration-300 ease-in-out
                      hover:text-pink-400
                      dark:text-gray-400 hover:dark:text-pink-400"
        />
      )}
    </span>
  );
};

export default ChannelBar;
