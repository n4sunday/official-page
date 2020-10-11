interface ButtonTheme {
  padding: string
  btnBorder: string
  btnColor: string
  btnFontColor: string
  primaryBorder: string
  primaryColor: string
  primaryFontColor: string
}

interface ContentTheme {
  background: string
  padding: string
}

interface HeaderTheme {
  color: string
  hover: string
}

interface SideBarTheme {
  color: string
  hover: string
}

export interface themeProps {
  titleSize: string
  titleColor: string
  marginBottom: string
  button: ButtonTheme
  content: ContentTheme
  sidebar: SideBarTheme
  header: HeaderTheme
}

export const theme = {
  titleSize: "20px",
  titleColor: "#2E3192",
  mainColor: "#2E3192",
  marginBottom: "1rem",
  content: {
    background: "#fff",
    padding: "0px 24px 24px",
  },
  sidebar: {
    color: "#2E3192",
    hover: "#13017D",
  },
  header: {
    color: "#2E3192",
    background: "#fff",
  },
}
