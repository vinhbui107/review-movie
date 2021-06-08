import { LikeOutlined, StarOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Statistic, Tabs } from "antd";
import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import ChangePasswordForm from "../components/ChangePassword";
import ProfileForm from "../components/ProfileForm";
import "../style/pages/Profile.scss";
import ProfileBackground from "../assets/img/profile-background.svg";

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
                    <TabPane tab={<span>Edit Profile</span>} key="1">
                        <ProfileForm />
                    </TabPane>
                    <TabPane tab={<span>Change Password</span>} key="2">
                        <ChangePasswordForm />
                    </TabPane>
                    <TabPane tab={<span>Ratings</span>} key="3"></TabPane>
                    <TabPane tab={<span>Reviews</span>} key="4"></TabPane>
                </Tabs>
            </Container>
        </div>
    );
}

export default Profile;
