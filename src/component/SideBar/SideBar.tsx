import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./SideBar.scss";
import { navData } from "./constants";

function SideBar() {
  const [show, setShow] = useState("");
  const [active, setActive] = useState(0);

  return (
    <div className="Sidebar__wrapper">
      <div className="SideBar__inner">
        <div className="logo">
          <img
            src="https://isofhcare.com/_next/static/logo-brand-new.svg"
            alt=""
          />
        </div>
        <nav className="SideBar__nav">
          {navData.map((data, index1) => (
            <div key={index1} className="SideBar__container">
              <span className="SideBar__position ">{data.position}</span>
              {data.usecase.map((item, index) => (
                <div key={index}>
                  <div
                    className="SideBar__type"
                    onClick={() => {
                      if (show !== `${index1}_${index}`)
                        setShow(`${index1}_${index}`);
                      else setShow("");

                      setActive(0);
                    }}
                  >
                    <span
                      className={show === `${index1}_${index}` ? "active" : ""}
                    >
                      {item.title}
                    </span>
                    {item.details.length !== 0 &&
                      (show !== `${index1}_${index}` ? (
                        <FontAwesomeIcon icon={faAngleDown} />
                      ) : (
                        <FontAwesomeIcon icon={faAngleUp} />
                      ))}
                  </div>
                  {show === `${index1}_${index}` && (
                    <ul className="SideBar__list">
                      {item.details.map((list, index) => (
                        <li
                          key={index}
                          className={active === index ? "active" : ""}
                          onClick={() => setActive(index)}
                        >
                          {list}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default SideBar;
