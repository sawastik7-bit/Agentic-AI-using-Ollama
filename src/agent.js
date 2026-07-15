
import dotenv from 'dotenv';
import ollama from 'ollama';
import {getWeather} from "./GetWeatherTool.js";
dotenv.config();

const OLLAMA_MODEL=process.env.OLLAMA_MODEL || "llama3.2";


const toolbar=[ {
    type: "function",
    function: {
      name: "get_weather",
      description: "Get the current weather for a given city name",
      parameters: {
        type: "object",
        properties: {
          city: { type: "string", description: "City name, e.g. Chandigarh" },
        },
        required: ["city"],
      },
    },
  },
];

const Agent=async()=>{

let messages_list=[
{"role":"user","content":"what is the current weather of kharar city"},

]

let response =await ollama.chat({
    model:OLLAMA_MODEL,
    tools:toolbar,
    messages:messages_list,
    temperature:0.3,

})

messages_list.push(response.message);

const result=await getWeather(`${response.message.tool_calls[0].function.arguments.city}`);


messages_list.push({role:"tool",content:result});

 response =await ollama.chat({
    model:OLLAMA_MODEL,
    tools:toolbar,
    messages:messages_list,
    temperature:0,

})


console.log(response.message.content);
}

Agent();
