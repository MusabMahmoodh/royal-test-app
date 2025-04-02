"use client";

import { Activity, GraduationCap, Ruler, TrendingUp } from "lucide-react";
import { useState, useEffect, useRef } from "react";

interface SuccessCardProps {
  value: string;
  label: string;
  description: string;
  icon: string;
  accentColor: string;
  lightColor: string;
}

export function SuccessCard({
  value,
  label,
  description,
  icon,
  accentColor,
  lightColor,
}: SuccessCardProps) {
  // Map icon names to components
  const iconMap = {
    Activity: <Activity className="text-green-600 h-8 w-8" />,
    GraduationCap: <GraduationCap className="text-amber-600 h-8 w-8" />,
    Ruler: <Ruler className="text-blue-600 h-8 w-8" />,
    TrendingUp: <TrendingUp className="text-purple-600 h-8 w-8" />,
  };

  const IconComponent = iconMap[icon] || null;

  // Extract numeric value and suffix
  const numericValue = Number.parseInt(value.replace(/[^0-9]/g, ""));
  const suffix = value.includes("+") ? "+" : value.includes("%") ? "%" : "";

  // State for the animated counter
  const [count, setCount] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const cardRef = useRef(null);

  // Observer to detect when card is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  // Counter animation
  useEffect(() => {
    if (!isInView) return;

    // Calculate animation duration and step size
    const duration = 2000; // 2 seconds
    const steps = 50;
    const stepValue = Math.ceil(numericValue / steps);
    const stepTime = duration / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += stepValue;
      if (current >= numericValue) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, numericValue]);

  return (
    <div
      ref={cardRef}
      className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1"
    >
      <div className={`absolute top-0 left-0 w-full h-1 ${accentColor}`}></div>
      <div className="p-6">
        <div
          className={`w-16 h-16 ${lightColor} rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-opacity-70 transition-colors`}
        >
          {IconComponent}
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center">
            <span
              className={`text-5xl font-bold ${accentColor.replace(
                "bg-",
                "text-"
              )} mr-1 group-hover:scale-110 transition-transform`}
            >
              {count}
            </span>
            <span className="text-lg text-gray-500">{suffix}</span>
          </div>
          <h3 className="text-xl font-bold mt-2 mb-1">{label}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
      <div
        className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${accentColor
          .replace("bg-", "from-")
          .replace("600", "400")} ${accentColor.replace(
          "bg-",
          "to-"
        )} transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left`}
      ></div>
    </div>
  );
}
