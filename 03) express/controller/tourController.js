const fs = require('fs');

// Add an empty line here

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`),
);

exports.checkId = (req, res, next, val) => {
  if (req.params.id * 1 > tours.length - 1) {
    return res.status(404).json({
      status: '  fail',
      message: 'invalid Id',
    });
  }
  next();
};

exports.cheackBody = (req, res, next) => {
  if (!req.body.name || !req.body.price) {
    return res.status(400).json({
      status: 'fail',
      message: 'Missing name or price',
    });
  }
  next();
};

exports.getAllTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    results: tours.length,
    data: {
      tours,
    },
  });
};

exports.getTour = (req, res) => {
  const id = req.params.id * 1;
  const tour = tours.find((el) => el.id === id);
  res.status(200).json({
    status: 'success',
    data: {
      tour,
    },
  });
};

exports.createTour = (req, res) => {
  const newId = tours[tours.length - 1].id + 1;
  const { body } = req;

  const newTour = {
    id: newId,
    ...body,
  };

  tours.push(newTour);
  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      console.log(err);
      res.status(201).json({
        status: 'success',
        data: {
          tours: newTour,
        },
      });
    },
  );
};

exports.updateTour = (req, res) => {
  //just skeletion

  res.status(200).json({
    status: 'sucess',
    data: {
      tour: '<updateing tours here...>',
    },
  });
};
exports.deleteTour = (req, res) => {
  //just skeletion

  res.status(204).json({
    status: 'sucess',
    data: 'null',
  });
};
