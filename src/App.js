import "./App.css";
import { useState, useEffect } from "react";
import { getAllData } from "./service";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("before retrieving data");
    getAllData(setData);
  }, []);

  return (
    <div style={styles.root}>
      <div>
        <p style={styles.title}>Data from the IoT devices</p>
        {data.map((item) => (
          <div style={styles.itemWrapper} key={item.id}>
            <div style={styles.device_name}>
              <p>{item.device_name}</p>
            </div>
            <div style={styles.parameters}>
              <p>Temperature: {item.temperature}</p>
              <p>Humidity: {item.humidity}</p>
              <p>Battery power: {item.battery_power}</p>
              <p>
                Date: {new Date(parseInt(item.date_local)).toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  root: {
    margin: "0 10%",
  },
  title: {
    fontSize: 30,
  },
  itemWrapper: {
    padding: 5,
    margin: 5,
    display: "flex",
    borderRadius: 10,
    borderStyle: "solid",
    borderColor: "#560",
  },
  device_name: {
    display: 'flex',
    flex: 1,
    fontSize: 24,
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center",
  },
  parameters: {
    flex: 3,
    justifyContent: "space-between",
  },
};

export default App;
