"use client"

import { Button, Stack } from "@mui/material"
import HeartFill from "../navigation/home/heart_fill.png"
import Image from "next/image"
import mainLogo from "@/common/images/mainLogo.png"
import { profileCardDataList } from "@/api/profileCardData"
import { useRouter } from "next/navigation"

export default function Pay() {
  const { push } = useRouter()
  return (
    <Stack height="100svh" direction="column" gap="12px" width="100%">
      <Stack className="p-4 flex-1 " alignItems="center" width="100%">
        <Image src={mainLogo} width="101" alt="mainLogo" />
        <Stack direction="row" alignItems="start">
          <Stack textAlign="center" fontSize="20px" p="16px">
            매칭 준비가 완료 되었어요!
          </Stack>
        </Stack>
        <Stack mt="40px" textAlign="center" fontSize="20px" p="16px">
          마지막 단계!
        </Stack>

        <Stack alignItems="center" gap="20px" mt="40px">
          <Stack
            direction="row"
            gap="16px"
            alignItems="center"
            textAlign="center"
          >
            아래 계좌로 300원을 넣으시면
            <br />
            프로필이 노출 됩니다.
          </Stack>
          <Stack mt="30px" px="40px" py="12px" bgcolor="#E2DFDF">
            국민 00000000000000
          </Stack>
        </Stack>
        <Stack width="80%" mt="80px">
          <Button
            variant="contained"
            fullWidth
            onClick={() => push("/navigation")}
          >
            완료
          </Button>
        </Stack>
      </Stack>
    </Stack>
  )
}
