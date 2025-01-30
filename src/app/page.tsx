"use client"

import "./page.css"
import { useEffect, useState } from "react"
import { kakaoLogin, User } from "@/api/auth"
import mainLogo from "../common/images/mainLogo.png"
import swaipeKr from "./swaipeKr.png"
import kakaoLoginButton from "./kakaoLoginButton.png"
import Image from "next/image"
import { Box, Stack } from "@mui/material"
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()

  const [userData, setUserData] = useState<User | undefined>()
  useEffect(() => {
    init()
  }, [])

  async function init() {
    const { data, status } = await kakaoLogin()
    if (status === 200) {
      setUserData(data)
    }
  }

  if (!userData) {
    return <div className="text-xl flex justify-between p-10">Loading...</div>
  }

  return (
    <Stack
      width="100%"
      height="100svh"
      alignItems="center"
      justifyContent="center"
    >
      <Image
        src={mainLogo}
        className="logo_image"
        alt="mainLogo"
        width={215}
        height={184}
      />
      <Stack className="other" alignItems="center" gap="40px">
        <Image height="25" src={swaipeKr} alt="swaipeKr" />
        <Box color="#848484" mb="120px">
          운명 같은 연결, 지금 시작하세요
        </Box>
        <Image
          src={kakaoLoginButton}
          alt="kakaoLoginButton"
          width="153"
          height="39"
          onClick={() => router.push("/identityVerification")}
        />
      </Stack>
    </Stack>
  )
}
