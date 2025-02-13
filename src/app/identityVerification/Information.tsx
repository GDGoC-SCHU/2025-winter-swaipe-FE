import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
} from "@mui/material"
import { Dispatch, SetStateAction, useEffect, useState } from "react"

export default function Information({
  setDisableNextButton,
}: {
  setDisableNextButton: Dispatch<SetStateAction<boolean>>
}) {
  const [mbti, setMbti] = useState("")
  const [hobbies, setHobbies] = useState<string[]>([])

  function setHobbie(event: SelectChangeEvent) {
    const value = event.target.value as any
    setHobbies(value)
  }

  useEffect(() => {
    if (!mbti) {
      return
    }
    if (hobbies.length === 0) {
      return
    }
    setDisableNextButton(false)
  }, [mbti, hobbies])
  return (
    <Stack padding="12px" gap="24px" minWidth="300px" width="70%">
      <Box fontSize="20px" textAlign="center">
        시작 전에 몇가지
        <br />
        사항만 입력할게요
      </Box>
      <Stack gap="24px">
        <FormControl fullWidth>
          <InputLabel>MBTI</InputLabel>
          <Select
            variant="outlined"
            label="성별"
            fullWidth
            value={mbti}
            onChange={(e) => setMbti(e.target.value)}
          >
            <MenuItem value="ISTJ">ISTJ</MenuItem>
            <MenuItem value="ISFJ">ISFJ</MenuItem>
            <MenuItem value="INFJ">INFJ</MenuItem>
            <MenuItem value="INTJ">INTJ</MenuItem>
            <MenuItem value="ISTP">ISTP</MenuItem>
            <MenuItem value="ISFP">ISFP</MenuItem>
            <MenuItem value="INFP">INFP</MenuItem>
            <MenuItem value="INTP">INTP</MenuItem>
            <MenuItem value="ESTP">ESTP</MenuItem>
            <MenuItem value="ESFP">ESFP</MenuItem>
            <MenuItem value="ENFP">ENFP</MenuItem>
            <MenuItem value="ENTP">ENTP</MenuItem>
            <MenuItem value="ESTJ">ESTJ</MenuItem>
            <MenuItem value="ESFJ">ESFJ</MenuItem>
            <MenuItem value="ENFJ">ENFJ</MenuItem>
            <MenuItem value="ENTJ">ENTJ</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel>취미</InputLabel>
          <Select
            variant="outlined"
            label="취미"
            fullWidth
            multiple
            value={hobbies as any}
            onChange={setHobbie}
          >
            <MenuItem value="영화보기">영화보기</MenuItem>
            <MenuItem value="독서">독서</MenuItem>
            <MenuItem value="운동">운동</MenuItem>
            <MenuItem value="요리">요리</MenuItem>
            <MenuItem value="여행">여행</MenuItem>
            <MenuItem value="음악감상">음악감상</MenuItem>
            <MenuItem value="게임">게임</MenuItem>
            <MenuItem value="그림">그림</MenuItem>
            <MenuItem value="사진찍기">사진찍기</MenuItem>
          </Select>
        </FormControl>
      </Stack>
    </Stack>
  )
}
