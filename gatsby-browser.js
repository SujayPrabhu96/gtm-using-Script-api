import React from "react"
import RootElement from "./src/components/RootElement"

export const onRouteUpdate = ({ prevLocation }) => {
  const isFirstPage = prevLocation === null
  let fireGtm = true
  if (isFirstPage) {
    fireGtm = false
  }
  if (fireGtm) {
    // wrap inside a timeout to ensure the title has properly been changed
    setTimeout(() => {
      window.dataLayer = window.dataLayer || []
      const data = window.dataLayer
      const eventName = `gatsby-route-change`
      data.push({ event: eventName })
      console.log("HELLLLLO", data)
    }, 50)
  }
}

export const wrapRootElement = ({ element }) => {
  return <RootElement>{element}</RootElement>
}
