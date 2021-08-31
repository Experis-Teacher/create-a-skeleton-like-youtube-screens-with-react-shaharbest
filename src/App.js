import "./App.css";
import dummyData from "./data";
import CardList from "./Components/CardList";
import { Component } from "react";
import SkeletonCardList from "./Components/SkeletonCardList";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      loading: false,
      timer: null,
    };
  }

  setVideosState(videos = []) {
    this.setState({ videos });
  }

  setLoadingState(value = false) {
    this.setState({ loading: value });
  }

  componentDidMount() {
    this.setLoadingState(true);
    const timer = setTimeout(() => {
      this.setVideosState(dummyData);
      this.setLoadingState(false);
    }, 5000);
    this.setState({ timer });
  }

  componentWillUnmount() {
    clearTimeout(this.state.timer);
  }

  render() {
    return (
      <div className="App">
        {this.state.videos.length != 0 ? (
          <RealCardList videos={this.state.videos} />
        ) : (
          <ShaharSkeleton />
        )}
        {/* <ShaharSkeleton /> */}
      </div>
    );
  }
}

function ShaharSkeleton() {
  const titles = ["stam1", "stam2"];
  return titles.map((title, index) => {
    return (
      <section key={index}>
        <h2 className="section-title">
          <SkeletonTheme color="gray" highlightColor="black">
            <Skeleton variant="text" width="150px" duration={1.3} />
          </SkeletonTheme>
        </h2>

        <SkeletonCardList />
        <hr />
      </section>
    );
  });
}

function RealCardList({ videos }) {
  return videos.map((list, index) => {
    return (
      <section key={index}>
        <h2 className="section-title">{list.section}</h2>
        <CardList list={list} />
        <hr />
      </section>
    );
  });
}

export default App;
