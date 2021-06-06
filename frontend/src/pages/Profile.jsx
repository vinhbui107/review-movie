import { LikeOutlined, StarOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Statistic, Tabs } from "antd";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "../style/pages/Profile.scss";
import { getLocalStorage } from "../utils/helpers";

const { TabPane } = Tabs;

function Profile() {
    const [currentUser, setCurrentUser] = useState(getLocalStorage("currentUser"));

    function callback(key) {
        console.log(key);
    }

    return (
        <Container className="user">
            <div className="user__about">
                <div class="user__about__left">
                    <Avatar size={128} icon={<UserOutlined />} src={currentUser.avatar} />
                </div>
                <div class="user__about__right">
                    <div class="user__about__right__username">
                        {currentUser.username} <span>Member since March 2021</span>
                    </div>
                    <div class="user__about__right__rating">
                        <div class="total">
                            <Statistic title="Total Rating" value={23} prefix={<StarOutlined />} />
                        </div>
                        <div class="average">
                            <Statistic title="Average Rating" value={"80%"} prefix={<LikeOutlined />} />
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <div className="user__info">
                <Tabs defaultActiveKey="1">
                    <TabPane tab={<span>Edit Profile</span>} key="1"></TabPane>
                    <TabPane tab={<span>Change Password</span>} key="2"></TabPane>
                    <TabPane tab={<span>Ratings</span>} key="3"></TabPane>
                </Tabs>
            </div>
        </Container>
    );
}

export default Profile;
