import axios from "axios";

const url = "https://lab3-func.azurewebsites.net/api/getalldata";

const getAllData = async (setData) => {
    axios.get(url).then(
        (response) => {
            setData(response.data);
        }
    );
}

export {getAllData};
