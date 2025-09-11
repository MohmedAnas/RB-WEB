import React, { useEffect, useState } from "react";

const UserCounter = () => {
  const [liveUsers, setLiveUsers] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);

  useEffect(() => {
    // ✅ Fetch initial total users
    fetch(`${import.meta.env.VITE_API_URL}/users/total`)
      .then((res) => res.json())
      .then((data) => setTotalUsers(data.total))
      .catch((err) => console.error("Error fetching total users:", err));

    // ✅ Connect to WebSocket
    const ws = new WebSocket(import.meta.env.VITE_WS_URL);

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.liveUsers !== undefined) setLiveUsers(data.liveUsers);
      if (data.totalUsers !== undefined) setTotalUsers(data.totalUsers);
    };

    return () => ws.close();
  }, []);

  return (
    <div className="p-4 flex gap-6 items-center bg-gray-100 rounded-2xl shadow-md w-fit mx-auto my-4">
      <div className="flex items-center gap-2 text-lg font-semibold text-blue-700">
        👁️ Live Users: <span>{liveUsers}</span>
      </div>
      <div className="flex items-center gap-2 text-lg font-semibold text-green-700">
        👁️ Total Users: <span>{totalUsers}</span>
      </div>
    </div>
  );
};

export default UserCounter;
