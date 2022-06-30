import { MdOutlineCancel } from "react-icons/md";

import { Button } from ".";
import { chatData } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";

// Chat
const Chat = () => {
  const { currentColor } = useStateContext();

  return (
    <div className="nav-item absolute right-5 md:right-52 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96">
      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          {/* Title */}
          <p className="font-semibold text-lg dark:text-gray-200">Messages</p>
          {/* No of Messages */}
          <button
            type="button"
            className="text-white  text-xs rounded p-1 px-2 bg-orange"
          >
            5 New
          </button>
        </div>
        {/* Close Icon */}
        <Button
          icon={<MdOutlineCancel />}
          color="rgb(153, 171, 180)"
          bgHoverColor="light-gray"
          size="2xl"
          borderRadius="50%"
        />
      </div>

      {/* Chat Data */}
      <div className="mt-5 ">
        {chatData?.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-5 border-b-1 border-color p-3 leading-8 cursor-pointer"
          >
            <div className="relative">
              {/* User Image */}
              <img
                className="rounded-full h-10 w-10"
                src={item.image}
                alt={item.message}
              />

              {/* User Status */}
              <span
                style={{ background: item.dotColor }}
                className="absolute inline-flex rounded-full h-2 w-2 right-0 -top-1"
              />
            </div>
            <div>
              {/* Message */}
              <p className="font-semibold dark:text-gray-200 ">
                {item.message}
              </p>
              {/* Description */}
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                {item.desc}
              </p>
              {/* Time */}
              <p className="text-gray-500 dark:text-gray-400 text-xs">
                {item.time}
              </p>
            </div>
          </div>
        ))}

        {/* See all messages */}
        <div className="mt-5">
          <Button
            color="white"
            bgColor={currentColor}
            text="See all messages"
            borderRadius="10px"
            width="full"
          />
        </div>
      </div>
    </div>
  );
};

export default Chat;
