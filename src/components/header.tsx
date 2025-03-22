import { Link } from "react-router-dom"
import { useTheme } from "./context/theme-provider"


const Header = () => {
  const { theme, setTheme } = useTheme()
  const isDark = theme === "dark"
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur py-2 supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to={"/"}>
          <img 
            src={isDark ? "/logo1.png" : "/logo.png"} 
            alt="logo" 
            className="h-14 rounded-full"
          />
        </Link>

        <div>
          {/* search */}
          {/* toggle */}
          <div 
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className={`flex items-center cursor-pointer transition-transform duration-500 
              ${isDark ? "rotate-80" : "rotate-0"}`}
          >

          </div>
        </div>
      </div>
    </header>
  )
}

export default Header