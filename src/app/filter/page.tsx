"use client"

import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
} from "@mui/material"
import Image from "next/image"
import { useState } from "react"
import mainLogo from "@/common/images/mainLogo.png"
import { useRouter } from "next/navigation"

const majorsList = [
  "의예과",
  "의학과",
  "간호학과",
  "화학과",
  "식품영약학과",
  "환경보건학과",
  "생명과학과",
  "스포트과학과",
  "사회체육과",
  "스포트의학과",
  "유아교육과",
  "특수교육과",
  "청소년교육상담학과",
  "법학과",
  "행정학과",
  "경찰행정학과",
  "사회복지학과",
  "경영학과",
  "국제통상학과",
  "관광경영학과",
  "경제금융학과",
  "IT금융경영학과",
  "글로벌문화산업학과",
  "회계학과",
  "GBS",
  "컴퓨터공학과",
  "정보통신공학과",
  "전자공학과",
  "전기공학과",
  "전자정보공학과",
  "나노화학공학과",
  "에너지환경공학과",
  "디스플레이신소재공학과",
  "기계공학과",
  "컴퓨터소프트웨어공학과",
  "정보보호학과",
  "의료IT공학과",
  "AI.빅데이터학과",
  "사물인터넷학과",
  "메타버스&게임학과",
  "보건행정경영학과",
  "의생명공학과",
  "임상병리학과",
  "작업치료학과",
  "의학공학과",
  "의공학과",
  "한국어문화콘탠츠학과",
  "영미학과",
  "중국학과",
  "미디어커뮤니케이션학과",
  "건축학과",
  "디지털애니메이션학과",
  "스마트자동차학과",
  "에너지공학과",
  "공연영상학과",
  "탄소중립학과",
  "의생명융합학부 헬스케어융합정공",
  "의생명융합학부 바이오의약전공",
]

export default function Filter() {
  const { push } = useRouter()
  const [majors, setMajors] = useState<string[]>([])
  const [classOfYear, setClassOfYear] = useState<string[]>([])

  function setMajor(event: SelectChangeEvent) {
    const value = event.target.value as unknown as string[]
    setMajors(value)
  }

  function setClass(event: SelectChangeEvent) {
    const value = event.target.value as unknown as string[]
    setClassOfYear(value)
  }

  return (
    <Stack height="100svh" direction="column" gap="12px" width="100%">
      <Stack className="p-4 flex-1 " alignItems="center" width="100%">
        <Image src={mainLogo} width="101" alt="mainLogo" />
        <Stack direction="row" alignItems="start">
          <Stack textAlign="center" fontSize="20px" p="16px">
            보다 편리한 이용을 위해
            <br />
            제외하고 싶은
            <br />
            학과랑 학번을 선택할게요
          </Stack>
        </Stack>
        <Stack
          gap="24px"
          alignItems="center"
          width="100%"
          className="p-4 flex-1 "
        >
          <FormControl fullWidth>
            <InputLabel>학과</InputLabel>
            <Select
              multiple
              value={majors as unknown as string}
              label="학과"
              onChange={setMajor}
            >
              {majorsList.map((major, index) => (
                <MenuItem key={index} value={major}>
                  {major}
                </MenuItem>
              ))}
            </Select>
          </FormControl>{" "}
          <FormControl fullWidth>
            <InputLabel>학번</InputLabel>
            <Select
              multiple
              value={classOfYear as unknown as string}
              label="학번"
              onChange={setClass}
            >
              {new Array(8).fill(0).map((_, index) => (
                <MenuItem key={index} value={25 - index}>
                  {25 - index}학번
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button
            fullWidth
            variant="contained"
            onClick={() => push("/pay-regist")}
          >
            다음
          </Button>
        </Stack>
      </Stack>
    </Stack>
  )
}
