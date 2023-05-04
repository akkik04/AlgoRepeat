import Label from "../models/labels.js";

// function to create a new label.
export const createLabel = async (req, res) => {
  try {
    const { name } = req.body;
    const user = req.user._id;

    const label = new Label({ name, user });
    await label.save();

    res.status(201).json(label);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// function to get all labels for a user.
export const getAllLabels = async (req, res) => {
  try {
    const user = req.user._id;
    const labels = await Label.find({ user });

    res.status(200).json(labels);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// function to get a specific label by ID.
export const showLabelById = async (req, res) => {
    try {
      const user = req.user._id;
      const labelId = req.params.id;
      const label = await Label.findOne({ _id: labelId, user });
  
      if (!label) {
        return res.status(404).json({ error: "Label not found" });
      }
  
      res.status(200).json(label);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
};

// function to update a label by ID.
export const updateLabelById = async (req, res) => {
    try {
      const user = req.user._id;
      const labelId = req.params.id;
      const update = req.body;
      const options = { new: true, runValidators: true };
      const label = await Label.findOneAndUpdate({ _id: labelId, user }, update, options);
  
      if (!label) {
        return res.status(404).json({ error: "Label not found" });
      }
  
      res.status(200).json(label);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };

// function to delete a label by ID.
export const deleteLabelById = async (req, res) => {
  try {
    const user = req.user._id;
    const labelId = req.params.id;
    const label = await Label.findOneAndDelete({ _id: labelId, user });

    if (!label) {
      return res.status(404).json({ error: "Label not found" });
    }

    res.status(200).json({ message: "Label deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


