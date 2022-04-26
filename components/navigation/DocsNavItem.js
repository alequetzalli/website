import Link from 'next/link';

function isActiveSlug(slug, activeSlug) {
  const partialSlug = slug.split('/');
  const partialActiveSlug = activeSlug.split('/');
  const activeParts = partialActiveSlug.filter((a, idx) => a === partialSlug[idx]);
  return activeParts.length === partialSlug.length;
}

export default function DocsNavItem({ title, slug, href, indexDocument, activeSlug, onClick = () => {}, className = '', activeClassName = '', bucket }) {
  const isActive = slug === '/docs' || indexDocument ? slug === activeSlug : isActiveSlug(slug, activeSlug);
  const classes = `${isActive ? activeClassName : ''} ${className} inline-block`;

  return (
    <div className='inline-block'>
      <div className={classes}>
        <Link href={href || slug}>
          <a href={href || slug} onClick={onClick}>
            {bucket && (
              <div className={`${(slug === '/docs' ? slug === activeSlug : activeSlug.startsWith(slug)) ? bucket.className : ''} inline-block rounded p-0.5`} style={{ marginRight: '5px', marginBottom: '-6px' }}>
                <bucket.icon className={`${(slug === '/docs' ? slug === activeSlug : activeSlug.startsWith(slug)) ? bucket.className : ''} h-5 w-5`} />
              </div>
            )}
            <span>{title}</span>
          </a>
        </Link>
      </div>
    </div>
  );
}
