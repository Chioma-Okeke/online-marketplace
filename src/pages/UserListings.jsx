import PersonalPageLayout from "../components/shared/Layouts/PersonalPageLayout";
import MainPage from "../components/UserListings/MainPage";

function UserListings() {
    return (
        <div>
            <PersonalPageLayout pageName={"Selling"}>
                <MainPage pageName={"Selling"}/>
            </PersonalPageLayout>
        </div>
    );
}

export default UserListings;
