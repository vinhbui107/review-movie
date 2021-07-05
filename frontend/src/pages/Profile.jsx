import { LikeOutlined, StarOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Statistic, Tabs } from "antd";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";

import { ProfileSetting, ProfileRatingList, ProfileChangePassword } from "../components";
import { UserService } from "../services";
import { displayMemberSince } from "../utils/helpers";

import ProfileBackground from "../assets/img/profile-background.svg";
import "../style/pages/Profile.scss";

const { TabPane } = Tabs;

function Profile() {
    const [userData, setUserData] = useState(null);
    const { username } = useParams();

    async function _fetchData() {
        try {
            const response = await UserService.getUserData(username);
            setUserData(response);
        } catch (error) {}
    }

    useEffect(() => {
        _fetchData();
    }, []);

    return (
        <div className="user">
            {userData && (
                <>
                    <div
                        className="user__about"
                        style={{
                            backgroundImage: `url(${ProfileBackground}), radial-gradient(at 30% top, #073d3f 0%, rgba(3,37,65,1) 70%)`,
                        }}
                    >
                        <Container className="user__about--container">
                            <div className="user__about--container__left">
                                <Avatar size={128} icon={<UserOutlined />} src={userData.avatar} />
                            </div>
                            <div className="user__about--container__right">
                                <div className="user__about--container__right__username">
                                    {userData.username} <span>{displayMemberSince(userData.date_joined)}</span>
                                </div>
                                <div className="user__about--container__right__rating">
                                    <div className="total">
                                        <Statistic
                                            title="Total Rating"
                                            value={userData.ratings_count}
                                            prefix={<StarOutlined />}
                                        />
                                    </div>
                                    <div className="average">
                                        <Statistic
                                            title="Average Rating"
                                            value={`${userData.ratings_average ? userData.ratings_average * 20 : 0}%`}
                                            prefix={<LikeOutlined />}
                                        />
                                    </div>
                                </div>
                            </div>
                        </Container>
                    </div>
                    <Container className="user__info">
                        <Tabs defaultActiveKey="1">
                            <TabPane tab={<span>Ratings</span>} key="1">
                                <ProfileRatingList key="1" is_setting={userData.is_setting} />
                            </TabPane>
                            {userData.is_setting && (
                                <>
                                    <TabPane tab={<span>Edit Profile</span>} key="3">
                                        <ProfileSetting />
                                    </TabPane>
                                    <TabPane tab={<span>Change Password</span>} key="4">
                                        <ProfileChangePassword />
                                    </TabPane>
                                </>
                            )}
                        </Tabs>
                    </Container>
                </>
            )}
        </div>
    );
}

export default Profile;
