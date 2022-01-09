function Welcome({ name, poster, rating, summary }) {
  return (
    <div>
      <h1 className="user-name">{name}</h1>
      <img className="user-img" src={poster} alt={name} />
      <p className="user-rating"><b className="imdb-color">IMDB:</b> {rating}</p>
      <p className="user-summary"><b className="summary-color">Summary:</b> {summary}</p>
    </div>
  );
}
