import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectSubreddit, fetchPostsIfNeeded, refreshSubreddit } from './actions';
import Posts from './components/Posts';
import Selector from './components/Selector';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentDidMount() {
    const { dispatch, selectedSubreddit } = this.props;
    dispatch(fetchPostsIfNeeded(selectedSubreddit));
  }

  componentDidUpdate(prevProps) {
    const { props } = this;

    if (prevProps.selectedSubreddit !== props.selectedSubreddit) {
      const { dispatch, selectedSubreddit } = props;
      dispatch(fetchPostsIfNeeded(selectedSubreddit));
    }
  }

  selectSubreddit(nextSubreddit) {
    const { dispatch } = this.props;
    dispatch(selectSubreddit(nextSubreddit));
  }

  handleRefreshClick(e) {
    e.preventDefault();

    const { dispatch, selectedSubreddit } = this.props;
    dispatch(refreshSubreddit(selectedSubreddit));
    dispatch(fetchPostsIfNeeded(selectedSubreddit));
  }

  renderLastUpdatedAd() {
    const { lastUpdated } = this.props;

    return (
      <span>
        {`Last updated at ${new Date(lastUpdated).toLocaleTimeString()}`}
      </span>
    );
  }

  renderRefreshButton() {
    const { isFetching } = this.props;

    return (
      <button
        type="button"
        onClick={(e) => this.handleRefreshClick(e)}
        disabled={isFetching}
      >
        Refresh
      </button>
    );
  }

  render() {
    const {
      availableSubreddits,
      selectedSubreddit,
      posts = [],
      isFetching,
      lastUpdated,
    } = this.props;

    const isEmpty = posts.length === 0;
    
    return (
      <div>
        <Selector
          value={selectedSubreddit}
          onChange={(nextSubreddit) => this.selectSubreddit(nextSubreddit)}
          options={availableSubreddits}
        />
        <div>
          {lastUpdated && this.renderLastUpdatedAd()}
          {this.renderRefreshButton()}
        </div>
        {isFetching && <h2>Loading...</h2>}
        {!isFetching && isEmpty && <h2>Empty.</h2>}
        {!isFetching && !isEmpty && <Posts posts={posts} />}

        <hr />

        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Esse é um projeto para o conteúdo sobre redux-thunk.
            </p>
            <p>
              <p>- exercise-redux-thunk/-</p>
              Crie um fork desse projeto e para isso siga esse tutorial de como realizar um fork.
              Após feito o fork, clone o repositório criado para o seu computador.
            </p>
            <p>Bônus</p>
          </header>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { selectedSubreddit, postsBySubreddit } = state;
  const {
    isFetching,
    lastUpdated,
    items: posts,
  } = postsBySubreddit[selectedSubreddit];

  return {
    selectedSubreddit,
    posts,
    isFetching,
    lastUpdated,
    availableSubreddits: Object.keys(postsBySubreddit),
  };
};

App.propTypes = {
  availableSubreddits: PropTypes.arrayOf(
    PropTypes.string.isRequired
  ).isRequired,
  dispatch: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number,
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })),
  selectedSubreddit: PropTypes.string.isRequired,
}

App.defaultProps = {
  lastUpdated: null,
  posts: [],
};

export default connect(mapStateToProps)(App);
