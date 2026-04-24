import "./LogoLink.scss"

export default function LogoLink() {
  return (
    <a className="logo-link" href="/index.html">
      <div className="icon-wrapper">
        <svg className="icon" width="22" height="22">
          <use href="./icons.svg#ic-logo"></use>
        </svg>
      </div>
      <div className="web-name">
        <p>Amerito AI</p>
        <p>Review Platform</p>
      </div>
    </a>
  )
}
