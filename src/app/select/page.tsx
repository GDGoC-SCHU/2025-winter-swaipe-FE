"use client"

import { Button, Stack } from "@mui/material"
import Image from "next/image"
import mainLogo from "@/common/images/mainLogo.png"
import Label from "./label.png"
import { useRouter } from "next/navigation"

export default function Select() {
  const { push } = useRouter()

  return (
    <Stack height="100svh" direction="column" gap="12px" width="100%">
      <Stack className="p-4 flex-1 " alignItems="center" width="100%">
        <Image src={mainLogo} width="101" alt="mainLogo" />
        <Stack mt="20vh" gap="80px">
          <Image src={Label} width="278" height="113" alt="label" />
          <Stack gap="40px">
            <Button variant="contained" onClick={() => push("/navigation")}>
              번호 뽑기
            </Button>
            <Button variant="contained" onClick={() => push("/filter")}>
              번호 등록하기
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  )
}
