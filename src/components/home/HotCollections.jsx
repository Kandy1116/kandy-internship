import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const HotCollections = () => {
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCollections();
  }, []);

  async function fetchCollections() {
    try {
      const { data } = await axios.get(
        "https://us-central1-nft-cloud-functions.cloudfunctions.net/hotCollections"
      );
      setCollections(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }

  return (
    <section id="section-collections" className="no-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>Hot Collections</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          {loading
            ? new Array(4).fill(0).map((_, index) => (
                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" key={index}>
                  <div className="nft_coll">
                    <div className="nft_wrap">
                      <div className="lazy img-fluid" style={{ width: "100%", height: "200px", backgroundColor: "#ccc" }}></div>
                    </div>
                    <div className="nft_coll_pp">
                      <div className="lazy pp-coll" style={{ width: "50px", height: "50px", borderRadius: "50%", backgroundColor: "#ccc" }}></div>
                    </div>
                    <div className="nft_coll_info">
                      <div style={{ width: "100px", height: "20px", backgroundColor: "#ccc", margin: "0 auto" }}></div>
                    </div>
                  </div>
                </div>
              ))
            : collections.map((collection) => (
                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" key={collection.id}>
                  <div className="nft_coll">
                    <div className="nft_wrap">
                      <Link to="/item-details">
                        <img src={collection.nftImage} className="lazy img-fluid" alt="" />
                      </Link>
                    </div>
                    <div className="nft_coll_pp">
                      <Link to="/author">
                        <img className="lazy pp-coll" src={collection.authorImage} alt="" />
                      </Link>
                      <i className="fa fa-check"></i>
                    </div>
                    <div className="nft_coll_info">
                      <Link to="/explore">
                        <h4>{collection.title}</h4>
                      </Link>
                      <span>ERC-{collection.code}</span>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
};

export default HotCollections;
