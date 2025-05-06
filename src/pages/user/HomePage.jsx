import { Button } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Link to="/login">
        <Button variant="outline" className="mt-10">
          Go to Login
        </Button>
      </Link>
      <Link to="/admin/login">
        <Button variant="outline" className="mt-10">
          Go to Admin Login
        </Button>
      </Link>
    </div>
  );
};

export default HomePage;
