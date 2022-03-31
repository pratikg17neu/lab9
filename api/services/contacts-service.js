import Contact from "./../models/contact.js";

export const save = (newContact) => {
  const contact = new Contact(newContact);
  return contact.save();
};

export const search = (query) => {
  const params = {
    ...query,
  };

  return Contact.find(params).exec();
};

export const get = async (id) => {
  const contact = await Contact.findById(id).exec();
  return contact;
};

export const update = async (updateContact) => {
  updateContact.updatedAt = new Date();
  const contact = await Contact.findByIdAndUpdate(
    updateContact.id,
    updateContact,
    { new: true }
  ).exec();
  return contact;
};

export const remove = async (id) => {
  const contact = await Contact.findByIdAndDelete(id).exec();
  return contact;
};
