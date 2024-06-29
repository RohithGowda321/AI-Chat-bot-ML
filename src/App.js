// import React, { useState } from 'react';
// import styled, { keyframes } from 'styled-components';
// import { ClipLoader } from 'react-spinners';

// const API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyBKwmxvZ6CNV6LubLjo0AaKJyDG4YFZ20A';

// const AppContainer = styled.div`
//   text-align: center;
//   font-family: 'Arial', sans-serif;
// `;

// const Header = styled.header`
//   background-color: #4a90e2;
//   padding: 20px;
//   color: white;
//   font-size: 2em;
// `;

// const ChatContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   margin-top: 20px;
// `;

// const MessagesContainer = styled.div`
//   width: 80%;
//   max-width: 600px;
//   height: 400px;
//   border: 1px solid #ccc;
//   border-radius: 10px;
//   overflow-y: auto;
//   padding: 10px;
//   background-color: #f9f9f9;
// `;

// const Message = styled.div`
//   padding: 10px;
//   margin: 5px 0;
//   border-radius: 10px;
//   background-color: ${({ sender }) => (sender === 'user' ? '#e0f7fa' : '#f1f8e9')};
//   align-self: ${({ sender }) => (sender === 'user' ? 'flex-end' : 'flex-start')};
//   max-width: 80%;
// `;

// const Form = styled.form`
//   display: flex;
//   width: 80%;
//   max-width: 600px;
//   margin-top: 10px;
// `;

// const Input = styled.input`
//   flex: 1;
//   padding: 10px;
//   border-radius: 5px;
//   border: 1px solid #ccc;
// `;

// const Button = styled.button`
//   padding: 10px 20px;
//   border: none;
//   background-color: #007bff;
//   color: white;
//   border-radius: 5px;
//   cursor: pointer;
//   margin-left: 10px;
// `;

// const fadeIn = keyframes`
//   from {
//     opacity: 0;
//   }
//   to {
//     opacity: 1;
//   }
// `;

// const Loader = styled(ClipLoader)`
//   animation: ${fadeIn} 0.5s ease-in-out;
// `;

// function App() {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState('');
//   const [loading, setLoading] = useState(false);

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   if (!input.trim()) return;

//   //   const userMessage = { sender: 'user', text: input };
//   //   setMessages([...messages, userMessage]);
//   //   setInput('');
//   //   setLoading(true);

//   //   try {
//   //     const response = await fetch(API_URL, {
//   //       method: 'POST',
//   //       headers: {
//   //         'Content-Type': 'application/json',
//   //       },
//   //       body: JSON.stringify({
//   //         contents: [
//   //           {
//   //             parts: [
//   //               {
//   //                 text: input
//   //               }
//   //             ]
//   //           }
//   //         ]
//   //       }),
//   //     });

//   //     if (!response.ok) {
//   //       throw new Error('Failed to fetch the API');
//   //     }

//   //     const data = await response.json();
//   //     const aiMessage = { sender: 'ai', text: data.response.text };
//   //     setMessages((prevMessages) => [...prevMessages, aiMessage]);
//   //   } catch (error) {
//   //     console.error('Error:', error);
//   //     const errorMessage = { sender: 'ai', text: 'Sorry, there was an error processing your request.' };
//   //     setMessages((prevMessages) => [...prevMessages, errorMessage]);
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!input.trim()) return;

//     const userMessage = { sender: 'user', text: input };
//     setMessages([...messages, userMessage]);
//     setInput('');
//     setLoading(true);

//     try {
//       const response = await fetch(API_URL, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           contents: [
//             {
//               parts: [
//                 {
//                   text: input
//                 }
//               ]
//             }
//           ]
//         }),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to fetch the API');
//       }

//       const data = await response.json();
//       const aiMessage = { sender: 'ai', text: data.candidates[0].content.parts[0].text };
//       setMessages((prevMessages) => [...prevMessages, aiMessage]);
//     } catch (error) {
//       console.error('Error:', error);
//       const errorMessage = { sender: 'ai', text: 'Sorry, there was an error processing your request.' };
//       setMessages((prevMessages) => [...prevMessages, errorMessage]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <AppContainer>
//       <Header> AI Chat</Header>
//       <ChatContainer>
//         <MessagesContainer>
//           {messages.map((msg, index) => (
//             <Message key={index} sender={msg.sender}>
//               {msg.text}
//             </Message>
//           ))}
//           {loading && <Loader size={50} color="#4a90e2" />}
//         </MessagesContainer>
//         <Form onSubmit={handleSubmit}>
//           <Input
//             type="text"
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             placeholder="Type your message..."
//           />
//           <Button type="submit">Send</Button>
//         </Form>
//       </ChatContainer>
//     </AppContainer>
//   );
// }

// export default App;

// import React, { useState } from "react";
// import styled from "styled-components";
// import { ClipLoader } from "react-spinners";

// const API_URL =
//   "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyBKwmxvZ6CNV6LubLjo0AaKJyDG4YFZ20A";

// const AppContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   height: 100vh;
//   font-family: "Arial", sans-serif;
// `;

// const Header = styled.header`
//   background-color: #4a90e2;
//   padding: 20px;
//   color: white;
//   font-size: 2em;
//   width: 100%;
//   text-align: center;
// `;

// const ChatContainer = styled.div`
//   width: 80%;
//   max-width: 600px;
//   height: 80%;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   border-radius: 10px;
//   overflow: hidden;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
// `;

// const MessagesContainer = styled.div`
//   flex: 1;
//   overflow-y: auto;
//   padding: 20px;
//   background-color: #f9f9f9;
// `;

// const Message = styled.div`
//   margin-bottom: 10px;
//   padding: 10px;
//   border-radius: 10px;
//   background-color: ${({ sender }) => (sender === "user" ? "#4a90e2" : "#333")};
//   color: ${({ sender }) => (sender === "user" ? "white" : "white")};
//   align-self: ${({ sender }) =>
//     sender === "user" ? "flex-end" : "flex-start"};
//   max-width: 80%;
//   position: relative;
// `;

// const CopyButton = styled.span`
//   position: absolute;
//   top: 5px;
//   right: 5px;
//   font-size: 12px;
//   padding: 5px 10px;
//   background-color: rgba(255, 255, 255, 0.2);
//   color: white;
//   cursor: pointer;
//   display: none;
//   border-radius: 5px;
// `;

// const LoaderContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 50px;
// `;

// const LoaderText = styled.p`
//   margin-left: 10px;
// `;

// const Form = styled.form`
//   display: flex;
//   margin-top: 20px;
//   padding: 10px;
//   background-color: #f0f0f0;
// `;

// const Input = styled.input`
//   flex: 1;
//   padding: 10px;
//   border: none;
//   outline: none;
//   border-radius: 5px;
// `;

// const Button = styled.button`
//   padding: 10px 20px;
//   margin-left: 10px;
//   border: none;
//   background-color: #4a90e2;
//   color: white;
//   border-radius: 5px;
//   cursor: pointer;
// `;

// function App() {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!input.trim()) return;

//     const userMessage = { sender: "user", text: input };
//     setMessages([...messages, userMessage]);
//     setInput("");
//     setLoading(true);

//     try {
//       const response = await fetch(API_URL, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           contents: [
//             {
//               parts: [
//                 {
//                   text: input,
//                 },
//               ],
//             },
//           ],
//         }),
//       });

//       if (!response.ok) {
//         throw new Error("Failed to fetch the API");
//       }

//       const data = await response.json();
//       const aiMessage = {
//         sender: "ai",
//         text: data.candidates[0].content.parts[0].text,
//       };
//       setMessages((prevMessages) => [...prevMessages, aiMessage]);
//     } catch (error) {
//       console.error("Error:", error);
//       const errorMessage = {
//         sender: "ai",
//         text: "Sorry, there was an error processing your request.",
//       };
//       setMessages((prevMessages) => [...prevMessages, errorMessage]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleCopyMessage = (text) => {
//     navigator.clipboard
//       .writeText(text)
//       .then(() => {
//         console.log("Copied to clipboard:", text);
//         // You can show a notification or update state to indicate successful copy
//       })
//       .catch((error) => {
//         console.error("Error copying to clipboard:", error);
//         // Handle error if copying fails
//       });
//   };

//   return (
//     <AppContainer>
//       <Header> AI Chat</Header>
//       <ChatContainer>
//         <MessagesContainer>
//           {messages.map((msg, index) => (
//             <Message key={index} sender={msg.sender}>
//               {msg.text}
//               <CopyButton onClick={() => handleCopyMessage(msg.text)}>
//                 Copy
//               </CopyButton>
//             </Message>
//           ))}
//           {loading && (
//             <LoaderContainer>
//               <ClipLoader size={35} color="#4a90e2" />
//               <LoaderText>Loading...</LoaderText>
//             </LoaderContainer>
//           )}
//         </MessagesContainer>
//         <Form onSubmit={handleSubmit}>
//           <Input
//             type="text"
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             placeholder="Type your message..."
//           />
//           <Button type="submit">Send</Button>
//         </Form>
//       </ChatContainer>
//     </AppContainer>
//   );
// }

// export default App;


// import React, { useState } from 'react';
// import { ClipLoader } from 'react-spinners';
// import './styles.css';


// const API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyBKwmxvZ6CNV6LubLjo0AaKJyDG4YFZ20A';

// function App() {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [selectedReaction, setSelectedReaction] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!input.trim()) return;

//     const userMessage = { sender: 'user', text: input, timestamp: new Date().toLocaleString() };
//     setMessages([...messages, userMessage]);
//     setInput('');
//     setLoading(true);

//     try {
//       const response = await fetch(API_URL, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           contents: [
//             {
//               parts: [
//                 {
//                   text: input
//                 }
//               ]
//             }
//           ]
//         }),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to fetch the API');
//       }

//       const data = await response.json();
//       const aiText = data.candidates[0].content.parts[0].text;

//       // Split AI response into segments based on ```
//       const aiSegments = aiText.split('```').filter(segment => segment.trim() !== '');

//       // Create message objects for each segment
//       const aiMessageObjects = aiSegments.map((segment, index) => ({
//         sender: 'ai',
//         text: segment.trim(), // Trim excess whitespace
//         timestamp: new Date().toLocaleString(),
//       }));

//       // Update messages state to include user message and AI message segments
//       setMessages(prevMessages => [...prevMessages, ...aiMessageObjects]);
//     } catch (error) {
//       console.error('Error:', error);
//       const errorMessage = { sender: 'ai', text: 'Sorry, there was an error processing your request.', timestamp: new Date().toLocaleString() };
//       setMessages(prevMessages => [...prevMessages, errorMessage]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleInputChange = (e) => {
//     setInput(e.target.value);
//   };

//   const handleCopyMessage = (text) => {
//     navigator.clipboard.writeText(text)
//       .then(() => {
//         console.log('Copied to clipboard:', text);
//         // You can show a notification or update state to indicate successful copy
//       })
//       .catch((error) => {
//         console.error('Error copying to clipboard:', error);
//         // Handle error if copying fails
//       });
//   };

//   const handleReactionClick = (reaction) => {
//     setSelectedReaction(reaction);
//   };

//   return (
//     <div className="app-container">
//       <header className="header">AI Chat</header>
//       <div className="chat-container">
//         <div className="messages-container">
//           {messages.map((msg, index) => (
//             <div key={index} className={`message ${msg.sender}`}>
//               {/* Render message text with line breaks and spacing */}
//               {msg.text.split('\n').map((line, index) => (
//                 <React.Fragment key={index}>
//                   {line}
//                   <br />
//                 </React.Fragment>
//               ))}
//               <span className="timestamp">{msg.timestamp}</span>
//               <span className="copy-button" onClick={() => handleCopyMessage(msg.text)}>Copy</span>
//               {msg.sender === 'ai' && (
//                 <div className="reaction-buttons">
//                   <button onClick={() => handleReactionClick('like')}>👍</button>
//                   <button onClick={() => handleReactionClick('love')}>❤️</button>
//                   <button onClick={() => handleReactionClick('laugh')}>😂</button>
//                   {selectedReaction && <span className="reaction-text">Reacted: {selectedReaction}</span>}
//                 </div>
//               )}
//             </div>
//           ))}
//           {loading && (
//             <div className="loader-container">
//               <ClipLoader size={40} color="#4a90e2" />
//               <p className="loader-text">Loading...</p>
//             </div>
//           )}
//         </div>
//         <form className="form" onSubmit={handleSubmit}>
//           <input
//             type="text"
//             className="input"
//             value={input}
//             onChange={handleInputChange}
//             placeholder="Type your message..."
//           />
//           <button type="submit" className="button">Send</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default App;

import React, { useState, useRef, useEffect } from 'react';
import { PacmanLoader } from 'react-spinners'; // Import PacmanLoader from react-spinners
import './styles.css';

const API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyBKwmxvZ6CNV6LubLjo0AaKJyDG4YFZ20A';

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loadingAI, setLoadingAI] = useState(false); // State for AI loading indication
  const [selectedReaction, setSelectedReaction] = useState(null);
  const [darkMode, setDarkMode] = useState(false); // State for dark mode
  const messageEndRef = useRef(null);

  // Scroll to the bottom of messages on new message
  const scrollToBottom = () => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { sender: 'user', text: input, timestamp: new Date().toLocaleString() };
    setMessages([...messages, userMessage]);
    setInput('');
    setLoadingAI(true); // Start AI loading indication

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: input
                }
              ]
            }
          ]
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch the API');
      }

      const data = await response.json();
      const aiText = data.candidates[0].content.parts[0].text;

      // Split AI response into segments based on ```
      const aiSegments = aiText.split('```').filter(segment => segment.trim() !== '');

      // Create message objects for each segment
      const aiMessageObjects = aiSegments.map((segment, index) => ({
        sender: 'ai',
        text: segment.trim(), // Trim excess whitespace
        timestamp: new Date().toLocaleString(),
      }));

      // Update messages state to include user message and AI message segments
      setMessages(prevMessages => [...prevMessages, ...aiMessageObjects]);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage = { sender: 'ai', text: 'Sorry, there was an error processing your request.', timestamp: new Date().toLocaleString() };
      setMessages(prevMessages => [...prevMessages, errorMessage]);
    } finally {
      setLoadingAI(false); // Stop AI loading indication
    }
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleCopyMessage = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        console.log('Copied to clipboard:', text);
        // You can show a notification or update state to indicate successful copy
      })
      .catch((error) => {
        console.error('Error copying to clipboard:', error);
        // Handle error if copying fails
      });
  };

  const handleReactionClick = (reaction) => {
    setSelectedReaction(reaction);
  };

  const toggleTheme = () => {
    setDarkMode(prevMode => !prevMode);
  };

  // Function to parse markdown for bold and italic
  const parseMarkdown = (text) => {
    // Parse bold (**bold**) and italic (*italic*)
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>');
  };

  return (
    <div className={`app-container ${darkMode ? 'dark-mode' : ''}`}>
      <header className="header">AI Chat</header>
      <div className="chat-container">
        <div className="messages-container">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.sender}`}>
              {/* Render message text with line breaks and spacing */}
              <div dangerouslySetInnerHTML={{ __html: parseMarkdown(msg.text) }}></div>
              <span className="timestamp">{msg.timestamp}</span>
              <span className="copy-button" onClick={() => handleCopyMessage(msg.text)}>Copy</span>
              {msg.sender === 'ai' && (
                <div className="reaction-buttons">
                  <button onClick={() => handleReactionClick('like')}>👍</button>
                  <button onClick={() => handleReactionClick('love')}>❤️</button>
                  <button onClick={() => handleReactionClick('laugh')}>😂</button>
                  {selectedReaction && <span className="reaction-text">Reacted: {selectedReaction}</span>}
                </div>
              )}
            </div>
          ))}
          {/* AI loading indicator */}
          {loadingAI && (
            <div className="message ai">
              <PacmanLoader color="#36D7B7" size={25} />
              <div className="loading-text">Loading AI response...</div>
            </div>
          )}
          <div ref={messageEndRef}></div>
        </div>
     
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="input"
            value={input}
            onChange={handleInputChange}
            placeholder="Type your message..."
          />
          <button type="submit" className="button">Send</button>
        </form>
        <div className="theme-toggle">
          <label className="switch">
            <input type="checkbox" checked={darkMode} onChange={toggleTheme} />
            <span className="slider round"></span>
          </label>
          <span className="theme-text">{darkMode ? 'Dark Mode' : 'Light Mode'}</span>
        </div>
      </div>
    </div>
  );
}

export default App;






