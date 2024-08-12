// import React from "react";
import PersonalPageLayout from "../components/shared/Layouts/PersonalPageLayout";
import MainPage from "../components/UserListings/MainPage";

function Favorites() {
    return (
        <div>
            <PersonalPageLayout pageName={"Favorites"}>
                <MainPage pageName={"Favorites"} />
            </PersonalPageLayout>
        </div>
    );
}

export default Favorites;
