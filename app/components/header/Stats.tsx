"use client";
import { useEffect, useState } from "react";

function CountUp({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      current += increment;

      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return <>{count}</>;
}


export default function Stats() {
  const stats = [
    { value: 500, suffix: "+", label: "Happy Clients" },
    { value: 98, suffix: "%", label: "Satisfaction Rate" },
    { value: 24, suffix: "/7", label: "Support Available" },
  ];

  return (
    <div className="flex items-center justify-center gap-8">
      {stats.map((item) => (
        <div key={item.label}>
          <p className="text-xl md:text-3xl font-bold text-[#5c9e70]">
            <CountUp end={item.value} />
            {item.suffix}
          </p>
          <p className="mt-1 text-xs md:text-sm">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}

