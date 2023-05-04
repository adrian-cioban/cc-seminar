import { useEffect, useState } from "react";

// js/components/MainPage.jsx
export default function MainPage() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    try {
      fetch("/api/records", {
        method: "GET",
      })
        .then((response) => response.json())
        .then((json) => setRecords(json.data));
    } catch (e) {
      console.log(e);
    }
  }, []);

  console.log(records);

  return (
    <section>
      <div>
        <h1>Fun facts app</h1>
        <p>This is an app that showcases fun facts</p>

        <div>
          {records.map((record) => (
            <div key={record._id}>
              <h3>{record.titlu}</h3>
              <p>{record.descriere}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
