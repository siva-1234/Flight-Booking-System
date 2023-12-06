import Flight from "../schema/FlightSchema.js";

export const Flights = async (req, res) => {
  try {
    const airlines = req.body.airlines;
    const flightCode = req.body.flightCode;
    const fromCity = req.body.fromCity;
    const toCity = req.body.toCity;
    const timeFrom = req.body.timeFrom;
    const timeTo = req.body.timeTo;
    const price = req.body.price;

    await Flight({
      airlines,
      flightCode,
      fromCity,
      toCity,
      timeFrom,
      timeTo,
      price,
    }).save();

    res.status(201).send({ message: "This is the Flight Api" });
  } catch (error) {
    res.status(400).send(error);
  }
};
