import React, { useState } from 'react'
import { Textarea } from './ui/textarea'
import { Input } from './ui/input'
import { Button } from './ui/button'


export const MessageForm = () => {

    const [message,setMessage]=useState<string>("");
    const [delay,setDelay]=useState<number>(10);
    const [isSending,setIsSending] =useState<boolean>(false);
    const [timerId, setTimerId] = useState<number | null>(null);
    const [sentMessage,SetSentMessage]=useState<string>("");

     

    const handleSend = ()=>{
        setIsSending(true)

        const id = window.setTimeout(() => {
          SetSentMessage(message);
          setMessage("");
          setIsSending(false);
        }, delay * 1000);
         setTimerId(id);
    }

    const handleCancle =()=>{
        if(timerId) clearTimeout(timerId)
            setIsSending(false)
    }

  return (
    <div className="max-w-md mx-auto mt-20 p-6 border rounded-lg shadow-sm bg-white space-y-4">
      <h2 className="text-2xl font-bold text-gray-800">Dm DELAY BUTTON </h2>
      <Textarea
        placeholder="type ur msg..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Input
        type="number"
        placeholder="delay in seconds"
        value={delay}
        onChange={(e) => setDelay(Number(e.target.value))}
        disabled={isSending}
      />
      {!isSending ? (
        <Button className="w-full cursor-pointer" onClick={handleSend}>
          send with delay
        </Button>
      ) : (
        <Button
          className="w-full cursor-pointer"
          variant="destructive"
          onClick={handleCancle}
        >
          cancle sending
        </Button>
      )}
      {sentMessage && (
        <div className="bg-green-100 border rounded-lg p-3 text-green-900">
          <p className="font-semibold">message:{sentMessage}</p>
        </div>
      )}
    </div>
  );
}
