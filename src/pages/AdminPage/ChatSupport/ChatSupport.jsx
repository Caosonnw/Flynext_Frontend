import { jwtDecode } from 'jwt-decode';
import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { friendServ } from '../../../services/friendServ';

const socket = io('ws://localhost:8081');

const ChatSupport = () => {
  const [user_id, setUserId] = useState(null);
  const [dataChat, setDataChat] = useState(null);

  useEffect(() => {
    friendServ
      .getFriendByUserId(user_id)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user_id]);

  useEffect(() => {
    const token = localStorage.getItem('LOGIN_USER');
    if (token) {
      const decoded = jwtDecode(token);
      setUserId(decoded.user_id);
    }
    //load danh sách chat
    socket.on('load-chat', (lstChat) => {
      setDataChat(lstChat);
    });

    socket.on('mess-server', (data) => {
      setDataChat((prevData) => [...prevData, data]);
    });
  }, []);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      sendMessage();
    }
  };

  const sendMessage = () => {
    const txtChat = document.querySelector('#txt-chat').value;
    const roomId = localStorage.getItem('roomId');
    socket.emit('send-mess', {
      user_id: user_id,
      txtChat,
      roomId,
    });
    document.querySelector('#txt-chat').value = '';
  };

  return (
    <>
      <div className="grid md:grid-cols-[300px_1fr] h-[550px] w-full">
        <div className="bg-[white] border-r flex flex-col">
          <div className="bg-white top-0 border-b p-4">
            <h2 className="text-lg font-semibold">Customer</h2>
          </div>
          {/* List Customer  */}
          <div className="flex-1 h-[700px] overflow-y-auto">
            <div className="p-4 grid gap-4">
              <div className="flex items-center gap-3">
                <span className="relative flex shrink-0 overflow-hidden rounded-full w-10 h-10">
                  <img
                    className="aspect-square h-full w-full"
                    src="/placeholder-user.jpg"
                  />
                </span>
                <div className="flex-1">
                  <p className="font-medium">John Doe</p>
                  <p className="text-sm text-muted-foreground">Active 2m ago</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="relative flex shrink-0 overflow-hidden rounded-full w-10 h-10">
                  <img
                    className="aspect-square h-full w-full"
                    src="/placeholder-user.jpg"
                  />
                </span>
                <div className="flex-1">
                  <p className="font-medium">Sarah Anderson</p>
                  <p className="text-sm text-muted-foreground">Active 5m ago</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="relative flex shrink-0 overflow-hidden rounded-full w-10 h-10">
                  <img
                    className="aspect-square h-full w-full"
                    src="/placeholder-user.jpg"
                  />
                </span>
                <div className="flex-1">
                  <p className="font-medium">Michael Johnson</p>
                  <p className="text-sm text-muted-foreground">
                    Active 10m ago
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Chat  */}
        <div className="flex flex-col overflow-y-auto">
          <div className="top-0 border-b p-4 bg-background">
            <h2 className="text-lg font-semibold">Chat</h2>
          </div>
          <div className="flex-1 overflow-auto p-4 grid gap-4">
            <div className="flex items-start justify-start gap-4">
              <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
                <img
                  className="aspect-square h-full w-full"
                  src="/placeholder-user.jpg"
                />
              </span>
              <div className="grid gap-1 text-sm">
                <p className="font-medium">John Doe</p>
                <div className="prose text-muted-foreground">
                  <p>Hey everyone, how's it going?</p>
                </div>
              </div>
            </div>
            <div className="flex items-start justify-start gap-4">
              <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
                <img
                  className="aspect-square h-full w-full"
                  src="/placeholder-user.jpg"
                />
              </span>
              <div className="grid gap-1 text-sm">
                <p className="font-medium">John Doe</p>
                <div className="prose text-muted-foreground">
                  <p>Hey everyone, how's it going?</p>
                </div>
              </div>
            </div>
            <div className="flex items-start justify-start gap-4">
              <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
                <img
                  className="aspect-square h-full w-full"
                  src="/placeholder-user.jpg"
                />
              </span>
              <div className="grid gap-1 text-sm">
                <p className="font-medium">John Doe</p>
                <div className="prose text-muted-foreground">
                  <p>Hey everyone, how's it going?</p>
                </div>
              </div>
            </div>
            <div className="flex items-end justify-end gap-4">
              <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
                <img
                  className="aspect-square h-full w-full"
                  src="/placeholder-user.jpg"
                />
              </span>
              <div className="grid gap-1 text-sm">
                <p className="font-medium">Michael Johnson</p>
                <div className="prose text-muted-foreground">
                  <p>Hey guys, I have a question about the new feature.</p>
                </div>
              </div>
            </div>
            <div className="flex items-end justify-end gap-4">
              <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
                <img
                  className="aspect-square h-full w-full"
                  src="/placeholder-user.jpg"
                />
              </span>
              <div className="grid gap-1 text-sm">
                <p className="font-medium">Michael Johnson</p>
                <div className="prose text-muted-foreground">
                  <p>Hey guys, I have a question about the new feature.</p>
                </div>
              </div>
            </div>
          </div>
          {/* Bottom  */}
          <div className="sticky bottom-0 border-t p-4 bg-white">
            <div className="relative">
              <textarea
                className="flex w-full bg-background text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-[#dcbb87] min-h-[48px] rounded-2xl resize-none p-4 border border-neutral-400 shadow-sm pr-16"
                placeholder="Type your message..."
                id="txt-chat"
                rows={1}
                onKeyDown={handleKeyDown}
              />
              <button
                onClick={sendMessage}
                id="btn-send"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium  transition-colors hover:bg-[#dcbb87] bg-primary text-primary-foreground absolute w-8 h-8 top-3 right-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <path d="m5 12 7-7 7 7" />
                  <path d="M12 19V5" />
                </svg>
                <span className="sr-only">Send</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatSupport;
