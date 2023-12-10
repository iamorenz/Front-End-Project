const App = () => {
  const getMessage = async () => {
    const options = {
      method: "POST",
      body: JSON.stringify({
        message: "Hello",
      }), 
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await fetch(
        "http://localhost:8000/completions",
        options
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="app">
      <section className="side-bar">
        <button>+ New chat</button>
        <ul className="history">
          <nav>
            <p>Made by Ozzz</p>
          </nav>
        </ul>
      </section>
      <section className="main">
        <h1>MyGPT</h1>
        <ul className="feed"></ul>
        <div className="bottom-section">
          <div className="input-container">
            <input />
            <div id="submit" onClick={getMessage}>
              →
            </div>
          </div>
          <p className="info">chat gpt</p>
        </div>
      </section>
    </div>
  );
};

export default App;
