import axios from "axios";

export const APIrequest = async () => {
  try {
    const response = await axios.get(
      "https://api-glucosa-production.up.railway.app/"
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};


export const oneResponse = async (id) => {
  try {
    const response = await axios.get(
      `https://api-glucosa-production.up.railway.app/register/${id}`
    );
    return response.data
  } catch (error) {
    console.log(error);
  }
};

export const createRegister = async (register) => {
  try {

    await axios.post(`https://api-glucosa-production.up.railway.app/register`, {
      fecha: register.fecha,
      nivelazucar1: parseInt(register.nivelazucar1),
      medicamento1: register.medicamento1,
      nivelazucar2: parseInt(register.nivelazucar2),
      medicamento2: register.medicamento2
    });

  } catch (error) {
    console.log(error);
  }
}

export const updateRegisterAPI = async (update, id) => {
  try {

    const ress = {
      fecha: update.fecha,
      nivelazucar1: parseInt(update.nivelazucar1),
      medicamento1: update.medicamento1,
      nivelazucar2: parseInt(update.nivelazucar2),
      medicamento2: update.medicamento2
    }

    await axios.patch(`https://api-glucosa-production.up.railway.app/register/${id}`, ress);

  } catch (error) {
    console.log(error);
  }
}

export const deleteRegister = async (id) => {
  try {
    await axios.delete(
      `https://api-glucosa-production.up.railway.app/register/${id}`
    );
  } catch (error) {
    console.log(error);
  }
};