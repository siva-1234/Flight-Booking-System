import mongoose from "mongoose";

const classSchema = mongoose.schema({
    adult:String,
    child:String,
    class:String
})

const BookingSchema = mongoose.Schema({
  fromCity: String,
  toCity: String,
  Date: String,
  flightType: classSchema,
});

const Booking = mongoose.model("Flight Details", BookingSchema);

export default Booking;
