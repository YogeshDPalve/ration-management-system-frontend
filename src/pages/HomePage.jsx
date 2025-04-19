import { Button } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex items-center justify-center">
      <Link to="/login">
        <Button variant='outline' className='mt-10'>Go to Login</Button>
      </Link>
    </div>
  );
};

export default HomePage;
