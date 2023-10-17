import styled from "@emotion/styled"
import React from "react"
import { Emoji } from "src/components/Emoji"
import useScheme from "src/hooks/useScheme"
import { CONFIG } from "site.config"

type Props = {}

const ThemeToggle: React.FC<Props> = () => {
  const [scheme, setScheme] = useScheme()

  const handleClick = () => {
    setScheme(scheme === "light" ? "dark" : "light")
  }

  if (CONFIG.blog.theme !== "auto") return null
  return (
    <div className={`cursor-pointer dark:text-gray-50`} onClick={handleClick}>
      {scheme === "light" ? "🔆" : "🌙"}
    </div>
  )

  // return (
  //   <StyledWrapper onClick={handleClick}>
  //     <Emoji>{scheme === "light" ? "☀️" : "🌙"}</Emoji>
  //   </StyledWrapper>
  // )
}

export default ThemeToggle

const StyledWrapper = styled.div`
  cursor: pointer;
`
