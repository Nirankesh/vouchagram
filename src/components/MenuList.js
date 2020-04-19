import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMenu } from "../actions/menuActions";
import { Helmet } from "react-helmet";

class MenuList extends Component {
  constructor() {
    super();

    this.state = {
      minHeight: "500px",
    };
  }

  componentDidMount() {
    this.props.fetchMenu();
  }

  head() {
    return (
      <Helmet bodyAttributes={{ class: "menuPage" }}>
        <title>{`Menu List`}</title>
      </Helmet>
    );
  }

  render() {
    return (
      <div
        className="ftco-section"
        style={{
          minHeight: this.state.minHeight,
        }}
      >
        {this.head()}
        <h1>Menu List</h1>
        {this.props.menu ? (
          <nav>
            <div className="container px-0 desktopNav bg-white">
              <ul className="border-bottom d-none d-lg-block">
                {this.props.menu.map((item, i) => {
                  const brands_slug_arr = item.brands_slug.split(",");
                  return (
                    <li className="dropdown spriteMenu" key={i}>
                      <a href={`/hdfcsmartbuy/category/` + item.slug}>
                        <figure>
                          <img src={item.icon_url} alt={item.name} />
                          <figcaption>{item.name}</figcaption>
                        </figure>
                      </a>
                      <div
                        className="dropdown-menu"
                        aria-labelledby={item.name + `-Dropdown`}
                      >
                        {item.brands_name.split(",").map((brand, index) => {
                          return (
                            <a
                              className="dropdown-item"
                              href={`/hdfcsmartbuy/` + brands_slug_arr[index]}
                              key={index}
                            >
                              {brand}
                            </a>
                          );
                        })}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </nav>
        ) : (
          <div>Menu Not Found</div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  menu: state.menu.items,
});

MenuList = connect(mapStateToProps, { fetchMenu })(MenuList);

export default {
  component: MenuList,
};
