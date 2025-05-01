import { Flag } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col gap-3 w-[60%] justify-center items-center mx-auto mt-20">
      <div>
        <Flag
          className="dark:fill-primary dark:text-primary text-secondary fill-secondary "
          size={80}
        />
      </div>
      <div className="text-4xl font-winky font-semibold tracking-wide flex flex-col items-center justify-center mt-10 gap-2">
        <h2>Error 404</h2>
        <h2>It looks like something went wrong.</h2>
        <h2>Or Page not found.</h2>
      </div>
      <div className="p-10 text-lg text-center text-gray-300">
        <p>Don't worry, our team is already on it.</p>
        <p>Please try refreshing the page or come back later.</p>
      </div>
      <Button className="font-bold p-5" variant="outline">
        Back Home
      </Button>
    </div>
  );
};

export default NotFoundPage;
