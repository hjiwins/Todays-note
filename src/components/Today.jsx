import React from "react";

function Today() {
  const now = new Date().toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    weekday: "long",
    day: "numeric",
  });

  return <h1 className="today-is">오늘은 {now} 입니다.</h1>;
}

export default Today;
