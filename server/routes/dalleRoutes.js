/* eslint-disable linebreak-style */
import express from 'express';
import { Configuration, OpenAIApi } from 'openai';

const router = express.Router();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

router.route('/').get((req, res) => {
  res.status(200).json({ message: 'Hello from DALL-E!' });
});

router.route('/').post(async (req, res) => {
  try {
    const { prompt } = req.body;

    const response = await openai.createImage({
      model: "dall-e-3",
      prompt: "a white siamese cat",
      n: 1,
      size: "1024x1024",
    });
    image_url = response.data.data[0].url;
    // const aiResponse = await openai.createImage({
    //   prompt,
    //   n: 1,
    //   size: '1024x1024',
    //   response_format: 'b64_json',
    // });

    const image = aiResponse.data.data[0].b64_json;
    res.status(200).json({ photo: image_url });
  } catch (error) {
    console.error(error);
    res.status(500).send(error?.response.data.error.message || 'Something went wrong');
  }
});

export default router;
