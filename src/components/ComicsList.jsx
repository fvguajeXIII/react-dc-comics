import ComicCard from './ComicCard'

function ComicsList({ comics }) {
  return (
    <div className="comics-list">
      <div className="comics-grid">
        {comics.map(comic => (
          <ComicCard key={comic.id} comic={comic} />
        ))}
      </div>
    </div>
  )
}

export default ComicsList