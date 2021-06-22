import { Empty } from "antd";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import userApi from "../services/user";
import "../style/components/ProfileRatingList.scss";
import ProfileRatingCard from "./ProfileRatingCard";

function ProfileRatingList({ ratingsCount, is_setting }) {
    const [ratings, setRatings] = useState(null);
    const { username } = useParams();

    async function _fetchData() {
        try {
            const response = await userApi.getUserRatings(username);
            setRatings(response.data);
        } catch (error) {}
    }

    useEffect(() => {
        _fetchData();
    }, []);

    return (
        <Container>
            {ratings && ratings.length > 0 ? (
                ratings?.map((rating, index) => {
                    return <ProfileRatingCard rating={rating} key={index} is_setting={is_setting} />;
                })
            ) : (
                <div style={{ marginTop: "10%" }}>
                    <Empty
                        imageStyle={{
                            height: 160,
                        }}
                        description={<span>{username} doesn't have any ratings.</span>}
                    />
                </div>
            )}
        </Container>
    );
}

export default ProfileRatingList;
