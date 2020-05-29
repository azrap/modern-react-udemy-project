import { useEffect, useState } from "react";
import axios from "axios";

const useResources = (resource) => {
  const [resources, setResources] = useState([]);

  // can also put this inside use effect where fetchResource is being defined below
  const fetchResource = async (resource) => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/${resource}`
    );

    setResources(response.data);
  };

  //   every time the value of resource changes, arrow function inside useEffect gets called. does same thing as componentDidUpdate
  // need that array to prevent the infinite loop
  useEffect(() => {
    fetchResource(resource);
  }, [resource]);

  return resources;
};

export default useResources;
