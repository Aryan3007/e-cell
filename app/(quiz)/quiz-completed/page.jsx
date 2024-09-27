"use client"

import { Stack } from "@mui/material";
import { useClerk } from "@clerk/clerk-react";
import { useEffect } from "react";


export default function QuizCompleted() {

    const { signOut } = useClerk();

    useEffect(() => {
        const handleLogout = async () => {
            try {
              await signOut(); // Signs out the current user
              console.log("User logged out successfully");
            } catch (error) {
              console.error("Error logging out user:", error);
            }
          };

          setTimeout(() => {
              handleLogout();
          }, 4000);

    }, [])
    
  

    return (
        <>

            <Stack width="100vw" height="90vh" alignItems="center" justifyContent="center">
                <Stack width="800px" height="250px" alignItems="center" justifyContent="space-evenly" p="0px 20px 0px 20px" sx={{ border: "none", borderRadius: "7px", boxShadow: "4px 4px 12px black" }}>
                    <p className='text-3xl font-semibold text-green-700' >Quiz Completed</p>
                    <p className='text-xl font-semibold text-blue-800' >Result will be sent in the email.</p>
                    <p className='text-2xl font-semibold text-orange-800' >Signing Out.</p>
                </Stack>
            </Stack>
        </>
    )
}