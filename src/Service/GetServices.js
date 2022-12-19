import axios from "axios";

export const fetchData = async () => {
  try {
    const response = await axios.get("https://fine-ruby-magpie-toga.cyclic.app/service");
    return response;
  } catch (error) {
    console.error(error);
  }
};
export const fetchSubService = async () => {
  try {
    const response = await axios.get("https://fine-ruby-magpie-toga.cyclic.app/subservice");
    return response;
  } catch (error) {
    console.error(error);
  }
};
