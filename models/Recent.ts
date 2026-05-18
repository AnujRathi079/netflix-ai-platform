import mongoose, {
  Schema,
  models,
} from "mongoose";

const RecentSchema = new Schema(
  {
    userEmail: String,

    movieId: Number,

    title: String,

    poster: String,
  },
  {
    timestamps: true,
  }
);

const Recent =
  models.Recent ||
  mongoose.model(
    "Recent",
    RecentSchema
  );

export default Recent;