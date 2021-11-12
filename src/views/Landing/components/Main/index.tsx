import React from "react";
import { Link } from "@material-ui/core";
import "./main.scss";
import CatImg from "../../../../assets/icons/Chershire_Cat.png";
import IslandImg from "../../../../assets/icons/Island.png";
import { filter } from "lodash";

function Main() {
    return (
        <div className="landing-main">
            <div className="landing-main-img-wrap">
                <img src={IslandImg} alt="" style={{ filter: "invert(1)" }} />
            </div>
            <div className="landing-main-btns-wrap">
                <div className="landing-main-btn">
                    <p>Enter App (Coming Soon)</p>
                </div>
                <Link href="https://wonderland.gitbook.io/wonderland/" target="_blank" rel="noreferrer">
                    <div className="landing-main-btn">
                        <p>Documentation (Coming Soon)</p>
                    </div>
                </Link>
            </div>
            <div className="landing-main-title-wrap">
                <p>The Island</p>
                <p>DAO</p>
            </div>
            <div className="landing-main-help-text-wrap">
                <p>Financial tools to grow your wealth - stake</p>
                <p>and earn compounding interest</p>
            </div>
        </div>
    );
}

export default Main;
