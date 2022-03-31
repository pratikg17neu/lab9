import * as contactService from "./../services/contacts-service.js";

const setSuccessResponse = (obj, response) => {
  response.status(200);
  response.json(obj);
};

const setErrorResponse = (error, response) => {
  response.status(500);
  response.json(error);
};

export const post = async (request, response) => {
  try {
    const payload = request.body;
    const contact = await contactService.save(payload);
    setSuccessResponse(contact, response);
  } catch (error) {
    setErrorResponse(error, response);
  }
};

export const index = async (request, response) => {
  try {
    const firstName = request.query.firstName;
    const lastName = request.query.lastName;
    const query = {};

    if (firstName) {
      query.firstName = firstName;
    }

    if (lastName) {
      query.lastName = lastName;
    }
    const contacts = await contactService.search(query);

    setSuccessResponse(contacts, response);
  } catch (error) {
    setErrorResponse(error, response);
  }
};

export const get = async (request, response) => {
  try {
    const id = request.params.id;
    const contact = await contactService.get(id);
    setSuccessResponse(contact, response);
  } catch (error) {
    setErrorResponse(error, response);
  }
};

export const update = async (request, response) => {
  try {
    let updated = { ...request.body };
    updated.id = request.params.id;
    const contact = await contactService.update(updated);
    setSuccessResponse(contact, response);
  } catch (error) {
    setErrorResponse(error, response);
  }
};

export const remove = async (request, response) => {
  try {
    const id = request.params.id;
    const contact = await contactService.remove(id);

    setSuccessResponse({ message: `Successfully Removed ${id}` }, response);
  } catch (error) {
    setErrorResponse(error, response);
  }
};
