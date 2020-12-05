import * as mongoose from "mongoose";

// const Schema = mongoose.Schema;

// const peopleSchema = new Schema({
//   name: String,
//   surname: String,
// });
// const SomePerson = mongoose.model("SomePerson", peopleSchema);

// export { SomePerson };

interface Something extends mongoose.Document {
  name: string;
  surname: string;
}

const peopleSchema = new mongoose.Schema({ name: String, surname: String });
export const SomePerson = mongoose.model<Something>("saveduser", peopleSchema);
