import './PageHeader.css';

function PageHeader({ title, subtitle, breadcrumb }) {
  return (
    <section className="page-header" aria-label={title}>
      <div className="page-header-bg" aria-hidden="true"></div>
      <div className="container page-header-content">
        {breadcrumb && (
          <nav className="page-header-breadcrumb" aria-label="Breadcrumb">
            <span>Home</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
            <span className="page-header-breadcrumb-current">{breadcrumb}</span>
          </nav>
        )}
        <h1 className="page-header-title">{title}</h1>
        {subtitle && <p className="page-header-subtitle">{subtitle}</p>}
        <hr className="divider divider-center" />
      </div>
    </section>
  );
}

export default PageHeader;
