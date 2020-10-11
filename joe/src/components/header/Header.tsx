import React from "react"
import PropTypes from "prop-types"

interface Props {
  sticky: boolean
  siteTitle: string
}

export const Header = (props: Props) => {
  return <div>Header</div>
}

Header.propTypes = {
  sticky: PropTypes.bool.isRequired,
  siteTitle: PropTypes.string.isRequired,
}
