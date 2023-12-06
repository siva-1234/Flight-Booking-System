import mongoose from "mongoose";

const FlightSchema = mongoose.Schema({
  airlines: String,
  flightCode: String,
  fromCity: String,
  toCity: String,
  timeFrom: String,
  timeTo: String,
  price: String,
});

const Flight = mongoose.model("Flight Details", FlightSchema);

export default Flight;
