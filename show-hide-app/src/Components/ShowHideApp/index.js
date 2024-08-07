import React, { Component } from "react";
import styles from "./index.module.css";

class ShowHideApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showFirstName: false,
      showLastName: false,
    };
  }

  handleShowHideFirstName = () => {
    this.setState((prevState) => ({
      showFirstName: !prevState.showFirstName,
    }));
  };

  handleShowHideLastName = () => {
    this.setState((prevState) => ({
      showLastName: !prevState.showLastName,
    }));
  };

  render() {
    const { showFirstName, showLastName } = this.state;
    return (
      <div className={styles.mainContainer}>
        <div className={styles.showHideWrapper}>
          <h1>Show / Hide</h1>
          <div className={styles.bottomWrapper}>
            <div className={styles.firstContainer}>
              <button onClick={this.handleShowHideFirstName}>
                Show/Hide Firstname
              </button>
              <button onClick={this.handleShowHideLastName}>
                Show/Hide Lastname
              </button>
            </div>
            <div className={styles.secondContainer}>
              {showFirstName && <div>Hari</div>}

              {showLastName && <div>Gadi</div>}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShowHideApp;
