"use client"

import mainLogo from "@/common/images/mainLogo.png"
import { Button, Stack } from "@mui/material"
import Image from "next/image"
import { useState } from "react"
import Home from "./home/page"
import Heart from "./heart/page"
import My from "./my/page"
import Alarm from "./alarm/page"
import HomeIcon from "./Home.png"
import HeartIcon from "./Heart.png"
import MyIcon from "./My.png"
import AlarmIcon from "./Alarm.png"

type Pages = "home" | "heart" | "my" | "alarm"

export default function Navigation({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [currentPage, setCurrentPage] = useState<Pages>("home")

  return (
    <Stack height="100svh" direction="column" gap="12px" width="100%">
      <Stack className="p-4 flex-1 " alignItems="center" width="100%">
        <Image src={mainLogo} width="101" alt="mainLogo" />
        <Stack></Stack>
      </Stack>
      <Stack
        gap="8px"
        pt="12px"
        height="72px"
        fontSize="10px"
        direction="row"
        borderTop="1px solid #ddd"
        justifyContent="space-around"
      >
        <Stack
          width="40px"
          textAlign="center"
          alignItems="center"
          onClick={() => setCurrentPage("home")}
        >
          <Image src={HomeIcon} width="32" height="32" alt="Home" />
          HOME
        </Stack>
        <Stack
          width="40px"
          textAlign="center"
          alignItems="center"
          onClick={() => setCurrentPage("heart")}
        >
          <Image src={HeartIcon} width="32" height="32" alt="Heart" />
          HEART
        </Stack>
        <Stack
          width="40px"
          textAlign="center"
          alignItems="center"
          onClick={() => setCurrentPage("my")}
        >
          <Image src={MyIcon} width="32" height="32" alt="My" />
          MY
        </Stack>
        <Stack
          width="40px"
          textAlign="center"
          alignItems="center"
          onClick={() => setCurrentPage("alarm")}
        >
          <Image src={AlarmIcon} width="32" height="32" alt="Alarm" />
          ALARM
        </Stack>
      </Stack>
    </Stack>
  )
}

function PageComponent({ page }: { page: Pages }) {
  switch (page) {
    case "home":
      return <Home />
    case "heart":
      return <Heart />
    case "my":
      return <My />
    case "alarm":
      return <Alarm />
  }
  return null
}
