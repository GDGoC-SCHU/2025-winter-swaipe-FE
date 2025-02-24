"use client"

import { Button, Stack } from "@mui/material"
import HeartFill from "../navigation/home/heart_fill.png"
import Image from "next/image"
import mainLogo from "@/common/images/mainLogo.png"
import { profileCardDataList } from "@/api/profileCardData"
import { useRouter } from "next/navigation"

export default function Pay() {
  const { back } = useRouter()
  return (
    <Stack height="100svh" direction="column" gap="12px" width="100%">
      <Stack className="p-4 flex-1 " alignItems="center" width="100%">
        <Image src={mainLogo} width="101" alt="mainLogo" />
        <Stack direction="row" alignItems="start">
          <Stack textAlign="center" fontSize="20px" p="16px">
            당신의 선택이
            <br />
            새로운 인연을 만듭니다.
          </Stack>
        </Stack>
        <Stack mt="40px" textAlign="center" fontSize="20px" p="16px">
          아래 계좌로 입금하시면 <br />
          연락처가 제공됩니다
        </Stack>

        <Stack alignItems="center" gap="20px" mt="40px">
          <Stack direction="row" gap="16px" alignItems="center">
            <Image src={HeartFill} alt="backButton" width="20" height="20" />
            <Stack>(500원)</Stack>
            <Stack fontWeight="bold" fontSize="24px">
              X {profileCardDataList.length}
            </Stack>
          </Stack>
          <Stack mt="12px" fontSize="20px">
            {profileCardDataList.length * 500}원
          </Stack>
          <Stack px="40px" py="12px" bgcolor="#E2DFDF">
            국민 00000000000000
          </Stack>
        </Stack>
        <Stack width="80%" mt="80px">
          <Button variant="contained" fullWidth onClick={back}>
            뒤로가기
          </Button>
        </Stack>
      </Stack>
    </Stack>
  )
}
