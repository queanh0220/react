
import React from "react";


import("./data").then(data => {
  console.log(data.userData);
});


const getComponent = (async() => {
  const data = await import("./data")
  return data.userData;
})

getComponent().then(res => console.log(res))

export default function DynamicImport(props) {
  return (
    <div>
      Console
    </div>
  );
}
