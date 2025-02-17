import { Box, Button, Stack, TextField } from "@mui/material"
import { Dispatch, SetStateAction, useEffect, useState } from "react"

export default function PhoneNumberVerification({
  setDisableNextButton,
}: {
  setDisableNextButton: Dispatch<SetStateAction<boolean>>
}) {
  const [didSendMessage, setDidSendMessage] = useState(false)
  const [isConfirm, setIsConfirm] = useState(false)

  function sendMessage() {
    setDidSendMessage(true)
  }

  function confirm() {
    setIsConfirm(true)
    setDisableNextButton(false)
  }

  return (
    <Stack
      height="100%"
      textAlign="center"
      direction="column"
      justifyContent="space-between"
    >
      <Box fontSize="20px">본인인증</Box>
      <Stack height="80%" gap="27px">
        <Box>본인 명의 휴대전화를 입력해주세요</Box>
        <Stack direction="row" gap="12px" alignItems="center">
          <TextField
            variant="outlined"
            label="휴대전화 번호"
            disabled={isConfirm}
          />
          <Button
            size="small"
            variant="contained"
            onClick={sendMessage}
            disabled={isConfirm}
            style={{
              padding: "0px",
              height: "40px",
            }}
          >
            전송
          </Button>
        </Stack>
        <Stack>
          {didSendMessage && (
            <Stack gap="27px">
              <Stack direction="row" gap="12px" alignItems="center">
                <TextField
                  variant="outlined"
                  fullWidth
                  label="인증번호"
                  disabled={isConfirm}
                />
              </Stack>
              <Button
                size="small"
                variant="contained"
                onClick={confirm}
                disabled={isConfirm}
                style={{
                  padding: "0px",
                  height: "40px",
                }}
              >
                확인
              </Button>
            </Stack>
          )}
        </Stack>
      </Stack>
    </Stack>
  )
}
