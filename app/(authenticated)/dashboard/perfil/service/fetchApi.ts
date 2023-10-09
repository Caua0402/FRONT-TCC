import axios from "axios"

export const getDiaristas = async (url: string) => {
  
  try {
    const response = await axios.get(`${url}`);
    
  return response.data.diarists
    
  } catch (error) {
    console.error('Erro ao fazer a solicitação POST:', error);
  }
}