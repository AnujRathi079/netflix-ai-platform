import mongoose, {
  Schema,
  models,
} from "mongoose";

const ContinueSchema =
  new Schema(
    {
      userEmail: String,

      movieId: Number,

      title: String,

      poster: String,

      progress: Number,
    },
    {
      timestamps: true,
    }
  );

const ContinueWatching =
  models.ContinueWatching ||
  mongoose.model(
    "ContinueWatching",
    ContinueSchema
  );

export default ContinueWatching;