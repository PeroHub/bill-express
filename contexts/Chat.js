import React, { useState, useEffect, useContext} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { chatServices } from "../services/chatServices";

const ChatContext = useContext({});

const ChatProvider = ({children}) => {
    const [chatData, setChatData ] = useState()
    const [loading, setLoading] = useState(false)
    const [getChatLoading, setGetChatLoading] = useState(false)
    const [postChatLoading, setPostChatLoading] = useState(false)

    useEffect(()=> {
        loadStorageData()
    }, [])

    async function loadStorageData() {
        try {
            const chatDataSerialized = await AsyncStorage.getItem('@ChatData')
            if (chatDataSerialized) {
                setChatData(JSON.parse(chatDataSerialized))
            }
            
        } catch (error) {
            
        } finally {
            setLoading(false)
        }
    }

    const getChat = async () => {
        setGetChatLoading(true)
        await chatServices.getChat().then((response) => {
            console.log(response)
            setChatData(response.data)
            setGetChatLoading(false)
        })
        .catch((error) => {
            console.error(error)
            setGetChatLoading(false)
        })
    }

    const postChat = async (text) => {
        setPostChatLoading(true)
        await chatServices.postChat(text).then((response) => {
            console.log(response)
            setChatData((chatData) => [...chatData, response])
        })
        .catch((error) => {
            alert("Something went wrong")
        })  
    }

    return(
        <ChatContext.Provider value={{getChat, postChat, chatData}}>
            {children}
        </ChatContext.Provider>
    )
}

function useChat() {
    const context = useContext(ChatContext);
  
    if (!context) {
      throw new Error('User does not exist');
    }
  
    return context;
  }
  
  export { ChatContext, ChatProvider, useChat};