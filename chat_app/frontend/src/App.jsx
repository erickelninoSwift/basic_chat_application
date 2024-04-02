import "./index.css";
import Menu from "./components/Menu";
function App() {
  return (
    <div className="jackpot">
      <Menu />

      <div className="login-container">
        <div className="left-column"></div>
        <div className="branding">
          <img src="./images/logo.png" />
          <h1>Login - Chat Application</h1>
        </div>
        <div className="login-form">
          <form method="post" action="/">
            <input
              type="text"
              name="username"
              placeholder="enter mobile or email"
              value=""
            />
            <p class="error show">Error message here</p>
            <input
              type="password"
              name="password"
              placeholder="enter password"
            />
            <input type="submit" value="Login" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
