import mongoose, { Schema, models } from "mongoose";

const FavoriteSchema = new Schema(
  {
    userEmail: {
      type: String,
      required: true,
    },

    movieId: {
      type: Number,
      required: true,
    },

    title: String,

    poster: String,
  },
  {
    timestamps: true,
  }
);

const Favorite =
  models.Favorite ||
  mongoose.model("Favorite", FavoriteSchema);

export default Favorite;