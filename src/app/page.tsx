"use client"

import { useEffect, useState } from "react"
import { kakaoLogin, User } from "@/api/auth"

export default function Home() {
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
    <div className="text-xl flex justify-between p-10">{userData.email}</div>
  )
}
