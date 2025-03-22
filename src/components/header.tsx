import { Link } from "react-router-dom"
import { useTheme } from "./context/theme-provider"


const Header = () => {
  const { theme } = useTheme()
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur py-2 supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to={"/"}>
          <img 
            src={theme === "dark" ? "/logo.png" : "/logo1.png"} 
            alt="logo" 
            className="h-14 rounded-full"
          />
        </Link>

        <div>
          {/* search */}
          {/* toggle */}
        </div>
      </div>
    </header>
  )
}

export default Header