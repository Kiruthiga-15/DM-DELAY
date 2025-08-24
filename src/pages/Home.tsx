import { MessageForm } from "@/components/MessageForm"
import PracticeForm from "@/components/PracticeForm"

const Home = () => {
  return (
    <div className="row gap-2">
        <MessageForm/>
        <PracticeForm/>
    </div>
  )
}

export default Home