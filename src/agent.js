import dotenv from 'dotenv';
import ollama from 'ollama'
dotenv.config();

const OLLAMA_MODEL=process.env.OLLAMA_MODEL || "ollama3.2";


const toolbar=[{
    "type":"function",
    "name":"getWeather",
    "description":"Get the weather of the given location or city in the input",
    "parameters":{
        "type":"string",
        "properties":{
            "sign":{
                "type":"string",
                "description":"Getting data in degree celsius along with the city name",
            }
        },
        "required":["city"],
    }
}
]

let messages_list=[
{"role":"user","content":"what is the weather of the given location"},

]

const response =await ollama.chat({
    model:OLLAMA_MODEL,
    tools:toolbar,
    messages:messages_list,
    temperature:0.3,

})

console.log(response);
 