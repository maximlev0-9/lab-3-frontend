import axios from "axios";

const url = "https://lab-3-devices-backend.azurewebsites.net/api/getalldata";

const getAllData = async (setData) => {
    axios.get(url).then(
        (response) => {
            console.log(response.data);
            setData(response.data);
        }
    );
}

export {getAllData};
