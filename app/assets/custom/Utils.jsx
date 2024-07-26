"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Helmet } from "react-helmet-async";

export const HandleWidth = () => {
  const [width, setWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setWidth(window.innerWidth);
      };
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return width;
};

export const manipulateDate = (dateString) => {
  const originalTime = dateString.replace("T", " ");
  dateString = dateString.split("T")[0];
  const date = new Date(dateString);
  const today = new Date();

  const isSameDate = (date1, date2) =>
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate();

  if (isSameDate(date, today)) return originalTime;

  const diffInDays = Math.floor((today - date) / (1000 * 60 * 60 * 24));
  let n = diffInDays;

  if (diffInDays === 1) return "Yesterday";
  if (diffInDays < 0) return "Future";
  if (diffInDays <= 7) return `${n} day(s) ago`;

  const diffInWeeks = Math.floor(diffInDays / 7);
  n = diffInWeeks;
  if (diffInWeeks === 1) return "Last week";
  if (diffInWeeks <= 5) return `${n} week(s) ago`;

  const diffInMonths = Math.floor(diffInDays / 30);
  n = diffInMonths;
  if (diffInMonths === 1) return "Last month";
  if (diffInMonths <= 12) return `${n} month(s) ago`;

  return originalTime;
};

export const getKeyByValue = (obj, value) => {
  return Object.keys(obj).find((key) => obj[key] === value);
};

const capitalizeFirstChars = (str) => {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
};

export const ScrollToTop = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const handleRouteChange = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    };

    if (router.events) {
      router.events.on("routeChangeComplete", handleRouteChange);

      return () => {
        router.events.off("routeChangeComplete", handleRouteChange);
      };
    } else {
      handleRouteChange();
    }
  }, [router]);

  return <>{children}</>;
};

export const SocialPreviews = ({ title, description, name, type, image }) => {
  useEffect(() => {
    const insertAfter = (newElement, targetElement) => {
      var parent = targetElement.parentNode;
      if (parent.lastChild === targetElement) {
        parent.appendChild(newElement);
      } else {
        parent.insertBefore(newElement, targetElement.nextSibling);
      }
    };

    if (typeof document !== "undefined") {
      let metaTag = document.createElement("META");
      let titleTag = document.getElementsByTagName("META")[0];
      metaTag.setAttribute("property", "og:image");
      metaTag.setAttribute("content", image);
      insertAfter(metaTag, titleTag);
    }
  }, [image]);

  return (
    <Helmet>
      <meta name="description" content={description} />

      {/* Facebook Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />

      {/* Twitter Tags */}
      <meta property="twitter:creator" content={name} />
      <meta property="twitter:card" content={type} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />

      {/* Google Adsense */}
      <meta name="google-adsense-account" content="ca-pub-3536158399576400" />
    </Helmet>
  );
};

export const modifyTitle = (title) => {
  useEffect(() => {
    if (typeof document !== "undefined") {
      title = title + " Pacesetter Frontier Magazine";
      title = title.replaceAll("%20", " ");
      document.title = title.trim();
    }
  }, [title]);
};

export const isValidEmail = (email) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
};
