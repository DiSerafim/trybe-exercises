import React from 'react';
import PropTypes from 'prop-types';

class MovieForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { ...props.movie };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const { onSubmit } = this.props;
    onSubmit(this.state);
  }

  updateMovie(field, newValue) {
    this.setState({ [field]: newValue });
  }

  renderTitleInput() {
    const { title } = this.state;

    return (
      <div className="row">
        <div className="input-field col s12">
          <input 
            placeholder="Insira o título"
            id="movie_title"
            type="text"
            className="validade"
            value={title}
            onChange={(e) => this.updateMovie('title', e.target.value)}
          />
          <label className="active" htmlFor="movie_title">Titulo</label>
        </div>
      </div>
    );
  }

  renderSubtitleInput() {
    const { subtitle } = this.state;

    return (
      <div className="row">
        <div className="input-field col s12">
          <input
            placeholder="Insira o subtitulo"
            id="movie_subtitle"
            type="text"
            className="validade"
            value={subtitle}
            onChange={(e) => this.updateMovie('subtitle', e.target.value)}
          />
          <label className="active" htmlFor="movie_subtitle">Subtitulo</label>
        </div>
      </div>
    );
  }

  renderImagePathInput() {
    const { imagePath } = this.state;

    return (
      <div className="row">
        <div className="input-field col s12">
          <input
            placeholder="Insira o caminho da imagem"
            id="movie_image"
            type="text"
            className="validade"
            value={imagePath}
            onChange={(e) => this.updateMovie('imagePath', e.target.value)}
          />
          <label className="active" htmlFor="movie_image">Imagem</label>
        </div>
      </div>
    );
  }

  renderStorylineInput() {
    const { storyline } = this.state;

    return (
      <div className="row">
        <div className="input-field col s12">
          <textarea
            id="movie_storyline"
            className="materialize-textarea"
            value={storyline}
            onChange={(e) => this.updateMovie('storyline', e.target.value)}
          />
          <label className="active" htmlFor="movie_storyline">Sinopse</label>
        </div>
      </div>
    );
  }

  renderGenreSelection() {
    const { genre } = this.state;

    return (
      <div className="row">
        <label htmlFor="movie_genre">Genre Select</label>
        <select
          className="browser-default"
          value={genre}
          onChange={(e) => this.updateMovie('genre', e.target.value)}
        >
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
      </div>
    );
  }

  renderRatingInput() {
    const { rating } = this.state;

    return (
      <div className="row">
        <div className="input-field col s12">
          <input
            placeholder="Dê a avaliação do filme"
            id="movie_rating"
            type="number"
            className="form-control"
            step={0.1}
            min={0}
            max={5}
            value={rating}
            onChange={(e) => this.updateMovie('rating', e.target.value)}
          />
          <label className="active" htmlFor="movie_rating">Avaliação</label>
        </div>
      </div>
    );
  }

  renderSubmitButton() {
    return (
      <div className="row">
        <button
          className="btn waves-effect waves-light"
          type="button"
          onClick={this.handleSubmit}
        >
          Submit
        </button>
      </div>
    );
  }

  render() {
    return (
      <div className="movie-form">
        <div className="row">
          <form className="col s12">
            {this.renderTitleInput()}
            {this.renderSubtitleInput()}
            {this.renderImagePathInput()}
            {this.renderStorylineInput()}
            {this.renderGenreSelection()}
            {this.renderRatingInput()}
            {this.renderSubmitButton()}
          </form>
        </div>
      </div>
    );
  }
}

MovieForm.propTypes = {
  movie: PropTypes.shape({
    genre: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    storyline: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
  }),
  onSubmit: PropTypes.func.isRequired,
};

MovieForm.defaultProps = {
  movie: {
    subtitle: '',
    title: '',
    imagePath: '',
    storyline: '',
    rating: 0,
    genre: '',
  },
};

export default MovieForm;
