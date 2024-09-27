"use client"

import { Stack } from '@mui/material';

import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';


export default function Home() {

  const { user, isSignedIn } = useUser();
  const router = useRouter();

  if (isSignedIn) {
    console.log(" User Name : ", user.fullName)
    const userEmail = user.primaryEmailAddress.emailAddress;
    console.log(" Use Email : ", userEmail)

    const requestBody = {
      // email: "hello@gmail.com"
      email: userEmail
    }

    fetch("http://localhost:7070/check-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: 'include', // Include cookies in the request
      body: JSON.stringify(requestBody),
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData)
        if (responseData.data == null) {
          console.log("New User");
          router.push("/make-user-profile")
        } else if (responseData.data != null) {
          console.log("Already participated in Quiz")
          router.push("/already-participated")
        }
      })

  } else {
    router.push("/sign-in")
  }

  return (
    <>
       <Stack width="100vw" height="90vh" alignItems="center" justifyContent="center">
            <Stack width="800px" height="250px" alignItems="center" justifyContent="space-evenly" p="0px 20px 0px 20px" sx={{ border: "none", borderRadius: "7px", boxShadow: "4px 4px 12px black" }}>
                <p className='text-3xl font-semibold text-purple-900' > Welcome to E-Cell E-Quest</p>
            </Stack>
        </Stack>
    </>
  );
}
