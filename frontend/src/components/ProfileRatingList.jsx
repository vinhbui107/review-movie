import { Empty } from "antd";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { notification } from "antd";

import { RatingService, UserService } from "../services";
import { ProfileRatingCard } from "../components";

import "../style/components/ProfileRatingList.scss";
import { Messages } from "../utils/messages";

function ProfileRatingList({ ratingsCount, is_setting }) {
    const [ratings, setRatings] = useState(null);
    const { username } = useParams();

    async function _fetchData() {
        try {
            const response = await UserService.getUserRatings(username);
            setRatings(response.results);
        } catch (error) {}
    }

    useEffect(() => {
        _fetchData();
    }, []);

    const handleDeleteRating = async (ratingId) => {
        try {
            await RatingService.deleteComment(ratingId);
            await _fetchData();

            notification["success"]({
                message: Messages.deleteRatingSuccess,
            });
        } catch (error) {
            notification["error"]({
                message: Messages.apiErrorMes,
                description: Messages.apiErrorDes,
            });
        }
    };

    return (
        <Container>
            {ratings && ratings.length > 0 ? (
                ratings?.map((rating, index) => {
                    return (
                        <ProfileRatingCard
                            rating={rating}
                            key={index}
                            is_setting={is_setting}
                            deleteRating={handleDeleteRating}
                        />
                    );
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
