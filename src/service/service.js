import axios from "axios";

// Funcion que obtiene todos los registros de la RES API
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

// Funcion que me deja ver informacion de un registro por medio de su id
export const responseInfo = async (id) => {
  try {
    const response = await axios.get(
      `https://api-glucosa-production.up.railway.app/register/${id}`
    );
    return response.data
  } catch (error) {
    console.log(error);
  }
};

// Funcion que me permite Crear registro en la base de datos
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

// Funcion que me permite actualizar un dato
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

// Funcion que me permite eliminar un registro de la base de datos
export const deleteRegister = async (id) => {
  try {
    await axios.delete(
      `https://api-glucosa-production.up.railway.app/register/${id}`
    );
  } catch (error) {
    console.log(error);
  }
};