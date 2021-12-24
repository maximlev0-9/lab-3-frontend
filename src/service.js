import axios from "axios";

const url = "http://52.188.42.170/api/getalldata";

const getAllData = async (setData) => {
    axios.get(url).then(
        (response) => {
            setData(response.data);
        }
    );
}

export {getAllData};
