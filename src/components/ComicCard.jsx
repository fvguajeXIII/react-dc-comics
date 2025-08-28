function ComicCard({ comic }) {
  return (
    <div className="comic-card">
      <div className="comic-card__image">
        <img src={comic.thumb} alt={comic.title} />
      </div>
      <div className="comic-card__content">
        <h3 className="comic-card__title">{comic.title}</h3>
        <p className="comic-card__price">{comic.price}</p>
        <div className="comic-card__meta">
          <p className="comic-card__series">Series: {comic.series}</p>
          <p className="comic-card__type">Type: {comic.type}</p>
          <p className="comic-card__date">Release: {comic.sale_date}</p>
        </div>
        {comic.description && (
          <p className="comic-card__description">{comic.description}</p>
        )}
        {comic.writers && comic.writers.length > 0 && (
          <div className="comic-card__credits">
            <p className="comic-card__writers">
              <strong>Writers:</strong> {comic.writers.join(', ')}
            </p>
          </div>
        )}
        {comic.artists && comic.artists.length > 0 && (
          <div className="comic-card__credits">
            <p className="comic-card__artists">
              <strong>Artists:</strong> {comic.artists.join(', ')}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default ComicCard
