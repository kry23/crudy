import mongoose from "mongoose";

export interface Something {
  name: String;
  surname: String;
}
const Schema = mongoose.Schema;

const peopleSchema = new Schema({
  name: String,
  surname: String,
});
const SomePerson = mongoose.model("SomePerson", peopleSchema);

export { SomePerson };
