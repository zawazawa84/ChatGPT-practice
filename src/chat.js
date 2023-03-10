import axios from 'axios';

const API_URL = 'https://api.openai.com/v1/';
const MODEL = 'gpt-3.5-turbo';
const API_KEY =''

export const Chat = async (message) => {
  try{
    const response = await axios.post(`${API_URL}chat/completions`, {
      model: MODEL,
      messages: [
        {
          'role': 'user',
          'content': message,
        }
      ],
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${ API_KEY }`
      }
    });

    return response.data.choices[0].message.content;

  } catch (error) {
    console.error(error);
    return null;
  }
}
