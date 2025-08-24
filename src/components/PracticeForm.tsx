
import { Textarea } from "./ui/textarea"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { useState } from "react"
const PracticeForm = () => {

    const[message,setMessage]=useState<string>("")
    const [delay,setDelay]=useState<number>(10)
    const [issend,setIsSend] =useState<boolean>(false)
    const[timerId,setTimerId]=useState<number | null>(null)
    const [sentMessage,setSentMessage] =useState <string>("")


    const handleSend =()=>{
        setIsSend(true)

        const id = window.setTimeout(() => {
               setSentMessage(message)
               setMessage("")
               setIsSend(false)

        },delay*1000);
        setTimerId(id)
    }

    const handleCancle = () => {
        if(timerId)  clearTimeout(timerId)
            setIsSend(false)
    
    };


  return (
    <div className="max-w-md bg-white border rounded-lg p-6 mt-20 text-2xl text-black space-y-6">
      <h2>paractice form </h2>
      <Textarea
        placeholder="type ur msg here ..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Input
        placeholder="enter ur msg send seconds"
        value={delay}
        onChange={(e) => setDelay(Number(e.target.value))}
        disabled={issend}
      />
      {!issend ? (
        <Button className="w-full cursor-pointer" onClick={handleSend}>
          click here to send
        </Button>
      ) : (
        <Button className="w-full cursor-pointer" onClick={handleCancle}>
          click here to cancle sending
        </Button>
      )}

      {sentMessage && (
        <div className="border p-6 rounded-lg bg-green-50 ">
          <p className="text-gray-900">your send message:</p>
          <h6 className="text-green-900">{sentMessage}</h6>
        </div>
      )}
    </div>
  );
}

export default PracticeForm