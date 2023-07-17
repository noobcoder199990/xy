import Head from "next/head";
import { useState, useEffect, useRef } from "react";
import styles from "../styles/Home.module.css";
import "bootstrap/dist/css/bootstrap.css";

import SearchIcon from "@mui/icons-material/Search";
export default function SignUp() {
  const [bool, setBool] = useState(false);
  let obj = {
    Product1: 1,
    product2: 2,
    product3: 3,
  };

  const inputElement = useRef();
  const subCategory = useRef();
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  });
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        style={{ border: "2px solid", height: "12vh", width: "100vw" }}
      ></div>
      <div
        className="mains"
        style={{
          border: "2px solid black",
          height: "calc(100vh - 24vh)",
          width: "100vw",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          className="ProductDiv"
          style={{
            border: "2px solid blue",
            height: "100%",
            width: "40vw",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <div
            className="SearchDiv"
            style={{
              border: "2px solid yellow",
              height: "10%",
              width: "95%",
              marginLeft: "10px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              style={{ width: "100%", display: "flex" }}
              onClick={(e) => {
                inputElement.current.focus();
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <SearchIcon></SearchIcon>
              </div>

              <input
                ref={inputElement}
                type="email"
                placeholder={"Search"}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                style={{ border: "none" }}
              />
            </div>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              border: "2px solid yellow",
              marginLeft: "10px",
            }}
          >
            {Object.keys(obj).map((key) => (
              <div
                key={key}
                style={{ display: "flex", flexDirection: "column" }}
              >
                <div
                  className="MajorProduct"
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <div className="mb-3 form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                    <label className="form-check-label" for="exampleCheck1">
                      {key}
                    </label>
                  </div>
                </div>
                <div ref={subCategory}>
                  {subCategory.current.checked}
                  <ul>
                    <div
                      className="subcategory"
                      style={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                      }}
                    >
                      <div className="mb-3 form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="exampleCheck1"
                        />
                        <label className="form-check-label" for="exampleCheck1">
                          {obj[key]}
                        </label>
                      </div>
                    </div>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          style={{
            border: "2px solid black",
            boxSizing: "border-box",
            height: "12vh",
            width: "60vw",
          }}
        ></div>
      </div>
      npm install @mui/icons-material
      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer>
      <style jsx>{`
        // main {
        //   padding: 5rem 0;
        //   flex: 1;
        //   display: flex;
        //   justify-content: flex-start;
        //   align-items: center;
        // }
        .form-control:focus {
          border-color: inherit;
          -webkit-box-shadow: none;
          box-shadow: none;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
