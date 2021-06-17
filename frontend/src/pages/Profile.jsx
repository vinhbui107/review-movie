import { LikeOutlined, StarOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Statistic, Tabs } from "antd";
import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

import "../style/pages/Profile.scss";
import ProfileBackground from "../assets/img/profile-background.svg";
import ProfileSetting from "../components/ProfileSetting";
import ProfileChangePassword from "../components/ProfileChangePassword";

const { TabPane } = Tabs;

function Profile() {
    const [user, setUser] = useState([]);

    useEffect(() => {}, []);

    return (
        <div className="user">
            <div
                className="user__about"
                style={{
                    backgroundImage: `url(${ProfileBackground}), radial-gradient(at 30% top, #073d3f 0%, rgba(3,37,65,1) 70%)`,
                }}
            >
                <Container className="user__about--container">
                    <div class="user__about--container__left">
                        <Avatar size={128} icon={<UserOutlined />} src="" />
                    </div>
                    <div class="user__about--container__right">
                        <div class="user__about--container__right__username">
                            {"vinhbui107"} <span>Member since March 2021</span>
                        </div>
                        <div class="user__about--container__right__rating">
                            <div class="total">
                                <Statistic title="Total Rating" value={23} prefix={<StarOutlined />} />
                            </div>
                            <div class="average">
                                <Statistic title="Average Rating" value={"80%"} prefix={<LikeOutlined />} />
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <Container className="user__info">
                <Tabs defaultActiveKey="1">
                    <TabPane tab={<span>Ratings</span>} key="1"></TabPane>
                    <TabPane tab={<span>Reviews</span>} key="2"></TabPane>
                    <TabPane tab={<span>Edit Profile</span>} key="3">
                        <ProfileSetting />
                    </TabPane>
                    <TabPane tab={<span>Change Password</span>} key="4">
                        <ProfileChangePassword />
                    </TabPane>
                </Tabs>
            </Container>
        </div>
    );
}

export default Profile;
