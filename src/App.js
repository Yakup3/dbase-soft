import "./App.css";
import Topbar from "./components/Topbar/Topbar";

function App() {
  const renderTopdiv = () => {
    return (
      <div className="topdiv">
        <div className="topdiv-top">
          <div className="topdiv-top-left" />
          <div className="topdiv-top-right" />
        </div>
        <div className="topdiv-bottom">
          {[...Array(5)].map((_, index) => {
            return <div key={index} className="topdiv-bottom-item" />;
          })}
        </div>
      </div>
    );
  };

  const renderSports = () => {
    return (
      <div className="sports">
        <div className="sports-top">
          <div className="sports-top-left">
            {[
              "SPORTS",
              "LIVE MATCHES",
              "BETSLIPS",
              "POPULAR LEAGUES",
              "BETS TODAY",
              "CUSTOM ANOTHER LINK",
            ].map((_, index) => {
              return (
                <div key={index} className="sports-top-left-item">
                  {_}
                </div>
              );
            })}
          </div>
          <div className="sports-top-right">
            <div className="scroll-icon">{"<"}</div>
            <div className="scroll-icon">{">"}</div>
          </div>
        </div>
        <div className="sports-bottom">
          {[...Array(12)].map((_, index) => {
            return <div key={index} className="sports-bottom-item" />;
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="App">
      <Topbar />
      {renderTopdiv()}
      {renderSports()}
    </div>
  );
}

export default App;
