


toolbar=[{
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