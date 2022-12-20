/// Menu
import MetisMenu from "metismenujs";
import React, { Component } from "react";
/// Scroll
import PerfectScrollbar from "react-perfect-scrollbar";
/// Link
import { Link } from "react-router-dom";

class MM extends Component {
  componentDidMount() {
    this.$el = this.el;
    this.mm = new MetisMenu(this.$el);
  }
  componentWillUnmount() {
  }
  render() {
    return (
      <div className="mm-wrapper">
        <ul className="metismenu" ref={(el) => (this.el = el)}>
          {this.props.children}
        </ul>
      </div>
    );
  }
}

class SideBar extends Component {
  /// Open menu
  componentDidMount() {
    // sidebar open/close
    var btn = document.querySelector(".nav-control");
    var aaa = document.querySelector("#main-wrapper");
    function toggleFunc() {
      return aaa.classList.toggle("menu-toggle");
    }
    btn.addEventListener("click", toggleFunc);
  }
  state = {
    loveEmoji: false,
  };
  render() {
    /// Path
    let path = window.location.pathname;
    path = path.split("/");
    path = path[path.length - 1];

    /// Active menu
    let profile = [
      "profile",
      "companies",
      "statistics",
    ],
    dashBoard = [
      "",
      "search-job",
      "appication",
      "task"
    ],
      app = [
        "app-profile",
        "app-calender",
        "ecom-product-grid",
        "ecom-product-list",
        "post-details",
        "ecom-product-detail",
      ],
      email = ["email-compose", "email-inbox", "email-read"],
      shop = [
        "ecom-product-order",
        "ecom-checkout",
        "ecom-invoice",
        "ecom-customers",
      ];

    return (
      <div className="deznav">
        <PerfectScrollbar className="deznav-scroll">
          <MM className="metismenu" id="menu">
            <li className={`${profile.includes(path) ? "mm-active" : ""}`}>
              <Link className="has-arrow ai-icon" to="#" >
                <i className="flaticon-381-user-4"></i>
                <span className="nav-text">Profile</span>
              </Link>
              <ul>
                <li>
                  <Link className={`${path === "profile" ? "mm-active" : ""}`} onClick={() => this.props.onClick()} to="/profile">Profile</Link>
                </li>
                <li>
                  <Link className={`${path === "companies" ? "mm-active" : ""}`} onClick={() => this.props.onClick()} to="/companies">Companies</Link>
                </li>
                <li>
                  <Link className={`${path === "statistics" ? "mm-active" : ""}`} onClick={() => this.props.onClick()} to="/statistics">Statistics</Link>
                </li>
              </ul>
            </li>
            <li className={`${dashBoard.includes(path) ? "mm-active" : ""}`}>
              <Link className="has-arrow ai-icon" to="#" >
                <i className="flaticon-381-networking"></i>
                <span className="nav-text">Dashboard</span>
              </Link>
              <ul >
                <li>
                  <Link className={`${path === "" ? "mm-active" : ""}`} to="/" onClick={() => this.props.onClick3()}>Dashboard</Link>
                </li>
                <li>
                  <Link className={`${path === "search-job" ? "mm-active" : ""}`} onClick={() => this.props.onClick()} to="/search-job">Search Job</Link>
                </li>
                <li>
                  <Link className={`${path === "application" ? "mm-active" : ""}`} onClick={() => this.props.onClick()} to="/application">Application</Link>
                </li>
                <li>
                  <Link className={`${path === "task" ? "mm-active" : ""}`} onClick={() => this.props.onClick()} to="/task">Task</Link>
                </li>
              </ul>
            </li>
            <li className={`${app.includes(path) ? "mm-active" : ""}`}>
              <Link className="has-arrow ai-icon" to="#" >
                <i className="flaticon-381-television"></i>
                <span className="nav-text">Apps</span>
              </Link>
              <ul >
                <li>
                  <Link className={`${path === "app-profile" ? "mm-active" : ""}`} onClick={() => this.props.onClick()} to="/app-profile">Profile</Link>
                </li>
                <li>
                  <Link className={`${path === "post-details" ? "mm-active" : ""}`} onClick={() => this.props.onClick()} to="/post-details">Post Details</Link>
                </li>
                <li>
                  <Link
                    className={`${path === "app-calender" ? "mm-active" : ""}`}
                    onClick={() => this.props.onClick()}
                    to="/app-calender"
                  >
                    Calendar
                  </Link>
                </li>
                <li className={`${shop.includes(path) ? "mm-active" : ""}`}>
                  <Link className="has-arrow" to="#" >
                    Shop
                  </Link>
                  <ul >
                  <li>
                    <Link className={`${path === "ecom-product-grid" ? "mm-active" : ""}`} onClick={() => this.props.onClick()} to="/ecom-product-grid">Product Grid</Link>
                  </li>
                  <li>
                    <Link className={`${path === "ecom-product-list" ? "mm-active" : ""}`} onClick={() => this.props.onClick()} to="/ecom-product-list">Product List</Link>
                  </li>
                  <li>
                    <Link
                      className={`${path === "ecom-product-detail" ? "mm-active" : ""}`}
                      onClick={() => this.props.onClick()}
                      to="/ecom-product-detail"
                    >
                      Product Detail
                    </Link>
                  </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className={`${email.includes(path) ? "mm-active" : ""}`}>
              <Link className="has-arrow ai-icon" to="#" >
                <i className="flaticon-381-user-9"></i>
                <span className="nav-text">Email</span>
              </Link>
              <ul
                className={`${email.includes(path) ? "mm-show" : ""}`}
              >
                <li>
                  <Link
                    className={`${path === "email-inbox" ? "mm-active" : ""
                      }`}
                    to="/email-inbox"
                    onClick={() => this.props.onClick()}
                  >
                    Inbox
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${path === "email-compose" ? "mm-active" : ""
                      }`}
                    to="/email-compose"
                    onClick={() => this.props.onClick()}
                  >
                    Compose
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${path === "email-read" ? "mm-active" : ""
                      }`}
                    to="/email-read"
                    onClick={() => this.props.onClick()}
                  >
                    Read
                  </Link>
                </li>
              </ul>
            </li>
            <li className={`${shop.includes(path) ? "mm-active" : ""}`}>
              <Link className="has-arrow ai-icon" to="#" >
                <i className="flaticon-381-star-1"></i>
                <span className="nav-text">Invoice</span>
              </Link>
              <ul
                className={`${shop.includes(path) ? "mm-show" : ""}`}
              >
                <li>
                  <Link
                    className={`${path === "ecom-invoice" ? "mm-active" : ""
                      }`}
                    to="/ecom-invoice"
                    onClick={() => this.props.onClick()}
                  >
                    Invoice
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${path === "ecom-product-order" ? "mm-active" : ""
                      }`}
                    to="/ecom-product-order"
                    onClick={() => this.props.onClick()}
                  >
                    Order
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${path === "ecom-checkout" ? "mm-active" : ""
                      }`}
                    to="/ecom-checkout"
                    onClick={() => this.props.onClick()}
                  >
                    Checkout
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${path === "ecom-customers" ? "mm-active" : ""
                      }`}
                    to="/ecom-customers"
                    onClick={() => this.props.onClick()}
                  >
                    Customers
                  </Link>
                </li>
              </ul>
            </li>
          </MM>
          <div className="copyright">
            <p>
              <strong>User name Dashboard</strong>
            </p>
            <p>
              Copyright © 2019 to 2022 Canada Freelancer Ltd.
            </p>
          </div>
        </PerfectScrollbar>
      </div>
    );
  }
}

export default SideBar;
