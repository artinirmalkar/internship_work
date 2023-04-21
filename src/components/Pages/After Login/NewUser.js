import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const NewUser = () => {
  const notify = () => toast("You don't have any plan");

  return (
    <div>
      <div className="main" style={{ margin: " 1rem 2rem" }}>
        <div
          className="title"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <h4>Create Users</h4>
          <div>
            <button onClick={notify}>ADD USER+</button>
            <ToastContainer />
          </div>
        </div>
        <hr />
        <form style={{ display: "flex", flexWrap: "wrap" }}>
          <table>
            <tr>
              <th style={{ width: "20vw" }}>
                <label htmlFor="Name">Name</label> <br />
                <input
                  type="text"
                  placeholder="Enter Name"
                  required
                  style={{
                    flexBasis: "28vw",
                    marginRight: "2rem",
                    marginBlock: "1rem",
                    border: "none",
                    paddingBlock: "5px",
                    backgroundColor: "rgb(234, 234, 234)"
                  }}
                />
              </th>

              <th style={{ width: "20vw" }}>
                <label htmlFor="E-mail">E-mail</label> <br />{" "}
                <input
                  type="email"
                  placeholder="Enter Email"
                  required
                  style={{
                    flexBasis: "28vw",
                    marginRight: "2rem",
                    border: "none",
                    paddingBlock: "5px",
                    backgroundColor: "rgb(234, 234, 234)"
                  }}
                />
              </th>
              <th style={{ width: "20vw" }}>
                <label htmlFor="Password">Password</label> <br />
                <input
                  type="password"
                  placeholder="Enter Password"
                  required
                  style={{
                    flexBasis: "28vw",
                    marginRight: "2rem",
                    border: "none",
                    paddingBlock: "5px",
                    backgroundColor: "rgb(234, 234, 234)"
                  }}
                />
              </th>
              <th style={{ width: "20vw" }} />
              <th style={{ width: "20vw" }}>
                <button
                  onclick={notify}
                  style={{
                    backgroundColor: "rgb(234, 234, 234)",
                    color: "black"
                  }}
                >
                  ADD+
                </button>
              </th>
              <th style={{ width: "20vw" }}>
                <button
                  style={{
                    color: "red",
                    backgroundColor: "rgb(234, 234, 234)"
                  }}
                >
                  REMOVE
                </button>
              </th>
            </tr>
            <tr>
              <th />
              <th />
              <th>
                {" "}{" "}
                <button style={{ justifyContent: "center" }}>
                  SUBMIT EMPLOYERS
                </button>
              </th>
            </tr>
          </table>
        </form>
      </div>
    </div>
  );
};

export default NewUser;
