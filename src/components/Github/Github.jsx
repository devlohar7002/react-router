import React, { useEffect, useState } from "react";

function Github() {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch("https://api.github.com/users/devlohar7002")
      .then((response) => {
        //   console.log(response.json());
        return response.json();
      })
      .then((data) => {
        // console.log(data);
        setData(data);
      });
  }, []);
  return (
    <>
      <div className="flex justify-center">
        <img
          className=" h-32 w-32 rounded-full "
          src={data.avatar_url}
          alt=""
        />
        <div className=" font-semibold mx-5 my-10 text-gray-700">
          Github followers: {data.followers}
        </div>
      </div>
    </>
  );
}

export default Github;
