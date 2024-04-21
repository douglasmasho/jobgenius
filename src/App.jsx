import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css"
import {MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator} from "@chatscope/chat-ui-kit-react"

function App() {
  const [typing, setTyping] = useState(false);

  useEffect(()=>{
    console.log(import.meta.env.VITE_REACT_API_URL)
  },[])
  const [messages, setMessages] = useState([
    {
      message: "Hi, my name is JobGenius. I am here to help you decide what career fits you best based on your interests, skills, aptitude and personality. Say hi to get started.",
      sender: "JobGenius",
      direction: "incoming"
    }
  ]);

  const handleSend = async(message)=>{
    const newMessage = {
      message: message,
      sender: "user",
      direction: "outgoing"
    }
    const newMessages = [...messages, newMessage] //all the old messages plus the new message
    
    //update our messages state
    setMessages(newMessages)

    //set a typing indicator
    setTyping(true);

    //process message to chatGPT
    await processMessageToGPT(newMessages);
  }

  const processMessageToGPT = async (chatMessages)=>{
    // chatMessages  {sender "user" or "JobGenius", message: content}
    //apiMessages {role: "user" or "assistant", content: "The message content here"}
    
    let apiMessages = chatMessages.map((msgObj)=>({
      role: msgObj.sender == "JobGenius" ? "assistant" : "user",
      content: msgObj.message
    }));
    //role: "user" -> a message from the user
    //role: "assistant" -> a message from JobGenius
    //role: "system" -> generally one initial message defining how we want chatGPT to talk

    const systemMessage = {
      role: "system",
      content: "Ask me a series of questions so you can recommend me a career path. you can ask questions relating to my school experience, my interests, my aptitudes, my favorite subjects. You ask, then i asnwer, then you ask another question. by the end of 10 questions you should come up with the top 3 recommendations and a match score for each. Ask the user which career they would like to learn more about and if they say yes, give them details on salary, skills and education needed. Introduce yourself as Jobgenius and tell me that you are going to ask me 10 questions in your introduction"
    }

    const apiRequestBody = {
      "model": "gpt-3.5-turbo",
      "messages": [
        systemMessage,
        ...apiMessages 
      ]
    }

    const dataJson = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + import.meta.env.VITE_REACT_API_URL,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(apiRequestBody)
    })

    const data = await dataJson.json();
    setMessages([
      ...chatMessages, {
        message: data.choices[0].message.content,
        sender: "JobGenius",
        direction: "incoming"
      }
    ])
    setTyping(false);
    console.log(data.choices[0].message.content)
  }

  return (
    <div className="App">
      <div style={{postion: "relative", height: "800px", width: "700px", borderRadius: "20px", overflow: "hidden",}}>
        <MainContainer>
          <ChatContainer>
            <MessageList scrollBehavior='smooth' typingIndicator={typing ? <TypingIndicator content="JobGenius is typing"/>: null}>
              {
                messages.map((message, i)=>{return <Message key={i} model={message}/>})
              }
            </MessageList>
            <MessageInput placeholder='Type Message here' onSend={handleSend}/>
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  )
}

export default App