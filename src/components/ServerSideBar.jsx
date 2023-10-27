import { useState } from "react";
import { Hash } from "@phosphor-icons/react";
import { BsPlus } from "react-icons/bs";
import { RxCaretDown, RxCaretRight } from "react-icons/rx";

const textChannels = [
  { id: 1, name: "general", active: true },
  { id: 2, name: "memes", active: false },
  { id: 3, name: "tech", active: false },
  { id: 4, name: "food", active: false },
];
const voiceChannels = [
  { id: 1, name: "Lounge", active: false },
  { id: 2, name: "Games", active: false },
];

const ServerSideBar = () => {
  return (
    <div
      className="relative top-0 flex h-full
                  min-w-[240px] flex-col items-center
                  bg-gray-100
                  dark:bg-gray-800 dark:text-gray-100"
    >
      <Header serverName={"ConcordiaGaming"} />
      <Divider />
      <Section sectionName={"Text Channels"} channels={textChannels} />
      <Section sectionName={"Voice Channels"} channels={voiceChannels} />
    </div>
  );
};

const Header = ({ serverName = "" }) => {
  return (
    <div
      className="w-full cursor-pointer py-3 px-4
                  transition-colors duration-100
                  hover:bg-gray-300 dark:hover:bg-gray-700"
    >
      <div className="flex h-6 items-center">
        <div
          className="flex-1 overflow-hidden text-ellipsis
                      whitespace-nowrap text-base font-semibold"
        >
          {serverName}
        </div>
        <RxCaretDown size={24} />
      </div>
    </div>
  );
};

const Divider = () => (
  <hr
    className="m-0 w-full border
                border-gray-400 bg-gray-400 p-0
                dark:border-gray-900 dark:bg-gray-900"
  />
);

const Section = ({ sectionName = "Text Channels", channels }) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="flex w-full flex-col">
      <div
        className="mb-1 flex cursor-pointer items-center pt-4 
                    text-gray-500 hover:text-gray-700
                    dark:text-gray-400 dark:hover:text-gray-100"
      >
        <div
          className="flex flex-auto items-center"
          onClick={() => setExpanded(!expanded)}
        >
          <div className="flex w-6 items-center justify-center">
            {expanded ? <RxCaretDown /> : <RxCaretRight />}
          </div>
          <span className="text-xs font-bold uppercase">{sectionName}</span>
        </div>
        <BsPlus className="mr-2 text-gray-900 dark:text-gray-400" size={24} />
      </div>
      {channels &&
        channels.map((channel) => (
          <ChannelItem key={channel.id} channel={channel} isSectionExpanded={expanded} />
        ))}
    </div>
  );
};

const ChannelItem = ({ channel, isSectionExpanded = true }) => {
  return (
    <div className={`${!isSectionExpanded && !channel.active ? "hidden" : ""}`}>
      <div
        className={`mx-2 my-0.5 flex cursor-pointer items-center rounded px-2 
                    py-1 text-gray-500 hover:bg-gray-300 hover:text-gray-600
                    dark:hover:bg-gray-700 dark:hover:text-gray-400
                    ${
                      channel.active
                        ? "bg-gray-400 text-gray-900 dark:bg-gray-600 dark:text-gray-100"
                        : ""
                    }`}
      >
        <Hash className="text-gray-500" size={24} />
        <p className="ml-1 overflow-hidden text-ellipsis whitespace-nowrap text-base font-medium">
          {channel.name}
        </p>
      </div>
    </div>
  );
};

export default ServerSideBar;
