import { MicIcon, PowerIcon } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

// Chat message data for mapping
const chatMessages = [
  {
    id: 1,
    text: "Hi!\nWhat can I help you with?",
  },
  {
    id: 2,
    text: "Hi!\nWhat can I help you with?",
  },
];

export const Layout = (): JSX.Element => {
  const [selectedButton, setSelectedButton] = useState<'power' | 'mic' | null>(null);

  return (
    <div className="flex h-screen bg-[#fcfcfa] w-full min-w-[390px]">
      <div className="flex flex-col h-full gap-10 pt-[54px] pb-12 px-9 w-full">
        <Card className="flex flex-col gap-2.5 p-6 flex-1 w-full bg-faint-opal rounded-2xl overflow-hidden shadow-[inset_0px_2px_1px_#0000000d] relative">
          <div className="absolute w-[328px] h-[328px] left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 opacity-60">
            <div className="relative w-[400px] h-[400px] -left-9 rounded-[200px] blur-[17px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(200,193,201,1)_0%,rgba(200,193,201,0)_100%)]" />
          </div>

          <CardContent className="flex flex-col items-start gap-9 flex-1 w-full p-0 relative">
            {chatMessages.map((message) => (
              <div
                key={message.id}
                className="flex flex-col w-[270px] h-[62px] items-start gap-[18px]"
              >
                {message.text.split("\n").map((line, index) => (
                  <div
                    key={index}
                    className="[font-family:'Inter',Helvetica] font-normal text-sea-deep text-lg tracking-[-0.75px] leading-[22px] relative self-stretch"
                  >
                    <span className="tracking-[-0.14px]">
                      {line}
                      {index === 0 && <br />}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </CardContent>
        </Card>

        <div className="flex items-center justify-between px-2 py-0 w-full">
          <Button
            variant="outline"
            size="icon"
            className={`w-[54px] h-[54px] rounded-[90px] transition-all duration-200 group ${
              selectedButton === 'power' 
                ? 'bg-[#2D3C44] shadow-[inset_0px_2px_4px_rgba(0,0,0,0.15)]' 
                : 'bg-white shadow-[0px_16px_32px_-4px_rgba(12,12,13,0.1),0px_0px_4px_-4px_rgba(12,12,13,0.05)]'
            } p-0 hover:bg-white`}
            onClick={() => setSelectedButton(selectedButton === 'power' ? null : 'power')}
          >
            <PowerIcon className={`w-6 h-6 text-[#2D3C44] group-hover:text-[#2D3C44]`} />
          </Button>

          <div className="flex-1 mx-4 [font-family:'Inter',Helvetica] font-light text-sea-deep text-xs text-center tracking-[3.00px] leading-8">
            NOT CONNECTED
          </div>

          <Button
            variant="outline"
            size="icon"
            className={`w-[54px] h-[54px] rounded-[90px] transition-all duration-200 group ${
              selectedButton === 'mic' 
                ? 'bg-[#2D3C44] shadow-[inset_0px_2px_4px_rgba(0,0,0,0.15)]' 
                : 'bg-white shadow-[0px_16px_32px_-4px_rgba(12,12,13,0.1),0px_0px_4px_-4px_rgba(12,12,13,0.05)]'
            } p-0 hover:bg-white`}
            onClick={() => setSelectedButton(selectedButton === 'mic' ? null : 'mic')}
          >
            <MicIcon className={`w-6 h-6 text-[#2D3C44] group-hover:text-[#2D3C44]`} />
          </Button>
        </div>
      </div>
    </div>
  );
};