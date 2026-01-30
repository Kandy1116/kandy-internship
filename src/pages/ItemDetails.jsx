import React, { useEffect, useState } from "react";
import EthImage from "../images/ethereum.svg";
import { Link, useParams } from "react-router-dom";
import axios from "../api/axios";

const ItemDetails = () => {
  const { nftId } = useParams();
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchItemDetails();
  }, [nftId]);

  async function fetchItemDetails() {
    try {
      setLoading(true);
      const [response] = await Promise.all([
        axios.get(`/itemDetails?nftId=${nftId}`),
        new Promise((resolve) => setTimeout(resolve, 3000)),
      ]);
      setItem(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }

  return (
    <div id="wrapper">
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>
        <section aria-label="section" className="mt90 sm-mt-0">
          <div className="container">
            <div className="row">
              {loading ? (
                <>
                  <div className="col-md-6 text-center">
                    <div
                      className="skeleton-box"
                      style={{
                        width: "100%",
                        height: "100%",
                        minHeight: "500px",
                      }}
                    ></div>
                  </div>
                  <div className="col-md-6">
                    <div className="item_info">
                      <div
                        className="skeleton-box"
                        style={{
                          width: "300px",
                          height: "40px",
                          marginBottom: "20px",
                        }}
                      ></div>

                      <div className="item_info_counts">
                        <div
                          className="skeleton-box"
                          style={{
                            width: "80px",
                            height: "30px",
                            display: "inline-block",
                            marginRight: "10px",
                          }}
                        ></div>
                        <div
                          className="skeleton-box"
                          style={{
                            width: "80px",
                            height: "30px",
                            display: "inline-block",
                          }}
                        ></div>
                      </div>
                      <div
                        className="skeleton-box"
                        style={{
                          width: "100%",
                          height: "80px",
                          marginTop: "20px",
                          marginBottom: "20px",
                        }}
                      ></div>
                      <div className="d-flex flex-row">
                        <div className="mr40">
                          <h6>Owner</h6>
                          <div className="item_author">
                            <div className="author_list_pp">
                              <div
                                className="skeleton-box"
                                style={{
                                  width: "50px",
                                  height: "50px",
                                  borderRadius: "50%",
                                }}
                              ></div>
                            </div>
                            <div className="author_list_info">
                              <div
                                className="skeleton-box"
                                style={{
                                  width: "100px",
                                  height: "20px",
                                  marginTop: "15px",
                                }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="de_tab tab_simple">
                        <div className="de_tab_content">
                          <h6>Creator</h6>
                          <div className="item_author">
                            <div className="author_list_pp">
                              <div
                                className="skeleton-box"
                                style={{
                                  width: "50px",
                                  height: "50px",
                                  borderRadius: "50%",
                                }}
                              ></div>
                            </div>
                            <div className="author_list_info">
                              <div
                                className="skeleton-box"
                                style={{
                                  width: "100px",
                                  height: "20px",
                                  marginTop: "15px",
                                }}
                              ></div>
                            </div>
                          </div>
                        </div>
                        <div className="spacer-40"></div>
                        <h6>Price</h6>
                        <div className="nft-item-price">
                          <div
                            className="skeleton-box"
                            style={{ width: "100px", height: "30px" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="col-md-6 text-center">
                    <img
                      src={item.nftImage}
                      className="img-fluid img-rounded mb-sm-30 nft-image"
                      alt=""
                    />
                  </div>
                  <div className="col-md-6">
                    <div className="item_info">
                      <h2>{item.title}</h2>

                      <div className="item_info_counts">
                        <div className="item_info_views">
                          <i className="fa fa-eye"></i>
                          {item.views}
                        </div>
                        <div className="item_info_like">
                          <i className="fa fa-heart"></i>
                          {item.likes}
                        </div>
                      </div>
                      <p>{item.description}</p>
                      <div className="d-flex flex-row">
                        <div className="mr40">
                          <h6>Owner</h6>
                          <div className="item_author">
                            <div className="author_list_pp">
                              <Link to={`/author/${item.ownerId}`}>
                                <img
                                  className="lazy"
                                  src={item.ownerImage}
                                  alt=""
                                />
                                <i className="fa fa-check"></i>
                              </Link>
                            </div>
                            <div className="author_list_info">
                              <Link to={`/author/${item.ownerId}`}>
                                {item.ownerName}
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div></div>
                      </div>
                      <div className="de_tab tab_simple">
                        <div className="de_tab_content">
                          <h6>Creator</h6>
                          <div className="item_author">
                            <div className="author_list_pp">
                              <Link to={`/author/${item.creatorId}`}>
                                <img
                                  className="lazy"
                                  src={item.creatorImage}
                                  alt=""
                                />
                                <i className="fa fa-check"></i>
                              </Link>
                            </div>
                            <div className="author_list_info">
                              <Link to={`/author/${item.creatorId}`}>
                                {item.creatorName}
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="spacer-40"></div>
                        <h6>Price</h6>
                        <div className="nft-item-price">
                          <img src={EthImage} alt="" />
                          <span>{item.price}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ItemDetails;
