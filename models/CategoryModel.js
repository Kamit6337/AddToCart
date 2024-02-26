import { Schema, models, model } from "mongoose";

const categorySchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide a name to category"],
    },
  },
  {
    timestamps: true,
  }
);

const Category = models.Category || model("Category", categorySchema);

export default Category;
