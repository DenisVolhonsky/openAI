import { useState } from 'react';
import axios from 'axios';

function App() {
const [prompt, setPrompt] = useState('');
const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const result = await axios.post('http://localhost:5001/api/chat', {prompt})
      setResponse(result.data.response);
    }catch(error) {
      console.error(`Error fetching OpenAI response: ${error}`)
    }
  }

  return (
    <div>
     <h1>Open AI Chat</h1>
     <form onSubmit={handleSubmit}>
        <textarea
        value={prompt}
        onChange={(e)=> setPrompt(e.target.value)}
        row='10'
        cols='50'
        placeholder='Enter your request'
        />
        <br/>
        <button type='submit'>Send</button>
     </form>
     <div>
      <h2>Response:</h2>
      <p>{response}</p>
     </div>
    </div>
  );
}

export default App;
