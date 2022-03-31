import mongoose from "mongoose";

const Schema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: "First name is required.",
    },
    lastName: {
      type: String,
      required: "First name is required.",
    },
    phone: {
      type: String,
      required: "Phone number is required.",
    },

    createdDate: {
      type: Date,
      default: Date.now(),
    },
    updatedDate: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    versionKey: false,
  }
);

Schema.virtual("id", () => {
  this._id.toHexString();
});
Schema.set("toJSON()"), { virtual: true };
const model = mongoose.model("contact", Schema);

export default model;
