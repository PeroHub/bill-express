// Import axios library
import axios from "axios";

// Define base URL for API requests
const BASE_URL = 'https://uyai.pythonanywhere.com/ifiok/chat/';

// Function to fetch chat data
const getChat = (pass) => {
    // Make a GET request to the API endpoint
    return axios.get(`${BASE_URL}?day=today`,
    {
        headers: {
            "Authorization": `Token ${pass}`
        }  
    });
}

// Function to send a chat message
const postChat = (text, pass) => {
    console.log(text, pass, "pass-text")
    const data = {
        // Include the chat message text in the request body
        input: text

    }
    // Make a POST request to the API endpoint
    return axios.post(`${BASE_URL}`, 
        data,
        {
            headers: {
                // Include an authorization header with a bearer token
                "content-type": "application/json",
                "accept": "application/json",
                "Authorization": `Token ${pass}`
                // Set the content type of the request body to JSON
            }
        }
    )
}

// Object containing chat services functions
const chatServices = {
    getChat,
    postChat
}

// Export the chat services object
export { chatServices };