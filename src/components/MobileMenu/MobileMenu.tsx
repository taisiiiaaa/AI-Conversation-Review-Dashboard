import "./MobileMenu.scss"

export default function MobileMenu() {
  return (
    <div className="mobile-menu">
      <div className="container">
        <ul>
          <li>
            <svg className="icon" width="18" height="18">
              <use href="./icons.svg#ic-weather"></use>
            </svg>
            <p>Weather</p>
          </li>
          <li>
            <svg className="icon" width="17" height="17">
              <use href="./icons.svg#ic-notes"></use>
            </svg>
            <p>Notes</p>
          </li>
          <li>
            <svg className="icon" width="20" height="20">
              <use href="./icons.svg#ic-decision"></use>
            </svg>
            <p>Decision</p>
          </li>
        </ul>
      </div>
    </div>
  )
}
