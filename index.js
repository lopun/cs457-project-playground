const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const runCompletion = async () => {
  const gptResponse = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "Hello ChatGPT :) how are you?",
  });

  console.log(gptResponse.data);
};

runCompletion();
