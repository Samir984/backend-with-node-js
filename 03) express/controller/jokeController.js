const Joke = require('../model/jokes.model');

exports.getAllJokes = async (req, res) => {
  try {
    const jokes = await Joke.find({});
    console.log(jokes);
    res.json(jokes);
  } catch (error) {
    console.error('Error retrieving jokes:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.postJoke = async (req, res) => {
  try {
    console.log(req.body)
    const { type, setup, punchline } = req.body;
    const newJoke = new Joke({ type, setup, punchline });
    await newJoke.save();

    res
      .status(201)
      .json({ message: 'Joke posted successfully', joke: newJoke });
  } catch (error) {
    console.error('Error posting joke:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


