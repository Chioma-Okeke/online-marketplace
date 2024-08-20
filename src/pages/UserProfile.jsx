import PersonalPageLayout from '../components/shared/Layouts/PersonalPageLayout';
import MainPage from '../components/UserListings/MainPage';

function UserProfile() {
    return (
        <div>
            <PersonalPageLayout pageName={"User Profile"}>
                <MainPage pageName={"User Profile"} />
            </PersonalPageLayout>
        </div>
    );
}

export default UserProfile