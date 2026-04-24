import LogoLink from "../LogoLink/LogoLink"
import "./MobileHeader.scss"

type MobileHeaderProps = { isOpen: boolean; onToggleSidebar: () => void }

export default function MobileHeader({
  isOpen,
  onToggleSidebar,
}: MobileHeaderProps) {
  return (
    <header className="mobile-header">
      <div className="container">
        <LogoLink />
        <div
          className={`ham-menu ${isOpen ? "active" : ""}`}
          onClick={onToggleSidebar}>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  )
}
