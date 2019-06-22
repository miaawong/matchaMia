import React from "react"
import BackgroundImage from "gatsby-background-image"
import Title from "./Title"

export default function BackgroundSection({
  img,
  styleClass,
  title,
  children,
}) {
  return (
    <BackgroundImage className={styleClass} fluid={img}>
      <h1 className="title text-white text-center display-3 font-weight-bold titleName">
        {title}
      </h1>
      {children}
    </BackgroundImage>
  )
}

BackgroundSection.defaultProps = {
  title: "Matcha Mia",
  styleClass: "default-background",
}
